pragma solidity >=0.4.22 <0.6.0;

contract Owned {
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    address public owner;
    address public newOwner;

    function changeOwner(address _newOwner) public onlyOwner {
        newOwner = _newOwner;
    }

    function acceptOwnership() public {
        require(msg.sender == newOwner, "should be newOwner to accept");
        owner = newOwner;
    }
}

contract Simplest is Owned {
    uint votes;

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
