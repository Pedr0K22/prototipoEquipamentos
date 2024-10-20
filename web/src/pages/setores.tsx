import { Button } from "../components/ui/button";
import { useNavigate } from 'react-router-dom';
import Nav from "../components/ui/nav";

export function  Setores() {
    const navigate = useNavigate();

    const handleButtonClickA = () => {
      navigate('/setorA');  // Caminho para onde quer redirecionar
    };
    const handleButtonClickB = () => {
      navigate('/setorB');  // Caminho para onde quer redirecionar
    };
    const handleButtonClickC = () => {
      navigate('/setorC');  // Caminho para onde quer redirecionar
    };
    const handleButtonClickD = () => {
      navigate('/setorD');  // Caminho para onde quer redirecionar
    };
    const handleButtonClickE = () => {
      navigate('/setorE');  // Caminho para onde quer redirecionar
    };     
    const handleButtonClickF = () => {
      navigate('/setorF');  // Caminho para onde quer redirecionar
    };
return (
  <><Nav /><div className="grid gap-4 grid-cols-2">
    <Button onClick={handleButtonClickA}>Utilidades e Caldeira</Button>
    <Button onClick={handleButtonClickB}>Operacional</Button>
    <Button onClick={handleButtonClickC}>Preparação</Button>
    <Button onClick={handleButtonClickD}>Extração</Button>
    <Button onClick={handleButtonClickE}>Refinaria</Button>
    <Button onClick={handleButtonClickF}>Envase</Button>
  </div></>
 )
}
export default Setores;