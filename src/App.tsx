import './App.css'
import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";
import ProjectCard from "./components/projectCard.tsx";
import SkillCard from "./components/skillCard.tsx";
import ExperienceCard from "./components/experienceCard";
import projectData from "./data/projects.json";
import skills from "./data/skills.json";
import experienceData from "./data/experience.json";



interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
}

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
              <div className="" id="projects">
                  <h2 className="big-Title">Projects</h2>
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

              {/* Experiences sectuon */}
              <section id="experience">
                  <h2 className="big-Title">Experience</h2>
                  <div className="experience-container">
                      {experienceData.map((exp: Experience, index: number) => (
                          <ExperienceCard
                              key={index}
                              title={exp.title}
                              company={exp.company}
                              duration={exp.duration}
                              description={exp.description}
                          />
                      ))}
                  </div>
              </section>


              {/* Skills section */}

              <section className="skills-section">
                  <div className="big-Title">
                      <h2>Skills</h2>
                  </div>
                  <div className="skills-grid">
                      {skills.map((skill, index) => (
                          <SkillCard key={index} {...skill} />
                      ))}
                  </div>
              </section>

              <div><Footer/></div>

          </div>
      </>
    )
}

export default App
