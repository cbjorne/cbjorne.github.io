import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashAutoPage from '../sample-pages/DashAutoPage/DashAuto';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/dashauto',
        element: <DashAutoPage />,
    },
])