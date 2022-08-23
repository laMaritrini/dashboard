import {
  ButtonPage,
  PageNumber,
  PaginationContainer,
} from "../styles/pagination";
import { usePagination} from "./usePagination";

export function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer>
      <ButtonPage disabled={currentPage === 1 ?? true} onClick={onPrevious}>
        Prev
      </ButtonPage>
      {paginationRange.map((pageNumber, index) => (
        <PageNumber
          key={index}
          selected={pageNumber === currentPage ?? true}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </PageNumber>
      ))}

      <ButtonPage disabled={currentPage === lastPage ?? true} onClick={onNext}>
        Next
      </ButtonPage>
    </PaginationContainer>
  );
}
