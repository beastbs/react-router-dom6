import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../../layouts/Header';

export default function Dashboard(){
	return (
		<>
			<Header/>
			<main className="container mx-auto py-5 text-xl">
				<Outlet/>
			</main>

			<ToastContainer />
		</>
	);
}