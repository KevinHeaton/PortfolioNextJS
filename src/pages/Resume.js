import React, { useState } from 'react';
import resumeModal from './resumeModal';
import { Document, Page } from 'react-pdf';
import ResumeModalButton from './resumeModal';



const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div>
      <div className="flex flex-wrap min-w-full">
        <button onClick={handleOpenModal} className="absolute top-5 right-5 rounded-lg bg-neutral-800">
          <h1 className="p-2 justify-center align-middle text-white">Resume</h1>
        </button>
      </div>

      <ResumeModalButton isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modalBackdrop">
          <div className="modalContainer">
            <Document file={'files/KevinHeatonResume.pdf'}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      </ResumeModalButton>
    </div>
  );
};

export default Resume;
