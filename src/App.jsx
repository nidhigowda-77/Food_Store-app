import Category from "./components/Category"
import Food from "./components/Food"
import { Footer } from "./components/Footer"
import HeadlineCards from "./components/HeadlineCards"
import Hero from "./components/Hero"
import Navabar from "./components/Navabar"


function App() {

  return (
   <div >
    <Navabar />
    <Hero />
    <HeadlineCards />
    <Food />
    <Category />
    <Footer />
   </div>
  )
}

export default App
