import "../../assets/styles/scss/footer.scss";
import Logo_P from "../../assets/images/Logo_P.png";
import Logo_CA from "../../assets/images/ConcernedApe_Logo.png";
import Logo_HC from "../../assets/images/HC_Logo.png";
import Age from "../../assets/images/Rights_Age.svg"

function Footer() {
    return (
        <>
            <footer>
                <div className="lp_icon">
                    <img src={Logo_P} alt="Junimo" />
                </div>
                <div className="social">
                    <p>STAY CONNECTED</p>
                    <div className="links">
                        <ul>
                            <li>
                                <a href="#" target="_blank">
                                    <button type="button" className="card">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <button type="button" className="card">
                                        <i class="fa-brands fa-x-twitter"></i>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <button type="button" className="card">
                                        <i class="fa-brands fa-instagram"></i>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <button type="button" className="card">
                                        <i class="fa-brands fa-youtube"></i>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="terms_support">
                    <ul>
                        <li>
                            <a href="#" target="_blank">HOME</a>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <a href="#" target="_blank">COOKIE DECLARATION</a>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <a href="#" target="_blank">PRIVACY</a>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <a href="#" target="_blank">TERMS</a>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <a href="#" target="_blank">SUPPORT</a>
                        </li>
                    </ul>
                </div>
                <div className="ca_logo">
                    <img src={Logo_CA} alt="ConcernedApe Logo"/>
                    <img src={Logo_HC} alt="HauntedChocolatier Logo"/>
                </div>
                <div className="age">
                    <img src={Age} alt="Rights" />
                </div>
                <div className="rights">
                    <p>© 2023 ConcernedApe Corporation. Stardew Valley, and any associated logos are trademarks, service marks, and/or registered trademarks of ConcernedApe Corporation.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
