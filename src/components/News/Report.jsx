import React from "react";
import { useParams } from "react-router-dom";
import allReports from "../data/reportsData";
import GetInTouch from '../home/GetInTouch';
import Hellotag from '../home/Hellotag';
import Footer from '../home/Footer';
function Report() {
    const { slug } = useParams();
    const decodedSlug = decodeURIComponent(slug); // Ensure encoded slugs with special characters work
    const report = allReports.find(r => r.slug === decodedSlug);

    if (!report) {
        return <div className="report-not-found">Report not found</div>;
    }

    const {
        title,
        date,
        imageUrl,
        video,
        description: {
            shortInfo,
            "about-the-campaign": aboutCampaign,
            "footer-description": footerDescription,
        } = {},
    } = report;

    return (
        <>
            <div className="report-container" style={{ marginTop: "100px" }}>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="report-header-image"
                    />
                )}

                <p className="report-date">{date}</p>
                <h1 className="report-title">{title}</h1>

                <div className="report-section">
                    {shortInfo && <p>{shortInfo}</p>}

                    {aboutCampaign && (
                        <>
                            <h3>About the campaign:</h3>
                            <p>{aboutCampaign}</p>
                        </>
                    )}

                    {footerDescription && (
                        <p className="report-footer-description">{footerDescription}</p>
                    )}

                    {video && (
                        <video
                            className="report-video"
                            src={video}
                            controls
                            preload="metadata"
                        />
                    )}
                </div>
            </div>
            <GetInTouch />
            <Hellotag />
            <Footer />
        </>
    );
}

export default Report;
