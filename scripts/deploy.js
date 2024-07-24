const { ethers } = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory('viinnsmoker')

  console.log('viinnsmoker was deployed...')
  const contract = await Contract.deploy()

  await contract.waitForDeployment()
  const contractAddress = await contract.getAddress()
  console.log('PERC20 token deployed to:', contractAddress)

  const fileContent = `const deployedAddress = '${contractAddress}'\n\nexport default deployedAddress\n`

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })