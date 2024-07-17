export interface DefaultChildProps {
    children?: React.ReactNode | null
}

export interface RefProps {
    innerRef?: React.RefObject<HTMLElement> | null
    otherRefs?: RefValuesType
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
    redirect?: string
    target?: string
}

export interface CustomLinkProps extends DefaultChildProps {
    href: string
    className?: string
    target?: string
    includeIcon?: boolean
}

export interface TechIconProps {
    id: string
    name: string
    showName?: boolean
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

export interface JobType {
    id: number
    company: string
    product: string
    description: string[]
    techs: string[]
    startDate: string
    endDate: string
    link: string
}

export interface JobItemsProps extends DefaultChildProps {
    job: JobType
}

export interface JobHeaderProps {
    link: string
    company: string
    product: string
}

export interface JobFooterProps {
    startDate: string
    endDate: string
}

export interface StringListProps {
    items: string[]
}

export interface ProjectType {
    id: number
    name: string
    description: string
    startDate: string
    endDate: string
    image: string
    links: {
        demo: string
        sources: {
            backend: string
            frontend: string
        }
    }
    techs: string[]
}

export interface ProjectItemsProps extends DefaultChildProps {
    projects: ProjectType[]
}

export interface ProjectItemChildProps extends DefaultChildProps {
    project: ProjectType
}
