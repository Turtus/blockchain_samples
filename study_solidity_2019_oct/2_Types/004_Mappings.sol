pragma solidity >=0.4.22 <0.6.0;

contract SimplestMapping {
    uint public votes;

    struct Voter {
        uint256 voteFirstTime;
        uint256 voteLastTry;
        uint256 voteTotal;
    }

    mapping(address => Voter) public votersInfo;

    constructor() public {
        votes = 0;
    }


    function vote() public {
        votes+=1;
        if (votersInfo[msg.sender].voteTotal > 0) {
            votersInfo[msg.sender].voteLastTry = now;
            votersInfo[msg.sender].voteTotal++;
        } else {
            votersInfo[msg.sender] = Voter(now, now, 1);
        }
    }

}
