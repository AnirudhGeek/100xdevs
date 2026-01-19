import * as ed from "@noble/ed25519"

const main = async()=>{
    //generate random private key
    const privateKey = ed.utils.randomSecretKey()
    console.log(privateKey)

    //generating public key with private key 
    const pubKey = await ed.getPublicKeyAsync(privateKey)

    //generating the message 
    const message = new TextEncoder().encode("Hello World")

    //singing the messaage with private key
    const signature = await ed.signAsync(message,privateKey)

    //verifying the message 
    const isValid = await ed.verifyAsync(signature,message,pubKey)
    console.log(isValid)
}

main()