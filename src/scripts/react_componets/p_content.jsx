import CtaGameBanner from "./cta_game_banner.jsx"
import TgStrip from "./tg_strip.jsx"
import YtBanner from "./yt_banner.jsx"
import PBanner from "./persons_banner.jsx"
import News from "./news.jsx"
import Footer from "./footer.jsx"
import changePerson from "../code/change_person.jsx"
import personScroll from "../code/person_scroll.jsx"
import { useEffect } from "react"

function SetDefaultContent() {
    return (
        useEffect(() => {
            changePerson()
            personScroll()
        }),

        <>
            <CtaGameBanner></CtaGameBanner>
            <TgStrip></TgStrip>
            <YtBanner></YtBanner>
            <PBanner></PBanner>
            <News></News>
            <Footer></Footer>
        </>
    )
}

export default SetDefaultContent