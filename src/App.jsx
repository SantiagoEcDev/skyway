import './App.css'
import { NavigationBar } from './components/NavigationBar/NavigationBar'
import { Hero } from './components/Hero/Hero'
import {Booking} from './components/Booking/Booking'
import {TopPlaces}from './components/TopPlaces/TopPlaces'
function App() {

  return (
    <>
      <NavigationBar/>
      <Hero/>
      <Booking/>
      <TopPlaces/>
    </>
  )
}

export default App
