
import './App.css'
import { Route, Routes,BrowserRouter } from 'react-router'
import Home from './pages/home'
import TaskPage from './pages/task'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/task/:id" element={<TaskPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
