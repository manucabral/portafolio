import Button from '../../../components/Button'
import resume from '../../../../public/Curriculum Manuel Andrés Cabral.pdf'

export default function ProfileButtons(): JSX.Element {
    return (
        <div className="flex w-full gap-1 justify-center sm:justify-start">
            <Button redirect={resume} target="_blank">
                Mi curriculum
            </Button>
            <Button type="secondary">Contáctame</Button>
        </div>
    )
}
