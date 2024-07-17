import { IconProps } from '../../global'

export default function TailwindIcon({
    name,
    width = 24,
    height = 24,
    className = '',
}: IconProps): JSX.Element {
    return (
        <svg
            aria-label={name}
            role="img"
            viewBox="0 0 32 32"
            className={'hover:animate-pulse ' + className}
            width={width}
            height={height}
        >
            <path
                d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                fill="#44a8b3"
            />
        </svg>
    )
}
