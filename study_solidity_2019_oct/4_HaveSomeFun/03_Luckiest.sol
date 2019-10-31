pragma solidity >=0.4.22 <0.6.0;
contract Luckiest {

    address payable public owner;

    constructor() public {
        owner = msg.sender;
    }


    function tryRandom(uint8 _try) external returns(bool) {
        uint8 winning = uint8(block.timestamp % 52);
        if (winning == _try) {
            msg.sender.transfer(address(this).balance);
            return true;
        } else {
            return false;
        }
    }
}
