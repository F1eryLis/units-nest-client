import { Avatar, Box, Button, Card, Divider, GlobalStyles, IconButton, List, ListItem, ListItemButton, ListItemContent, Sheet, Stack, Typography, listItemButtonClasses } from '@mui/joy';
import { CalendarMonth, Dashboard, HomeRounded, LogoutRounded, Message, Person, PhoneCallback, SettingsRounded, SupportRounded } from '@mui/icons-material';
import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from '../utils';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import { useAuthState } from '../pages/auth/store';

const Sidebar = (() => {
    const navigate = useNavigate();
    const user = useAuthState();

    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: { xs: 'fixed', md: 'sticky' },
                transform: {
                    xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                    md: 'none',
                },
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 10000,
                height: '100dvh',
                width: 'var(--Sidebar-width)',
                top: 0,
                p: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRight: '1px solid',
                borderColor: 'divider',
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '250px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '270px',
                        },
                    },
                })}
            />
            <Box
                className="Sidebar-overlay"
                sx={{
                    position: 'fixed',
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: 'var(--SideNavigation-slideIn)',
                    backgroundColor: 'var(--joy-palette-background-backdrop)',
                    transition: 'opacity 0.4s',
                    transform: {
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                        lg: 'translateX(-100%)',
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {/* <IconButton variant="soft" color="primary" size="sm">
          <BrightnessAutoRoundedIcon />
        </IconButton> */}
                <img src={logo} height={50} />
                <Typography level="title-lg">aitomaton</Typography>
                <ColorSchemeToggle sx={{ ml: 'auto' }} />
            </Box>

            <Box
                sx={{
                    minHeight: 0,
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1,
                        '--List-nestedInsetStart': '30px',
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >
                    <ListItem>
                        <ListItemButton disabled onClick={() => navigate('/')}>
                            <HomeRounded />
                            <ListItemContent>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                >
                                    <Typography level="title-sm">Главная</Typography>
                                    <Typography level='title-sm' color='warning'>Soon</Typography>
                                </Stack>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => navigate('/')}>
                            <PhoneCallback />
                            <ListItemContent>
                                <Typography level="title-sm">Dobrozvon U</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => navigate('/virtual-managers')}>
                            <Person />
                            <ListItemContent>
                                <Typography level="title-sm">Voice Units</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => navigate('/crm')}>
                            <Dashboard />
                            <ListItemContent>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                >
                                    <Typography level="title-sm">CRM</Typography>
                                    <Typography level='title-sm' color='warning'>Trial</Typography>
                                </Stack>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton disabled onClick={() => navigate('/chats')}>
                            <Message />
                            <ListItemContent>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                >
                                    <Typography level="title-sm">Chats</Typography>
                                    <Typography level='title-sm' color='warning'>Soon</Typography>
                                </Stack>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => navigate('/calendar')}>
                            <CalendarMonth />
                            <ListItemContent>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                >
                                    <Typography level="title-sm">Calendar</Typography>
                                    <Typography level='title-sm' color='warning'>Soon</Typography>
                                </Stack>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List
                    size="sm"
                    sx={{
                        mt: 'auto',
                        flexGrow: 0,
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        '--List-gap': '8px',
                        mb: 2,
                    }}
                >
                    <ListItem>
                        {/* <Sheet
              color='warning'
              variant='soft'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 1,
                borderRadius: 8,
                width: '100%',
                justifyContent: 'left',
                // alignItems: 'center'
              }}
            >
              <Typography level="body-sm" fontWeight={700}>
                
              </Typography>
            </Sheet> */}
                        <Card
                            invertedColors
                            // variant="soft"
                            // color="warning"
                            size="sm"
                            sx={{ boxShadow: 'none', width: '100%' }}
                        >
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography level="title-sm">Баланс</Typography>
                                <Typography level='title-sm'>XXX тнг.</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <PhoneCallback />
                                <Typography level='title-sm'>XXX мин.</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Person />
                                <Typography level='title-sm'>XXX мин.</Typography>
                            </Stack>
                            <Button size="sm" variant="solid">
                                Пополнить баланс
                            </Button>
                        </Card>
                    </ListItem>
                    {/* <ListItem>
                        <DateTimeDisplay />
                    </ListItem> */}
                    <ListItem>
                        <ListItemButton>
                            <SupportRounded />
                            Поддержка
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <SettingsRounded />
                            Настройки
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
            <Divider />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Avatar
                    variant="outlined"
                    size="sm"
                    src={user.user?.picture}
                />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography level="title-sm">
                        {user.user?.email}
                    </Typography>
                    <Typography level="body-xs">
                        {user.user?.fullName}
                    </Typography>
                </Box>
                <IconButton
                    size="sm"
                    variant="plain"
                    color="neutral"
                    onClick={() => {
                        user.removeUser();
                    }}>
                    <LogoutRounded />
                </IconButton>
            </Box>
        </Sheet>
    );
});

export default Sidebar;