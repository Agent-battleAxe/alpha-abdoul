import React from 'react'


import { Navigation,Header,About,WhyUS,UserReviews, Contact,MidFooter,Footer} from '../components'

const Home = () => {
  return (
    <div>
        <Navigation />
        <Header />
        <About />
        <MidFooter />
        <WhyUS/>
        <Contact/>
        {/* <MidFooter /> */}
        <Footer/>
    </div>
  )
}

export default Home