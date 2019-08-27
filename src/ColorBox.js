import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
  /*
  #One way of doing this with the simple if else statement I need to return and add more brakets
  if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{ opacity: this.props.opacity }}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      );
    } else {
      return null;
  */  
  
  
  
  //Using the ternary symbols I can save a lot of brakets and positioning I need to remember
  //Just need to remeber the positioning properly 
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/> : null}
      </div>
    )
  
  
  


  }
}
