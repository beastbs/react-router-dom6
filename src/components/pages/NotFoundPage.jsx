import { Link } from 'react-router-dom';

export default function NotFoundPage(){
	return (
		<div className="container">
			<h1>Page Not Found</h1>
			<Link to="/">Home page</Link>
		</div>
	)
}