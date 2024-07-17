import { CustomLinkProps } from '../global'
import LinkIcon from './icons/LinkIcon'

export default function CustomLink({
    href,
    className,
    target = '_blank',
    children,
    includeIcon = true,
}: CustomLinkProps): JSX.Element {
    const defaultClassName = `text-te-400 hover:underline flex justify-center items-center gap-2 ${className}}`
    return (
        <a
            href={href}
            className={defaultClassName}
            target={target}
            rel="noreferrer"
        >
            {includeIcon && <LinkIcon name="Link" />}
            {children}
        </a>
    )
}
