pragma solidity >=0.4.22 <0.6.0;
contract Cleverest {

    address payable public owner;
    bytes32 public answer;

    constructor() public {
        owner = msg.sender;
        answer = "";
    }


    function tryAnswer(string calldata _answer) external payable returns(bool) {
        bytes32 tmp = keccak256(bytes(_answer));
        if (msg.value > 0.1 ether && answer == tmp) {
            msg.sender.transfer(address(this).balance);
            return true;
        } else {
            return false;
        }
    }

    function setAnswer(string calldata _answer) external {
        require(owner == msg.sender);
        require(answer == "");
        answer = keccak256(bytes(_answer));
    }
}
