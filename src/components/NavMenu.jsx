import { FaBagShopping, FaTag } from "react-icons/fa6"
import { ItemMenu, LinkMenu, ListMenu, Menu } from "./styles"
import { Link } from "react-router"


export const NavMenu = () => {
    return (
        <Menu>
            <ListMenu>
                <ItemMenu>
                    <LinkMenu to={{
                        pathname: "/",
                    }}>
                        <FaBagShopping /> Productos
                    </LinkMenu>
                </ItemMenu>
                <ItemMenu>
                    <LinkMenu to={{
                        pathname: "/categorys",
                    }}>
                        <FaTag /> Categorias
                    </LinkMenu>
                </ItemMenu>
            </ListMenu>
        </Menu>
    )
}
