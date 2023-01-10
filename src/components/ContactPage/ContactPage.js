import React, { useRef } from "react";
import "../ContactPage/ContactPage.css";
import { useStateContext } from "../../context/StateContext";

const ContactPage = () => {
  const { darkMode } = useStateContext();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const titleMessageInputRef = useRef();
  const messageInputRef = useRef();
  const SubmitFormHandler = (event) => {
    event.preventDefault();
    console.log(firstNameInputRef.current.value);
    console.log(lastNameInputRef.current.value);
    console.log(emailInputRef.current.value);
    console.log(phoneNumberInputRef.current.value);
    console.log(titleMessageInputRef.current.value);
    console.log(messageInputRef.current.value);
  };
  return (
    <div className="ContactPage-Container">
      <div
        className={
          darkMode ? "information-section" : "information-section-dark"
        }>
        <h3>تماس با بازی سنتر</h3>
        <p>
          بازخوردهای شما برای تمام همکاران ما در سایت آی گیم بسیار ارزشمند
          هستند. ما همواره به دنبال جلب رضایت مشتریان خود هستیم.بهترین راه برای
          اینکه بتوانیم اعتماد شما را جلب کنیم، ایجاد رابطه مستمر و صمیمانه
          باشما همراهان آی گیم است. ما برای اینکه هر روز بهتر از روز قبل باشیم
          نیازمند شنیدن نظرات، پیشنهادات و حتی شکایات شما دوستان هستیم. لازم به
          توضیح است که همکاران ما در روزهای شنبه تا چهارشنبه از ساعت 8 الی 24 و
          روزهای تعطیل و پنجشنبه و جمعه از ساعت 9 الی 24، با تلگرام، واتساپ و
          تماس تلفنی در دسترس هستند. تمام سعی ما بر این است که پشتیبانی را در 24
          ساعت شبانه روز انجام دهیم.
        </p>
        <h3>راه های ارتباطی</h3>
        <p>
          تلفن های پشتیبانی: <span>07136362638</span>
        </p>
        <p>بخش شکایات (ارسال مستقیم برای مدیریت سایت): شکایات</p>
        <p>
          آدرس دفتر مرکزی: شیراز، تاچارا، خیابان شهدای دینکان، ساختمان مجتمع
          چمران، بلوک 5، واحد 543
        </p>
        <div className="form-section">
          <h2>لطفا سوالات ، انتقادات و پیشنهادات خود را برای ما بنویسید</h2>
          <form className="inputs-container" onSubmit={SubmitFormHandler}>
            <div className="row1">
              <input
                type="text"
                className="input-1"
                placeholder="نام"
                ref={firstNameInputRef}
              />
              <input
                className="input-2"
                placeholder="نام خانوادگی"
                ref={lastNameInputRef}
              />
            </div>
            <div className="row2">
              <input
                className="input-3"
                placeholder="ادرس ایمیل"
                ref={emailInputRef}
              />
              <input
                className="input-4"
                placeholder="شماره تلفن همراه"
                ref={phoneNumberInputRef}
              />
            </div>
            <div className="row3">
              <input
                className="input-5"
                placeholder="موضوع پیام"
                ref={titleMessageInputRef}
              />
            </div>
            <div className="row4">
              <textarea
                className="input-6"
                placeholder="متن پیام"
                ref={messageInputRef}
              />
              <button className="form-btn">ارسال پیام</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
