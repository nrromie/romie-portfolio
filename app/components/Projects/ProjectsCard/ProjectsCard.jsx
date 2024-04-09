const ProjectsCard = ({ img, title, description, link }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900">
            <img className="w-full h-56 object-cover" src={img} alt="project" />
            <div className="p-4">
                <h1 className="text-xl font-semibold text-white mb-2">{title}</h1>
                <p className="text-gray-300 mb-4">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300">View Project</a>
            </div>
        </div>
    );
};

export default ProjectsCard;