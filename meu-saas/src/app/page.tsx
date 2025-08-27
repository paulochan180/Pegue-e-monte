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

    // ajuste para o seu número (ideal: 55 + DDD + número)
    const numeroLoja = "21993665606";
    const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  };

  const baseInput =
    "w-full p-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400";

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-white/85 backdrop-blur-sm p-6 max-w-xl mx-auto rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Monte seu Kit de Festa</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Medida do painel */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Medida do painel (diâmetro):
            </label>
            <select
              value={diametro}
              onChange={(e) => setDiametro(e.target.value)}
              className={baseInput}
              required
            >
              <option value="">Selecione...</option>
              <option value="50 cm">50 cm</option>
              <option value="100 cm">100 cm</option>
              <option value="120 cm">120 cm</option>
              <option value="150 cm">150 cm</option>
            </select>
          </div>

          {/* Tema */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">Tema/Imagem:</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className={baseInput}
              placeholder="Ex: Safari, Princesas, Carros..."
              required
            />
          </div>

          {/* Opcionais */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Opcionais:</label>
            <div className="space-y-2 text-gray-900">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={opcionais.includes("Arco de bolas")}
                  onChange={() => handleOpcionalChange("Arco de bolas")}
                />
                Arco de bolas
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={opcionais.includes("Mesa / Cômoda")}
                  onChange={() => handleOpcionalChange("Mesa / Cômoda")}
                />
                Mesa / Cômoda
              </label>
            </div>
          </div>

          {/* Datas */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">Data de Retirada:</label>
            <input
              type="date"
              value={retirada}
              onChange={(e) => setRetirada(e.target.value)}
              className={baseInput}
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">Data de Devolução:</label>
            <input
              type="date"
              value={devolucao}
              onChange={(e) => setDevolucao(e.target.value)}
              className={baseInput}
              required
            />
          </div>

          {/* Dados do cliente */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1">Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={baseInput}
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">WhatsApp:</label>
            <input
              type="text"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
              className={baseInput}
              placeholder="(DDD) 90000-0000"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">E-mail:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={baseInput}
              placeholder="voce@exemplo.com"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">Endereço:</label>
            <textarea
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className={baseInput}
              rows={3}
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">Observações:</label>
            <textarea
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              className={baseInput}
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white rounded-md px-4 py-2 font-semibold hover:bg-green-700 transition"
          >
            Enviar Pedido via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

