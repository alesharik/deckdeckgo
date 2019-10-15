/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  EventEmitter,
  JSX,
} from '@stencil/core';
import {
  Deck,
} from './app/models/data/deck';
import {
  EditAction,
} from './app/utils/editor/edit-action';
import {
  TargetElement,
} from './app/utils/editor/target-element';
import {
  MoreAction,
} from './app/utils/editor/more-action';
import {
  ItemReorderEventDetail,
} from '@ionic/core';

export namespace Components {
  interface AppAbout {}
  interface AppAddSlideAction {}
  interface AppAvatar {
    'ariaLabel': string;
    'src': string;
  }
  interface AppCode {
    'codeDidChange': EventEmitter<HTMLElement>;
    'selectedElement': HTMLElement;
  }
  interface AppColor {
    'deckOrSlide': boolean;
    'selectedElement': HTMLElement;
  }
  interface AppContact {}
  interface AppCreateSlide {}
  interface AppCustomData {}
  interface AppCustomImages {}
  interface AppDashboard {}
  interface AppDeckDelete {
    'deckName': string;
    'published': string;
  }
  interface AppDeleteDeckAction {
    'deck': Deck;
  }
  interface AppDeveloper {}
  interface AppEditSlide {
    'chart': boolean;
    'qrCode': boolean;
    'selectedElement': HTMLElement;
    'slideDidChange': EventEmitter<HTMLElement>;
  }
  interface AppEditSlideChart {
    'selectedElement': HTMLElement;
    'slideDidChange': EventEmitter<HTMLElement>;
  }
  interface AppEditSlideQrcode {
    'qrCode': boolean;
    'selectedElement': HTMLElement;
    'slideDidChange': EventEmitter<HTMLElement>;
  }
  interface AppEditor {
    'deckId': string;
  }
  interface AppEditorActions {
    'fullscreen': boolean;
    'hideFooterActions': boolean;
    'slides': JSX.IntrinsicElements[];
  }
  interface AppEditorToolbar {
    'blurSelectedElement': () => Promise<void>;
    'hideToolbar': () => Promise<void>;
    'touch': (element: HTMLElement) => Promise<void>;
    'unSelect': () => Promise<void>;
  }
  interface AppFaq {}
  interface AppFeed {}
  interface AppFeedCard {
    'compact': boolean;
    'deck': Deck;
  }
  interface AppFeedCardTags {
    'disableRemove': boolean;
    'editable': boolean;
    'tags': string[];
  }
  interface AppFooter {}
  interface AppFullscreenInfo {}
  interface AppGetHelp {}
  interface AppGif {}
  interface AppHelpAction {}
  interface AppHome {}
  interface AppImage {
    'deckOrSlide': boolean;
    'imgDidChange': EventEmitter<HTMLElement>;
    'selectedElement': HTMLElement;
  }
  interface AppImageColumns {
    'imagesEven': (UnsplashPhoto | TenorGif | StorageFile)[];
    'imagesOdd': (UnsplashPhoto | TenorGif | StorageFile)[];
  }
  interface AppLogo {}
  interface AppMenu {}
  interface AppMoreActions {}
  interface AppMoreShareOptions {}
  interface AppNavigation {
    'menuToggle': boolean;
    'presentation': boolean;
    'publish': boolean;
    'user': boolean;
  }
  interface AppNavigationActions {
    'presentation': boolean;
    'publish': boolean;
    'signIn': boolean;
  }
  interface AppNewsletter {}
  interface AppOpensource {}
  interface AppPhoto {}
  interface AppPopular {
    'description': boolean;
    'help': boolean;
  }
  interface AppPress {}
  interface AppPrivacy {}
  interface AppPublish {}
  interface AppPublishDone {
    'publishedUrl': string;
  }
  interface AppPublishEdit {}
  interface AppRemote {}
  interface AppReveal {
    'selectedElement': HTMLElement;
  }
  interface AppRoot {}
  interface AppSelectTargetElement {
    'deckOrSlide': boolean;
    'qrCode': boolean;
  }
  interface AppServices {}
  interface AppSettings {}
  interface AppShareAction {}
  interface AppShareDeck {
    'openShare': () => Promise<void>;
  }
  interface AppShareOptions {}
  interface AppSignin {
    'redirect': string;
    'redirectId': string;
  }
  interface AppSlideNavigate {}
  interface AppSlotType {
    'selectedElement': HTMLElement;
  }
  interface AppTeam {}
  interface AppTerms {}
  interface AppUserDelete {
    'username': string;
  }
  interface AppUserInfo {
    'avatarColSize': number;
  }
  interface AppUserMenu {}
  interface AppYoutube {
    'selectedElement': HTMLElement;
  }
}

