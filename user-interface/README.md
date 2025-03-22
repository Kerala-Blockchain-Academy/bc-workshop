# Dapp Interface

### Step 1: Create React Template

```
npm create vite@latest user-interface
```
Says `y` to install if not installed. Now for options - `Select a framework: React` - `Select a variant: JavaScript`

### Step 2: Install dependecies
```
cd user-interface/
npm i
npm i ethers
```

### Step 3: Copy the artifacts from hardhat

Copy `hardhat\artifacts\contracts\Cert.sol\Cert.json` and  `hardhat\ignition\deployments\chain-31337\deployed_addresses.json` to `user-interface\src`

### Step 4: Code UI

**Template:** https://gist.github.com/ananthanir/da697d641307396df5e33cda98f11f27

To run app
```
npm run dev
```
