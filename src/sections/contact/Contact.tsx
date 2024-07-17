import Section from '../../components/Section'
import type { RefProps } from '../../global'
import GithubIcon from '../../components/icons/GithubIcon'
import CustomLink from '../../components/CustomLink'
import LinkedInIcon from '../../components/icons/LinkedInIcon'
import EmailIcon from '../../components/icons/EmailIcon'

export default function Contact({ innerRef }: RefProps): JSX.Element {
    return (
        <Section
            title="Contactro"
            innerRef={innerRef}
            className="w-full bg-te-500"
        >
            <div className="flex flex-col gap-4 w-full sm:w-[1000px] mt-10">
                <h2 className="text-3xl font-bold text-center sm:text-left">
                    Contacto
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 w-full p-10">
                    <ul className="flex flex-col flex-wrap gap-4 sm:gap-6 w-full sm:items-start justify-center">
                        <li className="flex items-center justify-center gap-1">
                            <CustomLink
                                href="https://www.linkedin.com/in/manuel-cabral/"
                                includeIcon={false}
                            >
                                <LinkedInIcon name="LinkedIn" />{' '}
                                linkedin.com/in/manuel-cabral
                            </CustomLink>
                        </li>
                        <li className="flex items-center justify-center gap-1">
                            <CustomLink
                                href="https://www.github.com/manucabral"
                                includeIcon={false}
                            >
                                <GithubIcon name="Github" />{' '}
                                github.com/manucabral
                            </CustomLink>
                        </li>
                        <li className="flex items-center justify-center gap-1">
                            <CustomLink
                                href="mailto:mandrescabral@gmail.com"
                                includeIcon={false}
                            >
                                <EmailIcon name="Email" />
                                mandrescabral@gmail.com
                            </CustomLink>
                        </li>
                    </ul>
                    {/*<form className="flex flex-col gap-4 w-full">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="input"
                        />
                        <input
                            type="email"
                            placeholder="Correo"
                            className="input"
                        />
                        <textarea
                            placeholder="Mensaje"
                            className="input"
                        ></textarea>
                        <button className="btn">Enviar</button>
                    </form>*/}
                </div>
            </div>
        </Section>
    )
}
