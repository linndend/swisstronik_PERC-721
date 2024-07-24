// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "./PERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract viinnsmoker is ERC721 {
    constructor() ERC721("viinnsmoker", "VNS") {}

    
     function mint() public {
        _mint(msg.sender, 100*10**18);
    }
}