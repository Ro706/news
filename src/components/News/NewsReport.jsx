import React, { useState } from 'react';
import newsData from '../data/data_News.json';

const CATEGORY_LIST = [
    'Industry Press',
    'Work',
    'Insights',
    'Awards',
    'Leadership',
    'Wins',
    'Culture',
    'Innovation'
];

function NewsReport() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const togglePopup = (e) => {
        e.preventDefault();
        setShowPopup(!showPopup);
    };

    const handleToggle = (category) => {
        setSelectedCategories(
            selectedCategories.includes(category)
                ? selectedCategories.filter(c => c !== category)
                : [...selectedCategories, category]
        );
    };

    const filteredData = newsData.filter(item => {
        const itemCategories = Array.isArray(item.category)
            ? item.category
            : [item.category];
        return (
            selectedCategories.length === 0 ||
            selectedCategories.some(cat => itemCategories.includes(cat))
        );
    });

    return (
        <div style={{
            fontFamily: "'Jost', 'Raleway', sans-serif",
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            background: '#fff'
        }}>
            {/* Filter Button */}
            <div style={{
                textAlign: 'right',
                padding: '16px 5vw',
                fontSize: '20px'
            }}>
                <span style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 500,
                    background: '#f0f0f0',
                    padding: '10px 16px',
                    borderRadius: '4px',
                    transition: 'background 0.3s ease',
                    cursor: 'pointer'
                }} onClick={togglePopup}>
                    Filter <i className="fa fa-filter"></i>
                </span>
            </div>

            {/* Filter Popup */}
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 999,
                    background: 'rgba(0,0,0,0.15)'
                }}>
                    <div style={{
                        padding: '32px 16px',
                        width: '95vw',
                        maxWidth: '500px',
                        position: 'relative',
                        borderTop: '2px solid black',
                        borderBottom: '2px solid black',
                        maxHeight: '85vh',
                        overflowY: 'auto',
                        backgroundColor: 'white',
                        borderRadius: '12px'
                    }}>
                        <button
                            style={{
                                background: 'black',
                                color: 'white',
                                border: 'none',
                                padding: '10px 16px',
                                cursor: 'pointer',
                                fontSize: '22px',
                                fontWeight: 'bold',
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                lineHeight: 1,
                                borderRadius: '4px'
                            }}
                            onClick={togglePopup}
                        >
                            ×
                        </button>
                        <div style={{ marginTop: '28px' }}>
                            <h3 style={{
                                fontSize: '22px',
                                marginBottom: '14px',
                                borderBottom: '1px solid #000',
                                paddingBottom: '8px',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                textTransform: 'capitalize'
                            }}>
                                Category
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {CATEGORY_LIST.map((category, idx) => (
                                    <li key={idx} style={{
                                        padding: '8px 0',
                                        fontSize: '18px',
                                        color: '#111'
                                    }}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => handleToggle(category)}
                                                style={{ marginRight: '10px' }}
                                            />
                                            {category}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* News List */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '32px',
                    justifyContent: 'flex-start',
                    padding: '0 5vw',
                }}
            >
                {filteredData.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            padding: '24px',
                            borderRadius: '16px',
                            transition: 'transform 0.2s ease',
                            flex: '1 1 350px',
                            maxWidth: '500px',
                            minWidth: '260px',
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginBottom: '32px',
                            background: '#fafafa',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                        }}
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            style={{
                                borderRadius: '12px',
                                width: '100%',
                                maxWidth: '450px',
                                height: 'auto',
                                aspectRatio: '1/1',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />

                        {/* Date */}
                        <p style={{
                            fontSize: '1em',
                            color: '#080808',
                            marginTop: '18px',
                            marginBottom: '10px',
                            textAlign: 'left',
                            width: '100%'
                        }}>
                            {item.date}
                        </p>

                        {/* Title */}
                        <h2 style={{
                            fontSize: '1.2em',
                            margin: '12px 0',
                            position: 'relative',
                            display: 'block',
                            textAlign: 'left',
                            width: '100%',
                            lineHeight: '1.3'
                        }}>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: 'none',
                                    color: '#000',
                                    display: 'block',
                                    marginBottom: '12px'
                                }}
                            >
                                {item.title}
                            </a>
                        </h2>

                        {/* Category Tags */}
                        <div style={{
                            display: 'flex',
                            gap: '8px',
                            flexWrap: 'wrap',
                            marginBottom: '10px',
                            width: '100%'
                        }}>
                            {(Array.isArray(item.category) ? item.category : [item.category]).map((cat, i) => (
                                <span key={i} style={{
                                    display: 'inline-block',
                                    padding: '6px 14px',
                                    fontSize: '15px',
                                    border: '1px solid #000',
                                    background: '#fff',
                                    color: '#000',
                                    borderRadius: '5px',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {cat}
                                </span>
                            ))}
                        </div>

                        {/* Additional Tags */}
                        <div style={{
                            display: 'flex',
                            gap: '8px',
                            flexWrap: 'wrap',
                            width: '100%'
                        }}>
                            {(item.tags || []).map((tag, i) => (
                                <span key={i} style={{
                                    display: 'inline-block',
                                    padding: '6px 14px',
                                    fontSize: '15px',
                                    border: '1px solid #ccc',
                                    background: '#f9f9f9',
                                    color: '#666',
                                    borderRadius: '5px',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 900px) {
                    .news-list {
                        gap: 18px !important;
                        padding: 0 2vw !important;
                    }
                    .news-card {
                        max-width: 100% !important;
                        min-width: 180px !important;
                        padding: 14px !important;
                    }
                }
                @media (max-width: 600px) {
                    .news-list {
                        flex-direction: column !important;
                        gap: 12px !important;
                        padding: 0 1vw !important;
                    }
                    .news-card {
                        max-width: 100vw !important;
                        min-width: 0 !important;
                        padding: 8px !important;
                    }
                    .filter-btn {
                        font-size: 16px !important;
                        padding: 8px 10px !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default NewsReport;