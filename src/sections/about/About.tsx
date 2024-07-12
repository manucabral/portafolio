import Section from '../../components/Section'
import type { RefProps } from '../../global'

export default function About({ innerRef }: RefProps) {
    return (
        <Section title="Sobre mí" innerRef={innerRef}>
            About
        </Section>
    )
}
