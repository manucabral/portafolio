import { IconProps } from '../../global'

export default function PassportIcon({
    name,
    width = 24,
    height = 24,
    className = '',
}: IconProps): JSX.Element {
    return (
        <svg
            aria-label={name}
            role="img"
            viewBox="0 0 256 320"
            className={'hover:animate-pulse ' + className}
            width={width}
            height={height}
            fill="#8cc84b"
        >
            <path
                d="M128,0 C57.28,0 0,57.28 0,128 L64,128 C64,92.672 92.672,64 128,64 L128,0 L128,0 Z"
                fill="#D6FF00"
            ></path>
            <path
                d="M256,128 C256,57.28 198.72,0 128,0 L128,64 C163.328,64 192,92.672 192,128 L256,128 L256,128 Z"
                fill="#34E27A"
            ></path>
            <path
                d="M128,256 C198.72,256 256,198.72 256,128 L192,128 C192,163.328 163.328,192 128,192 L128,256 L128,256 Z"
                fill="#00B9F1"
            ></path>
            <path
                d="M64,256 L64,128 L0,128 L0,320 L128,320 L128,256 L64,256 L64,256 Z"
                fill="#FFFFFF"
            ></path>
        </svg>
    )
}
