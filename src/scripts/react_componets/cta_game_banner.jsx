import "../../assets/styles/scss/cta_game_banner.scss"
import "../../assets/styles/scss/d_btn.scss"
import "../../assets/styles/scss/s_btn.scss"

function CtaGameBanner() {
    return (
        <div className="banner">
            <div className="desc">
                <p>Embark on this incredible journey!</p>
            </div>
            <div className="buttons">
            <a href="https://www.xbox.com/pt-BR/games/store/stardew-valley/c3d891z6tnqm" target="_blank">
                <button className="d_btn" type="button">PLAY</button>
            </a>
            <a href="https://youtu.be/8A7A1X1TVNc?si=Bbwn67JsdFM0M-fB" target="_blank">
                <button className="s_btn" type="button">WATCH TRAILER</button>
            </a>
            </div>
        </div>
    )
}

export default CtaGameBanner
