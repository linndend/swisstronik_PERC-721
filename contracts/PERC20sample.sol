// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./PERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract viinnsmoker is ERC721 {
    uint256 private _currentTokenId = 0;
    mapping(address => uint256) private _balances;

    event NFTMinted(address recipient, uint256 tokenId);

    constructor() ERC721("viinnsmoker", "VNS") {}
	
    function mintNFT(address recipient) public returns (uint256) {
        _currentTokenId += 1;
        uint256 newItemId = _currentTokenId;
        _mint(recipient, newItemId);
        
        emit NFTMinted(recipient, newItemId);  

        return newItemId;
    }
	
    function burnNFT(uint256 tokenId) public {
        _burn(tokenId);
    }
	
	function balanceOf(address account) public view virtual override returns (uint256) {
		require(msg.sender == account, "ERC721: msg.sender != account");
		return _balances[account];
	}
}
