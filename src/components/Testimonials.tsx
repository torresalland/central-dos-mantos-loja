import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Carlos Eduardo",
      text: "Comprei para mim e para meu filho. Ficou perfeito, a qualidade me surpreendeu muito!",
      stars: 5
    },
    {
      name: "Mariana Souza",
      text: "A personalização veio certinha. Escolhi a azul com meu apelido, super recomendo.",
      stars: 5
    },
    {
      name: "Roberto Almeida",
      text: "O tecido é leve e confortável. Chegou no prazo e o atendimento no WhatsApp foi top.",
      stars: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">Quem comprou, aprovou! 🇧🇷</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-3">
                {[...Array(r.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brasil-yellow text-brasil-yellow" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{r.text}"</p>
              <p className="font-bold text-sm text-brasil-blue">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
