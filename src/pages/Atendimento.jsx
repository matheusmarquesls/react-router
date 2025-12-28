import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Atendimento() {
  const location = useLocation();
  const navigate = useNavigate();

  
  const filaInicial = location.state?.fila || [];
  const [fila, setFila] = useState(filaInicial);
  const [alunoAtual, setAlunoAtual] = useState(fila[0] || null);

  const atenderProximo = () => {
    if (fila.length > 0) {
      const [proximo, ...resto] = fila;
      setAlunoAtual(proximo);
      setFila(resto);
    } else {
      setAlunoAtual(null);
    }
  };

  if (!alunoAtual) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl font-semibold">Nenhum aluno em atendimento.</p>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded mt-4"
          onClick={() => navigate(-1)} 
        >
          Voltar
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Atendimento</h1>

      <div className="bg-gray-100 border p-4 rounded mb-4 w-80">
        <p><strong>Nome:</strong> {alunoAtual.nome}</p>
        <p><strong>Série:</strong> {alunoAtual.serie}º ano</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Fila de Espera</h2>
      <ul className="bg-white border rounded p-4 w-80">
        {fila.map((aluno, index) => (
          <li key={index} className="border-b py-2">
            {aluno.nome} - Série: {aluno.serie}º ano
          </li>
        ))}
      </ul>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        onClick={atenderProximo}
      >
        Próximo
      </button>
    </div>
  );
}

export default Atendimento;
