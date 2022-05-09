import store from '../../stores/remote.store';

// Types
import {
  DeckdeckgoEvent,
  DeckdeckgoEventSlideAction,
  DeckdeckgoEventDeck,
  DeckdeckgoEventSlide,
  DeckdeckgoEventSlideTo,
  DeckdeckgoEventNextPrevSlide,
  DeckdeckgoEventDeckReveal
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
      this.socket = provideWs();
      this.socket.onmessage = this.receiveDataChannelMessage;
      resolve();
    });
  }

  disconnect() {
    this.socket?.close();
  }

  private receiveDataChannelMessage = ($event) => {
    if (!$event) {
      return;
    }

    const data: DeckdeckgoEvent = JSON.parse($event.data);
    store.state.$event = {...data};
  };

  emit(
    data:
      | DeckdeckgoEvent
      | DeckdeckgoEventDeck
      | DeckdeckgoEventSlide
      | DeckdeckgoEventSlideTo
      | DeckdeckgoEventSlideAction
      | DeckdeckgoEventNextPrevSlide
      | DeckdeckgoEventDeckReveal
  ) {
    this.socket?.send(JSON.stringify(data));
  }
}
