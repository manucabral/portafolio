export interface DefaultChildProps {
    children: React.ReactNode
}

export interface RefProps {
    innerRef: React.RefObject<HTMLElement> | null
}

export interface SectionProps extends RefProps, DefaultChildProps {
    title: string
}
