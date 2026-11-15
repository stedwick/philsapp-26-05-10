import * as THREE from 'three';

const canvas = document.querySelector('canvas');
const status = document.querySelector('.status');
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'low-power' });
} catch {
  status.textContent = 'This browser could not start the 3D preview.';
  throw new Error('WebGL unavailable');
}
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
renderer.setClearColor(0x0b1832);
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
camera.position.set(7.5, 6.3, 10.5);
camera.lookAt(0, 1, 0);
scene.add(new THREE.HemisphereLight(0xa9d7ff, 0x323143, 2));
const moon = new THREE.DirectionalLight(0x9ebeff, 1.1); moon.position.set(-4, 8, 5); scene.add(moon);
const warm = new THREE.DirectionalLight(0xffbe80, 0.45); warm.position.set(3, 4, 4); scene.add(warm);
const mat = (color, extra = {}) => new THREE.MeshLambertMaterial({color, ...extra});
const colors = {
 grass:mat(0x647f48), earth:mat(0x6e524b), rock:mat(0x606c85), pine:mat(0x214d43), pine2:mat(0x2c6650), pine3:mat(0x477d5b), bark:mat(0x704532), wood:mat(0x9a6242), desk:mat(0x765043), dark:mat(0x303b4e), hoodie:mat(0x9c4559), skin:mat(0xf0bb91), hair:mat(0x302e37), screen:mat(0x71d6ec, {emissive:0x237f9c,emissiveIntensity:.55}), key:mat(0xc9dedc), fire:mat(0xff7028, {emissive:0xa42b00,emissiveIntensity:.45}), flame:mat(0xffc653, {emissive:0xb36500,emissiveIntensity:.55}), water:mat(0x173958), ripple:mat(0x92c8d2,{transparent:true,opacity:.3,side:THREE.DoubleSide,depthWrite:false}), leaf:mat(0x73a14f), black:mat(0x202b38)
};
const geometries = new Map();
function mesh(geometry, material, parent, x=0,y=0,z=0) { const object = new THREE.Mesh(geometry,material); object.position.set(x,y,z); parent.add(object); return object; }
function box(w,h,d,m,p,x,y,z) { const k=`b${w},${h},${d}`; if(!geometries.has(k)) geometries.set(k,new THREE.BoxGeometry(w,h,d)); return mesh(geometries.get(k),m,p,x,y,z); }
function cone(r,h,m,p,x,y,z,segments=7) { return mesh(new THREE.ConeGeometry(r,h,segments),m,p,x,y,z); }
function cylinder(r1,r2,h,m,p,x,y,z,segments=8) { return mesh(new THREE.CylinderGeometry(r1,r2,h,segments),m,p,x,y,z); }
function ball(r,m,p,x,y,z) { return mesh(new THREE.IcosahedronGeometry(r,2),m,p,x,y,z); }
function group(parent,x=0,y=0,z=0) { const g=new THREE.Group();g.position.set(x,y,z);parent.add(g);return g; }

