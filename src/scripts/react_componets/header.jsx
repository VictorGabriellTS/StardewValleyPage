import "../../assets/styles/scss/header.scss"
import "../../assets/styles/scss/d_btn.scss"
import Stardew_Valley_Logo from "../../assets/images/Logo_Expanded.png"

function Header() {
    return (
        <>
            <header>
                <div className="sd_logo">
                    <a href="../../../index.html"><img src={Stardew_Valley_Logo} alt="Stardew Valley Logo" /></a>
                </div>
                <div className="pages_link">
                    <ul>
                        <li>
                            <a href="#">NEWS</a>
                        </li>
                        <li>
                            <a href="#">COMMUNITY</a>
                        </li>
                        <li>
                            <a href="#">WIKI</a>
                        </li>
                        <li>
                            <a href="#">SUPPORT</a>
                        </li>
                    </ul>
                </div>
                <div className="buy_game">
                <a href="https://www.xbox.com/pt-BR/games/store/stardew-valley/c3d891z6tnqm" target="_blanck">
                    <button className="d_btn" type="button">Buy Stardew Valley</button>
                </a>
                </div>
            </header>
        </>
    )
}

export default Header
