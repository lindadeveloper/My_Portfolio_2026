import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function UXUI() {
  return (
    <div className="content-container">
      <Link to="../projects" className="back-btn">
        <MoveLeft /> Back to all Projects
      </Link>
      <h1 className="project-title">UX UI Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
        pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
        aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
        Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
        aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
      </p>
    </div>
  );
}
