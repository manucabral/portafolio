import Button from '../../../components/Button'
import resume from '../../../../public/Curriculum Manuel Andrés Cabral.pdf'
import type { RefProps } from '../../../global'

export default function ProfileButtons({ otherRefs }: RefProps): JSX.Element {
    const handleClick = () =>
        otherRefs?.contact?.ref.current?.scrollIntoView({ behavior: 'smooth' })
    return (
        <div className="flex w-full gap-1 justify-center sm:justify-start">
            <Button redirect={resume} target="_blank">
                Mi curriculum
            </Button>
            <Button type="secondary" onClick={handleClick}>
                Contáctame
            </Button>
        </div>
    )
}
