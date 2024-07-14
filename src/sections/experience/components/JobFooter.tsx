import { JobFooterProps } from '../../../global'

export default function JobFooter({
    startDate,
    endDate,
}: JobFooterProps): JSX.Element {
    return (
        <div className="flex pt-4 sm:pt-0 sm:flex-col items-end gap-1 sm:w-1/2">
            <div className="flex gap-1">
                <p className="text-sm">Desde</p>
                <p className="text-sm font-semibold">{startDate}</p>
                <p className="text-sm">hasta</p>
                <p className="text-sm font-semibold">{endDate}</p>
            </div>
        </div>
    )
}
