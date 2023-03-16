import { Flex, Text, Image, Button, IconButton, Box, Center } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react';
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useState } from 'react';
import { Spacer } from '@chakra-ui/react';

import { Avatar } from '@chakra-ui/react';
import {AiOutlineComment} from "react-icons/ai"
import {TbShare3} from "react-icons/tb"
const PostCard = () => {
    const [flag, setflag] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (<>
        <Box>


            <button
                onClick={() => {
                    if (flag) {
                        setflag(false)
                    } else {
                        setflag(true)
                    }
                }}  >
                'this is for open tha card!'
            </button>

        </Box>
        {flag && (<Flex
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
            minW="500px"
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
                        <Text fontSize='xs'as='b'>

                        
                        uploaded by -
                        <span style={{ color: '#0085AB' }}>
                            itachi
                        </span>
                        </Text>
                    </Center>
                    <Center>
                    <Text fontSize='xs'as='b'>
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
                 
                        <Button marginLeft={12}>
                            Join
                        </Button>

                    </Center>
                </Flex>
                <Center>

               
                <Image
                    src="https://images6.alphacoders.com/641/thumb-1920-641995.jpg"
                    height="250px"
                    marginTop="40px"
                    borderRadius="15px"
                />
                 </Center>
                
                <center>
                <Text mt="20px" fontSize="3xl" fontWeight="bold">
                    Welcome to <span style={{ color: '#3192E7' }}>Laugh-tail!</span>
                </Text>
                <Text mt="10px" color="#848484" w="50%" align="center">
                    {/* <span style={{ color: '#0085AB' }}>Congratulations!</span> */}
                     You’re so
                    close to sharing with the world! Let’s get you on track. Become a
                   Piret and start your journey to find one piece .
                </Text>
                </center>
                
                <Button borderRadius="70px" px="40px" my="20px" onClick={() => {

                }}>
                    <AiOutlineComment/>
                comments
                </Button>
                <Button borderRadius="70px" px="40px" my="20px"  marginLeft={1} onClick={() => {

                }}>
                    <TbShare3/>
                  share
                </  Button>
                <Button px="40px" my="20px"  marginLeft={1} onClick={() => {

                }}>
                   ...
                </Button>
                </Box>
                </Center>
            </Box>


        </Flex>
        )}
    </>
    )
}
export default PostCard;