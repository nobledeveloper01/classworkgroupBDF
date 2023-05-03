import React from 'react';
import RightComponent from './Component2';
import LeftComponent from './Component1';

import './ParentComponent.css';


function ParentComponent() {
  return (
    <div className="container">
     <LeftComponent />
      <RightComponent />
    </div>
  );
}

export default ParentComponent;
