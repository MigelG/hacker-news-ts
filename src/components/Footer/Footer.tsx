import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar component='footer' sx={{ top: 'auto', bottom: 0 }} position='relative'>
            <Container>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='h5'>
                        &copy; 2022
                    </Typography>
                    <Typography variant='h5'>
                        Михаил Горбунов
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Footer;