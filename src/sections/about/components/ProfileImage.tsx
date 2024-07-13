import selfie from '../../../../public/selfie.webp'

export default function ProfileImage(): JSX.Element {
    return (
        <div className="flex justify-center w-1/2 pb-4 sm-pb-0">
            <img
                src={selfie}
                alt="Manuel Cabral"
                className="h-80 sm:h-100 max-w-xl rounded-xl vanish-border"
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
            />
        </div>
    )
}
