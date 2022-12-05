import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toast";
import routes from "./Routes/Routes/Routes";


function App() {
  return (
    <div>
      <RouterProvider router={routes}>
      </RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
