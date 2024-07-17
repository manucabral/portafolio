import { CustomLinkProps } from '../global'
import LinkIcon from './icons/LinkIcon'

export default function CustomLink({
    href,
    className,
    target = '_blank',
    children,
}: CustomLinkProps): JSX.Element {
    const defaultClassName = `text-te-400 hover:underline flex items-center gap-1 ${className}}`
    return (
        <a
            href={href}
            className={defaultClassName}
            target={target}
            rel="noreferrer"
        >
            <LinkIcon name="Link" />
            {children}
        </a>
    )
}
