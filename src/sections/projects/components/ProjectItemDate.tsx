import CalendarIcon from '../../../components/icons/CalendarIcon'
import { ProjectItemChildProps } from '../../../global'

export default function ProjectItemDate({
    project,
}: ProjectItemChildProps): JSX.Element {
    return (
        <div title="Fecha de desarrollo" className="flex gap-2">
            {project.endDate === 'presente' ? (
                <div className="flex gap-2">
                    <CalendarIcon name="Calendario" />
                    <p className="" title="Presente">
                        Actualmente en desarrollo
                    </p>
                </div>
            ) : (
                <div className="flex gap-2">
                    <CalendarIcon name="Calendario" />
                    <p>
                        Desde {project.startDate} hasta {project.endDate}
                    </p>
                </div>
            )}
        </div>
    )
}
