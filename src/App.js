import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes/Routes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <RouterProvider router={routes}>
      </RouterProvider>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
}

export default App;
