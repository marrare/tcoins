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
import UserIcone from './UserInformation'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import UsuarioService from '../services/UsuarioService';

export default function ButtonAppBar() {

  // const opcao = isLogado ? <UserIcone user={user}></UserIcone>;
  // <Button color="inherit"><Link to="/login" className="Login Botao">Login</Link></Button>
  // <Button color="inherit"><Link to="/cadastro" className="Cadastro Botao">Cadastro</Link></Button>


  //pra o user que logar
  const [isLogado, setLogado] = React.useState(false);
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [userID, setId] = useState()

  useEffect(() => {
    const idUsuario = localStorage.getItem('userId')
    console.log(idUsuario)

    setId(idUsuario)
    getUser();
  }, [userID])

  async function getUser() {
    const usuario = await UsuarioService.getUsuario(userID);
    if (usuario.status == 200 || usuario.status == 404) setUser(usuario.data);

  }
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


            <UserIcone user={user}></UserIcone>

          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}