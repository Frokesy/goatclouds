import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/team";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/team", element: <Team /> },
    { path: "/services", element: <Services /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/blog", element: <Blog /> },
    { path: "/contact", element: <Contact /> }
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
