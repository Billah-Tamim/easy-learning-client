import { RouterProvider } from "react-router-dom";
import {router} from './routes/router/RouterProvider'


function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
