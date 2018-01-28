pragma solidity ^0.4.17;

// import "multisig-wallet/MultiSigWallet.sol";

contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
