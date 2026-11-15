var _Z="187";var PZ=0,lQ=1,CZ=2;var R7=1,IZ=2,g8=3,n9=0,pJ=1,fJ=2,N8=0,L7=1,mQ=2,dQ=3,uQ=4,wZ=5;var p8=100,AZ=101,TZ=102,SZ=103,jZ=104,vZ=200,yZ=201,hZ=202,fZ=203,bZ=204,xZ=205,gZ=206,pZ=207,lZ=208,mZ=209,dZ=210,uZ=211,cZ=212,nZ=213,sZ=214,iZ=0,oZ=1,aZ=2,cQ=3,rZ=4,tZ=5,eZ=6,JK=7,QK=0,$K=1,WK=2,O9=0,nQ=1,sQ=2,iQ=3,oQ=4,aQ=5,rQ=6,tQ=7;var M7=301,l8=302,z6=303,_6=304,m8=1000,d8=1001,P6=1002,U9=1003,C6=1004;var q8=1005;var jJ=1006,u8=1007;var G9=1008;var E9=1009,ZK=1010,KK=1011,V7=1012,eQ=1013,s9=1014,j9=1015,R9=1016,J$=1017,Q$=1018,F8=1020,HK=35902,YK=35899,XK=1021,UK=1022,v9=1023,c8=1026,i9=1027,GK=1028,$$=1029,O8=1030,W$=1031;var Z$=1033,I6=33776,w6=33777,A6=33778,T6=33779,K$=35840,H$=35841,Y$=35842,X$=35843,U$=36196,G$=37492,E$=37496,N$=37488,q$=37489,S6=37490,F$=37491,O$=37808,R$=37809,L$=37810,M$=37811,V$=37812,D$=37813,k$=37814,B$=37815,z$=37816,_$=37817,P$=37818,C$=37819,I$=37820,w$=37821,A$=36492,T$=36494,S$=36495,j$=36283,v$=36284,j6=36285,y$=36286;var h$=2300,v6=2301;var f$=0,D7=1,n8=2;var b$=0,EK=1,R8="",L9="srgb",cJ="srgb-linear",x$="linear",QJ="srgb";var NK=512,qK=513,FK=514,g$=515,OK=516,RK=517,p$=518,l$=519;var m$="300 es",d$=2000;function $Y(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function WY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function b8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function LK(){let J=b8("canvas");return J.style.display="block",J}var xW={},x8=null;function O7(...J){let Q="THREE."+J.shift();if(x8)x8("log",Q,...J);else console.log(Q,...J)}function MK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function _0(...J){J=MK(J);let Q="THREE."+J.shift();if(x8)x8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function S0(...J){J=MK(J);let Q="THREE."+J.shift();if(x8)x8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function U8(...J){let Q=J.join(" ");if(Q in xW)return;xW[Q]=!0,_0(...J)}function VK(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var DK={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class y9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var AJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gW=1234567,q7=Math.PI/180,G8=180/Math.PI;function M9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(AJ[J&255]+AJ[J>>8&255]+AJ[J>>16&255]+AJ[J>>24&255]+"-"+AJ[Q&255]+AJ[Q>>8&255]+"-"+AJ[Q>>16&15|64]+AJ[Q>>24&255]+"-"+AJ[$&63|128]+AJ[$>>8&255]+"-"+AJ[$>>16&255]+AJ[$>>24&255]+AJ[W&255]+AJ[W>>8&255]+AJ[W>>16&255]+AJ[W>>24&255]).toLowerCase()}function d0(J,Q,$){return Math.max(Q,Math.min($,J))}function u$(J,Q){return(J%Q+Q)%Q}function ZY(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function KY(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function F7(J,Q,$){return(1-$)*J+$*Q}function HY(J,Q,$,W){return F7(J,Q,1-Math.exp(-$*W))}function YY(J,Q=1){return Q-Math.abs(u$(J,Q*2)-Q)}function XY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function UY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function GY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function EY(J,Q){return J+Math.random()*(Q-J)}function NY(J){return J*(0.5-Math.random())}function qY(J){if(J!==void 0)gW=J;let Q=gW+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function FY(J){return J*q7}function OY(J){return J*G8}function RY(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function LY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function c$(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function MY(J,Q,$,W,Z){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+W)/2),G=H((Q+W)/2),N=K((Q-W)/2),E=H((Q-W)/2),O=K((W-Q)/2),L=H((W-Q)/2);switch(Z){case"XYX":J.set(Y*G,X*N,X*E,Y*U);break;case"YZY":J.set(X*E,Y*G,X*N,Y*U);break;case"ZXZ":J.set(X*N,X*E,Y*G,Y*U);break;case"XZX":J.set(Y*G,X*L,X*O,Y*U);break;case"YXY":J.set(X*O,Y*G,X*L,Y*U);break;case"ZYZ":J.set(X*L,X*O,Y*G,Y*U);break;default:_0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function y6(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function n$(J,Q){if(Q.constructor===Float32Array)return J;let $=y6(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/$,-1)}function s$(J,Q){if(Q.constructor===Float32Array)return J;let $=y6(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*$)}var L8={DEG2RAD:q7,RAD2DEG:G8,generateUUID:M9,clamp:d0,euclideanModulo:u$,mapLinear:ZY,inverseLerp:KY,lerp:F7,damp:HY,pingpong:YY,smoothstep:XY,smootherstep:UY,randInt:GY,randFloat:EY,randFloatSpread:NY,seededRandom:qY,degToRad:FY,radToDeg:OY,isPowerOfTwo:RY,ceilPowerOfTwo:LY,floorPowerOfTwo:c$,setQuaternionFromProperEuler:MY,normalize:s$,denormalize:n$};class h0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=d0(this.x,J.x,Q.x),this.y=d0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=d0(this.x,J,Q),this.y=d0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(d0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(d0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class eJ{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let Y=$[W+0],X=$[W+1],U=$[W+2],G=$[W+3],N=Z[K+0],E=Z[K+1],O=Z[K+2],L=Z[K+3];if(G!==L||Y!==N||X!==E||U!==O){let k=Y*N+X*E+U*O+G*L;if(k<0)N=-N,E=-E,O=-O,L=-L,k=-k;let F=1-H;if(k<0.9995){let q=Math.acos(k),D=Math.sin(q);F=Math.sin(F*q)/D,H=Math.sin(H*q)/D,Y=Y*F+N*H,X=X*F+E*H,U=U*F+O*H,G=G*F+L*H}else{Y=Y*F+N*H,X=X*F+E*H,U=U*F+O*H,G=G*F+L*H;let q=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=q,X*=q,U*=q,G*=q}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],G=Z[K],N=Z[K+1],E=Z[K+2],O=Z[K+3];return J[Q]=H*O+U*G+Y*E-X*N,J[Q+1]=Y*O+U*N+X*G-H*E,J[Q+2]=X*O+U*E+H*N-Y*G,J[Q+3]=U*O-H*G-Y*N-X*E,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(W/2),G=H(Z/2),N=Y($/2),E=Y(W/2),O=Y(Z/2);switch(K){case"XYZ":this._x=N*U*G+X*E*O,this._y=X*E*G-N*U*O,this._z=X*U*O+N*E*G,this._w=X*U*G-N*E*O;break;case"YXZ":this._x=N*U*G+X*E*O,this._y=X*E*G-N*U*O,this._z=X*U*O-N*E*G,this._w=X*U*G+N*E*O;break;case"ZXY":this._x=N*U*G-X*E*O,this._y=X*E*G+N*U*O,this._z=X*U*O+N*E*G,this._w=X*U*G-N*E*O;break;case"ZYX":this._x=N*U*G-X*E*O,this._y=X*E*G+N*U*O,this._z=X*U*O-N*E*G,this._w=X*U*G+N*E*O;break;case"YZX":this._x=N*U*G+X*E*O,this._y=X*E*G+N*U*O,this._z=X*U*O-N*E*G,this._w=X*U*G-N*E*O;break;case"XZY":this._x=N*U*G-X*E*O,this._y=X*E*G-N*U*O,this._z=X*U*O+N*E*G,this._w=X*U*G+N*E*O;break;default:_0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],N=$+H+G;if(N>0){let E=0.5/Math.sqrt(N+1);this._w=0.25/E,this._x=(U-Y)*E,this._y=(Z-X)*E,this._z=(K-W)*E}else if($>H&&$>G){let E=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/E,this._x=0.25*E,this._y=(W+K)/E,this._z=(Z+X)/E}else if(H>G){let E=2*Math.sqrt(1+H-$-G);this._w=(Z-X)/E,this._x=(W+K)/E,this._y=0.25*E,this._z=(Y+U)/E}else{let E=2*Math.sqrt(1+G-$-H);this._w=(K-W)/E,this._x=(Z+X)/E,this._y=(Y+U)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(d0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+W*X-Z*Y,this._y=W*U+K*Y+Z*H-$*X,this._z=Z*U+K*X+$*Y-W*H,this._w=K*U-$*H-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(pW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(pW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*W-H*$),U=2*(H*Q-Z*W),G=2*(Z*$-K*Q);return this.x=Q+Y*X+K*G-H*U,this.y=$+Y*U+H*X-Z*G,this.z=W+Y*G+Z*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=d0(this.x,J.x,Q.x),this.y=d0(this.y,J.y,Q.y),this.z=d0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=d0(this.x,J,Q),this.y=d0(this.y,J,Q),this.z=d0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(d0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=W*Y-Z*H,this.y=Z*K-$*Y,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return RQ.copy(this).projectOnVector(J),this.sub(RQ)}reflect(J){return this.sub(RQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(d0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var RQ=new y,pW=new eJ;class j0{static{this.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X)}set(J,Q,$,W,Z,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],G=$[7],N=$[2],E=$[5],O=$[8],L=W[0],k=W[3],F=W[6],q=W[1],D=W[4],_=W[7],z=W[2],C=W[5],I=W[8];return Z[0]=K*L+H*q+Y*z,Z[3]=K*k+H*D+Y*C,Z[6]=K*F+H*_+Y*I,Z[1]=X*L+U*q+G*z,Z[4]=X*k+U*D+G*C,Z[7]=X*F+U*_+G*I,Z[2]=N*L+E*q+O*z,Z[5]=N*k+E*D+O*C,Z[8]=N*F+E*_+O*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*Z*U+$*H*Y+W*Z*X-W*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*K-H*X,N=H*Y-U*Z,E=X*Z-K*Y,O=Q*G+$*N+W*E;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/O;return J[0]=G*L,J[1]=(W*X-U*$)*L,J[2]=(H*$-W*K)*L,J[3]=N*L,J[4]=(U*Q-W*Y)*L,J[5]=(W*Z-H*Q)*L,J[6]=E*L,J[7]=($*Y-X*Q)*L,J[8]=(K*Q-$*Z)*L,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-W*X,W*Y,-W*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return U8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(LQ.makeScale(J,Q)),this}rotate(J){return U8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(LQ.makeRotation(-J)),this}translate(J,Q){return U8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(LQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var LQ=new j0,lW=new j0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),mW=new j0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function VY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=T9(Z.r),Z.g=T9(Z.g),Z.b=T9(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=f8(Z.r),Z.g=f8(Z.g),Z.b=f8(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[H].fromXYZ).multiply(this.spaces[K].toXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:lW,fromXYZ:mW,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:lW,fromXYZ:mW,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var p0=VY();function T9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function f8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var B8;class i${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(B8===void 0)B8=b8("canvas");B8.width=J.width,B8.height=J.height;let W=B8.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=B8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=b8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=T9(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(T9(Q[$]/255)*255);else Q[$]=T9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return _0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var DY=0;class k7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:DY++}),this.uuid=M9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push(MQ(W[K].image));else Z.push(MQ(W[K]))}else Z=MQ(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function MQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return i$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return _0("Texture: Unable to serialize Texture."),{}}var kY=0,VQ=new y;class FJ extends y9{constructor(J=FJ.DEFAULT_IMAGE,Q=FJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,Y=1009,X=FJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:kY++}),this.uuid=M9(),this.name="",this.source=new k7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new h0(0,0),this.repeat=new h0(1,1),this.center=new h0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new j0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(VQ).x}get height(){return this.source.getSize(VQ).y}get depth(){return this.source.getSize(VQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){_0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){_0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}FJ.DEFAULT_IMAGE=null;FJ.DEFAULT_MAPPING=300;FJ.DEFAULT_ANISOTROPY=1;class e0{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],N=Y[1],E=Y[5],O=Y[9],L=Y[2],k=Y[6],F=Y[10];if(Math.abs(U-N)<0.01&&Math.abs(G-L)<0.01&&Math.abs(O-k)<0.01){if(Math.abs(U+N)<0.1&&Math.abs(G+L)<0.1&&Math.abs(O+k)<0.1&&Math.abs(X+E+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let D=(X+1)/2,_=(E+1)/2,z=(F+1)/2,C=(U+N)/4,I=(G+L)/4,R=(O+k)/4;if(D>_&&D>z)if(D<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(D),W=C/$,Z=I/$;else if(_>z)if(_<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(_),$=C/W,Z=R/W;else if(z<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(z),$=I/Z,W=R/Z;return this.set($,W,Z,Q),this}let q=Math.sqrt((k-O)*(k-O)+(G-L)*(G-L)+(N-U)*(N-U));if(Math.abs(q)<0.001)q=1;return this.x=(k-O)/q,this.y=(G-L)/q,this.z=(N-U)/q,this.w=Math.acos((X+E+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=d0(this.x,J.x,Q.x),this.y=d0(this.y,J.y,Q.y),this.z=d0(this.z,J.z,Q.z),this.w=d0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=d0(this.x,J,Q),this.y=d0(this.y,J,Q),this.z=d0(this.z,J,Q),this.w=d0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(d0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o$ extends y9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new e0(0,0,J,Q),this.scissorTest=!1,this.viewport=new e0(0,0,J,Q),this.textures=[];let W=$.count;for(let Z=0;Z<W;Z++)this.textures[Z]=new FJ({width:J,height:Q,depth:$.depth}),this.textures[Z].isRenderTargetTexture=!0,this.textures[Z].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new k7(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class J9 extends o${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class h6 extends FJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class a$ extends FJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class f0{static{this.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,Y,X,U,G,N,E,O,L,k){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X,U,G,N,E,O,L,k)}set(J,Q,$,W,Z,K,H,Y,X,U,G,N,E,O,L,k){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=$,F[12]=W,F[1]=Z,F[5]=K,F[9]=H,F[13]=Y,F[2]=X,F[6]=U,F[10]=G,F[14]=N,F[3]=E,F[7]=O,F[11]=L,F[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new f0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/z8.setFromMatrixColumn(J,0).length(),Z=1/z8.setFromMatrixColumn(J,1).length(),K=1/z8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),G=Math.sin(Z);if(J.order==="XYZ"){let N=K*U,E=K*G,O=H*U,L=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=E+O*X,Q[5]=N-L*X,Q[9]=-H*Y,Q[2]=L-N*X,Q[6]=O+E*X,Q[10]=K*Y}else if(J.order==="YXZ"){let N=Y*U,E=Y*G,O=X*U,L=X*G;Q[0]=N+L*H,Q[4]=O*H-E,Q[8]=K*X,Q[1]=K*G,Q[5]=K*U,Q[9]=-H,Q[2]=E*H-O,Q[6]=L+N*H,Q[10]=K*Y}else if(J.order==="ZXY"){let N=Y*U,E=Y*G,O=X*U,L=X*G;Q[0]=N-L*H,Q[4]=-K*G,Q[8]=O+E*H,Q[1]=E+O*H,Q[5]=K*U,Q[9]=L-N*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let N=K*U,E=K*G,O=H*U,L=H*G;Q[0]=Y*U,Q[4]=O*X-E,Q[8]=N*X+L,Q[1]=Y*G,Q[5]=L*X+N,Q[9]=E*X-O,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let N=K*Y,E=K*X,O=H*Y,L=H*X;Q[0]=Y*U,Q[4]=L-N*G,Q[8]=O*G+E,Q[1]=G,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=E*G+O,Q[10]=N-L*G}else if(J.order==="XZY"){let N=K*Y,E=K*X,O=H*Y,L=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=N*G+L,Q[5]=K*U,Q[9]=E*G-O,Q[2]=O*G-E,Q[6]=H*U,Q[10]=L*G+N}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(BY,J,zY)}lookAt(J,Q,$){let W=this.elements;if(dJ.subVectors(J,Q),dJ.lengthSq()===0)dJ.z=1;if(dJ.normalize(),g9.crossVectors($,dJ),g9.lengthSq()===0){if(Math.abs($.z)===1)dJ.x+=0.0001;else dJ.z+=0.0001;dJ.normalize(),g9.crossVectors($,dJ)}return g9.normalize(),a7.crossVectors(dJ,g9),W[0]=g9.x,W[4]=a7.x,W[8]=dJ.x,W[1]=g9.y,W[5]=a7.y,W[9]=dJ.y,W[2]=g9.z,W[6]=a7.z,W[10]=dJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],G=$[5],N=$[9],E=$[13],O=$[2],L=$[6],k=$[10],F=$[14],q=$[3],D=$[7],_=$[11],z=$[15],C=W[0],I=W[4],R=W[8],B=W[12],S=W[1],g=W[5],j=W[9],l=W[13],t=W[2],A=W[6],s=W[10],o=W[14],x=W[3],K0=W[7],u=W[11],r=W[15];return Z[0]=K*C+H*S+Y*t+X*x,Z[4]=K*I+H*g+Y*A+X*K0,Z[8]=K*R+H*j+Y*s+X*u,Z[12]=K*B+H*l+Y*o+X*r,Z[1]=U*C+G*S+N*t+E*x,Z[5]=U*I+G*g+N*A+E*K0,Z[9]=U*R+G*j+N*s+E*u,Z[13]=U*B+G*l+N*o+E*r,Z[2]=O*C+L*S+k*t+F*x,Z[6]=O*I+L*g+k*A+F*K0,Z[10]=O*R+L*j+k*s+F*u,Z[14]=O*B+L*l+k*o+F*r,Z[3]=q*C+D*S+_*t+z*x,Z[7]=q*I+D*g+_*A+z*K0,Z[11]=q*R+D*j+_*s+z*u,Z[15]=q*B+D*l+_*o+z*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],N=J[10],E=J[14],O=J[3],L=J[7],k=J[11],F=J[15],q=Y*E-X*N,D=H*E-X*G,_=H*N-Y*G,z=K*E-X*U,C=K*N-Y*U,I=K*G-H*U;return Q*(L*q-k*D+F*_)-$*(O*q-k*z+F*C)+W*(O*D-L*z+F*I)-Z*(O*_-L*C+k*I)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(Z*U-H*Y)+W*(Z*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],N=J[10],E=J[11],O=J[12],L=J[13],k=J[14],F=J[15],q=Q*H-$*K,D=Q*Y-W*K,_=Q*X-Z*K,z=$*Y-W*H,C=$*X-Z*H,I=W*X-Z*Y,R=U*L-G*O,B=U*k-N*O,S=U*F-E*O,g=G*k-N*L,j=G*F-E*L,l=N*F-E*k,t=q*l-D*j+_*g+z*S-C*B+I*R;if(t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/t;return J[0]=(H*l-Y*j+X*g)*A,J[1]=(W*j-$*l-Z*g)*A,J[2]=(L*I-k*C+F*z)*A,J[3]=(N*C-G*I-E*z)*A,J[4]=(Y*S-K*l-X*B)*A,J[5]=(Q*l-W*S+Z*B)*A,J[6]=(k*_-O*I-F*D)*A,J[7]=(U*I-N*_+E*D)*A,J[8]=(K*j-H*S+X*R)*A,J[9]=($*S-Q*j-Z*R)*A,J[10]=(O*C-L*_+F*q)*A,J[11]=(G*_-U*C-E*q)*A,J[12]=(H*B-K*g-Y*R)*A,J[13]=(Q*g-$*B+W*R)*A,J[14]=(L*D-O*z-k*q)*A,J[15]=(U*z-G*D+N*q)*A,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,Y=J.z,X=Z*K,U=Z*H;return this.set(X*K+$,X*H-W*Y,X*Y+W*H,0,X*H+W*Y,U*H+$,U*Y-W*K,0,X*Y-W*H,U*Y+W*K,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=Z+Z,U=K+K,G=H+H,N=Z*X,E=Z*U,O=Z*G,L=K*U,k=K*G,F=H*G,q=Y*X,D=Y*U,_=Y*G,z=$.x,C=$.y,I=$.z;return W[0]=(1-(L+F))*z,W[1]=(E+_)*z,W[2]=(O-D)*z,W[3]=0,W[4]=(E-_)*C,W[5]=(1-(N+F))*C,W[6]=(k+q)*C,W[7]=0,W[8]=(O+D)*I,W[9]=(k-q)*I,W[10]=(1-(N+L))*I,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=z8.set(W[0],W[1],W[2]).length(),H=z8.set(W[4],W[5],W[6]).length(),Y=z8.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;H9.copy(this);let X=1/K,U=1/H,G=1/Y;return H9.elements[0]*=X,H9.elements[1]*=X,H9.elements[2]*=X,H9.elements[4]*=U,H9.elements[5]*=U,H9.elements[6]*=U,H9.elements[8]*=G,H9.elements[9]*=G,H9.elements[10]*=G,Q.setFromRotationMatrix(H9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),G=2*Z/($-W),N=(Q+J)/(Q-J),E=($+W)/($-W),O,L;if(Y)O=Z/(K-Z),L=K*Z/(K-Z);else if(H===2000)O=-(K+Z)/(K-Z),L=-2*K*Z/(K-Z);else if(H===2001)O=-K/(K-Z),L=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=N,X[12]=0,X[1]=0,X[5]=G,X[9]=E,X[13]=0,X[2]=0,X[6]=0,X[10]=O,X[14]=L,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),G=2/($-W),N=-(Q+J)/(Q-J),E=-($+W)/($-W),O,L;if(Y)O=1/(K-Z),L=K/(K-Z);else if(H===2000)O=-2/(K-Z),L=-(K+Z)/(K-Z);else if(H===2001)O=-1/(K-Z),L=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=N,X[1]=0,X[5]=G,X[9]=0,X[13]=E,X[2]=0,X[6]=0,X[10]=O,X[14]=L,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var z8=new y,H9=new f0,BY=new y(0,0,0),zY=new y(1,1,1),g9=new y,a7=new y,dJ=new y,dW=new f0,uW=new eJ;class S9{constructor(J=0,Q=0,$=0,W=S9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],Y=W[1],X=W[5],U=W[9],G=W[2],N=W[6],E=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(d0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,E),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(N,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-d0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,E),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(d0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-G,E),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-d0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(N,E),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(d0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,Z);else this._x=0,this._y=Math.atan2(H,E);break;case"XZY":if(this._z=Math.asin(-d0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(N,X),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,E),this._y=0;break;default:_0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return dW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(dW,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return uW.setFromEuler(this),this.setFromQuaternion(uW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}S9.DEFAULT_ORDER="XYZ";class f6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var _Y=0,cW=new y,_8=new eJ,_9=new f0,r7=new y,Z7=new y,PY=new y,CY=new eJ,nW=new y(1,0,0),sW=new y(0,1,0),iW=new y(0,0,1),oW={type:"added"},IY={type:"removed"},P8={type:"childadded",child:null},DQ={type:"childremoved",child:null};class ZJ extends y9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:_Y++}),this.uuid=M9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ZJ.DEFAULT_UP.clone();let J=new y,Q=new S9,$=new eJ,W=new y(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new f0},normalMatrix:{value:new j0}}),this.matrix=new f0,this.matrixWorld=new f0,this.matrixAutoUpdate=ZJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ZJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return _8.setFromAxisAngle(J,Q),this.quaternion.multiply(_8),this}rotateOnWorldAxis(J,Q){return _8.setFromAxisAngle(J,Q),this.quaternion.premultiply(_8),this}rotateX(J){return this.rotateOnAxis(nW,J)}rotateY(J){return this.rotateOnAxis(sW,J)}rotateZ(J){return this.rotateOnAxis(iW,J)}translateOnAxis(J,Q){return cW.copy(J).applyQuaternion(this.quaternion),this.position.add(cW.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(nW,J)}translateY(J){return this.translateOnAxis(sW,J)}translateZ(J){return this.translateOnAxis(iW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(_9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)r7.copy(J);else r7.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),Z7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)_9.lookAt(Z7,r7,this.up);else _9.lookAt(r7,Z7,this.up);if(this.quaternion.setFromRotationMatrix(_9),W)_9.extractRotation(W.matrixWorld),_8.setFromRotationMatrix(_9),this.quaternion.premultiply(_8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return S0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(oW),P8.child=J,this.dispatchEvent(P8),P8.child=null;else S0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(IY),DQ.child=J,this.dispatchEvent(DQ),DQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),_9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),_9.multiply(J.parent.matrixWorld);return J.applyMatrix4(_9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(oW),P8.child=J,this.dispatchEvent(P8),P8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Z7,J,PY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Z7,CY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];Z(J.shapes,G)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(Z(J.materials,this.material[Y]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];W.animations.push(Z(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),G=K(J.shapes),N=K(J.skeletons),E=K(J.animations),O=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(N.length>0)$.skeletons=N;if(E.length>0)$.animations=E;if(O.length>0)$.nodes=O}return $.object=W,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ZJ.DEFAULT_UP=new y(0,1,0);ZJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;ZJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tJ extends ZJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var wY={type:"move"};class B7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new tJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new tJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new tJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let L of J.hand.values()){let k=Q.getJointPose(L,$),F=this._getHandJoint(X,L);if(k!==null)F.matrix.fromArray(k.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=k.radius;F.visible=k!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],N=U.position.distanceTo(G.position),E=0.02,O=0.005;if(X.inputState.pinching&&N>E+O)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&N<=E-O)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(wY)}}}if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new tJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var kK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},p9={h:0,s:0,l:0},t7={h:0,s:0,l:0};function kQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class T0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,p0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=p0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,p0.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=p0.workingColorSpace){if(J=u$(J,1),Q=d0(Q,0,1),$=d0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=kQ(K,Z,J+0.3333333333333333),this.g=kQ(K,Z,J),this.b=kQ(K,Z,J-0.3333333333333333)}return p0.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)_0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseFloat(Z[1]))/100,Math.min(100,parseFloat(Z[2]))/100,Math.min(100,parseFloat(Z[3]))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:_0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else _0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=kK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else _0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=T9(J.r),this.g=T9(J.g),this.b=T9(J.b),this}copyLinearToSRGB(J){return this.r=f8(J.r),this.g=f8(J.g),this.b=f8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return p0.workingToColorSpace(TJ.copy(this),J),Math.round(d0(TJ.r*255,0,255))*65536+Math.round(d0(TJ.g*255,0,255))*256+Math.round(d0(TJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=p0.workingColorSpace){p0.workingToColorSpace(TJ.copy(this),Q);let{r:$,g:W,b:Z}=TJ,K=Math.max($,W,Z),H=Math.min($,W,Z),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let G=K-H;switch(X=U<=0.5?G/(K+H):G/(2-K-H),K){case $:Y=(W-Z)/G+(W<Z?6:0);break;case W:Y=(Z-$)/G+2;break;case Z:Y=($-W)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=p0.workingColorSpace){return p0.workingToColorSpace(TJ.copy(this),Q),J.r=TJ.r,J.g=TJ.g,J.b=TJ.b,J}getStyle(J="srgb"){p0.workingToColorSpace(TJ.copy(this),J);let{r:Q,g:$,b:W}=TJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(p9),this.setHSL(p9.h+J,p9.s+Q,p9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(p9),J.getHSL(t7);let $=F7(p9.h,t7.h,Q),W=F7(p9.s,t7.s,Q),Z=F7(p9.l,t7.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var TJ=new T0;T0.NAMES=kK;class b6 extends ZJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new S9,this.environmentIntensity=1,this.environmentRotation=new S9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){return super.copy(J,Q),this.background=J.background!==null?J.background.clone():null,this.environment=J.environment!==null?J.environment.clone():null,this.fog=J.fog!==null?J.fog.clone():null,this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),this.overrideMaterial=J.overrideMaterial!==null?J.overrideMaterial.clone():null,this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var Y9=new y,P9=new y,BQ=new y,C9=new y,C8=new y,I8=new y,aW=new y,zQ=new y,_Q=new y,PQ=new y,CQ=new e0,IQ=new e0,wQ=new e0;class rJ{constructor(J=new y,Q=new y,$=new y){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),Y9.subVectors(J,Q),W.cross(Y9);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){Y9.subVectors(W,Q),P9.subVectors($,Q),BQ.subVectors(J,Q);let K=Y9.dot(Y9),H=Y9.dot(P9),Y=Y9.dot(BQ),X=P9.dot(P9),U=P9.dot(BQ),G=K*X-H*H;if(G===0)return Z.set(0,0,0),null;let N=1/G,E=(X*Y-H*U)*N,O=(K*U-H*Y)*N;return Z.set(1-E-O,O,E)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,C9)===null)return!1;return C9.x>=0&&C9.y>=0&&C9.x+C9.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,Y){if(this.getBarycoord(J,Q,$,W,C9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,C9.x),Y.addScaledVector(K,C9.y),Y.addScaledVector(H,C9.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,K){return CQ.setScalar(0),IQ.setScalar(0),wQ.setScalar(0),CQ.fromBufferAttribute(J,Q),IQ.fromBufferAttribute(J,$),wQ.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(CQ,Z.x),K.addScaledVector(IQ,Z.y),K.addScaledVector(wQ,Z.z),K}static isFrontFacing(J,Q,$,W){return Y9.subVectors($,Q),P9.subVectors(J,Q),Y9.cross(P9).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Y9.subVectors(this.c,this.b),P9.subVectors(this.a,this.b),Y9.cross(P9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return rJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return rJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return rJ.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return rJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return rJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;C8.subVectors(W,$),I8.subVectors(Z,$),zQ.subVectors(J,$);let Y=C8.dot(zQ),X=I8.dot(zQ);if(Y<=0&&X<=0)return Q.copy($);_Q.subVectors(J,W);let U=C8.dot(_Q),G=I8.dot(_Q);if(U>=0&&G<=U)return Q.copy(W);let N=Y*G-U*X;if(N<=0&&Y>=0&&U<=0&&Y-U>0)return K=Y/(Y-U),Q.copy($).addScaledVector(C8,K);PQ.subVectors(J,Z);let E=C8.dot(PQ),O=I8.dot(PQ);if(O>=0&&E<=O)return Q.copy(Z);let L=E*X-Y*O;if(L<=0&&X>=0&&O<=0)return H=X/(X-O),Q.copy($).addScaledVector(I8,H);let k=U*O-E*G;if(k<=0&&G-U>=0&&E-O>=0)return aW.subVectors(Z,W),H=(G-U)/(G-U+(E-O)),Q.copy(W).addScaledVector(aW,H);let F=1/(k+L+N);return K=L*F,H=N*F,Q.copy($).addScaledVector(C8,K).addScaledVector(I8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class Q9{constructor(J=new y(1/0,1/0,1/0),Q=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(X9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(X9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=X9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,X9);else X9.fromBufferAttribute(Z,K);X9.applyMatrix4(J.matrixWorld),this.expandByPoint(X9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();e7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();e7.copy($.boundingBox)}e7.applyMatrix4(J.matrixWorld),this.union(e7)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,X9),X9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(K7),J6.subVectors(this.max,K7),w8.subVectors(J.a,K7),A8.subVectors(J.b,K7),T8.subVectors(J.c,K7),l9.subVectors(A8,w8),m9.subVectors(T8,A8),K8.subVectors(w8,T8);let Q=[0,-l9.z,l9.y,0,-m9.z,m9.y,0,-K8.z,K8.y,l9.z,0,-l9.x,m9.z,0,-m9.x,K8.z,0,-K8.x,-l9.y,l9.x,0,-m9.y,m9.x,0,-K8.y,K8.x,0];if(!AQ(Q,w8,A8,T8,J6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!AQ(Q,w8,A8,T8,J6))return!1;return Q6.crossVectors(l9,m9),Q=[Q6.x,Q6.y,Q6.z],AQ(Q,w8,A8,T8,J6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,X9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(X9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return I9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),I9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),I9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),I9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),I9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),I9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),I9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),I9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(I9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var I9=[new y,new y,new y,new y,new y,new y,new y,new y],X9=new y,e7=new Q9,w8=new y,A8=new y,T8=new y,l9=new y,m9=new y,K8=new y,K7=new y,J6=new y,Q6=new y,H8=new y;function AQ(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){H8.fromArray(J,K);let Y=Z.x*Math.abs(H8.x)+Z.y*Math.abs(H8.y)+Z.z*Math.abs(H8.z),X=Q.dot(H8),U=$.dot(H8),G=W.dot(H8);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var qJ=new y,$6=new h0,AY=0;class SJ extends y9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?y6(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)$6.fromBufferAttribute(this,Q),$6.applyMatrix3(J),this.setXY(Q,$6.x,$6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)qJ.fromBufferAttribute(this,Q),qJ.applyMatrix3(J),this.setXYZ(Q,qJ.x,qJ.y,qJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)qJ.fromBufferAttribute(this,Q),qJ.applyMatrix4(J),this.setXYZ(Q,qJ.x,qJ.y,qJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)qJ.fromBufferAttribute(this,Q),qJ.applyNormalMatrix(J),this.setXYZ(Q,qJ.x,qJ.y,qJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)qJ.fromBufferAttribute(this,Q),qJ.transformDirection(J),this.setXYZ(Q,qJ.x,qJ.y,qJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):n$(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):s$(J,this.array)}}class x6 extends SJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class g6 extends SJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class YJ extends SJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var TY=new Q9,H7=new y,TQ=new y;class nJ{constructor(J=new y,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else TY.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;H7.subVectors(J,this.center);let Q=H7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(H7,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else TQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(H7.copy(J.center).add(TQ)),this.expandByPoint(H7.copy(J.center).sub(TQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var SY=0,aJ=new f0,SQ=new ZJ,S8=new y,uJ=new Q9,Y7=new Q9,DJ=new y;class _J extends y9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SY++}),this.uuid=M9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new(($Y(J))?g6:x6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new j0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return aJ.makeRotationFromQuaternion(J),this.applyMatrix4(aJ),this}rotateX(J){return aJ.makeRotationX(J),this.applyMatrix4(aJ),this}rotateY(J){return aJ.makeRotationY(J),this.applyMatrix4(aJ),this}rotateZ(J){return aJ.makeRotationZ(J),this.applyMatrix4(aJ),this}translate(J,Q,$){return aJ.makeTranslation(J,Q,$),this.applyMatrix4(aJ),this}scale(J,Q,$){return aJ.makeScale(J,Q,$),this.applyMatrix4(aJ),this}lookAt(J){return SQ.lookAt(J),SQ.updateMatrix(),this.applyMatrix4(SQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(S8).negate(),this.translate(S8.x,S8.y,S8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new YJ($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)_0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Q9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){S0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(uJ.setFromBufferAttribute(Z),this.morphTargetsRelative)DJ.addVectors(this.boundingBox.min,uJ.min),this.boundingBox.expandByPoint(DJ),DJ.addVectors(this.boundingBox.max,uJ.max),this.boundingBox.expandByPoint(DJ);else this.boundingBox.expandByPoint(uJ.min),this.boundingBox.expandByPoint(uJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))S0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new nJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){S0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(J){let $=this.boundingSphere.center;if(uJ.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(Y7.setFromBufferAttribute(H),this.morphTargetsRelative)DJ.addVectors(uJ.min,Y7.min),uJ.expandByPoint(DJ),DJ.addVectors(uJ.max,Y7.max),uJ.expandByPoint(DJ);else uJ.expandByPoint(Y7.min),uJ.expandByPoint(Y7.max)}uJ.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)DJ.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(DJ));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(DJ.fromBufferAttribute(H,X),Y)S8.fromBufferAttribute(J,X),DJ.add(S8);W=Math.max(W,$.distanceToSquared(DJ))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))S0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){S0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new SJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[],X=new Uint8Array($.count);for(let B=0;B<$.count;B++)H[B]=new y,Y[B]=new y;let U=new y,G=new y,N=new y,E=new h0,O=new h0,L=new h0,k=new y,F=new y;function q(B,S,g){X[B]=X[S]=X[g]=1,U.fromBufferAttribute($,B),G.fromBufferAttribute($,S),N.fromBufferAttribute($,g),E.fromBufferAttribute(Z,B),O.fromBufferAttribute(Z,S),L.fromBufferAttribute(Z,g),G.sub(U),N.sub(U),O.sub(E),L.sub(E);let j=1/(O.x*L.y-L.x*O.y);if(!isFinite(j))return;k.copy(G).multiplyScalar(L.y).addScaledVector(N,-O.y).multiplyScalar(j),F.copy(N).multiplyScalar(O.x).addScaledVector(G,-L.x).multiplyScalar(j),H[B].add(k),H[S].add(k),H[g].add(k),Y[B].add(F),Y[S].add(F),Y[g].add(F)}let D=this.groups;if(D.length===0)D=[{start:0,count:J.count}];for(let B=0,S=D.length;B<S;++B){let g=D[B],j=g.start,l=g.count;for(let t=j,A=j+l;t<A;t+=3)q(J.getX(t+0),J.getX(t+1),J.getX(t+2))}let _=new y,z=new y,C=new y,I=new y;function R(B){C.fromBufferAttribute(W,B),I.copy(C);let S=H[B];_.copy(S),_.sub(C.multiplyScalar(C.dot(S))).normalize(),z.crossVectors(I,S);let j=z.dot(Y[B])<0?-1:1;K.setXYZW(B,_.x,_.y,_.z,j)}for(let B=0,S=$.count;B<S;++B)if(X[B])R(B);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new SJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let N=0,E=$.count;N<E;N++)$.setXYZ(N,0,0,0);let W=new y,Z=new y,K=new y,H=new y,Y=new y,X=new y,U=new y,G=new y;if(J)for(let N=0,E=J.count;N<E;N+=3){let O=J.getX(N+0),L=J.getX(N+1),k=J.getX(N+2);W.fromBufferAttribute(Q,O),Z.fromBufferAttribute(Q,L),K.fromBufferAttribute(Q,k),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),H.fromBufferAttribute($,O),Y.fromBufferAttribute($,L),X.fromBufferAttribute($,k),H.add(U),Y.add(U),X.add(U),$.setXYZ(O,H.x,H.y,H.z),$.setXYZ(L,Y.x,Y.y,Y.z),$.setXYZ(k,X.x,X.y,X.z)}else for(let N=0,E=Q.count;N<E;N+=3)W.fromBufferAttribute(Q,N+0),Z.fromBufferAttribute(Q,N+1),K.fromBufferAttribute(Q,N+2),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),$.setXYZ(N+0,U.x,U.y,U.z),$.setXYZ(N+1,U.x,U.y,U.z),$.setXYZ(N+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)DJ.fromBufferAttribute(J,Q),DJ.normalize(),J.setXYZ(Q,DJ.x,DJ.y,DJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,N=new X.constructor(Y.length*U),E=0,O=0;for(let L=0,k=Y.length;L<k;L++){if(H.isInterleavedBufferAttribute)E=Y[L]*H.data.stride+H.offset;else E=Y[L]*U;for(let F=0;F<U;F++)N[O++]=X[E++]}return new SJ(N,U,G)}if(this.index===null)return _0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new _J,$=this.index.array,W=this.attributes;for(let H in W){let Y=W[H],X=J(Y,$);Q.setAttribute(H,X)}let Z=this.morphAttributes;for(let H in Z){let Y=[],X=Z[H];for(let U=0,G=X.length;U<G;U++){let N=X[U],E=J(N,$);Y.push(E)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,N=X.length;G<N;G++){let E=X[G];U.push(E.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],G=Z[X];for(let N=0,E=G.length;N<E;N++)U.push(G[N].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let G=K[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class z7{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=M9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=rW(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[Q]),W=new this.constructor($,this.stride);return W.setUsage(this.usage),W}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=rW(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=Array.from(new Uint32Array(this.array.slice(0).buffer));let $={uuid:this.uuid,buffer:Q,type:this.array.constructor.name,stride:this.stride};return $.usage=this.usage,$}}function rW(J){if(J.buffer._uuid===void 0)J.buffer._uuid=M9();if(J.byteOffset===0&&J.byteLength===J.buffer.byteLength)return J.buffer._uuid;return J.buffer._uuid+":"+J.byteOffset+":"+J.byteLength}var hJ=new y;class s8{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W,this._normalizationScale=J!==void 0?y6(J.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)hJ.fromBufferAttribute(this,Q),hJ.applyMatrix4(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)hJ.fromBufferAttribute(this,Q),hJ.applyNormalMatrix(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)hJ.fromBufferAttribute(this,Q),hJ.transformDirection(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=this._denormalize(Q);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=this._denormalize(Q);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=this._denormalize(Q);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=this._denormalize(Q);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W),Z=this._normalize(Z);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){O7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new SJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new s8(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){O7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):n$(J,this.data.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):s$(J,this.data.array)}}var jQ=new y,jY=new y,vY=new j0;class q9{constructor(J=new y(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=jQ.subVectors($,Q).cross(jY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(jQ),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||vY.getNormalMatrix(J),W=this.coplanarPoint(jQ).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var yY=0;class sJ extends y9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:yY++}),this.uuid=M9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new T0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){_0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){_0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)$.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)$.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let Y=Z[H];delete Y.metadata,K.push(Y)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new T0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new q9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new h0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new h0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var w9=new y,vQ=new y,W6=new y,Z6=new y;class i8{constructor(J=new y,Q=new y(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,w9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=w9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return w9.copy(this.origin).addScaledVector(this.direction,Q),w9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){vQ.copy(J).add(Q).multiplyScalar(0.5),W6.copy(Q).sub(J).normalize(),Z6.copy(this.origin).sub(vQ);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(W6),H=Z6.dot(this.direction),Y=-Z6.dot(W6),X=Z6.lengthSq(),U=Math.abs(1-K*K),G,N,E,O;if(U>0)if(G=K*Y-H,N=K*H-Y,O=Z*U,G>=0)if(N>=-O)if(N<=O){let L=1/U;G*=L,N*=L,E=G*(G+K*N+2*H)+N*(K*G+N+2*Y)+X}else N=Z,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*Y)+X;else N=-Z,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*Y)+X;else if(N<=-O)G=Math.max(0,-(-K*Z+H)),N=G>0?-Z:Math.min(Math.max(-Z,-Y),Z),E=-G*G+N*(N+2*Y)+X;else if(N<=O)G=0,N=Math.min(Math.max(-Z,-Y),Z),E=N*(N+2*Y)+X;else G=Math.max(0,-(K*Z+H)),N=G>0?Z:Math.min(Math.max(-Z,-Y),Z),E=-G*G+N*(N+2*Y)+X;else N=K>0?-Z:Z,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(W)W.copy(vQ).addScaledVector(W6,N);return E}intersectSphere(J,Q){if(J.radius<0)return null;w9.subVectors(J.center,this.origin);let $=w9.dot(this.direction),W=w9.dot(w9)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,N=this.origin;if(X>=0)$=(J.min.x-N.x)*X,W=(J.max.x-N.x)*X;else $=(J.max.x-N.x)*X,W=(J.min.x-N.x)*X;if(U>=0)Z=(J.min.y-N.y)*U,K=(J.max.y-N.y)*U;else Z=(J.max.y-N.y)*U,K=(J.min.y-N.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(G>=0)H=(J.min.z-N.z)*G,Y=(J.max.z-N.z)*G;else H=(J.max.z-N.z)*G,Y=(J.min.z-N.z)*G;if($>Y||H>W)return null;if(H>$||$!==$)$=H;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,w9)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,G=J.x-K.x,N=J.y-K.y,E=J.z-K.z,O=Q.x-K.x,L=Q.y-K.y,k=Q.z-K.z,F=$.x-K.x,q=$.y-K.y,D=$.z-K.z,_=Math.abs(Y),z=Math.abs(X),C=Math.abs(U),I,R,B,S,g,j,l,t,A,s,o,x;if(_>=z&&_>=C)if(B=Y,j=G,A=O,x=F,Y>=0)I=X,R=U,S=N,g=E,l=L,t=k,s=q,o=D;else I=U,R=X,S=E,g=N,l=k,t=L,s=D,o=q;else if(z>=C)if(B=X,j=N,A=L,x=q,X>=0)I=U,R=Y,S=E,g=G,l=k,t=O,s=D,o=F;else I=Y,R=U,S=G,g=E,l=O,t=k,s=F,o=D;else if(B=U,j=E,A=k,x=D,U>=0)I=Y,R=X,S=G,g=N,l=O,t=L,s=F,o=q;else I=X,R=Y,S=N,g=G,l=L,t=O,s=q,o=F;if(B===0)return null;let K0=I/B,u=R/B,r=1/B,$0=S-K0*j,k0=g-u*j,i=l-K0*A,Q0=t-u*A,V0=s-K0*x,I0=o-u*x,w0=V0*Q0-I0*i,D0=$0*I0-k0*V0,a0=i*k0-Q0*$0;if(W){if(w0<0||D0<0||a0<0)return null}else if((w0<0||D0<0||a0<0)&&(w0>0||D0>0||a0>0))return null;let m0=w0+D0+a0;if(m0===0)return null;let b0=r*(w0*j+D0*A+a0*x);if(m0>0?b0<0:b0>0)return null;return this.at(b0/m0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class iJ extends sJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new T0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new S9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var tW=new f0,Y8=new i8,K6=new nJ,eW=new y,H6=new y,Y6=new y,X6=new y,yQ=new y,U6=new y,JZ=new y,G6=new y;class BJ extends ZJ{constructor(J=new _J,Q=new iJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){U6.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=H[Y],G=Z[Y];if(U===0)continue;if(yQ.fromBufferAttribute(G,J),K)U6.addScaledVector(yQ,U);else U6.addScaledVector(yQ.sub(Q),U)}Q.add(U6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(K6.copy($.boundingSphere),K6.applyMatrix4(Z),Y8.copy(J.ray).recast(J.near),K6.containsPoint(Y8.origin)===!1){if(Y8.intersectSphere(K6,eW)===null)return;if(Y8.origin.distanceToSquared(eW)>(J.far-J.near)**2)return}if(tW.copy(Z).invert(),Y8.copy(J.ray).applyMatrix4(tW),$.boundingBox!==null){if(Y8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,Y8)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,G=Z.attributes.normal,N=Z.groups,E=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let O=0,L=N.length;O<L;O++){let k=N[O],F=K[k.materialIndex],q=Math.max(k.start,E.start),D=Math.min(H.count,Math.min(k.start+k.count,E.start+E.count));for(let _=q,z=D;_<z;_+=3){let C=H.getX(_),I=H.getX(_+1),R=H.getX(_+2);if(W=E6(this,F,J,$,X,U,G,C,I,R),W)W.faceIndex=Math.floor(_/3),W.face.materialIndex=k.materialIndex,Q.push(W)}}else{let O=Math.max(0,E.start),L=Math.min(H.count,E.start+E.count);for(let k=O,F=L;k<F;k+=3){let q=H.getX(k),D=H.getX(k+1),_=H.getX(k+2);if(W=E6(this,K,J,$,X,U,G,q,D,_),W)W.faceIndex=Math.floor(k/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(K))for(let O=0,L=N.length;O<L;O++){let k=N[O],F=K[k.materialIndex],q=Math.max(k.start,E.start),D=Math.min(Y.count,Math.min(k.start+k.count,E.start+E.count));for(let _=q,z=D;_<z;_+=3){let C=_,I=_+1,R=_+2;if(W=E6(this,F,J,$,X,U,G,C,I,R),W)W.faceIndex=Math.floor(_/3),W.face.materialIndex=k.materialIndex,Q.push(W)}}else{let O=Math.max(0,E.start),L=Math.min(Y.count,E.start+E.count);for(let k=O,F=L;k<F;k+=3){let q=k,D=k+1,_=k+2;if(W=E6(this,K,J,$,X,U,G,q,D,_),W)W.faceIndex=Math.floor(k/3),Q.push(W)}}}}function hY(J,Q,$,W,Z,K,H,Y){let X;if(Q.side===1)X=W.intersectTriangle(H,K,Z,!0,Y);else X=W.intersectTriangle(Z,K,H,Q.side===0,Y);if(X===null)return null;G6.copy(Y),G6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(G6);if(U<$.near||U>$.far)return null;return{distance:U,point:G6.clone(),object:J}}function E6(J,Q,$,W,Z,K,H,Y,X,U){J.getVertexPosition(Y,H6),J.getVertexPosition(X,Y6),J.getVertexPosition(U,X6);let G=hY(J,Q,$,W,H6,Y6,X6,JZ);if(G){let N=new y;if(rJ.getBarycoord(JZ,H6,Y6,X6,N),Z)G.uv=rJ.getInterpolatedAttribute(Z,Y,X,U,N,new h0);if(K)G.uv1=rJ.getInterpolatedAttribute(K,Y,X,U,N,new h0);if(H){if(G.normal=rJ.getInterpolatedAttribute(H,Y,X,U,N,new y),G.normal.dot(W.direction)>0)G.normal.multiplyScalar(-1)}let E={a:Y,b:X,c:U,normal:new y,materialIndex:0};rJ.getNormal(H6,Y6,X6,E.normal),G.face=E,G.barycoord=N}return G}var X7=new e0,QZ=new e0,$Z=new e0,fY=new e0,WZ=new f0,N6=new y,hQ=new nJ,ZZ=new f0,fQ=new i8;class p6 extends BJ{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new f0,this.bindMatrixInverse=new f0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new Q9;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,N6),this.boundingBox.expandByPoint(N6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new nJ;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,N6),this.boundingSphere.expandByPoint(N6)}copy(J,Q){return super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(hQ.copy(this.boundingSphere),hQ.applyMatrix4(W),J.ray.intersectsSphere(hQ)===!1)return;if(ZZ.copy(W).invert(),fQ.copy(J.ray).applyMatrix4(ZZ),this.boundingBox!==null){if(fQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,fQ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new e0,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else _0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(QZ.fromBufferAttribute(W.attributes.skinIndex,J),$Z.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)X7.copy(Q),Q.set(0,0,0,0);else X7.set(Q.x,Q.y,Q.z,1),Q.set(0,0,0);X7.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let K=$Z.getComponent(Z);if(K!==0){let H=QZ.getComponent(Z);WZ.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(fY.copy(X7).applyMatrix4(WZ),K)}}if(Q.isVector4)Q.w=X7.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class _7 extends ZJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class P7 extends FJ{constructor(J=null,Q=1,$=1,W,Z,K,H,Y,X=1003,U=1003,G,N){super(null,K,H,Y,X,U,W,Z,G,N);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var KZ=new f0,bY=new f0;class C7{constructor(J=[],Q=[]){this.uuid=M9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){_0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new f0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new f0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z]?J[Z].matrixWorld:bY;KZ.multiplyMatrices(H,Q[Z]),KZ.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new C7(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new P7(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],K=Q[Z];if(K===void 0)_0("Skeleton: No bone found with UUID:",Z),K=new _7;this.bones.push(K),this.boneInverses.push(new f0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W];J.bones.push(K.uuid);let H=$[W];J.boneInverses.push(H.toArray())}return J}}class c9 extends SJ{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var j8=new f0,HZ=new f0,q6=[],YZ=new Q9,xY=new f0,U7=new BJ,G7=new nJ;class l6 extends BJ{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new c9(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,xY)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new Q9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,j8),YZ.copy(J.boundingBox).applyMatrix4(j8),this.boundingBox.union(YZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new nJ;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,j8),G7.copy(J.boundingSphere).applyMatrix4(j8),this.boundingSphere.union(G7)}copy(J,Q){return super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),this.morphTexture=J.morphTexture!==null?J.morphTexture.clone():null,this.instanceColor=J.instanceColor!==null?J.instanceColor.clone():null,this.count=J.count,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,K=J*Z+1;for(let H=0;H<$.length;H++)$[H]=W[K+H]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(U7.geometry=this.geometry,U7.material=this.material,U7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(G7.copy(this.boundingSphere),G7.applyMatrix4($),J.ray.intersectsSphere(G7)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,j8),HZ.multiplyMatrices($,j8),U7.matrixWorld=HZ,U7.raycast(J,q6);for(let K=0,H=q6.length;K<H;K++){let Y=q6[K];Y.instanceId=Z,Y.object=this,Q.push(Y)}q6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new c9(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new P7(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=W*J;return Z[Y]=H,Z.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var X8=new nJ,gY=new h0(0.5,0.5),F6=new y;class E8{constructor(J=new q9,Q=new q9,$=new q9,W=new q9,Z=new q9,K=new q9){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],Y=Z[2],X=Z[3],U=Z[4],G=Z[5],N=Z[6],E=Z[7],O=Z[8],L=Z[9],k=Z[10],F=Z[11],q=Z[12],D=Z[13],_=Z[14],z=Z[15];if(W[0].setComponents(X-K,E-U,F-O,z-q).normalize(),W[1].setComponents(X+K,E+U,F+O,z+q).normalize(),W[2].setComponents(X+H,E+G,F+L,z+D).normalize(),W[3].setComponents(X-H,E-G,F-L,z-D).normalize(),$)W[4].setComponents(Y,N,k,_).normalize(),W[5].setComponents(X-Y,E-N,F-k,z-_).normalize();else if(W[4].setComponents(X-Y,E-N,F-k,z-_).normalize(),Q===2000)W[5].setComponents(X+Y,E+N,F+k,z+_).normalize();else if(Q===2001)W[5].setComponents(Y,N,k,_).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();X8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();X8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(X8)}intersectsSprite(J){X8.center.set(0,0,0);let Q=gY.distanceTo(J.center);return X8.radius=0.7071067811865476+Q,X8.applyMatrix4(J.matrixWorld),this.intersectsSphere(X8)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(F6.x=W.normal.x>0?J.max.x:J.min.x,F6.y=W.normal.y>0?J.max.y:J.min.y,F6.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(F6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var XZ=new f0;class m6{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,$=this._frustums;for(let W=0;W<Q.length;W++){let Z=Q[W];if(XZ.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$[W]===void 0)$[W]=new E8;$[W].setFromProjectionMatrix(XZ,Z.coordinateSystem,Z.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,$=J._frustums;for(let W=0;W<J._count;W++){if(Q[W]===void 0)Q[W]=new E8;Q[W].copy($[W])}return this._count=J._count,this}clone(){return new m6().copy(this)}}class I7 extends sJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new T0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var k6=new y,B6=new y,UZ=new f0,E7=new i8,O6=new nJ,bQ=new y,GZ=new y;class o8 extends ZJ{constructor(J=new _J,Q=new I7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)k6.fromBufferAttribute(Q,W-1),B6.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=k6.distanceTo(B6);J.setAttribute("lineDistance",new YJ($,1))}else _0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(O6.copy($.boundingSphere),O6.applyMatrix4(W),O6.radius+=Z,J.ray.intersectsSphere(O6)===!1)return;UZ.copy(W).invert(),E7.copy(J.ray).applyMatrix4(UZ);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,N=$.attributes.position;if(U!==null){let E=Math.max(0,K.start),O=Math.min(U.count,K.start+K.count);for(let L=E,k=O-1;L<k;L+=X){let F=U.getX(L),q=U.getX(L+1),D=R6(this,J,E7,Y,F,q,L);if(D)Q.push(D)}if(this.isLineLoop){let L=U.getX(O-1),k=U.getX(E),F=R6(this,J,E7,Y,L,k,O-1);if(F)Q.push(F)}}else{let E=Math.max(0,K.start),O=Math.min(N.count,K.start+K.count);for(let L=E,k=O-1;L<k;L+=X){let F=R6(this,J,E7,Y,L,L+1,L);if(F)Q.push(F)}if(this.isLineLoop){let L=R6(this,J,E7,Y,O-1,E,O-1);if(L)Q.push(L)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function R6(J,Q,$,W,Z,K,H){let Y=J.geometry.attributes.position;if(k6.fromBufferAttribute(Y,Z),B6.fromBufferAttribute(Y,K),$.distanceSqToSegment(k6,B6,bQ,GZ)>W)return;bQ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(bQ);if(U<Q.near||U>Q.far)return;return{distance:U,point:GZ.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var EZ=new y,NZ=new y;class d6 extends o8{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)EZ.fromBufferAttribute(Q,W),NZ.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+EZ.distanceTo(NZ);J.setAttribute("lineDistance",new YJ($,1))}else _0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u6 extends o8{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class w7 extends sJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new T0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var qZ=new f0,pQ=new i8,L6=new nJ,M6=new y;class c6 extends ZJ{constructor(J=new _J,Q=new w7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(L6.copy($.boundingSphere),L6.applyMatrix4(W),L6.radius+=Z,J.ray.intersectsSphere(L6)===!1)return;qZ.copy(W).invert(),pQ.copy(J.ray).applyMatrix4(qZ);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,G=$.attributes.position;if(X!==null){let N=Math.max(0,K.start),E=Math.min(X.count,K.start+K.count);for(let O=N,L=E;O<L;O++){let k=X.getX(O);M6.fromBufferAttribute(G,k),FZ(M6,k,Y,W,J,Q,this)}}else{let N=Math.max(0,K.start),E=Math.min(G.count,K.start+K.count);for(let O=N,L=E;O<L;O++)M6.fromBufferAttribute(G,O),FZ(M6,O,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function FZ(J,Q,$,W,Z,K,H){let Y=pQ.distanceSqToPoint(J);if(Y<$){let X=new y;pQ.closestPointToPoint(J,X),X.applyMatrix4(W);let U=Z.ray.origin.distanceTo(X);if(U<Z.near||U>Z.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class n6 extends FJ{constructor(J=[],Q=301,$,W,Z,K,H,Y,X,U){super(J,Q,$,W,Z,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class o9 extends FJ{constructor(J,Q,$=1014,W,Z,K,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:Q,depth:G};super(N,W,Z,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new k7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class s6 extends o9{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,Y,X);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class i6 extends FJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class a8 extends _J{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let Y=[],X=[],U=[],G=[],N=0,E=0;O("z","y","x",-1,-1,$,Q,J,K,Z,0),O("z","y","x",1,-1,$,Q,-J,K,Z,1),O("x","z","y",1,1,J,$,Q,W,K,2),O("x","z","y",1,-1,J,$,-Q,W,K,3),O("x","y","z",1,-1,J,Q,$,W,Z,4),O("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new YJ(X,3)),this.setAttribute("normal",new YJ(U,3)),this.setAttribute("uv",new YJ(G,2));function O(L,k,F,q,D,_,z,C,I,R,B){let S=_/I,g=z/R,j=_/2,l=z/2,t=C/2,A=I+1,s=R+1,o=0,x=0,K0=new y;for(let u=0;u<s;u++){let r=u*g-l;for(let $0=0;$0<A;$0++){let k0=$0*S-j;K0[L]=k0*q,K0[k]=r*D,K0[F]=t,X.push(K0.x,K0.y,K0.z),K0[L]=0,K0[k]=0,K0[F]=C>0?1:-1,U.push(K0.x,K0.y,K0.z),G.push($0/I),G.push(1-u/R),o+=1}}for(let u=0;u<R;u++)for(let r=0;r<I;r++){let $0=N+r+A*u,k0=N+r+A*(u+1),i=N+(r+1)+A*(u+1),Q0=N+(r+1)+A*u;Y.push($0,k0,Q0),Y.push(k0,i,Q0),x+=6}H.addGroup(E,x,B),E+=x,N+=o}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class A7 extends _J{constructor(J=1,Q=32,$=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:W},Q=Math.max(3,Q);let Z=[],K=[],H=[],Y=[],X=new y,U=new h0;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let G=0,N=3;G<=Q;G++,N+=3){let E=$+G/Q*W;X.x=J*Math.cos(E),X.y=J*Math.sin(E),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[N]/J+1)/2,U.y=(K[N+1]/J+1)/2,Y.push(U.x,U.y)}for(let G=1;G<=Q;G++)Z.push(G,G+1,0);this.setIndex(Z),this.setAttribute("position",new YJ(K,3)),this.setAttribute("normal",new YJ(H,3)),this.setAttribute("uv",new YJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new A7(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class o6 extends _J{constructor(J=[],Q=[],$=1,W=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:W};let Z=[],K=[];if(H(W),X($),U(),this.setAttribute("position",new YJ(Z,3)),this.setAttribute("normal",new YJ(Z.slice(),3)),this.setAttribute("uv",new YJ(K,2)),W===0)this.computeVertexNormals();else this.normalizeNormals();function H(q){let D=new y,_=new y,z=new y;for(let C=0;C<Q.length;C+=3)E(Q[C+0],D),E(Q[C+1],_),E(Q[C+2],z),Y(D,_,z,q)}function Y(q,D,_,z){let C=z+1,I=[];for(let R=0;R<=C;R++){I[R]=[];let B=q.clone().lerp(_,R/C),S=D.clone().lerp(_,R/C),g=C-R;for(let j=0;j<=g;j++)if(j===0&&R===C)I[R][j]=B;else I[R][j]=B.clone().lerp(S,j/g)}for(let R=0;R<C;R++)for(let B=0;B<2*(C-R)-1;B++){let S=Math.floor(B/2);if(B%2===0)N(I[R][S+1]),N(I[R+1][S]),N(I[R][S]);else N(I[R][S+1]),N(I[R+1][S+1]),N(I[R+1][S])}}function X(q){let D=new y;for(let _=0;_<Z.length;_+=3)D.x=Z[_+0],D.y=Z[_+1],D.z=Z[_+2],D.normalize().multiplyScalar(q),Z[_+0]=D.x,Z[_+1]=D.y,Z[_+2]=D.z}function U(){let q=new y;for(let D=0;D<Z.length;D+=3){q.x=Z[D+0],q.y=Z[D+1],q.z=Z[D+2];let _=k(q)/2/Math.PI+0.5,z=F(q)/Math.PI+0.5;K.push(_,1-z)}O(),G()}function G(){for(let q=0;q<K.length;q+=6){let D=K[q+0],_=K[q+2],z=K[q+4],C=Math.max(D,_,z),I=Math.min(D,_,z);if(C>0.9&&I<0.1){if(D<0.2)K[q+0]+=1;if(_<0.2)K[q+2]+=1;if(z<0.2)K[q+4]+=1}}}function N(q){Z.push(q.x,q.y,q.z)}function E(q,D){let _=q*3;D.x=J[_+0],D.y=J[_+1],D.z=J[_+2]}function O(){let q=new y,D=new y,_=new y,z=new y,C=new h0,I=new h0,R=new h0;for(let B=0,S=0;B<Z.length;B+=9,S+=6){q.set(Z[B+0],Z[B+1],Z[B+2]),D.set(Z[B+3],Z[B+4],Z[B+5]),_.set(Z[B+6],Z[B+7],Z[B+8]),C.set(K[S+0],K[S+1]),I.set(K[S+2],K[S+3]),R.set(K[S+4],K[S+5]),z.copy(q).add(D).add(_).divideScalar(3);let g=k(z);L(C,S+0,q,g),L(I,S+2,D,g),L(R,S+4,_,g)}}function L(q,D,_,z){if(z<0&&q.x===1)K[D]=q.x-1;if(_.x===0&&_.z===0)K[D]=z/2/Math.PI+0.5}function k(q){return Math.atan2(q.z,-q.x)}function F(q){return Math.atan2(-q.y,Math.sqrt(q.x*q.x+q.z*q.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new o6(J.vertices,J.indices,J.radius,J.detail)}}class T7 extends o6{constructor(J=1,Q=0){let $=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],W=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super($,W,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new T7(J.radius,J.detail)}}class S7 extends _J{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(W),X=H+1,U=Y+1,G=J/H,N=Q/Y,E=[],O=[],L=[],k=[];for(let F=0;F<U;F++){let q=F*N-K;for(let D=0;D<X;D++){let _=D*G-Z;O.push(_,-q,0),L.push(0,0,1),k.push(D/H),k.push(1-F/Y)}}for(let F=0;F<Y;F++)for(let q=0;q<H;q++){let D=q+X*F,_=q+X*(F+1),z=q+1+X*(F+1),C=q+1+X*F;E.push(D,_,C),E.push(_,z,C)}this.setIndex(E),this.setAttribute("position",new YJ(O,3)),this.setAttribute("normal",new YJ(L,3)),this.setAttribute("uv",new YJ(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new S7(J.width,J.height,J.widthSegments,J.heightSegments)}}class j7 extends _J{constructor(J=0.5,Q=1,$=32,W=1,Z=0,K=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:W,thetaStart:Z,thetaLength:K},$=Math.max(3,$),W=Math.max(1,W);let H=[],Y=[],X=[],U=[],G=J,N=(Q-J)/W,E=new y,O=new h0;for(let L=0;L<=W;L++){for(let k=0;k<=$;k++){let F=Z+k/$*K;E.x=G*Math.cos(F),E.y=G*Math.sin(F),Y.push(E.x,E.y,E.z),X.push(0,0,1),O.x=(E.x/Q+1)/2,O.y=(E.y/Q+1)/2,U.push(O.x,O.y)}G+=N}for(let L=0;L<W;L++){let k=L*($+1);for(let F=0;F<$;F++){let q=F+k,D=q,_=q+$+1,z=q+$+2,C=q+1;H.push(D,_,C),H.push(_,z,C)}}this.setIndex(H),this.setAttribute("position",new YJ(Y,3)),this.setAttribute("normal",new YJ(X,3)),this.setAttribute("uv",new YJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j7(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}function M8(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(OZ(Z))if(Z.isRenderTargetTexture)_0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(OZ(Z[0])){let K=[];for(let H=0,Y=Z.length;H<Y;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function vJ(J){let Q={};for(let $=0;$<J.length;$++){let W=M8(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function OZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function pY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function r$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return p0.workingColorSpace}var BK={clone:M8,merge:vJ},lY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class h9 extends sJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lY,this.fragmentShader=mY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=M8(J.uniforms),this.uniformsGroups=pY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new T0().setHex(W.value);break;case"v2":this.uniforms[$].value=new h0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new y().fromArray(W.value);break;case"v4":this.uniforms[$].value=new e0().fromArray(W.value);break;case"m3":this.uniforms[$].value=new j0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new f0().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class t$ extends h9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class r8 extends sJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new T0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new T0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new h0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new S9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class lJ extends r8{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new h0(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return d0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new T0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new T0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new T0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(J){if(this._diffuseRoughness>0!==J>0)this.version++;this._diffuseRoughness=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}get iridescenceThicknessRange(){return U8('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(J){U8('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=J[0],this.iridescenceThicknessMaximum=J[1]}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.diffuseRoughness=J.diffuseRoughness,this.diffuseRoughnessMap=J.diffuseRoughnessMap,this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum,this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class e$ extends sJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class JW extends sJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function u9(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function N7(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function dY(J){function Q(Z,K){return J[Z]-J[K]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function RZ(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let K=0,H=0;H!==W;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)Z[H++]=J[Y+X]}return Z}function uY(J,Q,$,W){let Z=1,K=J[0];while(K!==void 0&&K[W]===void 0)K=J[Z++];if(K===void 0)return;let H=K[W];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(...H);K=J[Z++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[W],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[Z++]}while(K!==void 0);else do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(H);K=J[Z++]}while(K!==void 0)}class f9{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];$:{J:{let K;Q:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break J}K=Q.length;break Q}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class QW extends f9{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],Y=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+W[1]-W[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,N=this._weightPrev,E=this._weightNext,O=($-Q)/(W-Q),L=O*O,k=L*O,F=-N*k+2*N*L-N*O,q=(1+N)*k+(-1.5-2*N)*L+(-0.5+N)*O+1,D=(-1-E)*k+(1.5+E)*L+0.5*O,_=E*k-E*L;for(let z=0;z!==H;++z)Z[z]=F*K[U+z]+q*K[X+z]+D*K[Y+z]+_*K[G+z];return Z}}class $W extends f9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(W-Q),G=1-U;for(let N=0;N!==H;++N)Z[N]=K[X+N]*G+K[Y+N]*U;return Z}}class WW extends f9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class ZW extends f9{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,G=this.outTangents;if(!U||!G){let O=($-Q)/(W-Q),L=1-O;for(let k=0;k!==H;++k)Z[k]=K[X+k]*L+K[Y+k]*O;return Z}let N=H*2,E=J-1;for(let O=0;O!==H;++O){let L=K[X+O],k=K[Y+O],F=E*N+O*2,q=G[F],D=G[F+1],_=J*N+O*2,z=U[_],C=U[_+1],I=nY($,Q,q,z,W);Z[O]=zK(I,L,D,C,k)}return Z}}function zK(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function cY(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function nY(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let Y=zK(K,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=cY(K,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class oJ{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=u9(Q,this.TimeBufferType),this.values=u9($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:u9(J.times,Array),values:u9(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(N7(J.settings))$.settings={inTangents:u9(J.settings.inTangents,Array),outTangents:u9(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new WW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new $W(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new QW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new ZW(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return _0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J;if(N7(this.settings))LZ(this.settings.inTangents,J),LZ(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(N7(this.settings))MZ(this.settings.inTangents,J),MZ(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)S0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)S0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){S0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){S0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(W!==void 0){if(WY(W))for(let H=0,Y=W.length;H!==Y;++H){let X=W[H];if(isNaN(X)){S0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!W){let G=H*$,N=G-$,E=G+$;for(let O=0;O!==$;++O){let L=Q[G+O];if(L!==Q[N+O]||L!==Q[E+O]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let G=H*$,N=K*$;for(let E=0;E!==$;++E)Q[N+E]=Q[G+E]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,N7(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function LZ(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]+=Q}function MZ(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}oJ.prototype.ValueTypeName="";oJ.prototype.TimeBufferType=Float32Array;oJ.prototype.ValueBufferType=Float32Array;oJ.prototype.DefaultInterpolation=2301;class a9 extends oJ{constructor(J,Q,$){super(J,Q,$)}}a9.prototype.ValueTypeName="bool";a9.prototype.ValueBufferType=Array;a9.prototype.DefaultInterpolation=2300;a9.prototype.InterpolantFactoryMethodLinear=void 0;a9.prototype.InterpolantFactoryMethodSmooth=void 0;class a6 extends oJ{constructor(J,Q,$,W){super(J,Q,$,W)}}a6.prototype.ValueTypeName="color";class r9 extends oJ{constructor(J,Q,$,W){super(J,Q,$,W)}}r9.prototype.ValueTypeName="number";class KW extends f9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(W-Q),X=J*H;for(let U=X+H;X!==U;X+=4)eJ.slerpFlat(Z,0,K,X-H,K,X,Y);return Z}}class t9 extends oJ{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new KW(this.times,this.values,this.getValueSize(),J)}}t9.prototype.ValueTypeName="quaternion";t9.prototype.InterpolantFactoryMethodSmooth=void 0;class e9 extends oJ{constructor(J,Q,$){super(J,Q,$)}}e9.prototype.ValueTypeName="string";e9.prototype.ValueBufferType=Array;e9.prototype.DefaultInterpolation=2300;e9.prototype.InterpolantFactoryMethodLinear=void 0;e9.prototype.InterpolantFactoryMethodSmooth=void 0;class V8 extends oJ{constructor(J,Q,$,W){super(J,Q,$,W)}}V8.prototype.ValueTypeName="vector";class r6{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=M9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(iY($[K]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,K=$.length;Z!==K;++Z)Q.push(oJ.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,K=[];for(let H=0;H<Z;H++){let Y=[],X=[];Y.push((H+Z-1)%Z,H,(H+1)%Z),X.push(0,1,0);let U=dY(Y);if(Y=RZ(Y,1,U),X=RZ(X,1,U),!W&&Y[0]===0)Y.push(Z),X.push(X[0]);K.push(new r9(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(Z);if(U&&U.length>1){let G=U[1],N=W[G];if(!N)W[G]=N=[];N.push(X)}}let K=[];for(let H in W)K.push(this.CreateFromMorphTargetSequence(H,W[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function sY(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return r9;case"vector":case"vector2":case"vector3":case"vector4":return V8;case"color":return a6;case"quaternion":return t9;case"bool":case"boolean":return a9;case"string":return e9}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function iY(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=sY(J.type);if(J.times===void 0){let W=[],Z=[];uY(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(N7(J.settings))$.settings={inTangents:u9(J.settings.inTangents,Float32Array),outTangents:u9(J.settings.outTangents,Float32Array)};return $}var F9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(VZ(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(VZ(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function VZ(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class HW{constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,N=X.length;G<N;G+=2){let E=X[G],O=X[G+1];if(E.global)E.lastIndex=0;if(E.test(U))return O}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var _K=new HW;class b9{constructor(J){if(this.manager=J!==void 0?J:_K,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}b9.DEFAULT_MATERIAL_NAME="__DEFAULT";var A9={};class PK extends Error{constructor(J,Q){super(J);this.response=Q}}class v7 extends b9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=F9.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(A9[J]!==void 0){A9[J].push({onLoad:Q,onProgress:$,onError:W});return}A9[J]=[],A9[J].push({onLoad:Q,onProgress:$,onError:W});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)_0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=A9[J],G=X.body.getReader(),N=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),E=N?parseInt(N):0,O=E!==0,L=0,k=new ReadableStream({start(F){q();function q(){G.read().then(({done:D,value:_})=>{if(D)F.close();else{L+=_.byteLength;let z=new ProgressEvent("progress",{lengthComputable:O,loaded:L,total:E});for(let C=0,I=U.length;C<I;C++){let R=U[C];if(R.onProgress)R.onProgress(z)}F.enqueue(_),q()}},(D)=>{F.error(D)})}}});return new Response(k)}else throw new PK(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(H),N=G&&G[1]?G[1].toLowerCase():void 0,E=new TextDecoder(N);return X.arrayBuffer().then((O)=>E.decode(O))}}}).then((X)=>{F9.add(`file:${J}`,X);let U=A9[J];delete A9[J];for(let G=0,N=U.length;G<N;G++){let E=U[G];if(E.onLoad)E.onLoad(X)}}).catch((X)=>{let U=A9[J];if(U===void 0)throw this.manager.itemError(J),X;delete A9[J];for(let G=0,N=U.length;G<N;G++){let E=U[G];if(E.onError)E.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var v8=new WeakMap;class YW extends b9{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=F9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);else{let G=v8.get(K);if(G===void 0)G=[],v8.set(K,G);G.push({onLoad:Q,onError:W})}return K}let H=b8("img");function Y(){if(U(),Q)Q(this);let G=v8.get(this)||[];for(let N=0;N<G.length;N++){let E=G[N];if(E.onLoad)E.onLoad(this)}v8.delete(this),Z.manager.itemEnd(J)}function X(G){if(U(),W)W(G);F9.remove(`image:${J}`);let N=v8.get(this)||[];for(let E=0;E<N.length;E++){let O=N[E];if(O.onError)O.onError(G)}v8.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return F9.add(`image:${J}`,H),Z.manager.itemStart(J),H.fetchPriority=this.priority,H.src=J,H}}class t6 extends b9{constructor(J){super(J)}load(J,Q,$,W){let Z=new FJ,K=new YW(this.manager);return K.setPriority(this.priority),K.setCache(this.cache),K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(Z.image=H,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class t8 extends ZJ{static registerNode(J){this.prototype._lightNode=J}constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new T0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class e6 extends t8{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ZJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new T0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var xQ=new f0,DZ=new y,kZ=new y;class y7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new h0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new f0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new E8,this._frameExtents=new h0(1,1),this._viewportCount=1,this._viewports=[new e0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;DZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(DZ),kZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(kZ),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){xQ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(xQ,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(xQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.mapType=J.mapType,this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.mapType=this.mapType,J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var V6=new y,D6=new eJ,N9=new y;class JQ extends ZJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new f0,this.projectionMatrix=new f0,this.projectionMatrixInverse=new f0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(V6,D6,N9),N9.x===1&&N9.y===1&&N9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(V6,D6,N9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(V6,D6,N9),N9.x===1&&N9.y===1&&N9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(V6,D6,N9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var d9=new y,BZ=new h0,zZ=new h0;class kJ extends JQ{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=G8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(q7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return G8*2*Math.atan(Math.tan(q7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){d9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(d9.x,d9.y).multiplyScalar(-J/d9.z),d9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(d9.x,d9.y).multiplyScalar(-J/d9.z)}getViewSize(J,Q){return this.getViewBounds(J,BZ,zZ),Q.subVectors(zZ,BZ)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(q7*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;Z+=K.offsetX*W/Y,Q-=K.offsetY*$/X,W*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class CK extends y7{constructor(){super(new kJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=G8*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class QQ extends t8{constructor(J,Q,$=0,W=Math.PI/3,Z=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ZJ.DEFAULT_UP),this.updateMatrix(),this.target=new ZJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=K,this.map=null,this.shadow=new CK}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class IK extends y7{constructor(){super(new kJ(90,1,0.5,500));this.isPointLightShadow=!0}}class $Q extends t8{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new IK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class e8 extends JQ{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,K=Z+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class wK extends y7{constructor(){super(new e8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class WQ extends t8{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ZJ.DEFAULT_UP),this.updateMatrix(),this.target=new ZJ,this.shadow=new wK}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class J8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var gQ=new WeakMap;class ZQ extends b9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")_0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")_0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=F9.get(`image-bitmap:${J}`);if(K!==void 0){if(Z.manager.itemStart(J),K.then){K.then((X)=>{if(gQ.has(K)===!0){if(W)W(gQ.get(K));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(X);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);return}let H={};H.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",H.headers=this.requestHeader,H.priority=this.priority,H.cache=this.cache,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(X){if(F9.add(`image-bitmap:${J}`,X),Q)Q(X);return Z.manager.itemEnd(J),X}).catch(function(X){if(W)W(X);gQ.set(Y,X),F9.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});F9.add(`image-bitmap:${J}`,Y),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var y8=-90,h8=1;class h7 extends ZJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new kJ(y8,h8,J,Q);W.layers=this.layers,this.add(W);let Z=new kJ(y8,h8,J,Q);Z.layers=this.layers,this.add(Z);let K=new kJ(y8,h8,J,Q);K.layers=this.layers,this.add(K);let H=new kJ(y8,h8,J,Q);H.layers=this.layers,this.add(H);let Y=new kJ(y8,h8,J,Q);Y.layers=this.layers,this.add(Y);let X=new kJ(y8,h8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,Y,X,U]=this.children,G=J.getRenderTarget(),N=J.getActiveCubeFace(),E=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let L=$.texture.mipmapsAutoUpdate;$.texture.mipmapsAutoUpdate=!1;let k=!1;if(J.isWebGLRenderer===!0)k=J.state.buffers.depth.getReversed();else k=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.mipmapsAutoUpdate=L,J.setRenderTarget($,5,W),k&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,N,E),J.xr.enabled=O,$.texture.needsPMREMUpdate=!0}}class XW extends kJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var UW="\\[\\]\\.:\\/",oY=new RegExp("["+UW+"]","g"),GW="[^"+UW+"]",aY="[^"+UW.replace("\\.","")+"]",rY=/((?:WC+[\/:])*)/.source.replace("WC",GW),tY=/(WCOD+)?/.source.replace("WCOD",aY),eY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",GW),JX=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",GW),QX=new RegExp("^"+rY+tY+eY+JX+"$"),$X=["material","materials","bones","map"];class AK{constructor(J,Q,$){let W=$||o0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class o0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||o0.parseTrackName(Q),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new o0(J,Q,$);else return new o0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(oY,"")}static parseTrackName(J){let Q=QX.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if($X.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=o0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){_0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){S0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){S0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){S0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){S0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){S0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){S0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){S0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[W];if(K===void 0){let X=Q.nodeName;S0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){S0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){S0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=AK;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $N=new Float32Array(1);class TK{static{this.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}function EW(J,Q,$,W){let Z=WX(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function WX(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)_0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function tK(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function ZX(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:G}=Y,N=U.byteLength,E=J.createBuffer();J.bindBuffer(X,E),J.bufferData(X,U,G),Y.onUploadCallback();let O;if(U instanceof Float32Array)O=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)O=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)O=J.SHORT;else if(U instanceof Uint32Array)O=J.UNSIGNED_INT;else if(U instanceof Int32Array)O=J.INT;else if(U instanceof Int8Array)O=J.BYTE;else if(U instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:E,type:O,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:N}}function W(Y,X,U){let{array:G,updateRanges:N}=X;if(J.bindBuffer(U,Y),N.length===0)J.bufferSubData(U,0,G);else{N.sort((O,L)=>O.start-L.start);let E=0;for(let O=1;O<N.length;O++){let L=N[E],k=N[O];if(k.start<=L.start+L.count+1)L.count=Math.max(L.count,k.start+k.count-L.start);else++E,N[E]=k}N.length=E+1;for(let O=0,L=N.length;O<L;O++){let k=N[O];J.bufferSubData(U,k.start*G.BYTES_PER_ELEMENT,G,k.start,k.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:K,update:H}}var KX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HX=`#ifdef USE_ALPHAHASH
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
#endif`,YX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EX=`#ifdef USE_AOMAP
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
#endif`,NX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qX=`#ifdef USE_BATCHING
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
#endif`,FX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MX=`#ifdef USE_IRIDESCENCE
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
#endif`,VX=`#ifdef USE_BUMPMAP
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
#endif`,DX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_X=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wX=`#define PI 3.141592653589793
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
} // validated`,AX=`vec3 transformedNormal = objectNormal;
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
#endif`,TX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yX="gl_FragColor = linearToOutputTexel( gl_FragColor );",hX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fX=`#ifdef USE_ENVMAP
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
#endif`,bX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xX=`#ifdef USE_ENVMAP
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
#endif`,gX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pX=`#ifdef USE_ENVMAP
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
#endif`,lX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cX=`#ifdef USE_GRADIENTMAP
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
}`,nX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oX=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aX=`#ifdef USE_ENVMAP
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
#endif`,rX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QU=`PhysicalMaterial material;
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
#endif`,$U=`uniform sampler2D dfgLUT;
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
}`,WU=`
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
#endif`,ZU=`#if defined( RE_IndirectDiffuse )
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
#endif`,KU=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HU=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,YU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FU=`#if defined( USE_POINTS_UV )
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
#endif`,OU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MU=`#if defined( USE_MORPHCOLORS )
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
#endif`,VU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DU=`#ifdef USE_MORPHTARGETS
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
#endif`,kU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zU=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_U=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IU=`#ifdef USE_NORMALMAP
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
#endif`,wU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dU=`float getShadowMask() {
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
}`,uU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cU=`#ifdef USE_SKINNING
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
#endif`,nU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sU=`#ifdef USE_SKINNING
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
#endif`,iU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tU=`#ifdef USE_TRANSMISSION
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
#endif`,eU=`#ifdef USE_TRANSMISSION
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
#endif`,JG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$G=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ZG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KG=`uniform sampler2D t2D;
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
}`,HG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YG=`uniform float backgroundBlurriness;
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
}`,XG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GG=`#include <common>
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
}`,EG=`#if DEPTH_PACKING == 3200
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
}`,NG=`#define DISTANCE
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
}`,qG=`#define DISTANCE
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
}`,FG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RG=`uniform float scale;
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
}`,LG=`uniform vec3 diffuse;
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
}`,MG=`#include <common>
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
}`,VG=`uniform vec3 diffuse;
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
}`,DG=`#define LAMBERT
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
}`,kG=`#define LAMBERT
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
}`,BG=`#define MATCAP
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
}`,zG=`#define MATCAP
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
}`,_G=`#define NORMAL
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
}`,PG=`#define NORMAL
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
}`,CG=`#define PHONG
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
}`,IG=`#define PHONG
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
}`,wG=`#define STANDARD
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
}`,AG=`#define STANDARD
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
}`,TG=`#define TOON
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
}`,SG=`#define TOON
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
}`,jG=`uniform float size;
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
}`,vG=`uniform vec3 diffuse;
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
}`,yG=`#include <common>
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
}`,hG=`uniform vec3 color;
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
}`,fG=`uniform float rotation;
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
}`,bG=`uniform vec3 diffuse;
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
}`,g0={alphahash_fragment:KX,alphahash_pars_fragment:HX,alphamap_fragment:YX,alphamap_pars_fragment:XX,alphatest_fragment:UX,alphatest_pars_fragment:GX,aomap_fragment:EX,aomap_pars_fragment:NX,batching_pars_vertex:qX,batching_vertex:FX,begin_vertex:OX,beginnormal_vertex:RX,bsdfs:LX,iridescence_fragment:MX,bumpmap_pars_fragment:VX,clipping_planes_fragment:DX,clipping_planes_pars_fragment:kX,clipping_planes_pars_vertex:BX,clipping_planes_vertex:zX,color_fragment:_X,color_pars_fragment:PX,color_pars_vertex:CX,color_vertex:IX,common:wX,defaultnormal_vertex:AX,displacementmap_pars_vertex:TX,displacementmap_vertex:SX,emissivemap_fragment:jX,emissivemap_pars_fragment:vX,colorspace_fragment:yX,colorspace_pars_fragment:hX,envmap_fragment:fX,envmap_common_pars_fragment:bX,envmap_pars_fragment:xX,envmap_pars_vertex:gX,envmap_physical_pars_fragment:aX,envmap_vertex:pX,fog_vertex:lX,fog_pars_vertex:mX,fog_fragment:dX,fog_pars_fragment:uX,gradientmap_pars_fragment:cX,lightmap_pars_fragment:nX,lights_lambert_fragment:sX,lights_lambert_pars_fragment:iX,lights_pars_begin:oX,lights_toon_fragment:rX,lights_toon_pars_fragment:tX,lights_phong_fragment:eX,lights_phong_pars_fragment:JU,lights_physical_fragment:QU,lights_physical_pars_fragment:$U,lights_fragment_begin:WU,lights_fragment_maps:ZU,lights_fragment_end:KU,lightprobes_pars_fragment:HU,logdepthbuf_fragment:YU,logdepthbuf_pars_fragment:XU,logdepthbuf_pars_vertex:UU,logdepthbuf_vertex:GU,map_fragment:EU,map_pars_fragment:NU,map_particle_fragment:qU,map_particle_pars_fragment:FU,metalnessmap_fragment:OU,metalnessmap_pars_fragment:RU,morphinstance_vertex:LU,morphcolor_vertex:MU,morphnormal_vertex:VU,morphtarget_pars_vertex:DU,morphtarget_vertex:kU,normal_fragment_begin:BU,normal_fragment_maps:zU,normal_pars_fragment:_U,normal_pars_vertex:PU,normal_vertex:CU,normalmap_pars_fragment:IU,clearcoat_normal_fragment_begin:wU,clearcoat_normal_fragment_maps:AU,clearcoat_pars_fragment:TU,iridescence_pars_fragment:SU,opaque_fragment:jU,packing:vU,premultiplied_alpha_fragment:yU,project_vertex:hU,dithering_fragment:fU,dithering_pars_fragment:bU,roughnessmap_fragment:xU,roughnessmap_pars_fragment:gU,shadowmap_pars_fragment:pU,shadowmap_pars_vertex:lU,shadowmap_vertex:mU,shadowmask_pars_fragment:dU,skinbase_vertex:uU,skinning_pars_vertex:cU,skinning_vertex:nU,skinnormal_vertex:sU,specularmap_fragment:iU,specularmap_pars_fragment:oU,tonemapping_fragment:aU,tonemapping_pars_fragment:rU,transmission_fragment:tU,transmission_pars_fragment:eU,uv_pars_fragment:JG,uv_pars_vertex:QG,uv_vertex:$G,worldpos_vertex:WG,background_vert:ZG,background_frag:KG,backgroundCube_vert:HG,backgroundCube_frag:YG,cube_vert:XG,cube_frag:UG,depth_vert:GG,depth_frag:EG,distance_vert:NG,distance_frag:qG,equirect_vert:FG,equirect_frag:OG,linedashed_vert:RG,linedashed_frag:LG,meshbasic_vert:MG,meshbasic_frag:VG,meshlambert_vert:DG,meshlambert_frag:kG,meshmatcap_vert:BG,meshmatcap_frag:zG,meshnormal_vert:_G,meshnormal_frag:PG,meshphong_vert:CG,meshphong_frag:IG,meshphysical_vert:wG,meshphysical_frag:AG,meshtoon_vert:TG,meshtoon_frag:SG,points_vert:jG,points_frag:vG,shadow_vert:yG,shadow_frag:hG,sprite_vert:fG,sprite_frag:bG},N0={common:{diffuse:{value:new T0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new j0}},envmap:{envMap:{value:null},envMapRotation:{value:new j0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new j0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new j0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new j0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new j0},normalScale:{value:new h0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new j0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new j0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new j0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new j0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new T0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new T0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0},uvTransform:{value:new j0}},sprite:{diffuse:{value:new T0(16777215)},opacity:{value:1},center:{value:new h0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}}},D9={basic:{uniforms:vJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.fog]),vertexShader:g0.meshbasic_vert,fragmentShader:g0.meshbasic_frag},lambert:{uniforms:vJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new T0(0)},envMapIntensity:{value:1}}]),vertexShader:g0.meshlambert_vert,fragmentShader:g0.meshlambert_frag},phong:{uniforms:vJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new T0(0)},specular:{value:new T0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:g0.meshphong_vert,fragmentShader:g0.meshphong_frag},standard:{uniforms:vJ([N0.common,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.roughnessmap,N0.metalnessmap,N0.fog,N0.lights,{emissive:{value:new T0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:g0.meshphysical_vert,fragmentShader:g0.meshphysical_frag},toon:{uniforms:vJ([N0.common,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.gradientmap,N0.fog,N0.lights,{emissive:{value:new T0(0)}}]),vertexShader:g0.meshtoon_vert,fragmentShader:g0.meshtoon_frag},matcap:{uniforms:vJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,{matcap:{value:null}}]),vertexShader:g0.meshmatcap_vert,fragmentShader:g0.meshmatcap_frag},points:{uniforms:vJ([N0.points,N0.fog]),vertexShader:g0.points_vert,fragmentShader:g0.points_frag},dashed:{uniforms:vJ([N0.common,N0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:g0.linedashed_vert,fragmentShader:g0.linedashed_frag},depth:{uniforms:vJ([N0.common,N0.displacementmap]),vertexShader:g0.depth_vert,fragmentShader:g0.depth_frag},normal:{uniforms:vJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,{opacity:{value:1}}]),vertexShader:g0.meshnormal_vert,fragmentShader:g0.meshnormal_frag},sprite:{uniforms:vJ([N0.sprite,N0.fog]),vertexShader:g0.sprite_vert,fragmentShader:g0.sprite_frag},background:{uniforms:{uvTransform:{value:new j0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:g0.background_vert,fragmentShader:g0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new j0}},vertexShader:g0.backgroundCube_vert,fragmentShader:g0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:g0.cube_vert,fragmentShader:g0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:g0.equirect_vert,fragmentShader:g0.equirect_frag},distance:{uniforms:vJ([N0.common,N0.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:g0.distance_vert,fragmentShader:g0.distance_frag},shadow:{uniforms:vJ([N0.lights,N0.fog,{color:{value:new T0(0)},opacity:{value:1}}]),vertexShader:g0.shadow_vert,fragmentShader:g0.shadow_frag}};D9.physical={uniforms:vJ([D9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new j0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new j0},clearcoatNormalScale:{value:new h0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new j0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new j0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new j0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new j0},sheen:{value:0},sheenColor:{value:new T0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new j0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new j0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new j0},transmissionSamplerSize:{value:new h0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new j0},attenuationDistance:{value:0},attenuationColor:{value:new T0(0)},specularColor:{value:new T0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new j0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new j0},anisotropyVector:{value:new h0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new j0}}]),vertexShader:g0.meshphysical_vert,fragmentShader:g0.meshphysical_frag};var KQ={r:0,b:0,g:0},xG=new f0,eK=new j0;eK.set(-1,0,0,0,1,0,0,0,1);function gG(J,Q,$,W,Z,K){let H=new T0(0),Y=Z===!0?0:1,X,U,G=null,N=0,E=null;function O(D){let _=D.isScene===!0?D.background:null;if(_&&_.isTexture){let z=D.backgroundBlurriness>0;_=Q.get(_,z)}return _}function L(D){let _=!1,z=O(D);if(z===null)F(H,Y);else if(z&&z.isColor)F(z,1),_=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(C==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||_)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function k(D,_){let z=O(_);if(z&&z.isCubeTexture){if(U===void 0)U=new BJ(new a8(1,1,1),new h9({name:"BackgroundCubeMaterial",uniforms:M8(D9.backgroundCube.uniforms),vertexShader:D9.backgroundCube.vertexShader,fragmentShader:D9.backgroundCube.fragmentShader,side:pJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(C,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=z,U.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(xG.makeRotationFromEuler(_.backgroundRotation)).transpose(),z.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(eK);if(U.material.toneMapped=p0.getTransfer(z.colorSpace)!==QJ,G!==z||N!==z.version||E!==J.toneMapping)U.material.needsUpdate=!0,G=z,N=z.version,E=J.toneMapping;U.layers.enableAll(),D.unshift(U,U.geometry,U.material,0,0,null)}else if(z&&z.isTexture){if(X===void 0)X=new BJ(new S7(2,2),new h9({name:"BackgroundMaterial",uniforms:M8(D9.background.uniforms),vertexShader:D9.background.vertexShader,fragmentShader:D9.background.fragmentShader,side:n9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=z,X.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,X.material.toneMapped=p0.getTransfer(z.colorSpace)!==QJ,z.matrixAutoUpdate===!0)z.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(z.matrix),G!==z||N!==z.version||E!==J.toneMapping)X.material.needsUpdate=!0,G=z,N=z.version,E=J.toneMapping;X.layers.enableAll(),D.unshift(X,X.geometry,X.material,0,0,null)}}function F(D,_){D.getRGB(KQ,r$(J)),$.buffers.color.setClear(KQ.r,KQ.g,KQ.b,_,K)}function q(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(D,_=1){H.set(D),Y=_,F(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(D){Y=D,F(H,Y)},render:L,addToRenderList:k,dispose:q}}function pG(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=E(null),K=Z,H=!1;function Y(j,l,t,A,s){let o=!1,x=N(j,A,t,l);if(K!==x)K=x,U(K.object);if(o=O(j,A,t,s),o)L(j,A,t,s);if(s!==null)Q.update(s,J.ELEMENT_ARRAY_BUFFER);if(o||H){if(H=!1,z(j,l,t,A),s!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(s).buffer)}}function X(){return J.createVertexArray()}function U(j){return J.bindVertexArray(j)}function G(j){return J.deleteVertexArray(j)}function N(j,l,t,A){let s=A.wireframe===!0,o=W[l.id];if(o===void 0)o={},W[l.id]=o;let x=j.isInstancedMesh===!0?j.id:0,K0=o[x];if(K0===void 0)K0={},o[x]=K0;let u=K0[t.id];if(u===void 0)u={},K0[t.id]=u;let r=u[s];if(r===void 0)r=E(X()),u[s]=r;return r}function E(j){let l=[],t=[],A=[];for(let s=0;s<$;s++)l[s]=0,t[s]=0,A[s]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:l,enabledAttributes:t,attributeDivisors:A,object:j,attributes:{},index:null}}function O(j,l,t,A){let s=K.attributes,o=l.attributes,x=0,K0=t.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=s[u],k0=o[u];if(k0===void 0){if(u==="instanceMatrix"&&j.instanceMatrix)k0=j.instanceMatrix;if(u==="instanceColor"&&j.instanceColor)k0=j.instanceColor}if($0===void 0)return!0;if($0.attribute!==k0)return!0;if(k0&&$0.data!==k0.data)return!0;x++}if(K.attributesNum!==x)return!0;if(K.index!==A)return!0;return!1}function L(j,l,t,A){let s={},o=l.attributes,x=0,K0=t.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=o[u];if($0===void 0){if(u==="instanceMatrix"&&j.instanceMatrix)$0=j.instanceMatrix;if(u==="instanceColor"&&j.instanceColor)$0=j.instanceColor}let k0={};if(k0.attribute=$0,$0&&$0.data)k0.data=$0.data;s[u]=k0,x++}K.attributes=s,K.attributesNum=x,K.index=A}function k(){let j=K.newAttributes;for(let l=0,t=j.length;l<t;l++)j[l]=0}function F(j){q(j,0)}function q(j,l){let{newAttributes:t,enabledAttributes:A,attributeDivisors:s}=K;if(t[j]=1,A[j]===0)J.enableVertexAttribArray(j),A[j]=1;if(s[j]!==l)J.vertexAttribDivisor(j,l),s[j]=l}function D(){let{newAttributes:j,enabledAttributes:l}=K;for(let t=0,A=l.length;t<A;t++)if(l[t]!==j[t])J.disableVertexAttribArray(t),l[t]=0}function _(j,l,t,A,s,o,x){if(x===!0)J.vertexAttribIPointer(j,l,t,s,o);else J.vertexAttribPointer(j,l,t,A,s,o)}function z(j,l,t,A){k();let s=A.attributes,o=t.getAttributes(),x=l.defaultAttributeValues;for(let K0 in o){let u=o[K0];if(u.location>=0){let r=s[K0];if(r===void 0){if(K0==="instanceMatrix"&&j.instanceMatrix)r=j.instanceMatrix;if(K0==="instanceColor"&&j.instanceColor)r=j.instanceColor}if(r!==void 0){let{normalized:$0,itemSize:k0}=r,i=Q.get(r);if(i===void 0)continue;let{buffer:Q0,type:V0,bytesPerElement:I0}=i,w0=V0===J.INT||V0===J.UNSIGNED_INT||r.gpuType===eQ;if(r.isInterleavedBufferAttribute){let D0=r.data,a0=D0.isInterleavedBuffer===!0?D0.stride:D0.itemSize,m0=r.offset;if(D0.isInstancedInterleavedBuffer||D0.isInstancedBufferAttribute){for(let b0=0;b0<u.locationSize;b0++)q(u.location+b0,D0.meshPerAttribute);if(j.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=D0.meshPerAttribute*D0.count}else for(let b0=0;b0<u.locationSize;b0++)F(u.location+b0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let b0=0;b0<u.locationSize;b0++)_(u.location+b0,k0/u.locationSize,V0,$0,a0*I0,(m0+k0/u.locationSize*b0)*I0,w0)}else{if(r.isInstancedBufferAttribute){for(let D0=0;D0<u.locationSize;D0++)q(u.location+D0,r.meshPerAttribute);if(j.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=r.meshPerAttribute*r.count}else for(let D0=0;D0<u.locationSize;D0++)F(u.location+D0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let D0=0;D0<u.locationSize;D0++)_(u.location+D0,k0/u.locationSize,V0,$0,k0*I0,k0/u.locationSize*D0*I0,w0)}}else if(x!==void 0){let $0=x[K0];if($0!==void 0)switch($0.length){case 2:J.vertexAttrib2fv(u.location,$0);break;case 3:J.vertexAttrib3fv(u.location,$0);break;case 4:J.vertexAttrib4fv(u.location,$0);break;default:J.vertexAttrib1fv(u.location,$0)}}}}D()}function C(){S();for(let j in W){let l=W[j];for(let t in l){let A=l[t];for(let s in A){let o=A[s];for(let x in o)G(o[x].object),delete o[x];delete A[s]}}delete W[j]}}function I(j){if(W[j.id]===void 0)return;let l=W[j.id];for(let t in l){let A=l[t];for(let s in A){let o=A[s];for(let x in o)G(o[x].object),delete o[x];delete A[s]}}delete W[j.id]}function R(j){for(let l in W){let t=W[l];for(let A in t){let s=t[A];if(s[j.id]===void 0)continue;let o=s[j.id];for(let x in o)G(o[x].object),delete o[x];delete s[j.id]}}}function B(j){for(let l in W){let t=W[l],A=j.isInstancedMesh===!0?j.id:0,s=t[A];if(s===void 0)continue;for(let o in s){let x=s[o];for(let K0 in x)G(x[K0].object),delete x[K0];delete s[o]}if(delete t[A],Object.keys(t).length===0)delete W[l]}}function S(){if(g(),H=!0,K===Z)return;K=Z,U(K.object)}function g(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:S,resetDefaultState:g,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfObject:B,releaseStatesOfProgram:R,initAttributes:k,enableAttribute:F,disableUnusedAttributes:D}}function lG(J,Q,$){let W;function Z(X){W=X}function K(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function H(X,U,G){if(G===0)return;J.drawArraysInstanced(W,X,U,G),$.update(U,W,G)}function Y(X,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,G);let E=0;for(let O=0;O<G;O++)E+=U[O];$.update(E,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function mG(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let R=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(R){if(R!==v9&&W.convert(R)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(R){let B=R===R9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(R!==E9&&R!==j9&&!B&&W.convert(R)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(R){if(R==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";R="mediump"}if(R==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)_0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),E=$.logarithmicDepthBuffer===!0&&N===!1;if($.reversedDepthBuffer===!0&&N===!1)_0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if($.logarithmicDepthBuffer===!0&&N===!0)_0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let O=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),D=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),_=J.getParameter(J.MAX_VARYING_VECTORS),z=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),C=J.getParameter(J.MAX_SAMPLES),I=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:N,maxTextures:O,maxVertexTextures:L,maxTextureSize:k,maxCubemapSize:F,maxAttributes:q,maxVertexUniforms:D,maxVaryings:_,maxFragmentUniforms:z,maxSamples:C,samples:I}}function dG(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new q9,Y=new j0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(N,E){let O=N.length!==0||E||W!==0||Z;return Z=E,W=N.length,O},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(N,E){$=G(N,E,0)},this.setState=function(N,E,O){let{clippingPlanes:L,clipIntersection:k,clipShadows:F}=N,q=J.get(N);if(!Z||L===null||L.length===0||K&&!F)if(K)G(null);else U();else{let D=K?0:W,_=D*4,z=q.clippingState||null;X.value=z,z=G(L,E,_,O);for(let C=0;C!==_;++C)z[C]=$[C];q.clippingState=z,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=D}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function G(N,E,O,L){let k=N!==null?N.length:0,F=null;if(k!==0){if(F=X.value,L!==!0||F===null){let q=O+k*4,D=E.matrixWorldInverse;if(Y.getNormalMatrix(D),F===null||F.length<q)F=new Float32Array(q);for(let _=0,z=O;_!==k;++_,z+=4)H.copy(N[_]).applyMatrix4(D,Y),H.normal.toArray(F,z),F[z+3]=H.constant}X.value=F,X.needsUpdate=!0}return Q.numPlanes=k,Q.numIntersection=0,F}}class XQ extends J9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new n6(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new a8(5,5,5),Z=new h9({name:"CubemapFromEquirect",uniforms:M8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:pJ,blending:N8});Z.uniforms.tEquirect.value=Q;let K=new BJ(W,Z),H=Q.minFilter;if(Q.minFilter===G9)Q.minFilter=jJ;return new h7(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}var SK=256,uG=3,cG=20,JH=256,QH=16,nG=3,sG=new y,iG=new T0;class YQ{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new h7(1,10,null),this._boxMesh=new BJ(new a8(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=sG}=Z,Y=this._renderer;this._setSize(K);let X=this._allocateTarget(),U=this._getSourceTarget(!0);if(Q>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:G,autoClearColor:N,autoClearDepth:E,autoClearStencil:O}=Y,L=J.background;if(Y.autoClear=!0,Y.autoClearColor=!0,Y.autoClearDepth=!0,Y.autoClearStencil=!0,L===null)J.background=Y.getClearColor(iG);let k=new h7($,W,U);if(k.position.copy(H),k.update(Y,J),Y.autoClear=G,Y.autoClearColor=N,Y.autoClearDepth=E,Y.autoClearStencil=O,J.background=L,Q>0)U.texture.mipmapsAutoUpdate=!0,this._blur(X,Q);return this._applyPMREM(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=yK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=vK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(SK,c$(J))}_fromTexture(J,Q){if(J.mapping===M7||J.mapping===l8)this._setSize(J.image.length===0?SK:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let $=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM($),$}_allocateTarget(){let J=this._cubeSize,Q=jK(J,!1,!1),$=Math.log2(J)-uG;for(let W=0;W<=$;W++)Q.texture.mipmaps.push({width:J>>W,height:J>>W});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,$=this._sourceTarget;if($===null||$.width!==Q||J&&$.depthBuffer===!1){if($!==null)$.dispose();this._sourceTarget=jK(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,$){let W=this._boxMesh,Z=this._cubeCamera;W.material=$,Z.renderTarget=J,Z.activeMipmapLevel=Q;let K=J.width>>Q;J.viewport.set(0,0,K,K),Z.update(this._renderer,W),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===M7||J.mapping===l8){if(this._cubemapMaterial===null)this._cubemapMaterial=yK();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=vK();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=oG(),this._integrationMaterial=aG();let Q=this._cubeSize,$=J.texture.mipmaps.length-1,W=this._ggxMaterial.uniforms;W.envMap.value=this._sourceTarget.texture;let Z=this._integrationMaterial.uniforms;Z.envMap.value=this._sourceTarget.texture,Z.sourceLod.value=Math.log2(Q/QH);for(let K=0;K<=$;K++){let H=YQ.lodToRoughness(K,$);if(K>$-nG)Z.roughness.value=H,this._renderCube(J,K,this._integrationMaterial);else{let Y=H>0?Math.log2(Q)+0.5*Math.log2(6/(JH*Math.pow(H,4)))+0.5:0;W.roughness.value=H,W.lodBias.value=Y,this._renderCube(J,K,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=rG();let $=this._blurMaterial,W=$.uniforms,Z=this._sourceTarget;W.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,W.envMap.value=Z.texture,this._renderCube(J,0,$),W.envMap.value=J.texture,this._renderCube(Z,0,$)}}function jK(J,Q,$){return new XQ(J,{minFilter:G9,generateMipmaps:Q,type:R9,colorSpace:cJ,depthBuffer:$})}function g7(J,Q,$){return new h9({name:J,uniforms:Q,vertexShader:g0.cube_vert,fragmentShader:$,side:pJ,blending:N8,depthTest:!1,depthWrite:!1})}function oG(){return g7("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${JH}u

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
	`)}function aG(){return g7("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:QH}},`

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
	`)}function rG(){return g7("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cG}
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
	`)}function vK(){return g7("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function yK(){return g7("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tG(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(E,O=!1){if(E===null||E===void 0)return null;if(O)return H(E);return K(E)}function K(E){if(E&&E.isTexture){let O=E.mapping;if(O===z6||O===_6)if(Q.has(E)){let L=Q.get(E).texture;return Y(L,E.mapping)}else{let L=E.image;if(L&&L.height>0){let k=new XQ(L.height);return k.fromEquirectangularTexture(J,E),Q.set(E,k),E.addEventListener("dispose",U),Y(k.texture,E.mapping)}else return null}}return E}function H(E){if(E&&E.isTexture&&E.isPMREMTexture!==!0){let O=E.mapping,L=O===z6||O===_6,k=O===M7||O===l8;if(L||k){let F=$.get(E),q=F!==void 0?F.texture.pmremVersion:0;if(E.isRenderTargetTexture&&E.pmremVersion!==q){if(W===null)W=new YQ(J);return F=L?W.fromEquirectangular(E,F):W.fromCubemap(E,F),F.texture.pmremVersion=E.pmremVersion,$.set(E,F),F.texture}else if(F!==void 0)return F.texture;else{let D=E.image;if(L&&D&&D.height>0||k&&D&&X(D)){if(W===null)W=new YQ(J);return F=L?W.fromEquirectangular(E):W.fromCubemap(E),F.texture.pmremVersion=E.pmremVersion,$.set(E,F),E.addEventListener("dispose",G),F.texture}else return null}}}return E}function Y(E,O){if(O===z6)E.mapping=M7;else if(O===_6)E.mapping=l8;return E}function X(E){let O=0,L=6;for(let k=0;k<L;k++)if(E[k]!==void 0)O++;return O===L}function U(E){let O=E.target;O.removeEventListener("dispose",U);let L=Q.get(O);if(L!==void 0)Q.delete(O),L.dispose()}function G(E){let O=E.target;O.removeEventListener("dispose",G);let L=$.get(O);if(L!==void 0)$.delete(O),L.dispose()}function N(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:N}}function eG(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)U8("WebGLRenderer: "+W+" extension not supported.");return Z}}}function J5(J,Q,$,W){let Z={},K=new WeakMap,H=new FinalizationRegistry((L)=>delete Z[L]);function Y(L){X(L.target)}function X(L){if(L.index!==null)Q.remove(L.index);for(let F in L.attributes)Q.remove(L.attributes[F]);L.removeEventListener("dispose",Y),delete Z[L.id],H.unregister(L);let k=K.get(L);if(k)Q.remove(k),K.delete(L);if(W.releaseStatesOfGeometry(L),L.isInstancedBufferGeometry===!0)delete L._maxInstanceCount;$.memory.geometries--}function U(L,k){if(Z[k.id]!==void 0)return k;return k.addEventListener("dispose",Y),Z[k.id]=new WeakRef(k),H.register(k,k.id,k),$.memory.geometries++,k}function G(L){let k=L.attributes;for(let F in k)Q.update(k[F],J.ARRAY_BUFFER)}function N(L){let k=L.index,F=L.attributes.position,q=0;if(F===void 0)return;let D=k!==null?k.array.length:F.array.length/3-1,z=new(F.count>=65535?g6:x6)(Math.ceil(D/3)*6,1),C=z.array;if(k!==null){let R=k.array;q=k.version;for(let B=0,S=0;B<D;B+=3){let g=R[B+0],j=R[B+1],l=R[B+2];C[S++]=g,C[S++]=j,C[S++]=j,C[S++]=l,C[S++]=l,C[S++]=g}}else{q=F.version;for(let R=0,B=0;R<D;R+=3){let S=R+0,g=R+1,j=R+2;C[B++]=S,C[B++]=g,C[B++]=g,C[B++]=j,C[B++]=j,C[B++]=S}}z.version=q;let I=K.get(L);if(I)Q.remove(I);K.set(L,z)}function E(L){let k=K.get(L);if(k){let F=L.index;if(F!==null){if(k.version<F.version)N(L)}}else N(L);return K.get(L)}function O(){for(let L in Z){let k=Z[L].deref();if(k!==void 0)X(k)}}return{get:U,update:G,getWireframeAttribute:E,dispose:O}}function Q5(J,Q,$){let W;function Z(N){W=N}let K,H;function Y(N){K=N.type,H=N.bytesPerElement}function X(N,E){J.drawElements(W,E,K,N*H),$.update(E,W,1)}function U(N,E,O){if(O===0)return;J.drawElementsInstanced(W,E,K,N*H,O),$.update(E,W,O)}function G(N,E,O){if(O===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,E,0,K,N,0,O);let k=0;for(let F=0;F<O;F++)k+=E[F];$.update(k,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function $5(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:S0("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function W5(J,Q,$){let W=new WeakMap,Z=new e0;function K(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,N=G!==void 0?G.length:0,E=W.get(Y);if(E===void 0||E.count!==N){let S=function(){R.dispose(),W.delete(Y),Y.removeEventListener("dispose",S)};if(E!==void 0)E.texture.dispose();let O=Y.morphAttributes.position!==void 0,L=Y.morphAttributes.normal!==void 0,k=Y.morphAttributes.color!==void 0,F=Y.morphAttributes.position||[],q=Y.morphAttributes.normal||[],D=Y.morphAttributes.color||[],_=0;if(O===!0)_=1;if(L===!0)_=2;if(k===!0)_=3;let z=Y.attributes.position.count*_,C=1;if(z>Q.maxTextureSize)C=Math.ceil(z/Q.maxTextureSize),z=Q.maxTextureSize;let I=new Float32Array(z*C*4*N),R=new h6(I,z,C,N);R.type=j9,R.needsUpdate=!0;let B=_*4;for(let g=0;g<N;g++){let j=F[g],l=q[g],t=D[g],A=z*C*4*g;for(let s=0;s<j.count;s++){let o=s*B;if(O===!0)Z.fromBufferAttribute(j,s),I[A+o+0]=Z.x,I[A+o+1]=Z.y,I[A+o+2]=Z.z,I[A+o+3]=0;if(L===!0)Z.fromBufferAttribute(l,s),I[A+o+4]=Z.x,I[A+o+5]=Z.y,I[A+o+6]=Z.z,I[A+o+7]=0;if(k===!0)Z.fromBufferAttribute(t,s),I[A+o+8]=Z.x,I[A+o+9]=Z.y,I[A+o+10]=Z.z,I[A+o+11]=t.itemSize===4?Z.w:1}}E={count:N,texture:R,size:new h0(z,C)},W.set(Y,E),Y.addEventListener("dispose",S)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let O=0;for(let k=0;k<U.length;k++)O+=U[k];let L=Y.morphTargetsRelative?1:1-O;X.getUniforms().setValue(J,"morphTargetBaseInfluence",L),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",E.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",E.size)}return{update:K}}function Z5(J,Q,$,W,Z){let K=new WeakMap;function H(U){let G=Z.render.frame,N=U.geometry,E=Q.get(U,N);if(K.get(E)!==G)Q.update(E),K.set(E,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,G)}}if(U.isSkinnedMesh){let O=U.skeleton;if(K.get(O)!==G)O.update(),K.set(O,G)}return E}function Y(){K=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),W.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:H,dispose:Y}}var K5={[nQ]:"LINEAR_TONE_MAPPING",[sQ]:"REINHARD_TONE_MAPPING",[iQ]:"CINEON_TONE_MAPPING",[oQ]:"ACES_FILMIC_TONE_MAPPING",[rQ]:"AGX_TONE_MAPPING",[tQ]:"NEUTRAL_TONE_MAPPING",[aQ]:"CUSTOM_TONE_MAPPING"};function H5(J,Q,$,W,Z,K){let H=new J9(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=null,G=new _J;G.setAttribute("position",new YJ([-1,3,0,-1,-1,0,3,-1,0],3)),G.setAttribute("uv",new YJ([0,2,0,0,2,0],2));let N=new t$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new BJ(G,N),O=new e8(-1,1,1,-1,0,1),L=null,k=null,F=!1,q,D=null,_=[],z=!1;this.setSize=function(C,I){if(H.setSize(C,I),Y!==null)Y.setSize(C,I);if(X!==null)X.setSize(C,I);for(let R=0;R<_.length;R++){let B=_[R];if(B.setSize)B.setSize(C,I)}},this.setEffects=function(C){_=C,z=_.length>0&&_[0].isRenderPass===!0;let{width:I,height:R}=H;if(_.length>0&&Y===null)Y=new J9(I,R,{type:R9,depthBuffer:!1,stencilBuffer:!1}),X=new J9(I,R,{type:R9,depthBuffer:!1,stencilBuffer:!1});let B=Z===!0&&_.some((S)=>S.needsDepthTexture===!0);if(B!==(H.depthTexture!==null)){if(B===!0&&U===null){if(U=new o9(I,R),K===!0)U.format=i9,U.type=F8}H.dispose(),H.depthTexture=B?U:null,H.resolveDepthBuffer=B,H.storeMultisampledDepthBuffer=B}for(let S=0;S<_.length;S++){let g=_[S];if(g.setSize)g.setSize(I,R);if(B&&g.needsDepthTexture===!0&&g.setDepthTexture)g.setDepthTexture(U)}},this.begin=function(C,I){if(F)return!1;if(C.toneMapping===O9&&_.length===0)return!1;if(D=I,I!==null){let{width:R,height:B}=I;if(H.width!==R||H.height!==B)this.setSize(R,B)}if(z===!1)C.setRenderTarget(H);return q=C.toneMapping,C.toneMapping=O9,!0},this.hasRenderPass=function(){return z},this.end=function(C,I){C.toneMapping=q,F=!0;let R=H,B=Y;for(let S=0;S<_.length;S++){let g=_[S];if(g.enabled===!1)continue;if(g.render(C,B,R,I),g.needsSwap!==!1)R=B,B=B===Y?X:Y}if(L!==C.outputColorSpace||k!==C.toneMapping){if(L=C.outputColorSpace,k=C.toneMapping,N.defines={},p0.getTransfer(L)===QJ)N.defines.SRGB_TRANSFER="";let S=K5[k];if(S)N.defines[S]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(D),C.render(E,O),D=null,F=!1},this.isCompositing=function(){return F},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();G.dispose(),N.dispose()}}var $H=new FJ,WH=new o9(1,1),ZH=new s6(1),KH=new h6,HH=new a$,YH=new n6,hK=[],fK=[],bK=new Float32Array(16),xK=new Float32Array(9),gK=new Float32Array(4);function J7(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=hK[Z];if(K===void 0)K=new Float32Array(Z),hK[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function OJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function RJ(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function UQ(J,Q){let $=fK[Q];if($===void 0)$=new Int32Array(Q),fK[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function Y5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function X5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(OJ($,Q))return;J.uniform2fv(this.addr,Q),RJ($,Q)}}function U5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(OJ($,Q))return;J.uniform3fv(this.addr,Q),RJ($,Q)}}function G5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(OJ($,Q))return;J.uniform4fv(this.addr,Q),RJ($,Q)}}function E5(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(OJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),RJ($,Q)}else{if(OJ($,W))return;gK.set(W),J.uniformMatrix2fv(this.addr,!1,gK),RJ($,W)}}function N5(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(OJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),RJ($,Q)}else{if(OJ($,W))return;xK.set(W),J.uniformMatrix3fv(this.addr,!1,xK),RJ($,W)}}function q5(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(OJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),RJ($,Q)}else{if(OJ($,W))return;bK.set(W),J.uniformMatrix4fv(this.addr,!1,bK),RJ($,W)}}function F5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function O5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(OJ($,Q))return;J.uniform2iv(this.addr,Q),RJ($,Q)}}function R5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(OJ($,Q))return;J.uniform3iv(this.addr,Q),RJ($,Q)}}function L5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(OJ($,Q))return;J.uniform4iv(this.addr,Q),RJ($,Q)}}function M5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function V5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(OJ($,Q))return;J.uniform2uiv(this.addr,Q),RJ($,Q)}}function D5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(OJ($,Q))return;J.uniform3uiv(this.addr,Q),RJ($,Q)}}function k5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(OJ($,Q))return;J.uniform4uiv(this.addr,Q),RJ($,Q)}}function GQ(J){if(J.version===0)J.compareFunction=l$,J.needsUpdate=!0;return J}function B5(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)K=GQ(WH);else K=$H;$.setTexture2D(Q||K,Z)}function z5(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||HH,Z)}function _5(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_CUBE_SHADOW)K=GQ(ZH);else K=YH;$.setTextureCube(Q||K,Z)}function P5(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||KH,Z)}function C5(J){switch(J){case 5126:return Y5;case 35664:return X5;case 35665:return U5;case 35666:return G5;case 35674:return E5;case 35675:return N5;case 35676:return q5;case 5124:case 35670:return F5;case 35667:case 35671:return O5;case 35668:case 35672:return R5;case 35669:case 35673:return L5;case 5125:return M5;case 36294:return V5;case 36295:return D5;case 36296:return k5;case 35678:case 36198:case 36298:case 36306:case 35682:return B5;case 35679:case 36299:case 36307:return z5;case 35680:case 36300:case 36308:case 36293:return _5;case 36289:case 36303:case 36311:case 36292:return P5}}function I5(J,Q){J.uniform1fv(this.addr,Q)}function w5(J,Q){let $=J7(Q,this.size,2);J.uniform2fv(this.addr,$)}function A5(J,Q){let $=J7(Q,this.size,3);J.uniform3fv(this.addr,$)}function T5(J,Q){let $=J7(Q,this.size,4);J.uniform4fv(this.addr,$)}function S5(J,Q){let $=J7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function j5(J,Q){let $=J7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function v5(J,Q){let $=J7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function y5(J,Q){J.uniform1iv(this.addr,Q)}function h5(J,Q){J.uniform2iv(this.addr,Q)}function f5(J,Q){J.uniform3iv(this.addr,Q)}function b5(J,Q){J.uniform4iv(this.addr,Q)}function x5(J,Q){J.uniform1uiv(this.addr,Q)}function g5(J,Q){J.uniform2uiv(this.addr,Q)}function p5(J,Q){J.uniform3uiv(this.addr,Q)}function l5(J,Q){J.uniform4uiv(this.addr,Q)}function m5(J,Q,$){let W=this.cache,Z=Q.length,K=UQ($,Z);if(!OJ(W,K))J.uniform1iv(this.addr,K),RJ(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=GQ(WH);else H=$H;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function d5(J,Q,$){let W=this.cache,Z=Q.length,K=UQ($,Z);if(!OJ(W,K))J.uniform1iv(this.addr,K),RJ(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||HH,K[H])}function u5(J,Q,$){let W=this.cache,Z=Q.length,K=UQ($,Z);if(!OJ(W,K))J.uniform1iv(this.addr,K),RJ(W,K);let H;if(this.type===J.SAMPLER_CUBE_SHADOW)H=GQ(ZH);else H=YH;for(let Y=0;Y!==Z;++Y)$.setTextureCube(Q[Y]||H,K[Y])}function c5(J,Q,$){let W=this.cache,Z=Q.length,K=UQ($,Z);if(!OJ(W,K))J.uniform1iv(this.addr,K),RJ(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||KH,K[H])}function n5(J){switch(J){case 5126:return I5;case 35664:return w5;case 35665:return A5;case 35666:return T5;case 35674:return S5;case 35675:return j5;case 35676:return v5;case 5124:case 35670:return y5;case 35667:case 35671:return h5;case 35668:case 35672:return f5;case 35669:case 35673:return b5;case 5125:return x5;case 36294:return g5;case 36295:return p5;case 36296:return l5;case 35678:case 36198:case 36298:case 36306:case 35682:return m5;case 35679:case 36299:case 36307:return d5;case 35680:case 36300:case 36308:case 36293:return u5;case 36289:case 36303:case 36311:case 36292:return c5}}class XH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=C5(Q.type)}}class UH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=n5(Q.type)}}class GH{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var NW=/(\w+)(\])?(\[|\.)?/g;function pK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function s5(J,Q,$){let W=J.name,Z=W.length;NW.lastIndex=0;while(!0){let K=NW.exec(W),H=NW.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===Z){pK($,U===void 0?new XH(Y,J,Q):new UH(Y,J,Q));break}else{let N=$.map[Y];if(N===void 0)N=new GH(Y),pK($,N);$=N}}}class x7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);s5(H,Y,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function lK(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var i5=37297,o5=0;function a5(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let Y=H+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return W.join(`
`)}var mK=new j0;function r5(J){p0._getMatrix(mK,p0.workingColorSpace,J);let Q=`mat3( ${mK.elements.map(($)=>$.toFixed(4))} )`;switch(p0.getTransfer(J)){case x$:return[Q,"LinearTransferOETF"];case QJ:return[Q,"sRGBTransferOETF"];default:return _0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function dK(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+a5(J.getShaderSource(Q),Y)}else return K}function t5(J,Q){let $=r5(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( ${$[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var e5={[nQ]:"Linear",[sQ]:"Reinhard",[iQ]:"Cineon",[oQ]:"ACESFilmic",[rQ]:"AgX",[tQ]:"Neutral",[aQ]:"Custom"};function JE(J,Q){let $=e5[Q];if($===void 0)return _0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var HQ=new y;function QE(){p0.getLuminanceCoefficients(HQ);let J=HQ.x.toFixed(4),Q=HQ.y.toFixed(4),$=HQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function $E(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(b7).join(`
`)}function WE(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function ZE(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function b7(J){return J!==""}function uK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function cK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var KE=/^[ \t]*#include +<([\w\d./]+)>/gm;function FW(J){return J.replace(KE,HE)}function HE(J,Q){let $=g0[Q];if($===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return FW($)}var YE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nK(J){return J.replace(YE,XE)}function XE(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function sK(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var UE={[R7]:"SHADOWMAP_TYPE_PCF",[g8]:"SHADOWMAP_TYPE_VSM"};function GE(J){return UE[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var EE={[l8]:"ENVMAP_MODE_REFRACTION"};function NE(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return EE[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qE={[QK]:"ENVMAP_BLENDING_MULTIPLY",[$K]:"ENVMAP_BLENDING_MIX",[WK]:"ENVMAP_BLENDING_ADD"};function FE(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return qE[J.combine]||"ENVMAP_BLENDING_NONE"}function OE(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=GE($),U=$.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",G=NE($),N=FE($),E=$E($),O=WE(K),L=Z.createProgram(),k,F,q=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(k=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(b7).join(`
`),k.length>0)k+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(b7).join(`
`),F.length>0)F+=`
`}else k=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+$.diffuseRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(b7).join(`
`),F=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+N:"",$.envMapPMREM?"#define ENVMAP_MAX_LOD "+$.envMapMaxLod+".0":"",$.envMapPMREM?"#define ENVMAP_SIZE "+$.envMapSize+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==O9?"#define TONE_MAPPING":"",$.toneMapping!==O9?g0.tonemapping_pars_fragment:"",$.toneMapping!==O9?JE("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",g0.colorspace_pars_fragment,t5("linearToOutputTexel",$.outputColorSpace),QE(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(b7).join(`
`);if(H=FW(H),H=uK(H,$),H=cK(H,$),Y=FW(Y),Y=uK(Y,$),Y=cK(Y,$),H=nK(H),Y=nK(Y),$.isRawShaderMaterial!==!0)q=`#version 300 es
`,k=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+k,F=["#define varying in",$.glslVersion===m$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===m$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let D=q+k+H,_=q+F+Y,z=lK(Z,Z.VERTEX_SHADER,D),C=lK(Z,Z.FRAGMENT_SHADER,_);if(Z.attachShader(L,z),Z.attachShader(L,C),$.index0AttributeName!==void 0)Z.bindAttribLocation(L,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(L,0,"position");Z.linkProgram(L);function I(g){if(J.debug.checkShaderErrors){let j=Z.getProgramInfoLog(L)||"",l=Z.getShaderInfoLog(z)||"",t=Z.getShaderInfoLog(C)||"",A=j.trim(),s=l.trim(),o=t.trim(),x=!0,K0=!0;if(Z.getProgramParameter(L,Z.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,L,z,C);else{let u=dK(Z,z,"vertex"),r=dK(Z,C,"fragment");S0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(L,Z.VALIDATE_STATUS)+`

Material Name: `+g.name+`
Material Type: `+g.type+`

Program Info Log: `+A+`
`+u+`
`+r)}else if(A!=="")_0("WebGLProgram: Program Info Log:",A);else if(s===""||o==="")K0=!1;if(K0)g.diagnostics={runnable:x,programLog:A,vertexShader:{log:s,prefix:k},fragmentShader:{log:o,prefix:F}}}Z.deleteShader(z),Z.deleteShader(C),R=new x7(Z,L),B=ZE(Z,L)}let R;this.getUniforms=function(){if(R===void 0)I(this);return R};let B;this.getAttributes=function(){if(B===void 0)I(this);return B};let S=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(S===!1)S=Z.getProgramParameter(L,i5);return S},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(L),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=o5++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=z,this.fragmentShader=C,this}var RE=0;class EH{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new NH(J),Q.set(J,$);return $}}class NH{constructor(J){this.id=RE++,this.code=J,this.usedTimes=0}}function LE(J){return J===O8||J===S6||J===j6}function ME(J,Q,$,W,Z,K){let H=new f6,Y=new EH,X=new Set,U=[],G=new Map,N=W.logarithmicDepthBuffer,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(R){if(X.add(R),R===0)return"uv";return`uv${R}`}function L(R,B,S,g,j,l){let t=g.fog,A=j.geometry,s=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?g.environment:null,o=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,x=Q.get(R.envMap||s,o),K0=E[R.type],u=W.precision;if(R.precision!==null){if(u=W.getMaxPrecision(R.precision),u!==R.precision)_0("WebGLProgram.getParameters:",R.precision,"not supported, using",u,"instead.")}let r=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,$0=r!==void 0?r.length:0,k0=0;if(A.morphAttributes.position!==void 0)k0=1;if(A.morphAttributes.normal!==void 0)k0=2;if(A.morphAttributes.color!==void 0)k0=3;let i,Q0,V0,I0;if(K0){let F0=D9[K0];i=F0.vertexShader,Q0=F0.fragmentShader}else{i=R.vertexShader,Q0=R.fragmentShader;let F0=Y.getVertexShaderStage(R),t0=Y.getFragmentShaderStage(R);Y.update(R,F0,t0),V0=F0.id,I0=t0.id}let w0=J.getRenderTarget(),D0=J.state.buffers.depth.getReversed(),a0=j.isInstancedMesh===!0,m0=j.isBatchedMesh===!0,b0=!!R.map,KJ=!!R.matcap,n0=!!x,UJ=n0&&x.isPMREMTexture===!0,GJ=!!R.aoMap,bJ=!!R.lightMap,mJ=!!R.bumpMap&&R.wireframe===!1,EJ=!!R.normalMap,PJ=!!R.displacementMap,xJ=!!R.emissiveMap,gJ=!!R.metalnessMap,W9=!!R.roughnessMap,v=R.anisotropy>0,Z9=R.clearcoat>0,r0=R.diffuseRoughness>0,LJ=R.dispersion>0,E0=R.retroreflectivity>0,$J=R.iridescence>0,A0=R.sheen>0,v0=R.transmission>0,CJ=v&&!!R.anisotropyMap,P=Z9&&!!R.clearcoatMap,M=Z9&&!!R.clearcoatNormalMap,h=Z9&&!!R.clearcoatRoughnessMap,e=r0&&!!R.diffuseRoughnessMap,a=$J&&!!R.iridescenceMap,Z0=$J&&!!R.iridescenceThicknessMap,X0=A0&&!!R.sheenColorMap,m=A0&&!!R.sheenRoughnessMap,n=!!R.specularMap,H0=!!R.specularColorMap,w=!!R.specularIntensityMap,c=v0&&!!R.transmissionMap,d=v0&&!!R.thicknessMap,J0=!!R.gradientMap,W0=!!R.alphaMap,G0=R.alphaTest>0,P0=!!R.alphaHash,z0=!!R.extensions,q0=O9;if(R.toneMapped){if(w0===null||w0.isXRRenderTarget===!0)q0=J.toneMapping}let C0=UJ?x.isCompressedCubeTexture?x.image[0].mipmaps:x.mipmaps:null,x0={shaderID:K0,shaderType:R.type,shaderName:R.name,vertexShader:i,fragmentShader:Q0,defines:R.defines,customVertexShaderID:V0,customFragmentShaderID:I0,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:u,batching:m0,batchingColor:m0&&j._colorsTexture!==null,instancing:a0,instancingColor:a0&&j.instanceColor!==null,instancingMorph:a0&&j.morphTexture!==null,outputColorSpace:w0===null?J.outputColorSpace:w0.isXRRenderTarget===!0?w0.texture.colorSpace:p0.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:b0,matcap:KJ,envMap:n0,envMapMode:n0&&x.mapping,envMapPMREM:UJ,envMapMaxLod:UJ?C0.length-1:null,envMapSize:UJ?C0[0].width:null,aoMap:GJ,lightMap:bJ,bumpMap:mJ,normalMap:EJ,displacementMap:PJ,emissiveMap:xJ,normalMapObjectSpace:EJ&&R.normalMapType===EK,normalMapTangentSpace:EJ&&R.normalMapType===b$,packedNormalMap:EJ&&R.normalMapType===b$&&LE(R.normalMap.format),metalnessMap:gJ,roughnessMap:W9,anisotropy:v,anisotropyMap:CJ,clearcoat:Z9,clearcoatMap:P,clearcoatNormalMap:M,clearcoatRoughnessMap:h,diffuseRoughness:r0,diffuseRoughnessMap:e,dispersion:LJ,retroreflection:E0,iridescence:$J,iridescenceMap:a,iridescenceThicknessMap:Z0,sheen:A0,sheenColorMap:X0,sheenRoughnessMap:m,specularMap:n,specularColorMap:H0,specularIntensityMap:w,transmission:v0,transmissionMap:c,thicknessMap:d,gradientMap:J0,opaque:R.transparent===!1&&R.blending===L7&&R.alphaToCoverage===!1,alphaMap:W0,alphaTest:G0,alphaHash:P0,combine:R.combine,mapUv:b0&&O(R.map.channel),aoMapUv:GJ&&O(R.aoMap.channel),lightMapUv:bJ&&O(R.lightMap.channel),bumpMapUv:mJ&&O(R.bumpMap.channel),normalMapUv:EJ&&O(R.normalMap.channel),displacementMapUv:PJ&&O(R.displacementMap.channel),emissiveMapUv:xJ&&O(R.emissiveMap.channel),metalnessMapUv:gJ&&O(R.metalnessMap.channel),roughnessMapUv:W9&&O(R.roughnessMap.channel),anisotropyMapUv:CJ&&O(R.anisotropyMap.channel),clearcoatMapUv:P&&O(R.clearcoatMap.channel),clearcoatNormalMapUv:M&&O(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:h&&O(R.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:e&&O(R.diffuseRoughnessMap.channel),iridescenceMapUv:a&&O(R.iridescenceMap.channel),iridescenceThicknessMapUv:Z0&&O(R.iridescenceThicknessMap.channel),sheenColorMapUv:X0&&O(R.sheenColorMap.channel),sheenRoughnessMapUv:m&&O(R.sheenRoughnessMap.channel),specularMapUv:n&&O(R.specularMap.channel),specularColorMapUv:H0&&O(R.specularColorMap.channel),specularIntensityMapUv:w&&O(R.specularIntensityMap.channel),transmissionMapUv:c&&O(R.transmissionMap.channel),thicknessMapUv:d&&O(R.thicknessMap.channel),alphaMapUv:W0&&O(R.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(EJ||v),vertexNormals:!!A.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!A.attributes.uv&&(b0||W0),fog:!!t,useFog:R.fog===!0,fogExp2:!!t&&t.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||A.attributes.normal===void 0&&EJ===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:D0,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:$0,morphTextureStride:k0,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:l.filter((F0)=>F0.texture!==null).length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:R.dithering,shadowMapEnabled:J.shadowMap.enabled&&S.length>0,shadowMapType:J.shadowMap.type,toneMapping:q0,decodeVideoTexture:b0&&R.map.isVideoTexture===!0&&p0.getTransfer(R.map.colorSpace)===QJ,decodeVideoTextureEmissive:xJ&&R.emissiveMap.isVideoTexture===!0&&p0.getTransfer(R.emissiveMap.colorSpace)===QJ,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===fJ,flipSided:R.side===pJ,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:z0&&R.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z0&&R.extensions.multiDraw===!0||m0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return x0.vertexUv1s=X.has(1),x0.vertexUv2s=X.has(2),x0.vertexUv3s=X.has(3),X.clear(),x0}function k(R){let B=[];if(R.shaderID)B.push(R.shaderID);else B.push(R.customVertexShaderID),B.push(R.customFragmentShaderID);if(R.defines!==void 0)for(let S in R.defines)B.push(S),B.push(R.defines[S]);if(R.isRawShaderMaterial===!1)F(B,R),q(B,R),B.push(J.outputColorSpace);return B.push(R.customProgramCacheKey),B.join()}function F(R,B){R.push(B.precision),R.push(B.outputColorSpace),R.push(B.envMapMode),R.push(B.envMapPMREM),R.push(B.envMapMaxLod),R.push(B.envMapSize),R.push(B.mapUv),R.push(B.alphaMapUv),R.push(B.lightMapUv),R.push(B.aoMapUv),R.push(B.bumpMapUv),R.push(B.normalMapUv),R.push(B.displacementMapUv),R.push(B.emissiveMapUv),R.push(B.metalnessMapUv),R.push(B.roughnessMapUv),R.push(B.anisotropyMapUv),R.push(B.clearcoatMapUv),R.push(B.clearcoatNormalMapUv),R.push(B.clearcoatRoughnessMapUv),R.push(B.diffuseRoughnessMapUv),R.push(B.iridescenceMapUv),R.push(B.iridescenceThicknessMapUv),R.push(B.sheenColorMapUv),R.push(B.sheenRoughnessMapUv),R.push(B.specularMapUv),R.push(B.specularColorMapUv),R.push(B.specularIntensityMapUv),R.push(B.transmissionMapUv),R.push(B.thicknessMapUv),R.push(B.combine),R.push(B.fogExp2),R.push(B.sizeAttenuation),R.push(B.morphTargetsCount),R.push(B.numSunLights),R.push(B.numDirLights),R.push(B.numPointLights),R.push(B.numSpotLights),R.push(B.numSpotLightMaps),R.push(B.numHemiLights),R.push(B.numRectAreaLights),R.push(B.numSunLightShadows),R.push(B.numDirLightShadows),R.push(B.numPointLightShadows),R.push(B.numSpotLightShadows),R.push(B.numSpotLightShadowsWithMaps),R.push(B.numLightProbes),R.push(B.numLightProbeGrids),R.push(B.shadowMapType),R.push(B.toneMapping),R.push(B.numClippingPlanes),R.push(B.numClipIntersection),R.push(B.depthPacking)}function q(R,B){if(H.disableAll(),B.instancing)H.enable(0);if(B.instancingColor)H.enable(1);if(B.instancingMorph)H.enable(2);if(B.matcap)H.enable(3);if(B.envMap)H.enable(4);if(B.normalMapObjectSpace)H.enable(5);if(B.normalMapTangentSpace)H.enable(6);if(B.clearcoat)H.enable(7);if(B.iridescence)H.enable(8);if(B.alphaTest)H.enable(9);if(B.vertexColors)H.enable(10);if(B.vertexAlphas)H.enable(11);if(B.vertexUv1s)H.enable(12);if(B.vertexUv2s)H.enable(13);if(B.vertexUv3s)H.enable(14);if(B.vertexTangents)H.enable(15);if(B.anisotropy)H.enable(16);if(B.alphaHash)H.enable(17);if(B.batching)H.enable(18);if(B.dispersion)H.enable(19);if(B.retroreflection)H.enable(24);if(B.diffuseRoughness)H.enable(25);if(B.batchingColor)H.enable(20);if(B.gradientMap)H.enable(21);if(B.packedNormalMap)H.enable(22);if(B.vertexNormals)H.enable(23);if(R.push(H.mask),H.disableAll(),B.fog)H.enable(0);if(B.useFog)H.enable(1);if(B.flatShading)H.enable(2);if(B.logarithmicDepthBuffer)H.enable(3);if(B.reversedDepthBuffer)H.enable(4);if(B.skinning)H.enable(5);if(B.morphTargets)H.enable(6);if(B.morphNormals)H.enable(7);if(B.morphColors)H.enable(8);if(B.premultipliedAlpha)H.enable(9);if(B.shadowMapEnabled)H.enable(10);if(B.doubleSided)H.enable(11);if(B.flipSided)H.enable(12);if(B.useDepthPacking)H.enable(13);if(B.dithering)H.enable(14);if(B.transmission)H.enable(15);if(B.sheen)H.enable(16);if(B.opaque)H.enable(17);if(B.pointsUvs)H.enable(18);if(B.decodeVideoTexture)H.enable(19);if(B.decodeVideoTextureEmissive)H.enable(20);if(B.alphaToCoverage)H.enable(21);if(B.numLightProbeGrids>0)H.enable(22);if(B.hasPositionAttribute)H.enable(23);R.push(H.mask)}function D(R){let B=E[R.type],S;if(B){let g=D9[B];S=BK.clone(g.uniforms)}else S=R.uniforms;return S}function _(R,B){let S=G.get(B);if(S!==void 0)++S.usedTimes;else S=new OE(J,B,R,Z),U.push(S),G.set(B,S);return S}function z(R){if(--R.usedTimes===0){let B=U.indexOf(R);U[B]=U[U.length-1],U.pop(),G.delete(R.cacheKey),R.destroy()}}function C(R){Y.remove(R)}function I(){Y.dispose()}return{getParameters:L,getProgramCacheKey:k,getUniforms:D,acquireProgram:_,releaseProgram:z,releaseShaderCache:C,programs:U,dispose:I}}function VE(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function W(H){J.delete(H)}function Z(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function DE(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function iK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function oK(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(E){let O=0;if(E.isInstancedMesh)O+=2;if(E.isSkinnedMesh)O+=1;return O}function Y(E,O,L,k,F,q){let D=J[Q];if(D===void 0)D={id:E.id,object:E,geometry:O,material:L,materialVariant:H(E),groupOrder:k,renderOrder:E.renderOrder,z:F,group:q},J[Q]=D;else D.id=E.id,D.object=E,D.geometry=O,D.material=L,D.materialVariant=H(E),D.groupOrder=k,D.renderOrder=E.renderOrder,D.z=F,D.group=q;return Q++,D}function X(E,O,L,k,F,q,D){if(D.reversedDepth===!0)F=-F;let _=Y(E,O,L,k,F,q);if(L.transmission>0)W.push(_);else if(L.transparent===!0)Z.push(_);else $.push(_)}function U(E,O,L,k,F,q){let D=Y(E,O,L,k,F,q);if(L.transmission>0)W.unshift(D);else if(L.transparent===!0)Z.unshift(D);else $.unshift(D)}function G(E,O){if($.length>1)$.sort(E||DE);if(W.length>1)W.sort(O||iK);if(Z.length>1)Z.sort(O||iK)}function N(){for(let E=Q,O=J.length;E<O;E++){let L=J[E];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:X,unshift:U,finish:N,sort:G}}function kE(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new oK,J.set(W,[H]);else if(Z>=K.length)H=new oK,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function BE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new y,color:new T0};break;case"SpotLight":$={position:new y,direction:new y,color:new T0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new y,color:new T0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new y,skyColor:new T0,groundColor:new T0};break;case"RectAreaLight":$={color:new T0,position:new y,halfWidth:new y,halfHeight:new y};break}return J[Q.id]=$,$}}}function zE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var _E=0;function PE(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function CE(J){let Q=new BE,$=zE(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new y);let Z=new y,K=new f0,H=new f0;function Y(U){let G=0,N=0,E=0;for(let l=0;l<9;l++)W.probe[l].set(0,0,0);let O=0,L=0,k=0,F=0,q=0,D=0,_=0,z=0,C=0,I=0,R=0,B=0,S=0,g=0;U.sort(PE);for(let l=0,t=U.length;l<t;l++){let A=U[l],s=A.color,o=A.intensity,x=A.distance,K0=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===O8)K0=A.shadow.map.texture;else K0=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)G+=s.r*o,N+=s.g*o,E+=s.b*o;else if(A.isLightProbe){for(let u=0;u<9;u++)W.probe[u].addScaledVector(A.sh.coefficients[u],o);g++}else if(A.isSunLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),W.sunShadow[L]=$0,W.sunShadowMap[L]=K0;let k0=r.getViewportCount();for(let i=0;i<k0;i++)W.sunShadowMatrix[k+i]=r.getMatrix(i),W.sunShadowCascade[k+i]=r._cascadeData[i];k+=k0,L++}W.sun[O]=u,O++}else if(A.isDirectionalLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,W.directionalShadow[F]=$0,W.directionalShadowMap[F]=K0,W.directionalShadowMatrix[F]=A.shadow.matrix,C++}W.directional[F]=u,F++}else if(A.isSpotLight){let u=Q.get(A);u.position.setFromMatrixPosition(A.matrixWorld),u.color.copy(s).multiplyScalar(o),u.distance=x,u.coneCos=Math.cos(A.angle),u.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),u.decay=A.decay,W.spot[D]=u;let r=A.shadow;if(A.map){if(W.spotLightMap[B]=A.map,B++,r.updateMatrices(A),A.castShadow)S++}if(W.spotLightMatrix[D]=r.matrix,A.castShadow){let $0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,W.spotShadow[D]=$0,W.spotShadowMap[D]=K0,R++}D++}else if(A.isRectAreaLight){let u=Q.get(A);u.color.copy(s).multiplyScalar(o),u.halfWidth.set(A.width*0.5,0,0),u.halfHeight.set(0,A.height*0.5,0),W.rectArea[_]=u,_++}else if(A.isPointLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),u.distance=A.distance,u.decay=A.decay,A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,$0.shadowCameraNear=r.camera.near,$0.shadowCameraFar=r.camera.far,W.pointShadow[q]=$0,W.pointShadowMap[q]=K0,W.pointShadowMatrix[q]=A.shadow.matrix,I++}W.point[q]=u,q++}else if(A.isHemisphereLight){let u=Q.get(A);u.skyColor.copy(A.color).multiplyScalar(o),u.groundColor.copy(A.groundColor).multiplyScalar(o),W.hemi[z]=u,z++}}if(_>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=N0.LTC_FLOAT_1,W.rectAreaLTC2=N0.LTC_FLOAT_2;else W.rectAreaLTC1=N0.LTC_HALF_1,W.rectAreaLTC2=N0.LTC_HALF_2;W.ambient[0]=G,W.ambient[1]=N,W.ambient[2]=E;let j=W.hash;if(j.sunLength!==O||j.directionalLength!==F||j.pointLength!==q||j.spotLength!==D||j.rectAreaLength!==_||j.hemiLength!==z||j.numSunShadows!==L||j.numDirectionalShadows!==C||j.numPointShadows!==I||j.numSpotShadows!==R||j.numSpotMaps!==B||j.numLightProbes!==g)W.sun.length=O,W.directional.length=F,W.spot.length=D,W.rectArea.length=_,W.point.length=q,W.hemi.length=z,W.sunShadow.length=L,W.sunShadowMap.length=L,W.sunShadowMatrix.length=k,W.sunShadowCascade.length=k,W.directionalShadow.length=C,W.directionalShadowMap.length=C,W.directionalShadowMatrix.length=C,W.pointShadow.length=I,W.pointShadowMap.length=I,W.pointShadowMatrix.length=I,W.spotShadow.length=R,W.spotShadowMap.length=R,W.spotLightMatrix.length=R+B-S,W.spotLightMap.length=B,W.numSpotLightShadowsWithMaps=S,W.numLightProbes=g,j.sunLength=O,j.directionalLength=F,j.pointLength=q,j.spotLength=D,j.rectAreaLength=_,j.hemiLength=z,j.numSunShadows=L,j.numDirectionalShadows=C,j.numPointShadows=I,j.numSpotShadows=R,j.numSpotMaps=B,j.numLightProbes=g,W.version=_E++}function X(U,G){let N=0,E=0,O=0,L=0,k=0,F=0,q=G.matrixWorldInverse;for(let D=0,_=U.length;D<_;D++){let z=U[D];if(z.isSunLight){let C=W.sun[N];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(q),N++}else if(z.isDirectionalLight){let C=W.directional[E];C.direction.setFromMatrixPosition(z.matrixWorld),Z.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(Z),C.direction.transformDirection(q),E++}else if(z.isSpotLight){let C=W.spot[L];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(q),C.direction.setFromMatrixPosition(z.matrixWorld),Z.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(Z),C.direction.transformDirection(q),L++}else if(z.isRectAreaLight){let C=W.rectArea[k];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(q),H.identity(),K.copy(z.matrixWorld),K.premultiply(q),H.extractRotation(K),C.halfWidth.set(z.width*0.5,0,0),C.halfHeight.set(0,z.height*0.5,0),C.halfWidth.applyMatrix4(H),C.halfHeight.applyMatrix4(H),k++}else if(z.isPointLight){let C=W.point[O];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(q),O++}else if(z.isHemisphereLight){let C=W.hemi[F];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(q),F++}}}return{setup:Y,setupView:X,state:W}}function aK(J){let Q=new CE(J),$=[],W=[],Z=[];function K(N){G.camera=N,$.length=0,W.length=0,Z.length=0}function H(N){if(N.isLightProbeGrid)Z.push(N);else $.push(N)}function Y(N){W.push(N)}function X(){Q.setup($),Z.sort((N,E)=>N.priority-E.priority||N.id-E.id)}function U(N){Q.setupView($,N)}let G={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:G,setupLights:X,setupLightsView:U,pushLight:H,pushShadow:Y}}function IE(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),Y;if(H===void 0)Y=new aK(J),Q.set(Z,[Y]);else if(K>=H.length)Y=new aK(J),H.push(Y);else Y=H[K];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AE=`uniform sampler2D shadow_pass;
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
}`,TE=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],SE=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],rK=new f0,f7=new y,qW=new y;function jE(J,Q,$){let W=new E8,Z=new h0,K=new h0,H=new e0,Y=new e$,X=new JW,U={},G=$.maxTextureSize,N={[n9]:pJ,[pJ]:n9,[fJ]:fJ},E=new h9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new h0},radius:{value:4}},vertexShader:wE,fragmentShader:AE}),O=E.clone();O.defines.HORIZONTAL_PASS=1;let L=new _J;L.setAttribute("position",new SJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let k=new BJ(L,E),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R7;let q=this.type;this.render=function(I,R,B){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(I.length===0)return;if(this.type===IZ)_0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=R7;let S=J.getRenderTarget(),g=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),l=J.state;if(l.setBlending(N8),l.buffers.depth.getReversed()===!0)l.buffers.color.setClear(0,0,0,0);else l.buffers.color.setClear(1,1,1,1);l.buffers.depth.setTest(!0),l.setScissorTest(!1);let t=q!==this.type;if(t)R.traverse(function(A){if(A.material)if(Array.isArray(A.material))A.material.forEach((s)=>s.needsUpdate=!0);else A.material.needsUpdate=!0});for(let A=0,s=I.length;A<s;A++){let o=I[A],x=o.shadow;if(x===void 0){_0("WebGLShadowMap:",o,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;Z.copy(x.mapSize);let K0=x.getFrameExtents();if(Z.multiply(K0),K.copy(x.mapSize),Z.x>G||Z.y>G){if(Z.x>G)K.x=Math.floor(G/K0.x),Z.x=K.x*K0.x,x.mapSize.x=K.x;if(Z.y>G)K.y=Math.floor(G/K0.y),Z.y=K.y*K0.y,x.mapSize.y=K.y}let u=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=u,x.map===null||t===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===g8){if(o.isPointLight){_0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new J9(Z.x,Z.y,{format:O8,type:R9,minFilter:jJ,magFilter:jJ,generateMipmaps:!1}),x.map.texture.name=o.name+".shadowMap",x.map.depthTexture=new o9(Z.x,Z.y,j9),x.map.depthTexture.name=o.name+".shadowMapDepth",x.map.depthTexture.format=c8,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=U9,x.map.depthTexture.magFilter=U9}else{if(o.isPointLight)x.map=new XQ(Z.x),x.map.depthTexture=new s6(Z.x,s9);else x.map=new J9(Z.x,Z.y),x.map.depthTexture=new o9(Z.x,Z.y,s9);if(x.map.depthTexture.name=o.name+".shadowMap",x.map.depthTexture.format=c8,this.type===R7)x.map.depthTexture.compareFunction=u?p$:g$,x.map.depthTexture.minFilter=jJ,x.map.depthTexture.magFilter=jJ;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=U9,x.map.depthTexture.magFilter=U9}x.camera.updateProjectionMatrix()}if(x.map.isWebGLCubeRenderTarget!==!0&&(x.map.width!==Z.x||x.map.height!==Z.y))x.map.setSize(Z.x,Z.y);let r=x.map.isWebGLCubeRenderTarget?6:x.getViewportCount();if(o.isPointLight!==!0)x.updateMatrices(o,B);let $0=(x.camera.layers.mask&4294967294)!==0?x.camera.layers:B.layers;for(let k0=0;k0<r;k0++){let i=x.getCamera(k0);if(o.isPointLight){let{camera:Q0,matrix:V0}=x,I0=o.distance||Q0.far;if(I0!==Q0.far)Q0.far=I0,Q0.updateProjectionMatrix();f7.setFromMatrixPosition(o.matrixWorld),Q0.position.copy(f7),qW.copy(Q0.position),qW.add(TE[k0]),Q0.up.copy(SE[k0]),Q0.lookAt(qW),Q0.updateMatrixWorld(),V0.makeTranslation(-f7.x,-f7.y,-f7.z),rK.multiplyMatrices(Q0.projectionMatrix,Q0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(rK,Q0.coordinateSystem,Q0.reversedDepth)}if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,k0),J.clear();else{if(k0===0)J.setRenderTarget(x.map),J.clear();let Q0=x.getViewport(k0);H.set(K.x*Q0.x,K.y*Q0.y,K.x*Q0.z,K.y*Q0.w),l.viewport(H)}W=x.getFrustum(k0),z(R,B,i,o,$0,this.type)}if(x.isPointLightShadow!==!0&&this.type===g8)D(x,B);x.needsUpdate=!1}q=this.type,F.needsUpdate=!1,J.setRenderTarget(S,g,j)};function D(I,R){let B=Q.update(k);if(E.defines.VSM_SAMPLES!==I.blurSamples)E.defines.VSM_SAMPLES=I.blurSamples,O.defines.VSM_SAMPLES=I.blurSamples,E.needsUpdate=!0,O.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new J9(Z.x,Z.y,{format:O8,type:R9});else if(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)I.mapPass.setSize(I.map.width,I.map.height);E.uniforms.shadow_pass.value=I.map.depthTexture,E.uniforms.resolution.value.set(I.map.width,I.map.height),E.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(R,null,B,E,k,null),O.uniforms.shadow_pass.value=I.mapPass.texture,O.uniforms.resolution.value.set(I.map.width,I.map.height),O.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(R,null,B,O,k,null)}function _(I,R,B,S){let g=null,j=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(j!==void 0)g=j;else if(g=B.isPointLight===!0?X:Y,J.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let l=g.uuid,t=R.uuid,A=U[l];if(A===void 0)A={},U[l]=A;let s=A[t];if(s===void 0)s=g.clone(),A[t]=s,R.addEventListener("dispose",C);g=s}if(g.visible=R.visible,g.wireframe=R.wireframe,S===g8)g.side=R.shadowSide!==null?R.shadowSide:R.side;else g.side=R.shadowSide!==null?R.shadowSide:N[R.side];if(g.alphaMap=R.alphaMap,g.alphaTest=R.alphaToCoverage===!0?0.5:R.alphaTest,g.map=R.map,g.clipShadows=R.clipShadows,g.clippingPlanes=R.clippingPlanes,g.clipIntersection=R.clipIntersection,g.displacementMap=R.displacementMap,g.displacementScale=R.displacementScale,g.displacementBias=R.displacementBias,g.wireframeLinewidth=R.wireframeLinewidth,g.linewidth=R.linewidth,B.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let l=J.properties.get(g);l.light=B}return g}function z(I,R,B,S,g,j){if(I.visible===!1)return;if(I.layers.test(g)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&j===g8)&&(!I.frustumCulled||I.intersectsFrustum(W))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);let A=Q.update(I),s=I.material;if(Array.isArray(s)){let o=A.groups;for(let x=0,K0=o.length;x<K0;x++){let u=o[x],r=s[u.materialIndex];if(r&&r.visible){let $0=_(I,r,S,j);I.onBeforeShadow(J,I,R,B,A,$0,u),J.renderBufferDirect(B,null,A,$0,I,u),I.onAfterShadow(J,I,R,B,A,$0,u)}}}else if(s.visible){let o=_(I,s,S,j);I.onBeforeShadow(J,I,R,B,A,o,null),J.renderBufferDirect(B,null,A,o,I,null),I.onAfterShadow(J,I,R,B,A,o,null)}}}let t=I.children;for(let A=0,s=t.length;A<s;A++)z(t[A],R,B,S,g,j)}function C(I){I.target.removeEventListener("dispose",C);for(let B in U){let S=U[B],g=I.target.uuid;if(g in S)S[g].dispose(),delete S[g]}}}function vE(J,Q){function $(){let w=!1,c=new e0,d=null,J0=new e0(0,0,0,0);return{setMask:function(W0){if(d!==W0&&!w)J.colorMask(W0,W0,W0,W0),d=W0},setLocked:function(W0){w=W0},setClear:function(W0,G0,P0,z0,q0){if(q0===!0)W0*=z0,G0*=z0,P0*=z0;if(c.set(W0,G0,P0,z0),J0.equals(c)===!1)J.clearColor(W0,G0,P0,z0),J0.copy(c)},reset:function(){w=!1,d=null,J0.set(-1,0,0,0)}}}function W(){let w=!1,c=!1,d=null,J0=null,W0=null;return{setReversed:function(G0){if(c!==G0){let P0=Q.get("EXT_clip_control");if(G0)P0.clipControlEXT(P0.LOWER_LEFT_EXT,P0.ZERO_TO_ONE_EXT);else P0.clipControlEXT(P0.LOWER_LEFT_EXT,P0.NEGATIVE_ONE_TO_ONE_EXT);c=G0;let z0=W0;W0=null,this.setClear(z0)}},getReversed:function(){return c},setTest:function(G0){if(G0)D0(J.DEPTH_TEST);else a0(J.DEPTH_TEST)},setMask:function(G0){if(d!==G0&&!w)J.depthMask(G0),d=G0},setFunc:function(G0){if(c)G0=DK[G0];if(J0!==G0){switch(G0){case iZ:J.depthFunc(J.NEVER);break;case oZ:J.depthFunc(J.ALWAYS);break;case aZ:J.depthFunc(J.LESS);break;case cQ:J.depthFunc(J.LEQUAL);break;case rZ:J.depthFunc(J.EQUAL);break;case tZ:J.depthFunc(J.GEQUAL);break;case eZ:J.depthFunc(J.GREATER);break;case JK:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}J0=G0}},setLocked:function(G0){w=G0},setClear:function(G0){if(W0!==G0){if(W0=G0,c)G0=1-G0;J.clearDepth(G0)}},reset:function(){w=!1,d=null,J0=null,W0=null,c=!1}}}function Z(){let w=!1,c=null,d=null,J0=null,W0=null,G0=null,P0=null,z0=null,q0=null;return{setTest:function(C0){if(!w)if(C0)D0(J.STENCIL_TEST);else a0(J.STENCIL_TEST)},setMask:function(C0){if(c!==C0&&!w)J.stencilMask(C0),c=C0},setFunc:function(C0,x0,F0){if(d!==C0||J0!==x0||W0!==F0)J.stencilFunc(C0,x0,F0),d=C0,J0=x0,W0=F0},setOp:function(C0,x0,F0){if(G0!==C0||P0!==x0||z0!==F0)J.stencilOp(C0,x0,F0),G0=C0,P0=x0,z0=F0},setLocked:function(C0){w=C0},setClear:function(C0){if(q0!==C0)J.clearStencil(C0),q0=C0},reset:function(){w=!1,c=null,d=null,J0=null,W0=null,G0=null,P0=null,z0=null,q0=null}}}let K=new $,H=new W,Y=new Z,X={},U=new WeakMap,G={},N={},E={},O=new WeakMap,L=[],k=null,F=!1,q=null,D=null,_=null,z=null,C=null,I=null,R=null,B=new T0(0,0,0),S=0,g=!1,j=null,l=null,t=null,A=null,s=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,K0=0,u=J.getParameter(J.VERSION);if(u.indexOf("WebGL")!==-1)K0=parseFloat(/^WebGL (\d)/.exec(u)[1]),x=K0>=1;else if(u.indexOf("OpenGL ES")!==-1)K0=parseFloat(/^OpenGL ES (\d)/.exec(u)[1]),x=K0>=2;let r=null,$0={},k0=J.getParameter(J.SCISSOR_BOX),i=J.getParameter(J.VIEWPORT),Q0=new e0().fromArray(k0),V0=new e0().fromArray(i);function I0(w,c,d,J0){let W0=new Uint8Array(4),G0=J.createTexture();J.bindTexture(w,G0),J.texParameteri(w,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(w,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let P0=0;P0<d;P0++)if(w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texImage3D(c,0,J.RGBA,1,1,J0,0,J.RGBA,J.UNSIGNED_BYTE,W0);else J.texImage2D(c+P0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,W0);return G0}let w0={};w0[J.TEXTURE_2D]=I0(J.TEXTURE_2D,J.TEXTURE_2D,1),w0[J.TEXTURE_CUBE_MAP]=I0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),w0[J.TEXTURE_2D_ARRAY]=I0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),w0[J.TEXTURE_3D]=I0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),D0(J.DEPTH_TEST),H.setFunc(cQ),mJ(!1),EJ(lQ),D0(J.CULL_FACE),GJ(N8);function D0(w){if(G[w]!==!0)J.enable(w),G[w]=!0}function a0(w){if(G[w]!==!1)J.disable(w),G[w]=!1}function m0(w,c){if(E[w]!==c){if(J.bindFramebuffer(w,c),E[w]=c,w===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=c;if(w===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=c;return!0}return!1}function b0(w,c){let d=L,J0=!1;if(w){if(d=O.get(c),d===void 0)d=[],O.set(c,d);let W0=w.textures;if(d.length!==W0.length||d[0]!==J.COLOR_ATTACHMENT0){for(let G0=0,P0=W0.length;G0<P0;G0++)d[G0]=J.COLOR_ATTACHMENT0+G0;d.length=W0.length,J0=!0}}else if(d[0]!==J.BACK)d[0]=J.BACK,J0=!0;if(J0)J.drawBuffers(d)}function KJ(w){if(k!==w)return J.useProgram(w),k=w,!0;return!1}let n0={[p8]:J.FUNC_ADD,[AZ]:J.FUNC_SUBTRACT,[TZ]:J.FUNC_REVERSE_SUBTRACT};n0[SZ]=J.MIN,n0[jZ]=J.MAX;let UJ={[vZ]:J.ZERO,[yZ]:J.ONE,[hZ]:J.SRC_COLOR,[bZ]:J.SRC_ALPHA,[dZ]:J.SRC_ALPHA_SATURATE,[lZ]:J.DST_COLOR,[gZ]:J.DST_ALPHA,[fZ]:J.ONE_MINUS_SRC_COLOR,[xZ]:J.ONE_MINUS_SRC_ALPHA,[mZ]:J.ONE_MINUS_DST_COLOR,[pZ]:J.ONE_MINUS_DST_ALPHA,[uZ]:J.CONSTANT_COLOR,[cZ]:J.ONE_MINUS_CONSTANT_COLOR,[nZ]:J.CONSTANT_ALPHA,[sZ]:J.ONE_MINUS_CONSTANT_ALPHA};function GJ(w,c,d,J0,W0,G0,P0,z0,q0,C0){if(w===N8){if(F===!0)a0(J.BLEND),F=!1;return}if(F===!1)D0(J.BLEND),F=!0;if(w!==wZ){if(w!==q||C0!==g){if(D!==p8||C!==p8)J.blendEquation(J.FUNC_ADD),D=p8,C=p8;if(C0)switch(w){case L7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case mQ:J.blendFunc(J.ONE,J.ONE);break;case dQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case uQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:S0("WebGLState: Invalid blending: ",w);break}else switch(w){case L7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case mQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case dQ:S0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uQ:S0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:S0("WebGLState: Invalid blending: ",w);break}_=null,z=null,I=null,R=null,B.set(0,0,0),S=0,q=w,g=C0}return}if(W0=W0||c,G0=G0||d,P0=P0||J0,c!==D||W0!==C)J.blendEquationSeparate(n0[c],n0[W0]),D=c,C=W0;if(d!==_||J0!==z||G0!==I||P0!==R)J.blendFuncSeparate(UJ[d],UJ[J0],UJ[G0],UJ[P0]),_=d,z=J0,I=G0,R=P0;if(z0.equals(B)===!1||q0!==S)J.blendColor(z0.r,z0.g,z0.b,q0),B.copy(z0),S=q0;q=w,g=!1}function bJ(w,c){w.side===fJ?a0(J.CULL_FACE):D0(J.CULL_FACE);let d=w.side===pJ;if(c)d=!d;mJ(d),w.blending===L7&&w.transparent===!1?GJ(N8):GJ(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),H.setFunc(w.depthFunc),H.setTest(w.depthTest),H.setMask(w.depthWrite),K.setMask(w.colorWrite);let J0=w.stencilWrite;if(Y.setTest(J0),J0)Y.setMask(w.stencilWriteMask),Y.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),Y.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass);xJ(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?D0(J.SAMPLE_ALPHA_TO_COVERAGE):a0(J.SAMPLE_ALPHA_TO_COVERAGE)}function mJ(w){if(j!==w){if(w)J.frontFace(J.CW);else J.frontFace(J.CCW);j=w}}function EJ(w){if(w!==PZ){if(D0(J.CULL_FACE),w!==l)if(w===lQ)J.cullFace(J.BACK);else if(w===CZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a0(J.CULL_FACE);l=w}function PJ(w){if(w!==t){if(x)J.lineWidth(w);t=w}}function xJ(w,c,d){if(w){if(D0(J.POLYGON_OFFSET_FILL),A!==c||s!==d){if(A=c,s=d,H.getReversed())c=-c,d=-d;J.polygonOffset(c,d)}}else a0(J.POLYGON_OFFSET_FILL)}function gJ(w){if(w)D0(J.SCISSOR_TEST);else a0(J.SCISSOR_TEST)}function W9(w){if(w===void 0)w=J.TEXTURE0+o-1;if(r!==w)J.activeTexture(w),r=w}function v(w,c,d){if(d===void 0)if(r===null)d=J.TEXTURE0+o-1;else d=r;let J0=$0[d];if(J0===void 0)J0={type:void 0,texture:void 0},$0[d]=J0;if(J0.type!==w||J0.texture!==c){if(r!==d)J.activeTexture(d),r=d;J.bindTexture(w,c||w0[w]),J0.type=w,J0.texture=c}}function Z9(){let w=$0[r];if(w!==void 0&&w.type!==void 0)J.bindTexture(w.type,null),w.type=void 0,w.texture=void 0}function r0(){try{J.compressedTexImage2D(...arguments)}catch(w){S0("WebGLState:",w)}}function LJ(){try{J.compressedTexImage3D(...arguments)}catch(w){S0("WebGLState:",w)}}function E0(){try{J.texSubImage2D(...arguments)}catch(w){S0("WebGLState:",w)}}function $J(){try{J.texSubImage3D(...arguments)}catch(w){S0("WebGLState:",w)}}function A0(){try{J.compressedTexSubImage2D(...arguments)}catch(w){S0("WebGLState:",w)}}function v0(){try{J.compressedTexSubImage3D(...arguments)}catch(w){S0("WebGLState:",w)}}function CJ(){try{J.texStorage2D(...arguments)}catch(w){S0("WebGLState:",w)}}function P(){try{J.texStorage3D(...arguments)}catch(w){S0("WebGLState:",w)}}function M(){try{J.texImage2D(...arguments)}catch(w){S0("WebGLState:",w)}}function h(){try{J.texImage3D(...arguments)}catch(w){S0("WebGLState:",w)}}function e(w){if(N[w]!==void 0)return N[w];else return J.getParameter(w)}function a(w,c){if(N[w]!==c)J.pixelStorei(w,c),N[w]=c}function Z0(w){if(Q0.equals(w)===!1)J.scissor(w.x,w.y,w.z,w.w),Q0.copy(w)}function X0(w){if(V0.equals(w)===!1)J.viewport(w.x,w.y,w.z,w.w),V0.copy(w)}function m(w,c){let d=U.get(c);if(d===void 0)d=new WeakMap,U.set(c,d);let J0=d.get(w);if(J0===void 0)J0=J.getUniformBlockIndex(c,w.name),J.uniformBlockBinding(c,J0,J0),d.set(w,J0)}function n(w,c,d){let W0=U.get(c).get(w);if(X[W0]!==d)J.bindBufferBase(J.UNIFORM_BUFFER,W0,d),X[W0]=d}function H0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},N={},r=null,$0={},E={},X={},O=new WeakMap,L=[],k=null,F=!1,q=null,D=null,_=null,z=null,C=null,I=null,R=null,B=new T0(0,0,0),S=0,g=!1,j=null,l=null,t=null,A=null,s=null,Q0.set(0,0,J.canvas.width,J.canvas.height),V0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:D0,disable:a0,bindFramebuffer:m0,drawBuffers:b0,useProgram:KJ,setBlending:GJ,setMaterial:bJ,setFlipSided:mJ,setCullFace:EJ,setLineWidth:PJ,setPolygonOffset:xJ,setScissorTest:gJ,activeTexture:W9,bindTexture:v,unbindTexture:Z9,compressedTexImage2D:r0,compressedTexImage3D:LJ,texImage2D:M,texImage3D:h,pixelStorei:a,getParameter:e,updateUBOMapping:m,uniformBlockBinding:n,texStorage2D:CJ,texStorage3D:P,texSubImage2D:E0,texSubImage3D:$J,compressedTexSubImage2D:A0,compressedTexSubImage3D:v0,scissor:Z0,viewport:X0,reset:H0}}function yE(J,Q,$,W,Z,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new h0,G=new WeakMap,N=new Set,E,O=new WeakMap,L=new Set,k=new FinalizationRegistry((P)=>L.delete(P)),F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function q(P,M){return F?new OffscreenCanvas(P,M):b8("canvas")}function D(P,M,h){let e=1,a=CJ(P);if(a.width>h||a.height>h)e=h/Math.max(a.width,a.height);if(e<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Z0=Math.floor(e*a.width),X0=Math.floor(e*a.height);if(E===void 0)E=q(Z0,X0);let m=M?q(Z0,X0):E;return m.width=Z0,m.height=X0,m.getContext("2d").drawImage(P,0,0,Z0,X0),_0("WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+Z0+"x"+X0+")."),m}else{if("data"in P)_0("WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return P}return P}function _(P){return P.generateMipmaps}function z(P){J.generateMipmap(P)}function C(P){if(P.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(P.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function I(P,M,h,e,a,Z0=!1){if(P!==null){if(J[P]!==void 0)return J[P];_0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X0;if(e){if(X0=Q.get("EXT_texture_norm16"),!X0)_0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let m=M;if(M===J.RED){if(h===J.FLOAT)m=J.R32F;if(h===J.HALF_FLOAT)m=J.R16F;if(h===J.UNSIGNED_BYTE)m=J.R8;if(h===J.UNSIGNED_SHORT&&X0)m=X0.R16_EXT;if(h===J.SHORT&&X0)m=X0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.R8UI;if(h===J.UNSIGNED_SHORT)m=J.R16UI;if(h===J.UNSIGNED_INT)m=J.R32UI;if(h===J.BYTE)m=J.R8I;if(h===J.SHORT)m=J.R16I;if(h===J.INT)m=J.R32I}if(M===J.RG){if(h===J.FLOAT)m=J.RG32F;if(h===J.HALF_FLOAT)m=J.RG16F;if(h===J.UNSIGNED_BYTE)m=J.RG8;if(h===J.UNSIGNED_SHORT&&X0)m=X0.RG16_EXT;if(h===J.SHORT&&X0)m=X0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RG8UI;if(h===J.UNSIGNED_SHORT)m=J.RG16UI;if(h===J.UNSIGNED_INT)m=J.RG32UI;if(h===J.BYTE)m=J.RG8I;if(h===J.SHORT)m=J.RG16I;if(h===J.INT)m=J.RG32I}if(M===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGB8UI;if(h===J.UNSIGNED_SHORT)m=J.RGB16UI;if(h===J.UNSIGNED_INT)m=J.RGB32UI;if(h===J.BYTE)m=J.RGB8I;if(h===J.SHORT)m=J.RGB16I;if(h===J.INT)m=J.RGB32I}if(M===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)m=J.RGBA16UI;if(h===J.UNSIGNED_INT)m=J.RGBA32UI;if(h===J.BYTE)m=J.RGBA8I;if(h===J.SHORT)m=J.RGBA16I;if(h===J.INT)m=J.RGBA32I}if(M===J.RGB){if(h===J.UNSIGNED_SHORT&&X0)m=X0.RGB16_EXT;if(h===J.SHORT&&X0)m=X0.RGB16_SNORM_EXT;if(h===J.UNSIGNED_INT_5_9_9_9_REV)m=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)m=J.R11F_G11F_B10F}if(M===J.RGBA){let n=Z0?x$:p0.getTransfer(a);if(h===J.FLOAT)m=J.RGBA32F;if(h===J.HALF_FLOAT)m=J.RGBA16F;if(h===J.UNSIGNED_BYTE)m=n===QJ?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT&&X0)m=X0.RGBA16_EXT;if(h===J.SHORT&&X0)m=X0.RGBA16_SNORM_EXT;if(h===J.UNSIGNED_SHORT_4_4_4_4)m=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)m=J.RGB5_A1}if(m===J.R16F||m===J.R32F||m===J.RG16F||m===J.RG32F||m===J.RGBA16F||m===J.RGBA32F)Q.get("EXT_color_buffer_float");return m}function R(P,M){let h;if(P){if(M===null||M===s9||M===F8)h=J.DEPTH24_STENCIL8;else if(M===j9)h=J.DEPTH32F_STENCIL8;else if(M===V7)h=J.DEPTH24_STENCIL8,_0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===s9||M===F8)h=J.DEPTH_COMPONENT24;else if(M===j9)h=J.DEPTH_COMPONENT32F;else if(M===V7)h=J.DEPTH_COMPONENT16;return h}function B(P,M){if(_(P)===!0||P.isFramebufferTexture&&P.minFilter!==U9&&P.minFilter!==jJ)return Math.log2(Math.max(M.width,M.height))+1;else if(P.mipmaps.length>0)return P.mipmaps.length;else if(P.isCompressedTexture&&Array.isArray(P.image))return M.mipmaps.length;else return 1}function S(P){let M=new WeakRef(P);W.get(P).__ref=M,L.add(M),k.register(P,M,M)}function g(P){let M=W.get(P).__ref;if(M===void 0)return;L.delete(M),k.unregister(M)}function j(P){t(P.target)}function l(P){A(P.target)}function t(P){if(P.removeEventListener("dispose",j),g(P),o(P),P.isVideoTexture)G.delete(P);if(P.isHTMLTexture)N.delete(P)}function A(P){P.removeEventListener("dispose",l),g(P),K0(P)}function s(){for(let P of L){let M=P.deref();if(M===void 0)continue;if(M.isRenderTarget===!0)A(M);else t(M)}L.clear(),N.clear()}function o(P){let M=W.get(P);if(M.__webglInit===void 0)return;let h=P.source,e=O.get(h);if(e){let a=e[M.__cacheKey];if(a.usedTimes--,a.usedTimes===0)x(P);if(Object.keys(e).length===0)O.delete(h)}W.remove(P)}function x(P){let M=W.get(P);J.deleteTexture(M.__webglTexture);let h=P.source,e=O.get(h);delete e[M.__cacheKey],H.memory.textures--}function K0(P){let M=W.get(P);if(M.__depthDisposeCallback)M.__depthDisposeCallback();let h=P.depthTexture;if(h&&h.renderTarget===P)t(h);if(P.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(M.__webglFramebuffer[a]))for(let Z0=0;Z0<M.__webglFramebuffer[a].length;Z0++)J.deleteFramebuffer(M.__webglFramebuffer[a][Z0]);else J.deleteFramebuffer(M.__webglFramebuffer[a]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[a])}else{if(Array.isArray(M.__webglFramebuffer))for(let a=0;a<M.__webglFramebuffer.length;a++)J.deleteFramebuffer(M.__webglFramebuffer[a]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let a=0;a<M.__webglColorRenderbuffer.length;a++)if(M.__webglColorRenderbuffer[a])J.deleteRenderbuffer(M.__webglColorRenderbuffer[a])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let e=P.textures;for(let a=0,Z0=e.length;a<Z0;a++){let X0=W.get(e[a]);if(X0.__webglTexture)J.deleteTexture(X0.__webglTexture),H.memory.textures--;W.remove(e[a])}W.remove(P)}let u=0;function r(){u=0}function $0(){return u}function k0(P){u=P}function i(){let P=u;if(P>=Z.maxTextures)_0("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+Z.maxTextures);return u+=1,P}function Q0(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.mipmapsAutoUpdate),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function V0(P,M){let h=W.get(P);if(P.isVideoTexture)A0(P);if(P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&h.__version!==P.version){let e=P.image;if(e===null)_0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)_0("WebGLRenderer: Texture marked for update but image is incomplete");else{bJ(h,P,M);return}}else if(P.isExternalTexture)h.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+M)}function I0(P,M){let h=W.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&h.__version!==P.version){bJ(h,P,M);return}else if(P.isExternalTexture)h.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+M)}function w0(P,M){let h=W.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&h.__version!==P.version){bJ(h,P,M);return}$.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+M)}function D0(P,M){let h=W.get(P);if(P.version>0&&h.__version!==P.version){mJ(h,P,M);return}$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+M)}let a0={[m8]:J.REPEAT,[d8]:J.CLAMP_TO_EDGE,[P6]:J.MIRRORED_REPEAT},m0={[U9]:J.NEAREST,[C6]:J.NEAREST_MIPMAP_NEAREST,[q8]:J.NEAREST_MIPMAP_LINEAR,[jJ]:J.LINEAR,[u8]:J.LINEAR_MIPMAP_NEAREST,[G9]:J.LINEAR_MIPMAP_LINEAR},b0={[NK]:J.NEVER,[l$]:J.ALWAYS,[qK]:J.LESS,[g$]:J.LEQUAL,[FK]:J.EQUAL,[p$]:J.GEQUAL,[OK]:J.GREATER,[RK]:J.NOTEQUAL};function KJ(P,M){if(M.type===j9&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===jJ||M.magFilter===u8||M.magFilter===q8||M.magFilter===G9||M.minFilter===jJ||M.minFilter===u8||M.minFilter===q8||M.minFilter===G9))_0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(P,J.TEXTURE_WRAP_S,a0[M.wrapS]),J.texParameteri(P,J.TEXTURE_WRAP_T,a0[M.wrapT]),P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texParameteri(P,J.TEXTURE_WRAP_R,a0[M.wrapR]);if(J.texParameteri(P,J.TEXTURE_MAG_FILTER,m0[M.magFilter]),J.texParameteri(P,J.TEXTURE_MIN_FILTER,m0[M.minFilter]),M.compareFunction)J.texParameteri(P,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(P,J.TEXTURE_COMPARE_FUNC,b0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===U9)return;if(M.minFilter!==q8&&M.minFilter!==G9)return;if(M.type===j9&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||W.get(M).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(P,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,Z.getMaxAnisotropy())),W.get(M).__currentAnisotropy=M.anisotropy}}}function n0(P,M){let h=!1;if(P.__webglInit===void 0)P.__webglInit=!0,M.addEventListener("dispose",j),S(M);let e=M.source,a=O.get(e);if(a===void 0)a={},O.set(e,a);let Z0=Q0(M);if(Z0!==P.__cacheKey){if(a[Z0]===void 0)a[Z0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,h=!0;a[Z0].usedTimes++;let X0=a[P.__cacheKey];if(X0!==void 0){if(a[P.__cacheKey].usedTimes--,X0.usedTimes===0)x(M)}P.__cacheKey=Z0,P.__webglTexture=a[Z0].texture}return h}function UJ(P,M,h){return Math.floor(Math.floor(P/h)/M)}function GJ(P,M,h,e){let Z0=P.updateRanges;if(Z0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,h,e,M.data);else{Z0.sort((w,c)=>w.start-c.start);let X0=0;for(let w=1;w<Z0.length;w++){let c=Z0[X0],d=Z0[w],J0=c.start+c.count,W0=UJ(d.start,M.width,4),G0=UJ(c.start,M.width,4);if(d.start<=J0+1&&W0===G0&&UJ(d.start+d.count-1,M.width,4)===W0)c.count=Math.max(c.count,d.start+d.count-c.start);else++X0,Z0[X0]=d}Z0.length=X0+1;let m=$.getParameter(J.UNPACK_ROW_LENGTH),n=$.getParameter(J.UNPACK_SKIP_PIXELS),H0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let w=0,c=Z0.length;w<c;w++){let d=Z0[w],J0=Math.floor(d.start/4),W0=Math.ceil(d.count/4),G0=J0%M.width,P0=Math.floor(J0/M.width),z0=W0,q0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,G0),$.pixelStorei(J.UNPACK_SKIP_ROWS,P0),$.texSubImage2D(J.TEXTURE_2D,0,G0,P0,z0,1,h,e,M.data)}P.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,m),$.pixelStorei(J.UNPACK_SKIP_PIXELS,n),$.pixelStorei(J.UNPACK_SKIP_ROWS,H0)}}function bJ(P,M,h){let e=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)e=J.TEXTURE_3D;let a=n0(P,M),Z0=M.source;$.bindTexture(e,P.__webglTexture,J.TEXTURE0+h);let X0=W.get(Z0);if(Z0.version!==X0.__version||a===!0){if($.activeTexture(J.TEXTURE0+h),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let q0=p0.getPrimaries(p0.workingColorSpace),C0=M.colorSpace===R8?null:p0.getPrimaries(M.colorSpace),x0=M.colorSpace===R8||q0===C0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,x0)}$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let n=D(M.image,!1,Z.maxTextureSize);n=v0(M,n);let H0=K.convert(M.format,M.colorSpace),w=K.convert(M.type),c=I(M.internalFormat,H0,w,M.normalized,M.colorSpace,M.isVideoTexture);KJ(e,M);let d,J0=M.mipmaps,W0=M.isVideoTexture!==!0,G0=X0.__version===void 0||a===!0,P0=Z0.dataReady,z0=B(M,n);if(M.isDepthTexture){if(c=R(M.format===i9,M.type),G0)if(W0)$.texStorage2D(J.TEXTURE_2D,1,c,n.width,n.height);else $.texImage2D(J.TEXTURE_2D,0,c,n.width,n.height,0,H0,w,null)}else if(M.isDataTexture)if(J0.length>0){if(W0&&G0)$.texStorage2D(J.TEXTURE_2D,z0,c,J0[0].width,J0[0].height);for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],W0){if(P0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,w,d.data)}else $.texImage2D(J.TEXTURE_2D,q0,c,d.width,d.height,0,H0,w,d.data);M.generateMipmaps=!1}else if(W0){if(G0)$.texStorage2D(J.TEXTURE_2D,z0,c,n.width,n.height);if(P0)GJ(M,n,H0,w)}else $.texImage2D(J.TEXTURE_2D,0,c,n.width,n.height,0,H0,w,n.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(W0&&G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,z0,c,J0[0].width,J0[0].height,n.depth);for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],M.format!==v9)if(H0!==null)if(W0){if(P0)if(M.layerUpdates.size>0){let x0=EW(d.width,d.height,M.format,M.type);for(let F0 of M.layerUpdates){let t0=d.data.subarray(F0*x0/d.data.BYTES_PER_ELEMENT,(F0+1)*x0/d.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,F0,d.width,d.height,1,H0,t0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,d.width,d.height,n.depth,H0,d.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,q0,c,d.width,d.height,n.depth,0,d.data,0,0);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(P0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,d.width,d.height,n.depth,H0,w,d.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,q0,c,d.width,d.height,n.depth,0,H0,w,d.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(W0&&G0)$.texStorage2D(J.TEXTURE_2D,z0,c,J0[0].width,J0[0].height);for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],M.format!==v9)if(H0!==null)if(W0){if(P0)$.compressedTexSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,d.data)}else $.compressedTexImage2D(J.TEXTURE_2D,q0,c,d.width,d.height,0,d.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(P0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,w,d.data)}else $.texImage2D(J.TEXTURE_2D,q0,c,d.width,d.height,0,H0,w,d.data)}else if(M.isDataArrayTexture)if(W0){if(G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,z0,c,n.width,n.height,n.depth);if(P0)if(M.layerUpdates.size>0){let q0=EW(n.width,n.height,M.format,M.type);for(let C0 of M.layerUpdates){let x0=n.data.subarray(C0*q0/n.data.BYTES_PER_ELEMENT,(C0+1)*q0/n.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,C0,n.width,n.height,1,H0,w,x0)}M.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,n.width,n.height,n.depth,H0,w,n.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,c,n.width,n.height,n.depth,0,H0,w,n.data);else if(M.isData3DTexture)if(W0){if(G0)$.texStorage3D(J.TEXTURE_3D,z0,c,n.width,n.height,n.depth);if(P0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,n.width,n.height,n.depth,H0,w,n.data)}else $.texImage3D(J.TEXTURE_3D,0,c,n.width,n.height,n.depth,0,H0,w,n.data);else if(M.isFramebufferTexture){if(G0)if(W0)$.texStorage2D(J.TEXTURE_2D,z0,c,n.width,n.height);else{let{width:q0,height:C0}=n;for(let x0=0;x0<z0;x0++)$.texImage2D(J.TEXTURE_2D,x0,c,q0,C0,0,H0,w,null),q0>>=1,C0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let q0=J.canvas;if(!q0.hasAttribute("layoutsubtree"))q0.setAttribute("layoutsubtree","true");if(n.parentNode!==q0){q0.appendChild(n),N.add(M),q0.onpaint=(C0)=>{let x0=C0.changedElements;for(let F0 of N)if(x0.includes(F0.image))F0.needsUpdate=!0},q0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,n);else{let{RGBA:x0,RGBA:F0,UNSIGNED_BYTE:t0}=J;J.texElementImage2D(J.TEXTURE_2D,0,x0,F0,t0,n)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(J0.length>0){if(W0&&G0){let q0=CJ(J0[0]);$.texStorage2D(J.TEXTURE_2D,z0,c,q0.width,q0.height)}for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],W0){if(P0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,H0,w,d)}else $.texImage2D(J.TEXTURE_2D,q0,c,H0,w,d);M.generateMipmaps=!1}else if(W0){if(G0){let q0=CJ(n);$.texStorage2D(J.TEXTURE_2D,z0,c,q0.width,q0.height)}if(P0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,H0,w,n)}else $.texImage2D(J.TEXTURE_2D,0,c,H0,w,n);if(_(M)&&M.mipmapsAutoUpdate===!0)z(e);if(X0.__version=Z0.version,M.onUpdate)M.onUpdate(M)}P.__version=M.version}function mJ(P,M,h){if(M.image.length!==6)return;let e=n0(P,M),a=M.source;$.bindTexture(J.TEXTURE_CUBE_MAP,P.__webglTexture,J.TEXTURE0+h);let Z0=W.get(a);if(a.version!==Z0.__version||e===!0){$.activeTexture(J.TEXTURE0+h);let X0=p0.getPrimaries(p0.workingColorSpace),m=M.colorSpace===R8?null:p0.getPrimaries(M.colorSpace),n=M.colorSpace===R8||X0===m?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,n);let H0=M.isCompressedTexture||M.image[0].isCompressedTexture,w=M.image[0]&&M.image[0].isDataTexture,c=[];for(let F0=0;F0<6;F0++){if(!H0&&!w)c[F0]=D(M.image[F0],!0,Z.maxCubemapSize);else c[F0]=w?M.image[F0].image:M.image[F0];c[F0]=v0(M,c[F0])}let d=c[0],J0=K.convert(M.format,M.colorSpace),W0=K.convert(M.type),G0=I(M.internalFormat,J0,W0,M.normalized,M.colorSpace),P0=M.isVideoTexture!==!0,z0=Z0.__version===void 0||e===!0,q0=a.dataReady,C0=B(M,d);KJ(J.TEXTURE_CUBE_MAP,M);let x0;if(M.isDepthTexture){if(G0=R(M.format===i9,M.type),z0)if(P0)$.texStorage2D(J.TEXTURE_CUBE_MAP,1,G0,d.width,d.height);else for(let F0=0;F0<6;F0++)$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,d.width,d.height,0,J0,W0,null)}else if(H0){if(P0&&z0)$.texStorage2D(J.TEXTURE_CUBE_MAP,C0,G0,d.width,d.height);for(let F0=0;F0<6;F0++){x0=c[F0].mipmaps;for(let t0=0;t0<x0.length;t0++){let MJ=x0[t0];if(M.format!==v9)if(J0!==null)if(P0){if(q0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,0,0,MJ.width,MJ.height,J0,MJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,G0,MJ.width,MJ.height,0,MJ.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(P0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,0,0,MJ.width,MJ.height,J0,W0,MJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,G0,MJ.width,MJ.height,0,J0,W0,MJ.data)}}}else{if(x0=M.mipmaps,P0&&z0){if(x0.length>0)C0++;let F0=CJ(c[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,C0,G0,F0.width,F0.height)}for(let F0=0;F0<6;F0++)if(w){if(P0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,c[F0].width,c[F0].height,J0,W0,c[F0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,c[F0].width,c[F0].height,0,J0,W0,c[F0].data);for(let t0=0;t0<x0.length;t0++){let B9=x0[t0].image[F0].image;if(P0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,0,0,B9.width,B9.height,J0,W0,B9.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,G0,B9.width,B9.height,0,J0,W0,B9.data)}}else{if(P0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,J0,W0,c[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,J0,W0,c[F0]);for(let t0=0;t0<x0.length;t0++){let MJ=x0[t0];if(P0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,0,0,J0,W0,MJ.image[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,G0,J0,W0,MJ.image[F0])}}}if(_(M)&&M.mipmapsAutoUpdate===!0)z(J.TEXTURE_CUBE_MAP);if(Z0.__version=a.version,M.onUpdate)M.onUpdate(M)}P.__version=M.version}function EJ(P,M,h,e,a,Z0){let X0=K.convert(h.format,h.colorSpace),m=K.convert(h.type),n=I(h.internalFormat,X0,m,h.normalized,h.colorSpace),H0=W.get(M),w=W.get(h);if(w.__renderTarget=M,!H0.__hasExternalTextures){let c=Math.max(1,M.width>>Z0),d=Math.max(1,M.height>>Z0);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)$.texImage3D(a,Z0,n,c,d,M.depth,0,X0,m,null);else $.texImage2D(a,Z0,n,c,d,0,X0,m,null)}if($.bindFramebuffer(J.FRAMEBUFFER,P),$J(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,a,w.__webglTexture,0,E0(M));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,a,w.__webglTexture,Z0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function PJ(P,M,h){if(J.bindRenderbuffer(J.RENDERBUFFER,P),M.depthBuffer){let e=M.depthTexture,a=e&&e.isDepthTexture?e.type:null,Z0=R(M.stencilBuffer,a),X0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if($J(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(M),Z0,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(M),Z0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,P)}else{let e=M.textures;for(let a=0;a<e.length;a++){let Z0=e[a],X0=K.convert(Z0.format,Z0.colorSpace),m=K.convert(Z0.type),n=I(Z0.internalFormat,X0,m,Z0.normalized,Z0.colorSpace);if($J(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(M),n,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(M),n,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,n,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function xJ(P,M,h){let e=M.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let a=W.get(M.depthTexture);a.__renderTarget=M;let Z0=e?M.depthTexture.image[0]:M.depthTexture.image;if(!a.__webglTexture||Z0.width!==M.width||Z0.height!==M.height)Z0.width=M.width,Z0.height=M.height,M.depthTexture.needsUpdate=!0;if(e)D0(M.depthTexture,0);else V0(M.depthTexture,0);let X0=a.__webglTexture,m=E0(M),n=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+h:J.TEXTURE_2D,H0=M.depthTexture.format===i9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===c8)if($J(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,n,X0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,n,X0,0);else if(M.depthTexture.format===i9)if($J(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,n,X0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,n,X0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gJ(P){let M=W.get(P),h=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let e=P.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(e){let a=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,e.removeEventListener("dispose",a)};e.addEventListener("dispose",a),M.__depthDisposeCallback=a}M.__boundDepthTexture=e}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(h)for(let e=0;e<6;e++)xJ(M.__webglFramebuffer[e],P,e);else if(P.texture.mipmaps.length>0)xJ(M.__webglFramebuffer[0],P,0);else xJ(M.__webglFramebuffer,P,0);else if(h){M.__webglDepthbuffer=[];for(let e=0;e<6;e++)if($.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[e]),M.__webglDepthbuffer[e]===void 0)M.__webglDepthbuffer[e]=J.createRenderbuffer(),PJ(M.__webglDepthbuffer[e],P,!1);else{let a=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=M.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,Z0)}}else{if(P.texture.mipmaps.length>0)$.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),PJ(M.__webglDepthbuffer,P,!1);else{let a=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,Z0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function W9(P,M,h){let e=W.get(P);if(M!==void 0)EJ(e.__webglFramebuffer,P,P.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)gJ(P)}function v(P){let M=P.texture,h=W.get(P),e=W.get(M);P.addEventListener("dispose",l),S(P);let a=P.textures,Z0=P.isWebGLCubeRenderTarget===!0,X0=a.length>1;if(!X0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=M.version,H.memory.textures++}if(Z0){h.__webglFramebuffer=[];for(let m=0;m<6;m++)if(M.mipmaps.length>0){h.__webglFramebuffer[m]=[];for(let n=0;n<M.mipmaps.length;n++)h.__webglFramebuffer[m][n]=J.createFramebuffer()}else h.__webglFramebuffer[m]=J.createFramebuffer()}else{if(M.mipmaps.length>0){h.__webglFramebuffer=[];for(let m=0;m<M.mipmaps.length;m++)h.__webglFramebuffer[m]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(X0)for(let m=0,n=a.length;m<n;m++){let H0=W.get(a[m]);if(H0.__webglTexture===void 0)H0.__webglTexture=J.createTexture(),H.memory.textures++}if(P.samples>0&&$J(P)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let m=0;m<a.length;m++){let n=a[m];h.__webglColorRenderbuffer[m]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[m]);let H0=K.convert(n.format,n.colorSpace),w=K.convert(n.type),c=I(n.internalFormat,H0,w,n.normalized,n.colorSpace,P.isXRRenderTarget===!0),d=E0(P);J.renderbufferStorageMultisample(J.RENDERBUFFER,d,c,P.width,P.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+m,J.RENDERBUFFER,h.__webglColorRenderbuffer[m])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),P.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),PJ(h.__webglDepthRenderbuffer,P,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Z0){$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),KJ(J.TEXTURE_CUBE_MAP,M);for(let m=0;m<6;m++)if(M.mipmaps.length>0)for(let n=0;n<M.mipmaps.length;n++)EJ(h.__webglFramebuffer[m][n],P,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,n);else EJ(h.__webglFramebuffer[m],P,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);if(_(M))z(J.TEXTURE_CUBE_MAP);else if(M.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);$.unbindTexture()}else if(X0){for(let m=0,n=a.length;m<n;m++){let H0=a[m],w=W.get(H0),c=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)c=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,w.__webglTexture),KJ(c,H0),EJ(h.__webglFramebuffer,P,H0,J.COLOR_ATTACHMENT0+m,c,0),_(H0))z(c)}$.unbindTexture()}else{let m=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)m=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(m,e.__webglTexture),KJ(m,M),M.mipmaps.length>0)for(let n=0;n<M.mipmaps.length;n++)EJ(h.__webglFramebuffer[n],P,M,J.COLOR_ATTACHMENT0,m,n);else EJ(h.__webglFramebuffer,P,M,J.COLOR_ATTACHMENT0,m,0);if(_(M))z(m);else if(M.mipmaps.length>0)J.texParameteri(m,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);$.unbindTexture()}if(P.depthBuffer)gJ(P)}function Z9(P){let M=P.textures;for(let h=0,e=M.length;h<e;h++){let a=M[h];if(_(a)&&a.mipmapsAutoUpdate===!0){let Z0=C(P),X0=W.get(a).__webglTexture;$.bindTexture(Z0,X0),z(Z0),$.unbindTexture()}}}let r0=[];function LJ(P){if(P.samples>0){if($J(P)===!1){let{textures:M,width:h,height:e}=P,a=J.COLOR_BUFFER_BIT,Z0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=W.get(P),m=M.length>1;if(m)for(let H0=0;H0<M.length;H0++)$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,null,0);if($.bindFramebuffer(J.READ_FRAMEBUFFER,X0.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer);for(let H0=0;H0<M.length;H0++){if(P.resolveDepthBuffer){if(P.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if(P.stencilBuffer&&P.resolveStencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(m){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let w=W.get(M[H0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,w,0)}if(J.blitFramebuffer(0,0,h,e,0,0,h,e,a,J.NEAREST),X===!0){if(r0.length=0,r0.push(J.COLOR_ATTACHMENT0+H0),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1)r0.push(Z0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,r0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),m)for(let H0=0;H0<M.length;H0++){$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let w=W.get(M[H0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,w,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&X){let M=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function E0(P){return Math.min(Z.maxSamples,P.samples)}function $J(P){let M=W.get(P);return P.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function A0(P){let M=H.render.frame;if(G.get(P)!==M)G.set(P,M),P.update()}function v0(P,M){let{colorSpace:h,format:e,type:a}=P;if(P.isCompressedTexture===!0||P.isVideoTexture===!0)return M;if(h!==cJ&&h!==R8)if(p0.getTransfer(h)===QJ){if(e!==v9||a!==E9)_0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else S0("WebGLTextures: Unsupported texture color space:",h);return M}function CJ(P){if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement)U.width=P.naturalWidth||P.width,U.height=P.naturalHeight||P.height;else if(typeof VideoFrame<"u"&&P instanceof VideoFrame)U.width=P.displayWidth,U.height=P.displayHeight;else U.width=P.width,U.height=P.height;return U}this.allocateTextureUnit=i,this.resetTextureUnits=r,this.getTextureUnits=$0,this.setTextureUnits=k0,this.setTexture2D=V0,this.setTexture2DArray=I0,this.setTexture3D=w0,this.setTextureCube=D0,this.rebindTextures=W9,this.setupRenderTarget=v,this.updateRenderTargetMipmap=Z9,this.updateMultisampleRenderTarget=LJ,this.setupDepthRenderbuffer=gJ,this.setupFrameBufferTexture=EJ,this.useMultisampledRTT=$J,this.dispose=s}function hE(J,Q){function $(W,Z=R8){let K,H=p0.getTransfer(Z);if(W===E9)return J.UNSIGNED_BYTE;if(W===J$)return J.UNSIGNED_SHORT_4_4_4_4;if(W===Q$)return J.UNSIGNED_SHORT_5_5_5_1;if(W===HK)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===YK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===ZK)return J.BYTE;if(W===KK)return J.SHORT;if(W===V7)return J.UNSIGNED_SHORT;if(W===eQ)return J.INT;if(W===s9)return J.UNSIGNED_INT;if(W===j9)return J.FLOAT;if(W===R9)return J.HALF_FLOAT;if(W===XK)return J.ALPHA;if(W===UK)return J.RGB;if(W===v9)return J.RGBA;if(W===c8)return J.DEPTH_COMPONENT;if(W===i9)return J.DEPTH_STENCIL;if(W===GK)return J.RED;if(W===$$)return J.RED_INTEGER;if(W===O8)return J.RG;if(W===W$)return J.RG_INTEGER;if(W===Z$)return J.RGBA_INTEGER;if(W===I6||W===w6||W===A6||W===T6)if(H===QJ)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===I6)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===w6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===A6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===T6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===I6)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===w6)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===A6)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===T6)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===K$||W===H$||W===Y$||W===X$)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===K$)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===H$)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===Y$)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===X$)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===U$||W===G$||W===E$||W===N$||W===q$||W===S6||W===F$)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===U$||W===G$)return H===QJ?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===E$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===N$)return K.COMPRESSED_R11_EAC;if(W===q$)return K.COMPRESSED_SIGNED_R11_EAC;if(W===S6)return K.COMPRESSED_RG11_EAC;if(W===F$)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===O$||W===R$||W===L$||W===M$||W===V$||W===D$||W===k$||W===B$||W===z$||W===_$||W===P$||W===C$||W===I$||W===w$)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===O$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===R$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===L$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===M$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===V$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===D$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===k$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===B$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===z$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===_$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===P$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===C$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===I$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===w$)return H===QJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===A$||W===T$||W===S$)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===A$)return H===QJ?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===T$)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===S$)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===j$||W===v$||W===j6||W===y$)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===j$)return K.COMPRESSED_RED_RGTC1_EXT;if(W===v$)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===j6)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===y$)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===F8)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var fE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
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

}`;class qH{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new i6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new h9({vertexShader:fE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new BJ(new S7(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FH extends y9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",Y=1,X=null,U=null,G=null,N=null,E=null,O=null,L=typeof XRWebGLBinding<"u",k=new qH,F={},q=Q.getContextAttributes(),D=null,_=null,z=[],C=[],I=new h0,R=null,B=null,S=new kJ;S.viewport=new e0;let g=new kJ;g.viewport=new e0;let j=[S,g],l=new XW,t=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let Q0=z[i];if(Q0===void 0)Q0=new B7,z[i]=Q0;return Q0.getTargetRaySpace()},this.getControllerGrip=function(i){let Q0=z[i];if(Q0===void 0)Q0=new B7,z[i]=Q0;return Q0.getGripSpace()},this.getHand=function(i){let Q0=z[i];if(Q0===void 0)Q0=new B7,z[i]=Q0;return Q0.getHandSpace()};function s(i){let Q0=C.indexOf(i.inputSource);if(Q0===-1)return;let V0=z[Q0];if(V0!==void 0)V0.update(i.inputSource,i.frame,X||K),V0.dispatchEvent({type:i.type,data:i.inputSource})}function o(){W.removeEventListener("select",s),W.removeEventListener("selectstart",s),W.removeEventListener("selectend",s),W.removeEventListener("squeeze",s),W.removeEventListener("squeezestart",s),W.removeEventListener("squeezeend",s),W.removeEventListener("end",o),W.removeEventListener("inputsourceschange",x);for(let i=0;i<z.length;i++){let Q0=C[i];if(Q0===null)continue;C[i]=null,z[i].disconnect(Q0)}t=null,A=null,k.reset();for(let i in F)delete F[i];if(J.setRenderTarget(D),E=null,N=null,G=null,W=null,_=null,k0.stop(),$.isPresenting=!1,J.setPixelRatio(R),J.setSize(I.width,I.height,!1),B!==null){let i=B.camera;i.fov=B.fov,i.zoom=B.zoom,i.updateProjectionMatrix(),B=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(Z=i,$.isPresenting===!0)_0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(H=i,$.isPresenting===!0)_0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(i){X=i},this.getBaseLayer=function(){return N!==null?N:E},this.getBinding=function(){if(G===null&&L)G=new XRWebGLBinding(W,Q);return G},this.getFrame=function(){return O},this.getSession=function(){return W},this.setSession=async function(i){if(W=i,W!==null){if(D=J.getRenderTarget(),W.addEventListener("select",s),W.addEventListener("selectstart",s),W.addEventListener("selectend",s),W.addEventListener("squeeze",s),W.addEventListener("squeezestart",s),W.addEventListener("squeezeend",s),W.addEventListener("end",o),W.addEventListener("inputsourceschange",x),q.xrCompatible!==!0)await Q.makeXRCompatible();if(R=J.getPixelRatio(),J.getSize(I),!(L&&("createProjectionLayer"in XRWebGLBinding.prototype))){let V0={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:Z};E=new XRWebGLLayer(W,Q,V0),W.updateRenderState({baseLayer:E}),J.setPixelRatio(1),J.setSize(E.framebufferWidth,E.framebufferHeight,!1),_=new J9(E.framebufferWidth,E.framebufferHeight,{format:v9,type:E9,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}else{let V0=null,I0=null,w0=null;if(q.depth)w0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,V0=q.stencil?i9:c8,I0=q.stencil?F8:s9;let D0={colorFormat:Q.RGBA8,depthFormat:w0,scaleFactor:Z};G=this.getBinding(),N=G.createProjectionLayer(D0),W.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),_=new J9(N.textureWidth,N.textureHeight,{format:v9,type:E9,depthTexture:new o9(N.textureWidth,N.textureHeight,I0,void 0,void 0,void 0,void 0,void 0,void 0,V0),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await W.requestReferenceSpace(H),k0.setContext(W),k0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return k.getDepthTexture()};function x(i){for(let Q0=0;Q0<i.removed.length;Q0++){let V0=i.removed[Q0],I0=C.indexOf(V0);if(I0>=0)C[I0]=null,z[I0].disconnect(V0)}for(let Q0=0;Q0<i.added.length;Q0++){let V0=i.added[Q0],I0=C.indexOf(V0);if(I0===-1){for(let D0=0;D0<z.length;D0++)if(D0>=C.length){C.push(V0),I0=D0;break}else if(C[D0]===null){C[D0]=V0,I0=D0;break}if(I0===-1)break}let w0=z[I0];if(w0)w0.connect(V0)}}function K0(i,Q0){if(Q0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices(Q0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(W===null)return;let{near:Q0,far:V0}=i;if(k.texture!==null){if(k.depthNear>0)Q0=k.depthNear;if(k.depthFar>0)V0=k.depthFar}if(l.near=g.near=S.near=Q0,l.far=g.far=S.far=V0,t!==l.near||A!==l.far)W.updateRenderState({depthNear:l.near,depthFar:l.far}),t=l.near,A=l.far;l.layers.mask=i.layers.mask|6,S.layers.mask=l.layers.mask&-5,g.layers.mask=l.layers.mask&-3;let I0=i.parent,w0=l.cameras;K0(l,I0);for(let D0=0;D0<w0.length;D0++)K0(w0[D0],I0);if(l.projectionMatrix.copy(S.projectionMatrix),l.projectionMatrixInverse.copy(S.projectionMatrixInverse),B===null&&i.isPerspectiveCamera)B={camera:i,fov:i.fov,zoom:i.zoom};u(i,l,I0)};function u(i,Q0,V0){if(V0===null)i.matrix.copy(Q0.matrixWorld);else i.matrix.copy(V0.matrixWorld),i.matrix.invert(),i.matrix.multiply(Q0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy(Q0.projectionMatrix),i.projectionMatrixInverse.copy(Q0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=G8*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return l},this.getFoveation=function(){if(N===null&&E===null)return;return Y},this.setFoveation=function(i){if(Y=i,N!==null)N.fixedFoveation=i;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=i},this.hasDepthSensing=function(){return k.texture!==null},this.getDepthSensingMesh=function(){return k.getMesh(l)},this.getCameraTexture=function(i){return F[i]};let r=null;function $0(i,Q0){if(U=Q0.getViewerPose(X||K),O=Q0,U!==null){let V0=U.views;if(E!==null)J.setRenderTargetFramebuffer(_,E.framebuffer),J.setRenderTarget(_);let I0=!1;if(V0.length!==l.cameras.length)l.cameras.length=0,I0=!0;for(let m0=0;m0<V0.length;m0++){let b0=V0[m0],KJ=null;if(E!==null)KJ=E.getViewport(b0);else{let UJ=G.getViewSubImage(N,b0);if(KJ=UJ.viewport,m0===0)J.setRenderTargetTextures(_,UJ.colorTexture,UJ.depthStencilTexture),J.setRenderTarget(_)}let n0=j[m0];if(n0===void 0)n0=new kJ,n0.layers.enable(m0),n0.viewport=new e0,j[m0]=n0;if(n0.matrix.fromArray(b0.transform.matrix),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.projectionMatrix.fromArray(b0.projectionMatrix),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert(),n0.viewport.set(KJ.x,KJ.y,KJ.width,KJ.height),m0===0)l.matrix.copy(n0.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale);if(I0===!0)l.cameras.push(n0)}let w0=W.enabledFeatures;if(w0&&w0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&L){G=$.getBinding();let m0=G.getDepthInformation(V0[0]);if(m0&&m0.isValid&&m0.texture)k.init(m0,W.renderState)}if(w0&&w0.includes("camera-access")&&L){J.state.unbindTexture(),G=$.getBinding();for(let m0=0;m0<V0.length;m0++){let b0=V0[m0].camera;if(b0){let KJ=F[b0];if(!KJ)KJ=new i6,F[b0]=KJ;let n0=G.getCameraImage(b0);KJ.sourceTexture=n0}}}}for(let V0=0;V0<z.length;V0++){let I0=C[V0],w0=z[V0];if(I0!==null&&w0!==void 0)w0.update(I0,Q0,X||K)}if(r)r(i,Q0);if(Q0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Q0});O=null}let k0=new tK;k0.setAnimationLoop($0),this.setAnimationLoop=function(i){r=i},this.dispose=function(){}}}var xE=new f0,OH=new j0;OH.set(-1,0,0,0,1,0,0,0,1);function gE(J,Q){function $(F,q){if(F.matrixAutoUpdate===!0)F.updateMatrix();q.value.copy(F.matrix)}function W(F,q){if(q.color.getRGB(F.fogColor.value,r$(J)),q.isFog)F.fogNear.value=q.near,F.fogFar.value=q.far;else if(q.isFogExp2)F.fogDensity.value=q.density}function Z(F,q,D,_,z){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)K(F,q);else if(q.isMeshLambertMaterial){if(K(F,q),q.envMap)F.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)K(F,q),N(F,q);else if(q.isMeshPhongMaterial){if(K(F,q),G(F,q),q.envMap)F.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(K(F,q),E(F,q),q.isMeshPhysicalMaterial)O(F,q,z)}else if(q.isMeshMatcapMaterial)K(F,q),L(F,q);else if(q.isMeshDepthMaterial)K(F,q);else if(q.isMeshDistanceMaterial)K(F,q),k(F,q);else if(q.isMeshNormalMaterial)K(F,q);else if(q.isLineBasicMaterial){if(H(F,q),q.isLineDashedMaterial)Y(F,q)}else if(q.isPointsMaterial)X(F,q,D,_);else if(q.isSpriteMaterial)U(F,q);else if(q.isShadowMaterial)F.color.value.copy(q.color),F.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function K(F,q){if(F.opacity.value=q.opacity,q.color)F.diffuse.value.copy(q.color);if(q.emissive)F.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)F.map.value=q.map,$(q.map,F.mapTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,$(q.alphaMap,F.alphaMapTransform);if(q.bumpMap){if(F.bumpMap.value=q.bumpMap,$(q.bumpMap,F.bumpMapTransform),F.bumpScale.value=q.bumpScale,q.side===pJ)F.bumpScale.value*=-1}if(q.normalMap){if(F.normalMap.value=q.normalMap,$(q.normalMap,F.normalMapTransform),F.normalScale.value.copy(q.normalScale),q.side===pJ)F.normalScale.value.negate()}if(q.displacementMap)F.displacementMap.value=q.displacementMap,$(q.displacementMap,F.displacementMapTransform),F.displacementScale.value=q.displacementScale,F.displacementBias.value=q.displacementBias;if(q.emissiveMap)F.emissiveMap.value=q.emissiveMap,$(q.emissiveMap,F.emissiveMapTransform);if(q.specularMap)F.specularMap.value=q.specularMap,$(q.specularMap,F.specularMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest;let D=Q.get(q),_=D.envMap,z=D.envMapRotation;if(_){if(F.envMap.value=_,F.envMapRotation.value.setFromMatrix4(xE.makeRotationFromEuler(z)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)F.envMapRotation.value.premultiply(OH);F.reflectivity.value=q.reflectivity,F.ior.value=q.ior,F.refractionRatio.value=q.refractionRatio}if(q.lightMap)F.lightMap.value=q.lightMap,F.lightMapIntensity.value=q.lightMapIntensity,$(q.lightMap,F.lightMapTransform);if(q.aoMap)F.aoMap.value=q.aoMap,F.aoMapIntensity.value=q.aoMapIntensity,$(q.aoMap,F.aoMapTransform)}function H(F,q){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,q.map)F.map.value=q.map,$(q.map,F.mapTransform)}function Y(F,q){F.dashSize.value=q.dashSize,F.totalSize.value=q.dashSize+q.gapSize,F.scale.value=q.scale}function X(F,q,D,_){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,F.size.value=q.size*D,F.scale.value=_*0.5,q.map)F.map.value=q.map,$(q.map,F.uvTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,$(q.alphaMap,F.alphaMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest}function U(F,q){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,F.rotation.value=q.rotation,q.map)F.map.value=q.map,$(q.map,F.mapTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,$(q.alphaMap,F.alphaMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest}function G(F,q){F.specular.value.copy(q.specular),F.shininess.value=Math.max(q.shininess,0.0001)}function N(F,q){if(q.gradientMap)F.gradientMap.value=q.gradientMap}function E(F,q){if(F.metalness.value=q.metalness,q.metalnessMap)F.metalnessMap.value=q.metalnessMap,$(q.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=q.roughness,q.roughnessMap)F.roughnessMap.value=q.roughnessMap,$(q.roughnessMap,F.roughnessMapTransform);if(q.envMap)F.envMapIntensity.value=q.envMapIntensity}function O(F,q,D){if(F.ior.value=q.ior,q.diffuseRoughness>0){if(F.diffuseRoughness.value=q.diffuseRoughness,q.diffuseRoughnessMap)F.diffuseRoughnessMap.value=q.diffuseRoughnessMap,$(q.diffuseRoughnessMap,F.diffuseRoughnessMapTransform)}if(q.sheen>0){if(F.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),F.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)F.sheenColorMap.value=q.sheenColorMap,$(q.sheenColorMap,F.sheenColorMapTransform);if(q.sheenRoughnessMap)F.sheenRoughnessMap.value=q.sheenRoughnessMap,$(q.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(F.clearcoat.value=q.clearcoat,F.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)F.clearcoatMap.value=q.clearcoatMap,$(q.clearcoatMap,F.clearcoatMapTransform);if(q.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,$(q.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(F.clearcoatNormalMap.value=q.clearcoatNormalMap,$(q.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===pJ)F.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)F.dispersion.value=q.dispersion;if(q.retroreflectivity>0)F.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(F.iridescence.value=q.iridescence,F.iridescenceIOR.value=q.iridescenceIOR,F.iridescenceThicknessMinimum.value=q.iridescenceThicknessMinimum,F.iridescenceThicknessMaximum.value=q.iridescenceThicknessMaximum,q.iridescenceMap)F.iridescenceMap.value=q.iridescenceMap,$(q.iridescenceMap,F.iridescenceMapTransform);if(q.iridescenceThicknessMap)F.iridescenceThicknessMap.value=q.iridescenceThicknessMap,$(q.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(q.transmission>0){if(F.transmission.value=q.transmission,F.transmissionSamplerMap.value=D.texture,F.transmissionSamplerSize.value.set(D.width,D.height),q.transmissionMap)F.transmissionMap.value=q.transmissionMap,$(q.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=q.thickness,q.thicknessMap)F.thicknessMap.value=q.thicknessMap,$(q.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=q.attenuationDistance,F.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(F.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)F.anisotropyMap.value=q.anisotropyMap,$(q.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=q.specularIntensity,F.specularColor.value.copy(q.specularColor),q.specularColorMap)F.specularColorMap.value=q.specularColorMap,$(q.specularColorMap,F.specularColorMapTransform);if(q.specularIntensityMap)F.specularIntensityMap.value=q.specularIntensityMap,$(q.specularIntensityMap,F.specularIntensityMapTransform)}function L(F,q){if(q.matcap)F.matcap.value=q.matcap}function k(F,q){let D=Q.get(q).light;F.referencePosition.value.setFromMatrixPosition(D.matrixWorld),F.nearDistance.value=D.shadow.camera.near,F.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function pE(J,Q,$,W){let Z={},K={};function H(D,_){let z=_.program;W.uniformBlockBinding(D,z,Z[D.id])}function Y(D,_){let z=Z[D.id];if(z===void 0)L(D),z=X(D),Z[D.id]=z,D.addEventListener("dispose",F);let C=_.program;W.updateUBOMapping(D,C);let I=Q.render.frame;if(K[D.id]!==I)U(D),K[D.id]=I}function X(D){let _=J.createBuffer(),z=D.__size,C=D.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,z,C),J.bindBuffer(J.UNIFORM_BUFFER,null),_}function U(D){let _=Z[D.id],z=D.uniforms,C=D.__cache;J.bindBuffer(J.UNIFORM_BUFFER,_);for(let I=0,R=z.length;I<R;I++){let B=z[I];if(Array.isArray(B))for(let S=0,g=B.length;S<g;S++)G(B[S],I,S,C);else G(B,I,0,C)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function G(D,_,z,C){if(E(D,_,z,C)===!0){let{__offset:I,value:R}=D;if(Array.isArray(R)){let B=0;for(let S=0;S<R.length;S++){let g=R[S],j=k(g,!0);N(g,D.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else N(R,D.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,I,D.__data)}}function N(D,_,z){if(typeof D==="number"||typeof D==="boolean")_[z]=D;else if(D.isMatrix3)_[z]=D.elements[0],_[z+1]=D.elements[1],_[z+2]=D.elements[2],_[z+3]=0,_[z+4]=D.elements[3],_[z+5]=D.elements[4],_[z+6]=D.elements[5],_[z+7]=0,_[z+8]=D.elements[6],_[z+9]=D.elements[7],_[z+10]=D.elements[8],_[z+11]=0;else if(ArrayBuffer.isView(D))_.set(D.subarray(0,_.length-z),z);else D.toArray(_,z)}function E(D,_,z,C){let I=D.value,R=_+"_"+z;if(Array.isArray(I)){if(C[R]===void 0)C[R]=[];let B=C[R],S=!1;for(let g=0;g<I.length;g++)if(O(I[g],B,g)===!0)S=!0;return S}return O(I,C,R)}function O(D,_,z){if(_[z]===void 0){if(typeof D==="number"||typeof D==="boolean")_[z]=D;else if(ArrayBuffer.isView(D))_[z]=D.slice();else _[z]=D.clone();return!0}else{let C=_[z];if(typeof D==="number"||typeof D==="boolean"){if(C!==D)return _[z]=D,!0}else if(ArrayBuffer.isView(D))return!0;else if(C.equals(D)===!1)return C.copy(D),!0}return!1}function L(D){let _=D.uniforms,z=0,C=16;for(let R=0,B=_.length;R<B;R++){let S=Array.isArray(_[R])?_[R]:[_[R]];for(let g=0,j=S.length;g<j;g++){let l=S[g],t=Array.isArray(l.value)?l.value:[l.value],A=Array.isArray(_[R])||Array.isArray(l.value),s=z;for(let x=0,K0=t.length;x<K0;x++){let u=t[x],r=k(u,A),$0=z%C,k0=$0%r.boundary,i=$0+k0;if(z+=k0,i!==0&&C-i<r.storage)z+=C-i;if(x===0)s=z;z+=r.storage}let o=l.type==="int"?Int32Array:l.type==="uint"?Uint32Array:Float32Array;l.__data=new o((z-s)/Float32Array.BYTES_PER_ELEMENT),l.__offset=s}}let I=z%C;if(I>0)z+=C-I;return D.__size=z,D.__cache={},this}function k(D,_){let z={boundary:0,storage:0};if(typeof D==="number"||typeof D==="boolean")z.boundary=4,z.storage=4;else if(D.isVector2)z.boundary=8,z.storage=8;else if(D.isVector3||D.isColor)z.boundary=16,z.storage=12;else if(D.isVector4)z.boundary=16,z.storage=16;else if(D.isMatrix3)z.boundary=16,z.storage=48;else if(D.isMatrix4)z.boundary=16,z.storage=64;else if(D.isTexture)_0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(D))z.boundary=16,z.storage=D.byteLength;else _0("WebGLRenderer: Unsupported uniform value type.",D);if(_===!0)z.boundary=16,z.storage=Math.ceil(z.storage/16)*16;return z}function F(D){let _=D.target;_.removeEventListener("dispose",F),J.deleteBuffer(Z[_.id]),delete Z[_.id],delete K[_.id]}function q(){for(let D in Z)J.deleteBuffer(Z[D]);Z={},K={}}return{bind:H,update:Y,dispose:q}}var lE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),V9=null;function mE(){if(V9===null)V9=new P7(lE,16,16,O8,R9),V9.name="DFG_LUT",V9.minFilter=jJ,V9.magFilter=jJ,V9.wrapS=d8,V9.wrapT=d8,V9.generateMipmaps=!1,V9.needsUpdate=!0;return V9}class OW{constructor(J={}){let{canvas:Q=LK(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:N=!1,outputBufferType:E=E9}=J;this.isWebGLRenderer=!0;let O;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");O=$.getContextAttributes().alpha}else O=K;let L=E,k=new Set([Z$,W$,$$]),F=new Set([E9,s9,V7,F8,J$,Q$]),q=new Uint32Array(4),D=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},z=null,C=null,I=[],R=[],B=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=O9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,g=!1,j=null,l=null,t=null,A=null;this._outputColorSpace=L9;let s=0,o=0,x=null,K0=-1,u=null,r=new e0,$0=new e0,k0=null,i=new T0(0),Q0=0,V0=Q.width,I0=Q.height,w0=1,D0=null,a0=null,m0=new e0(0,0,V0,I0),b0=new e0(0,0,V0,I0),KJ=!1,n0=new E8,UJ=new m6,GJ=!1,bJ=!1,mJ=new f0,EJ=new y,PJ=new e0,xJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gJ=!1;function W9(){return x===null?w0:1}let v=$;function Z9(V,T){return Q.getContext(V,T)}let r0,LJ,E0,$J,A0,v0,CJ,P,M,h,e,a,Z0,X0,m,n,H0,w,c,d,J0,W0,G0;try{let V={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${_Z}`);if(Q.addEventListener("webglcontextlost",q0,!1),Q.addEventListener("webglcontextrestored",C0,!1),Q.addEventListener("webglcontextcreationerror",x0,!1),v===null){if(v=Z9("webgl2",V),v===null)if(Z9("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}P0()}catch(V){throw Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",C0,!1),Q.removeEventListener("webglcontextcreationerror",x0,!1),S0("WebGLRenderer: "+V.message),V}function P0(){if(r0=new eG(v),r0.init(),J0=new hE(v,r0),LJ=new mG(v,r0,J,J0),E0=new vE(v,r0),LJ.reversedDepthBuffer&&N)E0.buffers.depth.setReversed(!0);l=v.createFramebuffer(),t=v.createFramebuffer(),A=v.createFramebuffer(),$J=new $5(v),A0=new VE,v0=new yE(v,r0,E0,A0,LJ,J0,$J),CJ=new tG(S),P=new ZX(v),W0=new pG(v,P),M=new J5(v,P,$J,W0),h=new Z5(v,M,P,W0,$J),w=new W5(v,LJ,v0),m=new dG(A0),e=new ME(S,CJ,r0,LJ,W0,m),a=new gE(S,A0),Z0=new kE,X0=new IE(r0),H0=new gG(S,CJ,E0,h,O,Y),n=new jE(S,h,LJ),G0=new pE(v,$J,LJ,E0),c=new lG(v,r0,$J),d=new Q5(v,r0,$J),$J.programs=e.programs,S.capabilities=LJ,S.extensions=r0,S.properties=A0,S.renderLists=Z0,S.shadowMap=n,S.state=E0,S.info=$J}if(L!==E9)B=new H5(L,Q.width,Q.height,H,W,Z);let z0=new FH(S,v);this.xr=z0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let V=r0.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=r0.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return w0},this.setPixelRatio=function(V){if(V===void 0)return;w0=V,this.setSize(V0,I0,!1)},this.getSize=function(V){return V.set(V0,I0)},this.setSize=function(V,T,p=!0){if(z0.isPresenting){_0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(V0=V,I0=T,Q.width=Math.floor(V*w0),Q.height=Math.floor(T*w0),p===!0)Q.style.width=V+"px",Q.style.height=T+"px";if(B!==null)B.setSize(Q.width,Q.height);this.setViewport(0,0,V,T)},this.getDrawingBufferSize=function(V){return V.set(V0*w0,I0*w0).floor()},this.setDrawingBufferSize=function(V,T,p){V0=V,I0=T,w0=p,Q.width=Math.floor(V*p),Q.height=Math.floor(T*p),this.setViewport(0,0,V,T)},this.setEffects=function(V){if(L===E9){S0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(V){for(let T=0;T<V.length;T++)if(V[T].isOutputPass===!0){_0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(V||[])},this.getCurrentViewport=function(V){return V.copy(r)},this.getViewport=function(V){return V.copy(m0)},this.setViewport=function(V,T,p,f){if(V.isVector4)m0.set(V.x,V.y,V.z,V.w);else m0.set(V,T,p,f);E0.viewport(r.copy(m0).multiplyScalar(W9()).round())},this.getScissor=function(V){return V.copy(b0)},this.setScissor=function(V,T,p,f){if(V.isVector4)b0.set(V.x,V.y,V.z,V.w);else b0.set(V,T,p,f);E0.scissor($0.copy(b0).multiplyScalar(W9()).round())},this.getScissorTest=function(){return KJ},this.setScissorTest=function(V){E0.setScissorTest(KJ=V)},this.setOpaqueSort=function(V){D0=V},this.setTransparentSort=function(V){a0=V},this.getClearColor=function(V){return V.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor(...arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha(...arguments)},this.clear=function(V=!0,T=!0,p=!0){let f=0;if(V){let b=!1;if(x!==null){let U0=x.texture.format;b=k.has(U0)}if(b){let U0=x.texture.type,R0=F.has(U0),Y0=H0.getClearColor(),O0=H0.getClearAlpha(),B0=Y0.r,y0=Y0.g,u0=Y0.b;if(R0)q[0]=B0,q[1]=y0,q[2]=u0,q[3]=O0,v.clearBufferuiv(v.COLOR,0,q);else D[0]=B0,D[1]=y0,D[2]=u0,D[3]=O0,v.clearBufferiv(v.COLOR,0,D)}else f|=v.COLOR_BUFFER_BIT}if(T)f|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(p)f|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(f!==0)v.clear(f)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(V){V.setRenderer(this),j=V},this.dispose=function(){Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",C0,!1),Q.removeEventListener("webglcontextcreationerror",x0,!1),H0.dispose(),Z0.dispose(),X0.dispose(),v0.dispose(),A0.dispose(),CJ.dispose(),h.dispose(),M.dispose(),W0.dispose(),G0.dispose(),e.dispose(),z0.dispose(),z0.removeEventListener("sessionstart",wW),z0.removeEventListener("sessionend",AW),$8.stop()};function q0(V){V.preventDefault(),O7("WebGLRenderer: Context Lost."),g=!0}function C0(){O7("WebGLRenderer: Context Restored."),g=!1;let V=$J.autoReset,T=n.enabled,p=n.autoUpdate,f=n.needsUpdate,b=n.type;P0(),$J.autoReset=V,n.enabled=T,n.autoUpdate=p,n.needsUpdate=f,n.type=b}function x0(V){S0("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function F0(V){let T=V.target;T.removeEventListener("dispose",F0),t0(T)}function t0(V){MJ(V),A0.remove(V)}function MJ(V){let T=A0.get(V).programs;if(T!==void 0){if(T.forEach(function(p){e.releaseProgram(p)}),V.isShaderMaterial)e.releaseShaderCache(V)}}this.renderBufferDirect=function(V,T,p,f,b,U0){if(T===null)T=xJ;let R0=b.isMesh&&b.matrixWorld.determinantAffine()<0,Y0=eH(V,T,p,f,b);E0.setMaterial(f,R0);let O0=p.index,B0=1;if(f.wireframe===!0){if(O0=M.getWireframeAttribute(p),O0===void 0)return;B0=2}let y0=p.drawRange,u0=p.attributes.position,L0=y0.start*B0,c0=(y0.start+y0.count)*B0;if(U0!==null)L0=Math.max(L0,U0.start*B0),c0=Math.min(c0,(U0.start+U0.count)*B0);if(O0!==null)L0=Math.max(L0,0),c0=Math.min(c0,O0.count);else if(u0!==void 0&&u0!==null)L0=Math.max(L0,0),c0=Math.min(c0,u0.count);let NJ=c0-L0;if(NJ<0||NJ===1/0)return;W0.setup(b,f,Y0,p,O0);let WJ,JJ=c;if(O0!==null)WJ=P.get(O0),JJ=d,JJ.setIndex(WJ);if(b.isMesh)if(f.wireframe===!0)E0.setLineWidth(f.wireframeLinewidth*W9()),JJ.setMode(v.LINES);else JJ.setMode(v.TRIANGLES);else if(b.isLine){let IJ=f.linewidth;if(IJ===void 0)IJ=1;if(E0.setLineWidth(IJ*W9()),b.isLineSegments)JJ.setMode(v.LINES);else if(b.isLineLoop)JJ.setMode(v.LINE_LOOP);else JJ.setMode(v.LINE_STRIP)}else if(b.isPoints)JJ.setMode(v.POINTS);else if(b.isSprite)JJ.setMode(v.TRIANGLES);if(b.isBatchedMesh)if(!r0.get("WEBGL_multi_draw")){let{_multiDrawStarts:IJ,_multiDrawCounts:M0,_multiDrawCount:yJ}=b,i0=O0?P.get(O0).bytesPerElement:1,W8=A0.get(f).currentProgram.getUniforms();for(let wJ=0;wJ<yJ;wJ++)W8.setValue(v,"_gl_DrawID",wJ),JJ.render(IJ[wJ]/i0,M0[wJ])}else JJ.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else if(b.isInstancedMesh)JJ.renderInstances(L0,NJ,b.count);else if(p.isInstancedBufferGeometry){let IJ=p._maxInstanceCount!==void 0?p._maxInstanceCount:1/0,M0=Math.min(p.instanceCount,IJ);JJ.renderInstances(L0,NJ,M0)}else JJ.render(L0,NJ)};function B9(V,T,p,f){if(j!==null&&V.isNodeMaterial)j.setObject(f,V);if(GJ===!0)m.setState(V,p,!1);if(V.transparent===!0&&V.side===fJ&&V.forceSinglePass===!1)V.side=pJ,V.needsUpdate=!0,W7(V,T,f),V.side=n9,V.needsUpdate=!0,W7(V,T,f),V.side=fJ;else W7(V,T,f)}this.compile=function(V,T,p=null){if(p===null)p=V;if(j!==null)j.renderStart(V,T,p);if(C=X0.get(p),C.init(T),R.push(C),p.traverseVisible(function(b){if(b.isLight&&b.layers.test(T.layers)){if(C.pushLight(b),b.castShadow)C.pushShadow(b)}}),V!==p)V.traverseVisible(function(b){if(b.isLight&&b.layers.test(T.layers)){if(C.pushLight(b),b.castShadow)C.pushShadow(b)}});if(C.setupLights(),j!==null)j.updateLights(C.state.lightsArray);if(bJ=this.localClippingEnabled,GJ=m.init(this.clippingPlanes,bJ),GJ===!0)m.setGlobalState(this.clippingPlanes,T);if(j!==null)n.render(C.state.shadowsArray,p,T);let f=new Set;if(V.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let U0=b.material;if(U0)if(Array.isArray(U0))for(let R0=0;R0<U0.length;R0++){let Y0=U0[R0];B9(Y0,p,T,b),f.add(Y0)}else B9(U0,p,T,b),f.add(U0)}),C=R.pop(),j!==null)j.renderEnd();return f},this.compileAsync=function(V,T,p=null){let f=this.compile(V,T,p);return new Promise((b)=>{function U0(){if(f.forEach(function(R0){let O0=A0.get(R0).currentProgram;if(O0===void 0||O0.isReady())f.delete(R0)}),f.size===0){b(V);return}setTimeout(U0,10)}if(r0.get("KHR_parallel_shader_compile")!==null)U0();else setTimeout(U0,10)})};let FQ=null;function rH(V){if(FQ)FQ(V)}function wW(){$8.stop()}function AW(){$8.start()}let $8=new tK;if($8.setAnimationLoop(rH),typeof self<"u")$8.setContext(self);this.setAnimationLoop=function(V){FQ=V,z0.setAnimationLoop(V),V===null?$8.stop():$8.start()},z0.addEventListener("sessionstart",wW),z0.addEventListener("sessionend",AW),this.render=function(V,T){if(T!==void 0&&T.isCamera!==!0){S0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;if(j!==null)j.renderStart(V,T);let p=z0.enabled===!0&&z0.isPresenting===!0,f=B!==null&&(x===null||p)&&B.begin(S,x);if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(T.parent===null&&T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(z0.enabled===!0&&z0.isPresenting===!0&&(B===null||B.isCompositing()===!1)){if(z0.cameraAutoUpdate===!0)z0.updateCamera(T);T=z0.getCamera()}if(V.isScene===!0)V.onBeforeRender(S,V,T,x);if(C=X0.get(V,R.length),C.init(T),C.state.textureUnits=v0.getTextureUnits(),R.push(C),mJ.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera)UJ.setFromArrayCamera(T);else n0.setFromProjectionMatrix(mJ,d$,T.reversedDepth);if(bJ=this.localClippingEnabled,GJ=m.init(this.clippingPlanes,bJ),z=Z0.get(V,I.length),z.init(),I.push(z),this.info.render.frame++,z0.enabled===!0&&z0.isPresenting===!0){let R0=S.xr.getDepthSensingMesh();if(R0!==null)OQ(R0,T,-1/0,S.sortObjects)}if(OQ(V,T,0,S.sortObjects),z.finish(),j!==null)j.updateLights(C.state.lightsArray);if(S.sortObjects===!0)z.sort(D0,a0);if(gJ=z0.enabled===!1||z0.isPresenting===!1||z0.hasDepthSensing()===!1,gJ)H0.addToRenderList(z,V);if(this.info.autoReset===!0)this.info.reset();if(GJ===!0)m.beginShadows();let b=C.state.shadowsArray;if(n.render(b,V,T),GJ===!0)m.endShadows();if((f&&B.hasRenderPass())===!1){let{opaque:R0,transmissive:Y0}=z;if(C.setupLights(),T.isArrayCamera){let O0=T.cameras;if(Y0.length>0)for(let B0=0,y0=O0.length;B0<y0;B0++){let u0=O0[B0];SW(R0,Y0,V,u0)}if(gJ)H0.render(V);for(let B0=0,y0=O0.length;B0<y0;B0++){let u0=O0[B0];TW(z,V,u0,u0.viewport)}}else{if(Y0.length>0)SW(R0,Y0,V,T);if(gJ)H0.render(V);TW(z,V,T)}}if(x!==null&&o===0)v0.updateMultisampleRenderTarget(x),v0.updateRenderTargetMipmap(x);if(f)B.end(S);if(V.isScene===!0)V.onAfterRender(S,V,T);if(W0.resetDefaultState(),K0=-1,u=null,R.pop(),R.length>0){if(C=R[R.length-1],v0.setTextureUnits(C.state.textureUnits),GJ===!0)m.setGlobalState(S.clippingPlanes,C.state.camera)}else C=null;if(I.pop(),I.length>0)z=I[I.length-1];else z=null;if(j!==null)j.renderEnd()};function OQ(V,T,p,f){if(V.visible===!1)return;if(V.layers.test(T.layers)){if(V.isGroup)p=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(T)}else if(V.isLight){if(C.pushLight(V),V.castShadow)C.pushShadow(V)}else if(V.isSprite){let R0=T.isArrayCamera?UJ:n0;if(!V.frustumCulled||V.intersectsFrustum(R0)){if(f)PJ.setFromMatrixPosition(V.matrixWorld).applyMatrix4(mJ);let Y0=h.update(V),O0=V.material;if(O0.visible)z.push(V,Y0,O0,p,PJ.z,null,T)}}else if(V.isMesh||V.isLine||V.isPoints){let R0=T.isArrayCamera?UJ:n0;if(!V.frustumCulled||V.intersectsFrustum(R0)){let Y0=h.update(V),O0=V.material;if(f){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();PJ.copy(V.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();PJ.copy(Y0.boundingSphere.center)}PJ.applyMatrix4(V.matrixWorld).applyMatrix4(mJ)}if(Array.isArray(O0)){let B0=Y0.groups;for(let y0=0,u0=B0.length;y0<u0;y0++){let L0=B0[y0],c0=O0[L0.materialIndex];if(c0&&c0.visible)z.push(V,Y0,c0,p,PJ.z,L0,T)}}else if(O0.visible)z.push(V,Y0,O0,p,PJ.z,null,T)}}}let U0=V.children;for(let R0=0,Y0=U0.length;R0<Y0;R0++)OQ(U0[R0],T,p,f)}function TW(V,T,p,f){let{opaque:b,transmissive:U0,transparent:R0}=V;if(C.setupLightsView(p),GJ===!0)m.setGlobalState(S.clippingPlanes,p);if(f)E0.viewport(r.copy(f));if(b.length>0)i7(b,T,p);if(U0.length>0)i7(U0,T,p);if(R0.length>0)i7(R0,T,p);E0.buffers.depth.setTest(!0),E0.buffers.depth.setMask(!0),E0.buffers.color.setMask(!0),E0.setPolygonOffset(!1)}function SW(V,T,p,f){if((p.isScene===!0?p.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[f.id]===void 0){let L0=r0.has("EXT_color_buffer_half_float")||r0.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[f.id]=new J9(1,1,{generateMipmaps:!0,type:L0?R9:E9,minFilter:G9,samples:Math.max(4,LJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:p0.workingColorSpace})}let U0=C.state.transmissionRenderTarget[f.id],R0=f.viewport||r;U0.setSize(R0.z*S.transmissionResolutionScale,R0.w*S.transmissionResolutionScale);let Y0=S.getRenderTarget(),O0=S.getActiveCubeFace(),B0=S.getActiveMipmapLevel();if(S.setRenderTarget(U0),S.getClearColor(i),Q0=S.getClearAlpha(),Q0<1)S.setClearColor(16777215,0.5);if(S.clear(),gJ)H0.render(p);let y0=S.toneMapping;S.toneMapping=O9;let u0=f.viewport;if(f.viewport!==void 0)f.viewport=void 0;if(C.setupLightsView(f),GJ===!0)m.setGlobalState(S.clippingPlanes,f);if(i7(V,p,f),v0.updateMultisampleRenderTarget(U0),v0.updateRenderTargetMipmap(U0),r0.has("WEBGL_multisampled_render_to_texture")===!1){let L0=!1;for(let c0=0,NJ=T.length;c0<NJ;c0++){let WJ=T[c0],{object:JJ,geometry:IJ,material:M0,group:yJ}=WJ;if(M0.side===fJ&&JJ.layers.test(f.layers)){let i0=M0.side;M0.side=pJ,M0.needsUpdate=!0,jW(JJ,p,f,IJ,M0,yJ),M0.side=i0,M0.needsUpdate=!0,L0=!0}}if(L0===!0)v0.updateMultisampleRenderTarget(U0),v0.updateRenderTargetMipmap(U0)}if(S.setRenderTarget(Y0,O0,B0),S.setClearColor(i,Q0),u0!==void 0)f.viewport=u0;S.toneMapping=y0}function i7(V,T,p){let f=T.isScene===!0?T.overrideMaterial:null;for(let b=0,U0=V.length;b<U0;b++){let R0=V[b],{object:Y0,geometry:O0,group:B0}=R0,y0=R0.material;if(y0.allowOverride===!0&&f!==null)y0=f;if(Y0.layers.test(p.layers))jW(Y0,T,p,O0,y0,B0)}}function jW(V,T,p,f,b,U0){if(j!==null&&b.isNodeMaterial)j.setObject(V,b);if(V.onBeforeRender(S,T,p,f,b,U0),V.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),b.onBeforeRender(S,T,p,f,V,U0),b.transparent===!0&&b.side===fJ&&b.forceSinglePass===!1)b.side=pJ,b.needsUpdate=!0,S.renderBufferDirect(p,T,f,b,V,U0),b.side=n9,b.needsUpdate=!0,S.renderBufferDirect(p,T,f,b,V,U0),b.side=fJ;else S.renderBufferDirect(p,T,f,b,V,U0);V.onAfterRender(S,T,p,f,b,U0)}function vW(V){let T=0;for(let p of V)if(p.texture!==null)T++;return T}function W7(V,T,p){if(T.isScene!==!0)T=xJ;let f=A0.get(V),b=C.state.lights,U0=C.state.shadowsArray,R0=b.state.version,Y0=e.getParameters(V,b.state,U0,T,p,C.state.lightProbeGridArray),O0=e.getProgramCacheKey(Y0),B0=f.programs;f.environment=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?T.environment:null,f.fog=T.fog;let y0=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap;if(f.envMap=CJ.get(V.envMap||f.environment,y0),f.envMapRotation=f.environment!==null&&V.envMap===null?T.environmentRotation:V.envMapRotation,B0===void 0)V.addEventListener("dispose",F0),B0=new Map,f.programs=B0,f.programVariants=new Map;let u0=B0.get(O0);if(u0!==void 0){if(f.currentProgram===u0&&f.lightsStateVersion===R0)return hW(V,Y0),u0}else{if(Y0.uniforms=e.getUniforms(V),j!==null&&V.isNodeMaterial)j.build(V,p,Y0);V.onBeforeCompile(Y0,S),u0=e.acquireProgram(Y0,O0),B0.set(O0,u0),f.uniforms=Y0.uniforms}let L0=f.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)L0.clippingPlanes=m.uniform;if(hW(V,Y0),f.needsLights=QY(V),f.lightsStateVersion=R0,f.needsLights)L0.ambientLightColor.value=b.state.ambient,L0.lightProbe.value=b.state.probe,L0.sunLights.value=b.state.sun,L0.sunLightShadows.value=b.state.sunShadow,L0.directionalLights.value=b.state.directional,L0.directionalLightShadows.value=b.state.directionalShadow,L0.spotLights.value=b.state.spot,L0.spotLightShadows.value=b.state.spotShadow,L0.rectAreaLights.value=b.state.rectArea,L0.ltc_1.value=b.state.rectAreaLTC1,L0.ltc_2.value=b.state.rectAreaLTC2,L0.pointLights.value=b.state.point,L0.pointLightShadows.value=b.state.pointShadow,L0.hemisphereLights.value=b.state.hemi,L0.sunShadowMatrix.value=b.state.sunShadowMatrix,L0.sunShadowCascade.value=b.state.sunShadowCascade,L0.directionalShadowMatrix.value=b.state.directionalShadowMatrix,L0.spotLightMatrix.value=b.state.spotLightMatrix,L0.spotLightMap.value=b.state.spotLightMap,L0.pointShadowMatrix.value=b.state.pointShadowMatrix;return f.numLightProbeGrids=vW(C.state.lightProbeGridArray),f.currentProgram=u0,f.uniformsList=null,u0}function tH(V,T,p,f,b){let U0=A0.get(V),R0=U0.currentProgram.id+","+f+","+b,Y0=U0.programVariants.get(R0);if(Y0===void 0)Y0=W7(V,T,p),U0.programVariants.set(R0,Y0);else U0.currentProgram=Y0,U0.uniformsList=null,U0.outputColorSpace=f,U0.toneMapping=b;return Y0}function yW(V){if(V.uniformsList===null){let T=V.currentProgram.getUniforms();V.uniformsList=x7.seqWithValue(T.seq,V.uniforms)}return V.uniformsList}function hW(V,T){let p=A0.get(V);p.outputColorSpace=T.outputColorSpace,p.batching=T.batching,p.batchingColor=T.batchingColor,p.instancing=T.instancing,p.instancingColor=T.instancingColor,p.instancingMorph=T.instancingMorph,p.skinning=T.skinning,p.morphTargets=T.morphTargets,p.morphNormals=T.morphNormals,p.morphColors=T.morphColors,p.morphTargetsCount=T.morphTargetsCount,p.numClippingPlanes=T.numClippingPlanes,p.numIntersection=T.numClipIntersection,p.vertexAlphas=T.vertexAlphas,p.vertexTangents=T.vertexTangents,p.toneMapping=T.toneMapping}function eH(V,T,p,f,b){if(T.isScene!==!0)T=xJ;v0.resetTextureUnits();let U0=T.fog,R0=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?T.environment:null,Y0=x===null?S.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:p0.workingColorSpace,O0=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,B0=CJ.get(f.envMap||R0,O0),y0=f.vertexColors===!0&&!!p.attributes.color&&p.attributes.color.itemSize===4,u0=!!p.attributes.tangent&&(!!f.normalMap||f.anisotropy>0),L0=!!p.morphAttributes.position,c0=!!p.morphAttributes.normal,NJ=!!p.morphAttributes.color,WJ=O9;if(f.toneMapped){if(x===null||x.isXRRenderTarget===!0)WJ=S.toneMapping}let JJ=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,IJ=JJ!==void 0?JJ.length:0,M0=A0.get(f),yJ=C.state.lights;if(GJ===!0){if(bJ===!0||V!==u){let HJ=V===u&&f.id===K0;m.setState(f,V,HJ)}}let i0=!1,W8=!1;if(f.version===M0.__version){if(M0.needsLights&&M0.lightsStateVersion!==yJ.state.version)i0=!0;else if(b.isBatchedMesh&&M0.batching===!1)i0=!0;else if(!b.isBatchedMesh&&M0.batching===!0)i0=!0;else if(b.isBatchedMesh&&M0.batchingColor===!0&&b._colorsTexture===null)i0=!0;else if(b.isBatchedMesh&&M0.batchingColor===!1&&b._colorsTexture!==null)i0=!0;else if(b.isInstancedMesh&&M0.instancing===!1)i0=!0;else if(!b.isInstancedMesh&&M0.instancing===!0)i0=!0;else if(b.isSkinnedMesh&&M0.skinning===!1)i0=!0;else if(!b.isSkinnedMesh&&M0.skinning===!0)i0=!0;else if(b.isInstancedMesh&&M0.instancingColor===!0&&b.instanceColor===null)i0=!0;else if(b.isInstancedMesh&&M0.instancingColor===!1&&b.instanceColor!==null)i0=!0;else if(b.isInstancedMesh&&M0.instancingMorph===!0&&b.morphTexture===null)i0=!0;else if(b.isInstancedMesh&&M0.instancingMorph===!1&&b.morphTexture!==null)i0=!0;else if(M0.envMap!==B0)i0=!0;else if(f.fog===!0&&M0.fog!==U0)i0=!0;else if(M0.numClippingPlanes!==void 0&&(M0.numClippingPlanes!==m.numPlanes||M0.numIntersection!==m.numIntersection))i0=!0;else if(M0.vertexAlphas!==y0)i0=!0;else if(M0.vertexTangents!==u0)i0=!0;else if(M0.morphTargets!==L0)i0=!0;else if(M0.morphNormals!==c0)i0=!0;else if(M0.morphColors!==NJ)i0=!0;else if(M0.morphTargetsCount!==IJ)i0=!0;else if(M0.numLightProbeGrids!==vW(C.state.lightProbeGridArray))i0=!0;else if(M0.outputColorSpace!==Y0||M0.toneMapping!==WJ)W8=!0}else i0=!0,M0.__version=f.version;let wJ=M0.currentProgram;if(i0===!0||W8===!0){if(wJ=W8===!0?tH(f,T,b,Y0,WJ):W7(f,T,b),j&&f.isNodeMaterial)j.onUpdateProgram(f,wJ,M0)}let o7=!1,x9=!1,Z8=!1,s0=wJ.getUniforms(),zJ=M0.uniforms;if(E0.useProgram(wJ.program))o7=!0,x9=!0,Z8=!0;if(f.id!==K0)K0=f.id,x9=!0;if(o7||u!==V){if(E0.buffers.depth.getReversed()&&V.reversedDepth!==!0)V._reversedDepth=!0,V.updateProjectionMatrix();s0.setValue(v,"projectionMatrix",V.projectionMatrix),s0.setValue(v,"viewMatrix",V.matrixWorldInverse);let VJ=s0.map.cameraPosition;if(VJ!==void 0)VJ.setValue(v,EJ.setFromMatrixPosition(V.matrixWorld));if(LJ.logarithmicDepthBuffer)s0.setValue(v,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(f.isMeshPhongMaterial||f.isMeshToonMaterial||f.isMeshLambertMaterial||f.isMeshBasicMaterial||f.isMeshStandardMaterial||f.isShaderMaterial)s0.setValue(v,"isOrthographic",V.isOrthographicCamera===!0);if(u!==V)u=V,x9=!0,Z8=!0}if(M0.needsLights){if(yJ.state.sunShadowMap.length>0)s0.setValue(v,"sunShadowMap",yJ.state.sunShadowMap,v0);if(yJ.state.directionalShadowMap.length>0)s0.setValue(v,"directionalShadowMap",yJ.state.directionalShadowMap,v0);if(yJ.state.spotShadowMap.length>0)s0.setValue(v,"spotShadowMap",yJ.state.spotShadowMap,v0);if(yJ.state.pointShadowMap.length>0)s0.setValue(v,"pointShadowMap",yJ.state.pointShadowMap,v0)}if(b.isSkinnedMesh){s0.setOptional(v,b,"bindMatrix"),s0.setOptional(v,b,"bindMatrixInverse");let HJ=b.skeleton;if(HJ){if(HJ.boneTexture===null)HJ.computeBoneTexture();s0.setValue(v,"boneTexture",HJ.boneTexture,v0)}}if(b.isBatchedMesh){if(s0.setOptional(v,b,"batchingTexture"),s0.setValue(v,"batchingTexture",b._matricesTexture,v0),s0.setOptional(v,b,"batchingIdTexture"),s0.setValue(v,"batchingIdTexture",b._indirectTexture,v0),s0.setOptional(v,b,"batchingColorTexture"),b._colorsTexture!==null)s0.setValue(v,"batchingColorTexture",b._colorsTexture,v0)}let K9=p.morphAttributes;if(K9.position!==void 0||K9.normal!==void 0||K9.color!==void 0)w.update(b,p,wJ);if(x9||M0.receiveShadow!==b.receiveShadow)M0.receiveShadow=b.receiveShadow,s0.setValue(v,"receiveShadow",b.receiveShadow);if((f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial)&&f.envMap===null&&T.environment!==null)zJ.envMapIntensity.value=T.environmentIntensity;if(zJ.dfgLUT!==void 0)zJ.dfgLUT.value=mE();if(x9){if(s0.setValue(v,"toneMappingExposure",S.toneMappingExposure),M0.needsLights)JY(zJ,Z8);if(U0&&f.fog===!0)a.refreshFogUniforms(zJ,U0);if(a.refreshMaterialUniforms(zJ,f,w0,I0,C.state.transmissionRenderTarget[V.id]),M0.needsLights&&M0.numLightProbeGrids>0){let HJ=_,VJ=0;for(let z9 of C.state.lightProbeGridArray){if(z9.texture===null)continue;HJ.textures[VJ]=z9.texture,HJ.min[VJ]=z9.boundingBox.min,HJ.max[VJ]=z9.boundingBox.max,HJ.resolution[VJ]=z9.resolution,VJ++}for(let z9 in HJ)HJ[z9].length=VJ;zJ.probesSH.value=HJ.textures,zJ.probesMin.value=HJ.min,zJ.probesMax.value=HJ.max,zJ.probesResolution.value=HJ.resolution}x7.upload(v,yW(M0),zJ,v0)}if(f.isShaderMaterial&&f.uniformsNeedUpdate===!0)x7.upload(v,yW(M0),zJ,v0),f.uniformsNeedUpdate=!1;if(f.isSpriteMaterial)s0.setValue(v,"center",b.center);if(s0.setValue(v,"modelViewMatrix",b.modelViewMatrix),s0.setValue(v,"normalMatrix",b.normalMatrix),s0.setValue(v,"modelMatrix",b.matrixWorld),f.uniformsGroups!==void 0){let HJ=f.uniformsGroups;for(let VJ=0,z9=HJ.length;VJ<z9;VJ++){let bW=HJ[VJ];G0.update(bW,wJ),G0.bind(bW,wJ)}}return wJ}function JY(V,T){V.ambientLightColor.needsUpdate=T,V.lightProbe.needsUpdate=T,V.sunLights.needsUpdate=T,V.sunLightShadows.needsUpdate=T,V.directionalLights.needsUpdate=T,V.directionalLightShadows.needsUpdate=T,V.pointLights.needsUpdate=T,V.pointLightShadows.needsUpdate=T,V.spotLights.needsUpdate=T,V.spotLightShadows.needsUpdate=T,V.rectAreaLights.needsUpdate=T,V.hemisphereLights.needsUpdate=T}function QY(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return s},this.getActiveMipmapLevel=function(){return o},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(V,T,p){let f=A0.get(V);if(f.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,f.__autoAllocateDepthBuffer===!1)f.__useRenderToTexture=!1;A0.get(V.texture).__webglTexture=T,A0.get(V.depthTexture).__webglTexture=f.__autoAllocateDepthBuffer?void 0:p,f.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,T){let p=A0.get(V);p.__webglFramebuffer=T,p.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(V,T=0,p=0){x=V,s=T,o=p;let f=null,b=!1,U0=!1;if(V){let Y0=A0.get(V);if(Y0.__useDefaultFramebuffer!==void 0){E0.bindFramebuffer(v.FRAMEBUFFER,Y0.__webglFramebuffer),r.copy(V.viewport),$0.copy(V.scissor),k0=V.scissorTest,E0.viewport(r),E0.scissor($0),E0.setScissorTest(k0),K0=-1;return}else if(Y0.__webglFramebuffer===void 0)v0.setupRenderTarget(V);else if(Y0.__hasExternalTextures)v0.rebindTextures(V,A0.get(V.texture).__webglTexture,A0.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let y0=V.depthTexture;if(Y0.__boundDepthTexture!==y0){if(y0!==null&&A0.has(y0)&&(V.width!==y0.image.width||V.height!==y0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");v0.setupDepthRenderbuffer(V)}}let O0=V.texture;if(O0.isData3DTexture||O0.isDataArrayTexture||O0.isCompressedArrayTexture)U0=!0;let B0=A0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(B0[T]))f=B0[T][p];else f=B0[T];b=!0}else if(V.samples>0&&v0.useMultisampledRTT(V)===!1)f=A0.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(B0))f=B0[p];else f=B0;r.copy(V.viewport),$0.copy(V.scissor),k0=V.scissorTest}else r.copy(m0).multiplyScalar(w0).floor(),$0.copy(b0).multiplyScalar(w0).floor(),k0=KJ;if(p!==0)f=l;if(E0.bindFramebuffer(v.FRAMEBUFFER,f))E0.drawBuffers(V,f);if(E0.viewport(r),E0.scissor($0),E0.setScissorTest(k0),b){let Y0=A0.get(V.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y0.__webglTexture,p)}else if(U0){let Y0=T;for(let O0=0;O0<V.textures.length;O0++){let B0=A0.get(V.textures[O0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+O0,B0.__webglTexture,p,Y0)}}else if(V!==null&&p!==0){let Y0=A0.get(V.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Y0.__webglTexture,p)}K0=-1};function fW(V){let T=A0.get(V);if(T.__readFormat!==V.format||T.__readType!==V.type)T.__readFormat=V.format,T.__readType=V.type,T.__formatReadable=LJ.textureFormatReadable(V.format),T.__typeReadable=LJ.textureTypeReadable(V.type);return T}if(this.readRenderTargetPixels=function(V,T,p,f,b,U0,R0,Y0=0){if(!(V&&V.isWebGLRenderTarget)){S0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O0=A0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&R0!==void 0){if(O0=O0[R0],Array.isArray(O0))O0=O0[0]}if(O0){E0.bindFramebuffer(v.FRAMEBUFFER,O0);try{let B0=V.textures[Y0],y0=B0.format,u0=B0.type;if(V.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+Y0);let L0=fW(B0);if(L0.__formatReadable===!1){S0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(L0.__typeReadable===!1){S0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(T>=0&&T<=V.width-f&&(p>=0&&p<=V.height-b))v.readPixels(T,p,f,b,J0.convert(y0),J0.convert(u0),U0)}finally{let B0=x!==null?A0.get(x).__webglFramebuffer:null;E0.bindFramebuffer(v.FRAMEBUFFER,B0)}}},this.readRenderTargetPixelsAsync=async function(V,T,p,f,b,U0,R0,Y0=0){if(!(V&&V.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O0=A0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&R0!==void 0){if(O0=O0[R0],Array.isArray(O0))O0=O0[0]}if(O0)if(T>=0&&T<=V.width-f&&(p>=0&&p<=V.height-b)){E0.bindFramebuffer(v.FRAMEBUFFER,O0);let B0=V.textures[Y0],y0=B0.format,u0=B0.type;if(V.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+Y0);let L0=fW(B0);if(L0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(L0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let c0=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,c0),v.bufferData(v.PIXEL_PACK_BUFFER,U0.byteLength,v.STREAM_READ),v.readPixels(T,p,f,b,J0.convert(y0),J0.convert(u0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let NJ=x!==null?A0.get(x).__webglFramebuffer:null;E0.bindFramebuffer(v.FRAMEBUFFER,NJ);let WJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await VK(v,WJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,c0),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,U0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(c0),v.deleteSync(WJ),U0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,T=null,p=0){let f=Math.pow(2,-p),b=Math.floor(V.image.width*f),U0=Math.floor(V.image.height*f),R0=T!==null?T.x:0,Y0=T!==null?T.y:0;v0.setTexture2D(V,0),v.copyTexSubImage2D(v.TEXTURE_2D,p,0,0,R0,Y0,b,U0),E0.unbindTexture()},this.copyTextureToTexture=function(V,T,p=null,f=null,b=0,U0=0){let R0,Y0,O0,B0,y0,u0,L0,c0,NJ,WJ=V.isCompressedTexture?V.mipmaps[U0]:V.image;if(p!==null)R0=p.max.x-p.min.x,Y0=p.max.y-p.min.y,O0=p.isBox3?p.max.z-p.min.z:1,B0=p.min.x,y0=p.min.y,u0=p.isBox3?p.min.z:0;else{let s0=Math.pow(2,-b);if(R0=Math.floor(WJ.width*s0),Y0=Math.floor(WJ.height*s0),V.isDataArrayTexture)O0=WJ.depth;else if(V.isData3DTexture)O0=Math.floor(WJ.depth*s0);else O0=1;B0=0,y0=0,u0=0}if(f!==null)L0=f.x,c0=f.y,NJ=f.z;else L0=0,c0=0,NJ=0;let JJ=J0.convert(T.format),IJ=J0.convert(T.type),M0;if(T.isData3DTexture)v0.setTexture3D(T,0),M0=v.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)v0.setTexture2DArray(T,0),M0=v.TEXTURE_2D_ARRAY;else v0.setTexture2D(T,0),M0=v.TEXTURE_2D;E0.activeTexture(v.TEXTURE0),E0.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,T.flipY),E0.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),E0.pixelStorei(v.UNPACK_ALIGNMENT,T.unpackAlignment);let yJ=E0.getParameter(v.UNPACK_ROW_LENGTH),i0=E0.getParameter(v.UNPACK_IMAGE_HEIGHT),W8=E0.getParameter(v.UNPACK_SKIP_PIXELS),wJ=E0.getParameter(v.UNPACK_SKIP_ROWS),o7=E0.getParameter(v.UNPACK_SKIP_IMAGES);E0.pixelStorei(v.UNPACK_ROW_LENGTH,WJ.width),E0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,WJ.height),E0.pixelStorei(v.UNPACK_SKIP_PIXELS,B0),E0.pixelStorei(v.UNPACK_SKIP_ROWS,y0),E0.pixelStorei(v.UNPACK_SKIP_IMAGES,u0);let x9=V.isDataArrayTexture||V.isData3DTexture,Z8=T.isDataArrayTexture||T.isData3DTexture;if(V.isDepthTexture){let s0=A0.get(V),zJ=A0.get(T),K9=A0.get(s0.__renderTarget),HJ=A0.get(zJ.__renderTarget);E0.bindFramebuffer(v.READ_FRAMEBUFFER,K9.__webglFramebuffer),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,HJ.__webglFramebuffer);for(let VJ=0;VJ<O0;VJ++){if(x9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,A0.get(V).__webglTexture,b,u0+VJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,A0.get(T).__webglTexture,U0,NJ+VJ);v.blitFramebuffer(B0,y0,B0+R0,y0+Y0,L0,c0,L0+R0,c0+Y0,v.DEPTH_BUFFER_BIT,v.NEAREST)}E0.bindFramebuffer(v.READ_FRAMEBUFFER,null),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(b!==0||V.isRenderTargetTexture||A0.has(V)){let s0=A0.get(V),zJ=A0.get(T);E0.bindFramebuffer(v.READ_FRAMEBUFFER,t),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,A);for(let K9=0;K9<O0;K9++){if(x9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,s0.__webglTexture,b,u0+K9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,s0.__webglTexture,b);if(Z8)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,zJ.__webglTexture,U0,NJ+K9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,zJ.__webglTexture,U0);if(b!==0)v.blitFramebuffer(B0,y0,B0+R0,y0+Y0,L0,c0,L0+R0,c0+Y0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(Z8)v.copyTexSubImage3D(M0,U0,L0,c0,NJ+K9,B0,y0,R0,Y0);else v.copyTexSubImage2D(M0,U0,L0,c0,B0,y0,R0,Y0)}E0.bindFramebuffer(v.READ_FRAMEBUFFER,null),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(Z8)if(V.isDataTexture||V.isData3DTexture)v.texSubImage3D(M0,U0,L0,c0,NJ,R0,Y0,O0,JJ,IJ,WJ.data);else if(T.isCompressedArrayTexture)v.compressedTexSubImage3D(M0,U0,L0,c0,NJ,R0,Y0,O0,JJ,WJ.data);else v.texSubImage3D(M0,U0,L0,c0,NJ,R0,Y0,O0,JJ,IJ,WJ);else if(V.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,U0,L0,c0,R0,Y0,JJ,IJ,WJ.data);else if(V.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,U0,L0,c0,WJ.width,WJ.height,JJ,WJ.data);else v.texSubImage2D(v.TEXTURE_2D,U0,L0,c0,R0,Y0,JJ,IJ,WJ);if(E0.pixelStorei(v.UNPACK_ROW_LENGTH,yJ),E0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,i0),E0.pixelStorei(v.UNPACK_SKIP_PIXELS,W8),E0.pixelStorei(v.UNPACK_SKIP_ROWS,wJ),E0.pixelStorei(v.UNPACK_SKIP_IMAGES,o7),U0===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0)v.generateMipmap(M0);E0.unbindTexture()},this.initRenderTarget=function(V){if(A0.get(V).__webglFramebuffer===void 0)v0.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)v0.setTextureCube(V,0);else if(V.isData3DTexture)v0.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)v0.setTexture2DArray(V,0);else v0.setTexture2D(V,0);E0.unbindTexture()},this.resetState=function(){s=0,o=0,x=null,E0.reset(),W0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return d$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=p0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=p0._getUnpackColorSpace()}}function RW(J,Q){if(Q===f$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===n8||Q===D7){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let W=$.count-2,Z=[];if(Q===n8)for(let K=1;K<=W;K++)Z.push($.getX(0)),Z.push($.getX(K)),Z.push($.getX(K+1));else for(let K=0;K<W;K++)if(K%2===0)Z.push($.getX(K)),Z.push($.getX(K+1)),Z.push($.getX(K+2));else Z.push($.getX(K+2)),Z.push($.getX(K+1)),Z.push($.getX(K));if(Z.length/3!==W)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(Z),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function RH(J){let Q=new Map,$=new Map,W=J.clone();return LH(J,W,function(Z,K){Q.set(K,Z),$.set(Z,K)}),W.traverse(function(Z){if(!Z.isSkinnedMesh)return;let K=Z,H=Q.get(Z),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),W}function LH(J,Q,$){$(J,Q);for(let W=0;W<J.children.length;W++)LH(J.children[W],Q.children[W],$)}class zW extends b9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new PH(Q)}),this.register(function(Q){return new CH(Q)}),this.register(function(Q){return new IH(Q)}),this.register(function(Q){return new fH(Q)}),this.register(function(Q){return new bH(Q)}),this.register(function(Q){return new xH(Q)}),this.register(function(Q){return new AH(Q)}),this.register(function(Q){return new TH(Q)}),this.register(function(Q){return new SH(Q)}),this.register(function(Q){return new jH(Q)}),this.register(function(Q){return new _H(Q)}),this.register(function(Q){return new vH(Q)}),this.register(function(Q){return new wH(Q)}),this.register(function(Q){return new hH(Q)}),this.register(function(Q){return new yH(Q)}),this.register(function(Q){return new BH(Q)}),this.register(function(Q){return new DW(Q,l0.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new DW(Q,l0.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new gH(Q)})}load(J,Q,$,W){let Z=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=J8.extractUrlBase(J);K=J8.resolveURL(X,this.path)}else K=J8.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(W)W(X);else console.error(X);Z.manager.itemError(J),Z.manager.itemEnd(J)},Y=new v7(this.manager);Y.setPriority(this.priority),Y.setCache(this.cache),Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Z.parse(X,K,function(U){Q(U),Z.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,W){let Z,K={},H={},Y=new TextDecoder;if(typeof J==="string")Z=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===pH){try{K[l0.KHR_BINARY_GLTF]=new lH(J)}catch(G){if(W)W(G);return}Z=JSON.parse(K[l0.KHR_BINARY_GLTF].content)}else Z=JSON.parse(Y.decode(J));else Z=J;if(Z.asset===void 0||Z.asset.version[0]<2){if(W)W(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new nH(Z,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](X);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[G.name]=G,K[G.name]=!0}if(Z.extensionsUsed)for(let U=0;U<Z.extensionsUsed.length;++U){let G=Z.extensionsUsed[U],N=Z.extensionsRequired||[];switch(G){case l0.KHR_MATERIALS_UNLIT:K[G]=new zH;break;case l0.KHR_DRACO_MESH_COMPRESSION:K[G]=new mH(Z,this.dracoLoader);break;case l0.KHR_TEXTURE_TRANSFORM:K[G]=new dH;break;case l0.KHR_MESH_QUANTIZATION:K[G]=new uH;break;default:if(N.indexOf(G)>=0&&H[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,W)}parseAsync(J,Q){let $=this;return new Promise(function(W,Z){$.parse(J,Q,W,Z)})}}function uE(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function XJ(J,Q,$){let W=J.json.materials[Q];if(W.extensions&&W.extensions[$])return W.extensions[$];return null}var l0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BH{constructor(J){this.parser=J,this.name=l0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(Z.extensions&&Z.extensions[this.name]&&Z.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,Z.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,W=Q.cache.get($);if(W)return W;let Z=Q.json,Y=((Z.extensions&&Z.extensions[this.name]||{}).lights||[])[J],X,U=new T0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],cJ);let G=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new WQ(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new $Q(U),X.distance=G;break;case"spot":X=new QQ(U),X.distance=G,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),k9(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),W=Promise.resolve(X),Q.cache.add($,W),W}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,Z=$.json.nodes[J],H=(Z.extensions&&Z.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class zH{constructor(){this.name=l0.KHR_MATERIALS_UNLIT}getMaterialType(){return iJ}extendParams(J,Q,$){let W=[];J.color=new T0(1,1,1),J.opacity=1;let Z=Q.pbrMetallicRoughness;if(Z){if(Array.isArray(Z.baseColorFactor)){let K=Z.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],cJ),J.opacity=K[3]}if(Z.baseColorTexture!==void 0)W.push($.assignTexture(J,"map",Z.baseColorTexture,L9))}return Promise.all(W)}}class _H{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class PH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(W.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let Z=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new h0(Z,Z)}}return Promise.all(W)}}class CH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.diffuseRoughness=$.diffuseRoughnessFactor!==void 0?$.diffuseRoughnessFactor:0,$.diffuseRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"diffuseRoughnessMap",$.diffuseRoughnessTexture));return Promise.all(W)}}class IH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_DISPERSION}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class wH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessMinimum=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessMaximum=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(W)}}class AH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_SHEEN}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.sheenColor=new T0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let Z=$.sheenColorFactor;Q.sheenColor.setRGB(Z[0],Z[1],Z[2],cJ)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,L9));if($.sheenRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(W)}}class TH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)W.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(W)}}class SH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_VOLUME}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let Z=$.attenuationColor||[1,1,1];return Q.attenuationColor=new T0().setRGB(Z[0],Z[1],Z[2],cJ),Promise.all(W)}}class jH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_IOR}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class vH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_SPECULAR}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let Z=$.specularColorFactor||[1,1,1];if(Q.specularColor=new T0().setRGB(Z[0],Z[1],Z[2],cJ),$.specularColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,L9));return Promise.all(W)}}class yH{constructor(J){this.parser=J,this.name=l0.EXT_MATERIALS_BUMP}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)W.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(W)}}class hH{constructor(J){this.parser=J,this.name=l0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?lJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)W.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(W)}}class fH{constructor(J){this.parser=J,this.name=l0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,W=$.textures[J];if(!W.extensions||!W.extensions[this.name])return null;let Z=W.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,Z.source,K)}}class bH{constructor(J){this.parser=J,this.name=l0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class xH{constructor(J){this.parser=J,this.name=l0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class DW{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let W=$.extensions[this.name],Z=this.parser.getDependency("buffer",W.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Z.then(function(H){let Y=W.byteOffset||0,X=W.byteLength||0,U=W.count,G=W.byteStride,N=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,G,N,W.mode,W.filter).then(function(E){return E.buffer});else return K.ready.then(function(){let E=new ArrayBuffer(U*G);return K.decodeGltfBuffer(new Uint8Array(E),U,G,N,W.mode,W.filter),E})})}else return null}}class gH{constructor(J){this.name=l0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let W=Q.meshes[$.mesh];for(let X of W.primitives)if(X.mode!==$9.TRIANGLES&&X.mode!==$9.TRIANGLE_STRIP&&X.mode!==$9.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),G=U.isGroup?U.children:[U],N=X[0].count,E=[];for(let O of G){let L=new f0,k=new y,F=new eJ,q=new y(1,1,1),D=new l6(O.geometry,O.material,N);for(let z=0;z<N;z++){if(Y.TRANSLATION)k.fromBufferAttribute(Y.TRANSLATION,z);if(Y.ROTATION)F.fromBufferAttribute(Y.ROTATION,z);if(Y.SCALE)q.fromBufferAttribute(Y.SCALE,z);D.setMatrixAt(z,L.compose(k,F,q))}let _=null;for(let z in Y)if(z==="_COLOR_0"){let C=Y[z];D.instanceColor=new c9(C.array,C.itemSize,C.normalized)}else if(z!=="TRANSLATION"&&z!=="ROTATION"&&z!=="SCALE"){if(_===null){let I=D.geometry;_=new _J,_.name=I.name;for(let R in I.attributes)_.setAttribute(R,I.attributes[R]);for(let R in I.morphAttributes)_.morphAttributes[R]=I.morphAttributes[R];if(I.index!==null)_.setIndex(I.index);_.morphTargetsRelative=I.morphTargetsRelative;for(let R of I.groups)_.addGroup(R.start,R.count,R.materialIndex);if(I.boundingBox!==null)_.boundingBox=I.boundingBox.clone();if(I.boundingSphere!==null)_.boundingSphere=I.boundingSphere.clone();_.drawRange.start=I.drawRange.start,_.drawRange.count=I.drawRange.count,_.userData=Object.assign({},I.userData),D.geometry=_}let C=Y[z];_.setAttribute(z,new c9(C.array,C.itemSize,C.normalized))}ZJ.prototype.copy.call(D,O),this.parser.assignFinalMaterial(D),E.push(D)}if(U.isGroup)return U.clear(),U.add(...E),U;return E[0]})}}var pH="glTF",p7=12,MH={JSON:1313821514,BIN:5130562};class lH{constructor(J){this.name=l0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,p7),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==pH)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let W=this.header.length-p7,Z=new DataView(J,p7),K=0;while(K<W){let H=Z.getUint32(K,!0);K+=4;let Y=Z.getUint32(K,!0);if(K+=4,Y===MH.JSON){let X=new Uint8Array(J,p7+K,H);this.content=$.decode(X)}else if(Y===MH.BIN){let X=p7+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class mH{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=l0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,W=this.dracoLoader,Z=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let G=kW[U]||U.toLowerCase();H[G]=K[U]}for(let U in J.attributes){let G=kW[U]||U.toLowerCase();if(K[U]!==void 0){let N=$.accessors[J.attributes[U]],E=Q7[N.componentType];X[G]=E.name,Y[G]=N.normalized===!0}}return Q.getDependency("bufferView",Z).then(function(U){return new Promise(function(G,N){W.decodeDracoFile(U,function(E){for(let O in E.attributes){let L=E.attributes[O],k=Y[O];if(k!==void 0)L.normalized=k}G(E)},H,X,cJ,N)})})}}class dH{constructor(){this.name=l0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),W=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*W,J.offset.x,-J.repeat.x*W,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class uH{constructor(){this.name=l0.KHR_MESH_QUANTIZATION}}class _W extends f9{constructor(J,Q,$,W){super(J,Q,$,W)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W*3+W;for(let K=0;K!==W;K++)Q[K]=$[Z+K];return Q}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=W-Q,G=($-Q)/U,N=G*G,E=N*G,O=J*X,L=O-X,k=-2*E+3*N,F=E-N,q=1-k,D=F-N+G;for(let _=0;_!==H;_++){let z=K[L+_+H],C=K[L+_+Y]*U,I=K[O+_+H],R=K[O+_]*U;Z[_]=q*z+D*C+k*I+F*R}return Z}}var cE=new eJ;class cH extends _W{interpolate_(J,Q,$,W){let Z=super.interpolate_(J,Q,$,W);return cE.fromArray(Z).normalize().toArray(Z),Z}}var $9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Q7={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},VH={9728:U9,9729:jJ,9984:C6,9985:u8,9986:q8,9987:G9},DH={33071:d8,33648:P6,10497:m8},LW={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kW={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Q8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nE={CUBICSPLINE:void 0,LINEAR:v6,STEP:h$},MW={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sE(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new r8({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:n9});return J.DefaultMaterial}function D8(J,Q,$){for(let W in $.extensions)if(J[W]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[W]=$.extensions[W]}function k9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function iE(J,Q,$){let W=!1,Z=!1,K=!1;for(let U=0,G=Q.length;U<G;U++){let N=Q[U];if(N.POSITION!==void 0)W=!0;if(N.NORMAL!==void 0)Z=!0;if(N.COLOR_0!==void 0)K=!0;if(W&&Z&&K)break}if(!W&&!Z&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,G=Q.length;U<G;U++){let N=Q[U];if(W){let E=N.POSITION!==void 0?$.getDependency("accessor",N.POSITION):J.attributes.position;H.push(E)}if(Z){let E=N.NORMAL!==void 0?$.getDependency("accessor",N.NORMAL):J.attributes.normal;Y.push(E)}if(K){let E=N.COLOR_0!==void 0?$.getDependency("accessor",N.COLOR_0):J.attributes.color;X.push(E)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let G=U[0],N=U[1],E=U[2];if(W)J.morphAttributes.position=G;if(Z)J.morphAttributes.normal=N;if(K)J.morphAttributes.color=E;return J.morphTargetsRelative=!0,J})}function oE(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,W=Q.weights.length;$<W;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let W=0,Z=$.length;W<Z;W++)J.morphTargetDictionary[$[W]]=W}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aE(J){let Q,$=J.extensions&&J.extensions[l0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+VW($.attributes);else Q=J.indices+":"+VW(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let W=0,Z=J.targets.length;W<Z;W++)Q+=":"+VW(J.targets[W]);return Q}function VW(J){let Q="",$=Object.keys(J).sort();for(let W=0,Z=$.length;W<Z;W++)Q+=$[W]+":"+J[$[W]]+";";return Q}function BW(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rE(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var tE=new f0;class nH{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new uE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,W=-1,Z=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);W=$&&Y?parseInt(Y[1],10):-1,Z=H.indexOf("Firefox")>-1,K=Z?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&W<17||Z&&K<98)this.textureLoader=new t6(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);else this.textureLoader=new ZQ(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new v7(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),this.options.withCredentials||this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,W=this.json,Z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][W.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:W.asset,parser:$,userData:{}};return D8(Z,H,W),k9(H,W),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let W=0,Z=J.length;W<Z;W++){let K=J[W];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let W=$.clone(),Z=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())Z(U,H.children[X])};return Z($,W),W.name+="_instance_"+J.uses[Q]++,W}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)return W}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let W=0;W<Q.length;W++){let Z=J(Q[W]);if(Z)$.push(Z)}return $}getDependency(J,Q){let $=J+":"+Q,W=this.cache.get($);if(!W){switch(J){case"scene":W=this.loadScene(Q);break;case"node":W=this._invokeOne(function(Z){return Z.loadNode&&Z.loadNode(Q)});break;case"mesh":W=this._invokeOne(function(Z){return Z.loadMesh&&Z.loadMesh(Q)});break;case"accessor":W=this.loadAccessor(Q);break;case"bufferView":W=this._invokeOne(function(Z){return Z.loadBufferView&&Z.loadBufferView(Q)});break;case"buffer":W=this.loadBuffer(Q);break;case"material":W=this._invokeOne(function(Z){return Z.loadMaterial&&Z.loadMaterial(Q)});break;case"texture":W=this._invokeOne(function(Z){return Z.loadTexture&&Z.loadTexture(Q)});break;case"skin":W=this.loadSkin(Q);break;case"animation":W=this._invokeOne(function(Z){return Z.loadAnimation&&Z.loadAnimation(Q)});break;case"camera":W=this.loadCamera(Q);break;default:if(W=this._invokeOne(function(Z){return Z!=this&&Z.getDependency&&Z.getDependency(J,Q)}),!W)throw Error("Unknown type: "+J);break}this.cache.add($,W)}return W}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,W=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(W.map(function(Z,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[l0.KHR_BINARY_GLTF].body);let W=this.options;return new Promise(function(Z,K){$.load(J8.resolveURL(Q.uri,W.path),Z,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let W=Q.byteLength||0,Z=Q.byteOffset||0;return $.slice(Z,Z+W)})}loadAccessor(J){let Q=this,$=this.json,W=this.json.accessors[J];if(W.bufferView===void 0&&W.sparse===void 0){let K=LW[W.type],H=Q7[W.componentType],Y=W.normalized===!0,X=new H(W.count*K);return Promise.resolve(new SJ(X,K,Y))}let Z=[];if(W.bufferView!==void 0)Z.push(this.getDependency("bufferView",W.bufferView));else Z.push(null);if(W.sparse!==void 0)Z.push(this.getDependency("bufferView",W.sparse.indices.bufferView)),Z.push(this.getDependency("bufferView",W.sparse.values.bufferView));return Promise.all(Z).then(function(K){let H=K[0],Y=LW[W.type],X=Q7[W.componentType],U=X.BYTES_PER_ELEMENT,G=U*Y,N=W.byteOffset||0,E=W.bufferView!==void 0?$.bufferViews[W.bufferView].byteStride:void 0,O=W.normalized===!0,L,k;if(E&&E!==G){let F=Math.floor(N/E),q="InterleavedBuffer:"+W.bufferView+":"+W.componentType+":"+F+":"+W.count,D=Q.cache.get(q);if(!D)L=new X(H,F*E,W.count*E/U),D=new z7(L,E/U),Q.cache.add(q,D);k=new s8(D,Y,N%E/U,O)}else{if(H===null)L=new X(W.count*Y);else L=new X(H,N,W.count*Y);k=new SJ(L,Y,O)}if(W.sparse!==void 0){let F=LW.SCALAR,q=Q7[W.sparse.indices.componentType],D=W.sparse.indices.byteOffset||0,_=W.sparse.values.byteOffset||0,z=new q(K[1],D,W.sparse.count*F),C=new X(K[2],_,W.sparse.count*Y);if(H!==null)k=new SJ(k.array.slice(),k.itemSize,k.normalized);k.normalized=!1;for(let I=0,R=z.length;I<R;I++){let B=z[I];if(k.setX(B,C[I*Y]),Y>=2)k.setY(B,C[I*Y+1]);if(Y>=3)k.setZ(B,C[I*Y+2]);if(Y>=4)k.setW(B,C[I*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}k.normalized=O}return k})}loadTexture(J){let Q=this.json,$=this.options,Z=Q.textures[J].source,K=Q.images[Z],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,Z,H)}loadTextureImage(J,Q,$){let W=this,Z=this.json,K=Z.textures[J],H=Z.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let N=(Z.samplers||{})[K.sampler]||{};return U.magFilter=VH[N.magFilter]||jJ,U.minFilter=VH[N.minFilter]||G9,U.wrapS=DH[N.wrapS]||m8,U.wrapT=DH[N.wrapT]||m8,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==U9&&U.minFilter!==jJ,W.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,W=this.json,Z=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let K=W.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1,U;if(Q.isKTX2Loader===!0&&K.bufferView!==void 0)U=$.getDependency("bufferView",K.bufferView).then(function(N){return new Promise(function(E,O){Q.parse(N,E,O)})});else{if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(N){X=!0;let E=new Blob([N],{type:K.mimeType});return Y=H.createObjectURL(E),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");U=Promise.resolve(Y).then(function(N){return new Promise(function(E,O){let L=E;if(Q.isImageBitmapLoader===!0)L=function(k){let F=new FJ(k);F.needsUpdate=!0,E(F)};Q.load(J8.resolveURL(N,Z.path),L,void 0,O)})})}let G=U.then(function(N){if(X===!0)H.revokeObjectURL(Y);return k9(N,K),N.userData.mimeType=K.mimeType||rE(K.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),N});return this.sourceCache[J]=G,G}assignTexture(J,Q,$,W){let Z=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(Z.extensions[l0.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[l0.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=Z.associations.get(K);K=Z.extensions[l0.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),Z.associations.set(K,Y)}}if(W!==void 0)K.colorSpace=W;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,W=Q.attributes.tangent===void 0,Z=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new w7,sJ.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new I7,sJ.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(W||Z||K){let H="ClonedMaterial:"+$.uuid+":";if(W)H+="derivative-tangents:";if(Z)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),Z)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(W){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return r8}loadMaterial(J){let Q=this,$=this.json,W=this.extensions,Z=$.materials[J],K,H={},Y=Z.extensions||{},X=[];if(Y[l0.KHR_MATERIALS_UNLIT]){let G=W[l0.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),X.push(G.extendParams(H,Z,Q))}else{let G=Z.pbrMetallicRoughness||{};if(H.color=new T0(1,1,1),H.opacity=1,Array.isArray(G.baseColorFactor)){let N=G.baseColorFactor;H.color.setRGB(N[0],N[1],N[2],cJ),H.opacity=N[3]}if(G.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",G.baseColorTexture,L9));if(H.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,H.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",G.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(N){return N.getMaterialType&&N.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(N){return N.extendMaterialParams&&N.extendMaterialParams(J,H)})))}if(Z.doubleSided===!0)H.side=fJ;let U=Z.alphaMode||MW.OPAQUE;if(U===MW.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===MW.MASK)H.alphaTest=Z.alphaCutoff!==void 0?Z.alphaCutoff:0.5;if(Z.normalTexture!==void 0&&K!==iJ){if(X.push(Q.assignTexture(H,"normalMap",Z.normalTexture)),H.normalScale=new h0(1,1),Z.normalTexture.scale!==void 0){let G=Z.normalTexture.scale;H.normalScale.set(G,G)}}if(Z.occlusionTexture!==void 0&&K!==iJ){if(X.push(Q.assignTexture(H,"aoMap",Z.occlusionTexture)),Z.occlusionTexture.strength!==void 0)H.aoMapIntensity=Z.occlusionTexture.strength}if(Z.emissiveFactor!==void 0&&K!==iJ){let G=Z.emissiveFactor;H.emissive=new T0().setRGB(G[0],G[1],G[2],cJ)}if(Z.emissiveTexture!==void 0&&K!==iJ)X.push(Q.assignTexture(H,"emissiveMap",Z.emissiveTexture,L9));return Promise.all(X).then(function(){let G=new K(H);if(Z.name)G.name=Z.name;if(k9(G,Z),Q.associations.set(G,{materials:J}),Z.extensions)D8(W,G,Z);return G})}createUniqueName(J){let Q=o0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,W=this.primitiveCache;function Z(H){return $[l0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return kH(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=aE(X),G=W[U];if(G)K.push(G.promise);else{let N;if(X.extensions&&X.extensions[l0.KHR_DRACO_MESH_COMPRESSION])N=Z(X);else N=kH(new _J,X,Q);if(X.mode===$9.TRIANGLE_STRIP)N=N.then((E)=>RW(E,D7));else if(X.mode===$9.TRIANGLE_FAN)N=N.then((E)=>RW(E,n8));W[U]={primitive:X,promise:N},K.push(N)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,W=this.extensions,Z=$.meshes[J],K=Z.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?sE(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],G=[];for(let E=0,O=U.length;E<O;E++){let L=U[E],k=K[E],F,q=X[E];if(k.mode===$9.TRIANGLES||k.mode===$9.TRIANGLE_STRIP||k.mode===$9.TRIANGLE_FAN||k.mode===void 0){let D=Z.isSkinnedMesh===!0,_=L.hasAttribute("skinIndex")&&L.hasAttribute("skinWeight");if(D&&_===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(F=D&&_?new p6(L,q):new BJ(L,q),F.isSkinnedMesh===!0)F.normalizeSkinWeights()}else if(k.mode===$9.LINES)F=new d6(L,q);else if(k.mode===$9.LINE_STRIP)F=new o8(L,q);else if(k.mode===$9.LINE_LOOP)F=new u6(L,q);else if(k.mode===$9.POINTS)F=new c6(L,q);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+k.mode);if(Object.keys(F.geometry.morphAttributes).length>0)oE(F,Z);if(F.name=Q.createUniqueName(Z.name||"mesh_"+J),k9(F,Z),k.extensions)D8(W,F,k);Q.assignFinalMaterial(F),G.push(F)}for(let E=0,O=G.length;E<O;E++)Q.associations.set(G[E],{meshes:J,primitives:E});if(G.length===1){if(Z.extensions)D8(W,G[0],Z);return G[0]}let N=new tJ;if(Z.extensions)D8(W,N,Z);Q.associations.set(N,{meshes:J});for(let E=0,O=G.length;E<O;E++)N.add(G[E]);return N})}loadCamera(J){let Q,$=this.json.cameras[J],W=$[$.type];if(!W){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new kJ(L8.radToDeg(W.yfov),W.aspectRatio||1,W.znear||1,W.zfar||2000000);else if($.type==="orthographic")Q=new e8(-W.xmag,W.xmag,W.ymag,-W.ymag,W.znear,W.zfar);if($.name)Q.name=this.createUniqueName($.name);return k9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let W=0,Z=Q.joints.length;W<Z;W++)$.push(this._loadNodeShallow(Q.joints[W]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(W){let Z=W.pop(),K=W,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let G=K[X];if(G){H.push(G);let N=new f0;if(Z!==null)N.fromArray(Z.array,X*16);Y.push(N)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new C7(H,Y)})}loadAnimation(J){let Q=this.json,$=this,W=Q.animations[J],Z=W.name?W.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let G=0,N=W.channels.length;G<N;G++){let E=W.channels[G],O=W.samplers[E.sampler],L=E.target,k=L.node,F=W.parameters!==void 0?W.parameters[O.input]:O.input,q=W.parameters!==void 0?W.parameters[O.output]:O.output;if(L.node===void 0)continue;K.push(this.getDependency("node",k)),H.push(this.getDependency("accessor",F)),Y.push(this.getDependency("accessor",q)),X.push(O),U.push(L)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(G){let N=G[0],E=G[1],O=G[2],L=G[3],k=G[4],F=[];for(let D=0,_=N.length;D<_;D++){let z=N[D],C=E[D],I=O[D],R=L[D],B=k[D];if(z===void 0)continue;if(z.updateMatrix)z.updateMatrix();let S=$._createAnimationTracks(z,C,I,R,B);if(S)for(let g=0;g<S.length;g++)F.push(S[g])}let q=new r6(Z,void 0,F);return k9(q,W),q})}createNodeMesh(J){let Q=this.json,$=this,W=Q.nodes[J];if(W.mesh===void 0)return null;return $.getDependency("mesh",W.mesh).then(function(Z){let K=$._getNodeRef($.meshCache,W.mesh,Z);if(W.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=W.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=W.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,W=Q.nodes[J],Z=$._loadNodeShallow(J),K=[],H=W.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=W.skin===void 0?Promise.resolve(null):$.getDependency("skin",W.skin);return Promise.all([Z,Promise.all(K),Y]).then(function(X){let U=X[0],G=X[1],N=X[2];if(N!==null)U.traverse(function(E){if(!E.isSkinnedMesh)return;E.bind(N,tE)});for(let E=0,O=G.length;E<O;E++)U.add(G[E]);if(U.userData.pivot!==void 0&&G.length>0){let E=U.userData.pivot,O=G[0];U.pivot=new y().fromArray(E),U.position.x-=E[0],U.position.y-=E[1],U.position.z-=E[2],O.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,W=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let Z=Q.nodes[J],K=Z.name?W.createUniqueName(Z.name):"",H=[],Y=W._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(Z.camera!==void 0)H.push(W.getDependency("camera",Z.camera).then(function(X){return W._getNodeRef(W.cameraCache,Z.camera,X)}));return W._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(Z.isBone===!0)U=new _7;else if(X.length>1)U=new tJ;else if(X.length===1)U=X[0];else U=new ZJ;if(U!==X[0])for(let G=0,N=X.length;G<N;G++)U.add(X[G]);if(Z.name)U.userData.name=Z.name,U.name=K;if(k9(U,Z),Z.extensions)D8($,U,Z);if(Z.matrix!==void 0){let G=new f0;G.fromArray(Z.matrix),U.applyMatrix4(G)}else{if(Z.translation!==void 0)U.position.fromArray(Z.translation);if(Z.rotation!==void 0)U.quaternion.fromArray(Z.rotation);if(Z.scale!==void 0)U.scale.fromArray(Z.scale)}if(!W.associations.has(U))W.associations.set(U,{});else if(Z.mesh!==void 0&&W.meshCache.refs[Z.mesh]>1){let G=W.associations.get(U);W.associations.set(U,{...G})}return W.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],W=this,Z=new tJ;if($.name)Z.name=W.createUniqueName($.name);if(k9(Z,$),$.extensions)D8(Q,Z,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(W.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,G=Y.length;U<G;U++){let N=Y[U];if(N.parent!==null)Z.add(RH(N));else Z.add(N)}let X=(U)=>{let G=new Map;for(let[N,E]of W.associations)if(N instanceof sJ||N instanceof FJ)G.set(N,E);return U.traverse((N)=>{let E=W.associations.get(N);if(E!=null)G.set(N,E)}),G};return W.associations=X(Z),Z})}_createAnimationTracks(J,Q,$,W,Z){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(E){if(E.morphTargetInfluences)Y.push(E.name?E.name:E.uuid)}if(Q8[Z.path]===Q8.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(Q8[Z.path]){case Q8.weights:U=r9;break;case Q8.rotation:U=t9;break;case Q8.translation:case Q8.scale:U=V8;break;default:switch($.itemSize){case 1:U=r9;break;case 2:case 3:default:U=V8;break}break}let G=W.interpolation!==void 0?nE[W.interpolation]:v6,N=this._getArrayFromAccessor($);for(let E=0,O=Y.length;E<O;E++){let L=new U(Y[E]+"."+Q8[Z.path],Q.array,N,G);if(W.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(L);K.push(L)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=BW(Q.constructor),W=new Float32Array(Q.length);for(let Z=0,K=Q.length;Z<K;Z++)W[Z]=Q[Z]*$;Q=W}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof t9?cH:_W)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function eE(J,Q,$){let W=Q.attributes,Z=new Q9;if(W.POSITION!==void 0){let Y=$.json.accessors[W.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(Z.set(new y(X[0],X[1],X[2]),new y(U[0],U[1],U[2])),Y.normalized){let G=BW(Q7[Y.componentType]);Z.min.multiplyScalar(G),Z.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new y,X=new y;for(let U=0,G=K.length;U<G;U++){let N=K[U];if(N.POSITION!==void 0){let E=$.json.accessors[N.POSITION],O=E.min,L=E.max;if(O!==void 0&&L!==void 0){if(X.setX(Math.max(Math.abs(O[0]),Math.abs(L[0]))),X.setY(Math.max(Math.abs(O[1]),Math.abs(L[1]))),X.setZ(Math.max(Math.abs(O[2]),Math.abs(L[2]))),E.normalized){let k=BW(Q7[E.componentType]);X.multiplyScalar(k)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Z.expandByVector(Y)}J.boundingBox=Z;let H=new nJ;Z.getCenter(H.center),H.radius=Z.min.distanceTo(Z.max)/2,J.boundingSphere=H}function kH(J,Q,$){let W=Q.attributes,Z=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in W){let Y=kW[H]||H.toLowerCase();if(Y in J.attributes)continue;Z.push(K(W[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});Z.push(H)}if(p0.workingColorSpace!==cJ&&"COLOR_0"in W)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${p0.workingColorSpace}" not supported.`);return k9(J,Q),eE(J,Q,$),Promise.all(Z).then(function(){return Q.targets!==void 0?iE(J,Q.targets,$):J})}var PW=document.querySelector("canvas"),sH=document.querySelector("#status"),EQ=document.querySelector("button"),d7=matchMedia("(prefers-reduced-motion: reduce)"),c7=new OW({canvas:PW,antialias:!0,powerPreference:"low-power"});c7.setPixelRatio(Math.min(devicePixelRatio,1.25));c7.setClearColor(727090);c7.outputColorSpace=L9;var n7=new b6,k8=new kJ(55,1,0.01,300);k8.position.set(0,1.48,0);k8.lookAt(0,1,-9);n7.add(new e6(16777215,16777215,2));var s7=new tJ;s7.position.set(0,0,-9);n7.add(s7);var JN=Uint8Array.from(atob(window.ISLAND_GLB),(J)=>J.charCodeAt(0));window.ISLAND_GLB=null;new zW().parse(JN.buffer,"",(J)=>{J.scene.position.z=9,s7.add(J.scene),sH.hidden=!0,NQ()},()=>{sH.textContent="Could not load the model."});var IW=new BJ(new A7(8,48),new iJ({color:1390432,transparent:!0,opacity:0.8,side:fJ}));IW.rotation.x=-Math.PI/2;IW.position.set(0,0.1,-9);n7.add(IW);var iH=[];for(let J=0;J<4;J++){let Q=new BJ(new j7(0.65,0.68,40),new iJ({color:8964072,transparent:!0,opacity:0.25,side:fJ,depthWrite:!1}));Q.rotation.x=-Math.PI/2,Q.position.set(J%2?2.8:-2.8,0.11,-8+(J>>1)*-3),n7.add(Q),iH.push(Q)}var QN=new iJ({color:16759365,transparent:!0,opacity:0.9}),u7=new BJ(new T7(0.13,0),QN);u7.position.set(-1.48,1.08,-0.88);u7.scale.set(1,2.3,0.75);s7.add(u7);var $7=!d7.matches,CW=0,m7=0,l7=0;function NQ(){c7.render(n7,k8)}function oH(){let{clientWidth:J,clientHeight:Q}=PW;c7.setSize(J,Q,!1),k8.aspect=J/Q,k8.fov=L8.radToDeg(2*Math.atan(Math.tan(L8.degToRad(55)/2)*Math.max(1,1.4/k8.aspect))),k8.updateProjectionMatrix(),NQ()}function aH(J){if(!$7||document.hidden)return;if(CW=requestAnimationFrame(aH),J-m7<33.333333333333336)return;let Q=m7?Math.min((J-m7)/1000,0.1):0;m7=J,l7+=Q,s7.rotation.y=l7*0.06,u7.scale.y=2.1+Math.sin(l7*8)*0.5,u7.rotation.z=Math.sin(l7*5)*0.14,iH.forEach(($,W)=>{let Z=1+Math.sin(l7*0.8-W)*0.1;$.scale.set(Z,Z,1)}),NQ()}function qQ(){if(cancelAnimationFrame(CW),m7=0,$7&&!document.hidden)CW=requestAnimationFrame(aH);else NQ()}EQ.addEventListener("click",()=>{$7=!$7,EQ.textContent=$7?"Pause animation":"Play animation",qQ()});d7.addEventListener("change",()=>{$7=!d7.matches,EQ.hidden=d7.matches,qQ()});document.addEventListener("visibilitychange",qQ);window.addEventListener("resize",oH);EQ.hidden=d7.matches;oH();qQ();
