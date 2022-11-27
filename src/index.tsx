
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { router } from './router';
import './styles/base.scss';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);