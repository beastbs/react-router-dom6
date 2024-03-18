import { useState } from 'react';
import showIcon from '@/assets/show-pass.svg';
import hideIcon from '@/assets/hide-pass.svg';

export default function TextField({label, type = 'text', name, onChange, value = '', placeholder}){
   const [showPassword, setShowPassword] = useState(false);

   const handleTogglePassword = () => {
      setShowPassword(prevState => !prevState);
   }

   return (
      <div className="mb-[5px]">
         <label className="block mb-[2px]" htmlFor={name}>{label}:</label>
         <div className="flex bg-white rounded">
            <input
               className="w-full px-3 py-2 text-xl outline-none rounded"
               type={showPassword ? "text" : type}
               name={name}
               onChange={onChange}
               required
               placeholder={placeholder}
               value={value}
               />
            {
               type === "password"
               ? <img
                  src={showPassword ? hideIcon : showIcon }
                  className="mx-2 cursor-pointer"
                  onClick={handleTogglePassword} 
                  alt="toggle password" />
               : null
            }
         </div>
      </div>
   )
}