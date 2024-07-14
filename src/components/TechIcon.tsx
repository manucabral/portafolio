import { TechIconProps, TechListType } from '../global'
import JavaScriptIcon from './icons/JavaScriptIcon'
import NodeIcon from './icons/NodeIcon'
import ExpressIcon from './icons/ExpressIcon'
import MySQLIcon from './icons/MySQLIcon'
import SwaggerIcon from './icons/SwaggerIcon'
import PassportIcon from './icons/PassportIcon'
import JestIcon from './icons/JestIcon'

export default function TechIcon({ key, name }: TechIconProps): JSX.Element {
    const icons: TechListType = {
        javascript: <JavaScriptIcon name="JavaScript" />,
        nodejs: <NodeIcon name="NodeJS" />,
        expressjs: <ExpressIcon name="ExpressJS" />,
        mysql: <MySQLIcon name="MySQL" />,
        swagger: <SwaggerIcon name="Swagger" />,
        passportjs: <PassportIcon name="Passport" />,
        jest: <JestIcon name="Jest" />,
    }

    return (
        <div
            key={key}
            title={name}
            className="flex items-center justify-center w-10 h-10 shadow-sm ring ring-se ring-opacity-20 hover:ring-opacity-50"
        >
            {icons[name.toLocaleLowerCase()]}
        </div>
    )
}
