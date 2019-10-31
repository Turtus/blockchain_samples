pragma solidity >=0.4.22 <0.6.0;

contract SimplestArray {
    uint public votes;
    address[] public voters;

    constructor() public {
        votes = 0;
    }


    function vote() public {
        votes+=1;
        voters.push(msg.sender);
    }

}