// A feathered pool and a few subtle rings: no water simulation or textures to download.
function softDisk(inner, outer) {
  const c=document.createElement('canvas');c.width=c.height=128;const ctx=c.getContext('2d');
  const g=ctx.createRadialGradient(64,64,2,64,64,64);g.addColorStop(0,inner);g.addColorStop(1,outer);
  ctx.fillStyle=g;ctx.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);
}
const poolMaterial=new THREE.MeshBasicMaterial({map:softDisk('rgba(39,91,138,.9)','rgba(16,43,75,0)'),transparent:true,depthWrite:false,side:THREE.DoubleSide});
const water=mesh(new THREE.PlaneGeometry(17,17),poolMaterial,scene,0,-.25,0); water.rotation.x=-Math.PI/2;
const ripples=[];
for(const [x,z,size,phase] of [[-3.1,1.1,.8,0],[3.15,1.2,.7,1.3],[-2.9,-2.4,.65,2.1],[1.2,3.1,.6,3.2],[3,-2,.7,4.1]]) {
  const ring=mesh(new THREE.RingGeometry(.52,.55,32),colors.ripple,scene,x,-.225,z);ring.rotation.x=-Math.PI/2;
  ring.userData={size,phase};ring.scale.set(size,size*.55,1);ripples.push(ring);
}
const island=group(scene);
// Shallow uneven banks avoid the flat, perfectly round disk look.
function irregularBank(top,bottom,height,material,y) {
  const geo=new THREE.CylinderGeometry(top,bottom,height,18,1);const a=geo.attributes.position;
  for(let i=0;i<a.count;i++){const x=a.getX(i),z=a.getZ(i),angle=Math.atan2(z,x);const f=1+.045*Math.sin(angle*3+.4)+.027*Math.cos(angle*5-.3);a.setX(i,x*f);a.setZ(i,z*f);}
  geo.computeVertexNormals();return mesh(geo,material,island,0,y,0);
}
irregularBank(2.62,2.30,.58,colors.earth,0);
irregularBank(2.62,2.61,.13,colors.grass,.35);
// Stones make the silhouette irregular.
for(const [x,z,s] of [[-2.05,1,.32],[-1.3,1.95,.35],[-.3,2.28,.24],[.7,2.2,.34],[1.75,1.55,.3],[2.35,.35,.25],[-2.35,-.5,.27],[-1.7,-1.6,.28],[1.4,-1.9,.28]]) { const rock=ball(s,colors.rock,island,x,.37,z); rock.scale.set(1.35,.68,1); }
// A low-poly pine with a visible trunk.
cylinder(.18,.24,2.05,colors.bark,island,-1.55,1.37,-.95,7);
function pineTier(radius,height,material,y,rotation) {
  const geo=new THREE.ConeGeometry(radius,height,12,1);const pos=geo.attributes.position;
  for(let i=0;i<pos.count;i++) {
    const x=pos.getX(i),z=pos.getZ(i),a=Math.atan2(z,x),rad=Math.hypot(x,z);
    if(rad>radius*.3) {const scallop=.83+.17*Math.cos(a*6);pos.setX(i,x*scallop);pos.setZ(i,z*scallop);pos.setY(i,pos.getY(i)-.10*Math.cos(a*6));}
  }
  geo.computeVertexNormals();const tier=mesh(geo,material,island,-1.55,y,-.95);tier.rotation.y=rotation;
}
pineTier(1.12,1.3,colors.pine,2.15,.1);
pineTier(.88,1.17,colors.pine2,2.85,.28);
pineTier(.58,1.08,colors.pine3,3.5,.05);
// Sparse foliage and little flowers give the ground a hand-made feel.
const grassTip=mat(0x97b66a), flower=mat(0xf5dfba), stem=mat(0x4f7144);
for(const [x,z] of [[-2,0],[-1.8,1.35],[-1.65,-1.65],[-.2,1.9],[1.35,1.7],[2,.7],[1.8,-1.1],[-.15,-2]]) {
  const tuft=group(island,x,.43,z);
  for(let j=0;j<3;j++){const blade=cone(.045,.20,grassTip,tuft,(j-1)*.07,.08,0,4);blade.rotation.z=(j-1)*.3;}
}
for(const [x,z] of [[-1.75,1.4],[-.15,1.95],[1.6,1.65]]) {cylinder(.018,.018,.17,stem,island,x,.48,z,4);ball(.06,flower,island,x,.58,z);}
// Desk, monitor, keyboard, and mouse.
const desk=group(island,.48,0,-.42);
box(1.38,.13,.7,colors.wood,desk,0,1.32,0);
for(const x of [-.55,.55]) for(const z of [-.25,.25]) box(.09,.87,.09,colors.bark,desk,x,.88,z);
box(.88,.58,.09,colors.dark,desk,0,1.78,-.2);
box(.76,.46,.02,colors.screen,desk,0,1.79,-.145);
box(.09,.18,.08,colors.dark,desk,0,1.43,-.2);
for(let i=0;i<5;i++) box(.34+(i%3)*.08,.018,.011,colors.key,desk,-.12+(i%2)*.08,1.93-i*.065,-.129);
box(.49,.035,.17,colors.dark,desk,-.08,1.405,.15);
for(let row=0;row<2;row++) for(let col=0;col<6;col++) box(.055,.008,.04,colors.key,desk,-.28+col*.078,1.427,.11+row*.055);
const mouse=ball(.065,colors.key,desk,.46,1.42,.16);mouse.scale.set(.7,.35,1);
// Tiny potted plant.
cylinder(.1,.075,.16,colors.bark,desk,.56,1.47,-.19,7);ball(.14,colors.leaf,desk,.56,1.62,-.19);
// Chair and character face the desk, toward -Z.
const chair=group(island,.48,0,.67);
box(.58,.11,.51,colors.wood,chair,0,.91,0); box(.58,.65,.1,colors.wood,chair,0,1.25,.23);
for(const x of [-.22,.22]) for(const z of [-.19,.19]) box(.07,.45,.07,colors.bark,chair,x,.65,z);
const person=group(chair,0,.97,0);
const torso=mesh(new THREE.CapsuleGeometry(.245,.19,4,8),colors.hoodie,person,0,.39,-.03);torso.scale.z=.72;
const hood=ball(.22,colors.hoodie,person,0,.67,.075);hood.scale.set(1,.55,.55);
ball(.27,colors.skin,person,0,.89,-.055);
for(const x of [-.25,.25]) ball(.075,colors.skin,person,x,.86,-.055);
const hair=ball(.285,colors.hair,person,0,.98,-.01);hair.scale.set(1, .76, 1);
ball(.105,colors.hair,person,-.2,.91,.01);ball(.1,colors.hair,person,.2,.91,.01);
for(const [x,y,z,r] of [[-.16,1.1,.01,.12],[.01,1.12,-.03,.13],[.14,1.08,-.05,.11]]) ball(r,colors.hair,person,x,y,z);
for(const x of [-.14,.14]) { box(.18,.13,.4,colors.dark,person,x,.04,-.18); box(.2,.13,.38,colors.dark,person,x,-.22,-.31); }
const arms=[];
for(const x of [-.31,.31]) { const arm=group(person,x,.59,-.05); box(.14,.14,.47,colors.hoodie,arm,0,-.12,-.23); ball(.085,colors.skin,arm,0,-.12,-.47); arms.push(arm); }
// Campfire: stationary log and stones, animated geometric flames.
const fire=group(island,-.85,.42,.82);
const glowMaterial=new THREE.MeshBasicMaterial({map:softDisk('rgba(255,153,57,.55)','rgba(255,100,20,0)'),transparent:true,depthWrite:false,side:THREE.DoubleSide});
const glow=mesh(new THREE.PlaneGeometry(2.6,2.6),glowMaterial,fire,0,.006,0);glow.rotation.x=-Math.PI/2;
const firelight=new THREE.PointLight(0xff9b4a,4,3.5,2);firelight.position.set(0,.6,0);fire.add(firelight);
for(let i=0;i<7;i++) {const a=i*Math.PI*2/7;const stone=ball(.12,colors.rock,fire,Math.cos(a)*.39,.05,Math.sin(a)*.39);stone.scale.y=.7;}
for(const angle of [-.65,.65]) {const log=cylinder(.075,.075,.66,colors.bark,fire,0,.12,0,6);log.rotation.z=Math.PI/2;log.rotation.y=angle;}
const flames=[];
for(const [x,z,h] of [[0,0,.66],[-.17,.02,.43],[.14,-.04,.48]]) {const flame=cone(.18,h,colors.fire,fire,x,.13+h/2,z,6);flames.push(flame);}
const inner=cone(.12,.37,colors.flame,fire,0,.32,.025,6);flames.push(inner);

