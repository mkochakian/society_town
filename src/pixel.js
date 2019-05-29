import React from 'react';
var cn = require('classnames')
export default props =>
  <div
    className={cn(["pixel", props.className])}
    id={props.id}
    style={{
      top: props.y*10,
      left: props.x*10,
      backgroundColor: props.pixel_color
    }}
  />
