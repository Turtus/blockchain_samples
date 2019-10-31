pragma solidity >=0.4.22 <0.6.0;
contract Richest {

    address payable public owner;
    address public richestAddr;
    uint256 public richestMoney;
    uint256 public money;

    constructor() public {
        owner = msg.sender;
    }


    function () external payable {
        money += msg.value;
        if (msg.value > richestMoney) {
            richestMoney = msg.value;
            richestAddr = msg.sender;
        }

    }

    function getMoney() public {
        owner.transfer(address(this).balance);
    }
}
