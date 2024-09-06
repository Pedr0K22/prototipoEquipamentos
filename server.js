//pasta de servidor local
const express = require('express');
const cors =  require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const data = [
    {
        setor: 'limpeza',
        equipamentos: [
           {
            nome: 'pano de chão',
            componentes: ['detergente', 'pano', 'bucha']
            },
            {
            nome: 'pano de chão',
            componentes: ['detergente', 'pano', 'bucha']
            }
        ] 
    },
    {
        setor: 'limpeza',
        equipamentos: [
           {
            nome: 'pano de chão',
            componentes: ['detergente', 'pano', 'bucha']
            },
            {
            nome: 'pano de chão',
            componentes: ['detergente', 'pano', 'bucha']
            }
        ] 
    }

];

app.get('/api/setores', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log('Servidor rodando na porta ${port}');
});

