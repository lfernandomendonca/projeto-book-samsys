import React from "react";
import { Button } from "reactstrap";

interface PreviousNextBtnProps {
  onPreviousClick: () => void;
  onNextClick: () => void;
  disabledPrevious: boolean;
  disabledNext: boolean;
  currentPage: number;
  totalPages: number;
}

const PreviousNextBtn: React.FC<PreviousNextBtnProps> = ({
  onPreviousClick,
  onNextClick,
  disabledPrevious,
  disabledNext,
  currentPage,
  totalPages,
}) => (
  <>
    <Button onClick={onPreviousClick} disabled={disabledPrevious}>
      Previous Page
    </Button>
    <Button onClick={onNextClick} disabled={disabledNext}>
      Next Page
    </Button>
    <div>
      Current Page: {currentPage} / {totalPages}
    </div>
  </>
);

export default PreviousNextBtn;
