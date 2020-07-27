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
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      place: '',
      status: false,
      description: '',
      date: '',
      categories: '',
      tags  : '',
      images  : '',
      showMessage: false,
      redirect: false,
      step: 1,

    }

  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({step: step + 1});
  };

  prevStep = () => {
    const {step} = this.state;
    this.setState({step: step - 1});
  };
  inputChange = input => e => {
    console.log(e)
    this.setState({
      [input]: e.target.value
    });
  };

      render() {
        const {step} = this.state;
        const {title, place, status, description, date} = this.state;
        const values = {title, place, status, description, date};
        if (this.state.redirect) {
          return <Redirect to="/events/liste"/>;
        }

          switch (step) {
            case 1:
              return (
                <Step1
                  nextStep={this.nextStep}
                  inputChange={this.inputChange}
                  values={values}
                />
              );
            case 2:
              return (
                <Step2
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  inputChange={this.inputChange}
                  values={values}
                  />
              )
            case 3:
              return (
              <Step3
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                inputChange={this.inputChange}
                values={values}
              />
            )
            case 4:
              return (
                <Step4
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  inputChange={this.inputChange}
                  values={values}
                  />
              )
            case 5:
              return (
                <Step5
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  inputChange={this.inputChange}
                  values={values}
                />
              )
            case 6:
              return (
                <Step6
                  prevStep={this.prevStep}
                  inputChange={this.inputChange}
                  values={values}
                />
              )
          }

      }
}
