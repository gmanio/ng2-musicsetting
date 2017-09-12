import { Injectable } from '@angular/core';
import { LoggerService } from '../commons/logger.service';
import { BroadcastEventService } from './broadcast-event.service';
import { BROADCAST } from '../../types/event-key.type';
import BrowserHelper from '../../helpers/browser.helper';

const getWindow = (): any => {
  return window;
};

@Injectable()
export class NativeBridgeService {
  private window: any;

  constructor(private logger: LoggerService,
              private broadcastEvent: BroadcastEventService) {
    this.window = getWindow();
    this.window.onPlaylist = this.onPlayList.bind(this);
    this.window.onCurrentTrack = this.onCurrentTrack.bind(this);
    this.window.onCurrentPosition = this.onCurrentPosition.bind(this);
    this.window.onMetadata = this.onMetadata.bind(this);
    this.window.onState = this.onState.bind(this);
    this.window.onResume = this.onResume.bind(this);
    this.window.onBack = this.onBack.bind(this);
  }

  public send(command: string, params: Object) {
    const sendMessage = { command, params };

    this.logger.info('[NTV_SEND]', command, params);
    if ( BrowserHelper.isAndroid() ) {
      this.window.musicmate.postMessage(JSON.stringify(sendMessage));
    } else if ( BrowserHelper.isIos() ) {
      this.window.webkit.musicmate.postMesage(JSON.stringify(sendMessage));
    } else {

    }
  }

  onPlayList(playlist: any[]) {
    this.logger.info('[NTV_ON] playlist', playlist);

  }

  onCurrentTrack(trackInfo: any) {
    this.logger.info('[NTV_ON] currentTrack', trackInfo);
  }

  onCurrentPosition(position: string) {
    this.logger.info('[NTV_ON] currentPosition', position);

  }

  onMetadata(metadata: any) {
    this.logger.info('[NTV_ON] metadata', metadata);

  }

  onState(state: any) {
    this.logger.info('[NTV_ON] state', state);

  }

  onResume(state: boolean) {
    this.logger.info('[NTV_ON] resume', state);
  }

  onBack() {
    this.logger.info('[NTV_ON] back');
    this.broadcastEvent.broadcast(BROADCAST.BACK_KEY, 'back');
  }
}
