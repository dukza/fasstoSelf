import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      {/* <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand> */}

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">파스토셀프</CHeaderNavLink>
        </CHeaderNavItem>
        <a href="#" className="text-white">[시스템] 네이버페이 전산시스템 작업으로 인한 서비스 점검 안내</a>
      </CHeaderNav>
      
      <CHeaderNav className="px-3 ml-auto">
        <CHeaderNavItem  className="px-3">
          <CButton block variant="outline" to="/users" color="light">N스토어 연동</CButton>
        </CHeaderNavItem>   
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink><CIcon name="cil-credit-card"/></CHeaderNavLink>
        </CHeaderNavItem>  
        <TheHeaderDropdownNotif/>
        <TheHeaderDropdown/>
      </CHeaderNav>

    </CHeader>
  )
}

export default TheHeader
