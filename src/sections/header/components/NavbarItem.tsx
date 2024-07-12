import { DefaultChildProps } from '../../../global'

export default function NavbarItem({
    children,
}: DefaultChildProps): JSX.Element {
    return <li className="mx-4">{children}</li>
}
