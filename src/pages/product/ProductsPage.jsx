import ModalProducts from "./components/ModalProducts";
import { Button, Container, Table, TdTbody, Th, THead, Title, TrTbody } from "./styles"
import { FaPenSquare } from "react-icons/fa";

export const ProductsPage = () => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Container>
            <Title>Productos</Title>
            <Button>Agregar producto</Button>
            <Table>
                <THead>
                    <tr>
                        <Th>Titulo</Th>
                        <Th>Descripción</Th>
                        <Th>Categoria</Th>
                        <Th>Precio</Th>
                        <Th></Th>
                    </tr>
                </THead>
                <tbody>
                    <TrTbody>
                        <TdTbody>Howell Hand</TdTbody>
                        <TdTbody>Test</TdTbody>
                        <TdTbody>Unica</TdTbody>
                        <TdTbody>1500</TdTbody>
                        <TdTbody><FaPenSquare /></TdTbody>
                    </TrTbody>
                    <TrTbody>
                        <TdTbody>Howell Hand</TdTbody>
                        <TdTbody>Test</TdTbody>
                        <TdTbody>Unica</TdTbody>
                        <TdTbody>1500</TdTbody>
                        <TdTbody><FaPenSquare /></TdTbody>
                    </TrTbody>
                </tbody>
            </Table>
            <ModalProducts />
        </Container>

    )
}

