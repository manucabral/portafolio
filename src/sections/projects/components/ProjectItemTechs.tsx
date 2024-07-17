import TechIcon from '../../../components/TechIcon'
import { ProjectItemChildProps } from '../../../global'

export default function ProjectItemTechs({
    project,
}: ProjectItemChildProps): JSX.Element {
    return (
        <ul
            title="Tecnologías usadas"
            className="flex gap-1 pt-4  justify-center sm:justify-start"
        >
            {project.techs.map((tech) => (
                <TechIcon id={tech} name={tech} />
            ))}
        </ul>
    )
}
