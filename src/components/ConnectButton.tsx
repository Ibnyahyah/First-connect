import { Button, Box, Text } from '@chakra-ui/react';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import Identicon from './Identicon'


type Props = {
    handleOpenModal: any;
}

export default function ConnectButton({handleOpenModal}:Props){

    const {activateBrowserWallet, account} = useEthers()
    const etherBalance = useEtherBalance(account)
    

    function handleConnect(){
        activateBrowserWallet()
    }

    return account?(
        <Box
            display="flex"
            alignItems="center"
            background="gray.700"
            borderRadius="xl"
            py="0"
            >
            <Box>
                <Text color="white" font="md">
                    {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
                </Text>
            </Box>
            <Button
                // add named function to handle opening modal
                onClick={handleOpenModal}
                bg="gray.800"
                border="1px solid transparent"
                _hover={{
                    border:"1px",
                    borderStyle:"solid",
                    borderColor:"blue.400",
                    backgroundColor:"gray.700"
                }}
                borderRadius="xl"
                m="1px"
                px={3}
                height="38px"
                >
                    <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                        {/* Check account if define then slice */}
                        {account && 
                            `${account.slice(0,6)}...${account.slice(
                                account.length -4,
                                account.length
                            )}`}
                    </Text>
                    <Identicon/>
            </Button>
        </Box>
    ):(
        <Button onClick={handleConnect}>
            Connect to a Wallet
        </Button>
    )
}
