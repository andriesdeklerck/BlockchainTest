import { Injectable } from '@angular/core';
import { BatteryData } from './battery-data';
// import { ethers } from "ethers";
// import {ProviderDetector} from 'web3-providers';
import { Web3, Web3BaseProvider } from 'web3';
import web3 from 'web3/lib/commonjs/web3';

@Injectable({
  providedIn: 'root'
})

export class ContractService {
  constructor() {
  }

  async loadContract() {
  }

  async loadWeb3() {
    provider: any = new web3.providers.HttpProvider()
    //const provider = await Web3BaseProvider
    //const provider = ProviderDetector.detect();
    //const web3 = new Web3(provider?.toString());
    //const provider = new ethers.(window.ethereum);
    //const provider = new ethers.Web3Provider();
    // ethers.

    // await provider.send("eth_requestAccounts", []);
    // signer = await provider.getSigner();
    // const account = await signer.getAddress();

    //console.log(`Your account is ${provider?.toString}`);

    // this.loadContract();
  }
  // batteryData: BatteryData
  async create() {
    this.loadWeb3();
    var result: number = 50;

    //await contract.functions.AddNewData(result);
  }
}
