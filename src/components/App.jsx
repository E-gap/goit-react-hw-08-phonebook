import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: '50px',
      }}
    >
      <Routes>
        <Register />
        <Login />
        <Contacts />
      </Routes>
    </div>
  );
};
