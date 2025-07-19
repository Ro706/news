import React from 'react'

function Value2() {
    return (
        <div>
            <div className="markets-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="markets-left" style={{ flex: 1, marginRight: '20px' }}>
                    <img src="./assets/value2.png" alt="Our Values" className='career-image' />
                </div>
                <div className="about-work-right" style={{ flex: 1 }}>
                     <h1 style={{fontWeight: '800', fontSize: '2.5rem',marginLeft: '60px', marginTop: '20px'}}>Nurtured growth</h1>
                    <p className='about-work-description' style={{ fontWeight: '400', fontSize: '2rem', marginLeft: '60px', marginTop: '20px' }}>
                        We nurture growth by fostering an environment where we grow together, support personal development, and encourage collaboration. By investing in our team's continuous learning and mutual support, we ensure everyone can reach their full potential, contributing to our collective success.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Value2
