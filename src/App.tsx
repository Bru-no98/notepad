import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotesContextProvider } from './contexts/NotesContext/NotesContextProvider'
import { InitialPage } from './components/InitialPage'
import { Dashboard } from './components/Dashboard'
import { NotesForm } from './components/NotesForm'

function App() {

  return (
    <BrowserRouter>
      <NotesContextProvider>
        <Routes>
          <Route path="/" element={<InitialPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/notesform" element={<NotesForm/>}/>
        </Routes>
      </NotesContextProvider>
    </BrowserRouter> 
  )
}

export default App
