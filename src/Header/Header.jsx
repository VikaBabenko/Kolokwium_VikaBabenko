import React from 'react';
import h from './Header.module.css'
import { FaChessKnight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { MdDiscount } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.logo}>
                <img src="https://ir.ozone.ru/s3/multimedia-1/c1000/6033662557.jpg"/>onet
            </div>
            <div className={h.google}>
                <textarea placeholder="Search"></textarea>
            </div>
            <div className={h.gog}>
                <button className={h.buttonGog}>Search</button>
            </div>
            <div className={h.nav}>
                <div>
                    Sympatia
                </div>
                <div>
                    Gry
                </div>
                <div>
                    Ogloszenia
                </div>
                <div>
                    Rabaty
                </div>
                <button> Discount</button>
            </div>
            <div className={h.icons}>
                <div>
                    <button>{FaBell()}</button>
                </div>
                <div>
                    <button>{SlEnvolopeLetter()}</button>
                </div>
                <div>
                    <button>{IoMdPerson()}</button>
                </div>
            </div>
        </div>
    );
};

export default Header;