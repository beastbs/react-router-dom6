import { Link, useNavigate } from 'react-router-dom';

const avatarNameList = ['Spooky', 'Chloe', 'Charlie', 'Angel', 'Samantha']
function getRandomAvatarName(){
	const index = Math.floor(Math.random() * (avatarNameList.length - 0) + 0);
	return avatarNameList[index];
}

export default function UserCard({user}){
	const {name, username, email, id} = user;
	const navigate = useNavigate()
	const avatarName = getRandomAvatarName()

	const goBack = () => navigate(-1)
	// Bad approach - обычный переход на др.страницу лучше делать через Link
	const goHome = () => navigate('/', {replace: true})
	// Этот подход с передачей state - допустим
	const goEditUser = () => navigate(`/users/${id}/edit`, {replace: true, state: user})

	return (
		<div className="relative w-[600px] border-4 rounded-xl p-10 flex flex-col space-y-3 mx-auto">
			<img 
				src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${avatarName}`}
				alt="avatar"
				className="w-[200px] mx-auto"
			/>
			<h1>{name} (id: {id})</h1>
			<h2 className="text-4xl"><span className="font-bold">nickname:</span> {username}</h2>
			<h2 className="text-4xl"><span className="font-bold">email:</span> {email}</h2>

			<button onClick={goBack} className="absolute top-0 left-3 bg-slate-500 text-white rounded w-[90px] hover:bg-slate-700 ">Go back</button>
			<button onClick={goHome} className="absolute top-10 left-3 bg-slate-500 text-white rounded w-[90px] hover:bg-slate-700 ">Go Home</button>
			<button onClick={goEditUser} className="absolute top-0 right-3 bg-slate-500 text-white rounded w-[50px] p-px text-center hover:bg-slate-700 hover:text-white">Edit</button>
		</div>
	)
}

