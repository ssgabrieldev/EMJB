import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from 'antd';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#146aa1",
            borderRadius: "4px"
        },
        components: {
          Layout: {
            siderBg: "#146aa1",
          },
          Menu: {
            itemBg: "#146aa1",
            itemSelectedBg: "#FFF",
            itemSelectedColor: "rgba(0, 0, 0, 0.8)",
              itemBorderRadius: "4px"
          }
        }
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
)
