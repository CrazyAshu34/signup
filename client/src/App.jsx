import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Element from './component/Element';
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import Todolist from './component/Todolist';
import Welcome from './component/Welcome';

const App = () => {
  // console.log(`EVERTHING IS GOOD`)
  return (

    <>
      <Element />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todolist' element={<Todolist />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </>
  );
};

export default App;
