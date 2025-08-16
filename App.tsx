
import React, { useState, KeyboardEvent } from 'react';
import type { Table, ChatMessage } from './types';
import { MENU, MODIFIERS } from './constants';
import { processWaiterCommand } from './services/geminiService';
import TableSelector from './components/TableSelector';
import OrderSummary from './components/OrderSummary';
import ChatWindow from './components/ChatWindow';

const App: React.FC = () => {
  const [activeTableId, setActiveTableId] = useState<number | null>(null);
  const [tables, setTables] = useState<Table[]>([
    { id: 1, name: 'Meja 1', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 1.' }] },
    { id: 2, name: 'Meja 2', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 2.' }] },
    { id: 3, name: 'Meja 3', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 3.' }] },
    { id: 4, name: 'Meja 4', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 4.' }] },
    { id: 5, name: 'Meja 5', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 5.' }] },
    { id: 6, name: 'Meja 6', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 6.' }] },
    { id: 7, name: 'Meja 7', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 7.' }] },
    { id: 8, name: 'Meja 8', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 8.' }] },
    { id: 9, name: 'Meja 9', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 9.' }] },
    { id: 10, name: 'Meja 10', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 10.' }] },
    { id: 11, name: 'Meja 11', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 11.' }] },
    { id: 12, name: 'Meja 12', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 12.' }] },
    { id: 13, name: 'Meja 13', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 13.' }] },
    { id: 14, name: 'Meja 14', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 14.' }] },
    { id: 15, name: 'Meja 15', order: [], chatHistory: [{ sender: 'ai', text: 'Selamat datang! Siap menerima pesanan untuk Meja 15.' }] },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [activeMobileTab, setActiveMobileTab] = useState<'chat' | 'order'>('chat');

  const activeTable = tables.find(t => t.id === activeTableId);

  const updateTableState = (tableId: number, updates: Partial<Table>) => {
    setTables(prevTables =>
      prevTables.map(table =>
        table.id === tableId ? { ...table, ...updates } : table
      )
    );
  };

  const handleSendMessage = async () => {
    if (!activeTableId || !activeTable || !input.trim() || isLoading) return;
    
    const message = input.trim();
    setInput('');
    setIsLoading(true);

    const userMessage: ChatMessage = { sender: 'user', text: message };
    const updatedChatHistory: ChatMessage[] = [...activeTable.chatHistory, userMessage];
    updateTableState(activeTableId, { chatHistory: updatedChatHistory });

    try {
      const response = await processWaiterCommand(MENU, MODIFIERS, activeTable.order, message, activeTableId);
      
      const aiResponseMessage: ChatMessage = { sender: 'ai', text: response.message };
      const finalChatHistory = [...updatedChatHistory, aiResponseMessage];

      if (response.action === 'UPDATE_ORDER' && response.updatedOrder) {
        updateTableState(activeTableId, {
          order: response.updatedOrder,
          chatHistory: finalChatHistory
        });
        setActiveMobileTab('order');
      } else if (response.action === 'CLEAR_ORDER') {
         const clearedMessage: ChatMessage = { sender: 'ai', text: 'Pesanan ditutup dan dibersihkan untuk Meja ' + activeTableId };
         updateTableState(activeTableId, {
          order: [],
          chatHistory: [...finalChatHistory, clearedMessage]
        });
      } else {
        updateTableState(activeTableId, { chatHistory: finalChatHistory });
      }

    } catch (error) {
      console.error("Error processing command:", error);
      const errorMessage: ChatMessage = { sender: 'ai', text: "Maaf, terjadi kesalahan. Silakan coba lagi." };
      const finalChatHistory = [...updatedChatHistory, errorMessage];
      updateTableState(activeTableId, { chatHistory: finalChatHistory });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleSelectTable = (tableId: number) => {
    setActiveTableId(tableId);
    setActiveMobileTab('chat');
  }

  const handleClearChat = (tableId: number) => {
    const tableToClear = tables.find(t => t.id === tableId);
    if (!tableToClear) return;

    const initialMessage: ChatMessage = { sender: 'ai', text: `Selamat datang! Siap menerima pesanan untuk ${tableToClear.name}.` };
    updateTableState(tableId, { chatHistory: [initialMessage] });
  };
  
  const handleDeleteItem = (tableId: number, itemIndex: number) => {
    const tableToUpdate = tables.find(t => t.id === tableId);
    if (!tableToUpdate) return;

    const itemToDelete = tableToUpdate.order[itemIndex];
    if (!itemToDelete) return;

    const updatedOrder = tableToUpdate.order.filter((_, index) => index !== itemIndex);
    
    const removalMessage: ChatMessage = { 
      sender: 'ai', 
      text: `Telah menghapus ${itemToDelete.quantity}x ${itemToDelete.name} dari pesanan.` 
    };
    const updatedChatHistory = [...tableToUpdate.chatHistory, removalMessage];

    updateTableState(tableId, {
      order: updatedOrder,
      chatHistory: updatedChatHistory
    });
  };

  const TabButton: React.FC<{ tabName: 'chat' | 'order'; label: string }> = ({ tabName, label }) => (
    <button
      onClick={() => setActiveMobileTab(tabName)}
      className={`w-full p-3 text-sm font-bold transition-colors duration-200 ${
        activeMobileTab === tabName
          ? 'bg-gray-800 text-indigo-400 border-b-2 border-indigo-500'
          : 'bg-gray-800 text-gray-400 hover:text-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="h-dvh max-h-dvh flex flex-col font-sans text-gray-300 bg-gray-900 overflow-hidden">
      <header className="bg-gray-800 shadow-md p-3 border-b border-gray-700 flex-shrink-0 flex items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-100 truncate">
          {activeTable ? activeTable.name : 'Asisten Pelayan AI'}
        </h1>
        <div className="flex-grow max-w-xs">
            <TableSelector tables={tables} activeTableId={activeTableId} onSelectTable={handleSelectTable} />
        </div>
      </header>
      
      <main className="flex-grow flex flex-col min-h-0">
        {activeTable ? (
          <>
            {/* Tab Navigator & Actions */}
            <div className="flex border-b border-gray-700 flex-shrink-0 items-center bg-gray-800">
              <div className="flex-grow flex">
                <TabButton tabName="chat" label="Obrolan" />
                <TabButton tabName="order" label={`Pesanan (${activeTable.order.length})`} />
              </div>
              {activeMobileTab === 'chat' && (
                 <button
                    onClick={() => handleClearChat(activeTable.id)}
                    className="p-3 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Hapus riwayat obrolan"
                    title="Hapus riwayat obrolan"
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                 </button>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-grow bg-gray-900 min-h-0">
                {activeMobileTab === 'chat' && (
                    <ChatWindow
                        chatHistory={activeTable.chatHistory}
                        isLoading={isLoading}
                    />
                )}
                 {activeMobileTab === 'order' && (
                    <OrderSummary
                        order={activeTable.order}
                        onDeleteItem={(itemIndex) => handleDeleteItem(activeTable.id, itemIndex)}
                    />
                 )}
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-100">Pilih Meja</h3>
              <p className="mt-1 text-sm text-gray-400">Pilih meja dari daftar untuk mulai mengambil pesanan.</p>
            </div>
          </div>
        )}
      </main>

      {/* Input Form - sticks to bottom */}
      {activeTable && activeMobileTab === 'chat' && (
        <div className="flex-shrink-0 px-4 pt-4 border-t border-gray-700 bg-gray-800" style={{ paddingBottom: `calc(1rem + env(safe-area-inset-bottom))` }}>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ketik perintah Anda..."
                    className="flex-grow p-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    disabled={isLoading}
                />
                <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !input.trim()}
                    className="bg-indigo-600 text-white rounded-full p-3 hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-label="Kirim"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;