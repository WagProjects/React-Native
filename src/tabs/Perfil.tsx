import { VStack, Text, ScrollView, Avatar, Divider } from "native-base"
import { Titulo } from "../componentes/Titulo"

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500" fontSize="xl">Meu Perfil</Titulo>
                <Avatar source={{uri:"https://cdn-icons-png.flaticon.com/512/3135/3135768.png"} } mt={5} size="xl" />

                <Titulo color="blue.500" mb={5}>Informações Pessoais</Titulo>
                <Text fontSize="xl" fontWeight="bold">Wagner Oliveira</Text>
                <Text fontSize="md">02/01/1997</Text>
                <Text fontSize="md">Rio de Janeiro</Text>

                <Divider  mt={5}  mb={5}/>

                <Titulo color="blue.500" mt={0} mb={5}>Histórico médico</Titulo>
                <Text fontSize="md" fontWeight="bold">Bronquite</Text>
                <Text fontSize="md" fontWeight="bold">Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}