import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import './index.css'
import './components/form.css'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import CardExample from './components/card';

import Loader from "react-loader-spinner";
function App() {

  const[userName,setUserName]=useState({name:""})
  const[header,setHeader]=useState("")
  const[type,setType]=useState("")
  const[ids,setId]=useState("")
  const[loading,setLoading]=useState(false)
  let datas={
    headers:{
     
      'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1MmM2MTgxMC00NTU2LTAxMzktZmE4OS0wZDExNzBkZGYxZjMiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjEyMDMxMDczLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii00ZDVhZmY3Zi05NjFkLTQxMzQtOGQ2Yi05NGE2NWRkODg4NmMifQ.z2JrSIK182bWeb9m_C91Q--g5UxvIMN4Z3VPBQdDE4U',
      'Content-Type':'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/vnd.api+json"
      
      
    
    },
   

  }
  const findingUser=(event)=>{
   event.preventDefault()
   try {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.pubg.com/shards/steam/players?filter[playerNames]=${userName.name}`,datas)
    .then(response =>response.json()
    ).then((result) => {
      
      
        
        setId(result.data[0].id);
        setHeader(result.data[0].attributes.name);
        setType(result.data[0].attributes.shardId);
       
   
    }
   
    ).catch((error)=>{
      if(error){
        setHeader("No Such User")
        setType("Nill")
        setId("Nill")
      }
    })
    setLoading(true);
   } catch (error) {
    if(error){
      setHeader("No Such User")
      setType("Nill")
      setId("Nill")
    }
    
   }
 
  }
  
  return (
   <div id="bg">
<NavBar/>
<br/>
<br/>
<MDBCol md="12">
        <MDBFormInline className="md-form mr-auto mb-4 mt-5 ml-3">
         
          <input className="form-control mr-sm-2" type="text" placeholder="Enter your User Name"  id="line"  onChange={e=>{
             
            setUserName({...userName,name:e.target.value})
          }} autoComplete="off"/>
          <MDBBtn id="button"  color ="gold" rounded size="sm" type="button" className="mr-auto" onClick={findingUser}>
            Search
          </MDBBtn>
        </MDBFormInline>
      </MDBCol>
      < CardExample header={header} type ={ type}  ids={ids}/>
       {!loading ? ( <div></div>
   ):(<Loader id="spinner" className="ml-5"
    type="Audio"
    color="#F2A900"
    
    height={100}
    width={100}
    timeout={500}
   
  />) }
     
    <br/>
    <br/>
    </div>
  );
}

export default App;
