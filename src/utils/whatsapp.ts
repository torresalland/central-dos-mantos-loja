import { paymentLinks } from '../config/paymentLinks';
import type { ShirtItem } from '../types/cart';

export function generateWhatsAppLink(items: ShirtItem[]): string {
  let message = `Olá! Quero fazer um pedido personalizado:\n\nQuantidade total de camisas: ${items.length}\n\n`;

  items.forEach((item, index) => {
    message += `Camisa ${index + 1}:\n`;
    message += `Cor: ${item.color}\n`;
    message += `Tamanho: ${item.size}\n`;
    message += `Nome: ${item.name}\n`;
    message += `Número: ${item.number}\n\n`;
  });

  message += `Por favor, envie o link de pagamento personalizado.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${paymentLinks.whatsappNumber}?text=${encodedMessage}`;
}
