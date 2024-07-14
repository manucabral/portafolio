import Section from '../../components/Section'
import type { RefProps } from '../../global'
import experience from '../../data/experiencie.json'
import JobItem from './components/JobItem'

export default function Experience({ innerRef }: RefProps): JSX.Element {
    return (
        <Section
            title="Experiencia"
            innerRef={innerRef}
            className="bg-pr w-full"
        >
            <div className="flex flex-col gap-4 w-full sm:w-[1000px] mt-10">
                <h2 className="text-3xl font-bold text-center sm:text-left">
                    Experiencia
                </h2>
                <ul className="flex flex-col gap-10 w-full pl-4">
                    {experience.map((job) => (
                        <JobItem key={job.id} job={job} />
                    ))}
                </ul>
            </div>
        </Section>
    )
}
