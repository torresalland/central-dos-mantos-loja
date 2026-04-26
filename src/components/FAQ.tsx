export function FAQ() {
  const faqs = [
    {
      q: "Posso escolher qualquer nome?",
      a: "Sim! Você pode colocar seu nome, apelido, nome do seu filho ou até uma dedicatória curta (até 15 caracteres)."
    },
    {
      q: "Posso escolher qualquer número?",
      a: "Sim! Aceitamos qualquer numeração de 0 a 99."
    },
    {
      q: "Quais tamanhos estão disponíveis?",
      a: "Nossas camisas estão disponíveis nos tamanhos P, M, G e GG. A modelagem é padrão torcedor."
    },
    {
      q: "Como funciona a promoção com bola?",
      a: "Ao adicionar exatamente 2 camisas no carrinho, a promoção é ativada automaticamente. O valor é ajustado e você ganha a bola oficial da Copa 2026."
    },
    {
      q: "Como funciona pedido com 3 ou mais camisas?",
      a: "Para pedidos maiores, o botão de finalização abrirá diretamente nosso WhatsApp. Lá, confirmaremos os detalhes de cada camisa e geraremos um link de pagamento único e exclusivo para você."
    },
    {
      q: "O pagamento é seguro?",
      a: "Totalmente seguro. Trabalhamos com os melhores gateways de pagamento do Brasil para garantir a segurança dos seus dados."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-bold text-lg text-brasil-blue mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
