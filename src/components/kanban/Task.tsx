import React from 'react';
import { Card, CardContent, IconButton, Stack, Typography } from '@mui/joy';
import { useDrag } from 'react-dnd';
import { Edit, LocalPhone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { KanbanCard } from '../../__generated__/graphql';

interface TaskProps {
    kanbanCard: KanbanCard;
    setIsDraggingBoard: (isDragging: boolean) => void;
}

const Task: React.FC<TaskProps> = ({ kanbanCard, setIsDraggingBoard }) => {
    const navigate = useNavigate();

    const [{ isDragging }, drag] = useDrag({
        type: 'CARD',
        item: { id: kanbanCard.id, columnId: kanbanCard.columnId },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: () => setIsDraggingBoard(false),
    });

    const handleOpenEditTask = () => {
        navigate(`/crm/edit-card/${kanbanCard.id}`);
    }

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