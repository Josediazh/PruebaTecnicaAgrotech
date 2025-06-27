import ModalProducts from "./components/ModalProducts";
import { Button, Container, Table, TdTbody, Th, THead, Title, TrTbody } from "./styles"
import { FaPenSquare } from "react-icons/fa";
import InfoUser from "./components/InfoUser";
import { useProductStore } from "../../hooks/useProductStore";
import { onModalOpen } from "../../store/ui/uiSlice";
import { useDispatch } from "react-redux";
import { clearMessageProduct } from "../../store/products/productsSlice";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const ProductsPage = () => {

    const dispatch = useDispatch();
    const { products, productsMessage } = useProductStore();

    const onNewProduct = () => {
        dispatch(onModalOpen());
    }

    useEffect(() => {
        if (productsMessage != null) {

            Swal.fire({
                title: "Exito",
                text: productsMessage,
                icon: "success",
                confirmButtonText: "Listo",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    dispatch(clearMessageProduct());
                }
            });

        }
    }, [productsMessage])

    return (
        <div>
            <InfoUser />
            <Container>
                <Title>Productos</Title>
                <Button onClick={onNewProduct}>Agregar producto</Button>
                <Table>
                    <THead>
                        <tr>
                            <Th>Titulo</Th>
                            <Th>Descripción</Th>
                            <Th>Categoria</Th>
                            <Th>Precio</Th>
                        </tr>
                    </THead>
                    <tbody>
                        {
                            products.map(({ id, title, description, category, price }) => {
                                return (
                                    <TrTbody key={id}>
                                        <TdTbody>{title}</TdTbody>
                                        <TdTbody>{description}</TdTbody>
                                        <TdTbody>{category}</TdTbody>
                                        <TdTbody>{price}</TdTbody>
                                    </TrTbody>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <ModalProducts />
            </Container>
        </div>

    )
}

