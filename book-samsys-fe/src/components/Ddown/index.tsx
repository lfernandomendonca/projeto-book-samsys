import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import PropTypes from "prop-types";
import Get from "../../services/Get";

interface DdownProps {
  onSelect: (value: number) => void;
}

export default function Ddown({ onSelect }: DdownProps): JSX.Element {
  const { itemsPerPage } = Get();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<number>(5); // Default selected value

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleDropdownChange = (value: number) => {
    onSelect(value);
    setSelectedValue(value);
  };

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Registos por Página </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => handleDropdownChange(5)}>5</DropdownItem>
          <DropdownItem onClick={() => handleDropdownChange(10)}>10</DropdownItem>
          <DropdownItem onClick={() => handleDropdownChange(15)}>15</DropdownItem>
          <DropdownItem onClick={() => handleDropdownChange(20)}>20</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Ddown.propTypes = {
  direction: PropTypes.string,
};
