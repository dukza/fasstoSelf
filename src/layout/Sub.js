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
    const {title__main,title__sub,component:Component,etc:Etc} = getData(pageId);
  return(
    <>
        <CContainer fluid className={classes} >
            <CCard className="h-100 mb-0">
                <CRow className="h-100 d-flex no-gutters">
                    <Component></Component>
                </CRow>
            </CCard>
        </CContainer>   
    </>
)}

export default Sub;  