'use babel';

export default class AnimeBackgroundView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('anime-background');

    let canvas_div = document.createElement('div');
    this.element.appendChild(canvas_div);
    let canvas = document.createElement('canvas');
    canvas.id = 'glcanvas';
    canvas.setAttribute('width', '512px');
    canvas.setAttribute('height', '512px');
    canvas_div.appendChild(canvas);

    let log = document.createElement('div');
    log.id = 'myconsole';
    this.element.appendChild(log);


    var script_dir = document.createElement('span');
    script_dir.setAttribute('dir', __dirname);
    script_dir.id = "getDirPath";
    this.element.appendChild(script_dir);

    let scripts = new Array(
        __dirname + '/asset/lib/live2d.min.js',
        __dirname + '/asset/src/Simple.js',
        __dirname + '/asset/src/function.js'
    );
    for (let i = 0; i < scripts.length; i++) {
        var ele = document.createElement('script');
        ele.setAttribute('src',scripts[i]);
        this.element.appendChild(ele);
    }

  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
