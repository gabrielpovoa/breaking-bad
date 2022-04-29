import * as C from './style'
import logo from '../../public/images/logo.png'

export const Header = () => {
    return (
        <C.Container>
            <C.Image>
                <C.Logo src={logo} alt="Breaking Bad - tv show logo" />
            </C.Image>
        </C.Container>
    )
}