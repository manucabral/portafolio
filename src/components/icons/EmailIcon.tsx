import { IconProps } from '../../global'

export default function EmailIcon({
    name,
    width = 24,
    height = 24,
    className = '',
}: IconProps): JSX.Element {
    return (
        <svg
            aria-label={name}
            role="img"
            viewBox="0 0 24 24"
            className={'hover:animate-pulse ' + className}
            width={width}
            height={height}
        >
            <rect
                id="primary"
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
                fill="#FFFFFF"
            ></rect>
            <path
                id="secondary"
                d="M21.25,4.45A2,2,0,0,0,20,4H4a2,2,0,0,0-1.25.45A1,1,0,0,0,2.76,6l8,6.29a2,2,0,0,0,2.48,0l8-6.29a1,1,0,0,0,0-1.56Z"
                fill="#4B2840"
            ></path>
        </svg>
    )
}
