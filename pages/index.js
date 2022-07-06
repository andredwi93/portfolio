import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";
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
