import type { ButtonProps } from '../global'

export default function Button({
    children,
    onClick,
    className,
    type = 'primary',
    redirect,
    target,
}: ButtonProps): JSX.Element {
    const baseClasses =
        'focus:outline-none font-medium rounded-lg text-sm text-center me-2'
    const types = {
        primary: `text-white bg-te-100 hover:bg-te-200 focus:ring-4 focus:ring-te-400 dark:focus:ring-te-800 ${baseClasses} px-5 py-2.5`,
        secondary: `text-white bg-te-200 focus:ring-4 focus:ring-te-400 dark:focus:ring-te-800 ${baseClasses} px-5 py-2.5`,
    }
    const buttonClassNames = `${types[type]} ${className}`
    return redirect ? (
        <a
            href={redirect}
            target={target}
            className={buttonClassNames}
            onClick={onClick}
        >
            {children}
        </a>
    ) : (
        <button onClick={onClick} className={buttonClassNames}>
            {children}
        </button>
    )
}
