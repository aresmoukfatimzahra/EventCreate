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
export default class Update extends Component
{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            password: '',
            role_id: '2',
            showMessage: false

        }
        this.handleName=this.handleName.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handleSelectChange=this.handleSelectChange.bind(this);
        this.handlesubmitform=this.handlesubmitform.bind(this);
    }

    handleName=(event)=>{
        this.setState({
            name: event.target.value
        })   
    }
    handlePassword=(event)=>{
        this.setState({
            password: event.target.value
        })   
    }
    handleEmail=(event)=>{
        this.setState({
            email: event.target.value
        })
    }
 
    handleSelectChange = (event) => {
       this.setState({ 
           role_id: event.target.value
        },()=>{
            console.log(this.state.role_id)
        });
      }
    handlesubmitform=(event)=>{
        this.setState({ showMessage: false });
        event.preventDefault();
        axios.post('/api/events/create',{
            name: this.state.name,
            eamil: this.state.email,
            password: this.state.password,
            role_id: this.state.role_id,
        }).then(() => {
            this.setState({ showMessage: true })
        })
        .then(Response =>{
            this.setState({
                name: '',
                email: '',
                password: false,
                role_id: '',
            })
        }).catch(err => console.log(err));
    }
    render() {

        // const { selectedOption } = this.state;
        // const value = selectedOption && selectedOption.value;

        return(
        <CRow>
            <CCol xs="12" sm="12">
              <CCard>
                <CCardHeader>
                   User
                  <small> Update</small>
                </CCardHeader>
                <form method="POST" onSubmit={this.handlesubmitform}>
                    <CCardBody>

                            <CRow>
                                {/* { this.state.showMessage &&  
                                        <CAlert color="success" duration={5000}>
                                            <strong>Added successfully !</strong>                                       
                                        </CAlert>
                                } */}
                            </CRow>
                        
                            <CRow>
                                <CCol xs="8">
                                <CFormGroup>
                                    <CLabel htmlFor="name">Name</CLabel>
                                    <CInput type="text" id="name" placeholder="Name"
                                    required
                                    onChange={this.handleName}
                                     />
                                </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="email">email</CLabel>
                                        <CInput type="email" id="email" placeholder="email" 
                                        required
                                        onChange={this.handleEmail}
                                        />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="role">role</CLabel>
                                        <CSelect                                       
                                            onChange={this.handleSelectChange}
                                            // defaultValue={this.state.role_id}                            
                                        >   
                                            
                                            <option value='1'>admin</option>
                                            <option value='2'>user</option>                                          
                                            <option value='3'>organisateur</option>
                                            <option value='4'>artist</option>                                           
                                            <option value='5'>super_admin</option>
                                        </CSelect>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8">
                                    <CFormGroup>
                                        <CLabel htmlFor="password">Password</CLabel>
                                        <CInput type="password" id="password" placeholder="pasword" 
                                        required
                                        onChange={this.handlePassword}
                                        
                                        />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                    </CCardBody>
                    <CCardFooter>
                        <CButton type="submit" size="sm" color="primary"> update</CButton>
                    </CCardFooter>
                </form>
              </CCard>
            </CCol>
          </CRow>
        );
    }
}