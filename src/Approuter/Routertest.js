import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Combined from '../Pages.js/Combined';
import Loginpage from '../Pages.js/Loginpage';
import ListenSong from '../Pages.js/ListenSong';
import Searchactive from '../Pages.js/Searchactive';
import SearchActiveafter from '../Pages.js/SearchActiveafter';
import MusicPlay from '../Pages.js/MusicPlay';
import MusicMain from '../Pages.js/MusicMain';

function Routertest() {
  return (
    <Router>
    <div>
     
      <Routes>
        <Route path="/" element={ <MusicPlay/>} />
        <Route path='/backtomain' element={<ListenSong/>}/>
        <Route path="/backtohome" element={ <Combined/>} />
        <Route path='/search-btn-after' element={<MusicPlay/>}/>
        <Route path="/listensong" element={ <ListenSong/>} />
        <Route path="/search-btn" element={ <MusicPlay/>} />
        <Route path="/loginpage" element={<Loginpage/>} />
        <Route path="/tomainmusic" element={<MusicMain/>} />

      </Routes>

    </div>
  </Router>
  )
}

export default Routertest