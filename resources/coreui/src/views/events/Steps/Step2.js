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

export default class Step1 extends Component
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

  handlesubmitform=(event)=>{
    this.setState({ showMessage: false });
    event.preventDefault();
    axios.post('/api/media/create',{
      url: this.props.values.media,
      title: this.props.values.media,

    }).then(() => {
      this.setState({ showMessage: true,redirect:true })
    })
      .then(Response =>{
        this.setState({
          url: '',
          title: '',

        })
      }).catch(err => console.log(err));
    console.log('error')
  }
  render() {
    if(this.state.redirect) {
      return  <Redirect to="/events/liste" />;
    }
    console.log(this.state)
    const { values, inputChange } = this.props;
    return(
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Medias & Tags
              <small> Step 2</small>
            </CCardHeader>
            <CCardBody>
              <form method="POST" encType="multipart/form-data" >

                <CFormGroup row>
                  <CCol xs="12" md="3">
                    <CLabel htmlFor="password-input">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="6">
                   <CSelect onChange={inputChange('categoryID')}  name="categoryID" value={values.categoryID}>
                     <option>--- Category ---</option>
                     { this.state.categories ?this.state.categories.map((category,i) => {
                     return (
                     <option value={category.id}>{category.libelle}</option>
                       )}):null}

                   </CSelect>

                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol xs="12" md="3">
                    <CLabel htmlFor="password-input">Tags</CLabel>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CSelect multiple onChange={inputChange('tagsID')}  name="tagsID[]" value={values.tagsID}>
                      <option>--- Tags ---</option>
                      { this.state.tags ?this.state.tags.map((tag,i) => {
                        return (
                          <option value={tag.id}>{tag.libelle}</option>
                        )}):null}
                    </CSelect>
                  </CCol>
                </CFormGroup>

                  <CFormGroup row>
                    <CCol xs="12" md="3">
                      <CLabel htmlFor="password-input">Images</CLabel>
                    </CCol>
                    <CCol xs="12" md="6">

                      <CInput type="file" id="images" name="media[]" multiple  onChange={inputChange('media')} />
                    </CCol>
                  </CFormGroup>

              </form>
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
