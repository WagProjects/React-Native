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
                nome='Dr. Ana Lúcia'
                especialidade='Angiologista'
                foto='https://cdn.gencraft.com/prod/user/91d68a2e-7717-479f-a67b-a12668c18b4d/119e1069-2628-488e-8e16-42843ac90066/images/image1_0.jpg?Expires=1695226851&Signature=cn16d3iHrqT6JxzU0ocjwJENewgrD0QYEQoGI0cF6TLnaEw4LNLsOmuCpJ81W3ykiuCTTO-ADE6AnIf3O9Qt60DTu9Qxnw-DgfDn2u54nM9R-xnqq9Hr6b8B7aiHhw~tkbU-nS01D4wCygskfDm9jY5XzykatLnOM0u8WO3qu-51tBNDspTeEw4VWZ32VNgBeaS00we7Xt1QqneQ2eaNgIaAeHOgini9sA5t0R977CJKtfjIP2kRIU7lUNMZVvyYu5fepexjIEZZXSSHJTKi8LwJFgTJEZ5OEHfXF2rkJemNDbdnS9nQ3X8mPtk3I~~MemWJVT3tAE~DF2mRefle3A__&Key-Pair-Id=K3RDDB1TZ8BHT8'
                data='18/09/2023'
                foiAgendado
                foiAtendido={false}       
                />
            <Divider/>
            <Text color="blue.500" fontWeight="bold" fontSize="md" mt={5} mb={5}>Consultas passadas</Text>
            <CardConsulta
                nome='Dr. Carlos'
                especialidade='Neurologista'
                foto='https://cdn.gencraft.com/prod/user/91d68a2e-7717-479f-a67b-a12668c18b4d/4309dc4e-6693-43c3-9faa-45b43b409a5b/images/image0_0.jpg?Expires=1695227955&Signature=gUOZmILOev3ZwW2pZeJ6iC9XIQGiGwlcly6rmMQ8WxXmRexHrcNpzuT1yKUw8cosDM4w88Kkf2RB-D4vy37FMxi-eFsJtXILRKHL2jiAuSUfsYU926EZNPKhaiaBCszD610C9wUl47S8LWl-qGZMFIiTIUy1sERyCuzbazpv-zsGNlDZrzxZpmK58tyftvpljs7W3laRgkW430IPte-Cd9L0O4YC7KT65vWCP63YJP-3mZvYs1oXx5xKQc1W5h3-As1UqUYlZ5w1ayvufFebPu0ebQCzIxC1losPj4ddrYWJPVB-OabYC~12Wq8h-H3t-XxhJ9mONj7S~oTPY0088w__&Key-Pair-Id=K3RDDB1TZ8BHT8'
                data='23/03/2022'
                foiAgendado={false}
                foiAtendido={true}           
                />
            <CardConsulta
                nome='Dr. Umberto'
                especialidade='Fisioterapeuta'
                foto='https://cdn.gencraft.com/prod/user/91d68a2e-7717-479f-a67b-a12668c18b4d/aa3b41bd-7930-4c88-b417-b7a70e5e1f7e/images/image0_0.jpg?Expires=1695228089&Signature=GM2u-5~o-p~VsW40pP3JcRrGs2hj0tpHyPIbVe2Wvp6EMlKk-BrXkTyu2WiiiJbgeRFz3tJQ6g~sXK03SFWqD3cwJZhfNqtcjx8rIK8yqkRY6FOVvxH1YDGy7~RejTdFW9hBOJB0jWqBYlTNia1PtbHbr2FhfcZjVhd0-lyhddtfZ~a5H3XW3RTfh5b08ZwA7mlyHweJcMqNHq4oCDIsyhmBpy1ErXEL5l0Z-o3kAhpbMDUeNpgz8iUbbNZHjKF3pD-0fAyBvN1LDY8bEx8O4nDODrQ6yWuhpl9lvBWWswLs54ubJ3rkW5c~MsmwEwf7fK4yVpV4jF5gWq8JTFj4Vw__&Key-Pair-Id=K3RDDB1TZ8BHT8'
                data='02/06/2022'
                foiAgendado={false}
                foiAtendido={true}            
                />
            <CardConsulta
                nome='Dr. Vanessa'
                especialidade='Cardiologista'
                foto='https://cdn.gencraft.com/prod/user/91d68a2e-7717-479f-a67b-a12668c18b4d/119e1069-2628-488e-8e16-42843ac90066/images/image0_0.jpg?Expires=1695228194&Signature=F2aybgMXXeTecz5MtG9Z~99LzrDqK2gPY~1BiusEZFUbB0fTJrqyjqKo4CXvNgkirWwbuagVXYbyDSXSfJtv0PJ3-Hl7E7yy5xyOsXNiGCIG44pxNKXvsH8QdNmtwKQZ6biDBNzux7f7Dn0jeT-PjRs7aJmF2RkrBxP2MOdyjzebP-RMNipRMsLNVxH3y9aLEMQZpjC3J7rJAAY2BjhQJEeZMJ6TgBHy8VHeIe8rayrXno7hKJUpW-~q5jpH-6ypn8Faku6jflkVfMWo-ILDoiDN1v1Wv69Wf4Fch4T9YJ20gWu7SmcIzn3XKSp8b4l3eoojK5LKgm~rVMFidTwVUw__&Key-Pair-Id=K3RDDB1TZ8BHT8'
                data='05/02/2021'
                foiAgendado={false}
                foiAtendido={true}            
                />
        </ScrollView>
    )
}