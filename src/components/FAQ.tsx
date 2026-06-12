import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is the team size?",
      answer: "Teams can have 2-4 members."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is completely free."
    },
    {
      question: "Can first-year students participate?",
      answer: "Yes, students from all years can participate."
    },
    {
      question: "Is the hackathon online or offline?",
      answer: "The event will be conducted in hybrid mode."
    },
    {
      question: "Can I participate solo?",
      answer: "No, a minimum of 2 members is required."
    },
    {
      question: "Will certificates be provided?",
      answer: "Yes, all participants will receive certificates."
    },
    {
      question: "Can students from different colleges form a team?",
      answer: "Yes, cross-college teams are allowed."
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be judged based on innovation, impact, feasibility, and presentation."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq"
    className="card"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        scrollMarginTop: "120px"
      }}
    >
      <h2>❓ Frequently Asked Questions</h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto"
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
              marginBottom: "15px",
              borderRadius: "12px",
              padding: "20px",
              cursor: "pointer",
              textAlign: "left",
              boxShadow: "0 0 15px rgba(124,58,237,0.15)"
            }}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <h3>
              {openIndex === index ? "−" : "+"} {faq.question}
            </h3>

            {openIndex === index && (
              <p style={{ marginTop: "10px" }}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;