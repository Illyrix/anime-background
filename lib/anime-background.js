'use babel';

import AnimeBackgroundView from './anime-background-view';
import { CompositeDisposable } from 'atom';

export default {

  animeBackgroundView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.animeBackgroundView = new AnimeBackgroundView(state.animeBackgroundViewState);
    this.modalDisplay = atom.workspace.addBottomPanel({item: this.animeBackgroundView.getElement(), visible: false});


    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();


    // if (atom.config.get('animeBackgroundEnable') == '1')
    //     this.modalDisplay.show();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'anime-background:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    //this.modalDisplay.destroy();
    this.subscriptions.dispose();
    this.animeBackgroundView.destroy();
  },

  serialize() {
    return {
      animeBackgroundViewState: this.animeBackgroundView.serialize()
    };
  },

  toggle() {
    console.log('AnimeBackground was toggled!');
    //atom.config.set('animeBackgroundEnable', this.modalDisplay.isVisible()?'0':'1');
    return (
      this.modalDisplay.isVisible() ?
      this.modalDisplay.hide() :
      this.modalDisplay.show()
    );
  }

};
