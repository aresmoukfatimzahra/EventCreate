import React, {Component} from 'react';
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
    CSwitch,
    CIcon,
    CAlert
  } from '@coreui/react'
export default class Add extends Component
{
    constructor(props){
        super(props);
        this.state={
            title: '',
            place: '',
            status: false,
            Description: '',
            date: '',
            showMessage: false

        }
        this.handleTitle=this.handleTitle.bind(this);
        this.handlePlace=this.handlePlace.bind(this);
        this.handleStatus=this.handleStatus.bind(this);
        this.handleDescription=this.handleDescription.bind(this);
        this.handleDate=this.handleDate.bind(this);
        this.handlesubmitform=this.handlesubmitform.bind(this);
    }

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
            this.setState({ showMessage: true })
        })
        .then(Response =>{
            this.setState({
                title: '',
                place: '',
                status: false,
                description: '',
                date: ''
            })
        }).catch(err => console.log(err));
    }
    render() {
        return(
        <CRow>
            <CCol xs="12" sm="12">
              <CCard>
                <CCardHeader>
                   Create
                  <small> Event</small>
                </CCardHeader>
                <form method="POST" onSubmit={this.handlesubmitform}>
                    <CCardBody>

                            <CRow>
                                { this.state.showMessage &&  
                                        <CAlert color="success" duration={5000}>
                                            <strong>Added successfully !</strong>                                       
                                        </CAlert>
                                }
                            </CRow>
                        
                            <CRow>
                                <CCol xs="8">
                                <CFormGroup>
                                    <CLabel htmlFor="name">title</CLabel>
                                    <CInput id="name" placeholder="Title"
                                    required
                                    onChange={this.handleTitle}
                                    value={this.state.title}
                                     />
                                </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Place</CLabel>
                                        <CInput id="name" placeholder="adress" 
                                        required
                                        onChange={this.handlePlace}
                                        value={this.state.place}
                                        />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CRow>
                                        <CCol xs="1"> <CLabel htmlFor="name">Status</CLabel></CCol>
                                        <CCol xs="11"> <CSwitch className={'mx-1'} variant={'3d'} color={'success'} 
                                         
                                         onChange={this.handleStatus}
                                         value={this.state.status}
                                         /></CCol> 
                                        </CRow>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Description</CLabel>
                                        <CInput id="name" placeholder="Description" 
                                        required
                                        onChange={this.handleDescription}
                                        value={this.state.description}
                                        />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Date</CLabel>
                                        <CInput type="date" id="date-input" name="date-input" placeholder="date"
                                        onChange={this.handleDate}
                                        value={this.state.date}
                                        />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                    </CCardBody>
                    <CCardFooter>
                        <CButton type="submit" size="sm" color="primary"> Submit</CButton>
                    </CCardFooter>
                </form>
              </CCard>
            </CCol>
          </CRow>
        );
    }
}