import { Flex, Text, Image, Button, IconButton, Box, Center } from '@chakra-ui/react'

import { BiUpvote, BiDownvote } from "react-icons/bi";

import { Spacer } from '@chakra-ui/react';

import { Avatar } from '@chakra-ui/react';
import { AiOutlineComment } from "react-icons/ai"
import { TbShare3 } from "react-icons/tb"
import { useState } from 'react';
import { Card,CardBody } from '@chakra-ui/react';
const Polscard = () => {
    const [flag, setflag] = useState(true);

    return (
        <>
            <Flex
                marginTop="10px"
                marginLeft="10px"
                backgroundColor="white"
                boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                borderRadius="26px"
                // 
                sx={{
                    background:
                        'linear-gradient( #fff 0 0) padding-box, linear-gradient(90deg, #0085AB 0%, #2CB2C3 34.2%, #F9D520 69.77%, #D1D922 102.6%) border-box',
                    border: '3px solid transparent',

                }}
                //   flexDirection="column"
                flexDirection="row"
                minW="700px"
                alignItems="center"
                maxW="45%"
                position="relative"


            >



                <Box
                    marginLeft={10}
                >

                    <IconButton
                        icon={<BiUpvote size={30} />}
                        variant="ghost"

                        right="10px"
                        top="10px"
                        onClick={() => {
                            if (flag) {
                                setflag(false)
                            } else {
                                setflag(true)
                            }
                        }}
                    />
                    <Center>
                        count...
                    </Center>

                    <IconButton
                        icon={<BiDownvote size={30} />}
                        variant="ghost"

                        right="10px"

                        onClick={() => {
                            if (flag) {
                                setflag(false)
                            } else {
                                setflag(true)
                            }
                        }}
                    />

                </Box>
                <Spacer />
                <Box
                    marginLeft={2}
                >
                    <Center>

                        <Box>


                            <Flex
                                flexDirection="colloum"
                                marginTop={4}
                                marginLeft={30}
                                gap={2}>
                                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <Center>
                                    <Text fontSize='xs' as='b'>


                                        uploaded by -
                                        <span style={{ color: '#0085AB' }}>
                                            itachi
                                        </span>
                                    </Text>
                                </Center>
                                <Center>
                                    <Text fontSize='xs' as='b'>
                                        ,uploaded Date- <span style={{ color: '#0085AB' }}>
                                            4 hours ago
                                        </span>
                                    </Text>
                                </Center>
                                <Center>
                                    <Text fontSize='xs' as='b'>
                                        ,channel-name -<span style={{ color: '#0085AB' }}>
                                            sbs
                                        </span>
                                    </Text>
                                </Center>

                                <Center>

                                    <Button marginLeft={12} marginRight={4}>
                                        Join
                                    </Button>

                                </Center>
                            </Flex>
                            <Text mt="20px" fontSize="3xl" fontWeight="bold">
                              Q. what is your openion on <span style={{ color: '#3192E7' }}>itadori!</span>
                            </Text>

                                <Card  marginTop={4}>
                                    <CardBody>
                                        <Text>    crush user</Text>
                                    </CardBody>
                                </Card>
                                <Card  marginTop={4}>
                                    <CardBody>
                                        <Text>  simp of all time.</Text>
                                    </CardBody>
                                </Card>
                                <Card marginTop={4}>
                                    <CardBody  >
                                        <Text>  sigma male.</Text>
                                    </CardBody>
                                </Card>
                           


                            


                            <Button borderRadius="70px" px="40px" my="20px" onClick={() => {

                            }}>
                                <AiOutlineComment />
                                comments
                            </Button>
                            <Button borderRadius="70px" px="40px" my="20px" marginLeft={1} onClick={() => {

                            }}>
                                <TbShare3 />
                                share
                            </  Button>
                            <Button px="40px" my="20px" marginLeft={1} onClick={() => {

                            }}>
                                ...
                            </Button>
                        </Box>
                    </Center>
                </Box>


            </Flex>


        </>
    )

}
export default Polscard;
