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
  CSwitch,
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
import {getResults} from "../../../../../js/services";
export default class Step6 extends Component
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

    this.back=this.back.bind(this);
  }
  componentDidMount() {
    const { values, inputChange } = this.props;
    const url=process.env.MIX_REACT_APP_ROOT
    getResults(url+'/categories/'+values.categoryID,data=> {
      this.setState({
        categories: data.categories,
      })
    })
    console.log('ffffff'+values.categoryID)
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

//   handlesubmitform=(e)=>{
//     e.preventDefault();
//     console.log('rrrrrrrrrrrrrr')
//     console.log(this.props)
//     this.setState({ showMessage: false });
//
//     const { values, inputChange } = this.props;
// let reducedArray=(this.state.categories)
//
//
//     const headers = {
//       'Content-Type': 'multipart/form-data',
//     }
//     const url="/api/events/create"
//     axios.post('/api/events/create',{
//       title:values.title,
//       place: values.place,
//       status: values.status,
//       description: values.description,
//       date: values.date,
//       categories: values.categoryID,
//       tags: values.tagsID,
//       user: values.users,
//       media:  values.media[0],
//     }).then(() => {
//       this.setState({ showMessage: true,redirect:true })
//     })
//
//
//
//   }
  handlesubmitform=(event)=>{

    event.preventDefault();
    axios.post('/api/event/new',{
      data: this.props.values


    }).then(() => {
      this.setState({ showMessage: true,redirect:true })
    })
      .then(Response =>{
        this.setState({
          place: '',
          title: '',

        })
      }).catch(err => console.log(err));
    console.log('error create event')
  }
  render() {
    console.log('rrfff')
    console.log(this.state)
    console.log('finnnnnnnn')
    console.log(this.props)
    if(this.state.redirect) {
      return  <Redirect to="/events/liste" />;
    }
    const { values, inputChange } = this.props;
    return(
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              RECAPITULATION

            </CCardHeader>
            <CCardBody>

              <form method="POST" onSubmit={this.handlesubmitform} encType="multipart/form-data">
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
                        <CLabel htmlFor="title">title</CLabel>
                        <CInput id="title" placeholder="Title"

                                value={values.title}
                        />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="8">
                      <CFormGroup>
                        <CLabel htmlFor="place">Place</CLabel>
                        <CInput id="place" placeholder="place"

                                value={values.place}
                        />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="8">
                      <CFormGroup>
                        <CLabel htmlFor="place">categories</CLabel>
                        <CInput id="place" placeholder="categories"

                                value={values.categoryID} name="categoryID"
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


                                                  value={values.status}
                          /></CCol>
                        </CRow>
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="8">
                      <CFormGroup>
                        <CLabel htmlFor="name">Description</CLabel>
                        <CTextarea
                          name="description"

                          value={values.description}
                          id="description"
                          rows="9"
                          placeholder="Description..."
                        />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="8">
                      <CFormGroup>
                        <CLabel htmlFor="name">Date</CLabel>
                        <CInput type="date" id="date" name="date" placeholder="date"

                                value={values.date}
                        />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CCardBody>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" style={{float:"right"}}> Submit</CButton>
                  <CButton  size="sm" color="danger"  onClick={this.back}> back</CButton>
                </CCardFooter>
              </form>


            </CCardBody>

          </CCard>

        </CCol>
      </CRow>
    );
  }
}
