import React, { useState } from 'react';
import videoData from '../data/data_work.json';

function Video() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedIndustries, setSelectedIndustries] = useState([]);

    // Collect all unique tags from the data for filters
    const allServices = Array.from(
        new Set(videoData.flatMap(item => item.services || []))
    );
    const allRegions = Array.from(
        new Set(videoData.flatMap(item => item.regions || []))
    );
    const allIndustries = Array.from(
        new Set(videoData.flatMap(item => item.industry || []))
    );

    const togglePopup = (e) => {
        e.preventDefault();
        setShowPopup(!showPopup);
    };

    const handleToggle = (value, type) => {
        if (type === 'services') {
            setSelectedServices(selectedServices.includes(value)
                ? selectedServices.filter(v => v !== value)
                : [...selectedServices, value]);
        }
        if (type === 'regions') {
            setSelectedRegions(selectedRegions.includes(value)
                ? selectedRegions.filter(v => v !== value)
                : [...selectedRegions, value]);
        }
        if (type === 'industries') {
            setSelectedIndustries(selectedIndustries.includes(value)
                ? selectedIndustries.filter(v => v !== value)
                : [...selectedIndustries, value]);
        }
    };

    // Filtering logic
    const filteredData = videoData.filter(item => {
        // Services: must include all selected
        const matchesServices =
            selectedServices.length === 0 ||
            selectedServices.every(tag => (item.services || []).includes(tag));
        // Regions: at least one overlap
        const matchesRegions =
            selectedRegions.length === 0 ||
            selectedRegions.some(region => (item.regions || []).includes(region));
        // Industries: at least one overlap
        const matchesIndustries =
            selectedIndustries.length === 0 ||
            selectedIndustries.some(ind => (item.industry || []).includes(ind));
        return matchesServices && matchesRegions && matchesIndustries;
    });

    return (
        <div>
            <div className="right-filter-btn">
                <span className="filter-btn">
                    <span onClick={togglePopup}>
                        Filter <i className="fa fa-filter"></i>
                    </span>
                </span>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={togglePopup}>×</button>
                        <div className="popup-sections">
                            <div className="popup-section">
                                <h3>Regions</h3>
                                <ul>
                                    {allRegions.map((region, idx) => (
                                        <li key={idx}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRegions.includes(region)}
                                                    onChange={() => handleToggle(region, 'regions')}
                                                /> {region}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="popup-section">
                                <h3>Industry</h3>
                                <ul>
                                    {allIndustries.map((industry, idx) => (
                                        <li key={idx}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedIndustries.includes(industry)}
                                                    onChange={() => handleToggle(industry, 'industries')}
                                                /> {industry}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="popup-section services-scroll">
                                <h3>Services</h3>
                                <ul>
                                    {allServices.map((tag, idx) => (
                                        <li key={idx}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedServices.includes(tag)}
                                                    onChange={() => handleToggle(tag, 'services')}
                                                /> {tag}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="video-list">
                {filteredData.map((item, idx) => (
                    <a
                        key={idx}
                        className="video-card"
                        href={item.video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                        <video
                            src={item.video.url}
                            autoPlay
                            loop
                            muted
                            controls={false}
                            width="100%"
                            style={{ marginBottom: '20px' }}
                        />
                        <h2 className="video-title">{item.description}</h2>
                        <p className="video-brand">{item.brand.toUpperCase()}</p>
                        <div className="tags">
                            {(item.tags || []).map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Video;
