import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About/About';
import Work from '../pages/Work/Work';
import Guest from '../pages/Guest/Guest';
import App from '../App';
import WorkDetail from '../pages/Work/WorkDetail';
import DelayRouteWrapper from '../pages/DelayRouteWrapper';
import WorkDetailHeaderLayout from '../components/Layout/WorkDetailHeaderLayout';

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
        element: (
          <DelayRouteWrapper>
            <Work />
          </DelayRouteWrapper>
        ),
      },
      {
        element: <WorkDetailHeaderLayout />,
        children: [
          {
            path: 'work/:name/:title',
            element: (
              <DelayRouteWrapper>
                <WorkDetail />
              </DelayRouteWrapper>
            ),
          },
        ],
      },
      {
        path: 'guest',
        element: <Guest />,
      },
    ],
  },
]);

export default router;
