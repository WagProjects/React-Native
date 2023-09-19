import { ScrollView, VStack, Box } from "native-base"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { CardConsulta } from "../componentes/CardConsulta"

import { busca } from "../utils/mock"

export default function Explorar(){
    return(
        <ScrollView>
            <VStack m={5} flex={1}>
                <Box p={5} w="100%" borderRadius="lg" borderRightRadius="md" shadow={1}>
                    <EntradaTexto
                        placeholder="Digite a especialidade"
                    />
                    <EntradaTexto
                        placeholder="Digite sua localização"
                    />
                    <Botao mt={3} borderRadius="lg">Buscar</Botao>
                </Box>
                <Titulo mt={5} mb={5} color="blue.500">Resultado da busca</Titulo>
                {
                    busca.map(busca => (
                        <CardConsulta
                            key={busca.id}
                            nome={busca.nome}
                            foto={busca.foto}
                            data={busca.data}
                            especialidade={busca.especialidade}
                            foiAgendado={busca.foiAgendado}
                            foiAtendido={busca.foiAtendido}
                        />
                    ))
                }
            </VStack>
        </ScrollView>
    )
}