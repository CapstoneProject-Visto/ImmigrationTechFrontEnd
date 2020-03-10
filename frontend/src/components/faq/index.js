import React from "react";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>

      <div className="faq-answer">{faq.answer1}</div>

      <div className="faq-answer">
        <br />
        {faq.answer2}
      </div>
    </div>
  );
}

export default FAQ;
