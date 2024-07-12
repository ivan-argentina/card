//console.log(import.meta.env.VITE_API_KEY);
import { Container } from "@mui/material";
import ProCard from "./compnents/ProCard";

export default function App() {
  return (
    <Container sx={{ mt: 5 }}>
      <ProCard />
    </Container>
  );
}
