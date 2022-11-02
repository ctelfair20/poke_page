import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomThemeProvider, { theme } from './CustomThemeProvider';
import { store } from './redux/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// ASK ROB: Should my custom theme provide go here or in the pokepage index file?? What would work better for my porfolio??
root.render(
  // <React.StrictMode>
  <CustomThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </CustomThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
