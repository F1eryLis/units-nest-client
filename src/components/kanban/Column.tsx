import { FC, useEffect, useState } from 'react';
import { Button, Typography, Box, Sheet, Stack, IconButton, Modal, ModalDialog, ButtonGroup, Input } from '@mui/joy';
import Task from './Task';
import { useDrop } from 'react-dnd';
// import CreateTaskModal from '../modals/CreateTaskModal';
import { Add, Check, Close, Delete, Edit } from '@mui/icons-material';
import { GetKanbanCardsDocument, GetKanbanColumnsDocument, KanbanColumn, useOnKanbanCardAddedSubscription, useUpdateKanbanCardMutation } from '../../__generated__/graphql';

interface ColumnProps {
    column: KanbanColumn;
    setIsDraggingBoard: (isDragging: boolean) => void;
}

const Column: FC<ColumnProps> = ({ column, setIsDraggingBoard }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [changedTitle, setChangedTitle] = useState(column.title);
    const [changegColor, setChangedColor] = useState(column.titleColor);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [displayedTasks, setDisplayedTasks] = useState<KanbanCard[]>(kanbanCards.slice(0, 10));
    // const [allTasksLoaded, setAllTasksLoaded] = useState(false);

    const [moveTask] = useUpdateKanbanCardMutation();
    // const { data } = useOnKanbanCardAddedSubscription();

    // console.log(data?.kanbanCardAdded);
    

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         async (entries) => {
    //             if (entries[0].isIntersecting && !allTasksLoaded) {
    //                 const newPage = currentPage + 1;
    //                 setCurrentPage(newPage);
    //                 const newTasks = await fetchTasksById(id, newPage, 10);
    //                 if (newTasks.length < 10 && displayedTasks.length < 10) setAllTasksLoaded(true);
    //                 else
    //                     setDisplayedTasks((prev) => [...prev, ...newTasks]);
    //             }
    //         },
    //         { threshold: 1.0 }
    //     );

    //     const target = document.querySelector(`#column-${id} .load-more-trigger`);
    //     if (target) observer.observe(target);

    //     return () => {
    //         if (target) observer.unobserve(target);
    //     };
    // }, [currentPage, id, allTasksLoaded]);

    const [, drop] = useDrop({
        accept: 'CARD',
        drop: (item: { id: number, columnId: number }, monitor) => {
            if (item.columnId !== column.id) {
                console.log('id: ', item.id, ' column: ', item.columnId, ' column2: ', column.id);
                moveTask({
                    variables: {
                        input: {
                            id: item.id,
                            columnId: column.id,
                        }
                    },
                    // refetchQueries: [{
                    //     query: GetKanbanColumnsDocument,
                        // variables: {
                        //     columnId: column.id,
                        // },
                    // }],
                });
                item.columnId = column.id;
            }
        }
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <Sheet
            id={`column-${column.id}`}
            ref={drop}
            invertedColors
            sx={{
                minWidth: '300px',
                padding: '16px',
                borderRadius: '4px',
                minHeight: '250px',
                height: 'fit-content',
                my: 2,
            }}
        >
            <Stack
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={2}
                sx={{
                    backgroundColor: column.titleColor,
                    borderRadius: '6px',
                    padding: '8px'
                }}
            >
                {
                    !isEditingTitle
                        ?
                        <>
                            <Stack
                                display={'flex'}
                                width={'100%'}
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                            >
                                <Typography level='title-lg'>{column.title}</Typography>
                                <Typography level='title-lg'>{column.kanbanCards ? column.kanbanCards.length : 0}</Typography>
                            </Stack>
                            <ButtonGroup
                                size='sm'
                            >
                                <IconButton
                                    onClick={() => setIsEditingTitle(true)}
                                    color='primary'
                                    variant='soft'
                                >
                                    <Edit />
                                </IconButton>
                                <IconButton
                                    onClick={() => setIsAlertModalOpen(true)}
                                    color='danger'
                                    variant='soft'
                                >
                                    <Delete />
                                </IconButton>
                            </ButtonGroup>
                        </>
                        :
                        <Stack
                            display={'flex'}
                            width={'100%'}
                            flexDirection={'row'}
                            justifyContent={'space-between'}
                            gap={2}
                        >
                            <Input
                                value={changedTitle}
                                onChange={e => setChangedTitle(e.target.value)}
                                fullWidth
                            />
                            <Input
                                value={changegColor}
                                onChange={e => setChangedColor(e.target.value)}
                                type='color'
                            />
                            <ButtonGroup>

                                <IconButton
                                    variant='soft'
                                    color='success'
                                    onClick={() => {
                                        // updateColumn(id, changedTitle, changegColor);
                                        setIsEditingTitle(false);
                                    }}
                                >
                                    <Check />
                                </IconButton>
                                <IconButton
                                    variant='soft'
                                    color='danger'
                                    onClick={() => {
                                        setIsEditingTitle(false);
                                        setChangedColor(column.titleColor);
                                        setChangedTitle(column.title);
                                    }}
                                >
                                    <Close />
                                </IconButton>
                            </ButtonGroup>
                        </Stack>
                }
            </Stack>
            <Button
                fullWidth
                onClick={handleOpenModal}
                sx={{
                    my: 1,
                }}
            >
                <Add />
            </Button>
            {
                column.kanbanCards &&
                column.kanbanCards.map((kanbanCard, index) => (
                    <Box key={`column-box-${index}`}>
                        <Task
                            key={`task-${index}`}
                            kanbanCard={kanbanCard}
                            setIsDraggingBoard={setIsDraggingBoard}
                        />
                    </Box>
                ))}
            <Box
                className='load-more-trigger'
                style={{
                    height: '1px',
                }}
            />
            {/* <CreateTaskModal
                id={id}
                open={isModalOpen}
                onClose={handleCloseModal}
            />
            <AlertModal
                id={id}
                title={title}
                isOpen={isAlertModalOpen}
                onClose={() => setIsAlertModalOpen(false)}
                handleDelete={deleteColumn}
            /> */}
        </Sheet>
    );
};

const AlertModal: FC<{
    id: number;
    title: string;
    isOpen: boolean;
    onClose: () => void;
    handleDelete: (id: number) => void;
}> = ({ id, title, isOpen, onClose, handleDelete }) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
        >
            <ModalDialog
                size='lg'
                color="primary"
                variant="outlined"
            >
                <Typography
                    level='title-md'
                >
                    Вы действительно хотите удалить <Typography variant='soft' color='warning'>{title}</Typography>?
                </Typography>
                <Stack
                    flexDirection={'row'}
                    gap={2}
                >
                    <Button
                        fullWidth
                        color='danger'
                        onClick={onClose}
                    >
                        Отменить
                    </Button>
                    <Button
                        fullWidth
                        color='success'
                        onClick={() => {
                            handleDelete(id);
                            onClose();
                        }}
                    >
                        Удалить
                    </Button>
                </Stack>
            </ModalDialog>
        </Modal>
    )
}

export default Column;