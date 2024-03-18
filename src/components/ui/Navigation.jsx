import CustomLink from '../common/CustomLink';

export default function Navigation(){
   return (
      <nav className="list-none text-4xl">
         <ul className="flex space-x-5">
            <li>
               <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
               <CustomLink to="users">Users</CustomLink>
            </li>
            <li>
               <CustomLink to="about">About</CustomLink>
            </li>
            <li>
               <CustomLink to="contacts">Contacts</CustomLink>
            </li>
         </ul>
      </nav>
   )
}