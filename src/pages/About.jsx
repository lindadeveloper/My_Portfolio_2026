// import { HiChatBubbleLeft } from "react-icons/hi2";
import { Send, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText("lindacodesdev@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.log("Failed to copy: ", err);
    }
  };

  return (
    <section className="content-container">
      <div className="breadcrumb">
        <Link to="../projects" className="back-btn">
          <ChevronLeft />
          Projects
        </Link>
        <Link to="../contact" className="back-btn-middle">
          <ChevronLeft />
          Contact
        </Link>
      </div>

      <div className="about-container">
        <div>
          {/* <div className="chat-text">
            <span className="text-label">Hi!</span>
            <HiChatBubbleLeft size="6rem" className="mirror-icon" />
          </div> */}
          <img src="/assets/Linda-profile.svg" className="profile-img" />
        </div>
        <div className="about-content">
          <h1>About me</h1>
          <p className="p1">
            I’m a lifelong learner who continuously improves her skills by staying consistent, being
            accountable, and self-motivated. I enjoy solving complex problems, optimizing
            performance, and exploring new technologies to build better products. My focus is on
            writing maintainable code, designing scalable systems, and creating digital experiences
            that are both intuitive and effective.
          </p>
          <p className="p2">
            When I’m not coding, you’ll probably find me walking in nature with my dog or trying out
            new vegetarian recipes. I believe that curiosity, persistence, and a little fun go a
            long way in life and in software development.🙂
          </p>
        </div>
        <h2>Let's chat! </h2>
        <button className="email-btn" alt="e-mail" title="Copy e-mail" onClick={copyText}>
          <Send />
          <span className="email">{isCopied ? "Copied!" : "lindacodesdev@gmail.com"}</span>
        </button>
      </div>
    </section>
  );
}
