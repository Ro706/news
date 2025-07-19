import React from 'react'

function Value() {
  return (
    <div>
       <h1 className='about-heading'>Our Values</h1>
            <div className="markets-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="markets-left" style={{ flex: 1, marginRight: '20px' }}>
                    <h1 style={{fontWeight: '800', fontSize: '2.5rem',marginLeft: '60px', marginTop: '20px'}}>Diversity, equity & inclusion</h1>
                    <p className='about-work-description' style={{fontWeight: '400', fontSize: '1.5rem',marginLeft: '60px', marginTop: '20px'}}>
                      As a multicultural company, we view diversity as a valuable asset that enriches our people, enhances our work and benefits our clients. We strive to create inclusive environments for everyone, build diverse teams for clients, and represent the regional communities where we operate.
                    </p>
                </div>
                <div className="about-work-right" style={{ flex: 1 }}>
                   <img src="./assets/value.png" alt="Our Values" className='career-image'/>
                </div>
            </div>
    </div>
  )
}

export default Value
