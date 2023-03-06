import react from 'react';
import Image from 'next/image';

function Modal({onClose, currentProject}) {
  const { name, description, github, deployed, pic } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer flex flex-wrap justify-center dark:bg-slate-200 bg-gray-800">
        <h3 className="modalTitle flex justify-center min-w-full">{name}</h3>
        <Image src={`/${pic}.png`} alt={name} width={300} height={300} />
        <p className="min-w-full flex justify-center">{description}</p>
        <a href={deployed} target="_blank" rel="noreferrer"><button className=" bg-slate-200 text-gray-800 dark:text-slate-200 dark:bg-gray-800">Deployed Site</button></a>
        <a href={github} target="_blank" rel="noreferrer"><button className=" bg-slate-200 text-gray-800 dark:text-slate-200 dark:bg-gray-800">GitHub Repo</button></a>
        <button className="closebtn bg-slate-200 text-gray-800 dark:text-slate-200 dark:bg-gray-800" onClick={onClose} type="button">
          Close
        </button>
      </div>
    </div>
  );

}

export default Modal;