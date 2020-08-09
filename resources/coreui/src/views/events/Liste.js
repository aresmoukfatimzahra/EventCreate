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
            events:[]
        }
    }

    componentDidMount=()=>{
      const url=process.env.MIX_REACT_APP_ROOT
        Axios.get(url+'/events').then(
            Response => {
                this.setState(
                    {
                        events: Response.data
                    }
                )
                console.log(this.state.events);
            }
        ).catch(err => console.log(err));
    }

    getBadge = status => {
        switch (status) {
          case 1 : return 'success'
          case 0 : return 'secondary'
        }
      }
      handleDelete=(id)=>{
          console.log('clicked',id);
          const isnotid=eventid=>eventid.id !=id;
          const updateevent=this.state.events.filter(isnotid);
          this.setState({events : updateevent});
          Axios.delete(`/api/events/${id}`).then(Response =>{
            console.log('success')
            //this.props.history.push('/events/liste')
          }).catch(err => console.log(err));

      }

    fields = ['title','place', 'description', 'date', 'status', 'action']

    render() {

        return(

            <CRow>
                <CCol>
                <CCard>
                    <CCardHeader>
                    Events Liste
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                        items={this.state.events}
                        fields={this.fields}
                        hover
                        striped
                        bordered
                        size="sm"
                        itemsPerPage={10}
                        pagination
                        scopedSlots = {{
                            'status':
                            (item)=>(
                                <td>
                                <CBadge color={this.getBadge(item.status)}>
                                    {item.status}
                                </CBadge>
                                </td>
                            ),
                            'action':
                              (item) =>  (
                                <td>
                                    <CLink to={`/events/${item.id}/update/`}  type="submit" size="sm" className="btn btn-warning">Update</CLink>
                                    <CLink onClick={this.handleDelete.bind(this,item.id)} type="submit" size="sm" className="btn btn-danger">Delete</CLink>
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
