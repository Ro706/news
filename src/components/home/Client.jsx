import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
    { name: "Google", src: "./../slide/IMG20250708035900-IZtaE.jpg" },
    { name: "Netflix", src: "./../slide/IMG20250708035939-F23oK.jpg" },
    { name: "Snapchat", src: "./../slide/IMG20250708035941-UmkdU.jpg" },
    { name: "Verily", src: "./../slide/IMG20250708035942-B2U7O.jpg" },
    { name: "Samsung", src: "./../slide/IMG20250708035945-vJdpB.jpg" },
    { name: "YouTube", src: "./../slide/IMG20250708035948-er529.jpg" },
    { name: "Tinder", src: "./../slide/IMG20250708035949-Gktnh.jpg" },
    { name: "Flexport", src: "./../slide/IMG20250708035951-FW1pb.jpg" },
    { name: "Grab", src: "./../slide/IMG20250708035952-7EvJ5.jpg" },
    { name: "Prime Video", src: "./../slide/IMG20250708035953-QpaLa.jpg" },
    { name: "Jio", src: "./../slide/IMG20250708035955-wmyWe.png" }
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Client() {
    return (
        <motion.div
            className="client-section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
        >
            <motion.h1 className="client-title" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
               Our Clients
            </motion.h1>
            <motion.hr className="line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.5 }} style={{ originX: 0 }} />
            <motion.div
                className="client-logos"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {clientLogos.map((logo) => (
                    <motion.div
                        key={logo.name}
                        className="client-logo-item"
                        variants={itemVariants}
                    >
                        <img
                            src={logo.src}
                            alt={logo.name + " Logo"}
                            className="client-logo"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Client;
