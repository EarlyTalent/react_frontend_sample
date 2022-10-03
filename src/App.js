import './App.css';
import Home from './Home'
import User from './User'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<User/>}/>
      </Routes>
    </div>
  )
}
export default App;
