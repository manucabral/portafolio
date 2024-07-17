import Section from '../../components/Section'
import { RefProps } from '../../global'
import techs from '../../data/technologies.json'
import TechIcon from '../../components/TechIcon'

export default function Tecnologies({ innerRef }: RefProps): JSX.Element {
    return (
        <Section
            title="Tecnologías"
            innerRef={innerRef}
            className="w-full bg-te-500"
        >
            <div className="flex flex-col gap-4 w-full sm:w-[1000px] mt-10">
                <h2 className="text-3xl font-bold text-center sm:text-left">
                    Tecnologías
                </h2>
                <div className="flex flex-wrap gap-4 w-full p-10">
                    <ul className="flex flex-wrap gap-4 sm:gap-10 w-full items-center justify-center">
                        {techs.map((tech) => (
                            <TechIcon id={tech} name={tech} showName={true} />
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    )
}
