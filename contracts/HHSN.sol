// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract HHSN {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function update(string memory _message) public {
        message = _message;
    }
}
