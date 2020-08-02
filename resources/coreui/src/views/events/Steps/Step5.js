import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {getResults} from "../../../../../js/services";
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
  CRow,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'

export default class Step5 extends Component
{
  constructor(props){
    super(props);
    this.state={
      title: '',
      place: '',
      status: false,
      description: '',
      date: '',
      categories: '',
      categoryID: '',
      tags  : '',
      images  : '',
      showMessage: false,
      redirect: false,

    }
    this.handleTitle=this.handleTitle.bind(this);
    this.handlePlace=this.handlePlace.bind(this);
    this.handleStatus=this.handleStatus.bind(this);
    this.handleDescription=this.handleDescription.bind(this);
    this.handleDate=this.handleDate.bind(this);
    this.handlesubmitform=this.handlesubmitform.bind(this);
    this.continue=this.continue.bind(this);
    this.back=this.back.bind(this);
  }
  componentDidMount() {
    const url=process.env.MIX_REACT_APP_ROOT
    getResults(url+'/categories',data=>{
      this.setState({
        categories:data.categories,
      })

    })
    getResults(url+'/tags',data=>{
      this.setState({
        tags:data.tags,
      })

    })
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleTitle=(event)=>{
    this.setState({
      title: event.target.value
    })
  }
  handlePlace=(event)=>{
    this.setState({
      place: event.target.value
    })
  }
  handleStatus=()=>{
    this.setState({
      status: !this.state.status
    })
  }
  handleDescription=(event)=>{
    this.setState({
      description: event.target.value
    })
  }
  handleDate=(event)=>{
    this.setState({
      date: event.target.value
    })
  }
  handlesubmitform=(event)=>{
    this.setState({ showMessage: false });
    event.preventDefault();
    axios.post('/api/events/create',{
      title: this.state.title,
      place: this.state.place,
      status: this.state.status,
      description: this.state.description,
      date: this.state.date
    }).then(() => {
      this.setState({ showMessage: true,redirect:true })
    })
      .then(Response =>{
        this.setState({
          title: '',
          place: '',
          status: false,
          description: '',
          date: '',
          redirect:true
        })
      }).catch(err => console.log(err));
  }
  render() {
    if(this.state.redirect) {
      return  <Redirect to="/events/liste" />;
    }
    console.log(this.state)

    return(
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Budget & Ticket Price
              <small> Step 5</small>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">


                <CFormGroup row>
                  <CCol xs="12" md="3">
                    <CLabel htmlFor="password-input">Budget</CLabel>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CInput type="number" id="budget" name="budget"  />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol xs="12" md="3">
                    <CLabel htmlFor="password-input">Ticket Price </CLabel>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CInput type="number" id="price" name="price"  />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>

              <div className="row">
                <div className="col-6">
                  <button className="btn btn-danger" onClick={this.back}>Back</button>
                </div>
                <div className="col-6 text-right">
                  <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
              </div>
            </CCardFooter>
          </CCard>

        </CCol>
      </CRow>
    );
  }
}
