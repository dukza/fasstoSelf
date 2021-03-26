import React, { useEffect, useState, createRef } from 'react'
import {useParams } from "react-router-dom";
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/reusable'

import {useData} from "./../../../hook/useData";

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])
  return (
    <table className="table w-100" ref={ref}>
      <tbody>
      <tr>
        <td className="text-muted">HEX:</td>
        <td className="font-weight-bold">{ rgbToHex(color) }</td>
      </tr>
      <tr>
        <td className="text-muted">RGB:</td>
        <td className="font-weight-bold">{ color }</td>
      </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({className, children}) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{paddingTop: '75%'}}></div>
      {children}
      <ThemeView/>
    </CCol>
  )
}

const Colors = () => {
  return (
    <>
          <CCol sm="12">필터바1</CCol>
          <CCol sm="12">필터바2</CCol>    
          <CCol sm="12 border position-absolute" style={{"top":"0px","bottom":"0px"}}>
            <CRow className="no-gutters">
              <CCol sm="12" className="overflow-auto position-absolute" >
                      <div>
                          
                      </div>
                      <div>버튼</div>
                    <div style={{"height":"2000px"}}>1</div>
              </CCol>                 
            </CRow>
          </CCol>    



           

     


        
    </>
  )
}

export default Colors
