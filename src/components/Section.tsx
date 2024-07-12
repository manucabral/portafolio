import type { SectionProps } from '../global'

export default function Section({
    children,
    innerRef,
    title,
}: SectionProps): JSX.Element {
    return (
        <section
            title={title}
            ref={innerRef}
            className="flex justify-center items-center text-wh sm:w-[1100px] pt-10"
        >
            {children}
        </section>
    )
}
