import React from "react";
import "./Planos.css";

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

  const [ramo, setRamo] = React.useState("");

  const handleChange = (event, value) => {
    console.log(value.props.value);
    setRamo(value.props.value);
  };

  return (
    <div>
      <div className="planoAtual">
        <div className="titulo">
          <h3>Plano Vigente</h3>
        </div>
        <div className="containerDetalhePlano">
          <div className="detalhePlano">
            <p>Nome do Plano: </p>
            <p>Data de Contratação: </p>
            <p>Data de Expiração: </p>
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
      </div>

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
            value={ramo}
            label="Ramo"
            size="small"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Básico</MenuItem>
            <MenuItem value={20}>Padrão</MenuItem>
            <MenuItem value={30}>Padrão Múltiplo</MenuItem>
            <MenuItem value={40}>Premium</MenuItem>
          </Select>
          <InputLabel id="demo-simple-select-label">Preço: 70,00</InputLabel>
          <fieldset className="Fieldset">
            <legend className="Legenda">Detalhes do Cartão</legend>

            <div className="formModal">
              <TextField
                sx={{ height: 8, marginBottom: 5 }}
                autoComplete="given-name"
                name="Nome"
                required
                fullWidth
                id="Nome"
                label="Nome"
                size="small"
              />
              <TextField
                sx={{ height: 8, marginBottom: 5 }}
                autoComplete="given-name"
                type="number"
                name="CPF"
                required
                fullWidth
                id="CPF"
                label="CPF"
                size="small"
              />
            </div>

            <TextField
              sx={{ height: 8, marginBottom: 5 }}
              autoComplete="given-name"
              type="number"
              name="NumeroCartao"
              required
              fullWidth
              id="NumeroCartao"
              label="Número do Cartão"
              size="small"
            />

            <InputLabel id="demo-simple-select-label">Vencimento:</InputLabel>
            <div className="formModal">
              <TextField
                sx={{ height: 8, marginBottom: 5 }}
                autoComplete="given-name"
                type="date"
                name="DataVencimento"
                required
                fullWidth
                id="DataVencimento"
                size="small"
              />

              <TextField
                sx={{ height: 8, marginBottom: 5 }}
                autoComplete="given-name"
                name="CodigoSeguranca"
                required
                fullWidth
                id="CodigoSeguranca"
                label="Código Segurança"
                size="small"
              />
            </div>
          </fieldset>

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
