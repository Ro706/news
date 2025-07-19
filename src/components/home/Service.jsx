import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const SERVICES = [
    {
        id: "public-relations",
        title: "Public Relations",
        description:
            "We build and protect your brand’s reputation with smart media outreach, thought leadership, and consistent messaging.",
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

const listVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 },
    }),
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

function Service() {
    const [activeService, setActiveService] = useState(0);
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });

    const currentService = SERVICES[activeService];

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <section className="service-section-home" ref={sectionRef} style={{ display: "flex", flexDirection: "column" }}>
                <div className="service-header">
                    <motion.h1
                        className="service-title-main"
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Services
                    </motion.h1>
                    <motion.span
                        className="service-line"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "100%" }}>
                    <motion.div
                        className="left"
                        style={{ alignSelf: "flex-start" }}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, x: -40 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                    >
                        <motion.p
                            className="service-subtitle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Your Communications Partner. Across Every Channel.
                        </motion.p>
                        <motion.ul
                            className="service-list"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            style={{ padding: 0, margin: 0 }}
                        >
                            <span className="service-list-item"></span>
                            {SERVICES.map((service, idx) => {
                                const isActive = activeService === idx;
                                return (
                                    <motion.li
                                        key={service.id}
                                        custom={idx}
                                        variants={listVariants}
                                        onClick={() => setActiveService(idx)}
                                        className={`service-list-item${isActive ? " selected" : ""}`}
                                        whileHover={{ scale: 1.05 }}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span>
                                            <span className="service-arrow" />
                                            <span className="service-title">
                                                {idx + 1}. {service.title}
                                            </span>
                                        </span>
                                    </motion.li>
                                );
                            })}
                            <span className="service-list-item"></span>
                        </motion.ul>
                        <br />
                        <motion.p
                            className="service-description-main"
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {currentService.description}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="right"
                        style={{ alignSelf: "flex-start" }}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, x: 40 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                    >
                        <AnimatePresence>
                            {currentService && (
                                <motion.div
                                    key={currentService.id}
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="service-content"
                                >
                                    <motion.p
                                        className="service-description"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {currentService.description}
                                    </motion.p>
                                    <div className="service-tags">
                                        {currentService.cards.map((card, idx) => (
                                            <motion.a
                                                className="service-tag"
                                                key={card.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: idx * 0.1,
                                                    duration: 0.4,
                                                }}
                                                href={`/services/${currentService.id}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ cursor: "pointer", textDecoration: "none" }}
                                            >
                                                {card.label}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

export default Service;
