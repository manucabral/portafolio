import { ProjectItemChildProps } from '../../../global'
import ProjectItemHeader from './ProjectItemHeader'
import ProjectItemDate from './ProjectItemDate'
import ProjectItemLinks from './ProjectItemLinks'
import ProjectItemTechs from './ProjectItemTechs'

export default function ProjectItemRight({
    project,
}: ProjectItemChildProps): JSX.Element {
    return (
        <div className="flex flex-col w-full sm:w-1/2 gap-2">
            <ProjectItemHeader project={project} />
            <ProjectItemDate project={project} />
            <ProjectItemLinks project={project} />
            <ProjectItemTechs project={project} />
        </div>
    )
}