let width=0,height=0,last=0,paused=false,elapsed=0,frame=0;
function resize() { width=canvas.clientWidth;height=canvas.clientHeight; if(!width||!height)return;renderer.setSize(width,height,false); const aspect=width/height;const extent=aspect<1?4.5:4.15;camera.left=-extent*aspect;camera.right=extent*aspect;camera.top=extent;camera.bottom=-extent;camera.updateProjectionMatrix(); }
function render() { renderer.render(scene,camera); }
function tick(now) {
  if(document.hidden||paused||motion.matches)return;
  frame=requestAnimationFrame(tick);
  if(now-last<1000/30)return;
  const delta=last?Math.min((now-last)/1000,.1):0;last=now;elapsed+=delta;
  island.rotation.y=elapsed*.1;
  arms[0].rotation.x=Math.sin(elapsed*5)*.09;
  arms[1].rotation.x=Math.sin(elapsed*3.5+1)*.055;
  arms[1].rotation.y=Math.sin(elapsed*.8)*.08;
  mouse.position.x=.46+Math.sin(elapsed*.8)*.018;
  mouse.position.z=.16+Math.cos(elapsed*.8)*.015;
  flames.forEach((f,i)=>{f.scale.y=.88+Math.sin(elapsed*7+i*1.7)*.12;f.rotation.z=Math.sin(elapsed*4+i)*.08;});
  ripples.forEach(r=>{const v=1+Math.sin(elapsed*.8-r.userData.phase)*.09;r.scale.set(r.userData.size*v,r.userData.size*.55*v,1);});
  firelight.intensity=3.6+Math.sin(elapsed*5)*.3;
  render();
}
function start() {cancelAnimationFrame(frame);last=0; if(!document.hidden&&!paused&&!motion.matches)frame=requestAnimationFrame(tick);else render();}
const toggle=document.querySelector('button');
toggle.addEventListener('click',()=>{paused=!paused;toggle.textContent=paused?'Play animation':'Pause animation';toggle.setAttribute('aria-pressed',String(paused));start();});
motion.addEventListener('change',()=>{toggle.hidden=motion.matches;start();});
document.addEventListener('visibilitychange',start);
window.addEventListener('resize',()=>{resize();render();});
toggle.hidden=motion.matches;
resize(); render(); start();status.hidden=true;
