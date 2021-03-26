import React from "react";
import classNames from "classnames";

import {CContainer, CRow, CCol, CCard, CCardBody} from '@coreui/react'

const Sub = ({ children, name, title__L,title__R}) => {
    const classes = classNames(
        "overflew-hidden",
        "h-100"
    );
  return(
    <>
        <CContainer fluid className={classes} >
            <CCard className="h-100 mb-0">
                <CRow className="h-100 d-flex no-gutters">
                    <CCol lg="6" className="h-100">
                        <CRow className="h-100 no-gutters d-flex flex-wrap">
                            <CCol sm="12 mb-auto" style={{"height":"72px"}}>{title__L}</CCol>
                            <CCol sm="12" className="overflow-auto border d-flex align-items-stretch">
                                {/* {children}   */}
                            </CCol>
                        </CRow>
                    </CCol>
                    <CCol lg="6" className="border-left">
                        <CRow className="h-100 position-relative no-gutters">
                            <CCol sm="12">{title__R}</CCol>
                            <CCol sm="12" className="overflow-auto position-absolute" style={{"top":"50px","bottom":"0px"}}>
                                <div className="d-flex flex-column">
                                    <div>
                                        {children}  
                                    </div>
                                    <div>버튼</div>
                                </div>
                            </CCol>
                        </CRow>
                    </CCol>
                </CRow>
            </CCard>
        </CContainer>   
    </>
)}

export default Sub;  