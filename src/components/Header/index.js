import React from 'react'
import { Flex,Stack,Image,Text,} from '@chakra-ui/core'

function Header(){
    return(
        <Stack w="70%" alignItems="center">
            <Image src="header.png" w="70%"/>
            <Flex>
                <Text
                    padding="20px"
                    fontSize="4rem"
                    color="#12B0C9"
                    fontFamily= "'Permanent Marker', cursive"
                    textAlign="center"
                    >
                    Santiago González Mancilla
                </Text>
            </Flex>
        </Stack>
    )
}

export default Header