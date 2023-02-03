import React, { useState } from "react";

const Contact = () => {
  const [accordName, setAccordName] = useState(null);
  return (
    <>
      <h4>Contact Us</h4>
      <p>
        You can call on the below numbers for any query. Our support is
        available for 24/7
      </p>
      <a href="#">+(91) 1232123245</a>
      <Accordian
        title="Food APP"
        content="This is a food app , where one can order food"
        handleClick={() => {
          "food" === accordName ? setAccordName(null) : setAccordName('food');
        }}
        isShown={"food" === accordName}
      />
      <Accordian
        title="Contact"
        content="+(91) 1232123245 is a toll free number and is available 24/7"
        handleClick={() => {
          "contact" === accordName ? setAccordName(null) : setAccordName('contact');
        }}
        isShown={"contact" === accordName}
      />
    </>
  );
};

const Accordian = ({ title, content, handleClick, isShown }) => {
  return (
    <div className="border shadow-md  flex flex-col p-2 m-2">
      <div className="flex pb-2">
        <h4 className="text-sm ">{title}</h4>
        <span
          onClick={handleClick}
          className="ml-2 text-xs underline flex items-center cursor-pointer"
        >
          {isShown ? "Hide" : "Show"}
        </span>
      </div>

      {isShown && (
        <>
          <hr /> <p className="p-2 m-2">{content}</p>
        </>
      )}
    </div>
  );
};

export default Contact;
