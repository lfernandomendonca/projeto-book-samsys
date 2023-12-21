import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
}) => (
  <>
    <Button onClick={onPreviousClick} disabled={disabledPrevious}>
    <FontAwesomeIcon icon={faCaretLeft} />
    </Button>
    <Button onClick={onNextClick} disabled={disabledNext} className="ms-1">
    <FontAwesomeIcon icon={faCaretRight} />
    </Button>
  </>
);

export default PreviousNextBtn;
