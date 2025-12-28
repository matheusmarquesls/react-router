import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [serie, setSerie] = useState("");
  const [fila, setFila] = useState([]);
  const navigate = useNavigate();

  const Cadastro = (e) => {
    e.preventDefault();
    if (!nome || !serie) return;
    const novaFila = [...fila, { nome, serie: parseInt(serie) }];
    novaFila.sort((a, b) => a.serie - b.serie);
    setFila(novaFila);
    setNome("");
    setSerie("");
  };

  const irParaAtendimento = () => {
    navigate("/atendimento", { state: { fila } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Cadastro</h1>

      <form className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Série"
          value={serie}
          onChange={(e) => setSerie(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={Cadastro}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="mt-6 text-xl font-semibold">Fila de Espera</h2>
      <ul className="mt-4 w-80">
        {fila.map((item, index) => (
          <li key={index} className="border-b py-2">
            {item.nome} - Série: {item.serie}
          </li>
        ))}
      </ul>

      <button
        onClick={irParaAtendimento}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Ir para Atendimento
      </button>
    </div>
  );
}

export default Cadastro;