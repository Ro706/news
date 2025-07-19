import React from 'react'

function Joinus() {
    return (
        <div>
            <div className="markets-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="markets-left" style={{ flex: 1, marginRight: '20px' }}>
                    <p className='about-work-description' style={{ fontWeight: '400', fontSize: '3.5rem', marginLeft: '60px', marginTop: '20px' }}>
                        Join us at the forefront of creativity, innovation and inclusion in the 21st century
                    </p>
                </div>
                <div className="about-work-right" style={{ flex: 1 }}>
                    {/* Add your right side content here */}
                    <p className='about-work-description' style={{ fontWeight: '400', fontSize: '2rem', marginLeft: '60px', marginTop: '20px' }}>
                        We use our diverse talents and expertise to deliver outstanding results and work that people talk about.
                    </p>
                    <p className='about-work-description' style={{ fontWeight: '400', fontSize: '2rem', marginLeft: '60px', marginTop: '20px' }}>
                        To push the boundaries of creativity and innovation while fostering an open and inclusive environment. To collaborate and deliver work that keeps our clients coming back.
                    </p>
                    <p className='about-work-description' style={{ fontWeight: '400', fontSize: '2rem', marginLeft: '60px', marginTop: '20px' }}>
                        Our model brings different ideas and disciplines together, to produce work that makes a positive difference to the world – and to aim to have fun whilst doing it.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Joinus
