import { Navigate,useLocation } from 'react-router-dom';
import { useAuth } from '@hook/useAuth';

export default function RequireAuth({children}){
	const location = useLocation();
	const { auth } = useAuth();

	if(!auth){
		return <Navigate to="/login" replace state={{from: location}}/>
	}

	
	return children;
}