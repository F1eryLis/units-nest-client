import React, { useEffect, useRef, useState } from 'react';
import Column from './Column';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Button, IconButton, Sheet, Stack } from '@mui/joy';
import { Add } from '@mui/icons-material';
import { OnKanbanCardCreateDocument, OnKanbanCardCreateSubscription, OnKanbanCardCreateSubscriptionVariables, OnKanbanCardUpdatedDocument, OnKanbanCardUpdatedSubscription, OnKanbanCardUpdatedSubscriptionVariables, useGetKanbanColumnsQuery } from '../../__generated__/graphql';
// import TableColumn from './TableColumn';
import CreateColumnModal from './CreateColumnModal';

const Board: React.FC = () => {
    const { data, subscribeToMore } = useGetKanbanColumnsQuery();
    const columns = data?.kanbanColumns || [];

    useEffect(() => {
        if (!data) return;

        const unsubscribeToUpdate = data.kanbanColumns.map(column =>
            subscribeToMore<OnKanbanCardUpdatedSubscription, OnKanbanCardUpdatedSubscriptionVariables>({
                document: OnKanbanCardUpdatedDocument,
                variables: { columnId: column.id },
                updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;

                    const updatedCard = subscriptionData.data.kanbanCardUpdated;
                    if (!updatedCard) return prev;

                    return {
                        ...prev,
                        kanbanColumns: prev.kanbanColumns.map((col) => {
                            if (col.id === updatedCard.columnId) {
                                const existingCard = col.kanbanCards.find((card) => card.id === updatedCard.id);

                                return {
                                    ...col,
                                    kanbanCards: existingCard
                                        ? col.kanbanCards.map((card) =>
                                            card.id === updatedCard.id ? updatedCard : card
                                        )
                                        : [...col.kanbanCards, updatedCard],
                                };
                            }

                            return {
                                ...col,
                                kanbanCards: col.kanbanCards.filter((card) => card.id !== updatedCard.id),
                            };
                        }),
                    };
                },
                onError: (error) => {
                    console.error(error);
                }
            })
        );

        const unsubscribeToCreate = subscribeToMore<OnKanbanCardCreateSubscription, OnKanbanCardCreateSubscriptionVariables>({
            document: OnKanbanCardCreateDocument,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                const newCard = subscriptionData.data.kanbanCardCreate;
                if (!newCard) return prev;

                return {
                    ...prev,
                    kanbanColumns: prev.kanbanColumns.map((col) =>
                        col.id === newCard.columnId
                            ? {
                                ...col,
                                kanbanCards: [...col.kanbanCards, newCard],
                            }
                            : col,
                    ),
                };
            },
        });

        return () => {
            unsubscribeToUpdate?.forEach(unsubscribe => unsubscribe());
            unsubscribeToCreate();
        }
    }, [data, subscribeToMore]);

    const [openCreateColumnModal, setOpenCreateColumnModal] = useState<boolean>(false);
    const [isDraggingBoard, setIsDraggingBoard] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [viewMode, setViewMode] = useState<'kanban' | 'table'>('kanban');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDraggingBoard(true);
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDraggingBoard) return;
        e.preventDefault();
        const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const onMouseUp = () => {
        setIsDraggingBoard(false);
    };

    useEffect(() => {
        const handleMouseUp = () => {
            setIsDraggingBoard(false);
        };

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === 'kanban' ? 'table' : 'kanban'));
    };

    const backend = window.matchMedia('(pointer: coarse)').matches ? TouchBackend : HTML5Backend;

    return (
        <DndProvider backend={backend}>
            <Button onClick={toggleViewMode}>
                Switch to {viewMode === 'kanban' ? 'Table View' : 'Kanban View'}
            </Button>
            {
                viewMode === 'kanban'
                    ? (
                        <Stack
                            ref={scrollContainerRef}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={onMouseUp}
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                gap: 2,
                                overflowX: 'auto',
                                cursor: isDraggingBoard ? 'grabbing' : 'grab',
                                userSelect: isDraggingBoard ? 'none' : 'auto',
                            }}
                        >
                            {columns.map((column, index) => (
                                <Column
                                    key={`board-column-${index}`}
                                    column={column}
                                    setIsDraggingBoard={setIsDraggingBoard}
                                />
                            ))}
                            <Sheet
                                sx={{
                                    minWidth: '300px',
                                    padding: '16px',
                                    borderRadius: '4px',
                                    maxHeight: '250px',
                                    my: 2,
                                }}
                            >
                                <IconButton
                                    onClick={() => setOpenCreateColumnModal(true)}
                                    sx={{
                                        display: 'flex',
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <Add />
                                </IconButton>
                            </Sheet>
                        </Stack>
                    ) : (
                        <Stack
                            sx={{
                                display: 'flex',
                                gap: '20px',
                                my: 2,
                            }}
                        >
                            {columns.map((column, index) => (
                                <Stack
                                    key={`table-${index}`}
                                    sx={{
                                        padding: '16px',
                                        borderRadius: '4px',
                                    }}
                                >
                                    {/* <TableColumn
                                        key={`kanban-table-${index}`}
                                        id={column.id}
                                        title={column.title}
                                        tasks={column.tasks}
                                        tagColor={column.tag_color}
                                    /> */}
                                </Stack>
                            ))}
                        </Stack>
                    )
            }
            <CreateColumnModal
                open={openCreateColumnModal}
                onClose={() => setOpenCreateColumnModal(false)}
            />
        </DndProvider>
    );
};

export default Board;