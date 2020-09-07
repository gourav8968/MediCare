import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Boxes from './Boxes';
export default class Prescriptions extends React.Component
{

	constructor(props)
	{
		super(props);
		this.state={
			medicines:[]
		}

	}
	componentDidMount()
	{
		axios.get('')
		.then((meds)=>{
		  this.setState({medicines:[...meds]})
		})
		.catch(err=>{
			console.log(err);
		})


	}
	render()
	{


		/*var ele = [];
		ele.push(<ul>)
		for(m in this.state.medicines)
			{
				ele.push(<Boxes name= {m.name} danger={m.danger} qty={m.qty}/>)
			}	
				ele.push(</ul>);
		return (
			<div>
			<tr>
			{ele}
			</tr>
			<tr>
			<td><button onClick={reorder}>Reorder</button></td> 
			<td><button onClick={add}><Link to='/addPrescription'>Add New</Link></button></td>     
			</tr>
			</div>);*/
			console.log(this.state.medicines);
			return (<div></div>);
	}
}