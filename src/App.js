import React from 'react';
import { Route, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar';
import ViewData from "./components/ViewData";
import AddData from './components/AddData';
import EditData from './components/EditData';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<Root/>}>
        <Route index element={<ViewData/>}/>
        <Route path="/add" element={<AddData/>}/>
        <Route path="/edit/:id" element={<EditData/>}/>
      </Route>
    )
  )

  return (
      <div className="App">
        <RouterProvider router = {router}/>
      </div>
  );
}


const Root = () =>{
  return(<Navbar/>)
}

export default App;
