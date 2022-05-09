import remoteStore from '../../stores/remote.store';

// Types
import {
  DeckdeckgoEventDraw,
  DeckdeckgoEvent,
  DeckdeckgoEventNextPrevSlide,
  DeckdeckgoEventSlideAction,
  DeckdeckgoEventSlideTo,
  ConnectionState
} from '@deckdeckgo/types';

function provideWs(): WebSocket {
  // @ts-ignore
  if (window.slideWsProxy) {
    // @ts-ignore
    return window.slideWsProxy.provideWs();
  }
  return new WebSocket('ws://localhost:9999')
}

export class CommunicationService {
  private static instance: CommunicationService;

  private socket: WebSocket | undefined;

  room: string;
  private constructor() {
    // Private constructor, singleton
  }

  static getInstance() {
    if (!CommunicationService.instance) {
      CommunicationService.instance = new CommunicationService();
    }
    return CommunicationService.instance;
  }

  connect(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if (!window) {
        resolve();
        return;
      }

      remoteStore.state.state = ConnectionState.CONNECTING;
      this.socket = provideWs();
      this.socket.onopen = this.connectedWhenOpened;
      this.socket.onmessage = this.receiveDataChannelMessage;
      remoteStore.state.state = ConnectionState.CONNECTED_WITH_SIGNALING_SERVER;
      resolve();
    });
  }

  disconnect() {
    this.socket?.close();
  }

  emit(data: DeckdeckgoEvent | DeckdeckgoEventDraw | DeckdeckgoEventNextPrevSlide | DeckdeckgoEventSlideAction | DeckdeckgoEventSlideTo) {
    this.socket?.send(JSON.stringify(data));
  }

  private connectedWhenOpened = () => {
    remoteStore.state.state = ConnectionState.CONNECTED;
  };

  private receiveDataChannelMessage = (event) => {
    if (!event) {
      return;
    }

    const data: DeckdeckgoEvent = JSON.parse(event.data);
    remoteStore.state.$event = {...data};
  };
}
