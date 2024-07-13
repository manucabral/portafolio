import { ProfileHeaderProps } from '../about.types'

export default function ProfileHeader({
    name,
    role,
}: ProfileHeaderProps): JSX.Element {
    return (
        <div className="flex flex-col pb-4 w-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
                {name}
            </h2>
            <h3 className="font-bold sm:text-2xl text-center sm:text-left text-te-300">
                {role}
            </h3>
        </div>
    )
}
