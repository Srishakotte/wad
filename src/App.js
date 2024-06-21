import './App.css';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Carts from './components/Carts/Carts';
import Catalog from './components/Catalog/Catalog';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Main/>,
      children:[
        {
          path:"/",
          element:<About/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/catalog",
          element:<Catalog/>
        },
        {
          path:"/cart",
          element:<Carts/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
