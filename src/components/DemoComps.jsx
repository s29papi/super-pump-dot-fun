import { useAccount } from 'wagmi'; // useAccount()


export default function DemoComps() {
    // 1. check if an account is connected 
    // NB: pump.fun uses the first 3 bytes of the wallet string as a user unique identifier (I.D), for Eth it should be the last 3 bytes, this is the unique part 
    // e.g 482ACB (this is the last 3 bytes of a random address )
    const { address } = useAccount()
    if (!address) {
        console.log("not connected")
    }

    const lastThreeBytes = address.trimStart('0x').slice(-6);

    


}

