import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { router } from './routes/Routes'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DarkModeProvider>
            <RouterProvider router={router} />
        </DarkModeProvider>
    </StrictMode>,
);
