import React from "react";
import classNames from "classnames";
import {useParams } from "react-router-dom";
import {CContainer, CRow, CCol, CCard, CCardBody} from '@coreui/react'

import {useData} from "./../hook/useData";

const Sub = ({ children}) => {
    const classes = classNames(
        "overflew-hidden",
        "h-100"
    );
    const {getData} = useData();
    const {pageId} = useParams();
    const {title__main,title__sub,content__main:ContentMain, content__sub:ContentSub} = getData(pageId);
  return(
    <>
        <CContainer fluid className={classes} >
            <CCard className="h-100 mb-0">
                <CRow className="h-100 d-flex no-gutters">
                    <CCol lg="6" className="h-100">
                        <CRow className="h-100 no-gutters d-grid flex-wrap">
                            <CCol sm="12" style={{"height":"72px"}}>{title__main}</CCol>
                            <CCol sm="12" className="overflow-auto border">
                                <ContentMain></ContentMain>
                            </CCol>
                        </CRow>
                    </CCol>
                    <CCol lg="6" className="border-left">
                        <CRow className="h-100 position-relative no-gutters">
                            <CCol sm="12">{title__sub}</CCol>
                            <CCol sm="12" className="overflow-auto position-absolute" style={{"top":"50px","bottom":"0px"}}>
                                <div className="d-flex flex-column">
                                    <div>
                                        <ContentSub></ContentSub>
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