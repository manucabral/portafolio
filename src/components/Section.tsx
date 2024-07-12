import type { SectionProps } from '../global'

export default function Section({
    children,
    innerRef,
    title,
}: SectionProps): JSX.Element {
    return (
        <section
            ref={innerRef}
            className="flex justify-center items-center h-[400px] text-wh"
        >
            {title}
            {children}
        </section>
    )
}
