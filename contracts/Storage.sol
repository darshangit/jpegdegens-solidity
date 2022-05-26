pragma solidity ^0.8.0;

struct AppStorage {
    uint256 b;
    uint256 a;
    uint8 c;
    uint8 d;
    address ContractA;
}

library Storage {
    bytes32 KEY = keccak256("my-storage-location");

    function get() internal pure returns (AppStorage storage s){
        bytes32 k = KEY;
        assembly {
            s.slot = k;
        }
    }
}
