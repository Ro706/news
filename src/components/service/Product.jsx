import { useState, useEffect } from "react";

const SERVICES = [
    {
        id: "public-relations",
        title: "Public Relations",
        description:
            "We build and protect your brand's reputation with smart media outreach, thought leadership, and consistent messaging.",
        cards: [
            { id: "media-relations", label: "Media Relations" },
            { id: "crisis-communication", label: "Crisis Communication" },
            { id: "brand-positioning", label: "Brand Positioning" },
            { id: "press-releases-media-kits", label: "Press Releases and Media Kits" },
        ],
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        description:
            "From SEO to social media, we help you connect with your audience where it matters most—online.",
        cards: [
            { id: "content-marketing", label: "Content Marketing" },
            { id: "social-media-strategy", label: "Social Media Strategy" },
            { id: "influencer-collaborations", label: "Influencer Collaborations" },
            { id: "performance-campaigns", label: "Performance Campaigns" },
        ],
    },
    {
        id: "strategic-communications",
        title: "Strategic Communications",
        description:
            "We provide insight-driven strategies that align with your long-term goals.",
        cards: [
            { id: "reputation-management", label: "Reputation Management" },
            { id: "executive-branding", label: "Executive Branding" },
            { id: "stakeholder-engagement", label: "Stakeholder Engagement" },
            { id: "internal-communications", label: "Internal Communications" },
        ],
    },
];

export default function Product({ selectedServiceId }) {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        if (selectedServiceId) {
            const idx = SERVICES.findIndex((s) => s.id === selectedServiceId);
            if (idx !== -1) {
                setOpenIndex(idx);
                const section = document.getElementById(selectedServiceId);
                if (section) section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [selectedServiceId]);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleCardClick = (serviceId, cardId) => {
        const url = `/work?service=${serviceId}&card=${cardId}`;
        window.open(url, '_blank');
        console.log(`Navigating to: ${url}`);
    };

    return (
        <div className="min-h-screen bg-red-600 text-white">
            <style jsx>{`
                .services-wrapper {
                    background: #ED1F24;
                    color: #ffffff;
                    padding: 60px 24px;
                    font-family: 'Jost', 'Raleway', sans-serif;
                    min-height: 100vh;
                }

                .services-main-heading {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-bottom: 40px;
                    color: #ffffff;
                    text-align: left;
                    padding-bottom: 16px;
                }

                .accordion-section {
                    margin-bottom: 0;
                    padding-bottom: 0;
                }

                .accordion-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    padding: 20px 0;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    user-select: none;
                    border-bottom: 1px solid rgba(255,255,255,0.3);
                }

                .accordion-header:last-child {
                    border-bottom: none;
                }

                .accordion-header h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #ffffff;
                }

                .toggle-icon {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #ffffff;
                    transition: transform 0.3s ease;
                }

                .accordion-header:hover .toggle-icon {
                    transform: scale(1.1);
                }

                .accordion-content {
                    margin-top: 20px;
                    animation: slideDown 0.3s ease-out;
                    border-bottom: 1px solid rgba(255,255,255,0.3);
                    padding-bottom: 20px;
                }

                .accordion-content:last-child {
                    border-bottom: none;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .section-title-description {
                    font-size: 1.1rem;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 30px;
                    line-height: 1.6;
                    max-width: 800px;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                    margin-top: 20px;
                }

                .service-card {
                    background: rgba(255, 255, 255, 0.1);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 8px;
                    padding: 24px;
                    position: relative;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    min-height: 120px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .service-card:hover {
                    background: #ffffff;
                    border-color: #ffffff;
                    color: #ED1F24;
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }

                .card-content {
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .card-content h4 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: inherit;
                    text-align: center;
                    line-height: 1.3;
                }

                .card-arrow {
                    position: absolute;
                    bottom: 16px;
                    right: 16px;
                    width: 24px;
                    height: 24px;
                    opacity: 0.6;
                    transition: opacity 0.3s ease;
                }

                .service-card:hover .card-arrow {
                    opacity: 1;
                }

                .arrow-svg {
                    width: 20px;
                    height: 20px;
                    fill: currentColor;
                }

                /* Responsive Styles */
                @media (max-width: 1024px) {
                    .services-wrapper {
                        padding: 40px 20px;
                    }

                    .services-main-heading {
                        font-size: 2rem;
                        margin-bottom: 30px;
                    }

                    .accordion-header h3 {
                        font-size: 1.3rem;
                    }

                    .services-grid {
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 20px;
                    }

                    .service-card {
                        padding: 20px;
                        min-height: 100px;
                    }
                }

                @media (max-width: 768px) {
                    .services-wrapper {
                        padding: 30px 16px;
                    }

                    .services-main-heading {
                        font-size: 1.8rem;
                        margin-bottom: 25px;
                    }

                    .accordion-header h3 {
                        font-size: 1.2rem;
                    }

                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }

                    .service-card {
                        padding: 18px;
                        min-height: 90px;
                    }

                    .card-content h4 {
                        font-size: 1rem;
                    }

                    .section-title-description {
                        font-size: 1rem;
                        margin-bottom: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .services-wrapper {
                        padding: 20px 12px;
                    }

                    .services-main-heading {
                        font-size: 1.6rem;
                        margin-bottom: 20px;
                    }

                    .accordion-header {
                        padding: 16px 0;
                    }

                    .accordion-header h3 {
                        font-size: 1.1rem;
                    }

                    .toggle-icon {
                        font-size: 1.5rem;
                    }

                    .service-card {
                        padding: 16px;
                        min-height: 80px;
                    }

                    .card-content h4 {
                        font-size: 0.95rem;
                    }

                    .section-title-description {
                        font-size: 0.95rem;
                        margin-bottom: 16px;
                    }
                }
            `}</style>

            <div className="services-wrapper">
                <h2 className="services-main-heading">Service Types</h2>
                {SERVICES.map((service, idx) => (
                    <div className="accordion-section" key={service.id} id={service.id}>
                        <div
                            className="accordion-header"
                            onClick={() => toggleSection(idx)}
                            id={`header-${service.id}`}
                        >
                            <h3>{service.title}</h3>
                            <span className="toggle-icon">{openIndex === idx ? "−" : "+"}</span>
                        </div>
                        {openIndex === idx && (
                            <div className="accordion-content" id={`content-${service.id}`}>
                                <div className="section-title-description">
                                    <strong>{service.title}:</strong> {service.description}
                                </div>
                                <div className="services-grid">
                                    {service.cards.map((card) => (
                                        <div
                                            className="service-card"
                                            key={card.id}
                                            id={card.id}
                                            onClick={() => handleCardClick(service.id, card.id)}
                                        >
                                            <div className="card-content">
                                                <h4>{card.label}</h4>
                                            </div>
                                            <div className="card-arrow">
                                                <svg className="arrow-svg" viewBox="0 0 24 24">
                                                    <path d="M7 17l9.5-9.5M17 17V7H7"/>
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}