import "../../assets/styles/scss/persons_banner.scss";
import Alex from "../../assets/images/Alex_P.png";
import Elliott from "../../assets/images/Elliott_P.png";
import Harvey from "../../assets/images/Harvey_P.png";
import Sam from "../../assets/images/Sam_P.png";
import Sebastian from "../../assets/images/Sebastian_P.png";
import Shane from "../../assets/images/Shane_P.png";
import Abigail from "../../assets/images/Abigail_P.png";
import Emily from "../../assets/images/Emily_P.png";
import Haley from "../../assets/images/Haley_P.png";
import Leah from "../../assets/images/Leah_P.png";
import Maru from "../../assets/images/Maru_P.png";
import Penny from "../../assets/images/Penny_P.png";
import "../code/person_scroll";
import "../code/change_person";
import changePerson from "../code/change_person";
import {alexF, abigailF, elliottF} from "../code/change_person";
import { useEffect } from "react";

function PBanner() {
    useEffect(() => {
        changePerson()
    })

    return (
        <>
            <div className="persons_banner">
                <div className="banner_desc">
                    <p>MEET THE</p>
                    <div>
                        <span></span>
                        <p>PEOPLE OF PELICAN VILLAGE</p>
                        <span></span>
                    </div>
                    <p>
                        Meet the villagers and make new friends - you might even
                        find someone you want to settle down with!
                    </p>
                </div>
                <div className="person_desc_window">
                    <div className="card d_flex" id="alex">
                        <div className="img_box">
                            <img src={Alex} alt="Alex" />
                        </div>
                        <div className="text_box">
                            <p className="name">Alex</p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus, magnam dicta
                                distinctio quaerat iusto nisi nemo mollitia
                                quasi.
                            </p>
                        </div>
                    </div>
                    <div className="card d_none" id="abigail">
                        <div className="img_box">
                            <img src={Abigail} alt="Abigail" />
                        </div>
                        <div className="text_box">
                            <p className="name">Abigail</p>
                            <p className="desc">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Ullam eveniet nemo neque sit
                                suscipit labore error aspernatur deleniti?
                            </p>
                        </div>
                    </div>
                    <div className="card d_none" id="elliott">
                        <div className="img_box">
                            <img src={Elliott} alt="Elliott" />
                        </div>
                        <div className="text_box">
                            <p className="name">Elliott</p>
                            <p className="desc">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Ullam eveniet nemo neque sit
                                suscipit labore error aspernatur deleniti?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="person_window">
                    <button type="button" className="scroll" id="scroll_left">
                        <i className="fa-solid fa-left-long"></i>
                    </button>
                    <div className="persons_container">
                        <div className="persons_box">
                            <button type="button" className="person click_btn" id="alex_btn" onClick={alexF}>
                                <img src={Alex} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="abigail_btn" onClick={abigailF}>
                                <img src={Abigail} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="elliott_btn" onClick={elliottF}>
                                <img src={Elliott} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="">
                                <img src={Emily} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="">
                                <img src={Harvey} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="">
                                <img src={Haley} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="">
                                <img src={Sam} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="">
                                <img src={Leah} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="">
                                <img src={Sebastian} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="">
                                <img src={Maru} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="">
                                <img src={Shane} alt="Stardew Valley NPC" />
                            </button>
                            <button type="button" className="person" id="">
                                <img src={Penny} alt="Stardew Valley NPC" />
                            </button>
                        </div>
                    </div>
                    <button type="button" className="scroll" id="scroll_right">
                        <i className="fa-solid fa-right-long"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default PBanner;
