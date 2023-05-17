import { RouterProvider } from "react-router-dom";
import {router} from './routes/router/RouterProvider'
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
