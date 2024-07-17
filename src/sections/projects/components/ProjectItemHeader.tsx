import { ProjectItemChildProps } from '../../../global'

export default function ProjectItemHeader({
    project,
}: ProjectItemChildProps): JSX.Element {
    return (
        <div className="flex flex-col gap-1 justify-center items-center sm:items-start">
            <h2 className="text-xl font-bold text-te-300">{project.name}</h2>
            <p className="text-center sm:text-left">{project.description}</p>
        </div>
    )
}
