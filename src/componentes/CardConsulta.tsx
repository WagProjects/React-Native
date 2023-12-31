import { Text, Avatar, VStack, Box} from 'native-base'
import { Botao } from './Botao'

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

export function CardConsulta({
    nome,
    foto,
    data,
    especialidade,
    foiAgendado,
    foiAtendido
}){
    return(
        <VStack w="100%" bg={foiAtendido ? 'blue.100' : 'white'} alignContent="center" p="5" borderRadius="lg" shadow="2" mb={5}>
            <VStack flexDir="row">
                <Avatar source={{uri: foto} } size="lg"/>
                <VStack pl="4">
                    <Text fontSize="md" bold>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao w="100%" mt={4}>
                {
                    foiAgendado ? 'Cancelar consulta' : 'Agendar consulta'
                }
            </Botao>
        </VStack>
    )
}