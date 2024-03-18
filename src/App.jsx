import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from '@hoc/AuthProvider';
import UserProvider from '@hoc/UserProvider';
import RequireAuth from '@hoc/RequireAuth';
import Dashboard from './components/ui/Dashboard';
import {
  Home,
  Users,
  EditUser,
  NewUser,
  SingleUser,
  About,
  Contacts,
  Login,
  NotFoundPage
} from '@components/pages';


import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css'

function App() {

  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />}>
              <Route index element={<Home />} />
              <Route path='/users' element={<Users />}/>
              <Route path='/users/:id' element={<SingleUser />}/>
              <Route path='/users/:id/edit' element={<EditUser />}/>
              <Route path='/users/new' element={
                <RequireAuth>
                  <NewUser />
                </RequireAuth>
              }/>
              <Route path='/login' element={<Login />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/about-us' element={<Navigate to='/about' replace/>}/>
              <Route path='/contacts' element={<Contacts />}/>
              <Route path='*' element={<NotFoundPage />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App
