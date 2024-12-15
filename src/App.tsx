import { BrowserRouter, Routes, Route } from "react-router";
//import './App.css'

import { PageReg } from '@/pages/PageReg';
import { PageLogin } from '@/pages/PageLogin';
import { PageReaderPost } from '@/pages/PageReaderPost';
import { PageReaderPostInside } from '@/pages/PageReaderPostInside';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageReg />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/readerpost" element={<PageReaderPost />} />
        <Route path="/readerpostinside" element={<PageReaderPostInside />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
