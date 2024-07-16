import { TechIconProps, TechListType } from '../global'
import JavaScriptIcon from './icons/JavaScriptIcon'
import TypeScriptIcon from './icons/TypeScriptIcon'
import NodeIcon from './icons/NodeIcon'
import ExpressIcon from './icons/ExpressIcon'
import ApolloIcon from './icons/ApolloIcon'
import NestJSIcon from './icons/NestJSIcon'
import MySQLIcon from './icons/MySQLIcon'
import MongoDBIcon from './icons/MongoDBIcon'
import FirebaseIcon from './icons/FirebaseIcon'
import GraphQLIcon from './icons/GraphQL'
import SwaggerIcon from './icons/SwaggerIcon'
import PassportIcon from './icons/PassportIcon'
import JestIcon from './icons/JestIcon'
import MochaIcon from './icons/MochaIcon'
import GitIcon from './icons/GitIcon'

export default function TechIcon({
    key,
    name,
    showName = false,
}: TechIconProps): JSX.Element {
    const icons: TechListType = {
        javascript: <JavaScriptIcon name="JavaScript" />,
        typescript: <TypeScriptIcon name="TypeScript" />,
        nodejs: <NodeIcon name="NodeJS" />,
        expressjs: <ExpressIcon name="ExpressJS" />,
        nestjs: <NestJSIcon name="NestJS" />,
        apollo: <ApolloIcon name="Apollo" />,
        mysql: <MySQLIcon name="MySQL" />,
        mongodb: <MongoDBIcon name="MongoDB" />,
        graphql: <GraphQLIcon name="GraphQL" />,
        firebase: <FirebaseIcon name="Firebase" />,
        swagger: <SwaggerIcon name="Swagger" />,
        passportjs: <PassportIcon name="Passport" />,
        jest: <JestIcon name="Jest" />,
        mocha: <MochaIcon name="Mocha" />,
        git: <GitIcon name="Git" />,
    }
    const height = showName ? 'h-20' : 'h-10'
    const width = showName ? 'w-20' : 'w-10'
    const border = showName ? 'ring-1' : 'ring'
    const scale = showName ? 'scale-150' : ''
    return (
        <div className={`flex flex-col items-center gap-1 ${height} ${width}`}>
            <div
                key={key}
                title={name}
                className={`flex items-center justify-center w-full h-full shadow-sm ${border} ring-se ring-opacity-20 hover:ring-opacity-50`}
            >
                <div
                    className={`flex items-center justify-center cursor-pointer ${scale}`}
                >
                    {icons[name.toLocaleLowerCase()]}
                </div>
            </div>
            <div className="text-xs text-center">{showName && name}</div>
        </div>
    )
}
