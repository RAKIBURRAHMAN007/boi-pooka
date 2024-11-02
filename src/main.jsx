import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:bookId',
        loader: ()=> fetch('booksData.json'),
        element: <BookDetail></BookDetail>

      },
      {
        path: 'listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')
        

      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
