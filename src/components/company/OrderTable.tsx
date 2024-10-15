import { useQuery } from '@apollo/client';
import { Search, FilterAlt, ArrowDownward, AutorenewRounded, Block, MoreHorizRounded, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { FormControl, Link, FormLabel, Select, Option, Sheet, Input, IconButton, Modal, ModalDialog, ModalClose, Typography, Divider, Button, Box, Table, Checkbox, Chip, ColorPaletteProp, Dropdown, MenuButton, Menu, MenuItem } from '@mui/joy';
import { useEffect, useState } from 'react';
import { COMPANIES_QUERY } from '../../graphql/companies';
import { Company } from '../../types';
import { graphql } from '../../gql';
// import EditCompanyModal from './modals/EditCompanyModal';
// import DeleteCompanyModal from './modals/DeleteCompanyModal';
// import http from "../utils/api/http-client";
// import { storesContext } from '../utils/stores';

type Reaction = {
    [key: string]: string;
};

type DataOrder = {
    id: number;
    name: string;
    companyLimit: number;
    dayLimit: number;
    status: number;
    days: Array<number>;
    reaction: Array<number>;
    soundFileId: number;
    phonesId: number;
    userId: number;
};

interface HeadCell {
    disablePadding: boolean;
    id: keyof DataOrder;
    label: string;
    numeric: boolean;
}

type DataOrders = DataOrder[];


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string | Array<number> },
    b: { [key in Key]: number | string | Array<number> },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array?.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const OrderTable = (() => {
    const [order, setOrder] = useState<Order>('desc');
    const [orderBy, setOrderBy] = useState<keyof DataOrder>('id');
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [open, setOpen] = useState(false);
    const [reaction, setReaction] = useState(false);
    const [value, setValue] = useState<string[]>([]);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');

    const GET_COMPANIES = graphql(`
        query GetCompanies {
            companies {
                id
                name
                companyLimit
                dayLimit
                status
                startTime
                endTime
                days
                reaction
                soundFileId
                phonesId
                userId
            }
        }
    `)

    const { data } = useQuery(GET_COMPANIES);
    const companies = data?.companies || [];

    // console.log("ccc store",companyStore)
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof DataOrder,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = companies?.map((n) => n.id.toString());
            setSelected(newSelected!);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected!);
    };

    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
        setRowsPerPage(parseInt(newValue!.toString(), 10));
        setPage(0);
    };

    const getLabelDisplayedRowsTo = () => {
        if (companies?.length === -1) {
            return (page + 1) * rowsPerPage;
        }
        return rowsPerPage === -1
            ? companies?.length
            : Math.min(companies?.length!, (page + 1) * rowsPerPage);
    };

    const isSelected = (name: any) => selected.indexOf(name) !== -1;

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - companies?.length!) : 0;

    const headCells: readonly HeadCell[] = [
        {
            id: 'id',
            numeric: true,
            disablePadding: false,
            label: 'ID',
        },
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Название',
        },
        {
            id: 'companyLimit',
            numeric: true,
            disablePadding: false,
            label: 'Об. лм',
        },
        {
            id: 'dayLimit',
            numeric: true,
            disablePadding: false,
            label: 'Дн. лм',
        },
        {
            id: 'soundFileId',
            numeric: true,
            disablePadding: false,
            label: 'Аудиофайл',
        },
        {
            id: 'status',
            numeric: false,
            disablePadding: false,
            label: 'Статус',
        },
        // {
        //   id: 'phones_id',
        //   numeric: true,
        //   disablePadding: false,
        //   label: 'Список номеров',
        // },
    ];

    const createSortHandler = (property: keyof DataOrder) => (event: React.MouseEvent<unknown>) => {
        handleRequestSort(event, property);
    };

    function labelDisplayedRows({
        from,
        to,
        count,
    }: {
        from: number;
        to: number;
        count: number;
    }) {
        return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
    };

    const handleStartStopStatus = (event: React.MouseEvent<unknown>, id: number) => {
        event.stopPropagation();
        // companyStore.updateCompany(id, { ...companyStore.getCompanyById(id), status: companyStore.getCompanyById(id)?.status ? 0 : 1 });
    }

    // Handle search input
    const filteredOrders = companies?.filter(orderr => {
        return orderr.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // Handle play company sound

    //сделай комонент который являтеся оберткой возле тэга аудио на основе кнопки где имеет события стоп и старт
    //основа для этого файл аудио рекордер

    const handlePlayAudio = (event: React.MouseEvent<unknown>) => {
        event.stopPropagation();
        const audioElement = document.getElementById(`singleo`) as HTMLAudioElement;

        if (audioElement) audioElement.play();
    }

    //   const renderFilters = () => (
    //     <>
    //       <FormControl size="sm">
    //         <FormLabel>Статус</FormLabel>
    //         <Select
    //           size="sm"
    //           placeholder="Фильтровать по статусу"
    //           slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}
    //         >
    //           <Option value="Выполнено">Выполнено</Option>
    //           <Option value="pending">В процессе</Option>
    //           <Option value="В процессе">В процессе</Option>
    //           <Option value="Остановлено">Остановлено</Option>
    //         </Select>
    //       </FormControl>

    //       <FormControl size="sm">
    //         <FormLabel>Номера</FormLabel>
    //         <Select size="sm" placeholder="Все">
    //           <Option value="all">All</Option>
    //           <Option value="olivia">Olivia Rhye</Option>
    //           <Option value="steve">Steve Hampton</Option>
    //           <Option value="ciaran">Ciaran Murray</Option>
    //           <Option value="marina">Marina Macdonald</Option>
    //           <Option value="charles">Charles Fulton</Option>
    //           <Option value="jay">Jay Hoper</Option>
    //         </Select>
    //       </FormControl>
    //     </>
    //   );

    const handlePhoneCall = async (event: React.MouseEvent<unknown>, companyId: number, sound_path: string) => {
        event.stopPropagation();
        try {
            console.log(companyId);
            //   const response = await http.post('/api/create-callfile', { companyId: companyId, filepath: sound_path }, {
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   });

            //   const data = await response.data;
            //   console.log(data);
        } catch (error) {
            console.error('Ошибка создания callfile:', error);
        }
    };

    return (
        <>
            <Sheet
                className="SearchAndFilters-mobile"
                sx={{
                    display: { xs: 'flex', sm: 'none' },
                    my: 1,
                    gap: 1,
                }}
            >
                <Input
                    size="sm"
                    placeholder="Search"
                    startDecorator={<Search />}
                    sx={{ flexGrow: 1 }}
                />
                <IconButton
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    onClick={() => setOpen(true)}
                >
                    <FilterAlt />
                </IconButton>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
                        <ModalClose />
                        <Typography id="filter-modal" level="h2">
                            Фильтр
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {/* {renderFilters()} */}
                            <Button color="primary" onClick={() => setOpen(false)}>
                                Submit
                            </Button>
                        </Sheet>
                    </ModalDialog>
                </Modal>
                {/* <EditCompanyModal id={selectedId} open={editModal} onClose={() => setEditModal(false)} />
        <DeleteCompanyModal id={selectedId} open={deleteModal} onClose={() => setDeleteModal(false)} /> */}

            </Sheet>
            <Box
                className="SearchAndFilters-tabletUp"
                sx={{
                    borderRadius: 'sm',
                    py: 2,
                    display: { xs: 'none', sm: 'flex' },
                    flexWrap: 'wrap',
                    gap: 1.5,
                    '& > *': {
                        minWidth: { xs: '120px', md: '160px' },
                    },
                }}
            >
                <FormControl sx={{ flex: 1 }} size="sm">
                    <FormLabel>Поиск по названию</FormLabel>
                    <Input
                        size="sm"
                        placeholder="Поиск"
                        startDecorator={<Search />}
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </FormControl>
                {/* {renderFilters()} */}
            </Box>
            <Sheet
                className="OrderTableContainer"
                variant="outlined"
                sx={{
                    display: { xs: 'none', sm: 'initial' },
                    width: '100%',
                    borderRadius: 'sm',
                    flexShrink: 1,
                    overflow: 'auto',
                    minHeight: 0,
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                        '--TableCell-selectedBackground': (theme) =>
                            theme.vars.palette.success.softBg,
                        '& thead th:nth-of-type(1)': {
                            width: '40px',
                        },
                        '& thead th:nth-of-type(2)': {
                            width: '5%',
                        },
                    }}
                >
                    <thead>
                        <tr>
                            <th>
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length < companies?.length!}
                                    checked={companies?.length! > 0 && selected.length === companies?.length}
                                    onChange={handleSelectAllClick}
                                    sx={{ verticalAlign: 'sub' }}
                                />
                            </th>
                            {headCells.map((headCell) => {
                                const active = orderBy === headCell.id;
                                return (
                                    <th
                                        key={headCell.id}
                                        aria-sort={
                                            active
                                                ? ({ asc: 'ascending', desc: 'descending' } as const)[order]
                                                : undefined
                                        }
                                    >
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <Link
                                            underline="none"
                                            color="neutral"
                                            textColor={active ? 'primary.plainColor' : undefined}
                                            component="button"
                                            onClick={createSortHandler(headCell.id)}
                                            fontWeight="lg"
                                            startDecorator={
                                                headCell.numeric ? (
                                                    <ArrowDownward sx={{ opacity: active ? 1 : 0 }} />
                                                ) : null
                                            }
                                            endDecorator={
                                                !headCell.numeric ? (
                                                    <ArrowDownward sx={{ opacity: active ? 1 : 0 }} />
                                                ) : null
                                            }
                                            sx={{
                                                '& svg': {
                                                    transition: '0.2s',
                                                    transform:
                                                        active && order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                                                },
                                                '&:hover': { '& svg': { opacity: 1 } },
                                            }}
                                        >
                                            {headCell.label}
                                        </Link>
                                    </th>
                                );
                            })}
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {stableSort(filteredOrders!, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(String(row.id));
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <tr
                                        onClick={(event) => handleClick(event, row.id.toString())}
                                        role='checkbox'
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        style={
                                            isItemSelected
                                                ? ({
                                                    '--TableCell-dataBackground':
                                                        'var(--TableCell-selectedBackground)',
                                                    '--TableCell-headBackground':
                                                        'var(--TableCell-selectedBackground)',
                                                } as React.CSSProperties)
                                                : {}
                                        }
                                    >
                                        <td>
                                            <Checkbox
                                                checked={isItemSelected}
                                                slotProps={{
                                                    input: {
                                                        'aria-labelledby': labelId,
                                                    },
                                                }}
                                                sx={{ verticalAlign: 'top' }}
                                            ></Checkbox>
                                        </td>
                                        <td>
                                            {row.id}
                                        </td>
                                        <td id={labelId}>
                                            {row.name}
                                        </td>
                                        <td>
                                            <Typography level="body-xs">{row.companyLimit}</Typography>
                                        </td>
                                        <td>
                                            <Typography level="body-xs">{row.dayLimit}</Typography>
                                        </td>
                                        {/* <td>
                                            <Link
                                                level="body-xs"
                                                component="button"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    const audioElement = document.getElementById(`singleo`) as HTMLAudioElement;
                                                    audioElement.src = 'http://localhost:8001/' + soundfileStore.getSoundfileById(row.sound_file_id)?.file_path!;
                                                    console.log(audioElement.src);
                                                    // Checkup on real server
                                                    if (audioElement) {
                                                        audioElement.play()
                                                            .then(() => {
                                                                console.log("Playback started successfully");
                                                            })
                                                            .catch(error => {
                                                                console.error("Playback failed:", error);
                                                                // Additional action depending on error
                                                            });
                                                    }
                                                }}>
                                                Прослушать {row.sound_file_id}
                                            </Link>
                                        </td> */}
                                        <td>
                                            <Chip
                                                variant="soft"
                                                size="sm"
                                                startDecorator={
                                                    {
                                                        '1': <AutorenewRounded />,
                                                        '0': <Block />,
                                                    }[row.status]
                                                }
                                                color={
                                                    {
                                                        '1': 'success',
                                                        '0': 'danger',
                                                    }[row.status] as ColorPaletteProp
                                                }
                                            >
                                                {{
                                                    '1': 'В процессе',
                                                    '0': 'Остановлен',
                                                }[row.status]}
                                            </Chip>
                                        </td>
                                        {/* <td>
                                            <Link
                                                level='body-xs'
                                                component="button"
                                                onClick={(event) => handlePhoneCall(
                                                    event, row.id,
                                                    soundfileStore.getSoundfileById(row.sound_file_id)?.file_path.replace(".wav", "")!)}
                                            >
                                                Автозвонок
                                            </Link>
                                        </td> */}
                                        <td>
                                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>

                                                <Link level="body-xs" component="button" onClick={(event) => handleStartStopStatus(event, row.id)}>
                                                    Запустить/Остановить
                                                </Link>

                                                <Dropdown>
                                                    <MenuButton
                                                        slots={{ root: IconButton }}
                                                        slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
                                                        onClick={(event) => { event.stopPropagation() }}
                                                    >
                                                        <MoreHorizRounded />
                                                    </MenuButton>
                                                    <Menu size="sm" sx={{ minWidth: 140 }}>
                                                        <MenuItem onClick={(event) => {
                                                            event.stopPropagation();
                                                            setSelectedId(+row.id);
                                                            console.log(row.id);
                                                            setEditModal(true);
                                                        }}
                                                        >
                                                            Редактировать
                                                        </MenuItem>
                                                        <Divider />
                                                        <MenuItem onClick={(event) => {
                                                            event.stopPropagation();
                                                            setSelectedId(+row.id);
                                                            setDeleteModal(true);
                                                        }}
                                                            color="danger"
                                                        >
                                                            Удалить
                                                        </MenuItem>
                                                    </Menu>
                                                </Dropdown>
                                            </Box>
                                        </td>
                                    </tr>
                                );
                            })}
                        {emptyRows > 0 && (
                            <tr
                                style={
                                    {
                                        height: `calc(${emptyRows} * 40px)`,
                                        '--TableRow-hoverBackground': 'transparent',
                                    } as React.CSSProperties
                                }
                            >
                                <td colSpan={6} aria-hidden />
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={9}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <FormControl orientation="horizontal" size="sm">
                                        <FormLabel>Rows per page:</FormLabel>
                                        <Select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
                                            <Option value={5}>5</Option>
                                            <Option value={10}>10</Option>
                                            <Option value={25}>25</Option>
                                        </Select>
                                    </FormControl>
                                    <Typography textAlign="center" sx={{ minWidth: 80 }}>
                                        {labelDisplayedRows({
                                            from: companies?.length === 0 ? 0 : page * rowsPerPage + 1,
                                            to: getLabelDisplayedRowsTo()!,
                                            count: companies?.length! === -1 ? -1 : companies?.length!,
                                        })}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <IconButton
                                            size="sm"
                                            color="neutral"
                                            variant="outlined"
                                            disabled={page === 0}
                                            onClick={() => handleChangePage(page - 1)}
                                            sx={{ bgcolor: 'background.surface' }}
                                        >
                                            <KeyboardArrowLeft />
                                        </IconButton>
                                        <IconButton
                                            size="sm"
                                            color="neutral"
                                            variant="outlined"
                                            disabled={
                                                companies?.length !== -1
                                                    ? page >= Math.ceil(companies?.length! / rowsPerPage) - 1
                                                    : false
                                            }
                                            onClick={() => handleChangePage(page + 1)}
                                            sx={{ bgcolor: 'background.surface' }}
                                        >
                                            <KeyboardArrowRight />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </Sheet>
            <audio
                id={`singleo`}
                src={''}
                hidden
            />
        </>
    );
})
export default OrderTable