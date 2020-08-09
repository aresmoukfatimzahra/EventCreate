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
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import {getResults} from "../../../../js/services";
export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      place: '',
      status: false,
      description: '',
      date: '',
      categories: '',
      categoryID: '',
      tagsID: '',
      tags  : '',
      media  : "",
      showMessage: false,
      redirect: false,
      users:[],
      keyboardplayer:[],
      step: 1,
      assurance:'',
      autorisation:'',
      limit_age:'',
      limit_places:'',
      budget:'',
      ticket:'',
      organisateur:[]

    }

  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({step: step + 1});
  };

  prevStep = () => {
    const {step} = this.state;
    this.setState({step: step - 1});
  };
  inputChange = input => e => {
    console.log(input)
    console.log("input")
    if(input==="users"){
      this.state.users.push(e.target.value);
      this.setState({[input]:this.state.users});

    }
    else if(input==="keyboardplayer"){

      this.setState({ [input]: [...this.state.keyboardplayer, ...e.target.value] });
    }
    else if(input==="media"){

       const data=new FormData();

       let names=[];
       let names2=[];
      for (let i = 0; i < e.target.files.length; i++) {
          data.append('image[]',e.target.files[i],e.target.files[i].name)
        if(!Array.isArray(e.target.files[i])){
          names.push(e.target.files[i].name,names)
        }

      }
      for (let i = 0; i < names.length; i++) {
        if(!Array.isArray(names[i])){
          names2.push(names[i])
        }
      }
        console.log( names)
        console.log( "names")
        axios.post('api/upload',data)
          .then(res=>{
            console.log(res)
          })

      this.setState({ [input]: [...this.state.media,names2] });
    }
    else if(input==="autorisation" || input==="assurance" ){

      const data=new FormData();

      data.append(input,e.target.files[0],e.target.files[0].name)

      axios.post('api/upload',data)
        .then(res=>{
          console.log(res)
        })
      this.setState({ [input]:  e.target.value });
    }
    else if(input==="tagsID"){
      this.setState({ [input]: [...this.state.tagsID, ...e.target.value] });
    }
    else if(input==="ticket"){
      this.setState({ [input]: [...this.state.ticket, ...e.target.value] });
    }
    else if(input==="title"){
      let organisateur = JSON.parse(localStorage.getItem("appState"));
      console.log("organisateur")
      console.log(organisateur.user.id)
      let idOrg=organisateur.user.id
      const url=process.env.MIX_REACT_APP_ROOT
      getResults(url+'/allUsers/'+idOrg,data=>{
        this.setState({
          organisateur:data,
        
        })

      })
      this.setState({
        [input]: e.target.value
      });
    }

    else{
      this.setState({
      [input]: e.target.value
    });
    }

  };

      render() {
        const {step} = this.state;
        const {title, place, status, description, date,categoryID,tagsID,users,media,assurance,autorisation,limit_age,limit_places,budget,ticket,organisateur} = this.state;
        const values = {title, place, status, description, date,categoryID,tagsID,users,media,assurance,autorisation,limit_age,limit_places,budget,ticket,organisateur};
        if (this.state.redirect) {
          return <Redirect to="/events/liste"/>;
        }

          switch (step) {
            case 1:
              return (
                <Step1
                  nextStep={this.nextStep}
                  inputChange={this.inputChange}
                  values={values}
                />
              );
            case 2:
              return (
                <Step2
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  inputChange={this.inputChange}
                  values={values}
                  />
              )
            case 3:
              return (
              <Step3
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                inputChange={this.inputChange}
                values={values}
              />
            )
            case 4:
              return (
                <Step4
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  inputChange={this.inputChange}
                  values={values}
                  />
              )
            case 5:
              return (
                <Step5
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  inputChange={this.inputChange}
                  values={values}
                />
              )
            case 6:
              return (
                <Step6
                  prevStep={this.prevStep}
                  inputChange={this.inputChange}
                  values={values}
                />
              )
          }

      }
}
