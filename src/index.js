import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Reg from './Project/Regiss';
//import Home from './Project/Home1';
// import { Login } from '@mui/icons-material';
import reportWebVitals from './reportWebVitals';
//import Methods from './Api/Methods';
//import Navigate from './Project/Router1';
import Router1 from './Project/Router1';
//import TodoList from './Lap/TodoList';
//import Hom from './Lap/Hom';
//import Newform from './Contexts/Newform';
//import User from './User';
// import { Login } from '/Project/Login';

// import Paint from './Style/Paint';
// import Material from './Materialui';
//import Materialui from './Materialui';
//import List1 from './List/List1';
//import List2 from './List/List2';
//import Comp_A from './Props/Comp_A';
//import Comp_B from './Props/Comp_B';
// import Ticket_counter from './States/Ticket_Counter';
//import Parent from './Session7/Parent';
//import Class_Component from './Compound/Class_Component';
//import Functional_Component from './Compound/Functional_Component';

// import Class_Component from './Component/Class_component';
// import Function_component from './Component/Functional_component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/*<Class_Component/>
  <Functional_Component/>*/}
  {/* <Paint/> */}
   {/* <Ticket_counter/> */}
   {/*<Parent/>*/}
   {/* <Materialui/> */}
   {/* <Reg/> */}
   {/* <Login/> */}
   {/* <Home/> */}
    <Router1/> 
   {/* /<WelcomeCard/> */}
   {/* <TodoList/>/ */}
   {/* <Hom/> */}
   {/* <Newform/> */}
  {/* <User></User> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();