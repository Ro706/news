// Dummy data for the team members
const teamMembers = [
  {
    id: 1,
    name: 'Tom Dunn',
    role: 'Founder, CEO',
    location: 'GLOBAL',
    imageUrl: 'https://images.pexels.com/photos/18718906/pexels-photo-18718906.jpeg?cs=srgb&dl=pexels-best-photography-748452391-18718906.jpg&fm=jpg',
  },
  {
    id: 2,
    name: 'Joann DeLannoy',
    role: 'Managing Director',
    location: 'EMEA',
    imageUrl: 'https://images.pexels.com/photos/18718906/pexels-photo-18718906.jpeg?cs=srgb&dl=pexels-best-photography-748452391-18718906.jpg&fm=jpg',
  },
  {
    id: 3,
    name: 'Susannah Bard',
    role: 'Managing Director',
    location: 'US',
    imageUrl: 'https://images.pexels.com/photos/18718906/pexels-photo-18718906.jpeg?cs=srgb&dl=pexels-best-photography-748452391-18718906.jpg&fm=jpg',
  },
  {
    id: 4,
    name: 'Bhawika Chhabra',
    role: 'Managing Director',
    location: 'INSEA',
    imageUrl: 'https://images.pexels.com/photos/18718906/pexels-photo-18718906.jpeg?cs=srgb&dl=pexels-best-photography-748452391-18718906.jpg&fm=jpg',
  },
  {
    id: 5,
    name: 'Nick Rappolt',
    role: 'Chair',
    location: 'GLOBAL',
    imageUrl: 'https://images.pexels.com/photos/18718906/pexels-photo-18718906.jpeg?cs=srgb&dl=pexels-best-photography-748452391-18718906.jpg&fm=jpg',
  },
  {
    id: 6,
    name: 'Neville Brody',
    role: 'Advisory Board',
    location: 'GLOBAL',
    imageUrl: 'https://images.pexels.com/photos/18718906/pexels-photo-18718906.jpeg?cs=srgb&dl=pexels-best-photography-748452391-18718906.jpg&fm=jpg',
  },
  {
    id: 7,
    name: 'Trevor Johnson',
    role: 'Advisory Board',
    location: 'GLOBAL',
    imageUrl: 'https://images.pexels.com/photos/18718906/pexels-photo-18718906.jpeg?cs=srgb&dl=pexels-best-photography-748452391-18718906.jpg&fm=jpg',
  },
  {
    id: 8,
    name: 'Bruce Bishop',
    role: 'Advisory Board',
    location: 'GLOBAL',
    imageUrl: 'https://images.pexels.com/photos/18718906/pexels-photo-18718906.jpeg?cs=srgb&dl=pexels-best-photography-748452391-18718906.jpg&fm=jpg',
  },
];

function Lead() {
  return (
    <div className="lead-container">
      {/* Header Section */}
      <div className="hero-section">
        {/* Grid Pattern Overlay */}
        <div className="grid-overlay">
          <div className="grid-pattern">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="grid-cell"></div>
            ))}
          </div>
        </div>
      </div>
      {/* Leadership Section */}
      <div className="leadership-section">
        <div className="leadership-container">
          <div className="leadership-header">
            <h2 className="leadership-title">Leadership</h2>
            {/* <div className="leadership-underline"></div> */}
          </div>

          {/* Team Grid */}
          <div className="team-grid">
            {teamMembers.slice(0, 4).map((member) => (
              <div key={member.id} className="member-card">
                <div className="member-image-container">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="member-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face`;
                    }}
                  />
                  {/* Overlay */}
                  <div className="member-overlay"></div>
                  {/* Member Info */}
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <div className="member-location">
                      <svg className="location-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {member.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Team Members */}
          {teamMembers.length > 4 && (
            <div className="additional-team">
              <div className="team-grid">
                {teamMembers.slice(4).map((member) => (
                  <div key={member.id} className="member-card">
                    <div className="member-image-container">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="member-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face`;
                        }}
                      />
                      {/* Overlay */}
                      <div className="member-overlay"></div>
                      {/* Member Info */}
                      <div className="member-info">
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                        <div className="member-location">
                          <svg className="location-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {member.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lead;