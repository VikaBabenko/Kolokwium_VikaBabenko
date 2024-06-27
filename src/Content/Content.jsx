import React from 'react';
import c from './Content.module.css'
import { GoSun } from "react-icons/go";
import { FaFaceSmile } from "react-icons/fa6";
import { TiWeatherShower } from "react-icons/ti";
import { PiTelevision } from "react-icons/pi";
import { CgYinyang } from "react-icons/cg";
import { IoGiftOutline } from "react-icons/io5";
import { MdModeOfTravel } from "react-icons/md";

const Content = () => {
    return (
        <div className={c.content}>
            <div className={c.background}>
                <div className={c.words}>
                    <div>
                        Wiadomosci
                    </div>
                    <div>
                        Sport
                    </div>
                    <div>
                        Premium
                    </div>
                    <div>
                        Bizines
                    </div>
                    <div>
                        Regionalne
                    </div>
                    <div>
                        Pogoda
                    </div>
                    <div>
                        Wideo i Audio
                    </div>
                    <div>
                        Motoryzacja
                    </div>
                    <div>
                        Nieruchomosci
                    </div>
                </div>
            </div>
            <div className={c.tablo}>
                <div className={c.about}>
                    <div>
                        Warszawa
                        <div>
                            24{GoSun()}
                        </div>
                    </div>
                    <div>
                        Stan powiedza
                        <div>
                            {FaFaceSmile()}Dobry
                        </div>
                    </div>
                    <div>
                        Jutro
                        <div>
                            {TiWeatherShower()}34
                        </div>
                    </div>
                    <div>
                        <img className={c.image4}
                             src="https://play-lh.googleusercontent.com/bbYmu2yejEzSnQvuzX9Q_GfBWVILVthxlscwloMc0hg-N2JBP7LNEL13HdBLRkZEzjyw"/>
                        <div>
                            Loteria Onetu
                        </div>
                    </div>
                    <div>
                        {PiTelevision()}
                        <div>
                            Program TV
                        </div>
                    </div>
                    <div>
                        {CgYinyang()}
                        <div>
                            Horoskop
                        </div>
                    </div>
                    <div>
                        {IoGiftOutline()}
                        <div>
                            Oferty
                        </div>
                    </div>
                    <div>
                        {MdModeOfTravel()}
                        <div>
                            YakdoYade
                        </div>
                    </div>
                    <div className={c.reklama}>
                        Reklama:
                    </div>
                    <div>
                        <img className={c.image3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDfG5C08p3GlrLSWu2_JF7QI_lbRxea0KCg&s"/>
                    </div>
                    <div>
                        <img className={c.image3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQ3kxl4TT3i0Bx_Ib2jEXM5t32Nn3i2BXmQ&s"/>
                    </div>
                </div>
            </div>
            <div className={c.text}>
                <div className={c.text3}>
                    The weather's not bad now, keep watching our weatherman, I'm sure we'll have a severe cold snap soon //
                    we hope the heat in Florida keeps you from getting discouraged this awesome summer // help peo..
                </div>
            </div>
            <div className={c.news}>
                That's what they're talking about:
            </div>
            <div className={c.foto}>
                <div>
                    <img className={c.image1}
                         src="https://bi.im-g.pl/im/9b/6c/1c/z29804699K,Szef-PO-Donald-Tusk-na-galerii-sejmowej--Poslowie-.jpg"/>
                </div>
                <div>
                    <img className={c.image2}
                         src="https://notesfrompoland.com/wp-content/uploads/2023/10/006cd9cd80e9066940f9047d42c1025d0000a-1080x675.jpg"/>
                    <div className={c.text1}>
                        Venice Commission Urges Poland to Repeal "lex Tusk"

                    </div>
                </div>
                <div className={c.border}>
                    <div className={c.news1}>
                        <div>
                            <img src='https://bi.im-g.pl/im/7f/2e/1c/z29549439K,Protest-przeciwko-ustawie----lex-TVN----i-w-obroni.jpg'/>
                        </div>
                        <div>
                            <img src='https://bi.im-g.pl/im/0/8674/z8674700K,Bartosz-Weglarczyk.jpg'/>
                        </div>
                        <div>
                            <img src='https://bi.im-g.pl/im/64/53/1c/z29703012K,Prezydent-USA-Joe-Biden--25-kwietnia-2023-r-.jpg'/>
                        </div>
                    </div>
                    <div className={c.about1}>
                        <div>
                            A Madman's Dream on the Campaign Trail: The Centenary Plea for Free Media
                        </div>
                        <div className={c.text2}>
                            The Public Media: A Eulogy [COMMENTARY]
                        </div>
                        <div className={c.text4}>
                            "From Poland, with Myopia": A Response to Henry Olsen's Column in the Washington Post
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Content;