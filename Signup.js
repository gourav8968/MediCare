import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import querystring from 'querystring'
import global from '../global'
import CaptureImage from './CaptureImage'

axios.defaults.withCredentials = true;

export default class Signup extends React.Component
{
    constructor(props)
    {
        super(props);
        //this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state={
            name:"",
            email:"",
            age:"",
            password:"",
            imageuri:""

        }
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeAge=this.onChangeAge.bind(this);
        this.onImage = this.onImage.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChangeName(e)
    {
        this.setState({
          name:e.target.value
        });
        
    }
    componentDidMount()
    {

      
    }
    onChangePassword(e)
    {
        this.setState({
            password:e.target.value
        })
    }
    onChangeAge(e)
    {
        this.setState({
            age:e.target.value
        })
    }
    onChangeEmail(e)
    {
        this.setState({
            email:e.target.value
        })
    }
    onImage(dataUri)
    {
        this.setState({
            imageuri: dataUri
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        const User = {
            name : this.state.name,
            email:this.state.email,
            age:this.state.age,
            password:this.state.password
        }
        console.log(User);
        axios.post(global.url + "/signup" ,querystring.stringify(User), {headers: { 'Content-Type': 'application/x-www-form-urlencoded'
        
        
    }}).then(msg => console.log(msg));
        
        
    }
    render()
    {
        return (
        <div>
            <h1> Signup User</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <table>
                <tr>
                <input type="text" name="name" onChange={this.onChangeName}/>
                </tr>
                <tr>
                <input type="text" name="age" onChange={this.onChangeAge}/>
                </tr>
                <tr>
                <input type="email" name="email" onChange={this.onChangeEmail}/>
                </tr>
                <tr>
                <input type="password" name="password" onChange={this.onChangePassword}/>
                </tr>
                <tr><CaptureImage takePhoto={this.onImage} /></tr> 
                <tr><input type="submit" value=" Sign Up" className="btn success"></input>
                </tr>
                </table>
                </div>
            </form>
        </div>
        );
    }
}