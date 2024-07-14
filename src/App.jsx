import './App.css'
import { NavigationBar } from './components/NavigationBar/NavigationBar'
import { Hero } from './components/Hero/Hero'
import {Booking} from './components/Booking/Booking'
import {TopPlaces}from './components/TopPlaces/TopPlaces'
import { OurServices } from './components/OurServices/OurServices'
import { Footer } from './components/Footer/Footer'
function App() {

  return (
    <>
      <NavigationBar/>
      <Hero/>
      <Booking/>
      <TopPlaces/>
      <OurServices/>
      <Footer/>
    </>
  )
}

export default App
