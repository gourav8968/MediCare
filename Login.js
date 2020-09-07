import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import querystring from 'querystring'
import global from '../global'

axios.defaults.withCredentials = true;

export default class login extends React.Component
{
    constructor(props)
    {
        super(props);
        //this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state={
            email:"",
            password:""

        }
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
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
    onChangeEmail(e)
    {
        this.setState({
            email:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        const User = {
            email:this.state.email,
            password:this.state.password
        }
        axios.post(global.url + "/login",querystring.stringify(User), {headers: { 'Content-Type': 'application/x-www-form-urlencoded'
        
        
    }}).then(msg => console.log(msg));
        
        
    }
    render()
    {
        return (
        <div>
            <h1> SignIn User</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <table>
                <tr>
                <input type="email" name="email" onChange={this.onChangeEmail}/>
                </tr>
                <tr>
                <input type="password" name="password" onChange={this.onChangePassword}/>
                </tr>  
                <tr><input type="submit" value=" Sign In" className="btn"/></tr>
                </table>
                </div>
            </form>
        </div>
        );
    }
}