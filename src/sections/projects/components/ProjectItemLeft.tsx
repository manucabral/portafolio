import { ProjectItemChildProps } from '../../../global'

export default function ProjectItemLeft({
    project,
}: ProjectItemChildProps): JSX.Element {
    return (
        <div title={'Imagen de' + project.name} className="w-full sm:w-1/2">
            <img
                src={project.image}
                alt={project.image}
                className="w-full transform-gpu object-cover rounded-lg"
            />
        </div>
    )
}
