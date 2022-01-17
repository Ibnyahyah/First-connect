import { useEffect, useRef } from 'react';
// import useEther from usedappk
import { useEthers } from '@usedapp/core';
import styled from '@emotion/styled';
// Jazzicon from @metamask/jazzicon
import Jazzicon from '@metamask/jazzicon';

const StyleIdenticon = styled.div`

`

export default function Identicon(){

    const ref = useRef<HTMLDivElement>();
    const { account } = useEthers();

    useEffect(()=>{
        if(account && ref.current){
            ref.current.innerHTML = "";
            ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10),16)));
        }
    },[account])

    return <StyleIdenticon ref={ref as any}/>
}