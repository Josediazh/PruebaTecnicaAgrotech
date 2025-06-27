import Modal from "react-modal"
import { Button, Error, Form, Input, Textarea } from "../styles";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const ModalProducts = () => {
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

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {

    }

    return (
        <Modal
            style={customStyles}
            isOpen={false}
        >
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        placeholder='Titulo'
                        {...register("titulo", { required: 'El titulo es requerido' })}
                    />
                    <ErrorMessage errors={errors} name="titulo" render={({ message }) => <Error>{message}</Error>} />

                    <Textarea
                        placeholder='Descripción'
                        {...register("descripcion", { required: 'La descripción es requerida' })}
                    />
                    <ErrorMessage errors={errors} name="descripcion" render={({ message }) => <Error>{message}</Error>} />
                    <Input
                        placeholder='Categoria'
                        {...register("categoria", { required: 'La categoria es requerida' })}
                    />
                    <ErrorMessage errors={errors} name="categoria" render={({ message }) => <Error>{message}</Error>} />
                    <Input
                        placeholder='Precio'
                        {...register("precio", { required: 'El precio es requerido' })}
                    />
                    <ErrorMessage errors={errors} name="precio" render={({ message }) => <Error>{message}</Error>} />
                    <Button type="submit">Guardar</Button>
                </Form>
            </div>
        </Modal>
    )
}

export default ModalProducts