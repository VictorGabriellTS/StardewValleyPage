import "../../assets/styles/scss/yt_banner.scss"
import Maru from "../../assets/images/Maru.png"
import Harvey from "../../assets/images/Harvey.png"
import Sebastian from "../../assets/images/Sebastian.png"
import Alex from "../../assets/images/Alex.png"

function YtBanner() {
    return (
        <>
            <div className="yt_banner">
                <p>WELCOME</p>
                <div className="persons">
                    <img className="first_person" src={Sebastian} alt="Sebastian" />
                    <img className="sec_person" src={Maru} alt="Maru" />
                    <img className="third_person" src={Alex} alt="Alex"/>
                </div>
                <div className="yt_v">
                    <iframe width="800" height="400" src="https://www.youtube.com/embed/ot7uXNQskhs?si=NYYp7_NbvvSjccOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default YtBanner