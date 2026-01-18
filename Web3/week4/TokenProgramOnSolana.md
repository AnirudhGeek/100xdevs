# Token Program on Solana

This repository documents how **tokens work on Solana**, based on the **Solana Token Program**, and compares it with **Ethereum’s ERC-20 model**.  
The explanation is derived from 100xDevs Web3 Cohort – Week 4 notes.

---

## Token Program Overview

Solana uses a **single, pre-deployed Token Program** to manage all tokens on the network.

- You **do not deploy a new smart contract** for each token
- You create **token mints** and **token accounts**
- The Token Program handles minting, transferring, and balances

---

## Token Architecture Diagram

The diagram below shows how **token mints**, **associated token accounts**, and **users** interact through the Solana Token Program.

![Solana Token Program Diagram](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F4c72686b-9143-4b7b-9c57-ff138d9abbbf%2Fimage.png?table=block&id=fbec9f64-e09e-4a83-9577-d469cf550f86&cache=v2)

---

## Core Components

### 1. Solana Token Program
- A **single global program** deployed on Solana
- Manages all SPL tokens
- Handles:
  - Minting
  - Transfers
  - Token balances

---

### 2. Token Mint
A **Token Mint** defines a token.

It contains:
- Token identity (USDC, DOGY, etc.)
- Total supply
- Decimal precision
- Mint authority

Each token has **exactly one mint**.

Examples:
- Token Mint (USDC)
- Token Mint (DOGY)

---

### 3. Associated Token Account (ATA)

Users **do not store tokens directly in their wallet**.

Instead:
- Each user has a **separate token account per token**
- This is called an **Associated Token Account**

An ATA is uniquely derived from:
- User wallet address
- Token mint address

---

## Example from Diagram

### DOGY Token
- Token Mint: DOGY
- User 1:
  - Associated Token Account
  - Balance: 20 DOGY

### USDC Token
- Token Mint: USDC
- User 1:
  - Associated Token Account → 20 USDC
- User 2:
  - Associated Token Account → 30 USDC
- User 3:
  - Associated Token Account → 100 USDC

---

## Creating Tokens: Ethereum vs Solana

### Ethereum
- Requires deploying a **new smart contract**
- Uses ERC-20 standard
- Each token = separate contract
- Higher cost and complexity

---

### Solana
- Uses **one pre-deployed Token Program**
- No smart contract deployment needed
- Only create:
  - Token Mint
  - Token Accounts
- Lower cost and simpler design

---

## Understanding Tokens

- Tokens are **digital assets** on a blockchain
- They do **not have their own blockchain**
- Examples:
  - USDC
  - USDT

These tokens run on existing blockchains like:
- Solana
- Ethereum

---

## Why Use Existing Blockchains?

- Leverage existing security
- No need to maintain miners or validators
- Lower operational costs
- Faster adoption

---

## Key Insight

> On Solana, a token is simply a **mapping between accounts and numbers**, managed by the Token Program.

---
