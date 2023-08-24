import { projects } from '@/projects';
import ProjectCard from "./ProjectCard"


const Projects = () => {

  return (
    <div className="flex flex-col items-center justify-center md:w-1/2">
        <h2 className="mb-8 mt-10 text-5xl font-bold tracking-tight text-slate-700 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {
          projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
          ))
          }
        </div>
    </div>
  )
}

export default Projects;
