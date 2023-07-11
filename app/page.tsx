import AboutMe from "app/(home)/AboutMe";
import Projects from "./(home)/Projects";
import Contact from "./(home)/Contact";

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
