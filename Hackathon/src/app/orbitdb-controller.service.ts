import { Injectable } from '@angular/core';
import * as IPFScore from 'ipfs-core'
import { IPFSOptions } from 'ipfs-core/dist/src/components/network';
import OrbitDB from 'orbit-db'
import EventStore from 'orbit-db-eventstore';
import { BatteryData } from './battery-data';

//Setup local ipfs session
const ipfsOptions: IPFSOptions = { repo: './ipfs', }
const ipfsSession: IPFScore.IPFS = await IPFScore.create(ipfsOptions)

//Setup orbitDB instance and open/create the battery database
const orbitDBSession: OrbitDB = await OrbitDB.createInstance(ipfsSession)
const logDB: EventStore<BatteryData> = await orbitDBSession.eventlog('batteryData')
await logDB.load()


@Injectable({
  providedIn: 'root'
})

export class OrbitdbControllerService {

  ReadDB(): BatteryData[] {
    const readData: BatteryData[] = logDB.iterator({ limit: -1 })
      .collect()
      .map((e: any) => e.payload.value)
    return readData;
  }

  AddSingleDataEntry(dataToAdd: BatteryData) {
    logDB.add(dataToAdd);
  }

  AddDataEntries(dataToAdd: BatteryData[]) {
    dataToAdd.forEach(element => {
      this.AddSingleDataEntry(element);
    });
  }
  constructor() { }
}
