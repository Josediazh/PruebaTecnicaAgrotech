import ModalProducts from "./components/ModalProducts";
import { useProductStore } from "../../hooks/useProductStore";
import { onModalOpen } from "../../store/ui/uiSlice";
import { useDispatch } from "react-redux";
import { clearMessageProduct } from "../../store/products/productsSlice";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { TableProducts } from "./components/TableProducts";
import { PageLayout } from "../../layout/PageLayout";
import { Container } from "./styles";

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

                if (result.isConfirmed) {
                    dispatch(clearMessageProduct());
                }
            });

        }
    }, [productsMessage])

    return (
        <PageLayout>
            <Container>
                <ModalProducts />
                <TableProducts onOpenModal={onNewProduct} products={products} />
            </Container>
        </PageLayout>

    )
}

