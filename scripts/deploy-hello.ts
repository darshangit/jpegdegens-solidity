import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  await hello.deployed();

  return hello;
}

async function sayHello(hello) {
  console.log("Say hello:", await hello.hello());
}

deploy().then(sayHello);
