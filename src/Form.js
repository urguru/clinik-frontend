import axios from 'axios'; 
import React,{Component} from 'react'; 
import Details from './Details'
class MyForm extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedFile:"",
      downloadFile:"",
      rowsCreated:0,
      ready:false,
      error:"",
      users:[]
    }
  }
  
  clearAll=()=>{
    this.setState({
      selectedFile:"",
      downloadFile:"",
      rowsCreated:0,
      ready:false,
      error:"",
      users:[]
    })
    document.getElementById("hey").value=""
  }

  onFileChange = event => { 
    this.setState({selectedFile: event.target.files[0],error:"",downloadFile:""},()=>{
      if(this.state.selectedFile===undefined)
      {
        this.setState({error:"The file cannot be empty",rowsCreated:0,downloadFile:""})
      }  
    }); 
  }; 
onFileUpload = () => { 
  const formData = new FormData(); 
  if(this.state.selectedFile==="" || this.state.selectedFile===null || this.state.selectedFile===undefined)
  {
    this.setState({error:"The file cannot be empty"},()=>{
        console.log(this.state)
    });
  }
  else{
    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
    axios.post("https://clinik-urguru.herokuapp.com/upload", formData).then((res)=>{
      console.log(res.data)
      this.setState({
        users:res.data.data,downloadFile:res.data.fileLink,rowsCreated:res.data.rows,ready:true,error:"No Errors"
      },console.log(this.state))
    }).catch(err=>{
      console.log(err.response)
      this.setState({error:err.response.data.message,ready:false})
      console.log(this.state)
    }); 
  }
}; 
render() { 
    return ( 
      <Details selectedFile={this.state.selectedFile==null?" ":this.state.selectedFile} 
        onFileChange={this.onFileChange} 
        onFileUpload={this.onFileUpload} 
        downloadFile={this.state.downloadFile}
        errors={this.state.error}
        rows={this.state.rowsCreated}
        downloadReady={this.state.ready}
        clearAll={this.clearAll}
        users={this.state.users}
        />
    ); 
  } 
} 

export default MyForm; 