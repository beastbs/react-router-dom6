import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {useUser} from '@hook/useUser';
import {useForm} from '@hook/useForm';
import TextField from '@common/form/TextField';
import Button from '@common/Button';

export default function NewUser(){
   const navigate = useNavigate();
   const { state } = useLocation();
   const { handleAddUser } = useUser();
   const [data, handleChange, setData] = useForm();

   console.log('STATE', state);

   const handleSubmit = (event) => {
      event.preventDefault();
      handleAddUser({
         name: data.newName,
         email: data.newEmail,
         username: data.newUsername
      })
      toast.success("User added",{
         position: "top-right",
         autoClose: 5000,
         pauseOnHover: true
      })
      setData({})
      navigate("/users")
   }
   
   return (
      <form onSubmit={handleSubmit} className="bg-gray-300 rounded flex flex-col w-[500px] space-y-4 p-6 mx-auto">
            <h1 className="">New User</h1>

            <TextField
               label="Name"
               name="newName"
               placeholder="Enter name"
               value={data?.newName || ""} 
               onChange={handleChange}
            />
            <TextField
               label="Email"
               type="email"
               name="newEmail"
               placeholder="Enter email"
               value={data?.newEmail || ""} 
               onChange={handleChange}
            />
            <TextField
               label="Username"
               name="newUsername"
               placeholder="Enter username"
               value={data?.newUsername || ""} 
               onChange={handleChange}
            />

            <Button
               width="w-full" bg="bg-blue-700"
               hover="hover:bg-blue-800"
            >Add user</Button>
         </form>
   )
}