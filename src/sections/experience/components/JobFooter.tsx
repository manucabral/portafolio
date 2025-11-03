import { JobFooterProps } from '../../../global'

export default function JobFooter({
    startDate,
    endDate,
    role,
}: JobFooterProps): JSX.Element {
    return (
        <aside className="flex flex-col justify-end items-end sm:items-end">
            <div className="text-sm text-right">
                <div className="flex gap-2 justify-end">
                    <span>Desde</span>
                    <span className="font-semibold">{startDate}</span>
                    <span>hasta</span>
                    <span className="font-semibold">{endDate}</span>
                </div>
                {role ? (
                    <div className="text-xs text-white/70 mt-2">{role}</div>
                ) : null}
            </div>
        </aside>
    )
}
