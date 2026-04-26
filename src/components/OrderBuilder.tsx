import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { ShirtItem } from '../types/cart';
import { ShirtForm } from './ShirtForm';
import { CartSummary } from './CartSummary';

export function OrderBuilder() {
  const [items, setItems] = useState<ShirtItem[]>([
    { id: crypto.randomUUID(), color: '', size: '', name: '', number: '' }
  ]);

  const addShirt = () => {
    setItems([...items, { id: crypto.randomUUID(), color: '', size: '', name: '', number: '' }]);
  };

  const updateItem = (id: string, updates: Partial<ShirtItem>) => {
    setItems(items.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <section id="pedidos" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Monte seu Pedido</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Adicione quantas camisas quiser. A promoção de 2 camisas + bola oficial é aplicada automaticamente no resumo!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <ShirtForm 
                key={item.id} 
                index={index} 
                item={item} 
                updateItem={updateItem} 
                removeItem={removeItem} 
              />
            ))}
            
            <button 
              onClick={addShirt}
              className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-bold hover:border-brasil-green hover:text-brasil-green transition-colors flex items-center justify-center gap-2 bg-white"
            >
              <Plus size={20} />
              Adicionar outra camisa
            </button>
          </div>

          <div className="lg:col-span-1">
            <CartSummary items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
