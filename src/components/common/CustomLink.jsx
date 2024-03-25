import { Link, useMatch } from 'react-router-dom';

export default function CustomLink({ children, to, ...props }){
	const match = useMatch({
		path: to,
		end: to.length === 1
	});
	// console.log(match)
	return (
		<Link
			to={to}
			className={match ? "text-blue-500" : 'text-white'}
			{...props}
			>
			{children}
		</Link>
	)
}