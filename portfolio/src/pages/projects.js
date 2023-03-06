import React, { useState } from 'react';
import Modal from "./modal";
import Image from 'next/image';

const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects] = useState([
    {
      name: 'Who-Do',
      description: 'An application to find the hottest events taking place in Austin, TX. Easily sign up and RSVP to your favorite upcoming events.',
      github: 'https://github.com/KevinHeaton/who-do',
      deployed: 'https://safe-scrubland-88358.herokuapp.com/',
      pic: 'WHODO',
      id: '1'
    },
    {
      name: 'SuperWiki',
      description: 'Quickly find information on your favorite Marvel Characters!',
      github: 'https://github.com/KevinHeaton/Super-Hero-Wiki',
      deployed: 'https://kevinheaton.github.io/Super-Hero-Wiki/',
      pic: 'SUPERWIKI',
      id: '2'
    },
    {
      name: 'Photo-Port',
      description: "A project using React to showcase an example of a photographer's portfolio.",
      github: 'https://github.com/KevinHeaton/photo-port',
      deployed: 'https://kevinheaton.github.io/photo-port/',
      pic: 'PHOTOPORT',
      id: '3'
    },
    {
      name: 'WorkdayScheduler',
      description: 'Manage your workday by keeping track of your meetings and other events in an easy to read hourly format.',
      github: 'https://github.com/KevinHeaton/Workday-Scheduler',
      deployed: 'https://kevinheaton.github.io/Workday-Scheduler/',
      pic: 'WORKDAYSCHEDULER',
      id: '4'
    },
    {
      name: 'RobotGladiators',
      description: 'Battle your robot against the best of the best to see if you have got what it takes!',
      github: 'https://github.com/KevinHeaton/robot-gladiators',
      deployed: 'https://kevinheaton.github.io/robot-gladiators/',
      pic: 'ROBOTGLADIATORS',
      id: '5'
    },
    {
      name: 'Taskinator',
      description: 'Keep track of your tasks in a kanban board format.',
      github: 'https://github.com/KevinHeaton/taskinator',
      deployed: 'https://kevinheaton.github.io/taskinator/',
      pic: 'TASKINATOR',
      id: '6'
    },
    {
      name: 'RunBuddy',
      description: 'The front end HTML and CSS to a to an athletic trainer site.',
      github: 'https://github.com/KevinHeaton/run-buddy',
      deployed: 'https://kevinheaton.github.io/run-buddy/',
      pic: 'RUNBUDDY',
      id: '7'
    },
    {
      name: 'TaskmasterPro',
      description: 'A kanban board where you can save your tasks with a due date.',
      github: 'https://github.com/KevinHeaton/taskmaster-pro',
      deployed: 'https://kevinheaton.github.io/taskmaster-pro/',
      pic: 'TASKMASTERPRO',
      id: '8'
    },
    {
      name: 'TeamProfileGenerator',
      description: 'Organize your employees by using the command line. (Project Repo and deployed site are the same.)',
      github: 'https://github.com/KevinHeaton/Team-Profile-Generator',
      deployed: 'https://github.com/KevinHeaton/Team-Profile-Generator',
      pic: 'TEAMPROFILEGENERATOR',
      id: '9'
    },
    {
      name: 'RegexTutorial',
      description: 'A walkthorugh of how regex can be used to validate an email. (Project Repo and deployed site are the same.)',
      github: 'https://gist.github.com/KevinHeaton/f9d9608ebc9886abf39643c4be56f80b',
      deployed: 'https://gist.github.com/KevinHeaton/f9d9608ebc9886abf39643c4be56f80b',
      pic: 'REGEXTUTORIAL',
      id: '10'
    }
  ])

  const [currentProject, setCurrentProject] = useState();
  const toggleModal = (image, i) => {
    setCurrentProject({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="min-w-full flex justify-center align-middle p-4">
    {isModalOpen && (
    <Modal currentProject={currentProject} onClose={toggleModal} />
    )}
    <div className="container grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 md:gap-2 sm:grid-cols-2 gap-2">
      {projects.map((image, i) => (
        <div className="item">
        <Image id={image.name} className="img-thumbnail m-2" src={`/${image.pic}.png`}
        width={300}
        height={300}
        alt={image.name}
        onClick={() => toggleModal(image, i)}
        key={image.id}
      />
      </div>
      ))}
    </div>
  </div>
  )
}

export default ProjectList;