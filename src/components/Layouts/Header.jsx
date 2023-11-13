import Cart from "../Cart"

const Header = ({nItems,item ,handleEve})=>{
    return(
        <header>
        <div className="nav-brand">
            <a href="/p_assets/Along.png">
                <img src="/p_assets/mylogo.svg"  className=" logo icon icon-tabler" alt="weblogo of Chappal walaz" />
                <span>WalksArt</span>
            </a>
        </div>
        <div className="searchBox-container">
            <form>
                <input name="search" type="text"
                    id="search" placeholder="Enter product name, category" />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                        height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
        </div>
        <div className="cart-container">
           <Cart nItems={nItems} cartDataArray={item} handleEve={handleEve}/>
        </div>
    </header>
    )
}
export default Header