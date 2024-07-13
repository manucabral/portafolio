import Section from '../../components/Section'
import type { RefProps } from '../../global'
import experience from '../../data/experiencie.json'
import TechIcon from '../../components/TechIcon'

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
                <div className="flex flex-col gap-5 w-full pl-4">
                    {experience.map((job) => (
                        <div
                            title={job.company}
                            key={job.id}
                            className="flex flex-col sm:flex-row w-full border-b border-se border-opacity-80"
                        >
                            <div className="flex justify-between flex-col w-full">
                                <div className="flex flex-col sm:flex-row gap-3 text-left pb-2">
                                    <h1 className="text-xl font-bold text-te-300">
                                        <a
                                            href={job.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:text-te-100"
                                        >
                                            {job.company}
                                        </a>
                                    </h1>
                                    <h2 className="text-lg font-semibold text-te-400">
                                        {job.product}
                                    </h2>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <ul className="list-disc list-inside">
                                        {job.description.map((desc) => (
                                            <li key={desc} className="text-sm">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex gap-1 pt-4">
                                    {job.techs.map((tech) => (
                                        <TechIcon key={tech} name={tech} />
                                    ))}
                                </div>
                            </div>
                            <div className="flex pt-4 sm:pt-0 sm:flex-col items-end gap-1 sm:w-1/2">
                                <div className="flex gap-1">
                                    <p className="text-sm">Desde</p>
                                    <p className="text-sm font-semibold">
                                        {job.startDate}
                                    </p>
                                    <p className="text-sm">hasta</p>
                                    <p className="text-sm font-semibold">
                                        {job.endDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
