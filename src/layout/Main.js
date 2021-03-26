import React from "react";
import classNames from "classnames";

import {CContainer, CRow, CCol, CCard, CCardBody} from '@coreui/react'


const Sub = ({ children }) => {
    const classes = classNames(
        "overflow-auto",
    );
return(
    <>
    <CContainer fluid className={classes}>
        {children}
    </CContainer>
    </>
)}

export default Sub;  