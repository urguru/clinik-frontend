import React,{Component} from 'react';
import UserTable from './UserTable'
class Details extends Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <div className="container">
                <div> 
                    <div>
                    <input type="file" id="hey" onChange={this.props.onFileChange} /> 
                    <button onClick={this.props.onFileUpload}> 
                     Upload! 
                    </button>
                    <button onClick={this.props.clearAll}> 
                     Clear! 
                    </button> 
                    </div>
                    <h4>Choose before Pressing the Upload button</h4> 
                </div> 
                <div>File Name : {this.props.selectedFile.name}</div>
                <div>Download Link: {this.props.downloadReady?<a href={this.props.downloadFile}>Click Here</a>:""}</div> 
                <div>Errors : {this.props.errors}</div>
                <div>Rows inserted : {this.props.rows}</div>

                {this.props.downloadReady?<UserTable users={this.props.users}/>:" "}
            </div> 
        )
    }
}

export default Details;