import React from 'react';
import {Link} from 'react-router-dom';
import { Route, Redirect } from 'react-router'
import axios from 'axios';
import Boxes from './Boxes';
import querystring from 'querystring';
import  'bootstrap/dist/css/bootstrap.min.css'
import global from '../global'
import CaptureImage from './CaptureImage'
export default class addPrescription extends React.Component
{

	constructor(props)
	{
		super(props);
		this.state={
			name:"",
			qty:"",
			imageuri:""
		}
		this.order = this.order.bind(this);
		this.onMedsQty= this.onMedsQty.bind(this);
		this.onImage = this.onImage.bind(this);
		this.onMedsName = this.onMedsName.bind(this);
	}
	componentDidMount()
	{
		
	}
	onMedsName(e)
	{
		this.setState({name:e.target.value});
	}
	onMedsQty(e)
	{
	    this.setState({qty:e.target.value});
	}
	onImage(dataUri)
    {
        this.setState({
            imageuri: dataUri
        })
    }
	order(e)
	{
		const  med = {
			mid:this.state.name,
			email:this.state.qty,
			imageuri:this.state.imageuri
		};
		axios.post(global.url + "/upload_prescription",querystring.stringify(med), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' , 'Access-Control-Allow-Origin' : '*'
        
        
    }}).then(msg => console.log(msg))
		.catch(err=>{
			window.alert(err);
		})
	}
	render()
	{

		return (
			<div className="form-group">
			<table>
			<tr>
			<input type="text" name="meds" onChange={this.onMedsName}></input>
	     	</tr>
	     	<tr>
	     	<input type="text" name="qty" onChange={this.onMedsQty}></input>
	     	</tr>
			 <tr><CaptureImage takePhoto={this.onImage} /></tr> 
	     	<tr>
	     	<button className = "btn" onClick={this.order}>Add</button>
	     	</tr>
	     	<tr>
	     	<Link to="/prescriptions"><button className = "success">Go to prescriptions</button></Link>
	     	</tr>
	     	</table>
			</div>);
	}
}