import { ScrollView, VStack, Text, Box, Divider } from "native-base"
import { CardConsulta } from "../componentes/CardConsulta"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"

export default function Consultas(){
    return(
        <ScrollView p="5">
            <Titulo color="blue.500" mt={0}>Minhas Consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar outra consulta</Botao>
            <Text color="blue.500" fontWeight="bold" fontSize="md" mt={5} mb={5}>Próximas consultas</Text>
            <CardConsulta
                nome='Dr. Andre'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/74685635?v=4'
                data='18/09/2023'
                foiAgendado
                foiAtendido={false}       
                />
            <Divider/>
            <Text color="blue.500" fontWeight="bold" fontSize="md" mt={5} mb={5}>Consultas passadas</Text>
            <CardConsulta
                nome='Dr. Andre'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/74685635?v=4'
                data='18/09/2023'
                foiAgendado={false}
                foiAtendido={true}           
                />
            <CardConsulta
                nome='Dr. Andre'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/74685635?v=4'
                data='18/09/2023'
                foiAgendado={false}
                foiAtendido={true}            
                />
            <CardConsulta
                nome='Dr. Andre'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/74685635?v=4'
                data='18/09/2023'
                foiAgendado={false}
                foiAtendido={true}            
                />
        </ScrollView>
    )
}