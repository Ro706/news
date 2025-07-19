import { useRef, useEffect, useState } from "react";

const newsData = [
  {
    "title": "Toaster's Diwali campaign for Netflix bags a Gold at Good Ads Matter Awards",
    "date": "30 May 2025",
    "imageUrl": "https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2021/11/1/diwali.jpg",
    "url": "/news/Toaster's-Diwali-campaign-for-Netflix-bags-a-Gold-at-Good-Ads-Matter-Awards",
    "category": ["Awards"]
  },
  {
    "title": "SheCanCode x Joann DeLanoy - Eight top tips for improving your soft skills at work",
    "date": "29 May 2025",
    "imageUrl": "./assets/asset 20.jpeg",
    "url": "https://shecancode.io/eight-top-tips-for-improving-your-soft-skills-at-work/",
    "category": ["Industry Press", "Leadership"]
  },
  {
    "title": "Creative Bloq x Tom Dunn - 8 AI skills you need to land your dream design job",
    "date": "27 May 2025",
    "imageUrl": "./assets/asset 28.jpeg",
    "url": "https://www.creativebloq.com/professional-development/creative-careers/8-ai-skills-you-need-to-land-your-dream-design-job-according-to-the-pros",
    "category": ["Industry Press", "Leadership", "Insights"]
  },
  {
    "title": "LBB Online x Tershari Johns - Soft Power Play: How Brands Can Authentically Enter Cosy Games",
    "date": "23 May 2025",
    "imageUrl": "./assets/asset 28.jpeg",
    "url": "https://lbbonline.com/news/Soft-Power-Play-How-Brands-Can-Authentically-Enter-the-World-of-Cosy-Games",
    "category": ["Industry Press", "Insights"]
  },
  {
    "title": "Big ideas, Gen Z vibes: Inside Toaster’s women-led creative culture",
    "date": "23 May 2025",
    "imageUrl": "./assets/asset 29.jpeg",
    "url": "https://www.afaqs.com/news/advertising/big-ideas-gen-z-vibes-inside-toasters-women-led-creative-culture-9236188",
    "category": ["Industry Press", "Leadership"]
  },
];

function News() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    let animationFrameId;
    const speed = 0.8;
    const autoScroll = () => {
      if (!isHovered && scrollRef.current) {
        setScrollPos((prev) => {
          let next = prev + speed;
          const maxScroll = scrollRef.current.scrollWidth / 2;
          if (next >= maxScroll) next = 0;
          scrollRef.current.style.transform = `translateX(-${next}px)`;
          return next;
        });
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };
    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % newsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const scroll = (offset) => {
    if (scrollRef.current) {
      let next = scrollPos + offset;
      const maxScroll = scrollRef.current.scrollWidth / 2;
      if (next < 0) next = maxScroll - 350;
      if (next >= maxScroll) next = 0;
      setScrollPos(next);
      scrollRef.current.style.transform = `translateX(-${next}px)`;
    }
  };

  const handleMobileNav = (dir) => {
    setMobileIndex((prev) => {
      if (dir === "prev") return prev === 0 ? newsData.length - 1 : prev - 1;
      return prev === newsData.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section className="home-news-section">
      <h1 className="home-news-title">News</h1>
      <hr className="home-newsline" />
      <div
        className="home-news-slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isMobile ? (
          <>
            {isHovered && (
              <>
                <button
                  className="home-news-nav-arrow home-news-left"
                  onClick={() => scroll(-350)}
                  style={{ textDecoration: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="home-arrow-icon"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  Prev
                </button>
                <button
                  className="home-news-nav-arrow home-news-right"
                  onClick={() => scroll(350)}
                  style={{ textDecoration: "none" }}
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="home-arrow-icon"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}
            <div className="home-news-cards-horizontal"></div>
            <div className="home-news-cards-flex" ref={scrollRef}>
              {[...newsData, ...newsData].map((news, idx) => (
                <a
                  className="home-news-card"
                  key={idx}
                  href={news.url}
                  target={news.url.startsWith("http") ? "_blank" : undefined}
                  rel={news.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="home-news-image"
                  />
                  <div className="home-news-meta">
                    <div className="home-news-date">{news.date}</div>
                    <h2 className="home-news-card-title">{news.title}</h2>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <div className="home-news-mobile-carousel">
            <button
              className="home-news-nav-arrow home-news-left home-mobile-arrow"
              onClick={() => handleMobileNav("prev")}
              style={{ textDecoration: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="home-arrow-icon"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <a
              className="home-news-card home-mobile-card"
              href={newsData[mobileIndex].url}
              target={newsData[mobileIndex].url.startsWith("http") ? "_blank" : undefined}
              rel={newsData[mobileIndex].url.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ textDecoration: "none" }}
            >
              <img
                src={newsData[mobileIndex].imageUrl}
                alt={newsData[mobileIndex].title}
                className="home-news-image"
              />
              <div className="home-news-meta">
                <div className="home-news-date">{newsData[mobileIndex].date}</div>
                <h2 className="home-news-card-title">{newsData[mobileIndex].title}</h2>
              </div>
            </a>
            <button
              className="home-news-nav-arrow home-news-right home-mobile-arrow"
              onClick={() => handleMobileNav("next")}
              style={{ textDecoration: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="home-arrow-icon"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
      <a className="home-news-see-more" href="/news" style={{ textDecoration: "none" }}>
        <span className="home-see-more-text">See more articles</span>
        <button className="home-see-more-icon" style={{ textDecoration: "none" }}>
          <div className="home-plus-icon"></div>
        </button>
      </a>
    </section>
  );
}

export default News;
