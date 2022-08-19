import React from "react";
import "./Planos.css";
import PlanoService from '../../services/PlanoService';
import { useState, useEffect } from 'react';

import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import items from "./TiposPlanos";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import UsuarioService from '../../services/UsuarioService';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function Planos() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState([]);
  const [userID, setId] = useState()

  const handleChange = (event, value) => {
    const planoSelecionado = value.props.value
    setPlanoId(planoSelecionado);
  };

  useEffect(() => {
    setInterval(() => {
      const idUsuario = localStorage.getItem('userId')
      setId(idUsuario)
    }, 1000);
  }, []);

  useEffect(() => {
    const idUsuario = localStorage.getItem('userId')
    setId(idUsuario)
    getUser();
  }, [userID])

   function getUser() {
    if(userID != undefined){
    const usuario =  UsuarioService.getUsuario(userID).then((user)=>{ 
      setUser(user.data)})}

  }

  const [planoId, setPlanoId] = useState([]);
  const [duracao, setDuracao] = useState([]);

  const editPlano = (id, e) => {
    localStorage.setItem('idPlano', planoId)
    if(planoId == 4){
    window.location.replace('https://mpago.la/26qhsxX')}
  else if(planoId == 3){
    window.location.replace('https://mpago.la/1Fmsyzd')
  }else if(planoId == 2){
    window.location.replace('https://mpago.la/2CK98SK')
  }}

  const planoVigente = user.planoVigentePlanoId ? user.planoVigentePlanoId: 1
  const planoUser = items[planoVigente - 1]
  async function atualizarPlano(id) {
    const planoAtualizado = await PlanoService.atualizarPlano(userID, planoId);
    if (planoAtualizado.status == 200 || planoAtualizado.status == 404) {
        handleClose()
        console.log("Plano atualizado com sucesso")

    } else {
        handleClose()
        console.log("Erro ao atualizar plano")
    };

}
 const cabeçalho = userID != 'undefined' && userID != undefined  ?  <div className="planoAtual">
 <div className="titulo">
   <h3>Plano Vigente</h3>
 </div>
 <div className="containerDetalhePlano">
   <div className="detalhePlano">
     <p>Nome do Plano: <b> {planoUser.nome}</b></p>
     <p>Preço pago: <b> {planoUser.preco}</b></p>  
   </div>
   <div className="botaoPlano">
     <Button
       sx={{ marginBottom: 1 }}
       className="botao"
       type="submit"
       color="success"
       fullWidth
       variant="contained"
       onClick={handleOpen}
     >
       Trocar de Plano
     </Button>
     <Button type="submit" color="error" fullWidth variant="outlined">
       Cancelar Plano
     </Button>
   </div>
 </div>
</div>:<></>
  return (
    <div>
      {cabeçalho}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Pagamento
          </Typography>

          <InputLabel id="demo-simple-select-label">Plano</InputLabel>
          <Select
            sx={{ marginBottom: 1 }}
            autoComplete="given-name"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="Ramo"
            required
            fullWidth
            value={planoId}
            label="Ramo"
            size="small"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Básico</MenuItem>
            <MenuItem value={2}>Padrão</MenuItem>
            <MenuItem value={3}>Padrão Múltiplo</MenuItem>
            <MenuItem value={4}>Premium</MenuItem>
          </Select>

          <Button
            sx={{ marginBottom: 1, backgroundColor: "red", marginTop: 2 }}
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleClose}
          >
            CANCELAR
          </Button>
          <Button
            sx={{ backgroundColor: "green" }}
            type="submit"
            fullWidth
            variant="contained"
            onClick={(e) => editPlano(userID, e)}
          >
            CONFIRMAR
          </Button>
        </Box>
      </Modal>

      <Carousel className="carrossel">
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Carousel>
    </div>
  );
}

const Item = ({ nome, preco, lojas, produtos }) => {
  return (
    <Paper>
      <h2>{nome}</h2>
      <p>{preco}</p>
      <p>{lojas}</p>
      <p>{produtos}</p>
    </Paper>
  );
};

export default Planos;
