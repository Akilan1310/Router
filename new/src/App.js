import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Counter from './Counter'
import Out from './Out'
import Effect from './Effect'
import Reducer from './Reducer'
import Callback from './Callback'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Out/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="counter" element={<Counter/>}/>
      <Route path="Effect" element={<Effect/>}/>
      <Route path="Reducer" element={<Reducer/>}/>
      <Route path="Callback" element={<Callback/>}/>
    
    </Route>
    </Routes>
    </BrowserRouter>
  )
}