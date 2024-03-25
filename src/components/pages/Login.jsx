import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@hook/useAuth';
import { useForm } from '@hook/useForm';
import TextField from '@common/form/TextField';
import Button from '@common/Button';

export default function Login(){
	const navigate = useNavigate();
	const location = useLocation();
	const { signin } = useAuth();
	const [data, onChange] = useForm();

	const fromPage = location.state?.from?.pathname || '/';
	console.log(location);

	const handleSubmit = (event) => {
		event.preventDefault();
		signin(data, () => navigate(fromPage, {state: data, replace: true}))
	}
	
	return (
		<form className="bg-slate-200 rounded flex flex-col w-[500px] space-y-4 p-4 mx-auto" onSubmit={handleSubmit}>
			<h1>Login</h1>
			
			<TextField
				label='Name'
				name='name'
				placeholder="Enter your name"
				value={data?.name || ""}
				onChange={onChange}
			/>
			<TextField
				label='Email'
				type="email"
				name='email'
				placeholder="Enter your email"
				value={data?.email || ""}
				onChange={onChange}
			/>
			<TextField
				label='Password'
				type="password"
				name='password'
				placeholder="Enter your Password"
				value={data?.password || ""}
				onChange={onChange}
			/>
			<Button
				width='w-1/3'
				bg='bg-indigo-600'
				hover='hover:bg-indigo-800'
			>
				Submit
			</Button>
		</form>
	)
}