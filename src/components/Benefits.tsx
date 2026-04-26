import { ShieldCheck, Truck, Droplet, Star } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-brasil-yellow" />,
      title: "Personalização Grátis",
      desc: "Nome e número de sua escolha já inclusos no valor."
    },
    {
      icon: <Truck className="w-8 h-8 text-brasil-yellow" />,
      title: "Envio Nacional",
      desc: "Entregamos para todo o Brasil com segurança e rastreio."
    },
    {
      icon: <Droplet className="w-8 h-8 text-brasil-yellow" />,
      title: "Tecido Premium",
      desc: "Tecnologia Dry Fit. Alta respirabilidade e conforto."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brasil-yellow" />,
      title: "Compra Segura",
      desc: "Pagamento criptografado via gateway seguro."
    }
  ];

  return (
    <section className="bg-brasil-green text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <div key={i} className="text-center flex flex-col items-center p-4">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              {b.icon}
            </div>
            <h4 className="font-bold text-lg mb-2">{b.title}</h4>
            <p className="text-green-100 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
