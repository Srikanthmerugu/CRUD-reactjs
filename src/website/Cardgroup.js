import React, { useEffect } from "react";

const App = () => {

  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div>
      <section>
        <h1>Scroll Down to Reveal Elements &#8595;</h1>
      </section>
      <section>
        <div className="container reveal fade-bottom">
          <h2>Caption</h2>
          <div className="text-container">
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container reveal fade-left">
          <h2>Caption</h2>
          <div className="text-container">
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container reveal fade-right">
          <h2>Caption</h2>
          <div className="text-container">
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
