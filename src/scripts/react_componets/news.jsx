import "../../assets/styles/scss/news.scss"
import V1_6 from "../../assets/images/1.6.jpg"
import V1_5M from "../../assets/images/1.5.jpg"
import HC from "../../assets/images/HC.jpg" 

function News() {
    return (
        <>
            <div className="news_banner">
                <div className="banner_desc">
                    <span></span>
                    <p>NEWS</p>
                    <span></span>
                </div>
                <div className="news_card">
                    <div className="card">
                        <img src={V1_6} alt="Stardew Valley New" />
                        <div className="date"><p>00/00/00</p></div>
                        <div className="card_desc"><p>Version 1.6 for Stardew valley is coming, bringing incredible new changes.</p></div>
                        <a href="#" target="_blank">
                            <button type="button" className="s_btn">Read More
                                <i class="fa-solid fa-right-long"></i>
                            </button>
                        </a>
                    </div>
                    <div className="card">
                        <img src={V1_5M} alt="Stardew Valley New" />
                        <div className="date"><p>00/00/00</p></div>
                        <div className="card_desc"><p>The version of Stardew Valley 1.5 for Android has arrived</p></div>
                        <a href="#" target="_blank">
                            <button type="button" className="s_btn">Read More
                                <i class="fa-solid fa-right-long"></i>
                            </button>
                        </a>
                    </div>
                    <div className="card">
                        <img src={HC} alt="Stardew Valley New" />
                        <div className="date"><p>00/00/00</p></div>
                        <div className="card_desc"><p>A new game is coming, Haunted Chocolatier is an unmissable adventure, full of mysteries and news. Find out now how to participate in the beta</p></div>
                        <a href="#" target="_blank">
                            <button type="button" className="s_btn">Read More
                                <i class="fa-solid fa-right-long"></i>
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default News