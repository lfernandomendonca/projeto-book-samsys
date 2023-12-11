import React, { Component, ReactNode} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import  BtnProps  from './button-props';


class Btn extends Component<BtnProps> {
render(): ReactNode {
  const {text, color, size} = this.props
    
    return(
     <div>
    <Button
      color= { color }
      size = { size }

      outline= { false } 
    >
      {text || 'Click Me' }
    </Button>
  </div>)
}
}
export default Btn;