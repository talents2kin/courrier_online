import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalCourriersBox from '@/components/TotalCourriersBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Tonny', lastName:'NSENGA' , email: 'basepatonny@gmail.com'} ;
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Bienvenu(e)"
            user={loggedIn?.firstName || 'Invité' }
            subtext ="Accéder à votre compte et à vos courriers et les gérer efficacement."
          />

          <TotalCourriersBox
            courriers ={[]}
            totalCourriers={10}
            totalCourriersAreceptionner= {5} 
            totalCourriersATraiter={5}
          />
        </header>

        RECENT COURRIERS
        </div>
        <RightSidebar 
          user={loggedIn}
          courriers={[]}
          propositions={[]}

        />
    </section>
  )
}

export default Home
