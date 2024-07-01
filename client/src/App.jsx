import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Element from './component/Element';
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import Todolist from './component/Todolist';

const App = () => {
  // console.log(`EVERTHING IS GOOD`)
  return (

    <>
      <Element />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Todolist' element={<Todolist />} />
      </Routes>
    </>
  );
};

export default App;
