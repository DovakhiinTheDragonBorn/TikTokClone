import './App.css'
import { tiktokVideo } from './assets'
import { ksiTiktok } from './assets'
import { VideoComponent } from './components'

function App() {
   return (
      <div className="app">
         <div className="app__videos">
            <VideoComponent
               video={tiktokVideo}
               likeCount={598}
               shareCount={121}
               messageCount={231}
               channel="miladmirg"
               song="Love Yourz - J. Cole"
               description="Working at Subweh"
            />
            <VideoComponent
               video={ksiTiktok}
               likeCount={1251}
               shareCount={400}
               messageCount={750}
               channel="KSI"
               song="Beerus - KSI & Randlph"
               description="Sadge, no beeard"
            />
         </div>
      </div>
   )
}

export default App
