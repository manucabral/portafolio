import { JobHeaderProps } from '../../../global'

export default function JobHeader({
    link,
    company,
    product,
}: JobHeaderProps): JSX.Element {
    return (
        <div className="flex flex-col sm:flex-row gap-3 text-left pb-2 items-start sm:items-center">
            <h1 className="text-xl font-bold text-te-300">
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-te-100"
                >
                    {company}
                </a>
            </h1>

            <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-te-400">{product}</h2>
            </div>
        </div>
    )
}
