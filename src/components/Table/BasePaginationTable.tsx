import { type ReactElement } from 'react';
import BaseText from '../Text/BaseText';
import { useScreen } from '../../hooks/useScreen';

interface BasePaginationTableProps<T> {
  columns: (keyof T)[];
  items: T[];
  page: number; // página atual
  pageSize: number; // itens por página
  total: number; // total de itens
  onPageChange: (page: number) => void; // callback para mudar página
}

export function BasePaginationTable<T>({
  columns,
  items,
  page,
  pageSize,
  total,
  onPageChange,
}: BasePaginationTableProps<T>) {
  const { isMobile } = useScreen();

  if (!items.length) return <BaseText>No items</BaseText>;

  const totalPages = Math.ceil(total / pageSize);

  let tableHtml: ReactElement = <></>;

  if (isMobile) {
    tableHtml = (
      <div className="border rounded-md">
        <div className="flex bg-accent font-semibold text-center">
          {columns.map((column, idx) => (
            <div key={idx} className="flex-1 p-2 border-r last:border-r-0">
              {String(column)}
            </div>
          ))}
        </div>

        {items.map((item, rowIdx) => (
          <div key={`row-${rowIdx}`} className="flex text-center border-b last:border-b-0">
            {columns.map((column, colIdx) => (
              <div key={colIdx} className="flex-1 p-2 border-r last:border-r-0">
                {String(item[column])}
              </div>
            ))}
          </div>
        ))}

        <div className="flex justify-between items-center ">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
          >
            Anterior
          </button>

          <span>
            Página {page} de {totalPages}
          </span>

          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            Próximo
          </button>
        </div>
      </div>
    );
  } else {
    tableHtml = <></>
  }

  return tableHtml;
}
