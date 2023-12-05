import React from 'react'
import CountriesCards from '../../Components/CountriesCards'
import Navbar from '../../Layout/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CountriesCards></CountriesCards>
    </div>
  )
}

export default HomePage