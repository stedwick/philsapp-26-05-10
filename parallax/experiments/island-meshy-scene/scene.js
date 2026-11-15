import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
const canvas=document.querySelector('canvas'),status=document.querySelector('#status'),toggle=document.querySelector('#toggle');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const audio=document.querySelector('#fire-audio'),sound=document.querySelector('#sound');
audio.volume=.3;
sound.addEventListener('click',async()=>{
 if(audio.paused){try{await audio.play()}catch{sound.textContent='Sound unavailable';return}}else audio.pause();
 sound.textContent=audio.paused?'Play fire sound':'Mute fire sound';sound.setAttribute('aria-pressed',String(!audio.paused));
});
let renderer;
try { renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'}); }
catch { status.textContent='3D preview is unavailable in this browser.';toggle.hidden=true;throw new Error('WebGL unavailable'); }
renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.outputColorSpace=THREE.SRGBColorSpace;
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(37,1,.01,100);
camera.position.set(0,1.7,-7.8);camera.lookAt(0,0,0);
scene.add(new THREE.HemisphereLight(0xadc9ff,0x635047,.5));
const moon=new THREE.DirectionalLight(0xb3ceff,.42);moon.position.set(-2,6,-4);scene.add(moon);
const firelight=new THREE.PointLight(0xff9138,5,4.2,2);
const island=new THREE.Group();scene.add(island);island.add(firelight);
const lanternLight=new THREE.PointLight(0xffc77b,1.8,2.2,2);island.add(lanternLight);
const bytes=Uint8Array.from(atob(window.ISLAND_GLB),c=>c.charCodeAt(0));window.ISLAND_GLB=null;
const draco=new DRACOLoader().setDecoderPath({js:window.DRACO_WRAPPER,wasm:window.DRACO_WASM}).setWorkerLimit(1);
const loader=new GLTFLoader().setDRACOLoader(draco);
let modelRoot,characterMotion;
loader.parse(bytes.buffer,'',model=>{
 const box=new THREE.Box3().setFromObject(model.scene),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3());
 const scale=4.8/Math.max(size.x,size.y,size.z);model.scene.scale.setScalar(scale);model.scene.position.copy(center).multiplyScalar(-scale);island.add(model.scene);modelRoot=model.scene;
 // The small facial details share the model's local coordinates and rotate with it.
 const faceEncoded=window.FACE_GLB;window.FACE_GLB=null;
 if(faceEncoded){
  const faceBytes=Uint8Array.from(atob(faceEncoded),c=>c.charCodeAt(0));
  loader.parse(faceBytes.buffer,'',face=>{model.scene.add(face.scene);draco.dispose();render()},()=>{draco.dispose();console.warn('Face details unavailable')});
 }else draco.dispose();
 // Place the light at the hanging lantern in the model's original coordinates.
 lanternLight.position.set(-.30,-.035,.52).sub(center).multiplyScalar(scale);
 water.position.y=(box.min.y-center.y)*scale+.57;
 // Make only the lantern's bright panes glow, keeping its dark metal frame.
 const lantern=model.scene.getObjectByName('model_part2');
 if(lantern?.material?.map){
  lantern.material=lantern.material.clone();
  lantern.material.onBeforeCompile=shader=>{
   shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 lanternLocalPosition;').replace('#include <begin_vertex>','#include <begin_vertex>\nlanternLocalPosition = position;');
   shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 lanternLocalPosition;').replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
    vec3 lp = lanternLocalPosition;
    float inLantern = step(-.36, lp.x) * step(lp.x, -.23) * step(-.115, lp.y) * step(lp.y, .01) * step(.45, lp.z) * step(lp.z, .59);
    vec3 pane = texture2D(map, vMapUv).rgb;
    float paneBrightness = dot(pane, vec3(.2126, .7152, .0722));
    totalEmissiveRadiance += inLantern * smoothstep(.42, .78, paneBrightness) * vec3(.8, .42, .12);
   `);
  };
 }
 // Give the tabletop a restrained wood grain while preserving the shared atlas.
 const desk=model.scene.getObjectByName('model_part3');
 if(desk?.material?.map){
  desk.material=desk.material.clone();
  desk.material.onBeforeCompile=shader=>{
   shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 deskLocalPosition; varying vec3 deskLocalNormal;').replace('#include <begin_vertex>','#include <begin_vertex>\ndeskLocalPosition = position; deskLocalNormal = normal;');
   shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 deskLocalPosition; varying vec3 deskLocalNormal;').replace('#include <map_fragment>',`#include <map_fragment>
    float top = step(-.34, deskLocalPosition.y) * step(deskLocalPosition.y, -.26) * smoothstep(.70, .95, abs(deskLocalNormal.y));
    float wood = smoothstep(-.2, .85, sin(deskLocalPosition.z * 310. + sin(deskLocalPosition.x * 39.) * 1.2));
    float warmSurface = smoothstep(.02, .12, diffuseColor.r - diffuseColor.b);
    diffuseColor.rgb *= 1. - top * warmSurface * wood * .10;
   `);
  };
 }
 const character=model.scene.getObjectByName('model_part1');
 if(character?.geometry?.attributes.position){
  const position=character.geometry.attributes.position;position.setUsage(THREE.DynamicDrawUsage);
  const moving=[];
  for(let i=0;i<position.count;i++){
   const x=position.getX(i),y=position.getY(i),z=position.getZ(i);
   const side=THREE.MathUtils.smoothstep(Math.abs(x+.094),.048,.105);
   const vertical=THREE.MathUtils.smoothstep(y,-.32,-.27)*(1-THREE.MathUtils.smoothstep(y,-.17,-.12));
   const weight=side*vertical;
   if(weight>.01)moving.push({i,y,z,weight,right:x>-.094});
  }
  characterMotion={position,moving};
 }
 status.hidden=true;render();
},()=>{status.textContent='Could not load the island.'});
// Water is one inexpensive shader surface. Its transparent edge blends into the page.
const waterMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{uTime:{value:0},uHeight:{value:1}},vertexShader:`varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`uniform float uTime;uniform float uHeight;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*2.;float d=length(p);float fade=1.-smoothstep(.45,1.,d);float wave=sin(d*39.-uTime*1.15)*.5+.5;float thin=smoothstep(.91,.99,wave);vec3 c=mix(vec3(.045,.13,.23),vec3(.13,.29,.40),thin*.23);float edge=smoothstep(0.,.08,gl_FragCoord.y/uHeight);gl_FragColor=vec4(c,fade*edge*.9);}`});
const water=new THREE.Mesh(new THREE.PlaneGeometry(14,14),waterMat);water.rotation.x=-Math.PI/2;scene.add(water);
const flames=new THREE.Group();island.add(flames);
function flameGeometry(width,height){
 const shape=new THREE.Shape();shape.moveTo(0,0);shape.bezierCurveTo(-width*.65,height*.13,-width*.52,height*.55,-width*.16,height*.70);shape.bezierCurveTo(-width*.18,height*.43,width*.18,height*.52,0,height);shape.bezierCurveTo(width*.52,height*.72,width*.67,height*.23,width*.38,height*.09);shape.bezierCurveTo(width*.23,0,width*.1,0,0,0);return new THREE.ShapeGeometry(shape);
}
const outerGeo=flameGeometry(.29,.55),innerGeo=flameGeometry(.15,.33);
const outerMat=new THREE.MeshBasicMaterial({color:0xff7930,side:THREE.DoubleSide}),innerMat=new THREE.MeshBasicMaterial({color:0xffd46a,side:THREE.DoubleSide});
for(const angle of [0,Math.PI/2]){const out=new THREE.Mesh(outerGeo,outerMat);out.rotation.y=angle;flames.add(out);const inside=new THREE.Mesh(innerGeo,innerMat);inside.rotation.y=angle;inside.position.y=.02;inside.position.z=.004;flames.add(inside);}
flames.position.set(.30,-1.16,-.50);firelight.position.copy(flames.position).add(new THREE.Vector3(0,.5,0));
// A few soft sprites and points give the fire life without a particle simulation.
function smokeTexture(){
 const c=document.createElement('canvas');c.width=c.height=64;const ctx=c.getContext('2d');
 const g=ctx.createRadialGradient(32,32,1,32,32,32);g.addColorStop(0,'rgba(203,210,216,.45)');g.addColorStop(1,'rgba(170,186,203,0)');ctx.fillStyle=g;ctx.fillRect(0,0,64,64);return new THREE.CanvasTexture(c);
}
const smokeMap=smokeTexture(),smoke=[];
for(let i=0;i<7;i++){
 const material=new THREE.SpriteMaterial({map:smokeMap,transparent:true,opacity:.2,depthWrite:false,color:0xb6c2d1});
 const puff=new THREE.Sprite(material);island.add(puff);smoke.push(puff);
}
const emberCount=10,emberPositions=new Float32Array(emberCount*3),emberOpacities=new Float32Array(emberCount),emberGeometry=new THREE.BufferGeometry();
emberGeometry.setAttribute('position',new THREE.BufferAttribute(emberPositions,3).setUsage(THREE.DynamicDrawUsage));
emberGeometry.setAttribute('aOpacity',new THREE.BufferAttribute(emberOpacities,1).setUsage(THREE.DynamicDrawUsage));
const embers=new THREE.Points(emberGeometry,new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{uPixelRatio:{value:Math.min(devicePixelRatio,1.25)}},vertexShader:`attribute float aOpacity; varying float vOpacity; uniform float uPixelRatio; void main(){vOpacity=aOpacity; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=7.*uPixelRatio*(5./-mv.z); gl_Position=projectionMatrix*mv;}`,fragmentShader:`varying float vOpacity; void main(){float d=length(gl_PointCoord-vec2(.5)); float soft=1.-smoothstep(.2,.5,d); gl_FragColor=vec4(1.,.48,.12,vOpacity*soft);}`}));island.add(embers);
let time=0,last=0,frame=0,paused=false,visible=true,drag=null,autoResumeAt=0;
function render(){renderer.render(scene,camera)}
function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);waterMat.uniforms.uHeight.value=canvas.height;camera.aspect=w/h;camera.fov=THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(37)/2)*Math.max(1,1.1/camera.aspect)));camera.updateProjectionMatrix();render()}
function tick(now){if(paused||!visible||document.hidden||reduced.matches)return;frame=requestAnimationFrame(tick);if(now-last<1000/30)return;const dt=last?Math.min((now-last)/1000,.1):0;last=now;time+=dt;if(!drag?.turning && now>=autoResumeAt)island.rotation.y+=dt*.075;waterMat.uniforms.uTime.value=time;
 firelight.intensity=5+.65*Math.sin(time*8.3)+.3*Math.sin(time*13.7);
 for(let i=0;i<smoke.length;i++){
  const age=(time*.10+i/smoke.length)%1,puff=smoke[i];
  puff.position.set(flames.position.x+Math.sin(time*.7+i*2)*.1+age*.18,flames.position.y+.46+age*2.9,flames.position.z+Math.cos(time*.5+i)*.06);
  const size=.24+age*.48;puff.scale.set(size,size,1);puff.material.opacity=.48*Math.sin(Math.PI*age);
 }
 for(let i=0;i<emberCount;i++){
  const age=(time*.12+i/emberCount)%1;
  emberPositions[i*3]=flames.position.x+Math.sin(i*2.7+time*.8)*(.04+age*.13);
  emberPositions[i*3+1]=flames.position.y+.28+age*3.0;
  emberOpacities[i]=.85*Math.sin(Math.PI*age);
  emberPositions[i*3+2]=flames.position.z+Math.cos(i*1.9+time*.6)*(.03+age*.09);
 }
 emberGeometry.attributes.position.needsUpdate=true;emberGeometry.attributes.aOpacity.needsUpdate=true;
 if(characterMotion){
  const {position,moving}=characterMotion;
  for(const v of moving){const phase=v.right?Math.sin(time*2.1)*.65:Math.sin(time*5.2);position.setY(v.i,v.y+v.weight*phase*.005);position.setZ(v.i,v.z+v.weight*(v.right?Math.sin(time*1.1)*.004:Math.cos(time*5.2)*.002));}
  position.needsUpdate=true;
 }
 flames.children.forEach((f,i)=>{f.scale.y=.9+.13*Math.sin(time*7+i*1.2);f.rotation.z=.08*Math.sin(time*4+i)});render()}
