import type { ButtonProps } from '../global'

export default function Button({
    children,
    onClick,
    className,
    type = 'primary',
}: ButtonProps): JSX.Element {
    const types = {
        primary:
            'text-white bg-te-100 hover:bg-te-200 focus:ring-4 focus:outline-none focus:ring-te-400 dark:focus:ring-te-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
        secondary:
            'text-white bg-te-200 focus:ring-4 focus:outline-none focus:ring-te-400 dark:focus:ring-te-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
    }
    return (
        <button onClick={onClick} className={`${types[type]} ${className}`}>
            {children}
        </button>
    )
}
