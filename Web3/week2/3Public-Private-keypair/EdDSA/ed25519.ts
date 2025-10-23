import * as ed from "@noble/ed25519";

async function main() {
  // Generate a secure random private key
  const privKey = ed.utils.randomSecretKey();
  console.log(privKey)

  // Generate the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);
  console.log(pubKey)

  // Convert message
  const message = new TextEncoder().encode("hello world");

  // Sign message
  const signature = await ed.signAsync(message, privKey);

  // Verify
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  console.log(isValid);
}

main();
