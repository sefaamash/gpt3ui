import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    //Main Header Section
    <div className="gpt3__header section__padding" id="home">
      {/*Left Div inside Main Header Section */}
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something <br /> amazing with GPT-3 <br /> OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        {/*Input div which is flex-row inside left div */}
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        {/*People img div inside left section */}
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      {/*RIGHT DIV IT ONLY CONTAIN A LARGE IMAGE THATS IT */}
      <div className="gpt3_header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