function start(){smoke.forEach(puff=>{puff.visible=!reduced.matches});embers.visible=!reduced.matches;cancelAnimationFrame(frame);last=0;if(!paused&&visible&&!document.hidden&&!reduced.matches)frame=requestAnimationFrame(tick);else render()}
// Horizontal drags turn the island; vertical touch gestures remain available to the page.
canvas.addEventListener('pointerdown',event=>{
 if(!event.isPrimary || (event.pointerType==='mouse' && event.button!==0))return;
 drag={id:event.pointerId,startX:event.clientX,startY:event.clientY,lastX:event.clientX,turning:false};
});
canvas.addEventListener('pointermove',event=>{
 if(!drag||event.pointerId!==drag.id)return;
 const dx=event.clientX-drag.startX,dy=event.clientY-drag.startY;
 if(!drag.turning){if(Math.abs(dx)<6 || Math.abs(dx)<=Math.abs(dy))return;drag.turning=true;canvas.setPointerCapture(event.pointerId);}
 island.rotation.y+=(event.clientX-drag.lastX)*.012;drag.lastX=event.clientX;autoResumeAt=performance.now()+4000;render();
});
function endDrag(event){if(!drag||event.pointerId!==drag.id)return;if(drag.turning)autoResumeAt=performance.now()+4000;drag=null;}
canvas.addEventListener('pointerup',endDrag);canvas.addEventListener('pointercancel',endDrag);canvas.addEventListener('lostpointercapture',endDrag);
canvas.addEventListener('keydown',event=>{
 if(event.key!=='ArrowLeft'&&event.key!=='ArrowRight')return;
 event.preventDefault();island.rotation.y+=event.key==='ArrowLeft'?-.2:.2;autoResumeAt=performance.now()+4000;render();
});
toggle.addEventListener('click',()=>{paused=!paused;document.querySelector('.backdrop').classList.toggle('is-paused',paused);document.querySelector('.stage').classList.toggle('is-paused',paused);toggle.textContent=paused?'Play animation':'Pause animation';toggle.setAttribute('aria-pressed',String(paused));start()});
reduced.addEventListener('change',()=>{toggle.hidden=reduced.matches;start()});document.addEventListener('visibilitychange',start);
if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;start()}).observe(canvas);window.addEventListener('resize',resize);toggle.hidden=reduced.matches;resize();start();

