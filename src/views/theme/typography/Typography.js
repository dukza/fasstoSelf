import React from 'react'
import {useParams } from "react-router-dom";
import {CContainer, CRow, CCol, CCard, CCardBody} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import {useData} from "./../../../hook/useData";
const Typography = () => {
  const {getData} = useData();
  const {pageId} = useParams();
  const {title__main,title__sub,component:Component,etc:Etc} = getData(pageId);
  return (
    <>
        <CCol lg="6" className="h-100">
            <CRow className="h-100 no-gutters d-grid flex-wrap">
                <CCol sm="12" style={{"height":"72px"}}>{title__main}</CCol>
                <CCol sm="12" className="overflow-auto border position-absolute" style={{"top":"64px","bottom":"0px"}}>
                  <div style={{"height":"2000px"}}>
                    <div className="position-sticky" style={{"top":"0px"}}>111</div>
                  </div>
                </CCol>
            </CRow>
        </CCol>
        <CCol lg="6" className="border-left">
            <CRow className="h-100 position-relative no-gutters">
                <CCol sm="12">{title__sub}</CCol>
                <Etc></Etc>
            </CRow>
        </CCol>

    </>
  )
}

export default Typography
