var AccountLevels = artifacts.require("AccountLevels");
var AccountLevelsTest = artifacts.require("AccountLevelsTest");
var EtherDelta = artifacts.require("EtherDelta");
var ReserveToken = artifacts.require("ReserveToken");
var SafeMath = artifacts.require("SafeMath");
var SimpleStorage = artifacts.require("SimpleStorage");
var StandardToken = artifacts.require("StandardToken");

module.exports = function(deployer) {
  deployer.deploy(EtherDelta);
  deployer.deploy(ReserveToken);
  deployer.deploy(SafeMath);
  deployer.deploy(SimpleStorage);
  deployer.deploy(StandardToken);
};