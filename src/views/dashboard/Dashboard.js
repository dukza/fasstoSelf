import React, { lazy } from 'react'
import {
  CContainer,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
        <CRow>
          <CCol lg="6">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol sm="5">
                    <h4 id="traffic" className="card-title mb-0">오늘 물류 현황</h4>
                  </CCol>
                  <CCol sm="7" className="d-none d-md-block">
                    <CButtonGroup className="float-right mr-3">
                      {
                        ['Day', 'Month', 'Year'].map(value => (
                          <CButton
                            color="outline-secondary"
                            key={value}
                            className="mx-0"
                            active={value === 'Month'}
                          >
                            {value}
                          </CButton>
                        ))
                      }
                    </CButtonGroup>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol lg="6">
            <CCard>
                <CCardBody>
                  <CRow>
                    <CCol sm="5">
                      <h4 id="traffic" className="card-title mb-0"></h4>
                    </CCol>
                    <CCol sm="7" className="d-none d-md-block">
                      <CButtonGroup className="float-right mr-3">
                        {
                          ['Day', 'Month', 'Year'].map(value => (
                            <CButton
                              color="outline-secondary"
                              key={value}
                              className="mx-0"
                              active={value === 'Month'}
                            >
                              {value}
                            </CButton>
                          ))
                        }
                      </CButtonGroup>
                    </CCol>
                  </CRow>
                </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg="6">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol sm="5">
                    <h4 id="traffic" className="card-title mb-0">출고현황</h4>
                  </CCol>
                  <CCol sm="7" className="d-none d-md-block">
                    <CButtonGroup className="float-right mr-3">
                      {
                        ['Day', 'Month', 'Year'].map(value => (
                          <CButton
                            color="outline-secondary"
                            key={value}
                            className="mx-0"
                            active={value === 'Month'}
                          >
                            {value}
                          </CButton>
                        ))
                      }
                    </CButtonGroup>
                  </CCol>
                </CRow>
                <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol lg="6">
            <CCard>
                <CCardBody>
                  <CRow>
                    <CCol sm="5">
                      <h4 id="traffic" className="card-title mb-0">매출</h4>
                    </CCol>
                    <CCol sm="7" className="d-none d-md-block">
                      <CButtonGroup className="float-right mr-3">
                        {
                          ['Day', 'Month', 'Year'].map(value => (
                            <CButton
                              color="outline-secondary"
                              key={value}
                              className="mx-0"
                              active={value === 'Month'}
                            >
                              {value}
                            </CButton>
                          ))
                        }
                      </CButtonGroup>
                    </CCol>
                  </CRow>
                  <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
                </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg="6">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol sm="5">
                    <h4 id="traffic" className="card-title mb-0">재고 부족 상품</h4>
                  </CCol>
                  <CCol sm="7" className="d-none d-md-block">
                    <CButtonGroup className="float-right mr-3">
                      {
                        ['Day', 'Month', 'Year'].map(value => (
                          <CButton
                            color="outline-secondary"
                            key={value}
                            className="mx-0"
                            active={value === 'Month'}
                          >
                            {value}
                          </CButton>
                        ))
                      }
                    </CButtonGroup>
                  </CCol>
                </CRow>
                <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol lg="6">
            <CCard>
                <CCardBody>
                  <CRow>
                    <CCol sm="5">
                      <h4 id="traffic" className="card-title mb-0">주문량 많은 상품</h4>
                    </CCol>
                    <CCol sm="7" className="d-none d-md-block">
                      <CButtonGroup className="float-right mr-3">
                        {
                          ['Day', 'Month', 'Year'].map(value => (
                            <CButton
                              color="outline-secondary"
                              key={value}
                              className="mx-0"
                              active={value === 'Month'}
                            >
                              {value}
                            </CButton>
                          ))
                        }
                      </CButtonGroup>
                    </CCol>
                  </CRow>
                  <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
                </CCardBody>
            </CCard>
          </CCol>
        </CRow>
    </>
  
  )
}

export default Dashboard
