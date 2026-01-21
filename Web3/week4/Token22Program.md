# Token-2022 Program (Solana)

## Overview

The **Token-2022 Program** is a token program on the **Solana blockchain** that defines a common implementation for **fungible** and **non-fungible tokens**.

Token-2022 (also known as **Token Extensions**) is a **superset** of the original SPL Token Program and provides additional advanced features while remaining compatible with existing token standards.

🔗 Official Documentation:  
https://spl.solana.com/token-2022

---

## Prerequisites

Make sure you have the following installed and configured:

- Solana CLI
- SPL Token CLI
- A funded Solana wallet (Devnet/Testnet/Mainnet as required)

---

## Create a Token Mint (Token-2022)

To create a new token mint using the **Token-2022 program**, run:

```
spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
```
This command creates a mint account governed by the Token-2022 program instead of the legacy SPL Token program.

## Create an Associated Token Account

Once the mint is created, create an associated token account to hold the tokens:
```
spl-token create-account 8fTM5XYRaoTJU9PLUuyakF3EypQ4RXLSHxKtiw2z9pQQ
```
Replace the mint address with your own if different.


## Mint Tokens

Mint tokens to the associated token account:
```
spl-token mint 8fTM5XYRaoTJU9PLUuyakF3EypQ4RXLSHxKtiw2z9pQQ 100
```
This command mints 100 tokens of the specified mint to your wallet’s token account.


