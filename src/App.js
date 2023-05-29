import React from 'react';
import { Route, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar';
import DataList from "./components/stuff";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<Root/>}>
        <Route index element={<DataList/>}/>
        {/* <Route path="/service" element={<Service/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/regis" element={<RegisterPage/>}/>
        <Route element={<Lost/>} /> */}
      </Route>
    )
  )


  return (
      <div className="App">
        <RouterProvider router = {router}/>
        <div>gay</div>
      </div>
  );
}

const Root = () =>{
  return(<Navbar/>)
}

export default App;
