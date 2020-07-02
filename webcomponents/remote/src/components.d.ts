/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ConnectionState, DeckdeckgoDeckDefinition, DeckdeckgoEvent, DeckdeckgoSlideDefinition } from "@deckdeckgo/types";
export namespace Components {
    interface DeckgoRemote {
        "autoConnect": boolean;
        "connect": () => Promise<void>;
        "deck": DeckdeckgoDeckDefinition;
        "deleteSlide": () => Promise<void>;
        "disconnect": () => Promise<void>;
        "height": number;
        "length": number;
        "moveDraw": (leftOffset: number, transitionDuration: string) => Promise<void>;
        "nextSlide": (slideAnimation?: boolean) => Promise<void>;
        "pause": () => Promise<void>;
        "play": () => Promise<void>;
        "prevSlide": (slideAnimation?: boolean) => Promise<void>;
        "room": string;
        "slideTo": (index: number, speed?: number | undefined) => Promise<void>;
        "socketUrl": string;
        "start": (appSocketId: string) => Promise<void>;
        "updateReveal": (reveal: boolean) => Promise<void>;
        "updateSlide": (index: number, slide: DeckdeckgoSlideDefinition) => Promise<void>;
        "updateSlides": () => Promise<void>;
        "width": number;
    }
}
declare global {
    interface HTMLDeckgoRemoteElement extends Components.DeckgoRemote, HTMLStencilElement {
    }
    var HTMLDeckgoRemoteElement: {
        prototype: HTMLDeckgoRemoteElement;
        new (): HTMLDeckgoRemoteElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-remote": HTMLDeckgoRemoteElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoRemote {
        "autoConnect"?: boolean;
        "deck"?: DeckdeckgoDeckDefinition;
        "height"?: number;
        "length"?: number;
        "onEvent"?: (event: CustomEvent<DeckdeckgoEvent>) => void;
        "onState"?: (event: CustomEvent<ConnectionState>) => void;
        "room"?: string;
        "socketUrl"?: string;
        "width"?: number;
    }
    interface IntrinsicElements {
        "deckgo-remote": DeckgoRemote;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-remote": LocalJSX.DeckgoRemote & JSXBase.HTMLAttributes<HTMLDeckgoRemoteElement>;
        }
    }
}
