import './App.css'
import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";
import ProjectCard from "./components/projectCard.tsx";
import projectData from "./data/projects.json";

interface Project {
    id: string;
    title: string;
    image: string;
    languages: string[];
    live: string;
    code: string;
}


function App() {
    const filteredProjects: Project[] = projectData;

    return (
      <>
          <div>
              {/* Navigation Bar */}
              <div><Navbar/></div>

              {/* Hero Section */}
              <div>
                  <div>
                      <div className="heroSectionText">
                          Hi My name is Erica-Livia Ingabire, frontend developer based in Kigali.
                      </div>
                      <div>
                          <button className="contact-button">Contact Me</button>
                      </div>
                  </div>

                  <div>
                      {/*<img alt="Erica's Image" src={erica} className="heroSectionImage"/>*/}
                  </div>
              </div>

              {/* About me section */}
              <section id="about">
                  <div>
                      <p>My name is Erica-Livia Ingabire, I'm a soon to be graduate</p>
                  </div>
              </section>

              {/* Experience section */}

              <section id="experience">


              </section>

              {/* Projects */}
              <div className="">
                  <h2 className="">Projects</h2>
              </div>
              <div className="projects-container">
                  {filteredProjects.map((project) => (
                      <ProjectCard
                          key={project.id}
                          image={project.image}
                          title={project.title}
                          languages={project.languages}
                          live={project.live}
                          code={project.code}
                      />
                  ))}
              </div>


              <div><Footer/></div>

          </div>
      </>
    )
}

export default App
