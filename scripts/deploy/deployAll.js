async function main() {
  const [deployer] = await ethers.getSigners();

  // Deploy Token
  const Token = await ethers.getContractFactory("C0mradToken");
  const token = await Token.deploy();
  await token.waitForDeployment();
  console.log("Token deployed to:", await token.getAddress());

  // Deploy Core (UUPS)
  const Core = await ethers.getContractFactory("C0mradCore");
  const core = await upgrades.deployProxy(Core, [], { initializer: 'initialize' });
  await core.waitForDeployment();
  console.log("Core deployed to:", await core.getAddress());

  // Deploy others...
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});