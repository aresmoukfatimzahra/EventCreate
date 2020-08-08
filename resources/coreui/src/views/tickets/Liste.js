import React, {Component} from 'react';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CLink
} from '@coreui/react'
import Axios from 'axios';
import {indexEvents} from "../../../../js/services";

export default class Liste extends Component
{

  constructor(props){
    super(props)
    this.state={
      tickets:[]
    }
  }

  componentDidMount=()=>{
    const url=process.env.MIX_REACT_APP_ROOT


    indexEvents(url+'/tickets',data=>{
      this.setState({
        tickets:data.tickets,

      })

    })
  }


  handleDelete=(id)=>{
    console.log('clicked',id);
    const isnotid=contact=>contact.id !=id;
    const updatetickets=this.state.tickets.filter(isnotid);
    this.setState({tickets : updatetickets});
    Axios.delete(`/api/tickets/${id}`).then(Response =>{
      console.log('success')
      this.props.history.push('/tickets')
    }).catch(err => console.log(err));

  }

  fields = ['name','price',  'action']

  render() {

    return(

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Tickets Liste
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={this.state.tickets}
                fields={this.fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots = {{

                  'action':
                    (item) =>  (
                      <td>
                        <CLink to={`/ticket/${item.id}/update/`}  type="submit" size="sm" className="btn btn-warning">Update</CLink>
                        &nbsp;<CLink onClick={this.handleDelete.bind(this,item.id)} type="submit" size="sm" className="btn btn-danger">Delete</CLink>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }
}
