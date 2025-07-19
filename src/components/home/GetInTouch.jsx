import React from 'react';
import { useNavigate } from 'react-router-dom';

function GetInTouch() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Marketing a product?</h1>
            <button
                className="get-in-touch-btn"
                onClick={handleClick}
                style={styles.button}
            >
                <span style={styles.buttonText}>Get in touch</span>
                <span style={styles.arrows}>→</span>
            </button>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#ED1F24',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px',
    },
    heading: {
        fontSize: '64px',
        fontWeight: '500',
        marginBottom: '40px',
    },
    button: {
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'white',
        border: 'none',
        padding: '20px 40px',
        borderRadius: '999px',
        fontSize: '32px',
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '16px',
        cursor: 'pointer',
        outline: 'none',
    },
    buttonText: {
        fontSize: '32px',
        fontWeight: '500',
    },
    arrows: {
        fontSize: '70px',
        marginTop: '2px',
    }
};

export default GetInTouch;