declare global {


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppAddSlideActionElement extends Components.AppAddSlideAction, HTMLStencilElement {}
  var HTMLAppAddSlideActionElement: {
    prototype: HTMLAppAddSlideActionElement;
    new (): HTMLAppAddSlideActionElement;
  };

  interface HTMLAppAvatarElement extends Components.AppAvatar, HTMLStencilElement {}
  var HTMLAppAvatarElement: {
    prototype: HTMLAppAvatarElement;
    new (): HTMLAppAvatarElement;
  };

  interface HTMLAppCodeElement extends Components.AppCode, HTMLStencilElement {}
  var HTMLAppCodeElement: {
    prototype: HTMLAppCodeElement;
    new (): HTMLAppCodeElement;
  };

  interface HTMLAppColorElement extends Components.AppColor, HTMLStencilElement {}
  var HTMLAppColorElement: {
    prototype: HTMLAppColorElement;
    new (): HTMLAppColorElement;
  };

  interface HTMLAppContactElement extends Components.AppContact, HTMLStencilElement {}
  var HTMLAppContactElement: {
    prototype: HTMLAppContactElement;
    new (): HTMLAppContactElement;
  };

  interface HTMLAppCreateSlideElement extends Components.AppCreateSlide, HTMLStencilElement {}
  var HTMLAppCreateSlideElement: {
    prototype: HTMLAppCreateSlideElement;
    new (): HTMLAppCreateSlideElement;
  };

  interface HTMLAppCustomDataElement extends Components.AppCustomData, HTMLStencilElement {}
  var HTMLAppCustomDataElement: {
    prototype: HTMLAppCustomDataElement;
    new (): HTMLAppCustomDataElement;
  };

  interface HTMLAppCustomImagesElement extends Components.AppCustomImages, HTMLStencilElement {}
  var HTMLAppCustomImagesElement: {
    prototype: HTMLAppCustomImagesElement;
    new (): HTMLAppCustomImagesElement;
  };

  interface HTMLAppDashboardElement extends Components.AppDashboard, HTMLStencilElement {}
  var HTMLAppDashboardElement: {
    prototype: HTMLAppDashboardElement;
    new (): HTMLAppDashboardElement;
  };

  interface HTMLAppDeckDeleteElement extends Components.AppDeckDelete, HTMLStencilElement {}
  var HTMLAppDeckDeleteElement: {
    prototype: HTMLAppDeckDeleteElement;
    new (): HTMLAppDeckDeleteElement;
  };

  interface HTMLAppDeleteDeckActionElement extends Components.AppDeleteDeckAction, HTMLStencilElement {}
  var HTMLAppDeleteDeckActionElement: {
    prototype: HTMLAppDeleteDeckActionElement;
    new (): HTMLAppDeleteDeckActionElement;
  };

  interface HTMLAppDeveloperElement extends Components.AppDeveloper, HTMLStencilElement {}
  var HTMLAppDeveloperElement: {
    prototype: HTMLAppDeveloperElement;
    new (): HTMLAppDeveloperElement;
  };

  interface HTMLAppEditSlideElement extends Components.AppEditSlide, HTMLStencilElement {}
  var HTMLAppEditSlideElement: {
    prototype: HTMLAppEditSlideElement;
    new (): HTMLAppEditSlideElement;
  };

  interface HTMLAppEditSlideChartElement extends Components.AppEditSlideChart, HTMLStencilElement {}
  var HTMLAppEditSlideChartElement: {
    prototype: HTMLAppEditSlideChartElement;
    new (): HTMLAppEditSlideChartElement;
  };

  interface HTMLAppEditSlideQrcodeElement extends Components.AppEditSlideQrcode, HTMLStencilElement {}
  var HTMLAppEditSlideQrcodeElement: {
    prototype: HTMLAppEditSlideQrcodeElement;
    new (): HTMLAppEditSlideQrcodeElement;
  };

  interface HTMLAppEditorElement extends Components.AppEditor, HTMLStencilElement {}
  var HTMLAppEditorElement: {
    prototype: HTMLAppEditorElement;
    new (): HTMLAppEditorElement;
  };

  interface HTMLAppEditorActionsElement extends Components.AppEditorActions, HTMLStencilElement {}
  var HTMLAppEditorActionsElement: {
    prototype: HTMLAppEditorActionsElement;
    new (): HTMLAppEditorActionsElement;
  };

  interface HTMLAppEditorToolbarElement extends Components.AppEditorToolbar, HTMLStencilElement {}
  var HTMLAppEditorToolbarElement: {
    prototype: HTMLAppEditorToolbarElement;
    new (): HTMLAppEditorToolbarElement;
  };

  interface HTMLAppFaqElement extends Components.AppFaq, HTMLStencilElement {}
  var HTMLAppFaqElement: {
    prototype: HTMLAppFaqElement;
    new (): HTMLAppFaqElement;
  };

  interface HTMLAppFeedElement extends Components.AppFeed, HTMLStencilElement {}
  var HTMLAppFeedElement: {
    prototype: HTMLAppFeedElement;
    new (): HTMLAppFeedElement;
  };

  interface HTMLAppFeedCardElement extends Components.AppFeedCard, HTMLStencilElement {}
  var HTMLAppFeedCardElement: {
    prototype: HTMLAppFeedCardElement;
    new (): HTMLAppFeedCardElement;
  };

  interface HTMLAppFeedCardTagsElement extends Components.AppFeedCardTags, HTMLStencilElement {}
  var HTMLAppFeedCardTagsElement: {
    prototype: HTMLAppFeedCardTagsElement;
    new (): HTMLAppFeedCardTagsElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppFullscreenInfoElement extends Components.AppFullscreenInfo, HTMLStencilElement {}
  var HTMLAppFullscreenInfoElement: {
    prototype: HTMLAppFullscreenInfoElement;
    new (): HTMLAppFullscreenInfoElement;
  };

  interface HTMLAppGetHelpElement extends Components.AppGetHelp, HTMLStencilElement {}
  var HTMLAppGetHelpElement: {
    prototype: HTMLAppGetHelpElement;
    new (): HTMLAppGetHelpElement;
  };

  interface HTMLAppGifElement extends Components.AppGif, HTMLStencilElement {}
  var HTMLAppGifElement: {
    prototype: HTMLAppGifElement;
    new (): HTMLAppGifElement;
  };

  interface HTMLAppHelpActionElement extends Components.AppHelpAction, HTMLStencilElement {}
  var HTMLAppHelpActionElement: {
    prototype: HTMLAppHelpActionElement;
    new (): HTMLAppHelpActionElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppImageElement extends Components.AppImage, HTMLStencilElement {}
  var HTMLAppImageElement: {
    prototype: HTMLAppImageElement;
    new (): HTMLAppImageElement;
  };

  interface HTMLAppImageColumnsElement extends Components.AppImageColumns, HTMLStencilElement {}
  var HTMLAppImageColumnsElement: {
    prototype: HTMLAppImageColumnsElement;
    new (): HTMLAppImageColumnsElement;
  };

  interface HTMLAppLogoElement extends Components.AppLogo, HTMLStencilElement {}
  var HTMLAppLogoElement: {
    prototype: HTMLAppLogoElement;
    new (): HTMLAppLogoElement;
  };

  interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {}
  var HTMLAppMenuElement: {
    prototype: HTMLAppMenuElement;
    new (): HTMLAppMenuElement;
  };

  interface HTMLAppMoreActionsElement extends Components.AppMoreActions, HTMLStencilElement {}
  var HTMLAppMoreActionsElement: {
    prototype: HTMLAppMoreActionsElement;
    new (): HTMLAppMoreActionsElement;
  };

  interface HTMLAppMoreShareOptionsElement extends Components.AppMoreShareOptions, HTMLStencilElement {}
  var HTMLAppMoreShareOptionsElement: {
    prototype: HTMLAppMoreShareOptionsElement;
    new (): HTMLAppMoreShareOptionsElement;
  };

  interface HTMLAppNavigationElement extends Components.AppNavigation, HTMLStencilElement {}
  var HTMLAppNavigationElement: {
    prototype: HTMLAppNavigationElement;
    new (): HTMLAppNavigationElement;
  };

  interface HTMLAppNavigationActionsElement extends Components.AppNavigationActions, HTMLStencilElement {}
  var HTMLAppNavigationActionsElement: {
    prototype: HTMLAppNavigationActionsElement;
    new (): HTMLAppNavigationActionsElement;
  };

  interface HTMLAppNewsletterElement extends Components.AppNewsletter, HTMLStencilElement {}
  var HTMLAppNewsletterElement: {
    prototype: HTMLAppNewsletterElement;
    new (): HTMLAppNewsletterElement;
  };

  interface HTMLAppOpensourceElement extends Components.AppOpensource, HTMLStencilElement {}
  var HTMLAppOpensourceElement: {
    prototype: HTMLAppOpensourceElement;
    new (): HTMLAppOpensourceElement;
  };

  interface HTMLAppPhotoElement extends Components.AppPhoto, HTMLStencilElement {}
  var HTMLAppPhotoElement: {
    prototype: HTMLAppPhotoElement;
    new (): HTMLAppPhotoElement;
  };

  interface HTMLAppPopularElement extends Components.AppPopular, HTMLStencilElement {}
  var HTMLAppPopularElement: {
    prototype: HTMLAppPopularElement;
    new (): HTMLAppPopularElement;
  };

  interface HTMLAppPressElement extends Components.AppPress, HTMLStencilElement {}
  var HTMLAppPressElement: {
    prototype: HTMLAppPressElement;
    new (): HTMLAppPressElement;
  };

  interface HTMLAppPrivacyElement extends Components.AppPrivacy, HTMLStencilElement {}
  var HTMLAppPrivacyElement: {
    prototype: HTMLAppPrivacyElement;
    new (): HTMLAppPrivacyElement;
  };

  interface HTMLAppPublishElement extends Components.AppPublish, HTMLStencilElement {}
  var HTMLAppPublishElement: {
    prototype: HTMLAppPublishElement;
    new (): HTMLAppPublishElement;
  };

  interface HTMLAppPublishDoneElement extends Components.AppPublishDone, HTMLStencilElement {}
  var HTMLAppPublishDoneElement: {
    prototype: HTMLAppPublishDoneElement;
    new (): HTMLAppPublishDoneElement;
  };

  interface HTMLAppPublishEditElement extends Components.AppPublishEdit, HTMLStencilElement {}
  var HTMLAppPublishEditElement: {
    prototype: HTMLAppPublishEditElement;
    new (): HTMLAppPublishEditElement;
  };

  interface HTMLAppRemoteElement extends Components.AppRemote, HTMLStencilElement {}
  var HTMLAppRemoteElement: {
    prototype: HTMLAppRemoteElement;
    new (): HTMLAppRemoteElement;
  };

  interface HTMLAppRevealElement extends Components.AppReveal, HTMLStencilElement {}
  var HTMLAppRevealElement: {
    prototype: HTMLAppRevealElement;
    new (): HTMLAppRevealElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSelectTargetElementElement extends Components.AppSelectTargetElement, HTMLStencilElement {}
  var HTMLAppSelectTargetElementElement: {
    prototype: HTMLAppSelectTargetElementElement;
    new (): HTMLAppSelectTargetElementElement;
  };

  interface HTMLAppServicesElement extends Components.AppServices, HTMLStencilElement {}
  var HTMLAppServicesElement: {
    prototype: HTMLAppServicesElement;
    new (): HTMLAppServicesElement;
  };

  interface HTMLAppSettingsElement extends Components.AppSettings, HTMLStencilElement {}
  var HTMLAppSettingsElement: {
    prototype: HTMLAppSettingsElement;
    new (): HTMLAppSettingsElement;
  };

  interface HTMLAppShareActionElement extends Components.AppShareAction, HTMLStencilElement {}
  var HTMLAppShareActionElement: {
    prototype: HTMLAppShareActionElement;
    new (): HTMLAppShareActionElement;
  };

  interface HTMLAppShareDeckElement extends Components.AppShareDeck, HTMLStencilElement {}
  var HTMLAppShareDeckElement: {
    prototype: HTMLAppShareDeckElement;
    new (): HTMLAppShareDeckElement;
  };

  interface HTMLAppShareOptionsElement extends Components.AppShareOptions, HTMLStencilElement {}
  var HTMLAppShareOptionsElement: {
    prototype: HTMLAppShareOptionsElement;
    new (): HTMLAppShareOptionsElement;
  };

  interface HTMLAppSigninElement extends Components.AppSignin, HTMLStencilElement {}
  var HTMLAppSigninElement: {
    prototype: HTMLAppSigninElement;
    new (): HTMLAppSigninElement;
  };

  interface HTMLAppSlideNavigateElement extends Components.AppSlideNavigate, HTMLStencilElement {}
  var HTMLAppSlideNavigateElement: {
    prototype: HTMLAppSlideNavigateElement;
    new (): HTMLAppSlideNavigateElement;
  };

  interface HTMLAppSlotTypeElement extends Components.AppSlotType, HTMLStencilElement {}
  var HTMLAppSlotTypeElement: {
    prototype: HTMLAppSlotTypeElement;
    new (): HTMLAppSlotTypeElement;
  };

  interface HTMLAppTeamElement extends Components.AppTeam, HTMLStencilElement {}
  var HTMLAppTeamElement: {
    prototype: HTMLAppTeamElement;
    new (): HTMLAppTeamElement;
  };

  interface HTMLAppTermsElement extends Components.AppTerms, HTMLStencilElement {}
  var HTMLAppTermsElement: {
    prototype: HTMLAppTermsElement;
    new (): HTMLAppTermsElement;
  };

  interface HTMLAppUserDeleteElement extends Components.AppUserDelete, HTMLStencilElement {}
  var HTMLAppUserDeleteElement: {
    prototype: HTMLAppUserDeleteElement;
    new (): HTMLAppUserDeleteElement;
  };

  interface HTMLAppUserInfoElement extends Components.AppUserInfo, HTMLStencilElement {}
  var HTMLAppUserInfoElement: {
    prototype: HTMLAppUserInfoElement;
    new (): HTMLAppUserInfoElement;
  };

  interface HTMLAppUserMenuElement extends Components.AppUserMenu, HTMLStencilElement {}
  var HTMLAppUserMenuElement: {
    prototype: HTMLAppUserMenuElement;
    new (): HTMLAppUserMenuElement;
  };

  interface HTMLAppYoutubeElement extends Components.AppYoutube, HTMLStencilElement {}
  var HTMLAppYoutubeElement: {
    prototype: HTMLAppYoutubeElement;
    new (): HTMLAppYoutubeElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-add-slide-action': HTMLAppAddSlideActionElement;
    'app-avatar': HTMLAppAvatarElement;
    'app-code': HTMLAppCodeElement;
    'app-color': HTMLAppColorElement;
    'app-contact': HTMLAppContactElement;
    'app-create-slide': HTMLAppCreateSlideElement;
    'app-custom-data': HTMLAppCustomDataElement;
    'app-custom-images': HTMLAppCustomImagesElement;
    'app-dashboard': HTMLAppDashboardElement;
    'app-deck-delete': HTMLAppDeckDeleteElement;
    'app-delete-deck-action': HTMLAppDeleteDeckActionElement;
    'app-developer': HTMLAppDeveloperElement;
    'app-edit-slide': HTMLAppEditSlideElement;
    'app-edit-slide-chart': HTMLAppEditSlideChartElement;
    'app-edit-slide-qrcode': HTMLAppEditSlideQrcodeElement;
    'app-editor': HTMLAppEditorElement;
    'app-editor-actions': HTMLAppEditorActionsElement;
    'app-editor-toolbar': HTMLAppEditorToolbarElement;
    'app-faq': HTMLAppFaqElement;
    'app-feed': HTMLAppFeedElement;
    'app-feed-card': HTMLAppFeedCardElement;
    'app-feed-card-tags': HTMLAppFeedCardTagsElement;
    'app-footer': HTMLAppFooterElement;
    'app-fullscreen-info': HTMLAppFullscreenInfoElement;
    'app-get-help': HTMLAppGetHelpElement;
    'app-gif': HTMLAppGifElement;
    'app-help-action': HTMLAppHelpActionElement;
    'app-home': HTMLAppHomeElement;
    'app-image': HTMLAppImageElement;
    'app-image-columns': HTMLAppImageColumnsElement;
    'app-logo': HTMLAppLogoElement;
    'app-menu': HTMLAppMenuElement;
    'app-more-actions': HTMLAppMoreActionsElement;
    'app-more-share-options': HTMLAppMoreShareOptionsElement;
    'app-navigation': HTMLAppNavigationElement;
    'app-navigation-actions': HTMLAppNavigationActionsElement;
    'app-newsletter': HTMLAppNewsletterElement;
    'app-opensource': HTMLAppOpensourceElement;
    'app-photo': HTMLAppPhotoElement;
    'app-popular': HTMLAppPopularElement;
    'app-press': HTMLAppPressElement;
    'app-privacy': HTMLAppPrivacyElement;
    'app-publish': HTMLAppPublishElement;
    'app-publish-done': HTMLAppPublishDoneElement;
    'app-publish-edit': HTMLAppPublishEditElement;
    'app-remote': HTMLAppRemoteElement;
    'app-reveal': HTMLAppRevealElement;
    'app-root': HTMLAppRootElement;
    'app-select-target-element': HTMLAppSelectTargetElementElement;
    'app-services': HTMLAppServicesElement;
    'app-settings': HTMLAppSettingsElement;
    'app-share-action': HTMLAppShareActionElement;
    'app-share-deck': HTMLAppShareDeckElement;
    'app-share-options': HTMLAppShareOptionsElement;
    'app-signin': HTMLAppSigninElement;
    'app-slide-navigate': HTMLAppSlideNavigateElement;
    'app-slot-type': HTMLAppSlotTypeElement;
    'app-team': HTMLAppTeamElement;
    'app-terms': HTMLAppTermsElement;
    'app-user-delete': HTMLAppUserDeleteElement;
    'app-user-info': HTMLAppUserInfoElement;
    'app-user-menu': HTMLAppUserMenuElement;
    'app-youtube': HTMLAppYoutubeElement;
  }
}

declare namespace LocalJSX {
  interface AppAbout extends JSXBase.HTMLAttributes<HTMLAppAboutElement> {}
  interface AppAddSlideAction extends JSXBase.HTMLAttributes<HTMLAppAddSlideActionElement> {
    'onActionOpenSlideAdd'?: (event: CustomEvent<UIEvent>) => void;
  }
  interface AppAvatar extends JSXBase.HTMLAttributes<HTMLAppAvatarElement> {
    'ariaLabel'?: string;
    'src'?: string;
  }
  interface AppCode extends JSXBase.HTMLAttributes<HTMLAppCodeElement> {
    'codeDidChange'?: EventEmitter<HTMLElement>;
    'selectedElement'?: HTMLElement;
  }
  interface AppColor extends JSXBase.HTMLAttributes<HTMLAppColorElement> {
    'deckOrSlide'?: boolean;
    'onColorDidChange'?: (event: CustomEvent<boolean>) => void;
    'selectedElement'?: HTMLElement;
  }
  interface AppContact extends JSXBase.HTMLAttributes<HTMLAppContactElement> {}
  interface AppCreateSlide extends JSXBase.HTMLAttributes<HTMLAppCreateSlideElement> {
    'onSignIn'?: (event: CustomEvent<void>) => void;
  }
  interface AppCustomData extends JSXBase.HTMLAttributes<HTMLAppCustomDataElement> {}
  interface AppCustomImages extends JSXBase.HTMLAttributes<HTMLAppCustomImagesElement> {}
  interface AppDashboard extends JSXBase.HTMLAttributes<HTMLAppDashboardElement> {}
  interface AppDeckDelete extends JSXBase.HTMLAttributes<HTMLAppDeckDeleteElement> {
    'deckName'?: string;
    'published'?: string;
  }
  interface AppDeleteDeckAction extends JSXBase.HTMLAttributes<HTMLAppDeleteDeckActionElement> {
    'deck'?: Deck;
    'onDeckDeleted'?: (event: CustomEvent<string>) => void;
  }
  interface AppDeveloper extends JSXBase.HTMLAttributes<HTMLAppDeveloperElement> {}
  interface AppEditSlide extends JSXBase.HTMLAttributes<HTMLAppEditSlideElement> {
    'chart'?: boolean;
    'qrCode'?: boolean;
    'selectedElement'?: HTMLElement;
    'slideDidChange'?: EventEmitter<HTMLElement>;
  }
  interface AppEditSlideChart extends JSXBase.HTMLAttributes<HTMLAppEditSlideChartElement> {
    'selectedElement'?: HTMLElement;
    'slideDidChange'?: EventEmitter<HTMLElement>;
  }
  interface AppEditSlideQrcode extends JSXBase.HTMLAttributes<HTMLAppEditSlideQrcodeElement> {
    'onAction'?: (event: CustomEvent<EditAction>) => void;
    'qrCode'?: boolean;
    'selectedElement'?: HTMLElement;
    'slideDidChange'?: EventEmitter<HTMLElement>;
  }
  interface AppEditor extends JSXBase.HTMLAttributes<HTMLAppEditorElement> {
    'deckId'?: string;
  }
  interface AppEditorActions extends JSXBase.HTMLAttributes<HTMLAppEditorActionsElement> {
    'fullscreen'?: boolean;
    'hideFooterActions'?: boolean;
    'onActionPublish'?: (event: CustomEvent<void>) => void;
    'onAddSlide'?: (event: CustomEvent<JSX.IntrinsicElements>) => void;
    'onAnimatePrevNextSlide'?: (event: CustomEvent<boolean>) => void;
    'onOpenShare'?: (event: CustomEvent<void>) => void;
    'onSignIn'?: (event: CustomEvent<void>) => void;
    'onSlideTo'?: (event: CustomEvent<number>) => void;
    'onToggleFullScreen'?: (event: CustomEvent<void>) => void;
    'slides'?: JSX.IntrinsicElements[];
  }
  interface AppEditorToolbar extends JSXBase.HTMLAttributes<HTMLAppEditorToolbarElement> {
    'onBlockSlide'?: (event: CustomEvent<boolean>) => void;
    'onCodeDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onDeckDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onImgDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onSignIn'?: (event: CustomEvent<void>) => void;
    'onSlideCopy'?: (event: CustomEvent<HTMLElement>) => void;
    'onSlideDelete'?: (event: CustomEvent<HTMLElement>) => void;
    'onSlideDidChange'?: (event: CustomEvent<HTMLElement>) => void;
  }
  interface AppFaq extends JSXBase.HTMLAttributes<HTMLAppFaqElement> {}
  interface AppFeed extends JSXBase.HTMLAttributes<HTMLAppFeedElement> {}
  interface AppFeedCard extends JSXBase.HTMLAttributes<HTMLAppFeedCardElement> {
    'compact'?: boolean;
    'deck'?: Deck;
  }
  interface AppFeedCardTags extends JSXBase.HTMLAttributes<HTMLAppFeedCardTagsElement> {
    'disableRemove'?: boolean;
    'editable'?: boolean;
    'onRemoveTag'?: (event: CustomEvent<string>) => void;
    'tags'?: string[];
  }
  interface AppFooter extends JSXBase.HTMLAttributes<HTMLAppFooterElement> {}
  interface AppFullscreenInfo extends JSXBase.HTMLAttributes<HTMLAppFullscreenInfoElement> {}
  interface AppGetHelp extends JSXBase.HTMLAttributes<HTMLAppGetHelpElement> {}
  interface AppGif extends JSXBase.HTMLAttributes<HTMLAppGifElement> {}
  interface AppHelpAction extends JSXBase.HTMLAttributes<HTMLAppHelpActionElement> {}
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppImage extends JSXBase.HTMLAttributes<HTMLAppImageElement> {
    'deckOrSlide'?: boolean;
    'imgDidChange'?: EventEmitter<HTMLElement>;
    'selectedElement'?: HTMLElement;
  }
  interface AppImageColumns extends JSXBase.HTMLAttributes<HTMLAppImageColumnsElement> {
    'imagesEven'?: (UnsplashPhoto | TenorGif | StorageFile)[];
    'imagesOdd'?: (UnsplashPhoto | TenorGif | StorageFile)[];
    'onSelectImage'?: (event: CustomEvent<UnsplashPhoto | TenorGif | StorageFile>) => void;
  }
  interface AppLogo extends JSXBase.HTMLAttributes<HTMLAppLogoElement> {}
  interface AppMenu extends JSXBase.HTMLAttributes<HTMLAppMenuElement> {}
  interface AppMoreActions extends JSXBase.HTMLAttributes<HTMLAppMoreActionsElement> {}
  interface AppMoreShareOptions extends JSXBase.HTMLAttributes<HTMLAppMoreShareOptionsElement> {}
  interface AppNavigation extends JSXBase.HTMLAttributes<HTMLAppNavigationElement> {
    'menuToggle'?: boolean;
    'presentation'?: boolean;
    'publish'?: boolean;
    'user'?: boolean;
  }
  interface AppNavigationActions extends JSXBase.HTMLAttributes<HTMLAppNavigationActionsElement> {
    'onActionPublish'?: (event: CustomEvent<void>) => void;
    'presentation'?: boolean;
    'publish'?: boolean;
    'signIn'?: boolean;
  }
  interface AppNewsletter extends JSXBase.HTMLAttributes<HTMLAppNewsletterElement> {}
  interface AppOpensource extends JSXBase.HTMLAttributes<HTMLAppOpensourceElement> {}
  interface AppPhoto extends JSXBase.HTMLAttributes<HTMLAppPhotoElement> {}
  interface AppPopular extends JSXBase.HTMLAttributes<HTMLAppPopularElement> {
    'description'?: boolean;
    'help'?: boolean;
  }
  interface AppPress extends JSXBase.HTMLAttributes<HTMLAppPressElement> {}
  interface AppPrivacy extends JSXBase.HTMLAttributes<HTMLAppPrivacyElement> {}
  interface AppPublish extends JSXBase.HTMLAttributes<HTMLAppPublishElement> {}
  interface AppPublishDone extends JSXBase.HTMLAttributes<HTMLAppPublishDoneElement> {
    'onOpenShare'?: (event: CustomEvent<void>) => void;
    'publishedUrl'?: string;
  }
  interface AppPublishEdit extends JSXBase.HTMLAttributes<HTMLAppPublishEditElement> {
    'onPublished'?: (event: CustomEvent<string>) => void;
  }
  interface AppRemote extends JSXBase.HTMLAttributes<HTMLAppRemoteElement> {}
  interface AppReveal extends JSXBase.HTMLAttributes<HTMLAppRevealElement> {
    'selectedElement'?: HTMLElement;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AppSelectTargetElement extends JSXBase.HTMLAttributes<HTMLAppSelectTargetElementElement> {
    'deckOrSlide'?: boolean;
    'onApplyTo'?: (event: CustomEvent<TargetElement>) => void;
    'qrCode'?: boolean;
  }
  interface AppServices extends JSXBase.HTMLAttributes<HTMLAppServicesElement> {}
  interface AppSettings extends JSXBase.HTMLAttributes<HTMLAppSettingsElement> {}
  interface AppShareAction extends JSXBase.HTMLAttributes<HTMLAppShareActionElement> {
    'onActionPublish'?: (event: CustomEvent<void>) => void;
    'onOpenShare'?: (event: CustomEvent<void>) => void;
  }
  interface AppShareDeck extends JSXBase.HTMLAttributes<HTMLAppShareDeckElement> {}
  interface AppShareOptions extends JSXBase.HTMLAttributes<HTMLAppShareOptionsElement> {
    'onSelectedOption'?: (event: CustomEvent<MoreAction>) => void;
  }
  interface AppSignin extends JSXBase.HTMLAttributes<HTMLAppSigninElement> {
    'redirect'?: string;
    'redirectId'?: string;
  }
  interface AppSlideNavigate extends JSXBase.HTMLAttributes<HTMLAppSlideNavigateElement> {
    'onReorder'?: (event: CustomEvent<ItemReorderEventDetail>) => void;
  }
  interface AppSlotType extends JSXBase.HTMLAttributes<HTMLAppSlotTypeElement> {
    'selectedElement'?: HTMLElement;
  }
  interface AppTeam extends JSXBase.HTMLAttributes<HTMLAppTeamElement> {}
  interface AppTerms extends JSXBase.HTMLAttributes<HTMLAppTermsElement> {}
  interface AppUserDelete extends JSXBase.HTMLAttributes<HTMLAppUserDeleteElement> {
    'username'?: string;
  }
  interface AppUserInfo extends JSXBase.HTMLAttributes<HTMLAppUserInfoElement> {
    'avatarColSize'?: number;
  }
  interface AppUserMenu extends JSXBase.HTMLAttributes<HTMLAppUserMenuElement> {}
  interface AppYoutube extends JSXBase.HTMLAttributes<HTMLAppYoutubeElement> {
    'selectedElement'?: HTMLElement;
  }

  interface IntrinsicElements {
    'app-about': AppAbout;
    'app-add-slide-action': AppAddSlideAction;
    'app-avatar': AppAvatar;
    'app-code': AppCode;
    'app-color': AppColor;
    'app-contact': AppContact;
    'app-create-slide': AppCreateSlide;
    'app-custom-data': AppCustomData;
    'app-custom-images': AppCustomImages;
    'app-dashboard': AppDashboard;
    'app-deck-delete': AppDeckDelete;
    'app-delete-deck-action': AppDeleteDeckAction;
    'app-developer': AppDeveloper;
    'app-edit-slide': AppEditSlide;
    'app-edit-slide-chart': AppEditSlideChart;
    'app-edit-slide-qrcode': AppEditSlideQrcode;
    'app-editor': AppEditor;
    'app-editor-actions': AppEditorActions;
    'app-editor-toolbar': AppEditorToolbar;
    'app-faq': AppFaq;
    'app-feed': AppFeed;
    'app-feed-card': AppFeedCard;
    'app-feed-card-tags': AppFeedCardTags;
    'app-footer': AppFooter;
    'app-fullscreen-info': AppFullscreenInfo;
    'app-get-help': AppGetHelp;
    'app-gif': AppGif;
    'app-help-action': AppHelpAction;
    'app-home': AppHome;
    'app-image': AppImage;
    'app-image-columns': AppImageColumns;
    'app-logo': AppLogo;
    'app-menu': AppMenu;
    'app-more-actions': AppMoreActions;
    'app-more-share-options': AppMoreShareOptions;
    'app-navigation': AppNavigation;
    'app-navigation-actions': AppNavigationActions;
    'app-newsletter': AppNewsletter;
    'app-opensource': AppOpensource;
    'app-photo': AppPhoto;
    'app-popular': AppPopular;
    'app-press': AppPress;
    'app-privacy': AppPrivacy;
    'app-publish': AppPublish;
    'app-publish-done': AppPublishDone;
    'app-publish-edit': AppPublishEdit;
    'app-remote': AppRemote;
    'app-reveal': AppReveal;
    'app-root': AppRoot;
    'app-select-target-element': AppSelectTargetElement;
    'app-services': AppServices;
    'app-settings': AppSettings;
    'app-share-action': AppShareAction;
    'app-share-deck': AppShareDeck;
    'app-share-options': AppShareOptions;
    'app-signin': AppSignin;
    'app-slide-navigate': AppSlideNavigate;
    'app-slot-type': AppSlotType;
    'app-team': AppTeam;
    'app-terms': AppTerms;
    'app-user-delete': AppUserDelete;
    'app-user-info': AppUserInfo;
    'app-user-menu': AppUserMenu;
    'app-youtube': AppYoutube;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


