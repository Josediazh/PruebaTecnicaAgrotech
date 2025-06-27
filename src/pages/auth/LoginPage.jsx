import { useForm } from 'react-hook-form';
import {
    Container,
    Form,
    Input,
    Button,
    Title,
    Wrapper,
    Error
} from './styles'
import { useAuthStore } from '../../hooks/useAuthStore';
import { clearMessage } from '../../store/auth/authSlice';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {

    const dispatch = useDispatch();
    const { startLogin, errorMessage } = useAuthStore();
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        if (errorMessage != null) {

            Swal.fire({
                title: "Error",
                text: errorMessage,
                icon: "error",
                confirmButtonText: "Listo",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    dispatch(clearMessage());
                }
            });

        }
    }, [errorMessage])

    const onSubmit = (data) => {
        const { username, password } = data;
        startLogin({ user: username, password });
    }

    return (
        <Container>
            <Wrapper>
                <Title>Iniciar sesión</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        placeholder='Username'
                        {...register("username", { required: true })}
                    />
                    {errors.username?.type === "required" && (
                        <Error>El username es requerido</Error>
                    )}
                    <Input
                        type='password'
                        placeholder='Password'
                        {...register("password", { required: true })}
                    />
                    {errors.password?.type === "required" && (
                        <Error>El password es requerido</Error>
                    )}
                    <Button type="submit">Ingresar</Button>
                </Form>
            </Wrapper>
        </Container >
    );
};