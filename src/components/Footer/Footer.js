import React from "react";
import "../Footer/Footer.css";

import { FcAbout } from "react-icons/fc";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Etemad from "../../assets/etemad.png";
import sabt from "../../assets/sabt.png";
import { useStateContext } from "../../context/StateContext";

const Footer = () => {
  const { darkMode } = useStateContext();

  return (
    <div className={darkMode ? "Footer-container" : "Footer-container-dark"}>
      <div className="About-section">
        <div className="About-section-header">
          <FcAbout />
          <h6>درباره گیم کالا</h6>
        </div>
        <p>
          فروشگاه گیم کالا ارائه کننده کاملترین و بروزترین آرشیو بازی های
          کامپیوتر, PS3 , PS2 . PS4 و XBOX 360 است که تحویل در سراسر کشور را
          برای رفاه حال مشتریان فراهم آورده است . برای مشاهده نمونه بسته بندی
          محصولات و نظرات مشتریان میتوانید به صفحه اینستاگرام گیم کالا با سرچ
          عبارت GamesKala_com مراجعه نمایید . در صورت تمایل به ارتباط با
          پشتیبانی میتوانید به پیج اینستاگرام گیم کالا پیام یا دایرکت پیام دهید
          , همکاران ما شما را راهنمایی خواهند کرد .
        </p>
      </div>
      <div className="Contact-section">
        <div className="Contact-section-header">
          <FaPhoneSquareAlt className="Phone-icon" />
          <h6>ارتباط با ما</h6>
        </div>
        <p>
          جهت ارتباط با پشتیبانی گیم کالا به پیج اینستاگرام گیم کالا دایرکت یا
          پیام دهید :
        </p>
        <div className="Contact-section-emailinfo">
          <MdEmail />
          <p>آدرس ایمیل</p>
          <p>aliirezaa.barkhordarii@gmail.com</p>
        </div>
        <div className="Contact-section-call-numbers">
          <FaPhoneSquareAlt />
          <p>شماره های تماس</p>
          <p>07136362638</p>
          <p>07136362638</p>
        </div>
        <div className="Contact-icons">
          <BsFacebook className="icons" />
          <BsTelegram className="icons" />
          <SiAparat className="icons" />
          <AiOutlineInstagram className="icons" />
          <AiFillTwitterCircle className="icons" />
        </div>
      </div>
      <div className="Payment-section">
        <div className="Payment-section-header">
          <FcAbout />
          <h6>نماد اعتماد الکترونیکی</h6>
        </div>
        <p>
          یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
          باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود
          برساند و ضمانت بازگشت کالا هم داشته باشد؛
        </p>
        <div className="Payment-section-symbols">
          <div className="symbols-image">
            <img src={Etemad} alt="تصویر-نشان-اعتماد" />
          </div>
          <div className="symbols-image">
            <img src={sabt} alt="تصویر-ثبت-مالی" />
          </div>
        </div>
      </div>
      <div className="User-email-input">
        <div className="input-button-section">
          <p>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
          <form>
            <input
              className="email-input"
              placeholder="ایمیل خود راوارد نمایید"></input>
            <button className="user-email-btn">ثبت</button>
          </form>
        </div>
      </div>
      <div className="Copy-right-section">
        <p>کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد</p>
        <p>طراحی و توسعه : علیرضا برخورداری</p>
      </div>
    </div>
  );
};

export default Footer;
