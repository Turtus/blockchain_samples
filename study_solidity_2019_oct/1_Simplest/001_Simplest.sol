pragma solidity >=0.4.22 <0.6.0;

contract Simplest {
    uint votes;

    constructor() public {
        votes = 0;
    }


    function vote() public {
        votes+=1;
    }

    function getVotes() public view returns (uint) {
        return votes;
    }

}
