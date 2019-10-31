pragma solidity >=0.4.22 <0.6.0;

contract SimplestWithPay {
    uint votes;

    constructor() public {
        votes = 0;
    }


    function vote() public payable {
        require (msg.value > 0.1 ether);
        votes+=1;
    }
}
