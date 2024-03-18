import {useState, createContext } from 'react';

export const AuthContext = createContext(null);

export default function AuthProvider({children}){
	const [auth, setAuth] = useState(null)

	const signin = (newUser, cb) => {
		setAuth(newUser);
		cb()
	}

	const signout = (cb) => {
		setAuth(null)
		cb()
	}

	const value = {auth, signin, signout}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}