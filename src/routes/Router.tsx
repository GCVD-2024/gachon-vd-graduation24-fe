import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About/About';
import Work from '../pages/Work/Work';
import Guest from '../pages/Guest/Guest';
import App from '../App';
import WorkDetail from '../pages/Work/WorkDetail';

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
        path: 'work/:name/:title',
        element: <WorkDetail />,
      },
      {
        path: 'guest',
        element: <Guest />,
      },
    ],
  },
]);

export default router;
