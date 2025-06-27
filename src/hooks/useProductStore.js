import { useDispatch, useSelector } from "react-redux";
import { setMessageProduct, setNewProduct, setProduct } from "../store/products/productsSlice";
import dummyApi from "../api/apiDummy";


export const useProductStore = () => {

    const { products, activeProduct, productsMessage } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const startgetProducts = async () => {

        try {

            const storageProducts = JSON.parse(localStorage.getItem('products'));

            let productscollec = [];

            if (!storageProducts) {

                const resp = await dummyApi.get('/products?limit=10');

                productscollec = resp.data.products;

                localStorage.setItem('products', JSON.stringify(productscollec));

            } else {

                productscollec = storageProducts;

            }

            dispatch(setProduct(productscollec));


        } catch (error) {

            dispatch(setMessageProduct(error.response.data?.message || 'Ocurrio un error inesperado'));

        }
    }

    const startNewProduct = async ({ titleproduct, descriptionproduct, categoryproduct, priceproduct }) => {

        try {
            const resp = await dummyApi.post('/products/add', {
                title: titleproduct,
                description: descriptionproduct,
                category: categoryproduct,
                price: priceproduct
            });

            const { id, title, description, category, price } = resp.data;

            dispatch(setNewProduct({ id, title, description, category, price }));
            dispatch(setMessageProduct('Producto agregado con exito'));

        } catch (error) {

            dispatch(setMessageProduct(error.response.data?.message || 'Ocurrio un error inesperado'));

        }

    }

    return {
        startgetProducts,
        startNewProduct,
        products,
        activeProduct,
        productsMessage
    }
}