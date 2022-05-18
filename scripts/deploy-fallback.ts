import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";

async function deploy() {
  const Fallback = await ethers.getContractFactory("Fallback");
  const fallback = await Fallback.deploy();
  await fallback.deployed();

  console.log(fallback.address);

  return fallback;
}

async function fallback(fallback) {
  const f = await ethers.getContractAt("IFallback", fallback.address);
  await f.count();
}

deploy().then(fallback);
