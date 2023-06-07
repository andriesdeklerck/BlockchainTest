export interface BatteryData {
  Id: string;
  MainId: string;
  CycleIndex: number;
  DischargeTime: number;
  TimeAt4_15V: number;
  TimeConstantCurrent: number;
  DecrementTime: number;
  MaxVoltageDischarge: number;
  MinVoltageDischarge: number;
  ChargeTime: number;
  RemainingUsefulLife: number;
}
