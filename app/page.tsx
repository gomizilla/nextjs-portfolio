import AboutMe from "app/(home)/AboutMe";
import Projects from "./(home)/Projects";
import Contact from "./(home)/Contact";

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <AboutMe />
      <Projects />
      <Contact />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          {/* <Other /> */}
          <div className="hidden md:block">{/* <Subscribe /> */}</div>
        </div>
        <div className="basis-1/4">{/* <Sidebar /> */}</div>
      </div>
    </main>
  );
}
