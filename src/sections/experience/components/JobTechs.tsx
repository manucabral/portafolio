import TechIcon from '../../../components/TechIcon'
import { StringListProps } from '../../../global'

export default function JobTechs({ items }: StringListProps): JSX.Element {
    return (
        <div className="flex flex-wrap gap-2 pt-2">
            {items.map((tech) => (
                <div key={tech} className="inline-flex items-center">
                    <TechIcon id={tech} name={tech} />
                </div>
            ))}
        </div>
    )
}
