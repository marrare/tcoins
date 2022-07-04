import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ data }) {

  // let lojaToRender;
  // if (ramo == "") {
  //     lojaToRender = dados;
  // } else {
  //     lojaToRender = dados.filter(function (loja) {
  //         return loja.ramo == ramo;
  //     });
  // }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://vinicolaaraucaria.com.br/wp-content/uploads/2020/06/interna_restaurante-1-1400x700.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          MAIS
        </Button>
      </CardActions>
    </Card>
  );
}
