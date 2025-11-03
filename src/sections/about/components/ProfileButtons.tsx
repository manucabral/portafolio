import Button from '../../../components/Button'
import type { RefProps } from '../../../global'

export default function ProfileButtons({ otherRefs }: RefProps): JSX.Element {
    const handleClick = () =>
        otherRefs?.contact?.ref.current?.scrollIntoView({ behavior: 'smooth' })
    return (
        <div className="flex w-full gap-1 justify-center sm:justify-start">
            <Button
                redirect="/portafolio/Curriculum Manuel Andrés Cabral.pdf"
                target="_blank"
            >
                Mi curriculum
            </Button>
            <Button type="secondary" onClick={handleClick}>
                Contáctame
            </Button>
        </div>
    )
}
