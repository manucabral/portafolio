import Section from '../../components/Section'
import ProfileHeader from './components/ProfileHeader'
import ProfileBio from './components/ProfileBio'
import ProfileButtons from './components/ProfileButtons'
import type { RefProps } from '../../global'

export default function About({ innerRef, otherRefs }: RefProps): JSX.Element {
    return (
        <Section
            title="Sobre mí"
            innerRef={innerRef}
            className="bg-gradient-to-b pt-10 from-se to-pr w-full"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-[1100px] mx-auto py-10">
                    <div className="text-sm flex flex-col items-center sm:items-start gap-4 px-4">
                        <ProfileHeader
                            name="Manuel Cabral"
                            role="Desarrollador Full Stack"
                        />
                        <ProfileBio
                            bio="
Desarrollador freelance con experiencia en la creación de soluciones a medida, escalables y documentadas, optimizadas para distintos entornos y necesidades de clientes internacionales."
                        />
                        <ProfileButtons otherRefs={otherRefs} />
                    </div>
                </div>
            </div>
        </Section>
    )
}
