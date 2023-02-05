
const Header = () => {

    return (
        <div className="header">
            <a href="/" className="logo">
            <img src="https://iili.io/H1M1VeV.md.jpg" alt="eat-quick-logo"/>
            </a>
            <div className="header-right">
                <a className="search" href="/search">Search</a>
                <a href="/addrecipe">Add Recipes</a>
                <a href="/browse">Browse</a>
            </div>
        
        </div>
    )
}

export default Header