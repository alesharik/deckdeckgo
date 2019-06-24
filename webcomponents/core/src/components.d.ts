/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DeckgoDeck {
    'blockSlide': (block: boolean) => Promise<void>;
    'cloneBackground': boolean;
    'deleteActiveSlide': () => Promise<void>;
    'doPrint': () => Promise<void>;
    'embedded': boolean;
    'getActiveIndex': () => Promise<number>;
    'getLength': () => Promise<number>;
    'initSlideSize': () => Promise<void>;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'isMobile': () => Promise<boolean>;
    'keyboard': boolean;
    'loadBackground': () => Promise<void>;
    'slideNext': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slidePrev': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slideTo': (index: number, speed?: number, emitEvent?: boolean) => Promise<void>;
    'toggleFullScreen': () => Promise<void>;
    'toggleKeyboardAssist': (state: boolean) => Promise<void>;
  }
  interface DeckgoGif {
    'alt': string;
    'fullscreen': boolean;
    'lazyLoadContent': () => Promise<void>;
    'src': string;
  }
  interface DeckgoPager {
    'activeIndex': number;
    'length': number;
  }
  interface DeckgoSlideAuthor {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'imgAlt': string;
    'imgSrc': string;
    'lazyLoadContent': () => Promise<void>;
  }
  interface DeckgoSlideChart {
    'afterSwipe': () => Promise<void>;
    'animation': boolean;
    'animationDuration': number;
    'area': boolean;
    'beforeSwipe': (enter: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'datePattern': string;
    'grid': boolean;
    'height': number;
    'innerRadius': number;
    'lazyLoadContent': () => Promise<void>;
    'marginBottom': number;
    'marginLeft': number;
    'marginRight': number;
    'marginTop': number;
    'range': string[];
    'separator': string;
    'smooth': boolean;
    'src': string;
    'ticks': number;
    'type': string;
    'width': number;
    'yAxisDomain': string;
  }
  interface DeckgoSlideCode {
    'afterSwipe': () => Promise<void>;
    'anchor': string;
    'anchorZoom': string;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'hideAnchor': boolean;
    'language': string;
    'lazyLoadContent': () => Promise<void>;
    'src': string;
  }
  interface DeckgoSlideContent {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (enter: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'lazyLoadContent': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideGif {
    'afterSwipe': () => Promise<void>;
    'alt': string;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'fullscreen': boolean;
    'lazyLoadContent': () => Promise<void>;
    'src': string;
  }
  interface DeckgoSlideQrcode {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'content': string;
    'customActions': boolean;
    'customBackground': boolean;
    'lazyLoadContent': () => Promise<void>;
  }
  interface DeckgoSlideSplit {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (enter: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'lazyLoadContent': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideTitle {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (enter: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'lazyLoadContent': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideYoutube {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (_enter: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'height': number;
    'lazyLoadContent': () => Promise<void>;
    'pause': () => Promise<void>;
    'play': () => Promise<void>;
    'src': string;
    'toggle': () => Promise<void>;
    'width': number;
  }
  interface DeckgoSocial {
    'fullUrl': string;
    'github': string;
    'lazyLoadContent': () => Promise<void>;
    'linkedin': string;
    'medium': string;
    'twitter': string;
  }
  interface DeckgoYoutube {
    'frameTitle': string;
    'height': number;
    'lazyLoadContent': () => Promise<void>;
    'pause': () => Promise<void>;
    'play': () => Promise<void>;
    'src': string;
    'updateIFrame': (width: number, height: number) => Promise<void>;
    'width': number;
  }
}

declare global {


  interface HTMLDeckgoDeckElement extends Components.DeckgoDeck, HTMLStencilElement {}
  var HTMLDeckgoDeckElement: {
    prototype: HTMLDeckgoDeckElement;
    new (): HTMLDeckgoDeckElement;
  };

  interface HTMLDeckgoGifElement extends Components.DeckgoGif, HTMLStencilElement {}
  var HTMLDeckgoGifElement: {
    prototype: HTMLDeckgoGifElement;
    new (): HTMLDeckgoGifElement;
  };

  interface HTMLDeckgoPagerElement extends Components.DeckgoPager, HTMLStencilElement {}
  var HTMLDeckgoPagerElement: {
    prototype: HTMLDeckgoPagerElement;
    new (): HTMLDeckgoPagerElement;
  };

  interface HTMLDeckgoSlideAuthorElement extends Components.DeckgoSlideAuthor, HTMLStencilElement {}
  var HTMLDeckgoSlideAuthorElement: {
    prototype: HTMLDeckgoSlideAuthorElement;
    new (): HTMLDeckgoSlideAuthorElement;
  };

  interface HTMLDeckgoSlideChartElement extends Components.DeckgoSlideChart, HTMLStencilElement {}
  var HTMLDeckgoSlideChartElement: {
    prototype: HTMLDeckgoSlideChartElement;
    new (): HTMLDeckgoSlideChartElement;
  };

  interface HTMLDeckgoSlideCodeElement extends Components.DeckgoSlideCode, HTMLStencilElement {}
  var HTMLDeckgoSlideCodeElement: {
    prototype: HTMLDeckgoSlideCodeElement;
    new (): HTMLDeckgoSlideCodeElement;
  };

  interface HTMLDeckgoSlideContentElement extends Components.DeckgoSlideContent, HTMLStencilElement {}
  var HTMLDeckgoSlideContentElement: {
    prototype: HTMLDeckgoSlideContentElement;
    new (): HTMLDeckgoSlideContentElement;
  };

  interface HTMLDeckgoSlideGifElement extends Components.DeckgoSlideGif, HTMLStencilElement {}
  var HTMLDeckgoSlideGifElement: {
    prototype: HTMLDeckgoSlideGifElement;
    new (): HTMLDeckgoSlideGifElement;
  };

  interface HTMLDeckgoSlideQrcodeElement extends Components.DeckgoSlideQrcode, HTMLStencilElement {}
  var HTMLDeckgoSlideQrcodeElement: {
    prototype: HTMLDeckgoSlideQrcodeElement;
    new (): HTMLDeckgoSlideQrcodeElement;
  };

  interface HTMLDeckgoSlideSplitElement extends Components.DeckgoSlideSplit, HTMLStencilElement {}
  var HTMLDeckgoSlideSplitElement: {
    prototype: HTMLDeckgoSlideSplitElement;
    new (): HTMLDeckgoSlideSplitElement;
  };

  interface HTMLDeckgoSlideTitleElement extends Components.DeckgoSlideTitle, HTMLStencilElement {}
  var HTMLDeckgoSlideTitleElement: {
    prototype: HTMLDeckgoSlideTitleElement;
    new (): HTMLDeckgoSlideTitleElement;
  };

  interface HTMLDeckgoSlideYoutubeElement extends Components.DeckgoSlideYoutube, HTMLStencilElement {}
  var HTMLDeckgoSlideYoutubeElement: {
    prototype: HTMLDeckgoSlideYoutubeElement;
    new (): HTMLDeckgoSlideYoutubeElement;
  };

  interface HTMLDeckgoSocialElement extends Components.DeckgoSocial, HTMLStencilElement {}
  var HTMLDeckgoSocialElement: {
    prototype: HTMLDeckgoSocialElement;
    new (): HTMLDeckgoSocialElement;
  };

  interface HTMLDeckgoYoutubeElement extends Components.DeckgoYoutube, HTMLStencilElement {}
  var HTMLDeckgoYoutubeElement: {
    prototype: HTMLDeckgoYoutubeElement;
    new (): HTMLDeckgoYoutubeElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-deck': HTMLDeckgoDeckElement;
    'deckgo-gif': HTMLDeckgoGifElement;
    'deckgo-pager': HTMLDeckgoPagerElement;
    'deckgo-slide-author': HTMLDeckgoSlideAuthorElement;
    'deckgo-slide-chart': HTMLDeckgoSlideChartElement;
    'deckgo-slide-code': HTMLDeckgoSlideCodeElement;
    'deckgo-slide-content': HTMLDeckgoSlideContentElement;
    'deckgo-slide-gif': HTMLDeckgoSlideGifElement;
    'deckgo-slide-qrcode': HTMLDeckgoSlideQrcodeElement;
    'deckgo-slide-split': HTMLDeckgoSlideSplitElement;
    'deckgo-slide-title': HTMLDeckgoSlideTitleElement;
    'deckgo-slide-youtube': HTMLDeckgoSlideYoutubeElement;
    'deckgo-social': HTMLDeckgoSocialElement;
    'deckgo-youtube': HTMLDeckgoYoutubeElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoDeck extends JSXBase.HTMLAttributes<HTMLDeckgoDeckElement> {
    'cloneBackground'?: boolean;
    'embedded'?: boolean;
    'keyboard'?: boolean;
    'onMouseInactivity'?: (event: CustomEvent<boolean>) => void;
    'onSlideDrag'?: (event: CustomEvent<number>) => void;
    'onSlideNextDidChange'?: (event: CustomEvent<number>) => void;
    'onSlidePrevDidChange'?: (event: CustomEvent<number>) => void;
    'onSlideToChange'?: (event: CustomEvent<number>) => void;
    'onSlideWillChange'?: (event: CustomEvent<number>) => void;
    'onSlidesDidLoad'?: (event: CustomEvent<any>) => void;
  }
  interface DeckgoGif extends JSXBase.HTMLAttributes<HTMLDeckgoGifElement> {
    'alt'?: string;
    'fullscreen'?: boolean;
    'onGifLoaded'?: (event: CustomEvent<boolean>) => void;
    'src'?: string;
  }
  interface DeckgoPager extends JSXBase.HTMLAttributes<HTMLDeckgoPagerElement> {
    'activeIndex'?: number;
    'length'?: number;
    'onPagerClick'?: (event: CustomEvent<void>) => void;
  }
  interface DeckgoSlideAuthor extends JSXBase.HTMLAttributes<HTMLDeckgoSlideAuthorElement> {
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'imgAlt'?: string;
    'imgSrc'?: string;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
  }
  interface DeckgoSlideChart extends JSXBase.HTMLAttributes<HTMLDeckgoSlideChartElement> {
    'animation'?: boolean;
    'animationDuration'?: number;
    'area'?: boolean;
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'datePattern'?: string;
    'grid'?: boolean;
    'height'?: number;
    'innerRadius'?: number;
    'marginBottom'?: number;
    'marginLeft'?: number;
    'marginRight'?: number;
    'marginTop'?: number;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'range'?: string[];
    'separator'?: string;
    'smooth'?: boolean;
    'src'?: string;
    'ticks'?: number;
    'type'?: string;
    'width'?: number;
    'yAxisDomain'?: string;
  }
  interface DeckgoSlideCode extends JSXBase.HTMLAttributes<HTMLDeckgoSlideCodeElement> {
    'anchor'?: string;
    'anchorZoom'?: string;
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'hideAnchor'?: boolean;
    'language'?: string;
    'onScrolling'?: (event: CustomEvent<boolean>) => void;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'src'?: string;
  }
  interface DeckgoSlideContent extends JSXBase.HTMLAttributes<HTMLDeckgoSlideContentElement> {
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }
  interface DeckgoSlideGif extends JSXBase.HTMLAttributes<HTMLDeckgoSlideGifElement> {
    'alt'?: string;
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'fullscreen'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'src'?: string;
  }
  interface DeckgoSlideQrcode extends JSXBase.HTMLAttributes<HTMLDeckgoSlideQrcodeElement> {
    'content'?: string;
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
  }
  interface DeckgoSlideSplit extends JSXBase.HTMLAttributes<HTMLDeckgoSlideSplitElement> {
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }
  interface DeckgoSlideTitle extends JSXBase.HTMLAttributes<HTMLDeckgoSlideTitleElement> {
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }
  interface DeckgoSlideYoutube extends JSXBase.HTMLAttributes<HTMLDeckgoSlideYoutubeElement> {
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'height'?: number;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'src'?: string;
    'width'?: number;
  }
  interface DeckgoSocial extends JSXBase.HTMLAttributes<HTMLDeckgoSocialElement> {
    'fullUrl'?: string;
    'github'?: string;
    'linkedin'?: string;
    'medium'?: string;
    'twitter'?: string;
  }
  interface DeckgoYoutube extends JSXBase.HTMLAttributes<HTMLDeckgoYoutubeElement> {
    'frameTitle'?: string;
    'height'?: number;
    'src'?: string;
    'width'?: number;
  }

  interface IntrinsicElements {
    'deckgo-deck': DeckgoDeck;
    'deckgo-gif': DeckgoGif;
    'deckgo-pager': DeckgoPager;
    'deckgo-slide-author': DeckgoSlideAuthor;
    'deckgo-slide-chart': DeckgoSlideChart;
    'deckgo-slide-code': DeckgoSlideCode;
    'deckgo-slide-content': DeckgoSlideContent;
    'deckgo-slide-gif': DeckgoSlideGif;
    'deckgo-slide-qrcode': DeckgoSlideQrcode;
    'deckgo-slide-split': DeckgoSlideSplit;
    'deckgo-slide-title': DeckgoSlideTitle;
    'deckgo-slide-youtube': DeckgoSlideYoutube;
    'deckgo-social': DeckgoSocial;
    'deckgo-youtube': DeckgoYoutube;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


