import * as React from 'react';
// import './ButtonAppBar.css';
import logo from '../T-C_ins__1_-removebg-preview.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Toolbar">
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className="Typography" component="div">
            <Link to="/" className="Link"><img className="LogoMenor" src={logo} alt="" /></Link>
          </Typography>
          <div className="HeaderCenter">
            <nav className='HeaderNav'>
              <ul className='HeaderLista'>
                <li className='ListaTitulo'><a href="#">Planos</a></li>
                <li className='ListaTitulo'><a href="#">Quem somos?</a></li>
                <li className='ListaTitulo'><a href="#">Dúvidas</a></li>
                <li className='ListaTitulo'><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
          <div className='Botoes'>
            <Button color="inherit"><Link to="/login" className="Login Botao">Login</Link></Button>
            <Button color="inherit"><Link to="/cadastro" className="Cadastro Botao">Cadastro</Link></Button>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}