# Smart Contract Development

Using `solidity` language with the help of `hardhat` framework to build and test our usecase smart contract.

## Development Environment
### Visual Studio Code
Go to https://code.visualstudio.com/download
1. Windows - Download and install.
2. Ubuntu - Download `.deb` file and use command `dpkg -i [package_name]` use `sudo` if needed.

### Node Js
Go to https://nodejs.org/en/download and follow the instruction to install.

## Initialize Project

### Step 1: Initilize Node Project

```
npm i
```
Go with defualts, ie just press enter.
### Step 2: Install Dependecies

```
npm i hardhat
```
The framework for building and testing contracts.
```
npm i @nomicfoundation/hardhat-toolbox
```
The tools for deploying and testing contracts. 
```
npx hardhat init
```
Intialzie hardhat project, select `> Create an empty hardhat.config.js` option.

### Step 2: Create and Compile Contracts

Create a new folder and name it `contracts` within it a file named `Cert.sol`

To compile the contract use the following command
```
npx hardhat compile
```

### Step 3: Test the Contract
Create a new folder `test` within it a file named `Cert.test.js`

To test use the following command
```
npx hardhat test
```

### Step 4: Deploy the Contract
Create a new folders name `ignition/modules` and within it a file named `Cert.js`

Now to deploy
```
npx hardhat ignition deploy ignition/modules/Cert.js
```

Or run node configure hardhat and execute same command

```
npx hardhat node
```
```
npx hardhat ignition deploy ignition/modules/Cert.js
```