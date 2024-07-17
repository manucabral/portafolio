import Section from '../../components/Section'
import type { RefProps } from '../../global'
import projects from '../../data/projects.json'
import ProjectItem from './components/ProjectItem'

export default function Projects({ innerRef }: RefProps): JSX.Element {
    return (
        <Section title="Proyectos" innerRef={innerRef} className="bg-pr w-full">
            <div className="flex flex-col gap-4 w-full sm:w-[1000px] mt-10">
                <h2 className="text-3xl font-bold text-center sm:text-left">
                    Proyectos
                </h2>
                <ProjectItem projects={projects} />
            </div>
        </Section>
    )
}
