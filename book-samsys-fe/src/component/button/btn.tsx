import React, { Component, ReactNode } from "react";
import { Button } from "reactstrap";
import BtnProps from "./btn-props";

class Btn extends Component<BtnProps> {
  render(): ReactNode {
    const { text, color, size } = this.props;

    return (
      <div>
        <Button color={color} size={size} outline={false}>
          {text || "Click Me"}
        </Button>
      </div>
    );
  }
}
export default Btn;
