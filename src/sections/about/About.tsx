import Section from '../../components/Section'
import ProfileHeader from './components/ProfileHeader'
import ProfileBio from './components/ProfileBio'
import ProfileButtons from './components/ProfileButtons'
import ProfileImage from './components/ProfileImage'
import type { RefProps } from '../../global'

export default function About({ innerRef, otherRefs }: RefProps) {
    return (
        <Section
            title="Sobre mí"
            innerRef={innerRef}
            className="bg-gradient-to-b from-se to-pr w-full"
        >
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center w-[1100px] pt-10 sm:pl-10 sm:pr-10">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex text-sm flex-col sm:p-2 items-center">
                        <ProfileHeader
                            name="Manuel Cabral"
                            role="Desarrollador Backend"
                        />
                        <ProfileBio
                            bio="Experiencia freelancer en la creación de soluciones
                            backend personalizadas, escalables y documentadas
                            para una variedad de clientes a nivel mundial.
                            Comprometido y responsable, destacado en el trabajo
                            en equipo y la entrega de proyectos eficientes y de
                            alta calidad."
                        />
                        <ProfileButtons otherRefs={otherRefs} />
                    </div>
                </div>
                <ProfileImage />
            </div>
        </Section>
    )
}
