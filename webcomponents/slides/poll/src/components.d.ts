/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DeckgoSlidePoll {
        "afterSwipe": () => Promise<void>;
        "beforeSwipe": (_enter: boolean, _reveal: boolean) => Promise<boolean>;
        "connectPollSocket": boolean;
        "customActions": boolean;
        "customBackground": boolean;
        "hideContent": () => Promise<void>;
        "isAnswered": () => Promise<boolean>;
        "lazyLoadContent": () => Promise<void>;
        "pollKey": string;
        "pollLink": string;
        "resizeContent": () => Promise<void>;
        "revealContent": () => Promise<void>;
        "socketPath": string;
        "socketUrl": string;
        "update": () => Promise<void>;
    }
}
declare global {
    interface HTMLDeckgoSlidePollElement extends Components.DeckgoSlidePoll, HTMLStencilElement {
    }
    var HTMLDeckgoSlidePollElement: {
        prototype: HTMLDeckgoSlidePollElement;
        new (): HTMLDeckgoSlidePollElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-slide-poll": HTMLDeckgoSlidePollElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoSlidePoll {
        "connectPollSocket"?: boolean;
        "customActions"?: boolean;
        "customBackground"?: boolean;
        "onPollUpdated"?: (event: CustomEvent<void>) => void;
        "onSlideDidLoad"?: (event: CustomEvent<void>) => void;
        "pollKey"?: string;
        "pollLink"?: string;
        "socketPath"?: string;
        "socketUrl"?: string;
    }
    interface IntrinsicElements {
        "deckgo-slide-poll": DeckgoSlidePoll;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-slide-poll": LocalJSX.DeckgoSlidePoll & JSXBase.HTMLAttributes<HTMLDeckgoSlidePollElement>;
        }
    }
}
