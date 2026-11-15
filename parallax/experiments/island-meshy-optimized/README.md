# Compressed island comparison

Open `light.html` or `detailed.html` in a browser. These local previews embed the model and Draco decoder as data so they work without a server. They render on demand, without a continuous animation loop.

Both models start with `../island-meshy/optimized.glb`. Geometry was welded, simplified with glTF Transform 4.5.1 (`--ratio 0.5 --error 0.005`), then compressed with Draco. The detailed variant retains the original material maps. The light variant removes the normal and metallic-roughness maps and uses a non-metallic, rough material. The source model remains untouched. The simplifier was limited by the original topology: the model went from 51,607 to about 44,160 triangles, not half as many.

`light.glb` is 512,528 bytes; `detailed.glb` is 907,316 bytes. Each page also needs `bundle.js`, `decoder-data.js`, and its model data JavaScript. With gzip applied separately to each of these local files, the light preview totals about 790 kB and the detailed preview about 1.19 MB; these are estimates for a server configured to compress them, not measured production transfers. The standalone files are larger uncompressed because they use base64. The result does not include the rest of the site or future animation assets.

To rebuild the preview JavaScript, bundle `viewer.js` with Three.js 0.187.0. DRACOLoader's default asset URLs contain `import.meta.url`; the current classic-script bundle substitutes `document.baseURI` because the preview supplies its own decoder data URLs and must also open from `file://`. A deployed integration should use normal module bundling, serve the GLB and decoder as separate binary files, and measure the actual network transfer and phone performance.
