import "./Section3Right.css";
import { IoClose } from "react-icons/io5";
import { RiUsbLine } from "react-icons/ri"; 
import { BiTrashAlt } from "react-icons/bi";

import React from 'react'

const Section3Right = () => {
  return (
    <div className="section3-right">
      <div className="icons">
        <span><RiUsbLine/></span>
        <span><BiTrashAlt/></span>
        <span><IoClose/></span>
      </div>
      <form action="">
        <input type="text" id="disabledTextInput" class="form-control right-form" placeholder="Video Başlığı"/>

        <div className="cevap">
            <span className="active">Cevap</span>
            <span>Video</span>
            <span>Mantık</span>
        </div>

        <div className="dropdown right-dropdown">
            <label for="disabledTextInput1" class="form-label">Cevap türü seçiniz</label>
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Link <span>Lorem, ipsum dolordsfslorem</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">LOrem</a></li>
              <li><a className="dropdown-item" href="#">Lorem</a></li>
              <li><a className="dropdown-item" href="#">Lorem</a></li>
            </ul>
        </div>
        
        <div className="my-3">
            <label for="disabledTextInput2" class="form-label">Link Metni</label>
            <input type="text" id="disabledTextInput2" class="form-control right-form" placeholder="Lütfen bir şeyler yazınız..."/>
        </div>
        
        <button type="button" className="btn btn-invidza">invidza.video.com/buse_999432-...</button>

        <div className="secenek-ekle">
            <span>+</span> Seçenek Ekle
        </div>

        <ul class="list-group list-group-flush list-group-3">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Video Süresi
                <span class="badge">120</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Seçenek Gösterim Anı
                <span class="badge">10</span>
            </li>
                <hr className="list-hr"/>
        </ul>

        <button type="submit" className="btn btn-invidza submit">Kaydet</button>

      </form>
    </div>
  )
}

export default Section3Right;