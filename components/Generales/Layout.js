import Footer from "../Footer/Footer"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Layout = ({children}) => {
    useEffect(() => {
        AOS.init();
    })
    
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default Layout
