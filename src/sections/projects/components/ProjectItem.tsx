import { ProjectType } from '../../../global'
import { ProjectItemsProps } from '../../../global'
import ProjectItemLeft from './ProjectItemLeft'
import ProjectItemRight from './ProjectItemRight'

export default function ProjectItem({
    projects,
}: ProjectItemsProps): JSX.Element {
    return (
        <ul className="flex flex-col gap-4 w-full">
            {projects.map((project: ProjectType) => (
                <li
                    title={project.name}
                    key={project.name}
                    className="flex w-full gap-4 flex-col sm:flex-row p-2 sm:pb-6"
                >
                    <ProjectItemLeft project={project} />
                    <ProjectItemRight project={project} />
                </li>
            ))}
        </ul>
    )
}
