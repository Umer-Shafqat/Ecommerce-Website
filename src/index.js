import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import StoreContextProvider from './components/Context/StoreContext'; // ✅ fixed path

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </HashRouter>
);

reportWebVitals();
