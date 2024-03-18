import {useLocation, useParams} from 'react-router-dom';

export default function EditUser(){
	console.log(useLocation())
	console.log(useParams())
	
	return <h1>Edit User Page</h1>
}