import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// createRoot.render(
//   <ConfigProvider>
//     <AdaptivityProvider>
//       <App />
//     </AdaptivityProvider>
//   </ConfigProvider>,
//   document.getElementById("root")
// );