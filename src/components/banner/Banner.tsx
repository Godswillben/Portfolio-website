import pic from '../../static/images/pro.jpg'
import { FaEnvelope, FaGithub, FaLinkedin, FaTimes, FaTwitter } from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='section-about'>
            <div className="img-con">
                <img className="full-width" src={pic} alt="" />
            </div>
            <div className="about-section">
                <div className="dark-line left-line"></div>
                <p className="font2 about-header">About Me</p>
                <p className='font1 about-info'>I am a software engineer with four years of experience passionate in creating things, not afraid of getting my hands dirty to make things work. Enjoy being a part of earlys stage projects where i can have an impact. </p>
                <p className='font1 about-info'>I Embarce and welcome difficult tasks, not afraid of putting in more work than initially planned to make things work when things get murky(which often happen).</p>
                <p className="font1 about-info">Enjoy reading, watching anime(sometimes), but  prefare working most of the time I find fulfilment when am working.</p>
                <p className="font1 about-info">Am quite ambitous and a fast learner.</p>
                <div className="icon-container">
                    {/* icons  */}
                    <a href="mailto:amogugodswill99@gmail.com"><FaEnvelope style={{color: '#000',}} /></a>
                    <a href="https://twitter.com/Godswil87798640?t=-UFrmRJqVZmxvpxBbeI7Xw&s=09"><FaTwitter style={{color: '#000',}} /></a>
                    <a href="#"><FaGithub style={{color: '#000',}} /></a>
                    <a href="https://www.linkedin.com/in/amogu-godswill-a694991a0"><FaLinkedin style={{color: '#000',}} /></a>
                </div>
                <div className="dark-line right-line"></div>
            </div>
        </div>
    )
}

export default Banner
