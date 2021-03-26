import React from 'react';
import {useParams } from "react-router-dom";
import {
  TheContent,
  TheSidebar,
  TheHeader
} from './index'



const TheLayout = () => {
  const {workID} = useParams();
console.log()
  return (
    <div className="c-app c-default-layout">
      <TheHeader/>
      <TheSidebar/>
      <div className="c-wrapper">
        <div className="c-body">
          <TheContent/>
        </div>
      </div>
    </div>
  )
}

export default TheLayout
