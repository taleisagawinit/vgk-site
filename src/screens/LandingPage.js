import React, { useEffect } from 'react'
import "../styles/styles.css"
import { useSelector } from 'react-redux';
import { getSportsData } from '../redux/actions';
import Header from '../components/Header'
import About from '../components/About'
import LogoSection from '../components/LogoSection'
import Location from '../components/Location'
import Footer from '../components/Footer'

export default function LandingPage() {
  // get data from the reducer once API call is made
  // pass data specific to each component as props
  const sportsData = useSelector(appState => appState.reducer.sportsData);

  // call the API when page loads
  useEffect(() => {
    getSportsData()
  }, [])

  return (
    <div>
      <Header {...sportsData.headerData} />
      <About {...sportsData.aboutData} />
      <LogoSection {...sportsData.logoData} />
      <Location {...sportsData.locationData} />
      <Footer {...sportsData.footerData} />
    </div>
  )
}