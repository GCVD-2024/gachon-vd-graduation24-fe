import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About/About';
import Work from '../pages/Work/Work';
import Guest from '../pages/Guest/Guest';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <About />,
      },
      {
        path: 'work',
        element: <Work />,
      },
      {
        path: 'guest',
        element: <Guest />,
      },
    ],
  },
]);

export default router;
