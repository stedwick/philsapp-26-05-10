(()=>{var nK="187";var sK=0,g$=1,iK=2;var t7=1,oK=2,G7=3,K8=0,uJ=1,vJ=2,A8=0,e7=1,p$=2,l$=3,m$=4,aK=5;var E7=100,rK=101,tK=102,eK=103,JH=104,QH=200,$H=201,WH=202,ZH=203,KH=204,HH=205,XH=206,YH=207,UH=208,GH=209,EH=210,NH=211,qH=212,FH=213,OH=214,RH=0,LH=1,MH=2,d$=3,VH=4,DH=5,BH=6,kH=7,zH=0,_H=1,PH=2,w9=0,u$=1,c$=2,n$=3,s$=4,i$=5,o$=6,a$=7;var J6=301,N7=302,GQ=303,EQ=304,q7=1000,F7=1001,NQ=1002,V9=1003,qQ=1004;var T8=1005;var yJ=1006,O7=1007;var D9=1008;var B9=1009,IH=1010,CH=1011,Q6=1012,r$=1013,H8=1014,u9=1015,A9=1016,t$=1017,e$=1018,S8=1020,wH=35902,AH=35899,TH=1021,SH=1022,c9=1023,R7=1026,X8=1027,jH=1028,JW=1029,j8=1030,QW=1031;var $W=1033,FQ=33776,OQ=33777,RQ=33778,LQ=33779,WW=35840,ZW=35841,KW=35842,HW=35843,XW=36196,YW=37492,UW=37496,GW=37488,EW=37489,MQ=37490,NW=37491,qW=37808,FW=37809,OW=37810,RW=37811,LW=37812,MW=37813,VW=37814,DW=37815,BW=37816,kW=37817,zW=37818,_W=37819,PW=37820,IW=37821,CW=36492,wW=36494,AW=36495,TW=36283,SW=36284,VQ=36285,jW=36286;var vW=2300,DQ=2301;var yW=0,$6=1,L7=2;var hW=0,vH=1,v8="",cJ="srgb",gJ="srgb-linear",fW="linear",$J="srgb";var yH=512,hH=513,fH=514,bW=515,bH=516,xH=517,xW=518,gW=519;var W6=35048;var pW="300 es",lW=2000;function fY(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function bY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function X7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function gH(){let J=X7("canvas");return J.style.display="block",J}var rZ={},Y7=null;function i7(...J){let Q="THREE."+J.shift();if(Y7)Y7("log",Q,...J);else console.log(Q,...J)}function pH(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function _0(...J){J=pH(J);let Q="THREE."+J.shift();if(Y7)Y7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function j0(...J){J=pH(J);let Q="THREE."+J.shift();if(Y7)Y7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function P8(...J){let Q=J.join(" ");if(Q in rZ)return;rZ[Q]=!0,_0(...J)}function lH(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var mH={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class n9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var SJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tZ=1234567,u7=Math.PI/180,I8=180/Math.PI;function k9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(SJ[J&255]+SJ[J>>8&255]+SJ[J>>16&255]+SJ[J>>24&255]+"-"+SJ[Q&255]+SJ[Q>>8&255]+"-"+SJ[Q>>16&15|64]+SJ[Q>>24&255]+"-"+SJ[$&63|128]+SJ[$>>8&255]+"-"+SJ[$>>16&255]+SJ[$>>24&255]+SJ[W&255]+SJ[W>>8&255]+SJ[W>>16&255]+SJ[W>>24&255]).toLowerCase()}function l0(J,Q,$){return Math.max(Q,Math.min($,J))}function mW(J,Q){return(J%Q+Q)%Q}function xY(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function gY(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function c7(J,Q,$){return(1-$)*J+$*Q}function pY(J,Q,$,W){return c7(J,Q,1-Math.exp(-$*W))}function lY(J,Q=1){return Q-Math.abs(mW(J,Q*2)-Q)}function mY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function dY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function uY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function cY(J,Q){return J+Math.random()*(Q-J)}function nY(J){return J*(0.5-Math.random())}function sY(J){if(J!==void 0)tZ=J;let Q=tZ+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function iY(J){return J*u7}function oY(J){return J*I8}function aY(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function rY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function dW(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function tY(J,Q,$,W,Z){let{cos:K,sin:H}=Math,X=K($/2),Y=H($/2),U=K((Q+W)/2),G=H((Q+W)/2),N=K((Q-W)/2),E=H((Q-W)/2),q=K((W-Q)/2),R=H((W-Q)/2);switch(Z){case"XYX":J.set(X*G,Y*N,Y*E,X*U);break;case"YZY":J.set(Y*E,X*G,Y*N,X*U);break;case"ZXZ":J.set(Y*N,Y*E,X*G,X*U);break;case"XZX":J.set(X*G,Y*R,Y*q,X*U);break;case"YXY":J.set(Y*q,X*G,Y*R,X*U);break;case"ZYZ":J.set(Y*R,Y*q,X*G,X*U);break;default:_0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function BQ(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uW(J,Q){if(Q.constructor===Float32Array)return J;let $=BQ(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/$,-1)}function cW(J,Q){if(Q.constructor===Float32Array)return J;let $=BQ(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*$)}var pJ={DEG2RAD:u7,RAD2DEG:I8,generateUUID:k9,clamp:l0,euclideanModulo:mW,mapLinear:xY,inverseLerp:gY,lerp:c7,damp:pY,pingpong:lY,smoothstep:mY,smootherstep:dY,randInt:uY,randFloat:cY,randFloatSpread:nY,seededRandom:sY,degToRad:iY,radToDeg:oY,isPowerOfTwo:aY,ceilPowerOfTwo:rY,floorPowerOfTwo:dW,setQuaternionFromProperEuler:tY,normalize:cW,denormalize:uW};class R0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class K9{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let X=$[W+0],Y=$[W+1],U=$[W+2],G=$[W+3],N=Z[K+0],E=Z[K+1],q=Z[K+2],R=Z[K+3];if(G!==R||X!==N||Y!==E||U!==q){let D=X*N+Y*E+U*q+G*R;if(D<0)N=-N,E=-E,q=-q,R=-R,D=-D;let F=1-H;if(D<0.9995){let O=Math.acos(D),k=Math.sin(O);F=Math.sin(F*O)/k,H=Math.sin(H*O)/k,X=X*F+N*H,Y=Y*F+E*H,U=U*F+q*H,G=G*F+R*H}else{X=X*F+N*H,Y=Y*F+E*H,U=U*F+q*H,G=G*F+R*H;let O=1/Math.sqrt(X*X+Y*Y+U*U+G*G);X*=O,Y*=O,U*=O,G*=O}}J[Q]=X,J[Q+1]=Y,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],X=$[W+1],Y=$[W+2],U=$[W+3],G=Z[K],N=Z[K+1],E=Z[K+2],q=Z[K+3];return J[Q]=H*q+U*G+X*E-Y*N,J[Q+1]=X*q+U*N+Y*G-H*E,J[Q+2]=Y*q+U*E+H*N-X*G,J[Q+3]=U*q-H*G-X*N-Y*E,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,X=Math.sin,Y=H($/2),U=H(W/2),G=H(Z/2),N=X($/2),E=X(W/2),q=X(Z/2);switch(K){case"XYZ":this._x=N*U*G+Y*E*q,this._y=Y*E*G-N*U*q,this._z=Y*U*q+N*E*G,this._w=Y*U*G-N*E*q;break;case"YXZ":this._x=N*U*G+Y*E*q,this._y=Y*E*G-N*U*q,this._z=Y*U*q-N*E*G,this._w=Y*U*G+N*E*q;break;case"ZXY":this._x=N*U*G-Y*E*q,this._y=Y*E*G+N*U*q,this._z=Y*U*q+N*E*G,this._w=Y*U*G-N*E*q;break;case"ZYX":this._x=N*U*G-Y*E*q,this._y=Y*E*G+N*U*q,this._z=Y*U*q-N*E*G,this._w=Y*U*G+N*E*q;break;case"YZX":this._x=N*U*G+Y*E*q,this._y=Y*E*G+N*U*q,this._z=Y*U*q-N*E*G,this._w=Y*U*G-N*E*q;break;case"XZY":this._x=N*U*G-Y*E*q,this._y=Y*E*G-N*U*q,this._z=Y*U*q+N*E*G,this._w=Y*U*G+N*E*q;break;default:_0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],X=Q[9],Y=Q[2],U=Q[6],G=Q[10],N=$+H+G;if(N>0){let E=0.5/Math.sqrt(N+1);this._w=0.25/E,this._x=(U-X)*E,this._y=(Z-Y)*E,this._z=(K-W)*E}else if($>H&&$>G){let E=2*Math.sqrt(1+$-H-G);this._w=(U-X)/E,this._x=0.25*E,this._y=(W+K)/E,this._z=(Z+Y)/E}else if(H>G){let E=2*Math.sqrt(1+H-$-G);this._w=(Z-Y)/E,this._x=(W+K)/E,this._y=0.25*E,this._z=(X+U)/E}else{let E=2*Math.sqrt(1+G-$-H);this._w=(K-W)/E,this._x=(Z+Y)/E,this._y=(X+U)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(l0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,X=Q._y,Y=Q._z,U=Q._w;return this._x=$*U+K*H+W*Y-Z*X,this._y=W*U+K*X+Z*H-$*Y,this._z=Z*U+K*Y+$*X-W*H,this._w=K*U-$*H-W*X-Z*Y,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let X=1-Q;if(H<0.9995){let Y=Math.acos(H),U=Math.sin(Y);X=Math.sin(X*Y)/U,Q=Math.sin(Q*Y)/U,this._x=this._x*X+$*Q,this._y=this._y*X+W*Q,this._z=this._z*X+Z*Q,this._w=this._w*X+K*Q,this._onChangeCallback()}else this._x=this._x*X+$*Q,this._y=this._y*X+W*Q,this._z=this._z*X+Z*Q,this._w=this._w*X+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(eZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(eZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,X=J.w,Y=2*(K*W-H*$),U=2*(H*Q-Z*W),G=2*(Z*$-K*Q);return this.x=Q+X*Y+K*G-H*U,this.y=$+X*U+H*Y-Z*G,this.z=W+X*G+Z*U-K*Y,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,X=Q.z;return this.x=W*X-Z*H,this.y=Z*K-$*X,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return Y$.copy(this).projectOnVector(J),this.sub(Y$)}reflect(J){return this.sub(Y$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Y$=new S,eZ=new K9;class y0{static{this.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,X,Y){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,X,Y)}set(J,Q,$,W,Z,K,H,X,Y){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=X,U[6]=$,U[7]=K,U[8]=Y,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],X=$[6],Y=$[1],U=$[4],G=$[7],N=$[2],E=$[5],q=$[8],R=W[0],D=W[3],F=W[6],O=W[1],k=W[4],_=W[7],B=W[2],I=W[5],C=W[8];return Z[0]=K*R+H*O+X*B,Z[3]=K*D+H*k+X*I,Z[6]=K*F+H*_+X*C,Z[1]=Y*R+U*O+G*B,Z[4]=Y*D+U*k+G*I,Z[7]=Y*F+U*_+G*C,Z[2]=N*R+E*O+q*B,Z[5]=N*D+E*k+q*I,Z[8]=N*F+E*_+q*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],X=J[6],Y=J[7],U=J[8];return Q*K*U-Q*H*Y-$*Z*U+$*H*X+W*Z*Y-W*K*X}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],X=J[6],Y=J[7],U=J[8],G=U*K-H*Y,N=H*X-U*Z,E=Y*Z-K*X,q=Q*G+$*N+W*E;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/q;return J[0]=G*R,J[1]=(W*Y-U*$)*R,J[2]=(H*$-W*K)*R,J[3]=N*R,J[4]=(U*Q-W*X)*R,J[5]=(W*Z-H*Q)*R,J[6]=E*R,J[7]=($*X-Y*Q)*R,J[8]=(K*Q-$*Z)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let X=Math.cos(Z),Y=Math.sin(Z);return this.set($*X,$*Y,-$*(X*K+Y*H)+K+J,-W*Y,W*X,-W*(-Y*K+X*H)+H+Q,0,0,1),this}scale(J,Q){return P8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(U$.makeScale(J,Q)),this}rotate(J){return P8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(U$.makeRotation(-J)),this}translate(J,Q){return P8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(U$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var U$=new y0,JK=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),QK=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function eY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=m9(Z.r),Z.g=m9(Z.g),Z.b=m9(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=K7(Z.r),Z.g=K7(Z.g),Z.b=K7(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[H].fromXYZ).multiply(this.spaces[K].toXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:JK,fromXYZ:QK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:JK,fromXYZ:QK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var g0=eY();function m9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function K7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var l8;class nW{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(l8===void 0)l8=X7("canvas");l8.width=J.width,l8.height=J.height;let W=l8.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=l8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=X7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=m9(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(m9(Q[$]/255)*255);else Q[$]=m9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return _0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var JU=0;class Z6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:JU++}),this.uuid=k9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push(G$(W[K].image));else Z.push(G$(W[K]))}else Z=G$(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function G$(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return nW.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return _0("Texture: Unable to serialize Texture."),{}}var QU=0,E$=new S;class EJ extends n9{constructor(J=EJ.DEFAULT_IMAGE,Q=EJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,X=1009,Y=EJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:QU++}),this.uuid=k9(),this.name="",this.source=new Z6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=Y,this.format=H,this.internalFormat=null,this.type=X,this.offset=new R0(0,0),this.repeat=new R0(1,1),this.center=new R0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(E$).x}get height(){return this.source.getSize(E$).y}get depth(){return this.source.getSize(E$).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){_0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){_0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}EJ.DEFAULT_IMAGE=null;EJ.DEFAULT_MAPPING=300;EJ.DEFAULT_ANISOTROPY=1;class e0{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,X=J.elements,Y=X[0],U=X[4],G=X[8],N=X[1],E=X[5],q=X[9],R=X[2],D=X[6],F=X[10];if(Math.abs(U-N)<0.01&&Math.abs(G-R)<0.01&&Math.abs(q-D)<0.01){if(Math.abs(U+N)<0.1&&Math.abs(G+R)<0.1&&Math.abs(q+D)<0.1&&Math.abs(Y+E+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let k=(Y+1)/2,_=(E+1)/2,B=(F+1)/2,I=(U+N)/4,C=(G+R)/4,L=(q+D)/4;if(k>_&&k>B)if(k<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(k),W=I/$,Z=C/$;else if(_>B)if(_<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(_),$=I/W,Z=L/W;else if(B<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(B),$=C/Z,W=L/Z;return this.set($,W,Z,Q),this}let O=Math.sqrt((D-q)*(D-q)+(G-R)*(G-R)+(N-U)*(N-U));if(Math.abs(O)<0.001)O=1;return this.x=(D-q)/O,this.y=(G-R)/O,this.z=(N-U)/O,this.w=Math.acos((Y+E+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this.w=l0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this.w=l0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sW extends n9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new e0(0,0,J,Q),this.scissorTest=!1,this.viewport=new e0(0,0,J,Q),this.textures=[];let W=$.count;for(let Z=0;Z<W;Z++)this.textures[Z]=new EJ({width:J,height:Q,depth:$.depth}),this.textures[Z].isRenderTargetTexture=!0,this.textures[Z].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new Z6(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class H9 extends sW{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class kQ extends EJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class iW extends EJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class v0{static{this.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,X,Y,U,G,N,E,q,R,D){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,X,Y,U,G,N,E,q,R,D)}set(J,Q,$,W,Z,K,H,X,Y,U,G,N,E,q,R,D){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=$,F[12]=W,F[1]=Z,F[5]=K,F[9]=H,F[13]=X,F[2]=Y,F[6]=U,F[10]=G,F[14]=N,F[3]=E,F[7]=q,F[11]=R,F[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new v0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/m8.setFromMatrixColumn(J,0).length(),Z=1/m8.setFromMatrixColumn(J,1).length(),K=1/m8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),X=Math.cos(W),Y=Math.sin(W),U=Math.cos(Z),G=Math.sin(Z);if(J.order==="XYZ"){let N=K*U,E=K*G,q=H*U,R=H*G;Q[0]=X*U,Q[4]=-X*G,Q[8]=Y,Q[1]=E+q*Y,Q[5]=N-R*Y,Q[9]=-H*X,Q[2]=R-N*Y,Q[6]=q+E*Y,Q[10]=K*X}else if(J.order==="YXZ"){let N=X*U,E=X*G,q=Y*U,R=Y*G;Q[0]=N+R*H,Q[4]=q*H-E,Q[8]=K*Y,Q[1]=K*G,Q[5]=K*U,Q[9]=-H,Q[2]=E*H-q,Q[6]=R+N*H,Q[10]=K*X}else if(J.order==="ZXY"){let N=X*U,E=X*G,q=Y*U,R=Y*G;Q[0]=N-R*H,Q[4]=-K*G,Q[8]=q+E*H,Q[1]=E+q*H,Q[5]=K*U,Q[9]=R-N*H,Q[2]=-K*Y,Q[6]=H,Q[10]=K*X}else if(J.order==="ZYX"){let N=K*U,E=K*G,q=H*U,R=H*G;Q[0]=X*U,Q[4]=q*Y-E,Q[8]=N*Y+R,Q[1]=X*G,Q[5]=R*Y+N,Q[9]=E*Y-q,Q[2]=-Y,Q[6]=H*X,Q[10]=K*X}else if(J.order==="YZX"){let N=K*X,E=K*Y,q=H*X,R=H*Y;Q[0]=X*U,Q[4]=R-N*G,Q[8]=q*G+E,Q[1]=G,Q[5]=K*U,Q[9]=-H*U,Q[2]=-Y*U,Q[6]=E*G+q,Q[10]=N-R*G}else if(J.order==="XZY"){let N=K*X,E=K*Y,q=H*X,R=H*Y;Q[0]=X*U,Q[4]=-G,Q[8]=Y*U,Q[1]=N*G+R,Q[5]=K*U,Q[9]=E*G-q,Q[2]=q*G-E,Q[6]=H*U,Q[10]=R*G+N}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose($U,J,WU)}lookAt(J,Q,$){let W=this.elements;if(rJ.subVectors(J,Q),rJ.lengthSq()===0)rJ.z=1;if(rJ.normalize(),t9.crossVectors($,rJ),t9.lengthSq()===0){if(Math.abs($.z)===1)rJ.x+=0.0001;else rJ.z+=0.0001;rJ.normalize(),t9.crossVectors($,rJ)}return t9.normalize(),S6.crossVectors(rJ,t9),W[0]=t9.x,W[4]=S6.x,W[8]=rJ.x,W[1]=t9.y,W[5]=S6.y,W[9]=rJ.y,W[2]=t9.z,W[6]=S6.z,W[10]=rJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],X=$[8],Y=$[12],U=$[1],G=$[5],N=$[9],E=$[13],q=$[2],R=$[6],D=$[10],F=$[14],O=$[3],k=$[7],_=$[11],B=$[15],I=W[0],C=W[4],L=W[8],z=W[12],j=W[1],l=W[5],y=W[9],p=W[13],t=W[2],A=W[6],s=W[10],o=W[14],x=W[3],K0=W[7],u=W[11],r=W[15];return Z[0]=K*I+H*j+X*t+Y*x,Z[4]=K*C+H*l+X*A+Y*K0,Z[8]=K*L+H*y+X*s+Y*u,Z[12]=K*z+H*p+X*o+Y*r,Z[1]=U*I+G*j+N*t+E*x,Z[5]=U*C+G*l+N*A+E*K0,Z[9]=U*L+G*y+N*s+E*u,Z[13]=U*z+G*p+N*o+E*r,Z[2]=q*I+R*j+D*t+F*x,Z[6]=q*C+R*l+D*A+F*K0,Z[10]=q*L+R*y+D*s+F*u,Z[14]=q*z+R*p+D*o+F*r,Z[3]=O*I+k*j+_*t+B*x,Z[7]=O*C+k*l+_*A+B*K0,Z[11]=O*L+k*y+_*s+B*u,Z[15]=O*z+k*p+_*o+B*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],X=J[9],Y=J[13],U=J[2],G=J[6],N=J[10],E=J[14],q=J[3],R=J[7],D=J[11],F=J[15],O=X*E-Y*N,k=H*E-Y*G,_=H*N-X*G,B=K*E-Y*U,I=K*N-X*U,C=K*G-H*U;return Q*(R*O-D*k+F*_)-$*(q*O-D*B+F*I)+W*(q*k-R*B+F*C)-Z*(q*_-R*I+D*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],X=J[2],Y=J[6],U=J[10];return Q*(K*U-H*Y)-$*(Z*U-H*X)+W*(Z*Y-K*X)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],X=J[6],Y=J[7],U=J[8],G=J[9],N=J[10],E=J[11],q=J[12],R=J[13],D=J[14],F=J[15],O=Q*H-$*K,k=Q*X-W*K,_=Q*Y-Z*K,B=$*X-W*H,I=$*Y-Z*H,C=W*Y-Z*X,L=U*R-G*q,z=U*D-N*q,j=U*F-E*q,l=G*D-N*R,y=G*F-E*R,p=N*F-E*D,t=O*p-k*y+_*l+B*j-I*z+C*L;if(t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/t;return J[0]=(H*p-X*y+Y*l)*A,J[1]=(W*y-$*p-Z*l)*A,J[2]=(R*C-D*I+F*B)*A,J[3]=(N*I-G*C-E*B)*A,J[4]=(X*j-K*p-Y*z)*A,J[5]=(Q*p-W*j+Z*z)*A,J[6]=(D*_-q*C-F*k)*A,J[7]=(U*C-N*_+E*k)*A,J[8]=(K*y-H*j+Y*L)*A,J[9]=($*j-Q*y-Z*L)*A,J[10]=(q*I-R*_+F*O)*A,J[11]=(G*_-U*I-E*O)*A,J[12]=(H*z-K*l-X*L)*A,J[13]=(Q*l-$*z+W*L)*A,J[14]=(R*k-q*B-D*O)*A,J[15]=(U*B-G*k+N*O)*A,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,X=J.z,Y=Z*K,U=Z*H;return this.set(Y*K+$,Y*H-W*X,Y*X+W*H,0,Y*H+W*X,U*H+$,U*X-W*K,0,Y*X-W*H,U*X+W*K,Z*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,X=Q._w,Y=Z+Z,U=K+K,G=H+H,N=Z*Y,E=Z*U,q=Z*G,R=K*U,D=K*G,F=H*G,O=X*Y,k=X*U,_=X*G,B=$.x,I=$.y,C=$.z;return W[0]=(1-(R+F))*B,W[1]=(E+_)*B,W[2]=(q-k)*B,W[3]=0,W[4]=(E-_)*I,W[5]=(1-(N+F))*I,W[6]=(D+O)*I,W[7]=0,W[8]=(q+k)*C,W[9]=(D-O)*C,W[10]=(1-(N+R))*C,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=m8.set(W[0],W[1],W[2]).length(),H=m8.set(W[4],W[5],W[6]).length(),X=m8.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;R9.copy(this);let Y=1/K,U=1/H,G=1/X;return R9.elements[0]*=Y,R9.elements[1]*=Y,R9.elements[2]*=Y,R9.elements[4]*=U,R9.elements[5]*=U,R9.elements[6]*=U,R9.elements[8]*=G,R9.elements[9]*=G,R9.elements[10]*=G,Q.setFromRotationMatrix(R9),$.x=K,$.y=H,$.z=X,this}makePerspective(J,Q,$,W,Z,K,H=2000,X=!1){let Y=this.elements,U=2*Z/(Q-J),G=2*Z/($-W),N=(Q+J)/(Q-J),E=($+W)/($-W),q,R;if(X)q=Z/(K-Z),R=K*Z/(K-Z);else if(H===2000)q=-(K+Z)/(K-Z),R=-2*K*Z/(K-Z);else if(H===2001)q=-K/(K-Z),R=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return Y[0]=U,Y[4]=0,Y[8]=N,Y[12]=0,Y[1]=0,Y[5]=G,Y[9]=E,Y[13]=0,Y[2]=0,Y[6]=0,Y[10]=q,Y[14]=R,Y[3]=0,Y[7]=0,Y[11]=-1,Y[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,X=!1){let Y=this.elements,U=2/(Q-J),G=2/($-W),N=-(Q+J)/(Q-J),E=-($+W)/($-W),q,R;if(X)q=1/(K-Z),R=K/(K-Z);else if(H===2000)q=-2/(K-Z),R=-(K+Z)/(K-Z);else if(H===2001)q=-1/(K-Z),R=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return Y[0]=U,Y[4]=0,Y[8]=0,Y[12]=N,Y[1]=0,Y[5]=G,Y[9]=0,Y[13]=E,Y[2]=0,Y[6]=0,Y[10]=q,Y[14]=R,Y[3]=0,Y[7]=0,Y[11]=0,Y[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var m8=new S,R9=new v0,$U=new S(0,0,0),WU=new S(1,1,1),t9=new S,S6=new S,rJ=new S,$K=new v0,WK=new K9;class d9{constructor(J=0,Q=0,$=0,W=d9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],X=W[1],Y=W[5],U=W[9],G=W[2],N=W[6],E=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(l0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,E),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(N,Y),this._z=0;break;case"YXZ":if(this._x=Math.asin(-l0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,E),this._z=Math.atan2(X,Y);else this._y=Math.atan2(-G,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(l0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-G,E),this._z=Math.atan2(-K,Y);else this._y=0,this._z=Math.atan2(X,Z);break;case"ZYX":if(this._y=Math.asin(-l0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(N,E),this._z=Math.atan2(X,Z);else this._x=0,this._z=Math.atan2(-K,Y);break;case"YZX":if(this._z=Math.asin(l0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,Y),this._y=Math.atan2(-G,Z);else this._x=0,this._y=Math.atan2(H,E);break;case"XZY":if(this._z=Math.asin(-l0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(N,Y),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,E),this._y=0;break;default:_0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return $K.makeRotationFromQuaternion(J),this.setFromRotationMatrix($K,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return WK.setFromEuler(this),this.setFromQuaternion(WK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}d9.DEFAULT_ORDER="XYZ";class zQ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var ZU=0,ZK=new S,d8=new K9,f9=new v0,j6=new S,S7=new S,KU=new S,HU=new K9,KK=new S(1,0,0),HK=new S(0,1,0),XK=new S(0,0,1),YK={type:"added"},XU={type:"removed"},u8={type:"childadded",child:null},N$={type:"childremoved",child:null};class QJ extends n9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZU++}),this.uuid=k9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=QJ.DEFAULT_UP.clone();let J=new S,Q=new d9,$=new K9,W=new S(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new v0},normalMatrix:{value:new y0}}),this.matrix=new v0,this.matrixWorld=new v0,this.matrixAutoUpdate=QJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=QJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zQ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return d8.setFromAxisAngle(J,Q),this.quaternion.multiply(d8),this}rotateOnWorldAxis(J,Q){return d8.setFromAxisAngle(J,Q),this.quaternion.premultiply(d8),this}rotateX(J){return this.rotateOnAxis(KK,J)}rotateY(J){return this.rotateOnAxis(HK,J)}rotateZ(J){return this.rotateOnAxis(XK,J)}translateOnAxis(J,Q){return ZK.copy(J).applyQuaternion(this.quaternion),this.position.add(ZK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(KK,J)}translateY(J){return this.translateOnAxis(HK,J)}translateZ(J){return this.translateOnAxis(XK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(f9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)j6.copy(J);else j6.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),S7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)f9.lookAt(S7,j6,this.up);else f9.lookAt(j6,S7,this.up);if(this.quaternion.setFromRotationMatrix(f9),W)f9.extractRotation(W.matrixWorld),d8.setFromRotationMatrix(f9),this.quaternion.premultiply(d8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return j0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(YK),u8.child=J,this.dispatchEvent(u8),u8.child=null;else j0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(XU),N$.child=J,this.dispatchEvent(N$),N$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),f9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),f9.multiply(J.parent.matrixWorld);return J.applyMatrix4(f9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(YK),u8.child=J,this.dispatchEvent(u8),u8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(S7,J,KU),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(S7,HU,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,X){if(H[X.uuid]===void 0)H[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let X=H.shapes;if(Array.isArray(X))for(let Y=0,U=X.length;Y<U;Y++){let G=X[Y];Z(J.shapes,G)}else Z(J.shapes,X)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let X=0,Y=this.material.length;X<Y;X++)H.push(Z(J.materials,this.material[X]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let X=this.animations[H];W.animations.push(Z(J.animations,X))}}if(Q){let H=K(J.geometries),X=K(J.materials),Y=K(J.textures),U=K(J.images),G=K(J.shapes),N=K(J.skeletons),E=K(J.animations),q=K(J.nodes);if(H.length>0)$.geometries=H;if(X.length>0)$.materials=X;if(Y.length>0)$.textures=Y;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(N.length>0)$.skeletons=N;if(E.length>0)$.animations=E;if(q.length>0)$.nodes=q}return $.object=W,$;function K(H){let X=[];for(let Y in H){let U=H[Y];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}QJ.DEFAULT_UP=new S(0,1,0);QJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;QJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class J9 extends QJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var YU={type:"move"};class K6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new J9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new J9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new J9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,X=this._grip,Y=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(Y&&J.hand){K=!0;for(let R of J.hand.values()){let D=Q.getJointPose(R,$),F=this._getHandJoint(Y,R);if(D!==null)F.matrix.fromArray(D.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=D.radius;F.visible=D!==null}let U=Y.joints["index-finger-tip"],G=Y.joints["thumb-tip"],N=U.position.distanceTo(G.position),E=0.02,q=0.005;if(Y.inputState.pinching&&N>E+q)Y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!Y.inputState.pinching&&N<=E-q)Y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(YU)}}}if(H!==null)H.visible=W!==null;if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new J9;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var dH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},e9={h:0,s:0,l:0},v6={h:0,s:0,l:0};function q$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class A0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,g0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=g0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,g0.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=g0.workingColorSpace){if(J=mW(J,1),Q=l0(Q,0,1),$=l0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=q$(K,Z,J+0.3333333333333333),this.g=q$(K,Z,J),this.b=q$(K,Z,J-0.3333333333333333)}return g0.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)_0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseFloat(Z[1]))/100,Math.min(100,parseFloat(Z[2]))/100,Math.min(100,parseFloat(Z[3]))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:_0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else _0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=dH[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else _0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=m9(J.r),this.g=m9(J.g),this.b=m9(J.b),this}copyLinearToSRGB(J){return this.r=K7(J.r),this.g=K7(J.g),this.b=K7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return g0.workingToColorSpace(jJ.copy(this),J),Math.round(l0(jJ.r*255,0,255))*65536+Math.round(l0(jJ.g*255,0,255))*256+Math.round(l0(jJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=g0.workingColorSpace){g0.workingToColorSpace(jJ.copy(this),Q);let{r:$,g:W,b:Z}=jJ,K=Math.max($,W,Z),H=Math.min($,W,Z),X,Y,U=(H+K)/2;if(H===K)X=0,Y=0;else{let G=K-H;switch(Y=U<=0.5?G/(K+H):G/(2-K-H),K){case $:X=(W-Z)/G+(W<Z?6:0);break;case W:X=(Z-$)/G+2;break;case Z:X=($-W)/G+4;break}X/=6}return J.h=X,J.s=Y,J.l=U,J}getRGB(J,Q=g0.workingColorSpace){return g0.workingToColorSpace(jJ.copy(this),Q),J.r=jJ.r,J.g=jJ.g,J.b=jJ.b,J}getStyle(J="srgb"){g0.workingToColorSpace(jJ.copy(this),J);let{r:Q,g:$,b:W}=jJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(e9),this.setHSL(e9.h+J,e9.s+Q,e9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(e9),J.getHSL(v6);let $=c7(e9.h,v6.h,Q),W=c7(e9.s,v6.s,Q),Z=c7(e9.l,v6.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var jJ=new A0;A0.NAMES=dH;class _Q extends QJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new d9,this.environmentIntensity=1,this.environmentRotation=new d9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){return super.copy(J,Q),this.background=J.background!==null?J.background.clone():null,this.environment=J.environment!==null?J.environment.clone():null,this.fog=J.fog!==null?J.fog.clone():null,this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),this.overrideMaterial=J.overrideMaterial!==null?J.overrideMaterial.clone():null,this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var L9=new S,b9=new S,F$=new S,x9=new S,c8=new S,n8=new S,UK=new S,O$=new S,R$=new S,L$=new S,M$=new e0,V$=new e0,D$=new e0;class eJ{constructor(J=new S,Q=new S,$=new S){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),L9.subVectors(J,Q),W.cross(L9);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){L9.subVectors(W,Q),b9.subVectors($,Q),F$.subVectors(J,Q);let K=L9.dot(L9),H=L9.dot(b9),X=L9.dot(F$),Y=b9.dot(b9),U=b9.dot(F$),G=K*Y-H*H;if(G===0)return Z.set(0,0,0),null;let N=1/G,E=(Y*X-H*U)*N,q=(K*U-H*X)*N;return Z.set(1-E-q,q,E)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,x9)===null)return!1;return x9.x>=0&&x9.y>=0&&x9.x+x9.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,X){if(this.getBarycoord(J,Q,$,W,x9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(Z,x9.x),X.addScaledVector(K,x9.y),X.addScaledVector(H,x9.z),X}static getInterpolatedAttribute(J,Q,$,W,Z,K){return M$.setScalar(0),V$.setScalar(0),D$.setScalar(0),M$.fromBufferAttribute(J,Q),V$.fromBufferAttribute(J,$),D$.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(M$,Z.x),K.addScaledVector(V$,Z.y),K.addScaledVector(D$,Z.z),K}static isFrontFacing(J,Q,$,W){return L9.subVectors($,Q),b9.subVectors(J,Q),L9.cross(b9).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return L9.subVectors(this.c,this.b),b9.subVectors(this.a,this.b),L9.cross(b9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return eJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return eJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return eJ.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return eJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return eJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;c8.subVectors(W,$),n8.subVectors(Z,$),O$.subVectors(J,$);let X=c8.dot(O$),Y=n8.dot(O$);if(X<=0&&Y<=0)return Q.copy($);R$.subVectors(J,W);let U=c8.dot(R$),G=n8.dot(R$);if(U>=0&&G<=U)return Q.copy(W);let N=X*G-U*Y;if(N<=0&&X>=0&&U<=0&&X-U>0)return K=X/(X-U),Q.copy($).addScaledVector(c8,K);L$.subVectors(J,Z);let E=c8.dot(L$),q=n8.dot(L$);if(q>=0&&E<=q)return Q.copy(Z);let R=E*Y-X*q;if(R<=0&&Y>=0&&q<=0)return H=Y/(Y-q),Q.copy($).addScaledVector(n8,H);let D=U*q-E*G;if(D<=0&&G-U>=0&&E-q>=0)return UK.subVectors(Z,W),H=(G-U)/(G-U+(E-q)),Q.copy(W).addScaledVector(UK,H);let F=1/(D+R+N);return K=R*F,H=N*F,Q.copy($).addScaledVector(c8,K).addScaledVector(n8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class nJ{constructor(J=new S(1/0,1/0,1/0),Q=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(M9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(M9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=M9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,M9);else M9.fromBufferAttribute(Z,K);M9.applyMatrix4(J.matrixWorld),this.expandByPoint(M9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();y6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();y6.copy($.boundingBox)}y6.applyMatrix4(J.matrixWorld),this.union(y6)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,M9),M9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(j7),h6.subVectors(this.max,j7),s8.subVectors(J.a,j7),i8.subVectors(J.b,j7),o8.subVectors(J.c,j7),J8.subVectors(i8,s8),Q8.subVectors(o8,i8),B8.subVectors(s8,o8);let Q=[0,-J8.z,J8.y,0,-Q8.z,Q8.y,0,-B8.z,B8.y,J8.z,0,-J8.x,Q8.z,0,-Q8.x,B8.z,0,-B8.x,-J8.y,J8.x,0,-Q8.y,Q8.x,0,-B8.y,B8.x,0];if(!B$(Q,s8,i8,o8,h6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!B$(Q,s8,i8,o8,h6))return!1;return f6.crossVectors(J8,Q8),Q=[f6.x,f6.y,f6.z],B$(Q,s8,i8,o8,h6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,M9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(M9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return g9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),g9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),g9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),g9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),g9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),g9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),g9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),g9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(g9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var g9=[new S,new S,new S,new S,new S,new S,new S,new S],M9=new S,y6=new nJ,s8=new S,i8=new S,o8=new S,J8=new S,Q8=new S,B8=new S,j7=new S,h6=new S,f6=new S,k8=new S;function B$(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){k8.fromArray(J,K);let X=Z.x*Math.abs(k8.x)+Z.y*Math.abs(k8.y)+Z.z*Math.abs(k8.z),Y=Q.dot(k8),U=$.dot(k8),G=W.dot(k8);if(Math.max(-Math.max(Y,U,G),Math.min(Y,U,G))>X)return!1}return!0}var OJ=new S,b6=new R0,UU=0;class UJ extends n9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UU++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?BQ(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)b6.fromBufferAttribute(this,Q),b6.applyMatrix3(J),this.setXY(Q,b6.x,b6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.applyMatrix3(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.applyMatrix4(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.applyNormalMatrix(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.transformDirection(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):uW(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):cW(J,this.array)}}class PQ extends UJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class IQ extends UJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class IJ extends UJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var GU=new nJ,v7=new S,k$=new S;class Q9{constructor(J=new S,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else GU.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;v7.subVectors(J,this.center);let Q=v7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(v7,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else k$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(v7.copy(J.center).add(k$)),this.expandByPoint(v7.copy(J.center).sub(k$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var EU=0,Z9=new v0,z$=new QJ,a8=new S,tJ=new nJ,y7=new nJ,kJ=new S;class RJ extends n9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EU++}),this.uuid=k9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((fY(J))?IQ:PQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new y0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return Z9.makeRotationFromQuaternion(J),this.applyMatrix4(Z9),this}rotateX(J){return Z9.makeRotationX(J),this.applyMatrix4(Z9),this}rotateY(J){return Z9.makeRotationY(J),this.applyMatrix4(Z9),this}rotateZ(J){return Z9.makeRotationZ(J),this.applyMatrix4(Z9),this}translate(J,Q,$){return Z9.makeTranslation(J,Q,$),this.applyMatrix4(Z9),this}scale(J,Q,$){return Z9.makeScale(J,Q,$),this.applyMatrix4(Z9),this}lookAt(J){return z$.lookAt(J),z$.updateMatrix(),this.applyMatrix4(z$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(a8).negate(),this.translate(a8.x,a8.y,a8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new IJ($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)_0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new nJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(tJ.setFromBufferAttribute(Z),this.morphTargetsRelative)kJ.addVectors(this.boundingBox.min,tJ.min),this.boundingBox.expandByPoint(kJ),kJ.addVectors(this.boundingBox.max,tJ.max),this.boundingBox.expandByPoint(kJ);else this.boundingBox.expandByPoint(tJ.min),this.boundingBox.expandByPoint(tJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))j0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Q9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(J){let $=this.boundingSphere.center;if(tJ.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(y7.setFromBufferAttribute(H),this.morphTargetsRelative)kJ.addVectors(tJ.min,y7.min),tJ.expandByPoint(kJ),kJ.addVectors(tJ.max,y7.max),tJ.expandByPoint(kJ);else tJ.expandByPoint(y7.min),tJ.expandByPoint(y7.max)}tJ.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)kJ.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(kJ));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],X=this.morphTargetsRelative;for(let Y=0,U=H.count;Y<U;Y++){if(kJ.fromBufferAttribute(H,Y),X)a8.fromBufferAttribute(J,Y),kJ.add(a8);W=Math.max(W,$.distanceToSquared(kJ))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))j0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){j0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new UJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],X=[],Y=new Uint8Array($.count);for(let z=0;z<$.count;z++)H[z]=new S,X[z]=new S;let U=new S,G=new S,N=new S,E=new R0,q=new R0,R=new R0,D=new S,F=new S;function O(z,j,l){Y[z]=Y[j]=Y[l]=1,U.fromBufferAttribute($,z),G.fromBufferAttribute($,j),N.fromBufferAttribute($,l),E.fromBufferAttribute(Z,z),q.fromBufferAttribute(Z,j),R.fromBufferAttribute(Z,l),G.sub(U),N.sub(U),q.sub(E),R.sub(E);let y=1/(q.x*R.y-R.x*q.y);if(!isFinite(y))return;D.copy(G).multiplyScalar(R.y).addScaledVector(N,-q.y).multiplyScalar(y),F.copy(N).multiplyScalar(q.x).addScaledVector(G,-R.x).multiplyScalar(y),H[z].add(D),H[j].add(D),H[l].add(D),X[z].add(F),X[j].add(F),X[l].add(F)}let k=this.groups;if(k.length===0)k=[{start:0,count:J.count}];for(let z=0,j=k.length;z<j;++z){let l=k[z],y=l.start,p=l.count;for(let t=y,A=y+p;t<A;t+=3)O(J.getX(t+0),J.getX(t+1),J.getX(t+2))}let _=new S,B=new S,I=new S,C=new S;function L(z){I.fromBufferAttribute(W,z),C.copy(I);let j=H[z];_.copy(j),_.sub(I.multiplyScalar(I.dot(j))).normalize(),B.crossVectors(C,j);let y=B.dot(X[z])<0?-1:1;K.setXYZW(z,_.x,_.y,_.z,y)}for(let z=0,j=$.count;z<j;++z)if(Y[z])L(z);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new UJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let N=0,E=$.count;N<E;N++)$.setXYZ(N,0,0,0);let W=new S,Z=new S,K=new S,H=new S,X=new S,Y=new S,U=new S,G=new S;if(J)for(let N=0,E=J.count;N<E;N+=3){let q=J.getX(N+0),R=J.getX(N+1),D=J.getX(N+2);W.fromBufferAttribute(Q,q),Z.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,D),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),H.fromBufferAttribute($,q),X.fromBufferAttribute($,R),Y.fromBufferAttribute($,D),H.add(U),X.add(U),Y.add(U),$.setXYZ(q,H.x,H.y,H.z),$.setXYZ(R,X.x,X.y,X.z),$.setXYZ(D,Y.x,Y.y,Y.z)}else for(let N=0,E=Q.count;N<E;N+=3)W.fromBufferAttribute(Q,N+0),Z.fromBufferAttribute(Q,N+1),K.fromBufferAttribute(Q,N+2),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),$.setXYZ(N+0,U.x,U.y,U.z),$.setXYZ(N+1,U.x,U.y,U.z),$.setXYZ(N+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)kJ.fromBufferAttribute(J,Q),kJ.normalize(),J.setXYZ(Q,kJ.x,kJ.y,kJ.z)}toNonIndexed(){function J(H,X){let{array:Y,itemSize:U,normalized:G}=H,N=new Y.constructor(X.length*U),E=0,q=0;for(let R=0,D=X.length;R<D;R++){if(H.isInterleavedBufferAttribute)E=X[R]*H.data.stride+H.offset;else E=X[R]*U;for(let F=0;F<U;F++)N[q++]=Y[E++]}return new UJ(N,U,G)}if(this.index===null)return _0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new RJ,$=this.index.array,W=this.attributes;for(let H in W){let X=W[H],Y=J(X,$);Q.setAttribute(H,Y)}let Z=this.morphAttributes;for(let H in Z){let X=[],Y=Z[H];for(let U=0,G=Y.length;U<G;U++){let N=Y[U],E=J(N,$);X.push(E)}Q.morphAttributes[H]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,X=K.length;H<X;H++){let Y=K[H];Q.addGroup(Y.start,Y.count,Y.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let Y in X)if(X[Y]!==void 0)J[Y]=X[Y];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let Y=$[X];J.data.attributes[X]=Y.toJSON(J.data)}let W={},Z=!1;for(let X in this.morphAttributes){let Y=this.morphAttributes[X],U=[];for(let G=0,N=Y.length;G<N;G++){let E=Y[G];U.push(E.toJSON(J.data))}if(U.length>0)W[X]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let Y in W){let U=W[Y];this.setAttribute(Y,U.clone(Q))}let Z=J.morphAttributes;for(let Y in Z){let U=[],G=Z[Y];for(let N=0,E=G.length;N<E;N++)U.push(G[N].clone(Q));this.morphAttributes[Y]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let Y=0,U=K.length;Y<U;Y++){let G=K[Y];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Y8{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=k9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=GK(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[Q]),W=new this.constructor($,this.stride);return W.setUsage(this.usage),W}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=GK(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=Array.from(new Uint32Array(this.array.slice(0).buffer));let $={uuid:this.uuid,buffer:Q,type:this.array.constructor.name,stride:this.stride};return $.usage=this.usage,$}}function GK(J){if(J.buffer._uuid===void 0)J.buffer._uuid=k9();if(J.byteOffset===0&&J.byteLength===J.buffer.byteLength)return J.buffer._uuid;return J.buffer._uuid+":"+J.byteOffset+":"+J.byteLength}var xJ=new S;class C9{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W,this._normalizationScale=J!==void 0?BQ(J.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)xJ.fromBufferAttribute(this,Q),xJ.applyMatrix4(J),this.setXYZ(Q,xJ.x,xJ.y,xJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)xJ.fromBufferAttribute(this,Q),xJ.applyNormalMatrix(J),this.setXYZ(Q,xJ.x,xJ.y,xJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)xJ.fromBufferAttribute(this,Q),xJ.transformDirection(J),this.setXYZ(Q,xJ.x,xJ.y,xJ.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=this._denormalize(Q);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=this._denormalize(Q);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=this._denormalize(Q);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=this._denormalize(Q);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W),Z=this._normalize(Z);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){i7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new UJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new C9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){i7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):uW(J,this.data.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):cW(J,this.data.array)}}var _$=new S,NU=new S,qU=new y0;class P9{constructor(J=new S(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=_$.subVectors($,Q).cross(NU.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(_$),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||qU.getNormalMatrix(J),W=this.coplanarPoint(_$).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var FU=0;class sJ extends n9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:FU++}),this.uuid=k9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new A0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){_0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){_0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)$.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)$.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let X=Z[H];delete X.metadata,K.push(X)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new A0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new P9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new R0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new R0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class H6 extends sJ{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new A0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var r8,h7=new S,t8=new S,e8=new S,J7=new R0,f7=new R0,uH=new v0,x6=new S,b7=new S,g6=new S,EK=new R0,P$=new R0,NK=new R0;class CQ extends QJ{constructor(J=new H6){super();if(this.isSprite=!0,this.type="Sprite",r8===void 0){r8=new RJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new Y8(Q,5);r8.setIndex([0,1,2,0,2,3]),r8.setAttribute("position",new C9($,3,0,!1)),r8.setAttribute("uv",new C9($,2,3,!1))}this.geometry=r8,this.material=J,this.center=new R0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)j0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(t8.setFromMatrixScale(this.matrixWorld),uH.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),e8.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)t8.multiplyScalar(-e8.z);let $=this.material.rotation,W,Z;if($!==0)Z=Math.cos($),W=Math.sin($);let K=this.center;p6(x6.set(-0.5,-0.5,0),e8,K,t8,W,Z),p6(b7.set(0.5,-0.5,0),e8,K,t8,W,Z),p6(g6.set(0.5,0.5,0),e8,K,t8,W,Z),EK.set(0,0),P$.set(1,0),NK.set(1,1);let H=J.ray.intersectTriangle(x6,b7,g6,!1,h7);if(H===null){if(p6(b7.set(-0.5,0.5,0),e8,K,t8,W,Z),P$.set(0,1),H=J.ray.intersectTriangle(x6,g6,b7,!1,h7),H===null)return}let X=J.ray.origin.distanceTo(h7);if(X<J.near||X>J.far)return;Q.push({distance:X,point:h7.clone(),uv:eJ.getInterpolation(h7,x6,b7,g6,EK,P$,NK,new R0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}toJSON(J){let Q=super.toJSON(J);return Q.object.center=this.center.toArray(),Q}}function p6(J,Q,$,W,Z,K){if(J7.subVectors(J,$).addScalar(0.5).multiply(W),Z!==void 0)f7.x=K*J7.x-Z*J7.y,f7.y=Z*J7.x+K*J7.y;else f7.copy(J7);J.copy(Q),J.x+=f7.x,J.y+=f7.y,J.applyMatrix4(uH)}var p9=new S,I$=new S,l6=new S,m6=new S;class M7{constructor(J=new S,Q=new S(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,p9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=p9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return p9.copy(this.origin).addScaledVector(this.direction,Q),p9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){I$.copy(J).add(Q).multiplyScalar(0.5),l6.copy(Q).sub(J).normalize(),m6.copy(this.origin).sub(I$);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(l6),H=m6.dot(this.direction),X=-m6.dot(l6),Y=m6.lengthSq(),U=Math.abs(1-K*K),G,N,E,q;if(U>0)if(G=K*X-H,N=K*H-X,q=Z*U,G>=0)if(N>=-q)if(N<=q){let R=1/U;G*=R,N*=R,E=G*(G+K*N+2*H)+N*(K*G+N+2*X)+Y}else N=Z,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*X)+Y;else N=-Z,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*X)+Y;else if(N<=-q)G=Math.max(0,-(-K*Z+H)),N=G>0?-Z:Math.min(Math.max(-Z,-X),Z),E=-G*G+N*(N+2*X)+Y;else if(N<=q)G=0,N=Math.min(Math.max(-Z,-X),Z),E=N*(N+2*X)+Y;else G=Math.max(0,-(K*Z+H)),N=G>0?Z:Math.min(Math.max(-Z,-X),Z),E=-G*G+N*(N+2*X)+Y;else N=K>0?-Z:Z,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*X)+Y;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(W)W.copy(I$).addScaledVector(l6,N);return E}intersectSphere(J,Q){if(J.radius<0)return null;p9.subVectors(J.center,this.origin);let $=p9.dot(this.direction),W=p9.dot(p9)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,X=$+K;if(X<0)return null;if(H<0)return this.at(X,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,X,Y=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,N=this.origin;if(Y>=0)$=(J.min.x-N.x)*Y,W=(J.max.x-N.x)*Y;else $=(J.max.x-N.x)*Y,W=(J.min.x-N.x)*Y;if(U>=0)Z=(J.min.y-N.y)*U,K=(J.max.y-N.y)*U;else Z=(J.max.y-N.y)*U,K=(J.min.y-N.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(G>=0)H=(J.min.z-N.z)*G,X=(J.max.z-N.z)*G;else H=(J.max.z-N.z)*G,X=(J.min.z-N.z)*G;if($>X||H>W)return null;if(H>$||$!==$)$=H;if(X<W||W!==W)W=X;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,p9)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,X=H.x,Y=H.y,U=H.z,G=J.x-K.x,N=J.y-K.y,E=J.z-K.z,q=Q.x-K.x,R=Q.y-K.y,D=Q.z-K.z,F=$.x-K.x,O=$.y-K.y,k=$.z-K.z,_=Math.abs(X),B=Math.abs(Y),I=Math.abs(U),C,L,z,j,l,y,p,t,A,s,o,x;if(_>=B&&_>=I)if(z=X,y=G,A=q,x=F,X>=0)C=Y,L=U,j=N,l=E,p=R,t=D,s=O,o=k;else C=U,L=Y,j=E,l=N,p=D,t=R,s=k,o=O;else if(B>=I)if(z=Y,y=N,A=R,x=O,Y>=0)C=U,L=X,j=E,l=G,p=D,t=q,s=k,o=F;else C=X,L=U,j=G,l=E,p=q,t=D,s=F,o=k;else if(z=U,y=E,A=D,x=k,U>=0)C=X,L=Y,j=G,l=N,p=q,t=R,s=F,o=O;else C=Y,L=X,j=N,l=G,p=R,t=q,s=O,o=F;if(z===0)return null;let K0=C/z,u=L/z,r=1/z,$0=j-K0*y,k0=l-u*y,i=p-K0*A,Q0=t-u*A,D0=s-K0*x,w0=o-u*x,T0=D0*Q0-w0*i,B0=$0*w0-k0*D0,a0=i*k0-Q0*$0;if(W){if(T0<0||B0<0||a0<0)return null}else if((T0<0||B0<0||a0<0)&&(T0>0||B0>0||a0>0))return null;let d0=T0+B0+a0;if(d0===0)return null;let b0=r*(T0*y+B0*A+a0*x);if(d0>0?b0<0:b0>0)return null;return this.at(b0/d0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class X9 extends sJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new A0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new d9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var qK=new v0,z8=new M7,d6=new Q9,FK=new S,u6=new S,c6=new S,n6=new S,C$=new S,s6=new S,OK=new S,i6=new S;class _J extends QJ{constructor(J=new RJ,Q=new X9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){s6.set(0,0,0);for(let X=0,Y=Z.length;X<Y;X++){let U=H[X],G=Z[X];if(U===0)continue;if(C$.fromBufferAttribute(G,J),K)s6.addScaledVector(C$,U);else s6.addScaledVector(C$.sub(Q),U)}Q.add(s6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(d6.copy($.boundingSphere),d6.applyMatrix4(Z),z8.copy(J.ray).recast(J.near),d6.containsPoint(z8.origin)===!1){if(z8.intersectSphere(d6,FK)===null)return;if(z8.origin.distanceToSquared(FK)>(J.far-J.near)**2)return}if(qK.copy(Z).invert(),z8.copy(J.ray).applyMatrix4(qK),$.boundingBox!==null){if(z8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,z8)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,X=Z.attributes.position,Y=Z.attributes.uv,U=Z.attributes.uv1,G=Z.attributes.normal,N=Z.groups,E=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let q=0,R=N.length;q<R;q++){let D=N[q],F=K[D.materialIndex],O=Math.max(D.start,E.start),k=Math.min(H.count,Math.min(D.start+D.count,E.start+E.count));for(let _=O,B=k;_<B;_+=3){let I=H.getX(_),C=H.getX(_+1),L=H.getX(_+2);if(W=o6(this,F,J,$,Y,U,G,I,C,L),W)W.faceIndex=Math.floor(_/3),W.face.materialIndex=D.materialIndex,Q.push(W)}}else{let q=Math.max(0,E.start),R=Math.min(H.count,E.start+E.count);for(let D=q,F=R;D<F;D+=3){let O=H.getX(D),k=H.getX(D+1),_=H.getX(D+2);if(W=o6(this,K,J,$,Y,U,G,O,k,_),W)W.faceIndex=Math.floor(D/3),Q.push(W)}}else if(X!==void 0)if(Array.isArray(K))for(let q=0,R=N.length;q<R;q++){let D=N[q],F=K[D.materialIndex],O=Math.max(D.start,E.start),k=Math.min(X.count,Math.min(D.start+D.count,E.start+E.count));for(let _=O,B=k;_<B;_+=3){let I=_,C=_+1,L=_+2;if(W=o6(this,F,J,$,Y,U,G,I,C,L),W)W.faceIndex=Math.floor(_/3),W.face.materialIndex=D.materialIndex,Q.push(W)}}else{let q=Math.max(0,E.start),R=Math.min(X.count,E.start+E.count);for(let D=q,F=R;D<F;D+=3){let O=D,k=D+1,_=D+2;if(W=o6(this,K,J,$,Y,U,G,O,k,_),W)W.faceIndex=Math.floor(D/3),Q.push(W)}}}}function OU(J,Q,$,W,Z,K,H,X){let Y;if(Q.side===1)Y=W.intersectTriangle(H,K,Z,!0,X);else Y=W.intersectTriangle(Z,K,H,Q.side===0,X);if(Y===null)return null;i6.copy(X),i6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(i6);if(U<$.near||U>$.far)return null;return{distance:U,point:i6.clone(),object:J}}function o6(J,Q,$,W,Z,K,H,X,Y,U){J.getVertexPosition(X,u6),J.getVertexPosition(Y,c6),J.getVertexPosition(U,n6);let G=OU(J,Q,$,W,u6,c6,n6,OK);if(G){let N=new S;if(eJ.getBarycoord(OK,u6,c6,n6,N),Z)G.uv=eJ.getInterpolatedAttribute(Z,X,Y,U,N,new R0);if(K)G.uv1=eJ.getInterpolatedAttribute(K,X,Y,U,N,new R0);if(H){if(G.normal=eJ.getInterpolatedAttribute(H,X,Y,U,N,new S),G.normal.dot(W.direction)>0)G.normal.multiplyScalar(-1)}let E={a:X,b:Y,c:U,normal:new S,materialIndex:0};eJ.getNormal(u6,c6,n6,E.normal),G.face=E,G.barycoord=N}return G}var x7=new e0,RK=new e0,LK=new e0,RU=new e0,MK=new v0,a6=new S,w$=new Q9,VK=new v0,A$=new M7;class wQ extends _J{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new v0,this.bindMatrixInverse=new v0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new nJ;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,a6),this.boundingBox.expandByPoint(a6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new Q9;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,a6),this.boundingSphere.expandByPoint(a6)}copy(J,Q){return super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(w$.copy(this.boundingSphere),w$.applyMatrix4(W),J.ray.intersectsSphere(w$)===!1)return;if(VK.copy(W).invert(),A$.copy(J.ray).applyMatrix4(VK),this.boundingBox!==null){if(A$.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,A$)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new e0,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else _0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(RK.fromBufferAttribute(W.attributes.skinIndex,J),LK.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)x7.copy(Q),Q.set(0,0,0,0);else x7.set(Q.x,Q.y,Q.z,1),Q.set(0,0,0);x7.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let K=LK.getComponent(Z);if(K!==0){let H=RK.getComponent(Z);MK.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(RU.copy(x7).applyMatrix4(MK),K)}}if(Q.isVector4)Q.w=x7.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class X6 extends QJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class Y6 extends EJ{constructor(J=null,Q=1,$=1,W,Z,K,H,X,Y=1003,U=1003,G,N){super(null,K,H,X,Y,U,W,Z,G,N);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var DK=new v0,LU=new v0;class U6{constructor(J=[],Q=[]){this.uuid=k9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){_0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new v0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new v0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z]?J[Z].matrixWorld:LU;DK.multiplyMatrices(H,Q[Z]),DK.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new U6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new Y6(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],K=Q[Z];if(K===void 0)_0("Skeleton: No bone found with UUID:",Z),K=new X6;this.bones.push(K),this.boneInverses.push(new v0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W];J.bones.push(K.uuid);let H=$[W];J.boneInverses.push(H.toArray())}return J}}class Z8 extends UJ{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var Q7=new v0,BK=new v0,r6=[],kK=new nJ,MU=new v0,g7=new _J,p7=new Q9;class AQ extends _J{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new Z8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,MU)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new nJ;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,Q7),kK.copy(J.boundingBox).applyMatrix4(Q7),this.boundingBox.union(kK)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new Q9;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,Q7),p7.copy(J.boundingSphere).applyMatrix4(Q7),this.boundingSphere.union(p7)}copy(J,Q){return super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),this.morphTexture=J.morphTexture!==null?J.morphTexture.clone():null,this.instanceColor=J.instanceColor!==null?J.instanceColor.clone():null,this.count=J.count,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,K=J*Z+1;for(let H=0;H<$.length;H++)$[H]=W[K+H]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(g7.geometry=this.geometry,g7.material=this.material,g7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(p7.copy(this.boundingSphere),p7.applyMatrix4($),J.ray.intersectsSphere(p7)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,Q7),BK.multiplyMatrices($,Q7),g7.matrixWorld=BK,g7.raycast(J,r6);for(let K=0,H=r6.length;K<H;K++){let X=r6[K];X.instanceId=Z,X.object=this,Q.push(X)}r6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new Z8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new Y6(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,K=0;for(let Y=0;Y<$.length;Y++)K+=$[Y];let H=this.geometry.morphTargetsRelative?1:1-K,X=W*J;return Z[X]=H,Z.set($,X+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var _8=new Q9,VU=new R0(0.5,0.5),t6=new S;class C8{constructor(J=new P9,Q=new P9,$=new P9,W=new P9,Z=new P9,K=new P9){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],X=Z[2],Y=Z[3],U=Z[4],G=Z[5],N=Z[6],E=Z[7],q=Z[8],R=Z[9],D=Z[10],F=Z[11],O=Z[12],k=Z[13],_=Z[14],B=Z[15];if(W[0].setComponents(Y-K,E-U,F-q,B-O).normalize(),W[1].setComponents(Y+K,E+U,F+q,B+O).normalize(),W[2].setComponents(Y+H,E+G,F+R,B+k).normalize(),W[3].setComponents(Y-H,E-G,F-R,B-k).normalize(),$)W[4].setComponents(X,N,D,_).normalize(),W[5].setComponents(Y-X,E-N,F-D,B-_).normalize();else if(W[4].setComponents(Y-X,E-N,F-D,B-_).normalize(),Q===2000)W[5].setComponents(Y+X,E+N,F+D,B+_).normalize();else if(Q===2001)W[5].setComponents(X,N,D,_).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();_8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();_8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(_8)}intersectsSprite(J){_8.center.set(0,0,0);let Q=VU.distanceTo(J.center);return _8.radius=0.7071067811865476+Q,_8.applyMatrix4(J.matrixWorld),this.intersectsSphere(_8)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(t6.x=W.normal.x>0?J.max.x:J.min.x,t6.y=W.normal.y>0?J.max.y:J.min.y,t6.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(t6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var zK=new v0;class TQ{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,$=this._frustums;for(let W=0;W<Q.length;W++){let Z=Q[W];if(zK.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$[W]===void 0)$[W]=new C8;$[W].setFromProjectionMatrix(zK,Z.coordinateSystem,Z.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,$=J._frustums;for(let W=0;W<J._count;W++){if(Q[W]===void 0)Q[W]=new C8;Q[W].copy($[W])}return this._count=J._count,this}clone(){return new TQ().copy(this)}}class G6 extends sJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new A0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var XQ=new S,YQ=new S,_K=new v0,l7=new M7,e6=new Q9,T$=new S,PK=new S;class V7 extends QJ{constructor(J=new RJ,Q=new G6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)XQ.fromBufferAttribute(Q,W-1),YQ.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=XQ.distanceTo(YQ);J.setAttribute("lineDistance",new IJ($,1))}else _0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(e6.copy($.boundingSphere),e6.applyMatrix4(W),e6.radius+=Z,J.ray.intersectsSphere(e6)===!1)return;_K.copy(W).invert(),l7.copy(J.ray).applyMatrix4(_K);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),X=H*H,Y=this.isLineSegments?2:1,U=$.index,N=$.attributes.position;if(U!==null){let E=Math.max(0,K.start),q=Math.min(U.count,K.start+K.count);for(let R=E,D=q-1;R<D;R+=Y){let F=U.getX(R),O=U.getX(R+1),k=JQ(this,J,l7,X,F,O,R);if(k)Q.push(k)}if(this.isLineLoop){let R=U.getX(q-1),D=U.getX(E),F=JQ(this,J,l7,X,R,D,q-1);if(F)Q.push(F)}}else{let E=Math.max(0,K.start),q=Math.min(N.count,K.start+K.count);for(let R=E,D=q-1;R<D;R+=Y){let F=JQ(this,J,l7,X,R,R+1,R);if(F)Q.push(F)}if(this.isLineLoop){let R=JQ(this,J,l7,X,q-1,E,q-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function JQ(J,Q,$,W,Z,K,H){let X=J.geometry.attributes.position;if(XQ.fromBufferAttribute(X,Z),YQ.fromBufferAttribute(X,K),$.distanceSqToSegment(XQ,YQ,T$,PK)>W)return;T$.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(T$);if(U<Q.near||U>Q.far)return;return{distance:U,point:PK.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var IK=new S,CK=new S;class SQ extends V7{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)IK.fromBufferAttribute(Q,W),CK.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+IK.distanceTo(CK);J.setAttribute("lineDistance",new IJ($,1))}else _0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jQ extends V7{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class E6 extends sJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new A0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var wK=new v0,f$=new M7,QQ=new Q9,$Q=new S;class D7 extends QJ{constructor(J=new RJ,Q=new E6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(QQ.copy($.boundingSphere),QQ.applyMatrix4(W),QQ.radius+=Z,J.ray.intersectsSphere(QQ)===!1)return;wK.copy(W).invert(),f$.copy(J.ray).applyMatrix4(wK);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),X=H*H,Y=$.index,G=$.attributes.position;if(Y!==null){let N=Math.max(0,K.start),E=Math.min(Y.count,K.start+K.count);for(let q=N,R=E;q<R;q++){let D=Y.getX(q);$Q.fromBufferAttribute(G,D),AK($Q,D,X,W,J,Q,this)}}else{let N=Math.max(0,K.start),E=Math.min(G.count,K.start+K.count);for(let q=N,R=E;q<R;q++)$Q.fromBufferAttribute(G,q),AK($Q,q,X,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function AK(J,Q,$,W,Z,K,H){let X=f$.distanceSqToPoint(J);if(X<$){let Y=new S;f$.closestPointToPoint(J,Y),Y.applyMatrix4(W);let U=Z.ray.origin.distanceTo(Y);if(U<Z.near||U>Z.far)return;K.push({distance:U,distanceToRay:Math.sqrt(X),point:Y,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class vQ extends EJ{constructor(J=[],Q=301,$,W,Z,K,H,X,Y,U){super(J,Q,$,W,Z,K,H,X,Y,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class yQ extends EJ{constructor(J,Q,$,W,Z,K,H,X,Y){super(J,Q,$,W,Z,K,H,X,Y);this.isCanvasTexture=!0,this.needsUpdate=!0}}class U8 extends EJ{constructor(J,Q,$=1014,W,Z,K,H=1003,X=1003,Y,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:Q,depth:G};super(N,W,Z,K,H,X,U,$,Y);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new Z6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class hQ extends U8{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,X,Y=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,X,Y);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class fQ extends EJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class B7 extends RJ{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let X=[],Y=[],U=[],G=[],N=0,E=0;q("z","y","x",-1,-1,$,Q,J,K,Z,0),q("z","y","x",1,-1,$,Q,-J,K,Z,1),q("x","z","y",1,1,J,$,Q,W,K,2),q("x","z","y",1,-1,J,$,-Q,W,K,3),q("x","y","z",1,-1,J,Q,$,W,Z,4),q("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(X),this.setAttribute("position",new IJ(Y,3)),this.setAttribute("normal",new IJ(U,3)),this.setAttribute("uv",new IJ(G,2));function q(R,D,F,O,k,_,B,I,C,L,z){let j=_/C,l=B/L,y=_/2,p=B/2,t=I/2,A=C+1,s=L+1,o=0,x=0,K0=new S;for(let u=0;u<s;u++){let r=u*l-p;for(let $0=0;$0<A;$0++){let k0=$0*j-y;K0[R]=k0*O,K0[D]=r*k,K0[F]=t,Y.push(K0.x,K0.y,K0.z),K0[R]=0,K0[D]=0,K0[F]=I>0?1:-1,U.push(K0.x,K0.y,K0.z),G.push($0/C),G.push(1-u/L),o+=1}}for(let u=0;u<L;u++)for(let r=0;r<C;r++){let $0=N+r+A*u,k0=N+r+A*(u+1),i=N+(r+1)+A*(u+1),Q0=N+(r+1)+A*u;X.push($0,k0,Q0),X.push(k0,i,Q0),x+=6}H.addGroup(E,x,z),E+=x,N+=o}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new B7(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class Y9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){_0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,W=this.getPoint(0),Z=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),Z+=$.distanceTo(W),Q.push(Z),W=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),W=0,Z=$.length,K;if(Q)K=Q;else K=J*$[Z-1];let H=0,X=Z-1,Y;while(H<=X)if(W=Math.floor(H+(X-H)/2),Y=$[W]-K,Y<0)H=W+1;else if(Y>0)X=W-1;else{X=W;break}if(W=X,$[W]===K)return W/(Z-1);let U=$[W],N=$[W+1]-U,E=(K-U)/N;return(W+E)/(Z-1)}getTangent(J,Q){let W=J-0.0001,Z=J+0.0001;if(W<0)W=0;if(Z>1)Z=1;let K=this.getPoint(W),H=this.getPoint(Z),X=Q||(K.isVector2?new R0:new S);return X.copy(H).sub(K).normalize(),X}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new S,W=[],Z=[],K=[],H=new S,X=new v0;for(let E=0;E<=J;E++){let q=E/J;W[E]=this.getTangentAt(q,new S)}Z[0]=new S,K[0]=new S;let Y=Number.MAX_VALUE,U=Math.abs(W[0].x),G=Math.abs(W[0].y),N=Math.abs(W[0].z);if(U<=Y)Y=U,$.set(1,0,0);if(G<=Y)Y=G,$.set(0,1,0);if(N<=Y)$.set(0,0,1);H.crossVectors(W[0],$).normalize(),Z[0].crossVectors(W[0],H),K[0].crossVectors(W[0],Z[0]);for(let E=1;E<=J;E++){if(Z[E]=Z[E-1].clone(),K[E]=K[E-1].clone(),H.crossVectors(W[E-1],W[E]),H.length()>Number.EPSILON){H.normalize();let q=Math.acos(l0(W[E-1].dot(W[E]),-1,1));Z[E].applyMatrix4(X.makeRotationAxis(H,q))}K[E].crossVectors(W[E],Z[E])}if(Q===!0){let E=Math.acos(l0(Z[0].dot(Z[J]),-1,1));if(E/=J,W[0].dot(H.crossVectors(Z[0],Z[J]))>0)E=-E;for(let q=1;q<=J;q++)Z[q].applyMatrix4(X.makeRotationAxis(W[q],E*q)),K[q].crossVectors(W[q],Z[q])}return{tangents:W,normals:Z,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}}class N6 extends Y9{constructor(J=0,Q=0,$=1,W=1,Z=0,K=Math.PI*2,H=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=W,this.aStartAngle=Z,this.aEndAngle=K,this.aClockwise=H,this.aRotation=X}getPoint(J,Q=new R0){let $=Q,W=Math.PI*2,Z=this.aEndAngle-this.aStartAngle,K=Math.abs(Z)<Number.EPSILON;while(Z<0)Z+=W;while(Z>W)Z-=W;if(Z<Number.EPSILON)if(K)Z=0;else Z=W;if(this.aClockwise===!0&&!K)if(Z===W)Z=-W;else Z=Z-W;let H=this.aStartAngle+J*Z,X=this.aX+this.xRadius*Math.cos(H),Y=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),N=X-this.aX,E=Y-this.aY;X=N*U-E*G+this.aX,Y=N*G+E*U+this.aY}return $.set(X,Y)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class oW extends N6{constructor(J,Q,$,W,Z,K){super(J,Q,$,$,W,Z,K);this.isArcCurve=!0,this.type="ArcCurve"}}function aW(){let J=0,Q=0,$=0,W=0;function Z(K,H,X,Y){J=K,Q=X,$=-3*K+3*H-2*X-Y,W=2*K-2*H+X+Y}return{initCatmullRom:function(K,H,X,Y,U){Z(H,X,U*(X-K),U*(Y-H))},initNonuniformCatmullRom:function(K,H,X,Y,U,G,N){let E=(H-K)/U-(X-K)/(U+G)+(X-H)/G,q=(X-H)/G-(Y-H)/(G+N)+(Y-X)/N;E*=G,q*=G,Z(H,X,E,q)},calc:function(K){let H=K*K,X=H*K;return J+Q*K+$*H+W*X}}}var TK=new S,SK=new S,S$=new aW,j$=new aW,v$=new aW;class rW extends Y9{constructor(J=[],Q=!1,$="centripetal",W=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=W}getPoint(J,Q=new S){let $=Q,W=this.points,Z=W.length,K=(Z-(this.closed?0:1))*J,H=Math.floor(K),X=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/Z)+1)*Z;else if(X===0&&H===Z-1)H=Z-2,X=1;let Y,U;if(this.closed||H>0)Y=W[(H-1)%Z];else SK.subVectors(W[0],W[1]).add(W[0]),Y=SK;let G=W[H%Z],N=W[(H+1)%Z];if(this.closed||H+2<Z)U=W[(H+2)%Z];else TK.subVectors(W[Z-1],W[Z-2]).add(W[Z-1]),U=TK;if(this.curveType==="centripetal"||this.curveType==="chordal"){let E=this.curveType==="chordal"?0.5:0.25,q=Math.pow(Y.distanceToSquared(G),E),R=Math.pow(G.distanceToSquared(N),E),D=Math.pow(N.distanceToSquared(U),E);if(R<0.0001)R=1;if(q<0.0001)q=R;if(D<0.0001)D=R;S$.initNonuniformCatmullRom(Y.x,G.x,N.x,U.x,q,R,D),j$.initNonuniformCatmullRom(Y.y,G.y,N.y,U.y,q,R,D),v$.initNonuniformCatmullRom(Y.z,G.z,N.z,U.z,q,R,D)}else if(this.curveType==="catmullrom")S$.initCatmullRom(Y.x,G.x,N.x,U.x,this.tension),j$.initCatmullRom(Y.y,G.y,N.y,U.y,this.tension),v$.initCatmullRom(Y.z,G.z,N.z,U.z,this.tension);return $.set(S$.calc(X),j$.calc(X),v$.calc(X)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new S().fromArray(W))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function jK(J,Q,$,W,Z){let K=(W-Q)*0.5,H=(Z-$)*0.5,X=J*J,Y=J*X;return(2*$-2*W+K+H)*Y+(-3*$+3*W-2*K-H)*X+K*J+$}function DU(J,Q){let $=1-J;return $*$*Q}function BU(J,Q){return 2*(1-J)*J*Q}function kU(J,Q){return J*J*Q}function n7(J,Q,$,W){return DU(J,Q)+BU(J,$)+kU(J,W)}function zU(J,Q){let $=1-J;return $*$*$*Q}function _U(J,Q){let $=1-J;return 3*$*$*J*Q}function PU(J,Q){return 3*(1-J)*J*J*Q}function IU(J,Q){return J*J*J*Q}function s7(J,Q,$,W,Z){return zU(J,Q)+_U(J,$)+PU(J,W)+IU(J,Z)}class bQ extends Y9{constructor(J=new R0,Q=new R0,$=new R0,W=new R0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new R0){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(s7(J,W.x,Z.x,K.x,H.x),s7(J,W.y,Z.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class tW extends Y9{constructor(J=new S,Q=new S,$=new S,W=new S){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new S){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(s7(J,W.x,Z.x,K.x,H.x),s7(J,W.y,Z.y,K.y,H.y),s7(J,W.z,Z.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class xQ extends Y9{constructor(J=new R0,Q=new R0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new R0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new R0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class eW extends Y9{constructor(J=new S,Q=new S){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new S){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new S){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class gQ extends Y9{constructor(J=new R0,Q=new R0,$=new R0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new R0){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(n7(J,W.x,Z.x,K.x),n7(J,W.y,Z.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class JZ extends Y9{constructor(J=new S,Q=new S,$=new S){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new S){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(n7(J,W.x,Z.x,K.x),n7(J,W.y,Z.y,K.y),n7(J,W.z,Z.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class pQ extends Y9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new R0){let $=Q,W=this.points,Z=(W.length-1)*J,K=Math.floor(Z),H=Z-K,X=W[K===0?K:K-1],Y=W[K],U=W[K>W.length-2?W.length-1:K+1],G=W[K>W.length-3?W.length-1:K+2];return $.set(jK(H,X.x,Y.x,U.x,G.x),jK(H,X.y,Y.y,U.y,G.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new R0().fromArray(W))}return this}}var vK=Object.freeze({__proto__:null,ArcCurve:oW,CatmullRomCurve3:rW,CubicBezierCurve:bQ,CubicBezierCurve3:tW,EllipseCurve:N6,LineCurve:xQ,LineCurve3:eW,QuadraticBezierCurve:gQ,QuadraticBezierCurve3:JZ,SplineCurve:pQ});class QZ extends Y9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vK[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),W=this.getCurveLengths(),Z=0;while(Z<W.length){if(W[Z]>=$){let K=W[Z]-$,H=this.curves[Z],X=H.getLength(),Y=X===0?0:1-K/X;return H.getPointAt(Y,Q)}Z++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,W=this.curves.length;$<W;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let W=0,Z=this.curves;W<Z.length;W++){let K=Z[W],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,X=K.getPoints(H);for(let Y=0;Y<X.length;Y++){let U=X[Y];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(W.clone())}return this.autoClose=J.autoClose,this.cacheLengths=null,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let W=this.curves[Q];J.curves.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(new vK[W.type]().fromJSON(W))}return this.cacheLengths=null,this}}class UQ extends QZ{constructor(J){super();if(this.type="Path",this.currentPoint=new R0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new xQ(this.currentPoint.clone(),new R0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,W){let Z=new gQ(this.currentPoint.clone(),new R0(J,Q),new R0($,W));return this.curves.push(Z),this.currentPoint.set($,W),this}bezierCurveTo(J,Q,$,W,Z,K){let H=new bQ(this.currentPoint.clone(),new R0(J,Q),new R0($,W),new R0(Z,K));return this.curves.push(H),this.currentPoint.set(Z,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new pQ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,W,Z,K){let H=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+H,Q+X,$,W,Z,K),this}absarc(J,Q,$,W,Z,K){return this.absellipse(J,Q,$,$,W,Z,K),this}ellipse(J,Q,$,W,Z,K,H,X){let Y=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+Y,Q+U,$,W,Z,K,H,X),this}absellipse(J,Q,$,W,Z,K,H,X){let Y=new N6(J,Q,$,W,Z,K,H,X);if(this.curves.length>0){let G=Y.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(Y);let U=Y.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class q6 extends UQ{constructor(J){super(J);this.uuid=k9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,W=this.holes.length;$<W;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let W=this.holes[Q];J.holes.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(new UQ().fromJSON(W))}return this}}function CU(J,Q,$=2){let W=Q&&Q.length,Z=W?Q[0]*$:J.length,K=cH(J,0,Z,$,!0),H=[];if(!K||K.next===K.prev)return H;let X,Y,U;if(W)K=jU(J,Q,K,$);if(J.length>80*$){X=J[0],Y=J[1];let G=X,N=Y;for(let E=$;E<Z;E+=$){let q=J[E],R=J[E+1];if(q<X)X=q;if(R<Y)Y=R;if(q>G)G=q;if(R>N)N=R}U=Math.max(G-X,N-Y),U=U!==0?32767/U:0}return o7(K,H,$,X,Y,U,0),H}function cH(J,Q,$,W,Z){let K;if(Z===dU(J,Q,$,W)>0)for(let H=Q;H<$;H+=W)K=yK(H/W|0,J[H],J[H+1],K);else for(let H=$-W;H>=Q;H-=W)K=yK(H/W|0,J[H],J[H+1],K);if(K&&U7(K,K.next))r7(K),K=K.next;return K}function w8(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,W;do if(W=!1,!$.steiner&&(U7($,$.next)||XJ($.prev,$,$.next)===0)){if(r7($),$=Q=$.prev,$===$.next)break;W=!0}else $=$.next;while(W||$!==Q);return Q}function o7(J,Q,$,W,Z,K,H){if(!J)return;if(!H&&K)bU(J,W,Z,K);let X=J;while(J.prev!==J.next){let{prev:Y,next:U}=J;if(K?AU(J,W,Z,K):wU(J)){Q.push(Y.i,J.i,U.i),r7(J),J=U.next,X=U.next;continue}if(J=U,J===X){if(!H)o7(w8(J),Q,$,W,Z,K,1);else if(H===1)J=TU(w8(J),Q),o7(J,Q,$,W,Z,K,2);else if(H===2)SU(J,Q,$,W,Z,K);break}}}function wU(J){let Q=J.prev,$=J,W=J.next;if(XJ(Q,$,W)>=0)return!1;let Z=Q.x,K=$.x,H=W.x,X=Q.y,Y=$.y,U=W.y,G=Math.min(Z,K,H),N=Math.min(X,Y,U),E=Math.max(Z,K,H),q=Math.max(X,Y,U),R=W.next;while(R!==Q){if(R.x>=G&&R.x<=E&&R.y>=N&&R.y<=q&&m7(Z,X,K,Y,H,U,R.x,R.y)&&XJ(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function AU(J,Q,$,W){let Z=J.prev,K=J,H=J.next;if(XJ(Z,K,H)>=0)return!1;let X=Z.x,Y=K.x,U=H.x,G=Z.y,N=K.y,E=H.y,q=Math.min(X,Y,U),R=Math.min(G,N,E),D=Math.max(X,Y,U),F=Math.max(G,N,E),O=b$(q,R,Q,$,W),k=b$(D,F,Q,$,W),_=J.prevZ,B=J.nextZ;while(_&&_.z>=O&&B&&B.z<=k){if(_.x>=q&&_.x<=D&&_.y>=R&&_.y<=F&&_!==Z&&_!==H&&m7(X,G,Y,N,U,E,_.x,_.y)&&XJ(_.prev,_,_.next)>=0)return!1;if(_=_.prevZ,B.x>=q&&B.x<=D&&B.y>=R&&B.y<=F&&B!==Z&&B!==H&&m7(X,G,Y,N,U,E,B.x,B.y)&&XJ(B.prev,B,B.next)>=0)return!1;B=B.nextZ}while(_&&_.z>=O){if(_.x>=q&&_.x<=D&&_.y>=R&&_.y<=F&&_!==Z&&_!==H&&m7(X,G,Y,N,U,E,_.x,_.y)&&XJ(_.prev,_,_.next)>=0)return!1;_=_.prevZ}while(B&&B.z<=k){if(B.x>=q&&B.x<=D&&B.y>=R&&B.y<=F&&B!==Z&&B!==H&&m7(X,G,Y,N,U,E,B.x,B.y)&&XJ(B.prev,B,B.next)>=0)return!1;B=B.nextZ}return!0}function TU(J,Q){let $=J;do{let W=$.prev,Z=$.next.next;if(!U7(W,Z)&&sH(W,$,$.next,Z)&&a7(W,Z)&&a7(Z,W))Q.push(W.i,$.i,Z.i),r7($),r7($.next),$=J=Z;$=$.next}while($!==J);return w8($)}function SU(J,Q,$,W,Z,K){let H=J;do{let X=H.next.next;while(X!==H.prev){if(H.i!==X.i&&pU(H,X)){let Y=iH(H,X);H=w8(H,H.next),Y=w8(Y,Y.next),o7(H,Q,$,W,Z,K,0),o7(Y,Q,$,W,Z,K,0);return}X=X.next}H=H.next}while(H!==J)}function jU(J,Q,$,W){let Z=[];for(let K=0,H=Q.length;K<H;K++){let X=Q[K]*W,Y=K<H-1?Q[K+1]*W:J.length,U=cH(J,X,Y,W,!1);if(U===U.next)U.steiner=!0;Z.push(gU(U))}Z.sort(vU);for(let K=0;K<Z.length;K++)$=yU(Z[K],$);return $}function vU(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let W=(J.next.y-J.y)/(J.next.x-J.x),Z=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=W-Z}}return $}function yU(J,Q){let $=hU(J,Q);if(!$)return Q;let W=iH($,J);return w8(W,W.next),w8($,$.next)}function hU(J,Q){let $=Q,W=J.x,Z=J.y,K=-1/0,H;if(U7(J,$))return $;do{if(U7(J,$.next))return $.next;else if(Z<=$.y&&Z>=$.next.y&&$.next.y!==$.y){let N=$.x+(Z-$.y)*($.next.x-$.x)/($.next.y-$.y);if(N<=W&&N>K){if(K=N,H=$.x<$.next.x?$:$.next,N===W)return H}}$=$.next}while($!==Q);if(!H)return null;let X=H,Y=H.x,U=H.y,G=1/0;$=H;do{if(W>=$.x&&$.x>=Y&&W!==$.x&&nH(Z<U?W:K,Z,Y,U,Z<U?K:W,Z,$.x,$.y)){let N=Math.abs(Z-$.y)/(W-$.x);if(a7($,J)&&(N<G||N===G&&($.x>H.x||$.x===H.x&&fU(H,$))))H=$,G=N}$=$.next}while($!==X);return H}function fU(J,Q){return XJ(J.prev,J,Q.prev)<0&&XJ(Q.next,J,J.next)<0}function bU(J,Q,$,W){let Z=J;do{if(Z.z===0)Z.z=b$(Z.x,Z.y,Q,$,W);Z.prevZ=Z.prev,Z.nextZ=Z.next,Z=Z.next}while(Z!==J);Z.prevZ.nextZ=null,Z.prevZ=null,xU(Z)}function xU(J){let Q,$=1;do{let W=J,Z;J=null;let K=null;Q=0;while(W){Q++;let H=W,X=0;for(let U=0;U<$;U++)if(X++,H=H.nextZ,!H)break;let Y=$;while(X>0||Y>0&&H){if(X!==0&&(Y===0||!H||W.z<=H.z))Z=W,W=W.nextZ,X--;else Z=H,H=H.nextZ,Y--;if(K)K.nextZ=Z;else J=Z;Z.prevZ=K,K=Z}W=H}K.nextZ=null,$*=2}while(Q>1);return J}function b$(J,Q,$,W,Z){return J=(J-$)*Z|0,Q=(Q-W)*Z|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function gU(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function nH(J,Q,$,W,Z,K,H,X){return(Z-H)*(Q-X)>=(J-H)*(K-X)&&(J-H)*(W-X)>=($-H)*(Q-X)&&($-H)*(K-X)>=(Z-H)*(W-X)}function m7(J,Q,$,W,Z,K,H,X){return!(J===H&&Q===X)&&nH(J,Q,$,W,Z,K,H,X)}function pU(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!lU(J,Q)&&(a7(J,Q)&&a7(Q,J)&&mU(J,Q)&&(XJ(J.prev,J,Q.prev)||XJ(J,Q.prev,Q))||U7(J,Q)&&XJ(J.prev,J,J.next)>0&&XJ(Q.prev,Q,Q.next)>0)}function XJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function U7(J,Q){return J.x===Q.x&&J.y===Q.y}function sH(J,Q,$,W){let Z=ZQ(XJ(J,Q,$)),K=ZQ(XJ(J,Q,W)),H=ZQ(XJ($,W,J)),X=ZQ(XJ($,W,Q));if(Z!==K&&H!==X)return!0;if(Z===0&&WQ(J,$,Q))return!0;if(K===0&&WQ(J,W,Q))return!0;if(H===0&&WQ($,J,W))return!0;if(X===0&&WQ($,Q,W))return!0;return!1}function WQ(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function ZQ(J){return J>0?1:J<0?-1:0}function lU(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&sH($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function a7(J,Q){return XJ(J.prev,J,J.next)<0?XJ(J,Q,J.next)>=0&&XJ(J,J.prev,Q)>=0:XJ(J,Q,J.prev)<0||XJ(J,J.next,Q)<0}function mU(J,Q){let $=J,W=!1,Z=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&Z<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)W=!W;$=$.next}while($!==J);return W}function iH(J,Q){let $=x$(J.i,J.x,J.y),W=x$(Q.i,Q.x,Q.y),Z=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=Z,Z.prev=$,W.next=$,$.prev=W,K.next=W,W.prev=K,W}function yK(J,Q,$,W){let Z=x$(J,Q,$);if(!W)Z.prev=Z,Z.next=Z;else Z.next=W.next,Z.prev=W,W.next.prev=Z,W.next=Z;return Z}function r7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function x$(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dU(J,Q,$,W){let Z=0;for(let K=Q,H=$-W;K<$;K+=W)Z+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return Z}class oH{static triangulate(J,Q,$=2){return CU(J,Q,$)}}class H7{static area(J){let Q=J.length,$=0;for(let W=Q-1,Z=0;Z<Q;W=Z++)$+=J[W].x*J[Z].y-J[Z].x*J[W].y;return $*0.5}static isClockWise(J){return H7.area(J)<0}static triangulateShape(J,Q){let $=[],W=[],Z=[];hK(J),fK($,J);let K=J.length;Q.forEach(hK);for(let X=0;X<Q.length;X++)W.push(K),K+=Q[X].length,fK($,Q[X]);let H=oH.triangulate($,W);for(let X=0;X<H.length;X+=3)Z.push(H.slice(X,X+3));return Z}}function hK(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function fK(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class y8 extends RJ{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),X=Math.floor(W),Y=H+1,U=X+1,G=J/H,N=Q/X,E=[],q=[],R=[],D=[];for(let F=0;F<U;F++){let O=F*N-K;for(let k=0;k<Y;k++){let _=k*G-Z;q.push(_,-O,0),R.push(0,0,1),D.push(k/H),D.push(1-F/X)}}for(let F=0;F<X;F++)for(let O=0;O<H;O++){let k=O+Y*F,_=O+Y*(F+1),B=O+1+Y*(F+1),I=O+1+Y*F;E.push(k,_,I),E.push(_,B,I)}this.setIndex(E),this.setAttribute("position",new IJ(q,3)),this.setAttribute("normal",new IJ(R,3)),this.setAttribute("uv",new IJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y8(J.width,J.height,J.widthSegments,J.heightSegments)}}class F6 extends RJ{constructor(J=new q6([new R0(0,0.5),new R0(-0.5,-0.5),new R0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],W=[],Z=[],K=[],H=0,X=0;if(Array.isArray(J)===!1)Y(J);else for(let U=0;U<J.length;U++)Y(J[U]),this.addGroup(H,X,U),H+=X,X=0;this.setIndex($),this.setAttribute("position",new IJ(W,3)),this.setAttribute("normal",new IJ(Z,3)),this.setAttribute("uv",new IJ(K,2));function Y(U){let G=W.length/3,N=U.extractPoints(Q),E=N.shape,q=N.holes;if(H7.isClockWise(E)===!1)E=E.reverse();for(let D=0,F=q.length;D<F;D++){let O=q[D];if(H7.isClockWise(O)===!0)q[D]=O.reverse()}let R=H7.triangulateShape(E,q);for(let D=0,F=q.length;D<F;D++){let O=q[D];E=E.concat(O)}for(let D=0,F=E.length;D<F;D++){let O=E[D];W.push(O.x,O.y,0),Z.push(0,0,1),K.push(O.x,O.y)}for(let D=0,F=R.length;D<F;D++){let O=R[D],k=O[0]+G,_=O[1]+G,B=O[2]+G;$.push(k,_,B),X+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return uU(Q,J)}static fromJSON(J,Q){let $=[];for(let W=0,Z=J.shapes.length;W<Z;W++){let K=Q[J.shapes[W]];$.push(K)}return new F6($,J.curveSegments)}}function uU(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,W=J.length;$<W;$++){let Z=J[$];Q.shapes.push(Z.uuid)}else Q.shapes.push(J.uuid);return Q}function h8(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(bK(Z))if(Z.isRenderTargetTexture)_0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(bK(Z[0])){let K=[];for(let H=0,X=Z.length;H<X;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function hJ(J){let Q={};for(let $=0;$<J.length;$++){let W=h8(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function bK(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function cU(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function $Z(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return g0.workingColorSpace}var aH={clone:h8,merge:hJ},nU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class U9 extends sJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nU,this.fragmentShader=sU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=h8(J.uniforms),this.uniformsGroups=cU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new A0().setHex(W.value);break;case"v2":this.uniforms[$].value=new R0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new S().fromArray(W.value);break;case"v4":this.uniforms[$].value=new e0().fromArray(W.value);break;case"m3":this.uniforms[$].value=new y0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new v0().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class WZ extends U9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class k7 extends sJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new A0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new A0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new d9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class iJ extends k7{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new R0(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return l0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new A0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new A0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new A0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(J){if(this._diffuseRoughness>0!==J>0)this.version++;this._diffuseRoughness=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}get iridescenceThicknessRange(){return P8('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(J){P8('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=J[0],this.iridescenceThicknessMaximum=J[1]}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.diffuseRoughness=J.diffuseRoughness,this.diffuseRoughnessMap=J.diffuseRoughnessMap,this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum,this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class ZZ extends sJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class KZ extends sJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function W8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function d7(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function iU(J){function Q(Z,K){return J[Z]-J[K]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function xK(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let K=0,H=0;H!==W;++K){let X=$[K]*Q;for(let Y=0;Y!==Q;++Y)Z[H++]=J[X+Y]}return Z}function oU(J,Q,$,W){let Z=1,K=J[0];while(K!==void 0&&K[W]===void 0)K=J[Z++];if(K===void 0)return;let H=K[W];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(...H);K=J[Z++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[W],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[Z++]}while(K!==void 0);else do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(H);K=J[Z++]}while(K!==void 0)}class s9{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];$:{J:{let K;Q:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break J}K=Q.length;break Q}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let X=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(W=Z,Z=Q[--$-1],J>=Z)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class HZ extends s9{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],X=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,X=2*$-Q;break;case 2402:K=1,X=$+W[1]-W[0];break;default:K=J-1,X=Q}let Y=($-Q)*0.5,U=this.valueSize;this._weightPrev=Y/(Q-H),this._weightNext=Y/(X-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,X=J*H,Y=X-H,U=this._offsetPrev,G=this._offsetNext,N=this._weightPrev,E=this._weightNext,q=($-Q)/(W-Q),R=q*q,D=R*q,F=-N*D+2*N*R-N*q,O=(1+N)*D+(-1.5-2*N)*R+(-0.5+N)*q+1,k=(-1-E)*D+(1.5+E)*R+0.5*q,_=E*D-E*R;for(let B=0;B!==H;++B)Z[B]=F*K[U+B]+O*K[Y+B]+k*K[X+B]+_*K[G+B];return Z}}class XZ extends s9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,X=J*H,Y=X-H,U=($-Q)/(W-Q),G=1-U;for(let N=0;N!==H;++N)Z[N]=K[Y+N]*G+K[X+N]*U;return Z}}class YZ extends s9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class UZ extends s9{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,X=J*H,Y=X-H,U=this.inTangents,G=this.outTangents;if(!U||!G){let q=($-Q)/(W-Q),R=1-q;for(let D=0;D!==H;++D)Z[D]=K[Y+D]*R+K[X+D]*q;return Z}let N=H*2,E=J-1;for(let q=0;q!==H;++q){let R=K[Y+q],D=K[X+q],F=E*N+q*2,O=G[F],k=G[F+1],_=J*N+q*2,B=U[_],I=U[_+1],C=rU($,Q,O,B,W);Z[q]=rH(C,R,k,I,D)}return Z}}function rH(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function aU(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function rU(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let X=rH(K,Q,$,W,Z)-J;if(Math.abs(X)<0.0000000001)break;let Y=aU(K,Q,$,W,Z);if(Math.abs(Y)<0.0000000001)break;K=Math.max(0,Math.min(1,K-X/Y))}return K}class $9{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=W8(Q,this.TimeBufferType),this.values=W8($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:W8(J.times,Array),values:W8(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(d7(J.settings))$.settings={inTangents:W8(J.settings.inTangents,Array),outTangents:W8(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new YZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new XZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new HZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new UZ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return _0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J;if(d7(this.settings))gK(this.settings.inTangents,J),gK(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(d7(this.settings))pK(this.settings.inTangents,J),pK(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)j0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)j0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let X=$[H];if(typeof X==="number"&&isNaN(X)){j0("KeyframeTrack: Time is not a valid number.",this,H,X),J=!1;break}if(K!==null&&K>X){j0("KeyframeTrack: Out of order keys.",this,H,X,K),J=!1;break}K=X}if(W!==void 0){if(bY(W))for(let H=0,X=W.length;H!==X;++H){let Y=W[H];if(isNaN(Y)){j0("KeyframeTrack: Value is not a valid number.",this,H,Y),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let X=!1,Y=J[H],U=J[H+1];if(Y!==U&&(H!==1||Y!==J[0]))if(!W){let G=H*$,N=G-$,E=G+$;for(let q=0;q!==$;++q){let R=Q[G+q];if(R!==Q[N+q]||R!==Q[E+q]){X=!0;break}}}else X=!0;if(X){if(H!==K){J[K]=J[H];let G=H*$,N=K*$;for(let E=0;E!==$;++E)Q[N+E]=Q[G+E]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,X=K*$,Y=0;Y!==$;++Y)Q[X+Y]=Q[H+Y];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,d7(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function gK(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]+=Q}function pK(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}$9.prototype.ValueTypeName="";$9.prototype.TimeBufferType=Float32Array;$9.prototype.ValueBufferType=Float32Array;$9.prototype.DefaultInterpolation=2301;class G8 extends $9{constructor(J,Q,$){super(J,Q,$)}}G8.prototype.ValueTypeName="bool";G8.prototype.ValueBufferType=Array;G8.prototype.DefaultInterpolation=2300;G8.prototype.InterpolantFactoryMethodLinear=void 0;G8.prototype.InterpolantFactoryMethodSmooth=void 0;class lQ extends $9{constructor(J,Q,$,W){super(J,Q,$,W)}}lQ.prototype.ValueTypeName="color";class E8 extends $9{constructor(J,Q,$,W){super(J,Q,$,W)}}E8.prototype.ValueTypeName="number";class GZ extends s9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,X=($-Q)/(W-Q),Y=J*H;for(let U=Y+H;Y!==U;Y+=4)K9.slerpFlat(Z,0,K,Y-H,K,Y,X);return Z}}class N8 extends $9{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new GZ(this.times,this.values,this.getValueSize(),J)}}N8.prototype.ValueTypeName="quaternion";N8.prototype.InterpolantFactoryMethodSmooth=void 0;class q8 extends $9{constructor(J,Q,$){super(J,Q,$)}}q8.prototype.ValueTypeName="string";q8.prototype.ValueBufferType=Array;q8.prototype.DefaultInterpolation=2300;q8.prototype.InterpolantFactoryMethodLinear=void 0;q8.prototype.InterpolantFactoryMethodSmooth=void 0;class f8 extends $9{constructor(J,Q,$,W){super(J,Q,$,W)}}f8.prototype.ValueTypeName="vector";class mQ{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=k9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(eU($[K]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,K=$.length;Z!==K;++Z)Q.push($9.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,K=[];for(let H=0;H<Z;H++){let X=[],Y=[];X.push((H+Z-1)%Z,H,(H+1)%Z),Y.push(0,1,0);let U=iU(X);if(X=xK(X,1,U),Y=xK(Y,1,U),!W&&X[0]===0)X.push(Z),Y.push(Y[0]);K.push(new E8(".morphTargetInfluences["+Q[H].name+"]",X,Y).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let H=0,X=J.length;H<X;H++){let Y=J[H],U=Y.name.match(Z);if(U&&U.length>1){let G=U[1],N=W[G];if(!N)W[G]=N=[];N.push(Y)}}let K=[];for(let H in W)K.push(this.CreateFromMorphTargetSequence(H,W[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function tU(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return E8;case"vector":case"vector2":case"vector3":case"vector4":return f8;case"color":return lQ;case"quaternion":return N8;case"bool":case"boolean":return G8;case"string":return q8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function eU(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=tU(J.type);if(J.times===void 0){let W=[],Z=[];oU(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(d7(J.settings))$.settings={inTangents:W8(J.settings.inTangents,Float32Array),outTangents:W8(J.settings.outTangents,Float32Array)};return $}var I9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(lK(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(lK(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function lK(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class EZ{constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,X=void 0,Y=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return Y.push(U,G),this},this.removeHandler=function(U){let G=Y.indexOf(U);if(G!==-1)Y.splice(G,2);return this},this.getHandler=function(U){for(let G=0,N=Y.length;G<N;G+=2){let E=Y[G],q=Y[G+1];if(E.global)E.lastIndex=0;if(E.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var tH=new EZ;class z9{constructor(J){if(this.manager=J!==void 0?J:tH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}z9.DEFAULT_MATERIAL_NAME="__DEFAULT";var l9={};class eH extends Error{constructor(J,Q){super(J);this.response=Q}}class F8 extends z9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=I9.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(l9[J]!==void 0){l9[J].push({onLoad:Q,onProgress:$,onError:W});return}l9[J]=[],l9[J].push({onLoad:Q,onProgress:$,onError:W});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,X=this.responseType;fetch(K).then((Y)=>{if(Y.status===200||Y.status===0){if(Y.status===0)_0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||Y.body===void 0||Y.body.getReader===void 0)return Y;let U=l9[J],G=Y.body.getReader(),N=Y.headers.get("X-File-Size")||Y.headers.get("Content-Length"),E=N?parseInt(N):0,q=E!==0,R=0,D=new ReadableStream({start(F){O();function O(){G.read().then(({done:k,value:_})=>{if(k)F.close();else{R+=_.byteLength;let B=new ProgressEvent("progress",{lengthComputable:q,loaded:R,total:E});for(let I=0,C=U.length;I<C;I++){let L=U[I];if(L.onProgress)L.onProgress(B)}F.enqueue(_),O()}},(k)=>{F.error(k)})}}});return new Response(D)}else throw new eH(`fetch for "${Y.url}" responded with ${Y.status}: ${Y.statusText}`,Y)}).then((Y)=>{switch(X){case"arraybuffer":return Y.arrayBuffer();case"blob":return Y.blob();case"document":return Y.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return Y.json();default:if(H==="")return Y.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(H),N=G&&G[1]?G[1].toLowerCase():void 0,E=new TextDecoder(N);return Y.arrayBuffer().then((q)=>E.decode(q))}}}).then((Y)=>{I9.add(`file:${J}`,Y);let U=l9[J];delete l9[J];for(let G=0,N=U.length;G<N;G++){let E=U[G];if(E.onLoad)E.onLoad(Y)}}).catch((Y)=>{let U=l9[J];if(U===void 0)throw this.manager.itemError(J),Y;delete l9[J];for(let G=0,N=U.length;G<N;G++){let E=U[G];if(E.onError)E.onError(Y)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var $7=new WeakMap;class NZ extends z9{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=I9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);else{let G=$7.get(K);if(G===void 0)G=[],$7.set(K,G);G.push({onLoad:Q,onError:W})}return K}let H=X7("img");function X(){if(U(),Q)Q(this);let G=$7.get(this)||[];for(let N=0;N<G.length;N++){let E=G[N];if(E.onLoad)E.onLoad(this)}$7.delete(this),Z.manager.itemEnd(J)}function Y(G){if(U(),W)W(G);I9.remove(`image:${J}`);let N=$7.get(this)||[];for(let E=0;E<N.length;E++){let q=N[E];if(q.onError)q.onError(G)}$7.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){H.removeEventListener("load",X,!1),H.removeEventListener("error",Y,!1)}if(H.addEventListener("load",X,!1),H.addEventListener("error",Y,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return I9.add(`image:${J}`,H),Z.manager.itemStart(J),H.fetchPriority=this.priority,H.src=J,H}}class dQ extends z9{constructor(J){super(J)}load(J,Q,$,W){let Z=new EJ,K=new NZ(this.manager);return K.setPriority(this.priority),K.setCache(this.cache),K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(Z.image=H,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class z7 extends QJ{static registerNode(J){this.prototype._lightNode=J}constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new A0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class uQ extends z7{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(QJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new A0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var y$=new v0,mK=new S,dK=new S;class O6{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new v0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new C8,this._frameExtents=new R0(1,1),this._viewportCount=1,this._viewports=[new e0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;mK.setFromMatrixPosition(J.matrixWorld),Q.position.copy(mK),dK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(dK),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){y$.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(y$,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,X=W?W.x/Z.x:0,Y=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+X,0,0.5*H,0,0.5*H+Y,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+X,0,0.5*H,0,0.5*H+Y,0,0,0.5,0.5,0,0,0,1);Q.multiply(y$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.mapType=J.mapType,this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.mapType=this.mapType,J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var KQ=new S,HQ=new K9,_9=new S;class cQ extends QJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new v0,this.projectionMatrix=new v0,this.projectionMatrixInverse=new v0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(KQ,HQ,_9),_9.x===1&&_9.y===1&&_9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(KQ,HQ,_9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(KQ,HQ,_9),_9.x===1&&_9.y===1&&_9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(KQ,HQ,_9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var $8=new S,uK=new R0,cK=new R0;class zJ extends cQ{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=I8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(u7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return I8*2*Math.atan(Math.tan(u7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){$8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set($8.x,$8.y).multiplyScalar(-J/$8.z),$8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set($8.x,$8.y).multiplyScalar(-J/$8.z)}getViewSize(J,Q){return this.getViewBounds(J,uK,cK),Q.subVectors(cK,uK)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(u7*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:Y}=K;Z+=K.offsetX*W/X,Q-=K.offsetY*$/Y,W*=K.width/X,$*=K.height/Y}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class JX extends O6{constructor(){super(new zJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=I8*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class nQ extends z7{constructor(J,Q,$=0,W=Math.PI/3,Z=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(QJ.DEFAULT_UP),this.updateMatrix(),this.target=new QJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=K,this.map=null,this.shadow=new JX}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class QX extends O6{constructor(){super(new zJ(90,1,0.5,500));this.isPointLightShadow=!0}}class b8 extends z7{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new QX}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class _7 extends cQ{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,X=W-Q;if(this.view!==null&&this.view.enabled){let Y=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=Y*this.view.offsetX,K=Z+Y*this.view.width,H-=U*this.view.offsetY,X=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class $X extends O6{constructor(){super(new _7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class P7 extends z7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(QJ.DEFAULT_UP),this.updateMatrix(),this.target=new QJ,this.shadow=new $X}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class G9{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var h$=new WeakMap;class sQ extends z9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")_0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")_0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=I9.get(`image-bitmap:${J}`);if(K!==void 0){if(Z.manager.itemStart(J),K.then){K.then((Y)=>{if(h$.has(K)===!0){if(W)W(h$.get(K));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(Y);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);return}let H={};H.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",H.headers=this.requestHeader,H.priority=this.priority,H.cache=this.cache,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,H).then(function(Y){return Y.blob()}).then(function(Y){return createImageBitmap(Y,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(Y){if(I9.add(`image-bitmap:${J}`,Y),Q)Q(Y);return Z.manager.itemEnd(J),Y}).catch(function(Y){if(W)W(Y);h$.set(X,Y),I9.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});I9.add(`image-bitmap:${J}`,X),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var W7=-90,Z7=1;class R6 extends QJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new zJ(W7,Z7,J,Q);W.layers=this.layers,this.add(W);let Z=new zJ(W7,Z7,J,Q);Z.layers=this.layers,this.add(Z);let K=new zJ(W7,Z7,J,Q);K.layers=this.layers,this.add(K);let H=new zJ(W7,Z7,J,Q);H.layers=this.layers,this.add(H);let X=new zJ(W7,Z7,J,Q);X.layers=this.layers,this.add(X);let Y=new zJ(W7,Z7,J,Q);Y.layers=this.layers,this.add(Y)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,X]=Q;for(let Y of Q)this.remove(Y);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let Y of Q)this.add(Y),Y.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,X,Y,U]=this.children,G=J.getRenderTarget(),N=J.getActiveCubeFace(),E=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.mipmapsAutoUpdate;$.texture.mipmapsAutoUpdate=!1;let D=!1;if(J.isWebGLRenderer===!0)D=J.state.buffers.depth.getReversed();else D=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,4,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),$.texture.mipmapsAutoUpdate=R,J.setRenderTarget($,5,W),D&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,N,E),J.xr.enabled=q,$.texture.needsPMREMUpdate=!0}}class qZ extends zJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var FZ="\\[\\]\\.:\\/",J5=new RegExp("["+FZ+"]","g"),OZ="[^"+FZ+"]",Q5="[^"+FZ.replace("\\.","")+"]",$5=/((?:WC+[\/:])*)/.source.replace("WC",OZ),W5=/(WCOD+)?/.source.replace("WCOD",Q5),Z5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",OZ),K5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",OZ),H5=new RegExp("^"+$5+W5+Z5+K5+"$"),X5=["material","materials","bones","map"];class WX{constructor(J,Q,$){let W=$||o0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class o0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||o0.parseTrackName(Q),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new o0(J,Q,$);else return new o0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(J5,"")}static parseTrackName(J){let Q=H5.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(X5.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let X=$(H.children);if(X)return X}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=o0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){_0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let Y=Q.objectIndex;switch($){case"materials":if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){j0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){j0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===Y){Y=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){j0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){j0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(Y!==void 0){if(J[Y]===void 0){j0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[Y]}}let K=J[W];if(K===void 0){let Y=Q.nodeName;j0("PropertyBinding: Trying to update property for track: "+Y+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}X=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))X=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=WX;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var VF=new Float32Array(1);class ZX{static{this.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}function RZ(J,Q,$,W){let Z=Y5(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function Y5(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)_0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function IX(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function U5(J){let Q=new WeakMap;function $(X,Y){let{array:U,usage:G}=X,N=U.byteLength,E=J.createBuffer();J.bindBuffer(Y,E),J.bufferData(Y,U,G),X.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:E,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:N}}function W(X,Y,U){let{array:G,updateRanges:N}=Y;if(J.bindBuffer(U,X),N.length===0)J.bufferSubData(U,0,G);else{N.sort((q,R)=>q.start-R.start);let E=0;for(let q=1;q<N.length;q++){let R=N[E],D=N[q];if(D.start<=R.start+R.count+1)R.count=Math.max(R.count,D.start+D.count-R.start);else++E,N[E]=D}N.length=E+1;for(let q=0,R=N.length;q<R;q++){let D=N[q];J.bufferSubData(U,D.start*G.BYTES_PER_ELEMENT,G,D.start,D.count)}Y.clearUpdateRanges()}Y.onUploadCallback()}function Z(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function K(X){if(X.isInterleavedBufferAttribute)X=X.data;let Y=Q.get(X);if(Y)J.deleteBuffer(Y.buffer),Q.delete(X)}function H(X,Y){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=Q.get(X);if(!G||G.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,Y));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,X,Y),U.version=X.version}}return{get:Z,remove:K,update:H}}var G5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E5=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,N5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R5=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M5=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,V5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k5=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,z5=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_5=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P5=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,S5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,v5=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y5=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,h5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g5="gl_FragColor = linearToOutputTexel( gl_FragColor );",p5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,m5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,d5=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a5=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e5=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JG=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,QG=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$G=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WG=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KG=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HG=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XG=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YG=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UG=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GG=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EG=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,NG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VG=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kG=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zG=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_G=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PG=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wG=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jG=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vG=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yG=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hG=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fG=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bG=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xG=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mG=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dG=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uG=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cG=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nG=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sG=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iG=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oG=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aG=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rG=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tG=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eG=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,UE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ME=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p0={alphahash_fragment:G5,alphahash_pars_fragment:E5,alphamap_fragment:N5,alphamap_pars_fragment:q5,alphatest_fragment:F5,alphatest_pars_fragment:O5,aomap_fragment:R5,aomap_pars_fragment:L5,batching_pars_vertex:M5,batching_vertex:V5,begin_vertex:D5,beginnormal_vertex:B5,bsdfs:k5,iridescence_fragment:z5,bumpmap_pars_fragment:_5,clipping_planes_fragment:P5,clipping_planes_pars_fragment:I5,clipping_planes_pars_vertex:C5,clipping_planes_vertex:w5,color_fragment:A5,color_pars_fragment:T5,color_pars_vertex:S5,color_vertex:j5,common:v5,defaultnormal_vertex:y5,displacementmap_pars_vertex:h5,displacementmap_vertex:f5,emissivemap_fragment:b5,emissivemap_pars_fragment:x5,colorspace_fragment:g5,colorspace_pars_fragment:p5,envmap_fragment:l5,envmap_common_pars_fragment:m5,envmap_pars_fragment:d5,envmap_pars_vertex:u5,envmap_physical_pars_fragment:QG,envmap_vertex:c5,fog_vertex:n5,fog_pars_vertex:s5,fog_fragment:i5,fog_pars_fragment:o5,gradientmap_pars_fragment:a5,lightmap_pars_fragment:r5,lights_lambert_fragment:t5,lights_lambert_pars_fragment:e5,lights_pars_begin:JG,lights_toon_fragment:$G,lights_toon_pars_fragment:WG,lights_phong_fragment:ZG,lights_phong_pars_fragment:KG,lights_physical_fragment:HG,lights_physical_pars_fragment:XG,lights_fragment_begin:YG,lights_fragment_maps:UG,lights_fragment_end:GG,lightprobes_pars_fragment:EG,logdepthbuf_fragment:NG,logdepthbuf_pars_fragment:qG,logdepthbuf_pars_vertex:FG,logdepthbuf_vertex:OG,map_fragment:RG,map_pars_fragment:LG,map_particle_fragment:MG,map_particle_pars_fragment:VG,metalnessmap_fragment:DG,metalnessmap_pars_fragment:BG,morphinstance_vertex:kG,morphcolor_vertex:zG,morphnormal_vertex:_G,morphtarget_pars_vertex:PG,morphtarget_vertex:IG,normal_fragment_begin:CG,normal_fragment_maps:wG,normal_pars_fragment:AG,normal_pars_vertex:TG,normal_vertex:SG,normalmap_pars_fragment:jG,clearcoat_normal_fragment_begin:vG,clearcoat_normal_fragment_maps:yG,clearcoat_pars_fragment:hG,iridescence_pars_fragment:fG,opaque_fragment:bG,packing:xG,premultiplied_alpha_fragment:gG,project_vertex:pG,dithering_fragment:lG,dithering_pars_fragment:mG,roughnessmap_fragment:dG,roughnessmap_pars_fragment:uG,shadowmap_pars_fragment:cG,shadowmap_pars_vertex:nG,shadowmap_vertex:sG,shadowmask_pars_fragment:iG,skinbase_vertex:oG,skinning_pars_vertex:aG,skinning_vertex:rG,skinnormal_vertex:tG,specularmap_fragment:eG,specularmap_pars_fragment:JE,tonemapping_fragment:QE,tonemapping_pars_fragment:$E,transmission_fragment:WE,transmission_pars_fragment:ZE,uv_pars_fragment:KE,uv_pars_vertex:HE,uv_vertex:XE,worldpos_vertex:YE,background_vert:UE,background_frag:GE,backgroundCube_vert:EE,backgroundCube_frag:NE,cube_vert:qE,cube_frag:FE,depth_vert:OE,depth_frag:RE,distance_vert:LE,distance_frag:ME,equirect_vert:VE,equirect_frag:DE,linedashed_vert:BE,linedashed_frag:kE,meshbasic_vert:zE,meshbasic_frag:_E,meshlambert_vert:PE,meshlambert_frag:IE,meshmatcap_vert:CE,meshmatcap_frag:wE,meshnormal_vert:AE,meshnormal_frag:TE,meshphong_vert:SE,meshphong_frag:jE,meshphysical_vert:vE,meshphysical_frag:yE,meshtoon_vert:hE,meshtoon_frag:fE,points_vert:bE,points_frag:xE,shadow_vert:gE,shadow_frag:pE,sprite_vert:lE,sprite_frag:mE},N0={common:{diffuse:{value:new A0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new R0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new A0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new A0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new A0(16777215)},opacity:{value:1},center:{value:new R0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},S9={basic:{uniforms:hJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.fog]),vertexShader:p0.meshbasic_vert,fragmentShader:p0.meshbasic_frag},lambert:{uniforms:hJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new A0(0)},envMapIntensity:{value:1}}]),vertexShader:p0.meshlambert_vert,fragmentShader:p0.meshlambert_frag},phong:{uniforms:hJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new A0(0)},specular:{value:new A0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:p0.meshphong_vert,fragmentShader:p0.meshphong_frag},standard:{uniforms:hJ([N0.common,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.roughnessmap,N0.metalnessmap,N0.fog,N0.lights,{emissive:{value:new A0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag},toon:{uniforms:hJ([N0.common,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.gradientmap,N0.fog,N0.lights,{emissive:{value:new A0(0)}}]),vertexShader:p0.meshtoon_vert,fragmentShader:p0.meshtoon_frag},matcap:{uniforms:hJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,{matcap:{value:null}}]),vertexShader:p0.meshmatcap_vert,fragmentShader:p0.meshmatcap_frag},points:{uniforms:hJ([N0.points,N0.fog]),vertexShader:p0.points_vert,fragmentShader:p0.points_frag},dashed:{uniforms:hJ([N0.common,N0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:p0.linedashed_vert,fragmentShader:p0.linedashed_frag},depth:{uniforms:hJ([N0.common,N0.displacementmap]),vertexShader:p0.depth_vert,fragmentShader:p0.depth_frag},normal:{uniforms:hJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,{opacity:{value:1}}]),vertexShader:p0.meshnormal_vert,fragmentShader:p0.meshnormal_frag},sprite:{uniforms:hJ([N0.sprite,N0.fog]),vertexShader:p0.sprite_vert,fragmentShader:p0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:p0.background_vert,fragmentShader:p0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:p0.backgroundCube_vert,fragmentShader:p0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:p0.cube_vert,fragmentShader:p0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:p0.equirect_vert,fragmentShader:p0.equirect_frag},distance:{uniforms:hJ([N0.common,N0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:p0.distance_vert,fragmentShader:p0.distance_frag},shadow:{uniforms:hJ([N0.lights,N0.fog,{color:{value:new A0(0)},opacity:{value:1}}]),vertexShader:p0.shadow_vert,fragmentShader:p0.shadow_frag}};S9.physical={uniforms:hJ([S9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new R0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new y0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new A0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new R0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new A0(0)},specularColor:{value:new A0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new R0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag};var iQ={r:0,b:0,g:0},dE=new v0,CX=new y0;CX.set(-1,0,0,0,1,0,0,0,1);function uE(J,Q,$,W,Z,K){let H=new A0(0),X=Z===!0?0:1,Y,U,G=null,N=0,E=null;function q(k){let _=k.isScene===!0?k.background:null;if(_&&_.isTexture){let B=k.backgroundBlurriness>0;_=Q.get(_,B)}return _}function R(k){let _=!1,B=q(k);if(B===null)F(H,X);else if(B&&B.isColor)F(B,1),_=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(I==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||_)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function D(k,_){let B=q(_);if(B&&B.isCubeTexture){if(U===void 0)U=new _J(new B7(1,1,1),new U9({name:"BackgroundCubeMaterial",uniforms:h8(S9.backgroundCube.uniforms),vertexShader:S9.backgroundCube.vertexShader,fragmentShader:S9.backgroundCube.fragmentShader,side:uJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(I,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(dE.makeRotationFromEuler(_.backgroundRotation)).transpose(),B.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(CX);if(U.material.toneMapped=g0.getTransfer(B.colorSpace)!==$J,G!==B||N!==B.version||E!==J.toneMapping)U.material.needsUpdate=!0,G=B,N=B.version,E=J.toneMapping;U.layers.enableAll(),k.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(Y===void 0)Y=new _J(new y8(2,2),new U9({name:"BackgroundMaterial",uniforms:h8(S9.background.uniforms),vertexShader:S9.background.vertexShader,fragmentShader:S9.background.fragmentShader,side:K8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),Y.geometry.deleteAttribute("normal"),Object.defineProperty(Y.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(Y);if(Y.material.uniforms.t2D.value=B,Y.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,Y.material.toneMapped=g0.getTransfer(B.colorSpace)!==$J,B.matrixAutoUpdate===!0)B.updateMatrix();if(Y.material.uniforms.uvTransform.value.copy(B.matrix),G!==B||N!==B.version||E!==J.toneMapping)Y.material.needsUpdate=!0,G=B,N=B.version,E=J.toneMapping;Y.layers.enableAll(),k.unshift(Y,Y.geometry,Y.material,0,0,null)}}function F(k,_){k.getRGB(iQ,$Z(J)),$.buffers.color.setClear(iQ.r,iQ.g,iQ.b,_,K)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(Y!==void 0)Y.geometry.dispose(),Y.material.dispose(),Y=void 0}return{getClearColor:function(){return H},setClearColor:function(k,_=1){H.set(k),X=_,F(H,X)},getClearAlpha:function(){return X},setClearAlpha:function(k){X=k,F(H,X)},render:R,addToRenderList:D,dispose:O}}function cE(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=E(null),K=Z,H=!1;function X(y,p,t,A,s){let o=!1,x=N(y,A,t,p);if(K!==x)K=x,U(K.object);if(o=q(y,A,t,s),o)R(y,A,t,s);if(s!==null)Q.update(s,J.ELEMENT_ARRAY_BUFFER);if(o||H){if(H=!1,B(y,p,t,A),s!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(s).buffer)}}function Y(){return J.createVertexArray()}function U(y){return J.bindVertexArray(y)}function G(y){return J.deleteVertexArray(y)}function N(y,p,t,A){let s=A.wireframe===!0,o=W[p.id];if(o===void 0)o={},W[p.id]=o;let x=y.isInstancedMesh===!0?y.id:0,K0=o[x];if(K0===void 0)K0={},o[x]=K0;let u=K0[t.id];if(u===void 0)u={},K0[t.id]=u;let r=u[s];if(r===void 0)r=E(Y()),u[s]=r;return r}function E(y){let p=[],t=[],A=[];for(let s=0;s<$;s++)p[s]=0,t[s]=0,A[s]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:t,attributeDivisors:A,object:y,attributes:{},index:null}}function q(y,p,t,A){let s=K.attributes,o=p.attributes,x=0,K0=t.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=s[u],k0=o[u];if(k0===void 0){if(u==="instanceMatrix"&&y.instanceMatrix)k0=y.instanceMatrix;if(u==="instanceColor"&&y.instanceColor)k0=y.instanceColor}if($0===void 0)return!0;if($0.attribute!==k0)return!0;if(k0&&$0.data!==k0.data)return!0;x++}if(K.attributesNum!==x)return!0;if(K.index!==A)return!0;return!1}function R(y,p,t,A){let s={},o=p.attributes,x=0,K0=t.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=o[u];if($0===void 0){if(u==="instanceMatrix"&&y.instanceMatrix)$0=y.instanceMatrix;if(u==="instanceColor"&&y.instanceColor)$0=y.instanceColor}let k0={};if(k0.attribute=$0,$0&&$0.data)k0.data=$0.data;s[u]=k0,x++}K.attributes=s,K.attributesNum=x,K.index=A}function D(){let y=K.newAttributes;for(let p=0,t=y.length;p<t;p++)y[p]=0}function F(y){O(y,0)}function O(y,p){let{newAttributes:t,enabledAttributes:A,attributeDivisors:s}=K;if(t[y]=1,A[y]===0)J.enableVertexAttribArray(y),A[y]=1;if(s[y]!==p)J.vertexAttribDivisor(y,p),s[y]=p}function k(){let{newAttributes:y,enabledAttributes:p}=K;for(let t=0,A=p.length;t<A;t++)if(p[t]!==y[t])J.disableVertexAttribArray(t),p[t]=0}function _(y,p,t,A,s,o,x){if(x===!0)J.vertexAttribIPointer(y,p,t,s,o);else J.vertexAttribPointer(y,p,t,A,s,o)}function B(y,p,t,A){D();let s=A.attributes,o=t.getAttributes(),x=p.defaultAttributeValues;for(let K0 in o){let u=o[K0];if(u.location>=0){let r=s[K0];if(r===void 0){if(K0==="instanceMatrix"&&y.instanceMatrix)r=y.instanceMatrix;if(K0==="instanceColor"&&y.instanceColor)r=y.instanceColor}if(r!==void 0){let{normalized:$0,itemSize:k0}=r,i=Q.get(r);if(i===void 0)continue;let{buffer:Q0,type:D0,bytesPerElement:w0}=i,T0=D0===J.INT||D0===J.UNSIGNED_INT||r.gpuType===r$;if(r.isInterleavedBufferAttribute){let B0=r.data,a0=B0.isInterleavedBuffer===!0?B0.stride:B0.itemSize,d0=r.offset;if(B0.isInstancedInterleavedBuffer||B0.isInstancedBufferAttribute){for(let b0=0;b0<u.locationSize;b0++)O(u.location+b0,B0.meshPerAttribute);if(y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=B0.meshPerAttribute*B0.count}else for(let b0=0;b0<u.locationSize;b0++)F(u.location+b0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let b0=0;b0<u.locationSize;b0++)_(u.location+b0,k0/u.locationSize,D0,$0,a0*w0,(d0+k0/u.locationSize*b0)*w0,T0)}else{if(r.isInstancedBufferAttribute){for(let B0=0;B0<u.locationSize;B0++)O(u.location+B0,r.meshPerAttribute);if(y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=r.meshPerAttribute*r.count}else for(let B0=0;B0<u.locationSize;B0++)F(u.location+B0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let B0=0;B0<u.locationSize;B0++)_(u.location+B0,k0/u.locationSize,D0,$0,k0*w0,k0/u.locationSize*B0*w0,T0)}}else if(x!==void 0){let $0=x[K0];if($0!==void 0)switch($0.length){case 2:J.vertexAttrib2fv(u.location,$0);break;case 3:J.vertexAttrib3fv(u.location,$0);break;case 4:J.vertexAttrib4fv(u.location,$0);break;default:J.vertexAttrib1fv(u.location,$0)}}}}k()}function I(){j();for(let y in W){let p=W[y];for(let t in p){let A=p[t];for(let s in A){let o=A[s];for(let x in o)G(o[x].object),delete o[x];delete A[s]}}delete W[y]}}function C(y){if(W[y.id]===void 0)return;let p=W[y.id];for(let t in p){let A=p[t];for(let s in A){let o=A[s];for(let x in o)G(o[x].object),delete o[x];delete A[s]}}delete W[y.id]}function L(y){for(let p in W){let t=W[p];for(let A in t){let s=t[A];if(s[y.id]===void 0)continue;let o=s[y.id];for(let x in o)G(o[x].object),delete o[x];delete s[y.id]}}}function z(y){for(let p in W){let t=W[p],A=y.isInstancedMesh===!0?y.id:0,s=t[A];if(s===void 0)continue;for(let o in s){let x=s[o];for(let K0 in x)G(x[K0].object),delete x[K0];delete s[o]}if(delete t[A],Object.keys(t).length===0)delete W[p]}}function j(){if(l(),H=!0,K===Z)return;K=Z,U(K.object)}function l(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:X,reset:j,resetDefaultState:l,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfObject:z,releaseStatesOfProgram:L,initAttributes:D,enableAttribute:F,disableUnusedAttributes:k}}function nE(J,Q,$){let W;function Z(Y){W=Y}function K(Y,U){J.drawArrays(W,Y,U),$.update(U,W,1)}function H(Y,U,G){if(G===0)return;J.drawArraysInstanced(W,Y,U,G),$.update(U,W,G)}function X(Y,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,Y,0,U,0,G);let E=0;for(let q=0;q<G;q++)E+=U[q];$.update(E,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=X}function sE(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let L=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(L){if(L!==c9&&W.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(L){let z=L===A9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(L!==B9&&L!==u9&&!z&&W.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function Y(L){if(L==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";L="mediump"}if(L==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=Y(U);if(G!==U)_0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),E=$.logarithmicDepthBuffer===!0&&N===!1;if($.reversedDepthBuffer===!0&&N===!1)_0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if($.logarithmicDepthBuffer===!0&&N===!0)_0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),k=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),_=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:Y,textureFormatReadable:H,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:N,maxTextures:q,maxVertexTextures:R,maxTextureSize:D,maxCubemapSize:F,maxAttributes:O,maxVertexUniforms:k,maxVaryings:_,maxFragmentUniforms:B,maxSamples:I,samples:C}}function iE(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new P9,X=new y0,Y={value:null,needsUpdate:!1};this.uniform=Y,this.numPlanes=0,this.numIntersection=0,this.init=function(N,E){let q=N.length!==0||E||W!==0||Z;return Z=E,W=N.length,q},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(N,E){$=G(N,E,0)},this.setState=function(N,E,q){let{clippingPlanes:R,clipIntersection:D,clipShadows:F}=N,O=J.get(N);if(!Z||R===null||R.length===0||K&&!F)if(K)G(null);else U();else{let k=K?0:W,_=k*4,B=O.clippingState||null;Y.value=B,B=G(R,E,_,q);for(let I=0;I!==_;++I)B[I]=$[I];O.clippingState=B,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=k}};function U(){if(Y.value!==$)Y.value=$,Y.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function G(N,E,q,R){let D=N!==null?N.length:0,F=null;if(D!==0){if(F=Y.value,R!==!0||F===null){let O=q+D*4,k=E.matrixWorldInverse;if(X.getNormalMatrix(k),F===null||F.length<O)F=new Float32Array(O);for(let _=0,B=q;_!==D;++_,B+=4)H.copy(N[_]).applyMatrix4(k,X),H.normal.toArray(F,B),F[B+3]=H.constant}Y.value=F,Y.needsUpdate=!0}return Q.numPlanes=D,Q.numIntersection=0,F}}class rQ extends H9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new vQ(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},W=new B7(5,5,5),Z=new U9({name:"CubemapFromEquirect",uniforms:h8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:uJ,blending:A8});Z.uniforms.tEquirect.value=Q;let K=new _J(W,Z),H=Q.minFilter;if(Q.minFilter===D9)Q.minFilter=yJ;return new R6(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}var KX=256,oE=3,aE=20,wX=256,AX=16,rE=3,tE=new S,eE=new A0;class aQ{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new R6(1,10,null),this._boxMesh=new _J(new B7(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=tE}=Z,X=this._renderer;this._setSize(K);let Y=this._allocateTarget(),U=this._getSourceTarget(!0);if(Q>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:G,autoClearColor:N,autoClearDepth:E,autoClearStencil:q}=X,R=J.background;if(X.autoClear=!0,X.autoClearColor=!0,X.autoClearDepth=!0,X.autoClearStencil=!0,R===null)J.background=X.getClearColor(eE);let D=new R6($,W,U);if(D.position.copy(H),D.update(X,J),X.autoClear=G,X.autoClearColor=N,X.autoClearDepth=E,X.autoClearStencil=q,J.background=R,Q>0)U.texture.mipmapsAutoUpdate=!0,this._blur(Y,Q);return this._applyPMREM(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=YX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=XX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(KX,dW(J))}_fromTexture(J,Q){if(J.mapping===J6||J.mapping===N7)this._setSize(J.image.length===0?KX:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let $=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM($),$}_allocateTarget(){let J=this._cubeSize,Q=HX(J,!1,!1),$=Math.log2(J)-oE;for(let W=0;W<=$;W++)Q.texture.mipmaps.push({width:J>>W,height:J>>W});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,$=this._sourceTarget;if($===null||$.width!==Q||J&&$.depthBuffer===!1){if($!==null)$.dispose();this._sourceTarget=HX(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,$){let W=this._boxMesh,Z=this._cubeCamera;W.material=$,Z.renderTarget=J,Z.activeMipmapLevel=Q;let K=J.width>>Q;J.viewport.set(0,0,K,K),Z.update(this._renderer,W),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===J6||J.mapping===N7){if(this._cubemapMaterial===null)this._cubemapMaterial=YX();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=XX();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=JN(),this._integrationMaterial=QN();let Q=this._cubeSize,$=J.texture.mipmaps.length-1,W=this._ggxMaterial.uniforms;W.envMap.value=this._sourceTarget.texture;let Z=this._integrationMaterial.uniforms;Z.envMap.value=this._sourceTarget.texture,Z.sourceLod.value=Math.log2(Q/AX);for(let K=0;K<=$;K++){let H=aQ.lodToRoughness(K,$);if(K>$-rE)Z.roughness.value=H,this._renderCube(J,K,this._integrationMaterial);else{let X=H>0?Math.log2(Q)+0.5*Math.log2(6/(wX*Math.pow(H,4)))+0.5:0;W.roughness.value=H,W.lodBias.value=X,this._renderCube(J,K,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=$N();let $=this._blurMaterial,W=$.uniforms,Z=this._sourceTarget;W.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,W.envMap.value=Z.texture,this._renderCube(J,0,$),W.envMap.value=J.texture,this._renderCube(Z,0,$)}}function HX(J,Q,$){return new rQ(J,{minFilter:D9,generateMipmaps:Q,type:A9,colorSpace:gJ,depthBuffer:$})}function D6(J,Q,$){return new U9({name:J,uniforms:Q,vertexShader:p0.cube_vert,fragmentShader:$,side:uJ,blending:A8,depthTest:!1,depthWrite:!1})}function JN(){return D6("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wX}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function QN(){return D6("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:AX}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $N(){return D6("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${aE}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function XX(){return D6("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function YX(){return D6("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function WN(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(E,q=!1){if(E===null||E===void 0)return null;if(q)return H(E);return K(E)}function K(E){if(E&&E.isTexture){let q=E.mapping;if(q===GQ||q===EQ)if(Q.has(E)){let R=Q.get(E).texture;return X(R,E.mapping)}else{let R=E.image;if(R&&R.height>0){let D=new rQ(R.height);return D.fromEquirectangularTexture(J,E),Q.set(E,D),E.addEventListener("dispose",U),X(D.texture,E.mapping)}else return null}}return E}function H(E){if(E&&E.isTexture&&E.isPMREMTexture!==!0){let q=E.mapping,R=q===GQ||q===EQ,D=q===J6||q===N7;if(R||D){let F=$.get(E),O=F!==void 0?F.texture.pmremVersion:0;if(E.isRenderTargetTexture&&E.pmremVersion!==O){if(W===null)W=new aQ(J);return F=R?W.fromEquirectangular(E,F):W.fromCubemap(E,F),F.texture.pmremVersion=E.pmremVersion,$.set(E,F),F.texture}else if(F!==void 0)return F.texture;else{let k=E.image;if(R&&k&&k.height>0||D&&k&&Y(k)){if(W===null)W=new aQ(J);return F=R?W.fromEquirectangular(E):W.fromCubemap(E),F.texture.pmremVersion=E.pmremVersion,$.set(E,F),E.addEventListener("dispose",G),F.texture}else return null}}}return E}function X(E,q){if(q===GQ)E.mapping=J6;else if(q===EQ)E.mapping=N7;return E}function Y(E){let q=0,R=6;for(let D=0;D<R;D++)if(E[D]!==void 0)q++;return q===R}function U(E){let q=E.target;q.removeEventListener("dispose",U);let R=Q.get(q);if(R!==void 0)Q.delete(q),R.dispose()}function G(E){let q=E.target;q.removeEventListener("dispose",G);let R=$.get(q);if(R!==void 0)$.delete(q),R.dispose()}function N(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:N}}function ZN(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)P8("WebGLRenderer: "+W+" extension not supported.");return Z}}}function KN(J,Q,$,W){let Z={},K=new WeakMap,H=new FinalizationRegistry((R)=>delete Z[R]);function X(R){Y(R.target)}function Y(R){if(R.index!==null)Q.remove(R.index);for(let F in R.attributes)Q.remove(R.attributes[F]);R.removeEventListener("dispose",X),delete Z[R.id],H.unregister(R);let D=K.get(R);if(D)Q.remove(D),K.delete(R);if(W.releaseStatesOfGeometry(R),R.isInstancedBufferGeometry===!0)delete R._maxInstanceCount;$.memory.geometries--}function U(R,D){if(Z[D.id]!==void 0)return D;return D.addEventListener("dispose",X),Z[D.id]=new WeakRef(D),H.register(D,D.id,D),$.memory.geometries++,D}function G(R){let D=R.attributes;for(let F in D)Q.update(D[F],J.ARRAY_BUFFER)}function N(R){let D=R.index,F=R.attributes.position,O=0;if(F===void 0)return;let k=D!==null?D.array.length:F.array.length/3-1,B=new(F.count>=65535?IQ:PQ)(Math.ceil(k/3)*6,1),I=B.array;if(D!==null){let L=D.array;O=D.version;for(let z=0,j=0;z<k;z+=3){let l=L[z+0],y=L[z+1],p=L[z+2];I[j++]=l,I[j++]=y,I[j++]=y,I[j++]=p,I[j++]=p,I[j++]=l}}else{O=F.version;for(let L=0,z=0;L<k;L+=3){let j=L+0,l=L+1,y=L+2;I[z++]=j,I[z++]=l,I[z++]=l,I[z++]=y,I[z++]=y,I[z++]=j}}B.version=O;let C=K.get(R);if(C)Q.remove(C);K.set(R,B)}function E(R){let D=K.get(R);if(D){let F=R.index;if(F!==null){if(D.version<F.version)N(R)}}else N(R);return K.get(R)}function q(){for(let R in Z){let D=Z[R].deref();if(D!==void 0)Y(D)}}return{get:U,update:G,getWireframeAttribute:E,dispose:q}}function HN(J,Q,$){let W;function Z(N){W=N}let K,H;function X(N){K=N.type,H=N.bytesPerElement}function Y(N,E){J.drawElements(W,E,K,N*H),$.update(E,W,1)}function U(N,E,q){if(q===0)return;J.drawElementsInstanced(W,E,K,N*H,q),$.update(E,W,q)}function G(N,E,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,E,0,K,N,0,q);let D=0;for(let F=0;F<q;F++)D+=E[F];$.update(D,W,1)}this.setMode=Z,this.setIndex=X,this.render=Y,this.renderInstances=U,this.renderMultiDraw=G}function XN(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,X){switch($.calls++,H){case J.TRIANGLES:$.triangles+=X*(K/3);break;case J.LINES:$.lines+=X*(K/2);break;case J.LINE_STRIP:$.lines+=X*(K-1);break;case J.LINE_LOOP:$.lines+=X*K;break;case J.POINTS:$.points+=X*K;break;default:j0("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function YN(J,Q,$){let W=new WeakMap,Z=new e0;function K(H,X,Y){let U=H.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,N=G!==void 0?G.length:0,E=W.get(X);if(E===void 0||E.count!==N){let j=function(){L.dispose(),W.delete(X),X.removeEventListener("dispose",j)};if(E!==void 0)E.texture.dispose();let q=X.morphAttributes.position!==void 0,R=X.morphAttributes.normal!==void 0,D=X.morphAttributes.color!==void 0,F=X.morphAttributes.position||[],O=X.morphAttributes.normal||[],k=X.morphAttributes.color||[],_=0;if(q===!0)_=1;if(R===!0)_=2;if(D===!0)_=3;let B=X.attributes.position.count*_,I=1;if(B>Q.maxTextureSize)I=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let C=new Float32Array(B*I*4*N),L=new kQ(C,B,I,N);L.type=u9,L.needsUpdate=!0;let z=_*4;for(let l=0;l<N;l++){let y=F[l],p=O[l],t=k[l],A=B*I*4*l;for(let s=0;s<y.count;s++){let o=s*z;if(q===!0)Z.fromBufferAttribute(y,s),C[A+o+0]=Z.x,C[A+o+1]=Z.y,C[A+o+2]=Z.z,C[A+o+3]=0;if(R===!0)Z.fromBufferAttribute(p,s),C[A+o+4]=Z.x,C[A+o+5]=Z.y,C[A+o+6]=Z.z,C[A+o+7]=0;if(D===!0)Z.fromBufferAttribute(t,s),C[A+o+8]=Z.x,C[A+o+9]=Z.y,C[A+o+10]=Z.z,C[A+o+11]=t.itemSize===4?Z.w:1}}E={count:N,texture:L,size:new R0(B,I)},W.set(X,E),X.addEventListener("dispose",j)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)Y.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let q=0;for(let D=0;D<U.length;D++)q+=U[D];let R=X.morphTargetsRelative?1:1-q;Y.getUniforms().setValue(J,"morphTargetBaseInfluence",R),Y.getUniforms().setValue(J,"morphTargetInfluences",U)}Y.getUniforms().setValue(J,"morphTargetsTexture",E.texture,$),Y.getUniforms().setValue(J,"morphTargetsTextureSize",E.size)}return{update:K}}function UN(J,Q,$,W,Z){let K=new WeakMap;function H(U){let G=Z.render.frame,N=U.geometry,E=Q.get(U,N);if(K.get(E)!==G)Q.update(E),K.set(E,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",Y)===!1)U.addEventListener("dispose",Y);if(K.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,G)}}if(U.isSkinnedMesh){let q=U.skeleton;if(K.get(q)!==G)q.update(),K.set(q,G)}return E}function X(){K=new WeakMap}function Y(U){let G=U.target;if(G.removeEventListener("dispose",Y),W.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:H,dispose:X}}var GN={[u$]:"LINEAR_TONE_MAPPING",[c$]:"REINHARD_TONE_MAPPING",[n$]:"CINEON_TONE_MAPPING",[s$]:"ACES_FILMIC_TONE_MAPPING",[o$]:"AGX_TONE_MAPPING",[a$]:"NEUTRAL_TONE_MAPPING",[i$]:"CUSTOM_TONE_MAPPING"};function EN(J,Q,$,W,Z,K){let H=new H9(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,Y=null,U=null,G=new RJ;G.setAttribute("position",new IJ([-1,3,0,-1,-1,0,3,-1,0],3)),G.setAttribute("uv",new IJ([0,2,0,0,2,0],2));let N=new WZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),E=new _J(G,N),q=new _7(-1,1,1,-1,0,1),R=null,D=null,F=!1,O,k=null,_=[],B=!1;this.setSize=function(I,C){if(H.setSize(I,C),X!==null)X.setSize(I,C);if(Y!==null)Y.setSize(I,C);for(let L=0;L<_.length;L++){let z=_[L];if(z.setSize)z.setSize(I,C)}},this.setEffects=function(I){_=I,B=_.length>0&&_[0].isRenderPass===!0;let{width:C,height:L}=H;if(_.length>0&&X===null)X=new H9(C,L,{type:A9,depthBuffer:!1,stencilBuffer:!1}),Y=new H9(C,L,{type:A9,depthBuffer:!1,stencilBuffer:!1});let z=Z===!0&&_.some((j)=>j.needsDepthTexture===!0);if(z!==(H.depthTexture!==null)){if(z===!0&&U===null){if(U=new U8(C,L),K===!0)U.format=X8,U.type=S8}H.dispose(),H.depthTexture=z?U:null,H.resolveDepthBuffer=z,H.storeMultisampledDepthBuffer=z}for(let j=0;j<_.length;j++){let l=_[j];if(l.setSize)l.setSize(C,L);if(z&&l.needsDepthTexture===!0&&l.setDepthTexture)l.setDepthTexture(U)}},this.begin=function(I,C){if(F)return!1;if(I.toneMapping===w9&&_.length===0)return!1;if(k=C,C!==null){let{width:L,height:z}=C;if(H.width!==L||H.height!==z)this.setSize(L,z)}if(B===!1)I.setRenderTarget(H);return O=I.toneMapping,I.toneMapping=w9,!0},this.hasRenderPass=function(){return B},this.end=function(I,C){I.toneMapping=O,F=!0;let L=H,z=X;for(let j=0;j<_.length;j++){let l=_[j];if(l.enabled===!1)continue;if(l.render(I,z,L,C),l.needsSwap!==!1)L=z,z=z===X?Y:X}if(R!==I.outputColorSpace||D!==I.toneMapping){if(R=I.outputColorSpace,D=I.toneMapping,N.defines={},g0.getTransfer(R)===$J)N.defines.SRGB_TRANSFER="";let j=GN[D];if(j)N.defines[j]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=L.texture,I.setRenderTarget(k),I.render(E,q),k=null,F=!1},this.isCompositing=function(){return F},this.dispose=function(){if(H.dispose(),X!==null)X.dispose();if(Y!==null)Y.dispose();G.dispose(),N.dispose()}}var TX=new EJ,SX=new U8(1,1),jX=new hQ(1),vX=new kQ,yX=new iW,hX=new vQ,UX=[],GX=[],EX=new Float32Array(16),NX=new Float32Array(9),qX=new Float32Array(4);function I7(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=UX[Z];if(K===void 0)K=new Float32Array(Z),UX[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,X=0;H!==Q;++H)X+=$,J[H].toArray(K,X)}return K}function LJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function MJ(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function tQ(J,Q){let $=GX[Q];if($===void 0)$=new Int32Array(Q),GX[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function NN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function qN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(LJ($,Q))return;J.uniform2fv(this.addr,Q),MJ($,Q)}}function FN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(LJ($,Q))return;J.uniform3fv(this.addr,Q),MJ($,Q)}}function ON(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(LJ($,Q))return;J.uniform4fv(this.addr,Q),MJ($,Q)}}function RN(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(LJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),MJ($,Q)}else{if(LJ($,W))return;qX.set(W),J.uniformMatrix2fv(this.addr,!1,qX),MJ($,W)}}function LN(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(LJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),MJ($,Q)}else{if(LJ($,W))return;NX.set(W),J.uniformMatrix3fv(this.addr,!1,NX),MJ($,W)}}function MN(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(LJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),MJ($,Q)}else{if(LJ($,W))return;EX.set(W),J.uniformMatrix4fv(this.addr,!1,EX),MJ($,W)}}function VN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function DN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(LJ($,Q))return;J.uniform2iv(this.addr,Q),MJ($,Q)}}function BN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(LJ($,Q))return;J.uniform3iv(this.addr,Q),MJ($,Q)}}function kN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(LJ($,Q))return;J.uniform4iv(this.addr,Q),MJ($,Q)}}function zN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function _N(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(LJ($,Q))return;J.uniform2uiv(this.addr,Q),MJ($,Q)}}function PN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(LJ($,Q))return;J.uniform3uiv(this.addr,Q),MJ($,Q)}}function IN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(LJ($,Q))return;J.uniform4uiv(this.addr,Q),MJ($,Q)}}function eQ(J){if(J.version===0)J.compareFunction=gW,J.needsUpdate=!0;return J}function CN(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)K=eQ(SX);else K=TX;$.setTexture2D(Q||K,Z)}function wN(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||yX,Z)}function AN(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_CUBE_SHADOW)K=eQ(jX);else K=hX;$.setTextureCube(Q||K,Z)}function TN(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||vX,Z)}function SN(J){switch(J){case 5126:return NN;case 35664:return qN;case 35665:return FN;case 35666:return ON;case 35674:return RN;case 35675:return LN;case 35676:return MN;case 5124:case 35670:return VN;case 35667:case 35671:return DN;case 35668:case 35672:return BN;case 35669:case 35673:return kN;case 5125:return zN;case 36294:return _N;case 36295:return PN;case 36296:return IN;case 35678:case 36198:case 36298:case 36306:case 35682:return CN;case 35679:case 36299:case 36307:return wN;case 35680:case 36300:case 36308:case 36293:return AN;case 36289:case 36303:case 36311:case 36292:return TN}}function jN(J,Q){J.uniform1fv(this.addr,Q)}function vN(J,Q){let $=I7(Q,this.size,2);J.uniform2fv(this.addr,$)}function yN(J,Q){let $=I7(Q,this.size,3);J.uniform3fv(this.addr,$)}function hN(J,Q){let $=I7(Q,this.size,4);J.uniform4fv(this.addr,$)}function fN(J,Q){let $=I7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function bN(J,Q){let $=I7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function xN(J,Q){let $=I7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function gN(J,Q){J.uniform1iv(this.addr,Q)}function pN(J,Q){J.uniform2iv(this.addr,Q)}function lN(J,Q){J.uniform3iv(this.addr,Q)}function mN(J,Q){J.uniform4iv(this.addr,Q)}function dN(J,Q){J.uniform1uiv(this.addr,Q)}function uN(J,Q){J.uniform2uiv(this.addr,Q)}function cN(J,Q){J.uniform3uiv(this.addr,Q)}function nN(J,Q){J.uniform4uiv(this.addr,Q)}function sN(J,Q,$){let W=this.cache,Z=Q.length,K=tQ($,Z);if(!LJ(W,K))J.uniform1iv(this.addr,K),MJ(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=eQ(SX);else H=TX;for(let X=0;X!==Z;++X)$.setTexture2D(Q[X]||H,K[X])}function iN(J,Q,$){let W=this.cache,Z=Q.length,K=tQ($,Z);if(!LJ(W,K))J.uniform1iv(this.addr,K),MJ(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||yX,K[H])}function oN(J,Q,$){let W=this.cache,Z=Q.length,K=tQ($,Z);if(!LJ(W,K))J.uniform1iv(this.addr,K),MJ(W,K);let H;if(this.type===J.SAMPLER_CUBE_SHADOW)H=eQ(jX);else H=hX;for(let X=0;X!==Z;++X)$.setTextureCube(Q[X]||H,K[X])}function aN(J,Q,$){let W=this.cache,Z=Q.length,K=tQ($,Z);if(!LJ(W,K))J.uniform1iv(this.addr,K),MJ(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||vX,K[H])}function rN(J){switch(J){case 5126:return jN;case 35664:return vN;case 35665:return yN;case 35666:return hN;case 35674:return fN;case 35675:return bN;case 35676:return xN;case 5124:case 35670:return gN;case 35667:case 35671:return pN;case 35668:case 35672:return lN;case 35669:case 35673:return mN;case 5125:return dN;case 36294:return uN;case 36295:return cN;case 36296:return nN;case 35678:case 36198:case 36298:case 36306:case 35682:return sN;case 35679:case 36299:case 36307:return iN;case 35680:case 36300:case 36308:case 36293:return oN;case 36289:case 36303:case 36311:case 36292:return aN}}class fX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=SN(Q.type)}}class bX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=rN(Q.type)}}class xX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var LZ=/(\w+)(\])?(\[|\.)?/g;function FX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function tN(J,Q,$){let W=J.name,Z=W.length;LZ.lastIndex=0;while(!0){let K=LZ.exec(W),H=LZ.lastIndex,X=K[1],Y=K[2]==="]",U=K[3];if(Y)X=X|0;if(U===void 0||U==="["&&H+2===Z){FX($,U===void 0?new fX(X,J,Q):new bX(X,J,Q));break}else{let N=$.map[X];if(N===void 0)N=new xX(X),FX($,N);$=N}}}class V6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),X=J.getUniformLocation(Q,H.name);tN(H,X,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],X=$[H.id];if(X.needsUpdate!==!1)H.setValue(J,X.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function OX(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var eN=37297,Jq=0;function Qq(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let X=H+1;W.push(`${X===Q?">":" "} ${X}: ${$[H]}`)}return W.join(`
`)}var RX=new y0;function $q(J){g0._getMatrix(RX,g0.workingColorSpace,J);let Q=`mat3( ${RX.elements.map(($)=>$.toFixed(4))} )`;switch(g0.getTransfer(J)){case fW:return[Q,"LinearTransferOETF"];case $J:return[Q,"sRGBTransferOETF"];default:return _0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function LX(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let X=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+Qq(J.getShaderSource(Q),X)}else return K}function Wq(J,Q){let $=$q(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( ${$[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Zq={[u$]:"Linear",[c$]:"Reinhard",[n$]:"Cineon",[s$]:"ACESFilmic",[o$]:"AgX",[a$]:"Neutral",[i$]:"Custom"};function Kq(J,Q){let $=Zq[Q];if($===void 0)return _0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var oQ=new S;function Hq(){g0.getLuminanceCoefficients(oQ);let J=oQ.x.toFixed(4),Q=oQ.y.toFixed(4),$=oQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Xq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(M6).join(`
`)}function Yq(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function Uq(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,X=1;if(K.type===J.FLOAT_MAT2)X=2;if(K.type===J.FLOAT_MAT3)X=3;if(K.type===J.FLOAT_MAT4)X=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:X}}return $}function M6(J){return J!==""}function MX(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function VX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Gq=/^[ \t]*#include +<([\w\d./]+)>/gm;function VZ(J){return J.replace(Gq,Eq)}function Eq(J,Q){let $=p0[Q];if($===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return VZ($)}var Nq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DX(J){return J.replace(Nq,qq)}function qq(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function BX(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var Fq={[t7]:"SHADOWMAP_TYPE_PCF",[G7]:"SHADOWMAP_TYPE_VSM"};function Oq(J){return Fq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rq={[N7]:"ENVMAP_MODE_REFRACTION"};function Lq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Rq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mq={[zH]:"ENVMAP_BLENDING_MULTIPLY",[_H]:"ENVMAP_BLENDING_MIX",[PH]:"ENVMAP_BLENDING_ADD"};function Vq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Mq[J.combine]||"ENVMAP_BLENDING_NONE"}function Dq(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,X=$.fragmentShader,Y=Oq($),U=$.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",G=Lq($),N=Vq($),E=Xq($),q=Yq(K),R=Z.createProgram(),D,F,O=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q].filter(M6).join(`
`),D.length>0)D+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q].filter(M6).join(`
`),F.length>0)F+=`
`}else D=[BX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+$.diffuseRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+Y:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(M6).join(`
`),F=[BX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+N:"",$.envMapPMREM?"#define ENVMAP_MAX_LOD "+$.envMapMaxLod+".0":"",$.envMapPMREM?"#define ENVMAP_SIZE "+$.envMapSize+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+Y:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==w9?"#define TONE_MAPPING":"",$.toneMapping!==w9?p0.tonemapping_pars_fragment:"",$.toneMapping!==w9?Kq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",p0.colorspace_pars_fragment,Wq("linearToOutputTexel",$.outputColorSpace),Hq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(M6).join(`
`);if(H=VZ(H),H=MX(H,$),H=VX(H,$),X=VZ(X),X=MX(X,$),X=VX(X,$),H=DX(H),X=DX(X),$.isRawShaderMaterial!==!0)O=`#version 300 es
`,D=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,F=["#define varying in",$.glslVersion===pW?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===pW?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let k=O+D+H,_=O+F+X,B=OX(Z,Z.VERTEX_SHADER,k),I=OX(Z,Z.FRAGMENT_SHADER,_);if(Z.attachShader(R,B),Z.attachShader(R,I),$.index0AttributeName!==void 0)Z.bindAttribLocation(R,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(R,0,"position");Z.linkProgram(R);function C(l){if(J.debug.checkShaderErrors){let y=Z.getProgramInfoLog(R)||"",p=Z.getShaderInfoLog(B)||"",t=Z.getShaderInfoLog(I)||"",A=y.trim(),s=p.trim(),o=t.trim(),x=!0,K0=!0;if(Z.getProgramParameter(R,Z.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,R,B,I);else{let u=LX(Z,B,"vertex"),r=LX(Z,I,"fragment");j0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(R,Z.VALIDATE_STATUS)+`

Material Name: `+l.name+`
Material Type: `+l.type+`

Program Info Log: `+A+`
`+u+`
`+r)}else if(A!=="")_0("WebGLProgram: Program Info Log:",A);else if(s===""||o==="")K0=!1;if(K0)l.diagnostics={runnable:x,programLog:A,vertexShader:{log:s,prefix:D},fragmentShader:{log:o,prefix:F}}}Z.deleteShader(B),Z.deleteShader(I),L=new V6(Z,R),z=Uq(Z,R)}let L;this.getUniforms=function(){if(L===void 0)C(this);return L};let z;this.getAttributes=function(){if(z===void 0)C(this);return z};let j=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(j===!1)j=Z.getProgramParameter(R,eN);return j},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(R),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Jq++,this.cacheKey=Q,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=I,this}var Bq=0;class gX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new pX(J),Q.set(J,$);return $}}class pX{constructor(J){this.id=Bq++,this.code=J,this.usedTimes=0}}function kq(J){return J===j8||J===MQ||J===VQ}function zq(J,Q,$,W,Z,K){let H=new zQ,X=new gX,Y=new Set,U=[],G=new Map,N=W.logarithmicDepthBuffer,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function q(L){if(Y.add(L),L===0)return"uv";return`uv${L}`}function R(L,z,j,l,y,p){let t=l.fog,A=y.geometry,s=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?l.environment:null,o=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,x=Q.get(L.envMap||s,o),K0=E[L.type],u=W.precision;if(L.precision!==null){if(u=W.getMaxPrecision(L.precision),u!==L.precision)_0("WebGLProgram.getParameters:",L.precision,"not supported, using",u,"instead.")}let r=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,$0=r!==void 0?r.length:0,k0=0;if(A.morphAttributes.position!==void 0)k0=1;if(A.morphAttributes.normal!==void 0)k0=2;if(A.morphAttributes.color!==void 0)k0=3;let i,Q0,D0,w0;if(K0){let F0=S9[K0];i=F0.vertexShader,Q0=F0.fragmentShader}else{i=L.vertexShader,Q0=L.fragmentShader;let F0=X.getVertexShaderStage(L),t0=X.getFragmentShaderStage(L);X.update(L,F0,t0),D0=F0.id,w0=t0.id}let T0=J.getRenderTarget(),B0=J.state.buffers.depth.getReversed(),a0=y.isInstancedMesh===!0,d0=y.isBatchedMesh===!0,b0=!!L.map,KJ=!!L.matcap,n0=!!x,GJ=n0&&x.isPMREMTexture===!0,NJ=!!L.aoMap,lJ=!!L.lightMap,aJ=!!L.bumpMap&&L.wireframe===!1,qJ=!!L.normalMap,CJ=!!L.displacementMap,mJ=!!L.emissiveMap,dJ=!!L.metalnessMap,q9=!!L.roughnessMap,v=L.anisotropy>0,F9=L.clearcoat>0,r0=L.diffuseRoughness>0,VJ=L.dispersion>0,E0=L.retroreflectivity>0,WJ=L.iridescence>0,S0=L.sheen>0,h0=L.transmission>0,wJ=v&&!!L.anisotropyMap,P=F9&&!!L.clearcoatMap,M=F9&&!!L.clearcoatNormalMap,h=F9&&!!L.clearcoatRoughnessMap,e=r0&&!!L.diffuseRoughnessMap,a=WJ&&!!L.iridescenceMap,Z0=WJ&&!!L.iridescenceThicknessMap,Y0=S0&&!!L.sheenColorMap,m=S0&&!!L.sheenRoughnessMap,n=!!L.specularMap,H0=!!L.specularColorMap,w=!!L.specularIntensityMap,c=h0&&!!L.transmissionMap,d=h0&&!!L.thicknessMap,J0=!!L.gradientMap,W0=!!L.alphaMap,G0=L.alphaTest>0,I0=!!L.alphaHash,P0=!!L.extensions,q0=w9;if(L.toneMapped){if(T0===null||T0.isXRRenderTarget===!0)q0=J.toneMapping}let C0=GJ?x.isCompressedCubeTexture?x.image[0].mipmaps:x.mipmaps:null,x0={shaderID:K0,shaderType:L.type,shaderName:L.name,vertexShader:i,fragmentShader:Q0,defines:L.defines,customVertexShaderID:D0,customFragmentShaderID:w0,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:u,batching:d0,batchingColor:d0&&y._colorsTexture!==null,instancing:a0,instancingColor:a0&&y.instanceColor!==null,instancingMorph:a0&&y.morphTexture!==null,outputColorSpace:T0===null?J.outputColorSpace:T0.isXRRenderTarget===!0?T0.texture.colorSpace:g0.workingColorSpace,alphaToCoverage:!!L.alphaToCoverage,map:b0,matcap:KJ,envMap:n0,envMapMode:n0&&x.mapping,envMapPMREM:GJ,envMapMaxLod:GJ?C0.length-1:null,envMapSize:GJ?C0[0].width:null,aoMap:NJ,lightMap:lJ,bumpMap:aJ,normalMap:qJ,displacementMap:CJ,emissiveMap:mJ,normalMapObjectSpace:qJ&&L.normalMapType===vH,normalMapTangentSpace:qJ&&L.normalMapType===hW,packedNormalMap:qJ&&L.normalMapType===hW&&kq(L.normalMap.format),metalnessMap:dJ,roughnessMap:q9,anisotropy:v,anisotropyMap:wJ,clearcoat:F9,clearcoatMap:P,clearcoatNormalMap:M,clearcoatRoughnessMap:h,diffuseRoughness:r0,diffuseRoughnessMap:e,dispersion:VJ,retroreflection:E0,iridescence:WJ,iridescenceMap:a,iridescenceThicknessMap:Z0,sheen:S0,sheenColorMap:Y0,sheenRoughnessMap:m,specularMap:n,specularColorMap:H0,specularIntensityMap:w,transmission:h0,transmissionMap:c,thicknessMap:d,gradientMap:J0,opaque:L.transparent===!1&&L.blending===e7&&L.alphaToCoverage===!1,alphaMap:W0,alphaTest:G0,alphaHash:I0,combine:L.combine,mapUv:b0&&q(L.map.channel),aoMapUv:NJ&&q(L.aoMap.channel),lightMapUv:lJ&&q(L.lightMap.channel),bumpMapUv:aJ&&q(L.bumpMap.channel),normalMapUv:qJ&&q(L.normalMap.channel),displacementMapUv:CJ&&q(L.displacementMap.channel),emissiveMapUv:mJ&&q(L.emissiveMap.channel),metalnessMapUv:dJ&&q(L.metalnessMap.channel),roughnessMapUv:q9&&q(L.roughnessMap.channel),anisotropyMapUv:wJ&&q(L.anisotropyMap.channel),clearcoatMapUv:P&&q(L.clearcoatMap.channel),clearcoatNormalMapUv:M&&q(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:h&&q(L.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:e&&q(L.diffuseRoughnessMap.channel),iridescenceMapUv:a&&q(L.iridescenceMap.channel),iridescenceThicknessMapUv:Z0&&q(L.iridescenceThicknessMap.channel),sheenColorMapUv:Y0&&q(L.sheenColorMap.channel),sheenRoughnessMapUv:m&&q(L.sheenRoughnessMap.channel),specularMapUv:n&&q(L.specularMap.channel),specularColorMapUv:H0&&q(L.specularColorMap.channel),specularIntensityMapUv:w&&q(L.specularIntensityMap.channel),transmissionMapUv:c&&q(L.transmissionMap.channel),thicknessMapUv:d&&q(L.thicknessMap.channel),alphaMapUv:W0&&q(L.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(qJ||v),vertexNormals:!!A.attributes.normal,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!A.attributes.uv&&(b0||W0),fog:!!t,useFog:L.fog===!0,fogExp2:!!t&&t.isFogExp2,flatShading:L.wireframe===!1&&(L.flatShading===!0||A.attributes.normal===void 0&&qJ===!1&&(L.isMeshLambertMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isMeshPhysicalMaterial)),sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:B0,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:$0,morphTextureStride:k0,numSunLights:z.sun.length,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numSunLightShadows:z.sunShadowMap.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:p.filter((F0)=>F0.texture!==null).length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:q0,decodeVideoTexture:b0&&L.map.isVideoTexture===!0&&g0.getTransfer(L.map.colorSpace)===$J,decodeVideoTextureEmissive:mJ&&L.emissiveMap.isVideoTexture===!0&&g0.getTransfer(L.emissiveMap.colorSpace)===$J,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===vJ,flipSided:L.side===uJ,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:P0&&L.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(P0&&L.extensions.multiDraw===!0||d0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return x0.vertexUv1s=Y.has(1),x0.vertexUv2s=Y.has(2),x0.vertexUv3s=Y.has(3),Y.clear(),x0}function D(L){let z=[];if(L.shaderID)z.push(L.shaderID);else z.push(L.customVertexShaderID),z.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let j in L.defines)z.push(j),z.push(L.defines[j]);if(L.isRawShaderMaterial===!1)F(z,L),O(z,L),z.push(J.outputColorSpace);return z.push(L.customProgramCacheKey),z.join()}function F(L,z){L.push(z.precision),L.push(z.outputColorSpace),L.push(z.envMapMode),L.push(z.envMapPMREM),L.push(z.envMapMaxLod),L.push(z.envMapSize),L.push(z.mapUv),L.push(z.alphaMapUv),L.push(z.lightMapUv),L.push(z.aoMapUv),L.push(z.bumpMapUv),L.push(z.normalMapUv),L.push(z.displacementMapUv),L.push(z.emissiveMapUv),L.push(z.metalnessMapUv),L.push(z.roughnessMapUv),L.push(z.anisotropyMapUv),L.push(z.clearcoatMapUv),L.push(z.clearcoatNormalMapUv),L.push(z.clearcoatRoughnessMapUv),L.push(z.diffuseRoughnessMapUv),L.push(z.iridescenceMapUv),L.push(z.iridescenceThicknessMapUv),L.push(z.sheenColorMapUv),L.push(z.sheenRoughnessMapUv),L.push(z.specularMapUv),L.push(z.specularColorMapUv),L.push(z.specularIntensityMapUv),L.push(z.transmissionMapUv),L.push(z.thicknessMapUv),L.push(z.combine),L.push(z.fogExp2),L.push(z.sizeAttenuation),L.push(z.morphTargetsCount),L.push(z.numSunLights),L.push(z.numDirLights),L.push(z.numPointLights),L.push(z.numSpotLights),L.push(z.numSpotLightMaps),L.push(z.numHemiLights),L.push(z.numRectAreaLights),L.push(z.numSunLightShadows),L.push(z.numDirLightShadows),L.push(z.numPointLightShadows),L.push(z.numSpotLightShadows),L.push(z.numSpotLightShadowsWithMaps),L.push(z.numLightProbes),L.push(z.numLightProbeGrids),L.push(z.shadowMapType),L.push(z.toneMapping),L.push(z.numClippingPlanes),L.push(z.numClipIntersection),L.push(z.depthPacking)}function O(L,z){if(H.disableAll(),z.instancing)H.enable(0);if(z.instancingColor)H.enable(1);if(z.instancingMorph)H.enable(2);if(z.matcap)H.enable(3);if(z.envMap)H.enable(4);if(z.normalMapObjectSpace)H.enable(5);if(z.normalMapTangentSpace)H.enable(6);if(z.clearcoat)H.enable(7);if(z.iridescence)H.enable(8);if(z.alphaTest)H.enable(9);if(z.vertexColors)H.enable(10);if(z.vertexAlphas)H.enable(11);if(z.vertexUv1s)H.enable(12);if(z.vertexUv2s)H.enable(13);if(z.vertexUv3s)H.enable(14);if(z.vertexTangents)H.enable(15);if(z.anisotropy)H.enable(16);if(z.alphaHash)H.enable(17);if(z.batching)H.enable(18);if(z.dispersion)H.enable(19);if(z.retroreflection)H.enable(24);if(z.diffuseRoughness)H.enable(25);if(z.batchingColor)H.enable(20);if(z.gradientMap)H.enable(21);if(z.packedNormalMap)H.enable(22);if(z.vertexNormals)H.enable(23);if(L.push(H.mask),H.disableAll(),z.fog)H.enable(0);if(z.useFog)H.enable(1);if(z.flatShading)H.enable(2);if(z.logarithmicDepthBuffer)H.enable(3);if(z.reversedDepthBuffer)H.enable(4);if(z.skinning)H.enable(5);if(z.morphTargets)H.enable(6);if(z.morphNormals)H.enable(7);if(z.morphColors)H.enable(8);if(z.premultipliedAlpha)H.enable(9);if(z.shadowMapEnabled)H.enable(10);if(z.doubleSided)H.enable(11);if(z.flipSided)H.enable(12);if(z.useDepthPacking)H.enable(13);if(z.dithering)H.enable(14);if(z.transmission)H.enable(15);if(z.sheen)H.enable(16);if(z.opaque)H.enable(17);if(z.pointsUvs)H.enable(18);if(z.decodeVideoTexture)H.enable(19);if(z.decodeVideoTextureEmissive)H.enable(20);if(z.alphaToCoverage)H.enable(21);if(z.numLightProbeGrids>0)H.enable(22);if(z.hasPositionAttribute)H.enable(23);L.push(H.mask)}function k(L){let z=E[L.type],j;if(z){let l=S9[z];j=aH.clone(l.uniforms)}else j=L.uniforms;return j}function _(L,z){let j=G.get(z);if(j!==void 0)++j.usedTimes;else j=new Dq(J,z,L,Z),U.push(j),G.set(z,j);return j}function B(L){if(--L.usedTimes===0){let z=U.indexOf(L);U[z]=U[U.length-1],U.pop(),G.delete(L.cacheKey),L.destroy()}}function I(L){X.remove(L)}function C(){X.dispose()}return{getParameters:R,getProgramCacheKey:D,getUniforms:k,acquireProgram:_,releaseProgram:B,releaseShaderCache:I,programs:U,dispose:C}}function _q(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let X=J.get(H);if(X===void 0)X={},J.set(H,X);return X}function W(H){J.delete(H)}function Z(H,X,Y){J.get(H)[X]=Y}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function Pq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function kX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function zX(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(E){let q=0;if(E.isInstancedMesh)q+=2;if(E.isSkinnedMesh)q+=1;return q}function X(E,q,R,D,F,O){let k=J[Q];if(k===void 0)k={id:E.id,object:E,geometry:q,material:R,materialVariant:H(E),groupOrder:D,renderOrder:E.renderOrder,z:F,group:O},J[Q]=k;else k.id=E.id,k.object=E,k.geometry=q,k.material=R,k.materialVariant=H(E),k.groupOrder=D,k.renderOrder=E.renderOrder,k.z=F,k.group=O;return Q++,k}function Y(E,q,R,D,F,O,k){if(k.reversedDepth===!0)F=-F;let _=X(E,q,R,D,F,O);if(R.transmission>0)W.push(_);else if(R.transparent===!0)Z.push(_);else $.push(_)}function U(E,q,R,D,F,O){let k=X(E,q,R,D,F,O);if(R.transmission>0)W.unshift(k);else if(R.transparent===!0)Z.unshift(k);else $.unshift(k)}function G(E,q){if($.length>1)$.sort(E||Pq);if(W.length>1)W.sort(q||kX);if(Z.length>1)Z.sort(q||kX)}function N(){for(let E=Q,q=J.length;E<q;E++){let R=J[E];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:Y,unshift:U,finish:N,sort:G}}function Iq(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new zX,J.set(W,[H]);else if(Z>=K.length)H=new zX,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function Cq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new S,color:new A0};break;case"SpotLight":$={position:new S,direction:new S,color:new A0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new S,color:new A0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new S,skyColor:new A0,groundColor:new A0};break;case"RectAreaLight":$={color:new A0,position:new S,halfWidth:new S,halfHeight:new S};break}return J[Q.id]=$,$}}}function wq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var Aq=0;function Tq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function Sq(J){let Q=new Cq,$=wq(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new S);let Z=new S,K=new v0,H=new v0;function X(U){let G=0,N=0,E=0;for(let p=0;p<9;p++)W.probe[p].set(0,0,0);let q=0,R=0,D=0,F=0,O=0,k=0,_=0,B=0,I=0,C=0,L=0,z=0,j=0,l=0;U.sort(Tq);for(let p=0,t=U.length;p<t;p++){let A=U[p],s=A.color,o=A.intensity,x=A.distance,K0=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===j8)K0=A.shadow.map.texture;else K0=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)G+=s.r*o,N+=s.g*o,E+=s.b*o;else if(A.isLightProbe){for(let u=0;u<9;u++)W.probe[u].addScaledVector(A.sh.coefficients[u],o);l++}else if(A.isSunLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),W.sunShadow[R]=$0,W.sunShadowMap[R]=K0;let k0=r.getViewportCount();for(let i=0;i<k0;i++)W.sunShadowMatrix[D+i]=r.getMatrix(i),W.sunShadowCascade[D+i]=r._cascadeData[i];D+=k0,R++}W.sun[q]=u,q++}else if(A.isDirectionalLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,W.directionalShadow[F]=$0,W.directionalShadowMap[F]=K0,W.directionalShadowMatrix[F]=A.shadow.matrix,I++}W.directional[F]=u,F++}else if(A.isSpotLight){let u=Q.get(A);u.position.setFromMatrixPosition(A.matrixWorld),u.color.copy(s).multiplyScalar(o),u.distance=x,u.coneCos=Math.cos(A.angle),u.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),u.decay=A.decay,W.spot[k]=u;let r=A.shadow;if(A.map){if(W.spotLightMap[z]=A.map,z++,r.updateMatrices(A),A.castShadow)j++}if(W.spotLightMatrix[k]=r.matrix,A.castShadow){let $0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,W.spotShadow[k]=$0,W.spotShadowMap[k]=K0,L++}k++}else if(A.isRectAreaLight){let u=Q.get(A);u.color.copy(s).multiplyScalar(o),u.halfWidth.set(A.width*0.5,0,0),u.halfHeight.set(0,A.height*0.5,0),W.rectArea[_]=u,_++}else if(A.isPointLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),u.distance=A.distance,u.decay=A.decay,A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,$0.shadowCameraNear=r.camera.near,$0.shadowCameraFar=r.camera.far,W.pointShadow[O]=$0,W.pointShadowMap[O]=K0,W.pointShadowMatrix[O]=A.shadow.matrix,C++}W.point[O]=u,O++}else if(A.isHemisphereLight){let u=Q.get(A);u.skyColor.copy(A.color).multiplyScalar(o),u.groundColor.copy(A.groundColor).multiplyScalar(o),W.hemi[B]=u,B++}}if(_>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=N0.LTC_FLOAT_1,W.rectAreaLTC2=N0.LTC_FLOAT_2;else W.rectAreaLTC1=N0.LTC_HALF_1,W.rectAreaLTC2=N0.LTC_HALF_2;W.ambient[0]=G,W.ambient[1]=N,W.ambient[2]=E;let y=W.hash;if(y.sunLength!==q||y.directionalLength!==F||y.pointLength!==O||y.spotLength!==k||y.rectAreaLength!==_||y.hemiLength!==B||y.numSunShadows!==R||y.numDirectionalShadows!==I||y.numPointShadows!==C||y.numSpotShadows!==L||y.numSpotMaps!==z||y.numLightProbes!==l)W.sun.length=q,W.directional.length=F,W.spot.length=k,W.rectArea.length=_,W.point.length=O,W.hemi.length=B,W.sunShadow.length=R,W.sunShadowMap.length=R,W.sunShadowMatrix.length=D,W.sunShadowCascade.length=D,W.directionalShadow.length=I,W.directionalShadowMap.length=I,W.directionalShadowMatrix.length=I,W.pointShadow.length=C,W.pointShadowMap.length=C,W.pointShadowMatrix.length=C,W.spotShadow.length=L,W.spotShadowMap.length=L,W.spotLightMatrix.length=L+z-j,W.spotLightMap.length=z,W.numSpotLightShadowsWithMaps=j,W.numLightProbes=l,y.sunLength=q,y.directionalLength=F,y.pointLength=O,y.spotLength=k,y.rectAreaLength=_,y.hemiLength=B,y.numSunShadows=R,y.numDirectionalShadows=I,y.numPointShadows=C,y.numSpotShadows=L,y.numSpotMaps=z,y.numLightProbes=l,W.version=Aq++}function Y(U,G){let N=0,E=0,q=0,R=0,D=0,F=0,O=G.matrixWorldInverse;for(let k=0,_=U.length;k<_;k++){let B=U[k];if(B.isSunLight){let I=W.sun[N];I.direction.setFromMatrixPosition(B.matrixWorld),I.direction.transformDirection(O),N++}else if(B.isDirectionalLight){let I=W.directional[E];I.direction.setFromMatrixPosition(B.matrixWorld),Z.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(Z),I.direction.transformDirection(O),E++}else if(B.isSpotLight){let I=W.spot[R];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(O),I.direction.setFromMatrixPosition(B.matrixWorld),Z.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(Z),I.direction.transformDirection(O),R++}else if(B.isRectAreaLight){let I=W.rectArea[D];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(O),H.identity(),K.copy(B.matrixWorld),K.premultiply(O),H.extractRotation(K),I.halfWidth.set(B.width*0.5,0,0),I.halfHeight.set(0,B.height*0.5,0),I.halfWidth.applyMatrix4(H),I.halfHeight.applyMatrix4(H),D++}else if(B.isPointLight){let I=W.point[q];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(O),q++}else if(B.isHemisphereLight){let I=W.hemi[F];I.direction.setFromMatrixPosition(B.matrixWorld),I.direction.transformDirection(O),F++}}}return{setup:X,setupView:Y,state:W}}function _X(J){let Q=new Sq(J),$=[],W=[],Z=[];function K(N){G.camera=N,$.length=0,W.length=0,Z.length=0}function H(N){if(N.isLightProbeGrid)Z.push(N);else $.push(N)}function X(N){W.push(N)}function Y(){Q.setup($),Z.sort((N,E)=>N.priority-E.priority||N.id-E.id)}function U(N){Q.setupView($,N)}let G={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:G,setupLights:Y,setupLightsView:U,pushLight:H,pushShadow:X}}function jq(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),X;if(H===void 0)X=new _X(J),Q.set(Z,[X]);else if(K>=H.length)X=new _X(J),H.push(X);else X=H[K];return X}function W(){Q=new WeakMap}return{get:$,dispose:W}}var vq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yq=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hq=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],fq=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],PX=new v0,L6=new S,MZ=new S;function bq(J,Q,$){let W=new C8,Z=new R0,K=new R0,H=new e0,X=new ZZ,Y=new KZ,U={},G=$.maxTextureSize,N={[K8]:uJ,[uJ]:K8,[vJ]:vJ},E=new U9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R0},radius:{value:4}},vertexShader:vq,fragmentShader:yq}),q=E.clone();q.defines.HORIZONTAL_PASS=1;let R=new RJ;R.setAttribute("position",new UJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let D=new _J(R,E),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t7;let O=this.type;this.render=function(C,L,z){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(C.length===0)return;if(this.type===oK)_0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=t7;let j=J.getRenderTarget(),l=J.getActiveCubeFace(),y=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(A8),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let t=O!==this.type;if(t)L.traverse(function(A){if(A.material)if(Array.isArray(A.material))A.material.forEach((s)=>s.needsUpdate=!0);else A.material.needsUpdate=!0});for(let A=0,s=C.length;A<s;A++){let o=C[A],x=o.shadow;if(x===void 0){_0("WebGLShadowMap:",o,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;Z.copy(x.mapSize);let K0=x.getFrameExtents();if(Z.multiply(K0),K.copy(x.mapSize),Z.x>G||Z.y>G){if(Z.x>G)K.x=Math.floor(G/K0.x),Z.x=K.x*K0.x,x.mapSize.x=K.x;if(Z.y>G)K.y=Math.floor(G/K0.y),Z.y=K.y*K0.y,x.mapSize.y=K.y}let u=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=u,x.map===null||t===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===G7){if(o.isPointLight){_0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new H9(Z.x,Z.y,{format:j8,type:A9,minFilter:yJ,magFilter:yJ,generateMipmaps:!1}),x.map.texture.name=o.name+".shadowMap",x.map.depthTexture=new U8(Z.x,Z.y,u9),x.map.depthTexture.name=o.name+".shadowMapDepth",x.map.depthTexture.format=R7,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=V9,x.map.depthTexture.magFilter=V9}else{if(o.isPointLight)x.map=new rQ(Z.x),x.map.depthTexture=new hQ(Z.x,H8);else x.map=new H9(Z.x,Z.y),x.map.depthTexture=new U8(Z.x,Z.y,H8);if(x.map.depthTexture.name=o.name+".shadowMap",x.map.depthTexture.format=R7,this.type===t7)x.map.depthTexture.compareFunction=u?xW:bW,x.map.depthTexture.minFilter=yJ,x.map.depthTexture.magFilter=yJ;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=V9,x.map.depthTexture.magFilter=V9}x.camera.updateProjectionMatrix()}if(x.map.isWebGLCubeRenderTarget!==!0&&(x.map.width!==Z.x||x.map.height!==Z.y))x.map.setSize(Z.x,Z.y);let r=x.map.isWebGLCubeRenderTarget?6:x.getViewportCount();if(o.isPointLight!==!0)x.updateMatrices(o,z);let $0=(x.camera.layers.mask&4294967294)!==0?x.camera.layers:z.layers;for(let k0=0;k0<r;k0++){let i=x.getCamera(k0);if(o.isPointLight){let{camera:Q0,matrix:D0}=x,w0=o.distance||Q0.far;if(w0!==Q0.far)Q0.far=w0,Q0.updateProjectionMatrix();L6.setFromMatrixPosition(o.matrixWorld),Q0.position.copy(L6),MZ.copy(Q0.position),MZ.add(hq[k0]),Q0.up.copy(fq[k0]),Q0.lookAt(MZ),Q0.updateMatrixWorld(),D0.makeTranslation(-L6.x,-L6.y,-L6.z),PX.multiplyMatrices(Q0.projectionMatrix,Q0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(PX,Q0.coordinateSystem,Q0.reversedDepth)}if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,k0),J.clear();else{if(k0===0)J.setRenderTarget(x.map),J.clear();let Q0=x.getViewport(k0);H.set(K.x*Q0.x,K.y*Q0.y,K.x*Q0.z,K.y*Q0.w),p.viewport(H)}W=x.getFrustum(k0),B(L,z,i,o,$0,this.type)}if(x.isPointLightShadow!==!0&&this.type===G7)k(x,z);x.needsUpdate=!1}O=this.type,F.needsUpdate=!1,J.setRenderTarget(j,l,y)};function k(C,L){let z=Q.update(D);if(E.defines.VSM_SAMPLES!==C.blurSamples)E.defines.VSM_SAMPLES=C.blurSamples,q.defines.VSM_SAMPLES=C.blurSamples,E.needsUpdate=!0,q.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new H9(Z.x,Z.y,{format:j8,type:A9});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);E.uniforms.shadow_pass.value=C.map.depthTexture,E.uniforms.resolution.value.set(C.map.width,C.map.height),E.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(L,null,z,E,D,null),q.uniforms.shadow_pass.value=C.mapPass.texture,q.uniforms.resolution.value.set(C.map.width,C.map.height),q.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(L,null,z,q,D,null)}function _(C,L,z,j){let l=null,y=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)l=y;else if(l=z.isPointLight===!0?Y:X,J.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let p=l.uuid,t=L.uuid,A=U[p];if(A===void 0)A={},U[p]=A;let s=A[t];if(s===void 0)s=l.clone(),A[t]=s,L.addEventListener("dispose",I);l=s}if(l.visible=L.visible,l.wireframe=L.wireframe,j===G7)l.side=L.shadowSide!==null?L.shadowSide:L.side;else l.side=L.shadowSide!==null?L.shadowSide:N[L.side];if(l.alphaMap=L.alphaMap,l.alphaTest=L.alphaToCoverage===!0?0.5:L.alphaTest,l.map=L.map,l.clipShadows=L.clipShadows,l.clippingPlanes=L.clippingPlanes,l.clipIntersection=L.clipIntersection,l.displacementMap=L.displacementMap,l.displacementScale=L.displacementScale,l.displacementBias=L.displacementBias,l.wireframeLinewidth=L.wireframeLinewidth,l.linewidth=L.linewidth,z.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let p=J.properties.get(l);p.light=z}return l}function B(C,L,z,j,l,y){if(C.visible===!1)return;if(C.layers.test(l)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&y===G7)&&(!C.frustumCulled||C.intersectsFrustum(W))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let A=Q.update(C),s=C.material;if(Array.isArray(s)){let o=A.groups;for(let x=0,K0=o.length;x<K0;x++){let u=o[x],r=s[u.materialIndex];if(r&&r.visible){let $0=_(C,r,j,y);C.onBeforeShadow(J,C,L,z,A,$0,u),J.renderBufferDirect(z,null,A,$0,C,u),C.onAfterShadow(J,C,L,z,A,$0,u)}}}else if(s.visible){let o=_(C,s,j,y);C.onBeforeShadow(J,C,L,z,A,o,null),J.renderBufferDirect(z,null,A,o,C,null),C.onAfterShadow(J,C,L,z,A,o,null)}}}let t=C.children;for(let A=0,s=t.length;A<s;A++)B(t[A],L,z,j,l,y)}function I(C){C.target.removeEventListener("dispose",I);for(let z in U){let j=U[z],l=C.target.uuid;if(l in j)j[l].dispose(),delete j[l]}}}function xq(J,Q){function $(){let w=!1,c=new e0,d=null,J0=new e0(0,0,0,0);return{setMask:function(W0){if(d!==W0&&!w)J.colorMask(W0,W0,W0,W0),d=W0},setLocked:function(W0){w=W0},setClear:function(W0,G0,I0,P0,q0){if(q0===!0)W0*=P0,G0*=P0,I0*=P0;if(c.set(W0,G0,I0,P0),J0.equals(c)===!1)J.clearColor(W0,G0,I0,P0),J0.copy(c)},reset:function(){w=!1,d=null,J0.set(-1,0,0,0)}}}function W(){let w=!1,c=!1,d=null,J0=null,W0=null;return{setReversed:function(G0){if(c!==G0){let I0=Q.get("EXT_clip_control");if(G0)I0.clipControlEXT(I0.LOWER_LEFT_EXT,I0.ZERO_TO_ONE_EXT);else I0.clipControlEXT(I0.LOWER_LEFT_EXT,I0.NEGATIVE_ONE_TO_ONE_EXT);c=G0;let P0=W0;W0=null,this.setClear(P0)}},getReversed:function(){return c},setTest:function(G0){if(G0)B0(J.DEPTH_TEST);else a0(J.DEPTH_TEST)},setMask:function(G0){if(d!==G0&&!w)J.depthMask(G0),d=G0},setFunc:function(G0){if(c)G0=mH[G0];if(J0!==G0){switch(G0){case RH:J.depthFunc(J.NEVER);break;case LH:J.depthFunc(J.ALWAYS);break;case MH:J.depthFunc(J.LESS);break;case d$:J.depthFunc(J.LEQUAL);break;case VH:J.depthFunc(J.EQUAL);break;case DH:J.depthFunc(J.GEQUAL);break;case BH:J.depthFunc(J.GREATER);break;case kH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}J0=G0}},setLocked:function(G0){w=G0},setClear:function(G0){if(W0!==G0){if(W0=G0,c)G0=1-G0;J.clearDepth(G0)}},reset:function(){w=!1,d=null,J0=null,W0=null,c=!1}}}function Z(){let w=!1,c=null,d=null,J0=null,W0=null,G0=null,I0=null,P0=null,q0=null;return{setTest:function(C0){if(!w)if(C0)B0(J.STENCIL_TEST);else a0(J.STENCIL_TEST)},setMask:function(C0){if(c!==C0&&!w)J.stencilMask(C0),c=C0},setFunc:function(C0,x0,F0){if(d!==C0||J0!==x0||W0!==F0)J.stencilFunc(C0,x0,F0),d=C0,J0=x0,W0=F0},setOp:function(C0,x0,F0){if(G0!==C0||I0!==x0||P0!==F0)J.stencilOp(C0,x0,F0),G0=C0,I0=x0,P0=F0},setLocked:function(C0){w=C0},setClear:function(C0){if(q0!==C0)J.clearStencil(C0),q0=C0},reset:function(){w=!1,c=null,d=null,J0=null,W0=null,G0=null,I0=null,P0=null,q0=null}}}let K=new $,H=new W,X=new Z,Y={},U=new WeakMap,G={},N={},E={},q=new WeakMap,R=[],D=null,F=!1,O=null,k=null,_=null,B=null,I=null,C=null,L=null,z=new A0(0,0,0),j=0,l=!1,y=null,p=null,t=null,A=null,s=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,K0=0,u=J.getParameter(J.VERSION);if(u.indexOf("WebGL")!==-1)K0=parseFloat(/^WebGL (\d)/.exec(u)[1]),x=K0>=1;else if(u.indexOf("OpenGL ES")!==-1)K0=parseFloat(/^OpenGL ES (\d)/.exec(u)[1]),x=K0>=2;let r=null,$0={},k0=J.getParameter(J.SCISSOR_BOX),i=J.getParameter(J.VIEWPORT),Q0=new e0().fromArray(k0),D0=new e0().fromArray(i);function w0(w,c,d,J0){let W0=new Uint8Array(4),G0=J.createTexture();J.bindTexture(w,G0),J.texParameteri(w,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(w,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let I0=0;I0<d;I0++)if(w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texImage3D(c,0,J.RGBA,1,1,J0,0,J.RGBA,J.UNSIGNED_BYTE,W0);else J.texImage2D(c+I0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,W0);return G0}let T0={};T0[J.TEXTURE_2D]=w0(J.TEXTURE_2D,J.TEXTURE_2D,1),T0[J.TEXTURE_CUBE_MAP]=w0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),T0[J.TEXTURE_2D_ARRAY]=w0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),T0[J.TEXTURE_3D]=w0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),X.setClear(0),B0(J.DEPTH_TEST),H.setFunc(d$),aJ(!1),qJ(g$),B0(J.CULL_FACE),NJ(A8);function B0(w){if(G[w]!==!0)J.enable(w),G[w]=!0}function a0(w){if(G[w]!==!1)J.disable(w),G[w]=!1}function d0(w,c){if(E[w]!==c){if(J.bindFramebuffer(w,c),E[w]=c,w===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=c;if(w===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=c;return!0}return!1}function b0(w,c){let d=R,J0=!1;if(w){if(d=q.get(c),d===void 0)d=[],q.set(c,d);let W0=w.textures;if(d.length!==W0.length||d[0]!==J.COLOR_ATTACHMENT0){for(let G0=0,I0=W0.length;G0<I0;G0++)d[G0]=J.COLOR_ATTACHMENT0+G0;d.length=W0.length,J0=!0}}else if(d[0]!==J.BACK)d[0]=J.BACK,J0=!0;if(J0)J.drawBuffers(d)}function KJ(w){if(D!==w)return J.useProgram(w),D=w,!0;return!1}let n0={[E7]:J.FUNC_ADD,[rK]:J.FUNC_SUBTRACT,[tK]:J.FUNC_REVERSE_SUBTRACT};n0[eK]=J.MIN,n0[JH]=J.MAX;let GJ={[QH]:J.ZERO,[$H]:J.ONE,[WH]:J.SRC_COLOR,[KH]:J.SRC_ALPHA,[EH]:J.SRC_ALPHA_SATURATE,[UH]:J.DST_COLOR,[XH]:J.DST_ALPHA,[ZH]:J.ONE_MINUS_SRC_COLOR,[HH]:J.ONE_MINUS_SRC_ALPHA,[GH]:J.ONE_MINUS_DST_COLOR,[YH]:J.ONE_MINUS_DST_ALPHA,[NH]:J.CONSTANT_COLOR,[qH]:J.ONE_MINUS_CONSTANT_COLOR,[FH]:J.CONSTANT_ALPHA,[OH]:J.ONE_MINUS_CONSTANT_ALPHA};function NJ(w,c,d,J0,W0,G0,I0,P0,q0,C0){if(w===A8){if(F===!0)a0(J.BLEND),F=!1;return}if(F===!1)B0(J.BLEND),F=!0;if(w!==aK){if(w!==O||C0!==l){if(k!==E7||I!==E7)J.blendEquation(J.FUNC_ADD),k=E7,I=E7;if(C0)switch(w){case e7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case p$:J.blendFunc(J.ONE,J.ONE);break;case l$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case m$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:j0("WebGLState: Invalid blending: ",w);break}else switch(w){case e7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case p$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case l$:j0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m$:j0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:j0("WebGLState: Invalid blending: ",w);break}_=null,B=null,C=null,L=null,z.set(0,0,0),j=0,O=w,l=C0}return}if(W0=W0||c,G0=G0||d,I0=I0||J0,c!==k||W0!==I)J.blendEquationSeparate(n0[c],n0[W0]),k=c,I=W0;if(d!==_||J0!==B||G0!==C||I0!==L)J.blendFuncSeparate(GJ[d],GJ[J0],GJ[G0],GJ[I0]),_=d,B=J0,C=G0,L=I0;if(P0.equals(z)===!1||q0!==j)J.blendColor(P0.r,P0.g,P0.b,q0),z.copy(P0),j=q0;O=w,l=!1}function lJ(w,c){w.side===vJ?a0(J.CULL_FACE):B0(J.CULL_FACE);let d=w.side===uJ;if(c)d=!d;aJ(d),w.blending===e7&&w.transparent===!1?NJ(A8):NJ(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),H.setFunc(w.depthFunc),H.setTest(w.depthTest),H.setMask(w.depthWrite),K.setMask(w.colorWrite);let J0=w.stencilWrite;if(X.setTest(J0),J0)X.setMask(w.stencilWriteMask),X.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),X.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass);mJ(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?B0(J.SAMPLE_ALPHA_TO_COVERAGE):a0(J.SAMPLE_ALPHA_TO_COVERAGE)}function aJ(w){if(y!==w){if(w)J.frontFace(J.CW);else J.frontFace(J.CCW);y=w}}function qJ(w){if(w!==sK){if(B0(J.CULL_FACE),w!==p)if(w===g$)J.cullFace(J.BACK);else if(w===iK)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a0(J.CULL_FACE);p=w}function CJ(w){if(w!==t){if(x)J.lineWidth(w);t=w}}function mJ(w,c,d){if(w){if(B0(J.POLYGON_OFFSET_FILL),A!==c||s!==d){if(A=c,s=d,H.getReversed())c=-c,d=-d;J.polygonOffset(c,d)}}else a0(J.POLYGON_OFFSET_FILL)}function dJ(w){if(w)B0(J.SCISSOR_TEST);else a0(J.SCISSOR_TEST)}function q9(w){if(w===void 0)w=J.TEXTURE0+o-1;if(r!==w)J.activeTexture(w),r=w}function v(w,c,d){if(d===void 0)if(r===null)d=J.TEXTURE0+o-1;else d=r;let J0=$0[d];if(J0===void 0)J0={type:void 0,texture:void 0},$0[d]=J0;if(J0.type!==w||J0.texture!==c){if(r!==d)J.activeTexture(d),r=d;J.bindTexture(w,c||T0[w]),J0.type=w,J0.texture=c}}function F9(){let w=$0[r];if(w!==void 0&&w.type!==void 0)J.bindTexture(w.type,null),w.type=void 0,w.texture=void 0}function r0(){try{J.compressedTexImage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function VJ(){try{J.compressedTexImage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function E0(){try{J.texSubImage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function WJ(){try{J.texSubImage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function S0(){try{J.compressedTexSubImage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function h0(){try{J.compressedTexSubImage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function wJ(){try{J.texStorage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function P(){try{J.texStorage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function M(){try{J.texImage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function h(){try{J.texImage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function e(w){if(N[w]!==void 0)return N[w];else return J.getParameter(w)}function a(w,c){if(N[w]!==c)J.pixelStorei(w,c),N[w]=c}function Z0(w){if(Q0.equals(w)===!1)J.scissor(w.x,w.y,w.z,w.w),Q0.copy(w)}function Y0(w){if(D0.equals(w)===!1)J.viewport(w.x,w.y,w.z,w.w),D0.copy(w)}function m(w,c){let d=U.get(c);if(d===void 0)d=new WeakMap,U.set(c,d);let J0=d.get(w);if(J0===void 0)J0=J.getUniformBlockIndex(c,w.name),J.uniformBlockBinding(c,J0,J0),d.set(w,J0)}function n(w,c,d){let W0=U.get(c).get(w);if(Y[W0]!==d)J.bindBufferBase(J.UNIFORM_BUFFER,W0,d),Y[W0]=d}function H0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},N={},r=null,$0={},E={},Y={},q=new WeakMap,R=[],D=null,F=!1,O=null,k=null,_=null,B=null,I=null,C=null,L=null,z=new A0(0,0,0),j=0,l=!1,y=null,p=null,t=null,A=null,s=null,Q0.set(0,0,J.canvas.width,J.canvas.height),D0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),X.reset()}return{buffers:{color:K,depth:H,stencil:X},enable:B0,disable:a0,bindFramebuffer:d0,drawBuffers:b0,useProgram:KJ,setBlending:NJ,setMaterial:lJ,setFlipSided:aJ,setCullFace:qJ,setLineWidth:CJ,setPolygonOffset:mJ,setScissorTest:dJ,activeTexture:q9,bindTexture:v,unbindTexture:F9,compressedTexImage2D:r0,compressedTexImage3D:VJ,texImage2D:M,texImage3D:h,pixelStorei:a,getParameter:e,updateUBOMapping:m,uniformBlockBinding:n,texStorage2D:wJ,texStorage3D:P,texSubImage2D:E0,texSubImage3D:WJ,compressedTexSubImage2D:S0,compressedTexSubImage3D:h0,scissor:Z0,viewport:Y0,reset:H0}}function gq(J,Q,$,W,Z,K,H){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,Y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new R0,G=new WeakMap,N=new Set,E,q=new WeakMap,R=new Set,D=new FinalizationRegistry((P)=>R.delete(P)),F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function O(P,M){return F?new OffscreenCanvas(P,M):X7("canvas")}function k(P,M,h){let e=1,a=wJ(P);if(a.width>h||a.height>h)e=h/Math.max(a.width,a.height);if(e<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Z0=Math.floor(e*a.width),Y0=Math.floor(e*a.height);if(E===void 0)E=O(Z0,Y0);let m=M?O(Z0,Y0):E;return m.width=Z0,m.height=Y0,m.getContext("2d").drawImage(P,0,0,Z0,Y0),_0("WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+Z0+"x"+Y0+")."),m}else{if("data"in P)_0("WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return P}return P}function _(P){return P.generateMipmaps}function B(P){J.generateMipmap(P)}function I(P){if(P.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(P.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function C(P,M,h,e,a,Z0=!1){if(P!==null){if(J[P]!==void 0)return J[P];_0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y0;if(e){if(Y0=Q.get("EXT_texture_norm16"),!Y0)_0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let m=M;if(M===J.RED){if(h===J.FLOAT)m=J.R32F;if(h===J.HALF_FLOAT)m=J.R16F;if(h===J.UNSIGNED_BYTE)m=J.R8;if(h===J.UNSIGNED_SHORT&&Y0)m=Y0.R16_EXT;if(h===J.SHORT&&Y0)m=Y0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.R8UI;if(h===J.UNSIGNED_SHORT)m=J.R16UI;if(h===J.UNSIGNED_INT)m=J.R32UI;if(h===J.BYTE)m=J.R8I;if(h===J.SHORT)m=J.R16I;if(h===J.INT)m=J.R32I}if(M===J.RG){if(h===J.FLOAT)m=J.RG32F;if(h===J.HALF_FLOAT)m=J.RG16F;if(h===J.UNSIGNED_BYTE)m=J.RG8;if(h===J.UNSIGNED_SHORT&&Y0)m=Y0.RG16_EXT;if(h===J.SHORT&&Y0)m=Y0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RG8UI;if(h===J.UNSIGNED_SHORT)m=J.RG16UI;if(h===J.UNSIGNED_INT)m=J.RG32UI;if(h===J.BYTE)m=J.RG8I;if(h===J.SHORT)m=J.RG16I;if(h===J.INT)m=J.RG32I}if(M===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGB8UI;if(h===J.UNSIGNED_SHORT)m=J.RGB16UI;if(h===J.UNSIGNED_INT)m=J.RGB32UI;if(h===J.BYTE)m=J.RGB8I;if(h===J.SHORT)m=J.RGB16I;if(h===J.INT)m=J.RGB32I}if(M===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)m=J.RGBA16UI;if(h===J.UNSIGNED_INT)m=J.RGBA32UI;if(h===J.BYTE)m=J.RGBA8I;if(h===J.SHORT)m=J.RGBA16I;if(h===J.INT)m=J.RGBA32I}if(M===J.RGB){if(h===J.UNSIGNED_SHORT&&Y0)m=Y0.RGB16_EXT;if(h===J.SHORT&&Y0)m=Y0.RGB16_SNORM_EXT;if(h===J.UNSIGNED_INT_5_9_9_9_REV)m=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)m=J.R11F_G11F_B10F}if(M===J.RGBA){let n=Z0?fW:g0.getTransfer(a);if(h===J.FLOAT)m=J.RGBA32F;if(h===J.HALF_FLOAT)m=J.RGBA16F;if(h===J.UNSIGNED_BYTE)m=n===$J?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT&&Y0)m=Y0.RGBA16_EXT;if(h===J.SHORT&&Y0)m=Y0.RGBA16_SNORM_EXT;if(h===J.UNSIGNED_SHORT_4_4_4_4)m=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)m=J.RGB5_A1}if(m===J.R16F||m===J.R32F||m===J.RG16F||m===J.RG32F||m===J.RGBA16F||m===J.RGBA32F)Q.get("EXT_color_buffer_float");return m}function L(P,M){let h;if(P){if(M===null||M===H8||M===S8)h=J.DEPTH24_STENCIL8;else if(M===u9)h=J.DEPTH32F_STENCIL8;else if(M===Q6)h=J.DEPTH24_STENCIL8,_0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===H8||M===S8)h=J.DEPTH_COMPONENT24;else if(M===u9)h=J.DEPTH_COMPONENT32F;else if(M===Q6)h=J.DEPTH_COMPONENT16;return h}function z(P,M){if(_(P)===!0||P.isFramebufferTexture&&P.minFilter!==V9&&P.minFilter!==yJ)return Math.log2(Math.max(M.width,M.height))+1;else if(P.mipmaps.length>0)return P.mipmaps.length;else if(P.isCompressedTexture&&Array.isArray(P.image))return M.mipmaps.length;else return 1}function j(P){let M=new WeakRef(P);W.get(P).__ref=M,R.add(M),D.register(P,M,M)}function l(P){let M=W.get(P).__ref;if(M===void 0)return;R.delete(M),D.unregister(M)}function y(P){t(P.target)}function p(P){A(P.target)}function t(P){if(P.removeEventListener("dispose",y),l(P),o(P),P.isVideoTexture)G.delete(P);if(P.isHTMLTexture)N.delete(P)}function A(P){P.removeEventListener("dispose",p),l(P),K0(P)}function s(){for(let P of R){let M=P.deref();if(M===void 0)continue;if(M.isRenderTarget===!0)A(M);else t(M)}R.clear(),N.clear()}function o(P){let M=W.get(P);if(M.__webglInit===void 0)return;let h=P.source,e=q.get(h);if(e){let a=e[M.__cacheKey];if(a.usedTimes--,a.usedTimes===0)x(P);if(Object.keys(e).length===0)q.delete(h)}W.remove(P)}function x(P){let M=W.get(P);J.deleteTexture(M.__webglTexture);let h=P.source,e=q.get(h);delete e[M.__cacheKey],H.memory.textures--}function K0(P){let M=W.get(P);if(M.__depthDisposeCallback)M.__depthDisposeCallback();let h=P.depthTexture;if(h&&h.renderTarget===P)t(h);if(P.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(M.__webglFramebuffer[a]))for(let Z0=0;Z0<M.__webglFramebuffer[a].length;Z0++)J.deleteFramebuffer(M.__webglFramebuffer[a][Z0]);else J.deleteFramebuffer(M.__webglFramebuffer[a]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[a])}else{if(Array.isArray(M.__webglFramebuffer))for(let a=0;a<M.__webglFramebuffer.length;a++)J.deleteFramebuffer(M.__webglFramebuffer[a]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let a=0;a<M.__webglColorRenderbuffer.length;a++)if(M.__webglColorRenderbuffer[a])J.deleteRenderbuffer(M.__webglColorRenderbuffer[a])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let e=P.textures;for(let a=0,Z0=e.length;a<Z0;a++){let Y0=W.get(e[a]);if(Y0.__webglTexture)J.deleteTexture(Y0.__webglTexture),H.memory.textures--;W.remove(e[a])}W.remove(P)}let u=0;function r(){u=0}function $0(){return u}function k0(P){u=P}function i(){let P=u;if(P>=Z.maxTextures)_0("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+Z.maxTextures);return u+=1,P}function Q0(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.mipmapsAutoUpdate),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function D0(P,M){let h=W.get(P);if(P.isVideoTexture)S0(P);if(P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&h.__version!==P.version){let e=P.image;if(e===null)_0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)_0("WebGLRenderer: Texture marked for update but image is incomplete");else{lJ(h,P,M);return}}else if(P.isExternalTexture)h.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+M)}function w0(P,M){let h=W.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&h.__version!==P.version){lJ(h,P,M);return}else if(P.isExternalTexture)h.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+M)}function T0(P,M){let h=W.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&h.__version!==P.version){lJ(h,P,M);return}$.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+M)}function B0(P,M){let h=W.get(P);if(P.version>0&&h.__version!==P.version){aJ(h,P,M);return}$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+M)}let a0={[q7]:J.REPEAT,[F7]:J.CLAMP_TO_EDGE,[NQ]:J.MIRRORED_REPEAT},d0={[V9]:J.NEAREST,[qQ]:J.NEAREST_MIPMAP_NEAREST,[T8]:J.NEAREST_MIPMAP_LINEAR,[yJ]:J.LINEAR,[O7]:J.LINEAR_MIPMAP_NEAREST,[D9]:J.LINEAR_MIPMAP_LINEAR},b0={[yH]:J.NEVER,[gW]:J.ALWAYS,[hH]:J.LESS,[bW]:J.LEQUAL,[fH]:J.EQUAL,[xW]:J.GEQUAL,[bH]:J.GREATER,[xH]:J.NOTEQUAL};function KJ(P,M){if(M.type===u9&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===yJ||M.magFilter===O7||M.magFilter===T8||M.magFilter===D9||M.minFilter===yJ||M.minFilter===O7||M.minFilter===T8||M.minFilter===D9))_0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(P,J.TEXTURE_WRAP_S,a0[M.wrapS]),J.texParameteri(P,J.TEXTURE_WRAP_T,a0[M.wrapT]),P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texParameteri(P,J.TEXTURE_WRAP_R,a0[M.wrapR]);if(J.texParameteri(P,J.TEXTURE_MAG_FILTER,d0[M.magFilter]),J.texParameteri(P,J.TEXTURE_MIN_FILTER,d0[M.minFilter]),M.compareFunction)J.texParameteri(P,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(P,J.TEXTURE_COMPARE_FUNC,b0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===V9)return;if(M.minFilter!==T8&&M.minFilter!==D9)return;if(M.type===u9&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||W.get(M).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(P,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,Z.getMaxAnisotropy())),W.get(M).__currentAnisotropy=M.anisotropy}}}function n0(P,M){let h=!1;if(P.__webglInit===void 0)P.__webglInit=!0,M.addEventListener("dispose",y),j(M);let e=M.source,a=q.get(e);if(a===void 0)a={},q.set(e,a);let Z0=Q0(M);if(Z0!==P.__cacheKey){if(a[Z0]===void 0)a[Z0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,h=!0;a[Z0].usedTimes++;let Y0=a[P.__cacheKey];if(Y0!==void 0){if(a[P.__cacheKey].usedTimes--,Y0.usedTimes===0)x(M)}P.__cacheKey=Z0,P.__webglTexture=a[Z0].texture}return h}function GJ(P,M,h){return Math.floor(Math.floor(P/h)/M)}function NJ(P,M,h,e){let Z0=P.updateRanges;if(Z0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,h,e,M.data);else{Z0.sort((w,c)=>w.start-c.start);let Y0=0;for(let w=1;w<Z0.length;w++){let c=Z0[Y0],d=Z0[w],J0=c.start+c.count,W0=GJ(d.start,M.width,4),G0=GJ(c.start,M.width,4);if(d.start<=J0+1&&W0===G0&&GJ(d.start+d.count-1,M.width,4)===W0)c.count=Math.max(c.count,d.start+d.count-c.start);else++Y0,Z0[Y0]=d}Z0.length=Y0+1;let m=$.getParameter(J.UNPACK_ROW_LENGTH),n=$.getParameter(J.UNPACK_SKIP_PIXELS),H0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let w=0,c=Z0.length;w<c;w++){let d=Z0[w],J0=Math.floor(d.start/4),W0=Math.ceil(d.count/4),G0=J0%M.width,I0=Math.floor(J0/M.width),P0=W0,q0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,G0),$.pixelStorei(J.UNPACK_SKIP_ROWS,I0),$.texSubImage2D(J.TEXTURE_2D,0,G0,I0,P0,1,h,e,M.data)}P.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,m),$.pixelStorei(J.UNPACK_SKIP_PIXELS,n),$.pixelStorei(J.UNPACK_SKIP_ROWS,H0)}}function lJ(P,M,h){let e=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)e=J.TEXTURE_3D;let a=n0(P,M),Z0=M.source;$.bindTexture(e,P.__webglTexture,J.TEXTURE0+h);let Y0=W.get(Z0);if(Z0.version!==Y0.__version||a===!0){if($.activeTexture(J.TEXTURE0+h),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let q0=g0.getPrimaries(g0.workingColorSpace),C0=M.colorSpace===v8?null:g0.getPrimaries(M.colorSpace),x0=M.colorSpace===v8||q0===C0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,x0)}$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let n=k(M.image,!1,Z.maxTextureSize);n=h0(M,n);let H0=K.convert(M.format,M.colorSpace),w=K.convert(M.type),c=C(M.internalFormat,H0,w,M.normalized,M.colorSpace,M.isVideoTexture);KJ(e,M);let d,J0=M.mipmaps,W0=M.isVideoTexture!==!0,G0=Y0.__version===void 0||a===!0,I0=Z0.dataReady,P0=z(M,n);if(M.isDepthTexture){if(c=L(M.format===X8,M.type),G0)if(W0)$.texStorage2D(J.TEXTURE_2D,1,c,n.width,n.height);else $.texImage2D(J.TEXTURE_2D,0,c,n.width,n.height,0,H0,w,null)}else if(M.isDataTexture)if(J0.length>0){if(W0&&G0)$.texStorage2D(J.TEXTURE_2D,P0,c,J0[0].width,J0[0].height);for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],W0){if(I0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,w,d.data)}else $.texImage2D(J.TEXTURE_2D,q0,c,d.width,d.height,0,H0,w,d.data);M.generateMipmaps=!1}else if(W0){if(G0)$.texStorage2D(J.TEXTURE_2D,P0,c,n.width,n.height);if(I0)NJ(M,n,H0,w)}else $.texImage2D(J.TEXTURE_2D,0,c,n.width,n.height,0,H0,w,n.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(W0&&G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,P0,c,J0[0].width,J0[0].height,n.depth);for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],M.format!==c9)if(H0!==null)if(W0){if(I0)if(M.layerUpdates.size>0){let x0=RZ(d.width,d.height,M.format,M.type);for(let F0 of M.layerUpdates){let t0=d.data.subarray(F0*x0/d.data.BYTES_PER_ELEMENT,(F0+1)*x0/d.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,F0,d.width,d.height,1,H0,t0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,d.width,d.height,n.depth,H0,d.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,q0,c,d.width,d.height,n.depth,0,d.data,0,0);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(I0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,d.width,d.height,n.depth,H0,w,d.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,q0,c,d.width,d.height,n.depth,0,H0,w,d.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(W0&&G0)$.texStorage2D(J.TEXTURE_2D,P0,c,J0[0].width,J0[0].height);for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],M.format!==c9)if(H0!==null)if(W0){if(I0)$.compressedTexSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,d.data)}else $.compressedTexImage2D(J.TEXTURE_2D,q0,c,d.width,d.height,0,d.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(I0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,w,d.data)}else $.texImage2D(J.TEXTURE_2D,q0,c,d.width,d.height,0,H0,w,d.data)}else if(M.isDataArrayTexture)if(W0){if(G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,P0,c,n.width,n.height,n.depth);if(I0)if(M.layerUpdates.size>0){let q0=RZ(n.width,n.height,M.format,M.type);for(let C0 of M.layerUpdates){let x0=n.data.subarray(C0*q0/n.data.BYTES_PER_ELEMENT,(C0+1)*q0/n.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,C0,n.width,n.height,1,H0,w,x0)}M.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,n.width,n.height,n.depth,H0,w,n.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,c,n.width,n.height,n.depth,0,H0,w,n.data);else if(M.isData3DTexture)if(W0){if(G0)$.texStorage3D(J.TEXTURE_3D,P0,c,n.width,n.height,n.depth);if(I0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,n.width,n.height,n.depth,H0,w,n.data)}else $.texImage3D(J.TEXTURE_3D,0,c,n.width,n.height,n.depth,0,H0,w,n.data);else if(M.isFramebufferTexture){if(G0)if(W0)$.texStorage2D(J.TEXTURE_2D,P0,c,n.width,n.height);else{let{width:q0,height:C0}=n;for(let x0=0;x0<P0;x0++)$.texImage2D(J.TEXTURE_2D,x0,c,q0,C0,0,H0,w,null),q0>>=1,C0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let q0=J.canvas;if(!q0.hasAttribute("layoutsubtree"))q0.setAttribute("layoutsubtree","true");if(n.parentNode!==q0){q0.appendChild(n),N.add(M),q0.onpaint=(C0)=>{let x0=C0.changedElements;for(let F0 of N)if(x0.includes(F0.image))F0.needsUpdate=!0},q0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,n);else{let{RGBA:x0,RGBA:F0,UNSIGNED_BYTE:t0}=J;J.texElementImage2D(J.TEXTURE_2D,0,x0,F0,t0,n)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(J0.length>0){if(W0&&G0){let q0=wJ(J0[0]);$.texStorage2D(J.TEXTURE_2D,P0,c,q0.width,q0.height)}for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],W0){if(I0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,H0,w,d)}else $.texImage2D(J.TEXTURE_2D,q0,c,H0,w,d);M.generateMipmaps=!1}else if(W0){if(G0){let q0=wJ(n);$.texStorage2D(J.TEXTURE_2D,P0,c,q0.width,q0.height)}if(I0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,H0,w,n)}else $.texImage2D(J.TEXTURE_2D,0,c,H0,w,n);if(_(M)&&M.mipmapsAutoUpdate===!0)B(e);if(Y0.__version=Z0.version,M.onUpdate)M.onUpdate(M)}P.__version=M.version}function aJ(P,M,h){if(M.image.length!==6)return;let e=n0(P,M),a=M.source;$.bindTexture(J.TEXTURE_CUBE_MAP,P.__webglTexture,J.TEXTURE0+h);let Z0=W.get(a);if(a.version!==Z0.__version||e===!0){$.activeTexture(J.TEXTURE0+h);let Y0=g0.getPrimaries(g0.workingColorSpace),m=M.colorSpace===v8?null:g0.getPrimaries(M.colorSpace),n=M.colorSpace===v8||Y0===m?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,n);let H0=M.isCompressedTexture||M.image[0].isCompressedTexture,w=M.image[0]&&M.image[0].isDataTexture,c=[];for(let F0=0;F0<6;F0++){if(!H0&&!w)c[F0]=k(M.image[F0],!0,Z.maxCubemapSize);else c[F0]=w?M.image[F0].image:M.image[F0];c[F0]=h0(M,c[F0])}let d=c[0],J0=K.convert(M.format,M.colorSpace),W0=K.convert(M.type),G0=C(M.internalFormat,J0,W0,M.normalized,M.colorSpace),I0=M.isVideoTexture!==!0,P0=Z0.__version===void 0||e===!0,q0=a.dataReady,C0=z(M,d);KJ(J.TEXTURE_CUBE_MAP,M);let x0;if(M.isDepthTexture){if(G0=L(M.format===X8,M.type),P0)if(I0)$.texStorage2D(J.TEXTURE_CUBE_MAP,1,G0,d.width,d.height);else for(let F0=0;F0<6;F0++)$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,d.width,d.height,0,J0,W0,null)}else if(H0){if(I0&&P0)$.texStorage2D(J.TEXTURE_CUBE_MAP,C0,G0,d.width,d.height);for(let F0=0;F0<6;F0++){x0=c[F0].mipmaps;for(let t0=0;t0<x0.length;t0++){let DJ=x0[t0];if(M.format!==c9)if(J0!==null)if(I0){if(q0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,0,0,DJ.width,DJ.height,J0,DJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,G0,DJ.width,DJ.height,0,DJ.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,0,0,DJ.width,DJ.height,J0,W0,DJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,G0,DJ.width,DJ.height,0,J0,W0,DJ.data)}}}else{if(x0=M.mipmaps,I0&&P0){if(x0.length>0)C0++;let F0=wJ(c[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,C0,G0,F0.width,F0.height)}for(let F0=0;F0<6;F0++)if(w){if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,c[F0].width,c[F0].height,J0,W0,c[F0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,c[F0].width,c[F0].height,0,J0,W0,c[F0].data);for(let t0=0;t0<x0.length;t0++){let y9=x0[t0].image[F0].image;if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,0,0,y9.width,y9.height,J0,W0,y9.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,G0,y9.width,y9.height,0,J0,W0,y9.data)}}else{if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,J0,W0,c[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,J0,W0,c[F0]);for(let t0=0;t0<x0.length;t0++){let DJ=x0[t0];if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,0,0,J0,W0,DJ.image[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,G0,J0,W0,DJ.image[F0])}}}if(_(M)&&M.mipmapsAutoUpdate===!0)B(J.TEXTURE_CUBE_MAP);if(Z0.__version=a.version,M.onUpdate)M.onUpdate(M)}P.__version=M.version}function qJ(P,M,h,e,a,Z0){let Y0=K.convert(h.format,h.colorSpace),m=K.convert(h.type),n=C(h.internalFormat,Y0,m,h.normalized,h.colorSpace),H0=W.get(M),w=W.get(h);if(w.__renderTarget=M,!H0.__hasExternalTextures){let c=Math.max(1,M.width>>Z0),d=Math.max(1,M.height>>Z0);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)$.texImage3D(a,Z0,n,c,d,M.depth,0,Y0,m,null);else $.texImage2D(a,Z0,n,c,d,0,Y0,m,null)}if($.bindFramebuffer(J.FRAMEBUFFER,P),WJ(M))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,a,w.__webglTexture,0,E0(M));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,a,w.__webglTexture,Z0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function CJ(P,M,h){if(J.bindRenderbuffer(J.RENDERBUFFER,P),M.depthBuffer){let e=M.depthTexture,a=e&&e.isDepthTexture?e.type:null,Z0=L(M.stencilBuffer,a),Y0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(WJ(M))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(M),Z0,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(M),Z0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,P)}else{let e=M.textures;for(let a=0;a<e.length;a++){let Z0=e[a],Y0=K.convert(Z0.format,Z0.colorSpace),m=K.convert(Z0.type),n=C(Z0.internalFormat,Y0,m,Z0.normalized,Z0.colorSpace);if(WJ(M))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(M),n,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(M),n,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,n,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function mJ(P,M,h){let e=M.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let a=W.get(M.depthTexture);a.__renderTarget=M;let Z0=e?M.depthTexture.image[0]:M.depthTexture.image;if(!a.__webglTexture||Z0.width!==M.width||Z0.height!==M.height)Z0.width=M.width,Z0.height=M.height,M.depthTexture.needsUpdate=!0;if(e)B0(M.depthTexture,0);else D0(M.depthTexture,0);let Y0=a.__webglTexture,m=E0(M),n=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+h:J.TEXTURE_2D,H0=M.depthTexture.format===X8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===R7)if(WJ(M))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,n,Y0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,n,Y0,0);else if(M.depthTexture.format===X8)if(WJ(M))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,n,Y0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,n,Y0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dJ(P){let M=W.get(P),h=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let e=P.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(e){let a=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,e.removeEventListener("dispose",a)};e.addEventListener("dispose",a),M.__depthDisposeCallback=a}M.__boundDepthTexture=e}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(h)for(let e=0;e<6;e++)mJ(M.__webglFramebuffer[e],P,e);else if(P.texture.mipmaps.length>0)mJ(M.__webglFramebuffer[0],P,0);else mJ(M.__webglFramebuffer,P,0);else if(h){M.__webglDepthbuffer=[];for(let e=0;e<6;e++)if($.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[e]),M.__webglDepthbuffer[e]===void 0)M.__webglDepthbuffer[e]=J.createRenderbuffer(),CJ(M.__webglDepthbuffer[e],P,!1);else{let a=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=M.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,Z0)}}else{if(P.texture.mipmaps.length>0)$.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),CJ(M.__webglDepthbuffer,P,!1);else{let a=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,Z0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function q9(P,M,h){let e=W.get(P);if(M!==void 0)qJ(e.__webglFramebuffer,P,P.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)dJ(P)}function v(P){let M=P.texture,h=W.get(P),e=W.get(M);P.addEventListener("dispose",p),j(P);let a=P.textures,Z0=P.isWebGLCubeRenderTarget===!0,Y0=a.length>1;if(!Y0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=M.version,H.memory.textures++}if(Z0){h.__webglFramebuffer=[];for(let m=0;m<6;m++)if(M.mipmaps.length>0){h.__webglFramebuffer[m]=[];for(let n=0;n<M.mipmaps.length;n++)h.__webglFramebuffer[m][n]=J.createFramebuffer()}else h.__webglFramebuffer[m]=J.createFramebuffer()}else{if(M.mipmaps.length>0){h.__webglFramebuffer=[];for(let m=0;m<M.mipmaps.length;m++)h.__webglFramebuffer[m]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(Y0)for(let m=0,n=a.length;m<n;m++){let H0=W.get(a[m]);if(H0.__webglTexture===void 0)H0.__webglTexture=J.createTexture(),H.memory.textures++}if(P.samples>0&&WJ(P)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let m=0;m<a.length;m++){let n=a[m];h.__webglColorRenderbuffer[m]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[m]);let H0=K.convert(n.format,n.colorSpace),w=K.convert(n.type),c=C(n.internalFormat,H0,w,n.normalized,n.colorSpace,P.isXRRenderTarget===!0),d=E0(P);J.renderbufferStorageMultisample(J.RENDERBUFFER,d,c,P.width,P.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+m,J.RENDERBUFFER,h.__webglColorRenderbuffer[m])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),P.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),CJ(h.__webglDepthRenderbuffer,P,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Z0){$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),KJ(J.TEXTURE_CUBE_MAP,M);for(let m=0;m<6;m++)if(M.mipmaps.length>0)for(let n=0;n<M.mipmaps.length;n++)qJ(h.__webglFramebuffer[m][n],P,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,n);else qJ(h.__webglFramebuffer[m],P,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);if(_(M))B(J.TEXTURE_CUBE_MAP);else if(M.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);$.unbindTexture()}else if(Y0){for(let m=0,n=a.length;m<n;m++){let H0=a[m],w=W.get(H0),c=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)c=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,w.__webglTexture),KJ(c,H0),qJ(h.__webglFramebuffer,P,H0,J.COLOR_ATTACHMENT0+m,c,0),_(H0))B(c)}$.unbindTexture()}else{let m=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)m=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(m,e.__webglTexture),KJ(m,M),M.mipmaps.length>0)for(let n=0;n<M.mipmaps.length;n++)qJ(h.__webglFramebuffer[n],P,M,J.COLOR_ATTACHMENT0,m,n);else qJ(h.__webglFramebuffer,P,M,J.COLOR_ATTACHMENT0,m,0);if(_(M))B(m);else if(M.mipmaps.length>0)J.texParameteri(m,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);$.unbindTexture()}if(P.depthBuffer)dJ(P)}function F9(P){let M=P.textures;for(let h=0,e=M.length;h<e;h++){let a=M[h];if(_(a)&&a.mipmapsAutoUpdate===!0){let Z0=I(P),Y0=W.get(a).__webglTexture;$.bindTexture(Z0,Y0),B(Z0),$.unbindTexture()}}}let r0=[];function VJ(P){if(P.samples>0){if(WJ(P)===!1){let{textures:M,width:h,height:e}=P,a=J.COLOR_BUFFER_BIT,Z0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=W.get(P),m=M.length>1;if(m)for(let H0=0;H0<M.length;H0++)$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,null,0);if($.bindFramebuffer(J.READ_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer);for(let H0=0;H0<M.length;H0++){if(P.resolveDepthBuffer){if(P.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if(P.stencilBuffer&&P.resolveStencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(m){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[H0]);let w=W.get(M[H0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,w,0)}if(J.blitFramebuffer(0,0,h,e,0,0,h,e,a,J.NEAREST),Y===!0){if(r0.length=0,r0.push(J.COLOR_ATTACHMENT0+H0),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1)r0.push(Z0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,r0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),m)for(let H0=0;H0<M.length;H0++){$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[H0]);let w=W.get(M[H0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,w,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Y){let M=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function E0(P){return Math.min(Z.maxSamples,P.samples)}function WJ(P){let M=W.get(P);return P.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function S0(P){let M=H.render.frame;if(G.get(P)!==M)G.set(P,M),P.update()}function h0(P,M){let{colorSpace:h,format:e,type:a}=P;if(P.isCompressedTexture===!0||P.isVideoTexture===!0)return M;if(h!==gJ&&h!==v8)if(g0.getTransfer(h)===$J){if(e!==c9||a!==B9)_0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else j0("WebGLTextures: Unsupported texture color space:",h);return M}function wJ(P){if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement)U.width=P.naturalWidth||P.width,U.height=P.naturalHeight||P.height;else if(typeof VideoFrame<"u"&&P instanceof VideoFrame)U.width=P.displayWidth,U.height=P.displayHeight;else U.width=P.width,U.height=P.height;return U}this.allocateTextureUnit=i,this.resetTextureUnits=r,this.getTextureUnits=$0,this.setTextureUnits=k0,this.setTexture2D=D0,this.setTexture2DArray=w0,this.setTexture3D=T0,this.setTextureCube=B0,this.rebindTextures=q9,this.setupRenderTarget=v,this.updateRenderTargetMipmap=F9,this.updateMultisampleRenderTarget=VJ,this.setupDepthRenderbuffer=dJ,this.setupFrameBufferTexture=qJ,this.useMultisampledRTT=WJ,this.dispose=s}function pq(J,Q){function $(W,Z=v8){let K,H=g0.getTransfer(Z);if(W===B9)return J.UNSIGNED_BYTE;if(W===t$)return J.UNSIGNED_SHORT_4_4_4_4;if(W===e$)return J.UNSIGNED_SHORT_5_5_5_1;if(W===wH)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===AH)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===IH)return J.BYTE;if(W===CH)return J.SHORT;if(W===Q6)return J.UNSIGNED_SHORT;if(W===r$)return J.INT;if(W===H8)return J.UNSIGNED_INT;if(W===u9)return J.FLOAT;if(W===A9)return J.HALF_FLOAT;if(W===TH)return J.ALPHA;if(W===SH)return J.RGB;if(W===c9)return J.RGBA;if(W===R7)return J.DEPTH_COMPONENT;if(W===X8)return J.DEPTH_STENCIL;if(W===jH)return J.RED;if(W===JW)return J.RED_INTEGER;if(W===j8)return J.RG;if(W===QW)return J.RG_INTEGER;if(W===$W)return J.RGBA_INTEGER;if(W===FQ||W===OQ||W===RQ||W===LQ)if(H===$J)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===FQ)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===OQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===RQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===LQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===FQ)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===OQ)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===RQ)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===LQ)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===WW||W===ZW||W===KW||W===HW)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===WW)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===ZW)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===KW)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===HW)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===XW||W===YW||W===UW||W===GW||W===EW||W===MQ||W===NW)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===XW||W===YW)return H===$J?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===UW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===GW)return K.COMPRESSED_R11_EAC;if(W===EW)return K.COMPRESSED_SIGNED_R11_EAC;if(W===MQ)return K.COMPRESSED_RG11_EAC;if(W===NW)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===qW||W===FW||W===OW||W===RW||W===LW||W===MW||W===VW||W===DW||W===BW||W===kW||W===zW||W===_W||W===PW||W===IW)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===qW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===FW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===OW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===RW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===LW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===MW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===VW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===DW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===BW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===kW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===zW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===_W)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===PW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===IW)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===CW||W===wW||W===AW)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===CW)return H===$J?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===wW)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===AW)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===TW||W===SW||W===VQ||W===jW)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===TW)return K.COMPRESSED_RED_RGTC1_EXT;if(W===SW)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===VQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===jW)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===S8)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var lq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mq=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new fQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new U9({vertexShader:lq,fragmentShader:mq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new _J(new y8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mX extends n9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",X=1,Y=null,U=null,G=null,N=null,E=null,q=null,R=typeof XRWebGLBinding<"u",D=new lX,F={},O=Q.getContextAttributes(),k=null,_=null,B=[],I=[],C=new R0,L=null,z=null,j=new zJ;j.viewport=new e0;let l=new zJ;l.viewport=new e0;let y=[j,l],p=new qZ,t=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let Q0=B[i];if(Q0===void 0)Q0=new K6,B[i]=Q0;return Q0.getTargetRaySpace()},this.getControllerGrip=function(i){let Q0=B[i];if(Q0===void 0)Q0=new K6,B[i]=Q0;return Q0.getGripSpace()},this.getHand=function(i){let Q0=B[i];if(Q0===void 0)Q0=new K6,B[i]=Q0;return Q0.getHandSpace()};function s(i){let Q0=I.indexOf(i.inputSource);if(Q0===-1)return;let D0=B[Q0];if(D0!==void 0)D0.update(i.inputSource,i.frame,Y||K),D0.dispatchEvent({type:i.type,data:i.inputSource})}function o(){W.removeEventListener("select",s),W.removeEventListener("selectstart",s),W.removeEventListener("selectend",s),W.removeEventListener("squeeze",s),W.removeEventListener("squeezestart",s),W.removeEventListener("squeezeend",s),W.removeEventListener("end",o),W.removeEventListener("inputsourceschange",x);for(let i=0;i<B.length;i++){let Q0=I[i];if(Q0===null)continue;I[i]=null,B[i].disconnect(Q0)}t=null,A=null,D.reset();for(let i in F)delete F[i];if(J.setRenderTarget(k),E=null,N=null,G=null,W=null,_=null,k0.stop(),$.isPresenting=!1,J.setPixelRatio(L),J.setSize(C.width,C.height,!1),z!==null){let i=z.camera;i.fov=z.fov,i.zoom=z.zoom,i.updateProjectionMatrix(),z=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(Z=i,$.isPresenting===!0)_0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(H=i,$.isPresenting===!0)_0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Y||K},this.setReferenceSpace=function(i){Y=i},this.getBaseLayer=function(){return N!==null?N:E},this.getBinding=function(){if(G===null&&R)G=new XRWebGLBinding(W,Q);return G},this.getFrame=function(){return q},this.getSession=function(){return W},this.setSession=async function(i){if(W=i,W!==null){if(k=J.getRenderTarget(),W.addEventListener("select",s),W.addEventListener("selectstart",s),W.addEventListener("selectend",s),W.addEventListener("squeeze",s),W.addEventListener("squeezestart",s),W.addEventListener("squeezeend",s),W.addEventListener("end",o),W.addEventListener("inputsourceschange",x),O.xrCompatible!==!0)await Q.makeXRCompatible();if(L=J.getPixelRatio(),J.getSize(C),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let D0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:Z};E=new XRWebGLLayer(W,Q,D0),W.updateRenderState({baseLayer:E}),J.setPixelRatio(1),J.setSize(E.framebufferWidth,E.framebufferHeight,!1),_=new H9(E.framebufferWidth,E.framebufferHeight,{format:c9,type:B9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}else{let D0=null,w0=null,T0=null;if(O.depth)T0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,D0=O.stencil?X8:R7,w0=O.stencil?S8:H8;let B0={colorFormat:Q.RGBA8,depthFormat:T0,scaleFactor:Z};G=this.getBinding(),N=G.createProjectionLayer(B0),W.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),_=new H9(N.textureWidth,N.textureHeight,{format:c9,type:B9,depthTexture:new U8(N.textureWidth,N.textureHeight,w0,void 0,void 0,void 0,void 0,void 0,void 0,D0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(X),Y=null,K=await W.requestReferenceSpace(H),k0.setContext(W),k0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function x(i){for(let Q0=0;Q0<i.removed.length;Q0++){let D0=i.removed[Q0],w0=I.indexOf(D0);if(w0>=0)I[w0]=null,B[w0].disconnect(D0)}for(let Q0=0;Q0<i.added.length;Q0++){let D0=i.added[Q0],w0=I.indexOf(D0);if(w0===-1){for(let B0=0;B0<B.length;B0++)if(B0>=I.length){I.push(D0),w0=B0;break}else if(I[B0]===null){I[B0]=D0,w0=B0;break}if(w0===-1)break}let T0=B[w0];if(T0)T0.connect(D0)}}function K0(i,Q0){if(Q0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices(Q0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(W===null)return;let{near:Q0,far:D0}=i;if(D.texture!==null){if(D.depthNear>0)Q0=D.depthNear;if(D.depthFar>0)D0=D.depthFar}if(p.near=l.near=j.near=Q0,p.far=l.far=j.far=D0,t!==p.near||A!==p.far)W.updateRenderState({depthNear:p.near,depthFar:p.far}),t=p.near,A=p.far;p.layers.mask=i.layers.mask|6,j.layers.mask=p.layers.mask&-5,l.layers.mask=p.layers.mask&-3;let w0=i.parent,T0=p.cameras;K0(p,w0);for(let B0=0;B0<T0.length;B0++)K0(T0[B0],w0);if(p.projectionMatrix.copy(j.projectionMatrix),p.projectionMatrixInverse.copy(j.projectionMatrixInverse),z===null&&i.isPerspectiveCamera)z={camera:i,fov:i.fov,zoom:i.zoom};u(i,p,w0)};function u(i,Q0,D0){if(D0===null)i.matrix.copy(Q0.matrixWorld);else i.matrix.copy(D0.matrixWorld),i.matrix.invert(),i.matrix.multiply(Q0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy(Q0.projectionMatrix),i.projectionMatrixInverse.copy(Q0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=I8*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return p},this.getFoveation=function(){if(N===null&&E===null)return;return X},this.setFoveation=function(i){if(X=i,N!==null)N.fixedFoveation=i;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=i},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(p)},this.getCameraTexture=function(i){return F[i]};let r=null;function $0(i,Q0){if(U=Q0.getViewerPose(Y||K),q=Q0,U!==null){let D0=U.views;if(E!==null)J.setRenderTargetFramebuffer(_,E.framebuffer),J.setRenderTarget(_);let w0=!1;if(D0.length!==p.cameras.length)p.cameras.length=0,w0=!0;for(let d0=0;d0<D0.length;d0++){let b0=D0[d0],KJ=null;if(E!==null)KJ=E.getViewport(b0);else{let GJ=G.getViewSubImage(N,b0);if(KJ=GJ.viewport,d0===0)J.setRenderTargetTextures(_,GJ.colorTexture,GJ.depthStencilTexture),J.setRenderTarget(_)}let n0=y[d0];if(n0===void 0)n0=new zJ,n0.layers.enable(d0),n0.viewport=new e0,y[d0]=n0;if(n0.matrix.fromArray(b0.transform.matrix),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.projectionMatrix.fromArray(b0.projectionMatrix),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert(),n0.viewport.set(KJ.x,KJ.y,KJ.width,KJ.height),d0===0)p.matrix.copy(n0.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale);if(w0===!0)p.cameras.push(n0)}let T0=W.enabledFeatures;if(T0&&T0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&R){G=$.getBinding();let d0=G.getDepthInformation(D0[0]);if(d0&&d0.isValid&&d0.texture)D.init(d0,W.renderState)}if(T0&&T0.includes("camera-access")&&R){J.state.unbindTexture(),G=$.getBinding();for(let d0=0;d0<D0.length;d0++){let b0=D0[d0].camera;if(b0){let KJ=F[b0];if(!KJ)KJ=new fQ,F[b0]=KJ;let n0=G.getCameraImage(b0);KJ.sourceTexture=n0}}}}for(let D0=0;D0<B.length;D0++){let w0=I[D0],T0=B[D0];if(w0!==null&&T0!==void 0)T0.update(w0,Q0,Y||K)}if(r)r(i,Q0);if(Q0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Q0});q=null}let k0=new IX;k0.setAnimationLoop($0),this.setAnimationLoop=function(i){r=i},this.dispose=function(){}}}var dq=new v0,dX=new y0;dX.set(-1,0,0,0,1,0,0,0,1);function uq(J,Q){function $(F,O){if(F.matrixAutoUpdate===!0)F.updateMatrix();O.value.copy(F.matrix)}function W(F,O){if(O.color.getRGB(F.fogColor.value,$Z(J)),O.isFog)F.fogNear.value=O.near,F.fogFar.value=O.far;else if(O.isFogExp2)F.fogDensity.value=O.density}function Z(F,O,k,_,B){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)K(F,O);else if(O.isMeshLambertMaterial){if(K(F,O),O.envMap)F.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)K(F,O),N(F,O);else if(O.isMeshPhongMaterial){if(K(F,O),G(F,O),O.envMap)F.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(K(F,O),E(F,O),O.isMeshPhysicalMaterial)q(F,O,B)}else if(O.isMeshMatcapMaterial)K(F,O),R(F,O);else if(O.isMeshDepthMaterial)K(F,O);else if(O.isMeshDistanceMaterial)K(F,O),D(F,O);else if(O.isMeshNormalMaterial)K(F,O);else if(O.isLineBasicMaterial){if(H(F,O),O.isLineDashedMaterial)X(F,O)}else if(O.isPointsMaterial)Y(F,O,k,_);else if(O.isSpriteMaterial)U(F,O);else if(O.isShadowMaterial)F.color.value.copy(O.color),F.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function K(F,O){if(F.opacity.value=O.opacity,O.color)F.diffuse.value.copy(O.color);if(O.emissive)F.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.bumpMap){if(F.bumpMap.value=O.bumpMap,$(O.bumpMap,F.bumpMapTransform),F.bumpScale.value=O.bumpScale,O.side===uJ)F.bumpScale.value*=-1}if(O.normalMap){if(F.normalMap.value=O.normalMap,$(O.normalMap,F.normalMapTransform),F.normalScale.value.copy(O.normalScale),O.side===uJ)F.normalScale.value.negate()}if(O.displacementMap)F.displacementMap.value=O.displacementMap,$(O.displacementMap,F.displacementMapTransform),F.displacementScale.value=O.displacementScale,F.displacementBias.value=O.displacementBias;if(O.emissiveMap)F.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,F.emissiveMapTransform);if(O.specularMap)F.specularMap.value=O.specularMap,$(O.specularMap,F.specularMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest;let k=Q.get(O),_=k.envMap,B=k.envMapRotation;if(_){if(F.envMap.value=_,F.envMapRotation.value.setFromMatrix4(dq.makeRotationFromEuler(B)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)F.envMapRotation.value.premultiply(dX);F.reflectivity.value=O.reflectivity,F.ior.value=O.ior,F.refractionRatio.value=O.refractionRatio}if(O.lightMap)F.lightMap.value=O.lightMap,F.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,F.lightMapTransform);if(O.aoMap)F.aoMap.value=O.aoMap,F.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,F.aoMapTransform)}function H(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,O.map)F.map.value=O.map,$(O.map,F.mapTransform)}function X(F,O){F.dashSize.value=O.dashSize,F.totalSize.value=O.dashSize+O.gapSize,F.scale.value=O.scale}function Y(F,O,k,_){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.size.value=O.size*k,F.scale.value=_*0.5,O.map)F.map.value=O.map,$(O.map,F.uvTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function U(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.rotation.value=O.rotation,O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function G(F,O){F.specular.value.copy(O.specular),F.shininess.value=Math.max(O.shininess,0.0001)}function N(F,O){if(O.gradientMap)F.gradientMap.value=O.gradientMap}function E(F,O){if(F.metalness.value=O.metalness,O.metalnessMap)F.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=O.roughness,O.roughnessMap)F.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,F.roughnessMapTransform);if(O.envMap)F.envMapIntensity.value=O.envMapIntensity}function q(F,O,k){if(F.ior.value=O.ior,O.diffuseRoughness>0){if(F.diffuseRoughness.value=O.diffuseRoughness,O.diffuseRoughnessMap)F.diffuseRoughnessMap.value=O.diffuseRoughnessMap,$(O.diffuseRoughnessMap,F.diffuseRoughnessMapTransform)}if(O.sheen>0){if(F.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),F.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)F.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,F.sheenColorMapTransform);if(O.sheenRoughnessMap)F.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(F.clearcoat.value=O.clearcoat,F.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)F.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,F.clearcoatMapTransform);if(O.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(F.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===uJ)F.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)F.dispersion.value=O.dispersion;if(O.retroreflectivity>0)F.retroreflectivity.value=O.retroreflectivity;if(O.iridescence>0){if(F.iridescence.value=O.iridescence,F.iridescenceIOR.value=O.iridescenceIOR,F.iridescenceThicknessMinimum.value=O.iridescenceThicknessMinimum,F.iridescenceThicknessMaximum.value=O.iridescenceThicknessMaximum,O.iridescenceMap)F.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,F.iridescenceMapTransform);if(O.iridescenceThicknessMap)F.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(O.transmission>0){if(F.transmission.value=O.transmission,F.transmissionSamplerMap.value=k.texture,F.transmissionSamplerSize.value.set(k.width,k.height),O.transmissionMap)F.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=O.thickness,O.thicknessMap)F.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=O.attenuationDistance,F.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(F.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)F.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=O.specularIntensity,F.specularColor.value.copy(O.specularColor),O.specularColorMap)F.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,F.specularColorMapTransform);if(O.specularIntensityMap)F.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,F.specularIntensityMapTransform)}function R(F,O){if(O.matcap)F.matcap.value=O.matcap}function D(F,O){let k=Q.get(O).light;F.referencePosition.value.setFromMatrixPosition(k.matrixWorld),F.nearDistance.value=k.shadow.camera.near,F.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function cq(J,Q,$,W){let Z={},K={};function H(k,_){let B=_.program;W.uniformBlockBinding(k,B,Z[k.id])}function X(k,_){let B=Z[k.id];if(B===void 0)R(k),B=Y(k),Z[k.id]=B,k.addEventListener("dispose",F);let I=_.program;W.updateUBOMapping(k,I);let C=Q.render.frame;if(K[k.id]!==C)U(k),K[k.id]=C}function Y(k){let _=J.createBuffer(),B=k.__size,I=k.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,B,I),J.bindBuffer(J.UNIFORM_BUFFER,null),_}function U(k){let _=Z[k.id],B=k.uniforms,I=k.__cache;J.bindBuffer(J.UNIFORM_BUFFER,_);for(let C=0,L=B.length;C<L;C++){let z=B[C];if(Array.isArray(z))for(let j=0,l=z.length;j<l;j++)G(z[j],C,j,I);else G(z,C,0,I)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function G(k,_,B,I){if(E(k,_,B,I)===!0){let{__offset:C,value:L}=k;if(Array.isArray(L)){let z=0;for(let j=0;j<L.length;j++){let l=L[j],y=D(l,!0);N(l,k.__data,z),z+=y.storage/Float32Array.BYTES_PER_ELEMENT}}else N(L,k.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,C,k.__data)}}function N(k,_,B){if(typeof k==="number"||typeof k==="boolean")_[B]=k;else if(k.isMatrix3)_[B]=k.elements[0],_[B+1]=k.elements[1],_[B+2]=k.elements[2],_[B+3]=0,_[B+4]=k.elements[3],_[B+5]=k.elements[4],_[B+6]=k.elements[5],_[B+7]=0,_[B+8]=k.elements[6],_[B+9]=k.elements[7],_[B+10]=k.elements[8],_[B+11]=0;else if(ArrayBuffer.isView(k))_.set(k.subarray(0,_.length-B),B);else k.toArray(_,B)}function E(k,_,B,I){let C=k.value,L=_+"_"+B;if(Array.isArray(C)){if(I[L]===void 0)I[L]=[];let z=I[L],j=!1;for(let l=0;l<C.length;l++)if(q(C[l],z,l)===!0)j=!0;return j}return q(C,I,L)}function q(k,_,B){if(_[B]===void 0){if(typeof k==="number"||typeof k==="boolean")_[B]=k;else if(ArrayBuffer.isView(k))_[B]=k.slice();else _[B]=k.clone();return!0}else{let I=_[B];if(typeof k==="number"||typeof k==="boolean"){if(I!==k)return _[B]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(I.equals(k)===!1)return I.copy(k),!0}return!1}function R(k){let _=k.uniforms,B=0,I=16;for(let L=0,z=_.length;L<z;L++){let j=Array.isArray(_[L])?_[L]:[_[L]];for(let l=0,y=j.length;l<y;l++){let p=j[l],t=Array.isArray(p.value)?p.value:[p.value],A=Array.isArray(_[L])||Array.isArray(p.value),s=B;for(let x=0,K0=t.length;x<K0;x++){let u=t[x],r=D(u,A),$0=B%I,k0=$0%r.boundary,i=$0+k0;if(B+=k0,i!==0&&I-i<r.storage)B+=I-i;if(x===0)s=B;B+=r.storage}let o=p.type==="int"?Int32Array:p.type==="uint"?Uint32Array:Float32Array;p.__data=new o((B-s)/Float32Array.BYTES_PER_ELEMENT),p.__offset=s}}let C=B%I;if(C>0)B+=I-C;return k.__size=B,k.__cache={},this}function D(k,_){let B={boundary:0,storage:0};if(typeof k==="number"||typeof k==="boolean")B.boundary=4,B.storage=4;else if(k.isVector2)B.boundary=8,B.storage=8;else if(k.isVector3||k.isColor)B.boundary=16,B.storage=12;else if(k.isVector4)B.boundary=16,B.storage=16;else if(k.isMatrix3)B.boundary=16,B.storage=48;else if(k.isMatrix4)B.boundary=16,B.storage=64;else if(k.isTexture)_0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(k))B.boundary=16,B.storage=k.byteLength;else _0("WebGLRenderer: Unsupported uniform value type.",k);if(_===!0)B.boundary=16,B.storage=Math.ceil(B.storage/16)*16;return B}function F(k){let _=k.target;_.removeEventListener("dispose",F),J.deleteBuffer(Z[_.id]),delete Z[_.id],delete K[_.id]}function O(){for(let k in Z)J.deleteBuffer(Z[k]);Z={},K={}}return{bind:H,update:X,dispose:O}}var nq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),T9=null;function sq(){if(T9===null)T9=new Y6(nq,16,16,j8,A9),T9.name="DFG_LUT",T9.minFilter=yJ,T9.magFilter=yJ,T9.wrapS=F7,T9.wrapT=F7,T9.generateMipmaps=!1,T9.needsUpdate=!0;return T9}class DZ{constructor(J={}){let{canvas:Q=gH(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:Y=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:N=!1,outputBufferType:E=B9}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=K;let R=E,D=new Set([$W,QW,JW]),F=new Set([B9,H8,Q6,S8,t$,e$]),O=new Uint32Array(4),k=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},B=null,I=null,C=[],L=[],z=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=w9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,l=!1,y=null,p=null,t=null,A=null;this._outputColorSpace=cJ;let s=0,o=0,x=null,K0=-1,u=null,r=new e0,$0=new e0,k0=null,i=new A0(0),Q0=0,D0=Q.width,w0=Q.height,T0=1,B0=null,a0=null,d0=new e0(0,0,D0,w0),b0=new e0(0,0,D0,w0),KJ=!1,n0=new C8,GJ=new TQ,NJ=!1,lJ=!1,aJ=new v0,qJ=new S,CJ=new e0,mJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dJ=!1;function q9(){return x===null?T0:1}let v=$;function F9(V,T){return Q.getContext(V,T)}let r0,VJ,E0,WJ,S0,h0,wJ,P,M,h,e,a,Z0,Y0,m,n,H0,w,c,d,J0,W0,G0;try{let V={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:X,preserveDrawingBuffer:Y,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${nK}`);if(Q.addEventListener("webglcontextlost",q0,!1),Q.addEventListener("webglcontextrestored",C0,!1),Q.addEventListener("webglcontextcreationerror",x0,!1),v===null){if(v=F9("webgl2",V),v===null)if(F9("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}I0()}catch(V){throw Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",C0,!1),Q.removeEventListener("webglcontextcreationerror",x0,!1),j0("WebGLRenderer: "+V.message),V}function I0(){if(r0=new ZN(v),r0.init(),J0=new pq(v,r0),VJ=new sE(v,r0,J,J0),E0=new xq(v,r0),VJ.reversedDepthBuffer&&N)E0.buffers.depth.setReversed(!0);p=v.createFramebuffer(),t=v.createFramebuffer(),A=v.createFramebuffer(),WJ=new XN(v),S0=new _q,h0=new gq(v,r0,E0,S0,VJ,J0,WJ),wJ=new WN(j),P=new U5(v),W0=new cE(v,P),M=new KN(v,P,WJ,W0),h=new UN(v,M,P,W0,WJ),w=new YN(v,VJ,h0),m=new iE(S0),e=new zq(j,wJ,r0,VJ,W0,m),a=new uq(j,S0),Z0=new Iq,Y0=new jq(r0),H0=new uE(j,wJ,E0,h,q,X),n=new bq(j,h,VJ),G0=new cq(v,WJ,VJ,E0),c=new nE(v,r0,WJ),d=new HN(v,r0,WJ),WJ.programs=e.programs,j.capabilities=VJ,j.extensions=r0,j.properties=S0,j.renderLists=Z0,j.shadowMap=n,j.state=E0,j.info=WJ}if(R!==B9)z=new EN(R,Q.width,Q.height,H,W,Z);let P0=new mX(j,v);this.xr=P0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let V=r0.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=r0.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return T0},this.setPixelRatio=function(V){if(V===void 0)return;T0=V,this.setSize(D0,w0,!1)},this.getSize=function(V){return V.set(D0,w0)},this.setSize=function(V,T,g=!0){if(P0.isPresenting){_0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(D0=V,w0=T,Q.width=Math.floor(V*T0),Q.height=Math.floor(T*T0),g===!0)Q.style.width=V+"px",Q.style.height=T+"px";if(z!==null)z.setSize(Q.width,Q.height);this.setViewport(0,0,V,T)},this.getDrawingBufferSize=function(V){return V.set(D0*T0,w0*T0).floor()},this.setDrawingBufferSize=function(V,T,g){D0=V,w0=T,T0=g,Q.width=Math.floor(V*g),Q.height=Math.floor(T*g),this.setViewport(0,0,V,T)},this.setEffects=function(V){if(R===B9){j0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(V){for(let T=0;T<V.length;T++)if(V[T].isOutputPass===!0){_0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(V||[])},this.getCurrentViewport=function(V){return V.copy(r)},this.getViewport=function(V){return V.copy(d0)},this.setViewport=function(V,T,g,f){if(V.isVector4)d0.set(V.x,V.y,V.z,V.w);else d0.set(V,T,g,f);E0.viewport(r.copy(d0).multiplyScalar(q9()).round())},this.getScissor=function(V){return V.copy(b0)},this.setScissor=function(V,T,g,f){if(V.isVector4)b0.set(V.x,V.y,V.z,V.w);else b0.set(V,T,g,f);E0.scissor($0.copy(b0).multiplyScalar(q9()).round())},this.getScissorTest=function(){return KJ},this.setScissorTest=function(V){E0.setScissorTest(KJ=V)},this.setOpaqueSort=function(V){B0=V},this.setTransparentSort=function(V){a0=V},this.getClearColor=function(V){return V.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor(...arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha(...arguments)},this.clear=function(V=!0,T=!0,g=!0){let f=0;if(V){let b=!1;if(x!==null){let U0=x.texture.format;b=D.has(U0)}if(b){let U0=x.texture.type,L0=F.has(U0),X0=H0.getClearColor(),O0=H0.getClearAlpha(),z0=X0.r,f0=X0.g,u0=X0.b;if(L0)O[0]=z0,O[1]=f0,O[2]=u0,O[3]=O0,v.clearBufferuiv(v.COLOR,0,O);else k[0]=z0,k[1]=f0,k[2]=u0,k[3]=O0,v.clearBufferiv(v.COLOR,0,k)}else f|=v.COLOR_BUFFER_BIT}if(T)f|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(g)f|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(f!==0)v.clear(f)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(V){V.setRenderer(this),y=V},this.dispose=function(){Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",C0,!1),Q.removeEventListener("webglcontextcreationerror",x0,!1),H0.dispose(),Z0.dispose(),Y0.dispose(),h0.dispose(),S0.dispose(),wJ.dispose(),h.dispose(),M.dispose(),W0.dispose(),G0.dispose(),e.dispose(),P0.dispose(),P0.removeEventListener("sessionstart",lZ),P0.removeEventListener("sessionend",mZ),M8.stop()};function q0(V){V.preventDefault(),i7("WebGLRenderer: Context Lost."),l=!0}function C0(){i7("WebGLRenderer: Context Restored."),l=!1;let V=WJ.autoReset,T=n.enabled,g=n.autoUpdate,f=n.needsUpdate,b=n.type;I0(),WJ.autoReset=V,n.enabled=T,n.autoUpdate=g,n.needsUpdate=f,n.type=b}function x0(V){j0("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function F0(V){let T=V.target;T.removeEventListener("dispose",F0),t0(T)}function t0(V){DJ(V),S0.remove(V)}function DJ(V){let T=S0.get(V).programs;if(T!==void 0){if(T.forEach(function(g){e.releaseProgram(g)}),V.isShaderMaterial)e.releaseShaderCache(V)}}this.renderBufferDirect=function(V,T,g,f,b,U0){if(T===null)T=mJ;let L0=b.isMesh&&b.matrixWorld.determinantAffine()<0,X0=vY(V,T,g,f,b);E0.setMaterial(f,L0);let O0=g.index,z0=1;if(f.wireframe===!0){if(O0=M.getWireframeAttribute(g),O0===void 0)return;z0=2}let f0=g.drawRange,u0=g.attributes.position,M0=f0.start*z0,c0=(f0.start+f0.count)*z0;if(U0!==null)M0=Math.max(M0,U0.start*z0),c0=Math.min(c0,(U0.start+U0.count)*z0);if(O0!==null)M0=Math.max(M0,0),c0=Math.min(c0,O0.count);else if(u0!==void 0&&u0!==null)M0=Math.max(M0,0),c0=Math.min(c0,u0.count);let FJ=c0-M0;if(FJ<0||FJ===1/0)return;W0.setup(b,f,X0,g,O0);let ZJ,JJ=c;if(O0!==null)ZJ=P.get(O0),JJ=d,JJ.setIndex(ZJ);if(b.isMesh)if(f.wireframe===!0)E0.setLineWidth(f.wireframeLinewidth*q9()),JJ.setMode(v.LINES);else JJ.setMode(v.TRIANGLES);else if(b.isLine){let AJ=f.linewidth;if(AJ===void 0)AJ=1;if(E0.setLineWidth(AJ*q9()),b.isLineSegments)JJ.setMode(v.LINES);else if(b.isLineLoop)JJ.setMode(v.LINE_LOOP);else JJ.setMode(v.LINE_STRIP)}else if(b.isPoints)JJ.setMode(v.POINTS);else if(b.isSprite)JJ.setMode(v.TRIANGLES);if(b.isBatchedMesh)if(!r0.get("WEBGL_multi_draw")){let{_multiDrawStarts:AJ,_multiDrawCounts:V0,_multiDrawCount:bJ}=b,i0=O0?P.get(O0).bytesPerElement:1,V8=S0.get(f).currentProgram.getUniforms();for(let TJ=0;TJ<bJ;TJ++)V8.setValue(v,"_gl_DrawID",TJ),JJ.render(AJ[TJ]/i0,V0[TJ])}else JJ.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else if(b.isInstancedMesh)JJ.renderInstances(M0,FJ,b.count);else if(g.isInstancedBufferGeometry){let AJ=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,V0=Math.min(g.instanceCount,AJ);JJ.renderInstances(M0,FJ,V0)}else JJ.render(M0,FJ)};function y9(V,T,g,f){if(y!==null&&V.isNodeMaterial)y.setObject(f,V);if(NJ===!0)m.setState(V,g,!1);if(V.transparent===!0&&V.side===vJ&&V.forceSinglePass===!1)V.side=uJ,V.needsUpdate=!0,T7(V,T,f),V.side=K8,V.needsUpdate=!0,T7(V,T,f),V.side=vJ;else T7(V,T,f)}this.compile=function(V,T,g=null){if(g===null)g=V;if(y!==null)y.renderStart(V,T,g);if(I=Y0.get(g),I.init(T),L.push(I),g.traverseVisible(function(b){if(b.isLight&&b.layers.test(T.layers)){if(I.pushLight(b),b.castShadow)I.pushShadow(b)}}),V!==g)V.traverseVisible(function(b){if(b.isLight&&b.layers.test(T.layers)){if(I.pushLight(b),b.castShadow)I.pushShadow(b)}});if(I.setupLights(),y!==null)y.updateLights(I.state.lightsArray);if(lJ=this.localClippingEnabled,NJ=m.init(this.clippingPlanes,lJ),NJ===!0)m.setGlobalState(this.clippingPlanes,T);if(y!==null)n.render(I.state.shadowsArray,g,T);let f=new Set;if(V.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let U0=b.material;if(U0)if(Array.isArray(U0))for(let L0=0;L0<U0.length;L0++){let X0=U0[L0];y9(X0,g,T,b),f.add(X0)}else y9(U0,g,T,b),f.add(U0)}),I=L.pop(),y!==null)y.renderEnd();return f},this.compileAsync=function(V,T,g=null){let f=this.compile(V,T,g);return new Promise((b)=>{function U0(){if(f.forEach(function(L0){let O0=S0.get(L0).currentProgram;if(O0===void 0||O0.isReady())f.delete(L0)}),f.size===0){b(V);return}setTimeout(U0,10)}if(r0.get("KHR_parallel_shader_compile")!==null)U0();else setTimeout(U0,10)})};let H$=null;function SY(V){if(H$)H$(V)}function lZ(){M8.stop()}function mZ(){M8.start()}let M8=new IX;if(M8.setAnimationLoop(SY),typeof self<"u")M8.setContext(self);this.setAnimationLoop=function(V){H$=V,P0.setAnimationLoop(V),V===null?M8.stop():M8.start()},P0.addEventListener("sessionstart",lZ),P0.addEventListener("sessionend",mZ),this.render=function(V,T){if(T!==void 0&&T.isCamera!==!0){j0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(y!==null)y.renderStart(V,T);let g=P0.enabled===!0&&P0.isPresenting===!0,f=z!==null&&(x===null||g)&&z.begin(j,x);if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(T.parent===null&&T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(P0.enabled===!0&&P0.isPresenting===!0&&(z===null||z.isCompositing()===!1)){if(P0.cameraAutoUpdate===!0)P0.updateCamera(T);T=P0.getCamera()}if(V.isScene===!0)V.onBeforeRender(j,V,T,x);if(I=Y0.get(V,L.length),I.init(T),I.state.textureUnits=h0.getTextureUnits(),L.push(I),aJ.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera)GJ.setFromArrayCamera(T);else n0.setFromProjectionMatrix(aJ,lW,T.reversedDepth);if(lJ=this.localClippingEnabled,NJ=m.init(this.clippingPlanes,lJ),B=Z0.get(V,C.length),B.init(),C.push(B),this.info.render.frame++,P0.enabled===!0&&P0.isPresenting===!0){let L0=j.xr.getDepthSensingMesh();if(L0!==null)X$(L0,T,-1/0,j.sortObjects)}if(X$(V,T,0,j.sortObjects),B.finish(),y!==null)y.updateLights(I.state.lightsArray);if(j.sortObjects===!0)B.sort(B0,a0);if(dJ=P0.enabled===!1||P0.isPresenting===!1||P0.hasDepthSensing()===!1,dJ)H0.addToRenderList(B,V);if(this.info.autoReset===!0)this.info.reset();if(NJ===!0)m.beginShadows();let b=I.state.shadowsArray;if(n.render(b,V,T),NJ===!0)m.endShadows();if((f&&z.hasRenderPass())===!1){let{opaque:L0,transmissive:X0}=B;if(I.setupLights(),T.isArrayCamera){let O0=T.cameras;if(X0.length>0)for(let z0=0,f0=O0.length;z0<f0;z0++){let u0=O0[z0];uZ(L0,X0,V,u0)}if(dJ)H0.render(V);for(let z0=0,f0=O0.length;z0<f0;z0++){let u0=O0[z0];dZ(B,V,u0,u0.viewport)}}else{if(X0.length>0)uZ(L0,X0,V,T);if(dJ)H0.render(V);dZ(B,V,T)}}if(x!==null&&o===0)h0.updateMultisampleRenderTarget(x),h0.updateRenderTargetMipmap(x);if(f)z.end(j);if(V.isScene===!0)V.onAfterRender(j,V,T);if(W0.resetDefaultState(),K0=-1,u=null,L.pop(),L.length>0){if(I=L[L.length-1],h0.setTextureUnits(I.state.textureUnits),NJ===!0)m.setGlobalState(j.clippingPlanes,I.state.camera)}else I=null;if(C.pop(),C.length>0)B=C[C.length-1];else B=null;if(y!==null)y.renderEnd()};function X$(V,T,g,f){if(V.visible===!1)return;if(V.layers.test(T.layers)){if(V.isGroup)g=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(T)}else if(V.isLight){if(I.pushLight(V),V.castShadow)I.pushShadow(V)}else if(V.isSprite){let L0=T.isArrayCamera?GJ:n0;if(!V.frustumCulled||V.intersectsFrustum(L0)){if(f)CJ.setFromMatrixPosition(V.matrixWorld).applyMatrix4(aJ);let X0=h.update(V),O0=V.material;if(O0.visible)B.push(V,X0,O0,g,CJ.z,null,T)}}else if(V.isMesh||V.isLine||V.isPoints){let L0=T.isArrayCamera?GJ:n0;if(!V.frustumCulled||V.intersectsFrustum(L0)){let X0=h.update(V),O0=V.material;if(f){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();CJ.copy(V.boundingSphere.center)}else{if(X0.boundingSphere===null)X0.computeBoundingSphere();CJ.copy(X0.boundingSphere.center)}CJ.applyMatrix4(V.matrixWorld).applyMatrix4(aJ)}if(Array.isArray(O0)){let z0=X0.groups;for(let f0=0,u0=z0.length;f0<u0;f0++){let M0=z0[f0],c0=O0[M0.materialIndex];if(c0&&c0.visible)B.push(V,X0,c0,g,CJ.z,M0,T)}}else if(O0.visible)B.push(V,X0,O0,g,CJ.z,null,T)}}}let U0=V.children;for(let L0=0,X0=U0.length;L0<X0;L0++)X$(U0[L0],T,g,f)}function dZ(V,T,g,f){let{opaque:b,transmissive:U0,transparent:L0}=V;if(I.setupLightsView(g),NJ===!0)m.setGlobalState(j.clippingPlanes,g);if(f)E0.viewport(r.copy(f));if(b.length>0)A6(b,T,g);if(U0.length>0)A6(U0,T,g);if(L0.length>0)A6(L0,T,g);E0.buffers.depth.setTest(!0),E0.buffers.depth.setMask(!0),E0.buffers.color.setMask(!0),E0.setPolygonOffset(!1)}function uZ(V,T,g,f){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[f.id]===void 0){let M0=r0.has("EXT_color_buffer_half_float")||r0.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[f.id]=new H9(1,1,{generateMipmaps:!0,type:M0?A9:B9,minFilter:D9,samples:Math.max(4,VJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:g0.workingColorSpace})}let U0=I.state.transmissionRenderTarget[f.id],L0=f.viewport||r;U0.setSize(L0.z*j.transmissionResolutionScale,L0.w*j.transmissionResolutionScale);let X0=j.getRenderTarget(),O0=j.getActiveCubeFace(),z0=j.getActiveMipmapLevel();if(j.setRenderTarget(U0),j.getClearColor(i),Q0=j.getClearAlpha(),Q0<1)j.setClearColor(16777215,0.5);if(j.clear(),dJ)H0.render(g);let f0=j.toneMapping;j.toneMapping=w9;let u0=f.viewport;if(f.viewport!==void 0)f.viewport=void 0;if(I.setupLightsView(f),NJ===!0)m.setGlobalState(j.clippingPlanes,f);if(A6(V,g,f),h0.updateMultisampleRenderTarget(U0),h0.updateRenderTargetMipmap(U0),r0.has("WEBGL_multisampled_render_to_texture")===!1){let M0=!1;for(let c0=0,FJ=T.length;c0<FJ;c0++){let ZJ=T[c0],{object:JJ,geometry:AJ,material:V0,group:bJ}=ZJ;if(V0.side===vJ&&JJ.layers.test(f.layers)){let i0=V0.side;V0.side=uJ,V0.needsUpdate=!0,cZ(JJ,g,f,AJ,V0,bJ),V0.side=i0,V0.needsUpdate=!0,M0=!0}}if(M0===!0)h0.updateMultisampleRenderTarget(U0),h0.updateRenderTargetMipmap(U0)}if(j.setRenderTarget(X0,O0,z0),j.setClearColor(i,Q0),u0!==void 0)f.viewport=u0;j.toneMapping=f0}function A6(V,T,g){let f=T.isScene===!0?T.overrideMaterial:null;for(let b=0,U0=V.length;b<U0;b++){let L0=V[b],{object:X0,geometry:O0,group:z0}=L0,f0=L0.material;if(f0.allowOverride===!0&&f!==null)f0=f;if(X0.layers.test(g.layers))cZ(X0,T,g,O0,f0,z0)}}function cZ(V,T,g,f,b,U0){if(y!==null&&b.isNodeMaterial)y.setObject(V,b);if(V.onBeforeRender(j,T,g,f,b,U0),V.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),b.onBeforeRender(j,T,g,f,V,U0),b.transparent===!0&&b.side===vJ&&b.forceSinglePass===!1)b.side=uJ,b.needsUpdate=!0,j.renderBufferDirect(g,T,f,b,V,U0),b.side=K8,b.needsUpdate=!0,j.renderBufferDirect(g,T,f,b,V,U0),b.side=vJ;else j.renderBufferDirect(g,T,f,b,V,U0);V.onAfterRender(j,T,g,f,b,U0)}function nZ(V){let T=0;for(let g of V)if(g.texture!==null)T++;return T}function T7(V,T,g){if(T.isScene!==!0)T=mJ;let f=S0.get(V),b=I.state.lights,U0=I.state.shadowsArray,L0=b.state.version,X0=e.getParameters(V,b.state,U0,T,g,I.state.lightProbeGridArray),O0=e.getProgramCacheKey(X0),z0=f.programs;f.environment=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?T.environment:null,f.fog=T.fog;let f0=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap;if(f.envMap=wJ.get(V.envMap||f.environment,f0),f.envMapRotation=f.environment!==null&&V.envMap===null?T.environmentRotation:V.envMapRotation,z0===void 0)V.addEventListener("dispose",F0),z0=new Map,f.programs=z0,f.programVariants=new Map;let u0=z0.get(O0);if(u0!==void 0){if(f.currentProgram===u0&&f.lightsStateVersion===L0)return iZ(V,X0),u0}else{if(X0.uniforms=e.getUniforms(V),y!==null&&V.isNodeMaterial)y.build(V,g,X0);V.onBeforeCompile(X0,j),u0=e.acquireProgram(X0,O0),z0.set(O0,u0),f.uniforms=X0.uniforms}let M0=f.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)M0.clippingPlanes=m.uniform;if(iZ(V,X0),f.needsLights=hY(V),f.lightsStateVersion=L0,f.needsLights)M0.ambientLightColor.value=b.state.ambient,M0.lightProbe.value=b.state.probe,M0.sunLights.value=b.state.sun,M0.sunLightShadows.value=b.state.sunShadow,M0.directionalLights.value=b.state.directional,M0.directionalLightShadows.value=b.state.directionalShadow,M0.spotLights.value=b.state.spot,M0.spotLightShadows.value=b.state.spotShadow,M0.rectAreaLights.value=b.state.rectArea,M0.ltc_1.value=b.state.rectAreaLTC1,M0.ltc_2.value=b.state.rectAreaLTC2,M0.pointLights.value=b.state.point,M0.pointLightShadows.value=b.state.pointShadow,M0.hemisphereLights.value=b.state.hemi,M0.sunShadowMatrix.value=b.state.sunShadowMatrix,M0.sunShadowCascade.value=b.state.sunShadowCascade,M0.directionalShadowMatrix.value=b.state.directionalShadowMatrix,M0.spotLightMatrix.value=b.state.spotLightMatrix,M0.spotLightMap.value=b.state.spotLightMap,M0.pointShadowMatrix.value=b.state.pointShadowMatrix;return f.numLightProbeGrids=nZ(I.state.lightProbeGridArray),f.currentProgram=u0,f.uniformsList=null,u0}function jY(V,T,g,f,b){let U0=S0.get(V),L0=U0.currentProgram.id+","+f+","+b,X0=U0.programVariants.get(L0);if(X0===void 0)X0=T7(V,T,g),U0.programVariants.set(L0,X0);else U0.currentProgram=X0,U0.uniformsList=null,U0.outputColorSpace=f,U0.toneMapping=b;return X0}function sZ(V){if(V.uniformsList===null){let T=V.currentProgram.getUniforms();V.uniformsList=V6.seqWithValue(T.seq,V.uniforms)}return V.uniformsList}function iZ(V,T){let g=S0.get(V);g.outputColorSpace=T.outputColorSpace,g.batching=T.batching,g.batchingColor=T.batchingColor,g.instancing=T.instancing,g.instancingColor=T.instancingColor,g.instancingMorph=T.instancingMorph,g.skinning=T.skinning,g.morphTargets=T.morphTargets,g.morphNormals=T.morphNormals,g.morphColors=T.morphColors,g.morphTargetsCount=T.morphTargetsCount,g.numClippingPlanes=T.numClippingPlanes,g.numIntersection=T.numClipIntersection,g.vertexAlphas=T.vertexAlphas,g.vertexTangents=T.vertexTangents,g.toneMapping=T.toneMapping}function vY(V,T,g,f,b){if(T.isScene!==!0)T=mJ;h0.resetTextureUnits();let U0=T.fog,L0=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?T.environment:null,X0=x===null?j.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:g0.workingColorSpace,O0=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,z0=wJ.get(f.envMap||L0,O0),f0=f.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,u0=!!g.attributes.tangent&&(!!f.normalMap||f.anisotropy>0),M0=!!g.morphAttributes.position,c0=!!g.morphAttributes.normal,FJ=!!g.morphAttributes.color,ZJ=w9;if(f.toneMapped){if(x===null||x.isXRRenderTarget===!0)ZJ=j.toneMapping}let JJ=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,AJ=JJ!==void 0?JJ.length:0,V0=S0.get(f),bJ=I.state.lights;if(NJ===!0){if(lJ===!0||V!==u){let HJ=V===u&&f.id===K0;m.setState(f,V,HJ)}}let i0=!1,V8=!1;if(f.version===V0.__version){if(V0.needsLights&&V0.lightsStateVersion!==bJ.state.version)i0=!0;else if(b.isBatchedMesh&&V0.batching===!1)i0=!0;else if(!b.isBatchedMesh&&V0.batching===!0)i0=!0;else if(b.isBatchedMesh&&V0.batchingColor===!0&&b._colorsTexture===null)i0=!0;else if(b.isBatchedMesh&&V0.batchingColor===!1&&b._colorsTexture!==null)i0=!0;else if(b.isInstancedMesh&&V0.instancing===!1)i0=!0;else if(!b.isInstancedMesh&&V0.instancing===!0)i0=!0;else if(b.isSkinnedMesh&&V0.skinning===!1)i0=!0;else if(!b.isSkinnedMesh&&V0.skinning===!0)i0=!0;else if(b.isInstancedMesh&&V0.instancingColor===!0&&b.instanceColor===null)i0=!0;else if(b.isInstancedMesh&&V0.instancingColor===!1&&b.instanceColor!==null)i0=!0;else if(b.isInstancedMesh&&V0.instancingMorph===!0&&b.morphTexture===null)i0=!0;else if(b.isInstancedMesh&&V0.instancingMorph===!1&&b.morphTexture!==null)i0=!0;else if(V0.envMap!==z0)i0=!0;else if(f.fog===!0&&V0.fog!==U0)i0=!0;else if(V0.numClippingPlanes!==void 0&&(V0.numClippingPlanes!==m.numPlanes||V0.numIntersection!==m.numIntersection))i0=!0;else if(V0.vertexAlphas!==f0)i0=!0;else if(V0.vertexTangents!==u0)i0=!0;else if(V0.morphTargets!==M0)i0=!0;else if(V0.morphNormals!==c0)i0=!0;else if(V0.morphColors!==FJ)i0=!0;else if(V0.morphTargetsCount!==AJ)i0=!0;else if(V0.numLightProbeGrids!==nZ(I.state.lightProbeGridArray))i0=!0;else if(V0.outputColorSpace!==X0||V0.toneMapping!==ZJ)V8=!0}else i0=!0,V0.__version=f.version;let TJ=V0.currentProgram;if(i0===!0||V8===!0){if(TJ=V8===!0?jY(f,T,b,X0,ZJ):T7(f,T,b),y&&f.isNodeMaterial)y.onUpdateProgram(f,TJ,V0)}let T6=!1,r9=!1,D8=!1,s0=TJ.getUniforms(),PJ=V0.uniforms;if(E0.useProgram(TJ.program))T6=!0,r9=!0,D8=!0;if(f.id!==K0)K0=f.id,r9=!0;if(T6||u!==V){if(E0.buffers.depth.getReversed()&&V.reversedDepth!==!0)V._reversedDepth=!0,V.updateProjectionMatrix();s0.setValue(v,"projectionMatrix",V.projectionMatrix),s0.setValue(v,"viewMatrix",V.matrixWorldInverse);let BJ=s0.map.cameraPosition;if(BJ!==void 0)BJ.setValue(v,qJ.setFromMatrixPosition(V.matrixWorld));if(VJ.logarithmicDepthBuffer)s0.setValue(v,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(f.isMeshPhongMaterial||f.isMeshToonMaterial||f.isMeshLambertMaterial||f.isMeshBasicMaterial||f.isMeshStandardMaterial||f.isShaderMaterial)s0.setValue(v,"isOrthographic",V.isOrthographicCamera===!0);if(u!==V)u=V,r9=!0,D8=!0}if(V0.needsLights){if(bJ.state.sunShadowMap.length>0)s0.setValue(v,"sunShadowMap",bJ.state.sunShadowMap,h0);if(bJ.state.directionalShadowMap.length>0)s0.setValue(v,"directionalShadowMap",bJ.state.directionalShadowMap,h0);if(bJ.state.spotShadowMap.length>0)s0.setValue(v,"spotShadowMap",bJ.state.spotShadowMap,h0);if(bJ.state.pointShadowMap.length>0)s0.setValue(v,"pointShadowMap",bJ.state.pointShadowMap,h0)}if(b.isSkinnedMesh){s0.setOptional(v,b,"bindMatrix"),s0.setOptional(v,b,"bindMatrixInverse");let HJ=b.skeleton;if(HJ){if(HJ.boneTexture===null)HJ.computeBoneTexture();s0.setValue(v,"boneTexture",HJ.boneTexture,h0)}}if(b.isBatchedMesh){if(s0.setOptional(v,b,"batchingTexture"),s0.setValue(v,"batchingTexture",b._matricesTexture,h0),s0.setOptional(v,b,"batchingIdTexture"),s0.setValue(v,"batchingIdTexture",b._indirectTexture,h0),s0.setOptional(v,b,"batchingColorTexture"),b._colorsTexture!==null)s0.setValue(v,"batchingColorTexture",b._colorsTexture,h0)}let O9=g.morphAttributes;if(O9.position!==void 0||O9.normal!==void 0||O9.color!==void 0)w.update(b,g,TJ);if(r9||V0.receiveShadow!==b.receiveShadow)V0.receiveShadow=b.receiveShadow,s0.setValue(v,"receiveShadow",b.receiveShadow);if((f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial)&&f.envMap===null&&T.environment!==null)PJ.envMapIntensity.value=T.environmentIntensity;if(PJ.dfgLUT!==void 0)PJ.dfgLUT.value=sq();if(r9){if(s0.setValue(v,"toneMappingExposure",j.toneMappingExposure),V0.needsLights)yY(PJ,D8);if(U0&&f.fog===!0)a.refreshFogUniforms(PJ,U0);if(a.refreshMaterialUniforms(PJ,f,T0,w0,I.state.transmissionRenderTarget[V.id]),V0.needsLights&&V0.numLightProbeGrids>0){let HJ=_,BJ=0;for(let h9 of I.state.lightProbeGridArray){if(h9.texture===null)continue;HJ.textures[BJ]=h9.texture,HJ.min[BJ]=h9.boundingBox.min,HJ.max[BJ]=h9.boundingBox.max,HJ.resolution[BJ]=h9.resolution,BJ++}for(let h9 in HJ)HJ[h9].length=BJ;PJ.probesSH.value=HJ.textures,PJ.probesMin.value=HJ.min,PJ.probesMax.value=HJ.max,PJ.probesResolution.value=HJ.resolution}V6.upload(v,sZ(V0),PJ,h0)}if(f.isShaderMaterial&&f.uniformsNeedUpdate===!0)V6.upload(v,sZ(V0),PJ,h0),f.uniformsNeedUpdate=!1;if(f.isSpriteMaterial)s0.setValue(v,"center",b.center);if(s0.setValue(v,"modelViewMatrix",b.modelViewMatrix),s0.setValue(v,"normalMatrix",b.normalMatrix),s0.setValue(v,"modelMatrix",b.matrixWorld),f.uniformsGroups!==void 0){let HJ=f.uniformsGroups;for(let BJ=0,h9=HJ.length;BJ<h9;BJ++){let aZ=HJ[BJ];G0.update(aZ,TJ),G0.bind(aZ,TJ)}}return TJ}function yY(V,T){V.ambientLightColor.needsUpdate=T,V.lightProbe.needsUpdate=T,V.sunLights.needsUpdate=T,V.sunLightShadows.needsUpdate=T,V.directionalLights.needsUpdate=T,V.directionalLightShadows.needsUpdate=T,V.pointLights.needsUpdate=T,V.pointLightShadows.needsUpdate=T,V.spotLights.needsUpdate=T,V.spotLightShadows.needsUpdate=T,V.rectAreaLights.needsUpdate=T,V.hemisphereLights.needsUpdate=T}function hY(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return s},this.getActiveMipmapLevel=function(){return o},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(V,T,g){let f=S0.get(V);if(f.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,f.__autoAllocateDepthBuffer===!1)f.__useRenderToTexture=!1;S0.get(V.texture).__webglTexture=T,S0.get(V.depthTexture).__webglTexture=f.__autoAllocateDepthBuffer?void 0:g,f.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,T){let g=S0.get(V);g.__webglFramebuffer=T,g.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(V,T=0,g=0){x=V,s=T,o=g;let f=null,b=!1,U0=!1;if(V){let X0=S0.get(V);if(X0.__useDefaultFramebuffer!==void 0){E0.bindFramebuffer(v.FRAMEBUFFER,X0.__webglFramebuffer),r.copy(V.viewport),$0.copy(V.scissor),k0=V.scissorTest,E0.viewport(r),E0.scissor($0),E0.setScissorTest(k0),K0=-1;return}else if(X0.__webglFramebuffer===void 0)h0.setupRenderTarget(V);else if(X0.__hasExternalTextures)h0.rebindTextures(V,S0.get(V.texture).__webglTexture,S0.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let f0=V.depthTexture;if(X0.__boundDepthTexture!==f0){if(f0!==null&&S0.has(f0)&&(V.width!==f0.image.width||V.height!==f0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");h0.setupDepthRenderbuffer(V)}}let O0=V.texture;if(O0.isData3DTexture||O0.isDataArrayTexture||O0.isCompressedArrayTexture)U0=!0;let z0=S0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(z0[T]))f=z0[T][g];else f=z0[T];b=!0}else if(V.samples>0&&h0.useMultisampledRTT(V)===!1)f=S0.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(z0))f=z0[g];else f=z0;r.copy(V.viewport),$0.copy(V.scissor),k0=V.scissorTest}else r.copy(d0).multiplyScalar(T0).floor(),$0.copy(b0).multiplyScalar(T0).floor(),k0=KJ;if(g!==0)f=p;if(E0.bindFramebuffer(v.FRAMEBUFFER,f))E0.drawBuffers(V,f);if(E0.viewport(r),E0.scissor($0),E0.setScissorTest(k0),b){let X0=S0.get(V.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+T,X0.__webglTexture,g)}else if(U0){let X0=T;for(let O0=0;O0<V.textures.length;O0++){let z0=S0.get(V.textures[O0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+O0,z0.__webglTexture,g,X0)}}else if(V!==null&&g!==0){let X0=S0.get(V.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,X0.__webglTexture,g)}K0=-1};function oZ(V){let T=S0.get(V);if(T.__readFormat!==V.format||T.__readType!==V.type)T.__readFormat=V.format,T.__readType=V.type,T.__formatReadable=VJ.textureFormatReadable(V.format),T.__typeReadable=VJ.textureTypeReadable(V.type);return T}if(this.readRenderTargetPixels=function(V,T,g,f,b,U0,L0,X0=0){if(!(V&&V.isWebGLRenderTarget)){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O0=S0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&L0!==void 0){if(O0=O0[L0],Array.isArray(O0))O0=O0[0]}if(O0){E0.bindFramebuffer(v.FRAMEBUFFER,O0);try{let z0=V.textures[X0],f0=z0.format,u0=z0.type;if(V.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+X0);let M0=oZ(z0);if(M0.__formatReadable===!1){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(M0.__typeReadable===!1){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(T>=0&&T<=V.width-f&&(g>=0&&g<=V.height-b))v.readPixels(T,g,f,b,J0.convert(f0),J0.convert(u0),U0)}finally{let z0=x!==null?S0.get(x).__webglFramebuffer:null;E0.bindFramebuffer(v.FRAMEBUFFER,z0)}}},this.readRenderTargetPixelsAsync=async function(V,T,g,f,b,U0,L0,X0=0){if(!(V&&V.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O0=S0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&L0!==void 0){if(O0=O0[L0],Array.isArray(O0))O0=O0[0]}if(O0)if(T>=0&&T<=V.width-f&&(g>=0&&g<=V.height-b)){E0.bindFramebuffer(v.FRAMEBUFFER,O0);let z0=V.textures[X0],f0=z0.format,u0=z0.type;if(V.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+X0);let M0=oZ(z0);if(M0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(M0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let c0=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,c0),v.bufferData(v.PIXEL_PACK_BUFFER,U0.byteLength,v.STREAM_READ),v.readPixels(T,g,f,b,J0.convert(f0),J0.convert(u0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let FJ=x!==null?S0.get(x).__webglFramebuffer:null;E0.bindFramebuffer(v.FRAMEBUFFER,FJ);let ZJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await lH(v,ZJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,c0),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,U0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(c0),v.deleteSync(ZJ),U0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,T=null,g=0){let f=Math.pow(2,-g),b=Math.floor(V.image.width*f),U0=Math.floor(V.image.height*f),L0=T!==null?T.x:0,X0=T!==null?T.y:0;h0.setTexture2D(V,0),v.copyTexSubImage2D(v.TEXTURE_2D,g,0,0,L0,X0,b,U0),E0.unbindTexture()},this.copyTextureToTexture=function(V,T,g=null,f=null,b=0,U0=0){let L0,X0,O0,z0,f0,u0,M0,c0,FJ,ZJ=V.isCompressedTexture?V.mipmaps[U0]:V.image;if(g!==null)L0=g.max.x-g.min.x,X0=g.max.y-g.min.y,O0=g.isBox3?g.max.z-g.min.z:1,z0=g.min.x,f0=g.min.y,u0=g.isBox3?g.min.z:0;else{let s0=Math.pow(2,-b);if(L0=Math.floor(ZJ.width*s0),X0=Math.floor(ZJ.height*s0),V.isDataArrayTexture)O0=ZJ.depth;else if(V.isData3DTexture)O0=Math.floor(ZJ.depth*s0);else O0=1;z0=0,f0=0,u0=0}if(f!==null)M0=f.x,c0=f.y,FJ=f.z;else M0=0,c0=0,FJ=0;let JJ=J0.convert(T.format),AJ=J0.convert(T.type),V0;if(T.isData3DTexture)h0.setTexture3D(T,0),V0=v.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)h0.setTexture2DArray(T,0),V0=v.TEXTURE_2D_ARRAY;else h0.setTexture2D(T,0),V0=v.TEXTURE_2D;E0.activeTexture(v.TEXTURE0),E0.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,T.flipY),E0.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),E0.pixelStorei(v.UNPACK_ALIGNMENT,T.unpackAlignment);let bJ=E0.getParameter(v.UNPACK_ROW_LENGTH),i0=E0.getParameter(v.UNPACK_IMAGE_HEIGHT),V8=E0.getParameter(v.UNPACK_SKIP_PIXELS),TJ=E0.getParameter(v.UNPACK_SKIP_ROWS),T6=E0.getParameter(v.UNPACK_SKIP_IMAGES);E0.pixelStorei(v.UNPACK_ROW_LENGTH,ZJ.width),E0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ZJ.height),E0.pixelStorei(v.UNPACK_SKIP_PIXELS,z0),E0.pixelStorei(v.UNPACK_SKIP_ROWS,f0),E0.pixelStorei(v.UNPACK_SKIP_IMAGES,u0);let r9=V.isDataArrayTexture||V.isData3DTexture,D8=T.isDataArrayTexture||T.isData3DTexture;if(V.isDepthTexture){let s0=S0.get(V),PJ=S0.get(T),O9=S0.get(s0.__renderTarget),HJ=S0.get(PJ.__renderTarget);E0.bindFramebuffer(v.READ_FRAMEBUFFER,O9.__webglFramebuffer),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,HJ.__webglFramebuffer);for(let BJ=0;BJ<O0;BJ++){if(r9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,S0.get(V).__webglTexture,b,u0+BJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,S0.get(T).__webglTexture,U0,FJ+BJ);v.blitFramebuffer(z0,f0,z0+L0,f0+X0,M0,c0,M0+L0,c0+X0,v.DEPTH_BUFFER_BIT,v.NEAREST)}E0.bindFramebuffer(v.READ_FRAMEBUFFER,null),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(b!==0||V.isRenderTargetTexture||S0.has(V)){let s0=S0.get(V),PJ=S0.get(T);E0.bindFramebuffer(v.READ_FRAMEBUFFER,t),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,A);for(let O9=0;O9<O0;O9++){if(r9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,s0.__webglTexture,b,u0+O9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,s0.__webglTexture,b);if(D8)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,PJ.__webglTexture,U0,FJ+O9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,PJ.__webglTexture,U0);if(b!==0)v.blitFramebuffer(z0,f0,z0+L0,f0+X0,M0,c0,M0+L0,c0+X0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(D8)v.copyTexSubImage3D(V0,U0,M0,c0,FJ+O9,z0,f0,L0,X0);else v.copyTexSubImage2D(V0,U0,M0,c0,z0,f0,L0,X0)}E0.bindFramebuffer(v.READ_FRAMEBUFFER,null),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(D8)if(V.isDataTexture||V.isData3DTexture)v.texSubImage3D(V0,U0,M0,c0,FJ,L0,X0,O0,JJ,AJ,ZJ.data);else if(T.isCompressedArrayTexture)v.compressedTexSubImage3D(V0,U0,M0,c0,FJ,L0,X0,O0,JJ,ZJ.data);else v.texSubImage3D(V0,U0,M0,c0,FJ,L0,X0,O0,JJ,AJ,ZJ);else if(V.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,U0,M0,c0,L0,X0,JJ,AJ,ZJ.data);else if(V.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,U0,M0,c0,ZJ.width,ZJ.height,JJ,ZJ.data);else v.texSubImage2D(v.TEXTURE_2D,U0,M0,c0,L0,X0,JJ,AJ,ZJ);if(E0.pixelStorei(v.UNPACK_ROW_LENGTH,bJ),E0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,i0),E0.pixelStorei(v.UNPACK_SKIP_PIXELS,V8),E0.pixelStorei(v.UNPACK_SKIP_ROWS,TJ),E0.pixelStorei(v.UNPACK_SKIP_IMAGES,T6),U0===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0)v.generateMipmap(V0);E0.unbindTexture()},this.initRenderTarget=function(V){if(S0.get(V).__webglFramebuffer===void 0)h0.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)h0.setTextureCube(V,0);else if(V.isData3DTexture)h0.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)h0.setTexture2DArray(V,0);else h0.setTexture2D(V,0);E0.unbindTexture()},this.resetState=function(){s=0,o=0,x=null,E0.reset(),W0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lW}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=g0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=g0._getUnpackColorSpace()}}function BZ(J,Q){if(Q===yW)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===L7||Q===$6){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let X=0;X<H.count;X++)K.push(X);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let W=$.count-2,Z=[];if(Q===L7)for(let K=1;K<=W;K++)Z.push($.getX(0)),Z.push($.getX(K)),Z.push($.getX(K+1));else for(let K=0;K<W;K++)if(K%2===0)Z.push($.getX(K)),Z.push($.getX(K+1)),Z.push($.getX(K+2));else Z.push($.getX(K+2)),Z.push($.getX(K+1)),Z.push($.getX(K));if(Z.length/3!==W)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(Z),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function uX(J){let Q=new Map,$=new Map,W=J.clone();return cX(J,W,function(Z,K){Q.set(K,Z),$.set(Z,K)}),W.traverse(function(Z){if(!Z.isSkinnedMesh)return;let K=Z,H=Q.get(Z),X=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=X.map(function(Y){return $.get(Y)}),K.bind(K.skeleton,K.bindMatrix)}),W}function cX(J,Q,$){$(J,Q);for(let W=0;W<J.children.length;W++)cX(J.children[W],Q.children[W],$)}class wZ extends z9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new eX(Q)}),this.register(function(Q){return new JY(Q)}),this.register(function(Q){return new QY(Q)}),this.register(function(Q){return new GY(Q)}),this.register(function(Q){return new EY(Q)}),this.register(function(Q){return new NY(Q)}),this.register(function(Q){return new WY(Q)}),this.register(function(Q){return new ZY(Q)}),this.register(function(Q){return new KY(Q)}),this.register(function(Q){return new HY(Q)}),this.register(function(Q){return new tX(Q)}),this.register(function(Q){return new XY(Q)}),this.register(function(Q){return new $Y(Q)}),this.register(function(Q){return new UY(Q)}),this.register(function(Q){return new YY(Q)}),this.register(function(Q){return new aX(Q)}),this.register(function(Q){return new PZ(Q,m0.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new PZ(Q,m0.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new qY(Q)})}load(J,Q,$,W){let Z=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let Y=G9.extractUrlBase(J);K=G9.resolveURL(Y,this.path)}else K=G9.extractUrlBase(J);this.manager.itemStart(J);let H=function(Y){if(W)W(Y);else console.error(Y);Z.manager.itemError(J),Z.manager.itemEnd(J)},X=new F8(this.manager);X.setPriority(this.priority),X.setCache(this.cache),X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(Y){try{Z.parse(Y,K,function(U){Q(U),Z.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,W){let Z,K={},H={},X=new TextDecoder;if(typeof J==="string")Z=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===FY){try{K[m0.KHR_BINARY_GLTF]=new OY(J)}catch(G){if(W)W(G);return}Z=JSON.parse(K[m0.KHR_BINARY_GLTF].content)}else Z=JSON.parse(X.decode(J));else Z=J;if(Z.asset===void 0||Z.asset.version[0]<2){if(W)W(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let Y=new DY(Z,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});Y.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](Y);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[G.name]=G,K[G.name]=!0}if(Z.extensionsUsed)for(let U=0;U<Z.extensionsUsed.length;++U){let G=Z.extensionsUsed[U],N=Z.extensionsRequired||[];switch(G){case m0.KHR_MATERIALS_UNLIT:K[G]=new rX;break;case m0.KHR_DRACO_MESH_COMPRESSION:K[G]=new RY(Z,this.dracoLoader);break;case m0.KHR_TEXTURE_TRANSFORM:K[G]=new LY;break;case m0.KHR_MESH_QUANTIZATION:K[G]=new MY;break;default:if(N.indexOf(G)>=0&&H[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}Y.setExtensions(K),Y.setPlugins(H),Y.parse($,W)}parseAsync(J,Q){let $=this;return new Promise(function(W,Z){$.parse(J,Q,W,Z)})}}function oq(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function YJ(J,Q,$){let W=J.json.materials[Q];if(W.extensions&&W.extensions[$])return W.extensions[$];return null}var m0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class aX{constructor(J){this.parser=J,this.name=m0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(Z.extensions&&Z.extensions[this.name]&&Z.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,Z.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,W=Q.cache.get($);if(W)return W;let Z=Q.json,X=((Z.extensions&&Z.extensions[this.name]||{}).lights||[])[J],Y,U=new A0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],gJ);let G=X.range!==void 0?X.range:0;switch(X.type){case"directional":Y=new P7(U),Y.target.position.set(0,0,-1),Y.add(Y.target);break;case"point":Y=new b8(U),Y.distance=G;break;case"spot":Y=new nQ(U),Y.distance=G,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,Y.angle=X.spot.outerConeAngle,Y.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,Y.target.position.set(0,0,-1),Y.add(Y.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(Y.position.set(0,0,0),j9(Y,X),X.intensity!==void 0)Y.intensity=X.intensity;return Y.name=Q.createUniqueName(X.name||"light_"+J),W=Promise.resolve(Y),Q.cache.add($,W),W}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,Z=$.json.nodes[J],H=(Z.extensions&&Z.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(X){return $._getNodeRef(Q.cache,H,X)})}}class rX{constructor(){this.name=m0.KHR_MATERIALS_UNLIT}getMaterialType(){return X9}extendParams(J,Q,$){let W=[];J.color=new A0(1,1,1),J.opacity=1;let Z=Q.pbrMetallicRoughness;if(Z){if(Array.isArray(Z.baseColorFactor)){let K=Z.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],gJ),J.opacity=K[3]}if(Z.baseColorTexture!==void 0)W.push($.assignTexture(J,"map",Z.baseColorTexture,cJ))}return Promise.all(W)}}class tX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class eX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(W.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let Z=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new R0(Z,Z)}}return Promise.all(W)}}class JY{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.diffuseRoughness=$.diffuseRoughnessFactor!==void 0?$.diffuseRoughnessFactor:0,$.diffuseRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"diffuseRoughnessMap",$.diffuseRoughnessTexture));return Promise.all(W)}}class QY{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_DISPERSION}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class $Y{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessMinimum=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessMaximum=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(W)}}class WY{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_SHEEN}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.sheenColor=new A0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let Z=$.sheenColorFactor;Q.sheenColor.setRGB(Z[0],Z[1],Z[2],gJ)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,cJ));if($.sheenRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(W)}}class ZY{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)W.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(W)}}class KY{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_VOLUME}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let Z=$.attenuationColor||[1,1,1];return Q.attenuationColor=new A0().setRGB(Z[0],Z[1],Z[2],gJ),Promise.all(W)}}class HY{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_IOR}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class XY{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_SPECULAR}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let Z=$.specularColorFactor||[1,1,1];if(Q.specularColor=new A0().setRGB(Z[0],Z[1],Z[2],gJ),$.specularColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,cJ));return Promise.all(W)}}class YY{constructor(J){this.parser=J,this.name=m0.EXT_MATERIALS_BUMP}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)W.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(W)}}class UY{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return YJ(this.parser,J,this.name)!==null?iJ:null}extendMaterialParams(J,Q){let $=YJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)W.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(W)}}class GY{constructor(J){this.parser=J,this.name=m0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,W=$.textures[J];if(!W.extensions||!W.extensions[this.name])return null;let Z=W.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,Z.source,K)}}class EY{constructor(J){this.parser=J,this.name=m0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],X=$.textureLoader;if(H.uri){let Y=$.options.manager.getHandler(H.uri);if(Y!==null)X=Y}return $.loadTextureImage(J,K.source,X)}}class NY{constructor(J){this.parser=J,this.name=m0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],X=$.textureLoader;if(H.uri){let Y=$.options.manager.getHandler(H.uri);if(Y!==null)X=Y}return $.loadTextureImage(J,K.source,X)}}class PZ{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let W=$.extensions[this.name],Z=this.parser.getDependency("buffer",W.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Z.then(function(H){let X=W.byteOffset||0,Y=W.byteLength||0,U=W.count,G=W.byteStride,N=new Uint8Array(H,X,Y);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,G,N,W.mode,W.filter).then(function(E){return E.buffer});else return K.ready.then(function(){let E=new ArrayBuffer(U*G);return K.decodeGltfBuffer(new Uint8Array(E),U,G,N,W.mode,W.filter),E})})}else return null}}class qY{constructor(J){this.name=m0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let W=Q.meshes[$.mesh];for(let Y of W.primitives)if(Y.mode!==E9.TRIANGLES&&Y.mode!==E9.TRIANGLE_STRIP&&Y.mode!==E9.TRIANGLE_FAN&&Y.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],X={};for(let Y in K)H.push(this.parser.getDependency("accessor",K[Y]).then((U)=>{return X[Y]=U,X[Y]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((Y)=>{let U=Y.pop(),G=U.isGroup?U.children:[U],N=Y[0].count,E=[];for(let q of G){let R=new v0,D=new S,F=new K9,O=new S(1,1,1),k=new AQ(q.geometry,q.material,N);for(let B=0;B<N;B++){if(X.TRANSLATION)D.fromBufferAttribute(X.TRANSLATION,B);if(X.ROTATION)F.fromBufferAttribute(X.ROTATION,B);if(X.SCALE)O.fromBufferAttribute(X.SCALE,B);k.setMatrixAt(B,R.compose(D,F,O))}let _=null;for(let B in X)if(B==="_COLOR_0"){let I=X[B];k.instanceColor=new Z8(I.array,I.itemSize,I.normalized)}else if(B!=="TRANSLATION"&&B!=="ROTATION"&&B!=="SCALE"){if(_===null){let C=k.geometry;_=new RJ,_.name=C.name;for(let L in C.attributes)_.setAttribute(L,C.attributes[L]);for(let L in C.morphAttributes)_.morphAttributes[L]=C.morphAttributes[L];if(C.index!==null)_.setIndex(C.index);_.morphTargetsRelative=C.morphTargetsRelative;for(let L of C.groups)_.addGroup(L.start,L.count,L.materialIndex);if(C.boundingBox!==null)_.boundingBox=C.boundingBox.clone();if(C.boundingSphere!==null)_.boundingSphere=C.boundingSphere.clone();_.drawRange.start=C.drawRange.start,_.drawRange.count=C.drawRange.count,_.userData=Object.assign({},C.userData),k.geometry=_}let I=X[B];_.setAttribute(B,new Z8(I.array,I.itemSize,I.normalized))}QJ.prototype.copy.call(k,q),this.parser.assignFinalMaterial(k),E.push(k)}if(U.isGroup)return U.clear(),U.add(...E),U;return E[0]})}}var FY="glTF",B6=12,nX={JSON:1313821514,BIN:5130562};class OY{constructor(J){this.name=m0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,B6),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==FY)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let W=this.header.length-B6,Z=new DataView(J,B6),K=0;while(K<W){let H=Z.getUint32(K,!0);K+=4;let X=Z.getUint32(K,!0);if(K+=4,X===nX.JSON){let Y=new Uint8Array(J,B6+K,H);this.content=$.decode(Y)}else if(X===nX.BIN){let Y=B6+K;this.body=J.slice(Y,Y+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class RY{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=m0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,W=this.dracoLoader,Z=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},X={},Y={};for(let U in K){let G=IZ[U]||U.toLowerCase();H[G]=K[U]}for(let U in J.attributes){let G=IZ[U]||U.toLowerCase();if(K[U]!==void 0){let N=$.accessors[J.attributes[U]],E=C7[N.componentType];Y[G]=E.name,X[G]=N.normalized===!0}}return Q.getDependency("bufferView",Z).then(function(U){return new Promise(function(G,N){W.decodeDracoFile(U,function(E){for(let q in E.attributes){let R=E.attributes[q],D=X[q];if(D!==void 0)R.normalized=D}G(E)},H,Y,gJ,N)})})}}class LY{constructor(){this.name=m0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),W=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*W,J.offset.x,-J.repeat.x*W,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class MY{constructor(){this.name=m0.KHR_MESH_QUANTIZATION}}class AZ extends s9{constructor(J,Q,$,W){super(J,Q,$,W)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W*3+W;for(let K=0;K!==W;K++)Q[K]=$[Z+K];return Q}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,X=H*2,Y=H*3,U=W-Q,G=($-Q)/U,N=G*G,E=N*G,q=J*Y,R=q-Y,D=-2*E+3*N,F=E-N,O=1-D,k=F-N+G;for(let _=0;_!==H;_++){let B=K[R+_+H],I=K[R+_+X]*U,C=K[q+_+H],L=K[q+_]*U;Z[_]=O*B+k*I+D*C+F*L}return Z}}var aq=new K9;class VY extends AZ{interpolate_(J,Q,$,W){let Z=super.interpolate_(J,Q,$,W);return aq.fromArray(Z).normalize().toArray(Z),Z}}var E9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},C7={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sX={9728:V9,9729:yJ,9984:qQ,9985:O7,9986:T8,9987:D9},iX={33071:F7,33648:NQ,10497:q7},kZ={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},IZ={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},O8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rq={CUBICSPLINE:void 0,LINEAR:DQ,STEP:vW},zZ={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tq(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new k7({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:K8});return J.DefaultMaterial}function x8(J,Q,$){for(let W in $.extensions)if(J[W]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[W]=$.extensions[W]}function j9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function eq(J,Q,$){let W=!1,Z=!1,K=!1;for(let U=0,G=Q.length;U<G;U++){let N=Q[U];if(N.POSITION!==void 0)W=!0;if(N.NORMAL!==void 0)Z=!0;if(N.COLOR_0!==void 0)K=!0;if(W&&Z&&K)break}if(!W&&!Z&&!K)return Promise.resolve(J);let H=[],X=[],Y=[];for(let U=0,G=Q.length;U<G;U++){let N=Q[U];if(W){let E=N.POSITION!==void 0?$.getDependency("accessor",N.POSITION):J.attributes.position;H.push(E)}if(Z){let E=N.NORMAL!==void 0?$.getDependency("accessor",N.NORMAL):J.attributes.normal;X.push(E)}if(K){let E=N.COLOR_0!==void 0?$.getDependency("accessor",N.COLOR_0):J.attributes.color;Y.push(E)}}return Promise.all([Promise.all(H),Promise.all(X),Promise.all(Y)]).then(function(U){let G=U[0],N=U[1],E=U[2];if(W)J.morphAttributes.position=G;if(Z)J.morphAttributes.normal=N;if(K)J.morphAttributes.color=E;return J.morphTargetsRelative=!0,J})}function JF(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,W=Q.weights.length;$<W;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let W=0,Z=$.length;W<Z;W++)J.morphTargetDictionary[$[W]]=W}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function QF(J){let Q,$=J.extensions&&J.extensions[m0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+_Z($.attributes);else Q=J.indices+":"+_Z(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let W=0,Z=J.targets.length;W<Z;W++)Q+=":"+_Z(J.targets[W]);return Q}function _Z(J){let Q="",$=Object.keys(J).sort();for(let W=0,Z=$.length;W<Z;W++)Q+=$[W]+":"+J[$[W]]+";";return Q}function CZ(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $F(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var WF=new v0;class DY{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new oq,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,W=-1,Z=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let X=H.match(/Version\/(\d+)/);W=$&&X?parseInt(X[1],10):-1,Z=H.indexOf("Firefox")>-1,K=Z?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&W<17||Z&&K<98)this.textureLoader=new dQ(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);else this.textureLoader=new sQ(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new F8(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),this.options.withCredentials||this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,W=this.json,Z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][W.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:W.asset,parser:$,userData:{}};return x8(Z,H,W),j9(H,W),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(H)})).then(function(){for(let X of H.scenes)X.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W].joints;for(let H=0,X=K.length;H<X;H++)J[K[H]].isBone=!0}for(let W=0,Z=J.length;W<Z;W++){let K=J[W];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let W=$.clone(),Z=(K,H)=>{let X=this.associations.get(K);if(X!=null)this.associations.set(H,X);for(let[Y,U]of K.children.entries())Z(U,H.children[Y])};return Z($,W),W.name+="_instance_"+J.uses[Q]++,W}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)return W}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let W=0;W<Q.length;W++){let Z=J(Q[W]);if(Z)$.push(Z)}return $}getDependency(J,Q){let $=J+":"+Q,W=this.cache.get($);if(!W){switch(J){case"scene":W=this.loadScene(Q);break;case"node":W=this._invokeOne(function(Z){return Z.loadNode&&Z.loadNode(Q)});break;case"mesh":W=this._invokeOne(function(Z){return Z.loadMesh&&Z.loadMesh(Q)});break;case"accessor":W=this.loadAccessor(Q);break;case"bufferView":W=this._invokeOne(function(Z){return Z.loadBufferView&&Z.loadBufferView(Q)});break;case"buffer":W=this.loadBuffer(Q);break;case"material":W=this._invokeOne(function(Z){return Z.loadMaterial&&Z.loadMaterial(Q)});break;case"texture":W=this._invokeOne(function(Z){return Z.loadTexture&&Z.loadTexture(Q)});break;case"skin":W=this.loadSkin(Q);break;case"animation":W=this._invokeOne(function(Z){return Z.loadAnimation&&Z.loadAnimation(Q)});break;case"camera":W=this.loadCamera(Q);break;default:if(W=this._invokeOne(function(Z){return Z!=this&&Z.getDependency&&Z.getDependency(J,Q)}),!W)throw Error("Unknown type: "+J);break}this.cache.add($,W)}return W}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,W=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(W.map(function(Z,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[m0.KHR_BINARY_GLTF].body);let W=this.options;return new Promise(function(Z,K){$.load(G9.resolveURL(Q.uri,W.path),Z,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let W=Q.byteLength||0,Z=Q.byteOffset||0;return $.slice(Z,Z+W)})}loadAccessor(J){let Q=this,$=this.json,W=this.json.accessors[J];if(W.bufferView===void 0&&W.sparse===void 0){let K=kZ[W.type],H=C7[W.componentType],X=W.normalized===!0,Y=new H(W.count*K);return Promise.resolve(new UJ(Y,K,X))}let Z=[];if(W.bufferView!==void 0)Z.push(this.getDependency("bufferView",W.bufferView));else Z.push(null);if(W.sparse!==void 0)Z.push(this.getDependency("bufferView",W.sparse.indices.bufferView)),Z.push(this.getDependency("bufferView",W.sparse.values.bufferView));return Promise.all(Z).then(function(K){let H=K[0],X=kZ[W.type],Y=C7[W.componentType],U=Y.BYTES_PER_ELEMENT,G=U*X,N=W.byteOffset||0,E=W.bufferView!==void 0?$.bufferViews[W.bufferView].byteStride:void 0,q=W.normalized===!0,R,D;if(E&&E!==G){let F=Math.floor(N/E),O="InterleavedBuffer:"+W.bufferView+":"+W.componentType+":"+F+":"+W.count,k=Q.cache.get(O);if(!k)R=new Y(H,F*E,W.count*E/U),k=new Y8(R,E/U),Q.cache.add(O,k);D=new C9(k,X,N%E/U,q)}else{if(H===null)R=new Y(W.count*X);else R=new Y(H,N,W.count*X);D=new UJ(R,X,q)}if(W.sparse!==void 0){let F=kZ.SCALAR,O=C7[W.sparse.indices.componentType],k=W.sparse.indices.byteOffset||0,_=W.sparse.values.byteOffset||0,B=new O(K[1],k,W.sparse.count*F),I=new Y(K[2],_,W.sparse.count*X);if(H!==null)D=new UJ(D.array.slice(),D.itemSize,D.normalized);D.normalized=!1;for(let C=0,L=B.length;C<L;C++){let z=B[C];if(D.setX(z,I[C*X]),X>=2)D.setY(z,I[C*X+1]);if(X>=3)D.setZ(z,I[C*X+2]);if(X>=4)D.setW(z,I[C*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}D.normalized=q}return D})}loadTexture(J){let Q=this.json,$=this.options,Z=Q.textures[J].source,K=Q.images[Z],H=this.textureLoader;if(K.uri){let X=$.manager.getHandler(K.uri);if(X!==null)H=X}return this.loadTextureImage(J,Z,H)}loadTextureImage(J,Q,$){let W=this,Z=this.json,K=Z.textures[J],H=Z.images[Q],X=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[X])return this.textureCache[X];let Y=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let N=(Z.samplers||{})[K.sampler]||{};return U.magFilter=sX[N.magFilter]||yJ,U.minFilter=sX[N.minFilter]||D9,U.wrapS=iX[N.wrapS]||q7,U.wrapT=iX[N.wrapT]||q7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==V9&&U.minFilter!==yJ,W.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=Y,Y}loadImageSource(J,Q){let $=this,W=this.json,Z=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let K=W.images[J],H=self.URL||self.webkitURL,X=K.uri||"",Y=!1,U;if(Q.isKTX2Loader===!0&&K.bufferView!==void 0)U=$.getDependency("bufferView",K.bufferView).then(function(N){return new Promise(function(E,q){Q.parse(N,E,q)})});else{if(K.bufferView!==void 0)X=$.getDependency("bufferView",K.bufferView).then(function(N){Y=!0;let E=new Blob([N],{type:K.mimeType});return X=H.createObjectURL(E),X});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");U=Promise.resolve(X).then(function(N){return new Promise(function(E,q){let R=E;if(Q.isImageBitmapLoader===!0)R=function(D){let F=new EJ(D);F.needsUpdate=!0,E(F)};Q.load(G9.resolveURL(N,Z.path),R,void 0,q)})})}let G=U.then(function(N){if(Y===!0)H.revokeObjectURL(X);return j9(N,K),N.userData.mimeType=K.mimeType||$F(K.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),N});return this.sourceCache[J]=G,G}assignTexture(J,Q,$,W){let Z=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(Z.extensions[m0.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[m0.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let X=Z.associations.get(K);K=Z.extensions[m0.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),Z.associations.set(K,X)}}if(W!==void 0)K.colorSpace=W;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,W=Q.attributes.tangent===void 0,Z=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,X=this.cache.get(H);if(!X)X=new E6,sJ.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(H,X);$=X}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,X=this.cache.get(H);if(!X)X=new G6,sJ.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(H,X);$=X}if(W||Z||K){let H="ClonedMaterial:"+$.uuid+":";if(W)H+="derivative-tangents:";if(Z)H+="vertex-colors:";if(K)H+="flat-shading:";let X=this.cache.get(H);if(!X){if(X=$.clone(),Z)X.vertexColors=!0;if(K)X.flatShading=!0;if(W){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(H,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return k7}loadMaterial(J){let Q=this,$=this.json,W=this.extensions,Z=$.materials[J],K,H={},X=Z.extensions||{},Y=[];if(X[m0.KHR_MATERIALS_UNLIT]){let G=W[m0.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),Y.push(G.extendParams(H,Z,Q))}else{let G=Z.pbrMetallicRoughness||{};if(H.color=new A0(1,1,1),H.opacity=1,Array.isArray(G.baseColorFactor)){let N=G.baseColorFactor;H.color.setRGB(N[0],N[1],N[2],gJ),H.opacity=N[3]}if(G.baseColorTexture!==void 0)Y.push(Q.assignTexture(H,"map",G.baseColorTexture,cJ));if(H.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,H.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)Y.push(Q.assignTexture(H,"metalnessMap",G.metallicRoughnessTexture)),Y.push(Q.assignTexture(H,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(N){return N.getMaterialType&&N.getMaterialType(J)}),Y.push(Promise.all(this._invokeAll(function(N){return N.extendMaterialParams&&N.extendMaterialParams(J,H)})))}if(Z.doubleSided===!0)H.side=vJ;let U=Z.alphaMode||zZ.OPAQUE;if(U===zZ.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===zZ.MASK)H.alphaTest=Z.alphaCutoff!==void 0?Z.alphaCutoff:0.5;if(Z.normalTexture!==void 0&&K!==X9){if(Y.push(Q.assignTexture(H,"normalMap",Z.normalTexture)),H.normalScale=new R0(1,1),Z.normalTexture.scale!==void 0){let G=Z.normalTexture.scale;H.normalScale.set(G,G)}}if(Z.occlusionTexture!==void 0&&K!==X9){if(Y.push(Q.assignTexture(H,"aoMap",Z.occlusionTexture)),Z.occlusionTexture.strength!==void 0)H.aoMapIntensity=Z.occlusionTexture.strength}if(Z.emissiveFactor!==void 0&&K!==X9){let G=Z.emissiveFactor;H.emissive=new A0().setRGB(G[0],G[1],G[2],gJ)}if(Z.emissiveTexture!==void 0&&K!==X9)Y.push(Q.assignTexture(H,"emissiveMap",Z.emissiveTexture,cJ));return Promise.all(Y).then(function(){let G=new K(H);if(Z.name)G.name=Z.name;if(j9(G,Z),Q.associations.set(G,{materials:J}),Z.extensions)x8(W,G,Z);return G})}createUniqueName(J){let Q=o0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,W=this.primitiveCache;function Z(H){return $[m0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(X){return oX(X,H,Q)})}let K=[];for(let H=0,X=J.length;H<X;H++){let Y=J[H],U=QF(Y),G=W[U];if(G)K.push(G.promise);else{let N;if(Y.extensions&&Y.extensions[m0.KHR_DRACO_MESH_COMPRESSION])N=Z(Y);else N=oX(new RJ,Y,Q);if(Y.mode===E9.TRIANGLE_STRIP)N=N.then((E)=>BZ(E,$6));else if(Y.mode===E9.TRIANGLE_FAN)N=N.then((E)=>BZ(E,L7));W[U]={primitive:Y,promise:N},K.push(N)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,W=this.extensions,Z=$.meshes[J],K=Z.primitives,H=[];for(let X=0,Y=K.length;X<Y;X++){let U=K[X].material===void 0?tq(this.cache):this.getDependency("material",K[X].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(X){let Y=X.slice(0,X.length-1),U=X[X.length-1],G=[];for(let E=0,q=U.length;E<q;E++){let R=U[E],D=K[E],F,O=Y[E];if(D.mode===E9.TRIANGLES||D.mode===E9.TRIANGLE_STRIP||D.mode===E9.TRIANGLE_FAN||D.mode===void 0){let k=Z.isSkinnedMesh===!0,_=R.hasAttribute("skinIndex")&&R.hasAttribute("skinWeight");if(k&&_===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(F=k&&_?new wQ(R,O):new _J(R,O),F.isSkinnedMesh===!0)F.normalizeSkinWeights()}else if(D.mode===E9.LINES)F=new SQ(R,O);else if(D.mode===E9.LINE_STRIP)F=new V7(R,O);else if(D.mode===E9.LINE_LOOP)F=new jQ(R,O);else if(D.mode===E9.POINTS)F=new D7(R,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+D.mode);if(Object.keys(F.geometry.morphAttributes).length>0)JF(F,Z);if(F.name=Q.createUniqueName(Z.name||"mesh_"+J),j9(F,Z),D.extensions)x8(W,F,D);Q.assignFinalMaterial(F),G.push(F)}for(let E=0,q=G.length;E<q;E++)Q.associations.set(G[E],{meshes:J,primitives:E});if(G.length===1){if(Z.extensions)x8(W,G[0],Z);return G[0]}let N=new J9;if(Z.extensions)x8(W,N,Z);Q.associations.set(N,{meshes:J});for(let E=0,q=G.length;E<q;E++)N.add(G[E]);return N})}loadCamera(J){let Q,$=this.json.cameras[J],W=$[$.type];if(!W){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new zJ(pJ.radToDeg(W.yfov),W.aspectRatio||1,W.znear||1,W.zfar||2000000);else if($.type==="orthographic")Q=new _7(-W.xmag,W.xmag,W.ymag,-W.ymag,W.znear,W.zfar);if($.name)Q.name=this.createUniqueName($.name);return j9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let W=0,Z=Q.joints.length;W<Z;W++)$.push(this._loadNodeShallow(Q.joints[W]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(W){let Z=W.pop(),K=W,H=[],X=[];for(let Y=0,U=K.length;Y<U;Y++){let G=K[Y];if(G){H.push(G);let N=new v0;if(Z!==null)N.fromArray(Z.array,Y*16);X.push(N)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[Y])}return new U6(H,X)})}loadAnimation(J){let Q=this.json,$=this,W=Q.animations[J],Z=W.name?W.name:"animation_"+J,K=[],H=[],X=[],Y=[],U=[];for(let G=0,N=W.channels.length;G<N;G++){let E=W.channels[G],q=W.samplers[E.sampler],R=E.target,D=R.node,F=W.parameters!==void 0?W.parameters[q.input]:q.input,O=W.parameters!==void 0?W.parameters[q.output]:q.output;if(R.node===void 0)continue;K.push(this.getDependency("node",D)),H.push(this.getDependency("accessor",F)),X.push(this.getDependency("accessor",O)),Y.push(q),U.push(R)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(X),Promise.all(Y),Promise.all(U)]).then(function(G){let N=G[0],E=G[1],q=G[2],R=G[3],D=G[4],F=[];for(let k=0,_=N.length;k<_;k++){let B=N[k],I=E[k],C=q[k],L=R[k],z=D[k];if(B===void 0)continue;if(B.updateMatrix)B.updateMatrix();let j=$._createAnimationTracks(B,I,C,L,z);if(j)for(let l=0;l<j.length;l++)F.push(j[l])}let O=new mQ(Z,void 0,F);return j9(O,W),O})}createNodeMesh(J){let Q=this.json,$=this,W=Q.nodes[J];if(W.mesh===void 0)return null;return $.getDependency("mesh",W.mesh).then(function(Z){let K=$._getNodeRef($.meshCache,W.mesh,Z);if(W.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let X=0,Y=W.weights.length;X<Y;X++)H.morphTargetInfluences[X]=W.weights[X]});return K})}loadNode(J){let Q=this.json,$=this,W=Q.nodes[J],Z=$._loadNodeShallow(J),K=[],H=W.children||[];for(let Y=0,U=H.length;Y<U;Y++)K.push($.getDependency("node",H[Y]));let X=W.skin===void 0?Promise.resolve(null):$.getDependency("skin",W.skin);return Promise.all([Z,Promise.all(K),X]).then(function(Y){let U=Y[0],G=Y[1],N=Y[2];if(N!==null)U.traverse(function(E){if(!E.isSkinnedMesh)return;E.bind(N,WF)});for(let E=0,q=G.length;E<q;E++)U.add(G[E]);if(U.userData.pivot!==void 0&&G.length>0){let E=U.userData.pivot,q=G[0];U.pivot=new S().fromArray(E),U.position.x-=E[0],U.position.y-=E[1],U.position.z-=E[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,W=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let Z=Q.nodes[J],K=Z.name?W.createUniqueName(Z.name):"",H=[],X=W._invokeOne(function(Y){return Y.createNodeMesh&&Y.createNodeMesh(J)});if(X)H.push(X);if(Z.camera!==void 0)H.push(W.getDependency("camera",Z.camera).then(function(Y){return W._getNodeRef(W.cameraCache,Z.camera,Y)}));return W._invokeAll(function(Y){return Y.createNodeAttachment&&Y.createNodeAttachment(J)}).forEach(function(Y){H.push(Y)}),this.nodeCache[J]=Promise.all(H).then(function(Y){let U;if(Z.isBone===!0)U=new X6;else if(Y.length>1)U=new J9;else if(Y.length===1)U=Y[0];else U=new QJ;if(U!==Y[0])for(let G=0,N=Y.length;G<N;G++)U.add(Y[G]);if(Z.name)U.userData.name=Z.name,U.name=K;if(j9(U,Z),Z.extensions)x8($,U,Z);if(Z.matrix!==void 0){let G=new v0;G.fromArray(Z.matrix),U.applyMatrix4(G)}else{if(Z.translation!==void 0)U.position.fromArray(Z.translation);if(Z.rotation!==void 0)U.quaternion.fromArray(Z.rotation);if(Z.scale!==void 0)U.scale.fromArray(Z.scale)}if(!W.associations.has(U))W.associations.set(U,{});else if(Z.mesh!==void 0&&W.meshCache.refs[Z.mesh]>1){let G=W.associations.get(U);W.associations.set(U,{...G})}return W.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],W=this,Z=new J9;if($.name)Z.name=W.createUniqueName($.name);if(j9(Z,$),$.extensions)x8(Q,Z,$);let K=$.nodes||[],H=[];for(let X=0,Y=K.length;X<Y;X++)H.push(W.getDependency("node",K[X]));return Promise.all(H).then(function(X){for(let U=0,G=X.length;U<G;U++){let N=X[U];if(N.parent!==null)Z.add(uX(N));else Z.add(N)}let Y=(U)=>{let G=new Map;for(let[N,E]of W.associations)if(N instanceof sJ||N instanceof EJ)G.set(N,E);return U.traverse((N)=>{let E=W.associations.get(N);if(E!=null)G.set(N,E)}),G};return W.associations=Y(Z),Z})}_createAnimationTracks(J,Q,$,W,Z){let K=[],H=J.name?J.name:J.uuid,X=[];function Y(E){if(E.morphTargetInfluences)X.push(E.name?E.name:E.uuid)}if(O8[Z.path]===O8.weights){if(Y(J),J.isGroup)J.children.forEach(Y)}else X.push(H);let U;switch(O8[Z.path]){case O8.weights:U=E8;break;case O8.rotation:U=N8;break;case O8.translation:case O8.scale:U=f8;break;default:switch($.itemSize){case 1:U=E8;break;case 2:case 3:default:U=f8;break}break}let G=W.interpolation!==void 0?rq[W.interpolation]:DQ,N=this._getArrayFromAccessor($);for(let E=0,q=X.length;E<q;E++){let R=new U(X[E]+"."+O8[Z.path],Q.array,N,G);if(W.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(R);K.push(R)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=CZ(Q.constructor),W=new Float32Array(Q.length);for(let Z=0,K=Q.length;Z<K;Z++)W[Z]=Q[Z]*$;Q=W}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof N8?VY:AZ)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ZF(J,Q,$){let W=Q.attributes,Z=new nJ;if(W.POSITION!==void 0){let X=$.json.accessors[W.POSITION],Y=X.min,U=X.max;if(Y!==void 0&&U!==void 0){if(Z.set(new S(Y[0],Y[1],Y[2]),new S(U[0],U[1],U[2])),X.normalized){let G=CZ(C7[X.componentType]);Z.min.multiplyScalar(G),Z.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let X=new S,Y=new S;for(let U=0,G=K.length;U<G;U++){let N=K[U];if(N.POSITION!==void 0){let E=$.json.accessors[N.POSITION],q=E.min,R=E.max;if(q!==void 0&&R!==void 0){if(Y.setX(Math.max(Math.abs(q[0]),Math.abs(R[0]))),Y.setY(Math.max(Math.abs(q[1]),Math.abs(R[1]))),Y.setZ(Math.max(Math.abs(q[2]),Math.abs(R[2]))),E.normalized){let D=CZ(C7[E.componentType]);Y.multiplyScalar(D)}X.max(Y)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Z.expandByVector(X)}J.boundingBox=Z;let H=new Q9;Z.getCenter(H.center),H.radius=Z.min.distanceTo(Z.max)/2,J.boundingSphere=H}function oX(J,Q,$){let W=Q.attributes,Z=[];function K(H,X){return $.getDependency("accessor",H).then(function(Y){J.setAttribute(X,Y)})}for(let H in W){let X=IZ[H]||H.toLowerCase();if(X in J.attributes)continue;Z.push(K(W[H],X))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});Z.push(H)}if(g0.workingColorSpace!==gJ&&"COLOR_0"in W)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${g0.workingColorSpace}" not supported.`);return j9(J,Q),ZF(J,Q,$),Promise.all(Z).then(function(){return Q.targets!==void 0?eq(J,Q.targets,$):J})}var TZ=new WeakMap,KF=new URL("../libs/draco/draco_decoder.wasm",document.baseURI).toString(),HF=new URL("../libs/draco/draco_wasm_wrapper.js",document.baseURI).toString(),XF=new URL("../libs/draco/draco_decoder.js",document.baseURI).toString(),TR={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",document.baseURI).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",document.baseURI).toString()};class SZ extends z9{constructor(J){super(J);this.decoderPaths={js:HF,wasm:KF,dep_js:XF},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(J){let{decoderPaths:Q}=this;if(typeof J==="object")Q.js=J.js,Q.wasm=J.wasm,Q.dep_js=null;else Q.js=G9.resolveURL("draco_wasm_wrapper.js",J),Q.wasm=G9.resolveURL("draco_decoder.wasm",J),Q.dep_js=G9.resolveURL("draco_decoder.js",J);return this}setDecoderConfig(J){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=J,this}setWorkerLimit(J){return this.workerLimit=J,this}load(J,Q,$,W){let Z=new F8(this.manager);Z.setPriority(this.priority),Z.setCache(this.cache),Z.setPath(this.path),Z.setResponseType("arraybuffer"),Z.setRequestHeader(this.requestHeader),Z.setWithCredentials(this.withCredentials),Z.load(J,(K)=>{this.parse(K,Q,W)},$,W)}parse(J,Q,$=()=>{}){this.decodeDracoFile(J,Q,null,null,cJ,$).catch($)}decodeDracoFile(J,Q,$,W,Z=gJ,K=()=>{}){let H={attributeIDs:$||this.defaultAttributeIDs,attributeTypes:W||this.defaultAttributeTypes,useUniqueIDs:!!$,vertexColorSpace:Z};return this.decodeGeometry(J,H).then(Q).catch(K)}decodeGeometry(J,Q){let $=JSON.stringify(Q);if(TZ.has(J)){let X=TZ.get(J);if(X.key===$)return X.promise;else if(J.byteLength===0)throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let W,Z=this.workerNextTaskID++,K=J.byteLength,H=this._getWorker(Z,K).then((X)=>{return W=X,new Promise((Y,U)=>{W._callbacks[Z]={resolve:Y,reject:U},W.postMessage({type:"decode",id:Z,taskConfig:Q,buffer:J},[J])})}).then((X)=>this._createGeometry(X.geometry));return H.catch(()=>!0).then(()=>{if(W&&Z)this._releaseTask(W,Z)}),TZ.set(J,{key:$,promise:H}),H}_createGeometry(J){let Q=new RJ;if(J.index)Q.setIndex(new UJ(J.index.array,1));for(let $=0;$<J.attributes.length;$++){let{name:W,array:Z,itemSize:K,stride:H,vertexColorSpace:X}=J.attributes[$],Y;if(K===H)Y=new UJ(Z,K);else{let U=new Y8(Z,H);Y=new C9(U,K,0)}if(W==="color")this._assignVertexColorSpace(Y,X),Y.normalized=Z instanceof Float32Array===!1;Q.setAttribute(W,Y)}return Q}_assignVertexColorSpace(J,Q){if(Q!==cJ)return;let $=new A0;for(let W=0,Z=J.count;W<Z;W++)$.fromBufferAttribute(J,W),g0.colorSpaceToWorking($,cJ),J.setXYZ(W,$.r,$.g,$.b)}_loadLibrary(J,Q){let $=new F8(this.manager);return $.setPriority(this.priority),$.setCache(this.cache),$.setResponseType(Q),$.setWithCredentials(this.withCredentials),new Promise((W,Z)=>{$.load(J,W,void 0,Z)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let J=typeof WebAssembly!=="object"||this.decoderConfig.type==="js",Q=[],{decoderPaths:$}=this;if(J){if($.dep_js===null)throw Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");Q.push(this._loadLibrary($.dep_js,"text"))}else Q.push(this._loadLibrary($.js,"text")),Q.push(this._loadLibrary($.wasm,"arraybuffer"));return this.decoderPending=Promise.all(Q).then((W)=>{let Z=W[0];if(!J)this.decoderConfig.wasmBinary=W[1];let K=YF.toString(),H=["/* draco decoder */",Z,"","/* worker */",K.substring(K.indexOf("{")+1,K.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([H]))}),this.decoderPending}_getWorker(J,Q){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let W=new Worker(this.workerSourceURL);W._callbacks={},W._taskCosts={},W._taskLoad=0,W.postMessage({type:"init",decoderConfig:this.decoderConfig}),W.onmessage=function(Z){let K=Z.data;switch(K.type){case"decode":W._callbacks[K.id].resolve(K);break;case"error":W._callbacks[K.id].reject(K);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+K.type+'"')}},this.workerPool.push(W)}else this.workerPool.sort(function(W,Z){return W._taskLoad>Z._taskLoad?-1:1});let $=this.workerPool[this.workerPool.length-1];return $._taskCosts[J]=Q,$._taskLoad+=Q,$})}_releaseTask(J,Q){J._taskLoad-=J._taskCosts[Q],delete J._callbacks[Q],delete J._taskCosts[Q]}debug(){console.log("Task load: ",this.workerPool.map((J)=>J._taskLoad))}dispose(){for(let J=0;J<this.workerPool.length;++J)this.workerPool[J].terminate();if(this.workerPool.length=0,this.workerSourceURL!=="")URL.revokeObjectURL(this.workerSourceURL);return this}}function YF(){let J,Q;onmessage=function(H){let X=H.data;switch(X.type){case"init":J=X.decoderConfig,Q=new Promise(function(G){J.onModuleLoaded=function(N){G({draco:N})},DracoDecoderModule(J)});break;case"decode":let{buffer:Y,taskConfig:U}=X;Q.then((G)=>{let N=G.draco,E=new N.Decoder;try{let q=$(N,E,new Int8Array(Y),U),R=q.attributes.map((D)=>D.array.buffer);if(q.index)R.push(q.index.array.buffer);self.postMessage({type:"decode",id:X.id,geometry:q},R)}catch(q){console.error(q),self.postMessage({type:"error",id:X.id,error:q.message})}finally{N.destroy(E)}});break}};function $(H,X,Y,U){let{attributeIDs:G,attributeTypes:N}=U,E,q,R=X.GetEncodedGeometryType(Y);if(R===H.TRIANGULAR_MESH)E=new H.Mesh,q=X.DecodeArrayToMesh(Y,Y.byteLength,E);else if(R===H.POINT_CLOUD)E=new H.PointCloud,q=X.DecodeArrayToPointCloud(Y,Y.byteLength,E);else throw Error("THREE.DRACOLoader: Unexpected geometry type.");if(!q.ok()||E.ptr===0)throw Error("THREE.DRACOLoader: Decoding failed: "+q.error_msg());let D={index:null,attributes:[]};for(let F in G){let O=self[N[F]],k,_;if(U.useUniqueIDs)_=G[F],k=X.GetAttributeByUniqueId(E,_);else{if(_=X.GetAttributeId(E,H[G[F]]),_===-1)continue;k=X.GetAttribute(E,_)}let B=Z(H,X,E,F,O,k);if(F==="color")B.vertexColorSpace=U.vertexColorSpace;D.attributes.push(B)}if(R===H.TRIANGULAR_MESH)D.index=W(H,X,E);return H.destroy(E),D}function W(H,X,Y){let G=Y.num_faces()*3,N=G*4,E=H._malloc(N);X.GetTrianglesUInt32Array(Y,N,E);let q=new Uint32Array(H.HEAPF32.buffer,E,G).slice();return H._free(E),{array:q,itemSize:1}}function Z(H,X,Y,U,G,N){let E=Y.num_points(),q=N.num_components(),R=K(H,G),D=q*G.BYTES_PER_ELEMENT,F=Math.ceil(D/4)*4,O=F/G.BYTES_PER_ELEMENT,k=E*D,_=E*F,B=H._malloc(k);X.GetAttributeDataArrayForAllPoints(Y,N,R,k,B);let I=new G(H.HEAPF32.buffer,B,k/G.BYTES_PER_ELEMENT),C;if(D===F)C=I.slice();else{C=new G(_/G.BYTES_PER_ELEMENT);let L=0;for(let z=0;z<E;z++){for(let j=0;j<q;j++)C[L+j]=I[z*q+j];L+=O}}return H._free(B),{name:U,count:E,itemSize:q,array:C,stride:O}}function K(H,X){switch(X){case Float32Array:return H.DT_FLOAT32;case Int8Array:return H.DT_INT8;case Int16Array:return H.DT_INT16;case Int32Array:return H.DT_INT32;case Uint8Array:return H.DT_UINT8;case Uint16Array:return H.DT_UINT16;case Uint32Array:return H.DT_UINT32}}}var W9=document.querySelector("canvas"),jZ=document.querySelector("#status"),A7=document.querySelector("#toggle"),g8=matchMedia("(prefers-reduced-motion: reduce)"),w7=document.querySelector("#fire-audio"),J$=document.querySelector("#sound");w7.volume=0.3;J$.addEventListener("click",async()=>{if(w7.paused)try{await w7.play()}catch{J$.textContent="Sound unavailable";return}else w7.pause();J$.textContent=w7.paused?"Play fire sound":"Mute fire sound",J$.setAttribute("aria-pressed",String(!w7.paused))});var I6;try{I6=new DZ({canvas:W9,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{throw jZ.textContent="3D preview is unavailable in this browser.",A7.hidden=!0,Error("WebGL unavailable")}I6.setPixelRatio(Math.min(devicePixelRatio,1.25));I6.outputColorSpace=cJ;var C6=new _Q,L8=new zJ(37,1,0.01,100);L8.position.set(0,1.7,-7.8);L8.lookAt(0,0,0);C6.add(new uQ(11389439,6508615,0.5));var kY=new P7(11783935,0.42);kY.position.set(-2,6,-4);C6.add(kY);var fZ=new b8(16748856,5,4.2,2),v9=new J9;C6.add(v9);v9.add(fZ);var zY=new b8(16762747,1.8,2.2,2);v9.add(zY);var UF=Uint8Array.from(atob(window.ISLAND_GLB),(J)=>J.charCodeAt(0));window.ISLAND_GLB=null;var $$=new SZ().setDecoderPath({js:window.DRACO_WRAPPER,wasm:window.DRACO_WASM}).setWorkerLimit(1),BY=new wZ().setDRACOLoader($$),GF,vZ,yZ,k6,o9=document.querySelector(".backdrop"),Q$=[{x:25,width:270},{x:630,width:300},{x:950,width:370},{x:1350,width:220}],a9=[],i9=[];function _Y(J,Q){let $=J.sprite,W=Math.floor(Math.random()*Q$.length);if(W===$)W=(W+1+Math.floor(Math.random()*(Q$.length-1)))%Q$.length;J.sprite=W;let Z=Q$[W];J.width=Z.width,J.element.style.width=`${Z.width}px`,J.element.style.backgroundPosition=`-${Z.x}px -185px`;let K=Math.max(0,Math.min(o9.clientHeight*0.58-150,o9.clientHeight*0.35)),H=Q===void 0?Math.random():(i9[Q]+Math.random()*0.7)/a9.length;J.y=Math.round(K*H),J.speed=8+Math.random()*5}function EF(){let J=Math.max(3,Math.min(7,Math.ceil(o9.clientWidth/340)+1));if(a9.length!==J){o9.replaceChildren(),a9.length=0;for(let $=0;$<J;$++){let W=document.createElement("span");W.className="cloud",o9.append(W),a9.push({element:W,sprite:-1,x:0,y:0,width:0,speed:0})}let Q=()=>i9.slice(1).every(($,W)=>Math.abs($-i9[W])===1);do{i9=a9.map(($,W)=>W);for(let $=i9.length-1;$>0;$--){let W=Math.floor(Math.random()*($+1));[i9[$],i9[W]]=[i9[W],i9[$]]}}while(Q());a9.forEach(($,W)=>{_Y($,W),$.x=(W+0.2)*(o9.clientWidth+350)/J-350})}else{let Q=Math.max(0,Math.min(o9.clientHeight*0.58-150,o9.clientHeight*0.35));a9.forEach(($)=>{$.y=Math.min($.y,Q)})}PY()}function PY(){a9.forEach((J)=>{J.element.style.transform=`translate3d(${J.x}px,${J.y}px,0)`})}function NF(J){let Q=o9.clientWidth;a9.forEach(($)=>{if($.x+=$.speed*J,$.x>Q)_Y($),$.x=-$.width-30-Math.random()*120}),PY()}BY.parse(UF.buffer,"",(J)=>{let Q=new nJ().setFromObject(J.scene),$=Q.getCenter(new S),W=Q.getSize(new S),Z=4.8/Math.max(W.x,W.y,W.z);J.scene.scale.setScalar(Z),J.scene.position.copy($).multiplyScalar(-Z),v9.add(J.scene),GF=J.scene;let K=window.FACE_GLB;if(window.FACE_GLB=null,K){let U=Uint8Array.from(atob(K),(G)=>G.charCodeAt(0));BY.parse(U.buffer,"",(G)=>{J.scene.add(G.scene),k6=G.scene,$$.dispose(),p8()},()=>{$$.dispose(),console.warn("Face details unavailable")})}else $$.dispose();zY.position.set(-0.3,-0.035,0.52).sub($).multiplyScalar(Z),xZ.position.y=(Q.min.y-$.y)*Z+0.46;let H=J.scene.getObjectByName("model_part2_export");if(H?.material?.map)H.material=H.material.clone(),H.material.onBeforeCompile=(U)=>{U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
varying vec3 lanternLocalPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
lanternLocalPosition = position;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 lanternLocalPosition;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
    vec3 lp = lanternLocalPosition;
    float inLantern = step(-.36, lp.x) * step(lp.x, -.23) * step(-.115, lp.y) * step(lp.y, .01) * step(.45, lp.z) * step(lp.z, .59);
    vec3 pane = texture2D(map, vMapUv).rgb;
    float paneBrightness = dot(pane, vec3(.2126, .7152, .0722));
    totalEmissiveRadiance += inLantern * smoothstep(.42, .78, paneBrightness) * vec3(.8, .42, .12);
   `)};let X=J.scene.getObjectByName("Anastasiia_trial_desk_export");if(X?.material?.map)X.material=X.material.clone(),X.material.onBeforeCompile=(U)=>{U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
varying vec3 deskLocalPosition; varying vec3 deskLocalNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
deskLocalPosition = position; deskLocalNormal = normal;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 deskLocalPosition; varying vec3 deskLocalNormal;`).replace("#include <map_fragment>",`#include <map_fragment>
    float top = step(-.34, deskLocalPosition.y) * step(deskLocalPosition.y, -.26) * smoothstep(.70, .95, abs(deskLocalNormal.y));
    float wood = smoothstep(-.2, .85, sin(deskLocalPosition.z * 310. + sin(deskLocalPosition.x * 39.) * 1.2));
    float warmSurface = smoothstep(.02, .12, diffuseColor.r - diffuseColor.b);
    diffuseColor.rgb *= 1. - top * warmSurface * wood * .10;
   `)};yZ=["left","right"].map((U)=>[J.scene.getObjectByName(`Anastasiia_trial_hand_${U}_export`),J.scene.getObjectByName(`Anastasiia_trial_sleeve_${U}_export`)]);let Y=J.scene.getObjectByName("Anastasiia_trial_character_export");if(Y?.geometry?.attributes.position){let U=Y.geometry.attributes.position;U.setUsage(W6);let G=[];for(let N=0;N<U.count;N++){let E=U.getX(N),q=U.getY(N),R=U.getZ(N),D=pJ.smoothstep(Math.abs(E+0.094),0.048,0.105),F=pJ.smoothstep(q,-0.32,-0.27)*(1-pJ.smoothstep(q,-0.17,-0.12)),O=D*F,k=pJ.smoothstep(q,-0.38,-0.32);if(O>0.01||k>0.01)G.push({i:N,y:q,z:R,armWeight:O,leanWeight:k,right:E>-0.094})}vZ={position:U,moving:G}}jZ.hidden=!0,p8()},()=>{jZ.textContent="Could not load the island."});var bZ=new U9({transparent:!0,depthWrite:!1,side:vJ,uniforms:{uTime:{value:0},uHeight:{value:1}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform float uTime;uniform float uHeight;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*vec2(80.,14.);float d=length(p)/7.;float fadeDistance=length(vec2(p.x,p.y*mix(1.,.72,smoothstep(0.,2.,p.y))))/7.;float fade=1.-smoothstep(.45,1.,fadeDistance);float wave=sin(d*39.-uTime*1.15)*.5+.5;float thin=smoothstep(.91,.99,wave);vec3 c=mix(vec3(.045,.13,.23),vec3(.13,.29,.40),thin*.23);float edge=smoothstep(0.,.08,gl_FragCoord.y/uHeight);gl_FragColor=vec4(c,fade*edge*.9);}"}),xZ=new _J(new y8(80,14),bZ);xZ.rotation.x=-Math.PI/2;C6.add(xZ);var N9=new J9;v9.add(N9);function IY(J,Q){let $=new q6;return $.moveTo(0,0),$.bezierCurveTo(-J*0.65,Q*0.13,-J*0.52,Q*0.55,-J*0.16,Q*0.7),$.bezierCurveTo(-J*0.18,Q*0.43,J*0.18,Q*0.52,0,Q),$.bezierCurveTo(J*0.52,Q*0.72,J*0.67,Q*0.23,J*0.38,Q*0.09),$.bezierCurveTo(J*0.23,0,J*0.1,0,0,0),new F6($)}var qF=IY(0.29,0.55),FF=IY(0.15,0.33),OF=new X9({color:16742704,side:vJ}),RF=new X9({color:16766058,side:vJ});for(let J of[0,Math.PI/2]){let Q=new _J(qF,OF);Q.rotation.y=J,N9.add(Q);let $=new _J(FF,RF);$.rotation.y=J,$.position.y=0.02,$.position.z=0.004,N9.add($)}N9.position.set(0.3,-1.16,-0.5);fZ.position.copy(N9.position).add(new S(0,0.5,0));function LF(){let J=document.createElement("canvas");J.width=J.height=64;let Q=J.getContext("2d"),$=Q.createRadialGradient(32,32,1,32,32,32);return $.addColorStop(0,"rgba(203,210,216,.45)"),$.addColorStop(1,"rgba(170,186,203,0)"),Q.fillStyle=$,Q.fillRect(0,0,64,64),new yQ(J)}var MF=LF(),_6=[];for(let J=0;J<7;J++){let Q=new H6({map:MF,transparent:!0,opacity:0.2,depthWrite:!1,color:11977425}),$=new CQ(Q);v9.add($),_6.push($)}var Z$=10,W$=new Float32Array(Z$*3),CY=new Float32Array(Z$),P6=new RJ;P6.setAttribute("position",new UJ(W$,3).setUsage(W6));P6.setAttribute("aOpacity",new UJ(CY,1).setUsage(W6));var wY=new D7(P6,new U9({transparent:!0,depthWrite:!1,uniforms:{uPixelRatio:{value:Math.min(devicePixelRatio,1.25)}},vertexShader:"attribute float aOpacity; varying float vOpacity; uniform float uPixelRatio; void main(){vOpacity=aOpacity; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=7.*uPixelRatio*(5./-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying float vOpacity; void main(){float d=length(gl_PointCoord-vec2(.5)); float soft=1.-smoothstep(.2,.5,d); gl_FragColor=vec4(1.,.48,.12,vOpacity*soft);}"}));v9.add(wY);var fJ=0,z6=0,hZ=0,R8=!1,gZ=!0,oJ=null,K$=0;function p8(){I6.render(C6,L8)}function AY(){EF();let{clientWidth:J,clientHeight:Q}=W9,$=W9.parentElement.clientHeight;if(!J||!Q||!$)return;I6.setSize(J,Q,!1),bZ.uniforms.uHeight.value=W9.height,L8.aspect=J/$,L8.fov=pJ.radToDeg(2*Math.atan(Math.tan(pJ.degToRad(37)/2)*Math.max(1,1.1/L8.aspect))),L8.setViewOffset(J,$,0,-48,J,Q),L8.updateProjectionMatrix(),p8()}function TY(J){if(R8||!gZ||document.hidden||g8.matches)return;if(hZ=requestAnimationFrame(TY),J-z6<33.333333333333336)return;let Q=z6?Math.min((J-z6)/1000,0.1):0;if(z6=J,fJ+=Q,NF(Q),!oJ?.turning&&J>=K$)v9.rotation.y+=Q*0.075;bZ.uniforms.uTime.value=fJ,fZ.intensity=5+0.65*Math.sin(fJ*8.3)+0.3*Math.sin(fJ*13.7);for(let G=0;G<_6.length;G++){let N=(fJ*0.1+G/_6.length)%1,E=_6[G];E.position.set(N9.position.x+Math.sin(fJ*0.7+G*2)*0.1+N*0.18,N9.position.y+0.46+N*2.9,N9.position.z+Math.cos(fJ*0.5+G)*0.06);let q=0.24+N*0.48;E.scale.set(q,q,1),E.material.opacity=0.48*Math.sin(Math.PI*N)}for(let G=0;G<Z$;G++){let N=(fJ*0.12+G/Z$)%1;W$[G*3]=N9.position.x+Math.sin(G*2.7+fJ*0.8)*(0.04+N*0.13),W$[G*3+1]=N9.position.y+0.28+N*3,CY[G]=0.85*Math.sin(Math.PI*N),W$[G*3+2]=N9.position.z+Math.cos(G*1.9+fJ*0.6)*(0.03+N*0.09)}P6.attributes.position.needsUpdate=!0,P6.attributes.aOpacity.needsUpdate=!0;let $=fJ%14,W=pJ.smoothstep($,1.2,3.1)*(1-pJ.smoothstep($,4.4,6.5)),Z=pJ.smoothstep($,6.4,7.2)*(1-pJ.smoothstep($,9.5,10.5)),K=-0.075*W,H=Math.cos(K),X=Math.sin(K),Y=-0.37,U=0.1;if(k6)k6.rotation.x=K,k6.position.y=Y-(H*Y-X*U),k6.position.z=U-(X*Y+H*U);if(yZ)yZ.forEach((G,N)=>G.forEach((E)=>{if(!E)return;let q=N===1,R=Z*Math.sin(fJ*(q?2.1:4.2));E.rotation.x=K,E.position.y=Y-(H*Y-X*U)+R*(q?0.0012:0.0008),E.position.z=U-(X*Y+H*U)+R*(q?0.0015:0.0008)}));if(vZ){let{position:G,moving:N}=vZ;for(let E of N){let q=E.y-Y,R=E.z-U,D=Y+q*H-R*X-E.y,F=U+q*X+R*H-E.z,O=Z*(E.right?Math.sin(fJ*2.1)*0.65:Math.sin(fJ*4.2));G.setY(E.i,E.y+E.leanWeight*D+E.armWeight*O*0.002),G.setZ(E.i,E.z+E.leanWeight*F+E.armWeight*O*0.0015)}G.needsUpdate=!0}N9.children.forEach((G,N)=>{G.scale.y=0.9+0.13*Math.sin(fJ*7+N*1.2),G.rotation.z=0.08*Math.sin(fJ*4+N)}),p8()}function w6(){if(_6.forEach((J)=>{J.visible=!g8.matches}),wY.visible=!g8.matches,cancelAnimationFrame(hZ),z6=0,!R8&&gZ&&!document.hidden&&!g8.matches)hZ=requestAnimationFrame(TY);else p8()}W9.addEventListener("pointerdown",(J)=>{if(!J.isPrimary||J.pointerType==="mouse"&&J.button!==0)return;oJ={id:J.pointerId,startX:J.clientX,startY:J.clientY,lastX:J.clientX,turning:!1}});W9.addEventListener("pointermove",(J)=>{if(!oJ||J.pointerId!==oJ.id)return;let Q=J.clientX-oJ.startX,$=J.clientY-oJ.startY;if(!oJ.turning){if(Math.abs(Q)<6||Math.abs(Q)<=Math.abs($))return;oJ.turning=!0,W9.setPointerCapture(J.pointerId)}v9.rotation.y+=(J.clientX-oJ.lastX)*0.012,oJ.lastX=J.clientX,K$=performance.now()+4000,p8()});function pZ(J){if(!oJ||J.pointerId!==oJ.id)return;if(oJ.turning)K$=performance.now()+4000;oJ=null}W9.addEventListener("pointerup",pZ);W9.addEventListener("pointercancel",pZ);W9.addEventListener("lostpointercapture",pZ);W9.addEventListener("keydown",(J)=>{if(J.key!=="ArrowLeft"&&J.key!=="ArrowRight")return;J.preventDefault(),v9.rotation.y+=J.key==="ArrowLeft"?-0.2:0.2,K$=performance.now()+4000,p8()});A7.addEventListener("click",()=>{R8=!R8,document.querySelector(".backdrop").classList.toggle("is-paused",R8),document.querySelector(".stage").classList.toggle("is-paused",R8),A7.textContent=R8?"Play animation":"Pause animation",A7.setAttribute("aria-pressed",String(R8)),w6()});g8.addEventListener("change",()=>{A7.hidden=g8.matches,w6()});document.addEventListener("visibilitychange",w6);if("IntersectionObserver"in window)new IntersectionObserver((J)=>{gZ=J[0].isIntersecting,w6()}).observe(W9);window.addEventListener("resize",AY);A7.hidden=g8.matches;AY();w6();})();
