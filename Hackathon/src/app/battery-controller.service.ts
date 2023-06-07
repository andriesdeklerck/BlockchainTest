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
    MainId: "1"
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
    MainId: "1"
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
    MainId: "1"
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
    MainId: "1"
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
    MainId: "2"
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
    MainId: "2"
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
    MainId: "2"
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
    MainId: "2"
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
    MainId: "3"
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
    MainId: "3"
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
    MainId: "3"
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
    MainId: "3"
  }
];

@Injectable({
  providedIn: 'root'
})
export class BatteryControllerService {
  batteryDataList: BatteryData[] = batteries

  getBatteryDataCyclesByMainId(id: string): BatteryData[] {
    return this.batteryDataList.filter(batteryData => batteryData.MainId === id);
  }

  getBatteryDataById(id: string): BatteryData | undefined {
    return this.batteryDataList.find(batteryData => batteryData.Id === id);
  }

  constructor() { }
}
