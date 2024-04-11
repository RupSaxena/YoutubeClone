import Head from './component/Head';
import Body from './component/Body';
import {Provider }from 'react-redux';
import {createBrowserRouter , RouterProvider}from'react-router-dom';

import './App.css';
import Store from './utils/Store';
import Maincontainer from './component/Maincontainer';
import Watchpage from './component/Watchpage';
const approuter=createBrowserRouter(
  [
    {
      path:'/',
      element:<Body/>,
      children:[{
        path:"/",
        element:<Maincontainer/>
      },
    {
      path:"watch",
      element:<Watchpage/>
    }]
    }
  ]
);


function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Head/>
      <RouterProvider router={approuter}/>
        <Body/>
    </div>
    </Provider>
  );
}
export default App;
