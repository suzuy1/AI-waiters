import React from 'react';
import type { Table } from '../types';

interface TableSelectorProps {
  tables: Table[];
  activeTableId: number | null;
  onSelectTable: (id: number) => void;
}

const TableSelector: React.FC<TableSelectorProps> = ({ tables, activeTableId, onSelectTable }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tableId = parseInt(event.target.value, 10);
    if (!isNaN(tableId)) {
      onSelectTable(tableId);
    }
  };

  return (
    <div className="relative w-full md:w-auto">
      <select
        value={activeTableId ?? ''}
        onChange={handleChange}
        className="w-full appearance-none bg-gray-700 border border-gray-600 text-white font-semibold py-2 pl-3 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-gray-600 focus:border-indigo-500 transition"
        aria-label="Pilih Meja"
      >
        <option value="" disabled>Pilih Meja</option>
        {tables.map(table => (
          <option key={table.id} value={table.id}>
            {table.name} ({table.order.length > 0 ? `${table.order.length} item` : 'Kosong'})
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
};

export default TableSelector;