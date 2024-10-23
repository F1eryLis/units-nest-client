import React, { useEffect, useState } from 'react';
import { Modal, ModalDialog, ModalClose, Sheet, Button, FormControl, Option, FormLabel, Input, AccordionGroup, accordionDetailsClasses, accordionSummaryClasses, Accordion, AccordionSummary, Avatar, ListItemContent, Typography, AccordionDetails, List, ListItem, ListSubheader, ListItemButton, Stack, Select, Checkbox, Box, FormHelperText, Grid, Tooltip, Divider, Chip, IconButton, ListDivider } from '@mui/joy';
import { CallToAction, Create, Delete, EditNote, MusicNote, PhoneAndroid, TapAndPlay, Timer } from '@mui/icons-material';
import RecordingsList, { AudioRecorder, UseRecorder, useRecorder } from '../AudioRecorder';
import { Company, GetCompaniesDocument, useGetSoundFilesAndPhoneListsQuery, useUpdateCompanyMutation } from '../../__generated__/graphql';
import { format } from 'date-fns';
import CreatePhoneModal from '../phoneList/CreatePhoneModal';

interface EditCompanyModalProps {
    id: number;
    companies: Company[];
    open: boolean;
    onClose: () => void;
}

const EditCompanyModal: React.FC<EditCompanyModalProps> = (({ id, companies, open, onClose }) => {
    const [companyName, setCompanyName] = useState<string>('');
    const [companyLimit, setCompanyLimit] = useState<string>('');
    const [dailyLimit, setDailyLimit] = useState<string>('');
    const [soundFile, setSoundFile] = useState<number>(0);
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [reaction, setReaction] = useState<number[]>([]);
    const [phoneList, setPhoneList] = useState<number>(0);
    const [days, setDays] = useState<number[]>([]);

    const { recorderState, ...handlers }: UseRecorder = useRecorder();
    const { audio } = recorderState;

    const [createPhoneModalOpen, setCreatePhoneModalOpen] = useState<boolean>(false);
    const [editPhoneModalOpen, setEditPhoneModalOpen] = useState<boolean>(false);
    const [editPhoneModalIndex, setEditPhoneModalIndex] = useState<number>(0);

    const { data } = useGetSoundFilesAndPhoneListsQuery({
        skip: !open,
    });
    const phoneLists = data?.phonelists || [];
    const soundFiles = data?.soundfiles || [];

    const [updateCompany] = useUpdateCompanyMutation({
        refetchQueries: [{
            query: GetCompaniesDocument,
        }],
    });

    useEffect(() => {
        const company = companies.find(company => company.id === id);
        if (company) {
            setCompanyName(company.name);
            setCompanyLimit(company.companyLimit.toString());
            setDailyLimit(company.dayLimit.toString());
            setSoundFile(company.soundFileId);
            setStartTime(company.startTime && format(new Date(company?.startTime), 'HH:mm'));
            setEndTime(company.endTime && format(new Date(company?.endTime), 'HH:mm'));
            setReaction(company.reaction ? company.reaction : []);
            setPhoneList(company.phonesId);
            setDays(company.days ? company.days : []);
        }
    }, [id]);

    const handleDeletePhoneList = (index: number) => {
        // phoneListStore.deletePhonesList(phoneListStore.phonesList[index].id);
    }

    const handleSubmit = () => {
        updateCompany({
            variables: {
                input: {
                    id: id,
                    name: companyName,
                    companyLimit: parseInt(companyLimit, 10),
                    dayLimit: parseInt(dailyLimit, 10),
                    startTime: new Date().setHours(+startTime.split(':')[0], +startTime.split(':')[1], 0, 0),
                    endTime: new Date().setHours(+endTime.split(':')[0], +endTime.split(':')[1], 0, 0),
                    days: days,
                    reaction: reaction,
                    soundFileId: soundFile,
                    phonesId: phoneList,
                },
            },
        });
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={() => onClose()}
        >
            <ModalDialog
                size='sm'
                maxWidth='460px'
            >
                <ModalClose />
                <FormControl>
                    <FormLabel>Название компании</FormLabel>
                    <Input
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                        placeholder="Название"
                    />
                </FormControl>
                <AccordionGroup
                    variant="plain"
                    transition="0.2s"
                    sx={{
                        overflow: 'auto',
                        maxWidth: 400,
                        borderRadius: 'md',
                        [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
                        {
                            paddingBlock: '1rem',
                        },
                        [`& .${accordionSummaryClasses.button}`]: {
                            paddingBlock: '1rem',
                        },
                    }}
                >
                    <Accordion>
                        <AccordionSummary>
                            <Avatar
                                color="primary"
                            >
                                <TapAndPlay />
                            </Avatar>
                            <ListItemContent>
                                <Typography
                                    level="title-md"
                                >
                                    База номеров
                                </Typography>
                                <Typography
                                    level="body-sm"
                                >
                                    Выберите номера для вашей компании
                                </Typography>
                            </ListItemContent>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Sheet
                                variant="outlined"
                                sx={{
                                    maxHeight: 300,
                                    overflow: 'auto',
                                    borderRadius: 'sm',
                                }}
                            >
                                <List>
                                    <ListItem nested>
                                        <ListSubheader sticky>
                                            <Button
                                                size="sm"
                                                sx={{
                                                    width: '100%'
                                                }}
                                                onClick={() => setCreatePhoneModalOpen(true)}
                                            >
                                                Добавить базу номеров
                                            </Button>
                                        </ListSubheader>
                                        <List>
                                            {
                                                phoneLists.length > 0
                                                    ?
                                                    (
                                                        phoneLists.map((item, index) => (
                                                            <Stack
                                                                key={index}
                                                            >
                                                                <ListItem
                                                                    endAction={
                                                                        <Stack
                                                                            direction={'row'}
                                                                        >
                                                                            <IconButton
                                                                                aria-label="Edit"
                                                                                size="sm"
                                                                                variant="plain"
                                                                                color="success"
                                                                                onClick={() => {
                                                                                    setEditPhoneModalOpen(true);
                                                                                    setEditPhoneModalIndex(item.id)
                                                                                }}
                                                                            >
                                                                                <Create />
                                                                            </IconButton>
                                                                            <IconButton
                                                                                aria-label="Delete"
                                                                                size="sm"
                                                                                variant="plain"
                                                                                color="danger"
                                                                                onClick={() => { handleDeletePhoneList(index) }}
                                                                            >
                                                                                <Delete />
                                                                            </IconButton>
                                                                        </Stack>
                                                                    }>
                                                                    <Tooltip
                                                                        title={
                                                                            <Box
                                                                                sx={{
                                                                                    p: 1
                                                                                }}
                                                                            >
                                                                                {item.phones.slice(0, 5).map((phone, phoneIndex) => (
                                                                                    <Box
                                                                                        key={phoneIndex}
                                                                                        sx={{
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            gap: 1
                                                                                        }}
                                                                                    >
                                                                                        <PhoneAndroid color="primary" />
                                                                                        <Typography
                                                                                            fontWeight="lg"
                                                                                            fontSize="sm"
                                                                                            sx={{
                                                                                                color: 'text.secondary'
                                                                                            }}
                                                                                        >
                                                                                            {phone}
                                                                                        </Typography>
                                                                                    </Box>
                                                                                ))}
                                                                            </Box>
                                                                        }
                                                                        placement="right"
                                                                        variant="outlined"
                                                                        arrow
                                                                    >
                                                                        <ListItemButton
                                                                            color={phoneList == item.id ? "success" : "neutral"}
                                                                            onClick={() => {
                                                                                setPhoneList(item.id)
                                                                            }}
                                                                        >
                                                                            {item.name}
                                                                        </ListItemButton>
                                                                    </Tooltip>
                                                                </ListItem>
                                                                {phoneLists.length !== 1 && <ListDivider inset={'gutter'} />}
                                                            </Stack>
                                                        )))
                                                    :
                                                    (
                                                        <ListItem>
                                                            <ListItemContent>
                                                                <Typography
                                                                    level='title-sm'
                                                                    textAlign={'center'}
                                                                >
                                                                    Пусто
                                                                </Typography>
                                                            </ListItemContent>
                                                        </ListItem>
                                                    )
                                            }
                                        </List>
                                    </ListItem>
                                </List>
                            </Sheet>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary>
                            <Avatar color="primary">
                                <EditNote />
                            </Avatar>
                            <ListItemContent>
                                <Typography level="title-md">Лимиты</Typography>
                                <Typography level="body-sm">
                                    Установите лимит баланса для вашей компании
                                </Typography>
                            </ListItemContent>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack spacing={1.5}>
                                <FormControl orientation="vertical" sx={{ gap: 1 }}>
                                    <FormLabel>Лимит (общий)</FormLabel>
                                    <Input
                                        value={companyLimit}
                                        onChange={(e) => setCompanyLimit(e.target.value)}
                                        type="number"
                                        // defaultValue={2.5}
                                        slotProps={{
                                            input: {

                                                min: 1,
                                                max: 5,
                                                step: 0.1,
                                            },
                                        }}
                                    />
                                </FormControl>

                                <FormControl orientation="vertical" sx={{ gap: 1 }}>

                                    <FormLabel>Лимит на день</FormLabel>
                                    <Input
                                        value={dailyLimit}
                                        onChange={(e) => setDailyLimit(e.target.value)}
                                        type="number"
                                        // defaultValue={2.5}
                                        slotProps={{
                                            input: {
                                                min: 1,
                                                max: 5,
                                                step: 0.1,
                                            },
                                        }}
                                    />
                                </FormControl>


                            </Stack>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary>
                            <Avatar color="primary">
                                <MusicNote />
                            </Avatar>
                            <ListItemContent>
                                <Typography
                                    level="title-md"
                                >
                                    Аудиозапись
                                </Typography>
                                <Typography
                                    level="body-sm"
                                >
                                    Выберите запись для вашей компании
                                </Typography>
                            </ListItemContent>
                        </AccordionSummary>
                        <AccordionDetails>
                            <input
                                type="file"
                                id="audioFileInput"
                                style={{ display: 'none' }}
                                accept="audio/*"
                                onChange={async (e) => {
                                    const file = e.target.files?.[0];
                                    // if (file) {
                                    //     soundfileStore.createSoundfileFromFile(file);
                                    // }
                                }}
                            />
                            <Select
                                value={soundFile}
                                onChange={(_, nv) => { if (nv !== null) setSoundFile(nv) }}
                                startDecorator={<MusicNote />}
                                endDecorator={
                                    <Button
                                        onClick={() => {
                                            document.getElementById('audioFileInput')?.click()
                                        }}
                                    >
                                        Загрузить файл
                                    </Button>
                                }
                                indicator=''
                            >
                                {soundFiles.map((file) => (
                                    <Option
                                        key={file.id}
                                        value={file.id}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                gap: 1,
                                                width: '100%'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    width: '75%'
                                                }}
                                            >
                                                {file.name}
                                            </Typography>
                                            <IconButton
                                                color='danger'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // soundfileStore.deleteSoundfile(file.id);
                                                }}
                                            >
                                                <Delete />
                                            </IconButton>
                                        </Box>
                                    </Option>
                                ))}
                            </Select>
                            <Divider>
                                <Chip
                                    sx={{
                                        my: 2
                                    }}
                                    variant="soft"
                                    color="neutral"
                                    size="sm"
                                >
                                    Звукозапись
                                </Chip>
                            </Divider>
                            <AudioRecorder
                                recorderState={recorderState}
                                handlers={handlers}
                            />
                            <RecordingsList
                                audio={audio}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <Avatar
                                color="primary"
                            >
                                <Timer />
                            </Avatar>
                            <ListItemContent>
                                <Typography
                                    level="title-md"
                                >
                                    Время
                                </Typography>
                                <Typography
                                    level="body-sm"
                                >
                                    Выберите дни недели и время для обзвона
                                </Typography>
                            </ListItemContent>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box >
                                <Typography
                                    level="body-sm"
                                    sx={{
                                        mb: 2
                                    }}
                                >
                                    Выбор дней недели
                                </Typography>
                                <List
                                    variant="outlined"
                                    aria-label="Screens"
                                    role="group"
                                    orientation="horizontal"
                                    sx={{
                                        justifyContent: 'space-evenly',
                                        flexGrow: 0,
                                        '--List-gap': '8px',
                                        '--List-padding': '8px',
                                        '--List-radius': '8px',
                                        gap: 1,
                                        px: 2
                                    }}
                                >
                                    {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((item, index) => (
                                        <ListItem
                                            key={item}
                                        >
                                            <Checkbox
                                                disableIcon
                                                overlay
                                                label={item}
                                                checked={days.includes(index)}
                                                // color="neutral"
                                                variant={days.includes(index) ? 'outlined' : 'plain'}
                                                value={days[index]}
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                    if (event.target.checked) {
                                                        setDays((val) => [...val, index]);

                                                    } else {
                                                        setDays((val) => val.filter((text) => text !== index));
                                                    }
                                                }}
                                                slotProps={{
                                                    action: ({ checked }) => ({
                                                        sx: {
                                                            bgcolor: checked ? 'primary.plainHoverBg' : 'transparent',
                                                            boxShadow: checked ? 'sm' : 'none',
                                                        },
                                                    }),
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                            <Stack
                                direction="row"
                                sx={{
                                    mt: 4
                                }}
                                alignItems="center"
                                spacing={3}
                                justifyContent={'center'}
                            >
                                <FormControl>
                                    <Stack
                                        direction={'row'}
                                        spacing={2}
                                    >
                                        <FormHelperText>
                                            C
                                        </FormHelperText>
                                        <Input
                                            value={startTime}
                                            onChange={(e) => setStartTime(e.target.value)}
                                            type="time"
                                            slotProps={{
                                                input: {
                                                    min: '09:00',
                                                    max: '18:00',
                                                },
                                            }}
                                        />
                                    </Stack>
                                </FormControl>
                                <FormControl>
                                    <Stack
                                        direction={'row'}
                                        spacing={2}
                                    >
                                        <FormHelperText>
                                            До
                                        </FormHelperText>
                                        <Input
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                            type="time"
                                            slotProps={{
                                                input: {
                                                    min: '09:00',
                                                    max: '18:00',
                                                },
                                            }}
                                        />
                                    </Stack>
                                </FormControl>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <Avatar
                                color="primary"
                            >
                                <CallToAction />
                            </Avatar>
                            <ListItemContent>
                                <Typography
                                    level="title-md"
                                >
                                    Реакция
                                </Typography>
                                <Typography
                                    level="body-sm"
                                >
                                    Выберите ответную реакцию
                                </Typography>
                            </ListItemContent>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box
                                sx={{
                                    my: 4
                                }}
                            >
                                <Grid
                                    justifyContent="space-around"
                                    container
                                    spacing={{
                                        xs: 2,
                                        md: 3
                                    }}
                                    columns={{
                                        xs: 4,
                                        sm: 8,
                                        md: 12
                                    }}
                                    sx={{
                                        flexGrow: 1
                                    }}
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
                                        <Grid
                                            xs={2}
                                            sm={4}
                                            md={4}
                                            justifyItems="center"
                                            key={i}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    justifyItems: 'center',
                                                    alignItems: 'center',
                                                    flexDirection: 'column'
                                                }}
                                            >
                                                <Button
                                                    sx={{
                                                        maxWidth: '140px'
                                                    }}
                                                    variant="outlined"
                                                    disabled>
                                                    {i}
                                                </Button>
                                                <Select
                                                    size='sm'
                                                    indicator=''
                                                    placeholder='Не указан'
                                                    variant="plain"
                                                    value={i}
                                                // onChange={(_, nv) => { setReaction({ ...reaction, [i]: nv }); console.log(reaction); }}
                                                >
                                                    <Option value="yes">Добавить в список</Option>
                                                    <Option value="maybe">Исключить</Option>
                                                    <Option value="no">Бездействовать</Option>
                                                </Select>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </AccordionGroup>
                <CreatePhoneModal
                    open={createPhoneModalOpen}
                    onClose={() => setCreatePhoneModalOpen(false)}
                />
                {/* <EditPhoneModal open={editPhoneModalOpen} onClose={() => setEditPhoneModalOpen(false)} id={editPhoneModalIndex} /> */}
                <Button onClick={handleSubmit}>Изменить</Button>
            </ModalDialog>
        </Modal>
    );
});

export default EditCompanyModal;