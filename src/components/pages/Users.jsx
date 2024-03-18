import { Link } from 'react-router-dom';
import { useUser } from '@hook/useUser';
import { UsersList } from '@pages/';
import Spinner from '@common/Spinner';

export default function Users(){
   const { users } = useUser()

   return (
      <div className="text-2xl">
         <h1 className="mb-2.5">User List</h1>

         {users.length 
            ? (
               <>
                  <UsersList users={users}/>
                  <Link to="/users/new" className="text-slate-800 py-2 px-4 bg-slate-300 hover:text-slate-800 hover:bg-slate-400">Add new user</Link> 
               </>
            ) :
             <Spinner/>}
      </div>
   )
}