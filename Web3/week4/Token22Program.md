# Token-2022 Program (Solana) 
Notion => https://petal-estimate-4e9.notion.site/Token-22-with-metadata-74085f14ffa742d192761efbac9eaffe

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



## Token 22 with metadata

Metadata : https://cdn.100xdevs.com/metadata.json

### Create a token with metadata enabled
```
spl-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb create-token --enable-metadata
```

### Create metadata
```
spl-token initialize-metadata pXfZ6Hg2s78m1iSRVsdzos9TmfkqkQdv5MmQrr77ZQK 100xx 100xxx https://cdn.100xdevs.com/metadata.json
```

### Create associated token account
```
 spl-token create-account pXfZ6Hg2s78m1iSRVsdzos9TmfkqkQdv5MmQrr77ZQK
```

### Mint
```
 spl-token mint 1000
```

### Check out the token in your wallet
![Check out the token in your wallet](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2Fa04c8047-a9d7-46cd-a650-184fac480cfe%2Fimage.png?table=block&id=13f55dd0-a65c-4005-9302-8074a022f797&cache=v2)


### Revised some backend concepts 
 Intro & demo
 Installing node js
 Running JavaScript files with Node JS
 Node module system
 Node package manager
 Path module
 File system
 HTTP Module
 Callbacks and callback hell
 Promises
 Async Await
 Event Emitter
 Express JS
 EJS Template engine
 Rest API development
 MongoDB and Mongoose basics
 Book store API Development
 Authentication and authorization