import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: '홈',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'border-bottom'
  },
  {
    _tag: 'CSidebarNavItem',
    name: '상품 등록',
    to: '/enrollment',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '상품 입고',
    to: '/arrival',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '주문/출고',
    route: '/base',
    icon: 'cil-puzzle'
  },
  {
    _tag: 'CSidebarNavItem',
    name: '배송 신청',
    route: '/buttons',
    icon: 'cil-cursor'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'border-bottom'
  },
  {
    _tag: 'CSidebarNavItem',
    name: '배송 조회',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: '재고 관리',
    route: '/icons',
    icon: 'cil-star'
  },
  {
    _tag: 'CSidebarNavItem',
    name: '상품 연결',
    route: '/notifications',
    icon: 'cil-bell'
  },
  {
    _tag: 'CSidebarNavItem',
    name: '활동 조회',
    to: '/widgets',
    icon: 'cil-calculator'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'border-bottom'
  },
  {
    _tag: 'CSidebarNavItem',
    name: '마이 페이지',
    to: '/widgets',
    icon: 'cil-calculator'
  },
]

export default _nav
