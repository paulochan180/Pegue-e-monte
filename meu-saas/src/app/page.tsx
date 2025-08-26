
"use client";

import { useState } from "react";

function formatarDataBrasileira(data: string) {
  if (!data) return "";
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

export default function Page() {     
  const [diametro, setDiametro] = useState("");
  const [tema, setTema] = useState("");
  const [opcionais, setOpcionais] = useState<string[]>([]);
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [obs, setObs] = useState("");
  const [retirada, setRetirada] = useState("");
  const [devolucao, setDevolucao] = useState("");

  const handleOpcionalChange = (opcional: string) => {
    if (opcionais.includes(opcional)) {
      setOpcionais(opcionais.filter((o) => o !== opcional));
    } else {
      setOpcionais([...opcionais, opcional]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // monta a mensagem
    const mensagem = `
*📦 Novo Pedido de Kit Festa*
_____________________________
👤 Nome: ${nome}
📱 WhatsApp: ${whats}
📧 E-mail: ${email}
🏠 Endereço: ${endereco}

📐 Painel: ${diametro}
🎨 Tema: ${tema}
✨ Opcionais: ${opcionais.length > 0 ? opcionais.join(", ") : "Nenhum"}

📅 Retirada: ${formatarDataBrasileira(retirada)}
📅 Devolução: ${formatarDataBrasileira(devolucao)}

📝 Observações: ${obs || "Nenhuma"}
    `.trim();

    // número da papelaria (ajuste aqui!)
    const numeroLoja = "21993665606"; // Exemplo: 55 + DDD + número sem traços
    const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  };

    return (
    <div
     className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-white/85 p-6 max-w-xl mx-auto rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Monte seu Kit de Festa</h1>


      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Medida do painel */}
        <div>
          <label className="block font-semibold">Medida do painel (diâmetro):</label>
          <select
            value={diametro}
            onChange={(e) => setDiametro(e.target.value)}
            className="border rounded w-full p-2"
            required
          >
            <option value="">Selecione...</option>
            <option value="50cm">50cm</option>
            <option value="100cm">100 cm</option>
            <option value="120cm">120 cm</option>
            <option value="150cm">150 cm</option>
          </select>
        </div>

        {/* Tema */}
        <div>
          <label className="block font-semibold">Tema/Imagem:</label>
          <input
            type="text"
            value={tema}
            onChange={(e) => setTema(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Ex: Safari, Princesas, Carros..."
            required
          />
        </div>

        {/* Opcionais */}
        <div>
          <label className="block font-semibold">Opcionais:</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={opcionais.includes("Arco de bolas")}
                onChange={() => handleOpcionalChange("Arco de bolas")}
                className="mr-2"
              />
              Arco de bolas
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={opcionais.includes("Mesa / Cômoda")}
                onChange={() => handleOpcionalChange("Mesa / Cômoda")}
                className="mr-2"
              />
              Mesa / Cômoda
            </label>
          </div>
        </div>

        {/* Datas */}
        <div>
          <label className="block font-semibold">Data de Retirada:</label>
          <input
            type="date"
            value={retirada}
            onChange={(e) => setRetirada(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Data de Devolução:</label>
          <input
            type="date"
            value={devolucao}
            onChange={(e) => setDevolucao(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>

        {/* Dados do cliente */}
        <div>
          <label className="block font-semibold">Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">WhatsApp:</label>
          <input
            type="text"
            value={whats}
            onChange={(e) => setWhats(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Endereço:</label>
          <textarea
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block font-semibold">Observações:</label>
          <textarea
            value={obs}
            onChange={(e) => setObs(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700"
        >
          Enviar Pedido via WhatsApp
        </button>
      </form>
    </div>
  </div>
  );
}
