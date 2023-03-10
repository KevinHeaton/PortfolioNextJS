// Description: This is the modal that will pop up when the user clicks on the resume button
// This is currently not in use however it is here for possible future use.


import react from 'react';


function ResumeModalButton({ isOpen, onClose, children}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="flex flex-wrap min-w-full">
          <button className="absolute top-5 right-5 rounded-lg bg-neutral-800">
            <h1 className="p-2 justify-center align-middle text-white">Resume</h1>
          </button>
        </div>

        {children}
      </div>
    </div>
  );

}

export default ResumeModalButton;