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
            <div className="max-w-[1000px] w-full mx-auto mt-10 px-4 sm:px-6">
                <header className="mb-4">
                    <h2
                        id="experiencia-heading"
                        className="text-3xl font-bold text-center sm:text-left"
                    >
                        Experiencia
                    </h2>
                </header>

                <ul
                    aria-labelledby="experiencia-heading"
                    className="flex flex-col gap-10 w-full"
                >
                    {experience.length === 0 ? (
                        <li className="text-center text-sm text-white/70">
                            No hay experiencia disponible.
                        </li>
                    ) : (
                        experience.map((job) => (
                            <JobItem key={job.id} job={job} />
                        ))
                    )}
                </ul>
            </div>
        </Section>
    )
}
