var BZ="187",o9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},a9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zZ=0,bQ=1,CZ=2;var D7=1,PZ=2,d8=3,r9=0,pJ=1,Q9=2,M8=0,V7=1,xQ=2,gQ=3,pQ=4,IZ=5;var u8=100,wZ=101,_Z=102,AZ=103,TZ=104,SZ=200,jZ=201,yZ=202,vZ=203,hZ=204,fZ=205,bZ=206,xZ=207,gZ=208,pZ=209,lZ=210,mZ=211,dZ=212,uZ=213,cZ=214,nZ=0,sZ=1,iZ=2,lQ=3,oZ=4,aZ=5,rZ=6,tZ=7,eZ=0,JK=1,QK=2,L9=0,mQ=1,dQ=2,uQ=3,cQ=4,nQ=5,sQ=6,iQ=7;var k7=301,c8=302,D6=303,V6=304,n8=1000,s8=1001,k6=1002,N9=1003,B6=1004;var D8=1005;var SJ=1006,i8=1007;var q9=1008;var E9=1009,$K=1010,WK=1011,B7=1012,oQ=1013,t9=1014,h9=1015,M9=1016,aQ=1017,rQ=1018,V8=1020,ZK=35902,KK=35899,HK=1021,YK=1022,f9=1023,o8=1026,e9=1027,XK=1028,tQ=1029,k8=1030,eQ=1031;var J$=1033,z6=33776,C6=33777,P6=33778,I6=33779,Q$=35840,$$=35841,W$=35842,Z$=35843,K$=36196,H$=37492,Y$=37496,X$=37488,U$=37489,w6=37490,G$=37491,N$=37808,q$=37809,E$=37810,F$=37811,O$=37812,R$=37813,L$=37814,M$=37815,D$=37816,V$=37817,k$=37818,B$=37819,z$=37820,C$=37821,P$=36492,I$=36494,w$=36495,_$=36283,A$=36284,_6=36285,T$=36286;var S$=2300,A6=2301;var j$=0,z7=1,a8=2;var y$=0,UK=1,B8="",D9="srgb",iJ="srgb-linear",v$="linear",$J="srgb";var GK=512,NK=513,qK=514,h$=515,EK=516,FK=517,f$=518,b$=519;var x$="300 es",g$=2000;function QY(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function $Y(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function l8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function OK(){let J=l8("canvas");return J.style.display="block",J}var fW={},m8=null;function M7(...J){let Q="THREE."+J.shift();if(m8)m8("log",Q,...J);else console.log(Q,...J)}function RK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function C0(...J){J=RK(J);let Q="THREE."+J.shift();if(m8)m8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function j0(...J){J=RK(J);let Q="THREE."+J.shift();if(m8)m8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function O8(...J){let Q=J.join(" ");if(Q in fW)return;fW[Q]=!0,C0(...J)}function LK(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var MK={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class V9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var _J=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bW=1234567,R7=Math.PI/180,R8=180/Math.PI;function k9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(_J[J&255]+_J[J>>8&255]+_J[J>>16&255]+_J[J>>24&255]+"-"+_J[Q&255]+_J[Q>>8&255]+"-"+_J[Q>>16&15|64]+_J[Q>>24&255]+"-"+_J[$&63|128]+_J[$>>8&255]+"-"+_J[$>>16&255]+_J[$>>24&255]+_J[W&255]+_J[W>>8&255]+_J[W>>16&255]+_J[W>>24&255]).toLowerCase()}function l0(J,Q,$){return Math.max(Q,Math.min($,J))}function p$(J,Q){return(J%Q+Q)%Q}function WY(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function ZY(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function L7(J,Q,$){return(1-$)*J+$*Q}function KY(J,Q,$,W){return L7(J,Q,1-Math.exp(-$*W))}function HY(J,Q=1){return Q-Math.abs(p$(J,Q*2)-Q)}function YY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function XY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function UY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function GY(J,Q){return J+Math.random()*(Q-J)}function NY(J){return J*(0.5-Math.random())}function qY(J){if(J!==void 0)bW=J;let Q=bW+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function EY(J){return J*R7}function FY(J){return J*R8}function OY(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function RY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function l$(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function LY(J,Q,$,W,Z){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+W)/2),G=H((Q+W)/2),N=K((Q-W)/2),q=H((Q-W)/2),F=K((W-Q)/2),M=H((W-Q)/2);switch(Z){case"XYX":J.set(Y*G,X*N,X*q,Y*U);break;case"YZY":J.set(X*q,Y*G,X*N,Y*U);break;case"ZXZ":J.set(X*N,X*q,Y*G,Y*U);break;case"XZX":J.set(Y*G,X*M,X*F,Y*U);break;case"YXY":J.set(X*F,Y*G,X*M,Y*U);break;case"ZYZ":J.set(X*M,X*F,Y*G,Y*U);break;default:C0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function T6(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function m$(J,Q){if(Q.constructor===Float32Array)return J;let $=T6(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/$,-1)}function d$(J,Q){if(Q.constructor===Float32Array)return J;let $=T6(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*$)}var r8={DEG2RAD:R7,RAD2DEG:R8,generateUUID:k9,clamp:l0,euclideanModulo:p$,mapLinear:WY,inverseLerp:ZY,lerp:L7,damp:KY,pingpong:HY,smoothstep:YY,smootherstep:XY,randInt:UY,randFloat:GY,randFloatSpread:NY,seededRandom:qY,degToRad:EY,radToDeg:FY,isPowerOfTwo:OY,ceilPowerOfTwo:RY,floorPowerOfTwo:l$,setQuaternionFromProperEuler:LY,normalize:d$,denormalize:m$};class T0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hJ{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let Y=$[W+0],X=$[W+1],U=$[W+2],G=$[W+3],N=Z[K+0],q=Z[K+1],F=Z[K+2],M=Z[K+3];if(G!==M||Y!==N||X!==q||U!==F){let V=Y*N+X*q+U*F+G*M;if(V<0)N=-N,q=-q,F=-F,M=-M,V=-V;let E=1-H;if(V<0.9995){let O=Math.acos(V),z=Math.sin(O);E=Math.sin(E*O)/z,H=Math.sin(H*O)/z,Y=Y*E+N*H,X=X*E+q*H,U=U*E+F*H,G=G*E+M*H}else{Y=Y*E+N*H,X=X*E+q*H,U=U*E+F*H,G=G*E+M*H;let O=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=O,X*=O,U*=O,G*=O}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],G=Z[K],N=Z[K+1],q=Z[K+2],F=Z[K+3];return J[Q]=H*F+U*G+Y*q-X*N,J[Q+1]=Y*F+U*N+X*G-H*q,J[Q+2]=X*F+U*q+H*N-Y*G,J[Q+3]=U*F-H*G-Y*N-X*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(W/2),G=H(Z/2),N=Y($/2),q=Y(W/2),F=Y(Z/2);switch(K){case"XYZ":this._x=N*U*G+X*q*F,this._y=X*q*G-N*U*F,this._z=X*U*F+N*q*G,this._w=X*U*G-N*q*F;break;case"YXZ":this._x=N*U*G+X*q*F,this._y=X*q*G-N*U*F,this._z=X*U*F-N*q*G,this._w=X*U*G+N*q*F;break;case"ZXY":this._x=N*U*G-X*q*F,this._y=X*q*G+N*U*F,this._z=X*U*F+N*q*G,this._w=X*U*G-N*q*F;break;case"ZYX":this._x=N*U*G-X*q*F,this._y=X*q*G+N*U*F,this._z=X*U*F-N*q*G,this._w=X*U*G+N*q*F;break;case"YZX":this._x=N*U*G+X*q*F,this._y=X*q*G+N*U*F,this._z=X*U*F-N*q*G,this._w=X*U*G-N*q*F;break;case"XZY":this._x=N*U*G-X*q*F,this._y=X*q*G-N*U*F,this._z=X*U*F+N*q*G,this._w=X*U*G+N*q*F;break;default:C0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],N=$+H+G;if(N>0){let q=0.5/Math.sqrt(N+1);this._w=0.25/q,this._x=(U-Y)*q,this._y=(Z-X)*q,this._z=(K-W)*q}else if($>H&&$>G){let q=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/q,this._x=0.25*q,this._y=(W+K)/q,this._z=(Z+X)/q}else if(H>G){let q=2*Math.sqrt(1+H-$-G);this._w=(Z-X)/q,this._x=(W+K)/q,this._y=0.25*q,this._z=(Y+U)/q}else{let q=2*Math.sqrt(1+G-$-H);this._w=(K-W)/q,this._x=(Z+X)/q,this._y=(Y+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(l0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+W*X-Z*Y,this._y=W*U+K*Y+Z*H-$*X,this._z=Z*U+K*X+$*Y-W*H,this._w=K*U-$*H-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(xW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(xW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*W-H*$),U=2*(H*Q-Z*W),G=2*(Z*$-K*Q);return this.x=Q+Y*X+K*G-H*U,this.y=$+Y*U+H*X-Z*G,this.z=W+Y*G+Z*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=W*Y-Z*H,this.y=Z*K-$*Y,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return qQ.copy(this).projectOnVector(J),this.sub(qQ)}reflect(J){return this.sub(qQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var qQ=new v,xW=new hJ;class y0{static{this.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X)}set(J,Q,$,W,Z,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],G=$[7],N=$[2],q=$[5],F=$[8],M=W[0],V=W[3],E=W[6],O=W[1],z=W[4],P=W[7],B=W[2],I=W[5],w=W[8];return Z[0]=K*M+H*O+Y*B,Z[3]=K*V+H*z+Y*I,Z[6]=K*E+H*P+Y*w,Z[1]=X*M+U*O+G*B,Z[4]=X*V+U*z+G*I,Z[7]=X*E+U*P+G*w,Z[2]=N*M+q*O+F*B,Z[5]=N*V+q*z+F*I,Z[8]=N*E+q*P+F*w,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*Z*U+$*H*Y+W*Z*X-W*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*K-H*X,N=H*Y-U*Z,q=X*Z-K*Y,F=Q*G+$*N+W*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/F;return J[0]=G*M,J[1]=(W*X-U*$)*M,J[2]=(H*$-W*K)*M,J[3]=N*M,J[4]=(U*Q-W*Y)*M,J[5]=(W*Z-H*Q)*M,J[6]=q*M,J[7]=($*Y-X*Q)*M,J[8]=(K*Q-$*Z)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-W*X,W*Y,-W*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return O8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(EQ.makeScale(J,Q)),this}rotate(J){return O8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(EQ.makeRotation(-J)),this}translate(J,Q){return O8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(EQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var EQ=new y0,gW=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),pW=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function MY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=y9(Z.r),Z.g=y9(Z.g),Z.b=y9(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=p8(Z.r),Z.g=p8(Z.g),Z.b=p8(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[H].fromXYZ).multiply(this.spaces[K].toXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:gW,fromXYZ:pW,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:gW,fromXYZ:pW,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var p0=MY();function y9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function p8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var I8;class u${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(I8===void 0)I8=l8("canvas");I8.width=J.width,I8.height=J.height;let W=I8.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=I8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=l8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=y9(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(y9(Q[$]/255)*255);else Q[$]=y9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return C0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var DY=0;class C7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:DY++}),this.uuid=k9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push(FQ(W[K].image));else Z.push(FQ(W[K]))}else Z=FQ(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function FQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return u$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return C0("Texture: Unable to serialize Texture."),{}}var VY=0,OQ=new v;class FJ extends V9{constructor(J=FJ.DEFAULT_IMAGE,Q=FJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,Y=1009,X=FJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:VY++}),this.uuid=k9(),this.name="",this.source=new C7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new T0(0,0),this.repeat=new T0(1,1),this.center=new T0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(OQ).x}get height(){return this.source.getSize(OQ).y}get depth(){return this.source.getSize(OQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){C0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){C0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}FJ.DEFAULT_IMAGE=null;FJ.DEFAULT_MAPPING=300;FJ.DEFAULT_ANISOTROPY=1;class JJ{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],N=Y[1],q=Y[5],F=Y[9],M=Y[2],V=Y[6],E=Y[10];if(Math.abs(U-N)<0.01&&Math.abs(G-M)<0.01&&Math.abs(F-V)<0.01){if(Math.abs(U+N)<0.1&&Math.abs(G+M)<0.1&&Math.abs(F+V)<0.1&&Math.abs(X+q+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let z=(X+1)/2,P=(q+1)/2,B=(E+1)/2,I=(U+N)/4,w=(G+M)/4,R=(F+V)/4;if(z>P&&z>B)if(z<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(z),W=I/$,Z=w/$;else if(P>B)if(P<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(P),$=I/W,Z=R/W;else if(B<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(B),$=w/Z,W=R/Z;return this.set($,W,Z,Q),this}let O=Math.sqrt((V-F)*(V-F)+(G-M)*(G-M)+(N-U)*(N-U));if(Math.abs(O)<0.001)O=1;return this.x=(V-F)/O,this.y=(G-M)/O,this.z=(N-U)/O,this.w=Math.acos((X+q+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this.w=l0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this.w=l0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c$ extends V9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new JJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new JJ(0,0,J,Q),this.textures=[];let W=$.count;for(let Z=0;Z<W;Z++)this.textures[Z]=new FJ({width:J,height:Q,depth:$.depth}),this.textures[Z].isRenderTargetTexture=!0,this.textures[Z].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new C7(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $9 extends c${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class S6 extends FJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class n$ extends FJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class f0{static{this.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,Y,X,U,G,N,q,F,M,V){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X,U,G,N,q,F,M,V)}set(J,Q,$,W,Z,K,H,Y,X,U,G,N,q,F,M,V){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=$,E[12]=W,E[1]=Z,E[5]=K,E[9]=H,E[13]=Y,E[2]=X,E[6]=U,E[10]=G,E[14]=N,E[3]=q,E[7]=F,E[11]=M,E[15]=V,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new f0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/w8.setFromMatrixColumn(J,0).length(),Z=1/w8.setFromMatrixColumn(J,1).length(),K=1/w8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),G=Math.sin(Z);if(J.order==="XYZ"){let N=K*U,q=K*G,F=H*U,M=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=q+F*X,Q[5]=N-M*X,Q[9]=-H*Y,Q[2]=M-N*X,Q[6]=F+q*X,Q[10]=K*Y}else if(J.order==="YXZ"){let N=Y*U,q=Y*G,F=X*U,M=X*G;Q[0]=N+M*H,Q[4]=F*H-q,Q[8]=K*X,Q[1]=K*G,Q[5]=K*U,Q[9]=-H,Q[2]=q*H-F,Q[6]=M+N*H,Q[10]=K*Y}else if(J.order==="ZXY"){let N=Y*U,q=Y*G,F=X*U,M=X*G;Q[0]=N-M*H,Q[4]=-K*G,Q[8]=F+q*H,Q[1]=q+F*H,Q[5]=K*U,Q[9]=M-N*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let N=K*U,q=K*G,F=H*U,M=H*G;Q[0]=Y*U,Q[4]=F*X-q,Q[8]=N*X+M,Q[1]=Y*G,Q[5]=M*X+N,Q[9]=q*X-F,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let N=K*Y,q=K*X,F=H*Y,M=H*X;Q[0]=Y*U,Q[4]=M-N*G,Q[8]=F*G+q,Q[1]=G,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=q*G+F,Q[10]=N-M*G}else if(J.order==="XZY"){let N=K*Y,q=K*X,F=H*Y,M=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=N*G+M,Q[5]=K*U,Q[9]=q*G-F,Q[2]=F*G-q,Q[6]=H*U,Q[10]=M*G+N}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(kY,J,BY)}lookAt(J,Q,$){let W=this.elements;if(nJ.subVectors(J,Q),nJ.lengthSq()===0)nJ.z=1;if(nJ.normalize(),m9.crossVectors($,nJ),m9.lengthSq()===0){if(Math.abs($.z)===1)nJ.x+=0.0001;else nJ.z+=0.0001;nJ.normalize(),m9.crossVectors($,nJ)}return m9.normalize(),n7.crossVectors(nJ,m9),W[0]=m9.x,W[4]=n7.x,W[8]=nJ.x,W[1]=m9.y,W[5]=n7.y,W[9]=nJ.y,W[2]=m9.z,W[6]=n7.z,W[10]=nJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],G=$[5],N=$[9],q=$[13],F=$[2],M=$[6],V=$[10],E=$[14],O=$[3],z=$[7],P=$[11],B=$[15],I=W[0],w=W[4],R=W[8],k=W[12],j=W[1],l=W[5],y=W[9],p=W[13],t=W[2],A=W[6],s=W[10],o=W[14],x=W[3],K0=W[7],u=W[11],r=W[15];return Z[0]=K*I+H*j+Y*t+X*x,Z[4]=K*w+H*l+Y*A+X*K0,Z[8]=K*R+H*y+Y*s+X*u,Z[12]=K*k+H*p+Y*o+X*r,Z[1]=U*I+G*j+N*t+q*x,Z[5]=U*w+G*l+N*A+q*K0,Z[9]=U*R+G*y+N*s+q*u,Z[13]=U*k+G*p+N*o+q*r,Z[2]=F*I+M*j+V*t+E*x,Z[6]=F*w+M*l+V*A+E*K0,Z[10]=F*R+M*y+V*s+E*u,Z[14]=F*k+M*p+V*o+E*r,Z[3]=O*I+z*j+P*t+B*x,Z[7]=O*w+z*l+P*A+B*K0,Z[11]=O*R+z*y+P*s+B*u,Z[15]=O*k+z*p+P*o+B*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],N=J[10],q=J[14],F=J[3],M=J[7],V=J[11],E=J[15],O=Y*q-X*N,z=H*q-X*G,P=H*N-Y*G,B=K*q-X*U,I=K*N-Y*U,w=K*G-H*U;return Q*(M*O-V*z+E*P)-$*(F*O-V*B+E*I)+W*(F*z-M*B+E*w)-Z*(F*P-M*I+V*w)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(Z*U-H*Y)+W*(Z*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],N=J[10],q=J[11],F=J[12],M=J[13],V=J[14],E=J[15],O=Q*H-$*K,z=Q*Y-W*K,P=Q*X-Z*K,B=$*Y-W*H,I=$*X-Z*H,w=W*X-Z*Y,R=U*M-G*F,k=U*V-N*F,j=U*E-q*F,l=G*V-N*M,y=G*E-q*M,p=N*E-q*V,t=O*p-z*y+P*l+B*j-I*k+w*R;if(t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/t;return J[0]=(H*p-Y*y+X*l)*A,J[1]=(W*y-$*p-Z*l)*A,J[2]=(M*w-V*I+E*B)*A,J[3]=(N*I-G*w-q*B)*A,J[4]=(Y*j-K*p-X*k)*A,J[5]=(Q*p-W*j+Z*k)*A,J[6]=(V*P-F*w-E*z)*A,J[7]=(U*w-N*P+q*z)*A,J[8]=(K*y-H*j+X*R)*A,J[9]=($*j-Q*y-Z*R)*A,J[10]=(F*I-M*P+E*O)*A,J[11]=(G*P-U*I-q*O)*A,J[12]=(H*k-K*l-Y*R)*A,J[13]=(Q*l-$*k+W*R)*A,J[14]=(M*z-F*B-V*O)*A,J[15]=(U*B-G*z+N*O)*A,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,Y=J.z,X=Z*K,U=Z*H;return this.set(X*K+$,X*H-W*Y,X*Y+W*H,0,X*H+W*Y,U*H+$,U*Y-W*K,0,X*Y-W*H,U*Y+W*K,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=Z+Z,U=K+K,G=H+H,N=Z*X,q=Z*U,F=Z*G,M=K*U,V=K*G,E=H*G,O=Y*X,z=Y*U,P=Y*G,B=$.x,I=$.y,w=$.z;return W[0]=(1-(M+E))*B,W[1]=(q+P)*B,W[2]=(F-z)*B,W[3]=0,W[4]=(q-P)*I,W[5]=(1-(N+E))*I,W[6]=(V+O)*I,W[7]=0,W[8]=(F+z)*w,W[9]=(V-O)*w,W[10]=(1-(N+M))*w,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=w8.set(W[0],W[1],W[2]).length(),H=w8.set(W[4],W[5],W[6]).length(),Y=w8.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;X9.copy(this);let X=1/K,U=1/H,G=1/Y;return X9.elements[0]*=X,X9.elements[1]*=X,X9.elements[2]*=X,X9.elements[4]*=U,X9.elements[5]*=U,X9.elements[6]*=U,X9.elements[8]*=G,X9.elements[9]*=G,X9.elements[10]*=G,Q.setFromRotationMatrix(X9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),G=2*Z/($-W),N=(Q+J)/(Q-J),q=($+W)/($-W),F,M;if(Y)F=Z/(K-Z),M=K*Z/(K-Z);else if(H===2000)F=-(K+Z)/(K-Z),M=-2*K*Z/(K-Z);else if(H===2001)F=-K/(K-Z),M=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=N,X[12]=0,X[1]=0,X[5]=G,X[9]=q,X[13]=0,X[2]=0,X[6]=0,X[10]=F,X[14]=M,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),G=2/($-W),N=-(Q+J)/(Q-J),q=-($+W)/($-W),F,M;if(Y)F=1/(K-Z),M=K/(K-Z);else if(H===2000)F=-2/(K-Z),M=-(K+Z)/(K-Z);else if(H===2001)F=-1/(K-Z),M=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=N,X[1]=0,X[5]=G,X[9]=0,X[13]=q,X[2]=0,X[6]=0,X[10]=F,X[14]=M,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var w8=new v,X9=new f0,kY=new v(0,0,0),BY=new v(1,1,1),m9=new v,n7=new v,nJ=new v,lW=new f0,mW=new hJ;class v9{constructor(J=0,Q=0,$=0,W=v9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],Y=W[1],X=W[5],U=W[9],G=W[2],N=W[6],q=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(l0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(N,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-l0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,q),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(l0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-l0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(N,q),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(l0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,Z);else this._x=0,this._y=Math.atan2(H,q);break;case"XZY":if(this._z=Math.asin(-l0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(N,X),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,q),this._y=0;break;default:C0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return lW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(lW,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return mW.setFromEuler(this),this.setFromQuaternion(mW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}v9.DEFAULT_ORDER="XYZ";class j6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var zY=0,dW=new v,_8=new hJ,w9=new f0,s7=new v,Y7=new v,CY=new v,PY=new hJ,uW=new v(1,0,0),cW=new v(0,1,0),nW=new v(0,0,1),sW={type:"added"},IY={type:"removed"},A8={type:"childadded",child:null},RQ={type:"childremoved",child:null};class KJ extends V9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:zY++}),this.uuid=k9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=KJ.DEFAULT_UP.clone();let J=new v,Q=new v9,$=new hJ,W=new v(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new f0},normalMatrix:{value:new y0}}),this.matrix=new f0,this.matrixWorld=new f0,this.matrixAutoUpdate=KJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=KJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return _8.setFromAxisAngle(J,Q),this.quaternion.multiply(_8),this}rotateOnWorldAxis(J,Q){return _8.setFromAxisAngle(J,Q),this.quaternion.premultiply(_8),this}rotateX(J){return this.rotateOnAxis(uW,J)}rotateY(J){return this.rotateOnAxis(cW,J)}rotateZ(J){return this.rotateOnAxis(nW,J)}translateOnAxis(J,Q){return dW.copy(J).applyQuaternion(this.quaternion),this.position.add(dW.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(uW,J)}translateY(J){return this.translateOnAxis(cW,J)}translateZ(J){return this.translateOnAxis(nW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(w9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)s7.copy(J);else s7.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),Y7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)w9.lookAt(Y7,s7,this.up);else w9.lookAt(s7,Y7,this.up);if(this.quaternion.setFromRotationMatrix(w9),W)w9.extractRotation(W.matrixWorld),_8.setFromRotationMatrix(w9),this.quaternion.premultiply(_8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return j0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(sW),A8.child=J,this.dispatchEvent(A8),A8.child=null;else j0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(IY),RQ.child=J,this.dispatchEvent(RQ),RQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),w9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),w9.multiply(J.parent.matrixWorld);return J.applyMatrix4(w9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(sW),A8.child=J,this.dispatchEvent(A8),A8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Y7,J,CY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Y7,PY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];Z(J.shapes,G)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(Z(J.materials,this.material[Y]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];W.animations.push(Z(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),G=K(J.shapes),N=K(J.skeletons),q=K(J.animations),F=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(N.length>0)$.skeletons=N;if(q.length>0)$.animations=q;if(F.length>0)$.nodes=F}return $.object=W,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}KJ.DEFAULT_UP=new v(0,1,0);KJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;KJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class O9 extends KJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var wY={type:"move"};class P7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new O9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new O9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new O9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let M of J.hand.values()){let V=Q.getJointPose(M,$),E=this._getHandJoint(X,M);if(V!==null)E.matrix.fromArray(V.transform.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=V.radius;E.visible=V!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],N=U.position.distanceTo(G.position),q=0.02,F=0.005;if(X.inputState.pinching&&N>q+F)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&N<=q-F)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(wY)}}}if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new O9;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var DK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},d9={h:0,s:0,l:0},i7={h:0,s:0,l:0};function LQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class S0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,p0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=p0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,p0.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=p0.workingColorSpace){if(J=p$(J,1),Q=l0(Q,0,1),$=l0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=LQ(K,Z,J+0.3333333333333333),this.g=LQ(K,Z,J),this.b=LQ(K,Z,J-0.3333333333333333)}return p0.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)C0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseFloat(Z[1]))/100,Math.min(100,parseFloat(Z[2]))/100,Math.min(100,parseFloat(Z[3]))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:C0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else C0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=DK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else C0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=y9(J.r),this.g=y9(J.g),this.b=y9(J.b),this}copyLinearToSRGB(J){return this.r=p8(J.r),this.g=p8(J.g),this.b=p8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return p0.workingToColorSpace(AJ.copy(this),J),Math.round(l0(AJ.r*255,0,255))*65536+Math.round(l0(AJ.g*255,0,255))*256+Math.round(l0(AJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=p0.workingColorSpace){p0.workingToColorSpace(AJ.copy(this),Q);let{r:$,g:W,b:Z}=AJ,K=Math.max($,W,Z),H=Math.min($,W,Z),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let G=K-H;switch(X=U<=0.5?G/(K+H):G/(2-K-H),K){case $:Y=(W-Z)/G+(W<Z?6:0);break;case W:Y=(Z-$)/G+2;break;case Z:Y=($-W)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=p0.workingColorSpace){return p0.workingToColorSpace(AJ.copy(this),Q),J.r=AJ.r,J.g=AJ.g,J.b=AJ.b,J}getStyle(J="srgb"){p0.workingToColorSpace(AJ.copy(this),J);let{r:Q,g:$,b:W}=AJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(d9),this.setHSL(d9.h+J,d9.s+Q,d9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(d9),J.getHSL(i7);let $=L7(d9.h,i7.h,Q),W=L7(d9.s,i7.s,Q),Z=L7(d9.l,i7.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var AJ=new S0;S0.NAMES=DK;class y6 extends KJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new v9,this.environmentIntensity=1,this.environmentRotation=new v9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){return super.copy(J,Q),this.background=J.background!==null?J.background.clone():null,this.environment=J.environment!==null?J.environment.clone():null,this.fog=J.fog!==null?J.fog.clone():null,this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),this.overrideMaterial=J.overrideMaterial!==null?J.overrideMaterial.clone():null,this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var U9=new v,_9=new v,MQ=new v,A9=new v,T8=new v,S8=new v,iW=new v,DQ=new v,VQ=new v,kQ=new v,BQ=new JJ,zQ=new JJ,CQ=new JJ;class J9{constructor(J=new v,Q=new v,$=new v){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),U9.subVectors(J,Q),W.cross(U9);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){U9.subVectors(W,Q),_9.subVectors($,Q),MQ.subVectors(J,Q);let K=U9.dot(U9),H=U9.dot(_9),Y=U9.dot(MQ),X=_9.dot(_9),U=_9.dot(MQ),G=K*X-H*H;if(G===0)return Z.set(0,0,0),null;let N=1/G,q=(X*Y-H*U)*N,F=(K*U-H*Y)*N;return Z.set(1-q-F,F,q)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,A9)===null)return!1;return A9.x>=0&&A9.y>=0&&A9.x+A9.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,Y){if(this.getBarycoord(J,Q,$,W,A9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,A9.x),Y.addScaledVector(K,A9.y),Y.addScaledVector(H,A9.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,K){return BQ.setScalar(0),zQ.setScalar(0),CQ.setScalar(0),BQ.fromBufferAttribute(J,Q),zQ.fromBufferAttribute(J,$),CQ.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(BQ,Z.x),K.addScaledVector(zQ,Z.y),K.addScaledVector(CQ,Z.z),K}static isFrontFacing(J,Q,$,W){return U9.subVectors($,Q),_9.subVectors(J,Q),U9.cross(_9).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return U9.subVectors(this.c,this.b),_9.subVectors(this.a,this.b),U9.cross(_9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return J9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return J9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return J9.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return J9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return J9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;T8.subVectors(W,$),S8.subVectors(Z,$),DQ.subVectors(J,$);let Y=T8.dot(DQ),X=S8.dot(DQ);if(Y<=0&&X<=0)return Q.copy($);VQ.subVectors(J,W);let U=T8.dot(VQ),G=S8.dot(VQ);if(U>=0&&G<=U)return Q.copy(W);let N=Y*G-U*X;if(N<=0&&Y>=0&&U<=0&&Y-U>0)return K=Y/(Y-U),Q.copy($).addScaledVector(T8,K);kQ.subVectors(J,Z);let q=T8.dot(kQ),F=S8.dot(kQ);if(F>=0&&q<=F)return Q.copy(Z);let M=q*X-Y*F;if(M<=0&&X>=0&&F<=0)return H=X/(X-F),Q.copy($).addScaledVector(S8,H);let V=U*F-q*G;if(V<=0&&G-U>=0&&q-F>=0)return iW.subVectors(Z,W),H=(G-U)/(G-U+(q-F)),Q.copy(W).addScaledVector(iW,H);let E=1/(V+M+N);return K=M*E,H=N*E,Q.copy($).addScaledVector(T8,K).addScaledVector(S8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class W9{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(G9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(G9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=G9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,G9);else G9.fromBufferAttribute(Z,K);G9.applyMatrix4(J.matrixWorld),this.expandByPoint(G9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();o7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();o7.copy($.boundingBox)}o7.applyMatrix4(J.matrixWorld),this.union(o7)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,G9),G9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(X7),a7.subVectors(this.max,X7),j8.subVectors(J.a,X7),y8.subVectors(J.b,X7),v8.subVectors(J.c,X7),u9.subVectors(y8,j8),c9.subVectors(v8,y8),N8.subVectors(j8,v8);let Q=[0,-u9.z,u9.y,0,-c9.z,c9.y,0,-N8.z,N8.y,u9.z,0,-u9.x,c9.z,0,-c9.x,N8.z,0,-N8.x,-u9.y,u9.x,0,-c9.y,c9.x,0,-N8.y,N8.x,0];if(!PQ(Q,j8,y8,v8,a7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!PQ(Q,j8,y8,v8,a7))return!1;return r7.crossVectors(u9,c9),Q=[r7.x,r7.y,r7.z],PQ(Q,j8,y8,v8,a7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,G9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(G9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return T9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),T9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),T9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),T9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),T9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),T9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),T9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),T9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(T9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var T9=[new v,new v,new v,new v,new v,new v,new v,new v],G9=new v,o7=new W9,j8=new v,y8=new v,v8=new v,u9=new v,c9=new v,N8=new v,X7=new v,a7=new v,r7=new v,q8=new v;function PQ(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){q8.fromArray(J,K);let Y=Z.x*Math.abs(q8.x)+Z.y*Math.abs(q8.y)+Z.z*Math.abs(q8.z),X=Q.dot(q8),U=$.dot(q8),G=W.dot(q8);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var EJ=new v,t7=new T0,_Y=0;class TJ extends V9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_Y++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?T6(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)t7.fromBufferAttribute(this,Q),t7.applyMatrix3(J),this.setXY(Q,t7.x,t7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix3(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix4(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyNormalMatrix(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.transformDirection(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):m$(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):d$(J,this.array)}}class v6 extends TJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class h6 extends TJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class gJ extends TJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var AY=new W9,U7=new v,IQ=new v;class oJ{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else AY.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;U7.subVectors(J,this.center);let Q=U7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(U7,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else IQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(U7.copy(J.center).add(IQ)),this.expandByPoint(U7.copy(J.center).sub(IQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var TY=0,tJ=new f0,wQ=new KJ,h8=new v,sJ=new W9,G7=new W9,kJ=new v;class lJ extends V9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TY++}),this.uuid=k9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((QY(J))?h6:v6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new y0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return tJ.makeRotationFromQuaternion(J),this.applyMatrix4(tJ),this}rotateX(J){return tJ.makeRotationX(J),this.applyMatrix4(tJ),this}rotateY(J){return tJ.makeRotationY(J),this.applyMatrix4(tJ),this}rotateZ(J){return tJ.makeRotationZ(J),this.applyMatrix4(tJ),this}translate(J,Q,$){return tJ.makeTranslation(J,Q,$),this.applyMatrix4(tJ),this}scale(J,Q,$){return tJ.makeScale(J,Q,$),this.applyMatrix4(tJ),this}lookAt(J){return wQ.lookAt(J),wQ.updateMatrix(),this.applyMatrix4(wQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(h8).negate(),this.translate(h8.x,h8.y,h8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new gJ($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)C0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new W9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(sJ.setFromBufferAttribute(Z),this.morphTargetsRelative)kJ.addVectors(this.boundingBox.min,sJ.min),this.boundingBox.expandByPoint(kJ),kJ.addVectors(this.boundingBox.max,sJ.max),this.boundingBox.expandByPoint(kJ);else this.boundingBox.expandByPoint(sJ.min),this.boundingBox.expandByPoint(sJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))j0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new oJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let $=this.boundingSphere.center;if(sJ.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(G7.setFromBufferAttribute(H),this.morphTargetsRelative)kJ.addVectors(sJ.min,G7.min),sJ.expandByPoint(kJ),kJ.addVectors(sJ.max,G7.max),sJ.expandByPoint(kJ);else sJ.expandByPoint(G7.min),sJ.expandByPoint(G7.max)}sJ.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)kJ.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(kJ));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(kJ.fromBufferAttribute(H,X),Y)h8.fromBufferAttribute(J,X),kJ.add(h8);W=Math.max(W,$.distanceToSquared(kJ))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))j0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){j0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new TJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[],X=new Uint8Array($.count);for(let k=0;k<$.count;k++)H[k]=new v,Y[k]=new v;let U=new v,G=new v,N=new v,q=new T0,F=new T0,M=new T0,V=new v,E=new v;function O(k,j,l){X[k]=X[j]=X[l]=1,U.fromBufferAttribute($,k),G.fromBufferAttribute($,j),N.fromBufferAttribute($,l),q.fromBufferAttribute(Z,k),F.fromBufferAttribute(Z,j),M.fromBufferAttribute(Z,l),G.sub(U),N.sub(U),F.sub(q),M.sub(q);let y=1/(F.x*M.y-M.x*F.y);if(!isFinite(y))return;V.copy(G).multiplyScalar(M.y).addScaledVector(N,-F.y).multiplyScalar(y),E.copy(N).multiplyScalar(F.x).addScaledVector(G,-M.x).multiplyScalar(y),H[k].add(V),H[j].add(V),H[l].add(V),Y[k].add(E),Y[j].add(E),Y[l].add(E)}let z=this.groups;if(z.length===0)z=[{start:0,count:J.count}];for(let k=0,j=z.length;k<j;++k){let l=z[k],y=l.start,p=l.count;for(let t=y,A=y+p;t<A;t+=3)O(J.getX(t+0),J.getX(t+1),J.getX(t+2))}let P=new v,B=new v,I=new v,w=new v;function R(k){I.fromBufferAttribute(W,k),w.copy(I);let j=H[k];P.copy(j),P.sub(I.multiplyScalar(I.dot(j))).normalize(),B.crossVectors(w,j);let y=B.dot(Y[k])<0?-1:1;K.setXYZW(k,P.x,P.y,P.z,y)}for(let k=0,j=$.count;k<j;++k)if(X[k])R(k);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new TJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let N=0,q=$.count;N<q;N++)$.setXYZ(N,0,0,0);let W=new v,Z=new v,K=new v,H=new v,Y=new v,X=new v,U=new v,G=new v;if(J)for(let N=0,q=J.count;N<q;N+=3){let F=J.getX(N+0),M=J.getX(N+1),V=J.getX(N+2);W.fromBufferAttribute(Q,F),Z.fromBufferAttribute(Q,M),K.fromBufferAttribute(Q,V),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),H.fromBufferAttribute($,F),Y.fromBufferAttribute($,M),X.fromBufferAttribute($,V),H.add(U),Y.add(U),X.add(U),$.setXYZ(F,H.x,H.y,H.z),$.setXYZ(M,Y.x,Y.y,Y.z),$.setXYZ(V,X.x,X.y,X.z)}else for(let N=0,q=Q.count;N<q;N+=3)W.fromBufferAttribute(Q,N+0),Z.fromBufferAttribute(Q,N+1),K.fromBufferAttribute(Q,N+2),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),$.setXYZ(N+0,U.x,U.y,U.z),$.setXYZ(N+1,U.x,U.y,U.z),$.setXYZ(N+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)kJ.fromBufferAttribute(J,Q),kJ.normalize(),J.setXYZ(Q,kJ.x,kJ.y,kJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,N=new X.constructor(Y.length*U),q=0,F=0;for(let M=0,V=Y.length;M<V;M++){if(H.isInterleavedBufferAttribute)q=Y[M]*H.data.stride+H.offset;else q=Y[M]*U;for(let E=0;E<U;E++)N[F++]=X[q++]}return new TJ(N,U,G)}if(this.index===null)return C0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new lJ,$=this.index.array,W=this.attributes;for(let H in W){let Y=W[H],X=J(Y,$);Q.setAttribute(H,X)}let Z=this.morphAttributes;for(let H in Z){let Y=[],X=Z[H];for(let U=0,G=X.length;U<G;U++){let N=X[U],q=J(N,$);Y.push(q)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,N=X.length;G<N;G++){let q=X[G];U.push(q.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],G=Z[X];for(let N=0,q=G.length;N<q;N++)U.push(G[N].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let G=K[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class I7{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=k9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=oW(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[Q]),W=new this.constructor($,this.stride);return W.setUsage(this.usage),W}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=oW(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=Array.from(new Uint32Array(this.array.slice(0).buffer));let $={uuid:this.uuid,buffer:Q,type:this.array.constructor.name,stride:this.stride};return $.usage=this.usage,$}}function oW(J){if(J.buffer._uuid===void 0)J.buffer._uuid=k9();if(J.byteOffset===0&&J.byteLength===J.buffer.byteLength)return J.buffer._uuid;return J.buffer._uuid+":"+J.byteOffset+":"+J.byteLength}var vJ=new v;class t8{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W,this._normalizationScale=J!==void 0?T6(J.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyMatrix4(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyNormalMatrix(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.transformDirection(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=this._denormalize(Q);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=this._denormalize(Q);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=this._denormalize(Q);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=this._denormalize(Q);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W),Z=this._normalize(Z);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){M7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new TJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new t8(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){M7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):m$(J,this.data.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):d$(J,this.data.array)}}var _Q=new v,SY=new v,jY=new y0;class eJ{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=_Q.subVectors($,Q).cross(SY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(_Q),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||jY.getNormalMatrix(J),W=this.coplanarPoint(_Q).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var yY=0;class aJ extends V9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:yY++}),this.uuid=k9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new S0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){C0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){C0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)$.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)$.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let Y=Z[H];delete Y.metadata,K.push(Y)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new S0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new eJ().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new T0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new T0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var S9=new v,AQ=new v,e7=new v,J6=new v;class J8{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,S9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=S9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return S9.copy(this.origin).addScaledVector(this.direction,Q),S9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){AQ.copy(J).add(Q).multiplyScalar(0.5),e7.copy(Q).sub(J).normalize(),J6.copy(this.origin).sub(AQ);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(e7),H=J6.dot(this.direction),Y=-J6.dot(e7),X=J6.lengthSq(),U=Math.abs(1-K*K),G,N,q,F;if(U>0)if(G=K*Y-H,N=K*H-Y,F=Z*U,G>=0)if(N>=-F)if(N<=F){let M=1/U;G*=M,N*=M,q=G*(G+K*N+2*H)+N*(K*G+N+2*Y)+X}else N=Z,G=Math.max(0,-(K*N+H)),q=-G*G+N*(N+2*Y)+X;else N=-Z,G=Math.max(0,-(K*N+H)),q=-G*G+N*(N+2*Y)+X;else if(N<=-F)G=Math.max(0,-(-K*Z+H)),N=G>0?-Z:Math.min(Math.max(-Z,-Y),Z),q=-G*G+N*(N+2*Y)+X;else if(N<=F)G=0,N=Math.min(Math.max(-Z,-Y),Z),q=N*(N+2*Y)+X;else G=Math.max(0,-(K*Z+H)),N=G>0?Z:Math.min(Math.max(-Z,-Y),Z),q=-G*G+N*(N+2*Y)+X;else N=K>0?-Z:Z,G=Math.max(0,-(K*N+H)),q=-G*G+N*(N+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(W)W.copy(AQ).addScaledVector(e7,N);return q}intersectSphere(J,Q){if(J.radius<0)return null;S9.subVectors(J.center,this.origin);let $=S9.dot(this.direction),W=S9.dot(S9)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,N=this.origin;if(X>=0)$=(J.min.x-N.x)*X,W=(J.max.x-N.x)*X;else $=(J.max.x-N.x)*X,W=(J.min.x-N.x)*X;if(U>=0)Z=(J.min.y-N.y)*U,K=(J.max.y-N.y)*U;else Z=(J.max.y-N.y)*U,K=(J.min.y-N.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(G>=0)H=(J.min.z-N.z)*G,Y=(J.max.z-N.z)*G;else H=(J.max.z-N.z)*G,Y=(J.min.z-N.z)*G;if($>Y||H>W)return null;if(H>$||$!==$)$=H;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,S9)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,G=J.x-K.x,N=J.y-K.y,q=J.z-K.z,F=Q.x-K.x,M=Q.y-K.y,V=Q.z-K.z,E=$.x-K.x,O=$.y-K.y,z=$.z-K.z,P=Math.abs(Y),B=Math.abs(X),I=Math.abs(U),w,R,k,j,l,y,p,t,A,s,o,x;if(P>=B&&P>=I)if(k=Y,y=G,A=F,x=E,Y>=0)w=X,R=U,j=N,l=q,p=M,t=V,s=O,o=z;else w=U,R=X,j=q,l=N,p=V,t=M,s=z,o=O;else if(B>=I)if(k=X,y=N,A=M,x=O,X>=0)w=U,R=Y,j=q,l=G,p=V,t=F,s=z,o=E;else w=Y,R=U,j=G,l=q,p=F,t=V,s=E,o=z;else if(k=U,y=q,A=V,x=z,U>=0)w=Y,R=X,j=G,l=N,p=F,t=M,s=E,o=O;else w=X,R=Y,j=N,l=G,p=M,t=F,s=O,o=E;if(k===0)return null;let K0=w/k,u=R/k,r=1/k,$0=j-K0*y,k0=l-u*y,i=p-K0*A,Q0=t-u*A,D0=s-K0*x,w0=o-u*x,_0=D0*Q0-w0*i,V0=$0*w0-k0*D0,r0=i*k0-Q0*$0;if(W){if(_0<0||V0<0||r0<0)return null}else if((_0<0||V0<0||r0<0)&&(_0>0||V0>0||r0>0))return null;let d0=_0+V0+r0;if(d0===0)return null;let b0=r*(_0*y+V0*A+r0*x);if(d0>0?b0<0:b0>0)return null;return this.at(b0/d0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class b9 extends aJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new S0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new v9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var aW=new f0,E8=new J8,Q6=new oJ,rW=new v,$6=new v,W6=new v,Z6=new v,TQ=new v,K6=new v,tW=new v,H6=new v;class mJ extends KJ{constructor(J=new lJ,Q=new b9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){K6.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=H[Y],G=Z[Y];if(U===0)continue;if(TQ.fromBufferAttribute(G,J),K)K6.addScaledVector(TQ,U);else K6.addScaledVector(TQ.sub(Q),U)}Q.add(K6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(Q6.copy($.boundingSphere),Q6.applyMatrix4(Z),E8.copy(J.ray).recast(J.near),Q6.containsPoint(E8.origin)===!1){if(E8.intersectSphere(Q6,rW)===null)return;if(E8.origin.distanceToSquared(rW)>(J.far-J.near)**2)return}if(aW.copy(Z).invert(),E8.copy(J.ray).applyMatrix4(aW),$.boundingBox!==null){if(E8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,E8)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,G=Z.attributes.normal,N=Z.groups,q=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let F=0,M=N.length;F<M;F++){let V=N[F],E=K[V.materialIndex],O=Math.max(V.start,q.start),z=Math.min(H.count,Math.min(V.start+V.count,q.start+q.count));for(let P=O,B=z;P<B;P+=3){let I=H.getX(P),w=H.getX(P+1),R=H.getX(P+2);if(W=Y6(this,E,J,$,X,U,G,I,w,R),W)W.faceIndex=Math.floor(P/3),W.face.materialIndex=V.materialIndex,Q.push(W)}}else{let F=Math.max(0,q.start),M=Math.min(H.count,q.start+q.count);for(let V=F,E=M;V<E;V+=3){let O=H.getX(V),z=H.getX(V+1),P=H.getX(V+2);if(W=Y6(this,K,J,$,X,U,G,O,z,P),W)W.faceIndex=Math.floor(V/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(K))for(let F=0,M=N.length;F<M;F++){let V=N[F],E=K[V.materialIndex],O=Math.max(V.start,q.start),z=Math.min(Y.count,Math.min(V.start+V.count,q.start+q.count));for(let P=O,B=z;P<B;P+=3){let I=P,w=P+1,R=P+2;if(W=Y6(this,E,J,$,X,U,G,I,w,R),W)W.faceIndex=Math.floor(P/3),W.face.materialIndex=V.materialIndex,Q.push(W)}}else{let F=Math.max(0,q.start),M=Math.min(Y.count,q.start+q.count);for(let V=F,E=M;V<E;V+=3){let O=V,z=V+1,P=V+2;if(W=Y6(this,K,J,$,X,U,G,O,z,P),W)W.faceIndex=Math.floor(V/3),Q.push(W)}}}}function vY(J,Q,$,W,Z,K,H,Y){let X;if(Q.side===1)X=W.intersectTriangle(H,K,Z,!0,Y);else X=W.intersectTriangle(Z,K,H,Q.side===0,Y);if(X===null)return null;H6.copy(Y),H6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(H6);if(U<$.near||U>$.far)return null;return{distance:U,point:H6.clone(),object:J}}function Y6(J,Q,$,W,Z,K,H,Y,X,U){J.getVertexPosition(Y,$6),J.getVertexPosition(X,W6),J.getVertexPosition(U,Z6);let G=vY(J,Q,$,W,$6,W6,Z6,tW);if(G){let N=new v;if(J9.getBarycoord(tW,$6,W6,Z6,N),Z)G.uv=J9.getInterpolatedAttribute(Z,Y,X,U,N,new T0);if(K)G.uv1=J9.getInterpolatedAttribute(K,Y,X,U,N,new T0);if(H){if(G.normal=J9.getInterpolatedAttribute(H,Y,X,U,N,new v),G.normal.dot(W.direction)>0)G.normal.multiplyScalar(-1)}let q={a:Y,b:X,c:U,normal:new v,materialIndex:0};J9.getNormal($6,W6,Z6,q.normal),G.face=q,G.barycoord=N}return G}var N7=new JJ,eW=new JJ,JZ=new JJ,hY=new JJ,QZ=new f0,X6=new v,SQ=new oJ,$Z=new f0,jQ=new J8;class f6 extends mJ{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new f0,this.bindMatrixInverse=new f0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new W9;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,X6),this.boundingBox.expandByPoint(X6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new oJ;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,X6),this.boundingSphere.expandByPoint(X6)}copy(J,Q){return super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(SQ.copy(this.boundingSphere),SQ.applyMatrix4(W),J.ray.intersectsSphere(SQ)===!1)return;if($Z.copy(W).invert(),jQ.copy(J.ray).applyMatrix4($Z),this.boundingBox!==null){if(jQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,jQ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new JJ,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else C0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(eW.fromBufferAttribute(W.attributes.skinIndex,J),JZ.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)N7.copy(Q),Q.set(0,0,0,0);else N7.set(Q.x,Q.y,Q.z,1),Q.set(0,0,0);N7.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let K=JZ.getComponent(Z);if(K!==0){let H=eW.getComponent(Z);QZ.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(hY.copy(N7).applyMatrix4(QZ),K)}}if(Q.isVector4)Q.w=N7.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class w7 extends KJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class _7 extends FJ{constructor(J=null,Q=1,$=1,W,Z,K,H,Y,X=1003,U=1003,G,N){super(null,K,H,Y,X,U,W,Z,G,N);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var WZ=new f0,fY=new f0;class A7{constructor(J=[],Q=[]){this.uuid=k9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){C0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new f0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new f0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z]?J[Z].matrixWorld:fY;WZ.multiplyMatrices(H,Q[Z]),WZ.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new A7(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new _7(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],K=Q[Z];if(K===void 0)C0("Skeleton: No bone found with UUID:",Z),K=new w7;this.bones.push(K),this.boneInverses.push(new f0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W];J.bones.push(K.uuid);let H=$[W];J.boneInverses.push(H.toArray())}return J}}class i9 extends TJ{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var f8=new f0,ZZ=new f0,U6=[],KZ=new W9,bY=new f0,q7=new mJ,E7=new oJ;class b6 extends mJ{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new i9(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,bY)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new W9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,f8),KZ.copy(J.boundingBox).applyMatrix4(f8),this.boundingBox.union(KZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new oJ;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,f8),E7.copy(J.boundingSphere).applyMatrix4(f8),this.boundingSphere.union(E7)}copy(J,Q){return super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),this.morphTexture=J.morphTexture!==null?J.morphTexture.clone():null,this.instanceColor=J.instanceColor!==null?J.instanceColor.clone():null,this.count=J.count,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,K=J*Z+1;for(let H=0;H<$.length;H++)$[H]=W[K+H]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(q7.geometry=this.geometry,q7.material=this.material,q7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(E7.copy(this.boundingSphere),E7.applyMatrix4($),J.ray.intersectsSphere(E7)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,f8),ZZ.multiplyMatrices($,f8),q7.matrixWorld=ZZ,q7.raycast(J,U6);for(let K=0,H=U6.length;K<H;K++){let Y=U6[K];Y.instanceId=Z,Y.object=this,Q.push(Y)}U6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new i9(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new _7(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=W*J;return Z[Y]=H,Z.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var F8=new oJ,xY=new T0(0.5,0.5),G6=new v;class L8{constructor(J=new eJ,Q=new eJ,$=new eJ,W=new eJ,Z=new eJ,K=new eJ){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],Y=Z[2],X=Z[3],U=Z[4],G=Z[5],N=Z[6],q=Z[7],F=Z[8],M=Z[9],V=Z[10],E=Z[11],O=Z[12],z=Z[13],P=Z[14],B=Z[15];if(W[0].setComponents(X-K,q-U,E-F,B-O).normalize(),W[1].setComponents(X+K,q+U,E+F,B+O).normalize(),W[2].setComponents(X+H,q+G,E+M,B+z).normalize(),W[3].setComponents(X-H,q-G,E-M,B-z).normalize(),$)W[4].setComponents(Y,N,V,P).normalize(),W[5].setComponents(X-Y,q-N,E-V,B-P).normalize();else if(W[4].setComponents(X-Y,q-N,E-V,B-P).normalize(),Q===2000)W[5].setComponents(X+Y,q+N,E+V,B+P).normalize();else if(Q===2001)W[5].setComponents(Y,N,V,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();F8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();F8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(F8)}intersectsSprite(J){F8.center.set(0,0,0);let Q=xY.distanceTo(J.center);return F8.radius=0.7071067811865476+Q,F8.applyMatrix4(J.matrixWorld),this.intersectsSphere(F8)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(G6.x=W.normal.x>0?J.max.x:J.min.x,G6.y=W.normal.y>0?J.max.y:J.min.y,G6.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(G6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var HZ=new f0;class x6{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,$=this._frustums;for(let W=0;W<Q.length;W++){let Z=Q[W];if(HZ.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$[W]===void 0)$[W]=new L8;$[W].setFromProjectionMatrix(HZ,Z.coordinateSystem,Z.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,$=J._frustums;for(let W=0;W<J._count;W++){if(Q[W]===void 0)Q[W]=new L8;Q[W].copy($[W])}return this._count=J._count,this}clone(){return new x6().copy(this)}}class T7 extends aJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new S0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var L6=new v,M6=new v,YZ=new f0,F7=new J8,N6=new oJ,yQ=new v,XZ=new v;class e8 extends KJ{constructor(J=new lJ,Q=new T7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)L6.fromBufferAttribute(Q,W-1),M6.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=L6.distanceTo(M6);J.setAttribute("lineDistance",new gJ($,1))}else C0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(N6.copy($.boundingSphere),N6.applyMatrix4(W),N6.radius+=Z,J.ray.intersectsSphere(N6)===!1)return;YZ.copy(W).invert(),F7.copy(J.ray).applyMatrix4(YZ);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,N=$.attributes.position;if(U!==null){let q=Math.max(0,K.start),F=Math.min(U.count,K.start+K.count);for(let M=q,V=F-1;M<V;M+=X){let E=U.getX(M),O=U.getX(M+1),z=q6(this,J,F7,Y,E,O,M);if(z)Q.push(z)}if(this.isLineLoop){let M=U.getX(F-1),V=U.getX(q),E=q6(this,J,F7,Y,M,V,F-1);if(E)Q.push(E)}}else{let q=Math.max(0,K.start),F=Math.min(N.count,K.start+K.count);for(let M=q,V=F-1;M<V;M+=X){let E=q6(this,J,F7,Y,M,M+1,M);if(E)Q.push(E)}if(this.isLineLoop){let M=q6(this,J,F7,Y,F-1,q,F-1);if(M)Q.push(M)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function q6(J,Q,$,W,Z,K,H){let Y=J.geometry.attributes.position;if(L6.fromBufferAttribute(Y,Z),M6.fromBufferAttribute(Y,K),$.distanceSqToSegment(L6,M6,yQ,XZ)>W)return;yQ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(yQ);if(U<Q.near||U>Q.far)return;return{distance:U,point:XZ.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var UZ=new v,GZ=new v;class g6 extends e8{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)UZ.fromBufferAttribute(Q,W),GZ.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+UZ.distanceTo(GZ);J.setAttribute("lineDistance",new gJ($,1))}else C0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p6 extends e8{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class S7 extends aJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new S0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var NZ=new f0,fQ=new J8,E6=new oJ,F6=new v;class l6 extends KJ{constructor(J=new lJ,Q=new S7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(E6.copy($.boundingSphere),E6.applyMatrix4(W),E6.radius+=Z,J.ray.intersectsSphere(E6)===!1)return;NZ.copy(W).invert(),fQ.copy(J.ray).applyMatrix4(NZ);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,G=$.attributes.position;if(X!==null){let N=Math.max(0,K.start),q=Math.min(X.count,K.start+K.count);for(let F=N,M=q;F<M;F++){let V=X.getX(F);F6.fromBufferAttribute(G,V),qZ(F6,V,Y,W,J,Q,this)}}else{let N=Math.max(0,K.start),q=Math.min(G.count,K.start+K.count);for(let F=N,M=q;F<M;F++)F6.fromBufferAttribute(G,F),qZ(F6,F,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function qZ(J,Q,$,W,Z,K,H){let Y=fQ.distanceSqToPoint(J);if(Y<$){let X=new v;fQ.closestPointToPoint(J,X),X.applyMatrix4(W);let U=Z.ray.origin.distanceTo(X);if(U<Z.near||U>Z.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class m6 extends FJ{constructor(J=[],Q=301,$,W,Z,K,H,Y,X,U){super(J,Q,$,W,Z,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class Q8 extends FJ{constructor(J,Q,$=1014,W,Z,K,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:Q,depth:G};super(N,W,Z,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new C7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class d6 extends Q8{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,Y,X);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class u6 extends FJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class J7 extends lJ{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let Y=[],X=[],U=[],G=[],N=0,q=0;F("z","y","x",-1,-1,$,Q,J,K,Z,0),F("z","y","x",1,-1,$,Q,-J,K,Z,1),F("x","z","y",1,1,J,$,Q,W,K,2),F("x","z","y",1,-1,J,$,-Q,W,K,3),F("x","y","z",1,-1,J,Q,$,W,Z,4),F("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new gJ(X,3)),this.setAttribute("normal",new gJ(U,3)),this.setAttribute("uv",new gJ(G,2));function F(M,V,E,O,z,P,B,I,w,R,k){let j=P/w,l=B/R,y=P/2,p=B/2,t=I/2,A=w+1,s=R+1,o=0,x=0,K0=new v;for(let u=0;u<s;u++){let r=u*l-p;for(let $0=0;$0<A;$0++){let k0=$0*j-y;K0[M]=k0*O,K0[V]=r*z,K0[E]=t,X.push(K0.x,K0.y,K0.z),K0[M]=0,K0[V]=0,K0[E]=I>0?1:-1,U.push(K0.x,K0.y,K0.z),G.push($0/w),G.push(1-u/R),o+=1}}for(let u=0;u<R;u++)for(let r=0;r<w;r++){let $0=N+r+A*u,k0=N+r+A*(u+1),i=N+(r+1)+A*(u+1),Q0=N+(r+1)+A*u;Y.push($0,k0,Q0),Y.push(k0,i,Q0),x+=6}H.addGroup(q,x,k),q+=x,N+=o}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new J7(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class j7 extends lJ{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(W),X=H+1,U=Y+1,G=J/H,N=Q/Y,q=[],F=[],M=[],V=[];for(let E=0;E<U;E++){let O=E*N-K;for(let z=0;z<X;z++){let P=z*G-Z;F.push(P,-O,0),M.push(0,0,1),V.push(z/H),V.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let O=0;O<H;O++){let z=O+X*E,P=O+X*(E+1),B=O+1+X*(E+1),I=O+1+X*E;q.push(z,P,I),q.push(P,B,I)}this.setIndex(q),this.setAttribute("position",new gJ(F,3)),this.setAttribute("normal",new gJ(M,3)),this.setAttribute("uv",new gJ(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j7(J.width,J.height,J.widthSegments,J.heightSegments)}}function z8(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(EZ(Z))if(Z.isRenderTargetTexture)C0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(EZ(Z[0])){let K=[];for(let H=0,Y=Z.length;H<Y;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function jJ(J){let Q={};for(let $=0;$<J.length;$++){let W=z8(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function EZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function gY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function s$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return p0.workingColorSpace}var VK={clone:z8,merge:jJ},pY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class x9 extends aJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pY,this.fragmentShader=lY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=z8(J.uniforms),this.uniformsGroups=gY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new S0().setHex(W.value);break;case"v2":this.uniforms[$].value=new T0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new v().fromArray(W.value);break;case"v4":this.uniforms[$].value=new JJ().fromArray(W.value);break;case"m3":this.uniforms[$].value=new y0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new f0().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class i$ extends x9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Q7 extends aJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new S0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new S0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new T0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new v9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class dJ extends Q7{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new T0(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return l0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new S0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new S0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new S0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(J){if(this._diffuseRoughness>0!==J>0)this.version++;this._diffuseRoughness=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}get iridescenceThicknessRange(){return O8('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(J){O8('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=J[0],this.iridescenceThicknessMaximum=J[1]}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.diffuseRoughness=J.diffuseRoughness,this.diffuseRoughnessMap=J.diffuseRoughnessMap,this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum,this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class o$ extends aJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class a$ extends aJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function s9(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function O7(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function mY(J){function Q(Z,K){return J[Z]-J[K]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function FZ(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let K=0,H=0;H!==W;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)Z[H++]=J[Y+X]}return Z}function dY(J,Q,$,W){let Z=1,K=J[0];while(K!==void 0&&K[W]===void 0)K=J[Z++];if(K===void 0)return;let H=K[W];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(...H);K=J[Z++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[W],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[Z++]}while(K!==void 0);else do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(H);K=J[Z++]}while(K!==void 0)}class g9{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];$:{J:{let K;Q:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break J}K=Q.length;break Q}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class r$ extends g9{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],Y=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+W[1]-W[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,N=this._weightPrev,q=this._weightNext,F=($-Q)/(W-Q),M=F*F,V=M*F,E=-N*V+2*N*M-N*F,O=(1+N)*V+(-1.5-2*N)*M+(-0.5+N)*F+1,z=(-1-q)*V+(1.5+q)*M+0.5*F,P=q*V-q*M;for(let B=0;B!==H;++B)Z[B]=E*K[U+B]+O*K[X+B]+z*K[Y+B]+P*K[G+B];return Z}}class t$ extends g9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(W-Q),G=1-U;for(let N=0;N!==H;++N)Z[N]=K[X+N]*G+K[Y+N]*U;return Z}}class e$ extends g9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class JW extends g9{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,G=this.outTangents;if(!U||!G){let F=($-Q)/(W-Q),M=1-F;for(let V=0;V!==H;++V)Z[V]=K[X+V]*M+K[Y+V]*F;return Z}let N=H*2,q=J-1;for(let F=0;F!==H;++F){let M=K[X+F],V=K[Y+F],E=q*N+F*2,O=G[E],z=G[E+1],P=J*N+F*2,B=U[P],I=U[P+1],w=cY($,Q,O,B,W);Z[F]=kK(w,M,z,I,V)}return Z}}function kK(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function uY(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function cY(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let Y=kK(K,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=uY(K,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class rJ{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=s9(Q,this.TimeBufferType),this.values=s9($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:s9(J.times,Array),values:s9(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(O7(J.settings))$.settings={inTangents:s9(J.settings.inTangents,Array),outTangents:s9(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new e$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new t$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new r$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new JW(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return C0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J;if(O7(this.settings))OZ(this.settings.inTangents,J),OZ(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(O7(this.settings))RZ(this.settings.inTangents,J),RZ(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)j0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)j0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){j0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){j0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(W!==void 0){if($Y(W))for(let H=0,Y=W.length;H!==Y;++H){let X=W[H];if(isNaN(X)){j0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!W){let G=H*$,N=G-$,q=G+$;for(let F=0;F!==$;++F){let M=Q[G+F];if(M!==Q[N+F]||M!==Q[q+F]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let G=H*$,N=K*$;for(let q=0;q!==$;++q)Q[N+q]=Q[G+q]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,O7(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function OZ(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]+=Q}function RZ(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}rJ.prototype.ValueTypeName="";rJ.prototype.TimeBufferType=Float32Array;rJ.prototype.ValueBufferType=Float32Array;rJ.prototype.DefaultInterpolation=2301;class $8 extends rJ{constructor(J,Q,$){super(J,Q,$)}}$8.prototype.ValueTypeName="bool";$8.prototype.ValueBufferType=Array;$8.prototype.DefaultInterpolation=2300;$8.prototype.InterpolantFactoryMethodLinear=void 0;$8.prototype.InterpolantFactoryMethodSmooth=void 0;class c6 extends rJ{constructor(J,Q,$,W){super(J,Q,$,W)}}c6.prototype.ValueTypeName="color";class W8 extends rJ{constructor(J,Q,$,W){super(J,Q,$,W)}}W8.prototype.ValueTypeName="number";class QW extends g9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(W-Q),X=J*H;for(let U=X+H;X!==U;X+=4)hJ.slerpFlat(Z,0,K,X-H,K,X,Y);return Z}}class Z8 extends rJ{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new QW(this.times,this.values,this.getValueSize(),J)}}Z8.prototype.ValueTypeName="quaternion";Z8.prototype.InterpolantFactoryMethodSmooth=void 0;class K8 extends rJ{constructor(J,Q,$){super(J,Q,$)}}K8.prototype.ValueTypeName="string";K8.prototype.ValueBufferType=Array;K8.prototype.DefaultInterpolation=2300;K8.prototype.InterpolantFactoryMethodLinear=void 0;K8.prototype.InterpolantFactoryMethodSmooth=void 0;class C8 extends rJ{constructor(J,Q,$,W){super(J,Q,$,W)}}C8.prototype.ValueTypeName="vector";class n6{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=k9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(sY($[K]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,K=$.length;Z!==K;++Z)Q.push(rJ.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,K=[];for(let H=0;H<Z;H++){let Y=[],X=[];Y.push((H+Z-1)%Z,H,(H+1)%Z),X.push(0,1,0);let U=mY(Y);if(Y=FZ(Y,1,U),X=FZ(X,1,U),!W&&Y[0]===0)Y.push(Z),X.push(X[0]);K.push(new W8(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(Z);if(U&&U.length>1){let G=U[1],N=W[G];if(!N)W[G]=N=[];N.push(X)}}let K=[];for(let H in W)K.push(this.CreateFromMorphTargetSequence(H,W[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function nY(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return W8;case"vector":case"vector2":case"vector3":case"vector4":return C8;case"color":return c6;case"quaternion":return Z8;case"bool":case"boolean":return $8;case"string":return K8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function sY(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=nY(J.type);if(J.times===void 0){let W=[],Z=[];dY(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(O7(J.settings))$.settings={inTangents:s9(J.settings.inTangents,Float32Array),outTangents:s9(J.settings.outTangents,Float32Array)};return $}var R9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(LZ(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(LZ(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function LZ(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class $W{constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,N=X.length;G<N;G+=2){let q=X[G],F=X[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var BK=new $W;class p9{constructor(J){if(this.manager=J!==void 0?J:BK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}p9.DEFAULT_MATERIAL_NAME="__DEFAULT";var j9={};class zK extends Error{constructor(J,Q){super(J);this.response=Q}}class y7 extends p9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=R9.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(j9[J]!==void 0){j9[J].push({onLoad:Q,onProgress:$,onError:W});return}j9[J]=[],j9[J].push({onLoad:Q,onProgress:$,onError:W});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)C0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=j9[J],G=X.body.getReader(),N=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),q=N?parseInt(N):0,F=q!==0,M=0,V=new ReadableStream({start(E){O();function O(){G.read().then(({done:z,value:P})=>{if(z)E.close();else{M+=P.byteLength;let B=new ProgressEvent("progress",{lengthComputable:F,loaded:M,total:q});for(let I=0,w=U.length;I<w;I++){let R=U[I];if(R.onProgress)R.onProgress(B)}E.enqueue(P),O()}},(z)=>{E.error(z)})}}});return new Response(V)}else throw new zK(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(H),N=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(N);return X.arrayBuffer().then((F)=>q.decode(F))}}}).then((X)=>{R9.add(`file:${J}`,X);let U=j9[J];delete j9[J];for(let G=0,N=U.length;G<N;G++){let q=U[G];if(q.onLoad)q.onLoad(X)}}).catch((X)=>{let U=j9[J];if(U===void 0)throw this.manager.itemError(J),X;delete j9[J];for(let G=0,N=U.length;G<N;G++){let q=U[G];if(q.onError)q.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var b8=new WeakMap;class WW extends p9{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=R9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);else{let G=b8.get(K);if(G===void 0)G=[],b8.set(K,G);G.push({onLoad:Q,onError:W})}return K}let H=l8("img");function Y(){if(U(),Q)Q(this);let G=b8.get(this)||[];for(let N=0;N<G.length;N++){let q=G[N];if(q.onLoad)q.onLoad(this)}b8.delete(this),Z.manager.itemEnd(J)}function X(G){if(U(),W)W(G);R9.remove(`image:${J}`);let N=b8.get(this)||[];for(let q=0;q<N.length;q++){let F=N[q];if(F.onError)F.onError(G)}b8.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return R9.add(`image:${J}`,H),Z.manager.itemStart(J),H.fetchPriority=this.priority,H.src=J,H}}class s6 extends p9{constructor(J){super(J)}load(J,Q,$,W){let Z=new FJ,K=new WW(this.manager);return K.setPriority(this.priority),K.setCache(this.cache),K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(Z.image=H,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class $7 extends KJ{static registerNode(J){this.prototype._lightNode=J}constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new S0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class i6 extends $7{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(KJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new S0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var vQ=new f0,MZ=new v,DZ=new v;class v7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new T0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new f0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new L8,this._frameExtents=new T0(1,1),this._viewportCount=1,this._viewports=[new JJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;MZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(MZ),DZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(DZ),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){vQ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(vQ,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(vQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.mapType=J.mapType,this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.mapType=this.mapType,J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var O6=new v,R6=new hJ,F9=new v;class o6 extends KJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new f0,this.projectionMatrix=new f0,this.projectionMatrixInverse=new f0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(O6,R6,F9),F9.x===1&&F9.y===1&&F9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(O6,R6,F9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(O6,R6,F9),F9.x===1&&F9.y===1&&F9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(O6,R6,F9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var n9=new v,VZ=new T0,kZ=new T0;class BJ extends o6{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=R8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(R7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return R8*2*Math.atan(Math.tan(R7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){n9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(n9.x,n9.y).multiplyScalar(-J/n9.z),n9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(n9.x,n9.y).multiplyScalar(-J/n9.z)}getViewSize(J,Q){return this.getViewBounds(J,VZ,kZ),Q.subVectors(kZ,VZ)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(R7*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;Z+=K.offsetX*W/Y,Q-=K.offsetY*$/X,W*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class CK extends v7{constructor(){super(new BJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=R8*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class a6 extends $7{constructor(J,Q,$=0,W=Math.PI/3,Z=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(KJ.DEFAULT_UP),this.updateMatrix(),this.target=new KJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=K,this.map=null,this.shadow=new CK}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class PK extends v7{constructor(){super(new BJ(90,1,0.5,500));this.isPointLightShadow=!0}}class r6 extends $7{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new PK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class W7 extends o6{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,K=Z+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class IK extends v7{constructor(){super(new W7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class t6 extends $7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(KJ.DEFAULT_UP),this.updateMatrix(),this.target=new KJ,this.shadow=new IK}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class H8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var hQ=new WeakMap;class e6 extends p9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")C0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")C0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=R9.get(`image-bitmap:${J}`);if(K!==void 0){if(Z.manager.itemStart(J),K.then){K.then((X)=>{if(hQ.has(K)===!0){if(W)W(hQ.get(K));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(X);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);return}let H={};H.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",H.headers=this.requestHeader,H.priority=this.priority,H.cache=this.cache,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(X){if(R9.add(`image-bitmap:${J}`,X),Q)Q(X);return Z.manager.itemEnd(J),X}).catch(function(X){if(W)W(X);hQ.set(Y,X),R9.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});R9.add(`image-bitmap:${J}`,Y),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var x8=-90,g8=1;class h7 extends KJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new BJ(x8,g8,J,Q);W.layers=this.layers,this.add(W);let Z=new BJ(x8,g8,J,Q);Z.layers=this.layers,this.add(Z);let K=new BJ(x8,g8,J,Q);K.layers=this.layers,this.add(K);let H=new BJ(x8,g8,J,Q);H.layers=this.layers,this.add(H);let Y=new BJ(x8,g8,J,Q);Y.layers=this.layers,this.add(Y);let X=new BJ(x8,g8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,Y,X,U]=this.children,G=J.getRenderTarget(),N=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.mipmapsAutoUpdate;$.texture.mipmapsAutoUpdate=!1;let V=!1;if(J.isWebGLRenderer===!0)V=J.state.buffers.depth.getReversed();else V=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.mipmapsAutoUpdate=M,J.setRenderTarget($,5,W),V&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,N,q),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class ZW extends BJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var KW="\\[\\]\\.:\\/",iY=new RegExp("["+KW+"]","g"),HW="[^"+KW+"]",oY="[^"+KW.replace("\\.","")+"]",aY=/((?:WC+[\/:])*)/.source.replace("WC",HW),rY=/(WCOD+)?/.source.replace("WCOD",oY),tY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",HW),eY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",HW),JX=new RegExp("^"+aY+rY+tY+eY+"$"),QX=["material","materials","bones","map"];class wK{constructor(J,Q,$){let W=$||o0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class o0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||o0.parseTrackName(Q),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new o0(J,Q,$);else return new o0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(iY,"")}static parseTrackName(J){let Q=JX.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(QX.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=o0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){C0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){j0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){j0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){j0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){j0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){j0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[W];if(K===void 0){let X=Q.nodeName;j0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=wK;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Eq=new Float32Array(1);class f7{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=l0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(l0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class _K{static{this.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}class JQ extends V9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function YW(J,Q,$,W){let Z=$X(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function $X(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)C0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function aK(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function WX(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:G}=Y,N=U.byteLength,q=J.createBuffer();J.bindBuffer(X,q),J.bufferData(X,U,G),Y.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:N}}function W(Y,X,U){let{array:G,updateRanges:N}=X;if(J.bindBuffer(U,Y),N.length===0)J.bufferSubData(U,0,G);else{N.sort((F,M)=>F.start-M.start);let q=0;for(let F=1;F<N.length;F++){let M=N[q],V=N[F];if(V.start<=M.start+M.count+1)M.count=Math.max(M.count,V.start+V.count-M.start);else++q,N[q]=V}N.length=q+1;for(let F=0,M=N.length;F<M;F++){let V=N[F];J.bufferSubData(U,V.start*G.BYTES_PER_ELEMENT,G,V.start,V.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:K,update:H}}var ZX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KX=`#ifdef USE_ALPHAHASH
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
#endif`,HX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GX=`#ifdef USE_AOMAP
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
#endif`,EX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LX=`#ifdef USE_IRIDESCENCE
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
#endif`,MX=`#ifdef USE_BUMPMAP
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
#endif`,VX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,PX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
} // validated`,_X=`vec3 transformedNormal = objectNormal;
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
#endif`,AX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yX="gl_FragColor = linearToOutputTexel( gl_FragColor );",vX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hX=`#ifdef USE_ENVMAP
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
#endif`,fX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bX=`#ifdef USE_ENVMAP
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
#endif`,xX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gX=`#ifdef USE_ENVMAP
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
#endif`,pX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uX=`#ifdef USE_GRADIENTMAP
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
}`,cX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iX=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,oX=`#ifdef USE_ENVMAP
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
#endif`,aX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JU=`PhysicalMaterial material;
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
#endif`,QU=`uniform sampler2D dfgLUT;
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
}`,$U=`
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
#endif`,WU=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZU=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KU=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,HU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GU=`#ifdef USE_MAP
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
#endif`,EU=`#if defined( USE_POINTS_UV )
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
#endif`,FU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LU=`#if defined( USE_MORPHCOLORS )
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
#endif`,MU=`#ifdef USE_MORPHNORMALS
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
#endif`,VU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BU=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PU=`#ifndef FLAT_SHADED
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
#endif`,_U=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,vU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mU=`float getShadowMask() {
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
}`,dU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uU=`#ifdef USE_SKINNING
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
#endif`,cU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nU=`#ifdef USE_SKINNING
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
#endif`,sU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rU=`#ifdef USE_TRANSMISSION
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
#endif`,tU=`#ifdef USE_TRANSMISSION
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
#endif`,eU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$G=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZG=`uniform sampler2D t2D;
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
}`,KG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HG=`uniform float backgroundBlurriness;
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
}`,YG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UG=`#include <common>
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
}`,GG=`#if DEPTH_PACKING == 3200
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
}`,EG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OG=`uniform float scale;
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
}`,RG=`uniform vec3 diffuse;
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
}`,LG=`#include <common>
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
}`,MG=`uniform vec3 diffuse;
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
}`,VG=`#define LAMBERT
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
}`,kG=`#define MATCAP
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
}`,BG=`#define MATCAP
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
}`,zG=`#define NORMAL
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
}`,CG=`#define NORMAL
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
}`,PG=`#define PHONG
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
}`,_G=`#define STANDARD
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
}`,AG=`#define TOON
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
}`,TG=`#define TOON
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
}`,SG=`uniform float size;
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
}`,jG=`uniform vec3 diffuse;
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
}`,vG=`uniform vec3 color;
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
}`,hG=`uniform float rotation;
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
}`,fG=`uniform vec3 diffuse;
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
}`,g0={alphahash_fragment:ZX,alphahash_pars_fragment:KX,alphamap_fragment:HX,alphamap_pars_fragment:YX,alphatest_fragment:XX,alphatest_pars_fragment:UX,aomap_fragment:GX,aomap_pars_fragment:NX,batching_pars_vertex:qX,batching_vertex:EX,begin_vertex:FX,beginnormal_vertex:OX,bsdfs:RX,iridescence_fragment:LX,bumpmap_pars_fragment:MX,clipping_planes_fragment:DX,clipping_planes_pars_fragment:VX,clipping_planes_pars_vertex:kX,clipping_planes_vertex:BX,color_fragment:zX,color_pars_fragment:CX,color_pars_vertex:PX,color_vertex:IX,common:wX,defaultnormal_vertex:_X,displacementmap_pars_vertex:AX,displacementmap_vertex:TX,emissivemap_fragment:SX,emissivemap_pars_fragment:jX,colorspace_fragment:yX,colorspace_pars_fragment:vX,envmap_fragment:hX,envmap_common_pars_fragment:fX,envmap_pars_fragment:bX,envmap_pars_vertex:xX,envmap_physical_pars_fragment:oX,envmap_vertex:gX,fog_vertex:pX,fog_pars_vertex:lX,fog_fragment:mX,fog_pars_fragment:dX,gradientmap_pars_fragment:uX,lightmap_pars_fragment:cX,lights_lambert_fragment:nX,lights_lambert_pars_fragment:sX,lights_pars_begin:iX,lights_toon_fragment:aX,lights_toon_pars_fragment:rX,lights_phong_fragment:tX,lights_phong_pars_fragment:eX,lights_physical_fragment:JU,lights_physical_pars_fragment:QU,lights_fragment_begin:$U,lights_fragment_maps:WU,lights_fragment_end:ZU,lightprobes_pars_fragment:KU,logdepthbuf_fragment:HU,logdepthbuf_pars_fragment:YU,logdepthbuf_pars_vertex:XU,logdepthbuf_vertex:UU,map_fragment:GU,map_pars_fragment:NU,map_particle_fragment:qU,map_particle_pars_fragment:EU,metalnessmap_fragment:FU,metalnessmap_pars_fragment:OU,morphinstance_vertex:RU,morphcolor_vertex:LU,morphnormal_vertex:MU,morphtarget_pars_vertex:DU,morphtarget_vertex:VU,normal_fragment_begin:kU,normal_fragment_maps:BU,normal_pars_fragment:zU,normal_pars_vertex:CU,normal_vertex:PU,normalmap_pars_fragment:IU,clearcoat_normal_fragment_begin:wU,clearcoat_normal_fragment_maps:_U,clearcoat_pars_fragment:AU,iridescence_pars_fragment:TU,opaque_fragment:SU,packing:jU,premultiplied_alpha_fragment:yU,project_vertex:vU,dithering_fragment:hU,dithering_pars_fragment:fU,roughnessmap_fragment:bU,roughnessmap_pars_fragment:xU,shadowmap_pars_fragment:gU,shadowmap_pars_vertex:pU,shadowmap_vertex:lU,shadowmask_pars_fragment:mU,skinbase_vertex:dU,skinning_pars_vertex:uU,skinning_vertex:cU,skinnormal_vertex:nU,specularmap_fragment:sU,specularmap_pars_fragment:iU,tonemapping_fragment:oU,tonemapping_pars_fragment:aU,transmission_fragment:rU,transmission_pars_fragment:tU,uv_pars_fragment:eU,uv_pars_vertex:JG,uv_vertex:QG,worldpos_vertex:$G,background_vert:WG,background_frag:ZG,backgroundCube_vert:KG,backgroundCube_frag:HG,cube_vert:YG,cube_frag:XG,depth_vert:UG,depth_frag:GG,distance_vert:NG,distance_frag:qG,equirect_vert:EG,equirect_frag:FG,linedashed_vert:OG,linedashed_frag:RG,meshbasic_vert:LG,meshbasic_frag:MG,meshlambert_vert:DG,meshlambert_frag:VG,meshmatcap_vert:kG,meshmatcap_frag:BG,meshnormal_vert:zG,meshnormal_frag:CG,meshphong_vert:PG,meshphong_frag:IG,meshphysical_vert:wG,meshphysical_frag:_G,meshtoon_vert:AG,meshtoon_frag:TG,points_vert:SG,points_frag:jG,shadow_vert:yG,shadow_frag:vG,sprite_vert:hG,sprite_frag:fG},q0={common:{diffuse:{value:new S0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new T0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new S0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new S0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new S0(16777215)},opacity:{value:1},center:{value:new T0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},z9={basic:{uniforms:jJ([q0.common,q0.specularmap,q0.envmap,q0.aomap,q0.lightmap,q0.fog]),vertexShader:g0.meshbasic_vert,fragmentShader:g0.meshbasic_frag},lambert:{uniforms:jJ([q0.common,q0.specularmap,q0.envmap,q0.aomap,q0.lightmap,q0.emissivemap,q0.bumpmap,q0.normalmap,q0.displacementmap,q0.fog,q0.lights,{emissive:{value:new S0(0)},envMapIntensity:{value:1}}]),vertexShader:g0.meshlambert_vert,fragmentShader:g0.meshlambert_frag},phong:{uniforms:jJ([q0.common,q0.specularmap,q0.envmap,q0.aomap,q0.lightmap,q0.emissivemap,q0.bumpmap,q0.normalmap,q0.displacementmap,q0.fog,q0.lights,{emissive:{value:new S0(0)},specular:{value:new S0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:g0.meshphong_vert,fragmentShader:g0.meshphong_frag},standard:{uniforms:jJ([q0.common,q0.envmap,q0.aomap,q0.lightmap,q0.emissivemap,q0.bumpmap,q0.normalmap,q0.displacementmap,q0.roughnessmap,q0.metalnessmap,q0.fog,q0.lights,{emissive:{value:new S0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:g0.meshphysical_vert,fragmentShader:g0.meshphysical_frag},toon:{uniforms:jJ([q0.common,q0.aomap,q0.lightmap,q0.emissivemap,q0.bumpmap,q0.normalmap,q0.displacementmap,q0.gradientmap,q0.fog,q0.lights,{emissive:{value:new S0(0)}}]),vertexShader:g0.meshtoon_vert,fragmentShader:g0.meshtoon_frag},matcap:{uniforms:jJ([q0.common,q0.bumpmap,q0.normalmap,q0.displacementmap,q0.fog,{matcap:{value:null}}]),vertexShader:g0.meshmatcap_vert,fragmentShader:g0.meshmatcap_frag},points:{uniforms:jJ([q0.points,q0.fog]),vertexShader:g0.points_vert,fragmentShader:g0.points_frag},dashed:{uniforms:jJ([q0.common,q0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:g0.linedashed_vert,fragmentShader:g0.linedashed_frag},depth:{uniforms:jJ([q0.common,q0.displacementmap]),vertexShader:g0.depth_vert,fragmentShader:g0.depth_frag},normal:{uniforms:jJ([q0.common,q0.bumpmap,q0.normalmap,q0.displacementmap,{opacity:{value:1}}]),vertexShader:g0.meshnormal_vert,fragmentShader:g0.meshnormal_frag},sprite:{uniforms:jJ([q0.sprite,q0.fog]),vertexShader:g0.sprite_vert,fragmentShader:g0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:g0.background_vert,fragmentShader:g0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:g0.backgroundCube_vert,fragmentShader:g0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:g0.cube_vert,fragmentShader:g0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:g0.equirect_vert,fragmentShader:g0.equirect_frag},distance:{uniforms:jJ([q0.common,q0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:g0.distance_vert,fragmentShader:g0.distance_frag},shadow:{uniforms:jJ([q0.lights,q0.fog,{color:{value:new S0(0)},opacity:{value:1}}]),vertexShader:g0.shadow_vert,fragmentShader:g0.shadow_frag}};z9.physical={uniforms:jJ([z9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new T0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new y0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new S0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new T0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new S0(0)},specularColor:{value:new S0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new T0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:g0.meshphysical_vert,fragmentShader:g0.meshphysical_frag};var QQ={r:0,b:0,g:0},bG=new f0,rK=new y0;rK.set(-1,0,0,0,1,0,0,0,1);function xG(J,Q,$,W,Z,K){let H=new S0(0),Y=Z===!0?0:1,X,U,G=null,N=0,q=null;function F(z){let P=z.isScene===!0?z.background:null;if(P&&P.isTexture){let B=z.backgroundBlurriness>0;P=Q.get(P,B)}return P}function M(z){let P=!1,B=F(z);if(B===null)E(H,Y);else if(B&&B.isColor)E(B,1),P=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(I==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||P)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(z,P){let B=F(P);if(B&&B.isCubeTexture){if(U===void 0)U=new mJ(new J7(1,1,1),new x9({name:"BackgroundCubeMaterial",uniforms:z8(z9.backgroundCube.uniforms),vertexShader:z9.backgroundCube.vertexShader,fragmentShader:z9.backgroundCube.fragmentShader,side:pJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(I,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(bG.makeRotationFromEuler(P.backgroundRotation)).transpose(),B.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(rK);if(U.material.toneMapped=p0.getTransfer(B.colorSpace)!==$J,G!==B||N!==B.version||q!==J.toneMapping)U.material.needsUpdate=!0,G=B,N=B.version,q=J.toneMapping;U.layers.enableAll(),z.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(X===void 0)X=new mJ(new j7(2,2),new x9({name:"BackgroundMaterial",uniforms:z8(z9.background.uniforms),vertexShader:z9.background.vertexShader,fragmentShader:z9.background.fragmentShader,side:r9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=B,X.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,X.material.toneMapped=p0.getTransfer(B.colorSpace)!==$J,B.matrixAutoUpdate===!0)B.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(B.matrix),G!==B||N!==B.version||q!==J.toneMapping)X.material.needsUpdate=!0,G=B,N=B.version,q=J.toneMapping;X.layers.enableAll(),z.unshift(X,X.geometry,X.material,0,0,null)}}function E(z,P){z.getRGB(QQ,s$(J)),$.buffers.color.setClear(QQ.r,QQ.g,QQ.b,P,K)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(z,P=1){H.set(z),Y=P,E(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(z){Y=z,E(H,Y)},render:M,addToRenderList:V,dispose:O}}function gG(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=q(null),K=Z,H=!1;function Y(y,p,t,A,s){let o=!1,x=N(y,A,t,p);if(K!==x)K=x,U(K.object);if(o=F(y,A,t,s),o)M(y,A,t,s);if(s!==null)Q.update(s,J.ELEMENT_ARRAY_BUFFER);if(o||H){if(H=!1,B(y,p,t,A),s!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(s).buffer)}}function X(){return J.createVertexArray()}function U(y){return J.bindVertexArray(y)}function G(y){return J.deleteVertexArray(y)}function N(y,p,t,A){let s=A.wireframe===!0,o=W[p.id];if(o===void 0)o={},W[p.id]=o;let x=y.isInstancedMesh===!0?y.id:0,K0=o[x];if(K0===void 0)K0={},o[x]=K0;let u=K0[t.id];if(u===void 0)u={},K0[t.id]=u;let r=u[s];if(r===void 0)r=q(X()),u[s]=r;return r}function q(y){let p=[],t=[],A=[];for(let s=0;s<$;s++)p[s]=0,t[s]=0,A[s]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:t,attributeDivisors:A,object:y,attributes:{},index:null}}function F(y,p,t,A){let s=K.attributes,o=p.attributes,x=0,K0=t.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=s[u],k0=o[u];if(k0===void 0){if(u==="instanceMatrix"&&y.instanceMatrix)k0=y.instanceMatrix;if(u==="instanceColor"&&y.instanceColor)k0=y.instanceColor}if($0===void 0)return!0;if($0.attribute!==k0)return!0;if(k0&&$0.data!==k0.data)return!0;x++}if(K.attributesNum!==x)return!0;if(K.index!==A)return!0;return!1}function M(y,p,t,A){let s={},o=p.attributes,x=0,K0=t.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=o[u];if($0===void 0){if(u==="instanceMatrix"&&y.instanceMatrix)$0=y.instanceMatrix;if(u==="instanceColor"&&y.instanceColor)$0=y.instanceColor}let k0={};if(k0.attribute=$0,$0&&$0.data)k0.data=$0.data;s[u]=k0,x++}K.attributes=s,K.attributesNum=x,K.index=A}function V(){let y=K.newAttributes;for(let p=0,t=y.length;p<t;p++)y[p]=0}function E(y){O(y,0)}function O(y,p){let{newAttributes:t,enabledAttributes:A,attributeDivisors:s}=K;if(t[y]=1,A[y]===0)J.enableVertexAttribArray(y),A[y]=1;if(s[y]!==p)J.vertexAttribDivisor(y,p),s[y]=p}function z(){let{newAttributes:y,enabledAttributes:p}=K;for(let t=0,A=p.length;t<A;t++)if(p[t]!==y[t])J.disableVertexAttribArray(t),p[t]=0}function P(y,p,t,A,s,o,x){if(x===!0)J.vertexAttribIPointer(y,p,t,s,o);else J.vertexAttribPointer(y,p,t,A,s,o)}function B(y,p,t,A){V();let s=A.attributes,o=t.getAttributes(),x=p.defaultAttributeValues;for(let K0 in o){let u=o[K0];if(u.location>=0){let r=s[K0];if(r===void 0){if(K0==="instanceMatrix"&&y.instanceMatrix)r=y.instanceMatrix;if(K0==="instanceColor"&&y.instanceColor)r=y.instanceColor}if(r!==void 0){let{normalized:$0,itemSize:k0}=r,i=Q.get(r);if(i===void 0)continue;let{buffer:Q0,type:D0,bytesPerElement:w0}=i,_0=D0===J.INT||D0===J.UNSIGNED_INT||r.gpuType===oQ;if(r.isInterleavedBufferAttribute){let V0=r.data,r0=V0.isInterleavedBuffer===!0?V0.stride:V0.itemSize,d0=r.offset;if(V0.isInstancedInterleavedBuffer||V0.isInstancedBufferAttribute){for(let b0=0;b0<u.locationSize;b0++)O(u.location+b0,V0.meshPerAttribute);if(y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=V0.meshPerAttribute*V0.count}else for(let b0=0;b0<u.locationSize;b0++)E(u.location+b0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let b0=0;b0<u.locationSize;b0++)P(u.location+b0,k0/u.locationSize,D0,$0,r0*w0,(d0+k0/u.locationSize*b0)*w0,_0)}else{if(r.isInstancedBufferAttribute){for(let V0=0;V0<u.locationSize;V0++)O(u.location+V0,r.meshPerAttribute);if(y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=r.meshPerAttribute*r.count}else for(let V0=0;V0<u.locationSize;V0++)E(u.location+V0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let V0=0;V0<u.locationSize;V0++)P(u.location+V0,k0/u.locationSize,D0,$0,k0*w0,k0/u.locationSize*V0*w0,_0)}}else if(x!==void 0){let $0=x[K0];if($0!==void 0)switch($0.length){case 2:J.vertexAttrib2fv(u.location,$0);break;case 3:J.vertexAttrib3fv(u.location,$0);break;case 4:J.vertexAttrib4fv(u.location,$0);break;default:J.vertexAttrib1fv(u.location,$0)}}}}z()}function I(){j();for(let y in W){let p=W[y];for(let t in p){let A=p[t];for(let s in A){let o=A[s];for(let x in o)G(o[x].object),delete o[x];delete A[s]}}delete W[y]}}function w(y){if(W[y.id]===void 0)return;let p=W[y.id];for(let t in p){let A=p[t];for(let s in A){let o=A[s];for(let x in o)G(o[x].object),delete o[x];delete A[s]}}delete W[y.id]}function R(y){for(let p in W){let t=W[p];for(let A in t){let s=t[A];if(s[y.id]===void 0)continue;let o=s[y.id];for(let x in o)G(o[x].object),delete o[x];delete s[y.id]}}}function k(y){for(let p in W){let t=W[p],A=y.isInstancedMesh===!0?y.id:0,s=t[A];if(s===void 0)continue;for(let o in s){let x=s[o];for(let K0 in x)G(x[K0].object),delete x[K0];delete s[o]}if(delete t[A],Object.keys(t).length===0)delete W[p]}}function j(){if(l(),H=!0,K===Z)return;K=Z,U(K.object)}function l(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:j,resetDefaultState:l,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfObject:k,releaseStatesOfProgram:R,initAttributes:V,enableAttribute:E,disableUnusedAttributes:z}}function pG(J,Q,$){let W;function Z(X){W=X}function K(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function H(X,U,G){if(G===0)return;J.drawArraysInstanced(W,X,U,G),$.update(U,W,G)}function Y(X,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,G);let q=0;for(let F=0;F<G;F++)q+=U[F];$.update(q,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function lG(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let R=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(R){if(R!==f9&&W.convert(R)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(R){let k=R===M9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(R!==E9&&R!==h9&&!k&&W.convert(R)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(R){if(R==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";R="mediump"}if(R==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)C0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),q=$.logarithmicDepthBuffer===!0&&N===!1;if($.reversedDepthBuffer===!0&&N===!1)C0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if($.logarithmicDepthBuffer===!0&&N===!0)C0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),z=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:q,reversedDepthBuffer:N,maxTextures:F,maxVertexTextures:M,maxTextureSize:V,maxCubemapSize:E,maxAttributes:O,maxVertexUniforms:z,maxVaryings:P,maxFragmentUniforms:B,maxSamples:I,samples:w}}function mG(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new eJ,Y=new y0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(N,q){let F=N.length!==0||q||W!==0||Z;return Z=q,W=N.length,F},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(N,q){$=G(N,q,0)},this.setState=function(N,q,F){let{clippingPlanes:M,clipIntersection:V,clipShadows:E}=N,O=J.get(N);if(!Z||M===null||M.length===0||K&&!E)if(K)G(null);else U();else{let z=K?0:W,P=z*4,B=O.clippingState||null;X.value=B,B=G(M,q,P,F);for(let I=0;I!==P;++I)B[I]=$[I];O.clippingState=B,this.numIntersection=V?this.numPlanes:0,this.numPlanes+=z}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function G(N,q,F,M){let V=N!==null?N.length:0,E=null;if(V!==0){if(E=X.value,M!==!0||E===null){let O=F+V*4,z=q.matrixWorldInverse;if(Y.getNormalMatrix(z),E===null||E.length<O)E=new Float32Array(O);for(let P=0,B=F;P!==V;++P,B+=4)H.copy(N[P]).applyMatrix4(z,Y),H.normal.toArray(E,B),E[B+3]=H.constant}X.value=E,X.needsUpdate=!0}return Q.numPlanes=V,Q.numIntersection=0,E}}class ZQ extends $9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new m6(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new J7(5,5,5),Z=new x9({name:"CubemapFromEquirect",uniforms:z8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:pJ,blending:M8});Z.uniforms.tEquirect.value=Q;let K=new mJ(W,Z),H=Q.minFilter;if(Q.minFilter===q9)Q.minFilter=SJ;return new h7(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}var AK=256,dG=3,uG=20,tK=256,eK=16,cG=3,nG=new v,sG=new S0;class WQ{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new h7(1,10,null),this._boxMesh=new mJ(new J7(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=nG}=Z,Y=this._renderer;this._setSize(K);let X=this._allocateTarget(),U=this._getSourceTarget(!0);if(Q>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:G,autoClearColor:N,autoClearDepth:q,autoClearStencil:F}=Y,M=J.background;if(Y.autoClear=!0,Y.autoClearColor=!0,Y.autoClearDepth=!0,Y.autoClearStencil=!0,M===null)J.background=Y.getClearColor(sG);let V=new h7($,W,U);if(V.position.copy(H),V.update(Y,J),Y.autoClear=G,Y.autoClearColor=N,Y.autoClearDepth=q,Y.autoClearStencil=F,J.background=M,Q>0)U.texture.mipmapsAutoUpdate=!0,this._blur(X,Q);return this._applyPMREM(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=jK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=SK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(AK,l$(J))}_fromTexture(J,Q){if(J.mapping===k7||J.mapping===c8)this._setSize(J.image.length===0?AK:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let $=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM($),$}_allocateTarget(){let J=this._cubeSize,Q=TK(J,!1,!1),$=Math.log2(J)-dG;for(let W=0;W<=$;W++)Q.texture.mipmaps.push({width:J>>W,height:J>>W});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,$=this._sourceTarget;if($===null||$.width!==Q||J&&$.depthBuffer===!1){if($!==null)$.dispose();this._sourceTarget=TK(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,$){let W=this._boxMesh,Z=this._cubeCamera;W.material=$,Z.renderTarget=J,Z.activeMipmapLevel=Q;let K=J.width>>Q;J.viewport.set(0,0,K,K),Z.update(this._renderer,W),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===k7||J.mapping===c8){if(this._cubemapMaterial===null)this._cubemapMaterial=jK();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=SK();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=iG(),this._integrationMaterial=oG();let Q=this._cubeSize,$=J.texture.mipmaps.length-1,W=this._ggxMaterial.uniforms;W.envMap.value=this._sourceTarget.texture;let Z=this._integrationMaterial.uniforms;Z.envMap.value=this._sourceTarget.texture,Z.sourceLod.value=Math.log2(Q/eK);for(let K=0;K<=$;K++){let H=WQ.lodToRoughness(K,$);if(K>$-cG)Z.roughness.value=H,this._renderCube(J,K,this._integrationMaterial);else{let Y=H>0?Math.log2(Q)+0.5*Math.log2(6/(tK*Math.pow(H,4)))+0.5:0;W.roughness.value=H,W.lodBias.value=Y,this._renderCube(J,K,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=aG();let $=this._blurMaterial,W=$.uniforms,Z=this._sourceTarget;W.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,W.envMap.value=Z.texture,this._renderCube(J,0,$),W.envMap.value=J.texture,this._renderCube(Z,0,$)}}function TK(J,Q,$){return new ZQ(J,{minFilter:q9,generateMipmaps:Q,type:M9,colorSpace:iJ,depthBuffer:$})}function p7(J,Q,$){return new x9({name:J,uniforms:Q,vertexShader:g0.cube_vert,fragmentShader:$,side:pJ,blending:M8,depthTest:!1,depthWrite:!1})}function iG(){return p7("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tK}u

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
	`)}function oG(){return p7("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:eK}},`

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
	`)}function aG(){return p7("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${uG}
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
	`)}function SK(){return p7("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function jK(){return p7("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rG(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(q,F=!1){if(q===null||q===void 0)return null;if(F)return H(q);return K(q)}function K(q){if(q&&q.isTexture){let F=q.mapping;if(F===D6||F===V6)if(Q.has(q)){let M=Q.get(q).texture;return Y(M,q.mapping)}else{let M=q.image;if(M&&M.height>0){let V=new ZQ(M.height);return V.fromEquirectangularTexture(J,q),Q.set(q,V),q.addEventListener("dispose",U),Y(V.texture,q.mapping)}else return null}}return q}function H(q){if(q&&q.isTexture&&q.isPMREMTexture!==!0){let F=q.mapping,M=F===D6||F===V6,V=F===k7||F===c8;if(M||V){let E=$.get(q),O=E!==void 0?E.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==O){if(W===null)W=new WQ(J);return E=M?W.fromEquirectangular(q,E):W.fromCubemap(q,E),E.texture.pmremVersion=q.pmremVersion,$.set(q,E),E.texture}else if(E!==void 0)return E.texture;else{let z=q.image;if(M&&z&&z.height>0||V&&z&&X(z)){if(W===null)W=new WQ(J);return E=M?W.fromEquirectangular(q):W.fromCubemap(q),E.texture.pmremVersion=q.pmremVersion,$.set(q,E),q.addEventListener("dispose",G),E.texture}else return null}}}return q}function Y(q,F){if(F===D6)q.mapping=k7;else if(F===V6)q.mapping=c8;return q}function X(q){let F=0,M=6;for(let V=0;V<M;V++)if(q[V]!==void 0)F++;return F===M}function U(q){let F=q.target;F.removeEventListener("dispose",U);let M=Q.get(F);if(M!==void 0)Q.delete(F),M.dispose()}function G(q){let F=q.target;F.removeEventListener("dispose",G);let M=$.get(F);if(M!==void 0)$.delete(F),M.dispose()}function N(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:N}}function tG(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)O8("WebGLRenderer: "+W+" extension not supported.");return Z}}}function eG(J,Q,$,W){let Z={},K=new WeakMap,H=new FinalizationRegistry((M)=>delete Z[M]);function Y(M){X(M.target)}function X(M){if(M.index!==null)Q.remove(M.index);for(let E in M.attributes)Q.remove(M.attributes[E]);M.removeEventListener("dispose",Y),delete Z[M.id],H.unregister(M);let V=K.get(M);if(V)Q.remove(V),K.delete(M);if(W.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0)delete M._maxInstanceCount;$.memory.geometries--}function U(M,V){if(Z[V.id]!==void 0)return V;return V.addEventListener("dispose",Y),Z[V.id]=new WeakRef(V),H.register(V,V.id,V),$.memory.geometries++,V}function G(M){let V=M.attributes;for(let E in V)Q.update(V[E],J.ARRAY_BUFFER)}function N(M){let V=M.index,E=M.attributes.position,O=0;if(E===void 0)return;let z=V!==null?V.array.length:E.array.length/3-1,B=new(E.count>=65535?h6:v6)(Math.ceil(z/3)*6,1),I=B.array;if(V!==null){let R=V.array;O=V.version;for(let k=0,j=0;k<z;k+=3){let l=R[k+0],y=R[k+1],p=R[k+2];I[j++]=l,I[j++]=y,I[j++]=y,I[j++]=p,I[j++]=p,I[j++]=l}}else{O=E.version;for(let R=0,k=0;R<z;R+=3){let j=R+0,l=R+1,y=R+2;I[k++]=j,I[k++]=l,I[k++]=l,I[k++]=y,I[k++]=y,I[k++]=j}}B.version=O;let w=K.get(M);if(w)Q.remove(w);K.set(M,B)}function q(M){let V=K.get(M);if(V){let E=M.index;if(E!==null){if(V.version<E.version)N(M)}}else N(M);return K.get(M)}function F(){for(let M in Z){let V=Z[M].deref();if(V!==void 0)X(V)}}return{get:U,update:G,getWireframeAttribute:q,dispose:F}}function J5(J,Q,$){let W;function Z(N){W=N}let K,H;function Y(N){K=N.type,H=N.bytesPerElement}function X(N,q){J.drawElements(W,q,K,N*H),$.update(q,W,1)}function U(N,q,F){if(F===0)return;J.drawElementsInstanced(W,q,K,N*H,F),$.update(q,W,F)}function G(N,q,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,q,0,K,N,0,F);let V=0;for(let E=0;E<F;E++)V+=q[E];$.update(V,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function Q5(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:j0("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function $5(J,Q,$){let W=new WeakMap,Z=new JJ;function K(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,N=G!==void 0?G.length:0,q=W.get(Y);if(q===void 0||q.count!==N){let j=function(){R.dispose(),W.delete(Y),Y.removeEventListener("dispose",j)};if(q!==void 0)q.texture.dispose();let F=Y.morphAttributes.position!==void 0,M=Y.morphAttributes.normal!==void 0,V=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],z=Y.morphAttributes.color||[],P=0;if(F===!0)P=1;if(M===!0)P=2;if(V===!0)P=3;let B=Y.attributes.position.count*P,I=1;if(B>Q.maxTextureSize)I=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let w=new Float32Array(B*I*4*N),R=new S6(w,B,I,N);R.type=h9,R.needsUpdate=!0;let k=P*4;for(let l=0;l<N;l++){let y=E[l],p=O[l],t=z[l],A=B*I*4*l;for(let s=0;s<y.count;s++){let o=s*k;if(F===!0)Z.fromBufferAttribute(y,s),w[A+o+0]=Z.x,w[A+o+1]=Z.y,w[A+o+2]=Z.z,w[A+o+3]=0;if(M===!0)Z.fromBufferAttribute(p,s),w[A+o+4]=Z.x,w[A+o+5]=Z.y,w[A+o+6]=Z.z,w[A+o+7]=0;if(V===!0)Z.fromBufferAttribute(t,s),w[A+o+8]=Z.x,w[A+o+9]=Z.y,w[A+o+10]=Z.z,w[A+o+11]=t.itemSize===4?Z.w:1}}q={count:N,texture:R,size:new T0(B,I)},W.set(Y,q),Y.addEventListener("dispose",j)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let F=0;for(let V=0;V<U.length;V++)F+=U[V];let M=Y.morphTargetsRelative?1:1-F;X.getUniforms().setValue(J,"morphTargetBaseInfluence",M),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:K}}function W5(J,Q,$,W,Z){let K=new WeakMap;function H(U){let G=Z.render.frame,N=U.geometry,q=Q.get(U,N);if(K.get(q)!==G)Q.update(q),K.set(q,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,G)}}if(U.isSkinnedMesh){let F=U.skeleton;if(K.get(F)!==G)F.update(),K.set(F,G)}return q}function Y(){K=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),W.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:H,dispose:Y}}var Z5={[mQ]:"LINEAR_TONE_MAPPING",[dQ]:"REINHARD_TONE_MAPPING",[uQ]:"CINEON_TONE_MAPPING",[cQ]:"ACES_FILMIC_TONE_MAPPING",[sQ]:"AGX_TONE_MAPPING",[iQ]:"NEUTRAL_TONE_MAPPING",[nQ]:"CUSTOM_TONE_MAPPING"};function K5(J,Q,$,W,Z,K){let H=new $9(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=null,G=new lJ;G.setAttribute("position",new gJ([-1,3,0,-1,-1,0,3,-1,0],3)),G.setAttribute("uv",new gJ([0,2,0,0,2,0],2));let N=new i$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),q=new mJ(G,N),F=new W7(-1,1,1,-1,0,1),M=null,V=null,E=!1,O,z=null,P=[],B=!1;this.setSize=function(I,w){if(H.setSize(I,w),Y!==null)Y.setSize(I,w);if(X!==null)X.setSize(I,w);for(let R=0;R<P.length;R++){let k=P[R];if(k.setSize)k.setSize(I,w)}},this.setEffects=function(I){P=I,B=P.length>0&&P[0].isRenderPass===!0;let{width:w,height:R}=H;if(P.length>0&&Y===null)Y=new $9(w,R,{type:M9,depthBuffer:!1,stencilBuffer:!1}),X=new $9(w,R,{type:M9,depthBuffer:!1,stencilBuffer:!1});let k=Z===!0&&P.some((j)=>j.needsDepthTexture===!0);if(k!==(H.depthTexture!==null)){if(k===!0&&U===null){if(U=new Q8(w,R),K===!0)U.format=e9,U.type=V8}H.dispose(),H.depthTexture=k?U:null,H.resolveDepthBuffer=k,H.storeMultisampledDepthBuffer=k}for(let j=0;j<P.length;j++){let l=P[j];if(l.setSize)l.setSize(w,R);if(k&&l.needsDepthTexture===!0&&l.setDepthTexture)l.setDepthTexture(U)}},this.begin=function(I,w){if(E)return!1;if(I.toneMapping===L9&&P.length===0)return!1;if(z=w,w!==null){let{width:R,height:k}=w;if(H.width!==R||H.height!==k)this.setSize(R,k)}if(B===!1)I.setRenderTarget(H);return O=I.toneMapping,I.toneMapping=L9,!0},this.hasRenderPass=function(){return B},this.end=function(I,w){I.toneMapping=O,E=!0;let R=H,k=Y;for(let j=0;j<P.length;j++){let l=P[j];if(l.enabled===!1)continue;if(l.render(I,k,R,w),l.needsSwap!==!1)R=k,k=k===Y?X:Y}if(M!==I.outputColorSpace||V!==I.toneMapping){if(M=I.outputColorSpace,V=I.toneMapping,N.defines={},p0.getTransfer(M)===$J)N.defines.SRGB_TRANSFER="";let j=Z5[V];if(j)N.defines[j]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=R.texture,I.setRenderTarget(z),I.render(q,F),z=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();G.dispose(),N.dispose()}}var JH=new FJ,QH=new Q8(1,1),$H=new d6(1),WH=new S6,ZH=new n$,KH=new m6,yK=[],vK=[],hK=new Float32Array(16),fK=new Float32Array(9),bK=new Float32Array(4);function Z7(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=yK[Z];if(K===void 0)K=new Float32Array(Z),yK[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function OJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function RJ(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function KQ(J,Q){let $=vK[Q];if($===void 0)$=new Int32Array(Q),vK[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function H5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function Y5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(OJ($,Q))return;J.uniform2fv(this.addr,Q),RJ($,Q)}}function X5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(OJ($,Q))return;J.uniform3fv(this.addr,Q),RJ($,Q)}}function U5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(OJ($,Q))return;J.uniform4fv(this.addr,Q),RJ($,Q)}}function G5(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(OJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),RJ($,Q)}else{if(OJ($,W))return;bK.set(W),J.uniformMatrix2fv(this.addr,!1,bK),RJ($,W)}}function N5(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(OJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),RJ($,Q)}else{if(OJ($,W))return;fK.set(W),J.uniformMatrix3fv(this.addr,!1,fK),RJ($,W)}}function q5(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(OJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),RJ($,Q)}else{if(OJ($,W))return;hK.set(W),J.uniformMatrix4fv(this.addr,!1,hK),RJ($,W)}}function E5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function F5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(OJ($,Q))return;J.uniform2iv(this.addr,Q),RJ($,Q)}}function O5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(OJ($,Q))return;J.uniform3iv(this.addr,Q),RJ($,Q)}}function R5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(OJ($,Q))return;J.uniform4iv(this.addr,Q),RJ($,Q)}}function L5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function M5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(OJ($,Q))return;J.uniform2uiv(this.addr,Q),RJ($,Q)}}function D5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(OJ($,Q))return;J.uniform3uiv(this.addr,Q),RJ($,Q)}}function V5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(OJ($,Q))return;J.uniform4uiv(this.addr,Q),RJ($,Q)}}function HQ(J){if(J.version===0)J.compareFunction=b$,J.needsUpdate=!0;return J}function k5(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)K=HQ(QH);else K=JH;$.setTexture2D(Q||K,Z)}function B5(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||ZH,Z)}function z5(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_CUBE_SHADOW)K=HQ($H);else K=KH;$.setTextureCube(Q||K,Z)}function C5(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||WH,Z)}function P5(J){switch(J){case 5126:return H5;case 35664:return Y5;case 35665:return X5;case 35666:return U5;case 35674:return G5;case 35675:return N5;case 35676:return q5;case 5124:case 35670:return E5;case 35667:case 35671:return F5;case 35668:case 35672:return O5;case 35669:case 35673:return R5;case 5125:return L5;case 36294:return M5;case 36295:return D5;case 36296:return V5;case 35678:case 36198:case 36298:case 36306:case 35682:return k5;case 35679:case 36299:case 36307:return B5;case 35680:case 36300:case 36308:case 36293:return z5;case 36289:case 36303:case 36311:case 36292:return C5}}function I5(J,Q){J.uniform1fv(this.addr,Q)}function w5(J,Q){let $=Z7(Q,this.size,2);J.uniform2fv(this.addr,$)}function _5(J,Q){let $=Z7(Q,this.size,3);J.uniform3fv(this.addr,$)}function A5(J,Q){let $=Z7(Q,this.size,4);J.uniform4fv(this.addr,$)}function T5(J,Q){let $=Z7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function S5(J,Q){let $=Z7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function j5(J,Q){let $=Z7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function y5(J,Q){J.uniform1iv(this.addr,Q)}function v5(J,Q){J.uniform2iv(this.addr,Q)}function h5(J,Q){J.uniform3iv(this.addr,Q)}function f5(J,Q){J.uniform4iv(this.addr,Q)}function b5(J,Q){J.uniform1uiv(this.addr,Q)}function x5(J,Q){J.uniform2uiv(this.addr,Q)}function g5(J,Q){J.uniform3uiv(this.addr,Q)}function p5(J,Q){J.uniform4uiv(this.addr,Q)}function l5(J,Q,$){let W=this.cache,Z=Q.length,K=KQ($,Z);if(!OJ(W,K))J.uniform1iv(this.addr,K),RJ(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=HQ(QH);else H=JH;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function m5(J,Q,$){let W=this.cache,Z=Q.length,K=KQ($,Z);if(!OJ(W,K))J.uniform1iv(this.addr,K),RJ(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||ZH,K[H])}function d5(J,Q,$){let W=this.cache,Z=Q.length,K=KQ($,Z);if(!OJ(W,K))J.uniform1iv(this.addr,K),RJ(W,K);let H;if(this.type===J.SAMPLER_CUBE_SHADOW)H=HQ($H);else H=KH;for(let Y=0;Y!==Z;++Y)$.setTextureCube(Q[Y]||H,K[Y])}function u5(J,Q,$){let W=this.cache,Z=Q.length,K=KQ($,Z);if(!OJ(W,K))J.uniform1iv(this.addr,K),RJ(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||WH,K[H])}function c5(J){switch(J){case 5126:return I5;case 35664:return w5;case 35665:return _5;case 35666:return A5;case 35674:return T5;case 35675:return S5;case 35676:return j5;case 5124:case 35670:return y5;case 35667:case 35671:return v5;case 35668:case 35672:return h5;case 35669:case 35673:return f5;case 5125:return b5;case 36294:return x5;case 36295:return g5;case 36296:return p5;case 35678:case 36198:case 36298:case 36306:case 35682:return l5;case 35679:case 36299:case 36307:return m5;case 35680:case 36300:case 36308:case 36293:return d5;case 36289:case 36303:case 36311:case 36292:return u5}}class HH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=P5(Q.type)}}class YH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=c5(Q.type)}}class XH{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var XW=/(\w+)(\])?(\[|\.)?/g;function xK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function n5(J,Q,$){let W=J.name,Z=W.length;XW.lastIndex=0;while(!0){let K=XW.exec(W),H=XW.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===Z){xK($,U===void 0?new HH(Y,J,Q):new YH(Y,J,Q));break}else{let N=$.map[Y];if(N===void 0)N=new XH(Y),xK($,N);$=N}}}class g7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);n5(H,Y,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function gK(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var s5=37297,i5=0;function o5(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let Y=H+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return W.join(`
`)}var pK=new y0;function a5(J){p0._getMatrix(pK,p0.workingColorSpace,J);let Q=`mat3( ${pK.elements.map(($)=>$.toFixed(4))} )`;switch(p0.getTransfer(J)){case v$:return[Q,"LinearTransferOETF"];case $J:return[Q,"sRGBTransferOETF"];default:return C0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function lK(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+o5(J.getShaderSource(Q),Y)}else return K}function r5(J,Q){let $=a5(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( ${$[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var t5={[mQ]:"Linear",[dQ]:"Reinhard",[uQ]:"Cineon",[cQ]:"ACESFilmic",[sQ]:"AgX",[iQ]:"Neutral",[nQ]:"Custom"};function e5(J,Q){let $=t5[Q];if($===void 0)return C0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var $Q=new v;function JN(){p0.getLuminanceCoefficients($Q);let J=$Q.x.toFixed(4),Q=$Q.y.toFixed(4),$=$Q.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function QN(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(x7).join(`
`)}function $N(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function WN(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function x7(J){return J!==""}function mK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function dK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var ZN=/^[ \t]*#include +<([\w\d./]+)>/gm;function GW(J){return J.replace(ZN,KN)}function KN(J,Q){let $=g0[Q];if($===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return GW($)}var HN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uK(J){return J.replace(HN,YN)}function YN(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function cK(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var XN={[D7]:"SHADOWMAP_TYPE_PCF",[d8]:"SHADOWMAP_TYPE_VSM"};function UN(J){return XN[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var GN={[c8]:"ENVMAP_MODE_REFRACTION"};function NN(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return GN[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qN={[eZ]:"ENVMAP_BLENDING_MULTIPLY",[JK]:"ENVMAP_BLENDING_MIX",[QK]:"ENVMAP_BLENDING_ADD"};function EN(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return qN[J.combine]||"ENVMAP_BLENDING_NONE"}function FN(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=UN($),U=$.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",G=NN($),N=EN($),q=QN($),F=$N(K),M=Z.createProgram(),V,E,O=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(V=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F].filter(x7).join(`
`),V.length>0)V+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F].filter(x7).join(`
`),E.length>0)E+=`
`}else V=[cK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+$.diffuseRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(x7).join(`
`),E=[cK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+N:"",$.envMapPMREM?"#define ENVMAP_MAX_LOD "+$.envMapMaxLod+".0":"",$.envMapPMREM?"#define ENVMAP_SIZE "+$.envMapSize+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==L9?"#define TONE_MAPPING":"",$.toneMapping!==L9?g0.tonemapping_pars_fragment:"",$.toneMapping!==L9?e5("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",g0.colorspace_pars_fragment,r5("linearToOutputTexel",$.outputColorSpace),JN(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(x7).join(`
`);if(H=GW(H),H=mK(H,$),H=dK(H,$),Y=GW(Y),Y=mK(Y,$),Y=dK(Y,$),H=uK(H),Y=uK(Y),$.isRawShaderMaterial!==!0)O=`#version 300 es
`,V=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+V,E=["#define varying in",$.glslVersion===x$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===x$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let z=O+V+H,P=O+E+Y,B=gK(Z,Z.VERTEX_SHADER,z),I=gK(Z,Z.FRAGMENT_SHADER,P);if(Z.attachShader(M,B),Z.attachShader(M,I),$.index0AttributeName!==void 0)Z.bindAttribLocation(M,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(M,0,"position");Z.linkProgram(M);function w(l){if(J.debug.checkShaderErrors){let y=Z.getProgramInfoLog(M)||"",p=Z.getShaderInfoLog(B)||"",t=Z.getShaderInfoLog(I)||"",A=y.trim(),s=p.trim(),o=t.trim(),x=!0,K0=!0;if(Z.getProgramParameter(M,Z.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,M,B,I);else{let u=lK(Z,B,"vertex"),r=lK(Z,I,"fragment");j0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(M,Z.VALIDATE_STATUS)+`

Material Name: `+l.name+`
Material Type: `+l.type+`

Program Info Log: `+A+`
`+u+`
`+r)}else if(A!=="")C0("WebGLProgram: Program Info Log:",A);else if(s===""||o==="")K0=!1;if(K0)l.diagnostics={runnable:x,programLog:A,vertexShader:{log:s,prefix:V},fragmentShader:{log:o,prefix:E}}}Z.deleteShader(B),Z.deleteShader(I),R=new g7(Z,M),k=WN(Z,M)}let R;this.getUniforms=function(){if(R===void 0)w(this);return R};let k;this.getAttributes=function(){if(k===void 0)w(this);return k};let j=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(j===!1)j=Z.getProgramParameter(M,s5);return j},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(M),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=i5++,this.cacheKey=Q,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=I,this}var ON=0;class UH{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new GH(J),Q.set(J,$);return $}}class GH{constructor(J){this.id=ON++,this.code=J,this.usedTimes=0}}function RN(J){return J===k8||J===w6||J===_6}function LN(J,Q,$,W,Z,K){let H=new j6,Y=new UH,X=new Set,U=[],G=new Map,N=W.logarithmicDepthBuffer,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(R){if(X.add(R),R===0)return"uv";return`uv${R}`}function M(R,k,j,l,y,p){let t=l.fog,A=y.geometry,s=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?l.environment:null,o=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,x=Q.get(R.envMap||s,o),K0=q[R.type],u=W.precision;if(R.precision!==null){if(u=W.getMaxPrecision(R.precision),u!==R.precision)C0("WebGLProgram.getParameters:",R.precision,"not supported, using",u,"instead.")}let r=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,$0=r!==void 0?r.length:0,k0=0;if(A.morphAttributes.position!==void 0)k0=1;if(A.morphAttributes.normal!==void 0)k0=2;if(A.morphAttributes.color!==void 0)k0=3;let i,Q0,D0,w0;if(K0){let F0=z9[K0];i=F0.vertexShader,Q0=F0.fragmentShader}else{i=R.vertexShader,Q0=R.fragmentShader;let F0=Y.getVertexShaderStage(R),e0=Y.getFragmentShaderStage(R);Y.update(R,F0,e0),D0=F0.id,w0=e0.id}let _0=J.getRenderTarget(),V0=J.state.buffers.depth.getReversed(),r0=y.isInstancedMesh===!0,d0=y.isBatchedMesh===!0,b0=!!R.map,HJ=!!R.matcap,n0=!!x,UJ=n0&&x.isPMREMTexture===!0,GJ=!!R.aoMap,fJ=!!R.lightMap,cJ=!!R.bumpMap&&R.wireframe===!1,NJ=!!R.normalMap,CJ=!!R.displacementMap,bJ=!!R.emissiveMap,xJ=!!R.metalnessMap,K9=!!R.roughnessMap,S=R.anisotropy>0,H9=R.clearcoat>0,t0=R.diffuseRoughness>0,MJ=R.dispersion>0,N0=R.retroreflectivity>0,WJ=R.iridescence>0,A0=R.sheen>0,v0=R.transmission>0,PJ=S&&!!R.anisotropyMap,C=H9&&!!R.clearcoatMap,L=H9&&!!R.clearcoatNormalMap,h=H9&&!!R.clearcoatRoughnessMap,e=t0&&!!R.diffuseRoughnessMap,a=WJ&&!!R.iridescenceMap,Z0=WJ&&!!R.iridescenceThicknessMap,X0=A0&&!!R.sheenColorMap,m=A0&&!!R.sheenRoughnessMap,n=!!R.specularMap,H0=!!R.specularColorMap,_=!!R.specularIntensityMap,c=v0&&!!R.transmissionMap,d=v0&&!!R.thicknessMap,J0=!!R.gradientMap,W0=!!R.alphaMap,G0=R.alphaTest>0,P0=!!R.alphaHash,z0=!!R.extensions,E0=L9;if(R.toneMapped){if(_0===null||_0.isXRRenderTarget===!0)E0=J.toneMapping}let I0=UJ?x.isCompressedCubeTexture?x.image[0].mipmaps:x.mipmaps:null,x0={shaderID:K0,shaderType:R.type,shaderName:R.name,vertexShader:i,fragmentShader:Q0,defines:R.defines,customVertexShaderID:D0,customFragmentShaderID:w0,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:u,batching:d0,batchingColor:d0&&y._colorsTexture!==null,instancing:r0,instancingColor:r0&&y.instanceColor!==null,instancingMorph:r0&&y.morphTexture!==null,outputColorSpace:_0===null?J.outputColorSpace:_0.isXRRenderTarget===!0?_0.texture.colorSpace:p0.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:b0,matcap:HJ,envMap:n0,envMapMode:n0&&x.mapping,envMapPMREM:UJ,envMapMaxLod:UJ?I0.length-1:null,envMapSize:UJ?I0[0].width:null,aoMap:GJ,lightMap:fJ,bumpMap:cJ,normalMap:NJ,displacementMap:CJ,emissiveMap:bJ,normalMapObjectSpace:NJ&&R.normalMapType===UK,normalMapTangentSpace:NJ&&R.normalMapType===y$,packedNormalMap:NJ&&R.normalMapType===y$&&RN(R.normalMap.format),metalnessMap:xJ,roughnessMap:K9,anisotropy:S,anisotropyMap:PJ,clearcoat:H9,clearcoatMap:C,clearcoatNormalMap:L,clearcoatRoughnessMap:h,diffuseRoughness:t0,diffuseRoughnessMap:e,dispersion:MJ,retroreflection:N0,iridescence:WJ,iridescenceMap:a,iridescenceThicknessMap:Z0,sheen:A0,sheenColorMap:X0,sheenRoughnessMap:m,specularMap:n,specularColorMap:H0,specularIntensityMap:_,transmission:v0,transmissionMap:c,thicknessMap:d,gradientMap:J0,opaque:R.transparent===!1&&R.blending===V7&&R.alphaToCoverage===!1,alphaMap:W0,alphaTest:G0,alphaHash:P0,combine:R.combine,mapUv:b0&&F(R.map.channel),aoMapUv:GJ&&F(R.aoMap.channel),lightMapUv:fJ&&F(R.lightMap.channel),bumpMapUv:cJ&&F(R.bumpMap.channel),normalMapUv:NJ&&F(R.normalMap.channel),displacementMapUv:CJ&&F(R.displacementMap.channel),emissiveMapUv:bJ&&F(R.emissiveMap.channel),metalnessMapUv:xJ&&F(R.metalnessMap.channel),roughnessMapUv:K9&&F(R.roughnessMap.channel),anisotropyMapUv:PJ&&F(R.anisotropyMap.channel),clearcoatMapUv:C&&F(R.clearcoatMap.channel),clearcoatNormalMapUv:L&&F(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:h&&F(R.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:e&&F(R.diffuseRoughnessMap.channel),iridescenceMapUv:a&&F(R.iridescenceMap.channel),iridescenceThicknessMapUv:Z0&&F(R.iridescenceThicknessMap.channel),sheenColorMapUv:X0&&F(R.sheenColorMap.channel),sheenRoughnessMapUv:m&&F(R.sheenRoughnessMap.channel),specularMapUv:n&&F(R.specularMap.channel),specularColorMapUv:H0&&F(R.specularColorMap.channel),specularIntensityMapUv:_&&F(R.specularIntensityMap.channel),transmissionMapUv:c&&F(R.transmissionMap.channel),thicknessMapUv:d&&F(R.thicknessMap.channel),alphaMapUv:W0&&F(R.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(NJ||S),vertexNormals:!!A.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!A.attributes.uv&&(b0||W0),fog:!!t,useFog:R.fog===!0,fogExp2:!!t&&t.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||A.attributes.normal===void 0&&NJ===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:V0,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:$0,morphTextureStride:k0,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:p.filter((F0)=>F0.texture!==null).length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:R.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:E0,decodeVideoTexture:b0&&R.map.isVideoTexture===!0&&p0.getTransfer(R.map.colorSpace)===$J,decodeVideoTextureEmissive:bJ&&R.emissiveMap.isVideoTexture===!0&&p0.getTransfer(R.emissiveMap.colorSpace)===$J,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Q9,flipSided:R.side===pJ,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:z0&&R.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z0&&R.extensions.multiDraw===!0||d0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return x0.vertexUv1s=X.has(1),x0.vertexUv2s=X.has(2),x0.vertexUv3s=X.has(3),X.clear(),x0}function V(R){let k=[];if(R.shaderID)k.push(R.shaderID);else k.push(R.customVertexShaderID),k.push(R.customFragmentShaderID);if(R.defines!==void 0)for(let j in R.defines)k.push(j),k.push(R.defines[j]);if(R.isRawShaderMaterial===!1)E(k,R),O(k,R),k.push(J.outputColorSpace);return k.push(R.customProgramCacheKey),k.join()}function E(R,k){R.push(k.precision),R.push(k.outputColorSpace),R.push(k.envMapMode),R.push(k.envMapPMREM),R.push(k.envMapMaxLod),R.push(k.envMapSize),R.push(k.mapUv),R.push(k.alphaMapUv),R.push(k.lightMapUv),R.push(k.aoMapUv),R.push(k.bumpMapUv),R.push(k.normalMapUv),R.push(k.displacementMapUv),R.push(k.emissiveMapUv),R.push(k.metalnessMapUv),R.push(k.roughnessMapUv),R.push(k.anisotropyMapUv),R.push(k.clearcoatMapUv),R.push(k.clearcoatNormalMapUv),R.push(k.clearcoatRoughnessMapUv),R.push(k.diffuseRoughnessMapUv),R.push(k.iridescenceMapUv),R.push(k.iridescenceThicknessMapUv),R.push(k.sheenColorMapUv),R.push(k.sheenRoughnessMapUv),R.push(k.specularMapUv),R.push(k.specularColorMapUv),R.push(k.specularIntensityMapUv),R.push(k.transmissionMapUv),R.push(k.thicknessMapUv),R.push(k.combine),R.push(k.fogExp2),R.push(k.sizeAttenuation),R.push(k.morphTargetsCount),R.push(k.numSunLights),R.push(k.numDirLights),R.push(k.numPointLights),R.push(k.numSpotLights),R.push(k.numSpotLightMaps),R.push(k.numHemiLights),R.push(k.numRectAreaLights),R.push(k.numSunLightShadows),R.push(k.numDirLightShadows),R.push(k.numPointLightShadows),R.push(k.numSpotLightShadows),R.push(k.numSpotLightShadowsWithMaps),R.push(k.numLightProbes),R.push(k.numLightProbeGrids),R.push(k.shadowMapType),R.push(k.toneMapping),R.push(k.numClippingPlanes),R.push(k.numClipIntersection),R.push(k.depthPacking)}function O(R,k){if(H.disableAll(),k.instancing)H.enable(0);if(k.instancingColor)H.enable(1);if(k.instancingMorph)H.enable(2);if(k.matcap)H.enable(3);if(k.envMap)H.enable(4);if(k.normalMapObjectSpace)H.enable(5);if(k.normalMapTangentSpace)H.enable(6);if(k.clearcoat)H.enable(7);if(k.iridescence)H.enable(8);if(k.alphaTest)H.enable(9);if(k.vertexColors)H.enable(10);if(k.vertexAlphas)H.enable(11);if(k.vertexUv1s)H.enable(12);if(k.vertexUv2s)H.enable(13);if(k.vertexUv3s)H.enable(14);if(k.vertexTangents)H.enable(15);if(k.anisotropy)H.enable(16);if(k.alphaHash)H.enable(17);if(k.batching)H.enable(18);if(k.dispersion)H.enable(19);if(k.retroreflection)H.enable(24);if(k.diffuseRoughness)H.enable(25);if(k.batchingColor)H.enable(20);if(k.gradientMap)H.enable(21);if(k.packedNormalMap)H.enable(22);if(k.vertexNormals)H.enable(23);if(R.push(H.mask),H.disableAll(),k.fog)H.enable(0);if(k.useFog)H.enable(1);if(k.flatShading)H.enable(2);if(k.logarithmicDepthBuffer)H.enable(3);if(k.reversedDepthBuffer)H.enable(4);if(k.skinning)H.enable(5);if(k.morphTargets)H.enable(6);if(k.morphNormals)H.enable(7);if(k.morphColors)H.enable(8);if(k.premultipliedAlpha)H.enable(9);if(k.shadowMapEnabled)H.enable(10);if(k.doubleSided)H.enable(11);if(k.flipSided)H.enable(12);if(k.useDepthPacking)H.enable(13);if(k.dithering)H.enable(14);if(k.transmission)H.enable(15);if(k.sheen)H.enable(16);if(k.opaque)H.enable(17);if(k.pointsUvs)H.enable(18);if(k.decodeVideoTexture)H.enable(19);if(k.decodeVideoTextureEmissive)H.enable(20);if(k.alphaToCoverage)H.enable(21);if(k.numLightProbeGrids>0)H.enable(22);if(k.hasPositionAttribute)H.enable(23);R.push(H.mask)}function z(R){let k=q[R.type],j;if(k){let l=z9[k];j=VK.clone(l.uniforms)}else j=R.uniforms;return j}function P(R,k){let j=G.get(k);if(j!==void 0)++j.usedTimes;else j=new FN(J,k,R,Z),U.push(j),G.set(k,j);return j}function B(R){if(--R.usedTimes===0){let k=U.indexOf(R);U[k]=U[U.length-1],U.pop(),G.delete(R.cacheKey),R.destroy()}}function I(R){Y.remove(R)}function w(){Y.dispose()}return{getParameters:M,getProgramCacheKey:V,getUniforms:z,acquireProgram:P,releaseProgram:B,releaseShaderCache:I,programs:U,dispose:w}}function MN(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function W(H){J.delete(H)}function Z(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function DN(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function nK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function sK(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(q){let F=0;if(q.isInstancedMesh)F+=2;if(q.isSkinnedMesh)F+=1;return F}function Y(q,F,M,V,E,O){let z=J[Q];if(z===void 0)z={id:q.id,object:q,geometry:F,material:M,materialVariant:H(q),groupOrder:V,renderOrder:q.renderOrder,z:E,group:O},J[Q]=z;else z.id=q.id,z.object=q,z.geometry=F,z.material=M,z.materialVariant=H(q),z.groupOrder=V,z.renderOrder=q.renderOrder,z.z=E,z.group=O;return Q++,z}function X(q,F,M,V,E,O,z){if(z.reversedDepth===!0)E=-E;let P=Y(q,F,M,V,E,O);if(M.transmission>0)W.push(P);else if(M.transparent===!0)Z.push(P);else $.push(P)}function U(q,F,M,V,E,O){let z=Y(q,F,M,V,E,O);if(M.transmission>0)W.unshift(z);else if(M.transparent===!0)Z.unshift(z);else $.unshift(z)}function G(q,F){if($.length>1)$.sort(q||DN);if(W.length>1)W.sort(F||nK);if(Z.length>1)Z.sort(F||nK)}function N(){for(let q=Q,F=J.length;q<F;q++){let M=J[q];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:X,unshift:U,finish:N,sort:G}}function VN(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new sK,J.set(W,[H]);else if(Z>=K.length)H=new sK,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function kN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new v,color:new S0};break;case"SpotLight":$={position:new v,direction:new v,color:new S0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new v,color:new S0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new v,skyColor:new S0,groundColor:new S0};break;case"RectAreaLight":$={color:new S0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=$,$}}}function BN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new T0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new T0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new T0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var zN=0;function CN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function PN(J){let Q=new kN,$=BN(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new v);let Z=new v,K=new f0,H=new f0;function Y(U){let G=0,N=0,q=0;for(let p=0;p<9;p++)W.probe[p].set(0,0,0);let F=0,M=0,V=0,E=0,O=0,z=0,P=0,B=0,I=0,w=0,R=0,k=0,j=0,l=0;U.sort(CN);for(let p=0,t=U.length;p<t;p++){let A=U[p],s=A.color,o=A.intensity,x=A.distance,K0=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===k8)K0=A.shadow.map.texture;else K0=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)G+=s.r*o,N+=s.g*o,q+=s.b*o;else if(A.isLightProbe){for(let u=0;u<9;u++)W.probe[u].addScaledVector(A.sh.coefficients[u],o);l++}else if(A.isSunLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),W.sunShadow[M]=$0,W.sunShadowMap[M]=K0;let k0=r.getViewportCount();for(let i=0;i<k0;i++)W.sunShadowMatrix[V+i]=r.getMatrix(i),W.sunShadowCascade[V+i]=r._cascadeData[i];V+=k0,M++}W.sun[F]=u,F++}else if(A.isDirectionalLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,W.directionalShadow[E]=$0,W.directionalShadowMap[E]=K0,W.directionalShadowMatrix[E]=A.shadow.matrix,I++}W.directional[E]=u,E++}else if(A.isSpotLight){let u=Q.get(A);u.position.setFromMatrixPosition(A.matrixWorld),u.color.copy(s).multiplyScalar(o),u.distance=x,u.coneCos=Math.cos(A.angle),u.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),u.decay=A.decay,W.spot[z]=u;let r=A.shadow;if(A.map){if(W.spotLightMap[k]=A.map,k++,r.updateMatrices(A),A.castShadow)j++}if(W.spotLightMatrix[z]=r.matrix,A.castShadow){let $0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,W.spotShadow[z]=$0,W.spotShadowMap[z]=K0,R++}z++}else if(A.isRectAreaLight){let u=Q.get(A);u.color.copy(s).multiplyScalar(o),u.halfWidth.set(A.width*0.5,0,0),u.halfHeight.set(0,A.height*0.5,0),W.rectArea[P]=u,P++}else if(A.isPointLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),u.distance=A.distance,u.decay=A.decay,A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,$0.shadowCameraNear=r.camera.near,$0.shadowCameraFar=r.camera.far,W.pointShadow[O]=$0,W.pointShadowMap[O]=K0,W.pointShadowMatrix[O]=A.shadow.matrix,w++}W.point[O]=u,O++}else if(A.isHemisphereLight){let u=Q.get(A);u.skyColor.copy(A.color).multiplyScalar(o),u.groundColor.copy(A.groundColor).multiplyScalar(o),W.hemi[B]=u,B++}}if(P>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=q0.LTC_FLOAT_1,W.rectAreaLTC2=q0.LTC_FLOAT_2;else W.rectAreaLTC1=q0.LTC_HALF_1,W.rectAreaLTC2=q0.LTC_HALF_2;W.ambient[0]=G,W.ambient[1]=N,W.ambient[2]=q;let y=W.hash;if(y.sunLength!==F||y.directionalLength!==E||y.pointLength!==O||y.spotLength!==z||y.rectAreaLength!==P||y.hemiLength!==B||y.numSunShadows!==M||y.numDirectionalShadows!==I||y.numPointShadows!==w||y.numSpotShadows!==R||y.numSpotMaps!==k||y.numLightProbes!==l)W.sun.length=F,W.directional.length=E,W.spot.length=z,W.rectArea.length=P,W.point.length=O,W.hemi.length=B,W.sunShadow.length=M,W.sunShadowMap.length=M,W.sunShadowMatrix.length=V,W.sunShadowCascade.length=V,W.directionalShadow.length=I,W.directionalShadowMap.length=I,W.directionalShadowMatrix.length=I,W.pointShadow.length=w,W.pointShadowMap.length=w,W.pointShadowMatrix.length=w,W.spotShadow.length=R,W.spotShadowMap.length=R,W.spotLightMatrix.length=R+k-j,W.spotLightMap.length=k,W.numSpotLightShadowsWithMaps=j,W.numLightProbes=l,y.sunLength=F,y.directionalLength=E,y.pointLength=O,y.spotLength=z,y.rectAreaLength=P,y.hemiLength=B,y.numSunShadows=M,y.numDirectionalShadows=I,y.numPointShadows=w,y.numSpotShadows=R,y.numSpotMaps=k,y.numLightProbes=l,W.version=zN++}function X(U,G){let N=0,q=0,F=0,M=0,V=0,E=0,O=G.matrixWorldInverse;for(let z=0,P=U.length;z<P;z++){let B=U[z];if(B.isSunLight){let I=W.sun[N];I.direction.setFromMatrixPosition(B.matrixWorld),I.direction.transformDirection(O),N++}else if(B.isDirectionalLight){let I=W.directional[q];I.direction.setFromMatrixPosition(B.matrixWorld),Z.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(Z),I.direction.transformDirection(O),q++}else if(B.isSpotLight){let I=W.spot[M];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(O),I.direction.setFromMatrixPosition(B.matrixWorld),Z.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(Z),I.direction.transformDirection(O),M++}else if(B.isRectAreaLight){let I=W.rectArea[V];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(O),H.identity(),K.copy(B.matrixWorld),K.premultiply(O),H.extractRotation(K),I.halfWidth.set(B.width*0.5,0,0),I.halfHeight.set(0,B.height*0.5,0),I.halfWidth.applyMatrix4(H),I.halfHeight.applyMatrix4(H),V++}else if(B.isPointLight){let I=W.point[F];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(O),F++}else if(B.isHemisphereLight){let I=W.hemi[E];I.direction.setFromMatrixPosition(B.matrixWorld),I.direction.transformDirection(O),E++}}}return{setup:Y,setupView:X,state:W}}function iK(J){let Q=new PN(J),$=[],W=[],Z=[];function K(N){G.camera=N,$.length=0,W.length=0,Z.length=0}function H(N){if(N.isLightProbeGrid)Z.push(N);else $.push(N)}function Y(N){W.push(N)}function X(){Q.setup($),Z.sort((N,q)=>N.priority-q.priority||N.id-q.id)}function U(N){Q.setupView($,N)}let G={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:G,setupLights:X,setupLightsView:U,pushLight:H,pushShadow:Y}}function IN(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),Y;if(H===void 0)Y=new iK(J),Q.set(Z,[Y]);else if(K>=H.length)Y=new iK(J),H.push(Y);else Y=H[K];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var wN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_N=`uniform sampler2D shadow_pass;
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
}`,AN=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],TN=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],oK=new f0,b7=new v,UW=new v;function SN(J,Q,$){let W=new L8,Z=new T0,K=new T0,H=new JJ,Y=new o$,X=new a$,U={},G=$.maxTextureSize,N={[r9]:pJ,[pJ]:r9,[Q9]:Q9},q=new x9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new T0},radius:{value:4}},vertexShader:wN,fragmentShader:_N}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let M=new lJ;M.setAttribute("position",new TJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let V=new mJ(M,q),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D7;let O=this.type;this.render=function(w,R,k){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(w.length===0)return;if(this.type===PZ)C0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=D7;let j=J.getRenderTarget(),l=J.getActiveCubeFace(),y=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(M8),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let t=O!==this.type;if(t)R.traverse(function(A){if(A.material)if(Array.isArray(A.material))A.material.forEach((s)=>s.needsUpdate=!0);else A.material.needsUpdate=!0});for(let A=0,s=w.length;A<s;A++){let o=w[A],x=o.shadow;if(x===void 0){C0("WebGLShadowMap:",o,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;Z.copy(x.mapSize);let K0=x.getFrameExtents();if(Z.multiply(K0),K.copy(x.mapSize),Z.x>G||Z.y>G){if(Z.x>G)K.x=Math.floor(G/K0.x),Z.x=K.x*K0.x,x.mapSize.x=K.x;if(Z.y>G)K.y=Math.floor(G/K0.y),Z.y=K.y*K0.y,x.mapSize.y=K.y}let u=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=u,x.map===null||t===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===d8){if(o.isPointLight){C0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new $9(Z.x,Z.y,{format:k8,type:M9,minFilter:SJ,magFilter:SJ,generateMipmaps:!1}),x.map.texture.name=o.name+".shadowMap",x.map.depthTexture=new Q8(Z.x,Z.y,h9),x.map.depthTexture.name=o.name+".shadowMapDepth",x.map.depthTexture.format=o8,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=N9,x.map.depthTexture.magFilter=N9}else{if(o.isPointLight)x.map=new ZQ(Z.x),x.map.depthTexture=new d6(Z.x,t9);else x.map=new $9(Z.x,Z.y),x.map.depthTexture=new Q8(Z.x,Z.y,t9);if(x.map.depthTexture.name=o.name+".shadowMap",x.map.depthTexture.format=o8,this.type===D7)x.map.depthTexture.compareFunction=u?f$:h$,x.map.depthTexture.minFilter=SJ,x.map.depthTexture.magFilter=SJ;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=N9,x.map.depthTexture.magFilter=N9}x.camera.updateProjectionMatrix()}if(x.map.isWebGLCubeRenderTarget!==!0&&(x.map.width!==Z.x||x.map.height!==Z.y))x.map.setSize(Z.x,Z.y);let r=x.map.isWebGLCubeRenderTarget?6:x.getViewportCount();if(o.isPointLight!==!0)x.updateMatrices(o,k);let $0=(x.camera.layers.mask&4294967294)!==0?x.camera.layers:k.layers;for(let k0=0;k0<r;k0++){let i=x.getCamera(k0);if(o.isPointLight){let{camera:Q0,matrix:D0}=x,w0=o.distance||Q0.far;if(w0!==Q0.far)Q0.far=w0,Q0.updateProjectionMatrix();b7.setFromMatrixPosition(o.matrixWorld),Q0.position.copy(b7),UW.copy(Q0.position),UW.add(AN[k0]),Q0.up.copy(TN[k0]),Q0.lookAt(UW),Q0.updateMatrixWorld(),D0.makeTranslation(-b7.x,-b7.y,-b7.z),oK.multiplyMatrices(Q0.projectionMatrix,Q0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(oK,Q0.coordinateSystem,Q0.reversedDepth)}if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,k0),J.clear();else{if(k0===0)J.setRenderTarget(x.map),J.clear();let Q0=x.getViewport(k0);H.set(K.x*Q0.x,K.y*Q0.y,K.x*Q0.z,K.y*Q0.w),p.viewport(H)}W=x.getFrustum(k0),B(R,k,i,o,$0,this.type)}if(x.isPointLightShadow!==!0&&this.type===d8)z(x,k);x.needsUpdate=!1}O=this.type,E.needsUpdate=!1,J.setRenderTarget(j,l,y)};function z(w,R){let k=Q.update(V);if(q.defines.VSM_SAMPLES!==w.blurSamples)q.defines.VSM_SAMPLES=w.blurSamples,F.defines.VSM_SAMPLES=w.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new $9(Z.x,Z.y,{format:k8,type:M9});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);q.uniforms.shadow_pass.value=w.map.depthTexture,q.uniforms.resolution.value.set(w.map.width,w.map.height),q.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(R,null,k,q,V,null),F.uniforms.shadow_pass.value=w.mapPass.texture,F.uniforms.resolution.value.set(w.map.width,w.map.height),F.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(R,null,k,F,V,null)}function P(w,R,k,j){let l=null,y=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)l=y;else if(l=k.isPointLight===!0?X:Y,J.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let p=l.uuid,t=R.uuid,A=U[p];if(A===void 0)A={},U[p]=A;let s=A[t];if(s===void 0)s=l.clone(),A[t]=s,R.addEventListener("dispose",I);l=s}if(l.visible=R.visible,l.wireframe=R.wireframe,j===d8)l.side=R.shadowSide!==null?R.shadowSide:R.side;else l.side=R.shadowSide!==null?R.shadowSide:N[R.side];if(l.alphaMap=R.alphaMap,l.alphaTest=R.alphaToCoverage===!0?0.5:R.alphaTest,l.map=R.map,l.clipShadows=R.clipShadows,l.clippingPlanes=R.clippingPlanes,l.clipIntersection=R.clipIntersection,l.displacementMap=R.displacementMap,l.displacementScale=R.displacementScale,l.displacementBias=R.displacementBias,l.wireframeLinewidth=R.wireframeLinewidth,l.linewidth=R.linewidth,k.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let p=J.properties.get(l);p.light=k}return l}function B(w,R,k,j,l,y){if(w.visible===!1)return;if(w.layers.test(l)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&y===d8)&&(!w.frustumCulled||w.intersectsFrustum(W))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);let A=Q.update(w),s=w.material;if(Array.isArray(s)){let o=A.groups;for(let x=0,K0=o.length;x<K0;x++){let u=o[x],r=s[u.materialIndex];if(r&&r.visible){let $0=P(w,r,j,y);w.onBeforeShadow(J,w,R,k,A,$0,u),J.renderBufferDirect(k,null,A,$0,w,u),w.onAfterShadow(J,w,R,k,A,$0,u)}}}else if(s.visible){let o=P(w,s,j,y);w.onBeforeShadow(J,w,R,k,A,o,null),J.renderBufferDirect(k,null,A,o,w,null),w.onAfterShadow(J,w,R,k,A,o,null)}}}let t=w.children;for(let A=0,s=t.length;A<s;A++)B(t[A],R,k,j,l,y)}function I(w){w.target.removeEventListener("dispose",I);for(let k in U){let j=U[k],l=w.target.uuid;if(l in j)j[l].dispose(),delete j[l]}}}function jN(J,Q){function $(){let _=!1,c=new JJ,d=null,J0=new JJ(0,0,0,0);return{setMask:function(W0){if(d!==W0&&!_)J.colorMask(W0,W0,W0,W0),d=W0},setLocked:function(W0){_=W0},setClear:function(W0,G0,P0,z0,E0){if(E0===!0)W0*=z0,G0*=z0,P0*=z0;if(c.set(W0,G0,P0,z0),J0.equals(c)===!1)J.clearColor(W0,G0,P0,z0),J0.copy(c)},reset:function(){_=!1,d=null,J0.set(-1,0,0,0)}}}function W(){let _=!1,c=!1,d=null,J0=null,W0=null;return{setReversed:function(G0){if(c!==G0){let P0=Q.get("EXT_clip_control");if(G0)P0.clipControlEXT(P0.LOWER_LEFT_EXT,P0.ZERO_TO_ONE_EXT);else P0.clipControlEXT(P0.LOWER_LEFT_EXT,P0.NEGATIVE_ONE_TO_ONE_EXT);c=G0;let z0=W0;W0=null,this.setClear(z0)}},getReversed:function(){return c},setTest:function(G0){if(G0)V0(J.DEPTH_TEST);else r0(J.DEPTH_TEST)},setMask:function(G0){if(d!==G0&&!_)J.depthMask(G0),d=G0},setFunc:function(G0){if(c)G0=MK[G0];if(J0!==G0){switch(G0){case nZ:J.depthFunc(J.NEVER);break;case sZ:J.depthFunc(J.ALWAYS);break;case iZ:J.depthFunc(J.LESS);break;case lQ:J.depthFunc(J.LEQUAL);break;case oZ:J.depthFunc(J.EQUAL);break;case aZ:J.depthFunc(J.GEQUAL);break;case rZ:J.depthFunc(J.GREATER);break;case tZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}J0=G0}},setLocked:function(G0){_=G0},setClear:function(G0){if(W0!==G0){if(W0=G0,c)G0=1-G0;J.clearDepth(G0)}},reset:function(){_=!1,d=null,J0=null,W0=null,c=!1}}}function Z(){let _=!1,c=null,d=null,J0=null,W0=null,G0=null,P0=null,z0=null,E0=null;return{setTest:function(I0){if(!_)if(I0)V0(J.STENCIL_TEST);else r0(J.STENCIL_TEST)},setMask:function(I0){if(c!==I0&&!_)J.stencilMask(I0),c=I0},setFunc:function(I0,x0,F0){if(d!==I0||J0!==x0||W0!==F0)J.stencilFunc(I0,x0,F0),d=I0,J0=x0,W0=F0},setOp:function(I0,x0,F0){if(G0!==I0||P0!==x0||z0!==F0)J.stencilOp(I0,x0,F0),G0=I0,P0=x0,z0=F0},setLocked:function(I0){_=I0},setClear:function(I0){if(E0!==I0)J.clearStencil(I0),E0=I0},reset:function(){_=!1,c=null,d=null,J0=null,W0=null,G0=null,P0=null,z0=null,E0=null}}}let K=new $,H=new W,Y=new Z,X={},U=new WeakMap,G={},N={},q={},F=new WeakMap,M=[],V=null,E=!1,O=null,z=null,P=null,B=null,I=null,w=null,R=null,k=new S0(0,0,0),j=0,l=!1,y=null,p=null,t=null,A=null,s=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,K0=0,u=J.getParameter(J.VERSION);if(u.indexOf("WebGL")!==-1)K0=parseFloat(/^WebGL (\d)/.exec(u)[1]),x=K0>=1;else if(u.indexOf("OpenGL ES")!==-1)K0=parseFloat(/^OpenGL ES (\d)/.exec(u)[1]),x=K0>=2;let r=null,$0={},k0=J.getParameter(J.SCISSOR_BOX),i=J.getParameter(J.VIEWPORT),Q0=new JJ().fromArray(k0),D0=new JJ().fromArray(i);function w0(_,c,d,J0){let W0=new Uint8Array(4),G0=J.createTexture();J.bindTexture(_,G0),J.texParameteri(_,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(_,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let P0=0;P0<d;P0++)if(_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texImage3D(c,0,J.RGBA,1,1,J0,0,J.RGBA,J.UNSIGNED_BYTE,W0);else J.texImage2D(c+P0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,W0);return G0}let _0={};_0[J.TEXTURE_2D]=w0(J.TEXTURE_2D,J.TEXTURE_2D,1),_0[J.TEXTURE_CUBE_MAP]=w0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),_0[J.TEXTURE_2D_ARRAY]=w0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),_0[J.TEXTURE_3D]=w0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),V0(J.DEPTH_TEST),H.setFunc(lQ),cJ(!1),NJ(bQ),V0(J.CULL_FACE),GJ(M8);function V0(_){if(G[_]!==!0)J.enable(_),G[_]=!0}function r0(_){if(G[_]!==!1)J.disable(_),G[_]=!1}function d0(_,c){if(q[_]!==c){if(J.bindFramebuffer(_,c),q[_]=c,_===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=c;if(_===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=c;return!0}return!1}function b0(_,c){let d=M,J0=!1;if(_){if(d=F.get(c),d===void 0)d=[],F.set(c,d);let W0=_.textures;if(d.length!==W0.length||d[0]!==J.COLOR_ATTACHMENT0){for(let G0=0,P0=W0.length;G0<P0;G0++)d[G0]=J.COLOR_ATTACHMENT0+G0;d.length=W0.length,J0=!0}}else if(d[0]!==J.BACK)d[0]=J.BACK,J0=!0;if(J0)J.drawBuffers(d)}function HJ(_){if(V!==_)return J.useProgram(_),V=_,!0;return!1}let n0={[u8]:J.FUNC_ADD,[wZ]:J.FUNC_SUBTRACT,[_Z]:J.FUNC_REVERSE_SUBTRACT};n0[AZ]=J.MIN,n0[TZ]=J.MAX;let UJ={[SZ]:J.ZERO,[jZ]:J.ONE,[yZ]:J.SRC_COLOR,[hZ]:J.SRC_ALPHA,[lZ]:J.SRC_ALPHA_SATURATE,[gZ]:J.DST_COLOR,[bZ]:J.DST_ALPHA,[vZ]:J.ONE_MINUS_SRC_COLOR,[fZ]:J.ONE_MINUS_SRC_ALPHA,[pZ]:J.ONE_MINUS_DST_COLOR,[xZ]:J.ONE_MINUS_DST_ALPHA,[mZ]:J.CONSTANT_COLOR,[dZ]:J.ONE_MINUS_CONSTANT_COLOR,[uZ]:J.CONSTANT_ALPHA,[cZ]:J.ONE_MINUS_CONSTANT_ALPHA};function GJ(_,c,d,J0,W0,G0,P0,z0,E0,I0){if(_===M8){if(E===!0)r0(J.BLEND),E=!1;return}if(E===!1)V0(J.BLEND),E=!0;if(_!==IZ){if(_!==O||I0!==l){if(z!==u8||I!==u8)J.blendEquation(J.FUNC_ADD),z=u8,I=u8;if(I0)switch(_){case V7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case xQ:J.blendFunc(J.ONE,J.ONE);break;case gQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case pQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:j0("WebGLState: Invalid blending: ",_);break}else switch(_){case V7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case xQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case gQ:j0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pQ:j0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:j0("WebGLState: Invalid blending: ",_);break}P=null,B=null,w=null,R=null,k.set(0,0,0),j=0,O=_,l=I0}return}if(W0=W0||c,G0=G0||d,P0=P0||J0,c!==z||W0!==I)J.blendEquationSeparate(n0[c],n0[W0]),z=c,I=W0;if(d!==P||J0!==B||G0!==w||P0!==R)J.blendFuncSeparate(UJ[d],UJ[J0],UJ[G0],UJ[P0]),P=d,B=J0,w=G0,R=P0;if(z0.equals(k)===!1||E0!==j)J.blendColor(z0.r,z0.g,z0.b,E0),k.copy(z0),j=E0;O=_,l=!1}function fJ(_,c){_.side===Q9?r0(J.CULL_FACE):V0(J.CULL_FACE);let d=_.side===pJ;if(c)d=!d;cJ(d),_.blending===V7&&_.transparent===!1?GJ(M8):GJ(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),H.setFunc(_.depthFunc),H.setTest(_.depthTest),H.setMask(_.depthWrite),K.setMask(_.colorWrite);let J0=_.stencilWrite;if(Y.setTest(J0),J0)Y.setMask(_.stencilWriteMask),Y.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),Y.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass);bJ(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?V0(J.SAMPLE_ALPHA_TO_COVERAGE):r0(J.SAMPLE_ALPHA_TO_COVERAGE)}function cJ(_){if(y!==_){if(_)J.frontFace(J.CW);else J.frontFace(J.CCW);y=_}}function NJ(_){if(_!==zZ){if(V0(J.CULL_FACE),_!==p)if(_===bQ)J.cullFace(J.BACK);else if(_===CZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else r0(J.CULL_FACE);p=_}function CJ(_){if(_!==t){if(x)J.lineWidth(_);t=_}}function bJ(_,c,d){if(_){if(V0(J.POLYGON_OFFSET_FILL),A!==c||s!==d){if(A=c,s=d,H.getReversed())c=-c,d=-d;J.polygonOffset(c,d)}}else r0(J.POLYGON_OFFSET_FILL)}function xJ(_){if(_)V0(J.SCISSOR_TEST);else r0(J.SCISSOR_TEST)}function K9(_){if(_===void 0)_=J.TEXTURE0+o-1;if(r!==_)J.activeTexture(_),r=_}function S(_,c,d){if(d===void 0)if(r===null)d=J.TEXTURE0+o-1;else d=r;let J0=$0[d];if(J0===void 0)J0={type:void 0,texture:void 0},$0[d]=J0;if(J0.type!==_||J0.texture!==c){if(r!==d)J.activeTexture(d),r=d;J.bindTexture(_,c||_0[_]),J0.type=_,J0.texture=c}}function H9(){let _=$0[r];if(_!==void 0&&_.type!==void 0)J.bindTexture(_.type,null),_.type=void 0,_.texture=void 0}function t0(){try{J.compressedTexImage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function MJ(){try{J.compressedTexImage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function N0(){try{J.texSubImage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function WJ(){try{J.texSubImage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function A0(){try{J.compressedTexSubImage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function v0(){try{J.compressedTexSubImage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function PJ(){try{J.texStorage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function C(){try{J.texStorage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function L(){try{J.texImage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function h(){try{J.texImage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function e(_){if(N[_]!==void 0)return N[_];else return J.getParameter(_)}function a(_,c){if(N[_]!==c)J.pixelStorei(_,c),N[_]=c}function Z0(_){if(Q0.equals(_)===!1)J.scissor(_.x,_.y,_.z,_.w),Q0.copy(_)}function X0(_){if(D0.equals(_)===!1)J.viewport(_.x,_.y,_.z,_.w),D0.copy(_)}function m(_,c){let d=U.get(c);if(d===void 0)d=new WeakMap,U.set(c,d);let J0=d.get(_);if(J0===void 0)J0=J.getUniformBlockIndex(c,_.name),J.uniformBlockBinding(c,J0,J0),d.set(_,J0)}function n(_,c,d){let W0=U.get(c).get(_);if(X[W0]!==d)J.bindBufferBase(J.UNIFORM_BUFFER,W0,d),X[W0]=d}function H0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},N={},r=null,$0={},q={},X={},F=new WeakMap,M=[],V=null,E=!1,O=null,z=null,P=null,B=null,I=null,w=null,R=null,k=new S0(0,0,0),j=0,l=!1,y=null,p=null,t=null,A=null,s=null,Q0.set(0,0,J.canvas.width,J.canvas.height),D0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:V0,disable:r0,bindFramebuffer:d0,drawBuffers:b0,useProgram:HJ,setBlending:GJ,setMaterial:fJ,setFlipSided:cJ,setCullFace:NJ,setLineWidth:CJ,setPolygonOffset:bJ,setScissorTest:xJ,activeTexture:K9,bindTexture:S,unbindTexture:H9,compressedTexImage2D:t0,compressedTexImage3D:MJ,texImage2D:L,texImage3D:h,pixelStorei:a,getParameter:e,updateUBOMapping:m,uniformBlockBinding:n,texStorage2D:PJ,texStorage3D:C,texSubImage2D:N0,texSubImage3D:WJ,compressedTexSubImage2D:A0,compressedTexSubImage3D:v0,scissor:Z0,viewport:X0,reset:H0}}function yN(J,Q,$,W,Z,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new T0,G=new WeakMap,N=new Set,q,F=new WeakMap,M=new Set,V=new FinalizationRegistry((C)=>M.delete(C)),E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function O(C,L){return E?new OffscreenCanvas(C,L):l8("canvas")}function z(C,L,h){let e=1,a=PJ(C);if(a.width>h||a.height>h)e=h/Math.max(a.width,a.height);if(e<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z0=Math.floor(e*a.width),X0=Math.floor(e*a.height);if(q===void 0)q=O(Z0,X0);let m=L?O(Z0,X0):q;return m.width=Z0,m.height=X0,m.getContext("2d").drawImage(C,0,0,Z0,X0),C0("WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+Z0+"x"+X0+")."),m}else{if("data"in C)C0("WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return C}return C}function P(C){return C.generateMipmaps}function B(C){J.generateMipmap(C)}function I(C){if(C.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function w(C,L,h,e,a,Z0=!1){if(C!==null){if(J[C]!==void 0)return J[C];C0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X0;if(e){if(X0=Q.get("EXT_texture_norm16"),!X0)C0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let m=L;if(L===J.RED){if(h===J.FLOAT)m=J.R32F;if(h===J.HALF_FLOAT)m=J.R16F;if(h===J.UNSIGNED_BYTE)m=J.R8;if(h===J.UNSIGNED_SHORT&&X0)m=X0.R16_EXT;if(h===J.SHORT&&X0)m=X0.R16_SNORM_EXT}if(L===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.R8UI;if(h===J.UNSIGNED_SHORT)m=J.R16UI;if(h===J.UNSIGNED_INT)m=J.R32UI;if(h===J.BYTE)m=J.R8I;if(h===J.SHORT)m=J.R16I;if(h===J.INT)m=J.R32I}if(L===J.RG){if(h===J.FLOAT)m=J.RG32F;if(h===J.HALF_FLOAT)m=J.RG16F;if(h===J.UNSIGNED_BYTE)m=J.RG8;if(h===J.UNSIGNED_SHORT&&X0)m=X0.RG16_EXT;if(h===J.SHORT&&X0)m=X0.RG16_SNORM_EXT}if(L===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RG8UI;if(h===J.UNSIGNED_SHORT)m=J.RG16UI;if(h===J.UNSIGNED_INT)m=J.RG32UI;if(h===J.BYTE)m=J.RG8I;if(h===J.SHORT)m=J.RG16I;if(h===J.INT)m=J.RG32I}if(L===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGB8UI;if(h===J.UNSIGNED_SHORT)m=J.RGB16UI;if(h===J.UNSIGNED_INT)m=J.RGB32UI;if(h===J.BYTE)m=J.RGB8I;if(h===J.SHORT)m=J.RGB16I;if(h===J.INT)m=J.RGB32I}if(L===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)m=J.RGBA16UI;if(h===J.UNSIGNED_INT)m=J.RGBA32UI;if(h===J.BYTE)m=J.RGBA8I;if(h===J.SHORT)m=J.RGBA16I;if(h===J.INT)m=J.RGBA32I}if(L===J.RGB){if(h===J.UNSIGNED_SHORT&&X0)m=X0.RGB16_EXT;if(h===J.SHORT&&X0)m=X0.RGB16_SNORM_EXT;if(h===J.UNSIGNED_INT_5_9_9_9_REV)m=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)m=J.R11F_G11F_B10F}if(L===J.RGBA){let n=Z0?v$:p0.getTransfer(a);if(h===J.FLOAT)m=J.RGBA32F;if(h===J.HALF_FLOAT)m=J.RGBA16F;if(h===J.UNSIGNED_BYTE)m=n===$J?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT&&X0)m=X0.RGBA16_EXT;if(h===J.SHORT&&X0)m=X0.RGBA16_SNORM_EXT;if(h===J.UNSIGNED_SHORT_4_4_4_4)m=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)m=J.RGB5_A1}if(m===J.R16F||m===J.R32F||m===J.RG16F||m===J.RG32F||m===J.RGBA16F||m===J.RGBA32F)Q.get("EXT_color_buffer_float");return m}function R(C,L){let h;if(C){if(L===null||L===t9||L===V8)h=J.DEPTH24_STENCIL8;else if(L===h9)h=J.DEPTH32F_STENCIL8;else if(L===B7)h=J.DEPTH24_STENCIL8,C0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(L===null||L===t9||L===V8)h=J.DEPTH_COMPONENT24;else if(L===h9)h=J.DEPTH_COMPONENT32F;else if(L===B7)h=J.DEPTH_COMPONENT16;return h}function k(C,L){if(P(C)===!0||C.isFramebufferTexture&&C.minFilter!==N9&&C.minFilter!==SJ)return Math.log2(Math.max(L.width,L.height))+1;else if(C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return L.mipmaps.length;else return 1}function j(C){let L=new WeakRef(C);W.get(C).__ref=L,M.add(L),V.register(C,L,L)}function l(C){let L=W.get(C).__ref;if(L===void 0)return;M.delete(L),V.unregister(L)}function y(C){t(C.target)}function p(C){A(C.target)}function t(C){if(C.removeEventListener("dispose",y),l(C),o(C),C.isVideoTexture)G.delete(C);if(C.isHTMLTexture)N.delete(C)}function A(C){C.removeEventListener("dispose",p),l(C),K0(C)}function s(){for(let C of M){let L=C.deref();if(L===void 0)continue;if(L.isRenderTarget===!0)A(L);else t(L)}M.clear(),N.clear()}function o(C){let L=W.get(C);if(L.__webglInit===void 0)return;let h=C.source,e=F.get(h);if(e){let a=e[L.__cacheKey];if(a.usedTimes--,a.usedTimes===0)x(C);if(Object.keys(e).length===0)F.delete(h)}W.remove(C)}function x(C){let L=W.get(C);J.deleteTexture(L.__webglTexture);let h=C.source,e=F.get(h);delete e[L.__cacheKey],H.memory.textures--}function K0(C){let L=W.get(C);if(L.__depthDisposeCallback)L.__depthDisposeCallback();let h=C.depthTexture;if(h&&h.renderTarget===C)t(h);if(C.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(L.__webglFramebuffer[a]))for(let Z0=0;Z0<L.__webglFramebuffer[a].length;Z0++)J.deleteFramebuffer(L.__webglFramebuffer[a][Z0]);else J.deleteFramebuffer(L.__webglFramebuffer[a]);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer[a])}else{if(Array.isArray(L.__webglFramebuffer))for(let a=0;a<L.__webglFramebuffer.length;a++)J.deleteFramebuffer(L.__webglFramebuffer[a]);else J.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer);if(L.__webglMultisampledFramebuffer)J.deleteFramebuffer(L.__webglMultisampledFramebuffer);if(L.__webglColorRenderbuffer){for(let a=0;a<L.__webglColorRenderbuffer.length;a++)if(L.__webglColorRenderbuffer[a])J.deleteRenderbuffer(L.__webglColorRenderbuffer[a])}if(L.__webglDepthRenderbuffer)J.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let e=C.textures;for(let a=0,Z0=e.length;a<Z0;a++){let X0=W.get(e[a]);if(X0.__webglTexture)J.deleteTexture(X0.__webglTexture),H.memory.textures--;W.remove(e[a])}W.remove(C)}let u=0;function r(){u=0}function $0(){return u}function k0(C){u=C}function i(){let C=u;if(C>=Z.maxTextures)C0("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+Z.maxTextures);return u+=1,C}function Q0(C){let L=[];return L.push(C.wrapS),L.push(C.wrapT),L.push(C.wrapR||0),L.push(C.magFilter),L.push(C.minFilter),L.push(C.anisotropy),L.push(C.internalFormat),L.push(C.format),L.push(C.type),L.push(C.generateMipmaps),L.push(C.mipmapsAutoUpdate),L.push(C.premultiplyAlpha),L.push(C.flipY),L.push(C.unpackAlignment),L.push(C.colorSpace),L.join()}function D0(C,L){let h=W.get(C);if(C.isVideoTexture)A0(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&h.__version!==C.version){let e=C.image;if(e===null)C0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)C0("WebGLRenderer: Texture marked for update but image is incomplete");else{fJ(h,C,L);return}}else if(C.isExternalTexture)h.__webglTexture=C.sourceTexture?C.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+L)}function w0(C,L){let h=W.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&h.__version!==C.version){fJ(h,C,L);return}else if(C.isExternalTexture)h.__webglTexture=C.sourceTexture?C.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+L)}function _0(C,L){let h=W.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&h.__version!==C.version){fJ(h,C,L);return}$.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+L)}function V0(C,L){let h=W.get(C);if(C.version>0&&h.__version!==C.version){cJ(h,C,L);return}$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+L)}let r0={[n8]:J.REPEAT,[s8]:J.CLAMP_TO_EDGE,[k6]:J.MIRRORED_REPEAT},d0={[N9]:J.NEAREST,[B6]:J.NEAREST_MIPMAP_NEAREST,[D8]:J.NEAREST_MIPMAP_LINEAR,[SJ]:J.LINEAR,[i8]:J.LINEAR_MIPMAP_NEAREST,[q9]:J.LINEAR_MIPMAP_LINEAR},b0={[GK]:J.NEVER,[b$]:J.ALWAYS,[NK]:J.LESS,[h$]:J.LEQUAL,[qK]:J.EQUAL,[f$]:J.GEQUAL,[EK]:J.GREATER,[FK]:J.NOTEQUAL};function HJ(C,L){if(L.type===h9&&Q.has("OES_texture_float_linear")===!1&&(L.magFilter===SJ||L.magFilter===i8||L.magFilter===D8||L.magFilter===q9||L.minFilter===SJ||L.minFilter===i8||L.minFilter===D8||L.minFilter===q9))C0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(C,J.TEXTURE_WRAP_S,r0[L.wrapS]),J.texParameteri(C,J.TEXTURE_WRAP_T,r0[L.wrapT]),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,r0[L.wrapR]);if(J.texParameteri(C,J.TEXTURE_MAG_FILTER,d0[L.magFilter]),J.texParameteri(C,J.TEXTURE_MIN_FILTER,d0[L.minFilter]),L.compareFunction)J.texParameteri(C,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(C,J.TEXTURE_COMPARE_FUNC,b0[L.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===N9)return;if(L.minFilter!==D8&&L.minFilter!==q9)return;if(L.type===h9&&Q.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||W.get(L).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(C,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,Z.getMaxAnisotropy())),W.get(L).__currentAnisotropy=L.anisotropy}}}function n0(C,L){let h=!1;if(C.__webglInit===void 0)C.__webglInit=!0,L.addEventListener("dispose",y),j(L);let e=L.source,a=F.get(e);if(a===void 0)a={},F.set(e,a);let Z0=Q0(L);if(Z0!==C.__cacheKey){if(a[Z0]===void 0)a[Z0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,h=!0;a[Z0].usedTimes++;let X0=a[C.__cacheKey];if(X0!==void 0){if(a[C.__cacheKey].usedTimes--,X0.usedTimes===0)x(L)}C.__cacheKey=Z0,C.__webglTexture=a[Z0].texture}return h}function UJ(C,L,h){return Math.floor(Math.floor(C/h)/L)}function GJ(C,L,h,e){let Z0=C.updateRanges;if(Z0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,L.width,L.height,h,e,L.data);else{Z0.sort((_,c)=>_.start-c.start);let X0=0;for(let _=1;_<Z0.length;_++){let c=Z0[X0],d=Z0[_],J0=c.start+c.count,W0=UJ(d.start,L.width,4),G0=UJ(c.start,L.width,4);if(d.start<=J0+1&&W0===G0&&UJ(d.start+d.count-1,L.width,4)===W0)c.count=Math.max(c.count,d.start+d.count-c.start);else++X0,Z0[X0]=d}Z0.length=X0+1;let m=$.getParameter(J.UNPACK_ROW_LENGTH),n=$.getParameter(J.UNPACK_SKIP_PIXELS),H0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,L.width);for(let _=0,c=Z0.length;_<c;_++){let d=Z0[_],J0=Math.floor(d.start/4),W0=Math.ceil(d.count/4),G0=J0%L.width,P0=Math.floor(J0/L.width),z0=W0,E0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,G0),$.pixelStorei(J.UNPACK_SKIP_ROWS,P0),$.texSubImage2D(J.TEXTURE_2D,0,G0,P0,z0,1,h,e,L.data)}C.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,m),$.pixelStorei(J.UNPACK_SKIP_PIXELS,n),$.pixelStorei(J.UNPACK_SKIP_ROWS,H0)}}function fJ(C,L,h){let e=J.TEXTURE_2D;if(L.isDataArrayTexture||L.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(L.isData3DTexture)e=J.TEXTURE_3D;let a=n0(C,L),Z0=L.source;$.bindTexture(e,C.__webglTexture,J.TEXTURE0+h);let X0=W.get(Z0);if(Z0.version!==X0.__version||a===!0){if($.activeTexture(J.TEXTURE0+h),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let E0=p0.getPrimaries(p0.workingColorSpace),I0=L.colorSpace===B8?null:p0.getPrimaries(L.colorSpace),x0=L.colorSpace===B8||E0===I0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,x0)}$.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment);let n=z(L.image,!1,Z.maxTextureSize);n=v0(L,n);let H0=K.convert(L.format,L.colorSpace),_=K.convert(L.type),c=w(L.internalFormat,H0,_,L.normalized,L.colorSpace,L.isVideoTexture);HJ(e,L);let d,J0=L.mipmaps,W0=L.isVideoTexture!==!0,G0=X0.__version===void 0||a===!0,P0=Z0.dataReady,z0=k(L,n);if(L.isDepthTexture){if(c=R(L.format===e9,L.type),G0)if(W0)$.texStorage2D(J.TEXTURE_2D,1,c,n.width,n.height);else $.texImage2D(J.TEXTURE_2D,0,c,n.width,n.height,0,H0,_,null)}else if(L.isDataTexture)if(J0.length>0){if(W0&&G0)$.texStorage2D(J.TEXTURE_2D,z0,c,J0[0].width,J0[0].height);for(let E0=0,I0=J0.length;E0<I0;E0++)if(d=J0[E0],W0){if(P0)$.texSubImage2D(J.TEXTURE_2D,E0,0,0,d.width,d.height,H0,_,d.data)}else $.texImage2D(J.TEXTURE_2D,E0,c,d.width,d.height,0,H0,_,d.data);L.generateMipmaps=!1}else if(W0){if(G0)$.texStorage2D(J.TEXTURE_2D,z0,c,n.width,n.height);if(P0)GJ(L,n,H0,_)}else $.texImage2D(J.TEXTURE_2D,0,c,n.width,n.height,0,H0,_,n.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){if(W0&&G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,z0,c,J0[0].width,J0[0].height,n.depth);for(let E0=0,I0=J0.length;E0<I0;E0++)if(d=J0[E0],L.format!==f9)if(H0!==null)if(W0){if(P0)if(L.layerUpdates.size>0){let x0=YW(d.width,d.height,L.format,L.type);for(let F0 of L.layerUpdates){let e0=d.data.subarray(F0*x0/d.data.BYTES_PER_ELEMENT,(F0+1)*x0/d.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,E0,0,0,F0,d.width,d.height,1,H0,e0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,E0,0,0,0,d.width,d.height,n.depth,H0,d.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,E0,c,d.width,d.height,n.depth,0,d.data,0,0);else C0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(P0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,E0,0,0,0,d.width,d.height,n.depth,H0,_,d.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,E0,c,d.width,d.height,n.depth,0,H0,_,d.data);if(L.layerUpdates.size>0)L.clearLayerUpdates()}else{if(W0&&G0)$.texStorage2D(J.TEXTURE_2D,z0,c,J0[0].width,J0[0].height);for(let E0=0,I0=J0.length;E0<I0;E0++)if(d=J0[E0],L.format!==f9)if(H0!==null)if(W0){if(P0)$.compressedTexSubImage2D(J.TEXTURE_2D,E0,0,0,d.width,d.height,H0,d.data)}else $.compressedTexImage2D(J.TEXTURE_2D,E0,c,d.width,d.height,0,d.data);else C0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(P0)$.texSubImage2D(J.TEXTURE_2D,E0,0,0,d.width,d.height,H0,_,d.data)}else $.texImage2D(J.TEXTURE_2D,E0,c,d.width,d.height,0,H0,_,d.data)}else if(L.isDataArrayTexture)if(W0){if(G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,z0,c,n.width,n.height,n.depth);if(P0)if(L.layerUpdates.size>0){let E0=YW(n.width,n.height,L.format,L.type);for(let I0 of L.layerUpdates){let x0=n.data.subarray(I0*E0/n.data.BYTES_PER_ELEMENT,(I0+1)*E0/n.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,I0,n.width,n.height,1,H0,_,x0)}L.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,n.width,n.height,n.depth,H0,_,n.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,c,n.width,n.height,n.depth,0,H0,_,n.data);else if(L.isData3DTexture)if(W0){if(G0)$.texStorage3D(J.TEXTURE_3D,z0,c,n.width,n.height,n.depth);if(P0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,n.width,n.height,n.depth,H0,_,n.data)}else $.texImage3D(J.TEXTURE_3D,0,c,n.width,n.height,n.depth,0,H0,_,n.data);else if(L.isFramebufferTexture){if(G0)if(W0)$.texStorage2D(J.TEXTURE_2D,z0,c,n.width,n.height);else{let{width:E0,height:I0}=n;for(let x0=0;x0<z0;x0++)$.texImage2D(J.TEXTURE_2D,x0,c,E0,I0,0,H0,_,null),E0>>=1,I0>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in J){let E0=J.canvas;if(!E0.hasAttribute("layoutsubtree"))E0.setAttribute("layoutsubtree","true");if(n.parentNode!==E0){E0.appendChild(n),N.add(L),E0.onpaint=(I0)=>{let x0=I0.changedElements;for(let F0 of N)if(x0.includes(F0.image))F0.needsUpdate=!0},E0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,n);else{let{RGBA:x0,RGBA:F0,UNSIGNED_BYTE:e0}=J;J.texElementImage2D(J.TEXTURE_2D,0,x0,F0,e0,n)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(J0.length>0){if(W0&&G0){let E0=PJ(J0[0]);$.texStorage2D(J.TEXTURE_2D,z0,c,E0.width,E0.height)}for(let E0=0,I0=J0.length;E0<I0;E0++)if(d=J0[E0],W0){if(P0)$.texSubImage2D(J.TEXTURE_2D,E0,0,0,H0,_,d)}else $.texImage2D(J.TEXTURE_2D,E0,c,H0,_,d);L.generateMipmaps=!1}else if(W0){if(G0){let E0=PJ(n);$.texStorage2D(J.TEXTURE_2D,z0,c,E0.width,E0.height)}if(P0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,H0,_,n)}else $.texImage2D(J.TEXTURE_2D,0,c,H0,_,n);if(P(L)&&L.mipmapsAutoUpdate===!0)B(e);if(X0.__version=Z0.version,L.onUpdate)L.onUpdate(L)}C.__version=L.version}function cJ(C,L,h){if(L.image.length!==6)return;let e=n0(C,L),a=L.source;$.bindTexture(J.TEXTURE_CUBE_MAP,C.__webglTexture,J.TEXTURE0+h);let Z0=W.get(a);if(a.version!==Z0.__version||e===!0){$.activeTexture(J.TEXTURE0+h);let X0=p0.getPrimaries(p0.workingColorSpace),m=L.colorSpace===B8?null:p0.getPrimaries(L.colorSpace),n=L.colorSpace===B8||X0===m?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,n);let H0=L.isCompressedTexture||L.image[0].isCompressedTexture,_=L.image[0]&&L.image[0].isDataTexture,c=[];for(let F0=0;F0<6;F0++){if(!H0&&!_)c[F0]=z(L.image[F0],!0,Z.maxCubemapSize);else c[F0]=_?L.image[F0].image:L.image[F0];c[F0]=v0(L,c[F0])}let d=c[0],J0=K.convert(L.format,L.colorSpace),W0=K.convert(L.type),G0=w(L.internalFormat,J0,W0,L.normalized,L.colorSpace),P0=L.isVideoTexture!==!0,z0=Z0.__version===void 0||e===!0,E0=a.dataReady,I0=k(L,d);HJ(J.TEXTURE_CUBE_MAP,L);let x0;if(L.isDepthTexture){if(G0=R(L.format===e9,L.type),z0)if(P0)$.texStorage2D(J.TEXTURE_CUBE_MAP,1,G0,d.width,d.height);else for(let F0=0;F0<6;F0++)$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,d.width,d.height,0,J0,W0,null)}else if(H0){if(P0&&z0)$.texStorage2D(J.TEXTURE_CUBE_MAP,I0,G0,d.width,d.height);for(let F0=0;F0<6;F0++){x0=c[F0].mipmaps;for(let e0=0;e0<x0.length;e0++){let DJ=x0[e0];if(L.format!==f9)if(J0!==null)if(P0){if(E0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,0,0,DJ.width,DJ.height,J0,DJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,G0,DJ.width,DJ.height,0,DJ.data);else C0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(P0){if(E0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,0,0,DJ.width,DJ.height,J0,W0,DJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,G0,DJ.width,DJ.height,0,J0,W0,DJ.data)}}}else{if(x0=L.mipmaps,P0&&z0){if(x0.length>0)I0++;let F0=PJ(c[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,I0,G0,F0.width,F0.height)}for(let F0=0;F0<6;F0++)if(_){if(P0){if(E0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,c[F0].width,c[F0].height,J0,W0,c[F0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,c[F0].width,c[F0].height,0,J0,W0,c[F0].data);for(let e0=0;e0<x0.length;e0++){let P9=x0[e0].image[F0].image;if(P0){if(E0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,0,0,P9.width,P9.height,J0,W0,P9.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,G0,P9.width,P9.height,0,J0,W0,P9.data)}}else{if(P0){if(E0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,J0,W0,c[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,J0,W0,c[F0]);for(let e0=0;e0<x0.length;e0++){let DJ=x0[e0];if(P0){if(E0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,0,0,J0,W0,DJ.image[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,G0,J0,W0,DJ.image[F0])}}}if(P(L)&&L.mipmapsAutoUpdate===!0)B(J.TEXTURE_CUBE_MAP);if(Z0.__version=a.version,L.onUpdate)L.onUpdate(L)}C.__version=L.version}function NJ(C,L,h,e,a,Z0){let X0=K.convert(h.format,h.colorSpace),m=K.convert(h.type),n=w(h.internalFormat,X0,m,h.normalized,h.colorSpace),H0=W.get(L),_=W.get(h);if(_.__renderTarget=L,!H0.__hasExternalTextures){let c=Math.max(1,L.width>>Z0),d=Math.max(1,L.height>>Z0);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)$.texImage3D(a,Z0,n,c,d,L.depth,0,X0,m,null);else $.texImage2D(a,Z0,n,c,d,0,X0,m,null)}if($.bindFramebuffer(J.FRAMEBUFFER,C),WJ(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,a,_.__webglTexture,0,N0(L));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,a,_.__webglTexture,Z0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function CJ(C,L,h){if(J.bindRenderbuffer(J.RENDERBUFFER,C),L.depthBuffer){let e=L.depthTexture,a=e&&e.isDepthTexture?e.type:null,Z0=R(L.stencilBuffer,a),X0=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(WJ(L))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,N0(L),Z0,L.width,L.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,N0(L),Z0,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,L.width,L.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,C)}else{let e=L.textures;for(let a=0;a<e.length;a++){let Z0=e[a],X0=K.convert(Z0.format,Z0.colorSpace),m=K.convert(Z0.type),n=w(Z0.internalFormat,X0,m,Z0.normalized,Z0.colorSpace);if(WJ(L))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,N0(L),n,L.width,L.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,N0(L),n,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,n,L.width,L.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function bJ(C,L,h){let e=L.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,C),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let a=W.get(L.depthTexture);a.__renderTarget=L;let Z0=e?L.depthTexture.image[0]:L.depthTexture.image;if(!a.__webglTexture||Z0.width!==L.width||Z0.height!==L.height)Z0.width=L.width,Z0.height=L.height,L.depthTexture.needsUpdate=!0;if(e)V0(L.depthTexture,0);else D0(L.depthTexture,0);let X0=a.__webglTexture,m=N0(L),n=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+h:J.TEXTURE_2D,H0=L.depthTexture.format===e9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(L.depthTexture.format===o8)if(WJ(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,n,X0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,n,X0,0);else if(L.depthTexture.format===e9)if(WJ(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,n,X0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,n,X0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xJ(C){let L=W.get(C),h=C.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==C.depthTexture){let e=C.depthTexture;if(L.__depthDisposeCallback)L.__depthDisposeCallback();if(e){let a=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,e.removeEventListener("dispose",a)};e.addEventListener("dispose",a),L.__depthDisposeCallback=a}L.__boundDepthTexture=e}if(C.depthTexture&&!L.__autoAllocateDepthBuffer)if(h)for(let e=0;e<6;e++)bJ(L.__webglFramebuffer[e],C,e);else if(C.texture.mipmaps.length>0)bJ(L.__webglFramebuffer[0],C,0);else bJ(L.__webglFramebuffer,C,0);else if(h){L.__webglDepthbuffer=[];for(let e=0;e<6;e++)if($.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[e]),L.__webglDepthbuffer[e]===void 0)L.__webglDepthbuffer[e]=J.createRenderbuffer(),CJ(L.__webglDepthbuffer[e],C,!1);else{let a=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=L.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,Z0)}}else{if(C.texture.mipmaps.length>0)$.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer);if(L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=J.createRenderbuffer(),CJ(L.__webglDepthbuffer,C,!1);else{let a=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=L.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,Z0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function K9(C,L,h){let e=W.get(C);if(L!==void 0)NJ(e.__webglFramebuffer,C,C.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)xJ(C)}function S(C){let L=C.texture,h=W.get(C),e=W.get(L);C.addEventListener("dispose",p),j(C);let a=C.textures,Z0=C.isWebGLCubeRenderTarget===!0,X0=a.length>1;if(!X0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=L.version,H.memory.textures++}if(Z0){h.__webglFramebuffer=[];for(let m=0;m<6;m++)if(L.mipmaps.length>0){h.__webglFramebuffer[m]=[];for(let n=0;n<L.mipmaps.length;n++)h.__webglFramebuffer[m][n]=J.createFramebuffer()}else h.__webglFramebuffer[m]=J.createFramebuffer()}else{if(L.mipmaps.length>0){h.__webglFramebuffer=[];for(let m=0;m<L.mipmaps.length;m++)h.__webglFramebuffer[m]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(X0)for(let m=0,n=a.length;m<n;m++){let H0=W.get(a[m]);if(H0.__webglTexture===void 0)H0.__webglTexture=J.createTexture(),H.memory.textures++}if(C.samples>0&&WJ(C)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let m=0;m<a.length;m++){let n=a[m];h.__webglColorRenderbuffer[m]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[m]);let H0=K.convert(n.format,n.colorSpace),_=K.convert(n.type),c=w(n.internalFormat,H0,_,n.normalized,n.colorSpace,C.isXRRenderTarget===!0),d=N0(C);J.renderbufferStorageMultisample(J.RENDERBUFFER,d,c,C.width,C.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+m,J.RENDERBUFFER,h.__webglColorRenderbuffer[m])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),C.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),CJ(h.__webglDepthRenderbuffer,C,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Z0){$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),HJ(J.TEXTURE_CUBE_MAP,L);for(let m=0;m<6;m++)if(L.mipmaps.length>0)for(let n=0;n<L.mipmaps.length;n++)NJ(h.__webglFramebuffer[m][n],C,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,n);else NJ(h.__webglFramebuffer[m],C,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);if(P(L))B(J.TEXTURE_CUBE_MAP);else if(L.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,L.mipmaps.length-1);$.unbindTexture()}else if(X0){for(let m=0,n=a.length;m<n;m++){let H0=a[m],_=W.get(H0),c=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)c=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,_.__webglTexture),HJ(c,H0),NJ(h.__webglFramebuffer,C,H0,J.COLOR_ATTACHMENT0+m,c,0),P(H0))B(c)}$.unbindTexture()}else{let m=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)m=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(m,e.__webglTexture),HJ(m,L),L.mipmaps.length>0)for(let n=0;n<L.mipmaps.length;n++)NJ(h.__webglFramebuffer[n],C,L,J.COLOR_ATTACHMENT0,m,n);else NJ(h.__webglFramebuffer,C,L,J.COLOR_ATTACHMENT0,m,0);if(P(L))B(m);else if(L.mipmaps.length>0)J.texParameteri(m,J.TEXTURE_MAX_LEVEL,L.mipmaps.length-1);$.unbindTexture()}if(C.depthBuffer)xJ(C)}function H9(C){let L=C.textures;for(let h=0,e=L.length;h<e;h++){let a=L[h];if(P(a)&&a.mipmapsAutoUpdate===!0){let Z0=I(C),X0=W.get(a).__webglTexture;$.bindTexture(Z0,X0),B(Z0),$.unbindTexture()}}}let t0=[];function MJ(C){if(C.samples>0){if(WJ(C)===!1){let{textures:L,width:h,height:e}=C,a=J.COLOR_BUFFER_BIT,Z0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=W.get(C),m=L.length>1;if(m)for(let H0=0;H0<L.length;H0++)$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,null,0);if($.bindFramebuffer(J.READ_FRAMEBUFFER,X0.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer);for(let H0=0;H0<L.length;H0++){if(C.resolveDepthBuffer){if(C.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(m){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let _=W.get(L[H0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,_,0)}if(J.blitFramebuffer(0,0,h,e,0,0,h,e,a,J.NEAREST),X===!0){if(t0.length=0,t0.push(J.COLOR_ATTACHMENT0+H0),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)t0.push(Z0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,t0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),m)for(let H0=0;H0<L.length;H0++){$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let _=W.get(L[H0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,_,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&X){let L=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[L])}}}function N0(C){return Math.min(Z.maxSamples,C.samples)}function WJ(C){let L=W.get(C);return C.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function A0(C){let L=H.render.frame;if(G.get(C)!==L)G.set(C,L),C.update()}function v0(C,L){let{colorSpace:h,format:e,type:a}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return L;if(h!==iJ&&h!==B8)if(p0.getTransfer(h)===$J){if(e!==f9||a!==E9)C0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else j0("WebGLTextures: Unsupported texture color space:",h);return L}function PJ(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)U.width=C.naturalWidth||C.width,U.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)U.width=C.displayWidth,U.height=C.displayHeight;else U.width=C.width,U.height=C.height;return U}this.allocateTextureUnit=i,this.resetTextureUnits=r,this.getTextureUnits=$0,this.setTextureUnits=k0,this.setTexture2D=D0,this.setTexture2DArray=w0,this.setTexture3D=_0,this.setTextureCube=V0,this.rebindTextures=K9,this.setupRenderTarget=S,this.updateRenderTargetMipmap=H9,this.updateMultisampleRenderTarget=MJ,this.setupDepthRenderbuffer=xJ,this.setupFrameBufferTexture=NJ,this.useMultisampledRTT=WJ,this.dispose=s}function vN(J,Q){function $(W,Z=B8){let K,H=p0.getTransfer(Z);if(W===E9)return J.UNSIGNED_BYTE;if(W===aQ)return J.UNSIGNED_SHORT_4_4_4_4;if(W===rQ)return J.UNSIGNED_SHORT_5_5_5_1;if(W===ZK)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===KK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===$K)return J.BYTE;if(W===WK)return J.SHORT;if(W===B7)return J.UNSIGNED_SHORT;if(W===oQ)return J.INT;if(W===t9)return J.UNSIGNED_INT;if(W===h9)return J.FLOAT;if(W===M9)return J.HALF_FLOAT;if(W===HK)return J.ALPHA;if(W===YK)return J.RGB;if(W===f9)return J.RGBA;if(W===o8)return J.DEPTH_COMPONENT;if(W===e9)return J.DEPTH_STENCIL;if(W===XK)return J.RED;if(W===tQ)return J.RED_INTEGER;if(W===k8)return J.RG;if(W===eQ)return J.RG_INTEGER;if(W===J$)return J.RGBA_INTEGER;if(W===z6||W===C6||W===P6||W===I6)if(H===$J)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===z6)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===C6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===P6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===I6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===z6)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===C6)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===P6)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===I6)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===Q$||W===$$||W===W$||W===Z$)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===Q$)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===$$)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===W$)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===Z$)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===K$||W===H$||W===Y$||W===X$||W===U$||W===w6||W===G$)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===K$||W===H$)return H===$J?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===Y$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===X$)return K.COMPRESSED_R11_EAC;if(W===U$)return K.COMPRESSED_SIGNED_R11_EAC;if(W===w6)return K.COMPRESSED_RG11_EAC;if(W===G$)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===N$||W===q$||W===E$||W===F$||W===O$||W===R$||W===L$||W===M$||W===D$||W===V$||W===k$||W===B$||W===z$||W===C$)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===N$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===q$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===E$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===F$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===O$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===R$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===L$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===M$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===D$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===V$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===k$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===B$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===z$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===C$)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===P$||W===I$||W===w$)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===P$)return H===$J?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===I$)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===w$)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===_$||W===A$||W===_6||W===T$)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===_$)return K.COMPRESSED_RED_RGTC1_EXT;if(W===A$)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===_6)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===T$)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===V8)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var hN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fN=`
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

}`;class NH{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new u6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new x9({vertexShader:hN,fragmentShader:fN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new mJ(new j7(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qH extends V9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",Y=1,X=null,U=null,G=null,N=null,q=null,F=null,M=typeof XRWebGLBinding<"u",V=new NH,E={},O=Q.getContextAttributes(),z=null,P=null,B=[],I=[],w=new T0,R=null,k=null,j=new BJ;j.viewport=new JJ;let l=new BJ;l.viewport=new JJ;let y=[j,l],p=new ZW,t=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let Q0=B[i];if(Q0===void 0)Q0=new P7,B[i]=Q0;return Q0.getTargetRaySpace()},this.getControllerGrip=function(i){let Q0=B[i];if(Q0===void 0)Q0=new P7,B[i]=Q0;return Q0.getGripSpace()},this.getHand=function(i){let Q0=B[i];if(Q0===void 0)Q0=new P7,B[i]=Q0;return Q0.getHandSpace()};function s(i){let Q0=I.indexOf(i.inputSource);if(Q0===-1)return;let D0=B[Q0];if(D0!==void 0)D0.update(i.inputSource,i.frame,X||K),D0.dispatchEvent({type:i.type,data:i.inputSource})}function o(){W.removeEventListener("select",s),W.removeEventListener("selectstart",s),W.removeEventListener("selectend",s),W.removeEventListener("squeeze",s),W.removeEventListener("squeezestart",s),W.removeEventListener("squeezeend",s),W.removeEventListener("end",o),W.removeEventListener("inputsourceschange",x);for(let i=0;i<B.length;i++){let Q0=I[i];if(Q0===null)continue;I[i]=null,B[i].disconnect(Q0)}t=null,A=null,V.reset();for(let i in E)delete E[i];if(J.setRenderTarget(z),q=null,N=null,G=null,W=null,P=null,k0.stop(),$.isPresenting=!1,J.setPixelRatio(R),J.setSize(w.width,w.height,!1),k!==null){let i=k.camera;i.fov=k.fov,i.zoom=k.zoom,i.updateProjectionMatrix(),k=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(Z=i,$.isPresenting===!0)C0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(H=i,$.isPresenting===!0)C0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(i){X=i},this.getBaseLayer=function(){return N!==null?N:q},this.getBinding=function(){if(G===null&&M)G=new XRWebGLBinding(W,Q);return G},this.getFrame=function(){return F},this.getSession=function(){return W},this.setSession=async function(i){if(W=i,W!==null){if(z=J.getRenderTarget(),W.addEventListener("select",s),W.addEventListener("selectstart",s),W.addEventListener("selectend",s),W.addEventListener("squeeze",s),W.addEventListener("squeezestart",s),W.addEventListener("squeezeend",s),W.addEventListener("end",o),W.addEventListener("inputsourceschange",x),O.xrCompatible!==!0)await Q.makeXRCompatible();if(R=J.getPixelRatio(),J.getSize(w),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let D0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:Z};q=new XRWebGLLayer(W,Q,D0),W.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),P=new $9(q.framebufferWidth,q.framebufferHeight,{format:f9,type:E9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1,storeMultisampledDepthBuffer:q.ignoreDepthValues===!1,storeMultisampledStencilBuffer:q.ignoreDepthValues===!1})}else{let D0=null,w0=null,_0=null;if(O.depth)_0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,D0=O.stencil?e9:o8,w0=O.stencil?V8:t9;let V0={colorFormat:Q.RGBA8,depthFormat:_0,scaleFactor:Z};G=this.getBinding(),N=G.createProjectionLayer(V0),W.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),P=new $9(N.textureWidth,N.textureHeight,{format:f9,type:E9,depthTexture:new Q8(N.textureWidth,N.textureHeight,w0,void 0,void 0,void 0,void 0,void 0,void 0,D0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await W.requestReferenceSpace(H),k0.setContext(W),k0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return V.getDepthTexture()};function x(i){for(let Q0=0;Q0<i.removed.length;Q0++){let D0=i.removed[Q0],w0=I.indexOf(D0);if(w0>=0)I[w0]=null,B[w0].disconnect(D0)}for(let Q0=0;Q0<i.added.length;Q0++){let D0=i.added[Q0],w0=I.indexOf(D0);if(w0===-1){for(let V0=0;V0<B.length;V0++)if(V0>=I.length){I.push(D0),w0=V0;break}else if(I[V0]===null){I[V0]=D0,w0=V0;break}if(w0===-1)break}let _0=B[w0];if(_0)_0.connect(D0)}}function K0(i,Q0){if(Q0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices(Q0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(W===null)return;let{near:Q0,far:D0}=i;if(V.texture!==null){if(V.depthNear>0)Q0=V.depthNear;if(V.depthFar>0)D0=V.depthFar}if(p.near=l.near=j.near=Q0,p.far=l.far=j.far=D0,t!==p.near||A!==p.far)W.updateRenderState({depthNear:p.near,depthFar:p.far}),t=p.near,A=p.far;p.layers.mask=i.layers.mask|6,j.layers.mask=p.layers.mask&-5,l.layers.mask=p.layers.mask&-3;let w0=i.parent,_0=p.cameras;K0(p,w0);for(let V0=0;V0<_0.length;V0++)K0(_0[V0],w0);if(p.projectionMatrix.copy(j.projectionMatrix),p.projectionMatrixInverse.copy(j.projectionMatrixInverse),k===null&&i.isPerspectiveCamera)k={camera:i,fov:i.fov,zoom:i.zoom};u(i,p,w0)};function u(i,Q0,D0){if(D0===null)i.matrix.copy(Q0.matrixWorld);else i.matrix.copy(D0.matrixWorld),i.matrix.invert(),i.matrix.multiply(Q0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy(Q0.projectionMatrix),i.projectionMatrixInverse.copy(Q0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=R8*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return p},this.getFoveation=function(){if(N===null&&q===null)return;return Y},this.setFoveation=function(i){if(Y=i,N!==null)N.fixedFoveation=i;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=i},this.hasDepthSensing=function(){return V.texture!==null},this.getDepthSensingMesh=function(){return V.getMesh(p)},this.getCameraTexture=function(i){return E[i]};let r=null;function $0(i,Q0){if(U=Q0.getViewerPose(X||K),F=Q0,U!==null){let D0=U.views;if(q!==null)J.setRenderTargetFramebuffer(P,q.framebuffer),J.setRenderTarget(P);let w0=!1;if(D0.length!==p.cameras.length)p.cameras.length=0,w0=!0;for(let d0=0;d0<D0.length;d0++){let b0=D0[d0],HJ=null;if(q!==null)HJ=q.getViewport(b0);else{let UJ=G.getViewSubImage(N,b0);if(HJ=UJ.viewport,d0===0)J.setRenderTargetTextures(P,UJ.colorTexture,UJ.depthStencilTexture),J.setRenderTarget(P)}let n0=y[d0];if(n0===void 0)n0=new BJ,n0.layers.enable(d0),n0.viewport=new JJ,y[d0]=n0;if(n0.matrix.fromArray(b0.transform.matrix),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.projectionMatrix.fromArray(b0.projectionMatrix),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert(),n0.viewport.set(HJ.x,HJ.y,HJ.width,HJ.height),d0===0)p.matrix.copy(n0.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale);if(w0===!0)p.cameras.push(n0)}let _0=W.enabledFeatures;if(_0&&_0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&M){G=$.getBinding();let d0=G.getDepthInformation(D0[0]);if(d0&&d0.isValid&&d0.texture)V.init(d0,W.renderState)}if(_0&&_0.includes("camera-access")&&M){J.state.unbindTexture(),G=$.getBinding();for(let d0=0;d0<D0.length;d0++){let b0=D0[d0].camera;if(b0){let HJ=E[b0];if(!HJ)HJ=new u6,E[b0]=HJ;let n0=G.getCameraImage(b0);HJ.sourceTexture=n0}}}}for(let D0=0;D0<B.length;D0++){let w0=I[D0],_0=B[D0];if(w0!==null&&_0!==void 0)_0.update(w0,Q0,X||K)}if(r)r(i,Q0);if(Q0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Q0});F=null}let k0=new aK;k0.setAnimationLoop($0),this.setAnimationLoop=function(i){r=i},this.dispose=function(){}}}var bN=new f0,EH=new y0;EH.set(-1,0,0,0,1,0,0,0,1);function xN(J,Q){function $(E,O){if(E.matrixAutoUpdate===!0)E.updateMatrix();O.value.copy(E.matrix)}function W(E,O){if(O.color.getRGB(E.fogColor.value,s$(J)),O.isFog)E.fogNear.value=O.near,E.fogFar.value=O.far;else if(O.isFogExp2)E.fogDensity.value=O.density}function Z(E,O,z,P,B){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)K(E,O);else if(O.isMeshLambertMaterial){if(K(E,O),O.envMap)E.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)K(E,O),N(E,O);else if(O.isMeshPhongMaterial){if(K(E,O),G(E,O),O.envMap)E.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(K(E,O),q(E,O),O.isMeshPhysicalMaterial)F(E,O,B)}else if(O.isMeshMatcapMaterial)K(E,O),M(E,O);else if(O.isMeshDepthMaterial)K(E,O);else if(O.isMeshDistanceMaterial)K(E,O),V(E,O);else if(O.isMeshNormalMaterial)K(E,O);else if(O.isLineBasicMaterial){if(H(E,O),O.isLineDashedMaterial)Y(E,O)}else if(O.isPointsMaterial)X(E,O,z,P);else if(O.isSpriteMaterial)U(E,O);else if(O.isShadowMaterial)E.color.value.copy(O.color),E.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function K(E,O){if(E.opacity.value=O.opacity,O.color)E.diffuse.value.copy(O.color);if(O.emissive)E.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)E.map.value=O.map,$(O.map,E.mapTransform);if(O.alphaMap)E.alphaMap.value=O.alphaMap,$(O.alphaMap,E.alphaMapTransform);if(O.bumpMap){if(E.bumpMap.value=O.bumpMap,$(O.bumpMap,E.bumpMapTransform),E.bumpScale.value=O.bumpScale,O.side===pJ)E.bumpScale.value*=-1}if(O.normalMap){if(E.normalMap.value=O.normalMap,$(O.normalMap,E.normalMapTransform),E.normalScale.value.copy(O.normalScale),O.side===pJ)E.normalScale.value.negate()}if(O.displacementMap)E.displacementMap.value=O.displacementMap,$(O.displacementMap,E.displacementMapTransform),E.displacementScale.value=O.displacementScale,E.displacementBias.value=O.displacementBias;if(O.emissiveMap)E.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,E.emissiveMapTransform);if(O.specularMap)E.specularMap.value=O.specularMap,$(O.specularMap,E.specularMapTransform);if(O.alphaTest>0)E.alphaTest.value=O.alphaTest;let z=Q.get(O),P=z.envMap,B=z.envMapRotation;if(P){if(E.envMap.value=P,E.envMapRotation.value.setFromMatrix4(bN.makeRotationFromEuler(B)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(EH);E.reflectivity.value=O.reflectivity,E.ior.value=O.ior,E.refractionRatio.value=O.refractionRatio}if(O.lightMap)E.lightMap.value=O.lightMap,E.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,E.lightMapTransform);if(O.aoMap)E.aoMap.value=O.aoMap,E.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,E.aoMapTransform)}function H(E,O){if(E.diffuse.value.copy(O.color),E.opacity.value=O.opacity,O.map)E.map.value=O.map,$(O.map,E.mapTransform)}function Y(E,O){E.dashSize.value=O.dashSize,E.totalSize.value=O.dashSize+O.gapSize,E.scale.value=O.scale}function X(E,O,z,P){if(E.diffuse.value.copy(O.color),E.opacity.value=O.opacity,E.size.value=O.size*z,E.scale.value=P*0.5,O.map)E.map.value=O.map,$(O.map,E.uvTransform);if(O.alphaMap)E.alphaMap.value=O.alphaMap,$(O.alphaMap,E.alphaMapTransform);if(O.alphaTest>0)E.alphaTest.value=O.alphaTest}function U(E,O){if(E.diffuse.value.copy(O.color),E.opacity.value=O.opacity,E.rotation.value=O.rotation,O.map)E.map.value=O.map,$(O.map,E.mapTransform);if(O.alphaMap)E.alphaMap.value=O.alphaMap,$(O.alphaMap,E.alphaMapTransform);if(O.alphaTest>0)E.alphaTest.value=O.alphaTest}function G(E,O){E.specular.value.copy(O.specular),E.shininess.value=Math.max(O.shininess,0.0001)}function N(E,O){if(O.gradientMap)E.gradientMap.value=O.gradientMap}function q(E,O){if(E.metalness.value=O.metalness,O.metalnessMap)E.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=O.roughness,O.roughnessMap)E.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,E.roughnessMapTransform);if(O.envMap)E.envMapIntensity.value=O.envMapIntensity}function F(E,O,z){if(E.ior.value=O.ior,O.diffuseRoughness>0){if(E.diffuseRoughness.value=O.diffuseRoughness,O.diffuseRoughnessMap)E.diffuseRoughnessMap.value=O.diffuseRoughnessMap,$(O.diffuseRoughnessMap,E.diffuseRoughnessMapTransform)}if(O.sheen>0){if(E.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),E.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)E.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,E.sheenColorMapTransform);if(O.sheenRoughnessMap)E.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(E.clearcoat.value=O.clearcoat,E.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)E.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,E.clearcoatMapTransform);if(O.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(E.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===pJ)E.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)E.dispersion.value=O.dispersion;if(O.retroreflectivity>0)E.retroreflectivity.value=O.retroreflectivity;if(O.iridescence>0){if(E.iridescence.value=O.iridescence,E.iridescenceIOR.value=O.iridescenceIOR,E.iridescenceThicknessMinimum.value=O.iridescenceThicknessMinimum,E.iridescenceThicknessMaximum.value=O.iridescenceThicknessMaximum,O.iridescenceMap)E.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,E.iridescenceMapTransform);if(O.iridescenceThicknessMap)E.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(O.transmission>0){if(E.transmission.value=O.transmission,E.transmissionSamplerMap.value=z.texture,E.transmissionSamplerSize.value.set(z.width,z.height),O.transmissionMap)E.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=O.thickness,O.thicknessMap)E.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=O.attenuationDistance,E.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(E.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)E.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=O.specularIntensity,E.specularColor.value.copy(O.specularColor),O.specularColorMap)E.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,E.specularColorMapTransform);if(O.specularIntensityMap)E.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,E.specularIntensityMapTransform)}function M(E,O){if(O.matcap)E.matcap.value=O.matcap}function V(E,O){let z=Q.get(O).light;E.referencePosition.value.setFromMatrixPosition(z.matrixWorld),E.nearDistance.value=z.shadow.camera.near,E.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function gN(J,Q,$,W){let Z={},K={};function H(z,P){let B=P.program;W.uniformBlockBinding(z,B,Z[z.id])}function Y(z,P){let B=Z[z.id];if(B===void 0)M(z),B=X(z),Z[z.id]=B,z.addEventListener("dispose",E);let I=P.program;W.updateUBOMapping(z,I);let w=Q.render.frame;if(K[z.id]!==w)U(z),K[z.id]=w}function X(z){let P=J.createBuffer(),B=z.__size,I=z.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,B,I),J.bindBuffer(J.UNIFORM_BUFFER,null),P}function U(z){let P=Z[z.id],B=z.uniforms,I=z.__cache;J.bindBuffer(J.UNIFORM_BUFFER,P);for(let w=0,R=B.length;w<R;w++){let k=B[w];if(Array.isArray(k))for(let j=0,l=k.length;j<l;j++)G(k[j],w,j,I);else G(k,w,0,I)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function G(z,P,B,I){if(q(z,P,B,I)===!0){let{__offset:w,value:R}=z;if(Array.isArray(R)){let k=0;for(let j=0;j<R.length;j++){let l=R[j],y=V(l,!0);N(l,z.__data,k),k+=y.storage/Float32Array.BYTES_PER_ELEMENT}}else N(R,z.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,w,z.__data)}}function N(z,P,B){if(typeof z==="number"||typeof z==="boolean")P[B]=z;else if(z.isMatrix3)P[B]=z.elements[0],P[B+1]=z.elements[1],P[B+2]=z.elements[2],P[B+3]=0,P[B+4]=z.elements[3],P[B+5]=z.elements[4],P[B+6]=z.elements[5],P[B+7]=0,P[B+8]=z.elements[6],P[B+9]=z.elements[7],P[B+10]=z.elements[8],P[B+11]=0;else if(ArrayBuffer.isView(z))P.set(z.subarray(0,P.length-B),B);else z.toArray(P,B)}function q(z,P,B,I){let w=z.value,R=P+"_"+B;if(Array.isArray(w)){if(I[R]===void 0)I[R]=[];let k=I[R],j=!1;for(let l=0;l<w.length;l++)if(F(w[l],k,l)===!0)j=!0;return j}return F(w,I,R)}function F(z,P,B){if(P[B]===void 0){if(typeof z==="number"||typeof z==="boolean")P[B]=z;else if(ArrayBuffer.isView(z))P[B]=z.slice();else P[B]=z.clone();return!0}else{let I=P[B];if(typeof z==="number"||typeof z==="boolean"){if(I!==z)return P[B]=z,!0}else if(ArrayBuffer.isView(z))return!0;else if(I.equals(z)===!1)return I.copy(z),!0}return!1}function M(z){let P=z.uniforms,B=0,I=16;for(let R=0,k=P.length;R<k;R++){let j=Array.isArray(P[R])?P[R]:[P[R]];for(let l=0,y=j.length;l<y;l++){let p=j[l],t=Array.isArray(p.value)?p.value:[p.value],A=Array.isArray(P[R])||Array.isArray(p.value),s=B;for(let x=0,K0=t.length;x<K0;x++){let u=t[x],r=V(u,A),$0=B%I,k0=$0%r.boundary,i=$0+k0;if(B+=k0,i!==0&&I-i<r.storage)B+=I-i;if(x===0)s=B;B+=r.storage}let o=p.type==="int"?Int32Array:p.type==="uint"?Uint32Array:Float32Array;p.__data=new o((B-s)/Float32Array.BYTES_PER_ELEMENT),p.__offset=s}}let w=B%I;if(w>0)B+=I-w;return z.__size=B,z.__cache={},this}function V(z,P){let B={boundary:0,storage:0};if(typeof z==="number"||typeof z==="boolean")B.boundary=4,B.storage=4;else if(z.isVector2)B.boundary=8,B.storage=8;else if(z.isVector3||z.isColor)B.boundary=16,B.storage=12;else if(z.isVector4)B.boundary=16,B.storage=16;else if(z.isMatrix3)B.boundary=16,B.storage=48;else if(z.isMatrix4)B.boundary=16,B.storage=64;else if(z.isTexture)C0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(z))B.boundary=16,B.storage=z.byteLength;else C0("WebGLRenderer: Unsupported uniform value type.",z);if(P===!0)B.boundary=16,B.storage=Math.ceil(B.storage/16)*16;return B}function E(z){let P=z.target;P.removeEventListener("dispose",E),J.deleteBuffer(Z[P.id]),delete Z[P.id],delete K[P.id]}function O(){for(let z in Z)J.deleteBuffer(Z[z]);Z={},K={}}return{bind:H,update:Y,dispose:O}}var pN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),B9=null;function lN(){if(B9===null)B9=new _7(pN,16,16,k8,M9),B9.name="DFG_LUT",B9.minFilter=SJ,B9.magFilter=SJ,B9.wrapS=s8,B9.wrapT=s8,B9.generateMipmaps=!1,B9.needsUpdate=!0;return B9}class NW{constructor(J={}){let{canvas:Q=OK(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:N=!1,outputBufferType:q=E9}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=K;let M=q,V=new Set([J$,eQ,tQ]),E=new Set([E9,t9,B7,V8,aQ,rQ]),O=new Uint32Array(4),z=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]},B=null,I=null,w=[],R=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=L9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,l=!1,y=null,p=null,t=null,A=null;this._outputColorSpace=D9;let s=0,o=0,x=null,K0=-1,u=null,r=new JJ,$0=new JJ,k0=null,i=new S0(0),Q0=0,D0=Q.width,w0=Q.height,_0=1,V0=null,r0=null,d0=new JJ(0,0,D0,w0),b0=new JJ(0,0,D0,w0),HJ=!1,n0=new L8,UJ=new x6,GJ=!1,fJ=!1,cJ=new f0,NJ=new v,CJ=new JJ,bJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xJ=!1;function K9(){return x===null?_0:1}let S=$;function H9(D,T){return Q.getContext(D,T)}let t0,MJ,N0,WJ,A0,v0,PJ,C,L,h,e,a,Z0,X0,m,n,H0,_,c,d,J0,W0,G0;try{let D={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${BZ}`);if(Q.addEventListener("webglcontextlost",E0,!1),Q.addEventListener("webglcontextrestored",I0,!1),Q.addEventListener("webglcontextcreationerror",x0,!1),S===null){if(S=H9("webgl2",D),S===null)if(H9("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}P0()}catch(D){throw Q.removeEventListener("webglcontextlost",E0,!1),Q.removeEventListener("webglcontextrestored",I0,!1),Q.removeEventListener("webglcontextcreationerror",x0,!1),j0("WebGLRenderer: "+D.message),D}function P0(){if(t0=new tG(S),t0.init(),J0=new vN(S,t0),MJ=new lG(S,t0,J,J0),N0=new jN(S,t0),MJ.reversedDepthBuffer&&N)N0.buffers.depth.setReversed(!0);p=S.createFramebuffer(),t=S.createFramebuffer(),A=S.createFramebuffer(),WJ=new Q5(S),A0=new MN,v0=new yN(S,t0,N0,A0,MJ,J0,WJ),PJ=new rG(j),C=new WX(S),W0=new gG(S,C),L=new eG(S,C,WJ,W0),h=new W5(S,L,C,W0,WJ),_=new $5(S,MJ,v0),m=new mG(A0),e=new LN(j,PJ,t0,MJ,W0,m),a=new xN(j,A0),Z0=new VN,X0=new IN(t0),H0=new xG(j,PJ,N0,h,F,Y),n=new SN(j,h,MJ),G0=new gN(S,WJ,MJ,N0),c=new pG(S,t0,WJ),d=new J5(S,t0,WJ),WJ.programs=e.programs,j.capabilities=MJ,j.extensions=t0,j.properties=A0,j.renderLists=Z0,j.shadowMap=n,j.state=N0,j.info=WJ}if(M!==E9)k=new K5(M,Q.width,Q.height,H,W,Z);let z0=new qH(j,S);this.xr=z0,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let D=t0.get("WEBGL_lose_context");if(D)D.loseContext()},this.forceContextRestore=function(){let D=t0.get("WEBGL_lose_context");if(D)D.restoreContext()},this.getPixelRatio=function(){return _0},this.setPixelRatio=function(D){if(D===void 0)return;_0=D,this.setSize(D0,w0,!1)},this.getSize=function(D){return D.set(D0,w0)},this.setSize=function(D,T,g=!0){if(z0.isPresenting){C0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(D0=D,w0=T,Q.width=Math.floor(D*_0),Q.height=Math.floor(T*_0),g===!0)Q.style.width=D+"px",Q.style.height=T+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,D,T)},this.getDrawingBufferSize=function(D){return D.set(D0*_0,w0*_0).floor()},this.setDrawingBufferSize=function(D,T,g){D0=D,w0=T,_0=g,Q.width=Math.floor(D*g),Q.height=Math.floor(T*g),this.setViewport(0,0,D,T)},this.setEffects=function(D){if(M===E9){j0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let T=0;T<D.length;T++)if(D[T].isOutputPass===!0){C0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(r)},this.getViewport=function(D){return D.copy(d0)},this.setViewport=function(D,T,g,f){if(D.isVector4)d0.set(D.x,D.y,D.z,D.w);else d0.set(D,T,g,f);N0.viewport(r.copy(d0).multiplyScalar(K9()).round())},this.getScissor=function(D){return D.copy(b0)},this.setScissor=function(D,T,g,f){if(D.isVector4)b0.set(D.x,D.y,D.z,D.w);else b0.set(D,T,g,f);N0.scissor($0.copy(b0).multiplyScalar(K9()).round())},this.getScissorTest=function(){return HJ},this.setScissorTest=function(D){N0.setScissorTest(HJ=D)},this.setOpaqueSort=function(D){V0=D},this.setTransparentSort=function(D){r0=D},this.getClearColor=function(D){return D.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor(...arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha(...arguments)},this.clear=function(D=!0,T=!0,g=!0){let f=0;if(D){let b=!1;if(x!==null){let U0=x.texture.format;b=V.has(U0)}if(b){let U0=x.texture.type,R0=E.has(U0),Y0=H0.getClearColor(),O0=H0.getClearAlpha(),B0=Y0.r,h0=Y0.g,u0=Y0.b;if(R0)O[0]=B0,O[1]=h0,O[2]=u0,O[3]=O0,S.clearBufferuiv(S.COLOR,0,O);else z[0]=B0,z[1]=h0,z[2]=u0,z[3]=O0,S.clearBufferiv(S.COLOR,0,z)}else f|=S.COLOR_BUFFER_BIT}if(T)f|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(g)f|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(f!==0)S.clear(f)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),y=D},this.dispose=function(){Q.removeEventListener("webglcontextlost",E0,!1),Q.removeEventListener("webglcontextrestored",I0,!1),Q.removeEventListener("webglcontextcreationerror",x0,!1),H0.dispose(),Z0.dispose(),X0.dispose(),v0.dispose(),A0.dispose(),PJ.dispose(),h.dispose(),L.dispose(),W0.dispose(),G0.dispose(),e.dispose(),z0.dispose(),z0.removeEventListener("sessionstart",IW),z0.removeEventListener("sessionend",wW),X8.stop()};function E0(D){D.preventDefault(),M7("WebGLRenderer: Context Lost."),l=!0}function I0(){M7("WebGLRenderer: Context Restored."),l=!1;let D=WJ.autoReset,T=n.enabled,g=n.autoUpdate,f=n.needsUpdate,b=n.type;P0(),WJ.autoReset=D,n.enabled=T,n.autoUpdate=g,n.needsUpdate=f,n.type=b}function x0(D){j0("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function F0(D){let T=D.target;T.removeEventListener("dispose",F0),e0(T)}function e0(D){DJ(D),A0.remove(D)}function DJ(D){let T=A0.get(D).programs;if(T!==void 0){if(T.forEach(function(g){e.releaseProgram(g)}),D.isShaderMaterial)e.releaseShaderCache(D)}}this.renderBufferDirect=function(D,T,g,f,b,U0){if(T===null)T=bJ;let R0=b.isMesh&&b.matrixWorld.determinantAffine()<0,Y0=tH(D,T,g,f,b);N0.setMaterial(f,R0);let O0=g.index,B0=1;if(f.wireframe===!0){if(O0=L.getWireframeAttribute(g),O0===void 0)return;B0=2}let h0=g.drawRange,u0=g.attributes.position,L0=h0.start*B0,c0=(h0.start+h0.count)*B0;if(U0!==null)L0=Math.max(L0,U0.start*B0),c0=Math.min(c0,(U0.start+U0.count)*B0);if(O0!==null)L0=Math.max(L0,0),c0=Math.min(c0,O0.count);else if(u0!==void 0&&u0!==null)L0=Math.max(L0,0),c0=Math.min(c0,u0.count);let qJ=c0-L0;if(qJ<0||qJ===1/0)return;W0.setup(b,f,Y0,g,O0);let ZJ,QJ=c;if(O0!==null)ZJ=C.get(O0),QJ=d,QJ.setIndex(ZJ);if(b.isMesh)if(f.wireframe===!0)N0.setLineWidth(f.wireframeLinewidth*K9()),QJ.setMode(S.LINES);else QJ.setMode(S.TRIANGLES);else if(b.isLine){let IJ=f.linewidth;if(IJ===void 0)IJ=1;if(N0.setLineWidth(IJ*K9()),b.isLineSegments)QJ.setMode(S.LINES);else if(b.isLineLoop)QJ.setMode(S.LINE_LOOP);else QJ.setMode(S.LINE_STRIP)}else if(b.isPoints)QJ.setMode(S.POINTS);else if(b.isSprite)QJ.setMode(S.TRIANGLES);if(b.isBatchedMesh)if(!t0.get("WEBGL_multi_draw")){let{_multiDrawStarts:IJ,_multiDrawCounts:M0,_multiDrawCount:yJ}=b,i0=O0?C.get(O0).bytesPerElement:1,U8=A0.get(f).currentProgram.getUniforms();for(let wJ=0;wJ<yJ;wJ++)U8.setValue(S,"_gl_DrawID",wJ),QJ.render(IJ[wJ]/i0,M0[wJ])}else QJ.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else if(b.isInstancedMesh)QJ.renderInstances(L0,qJ,b.count);else if(g.isInstancedBufferGeometry){let IJ=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,M0=Math.min(g.instanceCount,IJ);QJ.renderInstances(L0,qJ,M0)}else QJ.render(L0,qJ)};function P9(D,T,g,f){if(y!==null&&D.isNodeMaterial)y.setObject(f,D);if(GJ===!0)m.setState(D,g,!1);if(D.transparent===!0&&D.side===Q9&&D.forceSinglePass===!1)D.side=pJ,D.needsUpdate=!0,H7(D,T,f),D.side=r9,D.needsUpdate=!0,H7(D,T,f),D.side=Q9;else H7(D,T,f)}this.compile=function(D,T,g=null){if(g===null)g=D;if(y!==null)y.renderStart(D,T,g);if(I=X0.get(g),I.init(T),R.push(I),g.traverseVisible(function(b){if(b.isLight&&b.layers.test(T.layers)){if(I.pushLight(b),b.castShadow)I.pushShadow(b)}}),D!==g)D.traverseVisible(function(b){if(b.isLight&&b.layers.test(T.layers)){if(I.pushLight(b),b.castShadow)I.pushShadow(b)}});if(I.setupLights(),y!==null)y.updateLights(I.state.lightsArray);if(fJ=this.localClippingEnabled,GJ=m.init(this.clippingPlanes,fJ),GJ===!0)m.setGlobalState(this.clippingPlanes,T);if(y!==null)n.render(I.state.shadowsArray,g,T);let f=new Set;if(D.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let U0=b.material;if(U0)if(Array.isArray(U0))for(let R0=0;R0<U0.length;R0++){let Y0=U0[R0];P9(Y0,g,T,b),f.add(Y0)}else P9(U0,g,T,b),f.add(U0)}),I=R.pop(),y!==null)y.renderEnd();return f},this.compileAsync=function(D,T,g=null){let f=this.compile(D,T,g);return new Promise((b)=>{function U0(){if(f.forEach(function(R0){let O0=A0.get(R0).currentProgram;if(O0===void 0||O0.isReady())f.delete(R0)}),f.size===0){b(D);return}setTimeout(U0,10)}if(t0.get("KHR_parallel_shader_compile")!==null)U0();else setTimeout(U0,10)})};let GQ=null;function aH(D){if(GQ)GQ(D)}function IW(){X8.stop()}function wW(){X8.start()}let X8=new aK;if(X8.setAnimationLoop(aH),typeof self<"u")X8.setContext(self);this.setAnimationLoop=function(D){GQ=D,z0.setAnimationLoop(D),D===null?X8.stop():X8.start()},z0.addEventListener("sessionstart",IW),z0.addEventListener("sessionend",wW),this.render=function(D,T){if(T!==void 0&&T.isCamera!==!0){j0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(y!==null)y.renderStart(D,T);let g=z0.enabled===!0&&z0.isPresenting===!0,f=k!==null&&(x===null||g)&&k.begin(j,x);if(D.matrixWorldAutoUpdate===!0)D.updateMatrixWorld();if(T.parent===null&&T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(z0.enabled===!0&&z0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(z0.cameraAutoUpdate===!0)z0.updateCamera(T);T=z0.getCamera()}if(D.isScene===!0)D.onBeforeRender(j,D,T,x);if(I=X0.get(D,R.length),I.init(T),I.state.textureUnits=v0.getTextureUnits(),R.push(I),cJ.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera)UJ.setFromArrayCamera(T);else n0.setFromProjectionMatrix(cJ,g$,T.reversedDepth);if(fJ=this.localClippingEnabled,GJ=m.init(this.clippingPlanes,fJ),B=Z0.get(D,w.length),B.init(),w.push(B),this.info.render.frame++,z0.enabled===!0&&z0.isPresenting===!0){let R0=j.xr.getDepthSensingMesh();if(R0!==null)NQ(R0,T,-1/0,j.sortObjects)}if(NQ(D,T,0,j.sortObjects),B.finish(),y!==null)y.updateLights(I.state.lightsArray);if(j.sortObjects===!0)B.sort(V0,r0);if(xJ=z0.enabled===!1||z0.isPresenting===!1||z0.hasDepthSensing()===!1,xJ)H0.addToRenderList(B,D);if(this.info.autoReset===!0)this.info.reset();if(GJ===!0)m.beginShadows();let b=I.state.shadowsArray;if(n.render(b,D,T),GJ===!0)m.endShadows();if((f&&k.hasRenderPass())===!1){let{opaque:R0,transmissive:Y0}=B;if(I.setupLights(),T.isArrayCamera){let O0=T.cameras;if(Y0.length>0)for(let B0=0,h0=O0.length;B0<h0;B0++){let u0=O0[B0];AW(R0,Y0,D,u0)}if(xJ)H0.render(D);for(let B0=0,h0=O0.length;B0<h0;B0++){let u0=O0[B0];_W(B,D,u0,u0.viewport)}}else{if(Y0.length>0)AW(R0,Y0,D,T);if(xJ)H0.render(D);_W(B,D,T)}}if(x!==null&&o===0)v0.updateMultisampleRenderTarget(x),v0.updateRenderTargetMipmap(x);if(f)k.end(j);if(D.isScene===!0)D.onAfterRender(j,D,T);if(W0.resetDefaultState(),K0=-1,u=null,R.pop(),R.length>0){if(I=R[R.length-1],v0.setTextureUnits(I.state.textureUnits),GJ===!0)m.setGlobalState(j.clippingPlanes,I.state.camera)}else I=null;if(w.pop(),w.length>0)B=w[w.length-1];else B=null;if(y!==null)y.renderEnd()};function NQ(D,T,g,f){if(D.visible===!1)return;if(D.layers.test(T.layers)){if(D.isGroup)g=D.renderOrder;else if(D.isLOD){if(D.autoUpdate===!0)D.update(T)}else if(D.isLight){if(I.pushLight(D),D.castShadow)I.pushShadow(D)}else if(D.isSprite){let R0=T.isArrayCamera?UJ:n0;if(!D.frustumCulled||D.intersectsFrustum(R0)){if(f)CJ.setFromMatrixPosition(D.matrixWorld).applyMatrix4(cJ);let Y0=h.update(D),O0=D.material;if(O0.visible)B.push(D,Y0,O0,g,CJ.z,null,T)}}else if(D.isMesh||D.isLine||D.isPoints){let R0=T.isArrayCamera?UJ:n0;if(!D.frustumCulled||D.intersectsFrustum(R0)){let Y0=h.update(D),O0=D.material;if(f){if(D.boundingSphere!==void 0){if(D.boundingSphere===null)D.computeBoundingSphere();CJ.copy(D.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();CJ.copy(Y0.boundingSphere.center)}CJ.applyMatrix4(D.matrixWorld).applyMatrix4(cJ)}if(Array.isArray(O0)){let B0=Y0.groups;for(let h0=0,u0=B0.length;h0<u0;h0++){let L0=B0[h0],c0=O0[L0.materialIndex];if(c0&&c0.visible)B.push(D,Y0,c0,g,CJ.z,L0,T)}}else if(O0.visible)B.push(D,Y0,O0,g,CJ.z,null,T)}}}let U0=D.children;for(let R0=0,Y0=U0.length;R0<Y0;R0++)NQ(U0[R0],T,g,f)}function _W(D,T,g,f){let{opaque:b,transmissive:U0,transparent:R0}=D;if(I.setupLightsView(g),GJ===!0)m.setGlobalState(j.clippingPlanes,g);if(f)N0.viewport(r.copy(f));if(b.length>0)u7(b,T,g);if(U0.length>0)u7(U0,T,g);if(R0.length>0)u7(R0,T,g);N0.buffers.depth.setTest(!0),N0.buffers.depth.setMask(!0),N0.buffers.color.setMask(!0),N0.setPolygonOffset(!1)}function AW(D,T,g,f){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[f.id]===void 0){let L0=t0.has("EXT_color_buffer_half_float")||t0.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[f.id]=new $9(1,1,{generateMipmaps:!0,type:L0?M9:E9,minFilter:q9,samples:Math.max(4,MJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:p0.workingColorSpace})}let U0=I.state.transmissionRenderTarget[f.id],R0=f.viewport||r;U0.setSize(R0.z*j.transmissionResolutionScale,R0.w*j.transmissionResolutionScale);let Y0=j.getRenderTarget(),O0=j.getActiveCubeFace(),B0=j.getActiveMipmapLevel();if(j.setRenderTarget(U0),j.getClearColor(i),Q0=j.getClearAlpha(),Q0<1)j.setClearColor(16777215,0.5);if(j.clear(),xJ)H0.render(g);let h0=j.toneMapping;j.toneMapping=L9;let u0=f.viewport;if(f.viewport!==void 0)f.viewport=void 0;if(I.setupLightsView(f),GJ===!0)m.setGlobalState(j.clippingPlanes,f);if(u7(D,g,f),v0.updateMultisampleRenderTarget(U0),v0.updateRenderTargetMipmap(U0),t0.has("WEBGL_multisampled_render_to_texture")===!1){let L0=!1;for(let c0=0,qJ=T.length;c0<qJ;c0++){let ZJ=T[c0],{object:QJ,geometry:IJ,material:M0,group:yJ}=ZJ;if(M0.side===Q9&&QJ.layers.test(f.layers)){let i0=M0.side;M0.side=pJ,M0.needsUpdate=!0,TW(QJ,g,f,IJ,M0,yJ),M0.side=i0,M0.needsUpdate=!0,L0=!0}}if(L0===!0)v0.updateMultisampleRenderTarget(U0),v0.updateRenderTargetMipmap(U0)}if(j.setRenderTarget(Y0,O0,B0),j.setClearColor(i,Q0),u0!==void 0)f.viewport=u0;j.toneMapping=h0}function u7(D,T,g){let f=T.isScene===!0?T.overrideMaterial:null;for(let b=0,U0=D.length;b<U0;b++){let R0=D[b],{object:Y0,geometry:O0,group:B0}=R0,h0=R0.material;if(h0.allowOverride===!0&&f!==null)h0=f;if(Y0.layers.test(g.layers))TW(Y0,T,g,O0,h0,B0)}}function TW(D,T,g,f,b,U0){if(y!==null&&b.isNodeMaterial)y.setObject(D,b);if(D.onBeforeRender(j,T,g,f,b,U0),D.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),b.onBeforeRender(j,T,g,f,D,U0),b.transparent===!0&&b.side===Q9&&b.forceSinglePass===!1)b.side=pJ,b.needsUpdate=!0,j.renderBufferDirect(g,T,f,b,D,U0),b.side=r9,b.needsUpdate=!0,j.renderBufferDirect(g,T,f,b,D,U0),b.side=Q9;else j.renderBufferDirect(g,T,f,b,D,U0);D.onAfterRender(j,T,g,f,b,U0)}function SW(D){let T=0;for(let g of D)if(g.texture!==null)T++;return T}function H7(D,T,g){if(T.isScene!==!0)T=bJ;let f=A0.get(D),b=I.state.lights,U0=I.state.shadowsArray,R0=b.state.version,Y0=e.getParameters(D,b.state,U0,T,g,I.state.lightProbeGridArray),O0=e.getProgramCacheKey(Y0),B0=f.programs;f.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?T.environment:null,f.fog=T.fog;let h0=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;if(f.envMap=PJ.get(D.envMap||f.environment,h0),f.envMapRotation=f.environment!==null&&D.envMap===null?T.environmentRotation:D.envMapRotation,B0===void 0)D.addEventListener("dispose",F0),B0=new Map,f.programs=B0,f.programVariants=new Map;let u0=B0.get(O0);if(u0!==void 0){if(f.currentProgram===u0&&f.lightsStateVersion===R0)return yW(D,Y0),u0}else{if(Y0.uniforms=e.getUniforms(D),y!==null&&D.isNodeMaterial)y.build(D,g,Y0);D.onBeforeCompile(Y0,j),u0=e.acquireProgram(Y0,O0),B0.set(O0,u0),f.uniforms=Y0.uniforms}let L0=f.uniforms;if(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)L0.clippingPlanes=m.uniform;if(yW(D,Y0),f.needsLights=JY(D),f.lightsStateVersion=R0,f.needsLights)L0.ambientLightColor.value=b.state.ambient,L0.lightProbe.value=b.state.probe,L0.sunLights.value=b.state.sun,L0.sunLightShadows.value=b.state.sunShadow,L0.directionalLights.value=b.state.directional,L0.directionalLightShadows.value=b.state.directionalShadow,L0.spotLights.value=b.state.spot,L0.spotLightShadows.value=b.state.spotShadow,L0.rectAreaLights.value=b.state.rectArea,L0.ltc_1.value=b.state.rectAreaLTC1,L0.ltc_2.value=b.state.rectAreaLTC2,L0.pointLights.value=b.state.point,L0.pointLightShadows.value=b.state.pointShadow,L0.hemisphereLights.value=b.state.hemi,L0.sunShadowMatrix.value=b.state.sunShadowMatrix,L0.sunShadowCascade.value=b.state.sunShadowCascade,L0.directionalShadowMatrix.value=b.state.directionalShadowMatrix,L0.spotLightMatrix.value=b.state.spotLightMatrix,L0.spotLightMap.value=b.state.spotLightMap,L0.pointShadowMatrix.value=b.state.pointShadowMatrix;return f.numLightProbeGrids=SW(I.state.lightProbeGridArray),f.currentProgram=u0,f.uniformsList=null,u0}function rH(D,T,g,f,b){let U0=A0.get(D),R0=U0.currentProgram.id+","+f+","+b,Y0=U0.programVariants.get(R0);if(Y0===void 0)Y0=H7(D,T,g),U0.programVariants.set(R0,Y0);else U0.currentProgram=Y0,U0.uniformsList=null,U0.outputColorSpace=f,U0.toneMapping=b;return Y0}function jW(D){if(D.uniformsList===null){let T=D.currentProgram.getUniforms();D.uniformsList=g7.seqWithValue(T.seq,D.uniforms)}return D.uniformsList}function yW(D,T){let g=A0.get(D);g.outputColorSpace=T.outputColorSpace,g.batching=T.batching,g.batchingColor=T.batchingColor,g.instancing=T.instancing,g.instancingColor=T.instancingColor,g.instancingMorph=T.instancingMorph,g.skinning=T.skinning,g.morphTargets=T.morphTargets,g.morphNormals=T.morphNormals,g.morphColors=T.morphColors,g.morphTargetsCount=T.morphTargetsCount,g.numClippingPlanes=T.numClippingPlanes,g.numIntersection=T.numClipIntersection,g.vertexAlphas=T.vertexAlphas,g.vertexTangents=T.vertexTangents,g.toneMapping=T.toneMapping}function tH(D,T,g,f,b){if(T.isScene!==!0)T=bJ;v0.resetTextureUnits();let U0=T.fog,R0=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?T.environment:null,Y0=x===null?j.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:p0.workingColorSpace,O0=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,B0=PJ.get(f.envMap||R0,O0),h0=f.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,u0=!!g.attributes.tangent&&(!!f.normalMap||f.anisotropy>0),L0=!!g.morphAttributes.position,c0=!!g.morphAttributes.normal,qJ=!!g.morphAttributes.color,ZJ=L9;if(f.toneMapped){if(x===null||x.isXRRenderTarget===!0)ZJ=j.toneMapping}let QJ=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,IJ=QJ!==void 0?QJ.length:0,M0=A0.get(f),yJ=I.state.lights;if(GJ===!0){if(fJ===!0||D!==u){let YJ=D===u&&f.id===K0;m.setState(f,D,YJ)}}let i0=!1,U8=!1;if(f.version===M0.__version){if(M0.needsLights&&M0.lightsStateVersion!==yJ.state.version)i0=!0;else if(b.isBatchedMesh&&M0.batching===!1)i0=!0;else if(!b.isBatchedMesh&&M0.batching===!0)i0=!0;else if(b.isBatchedMesh&&M0.batchingColor===!0&&b._colorsTexture===null)i0=!0;else if(b.isBatchedMesh&&M0.batchingColor===!1&&b._colorsTexture!==null)i0=!0;else if(b.isInstancedMesh&&M0.instancing===!1)i0=!0;else if(!b.isInstancedMesh&&M0.instancing===!0)i0=!0;else if(b.isSkinnedMesh&&M0.skinning===!1)i0=!0;else if(!b.isSkinnedMesh&&M0.skinning===!0)i0=!0;else if(b.isInstancedMesh&&M0.instancingColor===!0&&b.instanceColor===null)i0=!0;else if(b.isInstancedMesh&&M0.instancingColor===!1&&b.instanceColor!==null)i0=!0;else if(b.isInstancedMesh&&M0.instancingMorph===!0&&b.morphTexture===null)i0=!0;else if(b.isInstancedMesh&&M0.instancingMorph===!1&&b.morphTexture!==null)i0=!0;else if(M0.envMap!==B0)i0=!0;else if(f.fog===!0&&M0.fog!==U0)i0=!0;else if(M0.numClippingPlanes!==void 0&&(M0.numClippingPlanes!==m.numPlanes||M0.numIntersection!==m.numIntersection))i0=!0;else if(M0.vertexAlphas!==h0)i0=!0;else if(M0.vertexTangents!==u0)i0=!0;else if(M0.morphTargets!==L0)i0=!0;else if(M0.morphNormals!==c0)i0=!0;else if(M0.morphColors!==qJ)i0=!0;else if(M0.morphTargetsCount!==IJ)i0=!0;else if(M0.numLightProbeGrids!==SW(I.state.lightProbeGridArray))i0=!0;else if(M0.outputColorSpace!==Y0||M0.toneMapping!==ZJ)U8=!0}else i0=!0,M0.__version=f.version;let wJ=M0.currentProgram;if(i0===!0||U8===!0){if(wJ=U8===!0?rH(f,T,b,Y0,ZJ):H7(f,T,b),y&&f.isNodeMaterial)y.onUpdateProgram(f,wJ,M0)}let c7=!1,l9=!1,G8=!1,s0=wJ.getUniforms(),zJ=M0.uniforms;if(N0.useProgram(wJ.program))c7=!0,l9=!0,G8=!0;if(f.id!==K0)K0=f.id,l9=!0;if(c7||u!==D){if(N0.buffers.depth.getReversed()&&D.reversedDepth!==!0)D._reversedDepth=!0,D.updateProjectionMatrix();s0.setValue(S,"projectionMatrix",D.projectionMatrix),s0.setValue(S,"viewMatrix",D.matrixWorldInverse);let VJ=s0.map.cameraPosition;if(VJ!==void 0)VJ.setValue(S,NJ.setFromMatrixPosition(D.matrixWorld));if(MJ.logarithmicDepthBuffer)s0.setValue(S,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2));if(f.isMeshPhongMaterial||f.isMeshToonMaterial||f.isMeshLambertMaterial||f.isMeshBasicMaterial||f.isMeshStandardMaterial||f.isShaderMaterial)s0.setValue(S,"isOrthographic",D.isOrthographicCamera===!0);if(u!==D)u=D,l9=!0,G8=!0}if(M0.needsLights){if(yJ.state.sunShadowMap.length>0)s0.setValue(S,"sunShadowMap",yJ.state.sunShadowMap,v0);if(yJ.state.directionalShadowMap.length>0)s0.setValue(S,"directionalShadowMap",yJ.state.directionalShadowMap,v0);if(yJ.state.spotShadowMap.length>0)s0.setValue(S,"spotShadowMap",yJ.state.spotShadowMap,v0);if(yJ.state.pointShadowMap.length>0)s0.setValue(S,"pointShadowMap",yJ.state.pointShadowMap,v0)}if(b.isSkinnedMesh){s0.setOptional(S,b,"bindMatrix"),s0.setOptional(S,b,"bindMatrixInverse");let YJ=b.skeleton;if(YJ){if(YJ.boneTexture===null)YJ.computeBoneTexture();s0.setValue(S,"boneTexture",YJ.boneTexture,v0)}}if(b.isBatchedMesh){if(s0.setOptional(S,b,"batchingTexture"),s0.setValue(S,"batchingTexture",b._matricesTexture,v0),s0.setOptional(S,b,"batchingIdTexture"),s0.setValue(S,"batchingIdTexture",b._indirectTexture,v0),s0.setOptional(S,b,"batchingColorTexture"),b._colorsTexture!==null)s0.setValue(S,"batchingColorTexture",b._colorsTexture,v0)}let Y9=g.morphAttributes;if(Y9.position!==void 0||Y9.normal!==void 0||Y9.color!==void 0)_.update(b,g,wJ);if(l9||M0.receiveShadow!==b.receiveShadow)M0.receiveShadow=b.receiveShadow,s0.setValue(S,"receiveShadow",b.receiveShadow);if((f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial)&&f.envMap===null&&T.environment!==null)zJ.envMapIntensity.value=T.environmentIntensity;if(zJ.dfgLUT!==void 0)zJ.dfgLUT.value=lN();if(l9){if(s0.setValue(S,"toneMappingExposure",j.toneMappingExposure),M0.needsLights)eH(zJ,G8);if(U0&&f.fog===!0)a.refreshFogUniforms(zJ,U0);if(a.refreshMaterialUniforms(zJ,f,_0,w0,I.state.transmissionRenderTarget[D.id]),M0.needsLights&&M0.numLightProbeGrids>0){let YJ=P,VJ=0;for(let I9 of I.state.lightProbeGridArray){if(I9.texture===null)continue;YJ.textures[VJ]=I9.texture,YJ.min[VJ]=I9.boundingBox.min,YJ.max[VJ]=I9.boundingBox.max,YJ.resolution[VJ]=I9.resolution,VJ++}for(let I9 in YJ)YJ[I9].length=VJ;zJ.probesSH.value=YJ.textures,zJ.probesMin.value=YJ.min,zJ.probesMax.value=YJ.max,zJ.probesResolution.value=YJ.resolution}g7.upload(S,jW(M0),zJ,v0)}if(f.isShaderMaterial&&f.uniformsNeedUpdate===!0)g7.upload(S,jW(M0),zJ,v0),f.uniformsNeedUpdate=!1;if(f.isSpriteMaterial)s0.setValue(S,"center",b.center);if(s0.setValue(S,"modelViewMatrix",b.modelViewMatrix),s0.setValue(S,"normalMatrix",b.normalMatrix),s0.setValue(S,"modelMatrix",b.matrixWorld),f.uniformsGroups!==void 0){let YJ=f.uniformsGroups;for(let VJ=0,I9=YJ.length;VJ<I9;VJ++){let hW=YJ[VJ];G0.update(hW,wJ),G0.bind(hW,wJ)}}return wJ}function eH(D,T){D.ambientLightColor.needsUpdate=T,D.lightProbe.needsUpdate=T,D.sunLights.needsUpdate=T,D.sunLightShadows.needsUpdate=T,D.directionalLights.needsUpdate=T,D.directionalLightShadows.needsUpdate=T,D.pointLights.needsUpdate=T,D.pointLightShadows.needsUpdate=T,D.spotLights.needsUpdate=T,D.spotLightShadows.needsUpdate=T,D.rectAreaLights.needsUpdate=T,D.hemisphereLights.needsUpdate=T}function JY(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return s},this.getActiveMipmapLevel=function(){return o},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(D,T,g){let f=A0.get(D);if(f.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,f.__autoAllocateDepthBuffer===!1)f.__useRenderToTexture=!1;A0.get(D.texture).__webglTexture=T,A0.get(D.depthTexture).__webglTexture=f.__autoAllocateDepthBuffer?void 0:g,f.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,T){let g=A0.get(D);g.__webglFramebuffer=T,g.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(D,T=0,g=0){x=D,s=T,o=g;let f=null,b=!1,U0=!1;if(D){let Y0=A0.get(D);if(Y0.__useDefaultFramebuffer!==void 0){N0.bindFramebuffer(S.FRAMEBUFFER,Y0.__webglFramebuffer),r.copy(D.viewport),$0.copy(D.scissor),k0=D.scissorTest,N0.viewport(r),N0.scissor($0),N0.setScissorTest(k0),K0=-1;return}else if(Y0.__webglFramebuffer===void 0)v0.setupRenderTarget(D);else if(Y0.__hasExternalTextures)v0.rebindTextures(D,A0.get(D.texture).__webglTexture,A0.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let h0=D.depthTexture;if(Y0.__boundDepthTexture!==h0){if(h0!==null&&A0.has(h0)&&(D.width!==h0.image.width||D.height!==h0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");v0.setupDepthRenderbuffer(D)}}let O0=D.texture;if(O0.isData3DTexture||O0.isDataArrayTexture||O0.isCompressedArrayTexture)U0=!0;let B0=A0.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget){if(Array.isArray(B0[T]))f=B0[T][g];else f=B0[T];b=!0}else if(D.samples>0&&v0.useMultisampledRTT(D)===!1)f=A0.get(D).__webglMultisampledFramebuffer;else if(Array.isArray(B0))f=B0[g];else f=B0;r.copy(D.viewport),$0.copy(D.scissor),k0=D.scissorTest}else r.copy(d0).multiplyScalar(_0).floor(),$0.copy(b0).multiplyScalar(_0).floor(),k0=HJ;if(g!==0)f=p;if(N0.bindFramebuffer(S.FRAMEBUFFER,f))N0.drawBuffers(D,f);if(N0.viewport(r),N0.scissor($0),N0.setScissorTest(k0),b){let Y0=A0.get(D.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y0.__webglTexture,g)}else if(U0){let Y0=T;for(let O0=0;O0<D.textures.length;O0++){let B0=A0.get(D.textures[O0]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+O0,B0.__webglTexture,g,Y0)}}else if(D!==null&&g!==0){let Y0=A0.get(D.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Y0.__webglTexture,g)}K0=-1};function vW(D){let T=A0.get(D);if(T.__readFormat!==D.format||T.__readType!==D.type)T.__readFormat=D.format,T.__readType=D.type,T.__formatReadable=MJ.textureFormatReadable(D.format),T.__typeReadable=MJ.textureTypeReadable(D.type);return T}if(this.readRenderTargetPixels=function(D,T,g,f,b,U0,R0,Y0=0){if(!(D&&D.isWebGLRenderTarget)){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O0=A0.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&R0!==void 0){if(O0=O0[R0],Array.isArray(O0))O0=O0[0]}if(O0){N0.bindFramebuffer(S.FRAMEBUFFER,O0);try{let B0=D.textures[Y0],h0=B0.format,u0=B0.type;if(D.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+Y0);let L0=vW(B0);if(L0.__formatReadable===!1){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(L0.__typeReadable===!1){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(T>=0&&T<=D.width-f&&(g>=0&&g<=D.height-b))S.readPixels(T,g,f,b,J0.convert(h0),J0.convert(u0),U0)}finally{let B0=x!==null?A0.get(x).__webglFramebuffer:null;N0.bindFramebuffer(S.FRAMEBUFFER,B0)}}},this.readRenderTargetPixelsAsync=async function(D,T,g,f,b,U0,R0,Y0=0){if(!(D&&D.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O0=A0.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&R0!==void 0){if(O0=O0[R0],Array.isArray(O0))O0=O0[0]}if(O0)if(T>=0&&T<=D.width-f&&(g>=0&&g<=D.height-b)){N0.bindFramebuffer(S.FRAMEBUFFER,O0);let B0=D.textures[Y0],h0=B0.format,u0=B0.type;if(D.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+Y0);let L0=vW(B0);if(L0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(L0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let c0=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,c0),S.bufferData(S.PIXEL_PACK_BUFFER,U0.byteLength,S.STREAM_READ),S.readPixels(T,g,f,b,J0.convert(h0),J0.convert(u0),0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null);let qJ=x!==null?A0.get(x).__webglFramebuffer:null;N0.bindFramebuffer(S.FRAMEBUFFER,qJ);let ZJ=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await LK(S,ZJ,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,c0),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,U0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null),S.deleteBuffer(c0),S.deleteSync(ZJ),U0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,T=null,g=0){let f=Math.pow(2,-g),b=Math.floor(D.image.width*f),U0=Math.floor(D.image.height*f),R0=T!==null?T.x:0,Y0=T!==null?T.y:0;v0.setTexture2D(D,0),S.copyTexSubImage2D(S.TEXTURE_2D,g,0,0,R0,Y0,b,U0),N0.unbindTexture()},this.copyTextureToTexture=function(D,T,g=null,f=null,b=0,U0=0){let R0,Y0,O0,B0,h0,u0,L0,c0,qJ,ZJ=D.isCompressedTexture?D.mipmaps[U0]:D.image;if(g!==null)R0=g.max.x-g.min.x,Y0=g.max.y-g.min.y,O0=g.isBox3?g.max.z-g.min.z:1,B0=g.min.x,h0=g.min.y,u0=g.isBox3?g.min.z:0;else{let s0=Math.pow(2,-b);if(R0=Math.floor(ZJ.width*s0),Y0=Math.floor(ZJ.height*s0),D.isDataArrayTexture)O0=ZJ.depth;else if(D.isData3DTexture)O0=Math.floor(ZJ.depth*s0);else O0=1;B0=0,h0=0,u0=0}if(f!==null)L0=f.x,c0=f.y,qJ=f.z;else L0=0,c0=0,qJ=0;let QJ=J0.convert(T.format),IJ=J0.convert(T.type),M0;if(T.isData3DTexture)v0.setTexture3D(T,0),M0=S.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)v0.setTexture2DArray(T,0),M0=S.TEXTURE_2D_ARRAY;else v0.setTexture2D(T,0),M0=S.TEXTURE_2D;N0.activeTexture(S.TEXTURE0),N0.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,T.flipY),N0.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),N0.pixelStorei(S.UNPACK_ALIGNMENT,T.unpackAlignment);let yJ=N0.getParameter(S.UNPACK_ROW_LENGTH),i0=N0.getParameter(S.UNPACK_IMAGE_HEIGHT),U8=N0.getParameter(S.UNPACK_SKIP_PIXELS),wJ=N0.getParameter(S.UNPACK_SKIP_ROWS),c7=N0.getParameter(S.UNPACK_SKIP_IMAGES);N0.pixelStorei(S.UNPACK_ROW_LENGTH,ZJ.width),N0.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ZJ.height),N0.pixelStorei(S.UNPACK_SKIP_PIXELS,B0),N0.pixelStorei(S.UNPACK_SKIP_ROWS,h0),N0.pixelStorei(S.UNPACK_SKIP_IMAGES,u0);let l9=D.isDataArrayTexture||D.isData3DTexture,G8=T.isDataArrayTexture||T.isData3DTexture;if(D.isDepthTexture){let s0=A0.get(D),zJ=A0.get(T),Y9=A0.get(s0.__renderTarget),YJ=A0.get(zJ.__renderTarget);N0.bindFramebuffer(S.READ_FRAMEBUFFER,Y9.__webglFramebuffer),N0.bindFramebuffer(S.DRAW_FRAMEBUFFER,YJ.__webglFramebuffer);for(let VJ=0;VJ<O0;VJ++){if(l9)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,A0.get(D).__webglTexture,b,u0+VJ),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,A0.get(T).__webglTexture,U0,qJ+VJ);S.blitFramebuffer(B0,h0,B0+R0,h0+Y0,L0,c0,L0+R0,c0+Y0,S.DEPTH_BUFFER_BIT,S.NEAREST)}N0.bindFramebuffer(S.READ_FRAMEBUFFER,null),N0.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(b!==0||D.isRenderTargetTexture||A0.has(D)){let s0=A0.get(D),zJ=A0.get(T);N0.bindFramebuffer(S.READ_FRAMEBUFFER,t),N0.bindFramebuffer(S.DRAW_FRAMEBUFFER,A);for(let Y9=0;Y9<O0;Y9++){if(l9)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,s0.__webglTexture,b,u0+Y9);else S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,s0.__webglTexture,b);if(G8)S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,zJ.__webglTexture,U0,qJ+Y9);else S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,zJ.__webglTexture,U0);if(b!==0)S.blitFramebuffer(B0,h0,B0+R0,h0+Y0,L0,c0,L0+R0,c0+Y0,S.COLOR_BUFFER_BIT,S.NEAREST);else if(G8)S.copyTexSubImage3D(M0,U0,L0,c0,qJ+Y9,B0,h0,R0,Y0);else S.copyTexSubImage2D(M0,U0,L0,c0,B0,h0,R0,Y0)}N0.bindFramebuffer(S.READ_FRAMEBUFFER,null),N0.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(G8)if(D.isDataTexture||D.isData3DTexture)S.texSubImage3D(M0,U0,L0,c0,qJ,R0,Y0,O0,QJ,IJ,ZJ.data);else if(T.isCompressedArrayTexture)S.compressedTexSubImage3D(M0,U0,L0,c0,qJ,R0,Y0,O0,QJ,ZJ.data);else S.texSubImage3D(M0,U0,L0,c0,qJ,R0,Y0,O0,QJ,IJ,ZJ);else if(D.isDataTexture)S.texSubImage2D(S.TEXTURE_2D,U0,L0,c0,R0,Y0,QJ,IJ,ZJ.data);else if(D.isCompressedTexture)S.compressedTexSubImage2D(S.TEXTURE_2D,U0,L0,c0,ZJ.width,ZJ.height,QJ,ZJ.data);else S.texSubImage2D(S.TEXTURE_2D,U0,L0,c0,R0,Y0,QJ,IJ,ZJ);if(N0.pixelStorei(S.UNPACK_ROW_LENGTH,yJ),N0.pixelStorei(S.UNPACK_IMAGE_HEIGHT,i0),N0.pixelStorei(S.UNPACK_SKIP_PIXELS,U8),N0.pixelStorei(S.UNPACK_SKIP_ROWS,wJ),N0.pixelStorei(S.UNPACK_SKIP_IMAGES,c7),U0===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0)S.generateMipmap(M0);N0.unbindTexture()},this.initRenderTarget=function(D){if(A0.get(D).__webglFramebuffer===void 0)v0.setupRenderTarget(D)},this.initTexture=function(D){if(D.isCubeTexture)v0.setTextureCube(D,0);else if(D.isData3DTexture)v0.setTexture3D(D,0);else if(D.isDataArrayTexture||D.isCompressedArrayTexture)v0.setTexture2DArray(D,0);else v0.setTexture2D(D,0);N0.unbindTexture()},this.resetState=function(){s=0,o=0,x=null,N0.reset(),W0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return g$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=p0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=p0._getUnpackColorSpace()}}function qW(J,Q){if(Q===j$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===a8||Q===z7){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let W=$.count-2,Z=[];if(Q===a8)for(let K=1;K<=W;K++)Z.push($.getX(0)),Z.push($.getX(K)),Z.push($.getX(K+1));else for(let K=0;K<W;K++)if(K%2===0)Z.push($.getX(K)),Z.push($.getX(K+1)),Z.push($.getX(K+2));else Z.push($.getX(K+2)),Z.push($.getX(K+1)),Z.push($.getX(K));if(Z.length/3!==W)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(Z),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function FH(J){let Q=new Map,$=new Map,W=J.clone();return OH(J,W,function(Z,K){Q.set(K,Z),$.set(Z,K)}),W.traverse(function(Z){if(!Z.isSkinnedMesh)return;let K=Z,H=Q.get(Z),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),W}function OH(J,Q,$){$(J,Q);for(let W=0;W<J.children.length;W++)OH(J.children[W],Q.children[W],$)}class DW extends p9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new zH(Q)}),this.register(function(Q){return new CH(Q)}),this.register(function(Q){return new PH(Q)}),this.register(function(Q){return new vH(Q)}),this.register(function(Q){return new hH(Q)}),this.register(function(Q){return new fH(Q)}),this.register(function(Q){return new wH(Q)}),this.register(function(Q){return new _H(Q)}),this.register(function(Q){return new AH(Q)}),this.register(function(Q){return new TH(Q)}),this.register(function(Q){return new BH(Q)}),this.register(function(Q){return new SH(Q)}),this.register(function(Q){return new IH(Q)}),this.register(function(Q){return new yH(Q)}),this.register(function(Q){return new jH(Q)}),this.register(function(Q){return new VH(Q)}),this.register(function(Q){return new RW(Q,m0.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new RW(Q,m0.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new bH(Q)})}load(J,Q,$,W){let Z=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=H8.extractUrlBase(J);K=H8.resolveURL(X,this.path)}else K=H8.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(W)W(X);else console.error(X);Z.manager.itemError(J),Z.manager.itemEnd(J)},Y=new y7(this.manager);Y.setPriority(this.priority),Y.setCache(this.cache),Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Z.parse(X,K,function(U){Q(U),Z.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,W){let Z,K={},H={},Y=new TextDecoder;if(typeof J==="string")Z=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===xH){try{K[m0.KHR_BINARY_GLTF]=new gH(J)}catch(G){if(W)W(G);return}Z=JSON.parse(K[m0.KHR_BINARY_GLTF].content)}else Z=JSON.parse(Y.decode(J));else Z=J;if(Z.asset===void 0||Z.asset.version[0]<2){if(W)W(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new uH(Z,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](X);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[G.name]=G,K[G.name]=!0}if(Z.extensionsUsed)for(let U=0;U<Z.extensionsUsed.length;++U){let G=Z.extensionsUsed[U],N=Z.extensionsRequired||[];switch(G){case m0.KHR_MATERIALS_UNLIT:K[G]=new kH;break;case m0.KHR_DRACO_MESH_COMPRESSION:K[G]=new pH(Z,this.dracoLoader);break;case m0.KHR_TEXTURE_TRANSFORM:K[G]=new lH;break;case m0.KHR_MESH_QUANTIZATION:K[G]=new mH;break;default:if(N.indexOf(G)>=0&&H[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,W)}parseAsync(J,Q){let $=this;return new Promise(function(W,Z){$.parse(J,Q,W,Z)})}}function dN(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function XJ(J,Q,$){let W=J.json.materials[Q];if(W.extensions&&W.extensions[$])return W.extensions[$];return null}var m0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class VH{constructor(J){this.parser=J,this.name=m0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(Z.extensions&&Z.extensions[this.name]&&Z.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,Z.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,W=Q.cache.get($);if(W)return W;let Z=Q.json,Y=((Z.extensions&&Z.extensions[this.name]||{}).lights||[])[J],X,U=new S0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],iJ);let G=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new t6(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new r6(U),X.distance=G;break;case"spot":X=new a6(U),X.distance=G,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),C9(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),W=Promise.resolve(X),Q.cache.add($,W),W}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,Z=$.json.nodes[J],H=(Z.extensions&&Z.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class kH{constructor(){this.name=m0.KHR_MATERIALS_UNLIT}getMaterialType(){return b9}extendParams(J,Q,$){let W=[];J.color=new S0(1,1,1),J.opacity=1;let Z=Q.pbrMetallicRoughness;if(Z){if(Array.isArray(Z.baseColorFactor)){let K=Z.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],iJ),J.opacity=K[3]}if(Z.baseColorTexture!==void 0)W.push($.assignTexture(J,"map",Z.baseColorTexture,D9))}return Promise.all(W)}}class BH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class zH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(W.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let Z=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new T0(Z,Z)}}return Promise.all(W)}}class CH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.diffuseRoughness=$.diffuseRoughnessFactor!==void 0?$.diffuseRoughnessFactor:0,$.diffuseRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"diffuseRoughnessMap",$.diffuseRoughnessTexture));return Promise.all(W)}}class PH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_DISPERSION}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class IH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessMinimum=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessMaximum=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(W)}}class wH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_SHEEN}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.sheenColor=new S0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let Z=$.sheenColorFactor;Q.sheenColor.setRGB(Z[0],Z[1],Z[2],iJ)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,D9));if($.sheenRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(W)}}class _H{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)W.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(W)}}class AH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_VOLUME}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let Z=$.attenuationColor||[1,1,1];return Q.attenuationColor=new S0().setRGB(Z[0],Z[1],Z[2],iJ),Promise.all(W)}}class TH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_IOR}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class SH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_SPECULAR}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let Z=$.specularColorFactor||[1,1,1];if(Q.specularColor=new S0().setRGB(Z[0],Z[1],Z[2],iJ),$.specularColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,D9));return Promise.all(W)}}class jH{constructor(J){this.parser=J,this.name=m0.EXT_MATERIALS_BUMP}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)W.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(W)}}class yH{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?dJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)W.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(W)}}class vH{constructor(J){this.parser=J,this.name=m0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,W=$.textures[J];if(!W.extensions||!W.extensions[this.name])return null;let Z=W.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,Z.source,K)}}class hH{constructor(J){this.parser=J,this.name=m0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class fH{constructor(J){this.parser=J,this.name=m0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class RW{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let W=$.extensions[this.name],Z=this.parser.getDependency("buffer",W.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Z.then(function(H){let Y=W.byteOffset||0,X=W.byteLength||0,U=W.count,G=W.byteStride,N=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,G,N,W.mode,W.filter).then(function(q){return q.buffer});else return K.ready.then(function(){let q=new ArrayBuffer(U*G);return K.decodeGltfBuffer(new Uint8Array(q),U,G,N,W.mode,W.filter),q})})}else return null}}class bH{constructor(J){this.name=m0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let W=Q.meshes[$.mesh];for(let X of W.primitives)if(X.mode!==Z9.TRIANGLES&&X.mode!==Z9.TRIANGLE_STRIP&&X.mode!==Z9.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),G=U.isGroup?U.children:[U],N=X[0].count,q=[];for(let F of G){let M=new f0,V=new v,E=new hJ,O=new v(1,1,1),z=new b6(F.geometry,F.material,N);for(let B=0;B<N;B++){if(Y.TRANSLATION)V.fromBufferAttribute(Y.TRANSLATION,B);if(Y.ROTATION)E.fromBufferAttribute(Y.ROTATION,B);if(Y.SCALE)O.fromBufferAttribute(Y.SCALE,B);z.setMatrixAt(B,M.compose(V,E,O))}let P=null;for(let B in Y)if(B==="_COLOR_0"){let I=Y[B];z.instanceColor=new i9(I.array,I.itemSize,I.normalized)}else if(B!=="TRANSLATION"&&B!=="ROTATION"&&B!=="SCALE"){if(P===null){let w=z.geometry;P=new lJ,P.name=w.name;for(let R in w.attributes)P.setAttribute(R,w.attributes[R]);for(let R in w.morphAttributes)P.morphAttributes[R]=w.morphAttributes[R];if(w.index!==null)P.setIndex(w.index);P.morphTargetsRelative=w.morphTargetsRelative;for(let R of w.groups)P.addGroup(R.start,R.count,R.materialIndex);if(w.boundingBox!==null)P.boundingBox=w.boundingBox.clone();if(w.boundingSphere!==null)P.boundingSphere=w.boundingSphere.clone();P.drawRange.start=w.drawRange.start,P.drawRange.count=w.drawRange.count,P.userData=Object.assign({},w.userData),z.geometry=P}let I=Y[B];P.setAttribute(B,new i9(I.array,I.itemSize,I.normalized))}KJ.prototype.copy.call(z,F),this.parser.assignFinalMaterial(z),q.push(z)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var xH="glTF",l7=12,RH={JSON:1313821514,BIN:5130562};class gH{constructor(J){this.name=m0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,l7),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==xH)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let W=this.header.length-l7,Z=new DataView(J,l7),K=0;while(K<W){let H=Z.getUint32(K,!0);K+=4;let Y=Z.getUint32(K,!0);if(K+=4,Y===RH.JSON){let X=new Uint8Array(J,l7+K,H);this.content=$.decode(X)}else if(Y===RH.BIN){let X=l7+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class pH{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=m0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,W=this.dracoLoader,Z=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let G=LW[U]||U.toLowerCase();H[G]=K[U]}for(let U in J.attributes){let G=LW[U]||U.toLowerCase();if(K[U]!==void 0){let N=$.accessors[J.attributes[U]],q=K7[N.componentType];X[G]=q.name,Y[G]=N.normalized===!0}}return Q.getDependency("bufferView",Z).then(function(U){return new Promise(function(G,N){W.decodeDracoFile(U,function(q){for(let F in q.attributes){let M=q.attributes[F],V=Y[F];if(V!==void 0)M.normalized=V}G(q)},H,X,iJ,N)})})}}class lH{constructor(){this.name=m0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),W=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*W,J.offset.x,-J.repeat.x*W,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class mH{constructor(){this.name=m0.KHR_MESH_QUANTIZATION}}class VW extends g9{constructor(J,Q,$,W){super(J,Q,$,W)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W*3+W;for(let K=0;K!==W;K++)Q[K]=$[Z+K];return Q}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=W-Q,G=($-Q)/U,N=G*G,q=N*G,F=J*X,M=F-X,V=-2*q+3*N,E=q-N,O=1-V,z=E-N+G;for(let P=0;P!==H;P++){let B=K[M+P+H],I=K[M+P+Y]*U,w=K[F+P+H],R=K[F+P]*U;Z[P]=O*B+z*I+V*w+E*R}return Z}}var uN=new hJ;class dH extends VW{interpolate_(J,Q,$,W){let Z=super.interpolate_(J,Q,$,W);return uN.fromArray(Z).normalize().toArray(Z),Z}}var Z9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},K7={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},LH={9728:N9,9729:SJ,9984:B6,9985:i8,9986:D8,9987:q9},MH={33071:s8,33648:k6,10497:n8},EW={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},LW={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Y8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cN={CUBICSPLINE:void 0,LINEAR:A6,STEP:S$},FW={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nN(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new Q7({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:r9});return J.DefaultMaterial}function P8(J,Q,$){for(let W in $.extensions)if(J[W]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[W]=$.extensions[W]}function C9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function sN(J,Q,$){let W=!1,Z=!1,K=!1;for(let U=0,G=Q.length;U<G;U++){let N=Q[U];if(N.POSITION!==void 0)W=!0;if(N.NORMAL!==void 0)Z=!0;if(N.COLOR_0!==void 0)K=!0;if(W&&Z&&K)break}if(!W&&!Z&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,G=Q.length;U<G;U++){let N=Q[U];if(W){let q=N.POSITION!==void 0?$.getDependency("accessor",N.POSITION):J.attributes.position;H.push(q)}if(Z){let q=N.NORMAL!==void 0?$.getDependency("accessor",N.NORMAL):J.attributes.normal;Y.push(q)}if(K){let q=N.COLOR_0!==void 0?$.getDependency("accessor",N.COLOR_0):J.attributes.color;X.push(q)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let G=U[0],N=U[1],q=U[2];if(W)J.morphAttributes.position=G;if(Z)J.morphAttributes.normal=N;if(K)J.morphAttributes.color=q;return J.morphTargetsRelative=!0,J})}function iN(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,W=Q.weights.length;$<W;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let W=0,Z=$.length;W<Z;W++)J.morphTargetDictionary[$[W]]=W}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oN(J){let Q,$=J.extensions&&J.extensions[m0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+OW($.attributes);else Q=J.indices+":"+OW(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let W=0,Z=J.targets.length;W<Z;W++)Q+=":"+OW(J.targets[W]);return Q}function OW(J){let Q="",$=Object.keys(J).sort();for(let W=0,Z=$.length;W<Z;W++)Q+=$[W]+":"+J[$[W]]+";";return Q}function MW(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aN(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var rN=new f0;class uH{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new dN,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,W=-1,Z=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);W=$&&Y?parseInt(Y[1],10):-1,Z=H.indexOf("Firefox")>-1,K=Z?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&W<17||Z&&K<98)this.textureLoader=new s6(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);else this.textureLoader=new e6(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new y7(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),this.options.withCredentials||this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,W=this.json,Z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][W.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:W.asset,parser:$,userData:{}};return P8(Z,H,W),C9(H,W),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let W=0,Z=J.length;W<Z;W++){let K=J[W];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let W=$.clone(),Z=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())Z(U,H.children[X])};return Z($,W),W.name+="_instance_"+J.uses[Q]++,W}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)return W}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let W=0;W<Q.length;W++){let Z=J(Q[W]);if(Z)$.push(Z)}return $}getDependency(J,Q){let $=J+":"+Q,W=this.cache.get($);if(!W){switch(J){case"scene":W=this.loadScene(Q);break;case"node":W=this._invokeOne(function(Z){return Z.loadNode&&Z.loadNode(Q)});break;case"mesh":W=this._invokeOne(function(Z){return Z.loadMesh&&Z.loadMesh(Q)});break;case"accessor":W=this.loadAccessor(Q);break;case"bufferView":W=this._invokeOne(function(Z){return Z.loadBufferView&&Z.loadBufferView(Q)});break;case"buffer":W=this.loadBuffer(Q);break;case"material":W=this._invokeOne(function(Z){return Z.loadMaterial&&Z.loadMaterial(Q)});break;case"texture":W=this._invokeOne(function(Z){return Z.loadTexture&&Z.loadTexture(Q)});break;case"skin":W=this.loadSkin(Q);break;case"animation":W=this._invokeOne(function(Z){return Z.loadAnimation&&Z.loadAnimation(Q)});break;case"camera":W=this.loadCamera(Q);break;default:if(W=this._invokeOne(function(Z){return Z!=this&&Z.getDependency&&Z.getDependency(J,Q)}),!W)throw Error("Unknown type: "+J);break}this.cache.add($,W)}return W}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,W=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(W.map(function(Z,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[m0.KHR_BINARY_GLTF].body);let W=this.options;return new Promise(function(Z,K){$.load(H8.resolveURL(Q.uri,W.path),Z,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let W=Q.byteLength||0,Z=Q.byteOffset||0;return $.slice(Z,Z+W)})}loadAccessor(J){let Q=this,$=this.json,W=this.json.accessors[J];if(W.bufferView===void 0&&W.sparse===void 0){let K=EW[W.type],H=K7[W.componentType],Y=W.normalized===!0,X=new H(W.count*K);return Promise.resolve(new TJ(X,K,Y))}let Z=[];if(W.bufferView!==void 0)Z.push(this.getDependency("bufferView",W.bufferView));else Z.push(null);if(W.sparse!==void 0)Z.push(this.getDependency("bufferView",W.sparse.indices.bufferView)),Z.push(this.getDependency("bufferView",W.sparse.values.bufferView));return Promise.all(Z).then(function(K){let H=K[0],Y=EW[W.type],X=K7[W.componentType],U=X.BYTES_PER_ELEMENT,G=U*Y,N=W.byteOffset||0,q=W.bufferView!==void 0?$.bufferViews[W.bufferView].byteStride:void 0,F=W.normalized===!0,M,V;if(q&&q!==G){let E=Math.floor(N/q),O="InterleavedBuffer:"+W.bufferView+":"+W.componentType+":"+E+":"+W.count,z=Q.cache.get(O);if(!z)M=new X(H,E*q,W.count*q/U),z=new I7(M,q/U),Q.cache.add(O,z);V=new t8(z,Y,N%q/U,F)}else{if(H===null)M=new X(W.count*Y);else M=new X(H,N,W.count*Y);V=new TJ(M,Y,F)}if(W.sparse!==void 0){let E=EW.SCALAR,O=K7[W.sparse.indices.componentType],z=W.sparse.indices.byteOffset||0,P=W.sparse.values.byteOffset||0,B=new O(K[1],z,W.sparse.count*E),I=new X(K[2],P,W.sparse.count*Y);if(H!==null)V=new TJ(V.array.slice(),V.itemSize,V.normalized);V.normalized=!1;for(let w=0,R=B.length;w<R;w++){let k=B[w];if(V.setX(k,I[w*Y]),Y>=2)V.setY(k,I[w*Y+1]);if(Y>=3)V.setZ(k,I[w*Y+2]);if(Y>=4)V.setW(k,I[w*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}V.normalized=F}return V})}loadTexture(J){let Q=this.json,$=this.options,Z=Q.textures[J].source,K=Q.images[Z],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,Z,H)}loadTextureImage(J,Q,$){let W=this,Z=this.json,K=Z.textures[J],H=Z.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let N=(Z.samplers||{})[K.sampler]||{};return U.magFilter=LH[N.magFilter]||SJ,U.minFilter=LH[N.minFilter]||q9,U.wrapS=MH[N.wrapS]||n8,U.wrapT=MH[N.wrapT]||n8,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==N9&&U.minFilter!==SJ,W.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,W=this.json,Z=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let K=W.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1,U;if(Q.isKTX2Loader===!0&&K.bufferView!==void 0)U=$.getDependency("bufferView",K.bufferView).then(function(N){return new Promise(function(q,F){Q.parse(N,q,F)})});else{if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(N){X=!0;let q=new Blob([N],{type:K.mimeType});return Y=H.createObjectURL(q),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");U=Promise.resolve(Y).then(function(N){return new Promise(function(q,F){let M=q;if(Q.isImageBitmapLoader===!0)M=function(V){let E=new FJ(V);E.needsUpdate=!0,q(E)};Q.load(H8.resolveURL(N,Z.path),M,void 0,F)})})}let G=U.then(function(N){if(X===!0)H.revokeObjectURL(Y);return C9(N,K),N.userData.mimeType=K.mimeType||aN(K.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),N});return this.sourceCache[J]=G,G}assignTexture(J,Q,$,W){let Z=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(Z.extensions[m0.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[m0.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=Z.associations.get(K);K=Z.extensions[m0.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),Z.associations.set(K,Y)}}if(W!==void 0)K.colorSpace=W;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,W=Q.attributes.tangent===void 0,Z=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new S7,aJ.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new T7,aJ.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(W||Z||K){let H="ClonedMaterial:"+$.uuid+":";if(W)H+="derivative-tangents:";if(Z)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),Z)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(W){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return Q7}loadMaterial(J){let Q=this,$=this.json,W=this.extensions,Z=$.materials[J],K,H={},Y=Z.extensions||{},X=[];if(Y[m0.KHR_MATERIALS_UNLIT]){let G=W[m0.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),X.push(G.extendParams(H,Z,Q))}else{let G=Z.pbrMetallicRoughness||{};if(H.color=new S0(1,1,1),H.opacity=1,Array.isArray(G.baseColorFactor)){let N=G.baseColorFactor;H.color.setRGB(N[0],N[1],N[2],iJ),H.opacity=N[3]}if(G.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",G.baseColorTexture,D9));if(H.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,H.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",G.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(N){return N.getMaterialType&&N.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(N){return N.extendMaterialParams&&N.extendMaterialParams(J,H)})))}if(Z.doubleSided===!0)H.side=Q9;let U=Z.alphaMode||FW.OPAQUE;if(U===FW.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===FW.MASK)H.alphaTest=Z.alphaCutoff!==void 0?Z.alphaCutoff:0.5;if(Z.normalTexture!==void 0&&K!==b9){if(X.push(Q.assignTexture(H,"normalMap",Z.normalTexture)),H.normalScale=new T0(1,1),Z.normalTexture.scale!==void 0){let G=Z.normalTexture.scale;H.normalScale.set(G,G)}}if(Z.occlusionTexture!==void 0&&K!==b9){if(X.push(Q.assignTexture(H,"aoMap",Z.occlusionTexture)),Z.occlusionTexture.strength!==void 0)H.aoMapIntensity=Z.occlusionTexture.strength}if(Z.emissiveFactor!==void 0&&K!==b9){let G=Z.emissiveFactor;H.emissive=new S0().setRGB(G[0],G[1],G[2],iJ)}if(Z.emissiveTexture!==void 0&&K!==b9)X.push(Q.assignTexture(H,"emissiveMap",Z.emissiveTexture,D9));return Promise.all(X).then(function(){let G=new K(H);if(Z.name)G.name=Z.name;if(C9(G,Z),Q.associations.set(G,{materials:J}),Z.extensions)P8(W,G,Z);return G})}createUniqueName(J){let Q=o0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,W=this.primitiveCache;function Z(H){return $[m0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return DH(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=oN(X),G=W[U];if(G)K.push(G.promise);else{let N;if(X.extensions&&X.extensions[m0.KHR_DRACO_MESH_COMPRESSION])N=Z(X);else N=DH(new lJ,X,Q);if(X.mode===Z9.TRIANGLE_STRIP)N=N.then((q)=>qW(q,z7));else if(X.mode===Z9.TRIANGLE_FAN)N=N.then((q)=>qW(q,a8));W[U]={primitive:X,promise:N},K.push(N)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,W=this.extensions,Z=$.meshes[J],K=Z.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?nN(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],G=[];for(let q=0,F=U.length;q<F;q++){let M=U[q],V=K[q],E,O=X[q];if(V.mode===Z9.TRIANGLES||V.mode===Z9.TRIANGLE_STRIP||V.mode===Z9.TRIANGLE_FAN||V.mode===void 0){let z=Z.isSkinnedMesh===!0,P=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");if(z&&P===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(E=z&&P?new f6(M,O):new mJ(M,O),E.isSkinnedMesh===!0)E.normalizeSkinWeights()}else if(V.mode===Z9.LINES)E=new g6(M,O);else if(V.mode===Z9.LINE_STRIP)E=new e8(M,O);else if(V.mode===Z9.LINE_LOOP)E=new p6(M,O);else if(V.mode===Z9.POINTS)E=new l6(M,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+V.mode);if(Object.keys(E.geometry.morphAttributes).length>0)iN(E,Z);if(E.name=Q.createUniqueName(Z.name||"mesh_"+J),C9(E,Z),V.extensions)P8(W,E,V);Q.assignFinalMaterial(E),G.push(E)}for(let q=0,F=G.length;q<F;q++)Q.associations.set(G[q],{meshes:J,primitives:q});if(G.length===1){if(Z.extensions)P8(W,G[0],Z);return G[0]}let N=new O9;if(Z.extensions)P8(W,N,Z);Q.associations.set(N,{meshes:J});for(let q=0,F=G.length;q<F;q++)N.add(G[q]);return N})}loadCamera(J){let Q,$=this.json.cameras[J],W=$[$.type];if(!W){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new BJ(r8.radToDeg(W.yfov),W.aspectRatio||1,W.znear||1,W.zfar||2000000);else if($.type==="orthographic")Q=new W7(-W.xmag,W.xmag,W.ymag,-W.ymag,W.znear,W.zfar);if($.name)Q.name=this.createUniqueName($.name);return C9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let W=0,Z=Q.joints.length;W<Z;W++)$.push(this._loadNodeShallow(Q.joints[W]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(W){let Z=W.pop(),K=W,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let G=K[X];if(G){H.push(G);let N=new f0;if(Z!==null)N.fromArray(Z.array,X*16);Y.push(N)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new A7(H,Y)})}loadAnimation(J){let Q=this.json,$=this,W=Q.animations[J],Z=W.name?W.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let G=0,N=W.channels.length;G<N;G++){let q=W.channels[G],F=W.samplers[q.sampler],M=q.target,V=M.node,E=W.parameters!==void 0?W.parameters[F.input]:F.input,O=W.parameters!==void 0?W.parameters[F.output]:F.output;if(M.node===void 0)continue;K.push(this.getDependency("node",V)),H.push(this.getDependency("accessor",E)),Y.push(this.getDependency("accessor",O)),X.push(F),U.push(M)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(G){let N=G[0],q=G[1],F=G[2],M=G[3],V=G[4],E=[];for(let z=0,P=N.length;z<P;z++){let B=N[z],I=q[z],w=F[z],R=M[z],k=V[z];if(B===void 0)continue;if(B.updateMatrix)B.updateMatrix();let j=$._createAnimationTracks(B,I,w,R,k);if(j)for(let l=0;l<j.length;l++)E.push(j[l])}let O=new n6(Z,void 0,E);return C9(O,W),O})}createNodeMesh(J){let Q=this.json,$=this,W=Q.nodes[J];if(W.mesh===void 0)return null;return $.getDependency("mesh",W.mesh).then(function(Z){let K=$._getNodeRef($.meshCache,W.mesh,Z);if(W.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=W.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=W.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,W=Q.nodes[J],Z=$._loadNodeShallow(J),K=[],H=W.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=W.skin===void 0?Promise.resolve(null):$.getDependency("skin",W.skin);return Promise.all([Z,Promise.all(K),Y]).then(function(X){let U=X[0],G=X[1],N=X[2];if(N!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(N,rN)});for(let q=0,F=G.length;q<F;q++)U.add(G[q]);if(U.userData.pivot!==void 0&&G.length>0){let q=U.userData.pivot,F=G[0];U.pivot=new v().fromArray(q),U.position.x-=q[0],U.position.y-=q[1],U.position.z-=q[2],F.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,W=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let Z=Q.nodes[J],K=Z.name?W.createUniqueName(Z.name):"",H=[],Y=W._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(Z.camera!==void 0)H.push(W.getDependency("camera",Z.camera).then(function(X){return W._getNodeRef(W.cameraCache,Z.camera,X)}));return W._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(Z.isBone===!0)U=new w7;else if(X.length>1)U=new O9;else if(X.length===1)U=X[0];else U=new KJ;if(U!==X[0])for(let G=0,N=X.length;G<N;G++)U.add(X[G]);if(Z.name)U.userData.name=Z.name,U.name=K;if(C9(U,Z),Z.extensions)P8($,U,Z);if(Z.matrix!==void 0){let G=new f0;G.fromArray(Z.matrix),U.applyMatrix4(G)}else{if(Z.translation!==void 0)U.position.fromArray(Z.translation);if(Z.rotation!==void 0)U.quaternion.fromArray(Z.rotation);if(Z.scale!==void 0)U.scale.fromArray(Z.scale)}if(!W.associations.has(U))W.associations.set(U,{});else if(Z.mesh!==void 0&&W.meshCache.refs[Z.mesh]>1){let G=W.associations.get(U);W.associations.set(U,{...G})}return W.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],W=this,Z=new O9;if($.name)Z.name=W.createUniqueName($.name);if(C9(Z,$),$.extensions)P8(Q,Z,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(W.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,G=Y.length;U<G;U++){let N=Y[U];if(N.parent!==null)Z.add(FH(N));else Z.add(N)}let X=(U)=>{let G=new Map;for(let[N,q]of W.associations)if(N instanceof aJ||N instanceof FJ)G.set(N,q);return U.traverse((N)=>{let q=W.associations.get(N);if(q!=null)G.set(N,q)}),G};return W.associations=X(Z),Z})}_createAnimationTracks(J,Q,$,W,Z){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(q){if(q.morphTargetInfluences)Y.push(q.name?q.name:q.uuid)}if(Y8[Z.path]===Y8.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(Y8[Z.path]){case Y8.weights:U=W8;break;case Y8.rotation:U=Z8;break;case Y8.translation:case Y8.scale:U=C8;break;default:switch($.itemSize){case 1:U=W8;break;case 2:case 3:default:U=C8;break}break}let G=W.interpolation!==void 0?cN[W.interpolation]:A6,N=this._getArrayFromAccessor($);for(let q=0,F=Y.length;q<F;q++){let M=new U(Y[q]+"."+Y8[Z.path],Q.array,N,G);if(W.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(M);K.push(M)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=MW(Q.constructor),W=new Float32Array(Q.length);for(let Z=0,K=Q.length;Z<K;Z++)W[Z]=Q[Z]*$;Q=W}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof Z8?dH:VW)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tN(J,Q,$){let W=Q.attributes,Z=new W9;if(W.POSITION!==void 0){let Y=$.json.accessors[W.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(Z.set(new v(X[0],X[1],X[2]),new v(U[0],U[1],U[2])),Y.normalized){let G=MW(K7[Y.componentType]);Z.min.multiplyScalar(G),Z.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new v,X=new v;for(let U=0,G=K.length;U<G;U++){let N=K[U];if(N.POSITION!==void 0){let q=$.json.accessors[N.POSITION],F=q.min,M=q.max;if(F!==void 0&&M!==void 0){if(X.setX(Math.max(Math.abs(F[0]),Math.abs(M[0]))),X.setY(Math.max(Math.abs(F[1]),Math.abs(M[1]))),X.setZ(Math.max(Math.abs(F[2]),Math.abs(M[2]))),q.normalized){let V=MW(K7[q.componentType]);X.multiplyScalar(V)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Z.expandByVector(Y)}J.boundingBox=Z;let H=new oJ;Z.getCenter(H.center),H.radius=Z.min.distanceTo(Z.max)/2,J.boundingSphere=H}function DH(J,Q,$){let W=Q.attributes,Z=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in W){let Y=LW[H]||H.toLowerCase();if(Y in J.attributes)continue;Z.push(K(W[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});Z.push(H)}if(p0.workingColorSpace!==iJ&&"COLOR_0"in W)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${p0.workingColorSpace}" not supported.`);return C9(J,Q),tN(J,Q,$),Promise.all(Z).then(function(){return Q.targets!==void 0?sN(J,Q.targets,$):J})}var cH={type:"change"},BW={type:"start"},sH={type:"end"},YQ=new J8,nH=new eJ,eN=Math.cos(70*r8.DEG2RAD),LJ=new v,uJ=2*Math.PI,a0={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kW=0.000001;class zW extends JQ{constructor(J,Q=null){super(J,Q);if(this.state=a0.NONE,this.target=new v,this.cursor=new v,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o9.ROTATE,MIDDLE:o9.DOLLY,RIGHT:o9.PAN},this.touches={ONE:a9.ROTATE,TWO:a9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new v,this._lastQuaternion=new hJ,this._lastTargetPosition=new v,this._quat=new hJ().setFromUnitVectors(J.up,new v(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new f7,this._sphericalDelta=new f7,this._scale=1,this._panOffset=new v,this._rotateStart=new T0,this._rotateEnd=new T0,this._rotateDelta=new T0,this._panStart=new T0,this._panEnd=new T0,this._panDelta=new T0,this._dollyStart=new T0,this._dollyEnd=new T0,this._dollyDelta=new T0,this._dollyDirection=new v,this._mouse=new T0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qq.bind(this),this._onPointerDown=Jq.bind(this),this._onPointerUp=$q.bind(this),this._onContextMenu=Uq.bind(this),this._onMouseWheel=Kq.bind(this),this._onKeyDown=Hq.bind(this),this._onTouchStart=Yq.bind(this),this._onTouchMove=Xq.bind(this),this._onMouseDown=Wq.bind(this),this._onMouseMove=Zq.bind(this),this._interceptControlDown=Gq.bind(this),this._interceptControlUp=Nq.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=a0.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cH),this.update(),this.state=a0.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(LJ.copy(Q).sub(this.target),LJ.applyQuaternion(this._quat),this._spherical.setFromVector3(LJ),this.autoRotate&&this.state===a0.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,W=this.maxAzimuthAngle;if(isFinite($)&&isFinite(W)){if($<-Math.PI)$+=uJ;else if($>Math.PI)$-=uJ;if(W<-Math.PI)W+=uJ;else if(W>Math.PI)W-=uJ;if($<=W)this._spherical.theta=Math.max($,Math.min(W,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+W)/2?Math.max($,this._spherical.theta):Math.min(W,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let Z=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),Z=K!=this._spherical.radius}if(LJ.setFromSpherical(this._spherical),LJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(LJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let H=LJ.length();K=this._clampDistance(H*this._scale);let Y=H-K;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),Z=!!Y}else if(this.object.isOrthographicCamera){let H=new v(this._mouse.x,this._mouse.y,0);H.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),Z=Y!==this.object.zoom;let X=new v(this._mouse.x,this._mouse.y,0);X.unproject(this.object),this.object.position.sub(X).add(H),this.object.updateMatrixWorld(),K=LJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(YQ.origin.copy(this.object.position),YQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(YQ.direction))<eN)this.object.lookAt(this.target);else nH.setFromNormalAndCoplanarPoint(this.object.up,this.target),YQ.intersectPlane(nH,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),Z=!0}if(this._scale=1,this._performCursorZoom=!1,Z||this._lastPosition.distanceToSquared(this.object.position)>kW||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kW||this._lastTargetPosition.distanceToSquared(this.target)>kW)return this.dispatchEvent(cH),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return uJ/60*this.autoRotateSpeed*J;else return uJ/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){LJ.setFromMatrixColumn(Q,0),LJ.multiplyScalar(-J),this._panOffset.add(LJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)LJ.setFromMatrixColumn(Q,1);else LJ.setFromMatrixColumn(Q,0),LJ.crossVectors(this.object.up,LJ);LJ.multiplyScalar(J),this._panOffset.add(LJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let W=this.object.position;LJ.copy(W).sub(this.target);let Z=LJ.length();Z*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*Z/$.clientHeight,this.object.matrix),this._panUp(2*Q*Z/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),W=J-$.left,Z=Q-$.top,K=$.width,H=$.height;this._mouse.x=W/K*2-1,this._mouse.y=-(Z/H)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientY),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(uJ*this._rotateDelta.x/Q.clientHeight),this._rotateUp(uJ*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));if(this._dollyStart.copy(this._dollyEnd),this.zoomToCursor)this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize();this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(uJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-uJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(uJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-uJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._rotateStart.set($,W)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panStart.set($,W)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyStart.set(0,Z)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),W=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateEnd.set(W,Z)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(uJ*this._rotateDelta.x/Q.clientHeight),this._rotateUp(uJ*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panEnd.set($,W)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyEnd.set(0,Z),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+Q.x)*0.5,H=(J.pageY+Q.y)*0.5;this._updateZoomParameters(K,H)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new T0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function Jq(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function Qq(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function $q(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sH),this.state=a0.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function Wq(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case o9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=a0.DOLLY;break;case o9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=a0.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=a0.ROTATE}break;case o9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=a0.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=a0.PAN}break;default:this.state=a0.NONE}if(this.state!==a0.NONE)this.dispatchEvent(BW)}function Zq(J){switch(this.state){case a0.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case a0.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case a0.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function Kq(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==a0.NONE)return;J.preventDefault(),this.dispatchEvent(BW),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(sH)}function Hq(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function Yq(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case a9.ROTATE:if(this.enableRotate===!1){this.state=a0.NONE;break}this._handleTouchStartRotate(J),this.state=a0.TOUCH_ROTATE;break;case a9.PAN:if(this.enablePan===!1){this.state=a0.NONE;break}this._handleTouchStartPan(J),this.state=a0.TOUCH_PAN;break;default:this.state=a0.NONE}break;case 2:switch(this.touches.TWO){case a9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=a0.TOUCH_DOLLY_PAN;break;case a9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=a0.TOUCH_DOLLY_ROTATE;break;default:this.state=a0.NONE}break;default:this.state=a0.NONE}if(this.state!==a0.NONE)this.dispatchEvent(BW)}function Xq(J){switch(this._trackPointer(J),this.state){case a0.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case a0.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case a0.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case a0.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=a0.NONE}}function Uq(J){if(this.enabled===!1)return;J.preventDefault()}function Gq(J){if(J.key==="Control")this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Nq(J){if(J.key==="Control")this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var XQ=document.querySelector("canvas"),iH=document.querySelector("#status"),d7=new NW({canvas:XQ,antialias:!0,powerPreference:"low-power"});d7.setPixelRatio(Math.min(devicePixelRatio,1.25));d7.setClearColor(727090);d7.outputColorSpace=D9;var CW=new y6,m7=new BJ(55,1,0.01,1000);m7.position.set(0,1.48,0);CW.add(new i6(16777215,16777215,2));var UQ=new zW(m7,XQ);UQ.target.set(0,1,-9);UQ.enableDamping=!1;UQ.update();var qq=Uint8Array.from(atob(window.ISLAND_GLB),(J)=>J.charCodeAt(0));window.ISLAND_GLB=null;new DW().parse(qq.buffer,"",(J)=>{CW.add(J.scene),iH.textContent="Drag to orbit · scroll to zoom",PW()},()=>{iH.textContent="Could not load the model."});function PW(){d7.render(CW,m7)}function oH(){let{clientWidth:J,clientHeight:Q}=XQ;d7.setSize(J,Q,!1),m7.aspect=J/Q,m7.updateProjectionMatrix(),PW()}UQ.addEventListener("change",PW);window.addEventListener("resize",oH);oH();
