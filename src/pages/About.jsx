import { HiChatBubbleLeft } from "react-icons/hi2";

export default function About() {
  return (
    <section className="content-container">
      <div className="about-container">
        <div>
          <div className="chat-text">
            <span className="text-label">Hi!</span>
            <HiChatBubbleLeft size="6rem" className="mirror-icon" />
          </div>
          <img src="/assets/Linda-profile.png" className="profile-img" />
        </div>
        <div>
          <h1>About me</h1>
          <p>
            I’m a lifelong learner who continuously improves her skills by staying consistent, being
            accountable, and self-motivated. I enjoy solving complex problems, optimizing
            performance, and exploring new technologies to build better products. My focus is on
            writing maintainable code, designing scalable systems, and creating digital experiences
            that are both intuitive and effective.
          </p>
          <p>
            When I’m not coding, you’ll probably find me walking in nature with my dog or trying out
            new vegetarian recipes. I believe that curiosity, persistence, and a little fun go a
            long way in life and in software development.🙂
          </p>
        </div>
      </div>
    </section>
  );
}
