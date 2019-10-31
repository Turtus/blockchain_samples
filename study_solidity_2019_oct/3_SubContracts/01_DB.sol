pragma solidity >=0.4.22 <0.6.0;

contract MappingDB {
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

    function update() public {
        votes++;
        if (votersInfo[msg.sender].voteTotal > 0) {
            votersInfo[msg.sender].voteLastTry = now;
            votersInfo[msg.sender].voteTotal++;
        } else {
            votersInfo[msg.sender] = Voter(now, now, 1);
        }
    }
}

contract MappingActions {
    MappingDB db;

    constructor() public {
        db = new MappingDB();
    }
    function vote() public {
        db.update();
    }
}
