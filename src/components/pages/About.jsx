import {Routes, Route, Link} from 'react-router-dom';
import {AboutCompany, AboutTeam} from '@pages';

export default function About(){
   return (
      <div className="about">
         <h1>About Page</h1>

         <ul className="flex space-x-4 text-2xl py-2 mb-2">
            <li>
              <Link to="company">About Company</Link>
            </li>
            <li>
              <Link to="team">About Team</Link>
            </li>
         </ul>

         <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, ad nobis magni vero ducimus at? Eligendi harum doloremque, asperiores nemo animi voluptates dolorem nobis tenetur hic eius ipsam a architecto.</p>

         <hr className="mb-4" />

         <Routes>
            <Route path="company" element={<AboutCompany />} />
            <Route path="team" element={<AboutTeam />} />
         </Routes>
      </div>
   )
}