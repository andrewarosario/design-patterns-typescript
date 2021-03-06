import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume + 1);
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume - 1);
  }
}
