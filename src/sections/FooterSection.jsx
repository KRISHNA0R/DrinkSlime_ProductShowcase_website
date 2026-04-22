import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src={`${import.meta.env.BASE_URL}images/footer-dip.png`}
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src={`${import.meta.env.BASE_URL}images/footer-drink.png`}
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src={`${import.meta.env.BASE_URL}videos/splash.mp4`}
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div 
            className="social-btn"
            onClick={() => window.open('https://linkedin.com/in/dev-krishnar', '_blank')}
          >
            <img src={`${import.meta.env.BASE_URL}images/yt.svg`} alt="linkedin" className="invert" />
          </div>
          <div 
            className="social-btn"
            onClick={() => window.open('https://instagram.com/dev.krishnar', '_blank')}
          >
            <img src={`${import.meta.env.BASE_URL}images/insta.svg`} alt="instagram" />
          </div>
          <div 
            className="social-btn"
            onClick={() => window.open('https://github.com/dev-krishnar', '_blank')}
          >
            <img src={`${import.meta.env.BASE_URL}images/tiktok.svg`} alt="github" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>drinkslime Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div className="md:max-w-xs">
              <p 
                className="cursor-pointer hover:text-white transition-colors"
                onClick={() => window.open('https://www.amazon.com/s?k=prime+drink', '_blank')}
              >
                Company
              </p>
              <p 
                className="cursor-pointer hover:text-white transition-colors"
                onClick={() => window.open('https://linkedin.com/in/dev-krishnar', '_blank')}
              >
                krishnar
              </p>
              <p 
                className="cursor-pointer hover:text-white transition-colors"
                onClick={() => window.open('https://www.amazon.com/s?k=prime+drink', '_blank')}
              >
                Tasty Talk
              </p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src={`${import.meta.env.BASE_URL}images/arrow.svg`} alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box mt-20">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2026 drinkslime | Developed by dev.krishnar</p>
          <div className="flex items-center gap-7">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
