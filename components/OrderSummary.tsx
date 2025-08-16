
import React from 'react';
import type { OrderItem } from '../types';

interface OrderSummaryProps {
  order: OrderItem[];
  onDeleteItem: (index: number) => void;
}

const formatIDR = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ order, onDeleteItem }) => {
  const total = order.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 overflow-y-auto">
        {order.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Belum ada item dalam pesanan ini.</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {order.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="flex-grow pr-4">
                  <p className="font-semibold text-gray-200">{item.quantity}x {item.name}</p>
                  {item.notes && <p className="text-xs text-gray-400 italic">{item.notes}</p>}
                </div>
                <div className="flex items-center space-x-4 flex-shrink-0">
                    <div className="text-right">
                        <p className="font-mono text-gray-300">{formatIDR(item.price * item.quantity)}</p>
                        {item.quantity > 1 && (
                            <p className="text-xs font-mono text-gray-500">
                                @{formatIDR(item.price)}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={() => onDeleteItem(index)}
                        className="p-2 text-gray-500 hover:text-red-400 hover:bg-gray-700 rounded-full transition-colors duration-200"
                        aria-label={`Hapus ${item.name}`}
                        title={`Hapus ${item.name}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-4 border-t bg-gray-800 border-gray-700 mt-auto">
        <div className="space-y-2">
          <div className="flex justify-between text-xl font-bold text-gray-100">
            <span>Total</span>
            <span className="font-mono">{formatIDR(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;