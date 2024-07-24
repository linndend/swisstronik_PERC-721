const hre = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/utils");

const sendShieldedTransaction = async (signer, destination, data, value) => {
  const rpclink = hre.network.config.url;
  const [encryptedData] = await encryptDataField(rpclink, data);
  return await signer.sendTransaction({
    from: signer.address,
    to: destination,
    data: encryptedData,
    value,
  });
};

async function main() {
  const contractAddress = "0x514953B067427157Ae1Dc52472314867d35C5515";
  const [signer] = await hre.ethers.getSigners();
  const contractFactory = await hre.ethers.getContractFactory("viinnsmoker");
  const contract = contractFactory.attach(contractAddress);
  const functionName = "mint";
  const setMessageTx = await sendShieldedTransaction(signer, contractAddress, contract.interface.encodeFunctionData(functionName),0)
  await setMessageTx.wait();
  console.log('Transaction Receipt: ', setMessageTx);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

