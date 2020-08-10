import React, {Component} from 'react';
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CSwitch,

} from '@coreui/react'

export default class Update extends Component
{
  constructor(props){
    super(props);
    this.state={
      libelle: '',

    }
    this.handleTitle=this.handleTitle.bind(this);

  }

  handleTitle=(event)=>{
    this.setState({
      libelle: event.target.value
    })
  }

  componentDidMount=()=>{
    const id = this.props.match.params.id;
    console.log(this.props);
    axios.get(`api/tags/${id}/edit`).then(
      Response => {
        this.setState({
          libelle: Response.data.libelle,

        })
        console.log(Response.data);
      }
    ).catch(err => console.log(err));
  }

  handlesubmitform=(event)=>{
    event.preventDefault();
    const id=this.props.match.params.id;
    axios.put(`/api/tags/${id}/update`,{
      libelle: this.state.libelle,

    }).then(Response =>{
      this.setState({
        libelle: '',

      })
      this.props.history.push('/tags')
    })
      .catch(err => console.log(err));
  }
  render() {
    return(
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
              Update
              <small> libelle</small>
            </CCardHeader>
            <form method="POST" onSubmit={this.handlesubmitform}>
              <CCardBody>

                <CRow>
                  <CCol xs="8">
                    <CFormGroup>
                      <CLabel htmlFor="name">libelle</CLabel>
                      <CInput id="name" placeholder="libelle"
                              required
                              onChange={this.handleTitle}
                              value={this.state.libelle}
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
