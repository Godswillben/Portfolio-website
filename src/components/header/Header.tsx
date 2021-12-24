export interface Props {
    username: string
}

const Header = (prop: Props) => {
    return (
        <div className="header_and_sideBar">
            <header className="font1 header-name">
                {prop.username}
            </header>
        </div>
    )
}

export default Header
