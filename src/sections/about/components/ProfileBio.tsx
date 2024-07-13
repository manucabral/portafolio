import { ProfileBioProps } from '../about.types'

export default function ProfileBio({ bio }: ProfileBioProps): JSX.Element {
    return (
        <div className="flex text-sm sm:flex-col m-4 sm:w-full">
            <p className="sm:text-lg sm:text-balance break-words">{bio}</p>
        </div>
    )
}
