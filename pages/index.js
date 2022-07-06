import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
export default function Home() {
  return (
    <>
      <Hero heading="Hello" message="I'm Frontend Developer." />
      <Profile />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
}
