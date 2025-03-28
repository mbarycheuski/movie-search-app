import { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useArray } from "../hooks";

type PaginationComponentProps = {
  itemsCount: number;
  itemsPerPage: number;
  currentPage: number;
  alwaysShown?: boolean;
  onPageChanged: (page: number) => void;
};

const PaginationComponent = ({
  itemsCount,
  itemsPerPage,
  currentPage,
  onPageChanged,
  alwaysShown = false,
}: PaginationComponentProps) => {
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);
  const isPaginationShown = alwaysShown || pagesCount > 1;
  const isCurrentPageFirst = currentPage === 1;
  const isCurrentPageLast = currentPage === pagesCount;
  const pageNumbersArray = useArray<number>(pagesCount);

  const changePage = (pageNumber: number) => {
    if (currentPage === pageNumber) return;
    onPageChanged(pageNumber);
  };

  const handlePageNumberClick = (pageNumber: number) => {
    changePage(pageNumber);
  };

  const handlePreviousPageClick = () => {
    changePage(currentPage - 1);
  };

  const handleNextPageClick = () => {
    changePage(currentPage + 1);
  };

  let isPageNumberOutOfRange: boolean;

  const pageNumbers = pageNumbersArray.map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers = Math.abs(pageNumber - currentPage) <= 2;

    if (isPageNumberFirst || isPageNumberLast || isCurrentPageWithinTwoPageNumbers) {
      isPageNumberOutOfRange = false;
      return (
        <Pagination.Item
          key={pageNumber}
          onClick={() => handlePageNumberClick(pageNumber)}
          active={pageNumber === currentPage}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber} className="muted" />;
    }

    return null;
  });

  useEffect(() => {
    if (currentPage > pagesCount && pagesCount !== 0) {
      onPageChanged(pagesCount);
    }
  }, [pagesCount, currentPage, onPageChanged]);

  if (!isPaginationShown) return null;

  return (
    <Pagination>
      <Pagination.Prev onClick={handlePreviousPageClick} disabled={isCurrentPageFirst} />
      {pageNumbers}
      <Pagination.Next onClick={handleNextPageClick} disabled={isCurrentPageLast} />
    </Pagination>
  );
};

export default PaginationComponent;
