import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";

export default function MultiActionAreaCard({ loja, lojaInfo }) {
  const navigate = useNavigate();

  // let lojaToRender;
  const imageDefault = 'https://i1.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg';
  const imageCard = loja.imagem === null ? imageDefault : loja.imagem;
  // if (ramo == "") {
  //     lojaToRender = dados;
  // } else {
  //     lojaToRender = dados.filter(function (loja) {
  //         return loja.ramo == ramo;
  //     });

  // }
  const props = {
    nome: loja.nome,
    detalhe: loja.descricao,
    imagem: loja.imageCard,
    id: loja.id,
    //ramo
    //produtos array

    ramo: loja.ramoId,
  }
  // onClick={() => navigate("/gerenciar-produtos", lojaInfo([{
  //   nome: loja.nome,
  //   detalhe: loja.descricao,
  //   imagem: loja.imageCard,
  //   id: loja.id,
  //   //ramo
  //   //produtos array

  //   ramo: loja.ramoLoja,
  const link = `loja/${loja.nome}`
  // }])
  return (
    <Card className="CardItem2" sx={{ maxWidth: 260 }}>
      <Link className="linkCard" to={link}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="270"
          minWidth='270'
          image={imageCard}
          alt={loja.nome}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {loja.nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {loja.descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          MAIS
        </Button>
      </CardActions>

      </Link>
      
    </Card>
  );
}
