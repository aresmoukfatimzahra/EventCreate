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
      name: '',
      price: '',

    }


  }

  handleName=(event)=>{
    this.setState({
      name: event.target.value,

    })
  }
  handlePrice=(event)=>{
    this.setState({

      price: event.target.value,
    })
  }

  componentDidMount=()=>{
    const id = this.props.match.params.id;
    console.log(this.props);
    axios.get(`api/ticket/${id}/edit`).then(
      Response => {
        this.setState({
          name: Response.data.name,
          price: Response.data.price,

        })
        console.log(Response.data);
      }
    ).catch(err => console.log(err));
  }

  handlesubmitform=(event)=>{
    event.preventDefault();
    const id=this.props.match.params.id;
    axios.put(`/api/ticket/${id}/update`,{
      name: this.state.name,
      price: this.state.price,

    }).then(Response =>{
      this.setState({
        libelle: '',

      })
      this.props.history.push('/tickets')
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
              <small> name</small>
            </CCardHeader>
            <form method="POST" onSubmit={this.handlesubmitform}>
              <CCardBody>

                <CRow>
                  <CCol xs="8">
                    <CFormGroup>
                      <CLabel htmlFor="name">name</CLabel>
                      <CInput id="name" placeholder="name"
                              required
                              onChange={this.handleName}
                              value={this.state.name}
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="8">
                    <CFormGroup>
                      <CLabel htmlFor="price">price</CLabel>
                      <CInput id="price" placeholder="price"
                              required
                              onChange={this.handlePrice}
                              value={this.state.price}
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
