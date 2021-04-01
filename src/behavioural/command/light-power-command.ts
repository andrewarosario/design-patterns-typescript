import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-light-house';

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
