import Modal from "react-modal"
import { Button, ContentButtoms, Error, Form, Input, Textarea } from "../styles";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { onModalClose } from "../../../store/ui/uiSlice";
import { setNewProduct } from "../../../store/products/productsSlice";
import { useProductStore } from "../../../hooks/useProductStore";
import { useEffect } from "react";

const ModalProducts = () => {

    const dispatch = useDispatch();
    const { isModalOpen } = useSelector((state) => state.ui);

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

    Modal.setAppElement('#root');

    const { register, formState: { errors, isSubmitSuccessful }, handleSubmit, reset } = useForm();
    const { startNewProduct } = useProductStore();

    const onSubmit = (data) => {

        const { title, description, category, price } = data;

        const product = {
            titleproduct: title,
            descriptionproduct: description,
            categoryproduct: category,
            priceproduct: price
        }

        startNewProduct(product);
        dispatch(onModalClose());

    }

    const onCloseModal = (data) => {
        dispatch(onModalClose());
        reset({});
    }

    useEffect(() => {
        reset({});
    }, [isSubmitSuccessful])

    return (
        <Modal
            style={customStyles}
            isOpen={isModalOpen}
        >
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        placeholder='Titulo'
                        {...register("title", { required: 'El titulo es requerido' })}
                    />
                    <ErrorMessage errors={errors} name="title" render={({ message }) => <Error>{message}</Error>} />

                    <Textarea
                        placeholder='Descripción'
                        {...register("description", { required: 'La descripción es requerida' })}
                    />
                    <ErrorMessage errors={errors} name="description" render={({ message }) => <Error>{message}</Error>} />
                    <Input
                        placeholder='Categoria'
                        {...register("category", { required: 'La categoria es requerida' })}
                    />
                    <ErrorMessage errors={errors} name="category" render={({ message }) => <Error>{message}</Error>} />
                    <Input
                        type="number"
                        placeholder='Precio'
                        {...register("price", { required: 'El precio es requerido', valueAsNumber: true, })}
                    />
                    <ErrorMessage errors={errors} name="price" render={({ message }) => <Error>{message}</Error>} />
                    <ContentButtoms>
                        <Button type="submit">Guardar</Button>
                        <Button type="button" onClick={onCloseModal}>Cancelar</Button>
                    </ContentButtoms>
                </Form>
            </div>
        </Modal>
    )
}

export default ModalProducts