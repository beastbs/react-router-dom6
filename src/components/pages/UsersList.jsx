import { Link, useLocation } from 'react-router-dom';

export default function UsersList({ users }){
	const { pathname } = useLocation();
	
	return (
		<ul className="text-slate-900 mb-5">
				{users.map(user => (
					<li key={user.id} className="my-2">
						<Link to={`${pathname}/${user.id}`}>{user.name} ({user.id})</Link>
					</li>
				))}
			</ul>
	)
}