
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { React, Fragment, useState, useEffect } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Person from '@mui/icons-material/Person';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";


export default function UserIcone({ user }) {
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);

    };
    function deslogar(e) {
        localStorage.clear()
        window.location.reload(false);
    }
    const link = `/gerenciar-lojas/${localStorage.getItem('userId')}/`
    const donoDeLoja = user.planoVigentePlanoId == 2 || user.planoVigentePlanoId == 3 || user.planoVigentePlanoId == 4? <MenuItem>
    <ListItemIcon>
        <Settings fontSize="small" />
    </ListItemIcon>
    <Link className="linkCard" to={link}>Gerenciar lojas</Link>

</MenuItem>: <></>
    return (

        <Fragment>

            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 40, height: 40 }} src="https://assets.stickpng.com/thumbs/585e4be1cb11b227491c3398.png"></Avatar>
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <MenuItem>
                    {user.codigoUser}
                    {/* passar valor de user.codigoUser*/}
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Person fontSize="small" />
                        <Link className="linkCard" to={"/perfil"}>Minha conta</Link>
                    </ListItemIcon>                    
                </MenuItem>
                <MenuItem>
                <ListItemIcon>
                    <CurrencyExchangeIcon fontSize="small" sx={{marginRigth:10}}/>
                        
                    </ListItemIcon>
                    {user.tcoins} Tcoins
                    </MenuItem>
                {donoDeLoja}
                <MenuItem onClick={deslogar}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Sair
                </MenuItem>
            </Menu>
        </Fragment>
    );
}

