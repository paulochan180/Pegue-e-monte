
"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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

    const numeroLoja = "5521993665606"; // Ajuste seu número aqui
    const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-white p-6 max-w-md w-full mx-auto rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-black text-center">Monte seu Kit de Festa</h1>
        <h1 className="text-2xl font-bold mb-4 text-black text-center">Pegue e Monte</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Medida do painel */}
          <div>
            <label className="block font-semibold text-black">Medida do painel (diâmetro):</label>
            <select
              value={diametro}
              onChange={(e) => setDiametro(e.target.value)}
              className="border rounded w-full p-2 text-black"
              required
            >
              <option value="">Selecione...</option>
              <option value="50cm">50cm</option>          
              <option value="150cm">150 cm</option>
            </select>
          </div>

          {/* Tema */}
          <div>
            <label className="block font-semibold text-black">Tema/Imagem:</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="border rounded w-full p-2 text-black"
              placeholder="Ex: Safari, Princesas, Carros..."
              required
            />
          </div>

          {/* Opcionais */}
          <div>
            <label className="block font-semibold text-black">Opcionais:</label>
            <div className="space-y-2">
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  checked={opcionais.includes("Arco de bolas")}
                  onChange={() => handleOpcionalChange("Arco de bolas")}
                  className="mr-2"
                />
                Arco de bolas
              </label>
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  checked={opcionais.includes("Mesa / Cômoda")}
                  onChange={() => handleOpcionalChange("Mesa / Cômoda")}
                  className="mr-2"
                />
                Mesa / Cômoda
                 </label>
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  checked={opcionais.includes("Escadinha")}
                  onChange={() => handleOpcionalChange("Escadinha")}
                  className="mr-2"
                />
                Escadinha
              </label>
            </div>
          </div>

          {/* Datas */}
          <div>
            <label className="block font-semibold text-black">Data de Retirada:</label>
            <input
              type="date"
              value={retirada}
              onChange={(e) => setRetirada(e.target.value)}
              className="border rounded w-full p-2 text-black"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-black">Data de Devolução:</label>
            <input
              type="date"
              value={devolucao}
              onChange={(e) => setDevolucao(e.target.value)}
              className="border rounded w-full p-2 text-black"
              required
            />
          </div>

          {/* Dados do cliente */}
          <div>
            <label className="block font-semibold text-black">Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border rounded w-full p-2 text-black"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-black">WhatsApp:</label>
            <input
              type="text"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
              className="border rounded w-full p-2 text-black"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-black">
              E-mail: <span className="text-red-600">(opcional)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded w-full p-2 text-black"
            />
          </div>

          <div>
            <label className="block font-semibold text-black">Endereço:</label>
            <textarea
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="border rounded w-full p-2 text-black"
            />
          </div>

          <div>
            <label className="block font-semibold text-black">
              Observações: <span className="text-red-600">(opcional)</span>
            </label>
            <textarea
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              className="border rounded w-full p-2 text-black"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 w-full"
          >
            <FaWhatsapp className="mr-2" />
            Enviar Pedido via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
