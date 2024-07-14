import { StringListProps } from '../../../global'

export default function JobDescription({
    items,
}: StringListProps): JSX.Element {
    return (
        <div className="flex flex-col gap-1">
            <ul className="list-disc list-inside">
                {items.map((desc) => (
                    <li key={desc} className="text-sm">
                        {desc}
                    </li>
                ))}
            </ul>
        </div>
    )
}
