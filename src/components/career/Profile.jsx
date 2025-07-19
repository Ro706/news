import React, { useRef, useEffect } from 'react';

const data = [
    {
        name: 'Bhawika Chhabra',
        quote:
            'We prioritise open communication, which fosters a sense of trust and accountability within the team',
        role: 'Leadership',
        region: 'INSEA',
        color: '#33F1FF',
        image: 'https://img.freepik.com/premium-vector/vectorized-faces-men-illustration-showcasemens-adventure-vector-art-assortment_481747-44613.jpg?w=2000',
    },
    {
        name: 'David Plunkett',
        quote:
            "Innovation is at the core of our culture – we're encouraged to experiment and think outside the box",
        role: 'Technology',
        region: 'EMEA + US',
        color: '#D9A4FF',
        image: 'https://img.freepik.com/premium-vector/vectorized-faces-men-illustration-showcasemens-adventure-vector-art-assortment_481747-44613.jpg?w=2000',
    },
    {
        name: 'Rakesh Mistry',
        quote:
            "Creativity is highly valued here, and we're given the freedom to explore new ideas and approaches",
        role: 'Design',
        region: 'EMEA',
        color: '#FFE14B',
        image: 'https://img.freepik.com/premium-vector/vectorized-faces-men-illustration-showcasemens-adventure-vector-art-assortment_481747-44613.jpg?w=2000',
    },
    {
        name: 'Bhawika Chhabra',
        quote:
            'We prioritise open communication, which fosters a sense of trust and accountability within the team',
        role: 'Leadership',
        region: 'INSEA',
        color: '#33F1FF',
        image: 'https://img.freepik.com/premium-vector/vectorized-faces-men-illustration-showcasemens-adventure-vector-art-assortment_481747-44613.jpg?w=2000',
    },
    {
        name: 'David Plunkett',
        quote:
            "Innovation is at the core of our culture – we're encouraged to experiment and think outside the box",
        role: 'Technology',
        region: 'EMEA + US',
        color: '#D9A4FF',
        image: 'https://img.freepik.com/premium-vector/vectorized-faces-men-illustration-showcasemens-adventure-vector-art-assortment_481747-44613.jpg?w=2000',
    },
    {
        name: 'Rakesh Mistry',
        quote:
            "Creativity is highly valued here, and we're given the freedom to explore new ideas and approaches",
        role: 'Design',
        region: 'EMEA',
        color: '#FFE14B',
        image: 'https://img.freepik.com/premium-vector/vectorized-faces-men-illustration-showcasemens-adventure-vector-art-assortment_481747-44613.jpg?w=2000',
    },
];

function Profile() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 0;
        const cardWidth = container.firstChild ? container.firstChild.offsetWidth : 0;
        const scrollStep = cardWidth || 300;
        let intervalId;

        function autoScroll() {
            if (!container) return;
            if (scrollAmount + container.offsetWidth >= container.scrollWidth) {
                scrollAmount = 0;
            } else {
                scrollAmount += scrollStep;
            }
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }

        intervalId = setInterval(autoScroll, 2500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="insider-slider" style={{ overflow: 'hidden', width: '100%' }}>
            <div
                className="insider-slider-container"
                ref={containerRef}
                style={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: '24px',
                    padding: '16px 0',
                }}
            >
                {data.map((person, index) => (
                    <div
                        key={index}
                        className="insider-card"
                        style={{
                            minWidth: 320,
                            maxWidth: 320,
                            background: '#000000',
                            borderRadius: 12,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            padding: 24,
                            marginRight: 8,
                            flex: '0 0 auto',
                        }}
                    >
                        <div className="insider-quote" style={{ color: person.color, marginBottom: 16 }}>
                            <p style={{ fontStyle: 'italic' }}>"{person.quote}"</p>
                        </div>
                        <div className="insider-person" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            <img
                                src={person.image}
                                alt={person.name}
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: `2px solid ${person.color}`,
                                }}
                            />
                            <div>
                                <h3 style={{ margin: 0, fontSize: 18 , color: '#ffffff' }}>{person.name}</h3>
                                <div className="insider-info" style={{ marginTop: 4 }}>
                                    <span
                                        className="insider-tag"
                                        style={{
                                            background: person.color,
                                            color: '#222',
                                            borderRadius: 4,
                                            padding: '2px 8px',
                                            fontSize: 12,
                                            marginRight: 8,
                                        }}
                                    >
                                        {person.role}
                                    </span>
                                    <span
                                        className="insider-location"
                                        style={{
                                            color: '#888',
                                            fontSize: 12
                                        }}
                                    >
                                        {person.region}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
