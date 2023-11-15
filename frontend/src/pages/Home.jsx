import {Navbar, Landing, Header, Services, Footer, Contact} from "../components"

const Home = () => {
  return (
    <div className="Home">
      <Navbar activeLink="home" /> 
      <Landing/>
      <Header/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
