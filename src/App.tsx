import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>login</>} />
        <Route path="/register" element={<>Register Page</>} />
        <Route path="/home" element={<>home Page</>} />
        <Route path="/leads" element={<>Leads Page</>} />
        <Route path="/profile" element={<>profile Page</>} />
      </Routes>
    </Router>
  )
}

export default App
