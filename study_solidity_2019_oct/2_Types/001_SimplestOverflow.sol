pragma solidity >=0.4.22 <0.6.0;

contract Simplest {
    uint8 public votes;

    constructor() public {
        votes = 0;
    }


    function vote(uint8 _add) public {
        votes+=_add;

    }
}

