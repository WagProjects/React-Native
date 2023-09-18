import { ScrollView, VStack, Text, Image, Box, Divider } from "native-base"
import { Titulo } from "../componentes/Titulo"
import Logo from "../assets/Logo.png"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Botao } from "../componentes/Botao"
import { depoimentos } from "../utils/mock"

export default function Principal(){
    return(
        <ScrollView>
            <VStack m={7} alignItems="left">
                <Image source={Logo} alt="Logo Voll" />
                <Titulo mt={5} mb={5} textAlign="left" fontSize="2xl" color="blue.500">Boas-vindas!</Titulo>
                <Box w="100%" mb={5} p={5} borderRadius="lg" borderRightRadius="xl" shadow="1">
                    <EntradaTexto placeholder="Digite a especialização"/>
                    <EntradaTexto placeholder="Digite sua localização"/>
                    <Botao mt={5} borderRadius="md">
                        Buscar    
                    </Botao>
                </Box>
                <Titulo mt={0} fontSize="xl" color="blue.800">Depoimentos</Titulo>
                <VStack space={3} flex={3} divider={<Divider />} w="100%">
                    {
                        depoimentos.map(depoimento => (
                            <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                                <Text color="gray.300" fontSize="md" textAlign="justify">
                                    {depoimento.texto}
                                </Text>
                                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignContent="center" mt="2">
                                    {depoimento.titulo}
                                </Text>
                            </Box>
                        ))
                    }
                </VStack>
            </VStack>
        </ScrollView>
    )
}