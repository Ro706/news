import React from 'react';
import { motion } from 'framer-motion';

function Title() {
    return (
        <motion.section
            className="Title-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
        >
            Featured <br /> work
            <motion.span
                className="arrow-work"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <img src="./assets/arrowdown.png" alt="down arrow" />
            </motion.span>
        </motion.section>
    );
}

export default Title;
