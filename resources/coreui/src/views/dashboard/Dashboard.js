import React, { lazy } from 'react'
import {
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

const Users = lazy(() => import('../users/Users.js'))

const Dashboard = () => {
  return (
    <>
    
      <Users />
    </>
  )
}

export default Dashboard
