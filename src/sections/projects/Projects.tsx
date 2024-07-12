import Section from '../../components/Section'
import type { RefProps } from '../../global'

export default function Projects({ innerRef }: RefProps): JSX.Element {
    return (
        <Section title="Proyectos" innerRef={innerRef}>
            Projects
        </Section>
    )
}
