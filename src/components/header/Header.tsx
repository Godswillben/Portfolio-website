import pic from '../../static/images/pro.jpg'

export interface Props {
    username: string
}

const Header = (prop: Props) => {
    return (
        <div className="header_and_sideBar">
            <header className="font1 header-name">
                {prop.username}
            </header>
            <div className="side-bar">
                <div className="profile-pic">
                    <img src={pic} alt="" className="full-width" />
                </div>
                <div className="font1 white username">Amogu God'swill</div>
                <p className="sub-header font3 white">Stack</p>
                <p className="skill-list white font1">html, css, python, flutter, django, javascript, typscript,  node.js, react.js, cypress, graphql, postgress, redis</p>
            </div>
        </div>
    )
}

export default Header
