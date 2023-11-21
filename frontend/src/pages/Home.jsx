import {Navbar, Filter, Header, Services, Footer, Contact} from "../components"

const Home = () => {
  return (
    <div className="Home">
      <Navbar activeLink="home" /> 
      <Filter/>
      <Header/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
