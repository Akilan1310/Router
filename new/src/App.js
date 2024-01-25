import {BrowserRouter,Routes,Route} from "react-router-dom"
 import Home from "./Home"
  import About from "./About"
import Contact from "./Contact"
import Out from "./Out"


 export default function App() {
   return (
     <BrowserRouter>
       <Routes>
           <Route path="/" element ={<Out/>}>
             <Route index element={<Home/>}/>
             <Route path="about" element={<About/>}/>
             <Route path="contact" element={<Contact/>}/>
           </Route>
       </Routes>
     </BrowserRouter>
   )
 }