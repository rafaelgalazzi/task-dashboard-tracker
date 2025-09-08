import type { ReactElement } from 'react';
import { IconButton } from '../Button/IconButton';

interface BasePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxPageButtons?: number;
}

export function BasePagination(props: BasePaginationProps) {
  const { currentPage, totalPages, maxPageButtons } = props;
  function formatPageNumberIconsToShow(currentPage: number, totalPages: number, maxPageButtons: number = 5) {
    const elements: ReactElement[] = [];

    // const batata = '< 1 .. current ..  last >';

    if (totalPages <= maxPageButtons) {
      for (let i = 0; i < totalPages; i++) {
        if (i + 1 === currentPage) {
          elements.push(
            <div
              className={`inline-flex items-center justify-center rounded-full bg-button text-button-foreground hover:opacity-70 transition-colors duration-300`}
              style={{
                backgroundColor: `var(--secondary)`,
                width: 20 + 16,
                height: 20 + 16,
              }}
            >
              {i + 1}
            </div>
          );
          continue;
        }

        elements.push(
          <div
            className={`inline-flex items-center justify-center rounded-full bg-button text-button-foreground hover:opacity-70 transition-colors duration-300`}
            style={{
              backgroundColor: `var(--text-accent)`,
              width: 20 + 16,
              height: 20 + 16,
            }}
          >
            {i + 1}
          </div>
        );
      }

      return elements;
    }



    // for(let i = 0; i < maxPageButtons; i++) {
    //     if (i + 1 < )
    // }




    return elements;
  }

  const pagesToShow = formatPageNumberIconsToShow(currentPage, totalPages, maxPageButtons);

  return (
    <div className="flex items-center justify-between p-4">
      <IconButton name="chevron-left" circle />
      {pagesToShow}

      <IconButton name="chevron-right" circle />
    </div>
  );
}
