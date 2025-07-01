import { Button, Table, TdTbody, Th, THead, Title, TrTbody } from "../styles"


export const TableCategorys = () => {
    return (
        <>
            <Title>Categorias</Title>
            <Button >Agregar categoria</Button >
            <Table>
                <THead>
                    <tr>
                        <Th>Name</Th>
                        <Th></Th>
                    </tr>
                </THead>
                <tbody>
                    <TrTbody >
                        <TdTbody>Beauty</TdTbody>
                        <TdTbody></TdTbody>
                    </TrTbody>
                </tbody>
            </Table>
        </>
    )
}