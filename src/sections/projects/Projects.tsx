import Section from '../../components/Section'
import type { RefProps } from '../../global'
import projects from '../../data/projects.json'
import ProjectItem from './components/ProjectItem'

export default function Projects({ innerRef }: RefProps): JSX.Element {
    const count = projects.length

    return (
        <Section title="Proyectos" innerRef={innerRef} className="bg-pr w-full">
            <div className="max-w-[1100px] w-full mx-auto mt-10 px-4 sm:px-6">
                <header className="mb-4">
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                        <h2
                            id="proyectos-heading"
                            className="text-3xl font-bold"
                        >
                            Proyectos
                        </h2>
                        <span className="inline-block text-sm bg-se/20 text-white/90 px-2 py-1 rounded-full">
                            {count}
                        </span>
                    </div>

                    <p className="mt-2 text-sm text-center sm:text-left text-white/80">
                        Algunos proyectos seleccionados donde muestro
                        arquitectura, tecnologías y enlaces a
                        demos/repositorios.
                    </p>
                </header>

                <section aria-labelledby="proyectos-heading">
                    {count === 0 ? (
                        <div className="text-center text-sm text-white/70 py-8">
                            No hay proyectos para mostrar.
                        </div>
                    ) : (
                        <ProjectItem projects={projects} />
                    )}
                </section>
            </div>
        </Section>
    )
}
