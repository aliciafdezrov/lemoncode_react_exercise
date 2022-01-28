import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Person from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {routes} from '../router';
import {useMatch, useNavigate} from "react-router-dom";
import {switchRoutes} from "../router/routes";

const ResponsiveAppBar: React.FC = (props) => {
    const {children} = props;
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const isCharacterDetail = useMatch({path: switchRoutes.characterDetail});
    const isMemberDetail = useMatch({path: switchRoutes.memberDetail});

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClickNavMenu = (route: string) => {
        navigate(route);
        setAnchorElNav(null);
    }

    return (
        <div>
            <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            {!Boolean(isMemberDetail || isCharacterDetail) ? (
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </IconButton>
                            ) : (
                                <IconButton color="inherit" aria-label="go-back" onClick={() => navigate(-1)}>
                                    <ArrowBackIcon/>
                                </IconButton>
                            )}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                <MenuItem onClick={() => handleClickNavMenu(routes.members)}>
                                    <Typography textAlign="center">Github members</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => handleClickNavMenu(routes.characters)}>
                                    <Typography textAlign="center">Rick y Morty</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {!Boolean(isMemberDetail || isCharacterDetail) ? (
                                <>
                                    <Button
                                        onClick={() => handleClickNavMenu(routes.members)}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        Github members
                                    </Button>

                                    <Button
                                        onClick={() => handleClickNavMenu(routes.characters)}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        Rick y Morty
                                    </Button>
                                </>
                            ) : (
                                <IconButton color="inherit" aria-label="go-back" onClick={() => navigate(-1)}>
                                    <ArrowBackIcon/>
                                </IconButton>
                            )}
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="User">
                                        <Person/>
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={() => handleClickNavMenu(routes.root)}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {children}
        </div>
    );
};
export default ResponsiveAppBar;
