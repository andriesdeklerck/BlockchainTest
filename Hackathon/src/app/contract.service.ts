import { Injectable } from '@angular/core';
import Web3 from 'web3';
import contract from '@truffle/contract';

@Injectable({
  providedIn: 'root'
})

export class ContractService {
  web3!: Web3;
  myContract: any;

  constructor() {
    if (typeof window.ethereum !== 'undefined') {
      this.web3 = new Web3(window.ethereum);
      this.initContract();
    } else {
      console.log('Please install MetaMask or enable Ethereum in your browser.');
    }
  }

  async initContract() {
    // Set the provider for the contract
    this.myContract = contract({
      // Contract ABI and bytecode
    });
    this.myContract.setProvider(this.web3.currentProvider);

    // Additional setup or operations with the contract
  }

  async create() {
    try {
      const contractInstance = await this.myContract.deployed();
      const result = await contractInstance.AddNewData(5);

      console.log('Contract method result:', result);
    } catch (error) {
      console.error('Failed to call contract method:', error);
    }
  }

  async loadContract() {
    try {
      // Contract JSON and address
      const contractJSON = require('../assets/contracts/contract.json');
      const contractAddress = '0xf57A73d325AbAe4f89e1d03d61C5b0276733B40F';

      // Load the contract
      this.myContract = contract(contractJSON);
      this.myContract.setProvider(this.web3.currentProvider);
      this.myContract.defaults({
        from: await this.web3.eth.getAccounts()
      });

      // At this point, you can access the contract's methods and events
      console.log('Contract loaded:', this.myContract);
    } catch (error) {
      console.error('Failed to load contract:', error);
    }
  }
}
