import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import Nav from "../components/ui/nav";


export function SetorB() {
  const navigate = useNavigate();
  const voltar = () => {
    navigate('/dashboard');
  }
  return ( 
  <>

  <Button onClick={voltar}>Voltar</Button>
  <Nav />
  </>
  )
};