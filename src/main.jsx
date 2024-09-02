import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from 'antd';

import { AuthProvider } from "./context/Auth";

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0a3653",
          borderRadius: "4px"
        },
        components: {
          Button: {
            primaryShadow: "none"
          },
          Layout: {
            siderBg: "#0a3653",
          },
          Menu: {
            itemBg: "#0a3653",
            itemSelectedBg: "#FFF",
            itemSelectedColor: "rgba(0, 0, 0, 0.8)",
            itemBorderRadius: "4px"
          }
        }
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
)
