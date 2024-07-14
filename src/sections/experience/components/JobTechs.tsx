import TechIcon from '../../../components/TechIcon'
import { StringListProps } from '../../../global'

export default function JobTechs({ items }: StringListProps): JSX.Element {
    return (
        <div className="flex gap-1 pt-4">
            {items.map((tech) => (
                <TechIcon key={tech} name={tech} />
            ))}
        </div>
    )
}
