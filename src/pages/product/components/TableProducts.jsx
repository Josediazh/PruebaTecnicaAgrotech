import { Button, Table, TdTbody, Th, THead, Title, TrTbody } from "../styles"

export const TableProducts = ({ onOpenModal, products }) => {
    const onNewProduct = () => {
        dispatch(onModalOpen());
    }
    return (
        <>
            <Title>Productos</Title>
            <Button onClick={onOpenModal}>Agregar producto</Button>
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
        </>
    )
}