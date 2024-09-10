import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

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
        <Card key={idx} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5">{setor.setor}</Typography>
            <List>
              {setor.equipamentos.map((equipamento, idxEquip) => (
                <ListItem key={idxEquip}>
                  <ListItemText
                    primary={equipamento.nome}
                    secondary={
                      <ul>
                        {equipamento.componentes.map((componente, idxComp) => (
                          <li key={idxComp}>{componente}</li>
                        ))}
                      </ul>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default App;