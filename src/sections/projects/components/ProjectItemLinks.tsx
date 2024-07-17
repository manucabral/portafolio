import CustomLink from '../../../components/CustomLink'
import { ProjectItemChildProps } from '../../../global'

export default function ProjectItemLinks({
    project,
}: ProjectItemChildProps): JSX.Element {
    return (
        <div
            title="Enlaces"
            className="flex flex-col sm:flex-row gap-4 items-start justify-start pt-2"
        >
            {project.links.demo !== '/#' && (
                <CustomLink href={project.links.demo} target="_blank">
                    Visitar
                </CustomLink>
            )}
            {project.links.sources.backend && (
                <div className="flex gap-2">
                    <CustomLink href={project.links.sources.backend}>
                        Código Backend
                    </CustomLink>
                </div>
            )}
            {project.links.sources.frontend !== '/#' && (
                <div className="flex gap-2">
                    <CustomLink href={project.links.sources.frontend}>
                        Código Frontend
                    </CustomLink>
                </div>
            )}
        </div>
    )
}
