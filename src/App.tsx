import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Stacks from './components/stacks/Stacks'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'

function App() {
  let username: string ="Amogu Godswill"

  return (
    <div className="App con">
      <Header username={username} />
      <Banner />
      <Stacks />
      <Education />
      <Experience />
      <div className="contact-btn-con">
        <a href='#' className='font1'>Contact Me</a>
      </div>
    </div>
  );
}

export default App;
