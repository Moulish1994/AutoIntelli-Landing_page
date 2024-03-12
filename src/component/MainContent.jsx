import React, { useEffect, useState } from "react";
import "./mainContent.css";
import MainSub from "./MainSub";

const MainContent = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Autointelli", "Monitering"];
  const [text, setText] = useState("");
  const [delte, SetDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delte);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      SetDelta((prevDelte) => prevDelte / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      SetDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      SetDelta(300);
    }
  };
  return (
    <>
      <div className="mainContent">
        <div className="bgImage"></div>
        <div className="left">
          <h1 className="title">
            Is it the <span className="textSpin"> {text}</span>
          </h1>
          <div className="subTitle1">
            <h3 className="subTitle">
              Free end-to-end monitoring for your entire stack in 5 <br />
              minutes or less
            </h3>
          </div>
          <div className="form">
            <form className="inputForm">
              <div>
                <input type="text" placeholder="Name" className="nameInput" />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Company Email"
                  className="emailInput"
                />
              </div>
              <button className="GetStart">Get Start Free</button>
            </form>
          </div>
          <div className="Detail">
            <p>
              By signing up you're agreeing to{" "}
              <span className="underline">
                Terms
                <br /> of Service
              </span>
              <span> and</span>
              <span className="underline"> Service Privacy Notice.</span>
            </p>
          </div>
          <div>
            <p className="creditCard">
              100GB + 1 user free.Forever.
              <br />
              No credit card required.
            </p>
          </div>
        </div>
      </div>
      <MainSub />
    </>
  );
};

export default MainContent;
