(()=>{var rK="187";var tK=0,u$=1,eK=2;var J6=1,JH=2,E7=3,H8=0,uJ=1,yJ=2,T8=0,Q6=1,c$=2,n$=3,s$=4,QH=5;var N7=100,$H=101,ZH=102,WH=103,KH=104,HH=200,YH=201,XH=202,UH=203,GH=204,EH=205,NH=206,qH=207,FH=208,OH=209,RH=210,LH=211,MH=212,VH=213,DH=214,BH=0,kH=1,zH=2,i$=3,_H=4,PH=5,IH=6,CH=7,wH=0,AH=1,TH=2,A9=0,o$=1,a$=2,r$=3,t$=4,e$=5,JZ=6,QZ=7;var $6=301,q7=302,qQ=303,FQ=304,F7=1000,O7=1001,OQ=1002,V9=1003,RQ=1004;var S8=1005;var hJ=1006,R7=1007;var D9=1008;var B9=1009,SH=1010,jH=1011,Z6=1012,$Z=1013,Y8=1014,u9=1015,T9=1016,ZZ=1017,WZ=1018,j8=1020,vH=35902,yH=35899,hH=1021,fH=1022,c9=1023,L7=1026,X8=1027,bH=1028,KZ=1029,v8=1030,HZ=1031;var YZ=1033,LQ=33776,MQ=33777,VQ=33778,DQ=33779,XZ=35840,UZ=35841,GZ=35842,EZ=35843,NZ=36196,qZ=37492,FZ=37496,OZ=37488,RZ=37489,BQ=37490,LZ=37491,MZ=37808,VZ=37809,DZ=37810,BZ=37811,kZ=37812,zZ=37813,_Z=37814,PZ=37815,IZ=37816,CZ=37817,wZ=37818,AZ=37819,TZ=37820,SZ=37821,jZ=36492,vZ=36494,yZ=36495,hZ=36283,fZ=36284,kQ=36285,bZ=36286;var xZ=2300,zQ=2301;var gZ=0,W6=1,M7=2;var pZ=0,xH=1,y8="",cJ="srgb",gJ="srgb-linear",lZ="linear",$J="srgb";var gH=512,pH=513,lH=514,mZ=515,mH=516,dH=517,dZ=518,uZ=519;var V7=35048;var cZ="300 es",nZ=2000;function mX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function dX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function X7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function uH(){let J=X7("canvas");return J.style.display="block",J}var $K={},U7=null;function a7(...J){let Q="THREE."+J.shift();if(U7)U7("log",Q,...J);else console.log(Q,...J)}function cH(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function _0(...J){J=cH(J);let Q="THREE."+J.shift();if(U7)U7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function j0(...J){J=cH(J);let Q="THREE."+J.shift();if(U7)U7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function I8(...J){let Q=J.join(" ");if(Q in $K)return;$K[Q]=!0,_0(...J)}function nH(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}var sH={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class n9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var jJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ZK=1234567,n7=Math.PI/180,C8=180/Math.PI;function k9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(jJ[J&255]+jJ[J>>8&255]+jJ[J>>16&255]+jJ[J>>24&255]+"-"+jJ[Q&255]+jJ[Q>>8&255]+"-"+jJ[Q>>16&15|64]+jJ[Q>>24&255]+"-"+jJ[$&63|128]+jJ[$>>8&255]+"-"+jJ[$>>16&255]+jJ[$>>24&255]+jJ[Z&255]+jJ[Z>>8&255]+jJ[Z>>16&255]+jJ[Z>>24&255]).toLowerCase()}function l0(J,Q,$){return Math.max(Q,Math.min($,J))}function sZ(J,Q){return(J%Q+Q)%Q}function uX(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function cX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function s7(J,Q,$){return(1-$)*J+$*Q}function nX(J,Q,$,Z){return s7(J,Q,1-Math.exp(-$*Z))}function sX(J,Q=1){return Q-Math.abs(sZ(J,Q*2)-Q)}function iX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function oX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function aX(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function rX(J,Q){return J+Math.random()*(Q-J)}function tX(J){return J*(0.5-Math.random())}function eX(J){if(J!==void 0)ZK=J;let Q=ZK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function JU(J){return J*n7}function QU(J){return J*C8}function $U(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function ZU(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function iZ(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function WU(J,Q,$,Z,W){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+Z)/2),G=H((Q+Z)/2),N=K((Q-Z)/2),E=H((Q-Z)/2),q=K((Z-Q)/2),R=H((Z-Q)/2);switch(W){case"XYX":J.set(Y*G,X*N,X*E,Y*U);break;case"YZY":J.set(X*E,Y*G,X*N,Y*U);break;case"ZXZ":J.set(X*N,X*E,Y*G,Y*U);break;case"XZX":J.set(Y*G,X*R,X*q,Y*U);break;case"YXY":J.set(X*q,Y*G,X*R,Y*U);break;case"ZYZ":J.set(X*R,X*q,Y*G,Y*U);break;default:_0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function _Q(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function oZ(J,Q){if(Q.constructor===Float32Array)return J;let $=_Q(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/$,-1)}function aZ(J,Q){if(Q.constructor===Float32Array)return J;let $=_Q(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*$)}var z9={DEG2RAD:n7,RAD2DEG:C8,generateUUID:k9,clamp:l0,euclideanModulo:sZ,mapLinear:uX,inverseLerp:cX,lerp:s7,damp:nX,pingpong:sX,smoothstep:iX,smootherstep:oX,randInt:aX,randFloat:rX,randFloatSpread:tX,seededRandom:eX,degToRad:JU,radToDeg:QU,isPowerOfTwo:$U,ceilPowerOfTwo:ZU,floorPowerOfTwo:iZ,setQuaternionFromProperEuler:WU,normalize:aZ,denormalize:oZ};class R0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*$-K*Z+J.x,this.y=W*Z+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,K,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],G=$[Z+3],N=W[K+0],E=W[K+1],q=W[K+2],R=W[K+3];if(G!==R||Y!==N||X!==E||U!==q){let D=Y*N+X*E+U*q+G*R;if(D<0)N=-N,E=-E,q=-q,R=-R,D=-D;let F=1-H;if(D<0.9995){let O=Math.acos(D),k=Math.sin(O);F=Math.sin(F*O)/k,H=Math.sin(H*O)/k,Y=Y*F+N*H,X=X*F+E*H,U=U*F+q*H,G=G*F+R*H}else{Y=Y*F+N*H,X=X*F+E*H,U=U*F+q*H,G=G*F+R*H;let O=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=O,X*=O,U*=O,G*=O}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){let H=$[Z],Y=$[Z+1],X=$[Z+2],U=$[Z+3],G=W[K],N=W[K+1],E=W[K+2],q=W[K+3];return J[Q]=H*q+U*G+Y*E-X*N,J[Q+1]=Y*q+U*N+X*G-H*E,J[Q+2]=X*q+U*E+H*N-Y*G,J[Q+3]=U*q-H*G-Y*N-X*E,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(Z/2),G=H(W/2),N=Y($/2),E=Y(Z/2),q=Y(W/2);switch(K){case"XYZ":this._x=N*U*G+X*E*q,this._y=X*E*G-N*U*q,this._z=X*U*q+N*E*G,this._w=X*U*G-N*E*q;break;case"YXZ":this._x=N*U*G+X*E*q,this._y=X*E*G-N*U*q,this._z=X*U*q-N*E*G,this._w=X*U*G+N*E*q;break;case"ZXY":this._x=N*U*G-X*E*q,this._y=X*E*G+N*U*q,this._z=X*U*q+N*E*G,this._w=X*U*G-N*E*q;break;case"ZYX":this._x=N*U*G-X*E*q,this._y=X*E*G+N*U*q,this._z=X*U*q-N*E*G,this._w=X*U*G+N*E*q;break;case"YZX":this._x=N*U*G+X*E*q,this._y=X*E*G+N*U*q,this._z=X*U*q-N*E*G,this._w=X*U*G-N*E*q;break;case"XZY":this._x=N*U*G-X*E*q,this._y=X*E*G-N*U*q,this._z=X*U*q+N*E*G,this._w=X*U*G+N*E*q;break;default:_0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],N=$+H+G;if(N>0){let E=0.5/Math.sqrt(N+1);this._w=0.25/E,this._x=(U-Y)*E,this._y=(W-X)*E,this._z=(K-Z)*E}else if($>H&&$>G){let E=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/E,this._x=0.25*E,this._y=(Z+K)/E,this._z=(W+X)/E}else if(H>G){let E=2*Math.sqrt(1+H-$-G);this._w=(W-X)/E,this._x=(Z+K)/E,this._y=0.25*E,this._z=(Y+U)/E}else{let E=2*Math.sqrt(1+G-$-H);this._w=(K-Z)/E,this._x=(W+X)/E,this._y=(Y+U)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(l0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+Z*X-W*Y,this._y=Z*U+K*Y+W*H-$*X,this._z=W*U+K*X+$*Y-Z*H,this._w=K*U-$*H-Z*Y-W*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=this.dot(J);if(H<0)$=-$,Z=-Z,W=-W,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(WK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(WK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*Z-H*$),U=2*(H*Q-W*Z),G=2*(W*$-K*Q);return this.x=Q+Y*X+K*G-H*U,this.y=$+Y*U+H*X-W*G,this.z=Z+Y*G+W*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=Z*Y-W*H,this.y=W*K-$*Y,this.z=$*H-Z*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return q$.copy(this).projectOnVector(J),this.sub(q$)}reflect(J){return this.sub(q$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var q$=new S,WK=new nJ;class y0{static{this.prototype.isMatrix3=!0}constructor(J,Q,$,Z,W,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X)}set(J,Q,$,Z,W,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],G=$[7],N=$[2],E=$[5],q=$[8],R=Z[0],D=Z[3],F=Z[6],O=Z[1],k=Z[4],_=Z[7],B=Z[2],I=Z[5],C=Z[8];return W[0]=K*R+H*O+Y*B,W[3]=K*D+H*k+Y*I,W[6]=K*F+H*_+Y*C,W[1]=X*R+U*O+G*B,W[4]=X*D+U*k+G*I,W[7]=X*F+U*_+G*C,W[2]=N*R+E*O+q*B,W[5]=N*D+E*k+q*I,W[8]=N*F+E*_+q*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*W*U+$*H*Y+Z*W*X-Z*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*K-H*X,N=H*Y-U*W,E=X*W-K*Y,q=Q*G+$*N+Z*E;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/q;return J[0]=G*R,J[1]=(Z*X-U*$)*R,J[2]=(H*$-Z*K)*R,J[3]=N*R,J[4]=(U*Q-Z*Y)*R,J[5]=(Z*W-H*Q)*R,J[6]=E*R,J[7]=($*Y-X*Q)*R,J[8]=(K*Q-$*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,K,H){let Y=Math.cos(W),X=Math.sin(W);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-Z*X,Z*Y,-Z*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return I8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(F$.makeScale(J,Q)),this}rotate(J){return I8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(F$.makeRotation(-J)),this}translate(J,Q){return I8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(F$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var F$=new y0,KK=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),HK=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function KU(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=d9(W.r),W.g=d9(W.g),W.b=d9(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=H7(W.r),W.g=H7(W.g),W.b=H7(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[H].fromXYZ).multiply(this.spaces[K].toXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:KK,fromXYZ:HK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:KK,fromXYZ:HK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var g0=KU();function d9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function H7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var m8;class rZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(m8===void 0)m8=X7("canvas");m8.width=J.width,m8.height=J.height;let Z=m8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=m8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=X7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=d9(W[K]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(d9(Q[$]/255)*255);else Q[$]=d9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return _0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var HU=0;class K6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:HU++}),this.uuid=k9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++)if(Z[K].isDataTexture)W.push(O$(Z[K].image));else W.push(O$(Z[K]))}else W=O$(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function O$(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return rZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return _0("Texture: Unable to serialize Texture."),{}}var YU=0,R$=new S;class EJ extends n9{constructor(J=EJ.DEFAULT_IMAGE,Q=EJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,K=1008,H=1023,Y=1009,X=EJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:YU++}),this.uuid=k9(),this.name="",this.source=new K6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new R0(0,0),this.repeat=new R0(1,1),this.center=new R0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(R$).x}get height(){return this.source.getSize(R$).y}get depth(){return this.source.getSize(R$).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){_0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){_0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}EJ.DEFAULT_IMAGE=null;EJ.DEFAULT_MAPPING=300;EJ.DEFAULT_ANISOTROPY=1;class JJ{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W,this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W,this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W,this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],N=Y[1],E=Y[5],q=Y[9],R=Y[2],D=Y[6],F=Y[10];if(Math.abs(U-N)<0.01&&Math.abs(G-R)<0.01&&Math.abs(q-D)<0.01){if(Math.abs(U+N)<0.1&&Math.abs(G+R)<0.1&&Math.abs(q+D)<0.1&&Math.abs(X+E+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let k=(X+1)/2,_=(E+1)/2,B=(F+1)/2,I=(U+N)/4,C=(G+R)/4,L=(q+D)/4;if(k>_&&k>B)if(k<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(k),Z=I/$,W=C/$;else if(_>B)if(_<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(_),$=I/Z,W=L/Z;else if(B<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(B),$=C/W,Z=L/W;return this.set($,Z,W,Q),this}let O=Math.sqrt((D-q)*(D-q)+(G-R)*(G-R)+(N-U)*(N-U));if(Math.abs(O)<0.001)O=1;return this.x=(D-q)/O,this.y=(G-R)/O,this.z=(N-U)/O,this.w=Math.acos((X+E+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this.w=l0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this.w=l0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tZ extends n9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new JJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new JJ(0,0,J,Q),this.textures=[];let Z=$.count;for(let W=0;W<Z;W++)this.textures[W]=new EJ({width:J,height:Q,depth:$.depth}),this.textures[W].isRenderTargetTexture=!0,this.textures[W].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new K6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class H9 extends tZ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class PQ extends EJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class eZ extends EJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class v0{static{this.prototype.isMatrix4=!0}constructor(J,Q,$,Z,W,K,H,Y,X,U,G,N,E,q,R,D){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X,U,G,N,E,q,R,D)}set(J,Q,$,Z,W,K,H,Y,X,U,G,N,E,q,R,D){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=$,F[12]=Z,F[1]=W,F[5]=K,F[9]=H,F[13]=Y,F[2]=X,F[6]=U,F[10]=G,F[14]=N,F[3]=E,F[7]=q,F[11]=R,F[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new v0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/d8.setFromMatrixColumn(J,0).length(),W=1/d8.setFromMatrixColumn(J,1).length(),K=1/d8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let N=K*U,E=K*G,q=H*U,R=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=E+q*X,Q[5]=N-R*X,Q[9]=-H*Y,Q[2]=R-N*X,Q[6]=q+E*X,Q[10]=K*Y}else if(J.order==="YXZ"){let N=Y*U,E=Y*G,q=X*U,R=X*G;Q[0]=N+R*H,Q[4]=q*H-E,Q[8]=K*X,Q[1]=K*G,Q[5]=K*U,Q[9]=-H,Q[2]=E*H-q,Q[6]=R+N*H,Q[10]=K*Y}else if(J.order==="ZXY"){let N=Y*U,E=Y*G,q=X*U,R=X*G;Q[0]=N-R*H,Q[4]=-K*G,Q[8]=q+E*H,Q[1]=E+q*H,Q[5]=K*U,Q[9]=R-N*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let N=K*U,E=K*G,q=H*U,R=H*G;Q[0]=Y*U,Q[4]=q*X-E,Q[8]=N*X+R,Q[1]=Y*G,Q[5]=R*X+N,Q[9]=E*X-q,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let N=K*Y,E=K*X,q=H*Y,R=H*X;Q[0]=Y*U,Q[4]=R-N*G,Q[8]=q*G+E,Q[1]=G,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=E*G+q,Q[10]=N-R*G}else if(J.order==="XZY"){let N=K*Y,E=K*X,q=H*Y,R=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=N*G+R,Q[5]=K*U,Q[9]=E*G-q,Q[2]=q*G-E,Q[6]=H*U,Q[10]=R*G+N}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(XU,J,UU)}lookAt(J,Q,$){let Z=this.elements;if(tJ.subVectors(J,Q),tJ.lengthSq()===0)tJ.z=1;if(tJ.normalize(),e9.crossVectors($,tJ),e9.lengthSq()===0){if(Math.abs($.z)===1)tJ.x+=0.0001;else tJ.z+=0.0001;tJ.normalize(),e9.crossVectors($,tJ)}return e9.normalize(),y6.crossVectors(tJ,e9),Z[0]=e9.x,Z[4]=y6.x,Z[8]=tJ.x,Z[1]=e9.y,Z[5]=y6.y,Z[9]=tJ.y,Z[2]=e9.z,Z[6]=y6.z,Z[10]=tJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],G=$[5],N=$[9],E=$[13],q=$[2],R=$[6],D=$[10],F=$[14],O=$[3],k=$[7],_=$[11],B=$[15],I=Z[0],C=Z[4],L=Z[8],z=Z[12],j=Z[1],l=Z[5],y=Z[9],p=Z[13],t=Z[2],A=Z[6],s=Z[10],o=Z[14],x=Z[3],K0=Z[7],u=Z[11],r=Z[15];return W[0]=K*I+H*j+Y*t+X*x,W[4]=K*C+H*l+Y*A+X*K0,W[8]=K*L+H*y+Y*s+X*u,W[12]=K*z+H*p+Y*o+X*r,W[1]=U*I+G*j+N*t+E*x,W[5]=U*C+G*l+N*A+E*K0,W[9]=U*L+G*y+N*s+E*u,W[13]=U*z+G*p+N*o+E*r,W[2]=q*I+R*j+D*t+F*x,W[6]=q*C+R*l+D*A+F*K0,W[10]=q*L+R*y+D*s+F*u,W[14]=q*z+R*p+D*o+F*r,W[3]=O*I+k*j+_*t+B*x,W[7]=O*C+k*l+_*A+B*K0,W[11]=O*L+k*y+_*s+B*u,W[15]=O*z+k*p+_*o+B*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],N=J[10],E=J[14],q=J[3],R=J[7],D=J[11],F=J[15],O=Y*E-X*N,k=H*E-X*G,_=H*N-Y*G,B=K*E-X*U,I=K*N-Y*U,C=K*G-H*U;return Q*(R*O-D*k+F*_)-$*(q*O-D*B+F*I)+Z*(q*k-R*B+F*C)-W*(q*_-R*I+D*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(W*U-H*Y)+Z*(W*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],N=J[10],E=J[11],q=J[12],R=J[13],D=J[14],F=J[15],O=Q*H-$*K,k=Q*Y-Z*K,_=Q*X-W*K,B=$*Y-Z*H,I=$*X-W*H,C=Z*X-W*Y,L=U*R-G*q,z=U*D-N*q,j=U*F-E*q,l=G*D-N*R,y=G*F-E*R,p=N*F-E*D,t=O*p-k*y+_*l+B*j-I*z+C*L;if(t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/t;return J[0]=(H*p-Y*y+X*l)*A,J[1]=(Z*y-$*p-W*l)*A,J[2]=(R*C-D*I+F*B)*A,J[3]=(N*I-G*C-E*B)*A,J[4]=(Y*j-K*p-X*z)*A,J[5]=(Q*p-Z*j+W*z)*A,J[6]=(D*_-q*C-F*k)*A,J[7]=(U*C-N*_+E*k)*A,J[8]=(K*y-H*j+X*L)*A,J[9]=($*j-Q*y-W*L)*A,J[10]=(q*I-R*_+F*O)*A,J[11]=(G*_-U*I-E*O)*A,J[12]=(H*z-K*l-Y*L)*A,J[13]=(Q*l-$*z+Z*L)*A,J[14]=(R*k-q*B-D*O)*A,J[15]=(U*B-G*k+N*O)*A,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,K=J.x,H=J.y,Y=J.z,X=W*K,U=W*H;return this.set(X*K+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*K,0,X*Y-Z*H,U*Y+Z*K,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,K){return this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=W+W,U=K+K,G=H+H,N=W*X,E=W*U,q=W*G,R=K*U,D=K*G,F=H*G,O=Y*X,k=Y*U,_=Y*G,B=$.x,I=$.y,C=$.z;return Z[0]=(1-(R+F))*B,Z[1]=(E+_)*B,Z[2]=(q-k)*B,Z[3]=0,Z[4]=(E-_)*I,Z[5]=(1-(N+F))*I,Z[6]=(D+O)*I,Z[7]=0,Z[8]=(q+k)*C,Z[9]=(D-O)*C,Z[10]=(1-(N+R))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let K=d8.set(Z[0],Z[1],Z[2]).length(),H=d8.set(Z[4],Z[5],Z[6]).length(),Y=d8.set(Z[8],Z[9],Z[10]).length();if(W<0)K=-K;O9.copy(this);let X=1/K,U=1/H,G=1/Y;return O9.elements[0]*=X,O9.elements[1]*=X,O9.elements[2]*=X,O9.elements[4]*=U,O9.elements[5]*=U,O9.elements[6]*=U,O9.elements[8]*=G,O9.elements[9]*=G,O9.elements[10]*=G,Q.setFromRotationMatrix(O9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2*W/(Q-J),G=2*W/($-Z),N=(Q+J)/(Q-J),E=($+Z)/($-Z),q,R;if(Y)q=W/(K-W),R=K*W/(K-W);else if(H===2000)q=-(K+W)/(K-W),R=-2*K*W/(K-W);else if(H===2001)q=-K/(K-W),R=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=N,X[12]=0,X[1]=0,X[5]=G,X[9]=E,X[13]=0,X[2]=0,X[6]=0,X[10]=q,X[14]=R,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),G=2/($-Z),N=-(Q+J)/(Q-J),E=-($+Z)/($-Z),q,R;if(Y)q=1/(K-W),R=K/(K-W);else if(H===2000)q=-2/(K-W),R=-(K+W)/(K-W);else if(H===2001)q=-1/(K-W),R=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=N,X[1]=0,X[5]=G,X[9]=0,X[13]=E,X[2]=0,X[6]=0,X[10]=q,X[14]=R,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var d8=new S,O9=new v0,XU=new S(0,0,0),UU=new S(1,1,1),e9=new S,y6=new S,tJ=new S,YK=new v0,XK=new nJ;class M9{constructor(J=0,Q=0,$=0,Z=M9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],K=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],G=Z[2],N=Z[6],E=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(l0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,E),this._z=Math.atan2(-K,W);else this._x=Math.atan2(N,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-l0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,E),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(l0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-G,E),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-l0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(N,E),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(l0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(H,E);break;case"XZY":if(this._z=Math.asin(-l0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(N,X),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,E),this._y=0;break;default:_0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return YK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(YK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return XK.setFromEuler(this),this.setFromQuaternion(XK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}M9.DEFAULT_ORDER="XYZ";class IQ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var GU=0,UK=new S,u8=new nJ,b9=new v0,h6=new S,v7=new S,EU=new S,NU=new nJ,GK=new S(1,0,0),EK=new S(0,1,0),NK=new S(0,0,1),qK={type:"added"},qU={type:"removed"},c8={type:"childadded",child:null},L$={type:"childremoved",child:null};class r0 extends n9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:GU++}),this.uuid=k9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r0.DEFAULT_UP.clone();let J=new S,Q=new M9,$=new nJ,Z=new S(1,1,1);function W(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new v0},normalMatrix:{value:new y0}}),this.matrix=new v0,this.matrixWorld=new v0,this.matrixAutoUpdate=r0.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new IQ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return u8.setFromAxisAngle(J,Q),this.quaternion.multiply(u8),this}rotateOnWorldAxis(J,Q){return u8.setFromAxisAngle(J,Q),this.quaternion.premultiply(u8),this}rotateX(J){return this.rotateOnAxis(GK,J)}rotateY(J){return this.rotateOnAxis(EK,J)}rotateZ(J){return this.rotateOnAxis(NK,J)}translateOnAxis(J,Q){return UK.copy(J).applyQuaternion(this.quaternion),this.position.add(UK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(GK,J)}translateY(J){return this.translateOnAxis(EK,J)}translateZ(J){return this.translateOnAxis(NK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(b9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)h6.copy(J);else h6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),v7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)b9.lookAt(v7,h6,this.up);else b9.lookAt(h6,v7,this.up);if(this.quaternion.setFromRotationMatrix(b9),Z)b9.extractRotation(Z.matrixWorld),u8.setFromRotationMatrix(b9),this.quaternion.premultiply(u8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return j0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(qK),c8.child=J,this.dispatchEvent(c8),c8.child=null;else j0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(qU),L$.child=J,this.dispatchEvent(L$),L$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),b9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),b9.multiply(J.parent.matrixWorld);return J.applyMatrix4(b9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(qK),c8.child=J,this.dispatchEvent(c8),c8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(v7,J,EU),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(v7,NU,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*Z,W[13]+=$-W[1]*Q-W[5]*$-W[9]*Z,W[14]+=Z-W[2]*Q-W[6]*$-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let K=0,H=W.length;K<H;K++)W[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];W(J.shapes,G)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(W(J.materials,this.material[Y]));Z.material=H}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(W(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),G=K(J.shapes),N=K(J.skeletons),E=K(J.animations),q=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(N.length>0)$.skeletons=N;if(E.length>0)$.animations=E;if(q.length>0)$.nodes=q}return $.object=Z,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}r0.DEFAULT_UP=new S(0,1,0);r0.DEFAULT_MATRIX_AUTO_UPDATE=!0;r0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dJ extends r0{constructor(){super();this.isGroup=!0,this.type="Group"}}var FU={type:"move"};class H6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new dJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new dJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new dJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let R of J.hand.values()){let D=Q.getJointPose(R,$),F=this._getHandJoint(X,R);if(D!==null)F.matrix.fromArray(D.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=D.radius;F.visible=D!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],N=U.position.distanceTo(G.position),E=0.02,q=0.005;if(X.inputState.pinching&&N>E+q)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&N<=E-q)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(FU)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new dJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var iH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},J8={h:0,s:0,l:0},f6={h:0,s:0,l:0};function M$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class A0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,g0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=g0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,g0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=g0.workingColorSpace){if(J=sZ(J,1),Q=l0(Q,0,1),$=l0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-W;this.r=M$(K,W,J+0.3333333333333333),this.g=M$(K,W,J),this.b=M$(K,W,J-0.3333333333333333)}return g0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)_0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(100,parseFloat(W[1]))/100,Math.min(100,parseFloat(W[2]))/100,Math.min(100,parseFloat(W[3]))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:_0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else _0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=iH[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else _0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=d9(J.r),this.g=d9(J.g),this.b=d9(J.b),this}copyLinearToSRGB(J){return this.r=H7(J.r),this.g=H7(J.g),this.b=H7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return g0.workingToColorSpace(vJ.copy(this),J),Math.round(l0(vJ.r*255,0,255))*65536+Math.round(l0(vJ.g*255,0,255))*256+Math.round(l0(vJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=g0.workingColorSpace){g0.workingToColorSpace(vJ.copy(this),Q);let{r:$,g:Z,b:W}=vJ,K=Math.max($,Z,W),H=Math.min($,Z,W),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let G=K-H;switch(X=U<=0.5?G/(K+H):G/(2-K-H),K){case $:Y=(Z-W)/G+(Z<W?6:0);break;case Z:Y=(W-$)/G+2;break;case W:Y=($-Z)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=g0.workingColorSpace){return g0.workingToColorSpace(vJ.copy(this),Q),J.r=vJ.r,J.g=vJ.g,J.b=vJ.b,J}getStyle(J="srgb"){g0.workingToColorSpace(vJ.copy(this),J);let{r:Q,g:$,b:Z}=vJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(J8),this.setHSL(J8.h+J,J8.s+Q,J8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(J8),J.getHSL(f6);let $=s7(J8.h,f6.h,Q),Z=s7(J8.s,f6.s,Q),W=s7(J8.l,f6.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var vJ=new A0;A0.NAMES=iH;class CQ extends r0{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new M9,this.environmentIntensity=1,this.environmentRotation=new M9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){return super.copy(J,Q),this.background=J.background!==null?J.background.clone():null,this.environment=J.environment!==null?J.environment.clone():null,this.fog=J.fog!==null?J.fog.clone():null,this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),this.overrideMaterial=J.overrideMaterial!==null?J.overrideMaterial.clone():null,this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var R9=new S,x9=new S,V$=new S,g9=new S,n8=new S,s8=new S,FK=new S,D$=new S,B$=new S,k$=new S,z$=new JJ,_$=new JJ,P$=new JJ;class J9{constructor(J=new S,Q=new S,$=new S){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),R9.subVectors(J,Q),Z.cross(R9);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){R9.subVectors(Z,Q),x9.subVectors($,Q),V$.subVectors(J,Q);let K=R9.dot(R9),H=R9.dot(x9),Y=R9.dot(V$),X=x9.dot(x9),U=x9.dot(V$),G=K*X-H*H;if(G===0)return W.set(0,0,0),null;let N=1/G,E=(X*Y-H*U)*N,q=(K*U-H*Y)*N;return W.set(1-E-q,q,E)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,g9)===null)return!1;return g9.x>=0&&g9.y>=0&&g9.x+g9.y<=1}static getInterpolation(J,Q,$,Z,W,K,H,Y){if(this.getBarycoord(J,Q,$,Z,g9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,g9.x),Y.addScaledVector(K,g9.y),Y.addScaledVector(H,g9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,W,K){return z$.setScalar(0),_$.setScalar(0),P$.setScalar(0),z$.fromBufferAttribute(J,Q),_$.fromBufferAttribute(J,$),P$.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(z$,W.x),K.addScaledVector(_$,W.y),K.addScaledVector(P$,W.z),K}static isFrontFacing(J,Q,$,Z){return R9.subVectors($,Q),x9.subVectors(J,Q),R9.cross(x9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return R9.subVectors(this.c,this.b),x9.subVectors(this.a,this.b),R9.cross(x9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return J9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return J9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return J9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return J9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return J9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,K,H;n8.subVectors(Z,$),s8.subVectors(W,$),D$.subVectors(J,$);let Y=n8.dot(D$),X=s8.dot(D$);if(Y<=0&&X<=0)return Q.copy($);B$.subVectors(J,Z);let U=n8.dot(B$),G=s8.dot(B$);if(U>=0&&G<=U)return Q.copy(Z);let N=Y*G-U*X;if(N<=0&&Y>=0&&U<=0&&Y-U>0)return K=Y/(Y-U),Q.copy($).addScaledVector(n8,K);k$.subVectors(J,W);let E=n8.dot(k$),q=s8.dot(k$);if(q>=0&&E<=q)return Q.copy(W);let R=E*X-Y*q;if(R<=0&&X>=0&&q<=0)return H=X/(X-q),Q.copy($).addScaledVector(s8,H);let D=U*q-E*G;if(D<=0&&G-U>=0&&E-q>=0)return FK.subVectors(W,Z),H=(G-U)/(G-U+(E-q)),Q.copy(Z).addScaledVector(FK,H);let F=1/(D+R+N);return K=R*F,H=N*F,Q.copy($).addScaledVector(n8,K).addScaledVector(s8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class sJ{constructor(J=new S(1/0,1/0,1/0),Q=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(L9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(L9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=L9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,L9);else L9.fromBufferAttribute(W,K);L9.applyMatrix4(J.matrixWorld),this.expandByPoint(L9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();b6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();b6.copy($.boundingBox)}b6.applyMatrix4(J.matrixWorld),this.union(b6)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,L9),L9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(y7),x6.subVectors(this.max,y7),i8.subVectors(J.a,y7),o8.subVectors(J.b,y7),a8.subVectors(J.c,y7),Q8.subVectors(o8,i8),$8.subVectors(a8,o8),k8.subVectors(i8,a8);let Q=[0,-Q8.z,Q8.y,0,-$8.z,$8.y,0,-k8.z,k8.y,Q8.z,0,-Q8.x,$8.z,0,-$8.x,k8.z,0,-k8.x,-Q8.y,Q8.x,0,-$8.y,$8.x,0,-k8.y,k8.x,0];if(!I$(Q,i8,o8,a8,x6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!I$(Q,i8,o8,a8,x6))return!1;return g6.crossVectors(Q8,$8),Q=[g6.x,g6.y,g6.z],I$(Q,i8,o8,a8,x6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,L9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(L9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return p9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),p9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),p9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),p9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),p9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),p9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),p9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),p9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(p9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var p9=[new S,new S,new S,new S,new S,new S,new S,new S],L9=new S,b6=new sJ,i8=new S,o8=new S,a8=new S,Q8=new S,$8=new S,k8=new S,y7=new S,x6=new S,g6=new S,z8=new S;function I$(J,Q,$,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){z8.fromArray(J,K);let Y=W.x*Math.abs(z8.x)+W.y*Math.abs(z8.y)+W.z*Math.abs(z8.z),X=Q.dot(z8),U=$.dot(z8),G=Z.dot(z8);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var OJ=new S,p6=new R0,OU=0;class UJ extends n9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OU++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?_Q(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)p6.fromBufferAttribute(this,Q),p6.applyMatrix3(J),this.setXY(Q,p6.x,p6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.applyMatrix3(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.applyMatrix4(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.applyNormalMatrix(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)OJ.fromBufferAttribute(this,Q),OJ.transformDirection(J),this.setXYZ(Q,OJ.x,OJ.y,OJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),Z=this._normalize(Z),W=this._normalize(W);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):oZ(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):aZ(J,this.array)}}class wQ extends UJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class AQ extends UJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class IJ extends UJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var RU=new sJ,h7=new S,C$=new S;class Q9{constructor(J=new S,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else RU.setFromPoints(J).getCenter($);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;h7.subVectors(J,this.center);let Q=h7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(h7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else C$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(h7.copy(J.center).add(C$)),this.expandByPoint(h7.copy(J.center).sub(C$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var LU=0,K9=new v0,w$=new r0,r8=new S,eJ=new sJ,f7=new sJ,kJ=new S;class RJ extends n9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LU++}),this.uuid=k9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((mX(J))?AQ:wQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new y0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return K9.makeRotationFromQuaternion(J),this.applyMatrix4(K9),this}rotateX(J){return K9.makeRotationX(J),this.applyMatrix4(K9),this}rotateY(J){return K9.makeRotationY(J),this.applyMatrix4(K9),this}rotateZ(J){return K9.makeRotationZ(J),this.applyMatrix4(K9),this}translate(J,Q,$){return K9.makeTranslation(J,Q,$),this.applyMatrix4(K9),this}scale(J,Q,$){return K9.makeScale(J,Q,$),this.applyMatrix4(K9),this}lookAt(J){return w$.lookAt(J),w$.updateMatrix(),this.applyMatrix4(w$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(r8).negate(),this.translate(r8.x,r8.y,r8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new IJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)_0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new sJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(eJ.setFromBufferAttribute(W),this.morphTargetsRelative)kJ.addVectors(this.boundingBox.min,eJ.min),this.boundingBox.expandByPoint(kJ),kJ.addVectors(this.boundingBox.max,eJ.max),this.boundingBox.expandByPoint(kJ);else this.boundingBox.expandByPoint(eJ.min),this.boundingBox.expandByPoint(eJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))j0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Q9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(J){let $=this.boundingSphere.center;if(eJ.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if(f7.setFromBufferAttribute(H),this.morphTargetsRelative)kJ.addVectors(eJ.min,f7.min),eJ.expandByPoint(kJ),kJ.addVectors(eJ.max,f7.max),eJ.expandByPoint(kJ);else eJ.expandByPoint(f7.min),eJ.expandByPoint(f7.max)}eJ.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++)kJ.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(kJ));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(kJ.fromBufferAttribute(H,X),Y)r8.fromBufferAttribute(J,X),kJ.add(r8);Z=Math.max(Z,$.distanceToSquared(kJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))j0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){j0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new UJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[],X=new Uint8Array($.count);for(let z=0;z<$.count;z++)H[z]=new S,Y[z]=new S;let U=new S,G=new S,N=new S,E=new R0,q=new R0,R=new R0,D=new S,F=new S;function O(z,j,l){X[z]=X[j]=X[l]=1,U.fromBufferAttribute($,z),G.fromBufferAttribute($,j),N.fromBufferAttribute($,l),E.fromBufferAttribute(W,z),q.fromBufferAttribute(W,j),R.fromBufferAttribute(W,l),G.sub(U),N.sub(U),q.sub(E),R.sub(E);let y=1/(q.x*R.y-R.x*q.y);if(!isFinite(y))return;D.copy(G).multiplyScalar(R.y).addScaledVector(N,-q.y).multiplyScalar(y),F.copy(N).multiplyScalar(q.x).addScaledVector(G,-R.x).multiplyScalar(y),H[z].add(D),H[j].add(D),H[l].add(D),Y[z].add(F),Y[j].add(F),Y[l].add(F)}let k=this.groups;if(k.length===0)k=[{start:0,count:J.count}];for(let z=0,j=k.length;z<j;++z){let l=k[z],y=l.start,p=l.count;for(let t=y,A=y+p;t<A;t+=3)O(J.getX(t+0),J.getX(t+1),J.getX(t+2))}let _=new S,B=new S,I=new S,C=new S;function L(z){I.fromBufferAttribute(Z,z),C.copy(I);let j=H[z];_.copy(j),_.sub(I.multiplyScalar(I.dot(j))).normalize(),B.crossVectors(C,j);let y=B.dot(Y[z])<0?-1:1;K.setXYZW(z,_.x,_.y,_.z,y)}for(let z=0,j=$.count;z<j;++z)if(X[z])L(z);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new UJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let N=0,E=$.count;N<E;N++)$.setXYZ(N,0,0,0);let Z=new S,W=new S,K=new S,H=new S,Y=new S,X=new S,U=new S,G=new S;if(J)for(let N=0,E=J.count;N<E;N+=3){let q=J.getX(N+0),R=J.getX(N+1),D=J.getX(N+2);Z.fromBufferAttribute(Q,q),W.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,D),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),H.fromBufferAttribute($,q),Y.fromBufferAttribute($,R),X.fromBufferAttribute($,D),H.add(U),Y.add(U),X.add(U),$.setXYZ(q,H.x,H.y,H.z),$.setXYZ(R,Y.x,Y.y,Y.z),$.setXYZ(D,X.x,X.y,X.z)}else for(let N=0,E=Q.count;N<E;N+=3)Z.fromBufferAttribute(Q,N+0),W.fromBufferAttribute(Q,N+1),K.fromBufferAttribute(Q,N+2),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(N+0,U.x,U.y,U.z),$.setXYZ(N+1,U.x,U.y,U.z),$.setXYZ(N+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)kJ.fromBufferAttribute(J,Q),kJ.normalize(),J.setXYZ(Q,kJ.x,kJ.y,kJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,N=new X.constructor(Y.length*U),E=0,q=0;for(let R=0,D=Y.length;R<D;R++){if(H.isInterleavedBufferAttribute)E=Y[R]*H.data.stride+H.offset;else E=Y[R]*U;for(let F=0;F<U;F++)N[q++]=X[E++]}return new UJ(N,U,G)}if(this.index===null)return _0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new RJ,$=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,$);Q.setAttribute(H,X)}let W=this.morphAttributes;for(let H in W){let Y=[],X=W[H];for(let U=0,G=X.length;U<G;U++){let N=X[U],E=J(N,$);Y.push(E)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,N=X.length;G<N;G++){let E=X[G];U.push(E.toJSON(J.data))}if(U.length>0)Z[Y]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],G=W[X];for(let N=0,E=G.length;N<E;N++)U.push(G[N].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let G=K[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class U8{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=k9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=OK(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[Q]),Z=new this.constructor($,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=OK(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=Array.from(new Uint32Array(this.array.slice(0).buffer));let $={uuid:this.uuid,buffer:Q,type:this.array.constructor.name,stride:this.stride};return $.usage=this.usage,$}}function OK(J){if(J.buffer._uuid===void 0)J.buffer._uuid=k9();if(J.byteOffset===0&&J.byteLength===J.buffer.byteLength)return J.buffer._uuid;return J.buffer._uuid+":"+J.byteOffset+":"+J.byteLength}var xJ=new S;class w9{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z,this._normalizationScale=J!==void 0?_Q(J.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)xJ.fromBufferAttribute(this,Q),xJ.applyMatrix4(J),this.setXYZ(Q,xJ.x,xJ.y,xJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)xJ.fromBufferAttribute(this,Q),xJ.applyNormalMatrix(J),this.setXYZ(Q,xJ.x,xJ.y,xJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)xJ.fromBufferAttribute(this,Q),xJ.transformDirection(J),this.setXYZ(Q,xJ.x,xJ.y,xJ.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=this._denormalize(Q);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=this._denormalize(Q);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=this._denormalize(Q);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=this._denormalize(Q);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($),Z=this._normalize(Z);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),$=this._normalize($),Z=this._normalize(Z),W=this._normalize(W);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){a7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new UJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new w9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){a7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):oZ(J,this.data.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):aZ(J,this.data.array)}}var A$=new S,MU=new S,VU=new y0;class I9{constructor(J=new S(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=A$.subVectors($,Q).cross(MU.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(A$),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(Z,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||VU.getNormalMatrix(J),Z=this.coplanarPoint(A$).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var DU=0;class iJ extends n9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:DU++}),this.uuid=k9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new A0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){_0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){_0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)$.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)$.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((W)=>W.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if(Q){let W=Z(J.textures),K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new A0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new I9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new R0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new R0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class Y6 extends iJ{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new A0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var t8,b7=new S,e8=new S,J7=new S,Q7=new R0,x7=new R0,oH=new v0,l6=new S,g7=new S,m6=new S,RK=new R0,T$=new R0,LK=new R0;class TQ extends r0{constructor(J=new Y6){super();if(this.isSprite=!0,this.type="Sprite",t8===void 0){t8=new RJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new U8(Q,5);t8.setIndex([0,1,2,0,2,3]),t8.setAttribute("position",new w9($,3,0,!1)),t8.setAttribute("uv",new w9($,2,3,!1))}this.geometry=t8,this.material=J,this.center=new R0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)j0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(e8.setFromMatrixScale(this.matrixWorld),oH.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),J7.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)e8.multiplyScalar(-J7.z);let $=this.material.rotation,Z,W;if($!==0)W=Math.cos($),Z=Math.sin($);let K=this.center;d6(l6.set(-0.5,-0.5,0),J7,K,e8,Z,W),d6(g7.set(0.5,-0.5,0),J7,K,e8,Z,W),d6(m6.set(0.5,0.5,0),J7,K,e8,Z,W),RK.set(0,0),T$.set(1,0),LK.set(1,1);let H=J.ray.intersectTriangle(l6,g7,m6,!1,b7);if(H===null){if(d6(g7.set(-0.5,0.5,0),J7,K,e8,Z,W),T$.set(0,1),H=J.ray.intersectTriangle(l6,m6,g7,!1,b7),H===null)return}let Y=J.ray.origin.distanceTo(b7);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:b7.clone(),uv:J9.getInterpolation(b7,l6,g7,m6,RK,T$,LK,new R0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}toJSON(J){let Q=super.toJSON(J);return Q.object.center=this.center.toArray(),Q}}function d6(J,Q,$,Z,W,K){if(Q7.subVectors(J,$).addScalar(0.5).multiply(Z),W!==void 0)x7.x=K*Q7.x-W*Q7.y,x7.y=W*Q7.x+K*Q7.y;else x7.copy(Q7);J.copy(Q),J.x+=x7.x,J.y+=x7.y,J.applyMatrix4(oH)}var l9=new S,S$=new S,u6=new S,c6=new S;class D7{constructor(J=new S,Q=new S(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,l9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=l9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return l9.copy(this.origin).addScaledVector(this.direction,Q),l9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){S$.copy(J).add(Q).multiplyScalar(0.5),u6.copy(Q).sub(J).normalize(),c6.copy(this.origin).sub(S$);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(u6),H=c6.dot(this.direction),Y=-c6.dot(u6),X=c6.lengthSq(),U=Math.abs(1-K*K),G,N,E,q;if(U>0)if(G=K*Y-H,N=K*H-Y,q=W*U,G>=0)if(N>=-q)if(N<=q){let R=1/U;G*=R,N*=R,E=G*(G+K*N+2*H)+N*(K*G+N+2*Y)+X}else N=W,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*Y)+X;else N=-W,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*Y)+X;else if(N<=-q)G=Math.max(0,-(-K*W+H)),N=G>0?-W:Math.min(Math.max(-W,-Y),W),E=-G*G+N*(N+2*Y)+X;else if(N<=q)G=0,N=Math.min(Math.max(-W,-Y),W),E=N*(N+2*Y)+X;else G=Math.max(0,-(K*W+H)),N=G>0?W:Math.min(Math.max(-W,-Y),W),E=-G*G+N*(N+2*Y)+X;else N=K>0?-W:W,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(S$).addScaledVector(u6,N);return E}intersectSphere(J,Q){if(J.radius<0)return null;l9.subVectors(J.center,this.origin);let $=l9.dot(this.direction),Z=l9.dot(l9)-$*$,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,N=this.origin;if(X>=0)$=(J.min.x-N.x)*X,Z=(J.max.x-N.x)*X;else $=(J.max.x-N.x)*X,Z=(J.min.x-N.x)*X;if(U>=0)W=(J.min.y-N.y)*U,K=(J.max.y-N.y)*U;else W=(J.max.y-N.y)*U,K=(J.min.y-N.y)*U;if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(G>=0)H=(J.min.z-N.z)*G,Y=(J.max.z-N.z)*G;else H=(J.max.z-N.z)*G,Y=(J.min.z-N.z)*G;if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,l9)!==null}intersectTriangle(J,Q,$,Z,W){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,G=J.x-K.x,N=J.y-K.y,E=J.z-K.z,q=Q.x-K.x,R=Q.y-K.y,D=Q.z-K.z,F=$.x-K.x,O=$.y-K.y,k=$.z-K.z,_=Math.abs(Y),B=Math.abs(X),I=Math.abs(U),C,L,z,j,l,y,p,t,A,s,o,x;if(_>=B&&_>=I)if(z=Y,y=G,A=q,x=F,Y>=0)C=X,L=U,j=N,l=E,p=R,t=D,s=O,o=k;else C=U,L=X,j=E,l=N,p=D,t=R,s=k,o=O;else if(B>=I)if(z=X,y=N,A=R,x=O,X>=0)C=U,L=Y,j=E,l=G,p=D,t=q,s=k,o=F;else C=Y,L=U,j=G,l=E,p=q,t=D,s=F,o=k;else if(z=U,y=E,A=D,x=k,U>=0)C=Y,L=X,j=G,l=N,p=q,t=R,s=F,o=O;else C=X,L=Y,j=N,l=G,p=R,t=q,s=O,o=F;if(z===0)return null;let K0=C/z,u=L/z,r=1/z,$0=j-K0*y,k0=l-u*y,i=p-K0*A,Q0=t-u*A,D0=s-K0*x,w0=o-u*x,T0=D0*Q0-w0*i,B0=$0*w0-k0*D0,a0=i*k0-Q0*$0;if(Z){if(T0<0||B0<0||a0<0)return null}else if((T0<0||B0<0||a0<0)&&(T0>0||B0>0||a0>0))return null;let d0=T0+B0+a0;if(d0===0)return null;let b0=r*(T0*y+B0*A+a0*x);if(d0>0?b0<0:b0>0)return null;return this.at(b0/d0,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Y9 extends iJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new A0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new M9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var MK=new v0,_8=new D7,n6=new Q9,VK=new S,s6=new S,i6=new S,o6=new S,j$=new S,a6=new S,DK=new S,r6=new S;class _J extends r0{constructor(J=new RJ,Q=new Y9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(W&&H){a6.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=H[Y],G=W[Y];if(U===0)continue;if(j$.fromBufferAttribute(G,J),K)a6.addScaledVector(j$,U);else a6.addScaledVector(j$.sub(Q),U)}Q.add(a6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(n6.copy($.boundingSphere),n6.applyMatrix4(W),_8.copy(J.ray).recast(J.near),n6.containsPoint(_8.origin)===!1){if(_8.intersectSphere(n6,VK)===null)return;if(_8.origin.distanceToSquared(VK)>(J.far-J.near)**2)return}if(MK.copy(W).invert(),_8.copy(J.ray).applyMatrix4(MK),$.boundingBox!==null){if(_8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,_8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,N=W.groups,E=W.drawRange;if(H!==null)if(Array.isArray(K))for(let q=0,R=N.length;q<R;q++){let D=N[q],F=K[D.materialIndex],O=Math.max(D.start,E.start),k=Math.min(H.count,Math.min(D.start+D.count,E.start+E.count));for(let _=O,B=k;_<B;_+=3){let I=H.getX(_),C=H.getX(_+1),L=H.getX(_+2);if(Z=t6(this,F,J,$,X,U,G,I,C,L),Z)Z.faceIndex=Math.floor(_/3),Z.face.materialIndex=D.materialIndex,Q.push(Z)}}else{let q=Math.max(0,E.start),R=Math.min(H.count,E.start+E.count);for(let D=q,F=R;D<F;D+=3){let O=H.getX(D),k=H.getX(D+1),_=H.getX(D+2);if(Z=t6(this,K,J,$,X,U,G,O,k,_),Z)Z.faceIndex=Math.floor(D/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(K))for(let q=0,R=N.length;q<R;q++){let D=N[q],F=K[D.materialIndex],O=Math.max(D.start,E.start),k=Math.min(Y.count,Math.min(D.start+D.count,E.start+E.count));for(let _=O,B=k;_<B;_+=3){let I=_,C=_+1,L=_+2;if(Z=t6(this,F,J,$,X,U,G,I,C,L),Z)Z.faceIndex=Math.floor(_/3),Z.face.materialIndex=D.materialIndex,Q.push(Z)}}else{let q=Math.max(0,E.start),R=Math.min(Y.count,E.start+E.count);for(let D=q,F=R;D<F;D+=3){let O=D,k=D+1,_=D+2;if(Z=t6(this,K,J,$,X,U,G,O,k,_),Z)Z.faceIndex=Math.floor(D/3),Q.push(Z)}}}}function BU(J,Q,$,Z,W,K,H,Y){let X;if(Q.side===1)X=Z.intersectTriangle(H,K,W,!0,Y);else X=Z.intersectTriangle(W,K,H,Q.side===0,Y);if(X===null)return null;r6.copy(Y),r6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(r6);if(U<$.near||U>$.far)return null;return{distance:U,point:r6.clone(),object:J}}function t6(J,Q,$,Z,W,K,H,Y,X,U){J.getVertexPosition(Y,s6),J.getVertexPosition(X,i6),J.getVertexPosition(U,o6);let G=BU(J,Q,$,Z,s6,i6,o6,DK);if(G){let N=new S;if(J9.getBarycoord(DK,s6,i6,o6,N),W)G.uv=J9.getInterpolatedAttribute(W,Y,X,U,N,new R0);if(K)G.uv1=J9.getInterpolatedAttribute(K,Y,X,U,N,new R0);if(H){if(G.normal=J9.getInterpolatedAttribute(H,Y,X,U,N,new S),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let E={a:Y,b:X,c:U,normal:new S,materialIndex:0};J9.getNormal(s6,i6,o6,E.normal),G.face=E,G.barycoord=N}return G}var p7=new JJ,BK=new JJ,kK=new JJ,kU=new JJ,zK=new v0,e6=new S,v$=new Q9,_K=new v0,y$=new D7;class SQ extends _J{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new v0,this.bindMatrixInverse=new v0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new sJ;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,e6),this.boundingBox.expandByPoint(e6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new Q9;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,e6),this.boundingSphere.expandByPoint(e6)}copy(J,Q){return super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(v$.copy(this.boundingSphere),v$.applyMatrix4(Z),J.ray.intersectsSphere(v$)===!1)return;if(_K.copy(Z).invert(),y$.copy(J.ray).applyMatrix4(_K),this.boundingBox!==null){if(y$.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,y$)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new JJ,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else _0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;if(BK.fromBufferAttribute(Z.attributes.skinIndex,J),kK.fromBufferAttribute(Z.attributes.skinWeight,J),Q.isVector4)p7.copy(Q),Q.set(0,0,0,0);else p7.set(Q.x,Q.y,Q.z,1),Q.set(0,0,0);p7.applyMatrix4(this.bindMatrix);for(let W=0;W<4;W++){let K=kK.getComponent(W);if(K!==0){let H=BK.getComponent(W);zK.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(kU.copy(p7).applyMatrix4(zK),K)}}if(Q.isVector4)Q.w=p7.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class X6 extends r0{constructor(){super();this.isBone=!0,this.type="Bone"}}class U6 extends EJ{constructor(J=null,Q=1,$=1,Z,W,K,H,Y,X=1003,U=1003,G,N){super(null,K,H,Y,X,U,Z,W,G,N);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var PK=new v0,zU=new v0;class G6{constructor(J=[],Q=[]){this.uuid=k9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){_0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new v0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new v0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,K=J.length;W<K;W++){let H=J[W]?J[W].matrixWorld:zU;PK.multiplyMatrices(H,Q[W]),PK.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new G6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new U6(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],K=Q[W];if(K===void 0)_0("Skeleton: No bone found with UUID:",W),K=new X6;this.bones.push(K),this.boneInverses.push(new v0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let K=Q[Z];J.bones.push(K.uuid);let H=$[Z];J.boneInverses.push(H.toArray())}return J}}class K8 extends UJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var $7=new v0,IK=new v0,JQ=[],CK=new sJ,_U=new v0,l7=new _J,m7=new Q9;class jQ extends _J{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new K8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,_U)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new sJ;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,$7),CK.copy(J.boundingBox).applyMatrix4($7),this.boundingBox.union(CK)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new Q9;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,$7),m7.copy(J.boundingSphere).applyMatrix4($7),this.boundingSphere.union(m7)}copy(J,Q){return super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),this.morphTexture=J.morphTexture!==null?J.morphTexture.clone():null,this.instanceColor=J.instanceColor!==null?J.instanceColor.clone():null,this.count=J.count,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,K=J*W+1;for(let H=0;H<$.length;H++)$[H]=Z[K+H]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(l7.geometry=this.geometry,l7.material=this.material,l7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(m7.copy(this.boundingSphere),m7.applyMatrix4($),J.ray.intersectsSphere(m7)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,$7),IK.multiplyMatrices($,$7),l7.matrixWorld=IK,l7.raycast(J,JQ);for(let K=0,H=JQ.length;K<H;K++){let Y=JQ[K];Y.instanceId=W,Y.object=this,Q.push(Y)}JQ.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new K8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new U6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=Z*J;return W[Y]=H,W.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var P8=new Q9,PU=new R0(0.5,0.5),QQ=new S;class w8{constructor(J=new I9,Q=new I9,$=new I9,Z=new I9,W=new I9,K=new I9){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,K=W[0],H=W[1],Y=W[2],X=W[3],U=W[4],G=W[5],N=W[6],E=W[7],q=W[8],R=W[9],D=W[10],F=W[11],O=W[12],k=W[13],_=W[14],B=W[15];if(Z[0].setComponents(X-K,E-U,F-q,B-O).normalize(),Z[1].setComponents(X+K,E+U,F+q,B+O).normalize(),Z[2].setComponents(X+H,E+G,F+R,B+k).normalize(),Z[3].setComponents(X-H,E-G,F-R,B-k).normalize(),$)Z[4].setComponents(Y,N,D,_).normalize(),Z[5].setComponents(X-Y,E-N,F-D,B-_).normalize();else if(Z[4].setComponents(X-Y,E-N,F-D,B-_).normalize(),Q===2000)Z[5].setComponents(X+Y,E+N,F+D,B+_).normalize();else if(Q===2001)Z[5].setComponents(Y,N,D,_).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();P8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();P8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(P8)}intersectsSprite(J){P8.center.set(0,0,0);let Q=PU.distanceTo(J.center);return P8.radius=0.7071067811865476+Q,P8.applyMatrix4(J.matrixWorld),this.intersectsSphere(P8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(QQ.x=Z.normal.x>0?J.max.x:J.min.x,QQ.y=Z.normal.y>0?J.max.y:J.min.y,QQ.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(QQ)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var wK=new v0;class vQ{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,$=this._frustums;for(let Z=0;Z<Q.length;Z++){let W=Q[Z];if(wK.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$[Z]===void 0)$[Z]=new w8;$[Z].setFromProjectionMatrix(wK,W.coordinateSystem,W.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,$=J._frustums;for(let Z=0;Z<J._count;Z++){if(Q[Z]===void 0)Q[Z]=new w8;Q[Z].copy($[Z])}return this._count=J._count,this}clone(){return new vQ().copy(this)}}class E6 extends iJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new A0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var GQ=new S,EQ=new S,AK=new v0,d7=new D7,$Q=new Q9,h$=new S,TK=new S;class B7 extends r0{constructor(J=new RJ,Q=new E6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)GQ.fromBufferAttribute(Q,Z-1),EQ.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=GQ.distanceTo(EQ);J.setAttribute("lineDistance",new IJ($,1))}else _0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if($Q.copy($.boundingSphere),$Q.applyMatrix4(Z),$Q.radius+=W,J.ray.intersectsSphere($Q)===!1)return;AK.copy(Z).invert(),d7.copy(J.ray).applyMatrix4(AK);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,N=$.attributes.position;if(U!==null){let E=Math.max(0,K.start),q=Math.min(U.count,K.start+K.count);for(let R=E,D=q-1;R<D;R+=X){let F=U.getX(R),O=U.getX(R+1),k=ZQ(this,J,d7,Y,F,O,R);if(k)Q.push(k)}if(this.isLineLoop){let R=U.getX(q-1),D=U.getX(E),F=ZQ(this,J,d7,Y,R,D,q-1);if(F)Q.push(F)}}else{let E=Math.max(0,K.start),q=Math.min(N.count,K.start+K.count);for(let R=E,D=q-1;R<D;R+=X){let F=ZQ(this,J,d7,Y,R,R+1,R);if(F)Q.push(F)}if(this.isLineLoop){let R=ZQ(this,J,d7,Y,q-1,E,q-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function ZQ(J,Q,$,Z,W,K,H){let Y=J.geometry.attributes.position;if(GQ.fromBufferAttribute(Y,W),EQ.fromBufferAttribute(Y,K),$.distanceSqToSegment(GQ,EQ,h$,TK)>Z)return;h$.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(h$);if(U<Q.near||U>Q.far)return;return{distance:U,point:TK.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var SK=new S,jK=new S;class yQ extends B7{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)SK.fromBufferAttribute(Q,Z),jK.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+SK.distanceTo(jK);J.setAttribute("lineDistance",new IJ($,1))}else _0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hQ extends B7{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class N6 extends iJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new A0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var vK=new v0,l$=new D7,WQ=new Q9,KQ=new S;class k7 extends r0{constructor(J=new RJ,Q=new N6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(WQ.copy($.boundingSphere),WQ.applyMatrix4(Z),WQ.radius+=W,J.ray.intersectsSphere(WQ)===!1)return;vK.copy(Z).invert(),l$.copy(J.ray).applyMatrix4(vK);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,G=$.attributes.position;if(X!==null){let N=Math.max(0,K.start),E=Math.min(X.count,K.start+K.count);for(let q=N,R=E;q<R;q++){let D=X.getX(q);KQ.fromBufferAttribute(G,D),yK(KQ,D,Y,Z,J,Q,this)}}else{let N=Math.max(0,K.start),E=Math.min(G.count,K.start+K.count);for(let q=N,R=E;q<R;q++)KQ.fromBufferAttribute(G,q),yK(KQ,q,Y,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function yK(J,Q,$,Z,W,K,H){let Y=l$.distanceSqToPoint(J);if(Y<$){let X=new S;l$.closestPointToPoint(J,X),X.applyMatrix4(Z);let U=W.ray.origin.distanceTo(X);if(U<W.near||U>W.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class fQ extends EJ{constructor(J=[],Q=301,$,Z,W,K,H,Y,X,U){super(J,Q,$,Z,W,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class bQ extends EJ{constructor(J,Q,$,Z,W,K,H,Y,X){super(J,Q,$,Z,W,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class G8 extends EJ{constructor(J,Q,$=1014,Z,W,K,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:Q,depth:G};super(N,Z,W,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new K6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class xQ extends G8{constructor(J,Q=1014,$=301,Z,W,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,K,H,Y,X);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class gQ extends EJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class z7 extends RJ{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};let H=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let Y=[],X=[],U=[],G=[],N=0,E=0;q("z","y","x",-1,-1,$,Q,J,K,W,0),q("z","y","x",1,-1,$,Q,-J,K,W,1),q("x","z","y",1,1,J,$,Q,Z,K,2),q("x","z","y",1,-1,J,$,-Q,Z,K,3),q("x","y","z",1,-1,J,Q,$,Z,W,4),q("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(Y),this.setAttribute("position",new IJ(X,3)),this.setAttribute("normal",new IJ(U,3)),this.setAttribute("uv",new IJ(G,2));function q(R,D,F,O,k,_,B,I,C,L,z){let j=_/C,l=B/L,y=_/2,p=B/2,t=I/2,A=C+1,s=L+1,o=0,x=0,K0=new S;for(let u=0;u<s;u++){let r=u*l-p;for(let $0=0;$0<A;$0++){let k0=$0*j-y;K0[R]=k0*O,K0[D]=r*k,K0[F]=t,X.push(K0.x,K0.y,K0.z),K0[R]=0,K0[D]=0,K0[F]=I>0?1:-1,U.push(K0.x,K0.y,K0.z),G.push($0/C),G.push(1-u/L),o+=1}}for(let u=0;u<L;u++)for(let r=0;r<C;r++){let $0=N+r+A*u,k0=N+r+A*(u+1),i=N+(r+1)+A*(u+1),Q0=N+(r+1)+A*u;Y.push($0,k0,Q0),Y.push(k0,i,Q0),x+=6}H.addGroup(E,x,z),E+=x,N+=o}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new z7(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class X9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){_0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),W=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),W+=$.distanceTo(Z),Q.push(W),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,W=$.length,K;if(Q)K=Q;else K=J*$[W-1];let H=0,Y=W-1,X;while(H<=Y)if(Z=Math.floor(H+(Y-H)/2),X=$[Z]-K,X<0)H=Z+1;else if(X>0)Y=Z-1;else{Y=Z;break}if(Z=Y,$[Z]===K)return Z/(W-1);let U=$[Z],N=$[Z+1]-U,E=(K-U)/N;return(Z+E)/(W-1)}getTangent(J,Q){let Z=J-0.0001,W=J+0.0001;if(Z<0)Z=0;if(W>1)W=1;let K=this.getPoint(Z),H=this.getPoint(W),Y=Q||(K.isVector2?new R0:new S);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new S,Z=[],W=[],K=[],H=new S,Y=new v0;for(let E=0;E<=J;E++){let q=E/J;Z[E]=this.getTangentAt(q,new S)}W[0]=new S,K[0]=new S;let X=Number.MAX_VALUE,U=Math.abs(Z[0].x),G=Math.abs(Z[0].y),N=Math.abs(Z[0].z);if(U<=X)X=U,$.set(1,0,0);if(G<=X)X=G,$.set(0,1,0);if(N<=X)$.set(0,0,1);H.crossVectors(Z[0],$).normalize(),W[0].crossVectors(Z[0],H),K[0].crossVectors(Z[0],W[0]);for(let E=1;E<=J;E++){if(W[E]=W[E-1].clone(),K[E]=K[E-1].clone(),H.crossVectors(Z[E-1],Z[E]),H.length()>Number.EPSILON){H.normalize();let q=Math.acos(l0(Z[E-1].dot(Z[E]),-1,1));W[E].applyMatrix4(Y.makeRotationAxis(H,q))}K[E].crossVectors(Z[E],W[E])}if(Q===!0){let E=Math.acos(l0(W[0].dot(W[J]),-1,1));if(E/=J,Z[0].dot(H.crossVectors(W[0],W[J]))>0)E=-E;for(let q=1;q<=J;q++)W[q].applyMatrix4(Y.makeRotationAxis(Z[q],E*q)),K[q].crossVectors(Z[q],W[q])}return{tangents:Z,normals:W,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}}class q6 extends X9{constructor(J=0,Q=0,$=1,Z=1,W=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=W,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new R0){let $=Q,Z=Math.PI*2,W=this.aEndAngle-this.aStartAngle,K=Math.abs(W)<Number.EPSILON;while(W<0)W+=Z;while(W>Z)W-=Z;if(W<Number.EPSILON)if(K)W=0;else W=Z;if(this.aClockwise===!0&&!K)if(W===Z)W=-Z;else W=W-Z;let H=this.aStartAngle+J*W,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),N=Y-this.aX,E=X-this.aY;Y=N*U-E*G+this.aX,X=N*G+E*U+this.aY}return $.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class JW extends q6{constructor(J,Q,$,Z,W,K){super(J,Q,$,$,Z,W,K);this.isArcCurve=!0,this.type="ArcCurve"}}function QW(){let J=0,Q=0,$=0,Z=0;function W(K,H,Y,X){J=K,Q=Y,$=-3*K+3*H-2*Y-X,Z=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){W(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,G,N){let E=(H-K)/U-(Y-K)/(U+G)+(Y-H)/G,q=(Y-H)/G-(X-H)/(G+N)+(X-Y)/N;E*=G,q*=G,W(H,Y,E,q)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+$*H+Z*Y}}}var hK=new S,fK=new S,f$=new QW,b$=new QW,x$=new QW;class $W extends X9{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new S){let $=Q,Z=this.points,W=Z.length,K=(W-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/W)+1)*W;else if(Y===0&&H===W-1)H=W-2,Y=1;let X,U;if(this.closed||H>0)X=Z[(H-1)%W];else fK.subVectors(Z[0],Z[1]).add(Z[0]),X=fK;let G=Z[H%W],N=Z[(H+1)%W];if(this.closed||H+2<W)U=Z[(H+2)%W];else hK.subVectors(Z[W-1],Z[W-2]).add(Z[W-1]),U=hK;if(this.curveType==="centripetal"||this.curveType==="chordal"){let E=this.curveType==="chordal"?0.5:0.25,q=Math.pow(X.distanceToSquared(G),E),R=Math.pow(G.distanceToSquared(N),E),D=Math.pow(N.distanceToSquared(U),E);if(R<0.0001)R=1;if(q<0.0001)q=R;if(D<0.0001)D=R;f$.initNonuniformCatmullRom(X.x,G.x,N.x,U.x,q,R,D),b$.initNonuniformCatmullRom(X.y,G.y,N.y,U.y,q,R,D),x$.initNonuniformCatmullRom(X.z,G.z,N.z,U.z,q,R,D)}else if(this.curveType==="catmullrom")f$.initCatmullRom(X.x,G.x,N.x,U.x,this.tension),b$.initCatmullRom(X.y,G.y,N.y,U.y,this.tension),x$.initCatmullRom(X.z,G.z,N.z,U.z,this.tension);return $.set(f$.calc(Y),b$.calc(Y),x$.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new S().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function bK(J,Q,$,Z,W){let K=(Z-Q)*0.5,H=(W-$)*0.5,Y=J*J,X=J*Y;return(2*$-2*Z+K+H)*X+(-3*$+3*Z-2*K-H)*Y+K*J+$}function IU(J,Q){let $=1-J;return $*$*Q}function CU(J,Q){return 2*(1-J)*J*Q}function wU(J,Q){return J*J*Q}function i7(J,Q,$,Z){return IU(J,Q)+CU(J,$)+wU(J,Z)}function AU(J,Q){let $=1-J;return $*$*$*Q}function TU(J,Q){let $=1-J;return 3*$*$*J*Q}function SU(J,Q){return 3*(1-J)*J*J*Q}function jU(J,Q){return J*J*J*Q}function o7(J,Q,$,Z,W){return AU(J,Q)+TU(J,$)+SU(J,Z)+jU(J,W)}class pQ extends X9{constructor(J=new R0,Q=new R0,$=new R0,Z=new R0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new R0){let $=Q,Z=this.v0,W=this.v1,K=this.v2,H=this.v3;return $.set(o7(J,Z.x,W.x,K.x,H.x),o7(J,Z.y,W.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class ZW extends X9{constructor(J=new S,Q=new S,$=new S,Z=new S){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new S){let $=Q,Z=this.v0,W=this.v1,K=this.v2,H=this.v3;return $.set(o7(J,Z.x,W.x,K.x,H.x),o7(J,Z.y,W.y,K.y,H.y),o7(J,Z.z,W.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class lQ extends X9{constructor(J=new R0,Q=new R0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new R0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new R0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class WW extends X9{constructor(J=new S,Q=new S){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new S){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new S){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class mQ extends X9{constructor(J=new R0,Q=new R0,$=new R0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new R0){let $=Q,Z=this.v0,W=this.v1,K=this.v2;return $.set(i7(J,Z.x,W.x,K.x),i7(J,Z.y,W.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class KW extends X9{constructor(J=new S,Q=new S,$=new S){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new S){let $=Q,Z=this.v0,W=this.v1,K=this.v2;return $.set(i7(J,Z.x,W.x,K.x),i7(J,Z.y,W.y,K.y),i7(J,Z.z,W.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class dQ extends X9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new R0){let $=Q,Z=this.points,W=(Z.length-1)*J,K=Math.floor(W),H=W-K,Y=Z[K===0?K:K-1],X=Z[K],U=Z[K>Z.length-2?Z.length-1:K+1],G=Z[K>Z.length-3?Z.length-1:K+2];return $.set(bK(H,Y.x,X.x,U.x,G.x),bK(H,Y.y,X.y,U.y,G.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new R0().fromArray(Z))}return this}}var xK=Object.freeze({__proto__:null,ArcCurve:JW,CatmullRomCurve3:$W,CubicBezierCurve:pQ,CubicBezierCurve3:ZW,EllipseCurve:q6,LineCurve:lQ,LineCurve3:WW,QuadraticBezierCurve:mQ,QuadraticBezierCurve3:KW,SplineCurve:dQ});class HW extends X9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xK[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),W=0;while(W<Z.length){if(Z[W]>=$){let K=Z[W]-$,H=this.curves[W],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}W++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,W=this.curves;Z<W.length;Z++){let K=W[Z],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this.cacheLengths=null,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new xK[Z.type]().fromJSON(Z))}return this.cacheLengths=null,this}}class NQ extends HW{constructor(J){super();if(this.type="Path",this.currentPoint=new R0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new lQ(this.currentPoint.clone(),new R0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let W=new mQ(this.currentPoint.clone(),new R0(J,Q),new R0($,Z));return this.curves.push(W),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,W,K){let H=new pQ(this.currentPoint.clone(),new R0(J,Q),new R0($,Z),new R0(W,K));return this.curves.push(H),this.currentPoint.set(W,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new dQ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,W,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,$,Z,W,K),this}absarc(J,Q,$,Z,W,K){return this.absellipse(J,Q,$,$,Z,W,K),this}ellipse(J,Q,$,Z,W,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,$,Z,W,K,H,Y),this}absellipse(J,Q,$,Z,W,K,H,Y){let X=new q6(J,Q,$,Z,W,K,H,Y);if(this.curves.length>0){let G=X.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class F6 extends NQ{constructor(J){super(J);this.uuid=k9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new NQ().fromJSON(Z))}return this}}function vU(J,Q,$=2){let Z=Q&&Q.length,W=Z?Q[0]*$:J.length,K=aH(J,0,W,$,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if(Z)K=xU(J,Q,K,$);if(J.length>80*$){Y=J[0],X=J[1];let G=Y,N=X;for(let E=$;E<W;E+=$){let q=J[E],R=J[E+1];if(q<Y)Y=q;if(R<X)X=R;if(q>G)G=q;if(R>N)N=R}U=Math.max(G-Y,N-X),U=U!==0?32767/U:0}return r7(K,H,$,Y,X,U,0),H}function aH(J,Q,$,Z,W){let K;if(W===oU(J,Q,$,Z)>0)for(let H=Q;H<$;H+=Z)K=gK(H/Z|0,J[H],J[H+1],K);else for(let H=$-Z;H>=Q;H-=Z)K=gK(H/Z|0,J[H],J[H+1],K);if(K&&G7(K,K.next))e7(K),K=K.next;return K}function A8(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(G7($,$.next)||YJ($.prev,$,$.next)===0)){if(e7($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function r7(J,Q,$,Z,W,K,H){if(!J)return;if(!H&&K)dU(J,Z,W,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?hU(J,Z,W,K):yU(J)){Q.push(X.i,J.i,U.i),e7(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)r7(A8(J),Q,$,Z,W,K,1);else if(H===1)J=fU(A8(J),Q),r7(J,Q,$,Z,W,K,2);else if(H===2)bU(J,Q,$,Z,W,K);break}}}function yU(J){let Q=J.prev,$=J,Z=J.next;if(YJ(Q,$,Z)>=0)return!1;let W=Q.x,K=$.x,H=Z.x,Y=Q.y,X=$.y,U=Z.y,G=Math.min(W,K,H),N=Math.min(Y,X,U),E=Math.max(W,K,H),q=Math.max(Y,X,U),R=Z.next;while(R!==Q){if(R.x>=G&&R.x<=E&&R.y>=N&&R.y<=q&&u7(W,Y,K,X,H,U,R.x,R.y)&&YJ(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function hU(J,Q,$,Z){let W=J.prev,K=J,H=J.next;if(YJ(W,K,H)>=0)return!1;let Y=W.x,X=K.x,U=H.x,G=W.y,N=K.y,E=H.y,q=Math.min(Y,X,U),R=Math.min(G,N,E),D=Math.max(Y,X,U),F=Math.max(G,N,E),O=m$(q,R,Q,$,Z),k=m$(D,F,Q,$,Z),_=J.prevZ,B=J.nextZ;while(_&&_.z>=O&&B&&B.z<=k){if(_.x>=q&&_.x<=D&&_.y>=R&&_.y<=F&&_!==W&&_!==H&&u7(Y,G,X,N,U,E,_.x,_.y)&&YJ(_.prev,_,_.next)>=0)return!1;if(_=_.prevZ,B.x>=q&&B.x<=D&&B.y>=R&&B.y<=F&&B!==W&&B!==H&&u7(Y,G,X,N,U,E,B.x,B.y)&&YJ(B.prev,B,B.next)>=0)return!1;B=B.nextZ}while(_&&_.z>=O){if(_.x>=q&&_.x<=D&&_.y>=R&&_.y<=F&&_!==W&&_!==H&&u7(Y,G,X,N,U,E,_.x,_.y)&&YJ(_.prev,_,_.next)>=0)return!1;_=_.prevZ}while(B&&B.z<=k){if(B.x>=q&&B.x<=D&&B.y>=R&&B.y<=F&&B!==W&&B!==H&&u7(Y,G,X,N,U,E,B.x,B.y)&&YJ(B.prev,B,B.next)>=0)return!1;B=B.nextZ}return!0}function fU(J,Q){let $=J;do{let Z=$.prev,W=$.next.next;if(!G7(Z,W)&&tH(Z,$,$.next,W)&&t7(Z,W)&&t7(W,Z))Q.push(Z.i,$.i,W.i),e7($),e7($.next),$=J=W;$=$.next}while($!==J);return A8($)}function bU(J,Q,$,Z,W,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&nU(H,Y)){let X=eH(H,Y);H=A8(H,H.next),X=A8(X,X.next),r7(H,Q,$,Z,W,K,0),r7(X,Q,$,Z,W,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function xU(J,Q,$,Z){let W=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*Z,X=K<H-1?Q[K+1]*Z:J.length,U=aH(J,Y,X,Z,!1);if(U===U.next)U.steiner=!0;W.push(cU(U))}W.sort(gU);for(let K=0;K<W.length;K++)$=pU(W[K],$);return $}function gU(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),W=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-W}}return $}function pU(J,Q){let $=lU(J,Q);if(!$)return Q;let Z=eH($,J);return A8(Z,Z.next),A8($,$.next)}function lU(J,Q){let $=Q,Z=J.x,W=J.y,K=-1/0,H;if(G7(J,$))return $;do{if(G7(J,$.next))return $.next;else if(W<=$.y&&W>=$.next.y&&$.next.y!==$.y){let N=$.x+(W-$.y)*($.next.x-$.x)/($.next.y-$.y);if(N<=Z&&N>K){if(K=N,H=$.x<$.next.x?$:$.next,N===Z)return H}}$=$.next}while($!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,G=1/0;$=H;do{if(Z>=$.x&&$.x>=X&&Z!==$.x&&rH(W<U?Z:K,W,X,U,W<U?K:Z,W,$.x,$.y)){let N=Math.abs(W-$.y)/(Z-$.x);if(t7($,J)&&(N<G||N===G&&($.x>H.x||$.x===H.x&&mU(H,$))))H=$,G=N}$=$.next}while($!==Y);return H}function mU(J,Q){return YJ(J.prev,J,Q.prev)<0&&YJ(Q.next,J,J.next)<0}function dU(J,Q,$,Z){let W=J;do{if(W.z===0)W.z=m$(W.x,W.y,Q,$,Z);W.prevZ=W.prev,W.nextZ=W.next,W=W.next}while(W!==J);W.prevZ.nextZ=null,W.prevZ=null,uU(W)}function uU(J){let Q,$=1;do{let Z=J,W;J=null;let K=null;Q=0;while(Z){Q++;let H=Z,Y=0;for(let U=0;U<$;U++)if(Y++,H=H.nextZ,!H)break;let X=$;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||Z.z<=H.z))W=Z,Z=Z.nextZ,Y--;else W=H,H=H.nextZ,X--;if(K)K.nextZ=W;else J=W;W.prevZ=K,K=W}Z=H}K.nextZ=null,$*=2}while(Q>1);return J}function m$(J,Q,$,Z,W){return J=(J-$)*W|0,Q=(Q-Z)*W|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function cU(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function rH(J,Q,$,Z,W,K,H,Y){return(W-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*(Z-Y)>=($-H)*(Q-Y)&&($-H)*(K-Y)>=(W-H)*(Z-Y)}function u7(J,Q,$,Z,W,K,H,Y){return!(J===H&&Q===Y)&&rH(J,Q,$,Z,W,K,H,Y)}function nU(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!sU(J,Q)&&(t7(J,Q)&&t7(Q,J)&&iU(J,Q)&&(YJ(J.prev,J,Q.prev)||YJ(J,Q.prev,Q))||G7(J,Q)&&YJ(J.prev,J,J.next)>0&&YJ(Q.prev,Q,Q.next)>0)}function YJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function G7(J,Q){return J.x===Q.x&&J.y===Q.y}function tH(J,Q,$,Z){let W=YQ(YJ(J,Q,$)),K=YQ(YJ(J,Q,Z)),H=YQ(YJ($,Z,J)),Y=YQ(YJ($,Z,Q));if(W!==K&&H!==Y)return!0;if(W===0&&HQ(J,$,Q))return!0;if(K===0&&HQ(J,Z,Q))return!0;if(H===0&&HQ($,J,Z))return!0;if(Y===0&&HQ($,Q,Z))return!0;return!1}function HQ(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function YQ(J){return J>0?1:J<0?-1:0}function sU(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&tH($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function t7(J,Q){return YJ(J.prev,J,J.next)<0?YJ(J,Q,J.next)>=0&&YJ(J,J.prev,Q)>=0:YJ(J,Q,J.prev)<0||YJ(J,J.next,Q)<0}function iU(J,Q){let $=J,Z=!1,W=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&W<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function eH(J,Q){let $=d$(J.i,J.x,J.y),Z=d$(Q.i,Q.x,Q.y),W=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=W,W.prev=$,Z.next=$,$.prev=Z,K.next=Z,Z.prev=K,Z}function gK(J,Q,$,Z){let W=d$(J,Q,$);if(!Z)W.prev=W,W.next=W;else W.next=Z.next,W.prev=Z,Z.next.prev=W,Z.next=W;return W}function e7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function d$(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function oU(J,Q,$,Z){let W=0;for(let K=Q,H=$-Z;K<$;K+=Z)W+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return W}class JY{static triangulate(J,Q,$=2){return vU(J,Q,$)}}class Y7{static area(J){let Q=J.length,$=0;for(let Z=Q-1,W=0;W<Q;Z=W++)$+=J[Z].x*J[W].y-J[W].x*J[Z].y;return $*0.5}static isClockWise(J){return Y7.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],W=[];pK(J),lK($,J);let K=J.length;Q.forEach(pK);for(let Y=0;Y<Q.length;Y++)Z.push(K),K+=Q[Y].length,lK($,Q[Y]);let H=JY.triangulate($,Z);for(let Y=0;Y<H.length;Y+=3)W.push(H.slice(Y,Y+3));return W}}function pK(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function lK(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class h8 extends RJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(Z),X=H+1,U=Y+1,G=J/H,N=Q/Y,E=[],q=[],R=[],D=[];for(let F=0;F<U;F++){let O=F*N-K;for(let k=0;k<X;k++){let _=k*G-W;q.push(_,-O,0),R.push(0,0,1),D.push(k/H),D.push(1-F/Y)}}for(let F=0;F<Y;F++)for(let O=0;O<H;O++){let k=O+X*F,_=O+X*(F+1),B=O+1+X*(F+1),I=O+1+X*F;E.push(k,_,I),E.push(_,B,I)}this.setIndex(E),this.setAttribute("position",new IJ(q,3)),this.setAttribute("normal",new IJ(R,3)),this.setAttribute("uv",new IJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h8(J.width,J.height,J.widthSegments,J.heightSegments)}}class O6 extends RJ{constructor(J=new F6([new R0(0,0.5),new R0(-0.5,-0.5),new R0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],Z=[],W=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex($),this.setAttribute("position",new IJ(Z,3)),this.setAttribute("normal",new IJ(W,3)),this.setAttribute("uv",new IJ(K,2));function X(U){let G=Z.length/3,N=U.extractPoints(Q),E=N.shape,q=N.holes;if(Y7.isClockWise(E)===!1)E=E.reverse();for(let D=0,F=q.length;D<F;D++){let O=q[D];if(Y7.isClockWise(O)===!0)q[D]=O.reverse()}let R=Y7.triangulateShape(E,q);for(let D=0,F=q.length;D<F;D++){let O=q[D];E=E.concat(O)}for(let D=0,F=E.length;D<F;D++){let O=E[D];Z.push(O.x,O.y,0),W.push(0,0,1),K.push(O.x,O.y)}for(let D=0,F=R.length;D<F;D++){let O=R[D],k=O[0]+G,_=O[1]+G,B=O[2]+G;$.push(k,_,B),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return aU(Q,J)}static fromJSON(J,Q){let $=[];for(let Z=0,W=J.shapes.length;Z<W;Z++){let K=Q[J.shapes[Z]];$.push(K)}return new O6($,J.curveSegments)}}function aU(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,Z=J.length;$<Z;$++){let W=J[$];Q.shapes.push(W.uuid)}else Q.shapes.push(J.uuid);return Q}function f8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(mK(W))if(W.isRenderTargetTexture)_0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))if(mK(W[0])){let K=[];for(let H=0,Y=W.length;H<Y;H++)K[H]=W[H].clone();Q[$][Z]=K}else Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function fJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=f8(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function mK(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function rU(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function YW(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return g0.workingColorSpace}var QY={clone:f8,merge:fJ},tU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class U9 extends iJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tU,this.fragmentShader=eU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=f8(J.uniforms),this.uniformsGroups=rU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[Z]={type:"m4",value:K.toArray()};else Q.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new A0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new R0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new S().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new JJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new y0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new v0().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class XW extends U9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _7 extends iJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new A0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new A0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new M9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class oJ extends _7{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new R0(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return l0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new A0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new A0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new A0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(J){if(this._diffuseRoughness>0!==J>0)this.version++;this._diffuseRoughness=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}get iridescenceThicknessRange(){return I8('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(J){I8('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=J[0],this.iridescenceThicknessMaximum=J[1]}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.diffuseRoughness=J.diffuseRoughness,this.diffuseRoughnessMap=J.diffuseRoughnessMap,this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum,this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class UW extends iJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class GW extends iJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function W8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function c7(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function J5(J){function Q(W,K){return J[W]-J[K]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function dK(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let K=0,H=0;H!==Z;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)W[H++]=J[Y+X]}return W}function Q5(J,Q,$,Z){let W=1,K=J[0];while(K!==void 0&&K[Z]===void 0)K=J[W++];if(K===void 0)return;let H=K[Z];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[Z],H!==void 0)Q.push(K.time),$.push(...H);K=J[W++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[Z],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[W++]}while(K!==void 0);else do{if(H=K[Z],H!==void 0)Q.push(K.time),$.push(H);K=J[W++]}while(K!==void 0)}class s9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let K;Q:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(W=Z,Z=Q[++$],J<Z)break J}K=Q.length;break Q}if(!(J>=W)){let H=Q[1];if(J<H)$=2,W=H;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=W,W=Q[--$-1],J>=W)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)Q[K]=$[W+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class EW extends s9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,K=J+1,H=Z[W],Y=Z[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-$;break;case 2402:W=Z.length-2,H=Q+Z[W]-Z[W+1];break;default:W=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+Z[1]-Z[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,N=this._weightPrev,E=this._weightNext,q=($-Q)/(Z-Q),R=q*q,D=R*q,F=-N*D+2*N*R-N*q,O=(1+N)*D+(-1.5-2*N)*R+(-0.5+N)*q+1,k=(-1-E)*D+(1.5+E)*R+0.5*q,_=E*D-E*R;for(let B=0;B!==H;++B)W[B]=F*K[U+B]+O*K[X+B]+k*K[Y+B]+_*K[G+B];return W}}class NW extends s9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),G=1-U;for(let N=0;N!==H;++N)W[N]=K[X+N]*G+K[Y+N]*U;return W}}class qW extends s9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class FW extends s9{interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,G=this.outTangents;if(!U||!G){let q=($-Q)/(Z-Q),R=1-q;for(let D=0;D!==H;++D)W[D]=K[X+D]*R+K[Y+D]*q;return W}let N=H*2,E=J-1;for(let q=0;q!==H;++q){let R=K[X+q],D=K[Y+q],F=E*N+q*2,O=G[F],k=G[F+1],_=J*N+q*2,B=U[_],I=U[_+1],C=Z5($,Q,O,B,Z);W[q]=$Y(C,R,k,I,D)}return W}}function $Y(J,Q,$,Z,W){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*Z+J*J*J*W}function $5(J,Q,$,Z,W){let K=1-J;return 3*K*K*($-Q)+6*K*J*(Z-$)+3*J*J*(W-Z)}function Z5(J,Q,$,Z,W){let K=(J-Q)/(W-Q);for(let H=0;H<8;H++){let Y=$Y(K,Q,$,Z,W)-J;if(Math.abs(Y)<0.0000000001)break;let X=$5(K,Q,$,Z,W);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class $9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=W8(Q,this.TimeBufferType),this.values=W8($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:W8(J.times,Array),values:W8(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(c7(J.settings))$.settings={inTangents:W8(J.settings.inTangents,Array),outTangents:W8(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new qW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new NW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new EW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new FW(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return _0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J;if(c7(this.settings))uK(this.settings.inTangents,J),uK(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(c7(this.settings))cK(this.settings.inTangents,J),cK(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,K=Z-1;while(W!==Z&&$[W]<J)++W;while(K!==-1&&$[K]>Q)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=$.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)j0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)j0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){j0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){j0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(Z!==void 0){if(dX(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){j0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let G=H*$,N=G-$,E=G+$;for(let q=0;q!==$;++q){let R=Q[G+q];if(R!==Q[N+q]||R!==Q[E+q]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let G=H*$,N=K*$;for(let E=0;E!==$;++E)Q[N+E]=Q[G+E]}++K}}if(W>0){J[K]=J[W];for(let H=W*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,c7(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function uK(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]+=Q}function cK(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}$9.prototype.ValueTypeName="";$9.prototype.TimeBufferType=Float32Array;$9.prototype.ValueBufferType=Float32Array;$9.prototype.DefaultInterpolation=2301;class E8 extends $9{constructor(J,Q,$){super(J,Q,$)}}E8.prototype.ValueTypeName="bool";E8.prototype.ValueBufferType=Array;E8.prototype.DefaultInterpolation=2300;E8.prototype.InterpolantFactoryMethodLinear=void 0;E8.prototype.InterpolantFactoryMethodSmooth=void 0;class uQ extends $9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}uQ.prototype.ValueTypeName="color";class N8 extends $9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}N8.prototype.ValueTypeName="number";class OW extends s9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q),X=J*H;for(let U=X+H;X!==U;X+=4)nJ.slerpFlat(W,0,K,X-H,K,X,Y);return W}}class q8 extends $9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new OW(this.times,this.values,this.getValueSize(),J)}}q8.prototype.ValueTypeName="quaternion";q8.prototype.InterpolantFactoryMethodSmooth=void 0;class F8 extends $9{constructor(J,Q,$){super(J,Q,$)}}F8.prototype.ValueTypeName="string";F8.prototype.ValueBufferType=Array;F8.prototype.DefaultInterpolation=2300;F8.prototype.InterpolantFactoryMethodLinear=void 0;F8.prototype.InterpolantFactoryMethodSmooth=void 0;class b8 extends $9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}b8.prototype.ValueTypeName="vector";class cQ{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=k9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(K5($[K]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W.userData=JSON.parse(J.userData||"{}"),W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let W=0,K=$.length;W!==K;++W)Q.push($9.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,K=[];for(let H=0;H<W;H++){let Y=[],X=[];Y.push((H+W-1)%W,H,(H+1)%W),X.push(0,1,0);let U=J5(Y);if(Y=dK(Y,1,U),X=dK(X,1,U),!Z&&Y[0]===0)Y.push(W),X.push(X[0]);K.push(new N8(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(W);if(U&&U.length>1){let G=U[1],N=Z[G];if(!N)Z[G]=N=[];N.push(X)}}let K=[];for(let H in Z)K.push(this.CreateFromMorphTargetSequence(H,Z[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function W5(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return N8;case"vector":case"vector2":case"vector3":case"vector4":return b8;case"color":return uQ;case"quaternion":return q8;case"bool":case"boolean":return E8;case"string":return F8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function K5(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=W5(J.type);if(J.times===void 0){let Z=[],W=[];Q5(J.keys,Z,W,"value"),J.times=Z,J.values=W}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(c7(J.settings))$.settings={inTangents:W8(J.settings.inTangents,Float32Array),outTangents:W8(J.settings.outTangents,Float32Array)};return $}var C9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(nK(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(nK(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function nK(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class RW{constructor(J,Q,$){let Z=this,W=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,H);if(K===H){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,N=X.length;G<N;G+=2){let E=X[G],q=X[G+1];if(E.global)E.lastIndex=0;if(E.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var ZY=new RW;class _9{constructor(J){if(this.manager=J!==void 0?J:ZY,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}_9.DEFAULT_MATERIAL_NAME="__DEFAULT";var m9={};class WY extends Error{constructor(J,Q){super(J);this.response=Q}}class O8 extends _9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=C9.get(`file:${J}`);if(W!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0);return}if(m9[J]!==void 0){m9[J].push({onLoad:Q,onProgress:$,onError:Z});return}m9[J]=[],m9[J].push({onLoad:Q,onProgress:$,onError:Z});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)_0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=m9[J],G=X.body.getReader(),N=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),E=N?parseInt(N):0,q=E!==0,R=0,D=new ReadableStream({start(F){O();function O(){G.read().then(({done:k,value:_})=>{if(k)F.close();else{R+=_.byteLength;let B=new ProgressEvent("progress",{lengthComputable:q,loaded:R,total:E});for(let I=0,C=U.length;I<C;I++){let L=U[I];if(L.onProgress)L.onProgress(B)}F.enqueue(_),O()}},(k)=>{F.error(k)})}}});return new Response(D)}else throw new WY(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(H),N=G&&G[1]?G[1].toLowerCase():void 0,E=new TextDecoder(N);return X.arrayBuffer().then((q)=>E.decode(q))}}}).then((X)=>{C9.add(`file:${J}`,X);let U=m9[J];delete m9[J];for(let G=0,N=U.length;G<N;G++){let E=U[G];if(E.onLoad)E.onLoad(X)}}).catch((X)=>{let U=m9[J];if(U===void 0)throw this.manager.itemError(J),X;delete m9[J];for(let G=0,N=U.length;G<N;G++){let E=U[G];if(E.onError)E.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Z7=new WeakMap;class LW extends _9{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=C9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0);else{let G=Z7.get(K);if(G===void 0)G=[],Z7.set(K,G);G.push({onLoad:Q,onError:Z})}return K}let H=X7("img");function Y(){if(U(),Q)Q(this);let G=Z7.get(this)||[];for(let N=0;N<G.length;N++){let E=G[N];if(E.onLoad)E.onLoad(this)}Z7.delete(this),W.manager.itemEnd(J)}function X(G){if(U(),Z)Z(G);C9.remove(`image:${J}`);let N=Z7.get(this)||[];for(let E=0;E<N.length;E++){let q=N[E];if(q.onError)q.onError(G)}Z7.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return C9.add(`image:${J}`,H),W.manager.itemStart(J),H.fetchPriority=this.priority,H.src=J,H}}class nQ extends _9{constructor(J){super(J)}load(J,Q,$,Z){let W=new EJ,K=new LW(this.manager);return K.setPriority(this.priority),K.setCache(this.cache),K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(W.image=H,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class P7 extends r0{static registerNode(J){this.prototype._lightNode=J}constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new A0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class sQ extends P7{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(r0.DEFAULT_UP),this.updateMatrix(),this.groundColor=new A0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var g$=new v0,sK=new S,iK=new S;class R6{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new v0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new w8,this._frameExtents=new R0(1,1),this._viewportCount=1,this._viewports=[new JJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;sK.setFromMatrixPosition(J.matrixWorld),Q.position.copy(sK),iK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(iK),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){g$.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(g$,J.coordinateSystem,J.reversedDepth);let W=this._frameExtents,K=Z?Z.z/W.x:1,H=Z?Z.w/W.y:1,Y=Z?Z.x/W.x:0,X=Z?Z.y/W.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(g$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.mapType=J.mapType,this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.mapType=this.mapType,J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var XQ=new S,UQ=new nJ,P9=new S;class iQ extends r0{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new v0,this.projectionMatrix=new v0,this.projectionMatrixInverse=new v0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(XQ,UQ,P9),P9.x===1&&P9.y===1&&P9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(XQ,UQ,P9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(XQ,UQ,P9),P9.x===1&&P9.y===1&&P9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(XQ,UQ,P9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Z8=new S,oK=new R0,aK=new R0;class zJ extends iQ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=C8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(n7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return C8*2*Math.atan(Math.tan(n7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){Z8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(Z8.x,Z8.y).multiplyScalar(-J/Z8.z),Z8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(Z8.x,Z8.y).multiplyScalar(-J/Z8.z)}getViewSize(J,Q){return this.getViewBounds(J,oK,aK),Q.subVectors(aK,oK)}setViewOffset(J,Q,$,Z,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(n7*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*Z/Y,Q-=K.offsetY*$/X,Z*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class KY extends R6{constructor(){super(new zJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=C8*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class oQ extends P7{constructor(J,Q,$=0,Z=Math.PI/3,W=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(r0.DEFAULT_UP),this.updateMatrix(),this.target=new r0,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=K,this.map=null,this.shadow=new KY}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class HY extends R6{constructor(){super(new zJ(90,1,0.5,500));this.isPointLightShadow=!0}}class x8 extends P7{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new HY}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class I7 extends iQ{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,K=$+J,H=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,K=W+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class YY extends R6{constructor(){super(new I7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class C7 extends P7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(r0.DEFAULT_UP),this.updateMatrix(),this.target=new r0,this.shadow=new YY}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class G9{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var p$=new WeakMap;class aQ extends _9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")_0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")_0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=C9.get(`image-bitmap:${J}`);if(K!==void 0){if(W.manager.itemStart(J),K.then){K.then((X)=>{if(p$.has(K)===!0){if(Z)Z(p$.get(K));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(X);W.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0);return}let H={};H.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",H.headers=this.requestHeader,H.priority=this.priority,H.cache=this.cache,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},W.options,{colorSpaceConversion:"none"}))}).then(function(X){if(C9.add(`image-bitmap:${J}`,X),Q)Q(X);return W.manager.itemEnd(J),X}).catch(function(X){if(Z)Z(X);p$.set(Y,X),C9.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});C9.add(`image-bitmap:${J}`,Y),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var W7=-90,K7=1;class L6 extends r0{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new zJ(W7,K7,J,Q);Z.layers=this.layers,this.add(Z);let W=new zJ(W7,K7,J,Q);W.layers=this.layers,this.add(W);let K=new zJ(W7,K7,J,Q);K.layers=this.layers,this.add(K);let H=new zJ(W7,K7,J,Q);H.layers=this.layers,this.add(H);let Y=new zJ(W7,K7,J,Q);Y.layers=this.layers,this.add(Y);let X=new zJ(W7,K7,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,X,U]=this.children,G=J.getRenderTarget(),N=J.getActiveCubeFace(),E=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.mipmapsAutoUpdate;$.texture.mipmapsAutoUpdate=!1;let D=!1;if(J.isWebGLRenderer===!0)D=J.state.buffers.depth.getReversed();else D=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.mipmapsAutoUpdate=R,J.setRenderTarget($,5,Z),D&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,N,E),J.xr.enabled=q,$.texture.needsPMREMUpdate=!0}}class MW extends zJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var VW="\\[\\]\\.:\\/",H5=new RegExp("["+VW+"]","g"),DW="[^"+VW+"]",Y5="[^"+VW.replace("\\.","")+"]",X5=/((?:WC+[\/:])*)/.source.replace("WC",DW),U5=/(WCOD+)?/.source.replace("WCOD",Y5),G5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",DW),E5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",DW),N5=new RegExp("^"+X5+U5+G5+E5+"$"),q5=["material","materials","bones","map"];class XY{constructor(J,Q,$){let Z=$||o0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class o0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||o0.parseTrackName(Q),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new o0(J,Q,$);else return new o0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(H5,"")}static parseTrackName(J){let Q=N5.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(q5.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=o0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){_0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){j0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){j0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){j0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){j0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){j0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[Z];if(K===void 0){let X=Q.nodeName;j0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=XY;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IF=new Float32Array(1);class UY{static{this.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=Z,this}}function BW(J,Q,$,Z){let W=F5(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function F5(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)_0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function SY(){let J=null,Q=!1,$=null,Z=null;function W(K,H){Z=J.requestAnimationFrame(W),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function O5(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:G}=Y,N=U.byteLength,E=J.createBuffer();J.bindBuffer(X,E),J.bufferData(X,U,G),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:E,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:N}}function Z(Y,X,U){let{array:G,updateRanges:N}=X;if(J.bindBuffer(U,Y),N.length===0)J.bufferSubData(U,0,G);else{N.sort((q,R)=>q.start-R.start);let E=0;for(let q=1;q<N.length;q++){let R=N[E],D=N[q];if(D.start<=R.start+R.count+1)R.count=Math.max(R.count,D.start+D.count-R.start);else++E,N[E]=D}N.length=E+1;for(let q=0,R=N.length;q<R;q++){let D=N[q];J.bufferSubData(U,D.start*G.BYTES_PER_ELEMENT,G,D.start,D.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:K,update:H}}var R5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L5=`#ifdef USE_ALPHAHASH
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
#endif`,M5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k5=`#ifdef USE_AOMAP
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
#endif`,z5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_5=`#ifdef USE_BATCHING
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
#endif`,P5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w5=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A5=`#ifdef USE_IRIDESCENCE
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
#endif`,T5=`#ifdef USE_BUMPMAP
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
#endif`,S5=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,g5=`#define PI 3.141592653589793
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
} // validated`,p5=`vec3 transformedNormal = objectNormal;
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
#endif`,l5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c5="gl_FragColor = linearToOutputTexel( gl_FragColor );",n5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s5=`#ifdef USE_ENVMAP
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
#endif`,i5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,o5=`#ifdef USE_ENVMAP
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
#endif`,a5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r5=`#ifdef USE_ENVMAP
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
#endif`,t5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JG=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$G=`#ifdef USE_GRADIENTMAP
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
}`,ZG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HG=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,YG=`#ifdef USE_ENVMAP
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
#endif`,XG=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NG=`PhysicalMaterial material;
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
#endif`,qG=`uniform sampler2D dfgLUT;
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
}`,FG=`
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
#endif`,OG=`#if defined( RE_IndirectDiffuse )
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
#endif`,RG=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LG=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,MG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_G=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PG=`#if defined( USE_POINTS_UV )
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
#endif`,IG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wG=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AG=`#if defined( USE_MORPHCOLORS )
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
#endif`,TG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SG=`#ifdef USE_MORPHTARGETS
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
#endif`,jG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yG=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xG=`#ifdef USE_NORMALMAP
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
#endif`,gG=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pG=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lG=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mG=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dG=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uG=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iG=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oG=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aG=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eG=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JE=`float getShadowMask() {
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
}`,QE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,ZE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,GE=`#ifdef USE_TRANSMISSION
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform float backgroundBlurriness;
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
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
}`,kE=`#if DEPTH_PACKING == 3200
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
}`,zE=`#define DISTANCE
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
}`,_E=`#define DISTANCE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`uniform float scale;
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
}`,wE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,TE=`uniform vec3 diffuse;
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
}`,SE=`#define LAMBERT
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
}`,jE=`#define LAMBERT
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
}`,vE=`#define MATCAP
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
}`,yE=`#define MATCAP
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
}`,hE=`#define NORMAL
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
}`,fE=`#define NORMAL
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
}`,bE=`#define PHONG
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
}`,xE=`#define PHONG
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
}`,gE=`#define STANDARD
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
}`,pE=`#define STANDARD
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
}`,lE=`#define TOON
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
}`,mE=`#define TOON
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
}`,dE=`uniform float size;
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
}`,uE=`uniform vec3 diffuse;
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
}`,cE=`#include <common>
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
}`,nE=`uniform vec3 color;
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
}`,sE=`uniform float rotation;
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
}`,iE=`uniform vec3 diffuse;
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
}`,p0={alphahash_fragment:R5,alphahash_pars_fragment:L5,alphamap_fragment:M5,alphamap_pars_fragment:V5,alphatest_fragment:D5,alphatest_pars_fragment:B5,aomap_fragment:k5,aomap_pars_fragment:z5,batching_pars_vertex:_5,batching_vertex:P5,begin_vertex:I5,beginnormal_vertex:C5,bsdfs:w5,iridescence_fragment:A5,bumpmap_pars_fragment:T5,clipping_planes_fragment:S5,clipping_planes_pars_fragment:j5,clipping_planes_pars_vertex:v5,clipping_planes_vertex:y5,color_fragment:h5,color_pars_fragment:f5,color_pars_vertex:b5,color_vertex:x5,common:g5,defaultnormal_vertex:p5,displacementmap_pars_vertex:l5,displacementmap_vertex:m5,emissivemap_fragment:d5,emissivemap_pars_fragment:u5,colorspace_fragment:c5,colorspace_pars_fragment:n5,envmap_fragment:s5,envmap_common_pars_fragment:i5,envmap_pars_fragment:o5,envmap_pars_vertex:a5,envmap_physical_pars_fragment:YG,envmap_vertex:r5,fog_vertex:t5,fog_pars_vertex:e5,fog_fragment:JG,fog_pars_fragment:QG,gradientmap_pars_fragment:$G,lightmap_pars_fragment:ZG,lights_lambert_fragment:WG,lights_lambert_pars_fragment:KG,lights_pars_begin:HG,lights_toon_fragment:XG,lights_toon_pars_fragment:UG,lights_phong_fragment:GG,lights_phong_pars_fragment:EG,lights_physical_fragment:NG,lights_physical_pars_fragment:qG,lights_fragment_begin:FG,lights_fragment_maps:OG,lights_fragment_end:RG,lightprobes_pars_fragment:LG,logdepthbuf_fragment:MG,logdepthbuf_pars_fragment:VG,logdepthbuf_pars_vertex:DG,logdepthbuf_vertex:BG,map_fragment:kG,map_pars_fragment:zG,map_particle_fragment:_G,map_particle_pars_fragment:PG,metalnessmap_fragment:IG,metalnessmap_pars_fragment:CG,morphinstance_vertex:wG,morphcolor_vertex:AG,morphnormal_vertex:TG,morphtarget_pars_vertex:SG,morphtarget_vertex:jG,normal_fragment_begin:vG,normal_fragment_maps:yG,normal_pars_fragment:hG,normal_pars_vertex:fG,normal_vertex:bG,normalmap_pars_fragment:xG,clearcoat_normal_fragment_begin:gG,clearcoat_normal_fragment_maps:pG,clearcoat_pars_fragment:lG,iridescence_pars_fragment:mG,opaque_fragment:dG,packing:uG,premultiplied_alpha_fragment:cG,project_vertex:nG,dithering_fragment:sG,dithering_pars_fragment:iG,roughnessmap_fragment:oG,roughnessmap_pars_fragment:aG,shadowmap_pars_fragment:rG,shadowmap_pars_vertex:tG,shadowmap_vertex:eG,shadowmask_pars_fragment:JE,skinbase_vertex:QE,skinning_pars_vertex:$E,skinning_vertex:ZE,skinnormal_vertex:WE,specularmap_fragment:KE,specularmap_pars_fragment:HE,tonemapping_fragment:YE,tonemapping_pars_fragment:XE,transmission_fragment:UE,transmission_pars_fragment:GE,uv_pars_fragment:EE,uv_pars_vertex:NE,uv_vertex:qE,worldpos_vertex:FE,background_vert:OE,background_frag:RE,backgroundCube_vert:LE,backgroundCube_frag:ME,cube_vert:VE,cube_frag:DE,depth_vert:BE,depth_frag:kE,distance_vert:zE,distance_frag:_E,equirect_vert:PE,equirect_frag:IE,linedashed_vert:CE,linedashed_frag:wE,meshbasic_vert:AE,meshbasic_frag:TE,meshlambert_vert:SE,meshlambert_frag:jE,meshmatcap_vert:vE,meshmatcap_frag:yE,meshnormal_vert:hE,meshnormal_frag:fE,meshphong_vert:bE,meshphong_frag:xE,meshphysical_vert:gE,meshphysical_frag:pE,meshtoon_vert:lE,meshtoon_frag:mE,points_vert:dE,points_frag:uE,shadow_vert:cE,shadow_frag:nE,sprite_vert:sE,sprite_frag:iE},N0={common:{diffuse:{value:new A0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new R0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new A0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new A0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new A0(16777215)},opacity:{value:1},center:{value:new R0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},j9={basic:{uniforms:fJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.fog]),vertexShader:p0.meshbasic_vert,fragmentShader:p0.meshbasic_frag},lambert:{uniforms:fJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new A0(0)},envMapIntensity:{value:1}}]),vertexShader:p0.meshlambert_vert,fragmentShader:p0.meshlambert_frag},phong:{uniforms:fJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new A0(0)},specular:{value:new A0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:p0.meshphong_vert,fragmentShader:p0.meshphong_frag},standard:{uniforms:fJ([N0.common,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.roughnessmap,N0.metalnessmap,N0.fog,N0.lights,{emissive:{value:new A0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag},toon:{uniforms:fJ([N0.common,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.gradientmap,N0.fog,N0.lights,{emissive:{value:new A0(0)}}]),vertexShader:p0.meshtoon_vert,fragmentShader:p0.meshtoon_frag},matcap:{uniforms:fJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,{matcap:{value:null}}]),vertexShader:p0.meshmatcap_vert,fragmentShader:p0.meshmatcap_frag},points:{uniforms:fJ([N0.points,N0.fog]),vertexShader:p0.points_vert,fragmentShader:p0.points_frag},dashed:{uniforms:fJ([N0.common,N0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:p0.linedashed_vert,fragmentShader:p0.linedashed_frag},depth:{uniforms:fJ([N0.common,N0.displacementmap]),vertexShader:p0.depth_vert,fragmentShader:p0.depth_frag},normal:{uniforms:fJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,{opacity:{value:1}}]),vertexShader:p0.meshnormal_vert,fragmentShader:p0.meshnormal_frag},sprite:{uniforms:fJ([N0.sprite,N0.fog]),vertexShader:p0.sprite_vert,fragmentShader:p0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:p0.background_vert,fragmentShader:p0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:p0.backgroundCube_vert,fragmentShader:p0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:p0.cube_vert,fragmentShader:p0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:p0.equirect_vert,fragmentShader:p0.equirect_frag},distance:{uniforms:fJ([N0.common,N0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:p0.distance_vert,fragmentShader:p0.distance_frag},shadow:{uniforms:fJ([N0.lights,N0.fog,{color:{value:new A0(0)},opacity:{value:1}}]),vertexShader:p0.shadow_vert,fragmentShader:p0.shadow_frag}};j9.physical={uniforms:fJ([j9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new R0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new y0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new A0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new R0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new A0(0)},specularColor:{value:new A0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new R0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag};var rQ={r:0,b:0,g:0},oE=new v0,jY=new y0;jY.set(-1,0,0,0,1,0,0,0,1);function aE(J,Q,$,Z,W,K){let H=new A0(0),Y=W===!0?0:1,X,U,G=null,N=0,E=null;function q(k){let _=k.isScene===!0?k.background:null;if(_&&_.isTexture){let B=k.backgroundBlurriness>0;_=Q.get(_,B)}return _}function R(k){let _=!1,B=q(k);if(B===null)F(H,Y);else if(B&&B.isColor)F(B,1),_=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(I==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||_)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function D(k,_){let B=q(_);if(B&&B.isCubeTexture){if(U===void 0)U=new _J(new z7(1,1,1),new U9({name:"BackgroundCubeMaterial",uniforms:f8(j9.backgroundCube.uniforms),vertexShader:j9.backgroundCube.vertexShader,fragmentShader:j9.backgroundCube.fragmentShader,side:uJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(I,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(_.backgroundRotation)).transpose(),B.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(jY);if(U.material.toneMapped=g0.getTransfer(B.colorSpace)!==$J,G!==B||N!==B.version||E!==J.toneMapping)U.material.needsUpdate=!0,G=B,N=B.version,E=J.toneMapping;U.layers.enableAll(),k.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(X===void 0)X=new _J(new h8(2,2),new U9({name:"BackgroundMaterial",uniforms:f8(j9.background.uniforms),vertexShader:j9.background.vertexShader,fragmentShader:j9.background.fragmentShader,side:H8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=B,X.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,X.material.toneMapped=g0.getTransfer(B.colorSpace)!==$J,B.matrixAutoUpdate===!0)B.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(B.matrix),G!==B||N!==B.version||E!==J.toneMapping)X.material.needsUpdate=!0,G=B,N=B.version,E=J.toneMapping;X.layers.enableAll(),k.unshift(X,X.geometry,X.material,0,0,null)}}function F(k,_){k.getRGB(rQ,YW(J)),$.buffers.color.setClear(rQ.r,rQ.g,rQ.b,_,K)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(k,_=1){H.set(k),Y=_,F(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(k){Y=k,F(H,Y)},render:R,addToRenderList:D,dispose:O}}function rE(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=E(null),K=W,H=!1;function Y(y,p,t,A,s){let o=!1,x=N(y,A,t,p);if(K!==x)K=x,U(K.object);if(o=q(y,A,t,s),o)R(y,A,t,s);if(s!==null)Q.update(s,J.ELEMENT_ARRAY_BUFFER);if(o||H){if(H=!1,B(y,p,t,A),s!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(s).buffer)}}function X(){return J.createVertexArray()}function U(y){return J.bindVertexArray(y)}function G(y){return J.deleteVertexArray(y)}function N(y,p,t,A){let s=A.wireframe===!0,o=Z[p.id];if(o===void 0)o={},Z[p.id]=o;let x=y.isInstancedMesh===!0?y.id:0,K0=o[x];if(K0===void 0)K0={},o[x]=K0;let u=K0[t.id];if(u===void 0)u={},K0[t.id]=u;let r=u[s];if(r===void 0)r=E(X()),u[s]=r;return r}function E(y){let p=[],t=[],A=[];for(let s=0;s<$;s++)p[s]=0,t[s]=0,A[s]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:t,attributeDivisors:A,object:y,attributes:{},index:null}}function q(y,p,t,A){let s=K.attributes,o=p.attributes,x=0,K0=t.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=s[u],k0=o[u];if(k0===void 0){if(u==="instanceMatrix"&&y.instanceMatrix)k0=y.instanceMatrix;if(u==="instanceColor"&&y.instanceColor)k0=y.instanceColor}if($0===void 0)return!0;if($0.attribute!==k0)return!0;if(k0&&$0.data!==k0.data)return!0;x++}if(K.attributesNum!==x)return!0;if(K.index!==A)return!0;return!1}function R(y,p,t,A){let s={},o=p.attributes,x=0,K0=t.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=o[u];if($0===void 0){if(u==="instanceMatrix"&&y.instanceMatrix)$0=y.instanceMatrix;if(u==="instanceColor"&&y.instanceColor)$0=y.instanceColor}let k0={};if(k0.attribute=$0,$0&&$0.data)k0.data=$0.data;s[u]=k0,x++}K.attributes=s,K.attributesNum=x,K.index=A}function D(){let y=K.newAttributes;for(let p=0,t=y.length;p<t;p++)y[p]=0}function F(y){O(y,0)}function O(y,p){let{newAttributes:t,enabledAttributes:A,attributeDivisors:s}=K;if(t[y]=1,A[y]===0)J.enableVertexAttribArray(y),A[y]=1;if(s[y]!==p)J.vertexAttribDivisor(y,p),s[y]=p}function k(){let{newAttributes:y,enabledAttributes:p}=K;for(let t=0,A=p.length;t<A;t++)if(p[t]!==y[t])J.disableVertexAttribArray(t),p[t]=0}function _(y,p,t,A,s,o,x){if(x===!0)J.vertexAttribIPointer(y,p,t,s,o);else J.vertexAttribPointer(y,p,t,A,s,o)}function B(y,p,t,A){D();let s=A.attributes,o=t.getAttributes(),x=p.defaultAttributeValues;for(let K0 in o){let u=o[K0];if(u.location>=0){let r=s[K0];if(r===void 0){if(K0==="instanceMatrix"&&y.instanceMatrix)r=y.instanceMatrix;if(K0==="instanceColor"&&y.instanceColor)r=y.instanceColor}if(r!==void 0){let{normalized:$0,itemSize:k0}=r,i=Q.get(r);if(i===void 0)continue;let{buffer:Q0,type:D0,bytesPerElement:w0}=i,T0=D0===J.INT||D0===J.UNSIGNED_INT||r.gpuType===$Z;if(r.isInterleavedBufferAttribute){let B0=r.data,a0=B0.isInterleavedBuffer===!0?B0.stride:B0.itemSize,d0=r.offset;if(B0.isInstancedInterleavedBuffer||B0.isInstancedBufferAttribute){for(let b0=0;b0<u.locationSize;b0++)O(u.location+b0,B0.meshPerAttribute);if(y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=B0.meshPerAttribute*B0.count}else for(let b0=0;b0<u.locationSize;b0++)F(u.location+b0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let b0=0;b0<u.locationSize;b0++)_(u.location+b0,k0/u.locationSize,D0,$0,a0*w0,(d0+k0/u.locationSize*b0)*w0,T0)}else{if(r.isInstancedBufferAttribute){for(let B0=0;B0<u.locationSize;B0++)O(u.location+B0,r.meshPerAttribute);if(y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=r.meshPerAttribute*r.count}else for(let B0=0;B0<u.locationSize;B0++)F(u.location+B0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let B0=0;B0<u.locationSize;B0++)_(u.location+B0,k0/u.locationSize,D0,$0,k0*w0,k0/u.locationSize*B0*w0,T0)}}else if(x!==void 0){let $0=x[K0];if($0!==void 0)switch($0.length){case 2:J.vertexAttrib2fv(u.location,$0);break;case 3:J.vertexAttrib3fv(u.location,$0);break;case 4:J.vertexAttrib4fv(u.location,$0);break;default:J.vertexAttrib1fv(u.location,$0)}}}}k()}function I(){j();for(let y in Z){let p=Z[y];for(let t in p){let A=p[t];for(let s in A){let o=A[s];for(let x in o)G(o[x].object),delete o[x];delete A[s]}}delete Z[y]}}function C(y){if(Z[y.id]===void 0)return;let p=Z[y.id];for(let t in p){let A=p[t];for(let s in A){let o=A[s];for(let x in o)G(o[x].object),delete o[x];delete A[s]}}delete Z[y.id]}function L(y){for(let p in Z){let t=Z[p];for(let A in t){let s=t[A];if(s[y.id]===void 0)continue;let o=s[y.id];for(let x in o)G(o[x].object),delete o[x];delete s[y.id]}}}function z(y){for(let p in Z){let t=Z[p],A=y.isInstancedMesh===!0?y.id:0,s=t[A];if(s===void 0)continue;for(let o in s){let x=s[o];for(let K0 in x)G(x[K0].object),delete x[K0];delete s[o]}if(delete t[A],Object.keys(t).length===0)delete Z[p]}}function j(){if(l(),H=!0,K===W)return;K=W,U(K.object)}function l(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:j,resetDefaultState:l,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfObject:z,releaseStatesOfProgram:L,initAttributes:D,enableAttribute:F,disableUnusedAttributes:k}}function tE(J,Q,$){let Z;function W(X){Z=X}function K(X,U){J.drawArrays(Z,X,U),$.update(U,Z,1)}function H(X,U,G){if(G===0)return;J.drawArraysInstanced(Z,X,U,G),$.update(U,Z,G)}function Y(X,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,G);let E=0;for(let q=0;q<G;q++)E+=U[q];$.update(E,Z,1)}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function eE(J,Q,$,Z){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let L=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(L){if(L!==c9&&Z.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(L){let z=L===T9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(L!==B9&&L!==u9&&!z&&Z.convert(L)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(L){if(L==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";L="mediump"}if(L==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)_0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),E=$.logarithmicDepthBuffer===!0&&N===!1;if($.reversedDepthBuffer===!0&&N===!1)_0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if($.logarithmicDepthBuffer===!0&&N===!0)_0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),k=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),_=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:N,maxTextures:q,maxVertexTextures:R,maxTextureSize:D,maxCubemapSize:F,maxAttributes:O,maxVertexUniforms:k,maxVaryings:_,maxFragmentUniforms:B,maxSamples:I,samples:C}}function JN(J){let Q=this,$=null,Z=0,W=!1,K=!1,H=new I9,Y=new y0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(N,E){let q=N.length!==0||E||Z!==0||W;return W=E,Z=N.length,q},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(N,E){$=G(N,E,0)},this.setState=function(N,E,q){let{clippingPlanes:R,clipIntersection:D,clipShadows:F}=N,O=J.get(N);if(!W||R===null||R.length===0||K&&!F)if(K)G(null);else U();else{let k=K?0:Z,_=k*4,B=O.clippingState||null;X.value=B,B=G(R,E,_,q);for(let I=0;I!==_;++I)B[I]=$[I];O.clippingState=B,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=k}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(N,E,q,R){let D=N!==null?N.length:0,F=null;if(D!==0){if(F=X.value,R!==!0||F===null){let O=q+D*4,k=E.matrixWorldInverse;if(Y.getNormalMatrix(k),F===null||F.length<O)F=new Float32Array(O);for(let _=0,B=q;_!==D;++_,B+=4)H.copy(N[_]).applyMatrix4(k,Y),H.normal.toArray(F,B),F[B+3]=H.constant}X.value=F,X.needsUpdate=!0}return Q.numPlanes=D,Q.numIntersection=0,F}}class J$ extends H9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new fQ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new z7(5,5,5),W=new U9({name:"CubemapFromEquirect",uniforms:f8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:uJ,blending:T8});W.uniforms.tEquirect.value=Q;let K=new _J(Z,W),H=Q.minFilter;if(Q.minFilter===D9)Q.minFilter=hJ;return new L6(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,Z);J.setRenderTarget(W)}}var GY=256,QN=3,$N=20,vY=256,yY=16,ZN=3,WN=new S,KN=new A0;class eQ{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new L6(1,10,null),this._boxMesh=new _J(new z7(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:K=256,position:H=WN}=W,Y=this._renderer;this._setSize(K);let X=this._allocateTarget(),U=this._getSourceTarget(!0);if(Q>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:G,autoClearColor:N,autoClearDepth:E,autoClearStencil:q}=Y,R=J.background;if(Y.autoClear=!0,Y.autoClearColor=!0,Y.autoClearDepth=!0,Y.autoClearStencil=!0,R===null)J.background=Y.getClearColor(KN);let D=new L6($,Z,U);if(D.position.copy(H),D.update(Y,J),Y.autoClear=G,Y.autoClearColor=N,Y.autoClearDepth=E,Y.autoClearStencil=q,J.background=R,Q>0)U.texture.mipmapsAutoUpdate=!0,this._blur(X,Q);return this._applyPMREM(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=qY(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=NY(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(GY,iZ(J))}_fromTexture(J,Q){if(J.mapping===$6||J.mapping===q7)this._setSize(J.image.length===0?GY:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let $=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM($),$}_allocateTarget(){let J=this._cubeSize,Q=EY(J,!1,!1),$=Math.log2(J)-QN;for(let Z=0;Z<=$;Z++)Q.texture.mipmaps.push({width:J>>Z,height:J>>Z});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,$=this._sourceTarget;if($===null||$.width!==Q||J&&$.depthBuffer===!1){if($!==null)$.dispose();this._sourceTarget=EY(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,$){let Z=this._boxMesh,W=this._cubeCamera;Z.material=$,W.renderTarget=J,W.activeMipmapLevel=Q;let K=J.width>>Q;J.viewport.set(0,0,K,K),W.update(this._renderer,Z),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===$6||J.mapping===q7){if(this._cubemapMaterial===null)this._cubemapMaterial=qY();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=NY();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=HN(),this._integrationMaterial=YN();let Q=this._cubeSize,$=J.texture.mipmaps.length-1,Z=this._ggxMaterial.uniforms;Z.envMap.value=this._sourceTarget.texture;let W=this._integrationMaterial.uniforms;W.envMap.value=this._sourceTarget.texture,W.sourceLod.value=Math.log2(Q/yY);for(let K=0;K<=$;K++){let H=eQ.lodToRoughness(K,$);if(K>$-ZN)W.roughness.value=H,this._renderCube(J,K,this._integrationMaterial);else{let Y=H>0?Math.log2(Q)+0.5*Math.log2(6/(vY*Math.pow(H,4)))+0.5:0;Z.roughness.value=H,Z.lodBias.value=Y,this._renderCube(J,K,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=XN();let $=this._blurMaterial,Z=$.uniforms,W=this._sourceTarget;Z.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,Z.envMap.value=W.texture,this._renderCube(J,0,$),Z.envMap.value=J.texture,this._renderCube(W,0,$)}}function EY(J,Q,$){return new J$(J,{minFilter:D9,generateMipmaps:Q,type:T9,colorSpace:gJ,depthBuffer:$})}function B6(J,Q,$){return new U9({name:J,uniforms:Q,vertexShader:p0.cube_vert,fragmentShader:$,side:uJ,blending:T8,depthTest:!1,depthWrite:!1})}function HN(){return B6("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vY}u

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
	`)}function YN(){return B6("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yY}},`

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
	`)}function XN(){return B6("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$N}
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
	`)}function NY(){return B6("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function qY(){return B6("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function UN(J){let Q=new WeakMap,$=new WeakMap,Z=null;function W(E,q=!1){if(E===null||E===void 0)return null;if(q)return H(E);return K(E)}function K(E){if(E&&E.isTexture){let q=E.mapping;if(q===qQ||q===FQ)if(Q.has(E)){let R=Q.get(E).texture;return Y(R,E.mapping)}else{let R=E.image;if(R&&R.height>0){let D=new J$(R.height);return D.fromEquirectangularTexture(J,E),Q.set(E,D),E.addEventListener("dispose",U),Y(D.texture,E.mapping)}else return null}}return E}function H(E){if(E&&E.isTexture&&E.isPMREMTexture!==!0){let q=E.mapping,R=q===qQ||q===FQ,D=q===$6||q===q7;if(R||D){let F=$.get(E),O=F!==void 0?F.texture.pmremVersion:0;if(E.isRenderTargetTexture&&E.pmremVersion!==O){if(Z===null)Z=new eQ(J);return F=R?Z.fromEquirectangular(E,F):Z.fromCubemap(E,F),F.texture.pmremVersion=E.pmremVersion,$.set(E,F),F.texture}else if(F!==void 0)return F.texture;else{let k=E.image;if(R&&k&&k.height>0||D&&k&&X(k)){if(Z===null)Z=new eQ(J);return F=R?Z.fromEquirectangular(E):Z.fromCubemap(E),F.texture.pmremVersion=E.pmremVersion,$.set(E,F),E.addEventListener("dispose",G),F.texture}else return null}}}return E}function Y(E,q){if(q===qQ)E.mapping=$6;else if(q===FQ)E.mapping=q7;return E}function X(E){let q=0,R=6;for(let D=0;D<R;D++)if(E[D]!==void 0)q++;return q===R}function U(E){let q=E.target;q.removeEventListener("dispose",U);let R=Q.get(q);if(R!==void 0)Q.delete(q),R.dispose()}function G(E){let q=E.target;q.removeEventListener("dispose",G);let R=$.get(q);if(R!==void 0)$.delete(q),R.dispose()}function N(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:N}}function GN(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)I8("WebGLRenderer: "+Z+" extension not supported.");return W}}}function EN(J,Q,$,Z){let W={},K=new WeakMap,H=new FinalizationRegistry((R)=>delete W[R]);function Y(R){X(R.target)}function X(R){if(R.index!==null)Q.remove(R.index);for(let F in R.attributes)Q.remove(R.attributes[F]);R.removeEventListener("dispose",Y),delete W[R.id],H.unregister(R);let D=K.get(R);if(D)Q.remove(D),K.delete(R);if(Z.releaseStatesOfGeometry(R),R.isInstancedBufferGeometry===!0)delete R._maxInstanceCount;$.memory.geometries--}function U(R,D){if(W[D.id]!==void 0)return D;return D.addEventListener("dispose",Y),W[D.id]=new WeakRef(D),H.register(D,D.id,D),$.memory.geometries++,D}function G(R){let D=R.attributes;for(let F in D)Q.update(D[F],J.ARRAY_BUFFER)}function N(R){let D=R.index,F=R.attributes.position,O=0;if(F===void 0)return;let k=D!==null?D.array.length:F.array.length/3-1,B=new(F.count>=65535?AQ:wQ)(Math.ceil(k/3)*6,1),I=B.array;if(D!==null){let L=D.array;O=D.version;for(let z=0,j=0;z<k;z+=3){let l=L[z+0],y=L[z+1],p=L[z+2];I[j++]=l,I[j++]=y,I[j++]=y,I[j++]=p,I[j++]=p,I[j++]=l}}else{O=F.version;for(let L=0,z=0;L<k;L+=3){let j=L+0,l=L+1,y=L+2;I[z++]=j,I[z++]=l,I[z++]=l,I[z++]=y,I[z++]=y,I[z++]=j}}B.version=O;let C=K.get(R);if(C)Q.remove(C);K.set(R,B)}function E(R){let D=K.get(R);if(D){let F=R.index;if(F!==null){if(D.version<F.version)N(R)}}else N(R);return K.get(R)}function q(){for(let R in W){let D=W[R].deref();if(D!==void 0)X(D)}}return{get:U,update:G,getWireframeAttribute:E,dispose:q}}function NN(J,Q,$){let Z;function W(N){Z=N}let K,H;function Y(N){K=N.type,H=N.bytesPerElement}function X(N,E){J.drawElements(Z,E,K,N*H),$.update(E,Z,1)}function U(N,E,q){if(q===0)return;J.drawElementsInstanced(Z,E,K,N*H,q),$.update(E,Z,q)}function G(N,E,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,E,0,K,N,0,q);let D=0;for(let F=0;F<q;F++)D+=E[F];$.update(D,Z,1)}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function qN(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:j0("WebGLInfo: Unknown draw mode:",H);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function FN(J,Q,$){let Z=new WeakMap,W=new JJ;function K(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,N=G!==void 0?G.length:0,E=Z.get(Y);if(E===void 0||E.count!==N){let j=function(){L.dispose(),Z.delete(Y),Y.removeEventListener("dispose",j)};if(E!==void 0)E.texture.dispose();let q=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,D=Y.morphAttributes.color!==void 0,F=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],k=Y.morphAttributes.color||[],_=0;if(q===!0)_=1;if(R===!0)_=2;if(D===!0)_=3;let B=Y.attributes.position.count*_,I=1;if(B>Q.maxTextureSize)I=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let C=new Float32Array(B*I*4*N),L=new PQ(C,B,I,N);L.type=u9,L.needsUpdate=!0;let z=_*4;for(let l=0;l<N;l++){let y=F[l],p=O[l],t=k[l],A=B*I*4*l;for(let s=0;s<y.count;s++){let o=s*z;if(q===!0)W.fromBufferAttribute(y,s),C[A+o+0]=W.x,C[A+o+1]=W.y,C[A+o+2]=W.z,C[A+o+3]=0;if(R===!0)W.fromBufferAttribute(p,s),C[A+o+4]=W.x,C[A+o+5]=W.y,C[A+o+6]=W.z,C[A+o+7]=0;if(D===!0)W.fromBufferAttribute(t,s),C[A+o+8]=W.x,C[A+o+9]=W.y,C[A+o+10]=W.z,C[A+o+11]=t.itemSize===4?W.w:1}}E={count:N,texture:L,size:new R0(B,I)},Z.set(Y,E),Y.addEventListener("dispose",j)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let q=0;for(let D=0;D<U.length;D++)q+=U[D];let R=Y.morphTargetsRelative?1:1-q;X.getUniforms().setValue(J,"morphTargetBaseInfluence",R),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",E.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",E.size)}return{update:K}}function ON(J,Q,$,Z,W){let K=new WeakMap;function H(U){let G=W.render.frame,N=U.geometry,E=Q.get(U,N);if(K.get(E)!==G)Q.update(E),K.set(E,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,G)}}if(U.isSkinnedMesh){let q=U.skeleton;if(K.get(q)!==G)q.update(),K.set(q,G)}return E}function Y(){K=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:H,dispose:Y}}var RN={[o$]:"LINEAR_TONE_MAPPING",[a$]:"REINHARD_TONE_MAPPING",[r$]:"CINEON_TONE_MAPPING",[t$]:"ACES_FILMIC_TONE_MAPPING",[JZ]:"AGX_TONE_MAPPING",[QZ]:"NEUTRAL_TONE_MAPPING",[e$]:"CUSTOM_TONE_MAPPING"};function LN(J,Q,$,Z,W,K){let H=new H9(Q,$,{type:J,depthBuffer:W,stencilBuffer:K,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=null,G=new RJ;G.setAttribute("position",new IJ([-1,3,0,-1,-1,0,3,-1,0],3)),G.setAttribute("uv",new IJ([0,2,0,0,2,0],2));let N=new XW({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new _J(G,N),q=new I7(-1,1,1,-1,0,1),R=null,D=null,F=!1,O,k=null,_=[],B=!1;this.setSize=function(I,C){if(H.setSize(I,C),Y!==null)Y.setSize(I,C);if(X!==null)X.setSize(I,C);for(let L=0;L<_.length;L++){let z=_[L];if(z.setSize)z.setSize(I,C)}},this.setEffects=function(I){_=I,B=_.length>0&&_[0].isRenderPass===!0;let{width:C,height:L}=H;if(_.length>0&&Y===null)Y=new H9(C,L,{type:T9,depthBuffer:!1,stencilBuffer:!1}),X=new H9(C,L,{type:T9,depthBuffer:!1,stencilBuffer:!1});let z=W===!0&&_.some((j)=>j.needsDepthTexture===!0);if(z!==(H.depthTexture!==null)){if(z===!0&&U===null){if(U=new G8(C,L),K===!0)U.format=X8,U.type=j8}H.dispose(),H.depthTexture=z?U:null,H.resolveDepthBuffer=z,H.storeMultisampledDepthBuffer=z}for(let j=0;j<_.length;j++){let l=_[j];if(l.setSize)l.setSize(C,L);if(z&&l.needsDepthTexture===!0&&l.setDepthTexture)l.setDepthTexture(U)}},this.begin=function(I,C){if(F)return!1;if(I.toneMapping===A9&&_.length===0)return!1;if(k=C,C!==null){let{width:L,height:z}=C;if(H.width!==L||H.height!==z)this.setSize(L,z)}if(B===!1)I.setRenderTarget(H);return O=I.toneMapping,I.toneMapping=A9,!0},this.hasRenderPass=function(){return B},this.end=function(I,C){I.toneMapping=O,F=!0;let L=H,z=Y;for(let j=0;j<_.length;j++){let l=_[j];if(l.enabled===!1)continue;if(l.render(I,z,L,C),l.needsSwap!==!1)L=z,z=z===Y?X:Y}if(R!==I.outputColorSpace||D!==I.toneMapping){if(R=I.outputColorSpace,D=I.toneMapping,N.defines={},g0.getTransfer(R)===$J)N.defines.SRGB_TRANSFER="";let j=RN[D];if(j)N.defines[j]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=L.texture,I.setRenderTarget(k),I.render(E,q),k=null,F=!1},this.isCompositing=function(){return F},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();G.dispose(),N.dispose()}}var hY=new EJ,fY=new G8(1,1),bY=new xQ(1),xY=new PQ,gY=new eZ,pY=new fQ,FY=[],OY=[],RY=new Float32Array(16),LY=new Float32Array(9),MY=new Float32Array(4);function w7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,K=FY[W];if(K===void 0)K=new Float32Array(W),FY[W]=K;if(Q!==0){Z.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function LJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function MJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function Q$(J,Q){let $=OY[Q];if($===void 0)$=new Int32Array(Q),OY[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function MN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function VN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(LJ($,Q))return;J.uniform2fv(this.addr,Q),MJ($,Q)}}function DN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(LJ($,Q))return;J.uniform3fv(this.addr,Q),MJ($,Q)}}function BN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(LJ($,Q))return;J.uniform4fv(this.addr,Q),MJ($,Q)}}function kN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(LJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),MJ($,Q)}else{if(LJ($,Z))return;MY.set(Z),J.uniformMatrix2fv(this.addr,!1,MY),MJ($,Z)}}function zN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(LJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),MJ($,Q)}else{if(LJ($,Z))return;LY.set(Z),J.uniformMatrix3fv(this.addr,!1,LY),MJ($,Z)}}function _N(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(LJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),MJ($,Q)}else{if(LJ($,Z))return;RY.set(Z),J.uniformMatrix4fv(this.addr,!1,RY),MJ($,Z)}}function PN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function IN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(LJ($,Q))return;J.uniform2iv(this.addr,Q),MJ($,Q)}}function CN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(LJ($,Q))return;J.uniform3iv(this.addr,Q),MJ($,Q)}}function wN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(LJ($,Q))return;J.uniform4iv(this.addr,Q),MJ($,Q)}}function AN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function TN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(LJ($,Q))return;J.uniform2uiv(this.addr,Q),MJ($,Q)}}function SN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(LJ($,Q))return;J.uniform3uiv(this.addr,Q),MJ($,Q)}}function jN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(LJ($,Q))return;J.uniform4uiv(this.addr,Q),MJ($,Q)}}function $$(J){if(J.version===0)J.compareFunction=uZ,J.needsUpdate=!0;return J}function vN(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)K=$$(fY);else K=hY;$.setTexture2D(Q||K,W)}function yN(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||gY,W)}function hN(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_CUBE_SHADOW)K=$$(bY);else K=pY;$.setTextureCube(Q||K,W)}function fN(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||xY,W)}function bN(J){switch(J){case 5126:return MN;case 35664:return VN;case 35665:return DN;case 35666:return BN;case 35674:return kN;case 35675:return zN;case 35676:return _N;case 5124:case 35670:return PN;case 35667:case 35671:return IN;case 35668:case 35672:return CN;case 35669:case 35673:return wN;case 5125:return AN;case 36294:return TN;case 36295:return SN;case 36296:return jN;case 35678:case 36198:case 36298:case 36306:case 35682:return vN;case 35679:case 36299:case 36307:return yN;case 35680:case 36300:case 36308:case 36293:return hN;case 36289:case 36303:case 36311:case 36292:return fN}}function xN(J,Q){J.uniform1fv(this.addr,Q)}function gN(J,Q){let $=w7(Q,this.size,2);J.uniform2fv(this.addr,$)}function pN(J,Q){let $=w7(Q,this.size,3);J.uniform3fv(this.addr,$)}function lN(J,Q){let $=w7(Q,this.size,4);J.uniform4fv(this.addr,$)}function mN(J,Q){let $=w7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function dN(J,Q){let $=w7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function uN(J,Q){let $=w7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function cN(J,Q){J.uniform1iv(this.addr,Q)}function nN(J,Q){J.uniform2iv(this.addr,Q)}function sN(J,Q){J.uniform3iv(this.addr,Q)}function iN(J,Q){J.uniform4iv(this.addr,Q)}function oN(J,Q){J.uniform1uiv(this.addr,Q)}function aN(J,Q){J.uniform2uiv(this.addr,Q)}function rN(J,Q){J.uniform3uiv(this.addr,Q)}function tN(J,Q){J.uniform4uiv(this.addr,Q)}function eN(J,Q,$){let Z=this.cache,W=Q.length,K=Q$($,W);if(!LJ(Z,K))J.uniform1iv(this.addr,K),MJ(Z,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=$$(fY);else H=hY;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function Jq(J,Q,$){let Z=this.cache,W=Q.length,K=Q$($,W);if(!LJ(Z,K))J.uniform1iv(this.addr,K),MJ(Z,K);for(let H=0;H!==W;++H)$.setTexture3D(Q[H]||gY,K[H])}function Qq(J,Q,$){let Z=this.cache,W=Q.length,K=Q$($,W);if(!LJ(Z,K))J.uniform1iv(this.addr,K),MJ(Z,K);let H;if(this.type===J.SAMPLER_CUBE_SHADOW)H=$$(bY);else H=pY;for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||H,K[Y])}function $q(J,Q,$){let Z=this.cache,W=Q.length,K=Q$($,W);if(!LJ(Z,K))J.uniform1iv(this.addr,K),MJ(Z,K);for(let H=0;H!==W;++H)$.setTexture2DArray(Q[H]||xY,K[H])}function Zq(J){switch(J){case 5126:return xN;case 35664:return gN;case 35665:return pN;case 35666:return lN;case 35674:return mN;case 35675:return dN;case 35676:return uN;case 5124:case 35670:return cN;case 35667:case 35671:return nN;case 35668:case 35672:return sN;case 35669:case 35673:return iN;case 5125:return oN;case 36294:return aN;case 36295:return rN;case 36296:return tN;case 35678:case 36198:case 36298:case 36306:case 35682:return eN;case 35679:case 36299:case 36307:return Jq;case 35680:case 36300:case 36308:case 36293:return Qq;case 36289:case 36303:case 36311:case 36292:return $q}}class lY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=bN(Q.type)}}class mY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=Zq(Q.type)}}class dY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let H=Z[W];H.setValue(J,Q[H.id],$)}}}var kW=/(\w+)(\])?(\[|\.)?/g;function VY(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Wq(J,Q,$){let Z=J.name,W=Z.length;kW.lastIndex=0;while(!0){let K=kW.exec(Z),H=kW.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===W){VY($,U===void 0?new lY(Y,J,Q):new mY(Y,J,Q));break}else{let N=$.map[Y];if(N===void 0)N=new dY(Y),VY($,N);$=N}}}class D6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);Wq(H,Y,this)}let Z=[],W=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(K);else W.push(K);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in Q)$.push(K)}return $}}function DY(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var Kq=37297,Hq=0;function Yq(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=W;H<K;H++){let Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var BY=new y0;function Xq(J){g0._getMatrix(BY,g0.workingColorSpace,J);let Q=`mat3( ${BY.elements.map(($)=>$.toFixed(4))} )`;switch(g0.getTransfer(J)){case lZ:return[Q,"LinearTransferOETF"];case $J:return[Q,"sRGBTransferOETF"];default:return _0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function kY(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(Z&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+Yq(J.getShaderSource(Q),Y)}else return K}function Uq(J,Q){let $=Xq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( ${$[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Gq={[o$]:"Linear",[a$]:"Reinhard",[r$]:"Cineon",[t$]:"ACESFilmic",[JZ]:"AgX",[QZ]:"Neutral",[e$]:"Custom"};function Eq(J,Q){let $=Gq[Q];if($===void 0)return _0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var tQ=new S;function Nq(){g0.getLuminanceCoefficients(tQ);let J=tQ.x.toFixed(4),Q=tQ.y.toFixed(4),$=tQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function qq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(V6).join(`
`)}function Fq(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function Oq(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib(Q,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function V6(J){return J!==""}function zY(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function _Y(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Rq=/^[ \t]*#include +<([\w\d./]+)>/gm;function _W(J){return J.replace(Rq,Lq)}function Lq(J,Q){let $=p0[Q];if($===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return _W($)}var Mq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function PY(J){return J.replace(Mq,Vq)}function Vq(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function IY(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Dq={[J6]:"SHADOWMAP_TYPE_PCF",[E7]:"SHADOWMAP_TYPE_VSM"};function Bq(J){return Dq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kq={[q7]:"ENVMAP_MODE_REFRACTION"};function zq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return kq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _q={[wH]:"ENVMAP_BLENDING_MULTIPLY",[AH]:"ENVMAP_BLENDING_MIX",[TH]:"ENVMAP_BLENDING_ADD"};function Pq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return _q[J.combine]||"ENVMAP_BLENDING_NONE"}function Iq(J,Q,$,Z){let W=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=Bq($),U=$.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",G=zq($),N=Pq($),E=qq($),q=Fq(K),R=W.createProgram(),D,F,O=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q].filter(V6).join(`
`),D.length>0)D+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q].filter(V6).join(`
`),F.length>0)F+=`
`}else D=[IY($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+$.diffuseRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(V6).join(`
`),F=[IY($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+N:"",$.envMapPMREM?"#define ENVMAP_MAX_LOD "+$.envMapMaxLod+".0":"",$.envMapPMREM?"#define ENVMAP_SIZE "+$.envMapSize+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==A9?"#define TONE_MAPPING":"",$.toneMapping!==A9?p0.tonemapping_pars_fragment:"",$.toneMapping!==A9?Eq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",p0.colorspace_pars_fragment,Uq("linearToOutputTexel",$.outputColorSpace),Nq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(V6).join(`
`);if(H=_W(H),H=zY(H,$),H=_Y(H,$),Y=_W(Y),Y=zY(Y,$),Y=_Y(Y,$),H=PY(H),Y=PY(Y),$.isRawShaderMaterial!==!0)O=`#version 300 es
`,D=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,F=["#define varying in",$.glslVersion===cZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===cZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let k=O+D+H,_=O+F+Y,B=DY(W,W.VERTEX_SHADER,k),I=DY(W,W.FRAGMENT_SHADER,_);if(W.attachShader(R,B),W.attachShader(R,I),$.index0AttributeName!==void 0)W.bindAttribLocation(R,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(R,0,"position");W.linkProgram(R);function C(l){if(J.debug.checkShaderErrors){let y=W.getProgramInfoLog(R)||"",p=W.getShaderInfoLog(B)||"",t=W.getShaderInfoLog(I)||"",A=y.trim(),s=p.trim(),o=t.trim(),x=!0,K0=!0;if(W.getProgramParameter(R,W.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,R,B,I);else{let u=kY(W,B,"vertex"),r=kY(W,I,"fragment");j0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(R,W.VALIDATE_STATUS)+`

Material Name: `+l.name+`
Material Type: `+l.type+`

Program Info Log: `+A+`
`+u+`
`+r)}else if(A!=="")_0("WebGLProgram: Program Info Log:",A);else if(s===""||o==="")K0=!1;if(K0)l.diagnostics={runnable:x,programLog:A,vertexShader:{log:s,prefix:D},fragmentShader:{log:o,prefix:F}}}W.deleteShader(B),W.deleteShader(I),L=new D6(W,R),z=Oq(W,R)}let L;this.getUniforms=function(){if(L===void 0)C(this);return L};let z;this.getAttributes=function(){if(z===void 0)C(this);return z};let j=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(j===!1)j=W.getProgramParameter(R,Kq);return j},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(R),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Hq++,this.cacheKey=Q,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=I,this}var Cq=0;class uY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new cY(J),Q.set(J,$);return $}}class cY{constructor(J){this.id=Cq++,this.code=J,this.usedTimes=0}}function wq(J){return J===v8||J===BQ||J===kQ}function Aq(J,Q,$,Z,W,K){let H=new IQ,Y=new uY,X=new Set,U=[],G=new Map,N=Z.logarithmicDepthBuffer,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function q(L){if(X.add(L),L===0)return"uv";return`uv${L}`}function R(L,z,j,l,y,p){let t=l.fog,A=y.geometry,s=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?l.environment:null,o=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,x=Q.get(L.envMap||s,o),K0=E[L.type],u=Z.precision;if(L.precision!==null){if(u=Z.getMaxPrecision(L.precision),u!==L.precision)_0("WebGLProgram.getParameters:",L.precision,"not supported, using",u,"instead.")}let r=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,$0=r!==void 0?r.length:0,k0=0;if(A.morphAttributes.position!==void 0)k0=1;if(A.morphAttributes.normal!==void 0)k0=2;if(A.morphAttributes.color!==void 0)k0=3;let i,Q0,D0,w0;if(K0){let F0=j9[K0];i=F0.vertexShader,Q0=F0.fragmentShader}else{i=L.vertexShader,Q0=L.fragmentShader;let F0=Y.getVertexShaderStage(L),e0=Y.getFragmentShaderStage(L);Y.update(L,F0,e0),D0=F0.id,w0=e0.id}let T0=J.getRenderTarget(),B0=J.state.buffers.depth.getReversed(),a0=y.isInstancedMesh===!0,d0=y.isBatchedMesh===!0,b0=!!L.map,KJ=!!L.matcap,n0=!!x,GJ=n0&&x.isPMREMTexture===!0,NJ=!!L.aoMap,pJ=!!L.lightMap,rJ=!!L.bumpMap&&L.wireframe===!1,qJ=!!L.normalMap,wJ=!!L.displacementMap,lJ=!!L.emissiveMap,mJ=!!L.metalnessMap,N9=!!L.roughnessMap,v=L.anisotropy>0,q9=L.clearcoat>0,t0=L.diffuseRoughness>0,VJ=L.dispersion>0,E0=L.retroreflectivity>0,ZJ=L.iridescence>0,S0=L.sheen>0,h0=L.transmission>0,AJ=v&&!!L.anisotropyMap,P=q9&&!!L.clearcoatMap,M=q9&&!!L.clearcoatNormalMap,h=q9&&!!L.clearcoatRoughnessMap,e=t0&&!!L.diffuseRoughnessMap,a=ZJ&&!!L.iridescenceMap,W0=ZJ&&!!L.iridescenceThicknessMap,X0=S0&&!!L.sheenColorMap,m=S0&&!!L.sheenRoughnessMap,n=!!L.specularMap,H0=!!L.specularColorMap,w=!!L.specularIntensityMap,c=h0&&!!L.transmissionMap,d=h0&&!!L.thicknessMap,J0=!!L.gradientMap,Z0=!!L.alphaMap,G0=L.alphaTest>0,I0=!!L.alphaHash,P0=!!L.extensions,q0=A9;if(L.toneMapped){if(T0===null||T0.isXRRenderTarget===!0)q0=J.toneMapping}let C0=GJ?x.isCompressedCubeTexture?x.image[0].mipmaps:x.mipmaps:null,x0={shaderID:K0,shaderType:L.type,shaderName:L.name,vertexShader:i,fragmentShader:Q0,defines:L.defines,customVertexShaderID:D0,customFragmentShaderID:w0,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:u,batching:d0,batchingColor:d0&&y._colorsTexture!==null,instancing:a0,instancingColor:a0&&y.instanceColor!==null,instancingMorph:a0&&y.morphTexture!==null,outputColorSpace:T0===null?J.outputColorSpace:T0.isXRRenderTarget===!0?T0.texture.colorSpace:g0.workingColorSpace,alphaToCoverage:!!L.alphaToCoverage,map:b0,matcap:KJ,envMap:n0,envMapMode:n0&&x.mapping,envMapPMREM:GJ,envMapMaxLod:GJ?C0.length-1:null,envMapSize:GJ?C0[0].width:null,aoMap:NJ,lightMap:pJ,bumpMap:rJ,normalMap:qJ,displacementMap:wJ,emissiveMap:lJ,normalMapObjectSpace:qJ&&L.normalMapType===xH,normalMapTangentSpace:qJ&&L.normalMapType===pZ,packedNormalMap:qJ&&L.normalMapType===pZ&&wq(L.normalMap.format),metalnessMap:mJ,roughnessMap:N9,anisotropy:v,anisotropyMap:AJ,clearcoat:q9,clearcoatMap:P,clearcoatNormalMap:M,clearcoatRoughnessMap:h,diffuseRoughness:t0,diffuseRoughnessMap:e,dispersion:VJ,retroreflection:E0,iridescence:ZJ,iridescenceMap:a,iridescenceThicknessMap:W0,sheen:S0,sheenColorMap:X0,sheenRoughnessMap:m,specularMap:n,specularColorMap:H0,specularIntensityMap:w,transmission:h0,transmissionMap:c,thicknessMap:d,gradientMap:J0,opaque:L.transparent===!1&&L.blending===Q6&&L.alphaToCoverage===!1,alphaMap:Z0,alphaTest:G0,alphaHash:I0,combine:L.combine,mapUv:b0&&q(L.map.channel),aoMapUv:NJ&&q(L.aoMap.channel),lightMapUv:pJ&&q(L.lightMap.channel),bumpMapUv:rJ&&q(L.bumpMap.channel),normalMapUv:qJ&&q(L.normalMap.channel),displacementMapUv:wJ&&q(L.displacementMap.channel),emissiveMapUv:lJ&&q(L.emissiveMap.channel),metalnessMapUv:mJ&&q(L.metalnessMap.channel),roughnessMapUv:N9&&q(L.roughnessMap.channel),anisotropyMapUv:AJ&&q(L.anisotropyMap.channel),clearcoatMapUv:P&&q(L.clearcoatMap.channel),clearcoatNormalMapUv:M&&q(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:h&&q(L.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:e&&q(L.diffuseRoughnessMap.channel),iridescenceMapUv:a&&q(L.iridescenceMap.channel),iridescenceThicknessMapUv:W0&&q(L.iridescenceThicknessMap.channel),sheenColorMapUv:X0&&q(L.sheenColorMap.channel),sheenRoughnessMapUv:m&&q(L.sheenRoughnessMap.channel),specularMapUv:n&&q(L.specularMap.channel),specularColorMapUv:H0&&q(L.specularColorMap.channel),specularIntensityMapUv:w&&q(L.specularIntensityMap.channel),transmissionMapUv:c&&q(L.transmissionMap.channel),thicknessMapUv:d&&q(L.thicknessMap.channel),alphaMapUv:Z0&&q(L.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(qJ||v),vertexNormals:!!A.attributes.normal,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!A.attributes.uv&&(b0||Z0),fog:!!t,useFog:L.fog===!0,fogExp2:!!t&&t.isFogExp2,flatShading:L.wireframe===!1&&(L.flatShading===!0||A.attributes.normal===void 0&&qJ===!1&&(L.isMeshLambertMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isMeshPhysicalMaterial)),sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:B0,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:$0,morphTextureStride:k0,numSunLights:z.sun.length,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numSunLightShadows:z.sunShadowMap.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:p.filter((F0)=>F0.texture!==null).length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:q0,decodeVideoTexture:b0&&L.map.isVideoTexture===!0&&g0.getTransfer(L.map.colorSpace)===$J,decodeVideoTextureEmissive:lJ&&L.emissiveMap.isVideoTexture===!0&&g0.getTransfer(L.emissiveMap.colorSpace)===$J,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===yJ,flipSided:L.side===uJ,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:P0&&L.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(P0&&L.extensions.multiDraw===!0||d0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return x0.vertexUv1s=X.has(1),x0.vertexUv2s=X.has(2),x0.vertexUv3s=X.has(3),X.clear(),x0}function D(L){let z=[];if(L.shaderID)z.push(L.shaderID);else z.push(L.customVertexShaderID),z.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let j in L.defines)z.push(j),z.push(L.defines[j]);if(L.isRawShaderMaterial===!1)F(z,L),O(z,L),z.push(J.outputColorSpace);return z.push(L.customProgramCacheKey),z.join()}function F(L,z){L.push(z.precision),L.push(z.outputColorSpace),L.push(z.envMapMode),L.push(z.envMapPMREM),L.push(z.envMapMaxLod),L.push(z.envMapSize),L.push(z.mapUv),L.push(z.alphaMapUv),L.push(z.lightMapUv),L.push(z.aoMapUv),L.push(z.bumpMapUv),L.push(z.normalMapUv),L.push(z.displacementMapUv),L.push(z.emissiveMapUv),L.push(z.metalnessMapUv),L.push(z.roughnessMapUv),L.push(z.anisotropyMapUv),L.push(z.clearcoatMapUv),L.push(z.clearcoatNormalMapUv),L.push(z.clearcoatRoughnessMapUv),L.push(z.diffuseRoughnessMapUv),L.push(z.iridescenceMapUv),L.push(z.iridescenceThicknessMapUv),L.push(z.sheenColorMapUv),L.push(z.sheenRoughnessMapUv),L.push(z.specularMapUv),L.push(z.specularColorMapUv),L.push(z.specularIntensityMapUv),L.push(z.transmissionMapUv),L.push(z.thicknessMapUv),L.push(z.combine),L.push(z.fogExp2),L.push(z.sizeAttenuation),L.push(z.morphTargetsCount),L.push(z.numSunLights),L.push(z.numDirLights),L.push(z.numPointLights),L.push(z.numSpotLights),L.push(z.numSpotLightMaps),L.push(z.numHemiLights),L.push(z.numRectAreaLights),L.push(z.numSunLightShadows),L.push(z.numDirLightShadows),L.push(z.numPointLightShadows),L.push(z.numSpotLightShadows),L.push(z.numSpotLightShadowsWithMaps),L.push(z.numLightProbes),L.push(z.numLightProbeGrids),L.push(z.shadowMapType),L.push(z.toneMapping),L.push(z.numClippingPlanes),L.push(z.numClipIntersection),L.push(z.depthPacking)}function O(L,z){if(H.disableAll(),z.instancing)H.enable(0);if(z.instancingColor)H.enable(1);if(z.instancingMorph)H.enable(2);if(z.matcap)H.enable(3);if(z.envMap)H.enable(4);if(z.normalMapObjectSpace)H.enable(5);if(z.normalMapTangentSpace)H.enable(6);if(z.clearcoat)H.enable(7);if(z.iridescence)H.enable(8);if(z.alphaTest)H.enable(9);if(z.vertexColors)H.enable(10);if(z.vertexAlphas)H.enable(11);if(z.vertexUv1s)H.enable(12);if(z.vertexUv2s)H.enable(13);if(z.vertexUv3s)H.enable(14);if(z.vertexTangents)H.enable(15);if(z.anisotropy)H.enable(16);if(z.alphaHash)H.enable(17);if(z.batching)H.enable(18);if(z.dispersion)H.enable(19);if(z.retroreflection)H.enable(24);if(z.diffuseRoughness)H.enable(25);if(z.batchingColor)H.enable(20);if(z.gradientMap)H.enable(21);if(z.packedNormalMap)H.enable(22);if(z.vertexNormals)H.enable(23);if(L.push(H.mask),H.disableAll(),z.fog)H.enable(0);if(z.useFog)H.enable(1);if(z.flatShading)H.enable(2);if(z.logarithmicDepthBuffer)H.enable(3);if(z.reversedDepthBuffer)H.enable(4);if(z.skinning)H.enable(5);if(z.morphTargets)H.enable(6);if(z.morphNormals)H.enable(7);if(z.morphColors)H.enable(8);if(z.premultipliedAlpha)H.enable(9);if(z.shadowMapEnabled)H.enable(10);if(z.doubleSided)H.enable(11);if(z.flipSided)H.enable(12);if(z.useDepthPacking)H.enable(13);if(z.dithering)H.enable(14);if(z.transmission)H.enable(15);if(z.sheen)H.enable(16);if(z.opaque)H.enable(17);if(z.pointsUvs)H.enable(18);if(z.decodeVideoTexture)H.enable(19);if(z.decodeVideoTextureEmissive)H.enable(20);if(z.alphaToCoverage)H.enable(21);if(z.numLightProbeGrids>0)H.enable(22);if(z.hasPositionAttribute)H.enable(23);L.push(H.mask)}function k(L){let z=E[L.type],j;if(z){let l=j9[z];j=QY.clone(l.uniforms)}else j=L.uniforms;return j}function _(L,z){let j=G.get(z);if(j!==void 0)++j.usedTimes;else j=new Iq(J,z,L,W),U.push(j),G.set(z,j);return j}function B(L){if(--L.usedTimes===0){let z=U.indexOf(L);U[z]=U[U.length-1],U.pop(),G.delete(L.cacheKey),L.destroy()}}function I(L){Y.remove(L)}function C(){Y.dispose()}return{getParameters:R,getProgramCacheKey:D,getUniforms:k,acquireProgram:_,releaseProgram:B,releaseShaderCache:I,programs:U,dispose:C}}function Tq(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function Sq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function CY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function wY(){let J=[],Q=0,$=[],Z=[],W=[];function K(){Q=0,$.length=0,Z.length=0,W.length=0}function H(E){let q=0;if(E.isInstancedMesh)q+=2;if(E.isSkinnedMesh)q+=1;return q}function Y(E,q,R,D,F,O){let k=J[Q];if(k===void 0)k={id:E.id,object:E,geometry:q,material:R,materialVariant:H(E),groupOrder:D,renderOrder:E.renderOrder,z:F,group:O},J[Q]=k;else k.id=E.id,k.object=E,k.geometry=q,k.material=R,k.materialVariant=H(E),k.groupOrder=D,k.renderOrder=E.renderOrder,k.z=F,k.group=O;return Q++,k}function X(E,q,R,D,F,O,k){if(k.reversedDepth===!0)F=-F;let _=Y(E,q,R,D,F,O);if(R.transmission>0)Z.push(_);else if(R.transparent===!0)W.push(_);else $.push(_)}function U(E,q,R,D,F,O){let k=Y(E,q,R,D,F,O);if(R.transmission>0)Z.unshift(k);else if(R.transparent===!0)W.unshift(k);else $.unshift(k)}function G(E,q){if($.length>1)$.sort(E||Sq);if(Z.length>1)Z.sort(q||CY);if(W.length>1)W.sort(q||CY)}function N(){for(let E=Q,q=J.length;E<q;E++){let R=J[E];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:X,unshift:U,finish:N,sort:G}}function jq(){let J=new WeakMap;function Q(Z,W){let K=J.get(Z),H;if(K===void 0)H=new wY,J.set(Z,[H]);else if(W>=K.length)H=new wY,K.push(H);else H=K[W];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function vq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new S,color:new A0};break;case"SpotLight":$={position:new S,direction:new S,color:new A0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new S,color:new A0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new S,skyColor:new A0,groundColor:new A0};break;case"RectAreaLight":$={color:new A0,position:new S,halfWidth:new S,halfHeight:new S};break}return J[Q.id]=$,$}}}function yq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var hq=0;function fq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function bq(J){let Q=new vq,$=yq(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new S);let W=new S,K=new v0,H=new v0;function Y(U){let G=0,N=0,E=0;for(let p=0;p<9;p++)Z.probe[p].set(0,0,0);let q=0,R=0,D=0,F=0,O=0,k=0,_=0,B=0,I=0,C=0,L=0,z=0,j=0,l=0;U.sort(fq);for(let p=0,t=U.length;p<t;p++){let A=U[p],s=A.color,o=A.intensity,x=A.distance,K0=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===v8)K0=A.shadow.map.texture;else K0=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)G+=s.r*o,N+=s.g*o,E+=s.b*o;else if(A.isLightProbe){for(let u=0;u<9;u++)Z.probe[u].addScaledVector(A.sh.coefficients[u],o);l++}else if(A.isSunLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),Z.sunShadow[R]=$0,Z.sunShadowMap[R]=K0;let k0=r.getViewportCount();for(let i=0;i<k0;i++)Z.sunShadowMatrix[D+i]=r.getMatrix(i),Z.sunShadowCascade[D+i]=r._cascadeData[i];D+=k0,R++}Z.sun[q]=u,q++}else if(A.isDirectionalLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,Z.directionalShadow[F]=$0,Z.directionalShadowMap[F]=K0,Z.directionalShadowMatrix[F]=A.shadow.matrix,I++}Z.directional[F]=u,F++}else if(A.isSpotLight){let u=Q.get(A);u.position.setFromMatrixPosition(A.matrixWorld),u.color.copy(s).multiplyScalar(o),u.distance=x,u.coneCos=Math.cos(A.angle),u.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),u.decay=A.decay,Z.spot[k]=u;let r=A.shadow;if(A.map){if(Z.spotLightMap[z]=A.map,z++,r.updateMatrices(A),A.castShadow)j++}if(Z.spotLightMatrix[k]=r.matrix,A.castShadow){let $0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,Z.spotShadow[k]=$0,Z.spotShadowMap[k]=K0,L++}k++}else if(A.isRectAreaLight){let u=Q.get(A);u.color.copy(s).multiplyScalar(o),u.halfWidth.set(A.width*0.5,0,0),u.halfHeight.set(0,A.height*0.5,0),Z.rectArea[_]=u,_++}else if(A.isPointLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),u.distance=A.distance,u.decay=A.decay,A.castShadow){let r=A.shadow,$0=$.get(A);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,$0.shadowCameraNear=r.camera.near,$0.shadowCameraFar=r.camera.far,Z.pointShadow[O]=$0,Z.pointShadowMap[O]=K0,Z.pointShadowMatrix[O]=A.shadow.matrix,C++}Z.point[O]=u,O++}else if(A.isHemisphereLight){let u=Q.get(A);u.skyColor.copy(A.color).multiplyScalar(o),u.groundColor.copy(A.groundColor).multiplyScalar(o),Z.hemi[B]=u,B++}}if(_>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=N0.LTC_FLOAT_1,Z.rectAreaLTC2=N0.LTC_FLOAT_2;else Z.rectAreaLTC1=N0.LTC_HALF_1,Z.rectAreaLTC2=N0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=N,Z.ambient[2]=E;let y=Z.hash;if(y.sunLength!==q||y.directionalLength!==F||y.pointLength!==O||y.spotLength!==k||y.rectAreaLength!==_||y.hemiLength!==B||y.numSunShadows!==R||y.numDirectionalShadows!==I||y.numPointShadows!==C||y.numSpotShadows!==L||y.numSpotMaps!==z||y.numLightProbes!==l)Z.sun.length=q,Z.directional.length=F,Z.spot.length=k,Z.rectArea.length=_,Z.point.length=O,Z.hemi.length=B,Z.sunShadow.length=R,Z.sunShadowMap.length=R,Z.sunShadowMatrix.length=D,Z.sunShadowCascade.length=D,Z.directionalShadow.length=I,Z.directionalShadowMap.length=I,Z.directionalShadowMatrix.length=I,Z.pointShadow.length=C,Z.pointShadowMap.length=C,Z.pointShadowMatrix.length=C,Z.spotShadow.length=L,Z.spotShadowMap.length=L,Z.spotLightMatrix.length=L+z-j,Z.spotLightMap.length=z,Z.numSpotLightShadowsWithMaps=j,Z.numLightProbes=l,y.sunLength=q,y.directionalLength=F,y.pointLength=O,y.spotLength=k,y.rectAreaLength=_,y.hemiLength=B,y.numSunShadows=R,y.numDirectionalShadows=I,y.numPointShadows=C,y.numSpotShadows=L,y.numSpotMaps=z,y.numLightProbes=l,Z.version=hq++}function X(U,G){let N=0,E=0,q=0,R=0,D=0,F=0,O=G.matrixWorldInverse;for(let k=0,_=U.length;k<_;k++){let B=U[k];if(B.isSunLight){let I=Z.sun[N];I.direction.setFromMatrixPosition(B.matrixWorld),I.direction.transformDirection(O),N++}else if(B.isDirectionalLight){let I=Z.directional[E];I.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(O),E++}else if(B.isSpotLight){let I=Z.spot[R];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(O),I.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(O),R++}else if(B.isRectAreaLight){let I=Z.rectArea[D];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(O),H.identity(),K.copy(B.matrixWorld),K.premultiply(O),H.extractRotation(K),I.halfWidth.set(B.width*0.5,0,0),I.halfHeight.set(0,B.height*0.5,0),I.halfWidth.applyMatrix4(H),I.halfHeight.applyMatrix4(H),D++}else if(B.isPointLight){let I=Z.point[q];I.position.setFromMatrixPosition(B.matrixWorld),I.position.applyMatrix4(O),q++}else if(B.isHemisphereLight){let I=Z.hemi[F];I.direction.setFromMatrixPosition(B.matrixWorld),I.direction.transformDirection(O),F++}}}return{setup:Y,setupView:X,state:Z}}function AY(J){let Q=new bq(J),$=[],Z=[],W=[];function K(N){G.camera=N,$.length=0,Z.length=0,W.length=0}function H(N){if(N.isLightProbeGrid)W.push(N);else $.push(N)}function Y(N){Z.push(N)}function X(){Q.setup($),W.sort((N,E)=>N.priority-E.priority||N.id-E.id)}function U(N){Q.setupView($,N)}let G={lightsArray:$,shadowsArray:Z,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:G,setupLights:X,setupLightsView:U,pushLight:H,pushShadow:Y}}function xq(J){let Q=new WeakMap;function $(W,K=0){let H=Q.get(W),Y;if(H===void 0)Y=new AY(J),Q.set(W,[Y]);else if(K>=H.length)Y=new AY(J),H.push(Y);else Y=H[K];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var gq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pq=`uniform sampler2D shadow_pass;
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
}`,lq=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],mq=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],TY=new v0,M6=new S,zW=new S;function dq(J,Q,$){let Z=new w8,W=new R0,K=new R0,H=new JJ,Y=new UW,X=new GW,U={},G=$.maxTextureSize,N={[H8]:uJ,[uJ]:H8,[yJ]:yJ},E=new U9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R0},radius:{value:4}},vertexShader:gq,fragmentShader:pq}),q=E.clone();q.defines.HORIZONTAL_PASS=1;let R=new RJ;R.setAttribute("position",new UJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let D=new _J(R,E),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J6;let O=this.type;this.render=function(C,L,z){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(C.length===0)return;if(this.type===JH)_0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=J6;let j=J.getRenderTarget(),l=J.getActiveCubeFace(),y=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(T8),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let t=O!==this.type;if(t)L.traverse(function(A){if(A.material)if(Array.isArray(A.material))A.material.forEach((s)=>s.needsUpdate=!0);else A.material.needsUpdate=!0});for(let A=0,s=C.length;A<s;A++){let o=C[A],x=o.shadow;if(x===void 0){_0("WebGLShadowMap:",o,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;W.copy(x.mapSize);let K0=x.getFrameExtents();if(W.multiply(K0),K.copy(x.mapSize),W.x>G||W.y>G){if(W.x>G)K.x=Math.floor(G/K0.x),W.x=K.x*K0.x,x.mapSize.x=K.x;if(W.y>G)K.y=Math.floor(G/K0.y),W.y=K.y*K0.y,x.mapSize.y=K.y}let u=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=u,x.map===null||t===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===E7){if(o.isPointLight){_0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new H9(W.x,W.y,{format:v8,type:T9,minFilter:hJ,magFilter:hJ,generateMipmaps:!1}),x.map.texture.name=o.name+".shadowMap",x.map.depthTexture=new G8(W.x,W.y,u9),x.map.depthTexture.name=o.name+".shadowMapDepth",x.map.depthTexture.format=L7,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=V9,x.map.depthTexture.magFilter=V9}else{if(o.isPointLight)x.map=new J$(W.x),x.map.depthTexture=new xQ(W.x,Y8);else x.map=new H9(W.x,W.y),x.map.depthTexture=new G8(W.x,W.y,Y8);if(x.map.depthTexture.name=o.name+".shadowMap",x.map.depthTexture.format=L7,this.type===J6)x.map.depthTexture.compareFunction=u?dZ:mZ,x.map.depthTexture.minFilter=hJ,x.map.depthTexture.magFilter=hJ;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=V9,x.map.depthTexture.magFilter=V9}x.camera.updateProjectionMatrix()}if(x.map.isWebGLCubeRenderTarget!==!0&&(x.map.width!==W.x||x.map.height!==W.y))x.map.setSize(W.x,W.y);let r=x.map.isWebGLCubeRenderTarget?6:x.getViewportCount();if(o.isPointLight!==!0)x.updateMatrices(o,z);let $0=(x.camera.layers.mask&4294967294)!==0?x.camera.layers:z.layers;for(let k0=0;k0<r;k0++){let i=x.getCamera(k0);if(o.isPointLight){let{camera:Q0,matrix:D0}=x,w0=o.distance||Q0.far;if(w0!==Q0.far)Q0.far=w0,Q0.updateProjectionMatrix();M6.setFromMatrixPosition(o.matrixWorld),Q0.position.copy(M6),zW.copy(Q0.position),zW.add(lq[k0]),Q0.up.copy(mq[k0]),Q0.lookAt(zW),Q0.updateMatrixWorld(),D0.makeTranslation(-M6.x,-M6.y,-M6.z),TY.multiplyMatrices(Q0.projectionMatrix,Q0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(TY,Q0.coordinateSystem,Q0.reversedDepth)}if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,k0),J.clear();else{if(k0===0)J.setRenderTarget(x.map),J.clear();let Q0=x.getViewport(k0);H.set(K.x*Q0.x,K.y*Q0.y,K.x*Q0.z,K.y*Q0.w),p.viewport(H)}Z=x.getFrustum(k0),B(L,z,i,o,$0,this.type)}if(x.isPointLightShadow!==!0&&this.type===E7)k(x,z);x.needsUpdate=!1}O=this.type,F.needsUpdate=!1,J.setRenderTarget(j,l,y)};function k(C,L){let z=Q.update(D);if(E.defines.VSM_SAMPLES!==C.blurSamples)E.defines.VSM_SAMPLES=C.blurSamples,q.defines.VSM_SAMPLES=C.blurSamples,E.needsUpdate=!0,q.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new H9(W.x,W.y,{format:v8,type:T9});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);E.uniforms.shadow_pass.value=C.map.depthTexture,E.uniforms.resolution.value.set(C.map.width,C.map.height),E.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(L,null,z,E,D,null),q.uniforms.shadow_pass.value=C.mapPass.texture,q.uniforms.resolution.value.set(C.map.width,C.map.height),q.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(L,null,z,q,D,null)}function _(C,L,z,j){let l=null,y=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)l=y;else if(l=z.isPointLight===!0?X:Y,J.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let p=l.uuid,t=L.uuid,A=U[p];if(A===void 0)A={},U[p]=A;let s=A[t];if(s===void 0)s=l.clone(),A[t]=s,L.addEventListener("dispose",I);l=s}if(l.visible=L.visible,l.wireframe=L.wireframe,j===E7)l.side=L.shadowSide!==null?L.shadowSide:L.side;else l.side=L.shadowSide!==null?L.shadowSide:N[L.side];if(l.alphaMap=L.alphaMap,l.alphaTest=L.alphaToCoverage===!0?0.5:L.alphaTest,l.map=L.map,l.clipShadows=L.clipShadows,l.clippingPlanes=L.clippingPlanes,l.clipIntersection=L.clipIntersection,l.displacementMap=L.displacementMap,l.displacementScale=L.displacementScale,l.displacementBias=L.displacementBias,l.wireframeLinewidth=L.wireframeLinewidth,l.linewidth=L.linewidth,z.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let p=J.properties.get(l);p.light=z}return l}function B(C,L,z,j,l,y){if(C.visible===!1)return;if(C.layers.test(l)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&y===E7)&&(!C.frustumCulled||C.intersectsFrustum(Z))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let A=Q.update(C),s=C.material;if(Array.isArray(s)){let o=A.groups;for(let x=0,K0=o.length;x<K0;x++){let u=o[x],r=s[u.materialIndex];if(r&&r.visible){let $0=_(C,r,j,y);C.onBeforeShadow(J,C,L,z,A,$0,u),J.renderBufferDirect(z,null,A,$0,C,u),C.onAfterShadow(J,C,L,z,A,$0,u)}}}else if(s.visible){let o=_(C,s,j,y);C.onBeforeShadow(J,C,L,z,A,o,null),J.renderBufferDirect(z,null,A,o,C,null),C.onAfterShadow(J,C,L,z,A,o,null)}}}let t=C.children;for(let A=0,s=t.length;A<s;A++)B(t[A],L,z,j,l,y)}function I(C){C.target.removeEventListener("dispose",I);for(let z in U){let j=U[z],l=C.target.uuid;if(l in j)j[l].dispose(),delete j[l]}}}function uq(J,Q){function $(){let w=!1,c=new JJ,d=null,J0=new JJ(0,0,0,0);return{setMask:function(Z0){if(d!==Z0&&!w)J.colorMask(Z0,Z0,Z0,Z0),d=Z0},setLocked:function(Z0){w=Z0},setClear:function(Z0,G0,I0,P0,q0){if(q0===!0)Z0*=P0,G0*=P0,I0*=P0;if(c.set(Z0,G0,I0,P0),J0.equals(c)===!1)J.clearColor(Z0,G0,I0,P0),J0.copy(c)},reset:function(){w=!1,d=null,J0.set(-1,0,0,0)}}}function Z(){let w=!1,c=!1,d=null,J0=null,Z0=null;return{setReversed:function(G0){if(c!==G0){let I0=Q.get("EXT_clip_control");if(G0)I0.clipControlEXT(I0.LOWER_LEFT_EXT,I0.ZERO_TO_ONE_EXT);else I0.clipControlEXT(I0.LOWER_LEFT_EXT,I0.NEGATIVE_ONE_TO_ONE_EXT);c=G0;let P0=Z0;Z0=null,this.setClear(P0)}},getReversed:function(){return c},setTest:function(G0){if(G0)B0(J.DEPTH_TEST);else a0(J.DEPTH_TEST)},setMask:function(G0){if(d!==G0&&!w)J.depthMask(G0),d=G0},setFunc:function(G0){if(c)G0=sH[G0];if(J0!==G0){switch(G0){case BH:J.depthFunc(J.NEVER);break;case kH:J.depthFunc(J.ALWAYS);break;case zH:J.depthFunc(J.LESS);break;case i$:J.depthFunc(J.LEQUAL);break;case _H:J.depthFunc(J.EQUAL);break;case PH:J.depthFunc(J.GEQUAL);break;case IH:J.depthFunc(J.GREATER);break;case CH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}J0=G0}},setLocked:function(G0){w=G0},setClear:function(G0){if(Z0!==G0){if(Z0=G0,c)G0=1-G0;J.clearDepth(G0)}},reset:function(){w=!1,d=null,J0=null,Z0=null,c=!1}}}function W(){let w=!1,c=null,d=null,J0=null,Z0=null,G0=null,I0=null,P0=null,q0=null;return{setTest:function(C0){if(!w)if(C0)B0(J.STENCIL_TEST);else a0(J.STENCIL_TEST)},setMask:function(C0){if(c!==C0&&!w)J.stencilMask(C0),c=C0},setFunc:function(C0,x0,F0){if(d!==C0||J0!==x0||Z0!==F0)J.stencilFunc(C0,x0,F0),d=C0,J0=x0,Z0=F0},setOp:function(C0,x0,F0){if(G0!==C0||I0!==x0||P0!==F0)J.stencilOp(C0,x0,F0),G0=C0,I0=x0,P0=F0},setLocked:function(C0){w=C0},setClear:function(C0){if(q0!==C0)J.clearStencil(C0),q0=C0},reset:function(){w=!1,c=null,d=null,J0=null,Z0=null,G0=null,I0=null,P0=null,q0=null}}}let K=new $,H=new Z,Y=new W,X={},U=new WeakMap,G={},N={},E={},q=new WeakMap,R=[],D=null,F=!1,O=null,k=null,_=null,B=null,I=null,C=null,L=null,z=new A0(0,0,0),j=0,l=!1,y=null,p=null,t=null,A=null,s=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,K0=0,u=J.getParameter(J.VERSION);if(u.indexOf("WebGL")!==-1)K0=parseFloat(/^WebGL (\d)/.exec(u)[1]),x=K0>=1;else if(u.indexOf("OpenGL ES")!==-1)K0=parseFloat(/^OpenGL ES (\d)/.exec(u)[1]),x=K0>=2;let r=null,$0={},k0=J.getParameter(J.SCISSOR_BOX),i=J.getParameter(J.VIEWPORT),Q0=new JJ().fromArray(k0),D0=new JJ().fromArray(i);function w0(w,c,d,J0){let Z0=new Uint8Array(4),G0=J.createTexture();J.bindTexture(w,G0),J.texParameteri(w,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(w,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let I0=0;I0<d;I0++)if(w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texImage3D(c,0,J.RGBA,1,1,J0,0,J.RGBA,J.UNSIGNED_BYTE,Z0);else J.texImage2D(c+I0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,Z0);return G0}let T0={};T0[J.TEXTURE_2D]=w0(J.TEXTURE_2D,J.TEXTURE_2D,1),T0[J.TEXTURE_CUBE_MAP]=w0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),T0[J.TEXTURE_2D_ARRAY]=w0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),T0[J.TEXTURE_3D]=w0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),B0(J.DEPTH_TEST),H.setFunc(i$),rJ(!1),qJ(u$),B0(J.CULL_FACE),NJ(T8);function B0(w){if(G[w]!==!0)J.enable(w),G[w]=!0}function a0(w){if(G[w]!==!1)J.disable(w),G[w]=!1}function d0(w,c){if(E[w]!==c){if(J.bindFramebuffer(w,c),E[w]=c,w===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=c;if(w===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=c;return!0}return!1}function b0(w,c){let d=R,J0=!1;if(w){if(d=q.get(c),d===void 0)d=[],q.set(c,d);let Z0=w.textures;if(d.length!==Z0.length||d[0]!==J.COLOR_ATTACHMENT0){for(let G0=0,I0=Z0.length;G0<I0;G0++)d[G0]=J.COLOR_ATTACHMENT0+G0;d.length=Z0.length,J0=!0}}else if(d[0]!==J.BACK)d[0]=J.BACK,J0=!0;if(J0)J.drawBuffers(d)}function KJ(w){if(D!==w)return J.useProgram(w),D=w,!0;return!1}let n0={[N7]:J.FUNC_ADD,[$H]:J.FUNC_SUBTRACT,[ZH]:J.FUNC_REVERSE_SUBTRACT};n0[WH]=J.MIN,n0[KH]=J.MAX;let GJ={[HH]:J.ZERO,[YH]:J.ONE,[XH]:J.SRC_COLOR,[GH]:J.SRC_ALPHA,[RH]:J.SRC_ALPHA_SATURATE,[FH]:J.DST_COLOR,[NH]:J.DST_ALPHA,[UH]:J.ONE_MINUS_SRC_COLOR,[EH]:J.ONE_MINUS_SRC_ALPHA,[OH]:J.ONE_MINUS_DST_COLOR,[qH]:J.ONE_MINUS_DST_ALPHA,[LH]:J.CONSTANT_COLOR,[MH]:J.ONE_MINUS_CONSTANT_COLOR,[VH]:J.CONSTANT_ALPHA,[DH]:J.ONE_MINUS_CONSTANT_ALPHA};function NJ(w,c,d,J0,Z0,G0,I0,P0,q0,C0){if(w===T8){if(F===!0)a0(J.BLEND),F=!1;return}if(F===!1)B0(J.BLEND),F=!0;if(w!==QH){if(w!==O||C0!==l){if(k!==N7||I!==N7)J.blendEquation(J.FUNC_ADD),k=N7,I=N7;if(C0)switch(w){case Q6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case c$:J.blendFunc(J.ONE,J.ONE);break;case n$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case s$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:j0("WebGLState: Invalid blending: ",w);break}else switch(w){case Q6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case c$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case n$:j0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s$:j0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:j0("WebGLState: Invalid blending: ",w);break}_=null,B=null,C=null,L=null,z.set(0,0,0),j=0,O=w,l=C0}return}if(Z0=Z0||c,G0=G0||d,I0=I0||J0,c!==k||Z0!==I)J.blendEquationSeparate(n0[c],n0[Z0]),k=c,I=Z0;if(d!==_||J0!==B||G0!==C||I0!==L)J.blendFuncSeparate(GJ[d],GJ[J0],GJ[G0],GJ[I0]),_=d,B=J0,C=G0,L=I0;if(P0.equals(z)===!1||q0!==j)J.blendColor(P0.r,P0.g,P0.b,q0),z.copy(P0),j=q0;O=w,l=!1}function pJ(w,c){w.side===yJ?a0(J.CULL_FACE):B0(J.CULL_FACE);let d=w.side===uJ;if(c)d=!d;rJ(d),w.blending===Q6&&w.transparent===!1?NJ(T8):NJ(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),H.setFunc(w.depthFunc),H.setTest(w.depthTest),H.setMask(w.depthWrite),K.setMask(w.colorWrite);let J0=w.stencilWrite;if(Y.setTest(J0),J0)Y.setMask(w.stencilWriteMask),Y.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),Y.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass);lJ(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?B0(J.SAMPLE_ALPHA_TO_COVERAGE):a0(J.SAMPLE_ALPHA_TO_COVERAGE)}function rJ(w){if(y!==w){if(w)J.frontFace(J.CW);else J.frontFace(J.CCW);y=w}}function qJ(w){if(w!==tK){if(B0(J.CULL_FACE),w!==p)if(w===u$)J.cullFace(J.BACK);else if(w===eK)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else a0(J.CULL_FACE);p=w}function wJ(w){if(w!==t){if(x)J.lineWidth(w);t=w}}function lJ(w,c,d){if(w){if(B0(J.POLYGON_OFFSET_FILL),A!==c||s!==d){if(A=c,s=d,H.getReversed())c=-c,d=-d;J.polygonOffset(c,d)}}else a0(J.POLYGON_OFFSET_FILL)}function mJ(w){if(w)B0(J.SCISSOR_TEST);else a0(J.SCISSOR_TEST)}function N9(w){if(w===void 0)w=J.TEXTURE0+o-1;if(r!==w)J.activeTexture(w),r=w}function v(w,c,d){if(d===void 0)if(r===null)d=J.TEXTURE0+o-1;else d=r;let J0=$0[d];if(J0===void 0)J0={type:void 0,texture:void 0},$0[d]=J0;if(J0.type!==w||J0.texture!==c){if(r!==d)J.activeTexture(d),r=d;J.bindTexture(w,c||T0[w]),J0.type=w,J0.texture=c}}function q9(){let w=$0[r];if(w!==void 0&&w.type!==void 0)J.bindTexture(w.type,null),w.type=void 0,w.texture=void 0}function t0(){try{J.compressedTexImage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function VJ(){try{J.compressedTexImage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function E0(){try{J.texSubImage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function ZJ(){try{J.texSubImage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function S0(){try{J.compressedTexSubImage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function h0(){try{J.compressedTexSubImage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function AJ(){try{J.texStorage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function P(){try{J.texStorage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function M(){try{J.texImage2D(...arguments)}catch(w){j0("WebGLState:",w)}}function h(){try{J.texImage3D(...arguments)}catch(w){j0("WebGLState:",w)}}function e(w){if(N[w]!==void 0)return N[w];else return J.getParameter(w)}function a(w,c){if(N[w]!==c)J.pixelStorei(w,c),N[w]=c}function W0(w){if(Q0.equals(w)===!1)J.scissor(w.x,w.y,w.z,w.w),Q0.copy(w)}function X0(w){if(D0.equals(w)===!1)J.viewport(w.x,w.y,w.z,w.w),D0.copy(w)}function m(w,c){let d=U.get(c);if(d===void 0)d=new WeakMap,U.set(c,d);let J0=d.get(w);if(J0===void 0)J0=J.getUniformBlockIndex(c,w.name),J.uniformBlockBinding(c,J0,J0),d.set(w,J0)}function n(w,c,d){let Z0=U.get(c).get(w);if(X[Z0]!==d)J.bindBufferBase(J.UNIFORM_BUFFER,Z0,d),X[Z0]=d}function H0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},N={},r=null,$0={},E={},X={},q=new WeakMap,R=[],D=null,F=!1,O=null,k=null,_=null,B=null,I=null,C=null,L=null,z=new A0(0,0,0),j=0,l=!1,y=null,p=null,t=null,A=null,s=null,Q0.set(0,0,J.canvas.width,J.canvas.height),D0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:B0,disable:a0,bindFramebuffer:d0,drawBuffers:b0,useProgram:KJ,setBlending:NJ,setMaterial:pJ,setFlipSided:rJ,setCullFace:qJ,setLineWidth:wJ,setPolygonOffset:lJ,setScissorTest:mJ,activeTexture:N9,bindTexture:v,unbindTexture:q9,compressedTexImage2D:t0,compressedTexImage3D:VJ,texImage2D:M,texImage3D:h,pixelStorei:a,getParameter:e,updateUBOMapping:m,uniformBlockBinding:n,texStorage2D:AJ,texStorage3D:P,texSubImage2D:E0,texSubImage3D:ZJ,compressedTexSubImage2D:S0,compressedTexSubImage3D:h0,scissor:W0,viewport:X0,reset:H0}}function cq(J,Q,$,Z,W,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new R0,G=new WeakMap,N=new Set,E,q=new WeakMap,R=new Set,D=new FinalizationRegistry((P)=>R.delete(P)),F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function O(P,M){return F?new OffscreenCanvas(P,M):X7("canvas")}function k(P,M,h){let e=1,a=AJ(P);if(a.width>h||a.height>h)e=h/Math.max(a.width,a.height);if(e<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let W0=Math.floor(e*a.width),X0=Math.floor(e*a.height);if(E===void 0)E=O(W0,X0);let m=M?O(W0,X0):E;return m.width=W0,m.height=X0,m.getContext("2d").drawImage(P,0,0,W0,X0),_0("WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+W0+"x"+X0+")."),m}else{if("data"in P)_0("WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return P}return P}function _(P){return P.generateMipmaps}function B(P){J.generateMipmap(P)}function I(P){if(P.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(P.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function C(P,M,h,e,a,W0=!1){if(P!==null){if(J[P]!==void 0)return J[P];_0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X0;if(e){if(X0=Q.get("EXT_texture_norm16"),!X0)_0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let m=M;if(M===J.RED){if(h===J.FLOAT)m=J.R32F;if(h===J.HALF_FLOAT)m=J.R16F;if(h===J.UNSIGNED_BYTE)m=J.R8;if(h===J.UNSIGNED_SHORT&&X0)m=X0.R16_EXT;if(h===J.SHORT&&X0)m=X0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.R8UI;if(h===J.UNSIGNED_SHORT)m=J.R16UI;if(h===J.UNSIGNED_INT)m=J.R32UI;if(h===J.BYTE)m=J.R8I;if(h===J.SHORT)m=J.R16I;if(h===J.INT)m=J.R32I}if(M===J.RG){if(h===J.FLOAT)m=J.RG32F;if(h===J.HALF_FLOAT)m=J.RG16F;if(h===J.UNSIGNED_BYTE)m=J.RG8;if(h===J.UNSIGNED_SHORT&&X0)m=X0.RG16_EXT;if(h===J.SHORT&&X0)m=X0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RG8UI;if(h===J.UNSIGNED_SHORT)m=J.RG16UI;if(h===J.UNSIGNED_INT)m=J.RG32UI;if(h===J.BYTE)m=J.RG8I;if(h===J.SHORT)m=J.RG16I;if(h===J.INT)m=J.RG32I}if(M===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGB8UI;if(h===J.UNSIGNED_SHORT)m=J.RGB16UI;if(h===J.UNSIGNED_INT)m=J.RGB32UI;if(h===J.BYTE)m=J.RGB8I;if(h===J.SHORT)m=J.RGB16I;if(h===J.INT)m=J.RGB32I}if(M===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)m=J.RGBA16UI;if(h===J.UNSIGNED_INT)m=J.RGBA32UI;if(h===J.BYTE)m=J.RGBA8I;if(h===J.SHORT)m=J.RGBA16I;if(h===J.INT)m=J.RGBA32I}if(M===J.RGB){if(h===J.UNSIGNED_SHORT&&X0)m=X0.RGB16_EXT;if(h===J.SHORT&&X0)m=X0.RGB16_SNORM_EXT;if(h===J.UNSIGNED_INT_5_9_9_9_REV)m=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)m=J.R11F_G11F_B10F}if(M===J.RGBA){let n=W0?lZ:g0.getTransfer(a);if(h===J.FLOAT)m=J.RGBA32F;if(h===J.HALF_FLOAT)m=J.RGBA16F;if(h===J.UNSIGNED_BYTE)m=n===$J?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT&&X0)m=X0.RGBA16_EXT;if(h===J.SHORT&&X0)m=X0.RGBA16_SNORM_EXT;if(h===J.UNSIGNED_SHORT_4_4_4_4)m=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)m=J.RGB5_A1}if(m===J.R16F||m===J.R32F||m===J.RG16F||m===J.RG32F||m===J.RGBA16F||m===J.RGBA32F)Q.get("EXT_color_buffer_float");return m}function L(P,M){let h;if(P){if(M===null||M===Y8||M===j8)h=J.DEPTH24_STENCIL8;else if(M===u9)h=J.DEPTH32F_STENCIL8;else if(M===Z6)h=J.DEPTH24_STENCIL8,_0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===Y8||M===j8)h=J.DEPTH_COMPONENT24;else if(M===u9)h=J.DEPTH_COMPONENT32F;else if(M===Z6)h=J.DEPTH_COMPONENT16;return h}function z(P,M){if(_(P)===!0||P.isFramebufferTexture&&P.minFilter!==V9&&P.minFilter!==hJ)return Math.log2(Math.max(M.width,M.height))+1;else if(P.mipmaps.length>0)return P.mipmaps.length;else if(P.isCompressedTexture&&Array.isArray(P.image))return M.mipmaps.length;else return 1}function j(P){let M=new WeakRef(P);Z.get(P).__ref=M,R.add(M),D.register(P,M,M)}function l(P){let M=Z.get(P).__ref;if(M===void 0)return;R.delete(M),D.unregister(M)}function y(P){t(P.target)}function p(P){A(P.target)}function t(P){if(P.removeEventListener("dispose",y),l(P),o(P),P.isVideoTexture)G.delete(P);if(P.isHTMLTexture)N.delete(P)}function A(P){P.removeEventListener("dispose",p),l(P),K0(P)}function s(){for(let P of R){let M=P.deref();if(M===void 0)continue;if(M.isRenderTarget===!0)A(M);else t(M)}R.clear(),N.clear()}function o(P){let M=Z.get(P);if(M.__webglInit===void 0)return;let h=P.source,e=q.get(h);if(e){let a=e[M.__cacheKey];if(a.usedTimes--,a.usedTimes===0)x(P);if(Object.keys(e).length===0)q.delete(h)}Z.remove(P)}function x(P){let M=Z.get(P);J.deleteTexture(M.__webglTexture);let h=P.source,e=q.get(h);delete e[M.__cacheKey],H.memory.textures--}function K0(P){let M=Z.get(P);if(M.__depthDisposeCallback)M.__depthDisposeCallback();let h=P.depthTexture;if(h&&h.renderTarget===P)t(h);if(P.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(M.__webglFramebuffer[a]))for(let W0=0;W0<M.__webglFramebuffer[a].length;W0++)J.deleteFramebuffer(M.__webglFramebuffer[a][W0]);else J.deleteFramebuffer(M.__webglFramebuffer[a]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[a])}else{if(Array.isArray(M.__webglFramebuffer))for(let a=0;a<M.__webglFramebuffer.length;a++)J.deleteFramebuffer(M.__webglFramebuffer[a]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let a=0;a<M.__webglColorRenderbuffer.length;a++)if(M.__webglColorRenderbuffer[a])J.deleteRenderbuffer(M.__webglColorRenderbuffer[a])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let e=P.textures;for(let a=0,W0=e.length;a<W0;a++){let X0=Z.get(e[a]);if(X0.__webglTexture)J.deleteTexture(X0.__webglTexture),H.memory.textures--;Z.remove(e[a])}Z.remove(P)}let u=0;function r(){u=0}function $0(){return u}function k0(P){u=P}function i(){let P=u;if(P>=W.maxTextures)_0("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+W.maxTextures);return u+=1,P}function Q0(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.mipmapsAutoUpdate),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function D0(P,M){let h=Z.get(P);if(P.isVideoTexture)S0(P);if(P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&h.__version!==P.version){let e=P.image;if(e===null)_0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)_0("WebGLRenderer: Texture marked for update but image is incomplete");else{pJ(h,P,M);return}}else if(P.isExternalTexture)h.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+M)}function w0(P,M){let h=Z.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&h.__version!==P.version){pJ(h,P,M);return}else if(P.isExternalTexture)h.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+M)}function T0(P,M){let h=Z.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&h.__version!==P.version){pJ(h,P,M);return}$.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+M)}function B0(P,M){let h=Z.get(P);if(P.version>0&&h.__version!==P.version){rJ(h,P,M);return}$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+M)}let a0={[F7]:J.REPEAT,[O7]:J.CLAMP_TO_EDGE,[OQ]:J.MIRRORED_REPEAT},d0={[V9]:J.NEAREST,[RQ]:J.NEAREST_MIPMAP_NEAREST,[S8]:J.NEAREST_MIPMAP_LINEAR,[hJ]:J.LINEAR,[R7]:J.LINEAR_MIPMAP_NEAREST,[D9]:J.LINEAR_MIPMAP_LINEAR},b0={[gH]:J.NEVER,[uZ]:J.ALWAYS,[pH]:J.LESS,[mZ]:J.LEQUAL,[lH]:J.EQUAL,[dZ]:J.GEQUAL,[mH]:J.GREATER,[dH]:J.NOTEQUAL};function KJ(P,M){if(M.type===u9&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===hJ||M.magFilter===R7||M.magFilter===S8||M.magFilter===D9||M.minFilter===hJ||M.minFilter===R7||M.minFilter===S8||M.minFilter===D9))_0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(P,J.TEXTURE_WRAP_S,a0[M.wrapS]),J.texParameteri(P,J.TEXTURE_WRAP_T,a0[M.wrapT]),P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texParameteri(P,J.TEXTURE_WRAP_R,a0[M.wrapR]);if(J.texParameteri(P,J.TEXTURE_MAG_FILTER,d0[M.magFilter]),J.texParameteri(P,J.TEXTURE_MIN_FILTER,d0[M.minFilter]),M.compareFunction)J.texParameteri(P,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(P,J.TEXTURE_COMPARE_FUNC,b0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===V9)return;if(M.minFilter!==S8&&M.minFilter!==D9)return;if(M.type===u9&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||Z.get(M).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(P,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,W.getMaxAnisotropy())),Z.get(M).__currentAnisotropy=M.anisotropy}}}function n0(P,M){let h=!1;if(P.__webglInit===void 0)P.__webglInit=!0,M.addEventListener("dispose",y),j(M);let e=M.source,a=q.get(e);if(a===void 0)a={},q.set(e,a);let W0=Q0(M);if(W0!==P.__cacheKey){if(a[W0]===void 0)a[W0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,h=!0;a[W0].usedTimes++;let X0=a[P.__cacheKey];if(X0!==void 0){if(a[P.__cacheKey].usedTimes--,X0.usedTimes===0)x(M)}P.__cacheKey=W0,P.__webglTexture=a[W0].texture}return h}function GJ(P,M,h){return Math.floor(Math.floor(P/h)/M)}function NJ(P,M,h,e){let W0=P.updateRanges;if(W0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,h,e,M.data);else{W0.sort((w,c)=>w.start-c.start);let X0=0;for(let w=1;w<W0.length;w++){let c=W0[X0],d=W0[w],J0=c.start+c.count,Z0=GJ(d.start,M.width,4),G0=GJ(c.start,M.width,4);if(d.start<=J0+1&&Z0===G0&&GJ(d.start+d.count-1,M.width,4)===Z0)c.count=Math.max(c.count,d.start+d.count-c.start);else++X0,W0[X0]=d}W0.length=X0+1;let m=$.getParameter(J.UNPACK_ROW_LENGTH),n=$.getParameter(J.UNPACK_SKIP_PIXELS),H0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let w=0,c=W0.length;w<c;w++){let d=W0[w],J0=Math.floor(d.start/4),Z0=Math.ceil(d.count/4),G0=J0%M.width,I0=Math.floor(J0/M.width),P0=Z0,q0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,G0),$.pixelStorei(J.UNPACK_SKIP_ROWS,I0),$.texSubImage2D(J.TEXTURE_2D,0,G0,I0,P0,1,h,e,M.data)}P.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,m),$.pixelStorei(J.UNPACK_SKIP_PIXELS,n),$.pixelStorei(J.UNPACK_SKIP_ROWS,H0)}}function pJ(P,M,h){let e=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)e=J.TEXTURE_3D;let a=n0(P,M),W0=M.source;$.bindTexture(e,P.__webglTexture,J.TEXTURE0+h);let X0=Z.get(W0);if(W0.version!==X0.__version||a===!0){if($.activeTexture(J.TEXTURE0+h),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let q0=g0.getPrimaries(g0.workingColorSpace),C0=M.colorSpace===y8?null:g0.getPrimaries(M.colorSpace),x0=M.colorSpace===y8||q0===C0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,x0)}$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let n=k(M.image,!1,W.maxTextureSize);n=h0(M,n);let H0=K.convert(M.format,M.colorSpace),w=K.convert(M.type),c=C(M.internalFormat,H0,w,M.normalized,M.colorSpace,M.isVideoTexture);KJ(e,M);let d,J0=M.mipmaps,Z0=M.isVideoTexture!==!0,G0=X0.__version===void 0||a===!0,I0=W0.dataReady,P0=z(M,n);if(M.isDepthTexture){if(c=L(M.format===X8,M.type),G0)if(Z0)$.texStorage2D(J.TEXTURE_2D,1,c,n.width,n.height);else $.texImage2D(J.TEXTURE_2D,0,c,n.width,n.height,0,H0,w,null)}else if(M.isDataTexture)if(J0.length>0){if(Z0&&G0)$.texStorage2D(J.TEXTURE_2D,P0,c,J0[0].width,J0[0].height);for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],Z0){if(I0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,w,d.data)}else $.texImage2D(J.TEXTURE_2D,q0,c,d.width,d.height,0,H0,w,d.data);M.generateMipmaps=!1}else if(Z0){if(G0)$.texStorage2D(J.TEXTURE_2D,P0,c,n.width,n.height);if(I0)NJ(M,n,H0,w)}else $.texImage2D(J.TEXTURE_2D,0,c,n.width,n.height,0,H0,w,n.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(Z0&&G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,P0,c,J0[0].width,J0[0].height,n.depth);for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],M.format!==c9)if(H0!==null)if(Z0){if(I0)if(M.layerUpdates.size>0){let x0=BW(d.width,d.height,M.format,M.type);for(let F0 of M.layerUpdates){let e0=d.data.subarray(F0*x0/d.data.BYTES_PER_ELEMENT,(F0+1)*x0/d.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,F0,d.width,d.height,1,H0,e0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,d.width,d.height,n.depth,H0,d.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,q0,c,d.width,d.height,n.depth,0,d.data,0,0);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Z0){if(I0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,d.width,d.height,n.depth,H0,w,d.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,q0,c,d.width,d.height,n.depth,0,H0,w,d.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(Z0&&G0)$.texStorage2D(J.TEXTURE_2D,P0,c,J0[0].width,J0[0].height);for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],M.format!==c9)if(H0!==null)if(Z0){if(I0)$.compressedTexSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,d.data)}else $.compressedTexImage2D(J.TEXTURE_2D,q0,c,d.width,d.height,0,d.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Z0){if(I0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,w,d.data)}else $.texImage2D(J.TEXTURE_2D,q0,c,d.width,d.height,0,H0,w,d.data)}else if(M.isDataArrayTexture)if(Z0){if(G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,P0,c,n.width,n.height,n.depth);if(I0)if(M.layerUpdates.size>0){let q0=BW(n.width,n.height,M.format,M.type);for(let C0 of M.layerUpdates){let x0=n.data.subarray(C0*q0/n.data.BYTES_PER_ELEMENT,(C0+1)*q0/n.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,C0,n.width,n.height,1,H0,w,x0)}M.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,n.width,n.height,n.depth,H0,w,n.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,c,n.width,n.height,n.depth,0,H0,w,n.data);else if(M.isData3DTexture)if(Z0){if(G0)$.texStorage3D(J.TEXTURE_3D,P0,c,n.width,n.height,n.depth);if(I0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,n.width,n.height,n.depth,H0,w,n.data)}else $.texImage3D(J.TEXTURE_3D,0,c,n.width,n.height,n.depth,0,H0,w,n.data);else if(M.isFramebufferTexture){if(G0)if(Z0)$.texStorage2D(J.TEXTURE_2D,P0,c,n.width,n.height);else{let{width:q0,height:C0}=n;for(let x0=0;x0<P0;x0++)$.texImage2D(J.TEXTURE_2D,x0,c,q0,C0,0,H0,w,null),q0>>=1,C0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let q0=J.canvas;if(!q0.hasAttribute("layoutsubtree"))q0.setAttribute("layoutsubtree","true");if(n.parentNode!==q0){q0.appendChild(n),N.add(M),q0.onpaint=(C0)=>{let x0=C0.changedElements;for(let F0 of N)if(x0.includes(F0.image))F0.needsUpdate=!0},q0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,n);else{let{RGBA:x0,RGBA:F0,UNSIGNED_BYTE:e0}=J;J.texElementImage2D(J.TEXTURE_2D,0,x0,F0,e0,n)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(J0.length>0){if(Z0&&G0){let q0=AJ(J0[0]);$.texStorage2D(J.TEXTURE_2D,P0,c,q0.width,q0.height)}for(let q0=0,C0=J0.length;q0<C0;q0++)if(d=J0[q0],Z0){if(I0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,H0,w,d)}else $.texImage2D(J.TEXTURE_2D,q0,c,H0,w,d);M.generateMipmaps=!1}else if(Z0){if(G0){let q0=AJ(n);$.texStorage2D(J.TEXTURE_2D,P0,c,q0.width,q0.height)}if(I0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,H0,w,n)}else $.texImage2D(J.TEXTURE_2D,0,c,H0,w,n);if(_(M)&&M.mipmapsAutoUpdate===!0)B(e);if(X0.__version=W0.version,M.onUpdate)M.onUpdate(M)}P.__version=M.version}function rJ(P,M,h){if(M.image.length!==6)return;let e=n0(P,M),a=M.source;$.bindTexture(J.TEXTURE_CUBE_MAP,P.__webglTexture,J.TEXTURE0+h);let W0=Z.get(a);if(a.version!==W0.__version||e===!0){$.activeTexture(J.TEXTURE0+h);let X0=g0.getPrimaries(g0.workingColorSpace),m=M.colorSpace===y8?null:g0.getPrimaries(M.colorSpace),n=M.colorSpace===y8||X0===m?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,n);let H0=M.isCompressedTexture||M.image[0].isCompressedTexture,w=M.image[0]&&M.image[0].isDataTexture,c=[];for(let F0=0;F0<6;F0++){if(!H0&&!w)c[F0]=k(M.image[F0],!0,W.maxCubemapSize);else c[F0]=w?M.image[F0].image:M.image[F0];c[F0]=h0(M,c[F0])}let d=c[0],J0=K.convert(M.format,M.colorSpace),Z0=K.convert(M.type),G0=C(M.internalFormat,J0,Z0,M.normalized,M.colorSpace),I0=M.isVideoTexture!==!0,P0=W0.__version===void 0||e===!0,q0=a.dataReady,C0=z(M,d);KJ(J.TEXTURE_CUBE_MAP,M);let x0;if(M.isDepthTexture){if(G0=L(M.format===X8,M.type),P0)if(I0)$.texStorage2D(J.TEXTURE_CUBE_MAP,1,G0,d.width,d.height);else for(let F0=0;F0<6;F0++)$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,d.width,d.height,0,J0,Z0,null)}else if(H0){if(I0&&P0)$.texStorage2D(J.TEXTURE_CUBE_MAP,C0,G0,d.width,d.height);for(let F0=0;F0<6;F0++){x0=c[F0].mipmaps;for(let e0=0;e0<x0.length;e0++){let DJ=x0[e0];if(M.format!==c9)if(J0!==null)if(I0){if(q0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,0,0,DJ.width,DJ.height,J0,DJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,G0,DJ.width,DJ.height,0,DJ.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,0,0,DJ.width,DJ.height,J0,Z0,DJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,G0,DJ.width,DJ.height,0,J0,Z0,DJ.data)}}}else{if(x0=M.mipmaps,I0&&P0){if(x0.length>0)C0++;let F0=AJ(c[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,C0,G0,F0.width,F0.height)}for(let F0=0;F0<6;F0++)if(w){if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,c[F0].width,c[F0].height,J0,Z0,c[F0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,c[F0].width,c[F0].height,0,J0,Z0,c[F0].data);for(let e0=0;e0<x0.length;e0++){let h9=x0[e0].image[F0].image;if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,0,0,h9.width,h9.height,J0,Z0,h9.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,G0,h9.width,h9.height,0,J0,Z0,h9.data)}}else{if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,J0,Z0,c[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,J0,Z0,c[F0]);for(let e0=0;e0<x0.length;e0++){let DJ=x0[e0];if(I0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,0,0,J0,Z0,DJ.image[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,G0,J0,Z0,DJ.image[F0])}}}if(_(M)&&M.mipmapsAutoUpdate===!0)B(J.TEXTURE_CUBE_MAP);if(W0.__version=a.version,M.onUpdate)M.onUpdate(M)}P.__version=M.version}function qJ(P,M,h,e,a,W0){let X0=K.convert(h.format,h.colorSpace),m=K.convert(h.type),n=C(h.internalFormat,X0,m,h.normalized,h.colorSpace),H0=Z.get(M),w=Z.get(h);if(w.__renderTarget=M,!H0.__hasExternalTextures){let c=Math.max(1,M.width>>W0),d=Math.max(1,M.height>>W0);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)$.texImage3D(a,W0,n,c,d,M.depth,0,X0,m,null);else $.texImage2D(a,W0,n,c,d,0,X0,m,null)}if($.bindFramebuffer(J.FRAMEBUFFER,P),ZJ(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,a,w.__webglTexture,0,E0(M));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,a,w.__webglTexture,W0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function wJ(P,M,h){if(J.bindRenderbuffer(J.RENDERBUFFER,P),M.depthBuffer){let e=M.depthTexture,a=e&&e.isDepthTexture?e.type:null,W0=L(M.stencilBuffer,a),X0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(ZJ(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(M),W0,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(M),W0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,W0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,P)}else{let e=M.textures;for(let a=0;a<e.length;a++){let W0=e[a],X0=K.convert(W0.format,W0.colorSpace),m=K.convert(W0.type),n=C(W0.internalFormat,X0,m,W0.normalized,W0.colorSpace);if(ZJ(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(M),n,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(M),n,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,n,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function lJ(P,M,h){let e=M.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let a=Z.get(M.depthTexture);a.__renderTarget=M;let W0=e?M.depthTexture.image[0]:M.depthTexture.image;if(!a.__webglTexture||W0.width!==M.width||W0.height!==M.height)W0.width=M.width,W0.height=M.height,M.depthTexture.needsUpdate=!0;if(e)B0(M.depthTexture,0);else D0(M.depthTexture,0);let X0=a.__webglTexture,m=E0(M),n=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+h:J.TEXTURE_2D,H0=M.depthTexture.format===X8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===L7)if(ZJ(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,n,X0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,n,X0,0);else if(M.depthTexture.format===X8)if(ZJ(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,n,X0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,n,X0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mJ(P){let M=Z.get(P),h=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let e=P.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(e){let a=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,e.removeEventListener("dispose",a)};e.addEventListener("dispose",a),M.__depthDisposeCallback=a}M.__boundDepthTexture=e}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(h)for(let e=0;e<6;e++)lJ(M.__webglFramebuffer[e],P,e);else if(P.texture.mipmaps.length>0)lJ(M.__webglFramebuffer[0],P,0);else lJ(M.__webglFramebuffer,P,0);else if(h){M.__webglDepthbuffer=[];for(let e=0;e<6;e++)if($.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[e]),M.__webglDepthbuffer[e]===void 0)M.__webglDepthbuffer[e]=J.createRenderbuffer(),wJ(M.__webglDepthbuffer[e],P,!1);else{let a=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,W0=M.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,W0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,W0)}}else{if(P.texture.mipmaps.length>0)$.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),wJ(M.__webglDepthbuffer,P,!1);else{let a=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,W0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,W0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,W0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function N9(P,M,h){let e=Z.get(P);if(M!==void 0)qJ(e.__webglFramebuffer,P,P.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)mJ(P)}function v(P){let M=P.texture,h=Z.get(P),e=Z.get(M);P.addEventListener("dispose",p),j(P);let a=P.textures,W0=P.isWebGLCubeRenderTarget===!0,X0=a.length>1;if(!X0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=M.version,H.memory.textures++}if(W0){h.__webglFramebuffer=[];for(let m=0;m<6;m++)if(M.mipmaps.length>0){h.__webglFramebuffer[m]=[];for(let n=0;n<M.mipmaps.length;n++)h.__webglFramebuffer[m][n]=J.createFramebuffer()}else h.__webglFramebuffer[m]=J.createFramebuffer()}else{if(M.mipmaps.length>0){h.__webglFramebuffer=[];for(let m=0;m<M.mipmaps.length;m++)h.__webglFramebuffer[m]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(X0)for(let m=0,n=a.length;m<n;m++){let H0=Z.get(a[m]);if(H0.__webglTexture===void 0)H0.__webglTexture=J.createTexture(),H.memory.textures++}if(P.samples>0&&ZJ(P)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let m=0;m<a.length;m++){let n=a[m];h.__webglColorRenderbuffer[m]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[m]);let H0=K.convert(n.format,n.colorSpace),w=K.convert(n.type),c=C(n.internalFormat,H0,w,n.normalized,n.colorSpace,P.isXRRenderTarget===!0),d=E0(P);J.renderbufferStorageMultisample(J.RENDERBUFFER,d,c,P.width,P.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+m,J.RENDERBUFFER,h.__webglColorRenderbuffer[m])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),P.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),wJ(h.__webglDepthRenderbuffer,P,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(W0){$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),KJ(J.TEXTURE_CUBE_MAP,M);for(let m=0;m<6;m++)if(M.mipmaps.length>0)for(let n=0;n<M.mipmaps.length;n++)qJ(h.__webglFramebuffer[m][n],P,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,n);else qJ(h.__webglFramebuffer[m],P,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);if(_(M))B(J.TEXTURE_CUBE_MAP);else if(M.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);$.unbindTexture()}else if(X0){for(let m=0,n=a.length;m<n;m++){let H0=a[m],w=Z.get(H0),c=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)c=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,w.__webglTexture),KJ(c,H0),qJ(h.__webglFramebuffer,P,H0,J.COLOR_ATTACHMENT0+m,c,0),_(H0))B(c)}$.unbindTexture()}else{let m=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)m=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(m,e.__webglTexture),KJ(m,M),M.mipmaps.length>0)for(let n=0;n<M.mipmaps.length;n++)qJ(h.__webglFramebuffer[n],P,M,J.COLOR_ATTACHMENT0,m,n);else qJ(h.__webglFramebuffer,P,M,J.COLOR_ATTACHMENT0,m,0);if(_(M))B(m);else if(M.mipmaps.length>0)J.texParameteri(m,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);$.unbindTexture()}if(P.depthBuffer)mJ(P)}function q9(P){let M=P.textures;for(let h=0,e=M.length;h<e;h++){let a=M[h];if(_(a)&&a.mipmapsAutoUpdate===!0){let W0=I(P),X0=Z.get(a).__webglTexture;$.bindTexture(W0,X0),B(W0),$.unbindTexture()}}}let t0=[];function VJ(P){if(P.samples>0){if(ZJ(P)===!1){let{textures:M,width:h,height:e}=P,a=J.COLOR_BUFFER_BIT,W0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=Z.get(P),m=M.length>1;if(m)for(let H0=0;H0<M.length;H0++)$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,null,0);if($.bindFramebuffer(J.READ_FRAMEBUFFER,X0.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer);for(let H0=0;H0<M.length;H0++){if(P.resolveDepthBuffer){if(P.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if(P.stencilBuffer&&P.resolveStencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(m){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let w=Z.get(M[H0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,w,0)}if(J.blitFramebuffer(0,0,h,e,0,0,h,e,a,J.NEAREST),X===!0){if(t0.length=0,t0.push(J.COLOR_ATTACHMENT0+H0),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1)t0.push(W0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,t0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),m)for(let H0=0;H0<M.length;H0++){$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let w=Z.get(M[H0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,w,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&X){let M=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function E0(P){return Math.min(W.maxSamples,P.samples)}function ZJ(P){let M=Z.get(P);return P.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function S0(P){let M=H.render.frame;if(G.get(P)!==M)G.set(P,M),P.update()}function h0(P,M){let{colorSpace:h,format:e,type:a}=P;if(P.isCompressedTexture===!0||P.isVideoTexture===!0)return M;if(h!==gJ&&h!==y8)if(g0.getTransfer(h)===$J){if(e!==c9||a!==B9)_0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else j0("WebGLTextures: Unsupported texture color space:",h);return M}function AJ(P){if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement)U.width=P.naturalWidth||P.width,U.height=P.naturalHeight||P.height;else if(typeof VideoFrame<"u"&&P instanceof VideoFrame)U.width=P.displayWidth,U.height=P.displayHeight;else U.width=P.width,U.height=P.height;return U}this.allocateTextureUnit=i,this.resetTextureUnits=r,this.getTextureUnits=$0,this.setTextureUnits=k0,this.setTexture2D=D0,this.setTexture2DArray=w0,this.setTexture3D=T0,this.setTextureCube=B0,this.rebindTextures=N9,this.setupRenderTarget=v,this.updateRenderTargetMipmap=q9,this.updateMultisampleRenderTarget=VJ,this.setupDepthRenderbuffer=mJ,this.setupFrameBufferTexture=qJ,this.useMultisampledRTT=ZJ,this.dispose=s}function nq(J,Q){function $(Z,W=y8){let K,H=g0.getTransfer(W);if(Z===B9)return J.UNSIGNED_BYTE;if(Z===ZZ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===WZ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===vH)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===yH)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===SH)return J.BYTE;if(Z===jH)return J.SHORT;if(Z===Z6)return J.UNSIGNED_SHORT;if(Z===$Z)return J.INT;if(Z===Y8)return J.UNSIGNED_INT;if(Z===u9)return J.FLOAT;if(Z===T9)return J.HALF_FLOAT;if(Z===hH)return J.ALPHA;if(Z===fH)return J.RGB;if(Z===c9)return J.RGBA;if(Z===L7)return J.DEPTH_COMPONENT;if(Z===X8)return J.DEPTH_STENCIL;if(Z===bH)return J.RED;if(Z===KZ)return J.RED_INTEGER;if(Z===v8)return J.RG;if(Z===HZ)return J.RG_INTEGER;if(Z===YZ)return J.RGBA_INTEGER;if(Z===LQ||Z===MQ||Z===VQ||Z===DQ)if(H===$J)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===LQ)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===MQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===VQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===DQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===LQ)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===MQ)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===VQ)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===DQ)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===XZ||Z===UZ||Z===GZ||Z===EZ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===XZ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===UZ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===GZ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===EZ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===NZ||Z===qZ||Z===FZ||Z===OZ||Z===RZ||Z===BQ||Z===LZ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===NZ||Z===qZ)return H===$J?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===FZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===OZ)return K.COMPRESSED_R11_EAC;if(Z===RZ)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===BQ)return K.COMPRESSED_RG11_EAC;if(Z===LZ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===MZ||Z===VZ||Z===DZ||Z===BZ||Z===kZ||Z===zZ||Z===_Z||Z===PZ||Z===IZ||Z===CZ||Z===wZ||Z===AZ||Z===TZ||Z===SZ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===MZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===VZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===DZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===BZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===kZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===zZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===_Z)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===PZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===IZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===CZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===wZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===AZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===TZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===SZ)return H===$J?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===jZ||Z===vZ||Z===yZ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(Z===jZ)return H===$J?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===vZ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===yZ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===hZ||Z===fZ||Z===kQ||Z===bZ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(Z===hZ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===fZ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===kQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===bZ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===j8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var sq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iq=`
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

}`;class nY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new gQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new U9({vertexShader:sq,fragmentShader:iq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new _J(new h8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sY extends n9{constructor(J,Q){super();let $=this,Z=null,W=1,K=null,H="local-floor",Y=1,X=null,U=null,G=null,N=null,E=null,q=null,R=typeof XRWebGLBinding<"u",D=new nY,F={},O=Q.getContextAttributes(),k=null,_=null,B=[],I=[],C=new R0,L=null,z=null,j=new zJ;j.viewport=new JJ;let l=new zJ;l.viewport=new JJ;let y=[j,l],p=new MW,t=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let Q0=B[i];if(Q0===void 0)Q0=new H6,B[i]=Q0;return Q0.getTargetRaySpace()},this.getControllerGrip=function(i){let Q0=B[i];if(Q0===void 0)Q0=new H6,B[i]=Q0;return Q0.getGripSpace()},this.getHand=function(i){let Q0=B[i];if(Q0===void 0)Q0=new H6,B[i]=Q0;return Q0.getHandSpace()};function s(i){let Q0=I.indexOf(i.inputSource);if(Q0===-1)return;let D0=B[Q0];if(D0!==void 0)D0.update(i.inputSource,i.frame,X||K),D0.dispatchEvent({type:i.type,data:i.inputSource})}function o(){Z.removeEventListener("select",s),Z.removeEventListener("selectstart",s),Z.removeEventListener("selectend",s),Z.removeEventListener("squeeze",s),Z.removeEventListener("squeezestart",s),Z.removeEventListener("squeezeend",s),Z.removeEventListener("end",o),Z.removeEventListener("inputsourceschange",x);for(let i=0;i<B.length;i++){let Q0=I[i];if(Q0===null)continue;I[i]=null,B[i].disconnect(Q0)}t=null,A=null,D.reset();for(let i in F)delete F[i];if(J.setRenderTarget(k),E=null,N=null,G=null,Z=null,_=null,k0.stop(),$.isPresenting=!1,J.setPixelRatio(L),J.setSize(C.width,C.height,!1),z!==null){let i=z.camera;i.fov=z.fov,i.zoom=z.zoom,i.updateProjectionMatrix(),z=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(W=i,$.isPresenting===!0)_0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(H=i,$.isPresenting===!0)_0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(i){X=i},this.getBaseLayer=function(){return N!==null?N:E},this.getBinding=function(){if(G===null&&R)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return q},this.getSession=function(){return Z},this.setSession=async function(i){if(Z=i,Z!==null){if(k=J.getRenderTarget(),Z.addEventListener("select",s),Z.addEventListener("selectstart",s),Z.addEventListener("selectend",s),Z.addEventListener("squeeze",s),Z.addEventListener("squeezestart",s),Z.addEventListener("squeezeend",s),Z.addEventListener("end",o),Z.addEventListener("inputsourceschange",x),O.xrCompatible!==!0)await Q.makeXRCompatible();if(L=J.getPixelRatio(),J.getSize(C),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let D0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:W};E=new XRWebGLLayer(Z,Q,D0),Z.updateRenderState({baseLayer:E}),J.setPixelRatio(1),J.setSize(E.framebufferWidth,E.framebufferHeight,!1),_=new H9(E.framebufferWidth,E.framebufferHeight,{format:c9,type:B9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}else{let D0=null,w0=null,T0=null;if(O.depth)T0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,D0=O.stencil?X8:L7,w0=O.stencil?j8:Y8;let B0={colorFormat:Q.RGBA8,depthFormat:T0,scaleFactor:W};G=this.getBinding(),N=G.createProjectionLayer(B0),Z.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),_=new H9(N.textureWidth,N.textureHeight,{format:c9,type:B9,depthTexture:new G8(N.textureWidth,N.textureHeight,w0,void 0,void 0,void 0,void 0,void 0,void 0,D0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await Z.requestReferenceSpace(H),k0.setContext(Z),k0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function x(i){for(let Q0=0;Q0<i.removed.length;Q0++){let D0=i.removed[Q0],w0=I.indexOf(D0);if(w0>=0)I[w0]=null,B[w0].disconnect(D0)}for(let Q0=0;Q0<i.added.length;Q0++){let D0=i.added[Q0],w0=I.indexOf(D0);if(w0===-1){for(let B0=0;B0<B.length;B0++)if(B0>=I.length){I.push(D0),w0=B0;break}else if(I[B0]===null){I[B0]=D0,w0=B0;break}if(w0===-1)break}let T0=B[w0];if(T0)T0.connect(D0)}}function K0(i,Q0){if(Q0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices(Q0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(Z===null)return;let{near:Q0,far:D0}=i;if(D.texture!==null){if(D.depthNear>0)Q0=D.depthNear;if(D.depthFar>0)D0=D.depthFar}if(p.near=l.near=j.near=Q0,p.far=l.far=j.far=D0,t!==p.near||A!==p.far)Z.updateRenderState({depthNear:p.near,depthFar:p.far}),t=p.near,A=p.far;p.layers.mask=i.layers.mask|6,j.layers.mask=p.layers.mask&-5,l.layers.mask=p.layers.mask&-3;let w0=i.parent,T0=p.cameras;K0(p,w0);for(let B0=0;B0<T0.length;B0++)K0(T0[B0],w0);if(p.projectionMatrix.copy(j.projectionMatrix),p.projectionMatrixInverse.copy(j.projectionMatrixInverse),z===null&&i.isPerspectiveCamera)z={camera:i,fov:i.fov,zoom:i.zoom};u(i,p,w0)};function u(i,Q0,D0){if(D0===null)i.matrix.copy(Q0.matrixWorld);else i.matrix.copy(D0.matrixWorld),i.matrix.invert(),i.matrix.multiply(Q0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy(Q0.projectionMatrix),i.projectionMatrixInverse.copy(Q0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=C8*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return p},this.getFoveation=function(){if(N===null&&E===null)return;return Y},this.setFoveation=function(i){if(Y=i,N!==null)N.fixedFoveation=i;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=i},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(p)},this.getCameraTexture=function(i){return F[i]};let r=null;function $0(i,Q0){if(U=Q0.getViewerPose(X||K),q=Q0,U!==null){let D0=U.views;if(E!==null)J.setRenderTargetFramebuffer(_,E.framebuffer),J.setRenderTarget(_);let w0=!1;if(D0.length!==p.cameras.length)p.cameras.length=0,w0=!0;for(let d0=0;d0<D0.length;d0++){let b0=D0[d0],KJ=null;if(E!==null)KJ=E.getViewport(b0);else{let GJ=G.getViewSubImage(N,b0);if(KJ=GJ.viewport,d0===0)J.setRenderTargetTextures(_,GJ.colorTexture,GJ.depthStencilTexture),J.setRenderTarget(_)}let n0=y[d0];if(n0===void 0)n0=new zJ,n0.layers.enable(d0),n0.viewport=new JJ,y[d0]=n0;if(n0.matrix.fromArray(b0.transform.matrix),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.projectionMatrix.fromArray(b0.projectionMatrix),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert(),n0.viewport.set(KJ.x,KJ.y,KJ.width,KJ.height),d0===0)p.matrix.copy(n0.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale);if(w0===!0)p.cameras.push(n0)}let T0=Z.enabledFeatures;if(T0&&T0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){G=$.getBinding();let d0=G.getDepthInformation(D0[0]);if(d0&&d0.isValid&&d0.texture)D.init(d0,Z.renderState)}if(T0&&T0.includes("camera-access")&&R){J.state.unbindTexture(),G=$.getBinding();for(let d0=0;d0<D0.length;d0++){let b0=D0[d0].camera;if(b0){let KJ=F[b0];if(!KJ)KJ=new gQ,F[b0]=KJ;let n0=G.getCameraImage(b0);KJ.sourceTexture=n0}}}}for(let D0=0;D0<B.length;D0++){let w0=I[D0],T0=B[D0];if(w0!==null&&T0!==void 0)T0.update(w0,Q0,X||K)}if(r)r(i,Q0);if(Q0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Q0});q=null}let k0=new SY;k0.setAnimationLoop($0),this.setAnimationLoop=function(i){r=i},this.dispose=function(){}}}var oq=new v0,iY=new y0;iY.set(-1,0,0,0,1,0,0,0,1);function aq(J,Q){function $(F,O){if(F.matrixAutoUpdate===!0)F.updateMatrix();O.value.copy(F.matrix)}function Z(F,O){if(O.color.getRGB(F.fogColor.value,YW(J)),O.isFog)F.fogNear.value=O.near,F.fogFar.value=O.far;else if(O.isFogExp2)F.fogDensity.value=O.density}function W(F,O,k,_,B){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)K(F,O);else if(O.isMeshLambertMaterial){if(K(F,O),O.envMap)F.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)K(F,O),N(F,O);else if(O.isMeshPhongMaterial){if(K(F,O),G(F,O),O.envMap)F.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(K(F,O),E(F,O),O.isMeshPhysicalMaterial)q(F,O,B)}else if(O.isMeshMatcapMaterial)K(F,O),R(F,O);else if(O.isMeshDepthMaterial)K(F,O);else if(O.isMeshDistanceMaterial)K(F,O),D(F,O);else if(O.isMeshNormalMaterial)K(F,O);else if(O.isLineBasicMaterial){if(H(F,O),O.isLineDashedMaterial)Y(F,O)}else if(O.isPointsMaterial)X(F,O,k,_);else if(O.isSpriteMaterial)U(F,O);else if(O.isShadowMaterial)F.color.value.copy(O.color),F.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function K(F,O){if(F.opacity.value=O.opacity,O.color)F.diffuse.value.copy(O.color);if(O.emissive)F.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.bumpMap){if(F.bumpMap.value=O.bumpMap,$(O.bumpMap,F.bumpMapTransform),F.bumpScale.value=O.bumpScale,O.side===uJ)F.bumpScale.value*=-1}if(O.normalMap){if(F.normalMap.value=O.normalMap,$(O.normalMap,F.normalMapTransform),F.normalScale.value.copy(O.normalScale),O.side===uJ)F.normalScale.value.negate()}if(O.displacementMap)F.displacementMap.value=O.displacementMap,$(O.displacementMap,F.displacementMapTransform),F.displacementScale.value=O.displacementScale,F.displacementBias.value=O.displacementBias;if(O.emissiveMap)F.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,F.emissiveMapTransform);if(O.specularMap)F.specularMap.value=O.specularMap,$(O.specularMap,F.specularMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest;let k=Q.get(O),_=k.envMap,B=k.envMapRotation;if(_){if(F.envMap.value=_,F.envMapRotation.value.setFromMatrix4(oq.makeRotationFromEuler(B)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)F.envMapRotation.value.premultiply(iY);F.reflectivity.value=O.reflectivity,F.ior.value=O.ior,F.refractionRatio.value=O.refractionRatio}if(O.lightMap)F.lightMap.value=O.lightMap,F.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,F.lightMapTransform);if(O.aoMap)F.aoMap.value=O.aoMap,F.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,F.aoMapTransform)}function H(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,O.map)F.map.value=O.map,$(O.map,F.mapTransform)}function Y(F,O){F.dashSize.value=O.dashSize,F.totalSize.value=O.dashSize+O.gapSize,F.scale.value=O.scale}function X(F,O,k,_){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.size.value=O.size*k,F.scale.value=_*0.5,O.map)F.map.value=O.map,$(O.map,F.uvTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function U(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.rotation.value=O.rotation,O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function G(F,O){F.specular.value.copy(O.specular),F.shininess.value=Math.max(O.shininess,0.0001)}function N(F,O){if(O.gradientMap)F.gradientMap.value=O.gradientMap}function E(F,O){if(F.metalness.value=O.metalness,O.metalnessMap)F.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=O.roughness,O.roughnessMap)F.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,F.roughnessMapTransform);if(O.envMap)F.envMapIntensity.value=O.envMapIntensity}function q(F,O,k){if(F.ior.value=O.ior,O.diffuseRoughness>0){if(F.diffuseRoughness.value=O.diffuseRoughness,O.diffuseRoughnessMap)F.diffuseRoughnessMap.value=O.diffuseRoughnessMap,$(O.diffuseRoughnessMap,F.diffuseRoughnessMapTransform)}if(O.sheen>0){if(F.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),F.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)F.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,F.sheenColorMapTransform);if(O.sheenRoughnessMap)F.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(F.clearcoat.value=O.clearcoat,F.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)F.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,F.clearcoatMapTransform);if(O.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(F.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===uJ)F.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)F.dispersion.value=O.dispersion;if(O.retroreflectivity>0)F.retroreflectivity.value=O.retroreflectivity;if(O.iridescence>0){if(F.iridescence.value=O.iridescence,F.iridescenceIOR.value=O.iridescenceIOR,F.iridescenceThicknessMinimum.value=O.iridescenceThicknessMinimum,F.iridescenceThicknessMaximum.value=O.iridescenceThicknessMaximum,O.iridescenceMap)F.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,F.iridescenceMapTransform);if(O.iridescenceThicknessMap)F.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(O.transmission>0){if(F.transmission.value=O.transmission,F.transmissionSamplerMap.value=k.texture,F.transmissionSamplerSize.value.set(k.width,k.height),O.transmissionMap)F.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=O.thickness,O.thicknessMap)F.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=O.attenuationDistance,F.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(F.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)F.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=O.specularIntensity,F.specularColor.value.copy(O.specularColor),O.specularColorMap)F.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,F.specularColorMapTransform);if(O.specularIntensityMap)F.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,F.specularIntensityMapTransform)}function R(F,O){if(O.matcap)F.matcap.value=O.matcap}function D(F,O){let k=Q.get(O).light;F.referencePosition.value.setFromMatrixPosition(k.matrixWorld),F.nearDistance.value=k.shadow.camera.near,F.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function rq(J,Q,$,Z){let W={},K={};function H(k,_){let B=_.program;Z.uniformBlockBinding(k,B,W[k.id])}function Y(k,_){let B=W[k.id];if(B===void 0)R(k),B=X(k),W[k.id]=B,k.addEventListener("dispose",F);let I=_.program;Z.updateUBOMapping(k,I);let C=Q.render.frame;if(K[k.id]!==C)U(k),K[k.id]=C}function X(k){let _=J.createBuffer(),B=k.__size,I=k.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,B,I),J.bindBuffer(J.UNIFORM_BUFFER,null),_}function U(k){let _=W[k.id],B=k.uniforms,I=k.__cache;J.bindBuffer(J.UNIFORM_BUFFER,_);for(let C=0,L=B.length;C<L;C++){let z=B[C];if(Array.isArray(z))for(let j=0,l=z.length;j<l;j++)G(z[j],C,j,I);else G(z,C,0,I)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function G(k,_,B,I){if(E(k,_,B,I)===!0){let{__offset:C,value:L}=k;if(Array.isArray(L)){let z=0;for(let j=0;j<L.length;j++){let l=L[j],y=D(l,!0);N(l,k.__data,z),z+=y.storage/Float32Array.BYTES_PER_ELEMENT}}else N(L,k.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,C,k.__data)}}function N(k,_,B){if(typeof k==="number"||typeof k==="boolean")_[B]=k;else if(k.isMatrix3)_[B]=k.elements[0],_[B+1]=k.elements[1],_[B+2]=k.elements[2],_[B+3]=0,_[B+4]=k.elements[3],_[B+5]=k.elements[4],_[B+6]=k.elements[5],_[B+7]=0,_[B+8]=k.elements[6],_[B+9]=k.elements[7],_[B+10]=k.elements[8],_[B+11]=0;else if(ArrayBuffer.isView(k))_.set(k.subarray(0,_.length-B),B);else k.toArray(_,B)}function E(k,_,B,I){let C=k.value,L=_+"_"+B;if(Array.isArray(C)){if(I[L]===void 0)I[L]=[];let z=I[L],j=!1;for(let l=0;l<C.length;l++)if(q(C[l],z,l)===!0)j=!0;return j}return q(C,I,L)}function q(k,_,B){if(_[B]===void 0){if(typeof k==="number"||typeof k==="boolean")_[B]=k;else if(ArrayBuffer.isView(k))_[B]=k.slice();else _[B]=k.clone();return!0}else{let I=_[B];if(typeof k==="number"||typeof k==="boolean"){if(I!==k)return _[B]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(I.equals(k)===!1)return I.copy(k),!0}return!1}function R(k){let _=k.uniforms,B=0,I=16;for(let L=0,z=_.length;L<z;L++){let j=Array.isArray(_[L])?_[L]:[_[L]];for(let l=0,y=j.length;l<y;l++){let p=j[l],t=Array.isArray(p.value)?p.value:[p.value],A=Array.isArray(_[L])||Array.isArray(p.value),s=B;for(let x=0,K0=t.length;x<K0;x++){let u=t[x],r=D(u,A),$0=B%I,k0=$0%r.boundary,i=$0+k0;if(B+=k0,i!==0&&I-i<r.storage)B+=I-i;if(x===0)s=B;B+=r.storage}let o=p.type==="int"?Int32Array:p.type==="uint"?Uint32Array:Float32Array;p.__data=new o((B-s)/Float32Array.BYTES_PER_ELEMENT),p.__offset=s}}let C=B%I;if(C>0)B+=I-C;return k.__size=B,k.__cache={},this}function D(k,_){let B={boundary:0,storage:0};if(typeof k==="number"||typeof k==="boolean")B.boundary=4,B.storage=4;else if(k.isVector2)B.boundary=8,B.storage=8;else if(k.isVector3||k.isColor)B.boundary=16,B.storage=12;else if(k.isVector4)B.boundary=16,B.storage=16;else if(k.isMatrix3)B.boundary=16,B.storage=48;else if(k.isMatrix4)B.boundary=16,B.storage=64;else if(k.isTexture)_0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(k))B.boundary=16,B.storage=k.byteLength;else _0("WebGLRenderer: Unsupported uniform value type.",k);if(_===!0)B.boundary=16,B.storage=Math.ceil(B.storage/16)*16;return B}function F(k){let _=k.target;_.removeEventListener("dispose",F),J.deleteBuffer(W[_.id]),delete W[_.id],delete K[_.id]}function O(){for(let k in W)J.deleteBuffer(W[k]);W={},K={}}return{bind:H,update:Y,dispose:O}}var tq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),S9=null;function eq(){if(S9===null)S9=new U6(tq,16,16,v8,T9),S9.name="DFG_LUT",S9.minFilter=hJ,S9.magFilter=hJ,S9.wrapS=O7,S9.wrapT=O7,S9.generateMipmaps=!1,S9.needsUpdate=!0;return S9}class PW{constructor(J={}){let{canvas:Q=uH(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:N=!1,outputBufferType:E=B9}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=K;let R=E,D=new Set([YZ,HZ,KZ]),F=new Set([B9,Y8,Z6,j8,ZZ,WZ]),O=new Uint32Array(4),k=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},B=null,I=null,C=[],L=[],z=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=A9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,l=!1,y=null,p=null,t=null,A=null;this._outputColorSpace=cJ;let s=0,o=0,x=null,K0=-1,u=null,r=new JJ,$0=new JJ,k0=null,i=new A0(0),Q0=0,D0=Q.width,w0=Q.height,T0=1,B0=null,a0=null,d0=new JJ(0,0,D0,w0),b0=new JJ(0,0,D0,w0),KJ=!1,n0=new w8,GJ=new vQ,NJ=!1,pJ=!1,rJ=new v0,qJ=new S,wJ=new JJ,lJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mJ=!1;function N9(){return x===null?T0:1}let v=$;function q9(V,T){return Q.getContext(V,T)}let t0,VJ,E0,ZJ,S0,h0,AJ,P,M,h,e,a,W0,X0,m,n,H0,w,c,d,J0,Z0,G0;try{let V={alpha:!0,depth:Z,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${rK}`);if(Q.addEventListener("webglcontextlost",q0,!1),Q.addEventListener("webglcontextrestored",C0,!1),Q.addEventListener("webglcontextcreationerror",x0,!1),v===null){if(v=q9("webgl2",V),v===null)if(q9("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}I0()}catch(V){throw Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",C0,!1),Q.removeEventListener("webglcontextcreationerror",x0,!1),j0("WebGLRenderer: "+V.message),V}function I0(){if(t0=new GN(v),t0.init(),J0=new nq(v,t0),VJ=new eE(v,t0,J,J0),E0=new uq(v,t0),VJ.reversedDepthBuffer&&N)E0.buffers.depth.setReversed(!0);p=v.createFramebuffer(),t=v.createFramebuffer(),A=v.createFramebuffer(),ZJ=new qN(v),S0=new Tq,h0=new cq(v,t0,E0,S0,VJ,J0,ZJ),AJ=new UN(j),P=new O5(v),Z0=new rE(v,P),M=new EN(v,P,ZJ,Z0),h=new ON(v,M,P,Z0,ZJ),w=new FN(v,VJ,h0),m=new JN(S0),e=new Aq(j,AJ,t0,VJ,Z0,m),a=new aq(j,S0),W0=new jq,X0=new xq(t0),H0=new aE(j,AJ,E0,h,q,Y),n=new dq(j,h,VJ),G0=new rq(v,ZJ,VJ,E0),c=new tE(v,t0,ZJ),d=new NN(v,t0,ZJ),ZJ.programs=e.programs,j.capabilities=VJ,j.extensions=t0,j.properties=S0,j.renderLists=W0,j.shadowMap=n,j.state=E0,j.info=ZJ}if(R!==B9)z=new LN(R,Q.width,Q.height,H,Z,W);let P0=new sY(j,v);this.xr=P0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let V=t0.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=t0.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return T0},this.setPixelRatio=function(V){if(V===void 0)return;T0=V,this.setSize(D0,w0,!1)},this.getSize=function(V){return V.set(D0,w0)},this.setSize=function(V,T,g=!0){if(P0.isPresenting){_0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(D0=V,w0=T,Q.width=Math.floor(V*T0),Q.height=Math.floor(T*T0),g===!0)Q.style.width=V+"px",Q.style.height=T+"px";if(z!==null)z.setSize(Q.width,Q.height);this.setViewport(0,0,V,T)},this.getDrawingBufferSize=function(V){return V.set(D0*T0,w0*T0).floor()},this.setDrawingBufferSize=function(V,T,g){D0=V,w0=T,T0=g,Q.width=Math.floor(V*g),Q.height=Math.floor(T*g),this.setViewport(0,0,V,T)},this.setEffects=function(V){if(R===B9){j0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(V){for(let T=0;T<V.length;T++)if(V[T].isOutputPass===!0){_0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(V||[])},this.getCurrentViewport=function(V){return V.copy(r)},this.getViewport=function(V){return V.copy(d0)},this.setViewport=function(V,T,g,f){if(V.isVector4)d0.set(V.x,V.y,V.z,V.w);else d0.set(V,T,g,f);E0.viewport(r.copy(d0).multiplyScalar(N9()).round())},this.getScissor=function(V){return V.copy(b0)},this.setScissor=function(V,T,g,f){if(V.isVector4)b0.set(V.x,V.y,V.z,V.w);else b0.set(V,T,g,f);E0.scissor($0.copy(b0).multiplyScalar(N9()).round())},this.getScissorTest=function(){return KJ},this.setScissorTest=function(V){E0.setScissorTest(KJ=V)},this.setOpaqueSort=function(V){B0=V},this.setTransparentSort=function(V){a0=V},this.getClearColor=function(V){return V.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor(...arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha(...arguments)},this.clear=function(V=!0,T=!0,g=!0){let f=0;if(V){let b=!1;if(x!==null){let U0=x.texture.format;b=D.has(U0)}if(b){let U0=x.texture.type,L0=F.has(U0),Y0=H0.getClearColor(),O0=H0.getClearAlpha(),z0=Y0.r,f0=Y0.g,u0=Y0.b;if(L0)O[0]=z0,O[1]=f0,O[2]=u0,O[3]=O0,v.clearBufferuiv(v.COLOR,0,O);else k[0]=z0,k[1]=f0,k[2]=u0,k[3]=O0,v.clearBufferiv(v.COLOR,0,k)}else f|=v.COLOR_BUFFER_BIT}if(T)f|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(g)f|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(f!==0)v.clear(f)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(V){V.setRenderer(this),y=V},this.dispose=function(){Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",C0,!1),Q.removeEventListener("webglcontextcreationerror",x0,!1),H0.dispose(),W0.dispose(),X0.dispose(),h0.dispose(),S0.dispose(),AJ.dispose(),h.dispose(),M.dispose(),Z0.dispose(),G0.dispose(),e.dispose(),P0.dispose(),P0.removeEventListener("sessionstart",nW),P0.removeEventListener("sessionend",sW),V8.stop()};function q0(V){V.preventDefault(),a7("WebGLRenderer: Context Lost."),l=!0}function C0(){a7("WebGLRenderer: Context Restored."),l=!1;let V=ZJ.autoReset,T=n.enabled,g=n.autoUpdate,f=n.needsUpdate,b=n.type;I0(),ZJ.autoReset=V,n.enabled=T,n.autoUpdate=g,n.needsUpdate=f,n.type=b}function x0(V){j0("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function F0(V){let T=V.target;T.removeEventListener("dispose",F0),e0(T)}function e0(V){DJ(V),S0.remove(V)}function DJ(V){let T=S0.get(V).programs;if(T!==void 0){if(T.forEach(function(g){e.releaseProgram(g)}),V.isShaderMaterial)e.releaseShaderCache(V)}}this.renderBufferDirect=function(V,T,g,f,b,U0){if(T===null)T=lJ;let L0=b.isMesh&&b.matrixWorld.determinantAffine()<0,Y0=gX(V,T,g,f,b);E0.setMaterial(f,L0);let O0=g.index,z0=1;if(f.wireframe===!0){if(O0=M.getWireframeAttribute(g),O0===void 0)return;z0=2}let f0=g.drawRange,u0=g.attributes.position,M0=f0.start*z0,c0=(f0.start+f0.count)*z0;if(U0!==null)M0=Math.max(M0,U0.start*z0),c0=Math.min(c0,(U0.start+U0.count)*z0);if(O0!==null)M0=Math.max(M0,0),c0=Math.min(c0,O0.count);else if(u0!==void 0&&u0!==null)M0=Math.max(M0,0),c0=Math.min(c0,u0.count);let FJ=c0-M0;if(FJ<0||FJ===1/0)return;Z0.setup(b,f,Y0,g,O0);let WJ,QJ=c;if(O0!==null)WJ=P.get(O0),QJ=d,QJ.setIndex(WJ);if(b.isMesh)if(f.wireframe===!0)E0.setLineWidth(f.wireframeLinewidth*N9()),QJ.setMode(v.LINES);else QJ.setMode(v.TRIANGLES);else if(b.isLine){let TJ=f.linewidth;if(TJ===void 0)TJ=1;if(E0.setLineWidth(TJ*N9()),b.isLineSegments)QJ.setMode(v.LINES);else if(b.isLineLoop)QJ.setMode(v.LINE_LOOP);else QJ.setMode(v.LINE_STRIP)}else if(b.isPoints)QJ.setMode(v.POINTS);else if(b.isSprite)QJ.setMode(v.TRIANGLES);if(b.isBatchedMesh)if(!t0.get("WEBGL_multi_draw")){let{_multiDrawStarts:TJ,_multiDrawCounts:V0,_multiDrawCount:bJ}=b,i0=O0?P.get(O0).bytesPerElement:1,D8=S0.get(f).currentProgram.getUniforms();for(let SJ=0;SJ<bJ;SJ++)D8.setValue(v,"_gl_DrawID",SJ),QJ.render(TJ[SJ]/i0,V0[SJ])}else QJ.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else if(b.isInstancedMesh)QJ.renderInstances(M0,FJ,b.count);else if(g.isInstancedBufferGeometry){let TJ=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,V0=Math.min(g.instanceCount,TJ);QJ.renderInstances(M0,FJ,V0)}else QJ.render(M0,FJ)};function h9(V,T,g,f){if(y!==null&&V.isNodeMaterial)y.setObject(f,V);if(NJ===!0)m.setState(V,g,!1);if(V.transparent===!0&&V.side===yJ&&V.forceSinglePass===!1)V.side=uJ,V.needsUpdate=!0,j7(V,T,f),V.side=H8,V.needsUpdate=!0,j7(V,T,f),V.side=yJ;else j7(V,T,f)}this.compile=function(V,T,g=null){if(g===null)g=V;if(y!==null)y.renderStart(V,T,g);if(I=X0.get(g),I.init(T),L.push(I),g.traverseVisible(function(b){if(b.isLight&&b.layers.test(T.layers)){if(I.pushLight(b),b.castShadow)I.pushShadow(b)}}),V!==g)V.traverseVisible(function(b){if(b.isLight&&b.layers.test(T.layers)){if(I.pushLight(b),b.castShadow)I.pushShadow(b)}});if(I.setupLights(),y!==null)y.updateLights(I.state.lightsArray);if(pJ=this.localClippingEnabled,NJ=m.init(this.clippingPlanes,pJ),NJ===!0)m.setGlobalState(this.clippingPlanes,T);if(y!==null)n.render(I.state.shadowsArray,g,T);let f=new Set;if(V.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let U0=b.material;if(U0)if(Array.isArray(U0))for(let L0=0;L0<U0.length;L0++){let Y0=U0[L0];h9(Y0,g,T,b),f.add(Y0)}else h9(U0,g,T,b),f.add(U0)}),I=L.pop(),y!==null)y.renderEnd();return f},this.compileAsync=function(V,T,g=null){let f=this.compile(V,T,g);return new Promise((b)=>{function U0(){if(f.forEach(function(L0){let O0=S0.get(L0).currentProgram;if(O0===void 0||O0.isReady())f.delete(L0)}),f.size===0){b(V);return}setTimeout(U0,10)}if(t0.get("KHR_parallel_shader_compile")!==null)U0();else setTimeout(U0,10)})};let E$=null;function bX(V){if(E$)E$(V)}function nW(){V8.stop()}function sW(){V8.start()}let V8=new SY;if(V8.setAnimationLoop(bX),typeof self<"u")V8.setContext(self);this.setAnimationLoop=function(V){E$=V,P0.setAnimationLoop(V),V===null?V8.stop():V8.start()},P0.addEventListener("sessionstart",nW),P0.addEventListener("sessionend",sW),this.render=function(V,T){if(T!==void 0&&T.isCamera!==!0){j0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(y!==null)y.renderStart(V,T);let g=P0.enabled===!0&&P0.isPresenting===!0,f=z!==null&&(x===null||g)&&z.begin(j,x);if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(T.parent===null&&T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(P0.enabled===!0&&P0.isPresenting===!0&&(z===null||z.isCompositing()===!1)){if(P0.cameraAutoUpdate===!0)P0.updateCamera(T);T=P0.getCamera()}if(V.isScene===!0)V.onBeforeRender(j,V,T,x);if(I=X0.get(V,L.length),I.init(T),I.state.textureUnits=h0.getTextureUnits(),L.push(I),rJ.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera)GJ.setFromArrayCamera(T);else n0.setFromProjectionMatrix(rJ,nZ,T.reversedDepth);if(pJ=this.localClippingEnabled,NJ=m.init(this.clippingPlanes,pJ),B=W0.get(V,C.length),B.init(),C.push(B),this.info.render.frame++,P0.enabled===!0&&P0.isPresenting===!0){let L0=j.xr.getDepthSensingMesh();if(L0!==null)N$(L0,T,-1/0,j.sortObjects)}if(N$(V,T,0,j.sortObjects),B.finish(),y!==null)y.updateLights(I.state.lightsArray);if(j.sortObjects===!0)B.sort(B0,a0);if(mJ=P0.enabled===!1||P0.isPresenting===!1||P0.hasDepthSensing()===!1,mJ)H0.addToRenderList(B,V);if(this.info.autoReset===!0)this.info.reset();if(NJ===!0)m.beginShadows();let b=I.state.shadowsArray;if(n.render(b,V,T),NJ===!0)m.endShadows();if((f&&z.hasRenderPass())===!1){let{opaque:L0,transmissive:Y0}=B;if(I.setupLights(),T.isArrayCamera){let O0=T.cameras;if(Y0.length>0)for(let z0=0,f0=O0.length;z0<f0;z0++){let u0=O0[z0];oW(L0,Y0,V,u0)}if(mJ)H0.render(V);for(let z0=0,f0=O0.length;z0<f0;z0++){let u0=O0[z0];iW(B,V,u0,u0.viewport)}}else{if(Y0.length>0)oW(L0,Y0,V,T);if(mJ)H0.render(V);iW(B,V,T)}}if(x!==null&&o===0)h0.updateMultisampleRenderTarget(x),h0.updateRenderTargetMipmap(x);if(f)z.end(j);if(V.isScene===!0)V.onAfterRender(j,V,T);if(Z0.resetDefaultState(),K0=-1,u=null,L.pop(),L.length>0){if(I=L[L.length-1],h0.setTextureUnits(I.state.textureUnits),NJ===!0)m.setGlobalState(j.clippingPlanes,I.state.camera)}else I=null;if(C.pop(),C.length>0)B=C[C.length-1];else B=null;if(y!==null)y.renderEnd()};function N$(V,T,g,f){if(V.visible===!1)return;if(V.layers.test(T.layers)){if(V.isGroup)g=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(T)}else if(V.isLight){if(I.pushLight(V),V.castShadow)I.pushShadow(V)}else if(V.isSprite){let L0=T.isArrayCamera?GJ:n0;if(!V.frustumCulled||V.intersectsFrustum(L0)){if(f)wJ.setFromMatrixPosition(V.matrixWorld).applyMatrix4(rJ);let Y0=h.update(V),O0=V.material;if(O0.visible)B.push(V,Y0,O0,g,wJ.z,null,T)}}else if(V.isMesh||V.isLine||V.isPoints){let L0=T.isArrayCamera?GJ:n0;if(!V.frustumCulled||V.intersectsFrustum(L0)){let Y0=h.update(V),O0=V.material;if(f){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();wJ.copy(V.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();wJ.copy(Y0.boundingSphere.center)}wJ.applyMatrix4(V.matrixWorld).applyMatrix4(rJ)}if(Array.isArray(O0)){let z0=Y0.groups;for(let f0=0,u0=z0.length;f0<u0;f0++){let M0=z0[f0],c0=O0[M0.materialIndex];if(c0&&c0.visible)B.push(V,Y0,c0,g,wJ.z,M0,T)}}else if(O0.visible)B.push(V,Y0,O0,g,wJ.z,null,T)}}}let U0=V.children;for(let L0=0,Y0=U0.length;L0<Y0;L0++)N$(U0[L0],T,g,f)}function iW(V,T,g,f){let{opaque:b,transmissive:U0,transparent:L0}=V;if(I.setupLightsView(g),NJ===!0)m.setGlobalState(j.clippingPlanes,g);if(f)E0.viewport(r.copy(f));if(b.length>0)j6(b,T,g);if(U0.length>0)j6(U0,T,g);if(L0.length>0)j6(L0,T,g);E0.buffers.depth.setTest(!0),E0.buffers.depth.setMask(!0),E0.buffers.color.setMask(!0),E0.setPolygonOffset(!1)}function oW(V,T,g,f){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[f.id]===void 0){let M0=t0.has("EXT_color_buffer_half_float")||t0.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[f.id]=new H9(1,1,{generateMipmaps:!0,type:M0?T9:B9,minFilter:D9,samples:Math.max(4,VJ.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:g0.workingColorSpace})}let U0=I.state.transmissionRenderTarget[f.id],L0=f.viewport||r;U0.setSize(L0.z*j.transmissionResolutionScale,L0.w*j.transmissionResolutionScale);let Y0=j.getRenderTarget(),O0=j.getActiveCubeFace(),z0=j.getActiveMipmapLevel();if(j.setRenderTarget(U0),j.getClearColor(i),Q0=j.getClearAlpha(),Q0<1)j.setClearColor(16777215,0.5);if(j.clear(),mJ)H0.render(g);let f0=j.toneMapping;j.toneMapping=A9;let u0=f.viewport;if(f.viewport!==void 0)f.viewport=void 0;if(I.setupLightsView(f),NJ===!0)m.setGlobalState(j.clippingPlanes,f);if(j6(V,g,f),h0.updateMultisampleRenderTarget(U0),h0.updateRenderTargetMipmap(U0),t0.has("WEBGL_multisampled_render_to_texture")===!1){let M0=!1;for(let c0=0,FJ=T.length;c0<FJ;c0++){let WJ=T[c0],{object:QJ,geometry:TJ,material:V0,group:bJ}=WJ;if(V0.side===yJ&&QJ.layers.test(f.layers)){let i0=V0.side;V0.side=uJ,V0.needsUpdate=!0,aW(QJ,g,f,TJ,V0,bJ),V0.side=i0,V0.needsUpdate=!0,M0=!0}}if(M0===!0)h0.updateMultisampleRenderTarget(U0),h0.updateRenderTargetMipmap(U0)}if(j.setRenderTarget(Y0,O0,z0),j.setClearColor(i,Q0),u0!==void 0)f.viewport=u0;j.toneMapping=f0}function j6(V,T,g){let f=T.isScene===!0?T.overrideMaterial:null;for(let b=0,U0=V.length;b<U0;b++){let L0=V[b],{object:Y0,geometry:O0,group:z0}=L0,f0=L0.material;if(f0.allowOverride===!0&&f!==null)f0=f;if(Y0.layers.test(g.layers))aW(Y0,T,g,O0,f0,z0)}}function aW(V,T,g,f,b,U0){if(y!==null&&b.isNodeMaterial)y.setObject(V,b);if(V.onBeforeRender(j,T,g,f,b,U0),V.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),b.onBeforeRender(j,T,g,f,V,U0),b.transparent===!0&&b.side===yJ&&b.forceSinglePass===!1)b.side=uJ,b.needsUpdate=!0,j.renderBufferDirect(g,T,f,b,V,U0),b.side=H8,b.needsUpdate=!0,j.renderBufferDirect(g,T,f,b,V,U0),b.side=yJ;else j.renderBufferDirect(g,T,f,b,V,U0);V.onAfterRender(j,T,g,f,b,U0)}function rW(V){let T=0;for(let g of V)if(g.texture!==null)T++;return T}function j7(V,T,g){if(T.isScene!==!0)T=lJ;let f=S0.get(V),b=I.state.lights,U0=I.state.shadowsArray,L0=b.state.version,Y0=e.getParameters(V,b.state,U0,T,g,I.state.lightProbeGridArray),O0=e.getProgramCacheKey(Y0),z0=f.programs;f.environment=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?T.environment:null,f.fog=T.fog;let f0=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap;if(f.envMap=AJ.get(V.envMap||f.environment,f0),f.envMapRotation=f.environment!==null&&V.envMap===null?T.environmentRotation:V.envMapRotation,z0===void 0)V.addEventListener("dispose",F0),z0=new Map,f.programs=z0,f.programVariants=new Map;let u0=z0.get(O0);if(u0!==void 0){if(f.currentProgram===u0&&f.lightsStateVersion===L0)return eW(V,Y0),u0}else{if(Y0.uniforms=e.getUniforms(V),y!==null&&V.isNodeMaterial)y.build(V,g,Y0);V.onBeforeCompile(Y0,j),u0=e.acquireProgram(Y0,O0),z0.set(O0,u0),f.uniforms=Y0.uniforms}let M0=f.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)M0.clippingPlanes=m.uniform;if(eW(V,Y0),f.needsLights=lX(V),f.lightsStateVersion=L0,f.needsLights)M0.ambientLightColor.value=b.state.ambient,M0.lightProbe.value=b.state.probe,M0.sunLights.value=b.state.sun,M0.sunLightShadows.value=b.state.sunShadow,M0.directionalLights.value=b.state.directional,M0.directionalLightShadows.value=b.state.directionalShadow,M0.spotLights.value=b.state.spot,M0.spotLightShadows.value=b.state.spotShadow,M0.rectAreaLights.value=b.state.rectArea,M0.ltc_1.value=b.state.rectAreaLTC1,M0.ltc_2.value=b.state.rectAreaLTC2,M0.pointLights.value=b.state.point,M0.pointLightShadows.value=b.state.pointShadow,M0.hemisphereLights.value=b.state.hemi,M0.sunShadowMatrix.value=b.state.sunShadowMatrix,M0.sunShadowCascade.value=b.state.sunShadowCascade,M0.directionalShadowMatrix.value=b.state.directionalShadowMatrix,M0.spotLightMatrix.value=b.state.spotLightMatrix,M0.spotLightMap.value=b.state.spotLightMap,M0.pointShadowMatrix.value=b.state.pointShadowMatrix;return f.numLightProbeGrids=rW(I.state.lightProbeGridArray),f.currentProgram=u0,f.uniformsList=null,u0}function xX(V,T,g,f,b){let U0=S0.get(V),L0=U0.currentProgram.id+","+f+","+b,Y0=U0.programVariants.get(L0);if(Y0===void 0)Y0=j7(V,T,g),U0.programVariants.set(L0,Y0);else U0.currentProgram=Y0,U0.uniformsList=null,U0.outputColorSpace=f,U0.toneMapping=b;return Y0}function tW(V){if(V.uniformsList===null){let T=V.currentProgram.getUniforms();V.uniformsList=D6.seqWithValue(T.seq,V.uniforms)}return V.uniformsList}function eW(V,T){let g=S0.get(V);g.outputColorSpace=T.outputColorSpace,g.batching=T.batching,g.batchingColor=T.batchingColor,g.instancing=T.instancing,g.instancingColor=T.instancingColor,g.instancingMorph=T.instancingMorph,g.skinning=T.skinning,g.morphTargets=T.morphTargets,g.morphNormals=T.morphNormals,g.morphColors=T.morphColors,g.morphTargetsCount=T.morphTargetsCount,g.numClippingPlanes=T.numClippingPlanes,g.numIntersection=T.numClipIntersection,g.vertexAlphas=T.vertexAlphas,g.vertexTangents=T.vertexTangents,g.toneMapping=T.toneMapping}function gX(V,T,g,f,b){if(T.isScene!==!0)T=lJ;h0.resetTextureUnits();let U0=T.fog,L0=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?T.environment:null,Y0=x===null?j.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:g0.workingColorSpace,O0=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,z0=AJ.get(f.envMap||L0,O0),f0=f.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,u0=!!g.attributes.tangent&&(!!f.normalMap||f.anisotropy>0),M0=!!g.morphAttributes.position,c0=!!g.morphAttributes.normal,FJ=!!g.morphAttributes.color,WJ=A9;if(f.toneMapped){if(x===null||x.isXRRenderTarget===!0)WJ=j.toneMapping}let QJ=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,TJ=QJ!==void 0?QJ.length:0,V0=S0.get(f),bJ=I.state.lights;if(NJ===!0){if(pJ===!0||V!==u){let HJ=V===u&&f.id===K0;m.setState(f,V,HJ)}}let i0=!1,D8=!1;if(f.version===V0.__version){if(V0.needsLights&&V0.lightsStateVersion!==bJ.state.version)i0=!0;else if(b.isBatchedMesh&&V0.batching===!1)i0=!0;else if(!b.isBatchedMesh&&V0.batching===!0)i0=!0;else if(b.isBatchedMesh&&V0.batchingColor===!0&&b._colorsTexture===null)i0=!0;else if(b.isBatchedMesh&&V0.batchingColor===!1&&b._colorsTexture!==null)i0=!0;else if(b.isInstancedMesh&&V0.instancing===!1)i0=!0;else if(!b.isInstancedMesh&&V0.instancing===!0)i0=!0;else if(b.isSkinnedMesh&&V0.skinning===!1)i0=!0;else if(!b.isSkinnedMesh&&V0.skinning===!0)i0=!0;else if(b.isInstancedMesh&&V0.instancingColor===!0&&b.instanceColor===null)i0=!0;else if(b.isInstancedMesh&&V0.instancingColor===!1&&b.instanceColor!==null)i0=!0;else if(b.isInstancedMesh&&V0.instancingMorph===!0&&b.morphTexture===null)i0=!0;else if(b.isInstancedMesh&&V0.instancingMorph===!1&&b.morphTexture!==null)i0=!0;else if(V0.envMap!==z0)i0=!0;else if(f.fog===!0&&V0.fog!==U0)i0=!0;else if(V0.numClippingPlanes!==void 0&&(V0.numClippingPlanes!==m.numPlanes||V0.numIntersection!==m.numIntersection))i0=!0;else if(V0.vertexAlphas!==f0)i0=!0;else if(V0.vertexTangents!==u0)i0=!0;else if(V0.morphTargets!==M0)i0=!0;else if(V0.morphNormals!==c0)i0=!0;else if(V0.morphColors!==FJ)i0=!0;else if(V0.morphTargetsCount!==TJ)i0=!0;else if(V0.numLightProbeGrids!==rW(I.state.lightProbeGridArray))i0=!0;else if(V0.outputColorSpace!==Y0||V0.toneMapping!==WJ)D8=!0}else i0=!0,V0.__version=f.version;let SJ=V0.currentProgram;if(i0===!0||D8===!0){if(SJ=D8===!0?xX(f,T,b,Y0,WJ):j7(f,T,b),y&&f.isNodeMaterial)y.onUpdateProgram(f,SJ,V0)}let v6=!1,t9=!1,B8=!1,s0=SJ.getUniforms(),PJ=V0.uniforms;if(E0.useProgram(SJ.program))v6=!0,t9=!0,B8=!0;if(f.id!==K0)K0=f.id,t9=!0;if(v6||u!==V){if(E0.buffers.depth.getReversed()&&V.reversedDepth!==!0)V._reversedDepth=!0,V.updateProjectionMatrix();s0.setValue(v,"projectionMatrix",V.projectionMatrix),s0.setValue(v,"viewMatrix",V.matrixWorldInverse);let BJ=s0.map.cameraPosition;if(BJ!==void 0)BJ.setValue(v,qJ.setFromMatrixPosition(V.matrixWorld));if(VJ.logarithmicDepthBuffer)s0.setValue(v,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(f.isMeshPhongMaterial||f.isMeshToonMaterial||f.isMeshLambertMaterial||f.isMeshBasicMaterial||f.isMeshStandardMaterial||f.isShaderMaterial)s0.setValue(v,"isOrthographic",V.isOrthographicCamera===!0);if(u!==V)u=V,t9=!0,B8=!0}if(V0.needsLights){if(bJ.state.sunShadowMap.length>0)s0.setValue(v,"sunShadowMap",bJ.state.sunShadowMap,h0);if(bJ.state.directionalShadowMap.length>0)s0.setValue(v,"directionalShadowMap",bJ.state.directionalShadowMap,h0);if(bJ.state.spotShadowMap.length>0)s0.setValue(v,"spotShadowMap",bJ.state.spotShadowMap,h0);if(bJ.state.pointShadowMap.length>0)s0.setValue(v,"pointShadowMap",bJ.state.pointShadowMap,h0)}if(b.isSkinnedMesh){s0.setOptional(v,b,"bindMatrix"),s0.setOptional(v,b,"bindMatrixInverse");let HJ=b.skeleton;if(HJ){if(HJ.boneTexture===null)HJ.computeBoneTexture();s0.setValue(v,"boneTexture",HJ.boneTexture,h0)}}if(b.isBatchedMesh){if(s0.setOptional(v,b,"batchingTexture"),s0.setValue(v,"batchingTexture",b._matricesTexture,h0),s0.setOptional(v,b,"batchingIdTexture"),s0.setValue(v,"batchingIdTexture",b._indirectTexture,h0),s0.setOptional(v,b,"batchingColorTexture"),b._colorsTexture!==null)s0.setValue(v,"batchingColorTexture",b._colorsTexture,h0)}let F9=g.morphAttributes;if(F9.position!==void 0||F9.normal!==void 0||F9.color!==void 0)w.update(b,g,SJ);if(t9||V0.receiveShadow!==b.receiveShadow)V0.receiveShadow=b.receiveShadow,s0.setValue(v,"receiveShadow",b.receiveShadow);if((f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial)&&f.envMap===null&&T.environment!==null)PJ.envMapIntensity.value=T.environmentIntensity;if(PJ.dfgLUT!==void 0)PJ.dfgLUT.value=eq();if(t9){if(s0.setValue(v,"toneMappingExposure",j.toneMappingExposure),V0.needsLights)pX(PJ,B8);if(U0&&f.fog===!0)a.refreshFogUniforms(PJ,U0);if(a.refreshMaterialUniforms(PJ,f,T0,w0,I.state.transmissionRenderTarget[V.id]),V0.needsLights&&V0.numLightProbeGrids>0){let HJ=_,BJ=0;for(let f9 of I.state.lightProbeGridArray){if(f9.texture===null)continue;HJ.textures[BJ]=f9.texture,HJ.min[BJ]=f9.boundingBox.min,HJ.max[BJ]=f9.boundingBox.max,HJ.resolution[BJ]=f9.resolution,BJ++}for(let f9 in HJ)HJ[f9].length=BJ;PJ.probesSH.value=HJ.textures,PJ.probesMin.value=HJ.min,PJ.probesMax.value=HJ.max,PJ.probesResolution.value=HJ.resolution}D6.upload(v,tW(V0),PJ,h0)}if(f.isShaderMaterial&&f.uniformsNeedUpdate===!0)D6.upload(v,tW(V0),PJ,h0),f.uniformsNeedUpdate=!1;if(f.isSpriteMaterial)s0.setValue(v,"center",b.center);if(s0.setValue(v,"modelViewMatrix",b.modelViewMatrix),s0.setValue(v,"normalMatrix",b.normalMatrix),s0.setValue(v,"modelMatrix",b.matrixWorld),f.uniformsGroups!==void 0){let HJ=f.uniformsGroups;for(let BJ=0,f9=HJ.length;BJ<f9;BJ++){let QK=HJ[BJ];G0.update(QK,SJ),G0.bind(QK,SJ)}}return SJ}function pX(V,T){V.ambientLightColor.needsUpdate=T,V.lightProbe.needsUpdate=T,V.sunLights.needsUpdate=T,V.sunLightShadows.needsUpdate=T,V.directionalLights.needsUpdate=T,V.directionalLightShadows.needsUpdate=T,V.pointLights.needsUpdate=T,V.pointLightShadows.needsUpdate=T,V.spotLights.needsUpdate=T,V.spotLightShadows.needsUpdate=T,V.rectAreaLights.needsUpdate=T,V.hemisphereLights.needsUpdate=T}function lX(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return s},this.getActiveMipmapLevel=function(){return o},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(V,T,g){let f=S0.get(V);if(f.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,f.__autoAllocateDepthBuffer===!1)f.__useRenderToTexture=!1;S0.get(V.texture).__webglTexture=T,S0.get(V.depthTexture).__webglTexture=f.__autoAllocateDepthBuffer?void 0:g,f.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,T){let g=S0.get(V);g.__webglFramebuffer=T,g.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(V,T=0,g=0){x=V,s=T,o=g;let f=null,b=!1,U0=!1;if(V){let Y0=S0.get(V);if(Y0.__useDefaultFramebuffer!==void 0){E0.bindFramebuffer(v.FRAMEBUFFER,Y0.__webglFramebuffer),r.copy(V.viewport),$0.copy(V.scissor),k0=V.scissorTest,E0.viewport(r),E0.scissor($0),E0.setScissorTest(k0),K0=-1;return}else if(Y0.__webglFramebuffer===void 0)h0.setupRenderTarget(V);else if(Y0.__hasExternalTextures)h0.rebindTextures(V,S0.get(V.texture).__webglTexture,S0.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let f0=V.depthTexture;if(Y0.__boundDepthTexture!==f0){if(f0!==null&&S0.has(f0)&&(V.width!==f0.image.width||V.height!==f0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");h0.setupDepthRenderbuffer(V)}}let O0=V.texture;if(O0.isData3DTexture||O0.isDataArrayTexture||O0.isCompressedArrayTexture)U0=!0;let z0=S0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(z0[T]))f=z0[T][g];else f=z0[T];b=!0}else if(V.samples>0&&h0.useMultisampledRTT(V)===!1)f=S0.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(z0))f=z0[g];else f=z0;r.copy(V.viewport),$0.copy(V.scissor),k0=V.scissorTest}else r.copy(d0).multiplyScalar(T0).floor(),$0.copy(b0).multiplyScalar(T0).floor(),k0=KJ;if(g!==0)f=p;if(E0.bindFramebuffer(v.FRAMEBUFFER,f))E0.drawBuffers(V,f);if(E0.viewport(r),E0.scissor($0),E0.setScissorTest(k0),b){let Y0=S0.get(V.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y0.__webglTexture,g)}else if(U0){let Y0=T;for(let O0=0;O0<V.textures.length;O0++){let z0=S0.get(V.textures[O0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+O0,z0.__webglTexture,g,Y0)}}else if(V!==null&&g!==0){let Y0=S0.get(V.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Y0.__webglTexture,g)}K0=-1};function JK(V){let T=S0.get(V);if(T.__readFormat!==V.format||T.__readType!==V.type)T.__readFormat=V.format,T.__readType=V.type,T.__formatReadable=VJ.textureFormatReadable(V.format),T.__typeReadable=VJ.textureTypeReadable(V.type);return T}if(this.readRenderTargetPixels=function(V,T,g,f,b,U0,L0,Y0=0){if(!(V&&V.isWebGLRenderTarget)){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O0=S0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&L0!==void 0){if(O0=O0[L0],Array.isArray(O0))O0=O0[0]}if(O0){E0.bindFramebuffer(v.FRAMEBUFFER,O0);try{let z0=V.textures[Y0],f0=z0.format,u0=z0.type;if(V.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+Y0);let M0=JK(z0);if(M0.__formatReadable===!1){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(M0.__typeReadable===!1){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(T>=0&&T<=V.width-f&&(g>=0&&g<=V.height-b))v.readPixels(T,g,f,b,J0.convert(f0),J0.convert(u0),U0)}finally{let z0=x!==null?S0.get(x).__webglFramebuffer:null;E0.bindFramebuffer(v.FRAMEBUFFER,z0)}}},this.readRenderTargetPixelsAsync=async function(V,T,g,f,b,U0,L0,Y0=0){if(!(V&&V.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O0=S0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&L0!==void 0){if(O0=O0[L0],Array.isArray(O0))O0=O0[0]}if(O0)if(T>=0&&T<=V.width-f&&(g>=0&&g<=V.height-b)){E0.bindFramebuffer(v.FRAMEBUFFER,O0);let z0=V.textures[Y0],f0=z0.format,u0=z0.type;if(V.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+Y0);let M0=JK(z0);if(M0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(M0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let c0=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,c0),v.bufferData(v.PIXEL_PACK_BUFFER,U0.byteLength,v.STREAM_READ),v.readPixels(T,g,f,b,J0.convert(f0),J0.convert(u0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let FJ=x!==null?S0.get(x).__webglFramebuffer:null;E0.bindFramebuffer(v.FRAMEBUFFER,FJ);let WJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await nH(v,WJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,c0),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,U0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(c0),v.deleteSync(WJ),U0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,T=null,g=0){let f=Math.pow(2,-g),b=Math.floor(V.image.width*f),U0=Math.floor(V.image.height*f),L0=T!==null?T.x:0,Y0=T!==null?T.y:0;h0.setTexture2D(V,0),v.copyTexSubImage2D(v.TEXTURE_2D,g,0,0,L0,Y0,b,U0),E0.unbindTexture()},this.copyTextureToTexture=function(V,T,g=null,f=null,b=0,U0=0){let L0,Y0,O0,z0,f0,u0,M0,c0,FJ,WJ=V.isCompressedTexture?V.mipmaps[U0]:V.image;if(g!==null)L0=g.max.x-g.min.x,Y0=g.max.y-g.min.y,O0=g.isBox3?g.max.z-g.min.z:1,z0=g.min.x,f0=g.min.y,u0=g.isBox3?g.min.z:0;else{let s0=Math.pow(2,-b);if(L0=Math.floor(WJ.width*s0),Y0=Math.floor(WJ.height*s0),V.isDataArrayTexture)O0=WJ.depth;else if(V.isData3DTexture)O0=Math.floor(WJ.depth*s0);else O0=1;z0=0,f0=0,u0=0}if(f!==null)M0=f.x,c0=f.y,FJ=f.z;else M0=0,c0=0,FJ=0;let QJ=J0.convert(T.format),TJ=J0.convert(T.type),V0;if(T.isData3DTexture)h0.setTexture3D(T,0),V0=v.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)h0.setTexture2DArray(T,0),V0=v.TEXTURE_2D_ARRAY;else h0.setTexture2D(T,0),V0=v.TEXTURE_2D;E0.activeTexture(v.TEXTURE0),E0.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,T.flipY),E0.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),E0.pixelStorei(v.UNPACK_ALIGNMENT,T.unpackAlignment);let bJ=E0.getParameter(v.UNPACK_ROW_LENGTH),i0=E0.getParameter(v.UNPACK_IMAGE_HEIGHT),D8=E0.getParameter(v.UNPACK_SKIP_PIXELS),SJ=E0.getParameter(v.UNPACK_SKIP_ROWS),v6=E0.getParameter(v.UNPACK_SKIP_IMAGES);E0.pixelStorei(v.UNPACK_ROW_LENGTH,WJ.width),E0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,WJ.height),E0.pixelStorei(v.UNPACK_SKIP_PIXELS,z0),E0.pixelStorei(v.UNPACK_SKIP_ROWS,f0),E0.pixelStorei(v.UNPACK_SKIP_IMAGES,u0);let t9=V.isDataArrayTexture||V.isData3DTexture,B8=T.isDataArrayTexture||T.isData3DTexture;if(V.isDepthTexture){let s0=S0.get(V),PJ=S0.get(T),F9=S0.get(s0.__renderTarget),HJ=S0.get(PJ.__renderTarget);E0.bindFramebuffer(v.READ_FRAMEBUFFER,F9.__webglFramebuffer),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,HJ.__webglFramebuffer);for(let BJ=0;BJ<O0;BJ++){if(t9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,S0.get(V).__webglTexture,b,u0+BJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,S0.get(T).__webglTexture,U0,FJ+BJ);v.blitFramebuffer(z0,f0,z0+L0,f0+Y0,M0,c0,M0+L0,c0+Y0,v.DEPTH_BUFFER_BIT,v.NEAREST)}E0.bindFramebuffer(v.READ_FRAMEBUFFER,null),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(b!==0||V.isRenderTargetTexture||S0.has(V)){let s0=S0.get(V),PJ=S0.get(T);E0.bindFramebuffer(v.READ_FRAMEBUFFER,t),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,A);for(let F9=0;F9<O0;F9++){if(t9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,s0.__webglTexture,b,u0+F9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,s0.__webglTexture,b);if(B8)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,PJ.__webglTexture,U0,FJ+F9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,PJ.__webglTexture,U0);if(b!==0)v.blitFramebuffer(z0,f0,z0+L0,f0+Y0,M0,c0,M0+L0,c0+Y0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(B8)v.copyTexSubImage3D(V0,U0,M0,c0,FJ+F9,z0,f0,L0,Y0);else v.copyTexSubImage2D(V0,U0,M0,c0,z0,f0,L0,Y0)}E0.bindFramebuffer(v.READ_FRAMEBUFFER,null),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(B8)if(V.isDataTexture||V.isData3DTexture)v.texSubImage3D(V0,U0,M0,c0,FJ,L0,Y0,O0,QJ,TJ,WJ.data);else if(T.isCompressedArrayTexture)v.compressedTexSubImage3D(V0,U0,M0,c0,FJ,L0,Y0,O0,QJ,WJ.data);else v.texSubImage3D(V0,U0,M0,c0,FJ,L0,Y0,O0,QJ,TJ,WJ);else if(V.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,U0,M0,c0,L0,Y0,QJ,TJ,WJ.data);else if(V.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,U0,M0,c0,WJ.width,WJ.height,QJ,WJ.data);else v.texSubImage2D(v.TEXTURE_2D,U0,M0,c0,L0,Y0,QJ,TJ,WJ);if(E0.pixelStorei(v.UNPACK_ROW_LENGTH,bJ),E0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,i0),E0.pixelStorei(v.UNPACK_SKIP_PIXELS,D8),E0.pixelStorei(v.UNPACK_SKIP_ROWS,SJ),E0.pixelStorei(v.UNPACK_SKIP_IMAGES,v6),U0===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0)v.generateMipmap(V0);E0.unbindTexture()},this.initRenderTarget=function(V){if(S0.get(V).__webglFramebuffer===void 0)h0.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)h0.setTextureCube(V,0);else if(V.isData3DTexture)h0.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)h0.setTexture2DArray(V,0);else h0.setTexture2D(V,0);E0.unbindTexture()},this.resetState=function(){s=0,o=0,x=null,E0.reset(),Z0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=g0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=g0._getUnpackColorSpace()}}function IW(J,Q){if(Q===gZ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===M7||Q===W6){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===M7)for(let K=1;K<=Z;K++)W.push($.getX(0)),W.push($.getX(K)),W.push($.getX(K+1));else for(let K=0;K<Z;K++)if(K%2===0)W.push($.getX(K)),W.push($.getX(K+1)),W.push($.getX(K+2));else W.push($.getX(K+2)),W.push($.getX(K+1)),W.push($.getX(K));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(W),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function oY(J){let Q=new Map,$=new Map,Z=J.clone();return aY(J,Z,function(W,K){Q.set(K,W),$.set(W,K)}),Z.traverse(function(W){if(!W.isSkinnedMesh)return;let K=W,H=Q.get(W),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),Z}function aY(J,Q,$){$(J,Q);for(let Z=0;Z<J.children.length;Z++)aY(J.children[Z],Q.children[Z],$)}class vW extends _9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new WX(Q)}),this.register(function(Q){return new KX(Q)}),this.register(function(Q){return new HX(Q)}),this.register(function(Q){return new OX(Q)}),this.register(function(Q){return new RX(Q)}),this.register(function(Q){return new LX(Q)}),this.register(function(Q){return new XX(Q)}),this.register(function(Q){return new UX(Q)}),this.register(function(Q){return new GX(Q)}),this.register(function(Q){return new EX(Q)}),this.register(function(Q){return new ZX(Q)}),this.register(function(Q){return new NX(Q)}),this.register(function(Q){return new YX(Q)}),this.register(function(Q){return new FX(Q)}),this.register(function(Q){return new qX(Q)}),this.register(function(Q){return new QX(Q)}),this.register(function(Q){return new TW(Q,m0.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new TW(Q,m0.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new MX(Q)})}load(J,Q,$,Z){let W=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=G9.extractUrlBase(J);K=G9.resolveURL(X,this.path)}else K=G9.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(Z)Z(X);else console.error(X);W.manager.itemError(J),W.manager.itemEnd(J)},Y=new O8(this.manager);Y.setPriority(this.priority),Y.setCache(this.cache),Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{W.parse(X,K,function(U){Q(U),W.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,K={},H={},Y=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===VX){try{K[m0.KHR_BINARY_GLTF]=new DX(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(K[m0.KHR_BINARY_GLTF].content)}else W=JSON.parse(Y.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new PX(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](X);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[G.name]=G,K[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],N=W.extensionsRequired||[];switch(G){case m0.KHR_MATERIALS_UNLIT:K[G]=new $X;break;case m0.KHR_DRACO_MESH_COMPRESSION:K[G]=new BX(W,this.dracoLoader);break;case m0.KHR_TEXTURE_TRANSFORM:K[G]=new kX;break;case m0.KHR_MESH_QUANTIZATION:K[G]=new zX;break;default:if(N.indexOf(G)>=0&&H[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function QF(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function XJ(J,Q,$){let Z=J.json.materials[Q];if(Z.extensions&&Z.extensions[$])return Z.extensions[$];return null}var m0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class QX{constructor(J){this.parser=J,this.name=m0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,Y=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],X,U=new A0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],gJ);let G=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new C7(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new x8(U),X.distance=G;break;case"spot":X=new oQ(U),X.distance=G,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),v9(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),Z=Promise.resolve(X),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],H=(W.extensions&&W.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class $X{constructor(){this.name=m0.KHR_MATERIALS_UNLIT}getMaterialType(){return Y9}extendParams(J,Q,$){let Z=[];J.color=new A0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let K=W.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],gJ),J.opacity=K[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,cJ))}return Promise.all(Z)}}class ZX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class WX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let W=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new R0(W,W)}}return Promise.all(Z)}}class KX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.diffuseRoughness=$.diffuseRoughnessFactor!==void 0?$.diffuseRoughnessFactor:0,$.diffuseRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"diffuseRoughnessMap",$.diffuseRoughnessTexture));return Promise.all(Z)}}class HX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_DISPERSION}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class YX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessMinimum=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessMaximum=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(Z)}}class XX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_SHEEN}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.sheenColor=new A0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let W=$.sheenColorFactor;Q.sheenColor.setRGB(W[0],W[1],W[2],gJ)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,cJ));if($.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(Z)}}class UX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)Z.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(Z)}}class GX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_VOLUME}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let W=$.attenuationColor||[1,1,1];return Q.attenuationColor=new A0().setRGB(W[0],W[1],W[2],gJ),Promise.all(Z)}}class EX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_IOR}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class NX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_SPECULAR}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let W=$.specularColorFactor||[1,1,1];if(Q.specularColor=new A0().setRGB(W[0],W[1],W[2],gJ),$.specularColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,cJ));return Promise.all(Z)}}class qX{constructor(J){this.parser=J,this.name=m0.EXT_MATERIALS_BUMP}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)Z.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(Z)}}class FX{constructor(J){this.parser=J,this.name=m0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return XJ(this.parser,J,this.name)!==null?oJ:null}extendMaterialParams(J,Q){let $=XJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(Z)}}class OX{constructor(J){this.parser=J,this.name=m0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,K)}}class RX{constructor(J){this.parser=J,this.name=m0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let K=W.extensions[Q],H=Z.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class LX{constructor(J){this.parser=J,this.name=m0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let K=W.extensions[Q],H=Z.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class TW{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(H){let Y=Z.byteOffset||0,X=Z.byteLength||0,U=Z.count,G=Z.byteStride,N=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,G,N,Z.mode,Z.filter).then(function(E){return E.buffer});else return K.ready.then(function(){let E=new ArrayBuffer(U*G);return K.decodeGltfBuffer(new Uint8Array(E),U,G,N,Z.mode,Z.filter),E})})}else return null}}class MX{constructor(J){this.name=m0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let X of Z.primitives)if(X.mode!==E9.TRIANGLES&&X.mode!==E9.TRIANGLE_STRIP&&X.mode!==E9.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),G=U.isGroup?U.children:[U],N=X[0].count,E=[];for(let q of G){let R=new v0,D=new S,F=new nJ,O=new S(1,1,1),k=new jQ(q.geometry,q.material,N);for(let B=0;B<N;B++){if(Y.TRANSLATION)D.fromBufferAttribute(Y.TRANSLATION,B);if(Y.ROTATION)F.fromBufferAttribute(Y.ROTATION,B);if(Y.SCALE)O.fromBufferAttribute(Y.SCALE,B);k.setMatrixAt(B,R.compose(D,F,O))}let _=null;for(let B in Y)if(B==="_COLOR_0"){let I=Y[B];k.instanceColor=new K8(I.array,I.itemSize,I.normalized)}else if(B!=="TRANSLATION"&&B!=="ROTATION"&&B!=="SCALE"){if(_===null){let C=k.geometry;_=new RJ,_.name=C.name;for(let L in C.attributes)_.setAttribute(L,C.attributes[L]);for(let L in C.morphAttributes)_.morphAttributes[L]=C.morphAttributes[L];if(C.index!==null)_.setIndex(C.index);_.morphTargetsRelative=C.morphTargetsRelative;for(let L of C.groups)_.addGroup(L.start,L.count,L.materialIndex);if(C.boundingBox!==null)_.boundingBox=C.boundingBox.clone();if(C.boundingSphere!==null)_.boundingSphere=C.boundingSphere.clone();_.drawRange.start=C.drawRange.start,_.drawRange.count=C.drawRange.count,_.userData=Object.assign({},C.userData),k.geometry=_}let I=Y[B];_.setAttribute(B,new K8(I.array,I.itemSize,I.normalized))}r0.prototype.copy.call(k,q),this.parser.assignFinalMaterial(k),E.push(k)}if(U.isGroup)return U.clear(),U.add(...E),U;return E[0]})}}var VX="glTF",k6=12,rY={JSON:1313821514,BIN:5130562};class DX{constructor(J){this.name=m0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,k6),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==VX)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-k6,W=new DataView(J,k6),K=0;while(K<Z){let H=W.getUint32(K,!0);K+=4;let Y=W.getUint32(K,!0);if(K+=4,Y===rY.JSON){let X=new Uint8Array(J,k6+K,H);this.content=$.decode(X)}else if(Y===rY.BIN){let X=k6+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class BX{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=m0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let G=SW[U]||U.toLowerCase();H[G]=K[U]}for(let U in J.attributes){let G=SW[U]||U.toLowerCase();if(K[U]!==void 0){let N=$.accessors[J.attributes[U]],E=A7[N.componentType];X[G]=E.name,Y[G]=N.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(G,N){Z.decodeDracoFile(U,function(E){for(let q in E.attributes){let R=E.attributes[q],D=Y[q];if(D!==void 0)R.normalized=D}G(E)},H,X,gJ,N)})})}}class kX{constructor(){this.name=m0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class zX{constructor(){this.name=m0.KHR_MESH_QUANTIZATION}}class yW extends s9{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let K=0;K!==Z;K++)Q[K]=$[W+K];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=Z-Q,G=($-Q)/U,N=G*G,E=N*G,q=J*X,R=q-X,D=-2*E+3*N,F=E-N,O=1-D,k=F-N+G;for(let _=0;_!==H;_++){let B=K[R+_+H],I=K[R+_+Y]*U,C=K[q+_+H],L=K[q+_]*U;W[_]=O*B+k*I+D*C+F*L}return W}}var $F=new nJ;class _X extends yW{interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return $F.fromArray(W).normalize().toArray(W),W}}var E9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},A7={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tY={9728:V9,9729:hJ,9984:RQ,9985:R7,9986:S8,9987:D9},eY={33071:O7,33648:OQ,10497:F7},CW={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},SW={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},R8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZF={CUBICSPLINE:void 0,LINEAR:zQ,STEP:xZ},wW={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WF(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new _7({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:H8});return J.DefaultMaterial}function g8(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function v9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function KF(J,Q,$){let Z=!1,W=!1,K=!1;for(let U=0,G=Q.length;U<G;U++){let N=Q[U];if(N.POSITION!==void 0)Z=!0;if(N.NORMAL!==void 0)W=!0;if(N.COLOR_0!==void 0)K=!0;if(Z&&W&&K)break}if(!Z&&!W&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,G=Q.length;U<G;U++){let N=Q[U];if(Z){let E=N.POSITION!==void 0?$.getDependency("accessor",N.POSITION):J.attributes.position;H.push(E)}if(W){let E=N.NORMAL!==void 0?$.getDependency("accessor",N.NORMAL):J.attributes.normal;Y.push(E)}if(K){let E=N.COLOR_0!==void 0?$.getDependency("accessor",N.COLOR_0):J.attributes.color;X.push(E)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let G=U[0],N=U[1],E=U[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=N;if(K)J.morphAttributes.color=E;return J.morphTargetsRelative=!0,J})}function HF(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YF(J){let Q,$=J.extensions&&J.extensions[m0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+AW($.attributes);else Q=J.indices+":"+AW(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+AW(J.targets[Z]);return Q}function AW(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function jW(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XF(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var UF=new v0;class PX{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new QF,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);Z=$&&Y?parseInt(Y[1],10):-1,W=H.indexOf("Firefox")>-1,K=W?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&K<98)this.textureLoader=new nQ(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);else this.textureLoader=new aQ(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new O8(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),this.options.withCredentials||this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][Z.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:Z.asset,parser:$,userData:{}};return g8(W,H,Z),v9(H,Z),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let K=Q[Z].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())W(U,H.children[X])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[m0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,K){$.load(G9.resolveURL(Q.uri,Z.path),W,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let K=CW[Z.type],H=A7[Z.componentType],Y=Z.normalized===!0,X=new H(Z.count*K);return Promise.resolve(new UJ(X,K,Y))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(K){let H=K[0],Y=CW[Z.type],X=A7[Z.componentType],U=X.BYTES_PER_ELEMENT,G=U*Y,N=Z.byteOffset||0,E=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,q=Z.normalized===!0,R,D;if(E&&E!==G){let F=Math.floor(N/E),O="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+F+":"+Z.count,k=Q.cache.get(O);if(!k)R=new X(H,F*E,Z.count*E/U),k=new U8(R,E/U),Q.cache.add(O,k);D=new w9(k,Y,N%E/U,q)}else{if(H===null)R=new X(Z.count*Y);else R=new X(H,N,Z.count*Y);D=new UJ(R,Y,q)}if(Z.sparse!==void 0){let F=CW.SCALAR,O=A7[Z.sparse.indices.componentType],k=Z.sparse.indices.byteOffset||0,_=Z.sparse.values.byteOffset||0,B=new O(K[1],k,Z.sparse.count*F),I=new X(K[2],_,Z.sparse.count*Y);if(H!==null)D=new UJ(D.array.slice(),D.itemSize,D.normalized);D.normalized=!1;for(let C=0,L=B.length;C<L;C++){let z=B[C];if(D.setX(z,I[C*Y]),Y>=2)D.setY(z,I[C*Y+1]);if(Y>=3)D.setZ(z,I[C*Y+2]);if(Y>=4)D.setW(z,I[C*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}D.normalized=q}return D})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,K=Q.images[W],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,W,H)}loadTextureImage(J,Q,$){let Z=this,W=this.json,K=W.textures[J],H=W.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let N=(W.samplers||{})[K.sampler]||{};return U.magFilter=tY[N.magFilter]||hJ,U.minFilter=tY[N.minFilter]||D9,U.wrapS=eY[N.wrapS]||F7,U.wrapT=eY[N.wrapT]||F7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==V9&&U.minFilter!==hJ,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let K=Z.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1,U;if(Q.isKTX2Loader===!0&&K.bufferView!==void 0)U=$.getDependency("bufferView",K.bufferView).then(function(N){return new Promise(function(E,q){Q.parse(N,E,q)})});else{if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(N){X=!0;let E=new Blob([N],{type:K.mimeType});return Y=H.createObjectURL(E),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");U=Promise.resolve(Y).then(function(N){return new Promise(function(E,q){let R=E;if(Q.isImageBitmapLoader===!0)R=function(D){let F=new EJ(D);F.needsUpdate=!0,E(F)};Q.load(G9.resolveURL(N,W.path),R,void 0,q)})})}let G=U.then(function(N){if(X===!0)H.revokeObjectURL(Y);return v9(N,K),N.userData.mimeType=K.mimeType||XF(K.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),N});return this.sourceCache[J]=G,G}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(W.extensions[m0.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[m0.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=W.associations.get(K);K=W.extensions[m0.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),W.associations.set(K,Y)}}if(Z!==void 0)K.colorSpace=Z;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new N6,iJ.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new E6,iJ.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(Z||W||K){let H="ClonedMaterial:"+$.uuid+":";if(Z)H+="derivative-tangents:";if(W)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),W)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(Z){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return _7}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],K,H={},Y=W.extensions||{},X=[];if(Y[m0.KHR_MATERIALS_UNLIT]){let G=Z[m0.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),X.push(G.extendParams(H,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(H.color=new A0(1,1,1),H.opacity=1,Array.isArray(G.baseColorFactor)){let N=G.baseColorFactor;H.color.setRGB(N[0],N[1],N[2],gJ),H.opacity=N[3]}if(G.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",G.baseColorTexture,cJ));if(H.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,H.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",G.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(N){return N.getMaterialType&&N.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(N){return N.extendMaterialParams&&N.extendMaterialParams(J,H)})))}if(W.doubleSided===!0)H.side=yJ;let U=W.alphaMode||wW.OPAQUE;if(U===wW.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===wW.MASK)H.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&K!==Y9){if(X.push(Q.assignTexture(H,"normalMap",W.normalTexture)),H.normalScale=new R0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;H.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&K!==Y9){if(X.push(Q.assignTexture(H,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)H.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&K!==Y9){let G=W.emissiveFactor;H.emissive=new A0().setRGB(G[0],G[1],G[2],gJ)}if(W.emissiveTexture!==void 0&&K!==Y9)X.push(Q.assignTexture(H,"emissiveMap",W.emissiveTexture,cJ));return Promise.all(X).then(function(){let G=new K(H);if(W.name)G.name=W.name;if(v9(G,W),Q.associations.set(G,{materials:J}),W.extensions)g8(Z,G,W);return G})}createUniqueName(J){let Q=o0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(H){return $[m0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return JX(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=YF(X),G=Z[U];if(G)K.push(G.promise);else{let N;if(X.extensions&&X.extensions[m0.KHR_DRACO_MESH_COMPRESSION])N=W(X);else N=JX(new RJ,X,Q);if(X.mode===E9.TRIANGLE_STRIP)N=N.then((E)=>IW(E,W6));else if(X.mode===E9.TRIANGLE_FAN)N=N.then((E)=>IW(E,M7));Z[U]={primitive:X,promise:N},K.push(N)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],K=W.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?WF(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],G=[];for(let E=0,q=U.length;E<q;E++){let R=U[E],D=K[E],F,O=X[E];if(D.mode===E9.TRIANGLES||D.mode===E9.TRIANGLE_STRIP||D.mode===E9.TRIANGLE_FAN||D.mode===void 0){let k=W.isSkinnedMesh===!0,_=R.hasAttribute("skinIndex")&&R.hasAttribute("skinWeight");if(k&&_===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(F=k&&_?new SQ(R,O):new _J(R,O),F.isSkinnedMesh===!0)F.normalizeSkinWeights()}else if(D.mode===E9.LINES)F=new yQ(R,O);else if(D.mode===E9.LINE_STRIP)F=new B7(R,O);else if(D.mode===E9.LINE_LOOP)F=new hQ(R,O);else if(D.mode===E9.POINTS)F=new k7(R,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+D.mode);if(Object.keys(F.geometry.morphAttributes).length>0)HF(F,W);if(F.name=Q.createUniqueName(W.name||"mesh_"+J),v9(F,W),D.extensions)g8(Z,F,D);Q.assignFinalMaterial(F),G.push(F)}for(let E=0,q=G.length;E<q;E++)Q.associations.set(G[E],{meshes:J,primitives:E});if(G.length===1){if(W.extensions)g8(Z,G[0],W);return G[0]}let N=new dJ;if(W.extensions)g8(Z,N,W);Q.associations.set(N,{meshes:J});for(let E=0,q=G.length;E<q;E++)N.add(G[E]);return N})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new zJ(z9.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new I7(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return v9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),K=Z,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let G=K[X];if(G){H.push(G);let N=new v0;if(W!==null)N.fromArray(W.array,X*16);Y.push(N)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new G6(H,Y)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let G=0,N=Z.channels.length;G<N;G++){let E=Z.channels[G],q=Z.samplers[E.sampler],R=E.target,D=R.node,F=Z.parameters!==void 0?Z.parameters[q.input]:q.input,O=Z.parameters!==void 0?Z.parameters[q.output]:q.output;if(R.node===void 0)continue;K.push(this.getDependency("node",D)),H.push(this.getDependency("accessor",F)),Y.push(this.getDependency("accessor",O)),X.push(q),U.push(R)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(G){let N=G[0],E=G[1],q=G[2],R=G[3],D=G[4],F=[];for(let k=0,_=N.length;k<_;k++){let B=N[k],I=E[k],C=q[k],L=R[k],z=D[k];if(B===void 0)continue;if(B.updateMatrix)B.updateMatrix();let j=$._createAnimationTracks(B,I,C,L,z);if(j)for(let l=0;l<j.length;l++)F.push(j[l])}let O=new cQ(W,void 0,F);return v9(O,Z),O})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let K=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=Z.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=Z.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),K=[],H=Z.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(K),Y]).then(function(X){let U=X[0],G=X[1],N=X[2];if(N!==null)U.traverse(function(E){if(!E.isSkinnedMesh)return;E.bind(N,UF)});for(let E=0,q=G.length;E<q;E++)U.add(G[E]);if(U.userData.pivot!==void 0&&G.length>0){let E=U.userData.pivot,q=G[0];U.pivot=new S().fromArray(E),U.position.x-=E[0],U.position.y-=E[1],U.position.z-=E[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],K=W.name?Z.createUniqueName(W.name):"",H=[],Y=Z._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(W.camera!==void 0)H.push(Z.getDependency("camera",W.camera).then(function(X){return Z._getNodeRef(Z.cameraCache,W.camera,X)}));return Z._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(W.isBone===!0)U=new X6;else if(X.length>1)U=new dJ;else if(X.length===1)U=X[0];else U=new r0;if(U!==X[0])for(let G=0,N=X.length;G<N;G++)U.add(X[G]);if(W.name)U.userData.name=W.name,U.name=K;if(v9(U,W),W.extensions)g8($,U,W);if(W.matrix!==void 0){let G=new v0;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new dJ;if($.name)W.name=Z.createUniqueName($.name);if(v9(W,$),$.extensions)g8(Q,W,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(Z.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,G=Y.length;U<G;U++){let N=Y[U];if(N.parent!==null)W.add(oY(N));else W.add(N)}let X=(U)=>{let G=new Map;for(let[N,E]of Z.associations)if(N instanceof iJ||N instanceof EJ)G.set(N,E);return U.traverse((N)=>{let E=Z.associations.get(N);if(E!=null)G.set(N,E)}),G};return Z.associations=X(W),W})}_createAnimationTracks(J,Q,$,Z,W){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(E){if(E.morphTargetInfluences)Y.push(E.name?E.name:E.uuid)}if(R8[W.path]===R8.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(R8[W.path]){case R8.weights:U=N8;break;case R8.rotation:U=q8;break;case R8.translation:case R8.scale:U=b8;break;default:switch($.itemSize){case 1:U=N8;break;case 2:case 3:default:U=b8;break}break}let G=Z.interpolation!==void 0?ZF[Z.interpolation]:zQ,N=this._getArrayFromAccessor($);for(let E=0,q=Y.length;E<q;E++){let R=new U(Y[E]+"."+R8[W.path],Q.array,N,G);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(R);K.push(R)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=jW(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,K=Q.length;W<K;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof q8?_X:yW)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function GF(J,Q,$){let Z=Q.attributes,W=new sJ;if(Z.POSITION!==void 0){let Y=$.json.accessors[Z.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(W.set(new S(X[0],X[1],X[2]),new S(U[0],U[1],U[2])),Y.normalized){let G=jW(A7[Y.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new S,X=new S;for(let U=0,G=K.length;U<G;U++){let N=K[U];if(N.POSITION!==void 0){let E=$.json.accessors[N.POSITION],q=E.min,R=E.max;if(q!==void 0&&R!==void 0){if(X.setX(Math.max(Math.abs(q[0]),Math.abs(R[0]))),X.setY(Math.max(Math.abs(q[1]),Math.abs(R[1]))),X.setZ(Math.max(Math.abs(q[2]),Math.abs(R[2]))),E.normalized){let D=jW(A7[E.componentType]);X.multiplyScalar(D)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(Y)}J.boundingBox=W;let H=new Q9;W.getCenter(H.center),H.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=H}function JX(J,Q,$){let Z=Q.attributes,W=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in Z){let Y=SW[H]||H.toLowerCase();if(Y in J.attributes)continue;W.push(K(Z[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});W.push(H)}if(g0.workingColorSpace!==gJ&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${g0.workingColorSpace}" not supported.`);return v9(J,Q),GF(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?KF(J,Q.targets,$):J})}var hW=new WeakMap,EF=new URL("../libs/draco/draco_decoder.wasm",document.baseURI).toString(),NF=new URL("../libs/draco/draco_wasm_wrapper.js",document.baseURI).toString(),qF=new URL("../libs/draco/draco_decoder.js",document.baseURI).toString(),bR={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",document.baseURI).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",document.baseURI).toString()};class fW extends _9{constructor(J){super(J);this.decoderPaths={js:NF,wasm:EF,dep_js:qF},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(J){let{decoderPaths:Q}=this;if(typeof J==="object")Q.js=J.js,Q.wasm=J.wasm,Q.dep_js=null;else Q.js=G9.resolveURL("draco_wasm_wrapper.js",J),Q.wasm=G9.resolveURL("draco_decoder.wasm",J),Q.dep_js=G9.resolveURL("draco_decoder.js",J);return this}setDecoderConfig(J){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=J,this}setWorkerLimit(J){return this.workerLimit=J,this}load(J,Q,$,Z){let W=new O8(this.manager);W.setPriority(this.priority),W.setCache(this.cache),W.setPath(this.path),W.setResponseType("arraybuffer"),W.setRequestHeader(this.requestHeader),W.setWithCredentials(this.withCredentials),W.load(J,(K)=>{this.parse(K,Q,Z)},$,Z)}parse(J,Q,$=()=>{}){this.decodeDracoFile(J,Q,null,null,cJ,$).catch($)}decodeDracoFile(J,Q,$,Z,W=gJ,K=()=>{}){let H={attributeIDs:$||this.defaultAttributeIDs,attributeTypes:Z||this.defaultAttributeTypes,useUniqueIDs:!!$,vertexColorSpace:W};return this.decodeGeometry(J,H).then(Q).catch(K)}decodeGeometry(J,Q){let $=JSON.stringify(Q);if(hW.has(J)){let Y=hW.get(J);if(Y.key===$)return Y.promise;else if(J.byteLength===0)throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let Z,W=this.workerNextTaskID++,K=J.byteLength,H=this._getWorker(W,K).then((Y)=>{return Z=Y,new Promise((X,U)=>{Z._callbacks[W]={resolve:X,reject:U},Z.postMessage({type:"decode",id:W,taskConfig:Q,buffer:J},[J])})}).then((Y)=>this._createGeometry(Y.geometry));return H.catch(()=>!0).then(()=>{if(Z&&W)this._releaseTask(Z,W)}),hW.set(J,{key:$,promise:H}),H}_createGeometry(J){let Q=new RJ;if(J.index)Q.setIndex(new UJ(J.index.array,1));for(let $=0;$<J.attributes.length;$++){let{name:Z,array:W,itemSize:K,stride:H,vertexColorSpace:Y}=J.attributes[$],X;if(K===H)X=new UJ(W,K);else{let U=new U8(W,H);X=new w9(U,K,0)}if(Z==="color")this._assignVertexColorSpace(X,Y),X.normalized=W instanceof Float32Array===!1;Q.setAttribute(Z,X)}return Q}_assignVertexColorSpace(J,Q){if(Q!==cJ)return;let $=new A0;for(let Z=0,W=J.count;Z<W;Z++)$.fromBufferAttribute(J,Z),g0.colorSpaceToWorking($,cJ),J.setXYZ(Z,$.r,$.g,$.b)}_loadLibrary(J,Q){let $=new O8(this.manager);return $.setPriority(this.priority),$.setCache(this.cache),$.setResponseType(Q),$.setWithCredentials(this.withCredentials),new Promise((Z,W)=>{$.load(J,Z,void 0,W)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let J=typeof WebAssembly!=="object"||this.decoderConfig.type==="js",Q=[],{decoderPaths:$}=this;if(J){if($.dep_js===null)throw Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");Q.push(this._loadLibrary($.dep_js,"text"))}else Q.push(this._loadLibrary($.js,"text")),Q.push(this._loadLibrary($.wasm,"arraybuffer"));return this.decoderPending=Promise.all(Q).then((Z)=>{let W=Z[0];if(!J)this.decoderConfig.wasmBinary=Z[1];let K=FF.toString(),H=["/* draco decoder */",W,"","/* worker */",K.substring(K.indexOf("{")+1,K.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([H]))}),this.decoderPending}_getWorker(J,Q){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let Z=new Worker(this.workerSourceURL);Z._callbacks={},Z._taskCosts={},Z._taskLoad=0,Z.postMessage({type:"init",decoderConfig:this.decoderConfig}),Z.onmessage=function(W){let K=W.data;switch(K.type){case"decode":Z._callbacks[K.id].resolve(K);break;case"error":Z._callbacks[K.id].reject(K);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+K.type+'"')}},this.workerPool.push(Z)}else this.workerPool.sort(function(Z,W){return Z._taskLoad>W._taskLoad?-1:1});let $=this.workerPool[this.workerPool.length-1];return $._taskCosts[J]=Q,$._taskLoad+=Q,$})}_releaseTask(J,Q){J._taskLoad-=J._taskCosts[Q],delete J._callbacks[Q],delete J._taskCosts[Q]}debug(){console.log("Task load: ",this.workerPool.map((J)=>J._taskLoad))}dispose(){for(let J=0;J<this.workerPool.length;++J)this.workerPool[J].terminate();if(this.workerPool.length=0,this.workerSourceURL!=="")URL.revokeObjectURL(this.workerSourceURL);return this}}function FF(){let J,Q;onmessage=function(H){let Y=H.data;switch(Y.type){case"init":J=Y.decoderConfig,Q=new Promise(function(G){J.onModuleLoaded=function(N){G({draco:N})},DracoDecoderModule(J)});break;case"decode":let{buffer:X,taskConfig:U}=Y;Q.then((G)=>{let N=G.draco,E=new N.Decoder;try{let q=$(N,E,new Int8Array(X),U),R=q.attributes.map((D)=>D.array.buffer);if(q.index)R.push(q.index.array.buffer);self.postMessage({type:"decode",id:Y.id,geometry:q},R)}catch(q){console.error(q),self.postMessage({type:"error",id:Y.id,error:q.message})}finally{N.destroy(E)}});break}};function $(H,Y,X,U){let{attributeIDs:G,attributeTypes:N}=U,E,q,R=Y.GetEncodedGeometryType(X);if(R===H.TRIANGULAR_MESH)E=new H.Mesh,q=Y.DecodeArrayToMesh(X,X.byteLength,E);else if(R===H.POINT_CLOUD)E=new H.PointCloud,q=Y.DecodeArrayToPointCloud(X,X.byteLength,E);else throw Error("THREE.DRACOLoader: Unexpected geometry type.");if(!q.ok()||E.ptr===0)throw Error("THREE.DRACOLoader: Decoding failed: "+q.error_msg());let D={index:null,attributes:[]};for(let F in G){let O=self[N[F]],k,_;if(U.useUniqueIDs)_=G[F],k=Y.GetAttributeByUniqueId(E,_);else{if(_=Y.GetAttributeId(E,H[G[F]]),_===-1)continue;k=Y.GetAttribute(E,_)}let B=W(H,Y,E,F,O,k);if(F==="color")B.vertexColorSpace=U.vertexColorSpace;D.attributes.push(B)}if(R===H.TRIANGULAR_MESH)D.index=Z(H,Y,E);return H.destroy(E),D}function Z(H,Y,X){let G=X.num_faces()*3,N=G*4,E=H._malloc(N);Y.GetTrianglesUInt32Array(X,N,E);let q=new Uint32Array(H.HEAPF32.buffer,E,G).slice();return H._free(E),{array:q,itemSize:1}}function W(H,Y,X,U,G,N){let E=X.num_points(),q=N.num_components(),R=K(H,G),D=q*G.BYTES_PER_ELEMENT,F=Math.ceil(D/4)*4,O=F/G.BYTES_PER_ELEMENT,k=E*D,_=E*F,B=H._malloc(k);Y.GetAttributeDataArrayForAllPoints(X,N,R,k,B);let I=new G(H.HEAPF32.buffer,B,k/G.BYTES_PER_ELEMENT),C;if(D===F)C=I.slice();else{C=new G(_/G.BYTES_PER_ELEMENT);let L=0;for(let z=0;z<E;z++){for(let j=0;j<q;j++)C[L+j]=I[z*q+j];L+=O}}return H._free(B),{name:U,count:E,itemSize:q,array:C,stride:O}}function K(H,Y){switch(Y){case Float32Array:return H.DT_FLOAT32;case Int8Array:return H.DT_INT8;case Int16Array:return H.DT_INT16;case Int32Array:return H.DT_INT32;case Uint8Array:return H.DT_UINT8;case Uint16Array:return H.DT_UINT16;case Uint32Array:return H.DT_UINT32}}}var W9=document.querySelector("canvas"),bW=document.querySelector("#status"),S7=document.querySelector("#toggle"),p8=matchMedia("(prefers-reduced-motion: reduce)"),T7=document.querySelector("#fire-audio"),Z$=document.querySelector("#sound");T7.volume=0.3;Z$.addEventListener("click",async()=>{if(T7.paused)try{await T7.play()}catch{Z$.textContent="Sound unavailable";return}else T7.pause();Z$.textContent=T7.paused?"Play fire sound":"Mute fire sound",Z$.setAttribute("aria-pressed",String(!T7.paused))});var A6;try{A6=new PW({canvas:W9,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{throw bW.textContent="3D preview is unavailable in this browser.",S7.hidden=!0,Error("WebGL unavailable")}A6.setPixelRatio(Math.min(devicePixelRatio,1.25));A6.outputColorSpace=cJ;var T6=new CQ,M8=new zJ(37,1,0.01,100);M8.position.set(0,1.7,-7.8);M8.lookAt(0,0,0);T6.add(new sQ(11389439,6508615,0.5));var wX=new C7(11783935,0.42);wX.position.set(-2,6,-4);T6.add(wX);var lW=new x8(16748856,5,4.2,2),y9=new dJ;T6.add(y9);y9.add(lW);var AX=new x8(16762747,1.8,2.2,2);y9.add(AX);var OF=Uint8Array.from(atob(window.ISLAND_GLB),(J)=>J.charCodeAt(0));window.ISLAND_GLB=null;var H$=new fW().setDecoderPath({js:window.DRACO_WRAPPER,wasm:window.DRACO_WASM}).setWorkerLimit(1),IX=new vW().setDRACOLoader(H$),RF,Y$,xW,P6,gW,o9=new dJ,CX=new S(-0.1,0,0),z6=new S,a9=document.querySelector(".backdrop"),W$=[{x:25,width:270},{x:630,width:300},{x:950,width:370},{x:1350,width:220}],r9=[],i9=[];function TX(J,Q){let $=J.sprite,Z=Math.floor(Math.random()*W$.length);if(Z===$)Z=(Z+1+Math.floor(Math.random()*(W$.length-1)))%W$.length;J.sprite=Z;let W=W$[Z];J.width=W.width,J.element.style.width=`${W.width}px`,J.element.style.backgroundPosition=`-${W.x}px -185px`;let K=Math.max(0,Math.min(a9.clientHeight*0.58-150,a9.clientHeight*0.35)),H=Q===void 0?Math.random():(i9[Q]+Math.random()*0.7)/r9.length;J.y=Math.round(K*H),J.speed=8+Math.random()*5}function LF(){let J=Math.max(3,Math.min(7,Math.ceil(a9.clientWidth/340)+1));if(r9.length!==J){a9.replaceChildren(),r9.length=0;for(let $=0;$<J;$++){let Z=document.createElement("span");Z.className="cloud",a9.append(Z),r9.push({element:Z,sprite:-1,x:0,y:0,width:0,speed:0})}let Q=()=>i9.slice(1).every(($,Z)=>Math.abs($-i9[Z])===1);do{i9=r9.map(($,Z)=>Z);for(let $=i9.length-1;$>0;$--){let Z=Math.floor(Math.random()*($+1));[i9[$],i9[Z]]=[i9[Z],i9[$]]}}while(Q());r9.forEach(($,Z)=>{TX($,Z),$.x=(Z+0.2)*(a9.clientWidth+350)/J-350})}else{let Q=Math.max(0,Math.min(a9.clientHeight*0.58-150,a9.clientHeight*0.35));r9.forEach(($)=>{$.y=Math.min($.y,Q)})}SX()}function SX(){r9.forEach((J)=>{J.element.style.transform=`translate3d(${J.x}px,${J.y}px,0)`})}function MF(J){let Q=a9.clientWidth;r9.forEach(($)=>{if($.x+=$.speed*J,$.x>Q)TX($),$.x=-$.width-30-Math.random()*120}),SX()}IX.parse(OF.buffer,"",(J)=>{let Q=new sJ().setFromObject(J.scene),$=Q.getCenter(new S),Z=Q.getSize(new S),W=4.8/Math.max(Z.x,Z.y,Z.z);J.scene.scale.setScalar(W),J.scene.position.copy($).multiplyScalar(-W),y9.add(J.scene),RF=J.scene;let K=window.FACE_GLB;if(window.FACE_GLB=null,K){let G=Uint8Array.from(atob(K),(N)=>N.charCodeAt(0));IX.parse(G.buffer,"",(N)=>{o9.add(N.scene),P6=N.scene,H$.dispose(),l8()},()=>{H$.dispose(),console.warn("Face details unavailable")})}else H$.dispose();AX.position.set(-0.3,-0.035,0.52).sub($).multiplyScalar(W),dW.position.y=(Q.min.y-$.y)*W+0.46;let H=J.scene.getObjectByName("model_part2_export");if(H?.material?.map)H.material=H.material.clone(),H.material.onBeforeCompile=(G)=>{G.vertexShader=G.vertexShader.replace("#include <common>",`#include <common>
varying vec3 lanternLocalPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
lanternLocalPosition = position;`),G.fragmentShader=G.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 lanternLocalPosition;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
    vec3 lp = lanternLocalPosition;
    float inLantern = step(-.36, lp.x) * step(lp.x, -.23) * step(-.115, lp.y) * step(lp.y, .01) * step(.45, lp.z) * step(lp.z, .59);
    vec3 pane = texture2D(map, vMapUv).rgb;
    float paneBrightness = dot(pane, vec3(.2126, .7152, .0722));
    totalEmissiveRadiance += inLantern * smoothstep(.42, .78, paneBrightness) * vec3(.8, .42, .12);
   `)};let Y=J.scene.getObjectByName("Anastasiia_trial_desk_export");if(Y?.material?.map)Y.material=Y.material.clone(),Y.material.onBeforeCompile=(G)=>{G.vertexShader=G.vertexShader.replace("#include <common>",`#include <common>
varying vec3 deskLocalPosition; varying vec3 deskLocalNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
deskLocalPosition = position; deskLocalNormal = normal;`),G.fragmentShader=G.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 deskLocalPosition; varying vec3 deskLocalNormal;`).replace("#include <map_fragment>",`#include <map_fragment>
    float top = step(-.34, deskLocalPosition.y) * step(deskLocalPosition.y, -.26) * smoothstep(.70, .95, abs(deskLocalNormal.y));
    float wood = smoothstep(-.2, .85, sin(deskLocalPosition.z * 310. + sin(deskLocalPosition.x * 39.) * 1.2));
    float warmSurface = smoothstep(.02, .12, diffuseColor.r - diffuseColor.b);
    diffuseColor.rgb *= 1. - top * warmSurface * wood * .10;
   `)};xW=["left","right"].map((G)=>J.scene.getObjectByName(`Anastasiia_trial_hand_${G}_export`)).filter(Boolean),J.scene.add(o9);for(let G of["chair","character","hand_left","hand_right"]){let N=J.scene.getObjectByName(`Anastasiia_trial_${G}_export`);if(N)o9.add(N)}let X=J.scene.getObjectByName("Anastasiia_trial_ground_export");if(X?.geometry?.attributes.position){let G=X.geometry.attributes.position,N=[];G.setUsage(V7);for(let E=0;E<G.count;E++){let q=G.getX(E),R=G.getY(E),D=G.getZ(E);if(q>-0.215&&q<0.015&&R>-0.455&&R<-0.3&&D>-0.015&&D<0.195)N.push(E,q,R,D)}gW={position:G,legs:N}}let U=J.scene.getObjectByName("Anastasiia_trial_character_export");if(U?.geometry?.attributes.position){let G=U.geometry.attributes.position;G.setUsage(V7);let N=[];for(let R=0;R<G.count;R++){let D=G.getX(R),F=G.getY(R),O=G.getZ(R),k=z9.smoothstep(F,-0.36,-0.3),_=z9.smoothstep(F,-0.235,-0.205);if(k>0.01)N.push({i:R,x:D,y:F,z:O,breath:k,head:_})}let E=new S(-0.094,-0.215,0.02),q=Z9.position.clone().divideScalar(W).add($);Y$={position:G,moving:N,neck:E,look:Math.sign(q.x-E.x)*0.55}}bW.hidden=!0,l8()},()=>{bW.textContent="Could not load the island."});var mW=new U9({transparent:!0,depthWrite:!1,side:yJ,uniforms:{uTime:{value:0},uHeight:{value:1}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform float uTime;uniform float uHeight;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*vec2(80.,14.);float a=atan(p.y,p.x);float d=length(p)/7.+.015*sin(a*4.+p.x*.35+uTime*.25)+.007*sin(a*9.-uTime*.5)+.005*sin(p.x*1.1-p.y*1.7+uTime*.4);float fadeDistance=length(vec2(p.x,p.y*mix(1.,.72,smoothstep(0.,2.,p.y))))/7.;float fade=1.-smoothstep(.45,1.,fadeDistance);float wave=sin(d*39.-uTime*1.15)*.5+.5;float lo=mix(.82,.94,.5+.5*sin(a*3.+d*5.-uTime*.3));float thin=smoothstep(lo,lo+.07,wave);vec3 c=mix(vec3(.045,.13,.23),vec3(.13,.29,.40),thin*.32);float edge=smoothstep(0.,.08,gl_FragCoord.y/uHeight);gl_FragColor=vec4(c,fade*edge*.9);}"}),dW=new _J(new h8(80,14),mW);dW.rotation.x=-Math.PI/2;T6.add(dW);var Z9=new dJ;y9.add(Z9);function jX(J,Q){let $=new F6;return $.moveTo(0,0),$.bezierCurveTo(-J*0.65,Q*0.13,-J*0.52,Q*0.55,-J*0.16,Q*0.7),$.bezierCurveTo(-J*0.18,Q*0.43,J*0.18,Q*0.52,0,Q),$.bezierCurveTo(J*0.52,Q*0.72,J*0.67,Q*0.23,J*0.38,Q*0.09),$.bezierCurveTo(J*0.23,0,J*0.1,0,0,0),new O6($)}var VF=jX(0.29,0.55),DF=jX(0.15,0.33),BF=new Y9({color:16742704,side:yJ}),kF=new Y9({color:16766058,side:yJ});for(let J of[0,Math.PI/2]){let Q=new _J(VF,BF);Q.rotation.y=J,Z9.add(Q);let $=new _J(DF,kF);$.rotation.y=J,$.position.y=0.02,$.position.z=0.004,Z9.add($)}Z9.position.set(0.3,-1.16,-0.5);lW.position.copy(Z9.position).add(new S(0,0.5,0));function zF(){let J=document.createElement("canvas");J.width=J.height=64;let Q=J.getContext("2d"),$=Q.createRadialGradient(32,32,1,32,32,32);return $.addColorStop(0,"rgba(203,210,216,.45)"),$.addColorStop(1,"rgba(170,186,203,0)"),Q.fillStyle=$,Q.fillRect(0,0,64,64),new bQ(J)}var _F=zF(),C6=[];for(let J=0;J<7;J++){let Q=new Y6({map:_F,transparent:!0,opacity:0.2,depthWrite:!1,color:11977425}),$=new TQ(Q);y9.add($),C6.push($)}var U$=10,X$=new Float32Array(U$*3),vX=new Float32Array(U$),w6=new RJ;w6.setAttribute("position",new UJ(X$,3).setUsage(V7));w6.setAttribute("aOpacity",new UJ(vX,1).setUsage(V7));var yX=new k7(w6,new U9({transparent:!0,depthWrite:!1,uniforms:{uPixelRatio:{value:Math.min(devicePixelRatio,1.25)}},vertexShader:"attribute float aOpacity; varying float vOpacity; uniform float uPixelRatio; void main(){vOpacity=aOpacity; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=7.*uPixelRatio*(5./-mv.z); gl_Position=projectionMatrix*mv;}",fragmentShader:"varying float vOpacity; void main(){float d=length(gl_PointCoord-vec2(.5)); float soft=1.-smoothstep(.2,.5,d); gl_FragColor=vec4(1.,.48,.12,vOpacity*soft);}"}));y9.add(yX);var CJ=0,I6=0,pW=0,L8=!1,uW=!0,aJ=null,G$=0,K$=new nJ,PF=new M9,_6=new S;function l8(){A6.render(T6,M8)}function hX(){LF();let{clientWidth:J,clientHeight:Q}=W9,$=W9.parentElement.clientHeight;if(!J||!Q||!$)return;A6.setSize(J,Q,!1),mW.uniforms.uHeight.value=W9.height,M8.aspect=J/$,M8.fov=z9.radToDeg(2*Math.atan(Math.tan(z9.degToRad(37)/2)*Math.max(1,1.1/M8.aspect))),M8.setViewOffset(J,$,0,-48,J,Q),M8.updateProjectionMatrix(),l8()}function fX(J){if(L8||!uW||document.hidden||p8.matches)return;if(pW=requestAnimationFrame(fX),J-I6<33.333333333333336)return;let Q=I6?Math.min((J-I6)/1000,0.1):0;if(I6=J,CJ+=Q,MF(Q),!aJ?.turning&&J>=G$)y9.rotation.y+=Q*0.075;mW.uniforms.uTime.value=CJ,lW.intensity=5+0.65*Math.sin(CJ*8.3)+0.3*Math.sin(CJ*13.7);for(let $=0;$<C6.length;$++){let Z=(CJ*0.1+$/C6.length)%1,W=C6[$];W.position.set(Z9.position.x+Math.sin(CJ*0.7+$*2)*0.1+Z*0.18,Z9.position.y+0.46+Z*2.9,Z9.position.z+Math.cos(CJ*0.5+$)*0.06);let K=0.24+Z*0.48;W.scale.set(K,K,1),W.material.opacity=0.48*Math.sin(Math.PI*Z)}for(let $=0;$<U$;$++){let Z=(CJ*0.12+$/U$)%1;X$[$*3]=Z9.position.x+Math.sin($*2.7+CJ*0.8)*(0.04+Z*0.13),X$[$*3+1]=Z9.position.y+0.28+Z*3,vX[$]=0.85*Math.sin(Math.PI*Z),X$[$*3+2]=Z9.position.z+Math.cos($*1.9+CJ*0.6)*(0.03+Z*0.09)}if(w6.attributes.position.needsUpdate=!0,w6.attributes.aOpacity.needsUpdate=!0,Y$){let{position:$,moving:Z,neck:W}=Y$,K=CJ%16,H=z9.smoothstep(K,9.5,10.6)*(1-z9.smoothstep(K,13,14.2)),Y=0.065*Math.sin(CJ*Math.PI*1.6)**2*(1-H),X=0.002*Math.sin(CJ*Math.PI*2/4.2);K$.setFromEuler(PF.set(Y,Y$.look*H,0,"YXZ"));for(let U of Z)_6.set(U.x,U.y,U.z).sub(W).applyQuaternion(K$).add(W),$.setXYZ(U.i,U.x+(_6.x-U.x)*U.head,U.y+(_6.y-U.y)*U.head+X*U.breath,U.z+(_6.z-U.z)*U.head);if($.needsUpdate=!0,P6)P6.quaternion.copy(K$),P6.position.copy(W).sub(_6.copy(W).applyQuaternion(K$)),P6.position.y+=X;if(xW)xW.forEach((U)=>{U.position.y=X})}if(o9.quaternion.setFromAxisAngle(r0.DEFAULT_UP,0.12*Math.sin(CJ*Math.PI*2/7)),o9.position.copy(CX).sub(z6.copy(CX).applyQuaternion(o9.quaternion)),o9.position.z+=0.03*(0.5-0.5*Math.cos(CJ*Math.PI*2/11)),o9.updateMatrix(),gW){let{position:$,legs:Z}=gW;for(let W=0;W<Z.length;W+=4)z6.set(Z[W+1],Z[W+2],Z[W+3]).applyMatrix4(o9.matrix),$.setXYZ(Z[W],z6.x,z6.y,z6.z);$.needsUpdate=!0}Z9.children.forEach(($,Z)=>{$.scale.y=0.9+0.13*Math.sin(CJ*7+Z*1.2),$.rotation.z=0.08*Math.sin(CJ*4+Z)}),l8()}function S6(){if(C6.forEach((J)=>{J.visible=!p8.matches}),yX.visible=!p8.matches,cancelAnimationFrame(pW),I6=0,!L8&&uW&&!document.hidden&&!p8.matches)pW=requestAnimationFrame(fX);else l8()}W9.addEventListener("pointerdown",(J)=>{if(!J.isPrimary||J.pointerType==="mouse"&&J.button!==0)return;aJ={id:J.pointerId,startX:J.clientX,startY:J.clientY,lastX:J.clientX,turning:!1}});W9.addEventListener("pointermove",(J)=>{if(!aJ||J.pointerId!==aJ.id)return;let Q=J.clientX-aJ.startX,$=J.clientY-aJ.startY;if(!aJ.turning){if(Math.abs(Q)<6||Math.abs(Q)<=Math.abs($))return;aJ.turning=!0,W9.setPointerCapture(J.pointerId)}y9.rotation.y+=(J.clientX-aJ.lastX)*0.012,aJ.lastX=J.clientX,G$=performance.now()+4000,l8()});function cW(J){if(!aJ||J.pointerId!==aJ.id)return;if(aJ.turning)G$=performance.now()+4000;aJ=null}W9.addEventListener("pointerup",cW);W9.addEventListener("pointercancel",cW);W9.addEventListener("lostpointercapture",cW);W9.addEventListener("keydown",(J)=>{if(J.key!=="ArrowLeft"&&J.key!=="ArrowRight")return;J.preventDefault(),y9.rotation.y+=J.key==="ArrowLeft"?-0.2:0.2,G$=performance.now()+4000,l8()});S7.addEventListener("click",()=>{L8=!L8,document.querySelector(".backdrop").classList.toggle("is-paused",L8),document.querySelector(".stage").classList.toggle("is-paused",L8),S7.textContent=L8?"Play animation":"Pause animation",S7.setAttribute("aria-pressed",String(L8)),S6()});p8.addEventListener("change",()=>{S7.hidden=p8.matches,S6()});document.addEventListener("visibilitychange",S6);if("IntersectionObserver"in window)new IntersectionObserver((J)=>{uW=J[0].isIntersecting,S6()}).observe(W9);window.addEventListener("resize",hX);S7.hidden=p8.matches;hX();S6();})();
