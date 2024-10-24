import environment from '../../environment';
import { Box, Button, Checkbox, Divider, FormControl, FormLabel, Input, Link, Stack, Typography } from '@mui/joy';

// import apple from "../../assets/apple.svg"
import google from "../../assets/google.svg"
// import yandex from "../../assets/yandex.svg"
import logo from '../../assets/logo_1.png'
import logo1 from '../../assets/logo.png'

const AuthPage = () => {
  const onGoogleLogin = () => {
    window.location.href = `${environment.apiUrl}/auth/google`;
  };
  
//   const onGithubLogin = () => {
//     window.location.href = `${environment.apiUrl}/auth/github`;
//   };

//   const onYandexLogin = () => {
//     window.location.href = `${environment.apiUrl}/auth/yandex`;
//   };

  return (
    <>
      <Box
        sx={(theme) => ({
          width: { xs: '100%', md: '50vw' },
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {/* <Box sx={{ gap: 2, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              
              <img height={96} src={logo} />

            </Box> */}

          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: 'hidden',
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Typography level='h1' sx={{ textAlign: 'center', mb: 0, lineHeight: 0 }}>
                Units Platform
              </Typography>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <img height={56} src={logo} />

              </Box>

              <Stack direction="row" gap={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={() => onGoogleLogin()}
                >
                  <img width={24} src={google} />

                </Button>
                {/* <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={() => onYandexLogin()}
                >
                  <img width={24} src={yandex} />
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={() => onGithubLogin()}
                  disabled
                >
                  <img width={24} src={apple} />
                </Button> */}
              </Stack>

            </Stack>
            <Divider
              sx={(theme) => ({
                [theme.getColorSchemeSelector('light')]: {
                  color: { xs: '#FFF', md: 'text.tertiary' },
                },
              })}
            >
              или
            </Divider>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  // const formElements = event.currentTarget.elements;
                  // const data = {
                  //   email: formElements.email.value,
                  //   password: formElements.password.value,
                  //   persistent: formElements.persistent.checked,
                  // };
                  // alert(JSON.stringify(data, null, 2));
                }}
              >
                <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Пароль</FormLabel>
                  <Input type="password" name="password" />
                </FormControl>
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox size="sm" label="Запомнить меня" name="persistent" />
                    <Link level="title-sm" href="#replace-with-a-link">
                      Забыли пароль?
                    </Link>
                  </Box>
                  <Button type="submit" fullWidth disabled>
                    Вход
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
          <Box sx={{ mb: 0, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img height={56} src={logo1} />
          </Box>
          <Box component="footer" sx={{ pb: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © aitomaton {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '50vw' },
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
          },
        })}
      />
    </>
  );
};

export default AuthPage;