import React from 'react';
var cn = require('classnames')
export default props =>
  <div id={props.id} style={props.style} className={cn(["panel", props.className])}>
    {props.children}
  </div>
