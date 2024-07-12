import Header from './sections/header'
import About from './sections/about'
import Experience from './sections/experience'
import Projects from './sections/projects'
import Contact from './sections/contact'
import useSectionsRef from './hooks/useSectionsRef'

export default function App() {
    const sectionsRef = useSectionsRef()
    return (
        <div className="h-max text-white bg-gradient-to-r from-pr to-se">
            <Header />
            <main className="flex flex-col justify-center items-center">
                <About innerRef={sectionsRef.aboutRef} />
                <Experience innerRef={sectionsRef.experienceRef} />
                <Projects innerRef={sectionsRef.projectsRef} />
                <Contact innerRef={sectionsRef.contactRef} />
            </main>
        </div>
    )
}
