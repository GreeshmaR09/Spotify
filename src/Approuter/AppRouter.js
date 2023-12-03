import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Combined from '../Pages.js/Combined';
import Loginpage from '../Pages.js/Loginpage';
import ListenSong from '../Pages.js/ListenSong';
import Searchactive from '../Pages.js/Searchactive';
import SearchActiveafter from '../Pages.js/SearchActiveafter';

function AppRouter() {
  return (
    <Router>
    <div>
     
      <Routes>
        <Route path="/" element={ <Combined/>} />
        <Route path='backtomain' element={<ListenSong/>}/>
        <Route path="/backtohome" element={ <Combined/>} />
        <Route path='/search-btn-after' element={<SearchActiveafter/>}/>
        <Route path="/listensong" element={ <ListenSong/>} />
        <Route path="/search-btn" element={ <Searchactive/>} />
        <Route path="/loginpage" element={<Loginpage/>} />

      </Routes>

    </div>
  </Router>
  )
}

export default AppRouter