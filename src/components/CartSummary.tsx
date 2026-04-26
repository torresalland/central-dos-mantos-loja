import { ShoppingBag, MessageCircle, AlertCircle } from 'lucide-react';
import type { ShirtItem } from '../types/cart';
import { calculateCartPrice } from '../utils/pricing';
import { paymentLinks } from '../config/paymentLinks';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface Props {
  items: ShirtItem[];
}

export function CartSummary({ items }: Props) {
  const { total, originalTotal, discount, isPromoApplied } = calculateCartPrice(items.length);

  const isValid = items.length > 0 && items.every(
    item => item.color && item.size && item.name.trim() && item.number.trim()
  );

  const handleCheckout = () => {
    if (!isValid) return;

    if (items.length === 1) {
      window.location.href = paymentLinks.camisa1;
    } else if (items.length === 2) {
      window.location.href = paymentLinks.promo;
    } else {
      window.location.href = generateWhatsAppLink(items);
    }
  };

  if (items.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center text-gray-500">
        <ShoppingBag className="mx-auto mb-2 opacity-50" size={32} />
        <p>Seu pedido está vazio.</p>
        <p className="text-sm mt-1">Adicione uma camisa para ver o resumo.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-brasil-green sticky top-24">
      <h3 className="font-bold text-xl mb-4 border-b pb-4">Resumo do Pedido</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Quantidade:</span>
          <span className="font-medium">{items.length} {items.length === 1 ? 'camisa' : 'camisas'}</span>
        </div>
        
        {isPromoApplied && (
          <div className="bg-green-50 text-green-700 p-3 rounded-lg border border-green-200 text-sm font-medium flex items-start gap-2">
            <span className="text-lg">⚽</span>
            <p>Promoção aplicada: 2 camisas personalizadas + bola oficial da Copa 2026 grátis!</p>
          </div>
        )}

        <div className="flex justify-between text-gray-500 line-through">
          <span>Valor Original:</span>
          <span>R$ {originalTotal.toFixed(2).replace('.', ',')}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-brasil-green font-bold">
            <span>Economia:</span>
            <span>- R$ {discount.toFixed(2).replace('.', ',')}</span>
          </div>
        )}

        <div className="flex justify-between text-2xl font-extrabold text-gray-900 pt-4 border-t border-gray-100">
          <span>Total:</span>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>

      {!isValid && (
        <div className="mb-4 flex items-start gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p>Preencha todos os campos obrigatórios (cor, tamanho, nome e número) de todas as camisas para finalizar.</p>
        </div>
      )}

      <button
        onClick={handleCheckout}
        disabled={!isValid}
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-md transition-all flex justify-center items-center gap-2 ${
          !isValid 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : items.length >= 3 
              ? 'bg-[#25D366] hover:bg-[#1da851] text-white' 
              : 'bg-brasil-green hover:bg-green-600 text-white hover:scale-105'
        }`}
      >
        {items.length >= 3 ? (
          <>
            <MessageCircle size={24} />
            <span>Enviar pedido no WhatsApp</span>
          </>
        ) : (
          <span>{isPromoApplied ? 'Finalizar pedido com promoção' : 'Finalizar pedido'}</span>
        )}
      </button>

      {items.length >= 3 && (
        <p className="text-center text-xs text-gray-500 mt-3">
          Para 3 ou mais camisas, finalizamos seu pedido via WhatsApp com condições especiais.
        </p>
      )}
    </div>
  );
}
