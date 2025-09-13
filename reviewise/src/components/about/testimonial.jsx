import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "This site saved me from buying a product with fake reviews. I was about to make a big purchase, and the insights helped me dodge a scam. Super helpful and reliable!",
      author: "-Smith",
    },
    {
      text: "I love how it filters out deceptive ratings. It’s like having a smart friend who knows what’s real and what’s fake. Shopping online feels safer now!",
      author: "-Rao",
    },
    {
      text: "Finally, a tool that helps me spot fake reviews before I waste my money. It’s become part of my routine whenever I shop online. Highly recommended!",
      author: "-James",
    },
    {
      text: "I was shocked at how many fake reviews exist—this site is a lifesaver! It’s changed the way I evaluate products and trust sellers.",
      author: "-Julia",
    },
  ];

  const containerStyle = {
    backgroundColor: "#e6f2fc",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#057DCD",
    marginBottom: "50px",
  };

  const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
  gap: "40px",
  justifyContent: "center",
  alignItems: "start", // ensures cards align at the top
  maxWidth: "1200px",
  margin: "0 auto",
};

const cardStyle = {
  background: "linear-gradient(to bottom, #057DCD, #43B0F1)",
  color: "white",
  padding: "32px",
  borderRadius: "16px",
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  maxWidth: "480px",
  height: "auto", // remove fixed height
    cursor: "default",
};


  const textStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
  };

  const authorStyle = {
    marginTop: "16px",
    fontSize: "15px",
    fontWeight: "500",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>What Our Customers Say...</h2>
      <div style={gridStyle}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 24px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.25)";
            }}
          >
            <p style={textStyle}>{testimonial.text}</p>
            <p style={authorStyle}>{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
