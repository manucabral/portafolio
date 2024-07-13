import Header from './sections/header'
import About from './sections/about'
import Experience from './sections/experience'
import Projects from './sections/projects'
import Contact from './sections/contact'
import useSectionsRef from './hooks/useSectionsRef'
import { RefValuesType } from './global'

export default function App(): JSX.Element {
    const { sectionsRefValues } = useSectionsRef() as {
        sectionsRefValues: RefValuesType
    }
    return (
        <div className="h-max bg-se text-white">
            <Header sectionRefs={sectionsRefValues} />
            <main className="flex flex-col justify-center items-center">
                <About innerRef={sectionsRefValues.about.ref} />
                <Experience innerRef={sectionsRefValues.experience.ref} />
                <Projects innerRef={sectionsRefValues.projects.ref} />
                <Contact innerRef={sectionsRefValues.contact.ref} />
            </main>
        </div>
    )
}
