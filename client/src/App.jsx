import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error, HomeLayout, Landing, Register, Login } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
