import { type ReactElement } from 'react';
import BaseText from '../Text/BaseText';
import { useScreen } from '../../hooks/ui/useScreen';
import { BasePagination } from './BasePagination';

interface BasePaginationTableProps<T> {
  columns: { name: keyof T }[];
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

  function handlePageChange(page: number) {
    onPageChange(page);
  }

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
                {String(item[column.name])}
              </div>
            ))}
          </div>
        ))}

        <div className="flex justify-center p-2">
          <div className="max-w-[400px]">
            <BasePagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>
    );
  } else {
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
                {String(item[column.name])}
              </div>
            ))}
          </div>
        ))}

        <div className="flex justify-end p-2">
          <div className="max-w-[400px]">
            <BasePagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>
    );
  }

  return tableHtml;
}
