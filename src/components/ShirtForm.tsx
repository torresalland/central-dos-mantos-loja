import { Trash2 } from 'lucide-react';
import type { ShirtItem, ShirtColor, ShirtSize } from '../types/cart';

interface Props {
  index: number;
  item: ShirtItem;
  updateItem: (id: string, updates: Partial<ShirtItem>) => void;
  removeItem: (id: string) => void;
}

export function ShirtForm({ index, item, updateItem, removeItem }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
        <h3 className="font-bold text-lg text-brasil-blue">Camisa {index + 1}</h3>
        <button 
          onClick={() => removeItem(item.id)}
          className="text-red-400 hover:text-red-600 transition-colors p-2"
          aria-label="Remover camisa"
        >
          <Trash2 size={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Cor */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Cor <span className="text-red-500">*</span></label>
          <div className="flex gap-2">
            {(['Amarela', 'Azul'] as ShirtColor[]).map((color) => (
              <button
                key={color}
                onClick={() => updateItem(item.id, { color })}
                className={`flex-1 py-2 px-4 rounded-lg font-medium border-2 transition-all ${
                  item.color === color 
                    ? color === 'Amarela' ? 'bg-brasil-yellow border-brasil-yellow text-gray-900' : 'bg-brasil-blue border-brasil-blue text-white'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Tamanho */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Tamanho <span className="text-red-500">*</span></label>
          <div className="flex gap-2">
            {(['P', 'M', 'G', 'GG'] as ShirtSize[]).map((size) => (
              <button
                key={size}
                onClick={() => updateItem(item.id, { size })}
                className={`w-12 h-12 rounded-lg font-bold border-2 transition-all flex items-center justify-center ${
                  item.size === size
                    ? 'bg-brasil-green border-brasil-green text-white'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Nome */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Nome na Camisa <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            value={item.name}
            onChange={(e) => updateItem(item.id, { name: e.target.value.toUpperCase() })}
            placeholder="Ex: NEYMAR"
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-brasil-green focus:outline-none uppercase"
            maxLength={15}
          />
        </div>

        {/* Número */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Número <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            value={item.number}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              if (val.length <= 2) updateItem(item.id, { number: val });
            }}
            placeholder="Ex: 10"
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-brasil-green focus:outline-none"
            maxLength={2}
          />
        </div>
      </div>
    </div>
  );
}
