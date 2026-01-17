# Web2 Data Model vs. Solana Data Model  
## Web2 Data Model  

+ Applications are typically deployed on cloud providers with backend code and data storage separated.  
+ **Databases**: Use SQL or NoSQL databases to store user data.  
+ **Data Management**: Adding or deleting a user involves simply adding or removing a row in the database.
   
![Web2 Data Model](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2Fc15c982b-5c55-4944-a00b-d83858a8d019%2Fimage.png?table=block&id=21632abc-e9e8-43bb-b6f9-56d318f798d0&cache=v2)  


## Solana Data Model  

+ **Smart Contracts**: In Web3, smart contracts are equivalent to backend applications in Web2. These are deployed on the blockchain.  
+ **Program Storage**: On Solana, smart contracts (called "programs") are stored in executable accounts.  
+ **Data Storage**: Unlike Ethereum, where data and smart contract code are stored together, Solana separates them:  
  - **Data Accounts**: Store data independently from programs.  
  - **Executable Accounts**: Store the smart contract code (programs).

![Web3 Solana Data Model](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F7e490be3-ab63-49ee-aa64-8bb464877adf%2Fimage.png?table=block&id=080dd7c6-7d54-4ae9-9d6f-03ba21016cec&cache=v2)  


## Key Differences and Implications  

+ **User Account Management**:  
  - In Solana, each user requires a separate account, which adds complexity compared to simply adding a row in a Web2 database.  
  - **User-Paid Fees**: The responsibility for creating and funding these accounts, including paying for data rent, is delegated to the user.  
  - **Decentralized Fees**: Users pay the fees for their individual accounts, not the program itself. If an account is closed, any remaining rent is refunded to the user.
