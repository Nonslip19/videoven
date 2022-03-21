import "./Section3Left.css";
import { BsPeople } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { VscPieChart } from "react-icons/vsc";
//import { IoClose } from "react-icons/io5"; çarpı
import ice from "../../../assets/images/ice.jpg"
import rock from "../../../assets/images/rock.jpg"
import slope from "../../../assets/images/slope.jpg"
//import { RiUsbLine } from "react-icons/ri"; ağ

import { BiTrashAlt } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import React from 'react'

const Section3Left = () => {
  return (
    <div className="section3-left">
        <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Beril & Kaan Doğu...
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>

        <ul className="list-group">
          <li className="list-group-item"><AiOutlineHome/> <span>Anasayfa</span> </li>
          <li className="list-group-item"><BsPeople/> <span>Kişiler</span></li>
          <li className="list-group-item"><IoPricetagOutline/> <span>Etiketler</span></li>
          <li className="list-group-item"><VscPieChart/> <span>Raporlar</span></li>
          <li className="list-group-item"><BiTrashAlt/> <span>Çöp Kutusu</span></li>
        </ul>

        <button type="button" className="btn btn-yeni">Yeni Video</button>

        <div className="videolar">
          <p> Videolar</p>
          <div> <AiOutlineHome/> </div>
        </div>

        <ul class="list-group bottom-list">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={ice} alt=""/>
              <span>Uludağ</span>
            </div>
            <BiDotsVerticalRounded/>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={rock} alt=""/>
              <span>Fethiye</span>
            </div>
            <BiDotsVerticalRounded/>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={slope} alt=""/>
              <span>Olimpos</span>
            </div>
            <BiDotsVerticalRounded/>
          </li>
        </ul>

        <button type="button" className="btn btn-kredi">Kredi 350</button>
        <button type="button" className="btn btn-yukselt">Yükselt</button>

    </div>
  )
}

export default Section3Left;