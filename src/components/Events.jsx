import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sliderImages = [
  {
    src: "./images/product.png",
    alt: "Product Launch",
    services: [
      "Product Launches",
      "Press Conferences",
      "Media Roundtables",
      "Experiential Campaigns",
    ],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    src: "./images/product.png",
    alt: "Press Conference",
    services: [
      "Press Conferences",
      "Product Launches",
      "Media Roundtables",
      "Experiential Campaigns",
    ],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    src: "./images/product.png",
    alt: "Media Roundtable",
    services: [
      "Media Roundtables",
      "Product Launches",
      "Press Conferences",
      "Experiential Campaigns",
    ],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    src: "./images/product.png",
    alt: "Experiential Campaign",
    services: [
      "Experiential Campaigns",
      "Product Launches",
      "Press Conferences",
      "Media Roundtables",
    ],
    gradient: "from-orange-600 to-red-600",
  },
];

const slideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeIn" },
  }),
};

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <div className="events-main-container">
      {/* Hero Section with Slideshow */}
      <div className="hero-section">
        <div className="bg-elements">
          <div className="bg-blob bg-blob-1"></div>
          <div className="bg-blob bg-blob-2"></div>
        </div>
        <div className="hero-content">
          <div className="hero-header">
            <h1 className="hero-title">Our Events & Launches </h1>
            <hr className="Eventsline" />
          </div>
          <div className="slideshow-container">
            <div
              className="slideshow-wrapper"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              style={{ position: "relative", overflow: "hidden" }}
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="slide-item slide-active"
                  style={{
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                  }}
                >
                  <img
                    src={sliderImages[currentIndex].src}
                    alt={sliderImages[currentIndex].alt}
                    className="slide-image"
                  />
                  <div
                    className={`slide-gradient gradient-${currentIndex + 1}`}
                  ></div>
                  <div className="slide-content">
                    <div className="slide-text">
                      <h3 className="slide-title">
                        {sliderImages[currentIndex].alt}
                      </h3>
                      <div className="services-grid">
                        {sliderImages[currentIndex].services.map(
                          (service, serviceIdx) => (
                            <motion.div
                              key={serviceIdx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.2 + serviceIdx * 0.1,
                                duration: 0.4,
                              }}
                              className="service-item"
                            >
                              {service}
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="nav-button nav-button-left"
                aria-label="Previous Slide"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  cursor: "pointer",
                }}
              >
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#fff" opacity="0.7" />
                  <path
                    d="M22 16H12M16 22L10 16L16 10"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="nav-button nav-button-right"
                aria-label="Next Slide"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  cursor: "pointer",
                }}
              >
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#fff" opacity="0.7" />
                  <path
                    d="M10 16h10M16 10l6 6-6 6"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="indicators">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`indicator ${
                    idx === currentIndex ? "indicator-active" : ""
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="why-choose-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="why-choose-card">
          <h3 className="why-choose-title">Why Choose Us?</h3>
          <div className="why-choose-content">
            <p className="why-choose-text">
              At Newsmaker Media and Communications, we don't just chase
              headlines—we build them. With an extensive network that spans
              leading consumer, lifestyle, national, and business
              media—including TV, radio, podcasts, and print—we specialize in
              delivering the kind of visibility that shapes perception and
              builds trust.
            </p>
            <p className="why-choose-text">
              From a prime-time TV appearance to a front-page feature in a
              national daily, our job is to get your story in front of the right
              people, at the right time, in the right way.
            </p>
            <p className="why-choose-text">
              Every campaign we run is crafted with intention. We collaborate
              closely with you to understand your brand's voice, its purpose,
              and its goals—then translate that into editorial opportunities
              that resonate. Because when the story is authentic, the coverage
              follows.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Marketing Process Section for SEO/Accessibility */}
      <motion.div
        className="marketing-process-static"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="hero-title">
          The Product Marketing Process: Step-by-Step
        </h2>
        <p>
          Whether you’re launching a new product, growing your brand, or driving
          sales—our marketing process is strategic, creative, and
          results-driven.
        </p>
        <div className="marketing-process-list">
          {[
            {
              title: "1. Market Research & Insights",
              desc:
                "We start by understanding your market, audience, and competitors.",
              items: [
                "Identifying customer needs and pain points",
                "Analyzing competitors and market trends",
                "Defining unique selling propositions (USPs)",
              ],
              outcome:
                "Actionable insights to inform your marketing strategy.",
            },
            {
              title: "2. Strategy & Positioning",
              desc:
                "We craft a tailored marketing strategy that positions your product for success:",
              items: [
                "Defining target segments and buyer personas",
                "Developing key messaging and brand positioning",
                "Choosing the right marketing channels",
                "Setting goals and KPIs",
              ],
              outcome: "A clear, actionable marketing roadmap.",
            },
            {
              title: "3. Creative Development",
              desc:
                "We bring your product to life with compelling creative assets:",
              items: [
                "Designing visuals, packaging, and branding",
                "Crafting engaging copy and storytelling",
                "Producing multimedia content for digital and offline use",
              ],
              outcome:
                "Standout creative that captures attention and drives engagement.",
            },
            {
              title: "4. Campaign Execution",
              desc:
                "We launch and manage integrated marketing campaigns to reach your audience:",
              items: [
                "Coordinating digital, social, and traditional media",
                "Activating influencer and partnership programs",
                "Managing events, promotions, and product demos",
              ],
              outcome:
                "Maximum visibility and engagement for your product.",
            },
            {
              title: "5. Measurement & Optimization",
              desc: "We track performance and optimize for the best results:",
              items: [
                "Monitoring campaign metrics and sales data",
                "Analyzing customer feedback and engagement",
                "Refining tactics for continuous improvement",
              ],
              outcome: "Data-driven insights to maximize ROI.",
            },
            {
              title: "6. Reporting & Growth",
              desc:
                "We provide transparent reporting and plan for future growth:",
              items: [
                "Comprehensive campaign reports and analysis",
                "Identifying new opportunities and market trends",
                "Strategic recommendations for scaling success",
              ],
              outcome: "Sustained growth and long-term brand value.",
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <strong>{step.title}</strong>
              <p>{step.desc}</p>
              <ul>
                {step.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>Outcome:</strong> {step.outcome}
              </p>
              <hr />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="cta-card">
          <p className="cta-text">
            At Newsmaker, results speak louder than buzzwords. We don't believe in
            one-size-fits-all publicity. We believe in tailored storytelling
            backed by media intelligence—and it shows in every campaign we
            deliver.
          </p>
          <h3 className="cta-title">Let's turn your story into headlines.</h3>
          <div className="cta-hashtag">
            <span className="hashtag-text">#OurPRWins</span>
            <i className="fa-solid fa-bolt hashtag-icon"></i>
          </div>
          <div className="cta-button-container">
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="main-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="business-help-section">
          <h2 className="section-title">
            How We Help Your <span className="gradient-text">Business</span>
          </h2>
          <div className="business-help-card">
            <p className="business-help-text">
              At Newsmaker Media and Communications, we don't just follow trends
              — we help set them.
            </p>
            <p className="business-help-text">
              As a young and dynamic agency, we bring fresh thinking, bold
              ideas, and a deep understanding of today's evolving media
              landscape. Our strength lies in amplifying your brand's message —
              ensuring it reaches the right people, in the right places, with
              the right impact.
            </p>
            <p className="business-help-text">
              We blend creativity with strategy, marrying traditional PR with
              the digital-first world. Whether it's securing editorial space in
              top-tier publications, navigating the shift toward digital
              journalism, or leveraging the power of influencer collaborations,
              we know how to make your message matter.
            </p>
            <p className="business-help-text highlight-text">
              What sets us apart isn't just our media relationships — it's our
              ability to keep your brand relevant, authentic, and consistently
              visible in a rapidly changing environment.
            </p>
            <p className="business-help-text">
              Let's craft a PR strategy that grows with your business — and
              always stays a step ahead.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
