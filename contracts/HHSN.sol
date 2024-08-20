// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract HHSN {
    string public message;
    address public owner;

    constructor(string memory _message) {
        message = _message;
        owner = msg.sender;
    }

    function update(string memory _message) public {
        require(msg.sender == owner, "Only owner can update the message");
        message = _message;
    }
}
