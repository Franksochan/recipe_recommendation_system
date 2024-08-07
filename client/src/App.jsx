import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.css'

const Authentication = lazy(() => import('./pages/auth/Auth'))
const VerifyEmail = lazy(() => import('./pages/auth/VerifyEmail'))
const Home = lazy(() => import('./pages/home/Home'))

function App() {
 return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/verify-email/:email" element={<VerifyEmail />}/>
      </Routes>
    </Router>
  )
}

export default App