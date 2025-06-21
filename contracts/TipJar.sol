// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TipJar {
    address public owner;

    struct Tip {
        address tipper;
        uint amount;
        string message;
        uint timestamp;
    }

    Tip[] public tips;

    event NewTip(address indexed from, uint amount, string message);

    constructor() {
        owner = msg.sender;
    }

    function tip(string memory _message) public payable {
        require(msg.value > 0, "Tip must be greater than zero");
        tips.push(Tip(msg.sender, msg.value, _message, block.timestamp));
        emit NewTip(msg.sender, msg.value, _message);
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    function getTips() public view returns (Tip[] memory) {
        return tips;
    }
}
