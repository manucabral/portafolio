import Button from '../../../components/Button'
import resume from '../../../../public/Curriculum Manuel Andrés Cabral.pdf'

export default function ProfileButtons(): JSX.Element {
    const onClick = () => window.open(resume)
    return (
        <div className="flex w-full gap-1 justify-center sm:justify-start">
            <Button onClick={onClick}>Mi curriculum</Button>
            <Button type="secondary">Contáctame</Button>
        </div>
    )
}
