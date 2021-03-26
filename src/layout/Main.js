import React from "react";
import classNames from "classnames";

import {CContainer, CRow, CCol, CCard, CCardBody} from '@coreui/react'


const Main = ({ children }) => {
    const classes = classNames(
        "overflow-auto",
        "vh-100"
    );
return(
    <>
    <CContainer fluid className={classes}>
        {children}
    </CContainer>
    </>
)}

export default Main;  