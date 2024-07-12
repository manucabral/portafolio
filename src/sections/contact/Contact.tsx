import Section from '../../components/Section'
import type { RefProps } from '../../global'

export default function Contact({ innerRef }: RefProps): JSX.Element {
    return (
        <Section title="Contacto" innerRef={innerRef}>
            Contact
        </Section>
    )
}
