import { createBrowserRouter } from 'react-router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import AllReviews from '../pages/AllReviews';
import AddReview from '../pages/AddReview';
import MyReviews from '../pages/MyReviews';
import EditReview from '../pages/EditReview';
import Favorites from '../pages/Favorites';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import ReviewDetails from '../pages/ReviewDetails';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'reviews', element: <AllReviews /> },
      { path: 'reviewdetails/:id', element: <ReviewDetails/> },
      {
        path: 'add-review',
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-reviews',
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: 'edit/:id',
        element: (
          <PrivateRoute>
            <EditReview />
          </PrivateRoute>
        ),
      },
      {
        path: 'favorites',
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);

export default router;
