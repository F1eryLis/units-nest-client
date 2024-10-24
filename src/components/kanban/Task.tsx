import React, { useRef } from 'react';
import { Card, CardContent, IconButton, Stack, Typography } from '@mui/joy';
import { useDrag, useDrop } from 'react-dnd';
import { Edit, LocalPhone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { KanbanCard } from '../../__generated__/graphql';

interface TaskProps {
    kanbanCard: KanbanCard;
    setIsDraggingBoard: (isDragging: boolean) => void;
}

const Task: React.FC<TaskProps> = ({ kanbanCard, setIsDraggingBoard }) => {
    const navigate = useNavigate();

    const ref = useRef<HTMLDivElement>(null);
    // const [, drop] = useDrop({
    //     accept: 'TASK',
    //     hover(item: { index: number, fromColumnId: number }, monitor) {
    //         if (!ref.current) return;

    //         const dragIndex = item.index;
    //         const hoverIndex = index;
    //         const sourceColumn = item.fromColumnId === fromColumnId;

    //         if (dragIndex === hoverIndex) return;

    //         if (window.matchMedia('(pointer: coarse)').matches) {
    //             const hoverBoundingRect = ref.current.getBoundingClientRect();
    //             const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    //             const clientOffset = monitor.getClientOffset();
    //             const hoverClientY = (clientOffset as DOMRect).y - hoverBoundingRect.top;

    //             if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    //                 return;
    //             }
    //             if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    //                 return;
    //             }
    //         }

    //         if (sourceColumn && item.index !== index) {
    //             moveTask(item.fromColumnId, fromColumnId, dragIndex, hoverIndex);
    //             item.index = index;
    //         } else if (!sourceColumn) {
    //             moveTask(item.fromColumnId, fromColumnId, dragIndex, hoverIndex);
    //             item.index = index;
    //             item.fromColumnId = fromColumnId;
    //         }
    //     }
    // });

    const [{ isDragging }, drag] = useDrag({
        type: 'CARD',
        item: { id: kanbanCard.id, columnId: kanbanCard.columnId },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: () => setIsDraggingBoard(false),
    });

    const handleOpenEditTask = () => {
        // navigate(`/edit/${task.id}`);
    }

    // drag(drop(ref));

    return (
        <div ref={drag}>
            <Card
                sx={{
                    opacity: isDragging ? 0.5 : 1,
                    marginBottom: 2
                }}
                variant='soft'
            >
                <CardContent>
                    <Typography>
                        {kanbanCard.name}
                    </Typography>
                    <Stack spacing={2}>
                        <Typography>
                            {kanbanCard.companyName}
                        </Typography>
                        <Typography>
                            {kanbanCard.comment}
                        </Typography>
                    </Stack>
                </CardContent>
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse'
                    }}
                >
                    <IconButton
                        onClick={handleOpenEditTask}
                    >
                        <Edit />
                    </IconButton>
                    <a href={`tel:${kanbanCard.phoneNumber}`}>
                        <IconButton>
                            <LocalPhone />
                        </IconButton>
                    </a>
                </Stack>
            </Card>
        </div>
    );
};

export default Task;