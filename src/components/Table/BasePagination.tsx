import { IconButton } from '../Button/IconButton';

interface BasePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxPageButtons?: number; // número máximo incluindo os ...
}

export function BasePagination({ currentPage, totalPages, onPageChange, maxPageButtons = 5 }: BasePaginationProps) {
  function getPagesWithEllipsis(): (number | string)[] {
    if (totalPages <= maxPageButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const firstPage = 1;
    const lastPage = totalPages;

    const slots = maxPageButtons - 2; // sobra para o meio
    const sidePages = slots - 2; // páginas reais quando houver "..."

    pages.push(firstPage);

    if (currentPage <= sidePages) {
      // início → mostra páginas e "..." no fim
      for (let i = 2; i <= slots; i++) {
        pages.push(i);
      }
      pages.push('...');
    } else if (currentPage >= totalPages - sidePages + 1) {
      // fim → "..." no início e páginas no fim
      pages.push('...');
      for (let i = totalPages - slots + 1; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      // meio → "..." dos dois lados
      pages.push('...');
      const half = Math.floor(sidePages / 2);
      const start = currentPage - half;
      const end = currentPage + half;
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      pages.push('...');
    }

    pages.push(lastPage);

    return pages.slice(0, maxPageButtons);
  }

  const pages = getPagesWithEllipsis();

  return (
    <div className="flex items-center justify-center gap-2">
      <IconButton
        name="chevron-left"
        circle
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      {pages.map((page, idx) =>
        page === '...' ? (
          <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(Number(page))}
            className={`cursor-pointer inline-flex items-center justify-center rounded-full transition-colors duration-300 w-[36px] h-[36px] text-sm font-medium
              ${page === currentPage ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
            `}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      <IconButton
        name="chevron-right"
        circle
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
}
