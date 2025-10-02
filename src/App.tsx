import { InitialPage } from './components/InitialPage'
import { NotesContextProvider } from './contexts/NotesContext/NotesContextProvider'

function App() {

  return (
    <NotesContextProvider>
      <InitialPage/>
    </NotesContextProvider>   
  )
}

export default App
