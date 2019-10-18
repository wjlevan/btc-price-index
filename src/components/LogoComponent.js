import { React, Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
 
export class LogoComponent extends Component {
 
  render() {
 
    return (
      <Spritesheet
        image={'./../assets/spritesheet.png'}
        widthFrame={200}
        heightFrame={200}
        steps={23}
        fps={12}
      />
    );
 
  }
 
}