import { useState, useEffect, createContext } from 'react';
import userService from '../services/user.service';

export const UserContext = createContext(null);

export default function UserProvider ({children}){
   const [users, setUsers] = useState([]);

   useEffect(() => {
      getUsers()
   }, []);

   const getUsers = async () => {
      const data = await userService.get();
      setUsers(data);
   }

   const getUserById = (id) => {
      return users.find(user => user.id === Number(id));
   }

   const handleAddUser = ({name, email, username}) => {
      const newUser = {
         id: Math.floor(Math.random() * 1e5),
         name,
         email,
         username
      }

      setUsers(prevState => [...prevState, newUser])
   }

   const value = {users, getUserById, handleAddUser}

   return (
      <UserContext.Provider value={value}>
         {children}
      </UserContext.Provider>
   )

}