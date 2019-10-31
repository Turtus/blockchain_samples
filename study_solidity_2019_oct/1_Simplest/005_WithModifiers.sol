pragma solidity >=0.4.22 <0.6.0;

contract SimplestWithModifiers {
    uint votes;
    address owner;

    constructor() public {
        owner = msg.sender;
        votes = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function vote() public payable {
        require (msg.value > 0.1 ether);
        votes+=1;
    }

    function get() public onlyOwner {
        address(msg.sender).transfer(address(this).balance);
    }

    function kill() public onlyOwner {
        selfdestruct(msg.sender);
    }
}
