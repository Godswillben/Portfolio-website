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
                <p className='font1 about-info'>I am a software engineer with 3+ years of experience passionate about creating things, not afraid of getting my hands dirty to make things work. Enjoy being a part of early-stage projects where i can have an impact. </p>
                <p className='font1 about-info'>I Embrace difficult tasks, not afraid of putting in more work than planned to make things work when things get murky.</p>
                <p className="font1 about-info">Enjoy reading, watching anime, and working. I find fulfillment when am working.</p>
                <p className="font1 about-info">I Am ambitious and a fast learner.</p>
                <div className="icon-container">
                    {/* icons  */}
                    <a href="mailto:amogugodswill99@gmail.com"><FaEnvelope style={{color: '#000',}} /></a>
                    <a href="https://twitter.com/Godswil87798640?t=-UFrmRJqVZmxvpxBbeI7Xw&s=09"><FaTwitter style={{color: '#000',}} /></a>
                    <a href="https://github.com/Godswillben"><FaGithub style={{color: '#000',}} /></a>
                    <a href="https://www.linkedin.com/in/amogu-godswill-a694991a0"><FaLinkedin style={{color: '#000',}} /></a>
                </div>
                <div className="dark-line right-line"></div>
            </div>
        </div>
    )
}

export default Banner
