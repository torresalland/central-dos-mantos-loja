export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 text-center text-sm">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="font-bold text-white text-lg">Mantos da Seleção</p>
        <p>Todos os direitos reservados &copy; 2026</p>
        <p className="max-w-xl mx-auto text-xs">
          O pagamento é processado através de um gateway externo totalmente seguro e criptografado.
          Nenhuma informação de cartão de crédito é salva em nossos servidores.
        </p>
        <div className="pt-6 border-t border-gray-800">
          <p>Dúvidas? Entre em contato pelo WhatsApp no fechamento do seu pedido.</p>
        </div>
      </div>
    </footer>
  );
}
