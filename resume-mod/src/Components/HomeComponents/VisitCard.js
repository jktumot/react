import React, { Component } from "react";
import Me from "../../assets/me2.jpg";
import { AiTwotonePhone, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";

import ButtonMailto from "../Mailto";

export default class VisitCard extends Component {
  render() {
    return (
      <>
        <div className="business_card">
          <div className="card_info">
            <div className="card_name">
              <h2>Oleg Motylev</h2>
              <h4>Web Dev, Junior Frontend Dev.</h4>
            </div>
            <div className="card_contacts">
              <h5>
                8-993-588-99-14
                <AiTwotonePhone />
              </h5>
              <h5>
                8-977-559-64-53
                <AiOutlineWhatsApp />
              </h5>
              
              <h5>
              <ButtonMailto label="Write me an E-Mail" mailto="mailto:listenfight@list.ru" />
              <AiFillMail />
            </h5>
            </div>
          </div>

          <div className="photo_profile">
            <img src={Me} alt="my_photo" width="270" height="360" />
          </div>
        </div>
      </>
    );
  }
}
