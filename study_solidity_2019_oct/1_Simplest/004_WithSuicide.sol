pragma solidity >=0.4.22 <0.6.0;

contract SimplestWithSuicide {
    uint votes;
    address owner;

    constructor() public {
        owner = msg.sender;
        votes = 0;
    }


    function vote() public payable {
        require (msg.value > 0.1 ether);
        votes+=1;
    }

    function get() public {
        require (msg.sender == owner);
        address(msg.sender).transfer(address(this).balance);
    }

    function kill() public {
        require (msg.sender == owner);
        selfdestruct(msg.sender);
    }
}
