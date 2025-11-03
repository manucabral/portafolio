import { NavItemProps } from '../../../global'

export default function NavbarItem({
    sectionRef,
    children,
    index,
    className,
}: NavItemProps): JSX.Element {
    const handleClick = () =>
        sectionRef?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            handleClick()
        }
    }

    return (
        <li
            className={`nav-item text-wh ${className ?? ''}`}
            data-index={index}
        >
            <button
                type="button"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                className="cursor-pointer text-sm font-medium px-3 py-2 rounded-md transition-colors duration-150 hover:text-te-200 hover:bg-wh focus:outline-none focus:ring-2 focus:ring-te-400"
                aria-label={`Ir a ${children}`}
            >
                {children}
            </button>
        </li>
    )
}
