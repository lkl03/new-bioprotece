import Head from 'next/head'
import NavHome from '../components/Navbar/NavHome'
import { FaPhoneAlt, FaFacebookF, FaLinkedin, FaChevronDown, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'
import ScrollArrow from '../components/Generales/ScrollArrow'
import styled from 'styled-components'
import { useEffect } from 'react'
import FirstSection from '../components/NewHome/FirstSection'
import SecondSection from '../components/NewHome/SecondSection'
import ThirdSection from '../components/NewHome/ThirdSection'
import FourthSection from '../components/NewHome/FourthSection'
import FifthSection from '../components/NewHome/FifthSection'
import SixthSection from '../components/NewHome/SixthSection'


export default function Home() {

  return (
    <>
      <NavHome/>
      <ScrollArrow/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
    </>
  )
    
}
