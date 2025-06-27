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

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const { username, password } = data;
        startLogin({ username, password });
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