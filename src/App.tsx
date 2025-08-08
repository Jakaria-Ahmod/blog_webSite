import { createBrowserRouter, RouterProvider } from 'react-router';
import RootComponetns from './RootFile';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SingleBlog from './pages/SingleBlog';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootComponetns></RootComponetns>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
        {
          path: '/contact',
          element: <Contact></Contact>,
        },
        {
          path: '/single-blog/:id',
          element: <SingleBlog></SingleBlog>,
        },
        {
          path: '*',
          element: <NotFound></NotFound>,
        },
      ],
    },
  ]);
  return (
    <div>
      <div>
        <RouterProvider router={router} />,
      </div>
    </div>
  );
};

export default App;
