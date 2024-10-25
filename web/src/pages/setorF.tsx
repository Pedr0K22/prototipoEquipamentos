import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";


export function SetorF() {
  const navigate = useNavigate();
  const voltar = () => {
    navigate('/dashboard');
  }
  return ( 
    <>
     
  <Button onClick={voltar}>Voltar</Button>
  </>
    )
  };