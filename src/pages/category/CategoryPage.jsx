import { PageLayout } from '../../layout/PageLayout'
import { TableCategorys } from './components/TableCategorys'
import { Container } from './styles'

export const CategoryPage = () => {
    return (
        <PageLayout>
            <Container>
                <TableCategorys />
            </Container>
        </PageLayout>
    )
}