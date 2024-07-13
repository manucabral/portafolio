import type { SectionProps } from '../global'

export default function Section({
    children,
    innerRef,
    title,
    className,
}: SectionProps): JSX.Element {
    return (
        <section
            title={title}
            ref={innerRef}
            className={`flex justify-center items-center text-wh ${className}`}
        >
            {children}
        </section>
    )
}
