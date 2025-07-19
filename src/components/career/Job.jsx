import React, { useState } from 'react';

function Job() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="job-container">
      <h1 className="about-heading">Job openings</h1>
      <span className="job-opening-line"></span>

      <div className="job-list">
        {/* Job 1 */}
        <div className="job-item" onClick={() => openModal(1)}>
          <h2>Keep me in mind - EMEA</h2>
          <div className="job-meta">
            <span className="job-tag">Creative</span>
            <span className="job-location">📍 EMEA</span>
          </div>
          <span className="job-plus">+</span>
        </div>

        {/* Job 2 */}
        <div className="job-item" onClick={() => openModal(2)}>
          <h2>Keep me in mind - Tech Opportunities - EMEA</h2>
          <div className="job-meta">
            <span className="job-tag">Technology</span>
            <span className="job-location">📍 EMEA</span>
          </div>
          <span className="job-plus">+</span>
        </div>
      </div>

      {/* Modals */}
      {activeModal !== null && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            {activeModal === 1 && (
              <>
                <h2>Keep me in mind - EMEA</h2>
                <div className="modal-meta">
                  <span className="job-tag">Creative</span>
                  <span className="job-location">📍 EMEA</span>
                </div>
                <p>
                  Toaster is always searching for talented individuals to join our team!
                </p>
                <p>
                  While we don't have any opportunities available right now, we're always searching for talented people. We'd love for you to send us your CV and Portfolio so we can get to know you better.
                </p>
                <button className="apply-button">Apply →</button>
              </>
            )}
            {activeModal === 2 && (
              <>
                <h2>Keep me in mind - Tech Opportunities - EMEA</h2>
                <div className="modal-meta">
                  <span className="job-tag">Technology</span>
                  <span className="job-location">📍 EMEA</span>
                </div>
                <p>
                  Toaster is always searching for talented tech individuals to join our team!
                </p>
                <p>
                  While we don't have any opportunities available right now, we're always searching for talented people. We'd love for you to send us your CV and Portfolio so we can get to know you better.
                </p>
                <button className="apply-button">Apply →</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Job;
