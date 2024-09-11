import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function App() {
  const [setores, setSetores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch dos dados da API
    axios.get('http://localhost:3001/api/setores')
      .then(response => {
        setSetores(response.data);
        setLoading(false); // Dados carregados
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setError('Erro ao carregar os dados'); // Definir mensagem de erro
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography variant="h5" align="center">
          Carregando dados...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h5" align="center" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Setores e Equipamentos da Empresa
      </Typography>
      
      {setores.map((setor, idx) => (
        <div key={idx} style={{ marginBottom: '40px' }}>
          <Typography variant="h4" gutterBottom>
            {setor.setor}
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                      Nome do Equipamento
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                      ID (Componentes)
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {setor.equipamentos.map((equipamento, idxEquip) => (
                  equipamento.componentes.map((componente, idxComp) => (
                    <TableRow key={`${setor.setor}-${idxEquip}-${idxComp}`}>
                      <TableCell>{equipamento.nome}</TableCell>
                      <TableCell>{componente}</TableCell>
                    </TableRow>
                  ))
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </Container>
  );
}

export default App;
