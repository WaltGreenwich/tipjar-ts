import { ethers } from "hardhat";
import { expect } from "chai";
import { TipJar } from "../typechain-types";

describe("TipJar", function () {
  let tipJar: TipJar;
  let owner: any;
  let addr1: any;
  let addr2: any;

  beforeEach(async () => {
    const TipJarFactory = await ethers.getContractFactory("TipJar");
    [owner, addr1, addr2] = await ethers.getSigners();
    tipJar = (await TipJarFactory.deploy()) as TipJar;
    await tipJar.waitForDeployment();
  });

  it("Should receive tips and emit event", async () => {
    await expect(
      tipJar
        .connect(addr1)
        .tip("Great service!", { value: ethers.parseEther("0.01") })
    )
      .to.emit(tipJar, "NewTip")
      .withArgs(addr1.address, ethers.parseEther("0.01"), "Great service!");
  });

  it("Should only allow owner to withdraw", async () => {
    await tipJar
      .connect(addr1)
      .tip("Nice work!", { value: ethers.parseEther("0.01") });
    await expect(tipJar.connect(addr1).withdraw()).to.be.revertedWith(
      "Only owner can withdraw"
    );

    await expect(() => tipJar.connect(owner).withdraw()).to.changeEtherBalance(
      owner,
      ethers.parseEther("0.01")
    );
  });

  it("Should update balance correctly", async () => {
    const tipAmount = ethers.parseEther("0.02");
    await tipJar.connect(addr1).tip("First tip!", { value: tipAmount });
    await tipJar.connect(addr2).tip("Second tip!", { value: tipAmount });

    const contractBalance = await ethers.provider.getBalance(
      await tipJar.getAddress()
    );
    expect(contractBalance).to.equal(tipAmount * 2n);
  });
});
