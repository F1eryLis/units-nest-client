import { Box, Typography, Button } from '@mui/joy';
import { Add } from '@mui/icons-material';
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OrderTable from '../components/company/OrderTable';
import CreateCompanyModal from '../components/company/CreateCompanyModal';

export default function DashboardPage() {
    const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false);

    return (
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
            <Header />
            <Sidebar />
            <Box
                component="main"
                className="MainContent"
                sx={{
                    px: { xs: 2, md: 6 },
                    pt: {
                        xs: 'calc(12px + var(--Header-height))',
                        sm: 'calc(12px + var(--Header-height))',
                        md: 3,
                    },
                    pb: { xs: 2, sm: 2, md: 3 },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    gap: 1,
                    overflow: 'auto'
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        mb: 1,
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'start', sm: 'center' },
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography level="h2" component="h1">
                        Компании
                    </Typography>
                    <Button
                        color="primary"
                        startDecorator={<Add />}
                        size="sm"
                        onClick={() => setCreateModalOpen(true)}
                    >
                        Добавить компанию
                    </Button>
                    <CreateCompanyModal
                        open={createModalOpen}
                        onClose={() => { setCreateModalOpen(false) }}
                    />
                </Box>
                <OrderTable />
                {/* <OrderList /> */}

            </Box>
        </Box>
    );
}