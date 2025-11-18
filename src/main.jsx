import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

function Fallback() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">Something went wrong loading the page</h1>
        <p className="mt-3 text-slate-300">Try a hard refresh. If it persists, open the diagnostics page.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={() => window.location.reload()} className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold">Reload</button>
          <a href="/test" className="rounded-lg border border-slate-700 px-4 py-2">Open Diagnostics</a>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Fallback />}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
