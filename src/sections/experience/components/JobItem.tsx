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
            className="flex flex-col sm:flex-row w-full border-b border-se border-opacity-80"
        >
            <div className="flex justify-between flex-col w-full">
                <JobHeader
                    link={job.link}
                    company={job.company}
                    product={job.product}
                />
                <JobDescription items={job.description} />
                <JobTechs items={job.techs} />
            </div>
            <JobFooter startDate={job.startDate} endDate={job.endDate} />
        </li>
    )
}
