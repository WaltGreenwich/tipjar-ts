import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x66Da0b2A6A84a88Da071466E8e2eF6957303fF27";

  const balance = await ethers.provider.getBalance(contractAddress);

  console.log(`💰 Contract balance: ${ethers.formatEther(balance)} ETH`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
