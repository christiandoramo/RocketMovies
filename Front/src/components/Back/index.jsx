import { FiArrowLeft } from 'react-icons/fi'
import { Container } from './style.js'
import { useNavigate } from 'react-router-dom'

export const Back = () => {
    const navigate = useNavigate()
    function handleBack() {
        navigate(-1)
    }
    return (
        <Container onClick={handleBack}>
            <FiArrowLeft size={23} />
            <span>Voltar</span>
        </Container>
    )
}