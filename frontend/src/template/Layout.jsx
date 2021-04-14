import React from 'react'
import { Box, Text, Icon, UnorderedList, ListItem } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

export default function Layout () {
  return (
        <>
            <Box
                as="header"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                background="white"
                width="100%"
                position="fixed"
                padding="0 1rem"
                height="50px"
            >
                <Box
                  transition="all 10s"
                    sx={{
                      _hover: {
                        '.show-block': {
                          display: 'block'
                        },
                        '.show-none': {
                          display: 'none'
                        }
                      }
                    }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-around"
                        width="100px"
                        className="show-none"
                    >
                        <Icon as={FiPlus} />
                        <Text
                            fontSize="lg"
                            color="black"
                            fontWeight="500"
                            cursor="pointer"
                        >
                            social
                        </Text>
                    </Box>
                    <Box
                      className="show-block"
                      display="flex"
                      alignItems="center"
                      width="100%"
                      sx={{
                        display: 'none'
                      }}
                    >
                        <UnorderedList
                          display="flex"
                          alignItems="center"
                        >
                          <ListItem
                            marginLeft="15px"
                            height="30px"
                            width="30px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            background="red"
                            color="black"
                          >
                            YT
                          </ListItem>
                          <ListItem
                            marginLeft="15px"
                            height="30px"
                            width="30px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            background="red"
                            color="black"
                          >
                            FB
                          </ListItem>
                          <ListItem
                            marginLeft="15px"
                            height="30px"
                            width="30px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            background="red"
                            color="black"
                          >
                            IG
                          </ListItem>
                        </UnorderedList>
                    </Box>
                </Box>

            </Box>
        </>
  )
}
