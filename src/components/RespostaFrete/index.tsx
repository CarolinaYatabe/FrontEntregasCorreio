import './style.css'

interface ResultProps {
    result: { preco: number; prazo: string; modalidade: string};
  }
  
  const Result: React.FC<ResultProps> = ({ result }) => {
    return (
      <div className="result-container">
            <p>
              O valor do frete para a modalidade <strong>{result.modalidade}</strong> é{' '}
              <strong>R$ {result.preco.toFixed(2)}</strong>.
            </p>
            <p>
              O prazo estimado de entrega é <strong>{result.prazo}</strong>.
            </p>
      </div>

  );
};

  export default Result;