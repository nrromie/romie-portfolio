import img from "../../assets/images/newsin.png";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
const Projects = () => {
    const projects = [
        {
            img: img,
            title: "Project 1",
            description: "This is a project description",
            link: "https://github.com"
        },
        {
            img: img,
            title: "Project 2",
            description: "This is a project description",
            link: "https://github.com"
        },
        {
            img: img,
            title: "Project 3",
            description: "This is a project description",
            link: "https://github.com"
        },
        {
            img: img,
            title: "Project 1",
            description: "This is a project description",
            link: "https://github.com"
        },
        {
            img: img,
            title: "Project 2",
            description: "This is a project description",
            link: "https://github.com"
        },
        {
            img: img,
            title: "Project 3",
            description: "This is a project description",
            link: "https://github.com"
        }
    ]
    return (
        <div>
            <h1>Projects</h1>
            <div className="grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectsCard
                        key={index}
                        img={project.img}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;