import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function UXUI() {
  return (
    <div className="content-container">
      <Link to="../projects" className="back-btn">
        <ChevronLeft /> Back to all Projects
      </Link>
      <h1 className="project-title">UX UI Project</h1>
      <div className="live-demo-github-link-wrapper">
        <a
          href="https://www.figma.com/proto/oOq8ZU8ORzTMxDpe8Om7DG/Food-Truck-app---March-17--2022?t=urLseGPFotoZFtI9-1&scaling=scale-down&content-scaling=fixed&page-id=329%3A2528&node-id=406-7663&starting-point-node-id=406%3A7663"
          alt="Live Demo"
          className="live-demo-github"
        >
          Live Demo
        </a>
        <span>|</span>
        <span>Figma</span>
        <span>|</span>
        <p>Mobile App for Japadog Food Truck</p>
        <span>|</span>
        <p>Team Size: 1 (solo)</p>
        <span>|</span>
        <p>Timeline: 3 to 4 months</p>
      </div>
      <p className="p-default project-p">
        I created a mobile ordering app for a local Japanese food truck in Vancouver to help reduce
        long lineups and streamline the ordering process. Customers can place orders ahead of time,
        including large group orders, allowing them to skip the line and enjoy a faster pickup
        experience.
      </p>
      <a
        href="https://www.figma.com/proto/oOq8ZU8ORzTMxDpe8Om7DG/Food-Truck-app---March-17--2022?t=urLseGPFotoZFtI9-1&scaling=scale-down&content-scaling=fixed&page-id=329%3A2528&node-id=406-7663&starting-point-node-id=406%3A7663"
        alt="Live Demo"
      >
        <img src="/foodTruckAppImg.jpg" className="preview-img" />
      </a>
      <img src="/assets/TheProcess.jpg" alt="The Process" className="project-img" />
      <h2>Existing App Research</h2>
      <p className="p-default project-p">There were many pain points within the existing app.</p>
      <img src="/assets/PainPoints.jpg" alt="Pain Points" className="project-img" />
      <h2>Prototypes</h2>
      <p className="p-default project-p">User Flow Diagram & Prototypes</p>
      <img src="/assets/UserFlow.jpg" alt="User Flow" className="project-img" />
      <img src="/assets/PrimaryUserFlow.png" alt="Low-Fidelity Prototype" className="project-img" />
      <img src="/assets/HiFiUserFlow.jpg" alt="Hi-Fidelity Prototype" className="project-img" />
      <h2>First Usability Study</h2>
      <p className="p-default project-p">
        During the wireframe design process, I created a contact list page that allowed users to
        share the menu and create a group order. After conducting a usability study, I realized that
        this feature needed to be simplified to improve accessibility and reduce confusion. As a
        result, I revised the design by seamlessly integrating the contact list into the same page
        as the menu, making the group ordering process more intuitive and efficient.
      </p>
      <img
        src="/assets/BeforeAfterUsabilityContactList.jpg"
        alt="First Usability Testing on Contact List"
        className="project-img"
      />
      <h2>Second Usability Study</h2>
      <p className="p-default project-p">
        After conducting a second usability study, I replaced the "Hide" button with an "X" button
        so users could more easily exit the page. I also added the text, "Who would you like to
        invite?" to provide clearer guidance on the next step. Additionally, I relabeled the
        menu-sharing button from "Invite" to "Share" to reduce confusion and better reflect its
        function.
      </p>
      <img
        src="/assets/BeforeAfterUsabilityInterface.jpg"
        alt="Second Usability Testing on Contact List"
        className="project-img"
      />
      <a
        href="https://www.figma.com/proto/oOq8ZU8ORzTMxDpe8Om7DG/Food-Truck-app---March-17--2022?t=urLseGPFotoZFtI9-1&scaling=scale-down&content-scaling=fixed&page-id=329%3A2528&node-id=406-7663&starting-point-node-id=406%3A7663"
        alt="Live Demo"
        className="centered"
      >
        Click here to view the protoype
      </a>
    </div>
  );
}
