import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> }
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
