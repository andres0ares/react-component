//importa componente
import ExibeNomes from './components/ExibeNomes';

function App() {

  // JSON com nomes e notas
  const data = [
    { "nome": "José Alves Dos Santos", "nota": 37 },
    { "nome": "Anderson Da Silva", "nota": 49 }, 
    { "nome": "Maria Ferreira", "nota": 68 },
    { "nome": "Ana Oliveira", "nota": 87 }
  ];

  //Exibe componente e passa a constante 'data' como propriedade
  return (
    <ExibeNomes notas={data} />
  );
}

export default App;
