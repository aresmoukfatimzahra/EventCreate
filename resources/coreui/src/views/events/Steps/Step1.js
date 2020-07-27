import React, {Component} from 'react';
import { Redirect } from 'react-router';
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
export default class Step1 extends Component
{
  constructor(props){
    super(props);
    this.state={
      title: '',
      place: '',
      status: false,
      Description: '',
      date: '',
      showMessage: false,
      redirect: false,

    }

    this.continue=this.continue.bind(this);
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    if(this.state.redirect) {
      return  <Redirect to="/events/liste" />;
    }
    const { values, inputChange } = this.props;
    return(

    <div className="form-container">
      <h1 className="mb-5">Account Setup</h1>
      <div className="form-group">
        <label htmlFor="name">title</label>
        <input type="text" className="form-control" name="title" onChange={inputChange('title')} value={values.title} />
      </div>
      <div className="form-group">
        <label htmlFor="email">place</label>
        <input type="text" className="form-control" name="place" onChange={inputChange('place')} value={values.place} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">description</label>
        <input type="text" className="form-control" name="description" onChange={inputChange('description')} value={values.description} />
      </div>
      <div className="form-group">
        <label htmlFor="password">date</label>
        <input type="date" className="form-control" name="date" onChange={inputChange('date')} value={values.date} />
      </div>

      <br />

      <div className="text-right">
        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
      </div>
    </div>
    );
  }
}
