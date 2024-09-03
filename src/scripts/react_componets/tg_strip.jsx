import "../../assets/styles/scss/tg_strip.scss"
import Junimos from "../../assets/images/Junimo_T.png"

function TgStrip() {
    return (
        <>
            <div className="strip">
                <div className="tg_img">
                  <img src={Junimos} alt="Junimo" />
                </div>
                <div className="text">
                    <p>Stardew Valley is better with friends! Play now in multiplayer mode</p>
                    <button className="s_btn">Learn More</button>
                </div>
            </div>
        </>
    )
}

export default TgStrip