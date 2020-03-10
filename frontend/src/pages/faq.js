import React, { useState } from "react";
import Header from "../components/header";
import FAQ from "../components/faq";

function FAQPage() {
  const [faqs, setfaqs] = useState([
    {
      question: "What is Visto?",
      answer1:
        "Visto is a free platform that helps tech workers move to Canada as quickly as possible. We focus on the Canadian Express Entry program, which is a permanent resident program targeting skilled workers. Through Express Entry, you can get Canadian permanent residency in as little as 4-6 months While Visto is not a law firm, we’re built by immigration lawyers in Canada and others who know the difficulty and vulnerability that comes with trying to navigate the immigration space.",
      answer2:
        "The Canadian immigration system can be hard to understand, online forums and other groups can be unreliable as there are few professionals providing advice, and there are lots of poor or expensive service providers and scammers.Because of this, we wanted to create a platform where you can manage the entire process in a single, reliable place!"
    },
    {
      question: "Why is Visto Free?",
      answer1:
        "Visto is not a law firm or consultancy and doesn’t charge any legal fees to users. Instead, we are a tech company and online platform that is completely free to use. We partner with Canadian companies that might be interested in hiring you or offering you services to help with your settlement in Canada.",
      answer2:
        "These are carefully selected partners and completely optional to you, and they pay us a fee if you choose to use their services. Along your immigration journey, you may incur costs for things like writing a language exam, translating documents, paying the government filing fees and others, but these fees are not charged by Visto."
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <div className="App">
      <Header />
      <div style={{ textAlign: "center", color: "orange", marginTop: "30px" }}>
        <h3>FAQ'S</h3>
      </div>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
