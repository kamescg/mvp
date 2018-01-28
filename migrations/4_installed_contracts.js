var multisig = artifacts.require("multisig-wallet");

module.exports = function(deployer) {
  deployer.deploy(multisig);
};