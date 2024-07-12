import { Card, CardContent, CardMedia, Typography } from "@mui/material";
const API_WEATCHER =
  "https://api.weatherapi.com/v1/current.json?key=42f415d32066465b818220415240905&lang=es&q=madrid";

export default function ProCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/1000x200"
        height="200"
        alt="Una Descripcion"
      />
      <CardContent>
        <Typography variant="h5">Titulo</Typography>
        <p>Lorem ipsum dolor sit amet.</p>
      </CardContent>
    </Card>
  );
}
