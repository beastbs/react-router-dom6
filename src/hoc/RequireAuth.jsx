import { useAuth } from '@hook/useAuth';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({children}){
	const { auth } = useAuth();

	if(!auth){
		return <Navigate to="/login" replace/>
	}

	
	return children;
}