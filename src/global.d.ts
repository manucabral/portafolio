export interface DefaultChildProps {
    children: React.ReactNode
}

export interface RefProps {
    innerRef: React.RefObject<HTMLElement> | null
}

export interface SectionProps extends RefProps, DefaultChildProps {
    title: string
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
