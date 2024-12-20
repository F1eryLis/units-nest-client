import { Box, Button, Input, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import React, { useState, useEffect, useContext } from "react";
import { formatISO } from "date-fns";
import { GetKanbanCardsDocument, useCreateKanbanCardMutation } from "../../__generated__/graphql";

interface CreateCardModalProps {
    id: number;
    open: boolean;
    onClose: () => void;
}

const CreateCardModal: React.FC<CreateCardModalProps> = ({ id, open, onClose }) => {
    const [formData, setFormData] = React.useState({
        taskName: '',
        taskCompany: '',
        taskPhone: '',
        taskComment: '',
        taskTask: '',
        taskDateTime: '',
    });

    const [createCard] = useCreateKanbanCardMutation();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const useMediaQuery = (query: string): boolean => {
        const [matches, setMatches] = useState<boolean>(false);

        useEffect(() => {
            const mediaQueryList = window.matchMedia(query);
            const documentChangeHandler = () => setMatches(mediaQueryList.matches);

            mediaQueryList.addEventListener('change', documentChangeHandler);

            // Set the initial state
            setMatches(mediaQueryList.matches);

            return () => {
                mediaQueryList.removeEventListener('change', documentChangeHandler);
            };
        }, [query]);

        return matches;
    };

    const isMobile = useMediaQuery('(max-width:600px)');

    const handleCreateTask = () => {
        createCard({
            variables: {
                createKanbanCardInput: {
                    columnId: id,
                    phoneNumber: formData.taskPhone,
                    comment: formData.taskComment,
                    companyName: formData.taskCompany,
                    dateTime: formData.taskDateTime,
                    name: formData.taskName,
                    task: formData.taskTask,
                },
            },
        });
        setFormData({
            taskName: '',
            taskCompany: '',
            taskPhone: '',
            taskComment: '',
            taskTask: '',
            taskDateTime: '',
        });
        onClose();
    }

    return (
        <Modal
            open={open}
            onClose={() => onClose()}
            sx={{
                display: 'flex', minHeight: '100dvh', flex: 1
            }}
        >
            <ModalDialog
                size='lg'
                color="primary"
                layout={isMobile ? "fullscreen" : 'center'}
                variant="outlined"
                sx={{

                }}
            >
                <Box sx={{ display: 'flex', width: '100%', pt: 'var(--Header-height)' }}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={1}
                        width={'100%'}
                    >
                        <Typography level="h3">Create Task</Typography>
                        <Input
                            placeholder="Name"
                            name="taskName"
                            variant="outlined"
                            fullWidth
                            value={formData.taskName}
                            onChange={handleInputChange}
                        />
                        <Input
                            placeholder="Company"
                            name="taskCompany"
                            variant="outlined"
                            fullWidth
                            value={formData.taskCompany}
                            onChange={handleInputChange}
                        />
                        <Input
                            placeholder="Phone"
                            name="taskPhone"
                            variant="outlined"
                            fullWidth
                            value={formData.taskPhone}
                            onChange={handleInputChange}
                        />
                        <Input
                            placeholder="Comment"
                            name="taskComment"
                            variant="outlined"
                            fullWidth
                            value={formData.taskComment}
                            onChange={handleInputChange}
                        />
                        <Input
                            placeholder="Task"
                            name="taskTask"
                            variant="outlined"
                            fullWidth
                            value={formData.taskTask}
                            onChange={handleInputChange}
                        />
                        <Input
                            placeholder="Datetime"
                            name="taskDateTime"
                            variant="outlined"
                            fullWidth
                            type="datetime-local"
                            value={formData.taskDateTime}
                            onChange={handleInputChange}
                        />
                        <Button
                            onClick={handleCreateTask}
                        >
                            Create Task
                        </Button>
                    </Box>
                </Box>
                <ModalClose
                    sx={{
                        mt: isMobile ? 'var(--Header-height)' : 0
                    }}
                />
            </ModalDialog>
        </Modal>
    );
}

export default CreateCardModal;