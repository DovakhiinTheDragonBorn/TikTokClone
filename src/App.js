import './App.css'
import { VideoComponent } from './components'

function App() {
   return (
      <div className="app">
         <div className="app__videos">
            <VideoComponent />
            <VideoComponent />
         </div>
      </div>
   )
}

export default App
