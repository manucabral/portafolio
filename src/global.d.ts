export interface DefaultChildProps {
    children?: React.ReactNode | null
}

export interface RefProps {
    innerRef?: React.RefObject<HTMLElement> | null
}

export interface SectionProps extends RefProps, DefaultChildProps {
    title: string
    className?: string
}

export interface RefValuesType {
    [key: string]: {
        title: string
        ref: React.RefObject<HTMLElement>
    }
}
export interface HeaderProps {
    sectionRefs: RefValuesType
}

export interface NavItemProps extends DefaultChildProps {
    sectionRef: React.RefObject<HTMLElement>
    index: number
}

export interface ButtonProps extends DefaultChildProps {
    onClick?: () => void
    className?: string
    type?: 'primary' | 'secondary'
}

export interface TechIconProps {
    key: string
    name: string
}

export interface TechListType {
    [key: string]: React.ReactNode
}

export interface IconProps {
    name: string
    width?: number
    height?: number
    fill?: string
    stroke?: string
    className?: string
}
