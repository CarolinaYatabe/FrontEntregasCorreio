import './App.css'
import Form from './components/Form'
import Result from './components/RespostaFrete'

function App() {

  
  return (
    <div>
      <h1>Calcular frete</h1>
      <Form />
      <Result />
    </div>  
    )
  }
  
  export default App








  
  // const [result, setResult] = useState<{ sucesso: boolean; valor: number; mensagem: string } | null>(null);
  
// const handleFreteSubmit = async (data: { origem: string; destino: string; peso: number; modalidade: string }) => {
//   try {
//     // Simulação de requisição à API
//     const simulatedResult = {
//       sucesso: true,
//       valor: 49.90,
//       mensagem: 'Cálculo realizado com sucesso!',
//       modalidade: data.modalidade,
//       prazo: "29/01/2025"
//     };

//     setResult(simulatedResult);
//   } catch (error) {
//     console.error('Erro ao calcular o frete:', error);
//     setResult({
//       sucesso: false,
//       valor: 0,
//       mensagem: 'Não foi possível calcular o frete.',
//     });
//   }
// };