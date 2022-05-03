import { AppBar, Container, IconButton, SvgIcon, Toolbar, Typography } from '@mui/material';

function Header() {
    return (
        <AppBar position='relative'>
            <Container>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton color='inherit'>
                        <SvgIcon>
                            <path d="M 24 1.6875 L 24 25.3125 L 0 25.3125 L 0 1.6875 Z M 12.644531 15.160156 L 16.792969 7.488281 L 15.042969 7.488281 L 12.589844 12.289062 C 12.335938 12.777344 12.105469 13.253906 11.902344 13.699219 L 11.25 12.289062 L 8.828125 7.488281 L 6.953125 7.488281 L 11.0625 15.070312 L 11.0625 20.054688 L 12.644531 20.054688 Z M 12.644531 15.160156 " />
                        </SvgIcon>
                    </IconButton>
                    <Typography variant='h5'>
                        Hacker News
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;