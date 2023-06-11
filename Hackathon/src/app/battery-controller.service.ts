import { Injectable } from '@angular/core';
import { BatteryData } from './battery-data';

var batteries = [
  {
    Id: "0123456789",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "1"
  },
  {
    Id: "0123456789abcdef",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "1"
  },
  {
    Id: "123456789abcdef0",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "1"
  },
  {
    Id: "23456789abcdef01",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "1"
  },
  {
    Id: "3456789abcdef012",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "2"
  },
  {
    Id: "456789abcdef0123",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "2"
  },
  {
    Id: "56789abcdef01234",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "2"
  },
  {
    Id: "6789abcdef012345",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "2"
  },
  {
    Id: "789abcdef0123456",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "3"
  },
  {
    Id: "89abcdef01234567",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "3"
  },
  {
    Id: "9abcdef012345678",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "3"
  },
  {
    Id: "abcdef0123456789",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4,
    Address: "3"
  }
];

@Injectable({
  providedIn: 'root'
})

export class BatteryControllerService {
  batteryDataList: BatteryData[] = batteries

  getBatteryDataCyclesByAddress(address: string): BatteryData[] {
    return this.batteryDataList.filter(batteryData => batteryData.Address === address);
  }

  getLastUpdatedBatteryDataByAddress(address: string): BatteryData | undefined {
    var a: BatteryData[] = this.batteryDataList.filter(batteryData => batteryData.Address === address);
    return a[a.length - 1];
  }

  addNewBattery(
    address: string,
    cycleIndex: number,
    dischargeTime: number,
    timeAt4_15V: number,
    timeConstantCurrent: number,
    decrementTime: number,
    maxVoltageDischarge: number,
    minVoltageDischarge: number,
    chargeTime: number,
    remainingUsefulLife: number)
    {
    // console.log(`
    //   Id: 123,
    //   Address: ${address},
    //   cycleIndex: ${cycleIndex},
    //   dischargeTime: ${dischargeTime},
    //   timeAt4_15V: ${timeAt4_15V},
    //   timeConstantCurrent: ${timeConstantCurrent},
    //   maxVoltageDischarge: ${maxVoltageDischarge},
    //   minVoltageDischarge: ${minVoltageDischarge},
    //   remainingUsefulLife: ${remainingUsefulLife},
    //   chargeTime: ${chargeTime},
    //   decrementTime: ${decrementTime}.`);
  }

  constructor() { }
}
