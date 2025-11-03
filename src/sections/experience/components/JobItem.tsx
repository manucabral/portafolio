import { JobItemsProps } from '../../../global'
import JobDescription from './JobDescription'
import JobFooter from './JobFooter'
import JobHeader from './JobHeader'
import JobTechs from './JobTechs'

export default function JobItem({ job }: JobItemsProps): JSX.Element {
    return (
        <li
            title={job.company}
            key={job.id}
            className="w-full border-b border-se border-opacity-80 py-6"
        >
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-start">
                <div className="flex flex-col gap-3">
                    <JobHeader
                        link={job.link}
                        company={job.company}
                        product={job.product}
                    />
                    <JobDescription items={job.description} />
                    <JobTechs items={job.techs} />
                </div>

                <JobFooter
                    startDate={job.startDate}
                    endDate={job.endDate}
                    role={job.role}
                />
            </div>
        </li>
    )
}
