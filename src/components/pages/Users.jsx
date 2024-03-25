import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import { useUser } from '@hook/useUser';
import { UsersList } from '@pages/';
import Spinner from '@common/Spinner';

export default function Users(){
   const [ search, setSearch] = useState('');
   const [ checked, setChecked] = useState(false);
   const { users } = useUser()
   const [searchParams, setSearchParams] = useSearchParams();

   // URL.com/users?user=abs&data=somedata - получим все после ?)
   const userQuery = searchParams.get('user') || '';
   const latestQuery = searchParams.has('latest');
   const startsFrom = latestQuery ? 5 : 1;

   const filteredUsers = 
         users
            .filter(user => user.name.toLowerCase().includes(userQuery.toLowerCase()) && user.id >= startsFrom)


   const handleSubmit = (event) => {
      event.preventDefault();
   }

   const handleChange = (event) => {
      const inputValue = event.target.value;
      const inputChecked = event.target.checked;
      const params = {}

      if(inputValue.length) params.user = inputValue
      if(inputChecked) params.latest = true

      setSearch(inputValue)
      setChecked(inputChecked)

      setSearchParams(params)
   }

   return (
      <div className="text-2xl">
         <h1 className="mb-2.5">User List</h1>

         <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="relative  mb-8">
            <div className="w-2/4 flex justify-between items-center border-2 rounded mb-2">
               <input
                  type="search"
                  name="search"
                  className="w-full outline-none py-2 px-3"
                  checked={latestQuery}
                  value={search || userQuery}
                  onChange={handleChange}
                  />
               <img
                  className="size-8 mx-2 cursor-pointer"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA+RJREFUWEftl11oHFUUx/9n925KlD5URGmlim2w5rlVH0QRP6BCRdRKWpEGvx4qvokx7NwkB3KGTcQnoX4Uoz74AY2FiCIiFL8qCH7gi8WktCgUEfwkWMHszB73hjtlM9nund1CrNB5m7nn/O+P/9w55wzhPLvoPOPB/xeImS9J03S3qt5NRAOqusm5S0Q/qeoCEb1Tr9cPT01N/XEurgcdmpiYuDJNUwtgGEBfYLN/VHWmUqnUmPlUL2AdgaIour/pxusFQPJ7/w1gSETe6xbqrEDW2qcBTOUEP1fVuVKp9Fm5XJ53a/V6/VoANxPRfQCub40nov2Tk5MvdgPVFiiKor1E9GYmRETfNxqNh+I4/qKTuLV2J4CDADb7OAWwS0TeLwq1CshauxXAdwDWeZFvjTG3MfPvRUSr1erGcrn8sape4+MXjTFbmfnXIvntgA4DuNcnn0jT9IZarfZbEbEsJoqiK4joawCX+2cviMjjRTRWAFlrBwEcyxJV9bo4jr8qIpSPsdbuAvCuf54YYzYWcWkFUBRFlogmvciciNzTC0yWY639EsAOf/+wiLwa0ss7dBTAjS6pWeweiOP4rZBA4JA/CeBZH3NIRIZCenmgHwBc5ZKMMZt7LW7ZpmNjY9tVNXvl34jI9m6BTgO4yAOtY+alkECn9dHR0Q3GmOzr/FNENoT08g79BeBiD7Semd19z9fIyMj6vr6+RS/wi4hcFhLLH+rjrnG6pDRNt9VqtYWQQOAMtX61n4jILSG9vENHANzqkx4VkZmQQABoP4DnfUyhWpQHeqp5hp7xAh+IyJ3nCPQRgMyVJ0TkQEhvBRAzDyRJcjxLUtWb4jh2paDra3x8/I5Go/GhTzxtjBlg5p9DQu1axyyA3T7xR2PMjiIVtnUjZt6UJIkristDHIBREZkOwbj1VUDMvCVJEtc+em6upVLJvaptbgNVPVmpVAaLlpCi48exRqMxHOprfvxw889ycfVARyqVyk5mTnpyKEuKoqhKRHFO5FMAc0R0dGlpaaG/v5/SNB1UVXdw3YB2tkr89vz8/J7Z2dk0BBUaYYeJ6GXXSUJCuXU36Lvx4/aW54eMMXuZudFJKzjkW2uvVtVxInqwAJh7LQfq9frE9PT0orXWTZ17WgDeMMbs6wQVBMrEmPnSJEmGVPUuItrivyAHcJKIXFM+0fw1OigiZ8qG+2ista81Y/a1QM2IyGPuvLdzqjBQl6+sNXwVlKq+EsfxI/8V0HJ5sda+BMA5k11tW8laOHSGwFrr/kgyqJqIVPMurSmQ29xa+5yqnorjOOuZK5jWHCh0Fi8AXXAo5EBo/V/VpnU0jPER9QAAAABJRU5ErkJggg=="
               />
            </div>

            <div className="flex items-center gap-1">
               <input
                  type="checkbox"
                  name="latest"
                  className="size-5"
                  value={userQuery}
                  checked={checked || latestQuery}
                  onChange={handleChange}
               />
               <label htmlFor="latest">New only</label>
		      </div>
         </form>

         {users.length 
            ? (
               <>
                  <UsersList users={filteredUsers}/>
                  <Link to="/users/new" className="text-slate-800 py-2 px-4 bg-slate-300 hover:text-slate-800 hover:bg-slate-400">Add new user</Link> 
               </>
            ) :
             <Spinner />}
      </div>
   )
}