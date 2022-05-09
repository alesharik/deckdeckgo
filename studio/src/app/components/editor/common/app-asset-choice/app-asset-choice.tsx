import {StorageFile, TenorGif, UnsplashPhoto, Waves} from '@deckdeckgo/editor';
import {Fragment, FunctionalComponent, h} from '@stencil/core';
import i18n from '../../../../stores/i18n.store';
import {EditAction} from '../../../../types/editor/edit-action';

interface AppAssetChoiceProps {
  selectAction: (action: EditAction, image?: UnsplashPhoto | TenorGif | StorageFile | Waves) => Promise<void>;
}

export const AppAssetChoice: FunctionalComponent<AppAssetChoiceProps> = ({selectAction}) => {
  const renderCustom = () => {
    return (
      <ion-button shape="round" onClick={async () => await selectAction(EditAction.OPEN_CUSTOM)} color="tertiary">
        <ion-label>{i18n.state.editor.your_images}</ion-label>
      </ion-button>
    );
  };

  return (
    <Fragment>
      {renderCustom()}
    </Fragment>
  );
};
