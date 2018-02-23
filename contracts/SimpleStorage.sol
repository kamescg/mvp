pragma solidity ^0.4.17;

// import "multisig-wallet/MultiSigWallet.sol";

contract SimpleStorage {
  uint storedData;

  function set(address sender, uint x) public {
    onlyAuthorized
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }

  modifier onlyAuthorized() {
        require(msg.sender == relay || checkMessageData(msg.sender));
        _;
    }

  function isOwner(address identity, address owner) public constant returns (bool) {
        return (owners[identity][owner] > 0 && (owners[identity][owner] + userTimeLock) <= now);
    }
}
