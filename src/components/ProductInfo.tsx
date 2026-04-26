import { CheckCircle2 } from 'lucide-react';

export function ProductInfo() {
  const specs = [
    "Modelo inspirado na nova coleção Brasil 2026",
    "Disponível nas versões Amarela (Home) e Azul (Away)",
    "Nome e número totalmente personalizáveis",
    "Personalização inclusa no valor",
    "Tecido premium respirável Dry Fit",
    "Material leve, confortável e de alta durabilidade",
    "Escudo e detalhes em acabamento de alta qualidade",
    "Costuras reforçadas",
    "Modelagem padrão torcedor",
    "Ideal para jogos, coleção e uso casual",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Placeholder para imagem */}
        <div className="bg-gray-100 rounded-2xl aspect-[4/5] flex items-center justify-center border border-gray-200 shadow-inner overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-brasil-yellow/20 to-brasil-green/20" />
           <p className="text-gray-400 font-medium z-10">Camisa Brasil 2026</p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">CAMISA SELEÇÃO BRASIL 2026 PERSONALIZÁVEL</h2>
            <p className="text-brasil-blue font-semibold uppercase tracking-wider text-sm">Edição Especial 🇧🇷</p>
          </div>

          <div className="flex items-baseline gap-3 border-b border-gray-100 pb-6">
            <span className="text-gray-400 line-through text-lg">De R$199,90</span>
            <span className="text-4xl font-extrabold text-brasil-green">R$149,99</span>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Especificações:</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {specs.map((spec, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-brasil-green shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h4 className="font-bold text-sm mb-2">Detalhes da Personalização:</h4>
            <p className="text-sm text-gray-600">
              Escolha seu nome e número favoritos. Aceitamos também nomes infantis, apelidos e dedicatórias. <br/>
              <strong>Exemplo:</strong> JOÃO 10
            </p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Tamanhos: P, M, G, GG</p>
          </div>
        </div>
      </div>
    </section>
  );
}
