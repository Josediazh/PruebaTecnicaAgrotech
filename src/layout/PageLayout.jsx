import { InfoUser } from '../components/InfoUser'
import { NavMenu } from '../components/NavMenu'

export const PageLayout = ({ children }) => {
    return (
        <>
            <InfoUser />
            <NavMenu />
            {children}
        </>
    )
}