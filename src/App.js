import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectSection from './components/ProjectSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Map from './components/Map';


const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if(spinner){
    setTimeout(() =>{
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }
  return (
    !loading &&(
      <>
      <Navbar/>
      <Home/>
      <ProjectSection/>
      <Skills/>
      <Contact/>
      <Map/>
      </>
    )
  )
}

export default App;
