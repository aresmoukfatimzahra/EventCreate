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
      tags:[]
    }
  }

  componentDidMount=()=>{
    const url=process.env.MIX_REACT_APP_ROOT


    indexEvents(url+'/tags',data=>{
      this.setState({
        tags:data.tags,

      })

    })
  }


  handleDelete=(id)=>{
    console.log('clicked',id);
    const isnotid=contact=>contact.id !=id;
    const updatetags=this.state.tags.filter(isnotid);
    this.setState({tags : updatetags});
    Axios.delete(`/api/tags/${id}`).then(Response =>{
      console.log('success')
      this.props.history.push('/tags')
    }).catch(err => console.log(err));

  }

  fields = ['libelle',  'action']

  render() {

    return(

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Tags Liste
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={this.state.tags}
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
                        <CLink to={`/tags/${item.id}/update/`}  type="submit" size="sm" className="btn btn-warning">Update</CLink>
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
