import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x66Da0b2A6A84a88Da071466E8e2eF6957303fF27";

  const TipJar = await ethers.getContractAt("TipJar", contractAddress);

  const tx = await TipJar.tip("Great job!", {
    value: ethers.parseEther("0.01"),
  });
  await tx.wait();

  console.log("✅ Tip sent successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
