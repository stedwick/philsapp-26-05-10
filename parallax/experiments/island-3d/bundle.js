var UW="187";var GW=0,c6=1,NW=2;var d8=1,EW=2,z8=3,A8=0,vJ=1,yJ=2,a9=0,u8=1,n6=2,s6=3,i6=4,qW=5;var _8=100,FW=101,DW=102,OW=103,RW=104,MW=200,LW=201,kW=202,VW=203,BW=204,IW=205,zW=206,AW=207,_W=208,PW=209,CW=210,wW=211,TW=212,SW=213,jW=214,vW=0,yW=1,fW=2,o6=3,hW=4,bW=5,xW=6,gW=7,pW=0,mW=1,lW=2,Y9=0,a6=1,r6=2,t6=3,e6=4,JQ=5,QQ=6,$Q=7;var c8=301,P8=302,y7=303,f7=304,dW=1000,h7=1001,uW=1002,y9=1003,cW=1004;var n8=1005;var dJ=1006,b7=1007;var f9=1008;var eJ=1009,nW=1010,sW=1011,s8=1012,WQ=1013,h9=1014,B9=1015,X9=1016,ZQ=1017,KQ=1018,r9=1020,iW=35902,oW=35899,aW=1021,rW=1022,I9=1023,C8=1026,b9=1027,tW=1028,HQ=1029,t9=1030,YQ=1031;var XQ=1033,x7=33776,g7=33777,p7=33778,m7=33779,UQ=35840,GQ=35841,NQ=35842,EQ=35843,qQ=36196,FQ=37492,DQ=37496,OQ=37488,RQ=37489,l7=37490,MQ=37491,LQ=37808,kQ=37809,VQ=37810,BQ=37811,IQ=37812,zQ=37813,AQ=37814,_Q=37815,PQ=37816,CQ=37817,wQ=37818,TQ=37819,SQ=37820,jQ=37821,vQ=36492,yQ=36494,fQ=36495,hQ=36283,bQ=36284,d7=36285,xQ=36286;var gQ=0,eW=1,e9="",u7="srgb",pQ="srgb-linear",mQ="linear",e0="srgb";var JZ=512,QZ=513,$Z=514,lQ=515,WZ=516,ZZ=517,dQ=518,uQ=519;var cQ="300 es",nQ=2000;function OK(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function RK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function l8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function KZ(){let J=l8("canvas");return J.style.display="block",J}var p$={},I8=null;function sQ(...J){let Q="THREE."+J.shift();if(I8)I8("log",Q,...J);else console.log(Q,...J)}function HZ(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function w0(...J){J=HZ(J);let Q="THREE."+J.shift();if(I8)I8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function T0(...J){J=HZ(J);let Q="THREE."+J.shift();if(I8)I8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function m8(...J){let Q=J.join(" ");if(Q in p$)return;p$[Q]=!0,w0(...J)}function YZ(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var XZ={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class z9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var _J=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var I6=Math.PI/180,v7=180/Math.PI;function i8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(_J[J&255]+_J[J>>8&255]+_J[J>>16&255]+_J[J>>24&255]+"-"+_J[Q&255]+_J[Q>>8&255]+"-"+_J[Q>>16&15|64]+_J[Q>>24&255]+"-"+_J[$&63|128]+_J[$>>8&255]+"-"+_J[$>>16&255]+_J[$>>24&255]+_J[W&255]+_J[W>>8&255]+_J[W>>16&255]+_J[W>>24&255]).toLowerCase()}function u0(J,Q,$){return Math.max(Q,Math.min($,J))}function MK(J,Q){return(J%Q+Q)%Q}function z6(J,Q,$){return(1-$)*J+$*Q}function UZ(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function iQ(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function LK(J,Q){if(Q.constructor===Float32Array)return J;let $=iQ(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/$,-1)}function kK(J,Q){if(Q.constructor===Float32Array)return J;let $=iQ(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*$)}class b0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=u0(this.x,J.x,Q.x),this.y=u0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=u0(this.x,J,Q),this.y=u0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(u0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(u0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class A9{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let Y=$[W+0],X=$[W+1],U=$[W+2],D=$[W+3],q=Z[K+0],N=Z[K+1],O=Z[K+2],k=Z[K+3];if(D!==k||Y!==q||X!==N||U!==O){let I=Y*q+X*N+U*O+D*k;if(I<0)q=-q,N=-N,O=-O,k=-k,I=-I;let F=1-H;if(I<0.9995){let G=Math.acos(I),B=Math.sin(G);F=Math.sin(F*G)/B,H=Math.sin(H*G)/B,Y=Y*F+q*H,X=X*F+N*H,U=U*F+O*H,D=D*F+k*H}else{Y=Y*F+q*H,X=X*F+N*H,U=U*F+O*H,D=D*F+k*H;let G=1/Math.sqrt(Y*Y+X*X+U*U+D*D);Y*=G,X*=G,U*=G,D*=G}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=D}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],D=Z[K],q=Z[K+1],N=Z[K+2],O=Z[K+3];return J[Q]=H*O+U*D+Y*N-X*q,J[Q+1]=Y*O+U*q+X*D-H*N,J[Q+2]=X*O+U*N+H*q-Y*D,J[Q+3]=U*O-H*D-Y*q-X*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(W/2),D=H(Z/2),q=Y($/2),N=Y(W/2),O=Y(Z/2);switch(K){case"XYZ":this._x=q*U*D+X*N*O,this._y=X*N*D-q*U*O,this._z=X*U*O+q*N*D,this._w=X*U*D-q*N*O;break;case"YXZ":this._x=q*U*D+X*N*O,this._y=X*N*D-q*U*O,this._z=X*U*O-q*N*D,this._w=X*U*D+q*N*O;break;case"ZXY":this._x=q*U*D-X*N*O,this._y=X*N*D+q*U*O,this._z=X*U*O+q*N*D,this._w=X*U*D-q*N*O;break;case"ZYX":this._x=q*U*D-X*N*O,this._y=X*N*D+q*U*O,this._z=X*U*O-q*N*D,this._w=X*U*D+q*N*O;break;case"YZX":this._x=q*U*D+X*N*O,this._y=X*N*D+q*U*O,this._z=X*U*O-q*N*D,this._w=X*U*D-q*N*O;break;case"XZY":this._x=q*U*D-X*N*O,this._y=X*N*D-q*U*O,this._z=X*U*O+q*N*D,this._w=X*U*D+q*N*O;break;default:w0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],D=Q[10],q=$+H+D;if(q>0){let N=0.5/Math.sqrt(q+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(Z-X)*N,this._z=(K-W)*N}else if($>H&&$>D){let N=2*Math.sqrt(1+$-H-D);this._w=(U-Y)/N,this._x=0.25*N,this._y=(W+K)/N,this._z=(Z+X)/N}else if(H>D){let N=2*Math.sqrt(1+H-$-D);this._w=(Z-X)/N,this._x=(W+K)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+D-$-H);this._w=(K-W)/N,this._x=(Z+X)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(u0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+W*X-Z*Y,this._y=W*U+K*Y+Z*H-$*X,this._z=Z*U+K*X+$*Y-W*H,this._w=K*U-$*H-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(m$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(m$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*W-H*$),U=2*(H*Q-Z*W),D=2*(Z*$-K*Q);return this.x=Q+Y*X+K*D-H*U,this.y=$+Y*U+H*X-Z*D,this.z=W+Y*D+Z*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=u0(this.x,J.x,Q.x),this.y=u0(this.y,J.y,Q.y),this.z=u0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=u0(this.x,J,Q),this.y=u0(this.y,J,Q),this.z=u0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(u0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=W*Y-Z*H,this.y=Z*K-$*Y,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return A6.copy(this).projectOnVector(J),this.sub(A6)}reflect(J){return this.sub(A6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(u0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var A6=new x,m$=new A9;class S0{static{this.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X)}set(J,Q,$,W,Z,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],D=$[7],q=$[2],N=$[5],O=$[8],k=W[0],I=W[3],F=W[6],G=W[1],B=W[4],A=W[7],V=W[2],_=W[5],C=W[8];return Z[0]=K*k+H*G+Y*V,Z[3]=K*I+H*B+Y*_,Z[6]=K*F+H*A+Y*C,Z[1]=X*k+U*G+D*V,Z[4]=X*I+U*B+D*_,Z[7]=X*F+U*A+D*C,Z[2]=q*k+N*G+O*V,Z[5]=q*I+N*B+O*_,Z[8]=q*F+N*A+O*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*Z*U+$*H*Y+W*Z*X-W*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],D=U*K-H*X,q=H*Y-U*Z,N=X*Z-K*Y,O=Q*D+$*q+W*N;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let k=1/O;return J[0]=D*k,J[1]=(W*X-U*$)*k,J[2]=(H*$-W*K)*k,J[3]=q*k,J[4]=(U*Q-W*Y)*k,J[5]=(W*Z-H*Q)*k,J[6]=N*k,J[7]=($*Y-X*Q)*k,J[8]=(K*Q-$*Z)*k,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-W*X,W*Y,-W*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return m8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_6.makeScale(J,Q)),this}rotate(J){return m8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_6.makeRotation(-J)),this}translate(J,Q){return m8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var _6=new S0,l$=new S0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),d$=new S0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function VK(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=L9(Z.r),Z.g=L9(Z.g),Z.b=L9(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=B8(Z.r),Z.g=B8(Z.g),Z.b=B8(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[H].fromXYZ).multiply(this.spaces[K].toXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:l$,fromXYZ:d$,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:l$,fromXYZ:d$,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var l0=VK();function L9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function B8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var U8;class oQ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(U8===void 0)U8=l8("canvas");U8.width=J.width,U8.height=J.height;let W=U8.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=U8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=l8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=L9(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(L9(Q[$]/255)*255);else Q[$]=L9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return w0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var BK=0;class o8{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BK++}),this.uuid=i8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push(P6(W[K].image));else Z.push(P6(W[K]))}else Z=P6(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function P6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return oQ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return w0("Texture: Unable to serialize Texture."),{}}var IK=0,C6=new x;class VJ extends z9{constructor(J=VJ.DEFAULT_IMAGE,Q=VJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,Y=1009,X=VJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:IK++}),this.uuid=i8(),this.name="",this.source=new o8(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new b0(0,0),this.repeat=new b0(1,1),this.center=new b0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new S0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(C6).x}get height(){return this.source.getSize(C6).y}get depth(){return this.source.getSize(C6).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){w0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){w0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}VJ.DEFAULT_IMAGE=null;VJ.DEFAULT_MAPPING=300;VJ.DEFAULT_ANISOTROPY=1;class YJ{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],D=Y[8],q=Y[1],N=Y[5],O=Y[9],k=Y[2],I=Y[6],F=Y[10];if(Math.abs(U-q)<0.01&&Math.abs(D-k)<0.01&&Math.abs(O-I)<0.01){if(Math.abs(U+q)<0.1&&Math.abs(D+k)<0.1&&Math.abs(O+I)<0.1&&Math.abs(X+N+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let B=(X+1)/2,A=(N+1)/2,V=(F+1)/2,_=(U+q)/4,C=(D+k)/4,E=(O+I)/4;if(B>A&&B>V)if(B<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(B),W=_/$,Z=C/$;else if(A>V)if(A<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(A),$=_/W,Z=E/W;else if(V<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(V),$=C/Z,W=E/Z;return this.set($,W,Z,Q),this}let G=Math.sqrt((I-O)*(I-O)+(D-k)*(D-k)+(q-U)*(q-U));if(Math.abs(G)<0.001)G=1;return this.x=(I-O)/G,this.y=(D-k)/G,this.z=(q-U)/G,this.w=Math.acos((X+N+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=u0(this.x,J.x,Q.x),this.y=u0(this.y,J.y,Q.y),this.z=u0(this.z,J.z,Q.z),this.w=u0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=u0(this.x,J,Q),this.y=u0(this.y,J,Q),this.z=u0(this.z,J,Q),this.w=u0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(u0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aQ extends z9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new YJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new YJ(0,0,J,Q),this.textures=[];let W=$.count;for(let Z=0;Z<W;Z++)this.textures[Z]=new VJ({width:J,height:Q,depth:$.depth}),this.textures[Z].isRenderTargetTexture=!0,this.textures[Z].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new o8(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uJ extends aQ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class c7 extends VJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class rQ extends VJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class WJ{static{this.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,Y,X,U,D,q,N,O,k,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X,U,D,q,N,O,k,I)}set(J,Q,$,W,Z,K,H,Y,X,U,D,q,N,O,k,I){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=$,F[12]=W,F[1]=Z,F[5]=K,F[9]=H,F[13]=Y,F[2]=X,F[6]=U,F[10]=D,F[14]=q,F[3]=N,F[7]=O,F[11]=k,F[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new WJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/G8.setFromMatrixColumn(J,0).length(),Z=1/G8.setFromMatrixColumn(J,1).length(),K=1/G8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),D=Math.sin(Z);if(J.order==="XYZ"){let q=K*U,N=K*D,O=H*U,k=H*D;Q[0]=Y*U,Q[4]=-Y*D,Q[8]=X,Q[1]=N+O*X,Q[5]=q-k*X,Q[9]=-H*Y,Q[2]=k-q*X,Q[6]=O+N*X,Q[10]=K*Y}else if(J.order==="YXZ"){let q=Y*U,N=Y*D,O=X*U,k=X*D;Q[0]=q+k*H,Q[4]=O*H-N,Q[8]=K*X,Q[1]=K*D,Q[5]=K*U,Q[9]=-H,Q[2]=N*H-O,Q[6]=k+q*H,Q[10]=K*Y}else if(J.order==="ZXY"){let q=Y*U,N=Y*D,O=X*U,k=X*D;Q[0]=q-k*H,Q[4]=-K*D,Q[8]=O+N*H,Q[1]=N+O*H,Q[5]=K*U,Q[9]=k-q*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let q=K*U,N=K*D,O=H*U,k=H*D;Q[0]=Y*U,Q[4]=O*X-N,Q[8]=q*X+k,Q[1]=Y*D,Q[5]=k*X+q,Q[9]=N*X-O,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let q=K*Y,N=K*X,O=H*Y,k=H*X;Q[0]=Y*U,Q[4]=k-q*D,Q[8]=O*D+N,Q[1]=D,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=N*D+O,Q[10]=q-k*D}else if(J.order==="XZY"){let q=K*Y,N=K*X,O=H*Y,k=H*X;Q[0]=Y*U,Q[4]=-D,Q[8]=X*U,Q[1]=q*D+k,Q[5]=K*U,Q[9]=N*D-O,Q[2]=O*D-N,Q[6]=H*U,Q[10]=k*D+q}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(zK,J,AK)}lookAt(J,Q,$){let W=this.elements;if(bJ.subVectors(J,Q),bJ.lengthSq()===0)bJ.z=1;if(bJ.normalize(),C9.crossVectors($,bJ),C9.lengthSq()===0){if(Math.abs($.z)===1)bJ.x+=0.0001;else bJ.z+=0.0001;bJ.normalize(),C9.crossVectors($,bJ)}return C9.normalize(),q7.crossVectors(bJ,C9),W[0]=C9.x,W[4]=q7.x,W[8]=bJ.x,W[1]=C9.y,W[5]=q7.y,W[9]=bJ.y,W[2]=C9.z,W[6]=q7.z,W[10]=bJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],D=$[5],q=$[9],N=$[13],O=$[2],k=$[6],I=$[10],F=$[14],G=$[3],B=$[7],A=$[11],V=$[15],_=W[0],C=W[4],E=W[8],L=W[12],P=W[1],p=W[5],S=W[9],g=W[13],i=W[2],w=W[6],c=W[10],a=W[14],b=W[3],K0=W[7],u=W[11],t=W[15];return Z[0]=K*_+H*P+Y*i+X*b,Z[4]=K*C+H*p+Y*w+X*K0,Z[8]=K*E+H*S+Y*c+X*u,Z[12]=K*L+H*g+Y*a+X*t,Z[1]=U*_+D*P+q*i+N*b,Z[5]=U*C+D*p+q*w+N*K0,Z[9]=U*E+D*S+q*c+N*u,Z[13]=U*L+D*g+q*a+N*t,Z[2]=O*_+k*P+I*i+F*b,Z[6]=O*C+k*p+I*w+F*K0,Z[10]=O*E+k*S+I*c+F*u,Z[14]=O*L+k*g+I*a+F*t,Z[3]=G*_+B*P+A*i+V*b,Z[7]=G*C+B*p+A*w+V*K0,Z[11]=G*E+B*S+A*c+V*u,Z[15]=G*L+B*g+A*a+V*t,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],D=J[6],q=J[10],N=J[14],O=J[3],k=J[7],I=J[11],F=J[15],G=Y*N-X*q,B=H*N-X*D,A=H*q-Y*D,V=K*N-X*U,_=K*q-Y*U,C=K*D-H*U;return Q*(k*G-I*B+F*A)-$*(O*G-I*V+F*_)+W*(O*B-k*V+F*C)-Z*(O*A-k*_+I*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(Z*U-H*Y)+W*(Z*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],D=J[9],q=J[10],N=J[11],O=J[12],k=J[13],I=J[14],F=J[15],G=Q*H-$*K,B=Q*Y-W*K,A=Q*X-Z*K,V=$*Y-W*H,_=$*X-Z*H,C=W*X-Z*Y,E=U*k-D*O,L=U*I-q*O,P=U*F-N*O,p=D*I-q*k,S=D*F-N*k,g=q*F-N*I,i=G*g-B*S+A*p+V*P-_*L+C*E;if(i===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/i;return J[0]=(H*g-Y*S+X*p)*w,J[1]=(W*S-$*g-Z*p)*w,J[2]=(k*C-I*_+F*V)*w,J[3]=(q*_-D*C-N*V)*w,J[4]=(Y*P-K*g-X*L)*w,J[5]=(Q*g-W*P+Z*L)*w,J[6]=(I*A-O*C-F*B)*w,J[7]=(U*C-q*A+N*B)*w,J[8]=(K*S-H*P+X*E)*w,J[9]=($*P-Q*S-Z*E)*w,J[10]=(O*_-k*A+F*G)*w,J[11]=(D*A-U*_-N*G)*w,J[12]=(H*L-K*p-Y*E)*w,J[13]=(Q*p-$*L+W*E)*w,J[14]=(k*B-O*V-I*G)*w,J[15]=(U*V-D*B+q*G)*w,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,Y=J.z,X=Z*K,U=Z*H;return this.set(X*K+$,X*H-W*Y,X*Y+W*H,0,X*H+W*Y,U*H+$,U*Y-W*K,0,X*Y-W*H,U*Y+W*K,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=Z+Z,U=K+K,D=H+H,q=Z*X,N=Z*U,O=Z*D,k=K*U,I=K*D,F=H*D,G=Y*X,B=Y*U,A=Y*D,V=$.x,_=$.y,C=$.z;return W[0]=(1-(k+F))*V,W[1]=(N+A)*V,W[2]=(O-B)*V,W[3]=0,W[4]=(N-A)*_,W[5]=(1-(q+F))*_,W[6]=(I+G)*_,W[7]=0,W[8]=(O+B)*C,W[9]=(I-G)*C,W[10]=(1-(q+k))*C,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=G8.set(W[0],W[1],W[2]).length(),H=G8.set(W[4],W[5],W[6]).length(),Y=G8.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;aJ.copy(this);let X=1/K,U=1/H,D=1/Y;return aJ.elements[0]*=X,aJ.elements[1]*=X,aJ.elements[2]*=X,aJ.elements[4]*=U,aJ.elements[5]*=U,aJ.elements[6]*=U,aJ.elements[8]*=D,aJ.elements[9]*=D,aJ.elements[10]*=D,Q.setFromRotationMatrix(aJ),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),D=2*Z/($-W),q=(Q+J)/(Q-J),N=($+W)/($-W),O,k;if(Y)O=Z/(K-Z),k=K*Z/(K-Z);else if(H===2000)O=-(K+Z)/(K-Z),k=-2*K*Z/(K-Z);else if(H===2001)O=-K/(K-Z),k=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=q,X[12]=0,X[1]=0,X[5]=D,X[9]=N,X[13]=0,X[2]=0,X[6]=0,X[10]=O,X[14]=k,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),D=2/($-W),q=-(Q+J)/(Q-J),N=-($+W)/($-W),O,k;if(Y)O=1/(K-Z),k=K/(K-Z);else if(H===2000)O=-2/(K-Z),k=-(K+Z)/(K-Z);else if(H===2001)O=-1/(K-Z),k=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=q,X[1]=0,X[5]=D,X[9]=0,X[13]=N,X[2]=0,X[6]=0,X[10]=O,X[14]=k,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var G8=new x,aJ=new WJ,zK=new x(0,0,0),AK=new x(1,1,1),C9=new x,q7=new x,bJ=new x,u$=new WJ,c$=new A9;class V9{constructor(J=0,Q=0,$=0,W=V9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],Y=W[1],X=W[5],U=W[9],D=W[2],q=W[6],N=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(u0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(q,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-u0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,N),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-D,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(u0(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(-D,N),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-u0(D,-1,1)),Math.abs(D)<0.9999999)this._x=Math.atan2(q,N),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(u0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-D,Z);else this._x=0,this._y=Math.atan2(H,N);break;case"XZY":if(this._z=Math.asin(-u0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(q,X),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,N),this._y=0;break;default:w0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return u$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(u$,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return c$.setFromEuler(this),this.setFromQuaternion(c$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}V9.DEFAULT_ORDER="XYZ";class n7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var _K=0,n$=new x,N8=new A9,F9=new WJ,F7=new x,b8=new x,PK=new x,CK=new A9,s$=new x(1,0,0),i$=new x(0,1,0),o$=new x(0,0,1),a$={type:"added"},wK={type:"removed"},E8={type:"childadded",child:null},w6={type:"childremoved",child:null};class LJ extends z9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:_K++}),this.uuid=i8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=LJ.DEFAULT_UP.clone();let J=new x,Q=new V9,$=new A9,W=new x(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new WJ},normalMatrix:{value:new S0}}),this.matrix=new WJ,this.matrixWorld=new WJ,this.matrixAutoUpdate=LJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=LJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return N8.setFromAxisAngle(J,Q),this.quaternion.multiply(N8),this}rotateOnWorldAxis(J,Q){return N8.setFromAxisAngle(J,Q),this.quaternion.premultiply(N8),this}rotateX(J){return this.rotateOnAxis(s$,J)}rotateY(J){return this.rotateOnAxis(i$,J)}rotateZ(J){return this.rotateOnAxis(o$,J)}translateOnAxis(J,Q){return n$.copy(J).applyQuaternion(this.quaternion),this.position.add(n$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(s$,J)}translateY(J){return this.translateOnAxis(i$,J)}translateZ(J){return this.translateOnAxis(o$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(F9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)F7.copy(J);else F7.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),b8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)F9.lookAt(b8,F7,this.up);else F9.lookAt(F7,b8,this.up);if(this.quaternion.setFromRotationMatrix(F9),W)F9.extractRotation(W.matrixWorld),N8.setFromRotationMatrix(F9),this.quaternion.premultiply(N8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return T0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(a$),E8.child=J,this.dispatchEvent(E8),E8.child=null;else T0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(wK),w6.child=J,this.dispatchEvent(w6),w6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),F9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),F9.multiply(J.parent.matrixWorld);return J.applyMatrix4(F9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(a$),E8.child=J,this.dispatchEvent(E8),E8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(b8,J,PK),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(b8,CK,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let D=Y[X];Z(J.shapes,D)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(Z(J.materials,this.material[Y]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];W.animations.push(Z(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),D=K(J.shapes),q=K(J.skeletons),N=K(J.animations),O=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(D.length>0)$.shapes=D;if(q.length>0)$.skeletons=q;if(N.length>0)$.animations=N;if(O.length>0)$.nodes=O}return $.object=W,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}LJ.DEFAULT_UP=new x(0,1,0);LJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;LJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class v9 extends LJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var TK={type:"move"};class a8{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new v9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new v9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new v9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let k of J.hand.values()){let I=Q.getJointPose(k,$),F=this._getHandJoint(X,k);if(I!==null)F.matrix.fromArray(I.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=I.radius;F.visible=I!==null}let U=X.joints["index-finger-tip"],D=X.joints["thumb-tip"],q=U.position.distanceTo(D.position),N=0.02,O=0.005;if(X.inputState.pinching&&q>N+O)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&q<=N-O)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(TK)}}}if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new v9;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var GZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},w9={h:0,s:0,l:0},D7={h:0,s:0,l:0};function T6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class d0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,l0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=l0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,l0.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=l0.workingColorSpace){if(J=MK(J,1),Q=u0(Q,0,1),$=u0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=T6(K,Z,J+0.3333333333333333),this.g=T6(K,Z,J),this.b=T6(K,Z,J-0.3333333333333333)}return l0.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)w0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseFloat(Z[1]))/100,Math.min(100,parseFloat(Z[2]))/100,Math.min(100,parseFloat(Z[3]))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:w0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else w0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=GZ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else w0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=L9(J.r),this.g=L9(J.g),this.b=L9(J.b),this}copyLinearToSRGB(J){return this.r=B8(J.r),this.g=B8(J.g),this.b=B8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return l0.workingToColorSpace(PJ.copy(this),J),Math.round(u0(PJ.r*255,0,255))*65536+Math.round(u0(PJ.g*255,0,255))*256+Math.round(u0(PJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=l0.workingColorSpace){l0.workingToColorSpace(PJ.copy(this),Q);let{r:$,g:W,b:Z}=PJ,K=Math.max($,W,Z),H=Math.min($,W,Z),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let D=K-H;switch(X=U<=0.5?D/(K+H):D/(2-K-H),K){case $:Y=(W-Z)/D+(W<Z?6:0);break;case W:Y=(Z-$)/D+2;break;case Z:Y=($-W)/D+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=l0.workingColorSpace){return l0.workingToColorSpace(PJ.copy(this),Q),J.r=PJ.r,J.g=PJ.g,J.b=PJ.b,J}getStyle(J="srgb"){l0.workingToColorSpace(PJ.copy(this),J);let{r:Q,g:$,b:W}=PJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(w9),this.setHSL(w9.h+J,w9.s+Q,w9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(w9),J.getHSL(D7);let $=z6(w9.h,D7.h,Q),W=z6(w9.s,D7.s,Q),Z=z6(w9.l,D7.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var PJ=new d0;d0.NAMES=GZ;class s7 extends LJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new V9,this.environmentIntensity=1,this.environmentRotation=new V9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){return super.copy(J,Q),this.background=J.background!==null?J.background.clone():null,this.environment=J.environment!==null?J.environment.clone():null,this.fog=J.fog!==null?J.fog.clone():null,this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),this.overrideMaterial=J.overrideMaterial!==null?J.overrideMaterial.clone():null,this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var rJ=new x,D9=new x,S6=new x,O9=new x,q8=new x,F8=new x,r$=new x,j6=new x,v6=new x,y6=new x,f6=new YJ,h6=new YJ,b6=new YJ;class lJ{constructor(J=new x,Q=new x,$=new x){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),rJ.subVectors(J,Q),W.cross(rJ);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){rJ.subVectors(W,Q),D9.subVectors($,Q),S6.subVectors(J,Q);let K=rJ.dot(rJ),H=rJ.dot(D9),Y=rJ.dot(S6),X=D9.dot(D9),U=D9.dot(S6),D=K*X-H*H;if(D===0)return Z.set(0,0,0),null;let q=1/D,N=(X*Y-H*U)*q,O=(K*U-H*Y)*q;return Z.set(1-N-O,O,N)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,O9)===null)return!1;return O9.x>=0&&O9.y>=0&&O9.x+O9.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,Y){if(this.getBarycoord(J,Q,$,W,O9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,O9.x),Y.addScaledVector(K,O9.y),Y.addScaledVector(H,O9.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,K){return f6.setScalar(0),h6.setScalar(0),b6.setScalar(0),f6.fromBufferAttribute(J,Q),h6.fromBufferAttribute(J,$),b6.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(f6,Z.x),K.addScaledVector(h6,Z.y),K.addScaledVector(b6,Z.z),K}static isFrontFacing(J,Q,$,W){return rJ.subVectors($,Q),D9.subVectors(J,Q),rJ.cross(D9).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return rJ.subVectors(this.c,this.b),D9.subVectors(this.a,this.b),rJ.cross(D9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return lJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return lJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return lJ.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return lJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return lJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;q8.subVectors(W,$),F8.subVectors(Z,$),j6.subVectors(J,$);let Y=q8.dot(j6),X=F8.dot(j6);if(Y<=0&&X<=0)return Q.copy($);v6.subVectors(J,W);let U=q8.dot(v6),D=F8.dot(v6);if(U>=0&&D<=U)return Q.copy(W);let q=Y*D-U*X;if(q<=0&&Y>=0&&U<=0&&Y-U>0)return K=Y/(Y-U),Q.copy($).addScaledVector(q8,K);y6.subVectors(J,Z);let N=q8.dot(y6),O=F8.dot(y6);if(O>=0&&N<=O)return Q.copy(Z);let k=N*X-Y*O;if(k<=0&&X>=0&&O<=0)return H=X/(X-O),Q.copy($).addScaledVector(F8,H);let I=U*O-N*D;if(I<=0&&D-U>=0&&N-O>=0)return r$.subVectors(Z,W),H=(D-U)/(D-U+(N-O)),Q.copy(W).addScaledVector(r$,H);let F=1/(I+k+q);return K=k*F,H=q*F,Q.copy($).addScaledVector(q8,K).addScaledVector(F8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class J8{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(tJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(tJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=tJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,tJ);else tJ.fromBufferAttribute(Z,K);tJ.applyMatrix4(J.matrixWorld),this.expandByPoint(tJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();O7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();O7.copy($.boundingBox)}O7.applyMatrix4(J.matrixWorld),this.union(O7)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,tJ),tJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(x8),R7.subVectors(this.max,x8),D8.subVectors(J.a,x8),O8.subVectors(J.b,x8),R8.subVectors(J.c,x8),T9.subVectors(O8,D8),S9.subVectors(R8,O8),c9.subVectors(D8,R8);let Q=[0,-T9.z,T9.y,0,-S9.z,S9.y,0,-c9.z,c9.y,T9.z,0,-T9.x,S9.z,0,-S9.x,c9.z,0,-c9.x,-T9.y,T9.x,0,-S9.y,S9.x,0,-c9.y,c9.x,0];if(!x6(Q,D8,O8,R8,R7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!x6(Q,D8,O8,R8,R7))return!1;return M7.crossVectors(T9,S9),Q=[M7.x,M7.y,M7.z],x6(Q,D8,O8,R8,R7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,tJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(tJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return R9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),R9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),R9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),R9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),R9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),R9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),R9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),R9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(R9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var R9=[new x,new x,new x,new x,new x,new x,new x,new x],tJ=new x,O7=new J8,D8=new x,O8=new x,R8=new x,T9=new x,S9=new x,c9=new x,x8=new x,R7=new x,M7=new x,n9=new x;function x6(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){n9.fromArray(J,K);let Y=Z.x*Math.abs(n9.x)+Z.y*Math.abs(n9.y)+Z.z*Math.abs(n9.z),X=Q.dot(n9),U=$.dot(n9),D=W.dot(n9);if(Math.max(-Math.max(X,U,D),Math.min(X,U,D))>Y)return!1}return!0}var EJ=new x,L7=new b0,SK=0;class k9 extends z9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SK++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?iQ(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)L7.fromBufferAttribute(this,Q),L7.applyMatrix3(J),this.setXY(Q,L7.x,L7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix3(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix4(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyNormalMatrix(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.transformDirection(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),W=this._normalize(W),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):LK(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):kK(J,this.array)}}class i7 extends k9{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class o7 extends k9{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class HJ extends k9{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var jK=new J8,g8=new x,g6=new x;class r8{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else jK.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;g8.subVectors(J,this.center);let Q=g8.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(g8,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else g6.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(g8.copy(J.center).add(g6)),this.expandByPoint(g8.copy(J.center).sub(g6));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var vK=0,mJ=new WJ,p6=new LJ,M8=new x,xJ=new J8,p8=new J8,MJ=new x;class cJ extends z9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vK++}),this.uuid=i8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((OK(J))?o7:i7)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new S0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return mJ.makeRotationFromQuaternion(J),this.applyMatrix4(mJ),this}rotateX(J){return mJ.makeRotationX(J),this.applyMatrix4(mJ),this}rotateY(J){return mJ.makeRotationY(J),this.applyMatrix4(mJ),this}rotateZ(J){return mJ.makeRotationZ(J),this.applyMatrix4(mJ),this}translate(J,Q,$){return mJ.makeTranslation(J,Q,$),this.applyMatrix4(mJ),this}scale(J,Q,$){return mJ.makeScale(J,Q,$),this.applyMatrix4(mJ),this}lookAt(J){return p6.lookAt(J),p6.updateMatrix(),this.applyMatrix4(p6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(M8).negate(),this.translate(M8.x,M8.y,M8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new HJ($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)w0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new J8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){T0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(xJ.setFromBufferAttribute(Z),this.morphTargetsRelative)MJ.addVectors(this.boundingBox.min,xJ.min),this.boundingBox.expandByPoint(MJ),MJ.addVectors(this.boundingBox.max,xJ.max),this.boundingBox.expandByPoint(MJ);else this.boundingBox.expandByPoint(xJ.min),this.boundingBox.expandByPoint(xJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))T0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new r8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){T0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let $=this.boundingSphere.center;if(xJ.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(p8.setFromBufferAttribute(H),this.morphTargetsRelative)MJ.addVectors(xJ.min,p8.min),xJ.expandByPoint(MJ),MJ.addVectors(xJ.max,p8.max),xJ.expandByPoint(MJ);else xJ.expandByPoint(p8.min),xJ.expandByPoint(p8.max)}xJ.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)MJ.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(MJ));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(MJ.fromBufferAttribute(H,X),Y)M8.fromBufferAttribute(J,X),MJ.add(M8);W=Math.max(W,$.distanceToSquared(MJ))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))T0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){T0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new k9(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[],X=new Uint8Array($.count);for(let L=0;L<$.count;L++)H[L]=new x,Y[L]=new x;let U=new x,D=new x,q=new x,N=new b0,O=new b0,k=new b0,I=new x,F=new x;function G(L,P,p){X[L]=X[P]=X[p]=1,U.fromBufferAttribute($,L),D.fromBufferAttribute($,P),q.fromBufferAttribute($,p),N.fromBufferAttribute(Z,L),O.fromBufferAttribute(Z,P),k.fromBufferAttribute(Z,p),D.sub(U),q.sub(U),O.sub(N),k.sub(N);let S=1/(O.x*k.y-k.x*O.y);if(!isFinite(S))return;I.copy(D).multiplyScalar(k.y).addScaledVector(q,-O.y).multiplyScalar(S),F.copy(q).multiplyScalar(O.x).addScaledVector(D,-k.x).multiplyScalar(S),H[L].add(I),H[P].add(I),H[p].add(I),Y[L].add(F),Y[P].add(F),Y[p].add(F)}let B=this.groups;if(B.length===0)B=[{start:0,count:J.count}];for(let L=0,P=B.length;L<P;++L){let p=B[L],S=p.start,g=p.count;for(let i=S,w=S+g;i<w;i+=3)G(J.getX(i+0),J.getX(i+1),J.getX(i+2))}let A=new x,V=new x,_=new x,C=new x;function E(L){_.fromBufferAttribute(W,L),C.copy(_);let P=H[L];A.copy(P),A.sub(_.multiplyScalar(_.dot(P))).normalize(),V.crossVectors(C,P);let S=V.dot(Y[L])<0?-1:1;K.setXYZW(L,A.x,A.y,A.z,S)}for(let L=0,P=$.count;L<P;++L)if(X[L])E(L);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new k9(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let q=0,N=$.count;q<N;q++)$.setXYZ(q,0,0,0);let W=new x,Z=new x,K=new x,H=new x,Y=new x,X=new x,U=new x,D=new x;if(J)for(let q=0,N=J.count;q<N;q+=3){let O=J.getX(q+0),k=J.getX(q+1),I=J.getX(q+2);W.fromBufferAttribute(Q,O),Z.fromBufferAttribute(Q,k),K.fromBufferAttribute(Q,I),U.subVectors(K,Z),D.subVectors(W,Z),U.cross(D),H.fromBufferAttribute($,O),Y.fromBufferAttribute($,k),X.fromBufferAttribute($,I),H.add(U),Y.add(U),X.add(U),$.setXYZ(O,H.x,H.y,H.z),$.setXYZ(k,Y.x,Y.y,Y.z),$.setXYZ(I,X.x,X.y,X.z)}else for(let q=0,N=Q.count;q<N;q+=3)W.fromBufferAttribute(Q,q+0),Z.fromBufferAttribute(Q,q+1),K.fromBufferAttribute(Q,q+2),U.subVectors(K,Z),D.subVectors(W,Z),U.cross(D),$.setXYZ(q+0,U.x,U.y,U.z),$.setXYZ(q+1,U.x,U.y,U.z),$.setXYZ(q+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)MJ.fromBufferAttribute(J,Q),MJ.normalize(),J.setXYZ(Q,MJ.x,MJ.y,MJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:D}=H,q=new X.constructor(Y.length*U),N=0,O=0;for(let k=0,I=Y.length;k<I;k++){if(H.isInterleavedBufferAttribute)N=Y[k]*H.data.stride+H.offset;else N=Y[k]*U;for(let F=0;F<U;F++)q[O++]=X[N++]}return new k9(q,U,D)}if(this.index===null)return w0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new cJ,$=this.index.array,W=this.attributes;for(let H in W){let Y=W[H],X=J(Y,$);Q.setAttribute(H,X)}let Z=this.morphAttributes;for(let H in Z){let Y=[],X=Z[H];for(let U=0,D=X.length;U<D;U++){let q=X[U],N=J(q,$);Y.push(N)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let D=0,q=X.length;D<q;D++){let N=X[D];U.push(N.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],D=Z[X];for(let q=0,N=D.length;q<N;q++)U.push(D[q].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let D=K[X];this.addGroup(D.start,D.count,D.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var m6=new x,yK=new x,fK=new S0;class H9{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=m6.subVectors($,Q).cross(yK.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(m6),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||fK.getNormalMatrix(J),W=this.coplanarPoint(m6).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var hK=0;class Q8 extends z9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:hK++}),this.uuid=i8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new d0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){w0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){w0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)$.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)$.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let Y=Z[H];delete Y.metadata,K.push(Y)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new d0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new H9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new b0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new b0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var M9=new x,l6=new x,k7=new x,V7=new x;class tQ{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,M9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=M9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return M9.copy(this.origin).addScaledVector(this.direction,Q),M9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){l6.copy(J).add(Q).multiplyScalar(0.5),k7.copy(Q).sub(J).normalize(),V7.copy(this.origin).sub(l6);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(k7),H=V7.dot(this.direction),Y=-V7.dot(k7),X=V7.lengthSq(),U=Math.abs(1-K*K),D,q,N,O;if(U>0)if(D=K*Y-H,q=K*H-Y,O=Z*U,D>=0)if(q>=-O)if(q<=O){let k=1/U;D*=k,q*=k,N=D*(D+K*q+2*H)+q*(K*D+q+2*Y)+X}else q=Z,D=Math.max(0,-(K*q+H)),N=-D*D+q*(q+2*Y)+X;else q=-Z,D=Math.max(0,-(K*q+H)),N=-D*D+q*(q+2*Y)+X;else if(q<=-O)D=Math.max(0,-(-K*Z+H)),q=D>0?-Z:Math.min(Math.max(-Z,-Y),Z),N=-D*D+q*(q+2*Y)+X;else if(q<=O)D=0,q=Math.min(Math.max(-Z,-Y),Z),N=q*(q+2*Y)+X;else D=Math.max(0,-(K*Z+H)),q=D>0?Z:Math.min(Math.max(-Z,-Y),Z),N=-D*D+q*(q+2*Y)+X;else q=K>0?-Z:Z,D=Math.max(0,-(K*q+H)),N=-D*D+q*(q+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,D);if(W)W.copy(l6).addScaledVector(k7,q);return N}intersectSphere(J,Q){if(J.radius<0)return null;M9.subVectors(J.center,this.origin);let $=M9.dot(this.direction),W=M9.dot(M9)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,D=1/this.direction.z,q=this.origin;if(X>=0)$=(J.min.x-q.x)*X,W=(J.max.x-q.x)*X;else $=(J.max.x-q.x)*X,W=(J.min.x-q.x)*X;if(U>=0)Z=(J.min.y-q.y)*U,K=(J.max.y-q.y)*U;else Z=(J.max.y-q.y)*U,K=(J.min.y-q.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(D>=0)H=(J.min.z-q.z)*D,Y=(J.max.z-q.z)*D;else H=(J.max.z-q.z)*D,Y=(J.min.z-q.z)*D;if($>Y||H>W)return null;if(H>$||$!==$)$=H;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,M9)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,D=J.x-K.x,q=J.y-K.y,N=J.z-K.z,O=Q.x-K.x,k=Q.y-K.y,I=Q.z-K.z,F=$.x-K.x,G=$.y-K.y,B=$.z-K.z,A=Math.abs(Y),V=Math.abs(X),_=Math.abs(U),C,E,L,P,p,S,g,i,w,c,a,b;if(A>=V&&A>=_)if(L=Y,S=D,w=O,b=F,Y>=0)C=X,E=U,P=q,p=N,g=k,i=I,c=G,a=B;else C=U,E=X,P=N,p=q,g=I,i=k,c=B,a=G;else if(V>=_)if(L=X,S=q,w=k,b=G,X>=0)C=U,E=Y,P=N,p=D,g=I,i=O,c=B,a=F;else C=Y,E=U,P=D,p=N,g=O,i=I,c=F,a=B;else if(L=U,S=N,w=I,b=B,U>=0)C=Y,E=X,P=D,p=q,g=O,i=k,c=F,a=G;else C=X,E=Y,P=q,p=D,g=k,i=O,c=G,a=F;if(L===0)return null;let K0=C/L,u=E/L,t=1/L,$0=P-K0*S,V0=p-u*S,o=g-K0*w,Q0=i-u*w,L0=c-K0*b,_0=a-u*b,P0=L0*Q0-_0*o,k0=$0*_0-V0*L0,i0=o*V0-Q0*$0;if(W){if(P0<0||k0<0||i0<0)return null}else if((P0<0||k0<0||i0<0)&&(P0>0||k0>0||i0>0))return null;let x0=P0+k0+i0;if(x0===0)return null;let y0=t*(P0*S+k0*w+i0*b);if(x0>0?y0<0:y0>0)return null;return this.at(y0/x0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class w8 extends Q8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new d0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new V9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var t$=new WJ,s9=new tQ,B7=new r8,e$=new x,I7=new x,z7=new x,A7=new x,d6=new x,_7=new x,JW=new x,P7=new x;class J9 extends LJ{constructor(J=new cJ,Q=new w8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){_7.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=H[Y],D=Z[Y];if(U===0)continue;if(d6.fromBufferAttribute(D,J),K)_7.addScaledVector(d6,U);else _7.addScaledVector(d6.sub(Q),U)}Q.add(_7)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(B7.copy($.boundingSphere),B7.applyMatrix4(Z),s9.copy(J.ray).recast(J.near),B7.containsPoint(s9.origin)===!1){if(s9.intersectSphere(B7,e$)===null)return;if(s9.origin.distanceToSquared(e$)>(J.far-J.near)**2)return}if(t$.copy(Z).invert(),s9.copy(J.ray).applyMatrix4(t$),$.boundingBox!==null){if(s9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,s9)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,D=Z.attributes.normal,q=Z.groups,N=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let O=0,k=q.length;O<k;O++){let I=q[O],F=K[I.materialIndex],G=Math.max(I.start,N.start),B=Math.min(H.count,Math.min(I.start+I.count,N.start+N.count));for(let A=G,V=B;A<V;A+=3){let _=H.getX(A),C=H.getX(A+1),E=H.getX(A+2);if(W=C7(this,F,J,$,X,U,D,_,C,E),W)W.faceIndex=Math.floor(A/3),W.face.materialIndex=I.materialIndex,Q.push(W)}}else{let O=Math.max(0,N.start),k=Math.min(H.count,N.start+N.count);for(let I=O,F=k;I<F;I+=3){let G=H.getX(I),B=H.getX(I+1),A=H.getX(I+2);if(W=C7(this,K,J,$,X,U,D,G,B,A),W)W.faceIndex=Math.floor(I/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(K))for(let O=0,k=q.length;O<k;O++){let I=q[O],F=K[I.materialIndex],G=Math.max(I.start,N.start),B=Math.min(Y.count,Math.min(I.start+I.count,N.start+N.count));for(let A=G,V=B;A<V;A+=3){let _=A,C=A+1,E=A+2;if(W=C7(this,F,J,$,X,U,D,_,C,E),W)W.faceIndex=Math.floor(A/3),W.face.materialIndex=I.materialIndex,Q.push(W)}}else{let O=Math.max(0,N.start),k=Math.min(Y.count,N.start+N.count);for(let I=O,F=k;I<F;I+=3){let G=I,B=I+1,A=I+2;if(W=C7(this,K,J,$,X,U,D,G,B,A),W)W.faceIndex=Math.floor(I/3),Q.push(W)}}}}function bK(J,Q,$,W,Z,K,H,Y){let X;if(Q.side===1)X=W.intersectTriangle(H,K,Z,!0,Y);else X=W.intersectTriangle(Z,K,H,Q.side===0,Y);if(X===null)return null;P7.copy(Y),P7.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(P7);if(U<$.near||U>$.far)return null;return{distance:U,point:P7.clone(),object:J}}function C7(J,Q,$,W,Z,K,H,Y,X,U){J.getVertexPosition(Y,I7),J.getVertexPosition(X,z7),J.getVertexPosition(U,A7);let D=bK(J,Q,$,W,I7,z7,A7,JW);if(D){let q=new x;if(lJ.getBarycoord(JW,I7,z7,A7,q),Z)D.uv=lJ.getInterpolatedAttribute(Z,Y,X,U,q,new b0);if(K)D.uv1=lJ.getInterpolatedAttribute(K,Y,X,U,q,new b0);if(H){if(D.normal=lJ.getInterpolatedAttribute(H,Y,X,U,q,new x),D.normal.dot(W.direction)>0)D.normal.multiplyScalar(-1)}let N={a:Y,b:X,c:U,normal:new x,materialIndex:0};lJ.getNormal(I7,z7,A7,N.normal),D.face=N,D.barycoord=q}return D}class eQ extends VJ{constructor(J=null,Q=1,$=1,W,Z,K,H,Y,X=1003,U=1003,D,q){super(null,K,H,Y,X,U,W,Z,D,q);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var i9=new r8,xK=new b0(0.5,0.5),w7=new x;class o9{constructor(J=new H9,Q=new H9,$=new H9,W=new H9,Z=new H9,K=new H9){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],Y=Z[2],X=Z[3],U=Z[4],D=Z[5],q=Z[6],N=Z[7],O=Z[8],k=Z[9],I=Z[10],F=Z[11],G=Z[12],B=Z[13],A=Z[14],V=Z[15];if(W[0].setComponents(X-K,N-U,F-O,V-G).normalize(),W[1].setComponents(X+K,N+U,F+O,V+G).normalize(),W[2].setComponents(X+H,N+D,F+k,V+B).normalize(),W[3].setComponents(X-H,N-D,F-k,V-B).normalize(),$)W[4].setComponents(Y,q,I,A).normalize(),W[5].setComponents(X-Y,N-q,F-I,V-A).normalize();else if(W[4].setComponents(X-Y,N-q,F-I,V-A).normalize(),Q===2000)W[5].setComponents(X+Y,N+q,F+I,V+A).normalize();else if(Q===2001)W[5].setComponents(Y,q,I,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();i9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();i9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(i9)}intersectsSprite(J){i9.center.set(0,0,0);let Q=xK.distanceTo(J.center);return i9.radius=0.7071067811865476+Q,i9.applyMatrix4(J.matrixWorld),this.intersectsSphere(i9)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(w7.x=W.normal.x>0?J.max.x:J.min.x,w7.y=W.normal.y>0?J.max.y:J.min.y,w7.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(w7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var QW=new WJ;class a7{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,$=this._frustums;for(let W=0;W<Q.length;W++){let Z=Q[W];if(QW.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$[W]===void 0)$[W]=new o9;$[W].setFromProjectionMatrix(QW,Z.coordinateSystem,Z.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,$=J._frustums;for(let W=0;W<J._count;W++){if(Q[W]===void 0)Q[W]=new o9;Q[W].copy($[W])}return this._count=J._count,this}clone(){return new a7().copy(this)}}class r7 extends VJ{constructor(J=[],Q=301,$,W,Z,K,H,Y,X,U){super(J,Q,$,W,Z,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class t7 extends VJ{constructor(J,Q,$,W,Z,K,H,Y,X){super(J,Q,$,W,Z,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class x9 extends VJ{constructor(J,Q,$=1014,W,Z,K,H=1003,Y=1003,X,U=1026,D=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let q={width:J,height:Q,depth:D};super(q,W,Z,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new o8(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class e7 extends x9{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},D=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,Y,X);this.image=D,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class J6 extends VJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class g9 extends cJ{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let Y=[],X=[],U=[],D=[],q=0,N=0;O("z","y","x",-1,-1,$,Q,J,K,Z,0),O("z","y","x",1,-1,$,Q,-J,K,Z,1),O("x","z","y",1,1,J,$,Q,W,K,2),O("x","z","y",1,-1,J,$,-Q,W,K,3),O("x","y","z",1,-1,J,Q,$,W,Z,4),O("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new HJ(X,3)),this.setAttribute("normal",new HJ(U,3)),this.setAttribute("uv",new HJ(D,2));function O(k,I,F,G,B,A,V,_,C,E,L){let P=A/C,p=V/E,S=A/2,g=V/2,i=_/2,w=C+1,c=E+1,a=0,b=0,K0=new x;for(let u=0;u<c;u++){let t=u*p-g;for(let $0=0;$0<w;$0++){let V0=$0*P-S;K0[k]=V0*G,K0[I]=t*B,K0[F]=i,X.push(K0.x,K0.y,K0.z),K0[k]=0,K0[I]=0,K0[F]=_>0?1:-1,U.push(K0.x,K0.y,K0.z),D.push($0/C),D.push(1-u/E),a+=1}}for(let u=0;u<E;u++)for(let t=0;t<C;t++){let $0=q+t+w*u,V0=q+t+w*(u+1),o=q+(t+1)+w*(u+1),Q0=q+(t+1)+w*u;Y.push($0,V0,Q0),Y.push(V0,o,Q0),b+=6}H.addGroup(N,b,L),N+=b,q+=a}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new g9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class t8 extends cJ{constructor(J=1,Q=1,$=4,W=8,Z=1){super();this.type="CapsuleGeometry",this.parameters={radius:J,height:Q,capSegments:$,radialSegments:W,heightSegments:Z},Q=Math.max(0,Q),$=Math.max(1,Math.floor($)),W=Math.max(3,Math.floor(W)),Z=Math.max(1,Math.floor(Z));let K=[],H=[],Y=[],X=[],U=Q/2,D=Math.PI/2*J,q=Q,N=2*D+q,O=$*2+Z,k=W+1,I=new x,F=new x;for(let G=0;G<=O;G++){let B=0,A=0,V=0,_=0;if(G<=$){let L=G/$,P=L*Math.PI/2;A=-U-J*Math.cos(P),V=J*Math.sin(P),_=-J*Math.cos(P),B=L*D}else if(G<=$+Z){let L=(G-$)/Z;A=-U+L*Q,V=J,_=0,B=D+L*q}else{let L=(G-$-Z)/$,P=L*Math.PI/2;A=U+J*Math.sin(P),V=J*Math.cos(P),_=J*Math.sin(P),B=D+q+L*D}let C=Math.max(0,Math.min(1,B/N)),E=0;if(G===0)E=0.5/W;else if(G===O)E=-0.5/W;for(let L=0;L<=W;L++){let P=L/W,p=P*Math.PI*2,S=Math.sin(p),g=Math.cos(p);F.x=-V*g,F.y=A,F.z=V*S,H.push(F.x,F.y,F.z),I.set(-V*g,_,V*S),I.normalize(),Y.push(I.x,I.y,I.z),X.push(P+E,C)}if(G>0){let L=(G-1)*k;for(let P=0;P<W;P++){let p=L+P,S=L+P+1,g=G*k+P,i=G*k+P+1;K.push(p,S,g),K.push(S,i,g)}}}this.setIndex(K),this.setAttribute("position",new HJ(H,3)),this.setAttribute("normal",new HJ(Y,3)),this.setAttribute("uv",new HJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new t8(J.radius,J.height,J.capSegments,J.radialSegments,J.heightSegments)}}class $8 extends cJ{constructor(J=1,Q=1,$=1,W=32,Z=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:W,heightSegments:Z,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;W=Math.floor(W),Z=Math.floor(Z);let U=[],D=[],q=[],N=[],O=0,k=[],I=$/2,F=0;if(G(),K===!1){if(J>0)B(!0);if(Q>0)B(!1)}this.setIndex(U),this.setAttribute("position",new HJ(D,3)),this.setAttribute("normal",new HJ(q,3)),this.setAttribute("uv",new HJ(N,2));function G(){let A=new x,V=new x,_=0,C=(Q-J)/$;for(let E=0;E<=Z;E++){let L=[],P=E/Z,p=P*(Q-J)+J;for(let S=0;S<=W;S++){let g=S/W,i=g*Y+H,w=Math.sin(i),c=Math.cos(i);V.x=p*w,V.y=-P*$+I,V.z=p*c,D.push(V.x,V.y,V.z),A.set(w,C,c).normalize(),q.push(A.x,A.y,A.z),N.push(g,1-P),L.push(O++)}k.push(L)}for(let E=0;E<W;E++)for(let L=0;L<Z;L++){let P=k[L][E],p=k[L+1][E],S=k[L+1][E+1],g=k[L][E+1];if(J>0||L!==0)U.push(P,p,g),_+=3;if(Q>0||L!==Z-1)U.push(p,S,g),_+=3}X.addGroup(F,_,0),F+=_}function B(A){let V=O,_=new b0,C=new x,E=0,L=A===!0?J:Q,P=A===!0?1:-1;for(let S=1;S<=W;S++)D.push(0,I*P,0),q.push(0,P,0),N.push(0.5,0.5),O++;let p=O;for(let S=0;S<=W;S++){let i=S/W*Y+H,w=Math.cos(i),c=Math.sin(i);C.x=L*c,C.y=I*P,C.z=L*w,D.push(C.x,C.y,C.z),q.push(0,P,0),_.x=w*0.5+0.5,_.y=c*0.5*P+0.5,N.push(_.x,_.y),O++}for(let S=0;S<W;S++){let g=V+S,i=p+S;if(A===!0)U.push(i,i+1,g);else U.push(i+1,i,g);E+=3}X.addGroup(F,E,A===!0?1:2),F+=E}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new $8(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class T8 extends $8{constructor(J=1,Q=1,$=32,W=1,Z=!1,K=0,H=Math.PI*2){super(0,J,Q,$,W,Z,K,H);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:W,openEnded:Z,thetaStart:K,thetaLength:H}}static fromJSON(J){return new T8(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class Q6 extends cJ{constructor(J=[],Q=[],$=1,W=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:W};let Z=[],K=[];if(H(W),X($),U(),this.setAttribute("position",new HJ(Z,3)),this.setAttribute("normal",new HJ(Z.slice(),3)),this.setAttribute("uv",new HJ(K,2)),W===0)this.computeVertexNormals();else this.normalizeNormals();function H(G){let B=new x,A=new x,V=new x;for(let _=0;_<Q.length;_+=3)N(Q[_+0],B),N(Q[_+1],A),N(Q[_+2],V),Y(B,A,V,G)}function Y(G,B,A,V){let _=V+1,C=[];for(let E=0;E<=_;E++){C[E]=[];let L=G.clone().lerp(A,E/_),P=B.clone().lerp(A,E/_),p=_-E;for(let S=0;S<=p;S++)if(S===0&&E===_)C[E][S]=L;else C[E][S]=L.clone().lerp(P,S/p)}for(let E=0;E<_;E++)for(let L=0;L<2*(_-E)-1;L++){let P=Math.floor(L/2);if(L%2===0)q(C[E][P+1]),q(C[E+1][P]),q(C[E][P]);else q(C[E][P+1]),q(C[E+1][P+1]),q(C[E+1][P])}}function X(G){let B=new x;for(let A=0;A<Z.length;A+=3)B.x=Z[A+0],B.y=Z[A+1],B.z=Z[A+2],B.normalize().multiplyScalar(G),Z[A+0]=B.x,Z[A+1]=B.y,Z[A+2]=B.z}function U(){let G=new x;for(let B=0;B<Z.length;B+=3){G.x=Z[B+0],G.y=Z[B+1],G.z=Z[B+2];let A=I(G)/2/Math.PI+0.5,V=F(G)/Math.PI+0.5;K.push(A,1-V)}O(),D()}function D(){for(let G=0;G<K.length;G+=6){let B=K[G+0],A=K[G+2],V=K[G+4],_=Math.max(B,A,V),C=Math.min(B,A,V);if(_>0.9&&C<0.1){if(B<0.2)K[G+0]+=1;if(A<0.2)K[G+2]+=1;if(V<0.2)K[G+4]+=1}}}function q(G){Z.push(G.x,G.y,G.z)}function N(G,B){let A=G*3;B.x=J[A+0],B.y=J[A+1],B.z=J[A+2]}function O(){let G=new x,B=new x,A=new x,V=new x,_=new b0,C=new b0,E=new b0;for(let L=0,P=0;L<Z.length;L+=9,P+=6){G.set(Z[L+0],Z[L+1],Z[L+2]),B.set(Z[L+3],Z[L+4],Z[L+5]),A.set(Z[L+6],Z[L+7],Z[L+8]),_.set(K[P+0],K[P+1]),C.set(K[P+2],K[P+3]),E.set(K[P+4],K[P+5]),V.copy(G).add(B).add(A).divideScalar(3);let p=I(V);k(_,P+0,G,p),k(C,P+2,B,p),k(E,P+4,A,p)}}function k(G,B,A,V){if(V<0&&G.x===1)K[B]=G.x-1;if(A.x===0&&A.z===0)K[B]=V/2/Math.PI+0.5}function I(G){return Math.atan2(G.z,-G.x)}function F(G){return Math.atan2(-G.y,Math.sqrt(G.x*G.x+G.z*G.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Q6(J.vertices,J.indices,J.radius,J.detail)}}class e8 extends Q6{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,W=[-1,$,0,1,$,0,-1,-$,0,1,-$,0,0,-1,$,0,1,$,0,-1,-$,0,1,-$,$,0,-1,$,0,1,-$,0,-1,-$,0,1],Z=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(W,Z,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new e8(J.radius,J.detail)}}class p9 extends cJ{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(W),X=H+1,U=Y+1,D=J/H,q=Q/Y,N=[],O=[],k=[],I=[];for(let F=0;F<U;F++){let G=F*q-K;for(let B=0;B<X;B++){let A=B*D-Z;O.push(A,-G,0),k.push(0,0,1),I.push(B/H),I.push(1-F/Y)}}for(let F=0;F<Y;F++)for(let G=0;G<H;G++){let B=G+X*F,A=G+X*(F+1),V=G+1+X*(F+1),_=G+1+X*F;N.push(B,A,_),N.push(A,V,_)}this.setIndex(N),this.setAttribute("position",new HJ(O,3)),this.setAttribute("normal",new HJ(k,3)),this.setAttribute("uv",new HJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new p9(J.width,J.height,J.widthSegments,J.heightSegments)}}class J7 extends cJ{constructor(J=0.5,Q=1,$=32,W=1,Z=0,K=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:W,thetaStart:Z,thetaLength:K},$=Math.max(3,$),W=Math.max(1,W);let H=[],Y=[],X=[],U=[],D=J,q=(Q-J)/W,N=new x,O=new b0;for(let k=0;k<=W;k++){for(let I=0;I<=$;I++){let F=Z+I/$*K;N.x=D*Math.cos(F),N.y=D*Math.sin(F),Y.push(N.x,N.y,N.z),X.push(0,0,1),O.x=(N.x/Q+1)/2,O.y=(N.y/Q+1)/2,U.push(O.x,O.y)}D+=q}for(let k=0;k<W;k++){let I=k*($+1);for(let F=0;F<$;F++){let G=F+I,B=G,A=G+$+1,V=G+$+2,_=G+1;H.push(B,A,_),H.push(A,V,_)}}this.setIndex(H),this.setAttribute("position",new HJ(Y,3)),this.setAttribute("normal",new HJ(X,3)),this.setAttribute("uv",new HJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new J7(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}function W8(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if($W(Z))if(Z.isRenderTargetTexture)w0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if($W(Z[0])){let K=[];for(let H=0,Y=Z.length;H<Y;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function CJ(J){let Q={};for(let $=0;$<J.length;$++){let W=W8(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function $W(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function gK(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function J$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return l0.workingColorSpace}var NZ={clone:W8,merge:CJ},pK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _9 extends Q8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pK,this.fragmentShader=mK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=W8(J.uniforms),this.uniformsGroups=gK(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new d0().setHex(W.value);break;case"v2":this.uniforms[$].value=new b0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new x().fromArray(W.value);break;case"v4":this.uniforms[$].value=new YJ().fromArray(W.value);break;case"m3":this.uniforms[$].value=new S0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new WJ().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class Q$ extends _9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $6 extends Q8{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new d0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new d0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new b0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new V9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class $$ extends Q8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class W$ extends Q8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function L8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function T7(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class Z8{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];$:{J:{let K;Q:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break J}K=Q.length;break Q}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Z$ extends Z8{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],Y=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+W[1]-W[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,D=this._offsetNext,q=this._weightPrev,N=this._weightNext,O=($-Q)/(W-Q),k=O*O,I=k*O,F=-q*I+2*q*k-q*O,G=(1+q)*I+(-1.5-2*q)*k+(-0.5+q)*O+1,B=(-1-N)*I+(1.5+N)*k+0.5*O,A=N*I-N*k;for(let V=0;V!==H;++V)Z[V]=F*K[U+V]+G*K[X+V]+B*K[Y+V]+A*K[D+V];return Z}}class K$ extends Z8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(W-Q),D=1-U;for(let q=0;q!==H;++q)Z[q]=K[X+q]*D+K[Y+q]*U;return Z}}class H$ extends Z8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class Y$ extends Z8{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,D=this.outTangents;if(!U||!D){let O=($-Q)/(W-Q),k=1-O;for(let I=0;I!==H;++I)Z[I]=K[X+I]*k+K[Y+I]*O;return Z}let q=H*2,N=J-1;for(let O=0;O!==H;++O){let k=K[X+O],I=K[Y+O],F=N*q+O*2,G=D[F],B=D[F+1],A=J*q+O*2,V=U[A],_=U[A+1],C=dK($,Q,G,V,W);Z[O]=EZ(C,k,B,_,I)}return Z}}function EZ(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function lK(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function dK(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let Y=EZ(K,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=lK(K,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class nJ{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=L8(Q,this.TimeBufferType),this.values=L8($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:L8(J.times,Array),values:L8(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(T7(J.settings))$.settings={inTangents:L8(J.settings.inTangents,Array),outTangents:L8(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new H$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new K$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new Z$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new Y$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return w0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J;if(T7(this.settings))WW(this.settings.inTangents,J),WW(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(T7(this.settings))ZW(this.settings.inTangents,J),ZW(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)T0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)T0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){T0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){T0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(W!==void 0){if(RK(W))for(let H=0,Y=W.length;H!==Y;++H){let X=W[H];if(isNaN(X)){T0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!W){let D=H*$,q=D-$,N=D+$;for(let O=0;O!==$;++O){let k=Q[D+O];if(k!==Q[q+O]||k!==Q[N+O]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let D=H*$,q=K*$;for(let N=0;N!==$;++N)Q[q+N]=Q[D+N]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,T7(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function WW(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]+=Q}function ZW(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}nJ.prototype.ValueTypeName="";nJ.prototype.TimeBufferType=Float32Array;nJ.prototype.ValueBufferType=Float32Array;nJ.prototype.DefaultInterpolation=2301;class K8 extends nJ{constructor(J,Q,$){super(J,Q,$)}}K8.prototype.ValueTypeName="bool";K8.prototype.ValueBufferType=Array;K8.prototype.DefaultInterpolation=2300;K8.prototype.InterpolantFactoryMethodLinear=void 0;K8.prototype.InterpolantFactoryMethodSmooth=void 0;class X$ extends nJ{constructor(J,Q,$,W){super(J,Q,$,W)}}X$.prototype.ValueTypeName="color";class U$ extends nJ{constructor(J,Q,$,W){super(J,Q,$,W)}}U$.prototype.ValueTypeName="number";class G$ extends Z8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(W-Q),X=J*H;for(let U=X+H;X!==U;X+=4)A9.slerpFlat(Z,0,K,X-H,K,X,Y);return Z}}class W6 extends nJ{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new G$(this.times,this.values,this.getValueSize(),J)}}W6.prototype.ValueTypeName="quaternion";W6.prototype.InterpolantFactoryMethodSmooth=void 0;class H8 extends nJ{constructor(J,Q,$){super(J,Q,$)}}H8.prototype.ValueTypeName="string";H8.prototype.ValueBufferType=Array;H8.prototype.DefaultInterpolation=2300;H8.prototype.InterpolantFactoryMethodLinear=void 0;H8.prototype.InterpolantFactoryMethodSmooth=void 0;class N$ extends nJ{constructor(J,Q,$,W){super(J,Q,$,W)}}N$.prototype.ValueTypeName="vector";class E${constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,D){return X.push(U,D),this},this.removeHandler=function(U){let D=X.indexOf(U);if(D!==-1)X.splice(D,2);return this},this.getHandler=function(U){for(let D=0,q=X.length;D<q;D+=2){let N=X[D],O=X[D+1];if(N.global)N.lastIndex=0;if(N.test(U))return O}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var qZ=new E$;class q${constructor(J){if(this.manager=J!==void 0?J:qZ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}q$.DEFAULT_MATERIAL_NAME="__DEFAULT";class Q7 extends LJ{static registerNode(J){this.prototype._lightNode=J}constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new d0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class Z6 extends Q7{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(LJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new d0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var u6=new WJ,KW=new x,HW=new x;class K6{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new b0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new WJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new o9,this._frameExtents=new b0(1,1),this._viewportCount=1,this._viewports=[new YJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;KW.setFromMatrixPosition(J.matrixWorld),Q.position.copy(KW),HW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(HW),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){u6.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(u6,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(u6)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.mapType=J.mapType,this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.mapType=this.mapType,J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var S7=new x,j7=new A9,K9=new x;class H6 extends LJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new WJ,this.projectionMatrix=new WJ,this.projectionMatrixInverse=new WJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(S7,j7,K9),K9.x===1&&K9.y===1&&K9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(S7,j7,K9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(S7,j7,K9),K9.x===1&&K9.y===1&&K9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(S7,j7,K9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var j9=new x,YW=new b0,XW=new b0;class gJ extends H6{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=v7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(I6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return v7*2*Math.atan(Math.tan(I6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){j9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(j9.x,j9.y).multiplyScalar(-J/j9.z),j9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(j9.x,j9.y).multiplyScalar(-J/j9.z)}getViewSize(J,Q){return this.getViewBounds(J,YW,XW),Q.subVectors(XW,YW)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(I6*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;Z+=K.offsetX*W/Y,Q-=K.offsetY*$/X,W*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class FZ extends K6{constructor(){super(new gJ(90,1,0.5,500));this.isPointLightShadow=!0}}class Y6 extends Q7{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new FZ}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class S8 extends H6{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,K=Z+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class DZ extends K6{constructor(){super(new S8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class $7 extends Q7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(LJ.DEFAULT_UP),this.updateMatrix(),this.target=new LJ,this.shadow=new DZ}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}var k8=-90,V8=1;class W7 extends LJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new gJ(k8,V8,J,Q);W.layers=this.layers,this.add(W);let Z=new gJ(k8,V8,J,Q);Z.layers=this.layers,this.add(Z);let K=new gJ(k8,V8,J,Q);K.layers=this.layers,this.add(K);let H=new gJ(k8,V8,J,Q);H.layers=this.layers,this.add(H);let Y=new gJ(k8,V8,J,Q);Y.layers=this.layers,this.add(Y);let X=new gJ(k8,V8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,Y,X,U]=this.children,D=J.getRenderTarget(),q=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let k=$.texture.mipmapsAutoUpdate;$.texture.mipmapsAutoUpdate=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.mipmapsAutoUpdate=k,J.setRenderTarget($,5,W),I&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(D,q,N),J.xr.enabled=O,$.texture.needsPMREMUpdate=!0}}class F$ extends gJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var D$="\\[\\]\\.:\\/",uK=new RegExp("["+D$+"]","g"),O$="[^"+D$+"]",cK="[^"+D$.replace("\\.","")+"]",nK=/((?:WC+[\/:])*)/.source.replace("WC",O$),sK=/(WCOD+)?/.source.replace("WCOD",cK),iK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",O$),oK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",O$),aK=new RegExp("^"+nK+sK+iK+oK+"$"),rK=["material","materials","bones","map"];class OZ{constructor(J,Q,$){let W=$||o0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class o0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||o0.parseTrackName(Q),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new o0(J,Q,$);else return new o0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(uK,"")}static parseTrackName(J){let Q=aK.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(rK.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=o0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){w0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){T0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){T0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){T0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){T0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){T0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){T0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){T0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[W];if(K===void 0){let X=Q.nodeName;T0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){T0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){T0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=OZ;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aG=new Float32Array(1);class RZ{static{this.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}function R$(J,Q,$,W){let Z=tK(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function tK(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)w0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function gZ(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function eK(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:D}=Y,q=U.byteLength,N=J.createBuffer();J.bindBuffer(X,N),J.bufferData(X,U,D),Y.onUploadCallback();let O;if(U instanceof Float32Array)O=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)O=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)O=J.SHORT;else if(U instanceof Uint32Array)O=J.UNSIGNED_INT;else if(U instanceof Int32Array)O=J.INT;else if(U instanceof Int8Array)O=J.BYTE;else if(U instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:O,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:q}}function W(Y,X,U){let{array:D,updateRanges:q}=X;if(J.bindBuffer(U,Y),q.length===0)J.bufferSubData(U,0,D);else{q.sort((O,k)=>O.start-k.start);let N=0;for(let O=1;O<q.length;O++){let k=q[N],I=q[O];if(I.start<=k.start+k.count+1)k.count=Math.max(k.count,I.start+I.count-k.start);else++N,q[N]=I}q.length=N+1;for(let O=0,k=q.length;O<k;O++){let I=q[O];J.bufferSubData(U,I.start*D.BYTES_PER_ELEMENT,D,I.start,I.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let D=Q.get(Y);if(!D||D.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:K,update:H}}var JH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QH=`#ifdef USE_ALPHAHASH
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
#endif`,$H=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HH=`#ifdef USE_AOMAP
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
#endif`,YH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XH=`#ifdef USE_BATCHING
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
#endif`,UH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EH=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qH=`#ifdef USE_IRIDESCENCE
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
#endif`,FH=`#ifdef USE_BUMPMAP
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
#endif`,DH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,IH=`#define PI 3.141592653589793
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
} // validated`,zH=`vec3 transformedNormal = objectNormal;
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
#endif`,AH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_H=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wH="gl_FragColor = linearToOutputTexel( gl_FragColor );",TH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SH=`#ifdef USE_ENVMAP
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
#endif`,jH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vH=`#ifdef USE_ENVMAP
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
#endif`,yH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fH=`#ifdef USE_ENVMAP
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
#endif`,hH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pH=`#ifdef USE_GRADIENTMAP
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
}`,mH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uH=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cH=`#ifdef USE_ENVMAP
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
#endif`,nH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aH=`PhysicalMaterial material;
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
#endif`,rH=`uniform sampler2D dfgLUT;
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
}`,tH=`
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
#endif`,eH=`#if defined( RE_IndirectDiffuse )
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
#endif`,JY=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QY=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,$Y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UY=`#if defined( USE_POINTS_UV )
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
#endif`,GY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qY=`#if defined( USE_MORPHCOLORS )
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
#endif`,FY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DY=`#ifdef USE_MORPHTARGETS
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
#endif`,OY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,MY=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BY=`#ifdef USE_NORMALMAP
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
#endif`,IY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_Y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xY=`float getShadowMask() {
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
}`,gY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pY=`#ifdef USE_SKINNING
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
#endif`,mY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lY=`#ifdef USE_SKINNING
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
#endif`,dY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nY=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sY=`#ifdef USE_TRANSMISSION
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
#endif`,iY=`#ifdef USE_TRANSMISSION
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
#endif`,oY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tY=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eY=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JX=`uniform sampler2D t2D;
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
}`,QX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$X=`uniform float backgroundBlurriness;
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
}`,WX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZX=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KX=`#include <common>
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
}`,HX=`#if DEPTH_PACKING == 3200
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
}`,YX=`#define DISTANCE
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
}`,XX=`#define DISTANCE
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
}`,UX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GX=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NX=`uniform float scale;
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
}`,EX=`uniform vec3 diffuse;
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
}`,qX=`#include <common>
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
}`,FX=`uniform vec3 diffuse;
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
}`,DX=`#define LAMBERT
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
}`,OX=`#define LAMBERT
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
}`,RX=`#define MATCAP
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
}`,MX=`#define MATCAP
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
}`,LX=`#define NORMAL
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
}`,kX=`#define NORMAL
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
}`,VX=`#define PHONG
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
}`,BX=`#define PHONG
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
}`,IX=`#define STANDARD
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
}`,zX=`#define STANDARD
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
}`,AX=`#define TOON
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
}`,_X=`#define TOON
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
}`,PX=`uniform float size;
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
}`,CX=`uniform vec3 diffuse;
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
}`,wX=`#include <common>
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
}`,TX=`uniform vec3 color;
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
}`,SX=`uniform float rotation;
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
}`,jX=`uniform vec3 diffuse;
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
}`,h0={alphahash_fragment:JH,alphahash_pars_fragment:QH,alphamap_fragment:$H,alphamap_pars_fragment:WH,alphatest_fragment:ZH,alphatest_pars_fragment:KH,aomap_fragment:HH,aomap_pars_fragment:YH,batching_pars_vertex:XH,batching_vertex:UH,begin_vertex:GH,beginnormal_vertex:NH,bsdfs:EH,iridescence_fragment:qH,bumpmap_pars_fragment:FH,clipping_planes_fragment:DH,clipping_planes_pars_fragment:OH,clipping_planes_pars_vertex:RH,clipping_planes_vertex:MH,color_fragment:LH,color_pars_fragment:kH,color_pars_vertex:VH,color_vertex:BH,common:IH,defaultnormal_vertex:zH,displacementmap_pars_vertex:AH,displacementmap_vertex:_H,emissivemap_fragment:PH,emissivemap_pars_fragment:CH,colorspace_fragment:wH,colorspace_pars_fragment:TH,envmap_fragment:SH,envmap_common_pars_fragment:jH,envmap_pars_fragment:vH,envmap_pars_vertex:yH,envmap_physical_pars_fragment:cH,envmap_vertex:fH,fog_vertex:hH,fog_pars_vertex:bH,fog_fragment:xH,fog_pars_fragment:gH,gradientmap_pars_fragment:pH,lightmap_pars_fragment:mH,lights_lambert_fragment:lH,lights_lambert_pars_fragment:dH,lights_pars_begin:uH,lights_toon_fragment:nH,lights_toon_pars_fragment:sH,lights_phong_fragment:iH,lights_phong_pars_fragment:oH,lights_physical_fragment:aH,lights_physical_pars_fragment:rH,lights_fragment_begin:tH,lights_fragment_maps:eH,lights_fragment_end:JY,lightprobes_pars_fragment:QY,logdepthbuf_fragment:$Y,logdepthbuf_pars_fragment:WY,logdepthbuf_pars_vertex:ZY,logdepthbuf_vertex:KY,map_fragment:HY,map_pars_fragment:YY,map_particle_fragment:XY,map_particle_pars_fragment:UY,metalnessmap_fragment:GY,metalnessmap_pars_fragment:NY,morphinstance_vertex:EY,morphcolor_vertex:qY,morphnormal_vertex:FY,morphtarget_pars_vertex:DY,morphtarget_vertex:OY,normal_fragment_begin:RY,normal_fragment_maps:MY,normal_pars_fragment:LY,normal_pars_vertex:kY,normal_vertex:VY,normalmap_pars_fragment:BY,clearcoat_normal_fragment_begin:IY,clearcoat_normal_fragment_maps:zY,clearcoat_pars_fragment:AY,iridescence_pars_fragment:_Y,opaque_fragment:PY,packing:CY,premultiplied_alpha_fragment:wY,project_vertex:TY,dithering_fragment:SY,dithering_pars_fragment:jY,roughnessmap_fragment:vY,roughnessmap_pars_fragment:yY,shadowmap_pars_fragment:fY,shadowmap_pars_vertex:hY,shadowmap_vertex:bY,shadowmask_pars_fragment:xY,skinbase_vertex:gY,skinning_pars_vertex:pY,skinning_vertex:mY,skinnormal_vertex:lY,specularmap_fragment:dY,specularmap_pars_fragment:uY,tonemapping_fragment:cY,tonemapping_pars_fragment:nY,transmission_fragment:sY,transmission_pars_fragment:iY,uv_pars_fragment:oY,uv_pars_vertex:aY,uv_vertex:rY,worldpos_vertex:tY,background_vert:eY,background_frag:JX,backgroundCube_vert:QX,backgroundCube_frag:$X,cube_vert:WX,cube_frag:ZX,depth_vert:KX,depth_frag:HX,distance_vert:YX,distance_frag:XX,equirect_vert:UX,equirect_frag:GX,linedashed_vert:NX,linedashed_frag:EX,meshbasic_vert:qX,meshbasic_frag:FX,meshlambert_vert:DX,meshlambert_frag:OX,meshmatcap_vert:RX,meshmatcap_frag:MX,meshnormal_vert:LX,meshnormal_frag:kX,meshphong_vert:VX,meshphong_frag:BX,meshphysical_vert:IX,meshphysical_frag:zX,meshtoon_vert:AX,meshtoon_frag:_X,points_vert:PX,points_frag:CX,shadow_vert:wX,shadow_frag:TX,sprite_vert:SX,sprite_frag:jX},E0={common:{diffuse:{value:new d0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new S0},alphaMap:{value:null},alphaMapTransform:{value:new S0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new S0}},envmap:{envMap:{value:null},envMapRotation:{value:new S0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new S0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new S0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new S0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new S0},normalScale:{value:new b0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new S0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new S0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new S0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new S0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new d0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new d0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new S0},alphaTest:{value:0},uvTransform:{value:new S0}},sprite:{diffuse:{value:new d0(16777215)},opacity:{value:1},center:{value:new b0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new S0},alphaMap:{value:null},alphaMapTransform:{value:new S0},alphaTest:{value:0}}},G9={basic:{uniforms:CJ([E0.common,E0.specularmap,E0.envmap,E0.aomap,E0.lightmap,E0.fog]),vertexShader:h0.meshbasic_vert,fragmentShader:h0.meshbasic_frag},lambert:{uniforms:CJ([E0.common,E0.specularmap,E0.envmap,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.fog,E0.lights,{emissive:{value:new d0(0)},envMapIntensity:{value:1}}]),vertexShader:h0.meshlambert_vert,fragmentShader:h0.meshlambert_frag},phong:{uniforms:CJ([E0.common,E0.specularmap,E0.envmap,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.fog,E0.lights,{emissive:{value:new d0(0)},specular:{value:new d0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:h0.meshphong_vert,fragmentShader:h0.meshphong_frag},standard:{uniforms:CJ([E0.common,E0.envmap,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.roughnessmap,E0.metalnessmap,E0.fog,E0.lights,{emissive:{value:new d0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:h0.meshphysical_vert,fragmentShader:h0.meshphysical_frag},toon:{uniforms:CJ([E0.common,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.gradientmap,E0.fog,E0.lights,{emissive:{value:new d0(0)}}]),vertexShader:h0.meshtoon_vert,fragmentShader:h0.meshtoon_frag},matcap:{uniforms:CJ([E0.common,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.fog,{matcap:{value:null}}]),vertexShader:h0.meshmatcap_vert,fragmentShader:h0.meshmatcap_frag},points:{uniforms:CJ([E0.points,E0.fog]),vertexShader:h0.points_vert,fragmentShader:h0.points_frag},dashed:{uniforms:CJ([E0.common,E0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:h0.linedashed_vert,fragmentShader:h0.linedashed_frag},depth:{uniforms:CJ([E0.common,E0.displacementmap]),vertexShader:h0.depth_vert,fragmentShader:h0.depth_frag},normal:{uniforms:CJ([E0.common,E0.bumpmap,E0.normalmap,E0.displacementmap,{opacity:{value:1}}]),vertexShader:h0.meshnormal_vert,fragmentShader:h0.meshnormal_frag},sprite:{uniforms:CJ([E0.sprite,E0.fog]),vertexShader:h0.sprite_vert,fragmentShader:h0.sprite_frag},background:{uniforms:{uvTransform:{value:new S0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:h0.background_vert,fragmentShader:h0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new S0}},vertexShader:h0.backgroundCube_vert,fragmentShader:h0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:h0.cube_vert,fragmentShader:h0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:h0.equirect_vert,fragmentShader:h0.equirect_frag},distance:{uniforms:CJ([E0.common,E0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:h0.distance_vert,fragmentShader:h0.distance_frag},shadow:{uniforms:CJ([E0.lights,E0.fog,{color:{value:new d0(0)},opacity:{value:1}}]),vertexShader:h0.shadow_vert,fragmentShader:h0.shadow_frag}};G9.physical={uniforms:CJ([G9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new S0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new S0},clearcoatNormalScale:{value:new b0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new S0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new S0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new S0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new S0},sheen:{value:0},sheenColor:{value:new d0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new S0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new S0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new S0},transmissionSamplerSize:{value:new b0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new S0},attenuationDistance:{value:0},attenuationColor:{value:new d0(0)},specularColor:{value:new d0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new S0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new S0},anisotropyVector:{value:new b0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new S0}}]),vertexShader:h0.meshphysical_vert,fragmentShader:h0.meshphysical_frag};var X6={r:0,b:0,g:0},vX=new WJ,pZ=new S0;pZ.set(-1,0,0,0,1,0,0,0,1);function yX(J,Q,$,W,Z,K){let H=new d0(0),Y=Z===!0?0:1,X,U,D=null,q=0,N=null;function O(B){let A=B.isScene===!0?B.background:null;if(A&&A.isTexture){let V=B.backgroundBlurriness>0;A=Q.get(A,V)}return A}function k(B){let A=!1,V=O(B);if(V===null)F(H,Y);else if(V&&V.isColor)F(V,1),A=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(_==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||A)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(B,A){let V=O(A);if(V&&V.isCubeTexture){if(U===void 0)U=new J9(new g9(1,1,1),new _9({name:"BackgroundCubeMaterial",uniforms:W8(G9.backgroundCube.uniforms),vertexShader:G9.backgroundCube.vertexShader,fragmentShader:G9.backgroundCube.fragmentShader,side:vJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(_,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(vX.makeRotationFromEuler(A.backgroundRotation)).transpose(),V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(pZ);if(U.material.toneMapped=l0.getTransfer(V.colorSpace)!==e0,D!==V||q!==V.version||N!==J.toneMapping)U.material.needsUpdate=!0,D=V,q=V.version,N=J.toneMapping;U.layers.enableAll(),B.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(X===void 0)X=new J9(new p9(2,2),new _9({name:"BackgroundMaterial",uniforms:W8(G9.background.uniforms),vertexShader:G9.background.vertexShader,fragmentShader:G9.background.fragmentShader,side:A8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=V,X.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,X.material.toneMapped=l0.getTransfer(V.colorSpace)!==e0,V.matrixAutoUpdate===!0)V.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(V.matrix),D!==V||q!==V.version||N!==J.toneMapping)X.material.needsUpdate=!0,D=V,q=V.version,N=J.toneMapping;X.layers.enableAll(),B.unshift(X,X.geometry,X.material,0,0,null)}}function F(B,A){B.getRGB(X6,J$(J)),$.buffers.color.setClear(X6.r,X6.g,X6.b,A,K)}function G(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(B,A=1){H.set(B),Y=A,F(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(B){Y=B,F(H,Y)},render:k,addToRenderList:I,dispose:G}}function fX(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=N(null),K=Z,H=!1;function Y(S,g,i,w,c){let a=!1,b=q(S,w,i,g);if(K!==b)K=b,U(K.object);if(a=O(S,w,i,c),a)k(S,w,i,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(a||H){if(H=!1,V(S,g,i,w),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function X(){return J.createVertexArray()}function U(S){return J.bindVertexArray(S)}function D(S){return J.deleteVertexArray(S)}function q(S,g,i,w){let c=w.wireframe===!0,a=W[g.id];if(a===void 0)a={},W[g.id]=a;let b=S.isInstancedMesh===!0?S.id:0,K0=a[b];if(K0===void 0)K0={},a[b]=K0;let u=K0[i.id];if(u===void 0)u={},K0[i.id]=u;let t=u[c];if(t===void 0)t=N(X()),u[c]=t;return t}function N(S){let g=[],i=[],w=[];for(let c=0;c<$;c++)g[c]=0,i[c]=0,w[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:i,attributeDivisors:w,object:S,attributes:{},index:null}}function O(S,g,i,w){let c=K.attributes,a=g.attributes,b=0,K0=i.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=c[u],V0=a[u];if(V0===void 0){if(u==="instanceMatrix"&&S.instanceMatrix)V0=S.instanceMatrix;if(u==="instanceColor"&&S.instanceColor)V0=S.instanceColor}if($0===void 0)return!0;if($0.attribute!==V0)return!0;if(V0&&$0.data!==V0.data)return!0;b++}if(K.attributesNum!==b)return!0;if(K.index!==w)return!0;return!1}function k(S,g,i,w){let c={},a=g.attributes,b=0,K0=i.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=a[u];if($0===void 0){if(u==="instanceMatrix"&&S.instanceMatrix)$0=S.instanceMatrix;if(u==="instanceColor"&&S.instanceColor)$0=S.instanceColor}let V0={};if(V0.attribute=$0,$0&&$0.data)V0.data=$0.data;c[u]=V0,b++}K.attributes=c,K.attributesNum=b,K.index=w}function I(){let S=K.newAttributes;for(let g=0,i=S.length;g<i;g++)S[g]=0}function F(S){G(S,0)}function G(S,g){let{newAttributes:i,enabledAttributes:w,attributeDivisors:c}=K;if(i[S]=1,w[S]===0)J.enableVertexAttribArray(S),w[S]=1;if(c[S]!==g)J.vertexAttribDivisor(S,g),c[S]=g}function B(){let{newAttributes:S,enabledAttributes:g}=K;for(let i=0,w=g.length;i<w;i++)if(g[i]!==S[i])J.disableVertexAttribArray(i),g[i]=0}function A(S,g,i,w,c,a,b){if(b===!0)J.vertexAttribIPointer(S,g,i,c,a);else J.vertexAttribPointer(S,g,i,w,c,a)}function V(S,g,i,w){I();let c=w.attributes,a=i.getAttributes(),b=g.defaultAttributeValues;for(let K0 in a){let u=a[K0];if(u.location>=0){let t=c[K0];if(t===void 0){if(K0==="instanceMatrix"&&S.instanceMatrix)t=S.instanceMatrix;if(K0==="instanceColor"&&S.instanceColor)t=S.instanceColor}if(t!==void 0){let{normalized:$0,itemSize:V0}=t,o=Q.get(t);if(o===void 0)continue;let{buffer:Q0,type:L0,bytesPerElement:_0}=o,P0=L0===J.INT||L0===J.UNSIGNED_INT||t.gpuType===WQ;if(t.isInterleavedBufferAttribute){let k0=t.data,i0=k0.isInterleavedBuffer===!0?k0.stride:k0.itemSize,x0=t.offset;if(k0.isInstancedInterleavedBuffer||k0.isInstancedBufferAttribute){for(let y0=0;y0<u.locationSize;y0++)G(u.location+y0,k0.meshPerAttribute);if(S.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=k0.meshPerAttribute*k0.count}else for(let y0=0;y0<u.locationSize;y0++)F(u.location+y0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let y0=0;y0<u.locationSize;y0++)A(u.location+y0,V0/u.locationSize,L0,$0,i0*_0,(x0+V0/u.locationSize*y0)*_0,P0)}else{if(t.isInstancedBufferAttribute){for(let k0=0;k0<u.locationSize;k0++)G(u.location+k0,t.meshPerAttribute);if(S.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=t.meshPerAttribute*t.count}else for(let k0=0;k0<u.locationSize;k0++)F(u.location+k0);J.bindBuffer(J.ARRAY_BUFFER,Q0);for(let k0=0;k0<u.locationSize;k0++)A(u.location+k0,V0/u.locationSize,L0,$0,V0*_0,V0/u.locationSize*k0*_0,P0)}}else if(b!==void 0){let $0=b[K0];if($0!==void 0)switch($0.length){case 2:J.vertexAttrib2fv(u.location,$0);break;case 3:J.vertexAttrib3fv(u.location,$0);break;case 4:J.vertexAttrib4fv(u.location,$0);break;default:J.vertexAttrib1fv(u.location,$0)}}}}B()}function _(){P();for(let S in W){let g=W[S];for(let i in g){let w=g[i];for(let c in w){let a=w[c];for(let b in a)D(a[b].object),delete a[b];delete w[c]}}delete W[S]}}function C(S){if(W[S.id]===void 0)return;let g=W[S.id];for(let i in g){let w=g[i];for(let c in w){let a=w[c];for(let b in a)D(a[b].object),delete a[b];delete w[c]}}delete W[S.id]}function E(S){for(let g in W){let i=W[g];for(let w in i){let c=i[w];if(c[S.id]===void 0)continue;let a=c[S.id];for(let b in a)D(a[b].object),delete a[b];delete c[S.id]}}}function L(S){for(let g in W){let i=W[g],w=S.isInstancedMesh===!0?S.id:0,c=i[w];if(c===void 0)continue;for(let a in c){let b=c[a];for(let K0 in b)D(b[K0].object),delete b[K0];delete c[a]}if(delete i[w],Object.keys(i).length===0)delete W[g]}}function P(){if(p(),H=!0,K===Z)return;K=Z,U(K.object)}function p(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:P,resetDefaultState:p,dispose:_,releaseStatesOfGeometry:C,releaseStatesOfObject:L,releaseStatesOfProgram:E,initAttributes:I,enableAttribute:F,disableUnusedAttributes:B}}function hX(J,Q,$){let W;function Z(X){W=X}function K(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function H(X,U,D){if(D===0)return;J.drawArraysInstanced(W,X,U,D),$.update(U,W,D)}function Y(X,U,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,D);let N=0;for(let O=0;O<D;O++)N+=U[O];$.update(N,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function bX(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let E=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(E){if(E!==I9&&W.convert(E)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(E){let L=E===X9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(E!==eJ&&E!==B9&&!L&&W.convert(E)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(E){if(E==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";E="mediump"}if(E==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",D=X(U);if(D!==U)w0("WebGLRenderer:",U,"not supported, using",D,"instead."),U=D;let q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),N=$.logarithmicDepthBuffer===!0&&q===!1;if($.reversedDepthBuffer===!0&&q===!1)w0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if($.logarithmicDepthBuffer===!0&&q===!0)w0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let O=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),G=J.getParameter(J.MAX_VERTEX_ATTRIBS),B=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),_=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:N,reversedDepthBuffer:q,maxTextures:O,maxVertexTextures:k,maxTextureSize:I,maxCubemapSize:F,maxAttributes:G,maxVertexUniforms:B,maxVaryings:A,maxFragmentUniforms:V,maxSamples:_,samples:C}}function xX(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new H9,Y=new S0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(q,N){let O=q.length!==0||N||W!==0||Z;return Z=N,W=q.length,O},this.beginShadows=function(){K=!0,D(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(q,N){$=D(q,N,0)},this.setState=function(q,N,O){let{clippingPlanes:k,clipIntersection:I,clipShadows:F}=q,G=J.get(q);if(!Z||k===null||k.length===0||K&&!F)if(K)D(null);else U();else{let B=K?0:W,A=B*4,V=G.clippingState||null;X.value=V,V=D(k,N,A,O);for(let _=0;_!==A;++_)V[_]=$[_];G.clippingState=V,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=B}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function D(q,N,O,k){let I=q!==null?q.length:0,F=null;if(I!==0){if(F=X.value,k!==!0||F===null){let G=O+I*4,B=N.matrixWorldInverse;if(Y.getNormalMatrix(B),F===null||F.length<G)F=new Float32Array(G);for(let A=0,V=O;A!==I;++A,V+=4)H.copy(q[A]).applyMatrix4(B,Y),H.normal.toArray(F,V),F[V+3]=H.constant}X.value=F,X.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,F}}class N6 extends uJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new r7(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new g9(5,5,5),Z=new _9({name:"CubemapFromEquirect",uniforms:W8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:vJ,blending:a9});Z.uniforms.tEquirect.value=Q;let K=new J9(W,Z),H=Q.minFilter;if(Q.minFilter===f9)Q.minFilter=dJ;return new W7(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}var MZ=256,gX=3,pX=20,mZ=256,lZ=16,mX=3,lX=new x,dX=new d0;class G6{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new W7(1,10,null),this._boxMesh=new J9(new g9(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=lX}=Z,Y=this._renderer;this._setSize(K);let X=this._allocateTarget(),U=this._getSourceTarget(!0);if(Q>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:D,autoClearColor:q,autoClearDepth:N,autoClearStencil:O}=Y,k=J.background;if(Y.autoClear=!0,Y.autoClearColor=!0,Y.autoClearDepth=!0,Y.autoClearStencil=!0,k===null)J.background=Y.getClearColor(dX);let I=new W7($,W,U);if(I.position.copy(H),I.update(Y,J),Y.autoClear=D,Y.autoClearColor=q,Y.autoClearDepth=N,Y.autoClearStencil=O,J.background=k,Q>0)U.texture.mipmapsAutoUpdate=!0,this._blur(X,Q);return this._applyPMREM(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=VZ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=kZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(MZ,UZ(J))}_fromTexture(J,Q){if(J.mapping===c8||J.mapping===P8)this._setSize(J.image.length===0?MZ:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let $=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM($),$}_allocateTarget(){let J=this._cubeSize,Q=LZ(J,!1,!1),$=Math.log2(J)-gX;for(let W=0;W<=$;W++)Q.texture.mipmaps.push({width:J>>W,height:J>>W});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,$=this._sourceTarget;if($===null||$.width!==Q||J&&$.depthBuffer===!1){if($!==null)$.dispose();this._sourceTarget=LZ(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,$){let W=this._boxMesh,Z=this._cubeCamera;W.material=$,Z.renderTarget=J,Z.activeMipmapLevel=Q;let K=J.width>>Q;J.viewport.set(0,0,K,K),Z.update(this._renderer,W),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===c8||J.mapping===P8){if(this._cubemapMaterial===null)this._cubemapMaterial=VZ();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=kZ();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=uX(),this._integrationMaterial=cX();let Q=this._cubeSize,$=J.texture.mipmaps.length-1,W=this._ggxMaterial.uniforms;W.envMap.value=this._sourceTarget.texture;let Z=this._integrationMaterial.uniforms;Z.envMap.value=this._sourceTarget.texture,Z.sourceLod.value=Math.log2(Q/lZ);for(let K=0;K<=$;K++){let H=G6.lodToRoughness(K,$);if(K>$-mX)Z.roughness.value=H,this._renderCube(J,K,this._integrationMaterial);else{let Y=H>0?Math.log2(Q)+0.5*Math.log2(6/(mZ*Math.pow(H,4)))+0.5:0;W.roughness.value=H,W.lodBias.value=Y,this._renderCube(J,K,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=nX();let $=this._blurMaterial,W=$.uniforms,Z=this._sourceTarget;W.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,W.envMap.value=Z.texture,this._renderCube(J,0,$),W.envMap.value=J.texture,this._renderCube(Z,0,$)}}function LZ(J,Q,$){return new N6(J,{minFilter:f9,generateMipmaps:Q,type:X9,colorSpace:pQ,depthBuffer:$})}function Y7(J,Q,$){return new _9({name:J,uniforms:Q,vertexShader:h0.cube_vert,fragmentShader:$,side:vJ,blending:a9,depthTest:!1,depthWrite:!1})}function uX(){return Y7("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mZ}u

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
	`)}function cX(){return Y7("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lZ}},`

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
	`)}function nX(){return Y7("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${pX}
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
	`)}function kZ(){return Y7("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function VZ(){return Y7("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sX(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(N,O=!1){if(N===null||N===void 0)return null;if(O)return H(N);return K(N)}function K(N){if(N&&N.isTexture){let O=N.mapping;if(O===y7||O===f7)if(Q.has(N)){let k=Q.get(N).texture;return Y(k,N.mapping)}else{let k=N.image;if(k&&k.height>0){let I=new N6(k.height);return I.fromEquirectangularTexture(J,N),Q.set(N,I),N.addEventListener("dispose",U),Y(I.texture,N.mapping)}else return null}}return N}function H(N){if(N&&N.isTexture&&N.isPMREMTexture!==!0){let O=N.mapping,k=O===y7||O===f7,I=O===c8||O===P8;if(k||I){let F=$.get(N),G=F!==void 0?F.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==G){if(W===null)W=new G6(J);return F=k?W.fromEquirectangular(N,F):W.fromCubemap(N,F),F.texture.pmremVersion=N.pmremVersion,$.set(N,F),F.texture}else if(F!==void 0)return F.texture;else{let B=N.image;if(k&&B&&B.height>0||I&&B&&X(B)){if(W===null)W=new G6(J);return F=k?W.fromEquirectangular(N):W.fromCubemap(N),F.texture.pmremVersion=N.pmremVersion,$.set(N,F),N.addEventListener("dispose",D),F.texture}else return null}}}return N}function Y(N,O){if(O===y7)N.mapping=c8;else if(O===f7)N.mapping=P8;return N}function X(N){let O=0,k=6;for(let I=0;I<k;I++)if(N[I]!==void 0)O++;return O===k}function U(N){let O=N.target;O.removeEventListener("dispose",U);let k=Q.get(O);if(k!==void 0)Q.delete(O),k.dispose()}function D(N){let O=N.target;O.removeEventListener("dispose",D);let k=$.get(O);if(k!==void 0)$.delete(O),k.dispose()}function q(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:q}}function iX(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)m8("WebGLRenderer: "+W+" extension not supported.");return Z}}}function oX(J,Q,$,W){let Z={},K=new WeakMap,H=new FinalizationRegistry((k)=>delete Z[k]);function Y(k){X(k.target)}function X(k){if(k.index!==null)Q.remove(k.index);for(let F in k.attributes)Q.remove(k.attributes[F]);k.removeEventListener("dispose",Y),delete Z[k.id],H.unregister(k);let I=K.get(k);if(I)Q.remove(I),K.delete(k);if(W.releaseStatesOfGeometry(k),k.isInstancedBufferGeometry===!0)delete k._maxInstanceCount;$.memory.geometries--}function U(k,I){if(Z[I.id]!==void 0)return I;return I.addEventListener("dispose",Y),Z[I.id]=new WeakRef(I),H.register(I,I.id,I),$.memory.geometries++,I}function D(k){let I=k.attributes;for(let F in I)Q.update(I[F],J.ARRAY_BUFFER)}function q(k){let I=k.index,F=k.attributes.position,G=0;if(F===void 0)return;let B=I!==null?I.array.length:F.array.length/3-1,V=new(F.count>=65535?o7:i7)(Math.ceil(B/3)*6,1),_=V.array;if(I!==null){let E=I.array;G=I.version;for(let L=0,P=0;L<B;L+=3){let p=E[L+0],S=E[L+1],g=E[L+2];_[P++]=p,_[P++]=S,_[P++]=S,_[P++]=g,_[P++]=g,_[P++]=p}}else{G=F.version;for(let E=0,L=0;E<B;E+=3){let P=E+0,p=E+1,S=E+2;_[L++]=P,_[L++]=p,_[L++]=p,_[L++]=S,_[L++]=S,_[L++]=P}}V.version=G;let C=K.get(k);if(C)Q.remove(C);K.set(k,V)}function N(k){let I=K.get(k);if(I){let F=k.index;if(F!==null){if(I.version<F.version)q(k)}}else q(k);return K.get(k)}function O(){for(let k in Z){let I=Z[k].deref();if(I!==void 0)X(I)}}return{get:U,update:D,getWireframeAttribute:N,dispose:O}}function aX(J,Q,$){let W;function Z(q){W=q}let K,H;function Y(q){K=q.type,H=q.bytesPerElement}function X(q,N){J.drawElements(W,N,K,q*H),$.update(N,W,1)}function U(q,N,O){if(O===0)return;J.drawElementsInstanced(W,N,K,q*H,O),$.update(N,W,O)}function D(q,N,O){if(O===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,N,0,K,q,0,O);let I=0;for(let F=0;F<O;F++)I+=N[F];$.update(I,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=D}function rX(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:T0("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function tX(J,Q,$){let W=new WeakMap,Z=new YJ;function K(H,Y,X){let U=H.morphTargetInfluences,D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,q=D!==void 0?D.length:0,N=W.get(Y);if(N===void 0||N.count!==q){let P=function(){E.dispose(),W.delete(Y),Y.removeEventListener("dispose",P)};if(N!==void 0)N.texture.dispose();let O=Y.morphAttributes.position!==void 0,k=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,F=Y.morphAttributes.position||[],G=Y.morphAttributes.normal||[],B=Y.morphAttributes.color||[],A=0;if(O===!0)A=1;if(k===!0)A=2;if(I===!0)A=3;let V=Y.attributes.position.count*A,_=1;if(V>Q.maxTextureSize)_=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let C=new Float32Array(V*_*4*q),E=new c7(C,V,_,q);E.type=B9,E.needsUpdate=!0;let L=A*4;for(let p=0;p<q;p++){let S=F[p],g=G[p],i=B[p],w=V*_*4*p;for(let c=0;c<S.count;c++){let a=c*L;if(O===!0)Z.fromBufferAttribute(S,c),C[w+a+0]=Z.x,C[w+a+1]=Z.y,C[w+a+2]=Z.z,C[w+a+3]=0;if(k===!0)Z.fromBufferAttribute(g,c),C[w+a+4]=Z.x,C[w+a+5]=Z.y,C[w+a+6]=Z.z,C[w+a+7]=0;if(I===!0)Z.fromBufferAttribute(i,c),C[w+a+8]=Z.x,C[w+a+9]=Z.y,C[w+a+10]=Z.z,C[w+a+11]=i.itemSize===4?Z.w:1}}N={count:q,texture:E,size:new b0(V,_)},W.set(Y,N),Y.addEventListener("dispose",P)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let O=0;for(let I=0;I<U.length;I++)O+=U[I];let k=Y.morphTargetsRelative?1:1-O;X.getUniforms().setValue(J,"morphTargetBaseInfluence",k),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:K}}function eX(J,Q,$,W,Z){let K=new WeakMap;function H(U){let D=Z.render.frame,q=U.geometry,N=Q.get(U,q);if(K.get(N)!==D)Q.update(N),K.set(N,D);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==D){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,D)}}if(U.isSkinnedMesh){let O=U.skeleton;if(K.get(O)!==D)O.update(),K.set(O,D)}return N}function Y(){K=new WeakMap}function X(U){let D=U.target;if(D.removeEventListener("dispose",X),W.releaseStatesOfObject(D),$.remove(D.instanceMatrix),D.instanceColor!==null)$.remove(D.instanceColor)}return{update:H,dispose:Y}}var JU={[a6]:"LINEAR_TONE_MAPPING",[r6]:"REINHARD_TONE_MAPPING",[t6]:"CINEON_TONE_MAPPING",[e6]:"ACES_FILMIC_TONE_MAPPING",[QQ]:"AGX_TONE_MAPPING",[$Q]:"NEUTRAL_TONE_MAPPING",[JQ]:"CUSTOM_TONE_MAPPING"};function QU(J,Q,$,W,Z,K){let H=new uJ(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=null,D=new cJ;D.setAttribute("position",new HJ([-1,3,0,-1,-1,0,3,-1,0],3)),D.setAttribute("uv",new HJ([0,2,0,0,2,0],2));let q=new Q$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),N=new J9(D,q),O=new S8(-1,1,1,-1,0,1),k=null,I=null,F=!1,G,B=null,A=[],V=!1;this.setSize=function(_,C){if(H.setSize(_,C),Y!==null)Y.setSize(_,C);if(X!==null)X.setSize(_,C);for(let E=0;E<A.length;E++){let L=A[E];if(L.setSize)L.setSize(_,C)}},this.setEffects=function(_){A=_,V=A.length>0&&A[0].isRenderPass===!0;let{width:C,height:E}=H;if(A.length>0&&Y===null)Y=new uJ(C,E,{type:X9,depthBuffer:!1,stencilBuffer:!1}),X=new uJ(C,E,{type:X9,depthBuffer:!1,stencilBuffer:!1});let L=Z===!0&&A.some((P)=>P.needsDepthTexture===!0);if(L!==(H.depthTexture!==null)){if(L===!0&&U===null){if(U=new x9(C,E),K===!0)U.format=b9,U.type=r9}H.dispose(),H.depthTexture=L?U:null,H.resolveDepthBuffer=L,H.storeMultisampledDepthBuffer=L}for(let P=0;P<A.length;P++){let p=A[P];if(p.setSize)p.setSize(C,E);if(L&&p.needsDepthTexture===!0&&p.setDepthTexture)p.setDepthTexture(U)}},this.begin=function(_,C){if(F)return!1;if(_.toneMapping===Y9&&A.length===0)return!1;if(B=C,C!==null){let{width:E,height:L}=C;if(H.width!==E||H.height!==L)this.setSize(E,L)}if(V===!1)_.setRenderTarget(H);return G=_.toneMapping,_.toneMapping=Y9,!0},this.hasRenderPass=function(){return V},this.end=function(_,C){_.toneMapping=G,F=!0;let E=H,L=Y;for(let P=0;P<A.length;P++){let p=A[P];if(p.enabled===!1)continue;if(p.render(_,L,E,C),p.needsSwap!==!1)E=L,L=L===Y?X:Y}if(k!==_.outputColorSpace||I!==_.toneMapping){if(k=_.outputColorSpace,I=_.toneMapping,q.defines={},l0.getTransfer(k)===e0)q.defines.SRGB_TRANSFER="";let P=JU[I];if(P)q.defines[P]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(B),_.render(N,O),B=null,F=!1},this.isCompositing=function(){return F},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();D.dispose(),q.dispose()}}var dZ=new VJ,uZ=new x9(1,1),cZ=new e7(1),nZ=new c7,sZ=new rQ,iZ=new r7,BZ=[],IZ=[],zZ=new Float32Array(16),AZ=new Float32Array(9),_Z=new Float32Array(4);function j8(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=BZ[Z];if(K===void 0)K=new Float32Array(Z),BZ[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function qJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function FJ(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function E6(J,Q){let $=IZ[Q];if($===void 0)$=new Int32Array(Q),IZ[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function $U(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function WU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(qJ($,Q))return;J.uniform2fv(this.addr,Q),FJ($,Q)}}function ZU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(qJ($,Q))return;J.uniform3fv(this.addr,Q),FJ($,Q)}}function KU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(qJ($,Q))return;J.uniform4fv(this.addr,Q),FJ($,Q)}}function HU(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(qJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),FJ($,Q)}else{if(qJ($,W))return;_Z.set(W),J.uniformMatrix2fv(this.addr,!1,_Z),FJ($,W)}}function YU(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(qJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),FJ($,Q)}else{if(qJ($,W))return;AZ.set(W),J.uniformMatrix3fv(this.addr,!1,AZ),FJ($,W)}}function XU(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(qJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),FJ($,Q)}else{if(qJ($,W))return;zZ.set(W),J.uniformMatrix4fv(this.addr,!1,zZ),FJ($,W)}}function UU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function GU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(qJ($,Q))return;J.uniform2iv(this.addr,Q),FJ($,Q)}}function NU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(qJ($,Q))return;J.uniform3iv(this.addr,Q),FJ($,Q)}}function EU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(qJ($,Q))return;J.uniform4iv(this.addr,Q),FJ($,Q)}}function qU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function FU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(qJ($,Q))return;J.uniform2uiv(this.addr,Q),FJ($,Q)}}function DU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(qJ($,Q))return;J.uniform3uiv(this.addr,Q),FJ($,Q)}}function OU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(qJ($,Q))return;J.uniform4uiv(this.addr,Q),FJ($,Q)}}function q6(J){if(J.version===0)J.compareFunction=uQ,J.needsUpdate=!0;return J}function RU(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)K=q6(uZ);else K=dZ;$.setTexture2D(Q||K,Z)}function MU(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||sZ,Z)}function LU(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_CUBE_SHADOW)K=q6(cZ);else K=iZ;$.setTextureCube(Q||K,Z)}function kU(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||nZ,Z)}function VU(J){switch(J){case 5126:return $U;case 35664:return WU;case 35665:return ZU;case 35666:return KU;case 35674:return HU;case 35675:return YU;case 35676:return XU;case 5124:case 35670:return UU;case 35667:case 35671:return GU;case 35668:case 35672:return NU;case 35669:case 35673:return EU;case 5125:return qU;case 36294:return FU;case 36295:return DU;case 36296:return OU;case 35678:case 36198:case 36298:case 36306:case 35682:return RU;case 35679:case 36299:case 36307:return MU;case 35680:case 36300:case 36308:case 36293:return LU;case 36289:case 36303:case 36311:case 36292:return kU}}function BU(J,Q){J.uniform1fv(this.addr,Q)}function IU(J,Q){let $=j8(Q,this.size,2);J.uniform2fv(this.addr,$)}function zU(J,Q){let $=j8(Q,this.size,3);J.uniform3fv(this.addr,$)}function AU(J,Q){let $=j8(Q,this.size,4);J.uniform4fv(this.addr,$)}function _U(J,Q){let $=j8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function PU(J,Q){let $=j8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function CU(J,Q){let $=j8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function wU(J,Q){J.uniform1iv(this.addr,Q)}function TU(J,Q){J.uniform2iv(this.addr,Q)}function SU(J,Q){J.uniform3iv(this.addr,Q)}function jU(J,Q){J.uniform4iv(this.addr,Q)}function vU(J,Q){J.uniform1uiv(this.addr,Q)}function yU(J,Q){J.uniform2uiv(this.addr,Q)}function fU(J,Q){J.uniform3uiv(this.addr,Q)}function hU(J,Q){J.uniform4uiv(this.addr,Q)}function bU(J,Q,$){let W=this.cache,Z=Q.length,K=E6($,Z);if(!qJ(W,K))J.uniform1iv(this.addr,K),FJ(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=q6(uZ);else H=dZ;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function xU(J,Q,$){let W=this.cache,Z=Q.length,K=E6($,Z);if(!qJ(W,K))J.uniform1iv(this.addr,K),FJ(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||sZ,K[H])}function gU(J,Q,$){let W=this.cache,Z=Q.length,K=E6($,Z);if(!qJ(W,K))J.uniform1iv(this.addr,K),FJ(W,K);let H;if(this.type===J.SAMPLER_CUBE_SHADOW)H=q6(cZ);else H=iZ;for(let Y=0;Y!==Z;++Y)$.setTextureCube(Q[Y]||H,K[Y])}function pU(J,Q,$){let W=this.cache,Z=Q.length,K=E6($,Z);if(!qJ(W,K))J.uniform1iv(this.addr,K),FJ(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||nZ,K[H])}function mU(J){switch(J){case 5126:return BU;case 35664:return IU;case 35665:return zU;case 35666:return AU;case 35674:return _U;case 35675:return PU;case 35676:return CU;case 5124:case 35670:return wU;case 35667:case 35671:return TU;case 35668:case 35672:return SU;case 35669:case 35673:return jU;case 5125:return vU;case 36294:return yU;case 36295:return fU;case 36296:return hU;case 35678:case 36198:case 36298:case 36306:case 35682:return bU;case 35679:case 36299:case 36307:return xU;case 35680:case 36300:case 36308:case 36293:return gU;case 36289:case 36303:case 36311:case 36292:return pU}}class oZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=VU(Q.type)}}class aZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=mU(Q.type)}}class rZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var M$=/(\w+)(\])?(\[|\.)?/g;function PZ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function lU(J,Q,$){let W=J.name,Z=W.length;M$.lastIndex=0;while(!0){let K=M$.exec(W),H=M$.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===Z){PZ($,U===void 0?new oZ(Y,J,Q):new aZ(Y,J,Q));break}else{let q=$.map[Y];if(q===void 0)q=new rZ(Y),PZ($,q);$=q}}}class H7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);lU(H,Y,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function CZ(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var dU=37297,uU=0;function cU(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let Y=H+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return W.join(`
`)}var wZ=new S0;function nU(J){l0._getMatrix(wZ,l0.workingColorSpace,J);let Q=`mat3( ${wZ.elements.map(($)=>$.toFixed(4))} )`;switch(l0.getTransfer(J)){case mQ:return[Q,"LinearTransferOETF"];case e0:return[Q,"sRGBTransferOETF"];default:return w0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function TZ(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+cU(J.getShaderSource(Q),Y)}else return K}function sU(J,Q){let $=nU(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( ${$[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var iU={[a6]:"Linear",[r6]:"Reinhard",[t6]:"Cineon",[e6]:"ACESFilmic",[QQ]:"AgX",[$Q]:"Neutral",[JQ]:"Custom"};function oU(J,Q){let $=iU[Q];if($===void 0)return w0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var U6=new x;function aU(){l0.getLuminanceCoefficients(U6);let J=U6.x.toFixed(4),Q=U6.y.toFixed(4),$=U6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function rU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(K7).join(`
`)}function tU(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function eU(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function K7(J){return J!==""}function SZ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function jZ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var JG=/^[ \t]*#include +<([\w\d./]+)>/gm;function k$(J){return J.replace(JG,QG)}function QG(J,Q){let $=h0[Q];if($===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return k$($)}var $G=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vZ(J){return J.replace($G,WG)}function WG(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function yZ(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var ZG={[d8]:"SHADOWMAP_TYPE_PCF",[z8]:"SHADOWMAP_TYPE_VSM"};function KG(J){return ZG[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var HG={[P8]:"ENVMAP_MODE_REFRACTION"};function YG(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return HG[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var XG={[pW]:"ENVMAP_BLENDING_MULTIPLY",[mW]:"ENVMAP_BLENDING_MIX",[lW]:"ENVMAP_BLENDING_ADD"};function UG(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return XG[J.combine]||"ENVMAP_BLENDING_NONE"}function GG(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=KG($),U=$.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",D=YG($),q=UG($),N=rU($),O=tU(K),k=Z.createProgram(),I,F,G=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(I=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(K7).join(`
`),I.length>0)I+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(K7).join(`
`),F.length>0)F+=`
`}else I=[yZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+D:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+$.diffuseRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(K7).join(`
`),F=[yZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+D:"",$.envMap?"#define "+q:"",$.envMapPMREM?"#define ENVMAP_MAX_LOD "+$.envMapMaxLod+".0":"",$.envMapPMREM?"#define ENVMAP_SIZE "+$.envMapSize+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==Y9?"#define TONE_MAPPING":"",$.toneMapping!==Y9?h0.tonemapping_pars_fragment:"",$.toneMapping!==Y9?oU("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",h0.colorspace_pars_fragment,sU("linearToOutputTexel",$.outputColorSpace),aU(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(K7).join(`
`);if(H=k$(H),H=SZ(H,$),H=jZ(H,$),Y=k$(Y),Y=SZ(Y,$),Y=jZ(Y,$),H=vZ(H),Y=vZ(Y),$.isRawShaderMaterial!==!0)G=`#version 300 es
`,I=[N,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,F=["#define varying in",$.glslVersion===cQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===cQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let B=G+I+H,A=G+F+Y,V=CZ(Z,Z.VERTEX_SHADER,B),_=CZ(Z,Z.FRAGMENT_SHADER,A);if(Z.attachShader(k,V),Z.attachShader(k,_),$.index0AttributeName!==void 0)Z.bindAttribLocation(k,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(k,0,"position");Z.linkProgram(k);function C(p){if(J.debug.checkShaderErrors){let S=Z.getProgramInfoLog(k)||"",g=Z.getShaderInfoLog(V)||"",i=Z.getShaderInfoLog(_)||"",w=S.trim(),c=g.trim(),a=i.trim(),b=!0,K0=!0;if(Z.getProgramParameter(k,Z.LINK_STATUS)===!1)if(b=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,k,V,_);else{let u=TZ(Z,V,"vertex"),t=TZ(Z,_,"fragment");T0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(k,Z.VALIDATE_STATUS)+`

Material Name: `+p.name+`
Material Type: `+p.type+`

Program Info Log: `+w+`
`+u+`
`+t)}else if(w!=="")w0("WebGLProgram: Program Info Log:",w);else if(c===""||a==="")K0=!1;if(K0)p.diagnostics={runnable:b,programLog:w,vertexShader:{log:c,prefix:I},fragmentShader:{log:a,prefix:F}}}Z.deleteShader(V),Z.deleteShader(_),E=new H7(Z,k),L=eU(Z,k)}let E;this.getUniforms=function(){if(E===void 0)C(this);return E};let L;this.getAttributes=function(){if(L===void 0)C(this);return L};let P=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(P===!1)P=Z.getProgramParameter(k,dU);return P},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(k),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=uU++,this.cacheKey=Q,this.usedTimes=1,this.program=k,this.vertexShader=V,this.fragmentShader=_,this}var NG=0;class tZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new eZ(J),Q.set(J,$);return $}}class eZ{constructor(J){this.id=NG++,this.code=J,this.usedTimes=0}}function EG(J){return J===t9||J===l7||J===d7}function qG(J,Q,$,W,Z,K){let H=new n7,Y=new tZ,X=new Set,U=[],D=new Map,q=W.logarithmicDepthBuffer,N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(E){if(X.add(E),E===0)return"uv";return`uv${E}`}function k(E,L,P,p,S,g){let i=p.fog,w=S.geometry,c=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?p.environment:null,a=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,b=Q.get(E.envMap||c,a),K0=N[E.type],u=W.precision;if(E.precision!==null){if(u=W.getMaxPrecision(E.precision),u!==E.precision)w0("WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead.")}let t=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,$0=t!==void 0?t.length:0,V0=0;if(w.morphAttributes.position!==void 0)V0=1;if(w.morphAttributes.normal!==void 0)V0=2;if(w.morphAttributes.color!==void 0)V0=3;let o,Q0,L0,_0;if(K0){let F0=G9[K0];o=F0.vertexShader,Q0=F0.fragmentShader}else{o=E.vertexShader,Q0=E.fragmentShader;let F0=Y.getVertexShaderStage(E),r0=Y.getFragmentShaderStage(E);Y.update(E,F0,r0),L0=F0.id,_0=r0.id}let P0=J.getRenderTarget(),k0=J.state.buffers.depth.getReversed(),i0=S.isInstancedMesh===!0,x0=S.isBatchedMesh===!0,y0=!!E.map,$J=!!E.matcap,c0=!!b,XJ=c0&&b.isPMREMTexture===!0,UJ=!!E.aoMap,TJ=!!E.lightMap,hJ=!!E.bumpMap&&E.wireframe===!1,GJ=!!E.normalMap,BJ=!!E.displacementMap,SJ=!!E.emissiveMap,jJ=!!E.metalnessMap,sJ=!!E.roughnessMap,v=E.anisotropy>0,iJ=E.clearcoat>0,a0=E.diffuseRoughness>0,DJ=E.dispersion>0,N0=E.retroreflectivity>0,JJ=E.iridescence>0,C0=E.sheen>0,j0=E.transmission>0,IJ=v&&!!E.anisotropyMap,z=iJ&&!!E.clearcoatMap,R=iJ&&!!E.clearcoatNormalMap,y=iJ&&!!E.clearcoatRoughnessMap,e=a0&&!!E.diffuseRoughnessMap,r=JJ&&!!E.iridescenceMap,Z0=JJ&&!!E.iridescenceThicknessMap,X0=C0&&!!E.sheenColorMap,l=C0&&!!E.sheenRoughnessMap,s=!!E.specularMap,H0=!!E.specularColorMap,T=!!E.specularIntensityMap,n=j0&&!!E.transmissionMap,d=j0&&!!E.thicknessMap,J0=!!E.gradientMap,W0=!!E.alphaMap,G0=E.alphaTest>0,z0=!!E.alphaHash,I0=!!E.extensions,q0=Y9;if(E.toneMapped){if(P0===null||P0.isXRRenderTarget===!0)q0=J.toneMapping}let A0=XJ?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,f0={shaderID:K0,shaderType:E.type,shaderName:E.name,vertexShader:o,fragmentShader:Q0,defines:E.defines,customVertexShaderID:L0,customFragmentShaderID:_0,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:x0,batchingColor:x0&&S._colorsTexture!==null,instancing:i0,instancingColor:i0&&S.instanceColor!==null,instancingMorph:i0&&S.morphTexture!==null,outputColorSpace:P0===null?J.outputColorSpace:P0.isXRRenderTarget===!0?P0.texture.colorSpace:l0.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:y0,matcap:$J,envMap:c0,envMapMode:c0&&b.mapping,envMapPMREM:XJ,envMapMaxLod:XJ?A0.length-1:null,envMapSize:XJ?A0[0].width:null,aoMap:UJ,lightMap:TJ,bumpMap:hJ,normalMap:GJ,displacementMap:BJ,emissiveMap:SJ,normalMapObjectSpace:GJ&&E.normalMapType===eW,normalMapTangentSpace:GJ&&E.normalMapType===gQ,packedNormalMap:GJ&&E.normalMapType===gQ&&EG(E.normalMap.format),metalnessMap:jJ,roughnessMap:sJ,anisotropy:v,anisotropyMap:IJ,clearcoat:iJ,clearcoatMap:z,clearcoatNormalMap:R,clearcoatRoughnessMap:y,diffuseRoughness:a0,diffuseRoughnessMap:e,dispersion:DJ,retroreflection:N0,iridescence:JJ,iridescenceMap:r,iridescenceThicknessMap:Z0,sheen:C0,sheenColorMap:X0,sheenRoughnessMap:l,specularMap:s,specularColorMap:H0,specularIntensityMap:T,transmission:j0,transmissionMap:n,thicknessMap:d,gradientMap:J0,opaque:E.transparent===!1&&E.blending===u8&&E.alphaToCoverage===!1,alphaMap:W0,alphaTest:G0,alphaHash:z0,combine:E.combine,mapUv:y0&&O(E.map.channel),aoMapUv:UJ&&O(E.aoMap.channel),lightMapUv:TJ&&O(E.lightMap.channel),bumpMapUv:hJ&&O(E.bumpMap.channel),normalMapUv:GJ&&O(E.normalMap.channel),displacementMapUv:BJ&&O(E.displacementMap.channel),emissiveMapUv:SJ&&O(E.emissiveMap.channel),metalnessMapUv:jJ&&O(E.metalnessMap.channel),roughnessMapUv:sJ&&O(E.roughnessMap.channel),anisotropyMapUv:IJ&&O(E.anisotropyMap.channel),clearcoatMapUv:z&&O(E.clearcoatMap.channel),clearcoatNormalMapUv:R&&O(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:y&&O(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:e&&O(E.diffuseRoughnessMap.channel),iridescenceMapUv:r&&O(E.iridescenceMap.channel),iridescenceThicknessMapUv:Z0&&O(E.iridescenceThicknessMap.channel),sheenColorMapUv:X0&&O(E.sheenColorMap.channel),sheenRoughnessMapUv:l&&O(E.sheenRoughnessMap.channel),specularMapUv:s&&O(E.specularMap.channel),specularColorMapUv:H0&&O(E.specularColorMap.channel),specularIntensityMapUv:T&&O(E.specularIntensityMap.channel),transmissionMapUv:n&&O(E.transmissionMap.channel),thicknessMapUv:d&&O(E.thicknessMap.channel),alphaMapUv:W0&&O(E.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(GJ||v),vertexNormals:!!w.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!w.attributes.uv&&(y0||W0),fog:!!i,useFog:E.fog===!0,fogExp2:!!i&&i.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||w.attributes.normal===void 0&&GJ===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:q,reversedDepthBuffer:k0,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:$0,morphTextureStride:V0,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:g.filter((F0)=>F0.texture!==null).length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:E.dithering,shadowMapEnabled:J.shadowMap.enabled&&P.length>0,shadowMapType:J.shadowMap.type,toneMapping:q0,decodeVideoTexture:y0&&E.map.isVideoTexture===!0&&l0.getTransfer(E.map.colorSpace)===e0,decodeVideoTextureEmissive:SJ&&E.emissiveMap.isVideoTexture===!0&&l0.getTransfer(E.emissiveMap.colorSpace)===e0,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yJ,flipSided:E.side===vJ,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:I0&&E.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I0&&E.extensions.multiDraw===!0||x0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return f0.vertexUv1s=X.has(1),f0.vertexUv2s=X.has(2),f0.vertexUv3s=X.has(3),X.clear(),f0}function I(E){let L=[];if(E.shaderID)L.push(E.shaderID);else L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID);if(E.defines!==void 0)for(let P in E.defines)L.push(P),L.push(E.defines[P]);if(E.isRawShaderMaterial===!1)F(L,E),G(L,E),L.push(J.outputColorSpace);return L.push(E.customProgramCacheKey),L.join()}function F(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapPMREM),E.push(L.envMapMaxLod),E.push(L.envMapSize),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.diffuseRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.numLightProbeGrids),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function G(E,L){if(H.disableAll(),L.instancing)H.enable(0);if(L.instancingColor)H.enable(1);if(L.instancingMorph)H.enable(2);if(L.matcap)H.enable(3);if(L.envMap)H.enable(4);if(L.normalMapObjectSpace)H.enable(5);if(L.normalMapTangentSpace)H.enable(6);if(L.clearcoat)H.enable(7);if(L.iridescence)H.enable(8);if(L.alphaTest)H.enable(9);if(L.vertexColors)H.enable(10);if(L.vertexAlphas)H.enable(11);if(L.vertexUv1s)H.enable(12);if(L.vertexUv2s)H.enable(13);if(L.vertexUv3s)H.enable(14);if(L.vertexTangents)H.enable(15);if(L.anisotropy)H.enable(16);if(L.alphaHash)H.enable(17);if(L.batching)H.enable(18);if(L.dispersion)H.enable(19);if(L.retroreflection)H.enable(24);if(L.diffuseRoughness)H.enable(25);if(L.batchingColor)H.enable(20);if(L.gradientMap)H.enable(21);if(L.packedNormalMap)H.enable(22);if(L.vertexNormals)H.enable(23);if(E.push(H.mask),H.disableAll(),L.fog)H.enable(0);if(L.useFog)H.enable(1);if(L.flatShading)H.enable(2);if(L.logarithmicDepthBuffer)H.enable(3);if(L.reversedDepthBuffer)H.enable(4);if(L.skinning)H.enable(5);if(L.morphTargets)H.enable(6);if(L.morphNormals)H.enable(7);if(L.morphColors)H.enable(8);if(L.premultipliedAlpha)H.enable(9);if(L.shadowMapEnabled)H.enable(10);if(L.doubleSided)H.enable(11);if(L.flipSided)H.enable(12);if(L.useDepthPacking)H.enable(13);if(L.dithering)H.enable(14);if(L.transmission)H.enable(15);if(L.sheen)H.enable(16);if(L.opaque)H.enable(17);if(L.pointsUvs)H.enable(18);if(L.decodeVideoTexture)H.enable(19);if(L.decodeVideoTextureEmissive)H.enable(20);if(L.alphaToCoverage)H.enable(21);if(L.numLightProbeGrids>0)H.enable(22);if(L.hasPositionAttribute)H.enable(23);E.push(H.mask)}function B(E){let L=N[E.type],P;if(L){let p=G9[L];P=NZ.clone(p.uniforms)}else P=E.uniforms;return P}function A(E,L){let P=D.get(L);if(P!==void 0)++P.usedTimes;else P=new GG(J,L,E,Z),U.push(P),D.set(L,P);return P}function V(E){if(--E.usedTimes===0){let L=U.indexOf(E);U[L]=U[U.length-1],U.pop(),D.delete(E.cacheKey),E.destroy()}}function _(E){Y.remove(E)}function C(){Y.dispose()}return{getParameters:k,getProgramCacheKey:I,getUniforms:B,acquireProgram:A,releaseProgram:V,releaseShaderCache:_,programs:U,dispose:C}}function FG(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function W(H){J.delete(H)}function Z(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function DG(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function fZ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function hZ(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(N){let O=0;if(N.isInstancedMesh)O+=2;if(N.isSkinnedMesh)O+=1;return O}function Y(N,O,k,I,F,G){let B=J[Q];if(B===void 0)B={id:N.id,object:N,geometry:O,material:k,materialVariant:H(N),groupOrder:I,renderOrder:N.renderOrder,z:F,group:G},J[Q]=B;else B.id=N.id,B.object=N,B.geometry=O,B.material=k,B.materialVariant=H(N),B.groupOrder=I,B.renderOrder=N.renderOrder,B.z=F,B.group=G;return Q++,B}function X(N,O,k,I,F,G,B){if(B.reversedDepth===!0)F=-F;let A=Y(N,O,k,I,F,G);if(k.transmission>0)W.push(A);else if(k.transparent===!0)Z.push(A);else $.push(A)}function U(N,O,k,I,F,G){let B=Y(N,O,k,I,F,G);if(k.transmission>0)W.unshift(B);else if(k.transparent===!0)Z.unshift(B);else $.unshift(B)}function D(N,O){if($.length>1)$.sort(N||DG);if(W.length>1)W.sort(O||fZ);if(Z.length>1)Z.sort(O||fZ)}function q(){for(let N=Q,O=J.length;N<O;N++){let k=J[N];if(k.id===null)break;k.id=null,k.object=null,k.geometry=null,k.material=null,k.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:X,unshift:U,finish:q,sort:D}}function OG(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new hZ,J.set(W,[H]);else if(Z>=K.length)H=new hZ,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function RG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new x,color:new d0};break;case"SpotLight":$={position:new x,direction:new x,color:new d0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new x,color:new d0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new x,skyColor:new d0,groundColor:new d0};break;case"RectAreaLight":$={color:new d0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=$,$}}}function MG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new b0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new b0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new b0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var LG=0;function kG(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function VG(J){let Q=new RG,$=MG(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new x);let Z=new x,K=new WJ,H=new WJ;function Y(U){let D=0,q=0,N=0;for(let g=0;g<9;g++)W.probe[g].set(0,0,0);let O=0,k=0,I=0,F=0,G=0,B=0,A=0,V=0,_=0,C=0,E=0,L=0,P=0,p=0;U.sort(kG);for(let g=0,i=U.length;g<i;g++){let w=U[g],c=w.color,a=w.intensity,b=w.distance,K0=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===t9)K0=w.shadow.map.texture;else K0=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)D+=c.r*a,q+=c.g*a,N+=c.b*a;else if(w.isLightProbe){for(let u=0;u<9;u++)W.probe[u].addScaledVector(w.sh.coefficients[u],a);p++}else if(w.isSunLight){let u=Q.get(w);if(u.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let t=w.shadow,$0=$.get(w);$0.shadowIntensity=t.intensity,$0.shadowBias=t.bias,$0.shadowNormalBias=t.normalBias,$0.shadowRadius=t.radius,$0.shadowMapSize.copy(t.mapSize).multiply(t.getFrameExtents()),W.sunShadow[k]=$0,W.sunShadowMap[k]=K0;let V0=t.getViewportCount();for(let o=0;o<V0;o++)W.sunShadowMatrix[I+o]=t.getMatrix(o),W.sunShadowCascade[I+o]=t._cascadeData[o];I+=V0,k++}W.sun[O]=u,O++}else if(w.isDirectionalLight){let u=Q.get(w);if(u.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let t=w.shadow,$0=$.get(w);$0.shadowIntensity=t.intensity,$0.shadowBias=t.bias,$0.shadowNormalBias=t.normalBias,$0.shadowRadius=t.radius,$0.shadowMapSize=t.mapSize,W.directionalShadow[F]=$0,W.directionalShadowMap[F]=K0,W.directionalShadowMatrix[F]=w.shadow.matrix,_++}W.directional[F]=u,F++}else if(w.isSpotLight){let u=Q.get(w);u.position.setFromMatrixPosition(w.matrixWorld),u.color.copy(c).multiplyScalar(a),u.distance=b,u.coneCos=Math.cos(w.angle),u.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),u.decay=w.decay,W.spot[B]=u;let t=w.shadow;if(w.map){if(W.spotLightMap[L]=w.map,L++,t.updateMatrices(w),w.castShadow)P++}if(W.spotLightMatrix[B]=t.matrix,w.castShadow){let $0=$.get(w);$0.shadowIntensity=t.intensity,$0.shadowBias=t.bias,$0.shadowNormalBias=t.normalBias,$0.shadowRadius=t.radius,$0.shadowMapSize=t.mapSize,W.spotShadow[B]=$0,W.spotShadowMap[B]=K0,E++}B++}else if(w.isRectAreaLight){let u=Q.get(w);u.color.copy(c).multiplyScalar(a),u.halfWidth.set(w.width*0.5,0,0),u.halfHeight.set(0,w.height*0.5,0),W.rectArea[A]=u,A++}else if(w.isPointLight){let u=Q.get(w);if(u.color.copy(w.color).multiplyScalar(w.intensity),u.distance=w.distance,u.decay=w.decay,w.castShadow){let t=w.shadow,$0=$.get(w);$0.shadowIntensity=t.intensity,$0.shadowBias=t.bias,$0.shadowNormalBias=t.normalBias,$0.shadowRadius=t.radius,$0.shadowMapSize=t.mapSize,$0.shadowCameraNear=t.camera.near,$0.shadowCameraFar=t.camera.far,W.pointShadow[G]=$0,W.pointShadowMap[G]=K0,W.pointShadowMatrix[G]=w.shadow.matrix,C++}W.point[G]=u,G++}else if(w.isHemisphereLight){let u=Q.get(w);u.skyColor.copy(w.color).multiplyScalar(a),u.groundColor.copy(w.groundColor).multiplyScalar(a),W.hemi[V]=u,V++}}if(A>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=E0.LTC_FLOAT_1,W.rectAreaLTC2=E0.LTC_FLOAT_2;else W.rectAreaLTC1=E0.LTC_HALF_1,W.rectAreaLTC2=E0.LTC_HALF_2;W.ambient[0]=D,W.ambient[1]=q,W.ambient[2]=N;let S=W.hash;if(S.sunLength!==O||S.directionalLength!==F||S.pointLength!==G||S.spotLength!==B||S.rectAreaLength!==A||S.hemiLength!==V||S.numSunShadows!==k||S.numDirectionalShadows!==_||S.numPointShadows!==C||S.numSpotShadows!==E||S.numSpotMaps!==L||S.numLightProbes!==p)W.sun.length=O,W.directional.length=F,W.spot.length=B,W.rectArea.length=A,W.point.length=G,W.hemi.length=V,W.sunShadow.length=k,W.sunShadowMap.length=k,W.sunShadowMatrix.length=I,W.sunShadowCascade.length=I,W.directionalShadow.length=_,W.directionalShadowMap.length=_,W.directionalShadowMatrix.length=_,W.pointShadow.length=C,W.pointShadowMap.length=C,W.pointShadowMatrix.length=C,W.spotShadow.length=E,W.spotShadowMap.length=E,W.spotLightMatrix.length=E+L-P,W.spotLightMap.length=L,W.numSpotLightShadowsWithMaps=P,W.numLightProbes=p,S.sunLength=O,S.directionalLength=F,S.pointLength=G,S.spotLength=B,S.rectAreaLength=A,S.hemiLength=V,S.numSunShadows=k,S.numDirectionalShadows=_,S.numPointShadows=C,S.numSpotShadows=E,S.numSpotMaps=L,S.numLightProbes=p,W.version=LG++}function X(U,D){let q=0,N=0,O=0,k=0,I=0,F=0,G=D.matrixWorldInverse;for(let B=0,A=U.length;B<A;B++){let V=U[B];if(V.isSunLight){let _=W.sun[q];_.direction.setFromMatrixPosition(V.matrixWorld),_.direction.transformDirection(G),q++}else if(V.isDirectionalLight){let _=W.directional[N];_.direction.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(V.target.matrixWorld),_.direction.sub(Z),_.direction.transformDirection(G),N++}else if(V.isSpotLight){let _=W.spot[k];_.position.setFromMatrixPosition(V.matrixWorld),_.position.applyMatrix4(G),_.direction.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(V.target.matrixWorld),_.direction.sub(Z),_.direction.transformDirection(G),k++}else if(V.isRectAreaLight){let _=W.rectArea[I];_.position.setFromMatrixPosition(V.matrixWorld),_.position.applyMatrix4(G),H.identity(),K.copy(V.matrixWorld),K.premultiply(G),H.extractRotation(K),_.halfWidth.set(V.width*0.5,0,0),_.halfHeight.set(0,V.height*0.5,0),_.halfWidth.applyMatrix4(H),_.halfHeight.applyMatrix4(H),I++}else if(V.isPointLight){let _=W.point[O];_.position.setFromMatrixPosition(V.matrixWorld),_.position.applyMatrix4(G),O++}else if(V.isHemisphereLight){let _=W.hemi[F];_.direction.setFromMatrixPosition(V.matrixWorld),_.direction.transformDirection(G),F++}}}return{setup:Y,setupView:X,state:W}}function bZ(J){let Q=new VG(J),$=[],W=[],Z=[];function K(q){D.camera=q,$.length=0,W.length=0,Z.length=0}function H(q){if(q.isLightProbeGrid)Z.push(q);else $.push(q)}function Y(q){W.push(q)}function X(){Q.setup($),Z.sort((q,N)=>q.priority-N.priority||q.id-N.id)}function U(q){Q.setupView($,q)}let D={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:D,setupLights:X,setupLightsView:U,pushLight:H,pushShadow:Y}}function BG(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),Y;if(H===void 0)Y=new bZ(J),Q.set(Z,[Y]);else if(K>=H.length)Y=new bZ(J),H.push(Y);else Y=H[K];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var IG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zG=`uniform sampler2D shadow_pass;
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
}`,AG=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],_G=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],xZ=new WJ,Z7=new x,L$=new x;function PG(J,Q,$){let W=new o9,Z=new b0,K=new b0,H=new YJ,Y=new $$,X=new W$,U={},D=$.maxTextureSize,q={[A8]:vJ,[vJ]:A8,[yJ]:yJ},N=new _9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new b0},radius:{value:4}},vertexShader:IG,fragmentShader:zG}),O=N.clone();O.defines.HORIZONTAL_PASS=1;let k=new cJ;k.setAttribute("position",new k9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new J9(k,N),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d8;let G=this.type;this.render=function(C,E,L){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(C.length===0)return;if(this.type===EW)w0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=d8;let P=J.getRenderTarget(),p=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),g=J.state;if(g.setBlending(a9),g.buffers.depth.getReversed()===!0)g.buffers.color.setClear(0,0,0,0);else g.buffers.color.setClear(1,1,1,1);g.buffers.depth.setTest(!0),g.setScissorTest(!1);let i=G!==this.type;if(i)E.traverse(function(w){if(w.material)if(Array.isArray(w.material))w.material.forEach((c)=>c.needsUpdate=!0);else w.material.needsUpdate=!0});for(let w=0,c=C.length;w<c;w++){let a=C[w],b=a.shadow;if(b===void 0){w0("WebGLShadowMap:",a,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;Z.copy(b.mapSize);let K0=b.getFrameExtents();if(Z.multiply(K0),K.copy(b.mapSize),Z.x>D||Z.y>D){if(Z.x>D)K.x=Math.floor(D/K0.x),Z.x=K.x*K0.x,b.mapSize.x=K.x;if(Z.y>D)K.y=Math.floor(D/K0.y),Z.y=K.y*K0.y,b.mapSize.y=K.y}let u=J.state.buffers.depth.getReversed();if(b.camera._reversedDepth=u,b.map===null||i===!0){if(b.map!==null){if(b.map.depthTexture!==null)b.map.depthTexture.dispose(),b.map.depthTexture=null;b.map.dispose()}if(this.type===z8){if(a.isPointLight){w0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}b.map=new uJ(Z.x,Z.y,{format:t9,type:X9,minFilter:dJ,magFilter:dJ,generateMipmaps:!1}),b.map.texture.name=a.name+".shadowMap",b.map.depthTexture=new x9(Z.x,Z.y,B9),b.map.depthTexture.name=a.name+".shadowMapDepth",b.map.depthTexture.format=C8,b.map.depthTexture.compareFunction=null,b.map.depthTexture.minFilter=y9,b.map.depthTexture.magFilter=y9}else{if(a.isPointLight)b.map=new N6(Z.x),b.map.depthTexture=new e7(Z.x,h9);else b.map=new uJ(Z.x,Z.y),b.map.depthTexture=new x9(Z.x,Z.y,h9);if(b.map.depthTexture.name=a.name+".shadowMap",b.map.depthTexture.format=C8,this.type===d8)b.map.depthTexture.compareFunction=u?dQ:lQ,b.map.depthTexture.minFilter=dJ,b.map.depthTexture.magFilter=dJ;else b.map.depthTexture.compareFunction=null,b.map.depthTexture.minFilter=y9,b.map.depthTexture.magFilter=y9}b.camera.updateProjectionMatrix()}if(b.map.isWebGLCubeRenderTarget!==!0&&(b.map.width!==Z.x||b.map.height!==Z.y))b.map.setSize(Z.x,Z.y);let t=b.map.isWebGLCubeRenderTarget?6:b.getViewportCount();if(a.isPointLight!==!0)b.updateMatrices(a,L);let $0=(b.camera.layers.mask&4294967294)!==0?b.camera.layers:L.layers;for(let V0=0;V0<t;V0++){let o=b.getCamera(V0);if(a.isPointLight){let{camera:Q0,matrix:L0}=b,_0=a.distance||Q0.far;if(_0!==Q0.far)Q0.far=_0,Q0.updateProjectionMatrix();Z7.setFromMatrixPosition(a.matrixWorld),Q0.position.copy(Z7),L$.copy(Q0.position),L$.add(AG[V0]),Q0.up.copy(_G[V0]),Q0.lookAt(L$),Q0.updateMatrixWorld(),L0.makeTranslation(-Z7.x,-Z7.y,-Z7.z),xZ.multiplyMatrices(Q0.projectionMatrix,Q0.matrixWorldInverse),b._frustum.setFromProjectionMatrix(xZ,Q0.coordinateSystem,Q0.reversedDepth)}if(b.map.isWebGLCubeRenderTarget)J.setRenderTarget(b.map,V0),J.clear();else{if(V0===0)J.setRenderTarget(b.map),J.clear();let Q0=b.getViewport(V0);H.set(K.x*Q0.x,K.y*Q0.y,K.x*Q0.z,K.y*Q0.w),g.viewport(H)}W=b.getFrustum(V0),V(E,L,o,a,$0,this.type)}if(b.isPointLightShadow!==!0&&this.type===z8)B(b,L);b.needsUpdate=!1}G=this.type,F.needsUpdate=!1,J.setRenderTarget(P,p,S)};function B(C,E){let L=Q.update(I);if(N.defines.VSM_SAMPLES!==C.blurSamples)N.defines.VSM_SAMPLES=C.blurSamples,O.defines.VSM_SAMPLES=C.blurSamples,N.needsUpdate=!0,O.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new uJ(Z.x,Z.y,{format:t9,type:X9});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);N.uniforms.shadow_pass.value=C.map.depthTexture,N.uniforms.resolution.value.set(C.map.width,C.map.height),N.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(E,null,L,N,I,null),O.uniforms.shadow_pass.value=C.mapPass.texture,O.uniforms.resolution.value.set(C.map.width,C.map.height),O.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(E,null,L,O,I,null)}function A(C,E,L,P){let p=null,S=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)p=S;else if(p=L.isPointLight===!0?X:Y,J.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let g=p.uuid,i=E.uuid,w=U[g];if(w===void 0)w={},U[g]=w;let c=w[i];if(c===void 0)c=p.clone(),w[i]=c,E.addEventListener("dispose",_);p=c}if(p.visible=E.visible,p.wireframe=E.wireframe,P===z8)p.side=E.shadowSide!==null?E.shadowSide:E.side;else p.side=E.shadowSide!==null?E.shadowSide:q[E.side];if(p.alphaMap=E.alphaMap,p.alphaTest=E.alphaToCoverage===!0?0.5:E.alphaTest,p.map=E.map,p.clipShadows=E.clipShadows,p.clippingPlanes=E.clippingPlanes,p.clipIntersection=E.clipIntersection,p.displacementMap=E.displacementMap,p.displacementScale=E.displacementScale,p.displacementBias=E.displacementBias,p.wireframeLinewidth=E.wireframeLinewidth,p.linewidth=E.linewidth,L.isPointLight===!0&&p.isMeshDistanceMaterial===!0){let g=J.properties.get(p);g.light=L}return p}function V(C,E,L,P,p,S){if(C.visible===!1)return;if(C.layers.test(p)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&S===z8)&&(!C.frustumCulled||C.intersectsFrustum(W))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);let w=Q.update(C),c=C.material;if(Array.isArray(c)){let a=w.groups;for(let b=0,K0=a.length;b<K0;b++){let u=a[b],t=c[u.materialIndex];if(t&&t.visible){let $0=A(C,t,P,S);C.onBeforeShadow(J,C,E,L,w,$0,u),J.renderBufferDirect(L,null,w,$0,C,u),C.onAfterShadow(J,C,E,L,w,$0,u)}}}else if(c.visible){let a=A(C,c,P,S);C.onBeforeShadow(J,C,E,L,w,a,null),J.renderBufferDirect(L,null,w,a,C,null),C.onAfterShadow(J,C,E,L,w,a,null)}}}let i=C.children;for(let w=0,c=i.length;w<c;w++)V(i[w],E,L,P,p,S)}function _(C){C.target.removeEventListener("dispose",_);for(let L in U){let P=U[L],p=C.target.uuid;if(p in P)P[p].dispose(),delete P[p]}}}function CG(J,Q){function $(){let T=!1,n=new YJ,d=null,J0=new YJ(0,0,0,0);return{setMask:function(W0){if(d!==W0&&!T)J.colorMask(W0,W0,W0,W0),d=W0},setLocked:function(W0){T=W0},setClear:function(W0,G0,z0,I0,q0){if(q0===!0)W0*=I0,G0*=I0,z0*=I0;if(n.set(W0,G0,z0,I0),J0.equals(n)===!1)J.clearColor(W0,G0,z0,I0),J0.copy(n)},reset:function(){T=!1,d=null,J0.set(-1,0,0,0)}}}function W(){let T=!1,n=!1,d=null,J0=null,W0=null;return{setReversed:function(G0){if(n!==G0){let z0=Q.get("EXT_clip_control");if(G0)z0.clipControlEXT(z0.LOWER_LEFT_EXT,z0.ZERO_TO_ONE_EXT);else z0.clipControlEXT(z0.LOWER_LEFT_EXT,z0.NEGATIVE_ONE_TO_ONE_EXT);n=G0;let I0=W0;W0=null,this.setClear(I0)}},getReversed:function(){return n},setTest:function(G0){if(G0)k0(J.DEPTH_TEST);else i0(J.DEPTH_TEST)},setMask:function(G0){if(d!==G0&&!T)J.depthMask(G0),d=G0},setFunc:function(G0){if(n)G0=XZ[G0];if(J0!==G0){switch(G0){case vW:J.depthFunc(J.NEVER);break;case yW:J.depthFunc(J.ALWAYS);break;case fW:J.depthFunc(J.LESS);break;case o6:J.depthFunc(J.LEQUAL);break;case hW:J.depthFunc(J.EQUAL);break;case bW:J.depthFunc(J.GEQUAL);break;case xW:J.depthFunc(J.GREATER);break;case gW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}J0=G0}},setLocked:function(G0){T=G0},setClear:function(G0){if(W0!==G0){if(W0=G0,n)G0=1-G0;J.clearDepth(G0)}},reset:function(){T=!1,d=null,J0=null,W0=null,n=!1}}}function Z(){let T=!1,n=null,d=null,J0=null,W0=null,G0=null,z0=null,I0=null,q0=null;return{setTest:function(A0){if(!T)if(A0)k0(J.STENCIL_TEST);else i0(J.STENCIL_TEST)},setMask:function(A0){if(n!==A0&&!T)J.stencilMask(A0),n=A0},setFunc:function(A0,f0,F0){if(d!==A0||J0!==f0||W0!==F0)J.stencilFunc(A0,f0,F0),d=A0,J0=f0,W0=F0},setOp:function(A0,f0,F0){if(G0!==A0||z0!==f0||I0!==F0)J.stencilOp(A0,f0,F0),G0=A0,z0=f0,I0=F0},setLocked:function(A0){T=A0},setClear:function(A0){if(q0!==A0)J.clearStencil(A0),q0=A0},reset:function(){T=!1,n=null,d=null,J0=null,W0=null,G0=null,z0=null,I0=null,q0=null}}}let K=new $,H=new W,Y=new Z,X={},U=new WeakMap,D={},q={},N={},O=new WeakMap,k=[],I=null,F=!1,G=null,B=null,A=null,V=null,_=null,C=null,E=null,L=new d0(0,0,0),P=0,p=!1,S=null,g=null,i=null,w=null,c=null,a=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),b=!1,K0=0,u=J.getParameter(J.VERSION);if(u.indexOf("WebGL")!==-1)K0=parseFloat(/^WebGL (\d)/.exec(u)[1]),b=K0>=1;else if(u.indexOf("OpenGL ES")!==-1)K0=parseFloat(/^OpenGL ES (\d)/.exec(u)[1]),b=K0>=2;let t=null,$0={},V0=J.getParameter(J.SCISSOR_BOX),o=J.getParameter(J.VIEWPORT),Q0=new YJ().fromArray(V0),L0=new YJ().fromArray(o);function _0(T,n,d,J0){let W0=new Uint8Array(4),G0=J.createTexture();J.bindTexture(T,G0),J.texParameteri(T,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(T,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let z0=0;z0<d;z0++)if(T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texImage3D(n,0,J.RGBA,1,1,J0,0,J.RGBA,J.UNSIGNED_BYTE,W0);else J.texImage2D(n+z0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,W0);return G0}let P0={};P0[J.TEXTURE_2D]=_0(J.TEXTURE_2D,J.TEXTURE_2D,1),P0[J.TEXTURE_CUBE_MAP]=_0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),P0[J.TEXTURE_2D_ARRAY]=_0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),P0[J.TEXTURE_3D]=_0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),k0(J.DEPTH_TEST),H.setFunc(o6),hJ(!1),GJ(c6),k0(J.CULL_FACE),UJ(a9);function k0(T){if(D[T]!==!0)J.enable(T),D[T]=!0}function i0(T){if(D[T]!==!1)J.disable(T),D[T]=!1}function x0(T,n){if(N[T]!==n){if(J.bindFramebuffer(T,n),N[T]=n,T===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=n;if(T===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=n;return!0}return!1}function y0(T,n){let d=k,J0=!1;if(T){if(d=O.get(n),d===void 0)d=[],O.set(n,d);let W0=T.textures;if(d.length!==W0.length||d[0]!==J.COLOR_ATTACHMENT0){for(let G0=0,z0=W0.length;G0<z0;G0++)d[G0]=J.COLOR_ATTACHMENT0+G0;d.length=W0.length,J0=!0}}else if(d[0]!==J.BACK)d[0]=J.BACK,J0=!0;if(J0)J.drawBuffers(d)}function $J(T){if(I!==T)return J.useProgram(T),I=T,!0;return!1}let c0={[_8]:J.FUNC_ADD,[FW]:J.FUNC_SUBTRACT,[DW]:J.FUNC_REVERSE_SUBTRACT};c0[OW]=J.MIN,c0[RW]=J.MAX;let XJ={[MW]:J.ZERO,[LW]:J.ONE,[kW]:J.SRC_COLOR,[BW]:J.SRC_ALPHA,[CW]:J.SRC_ALPHA_SATURATE,[_W]:J.DST_COLOR,[zW]:J.DST_ALPHA,[VW]:J.ONE_MINUS_SRC_COLOR,[IW]:J.ONE_MINUS_SRC_ALPHA,[PW]:J.ONE_MINUS_DST_COLOR,[AW]:J.ONE_MINUS_DST_ALPHA,[wW]:J.CONSTANT_COLOR,[TW]:J.ONE_MINUS_CONSTANT_COLOR,[SW]:J.CONSTANT_ALPHA,[jW]:J.ONE_MINUS_CONSTANT_ALPHA};function UJ(T,n,d,J0,W0,G0,z0,I0,q0,A0){if(T===a9){if(F===!0)i0(J.BLEND),F=!1;return}if(F===!1)k0(J.BLEND),F=!0;if(T!==qW){if(T!==G||A0!==p){if(B!==_8||_!==_8)J.blendEquation(J.FUNC_ADD),B=_8,_=_8;if(A0)switch(T){case u8:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case n6:J.blendFunc(J.ONE,J.ONE);break;case s6:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case i6:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:T0("WebGLState: Invalid blending: ",T);break}else switch(T){case u8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case n6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case s6:T0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i6:T0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:T0("WebGLState: Invalid blending: ",T);break}A=null,V=null,C=null,E=null,L.set(0,0,0),P=0,G=T,p=A0}return}if(W0=W0||n,G0=G0||d,z0=z0||J0,n!==B||W0!==_)J.blendEquationSeparate(c0[n],c0[W0]),B=n,_=W0;if(d!==A||J0!==V||G0!==C||z0!==E)J.blendFuncSeparate(XJ[d],XJ[J0],XJ[G0],XJ[z0]),A=d,V=J0,C=G0,E=z0;if(I0.equals(L)===!1||q0!==P)J.blendColor(I0.r,I0.g,I0.b,q0),L.copy(I0),P=q0;G=T,p=!1}function TJ(T,n){T.side===yJ?i0(J.CULL_FACE):k0(J.CULL_FACE);let d=T.side===vJ;if(n)d=!d;hJ(d),T.blending===u8&&T.transparent===!1?UJ(a9):UJ(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),H.setFunc(T.depthFunc),H.setTest(T.depthTest),H.setMask(T.depthWrite),K.setMask(T.colorWrite);let J0=T.stencilWrite;if(Y.setTest(J0),J0)Y.setMask(T.stencilWriteMask),Y.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),Y.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass);SJ(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?k0(J.SAMPLE_ALPHA_TO_COVERAGE):i0(J.SAMPLE_ALPHA_TO_COVERAGE)}function hJ(T){if(S!==T){if(T)J.frontFace(J.CW);else J.frontFace(J.CCW);S=T}}function GJ(T){if(T!==GW){if(k0(J.CULL_FACE),T!==g)if(T===c6)J.cullFace(J.BACK);else if(T===NW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else i0(J.CULL_FACE);g=T}function BJ(T){if(T!==i){if(b)J.lineWidth(T);i=T}}function SJ(T,n,d){if(T){if(k0(J.POLYGON_OFFSET_FILL),w!==n||c!==d){if(w=n,c=d,H.getReversed())n=-n,d=-d;J.polygonOffset(n,d)}}else i0(J.POLYGON_OFFSET_FILL)}function jJ(T){if(T)k0(J.SCISSOR_TEST);else i0(J.SCISSOR_TEST)}function sJ(T){if(T===void 0)T=J.TEXTURE0+a-1;if(t!==T)J.activeTexture(T),t=T}function v(T,n,d){if(d===void 0)if(t===null)d=J.TEXTURE0+a-1;else d=t;let J0=$0[d];if(J0===void 0)J0={type:void 0,texture:void 0},$0[d]=J0;if(J0.type!==T||J0.texture!==n){if(t!==d)J.activeTexture(d),t=d;J.bindTexture(T,n||P0[T]),J0.type=T,J0.texture=n}}function iJ(){let T=$0[t];if(T!==void 0&&T.type!==void 0)J.bindTexture(T.type,null),T.type=void 0,T.texture=void 0}function a0(){try{J.compressedTexImage2D(...arguments)}catch(T){T0("WebGLState:",T)}}function DJ(){try{J.compressedTexImage3D(...arguments)}catch(T){T0("WebGLState:",T)}}function N0(){try{J.texSubImage2D(...arguments)}catch(T){T0("WebGLState:",T)}}function JJ(){try{J.texSubImage3D(...arguments)}catch(T){T0("WebGLState:",T)}}function C0(){try{J.compressedTexSubImage2D(...arguments)}catch(T){T0("WebGLState:",T)}}function j0(){try{J.compressedTexSubImage3D(...arguments)}catch(T){T0("WebGLState:",T)}}function IJ(){try{J.texStorage2D(...arguments)}catch(T){T0("WebGLState:",T)}}function z(){try{J.texStorage3D(...arguments)}catch(T){T0("WebGLState:",T)}}function R(){try{J.texImage2D(...arguments)}catch(T){T0("WebGLState:",T)}}function y(){try{J.texImage3D(...arguments)}catch(T){T0("WebGLState:",T)}}function e(T){if(q[T]!==void 0)return q[T];else return J.getParameter(T)}function r(T,n){if(q[T]!==n)J.pixelStorei(T,n),q[T]=n}function Z0(T){if(Q0.equals(T)===!1)J.scissor(T.x,T.y,T.z,T.w),Q0.copy(T)}function X0(T){if(L0.equals(T)===!1)J.viewport(T.x,T.y,T.z,T.w),L0.copy(T)}function l(T,n){let d=U.get(n);if(d===void 0)d=new WeakMap,U.set(n,d);let J0=d.get(T);if(J0===void 0)J0=J.getUniformBlockIndex(n,T.name),J.uniformBlockBinding(n,J0,J0),d.set(T,J0)}function s(T,n,d){let W0=U.get(n).get(T);if(X[W0]!==d)J.bindBufferBase(J.UNIFORM_BUFFER,W0,d),X[W0]=d}function H0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),D={},q={},t=null,$0={},N={},X={},O=new WeakMap,k=[],I=null,F=!1,G=null,B=null,A=null,V=null,_=null,C=null,E=null,L=new d0(0,0,0),P=0,p=!1,S=null,g=null,i=null,w=null,c=null,Q0.set(0,0,J.canvas.width,J.canvas.height),L0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:k0,disable:i0,bindFramebuffer:x0,drawBuffers:y0,useProgram:$J,setBlending:UJ,setMaterial:TJ,setFlipSided:hJ,setCullFace:GJ,setLineWidth:BJ,setPolygonOffset:SJ,setScissorTest:jJ,activeTexture:sJ,bindTexture:v,unbindTexture:iJ,compressedTexImage2D:a0,compressedTexImage3D:DJ,texImage2D:R,texImage3D:y,pixelStorei:r,getParameter:e,updateUBOMapping:l,uniformBlockBinding:s,texStorage2D:IJ,texStorage3D:z,texSubImage2D:N0,texSubImage3D:JJ,compressedTexSubImage2D:C0,compressedTexSubImage3D:j0,scissor:Z0,viewport:X0,reset:H0}}function wG(J,Q,$,W,Z,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new b0,D=new WeakMap,q=new Set,N,O=new WeakMap,k=new Set,I=new FinalizationRegistry((z)=>k.delete(z)),F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function G(z,R){return F?new OffscreenCanvas(z,R):l8("canvas")}function B(z,R,y){let e=1,r=IJ(z);if(r.width>y||r.height>y)e=y/Math.max(r.width,r.height);if(e<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let Z0=Math.floor(e*r.width),X0=Math.floor(e*r.height);if(N===void 0)N=G(Z0,X0);let l=R?G(Z0,X0):N;return l.width=Z0,l.height=X0,l.getContext("2d").drawImage(z,0,0,Z0,X0),w0("WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+Z0+"x"+X0+")."),l}else{if("data"in z)w0("WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return z}return z}function A(z){return z.generateMipmaps}function V(z){J.generateMipmap(z)}function _(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function C(z,R,y,e,r,Z0=!1){if(z!==null){if(J[z]!==void 0)return J[z];w0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let X0;if(e){if(X0=Q.get("EXT_texture_norm16"),!X0)w0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let l=R;if(R===J.RED){if(y===J.FLOAT)l=J.R32F;if(y===J.HALF_FLOAT)l=J.R16F;if(y===J.UNSIGNED_BYTE)l=J.R8;if(y===J.UNSIGNED_SHORT&&X0)l=X0.R16_EXT;if(y===J.SHORT&&X0)l=X0.R16_SNORM_EXT}if(R===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.R8UI;if(y===J.UNSIGNED_SHORT)l=J.R16UI;if(y===J.UNSIGNED_INT)l=J.R32UI;if(y===J.BYTE)l=J.R8I;if(y===J.SHORT)l=J.R16I;if(y===J.INT)l=J.R32I}if(R===J.RG){if(y===J.FLOAT)l=J.RG32F;if(y===J.HALF_FLOAT)l=J.RG16F;if(y===J.UNSIGNED_BYTE)l=J.RG8;if(y===J.UNSIGNED_SHORT&&X0)l=X0.RG16_EXT;if(y===J.SHORT&&X0)l=X0.RG16_SNORM_EXT}if(R===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.RG8UI;if(y===J.UNSIGNED_SHORT)l=J.RG16UI;if(y===J.UNSIGNED_INT)l=J.RG32UI;if(y===J.BYTE)l=J.RG8I;if(y===J.SHORT)l=J.RG16I;if(y===J.INT)l=J.RG32I}if(R===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.RGB8UI;if(y===J.UNSIGNED_SHORT)l=J.RGB16UI;if(y===J.UNSIGNED_INT)l=J.RGB32UI;if(y===J.BYTE)l=J.RGB8I;if(y===J.SHORT)l=J.RGB16I;if(y===J.INT)l=J.RGB32I}if(R===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)l=J.RGBA16UI;if(y===J.UNSIGNED_INT)l=J.RGBA32UI;if(y===J.BYTE)l=J.RGBA8I;if(y===J.SHORT)l=J.RGBA16I;if(y===J.INT)l=J.RGBA32I}if(R===J.RGB){if(y===J.UNSIGNED_SHORT&&X0)l=X0.RGB16_EXT;if(y===J.SHORT&&X0)l=X0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)l=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)l=J.R11F_G11F_B10F}if(R===J.RGBA){let s=Z0?mQ:l0.getTransfer(r);if(y===J.FLOAT)l=J.RGBA32F;if(y===J.HALF_FLOAT)l=J.RGBA16F;if(y===J.UNSIGNED_BYTE)l=s===e0?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&X0)l=X0.RGBA16_EXT;if(y===J.SHORT&&X0)l=X0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)l=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)l=J.RGB5_A1}if(l===J.R16F||l===J.R32F||l===J.RG16F||l===J.RG32F||l===J.RGBA16F||l===J.RGBA32F)Q.get("EXT_color_buffer_float");return l}function E(z,R){let y;if(z){if(R===null||R===h9||R===r9)y=J.DEPTH24_STENCIL8;else if(R===B9)y=J.DEPTH32F_STENCIL8;else if(R===s8)y=J.DEPTH24_STENCIL8,w0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===h9||R===r9)y=J.DEPTH_COMPONENT24;else if(R===B9)y=J.DEPTH_COMPONENT32F;else if(R===s8)y=J.DEPTH_COMPONENT16;return y}function L(z,R){if(A(z)===!0||z.isFramebufferTexture&&z.minFilter!==y9&&z.minFilter!==dJ)return Math.log2(Math.max(R.width,R.height))+1;else if(z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return R.mipmaps.length;else return 1}function P(z){let R=new WeakRef(z);W.get(z).__ref=R,k.add(R),I.register(z,R,R)}function p(z){let R=W.get(z).__ref;if(R===void 0)return;k.delete(R),I.unregister(R)}function S(z){i(z.target)}function g(z){w(z.target)}function i(z){if(z.removeEventListener("dispose",S),p(z),a(z),z.isVideoTexture)D.delete(z);if(z.isHTMLTexture)q.delete(z)}function w(z){z.removeEventListener("dispose",g),p(z),K0(z)}function c(){for(let z of k){let R=z.deref();if(R===void 0)continue;if(R.isRenderTarget===!0)w(R);else i(R)}k.clear(),q.clear()}function a(z){let R=W.get(z);if(R.__webglInit===void 0)return;let y=z.source,e=O.get(y);if(e){let r=e[R.__cacheKey];if(r.usedTimes--,r.usedTimes===0)b(z);if(Object.keys(e).length===0)O.delete(y)}W.remove(z)}function b(z){let R=W.get(z);J.deleteTexture(R.__webglTexture);let y=z.source,e=O.get(y);delete e[R.__cacheKey],H.memory.textures--}function K0(z){let R=W.get(z);if(R.__depthDisposeCallback)R.__depthDisposeCallback();let y=z.depthTexture;if(y&&y.renderTarget===z)i(y);if(z.isWebGLCubeRenderTarget)for(let r=0;r<6;r++){if(Array.isArray(R.__webglFramebuffer[r]))for(let Z0=0;Z0<R.__webglFramebuffer[r].length;Z0++)J.deleteFramebuffer(R.__webglFramebuffer[r][Z0]);else J.deleteFramebuffer(R.__webglFramebuffer[r]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[r])}else{if(Array.isArray(R.__webglFramebuffer))for(let r=0;r<R.__webglFramebuffer.length;r++)J.deleteFramebuffer(R.__webglFramebuffer[r]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let r=0;r<R.__webglColorRenderbuffer.length;r++)if(R.__webglColorRenderbuffer[r])J.deleteRenderbuffer(R.__webglColorRenderbuffer[r])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let e=z.textures;for(let r=0,Z0=e.length;r<Z0;r++){let X0=W.get(e[r]);if(X0.__webglTexture)J.deleteTexture(X0.__webglTexture),H.memory.textures--;W.remove(e[r])}W.remove(z)}let u=0;function t(){u=0}function $0(){return u}function V0(z){u=z}function o(){let z=u;if(z>=Z.maxTextures)w0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+Z.maxTextures);return u+=1,z}function Q0(z){let R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.mipmapsAutoUpdate),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function L0(z,R){let y=W.get(z);if(z.isVideoTexture)C0(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&y.__version!==z.version){let e=z.image;if(e===null)w0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)w0("WebGLRenderer: Texture marked for update but image is incomplete");else{TJ(y,z,R);return}}else if(z.isExternalTexture)y.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+R)}function _0(z,R){let y=W.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&y.__version!==z.version){TJ(y,z,R);return}else if(z.isExternalTexture)y.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+R)}function P0(z,R){let y=W.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&y.__version!==z.version){TJ(y,z,R);return}$.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+R)}function k0(z,R){let y=W.get(z);if(z.version>0&&y.__version!==z.version){hJ(y,z,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+R)}let i0={[dW]:J.REPEAT,[h7]:J.CLAMP_TO_EDGE,[uW]:J.MIRRORED_REPEAT},x0={[y9]:J.NEAREST,[cW]:J.NEAREST_MIPMAP_NEAREST,[n8]:J.NEAREST_MIPMAP_LINEAR,[dJ]:J.LINEAR,[b7]:J.LINEAR_MIPMAP_NEAREST,[f9]:J.LINEAR_MIPMAP_LINEAR},y0={[JZ]:J.NEVER,[uQ]:J.ALWAYS,[QZ]:J.LESS,[lQ]:J.LEQUAL,[$Z]:J.EQUAL,[dQ]:J.GEQUAL,[WZ]:J.GREATER,[ZZ]:J.NOTEQUAL};function $J(z,R){if(R.type===B9&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===dJ||R.magFilter===b7||R.magFilter===n8||R.magFilter===f9||R.minFilter===dJ||R.minFilter===b7||R.minFilter===n8||R.minFilter===f9))w0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,i0[R.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,i0[R.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,i0[R.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,x0[R.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,x0[R.minFilter]),R.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,y0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===y9)return;if(R.minFilter!==n8&&R.minFilter!==f9)return;if(R.type===B9&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||W.get(R).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,Z.getMaxAnisotropy())),W.get(R).__currentAnisotropy=R.anisotropy}}}function c0(z,R){let y=!1;if(z.__webglInit===void 0)z.__webglInit=!0,R.addEventListener("dispose",S),P(R);let e=R.source,r=O.get(e);if(r===void 0)r={},O.set(e,r);let Z0=Q0(R);if(Z0!==z.__cacheKey){if(r[Z0]===void 0)r[Z0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,y=!0;r[Z0].usedTimes++;let X0=r[z.__cacheKey];if(X0!==void 0){if(r[z.__cacheKey].usedTimes--,X0.usedTimes===0)b(R)}z.__cacheKey=Z0,z.__webglTexture=r[Z0].texture}return y}function XJ(z,R,y){return Math.floor(Math.floor(z/y)/R)}function UJ(z,R,y,e){let Z0=z.updateRanges;if(Z0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,y,e,R.data);else{Z0.sort((T,n)=>T.start-n.start);let X0=0;for(let T=1;T<Z0.length;T++){let n=Z0[X0],d=Z0[T],J0=n.start+n.count,W0=XJ(d.start,R.width,4),G0=XJ(n.start,R.width,4);if(d.start<=J0+1&&W0===G0&&XJ(d.start+d.count-1,R.width,4)===W0)n.count=Math.max(n.count,d.start+d.count-n.start);else++X0,Z0[X0]=d}Z0.length=X0+1;let l=$.getParameter(J.UNPACK_ROW_LENGTH),s=$.getParameter(J.UNPACK_SKIP_PIXELS),H0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let T=0,n=Z0.length;T<n;T++){let d=Z0[T],J0=Math.floor(d.start/4),W0=Math.ceil(d.count/4),G0=J0%R.width,z0=Math.floor(J0/R.width),I0=W0,q0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,G0),$.pixelStorei(J.UNPACK_SKIP_ROWS,z0),$.texSubImage2D(J.TEXTURE_2D,0,G0,z0,I0,1,y,e,R.data)}z.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,l),$.pixelStorei(J.UNPACK_SKIP_PIXELS,s),$.pixelStorei(J.UNPACK_SKIP_ROWS,H0)}}function TJ(z,R,y){let e=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)e=J.TEXTURE_3D;let r=c0(z,R),Z0=R.source;$.bindTexture(e,z.__webglTexture,J.TEXTURE0+y);let X0=W.get(Z0);if(Z0.version!==X0.__version||r===!0){if($.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let q0=l0.getPrimaries(l0.workingColorSpace),A0=R.colorSpace===e9?null:l0.getPrimaries(R.colorSpace),f0=R.colorSpace===e9||q0===A0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,f0)}$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment);let s=B(R.image,!1,Z.maxTextureSize);s=j0(R,s);let H0=K.convert(R.format,R.colorSpace),T=K.convert(R.type),n=C(R.internalFormat,H0,T,R.normalized,R.colorSpace,R.isVideoTexture);$J(e,R);let d,J0=R.mipmaps,W0=R.isVideoTexture!==!0,G0=X0.__version===void 0||r===!0,z0=Z0.dataReady,I0=L(R,s);if(R.isDepthTexture){if(n=E(R.format===b9,R.type),G0)if(W0)$.texStorage2D(J.TEXTURE_2D,1,n,s.width,s.height);else $.texImage2D(J.TEXTURE_2D,0,n,s.width,s.height,0,H0,T,null)}else if(R.isDataTexture)if(J0.length>0){if(W0&&G0)$.texStorage2D(J.TEXTURE_2D,I0,n,J0[0].width,J0[0].height);for(let q0=0,A0=J0.length;q0<A0;q0++)if(d=J0[q0],W0){if(z0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,T,d.data)}else $.texImage2D(J.TEXTURE_2D,q0,n,d.width,d.height,0,H0,T,d.data);R.generateMipmaps=!1}else if(W0){if(G0)$.texStorage2D(J.TEXTURE_2D,I0,n,s.width,s.height);if(z0)UJ(R,s,H0,T)}else $.texImage2D(J.TEXTURE_2D,0,n,s.width,s.height,0,H0,T,s.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(W0&&G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,I0,n,J0[0].width,J0[0].height,s.depth);for(let q0=0,A0=J0.length;q0<A0;q0++)if(d=J0[q0],R.format!==I9)if(H0!==null)if(W0){if(z0)if(R.layerUpdates.size>0){let f0=R$(d.width,d.height,R.format,R.type);for(let F0 of R.layerUpdates){let r0=d.data.subarray(F0*f0/d.data.BYTES_PER_ELEMENT,(F0+1)*f0/d.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,F0,d.width,d.height,1,H0,r0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,d.width,d.height,s.depth,H0,d.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,q0,n,d.width,d.height,s.depth,0,d.data,0,0);else w0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(z0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,d.width,d.height,s.depth,H0,T,d.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,q0,n,d.width,d.height,s.depth,0,H0,T,d.data);if(R.layerUpdates.size>0)R.clearLayerUpdates()}else{if(W0&&G0)$.texStorage2D(J.TEXTURE_2D,I0,n,J0[0].width,J0[0].height);for(let q0=0,A0=J0.length;q0<A0;q0++)if(d=J0[q0],R.format!==I9)if(H0!==null)if(W0){if(z0)$.compressedTexSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,d.data)}else $.compressedTexImage2D(J.TEXTURE_2D,q0,n,d.width,d.height,0,d.data);else w0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(z0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,d.width,d.height,H0,T,d.data)}else $.texImage2D(J.TEXTURE_2D,q0,n,d.width,d.height,0,H0,T,d.data)}else if(R.isDataArrayTexture)if(W0){if(G0)$.texStorage3D(J.TEXTURE_2D_ARRAY,I0,n,s.width,s.height,s.depth);if(z0)if(R.layerUpdates.size>0){let q0=R$(s.width,s.height,R.format,R.type);for(let A0 of R.layerUpdates){let f0=s.data.subarray(A0*q0/s.data.BYTES_PER_ELEMENT,(A0+1)*q0/s.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,A0,s.width,s.height,1,H0,T,f0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,s.width,s.height,s.depth,H0,T,s.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,n,s.width,s.height,s.depth,0,H0,T,s.data);else if(R.isData3DTexture)if(W0){if(G0)$.texStorage3D(J.TEXTURE_3D,I0,n,s.width,s.height,s.depth);if(z0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,s.width,s.height,s.depth,H0,T,s.data)}else $.texImage3D(J.TEXTURE_3D,0,n,s.width,s.height,s.depth,0,H0,T,s.data);else if(R.isFramebufferTexture){if(G0)if(W0)$.texStorage2D(J.TEXTURE_2D,I0,n,s.width,s.height);else{let{width:q0,height:A0}=s;for(let f0=0;f0<I0;f0++)$.texImage2D(J.TEXTURE_2D,f0,n,q0,A0,0,H0,T,null),q0>>=1,A0>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in J){let q0=J.canvas;if(!q0.hasAttribute("layoutsubtree"))q0.setAttribute("layoutsubtree","true");if(s.parentNode!==q0){q0.appendChild(s),q.add(R),q0.onpaint=(A0)=>{let f0=A0.changedElements;for(let F0 of q)if(f0.includes(F0.image))F0.needsUpdate=!0},q0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,s);else{let{RGBA:f0,RGBA:F0,UNSIGNED_BYTE:r0}=J;J.texElementImage2D(J.TEXTURE_2D,0,f0,F0,r0,s)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(J0.length>0){if(W0&&G0){let q0=IJ(J0[0]);$.texStorage2D(J.TEXTURE_2D,I0,n,q0.width,q0.height)}for(let q0=0,A0=J0.length;q0<A0;q0++)if(d=J0[q0],W0){if(z0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,H0,T,d)}else $.texImage2D(J.TEXTURE_2D,q0,n,H0,T,d);R.generateMipmaps=!1}else if(W0){if(G0){let q0=IJ(s);$.texStorage2D(J.TEXTURE_2D,I0,n,q0.width,q0.height)}if(z0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,H0,T,s)}else $.texImage2D(J.TEXTURE_2D,0,n,H0,T,s);if(A(R)&&R.mipmapsAutoUpdate===!0)V(e);if(X0.__version=Z0.version,R.onUpdate)R.onUpdate(R)}z.__version=R.version}function hJ(z,R,y){if(R.image.length!==6)return;let e=c0(z,R),r=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+y);let Z0=W.get(r);if(r.version!==Z0.__version||e===!0){$.activeTexture(J.TEXTURE0+y);let X0=l0.getPrimaries(l0.workingColorSpace),l=R.colorSpace===e9?null:l0.getPrimaries(R.colorSpace),s=R.colorSpace===e9||X0===l?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let H0=R.isCompressedTexture||R.image[0].isCompressedTexture,T=R.image[0]&&R.image[0].isDataTexture,n=[];for(let F0=0;F0<6;F0++){if(!H0&&!T)n[F0]=B(R.image[F0],!0,Z.maxCubemapSize);else n[F0]=T?R.image[F0].image:R.image[F0];n[F0]=j0(R,n[F0])}let d=n[0],J0=K.convert(R.format,R.colorSpace),W0=K.convert(R.type),G0=C(R.internalFormat,J0,W0,R.normalized,R.colorSpace),z0=R.isVideoTexture!==!0,I0=Z0.__version===void 0||e===!0,q0=r.dataReady,A0=L(R,d);$J(J.TEXTURE_CUBE_MAP,R);let f0;if(R.isDepthTexture){if(G0=E(R.format===b9,R.type),I0)if(z0)$.texStorage2D(J.TEXTURE_CUBE_MAP,1,G0,d.width,d.height);else for(let F0=0;F0<6;F0++)$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,d.width,d.height,0,J0,W0,null)}else if(H0){if(z0&&I0)$.texStorage2D(J.TEXTURE_CUBE_MAP,A0,G0,d.width,d.height);for(let F0=0;F0<6;F0++){f0=n[F0].mipmaps;for(let r0=0;r0<f0.length;r0++){let OJ=f0[r0];if(R.format!==I9)if(J0!==null)if(z0){if(q0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,r0,0,0,OJ.width,OJ.height,J0,OJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,r0,G0,OJ.width,OJ.height,0,OJ.data);else w0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(z0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,r0,0,0,OJ.width,OJ.height,J0,W0,OJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,r0,G0,OJ.width,OJ.height,0,J0,W0,OJ.data)}}}else{if(f0=R.mipmaps,z0&&I0){if(f0.length>0)A0++;let F0=IJ(n[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,A0,G0,F0.width,F0.height)}for(let F0=0;F0<6;F0++)if(T){if(z0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,n[F0].width,n[F0].height,J0,W0,n[F0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,n[F0].width,n[F0].height,0,J0,W0,n[F0].data);for(let r0=0;r0<f0.length;r0++){let E9=f0[r0].image[F0].image;if(z0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,r0+1,0,0,E9.width,E9.height,J0,W0,E9.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,r0+1,G0,E9.width,E9.height,0,J0,W0,E9.data)}}else{if(z0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,J0,W0,n[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,G0,J0,W0,n[F0]);for(let r0=0;r0<f0.length;r0++){let OJ=f0[r0];if(z0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,r0+1,0,0,J0,W0,OJ.image[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,r0+1,G0,J0,W0,OJ.image[F0])}}}if(A(R)&&R.mipmapsAutoUpdate===!0)V(J.TEXTURE_CUBE_MAP);if(Z0.__version=r.version,R.onUpdate)R.onUpdate(R)}z.__version=R.version}function GJ(z,R,y,e,r,Z0){let X0=K.convert(y.format,y.colorSpace),l=K.convert(y.type),s=C(y.internalFormat,X0,l,y.normalized,y.colorSpace),H0=W.get(R),T=W.get(y);if(T.__renderTarget=R,!H0.__hasExternalTextures){let n=Math.max(1,R.width>>Z0),d=Math.max(1,R.height>>Z0);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)$.texImage3D(r,Z0,s,n,d,R.depth,0,X0,l,null);else $.texImage2D(r,Z0,s,n,d,0,X0,l,null)}if($.bindFramebuffer(J.FRAMEBUFFER,z),JJ(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,r,T.__webglTexture,0,N0(R));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,r,T.__webglTexture,Z0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function BJ(z,R,y){if(J.bindRenderbuffer(J.RENDERBUFFER,z),R.depthBuffer){let e=R.depthTexture,r=e&&e.isDepthTexture?e.type:null,Z0=E(R.stencilBuffer,r),X0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(JJ(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,N0(R),Z0,R.width,R.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,N0(R),Z0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,z)}else{let e=R.textures;for(let r=0;r<e.length;r++){let Z0=e[r],X0=K.convert(Z0.format,Z0.colorSpace),l=K.convert(Z0.type),s=C(Z0.internalFormat,X0,l,Z0.normalized,Z0.colorSpace);if(JJ(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,N0(R),s,R.width,R.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,N0(R),s,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,s,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function SJ(z,R,y){let e=R.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let r=W.get(R.depthTexture);r.__renderTarget=R;let Z0=e?R.depthTexture.image[0]:R.depthTexture.image;if(!r.__webglTexture||Z0.width!==R.width||Z0.height!==R.height)Z0.width=R.width,Z0.height=R.height,R.depthTexture.needsUpdate=!0;if(e)k0(R.depthTexture,0);else L0(R.depthTexture,0);let X0=r.__webglTexture,l=N0(R),s=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,H0=R.depthTexture.format===b9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===C8)if(JJ(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,s,X0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,s,X0,0);else if(R.depthTexture.format===b9)if(JJ(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,s,X0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,s,X0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jJ(z){let R=W.get(z),y=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){let e=z.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(e){let r=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,e.removeEventListener("dispose",r)};e.addEventListener("dispose",r),R.__depthDisposeCallback=r}R.__boundDepthTexture=e}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(y)for(let e=0;e<6;e++)SJ(R.__webglFramebuffer[e],z,e);else if(z.texture.mipmaps.length>0)SJ(R.__webglFramebuffer[0],z,0);else SJ(R.__webglFramebuffer,z,0);else if(y){R.__webglDepthbuffer=[];for(let e=0;e<6;e++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[e]),R.__webglDepthbuffer[e]===void 0)R.__webglDepthbuffer[e]=J.createRenderbuffer(),BJ(R.__webglDepthbuffer[e],z,!1);else{let r=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=R.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,Z0)}}else{if(z.texture.mipmaps.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),BJ(R.__webglDepthbuffer,z,!1);else{let r=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,Z0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function sJ(z,R,y){let e=W.get(z);if(R!==void 0)GJ(e.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)jJ(z)}function v(z){let R=z.texture,y=W.get(z),e=W.get(R);z.addEventListener("dispose",g),P(z);let r=z.textures,Z0=z.isWebGLCubeRenderTarget===!0,X0=r.length>1;if(!X0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=R.version,H.memory.textures++}if(Z0){y.__webglFramebuffer=[];for(let l=0;l<6;l++)if(R.mipmaps.length>0){y.__webglFramebuffer[l]=[];for(let s=0;s<R.mipmaps.length;s++)y.__webglFramebuffer[l][s]=J.createFramebuffer()}else y.__webglFramebuffer[l]=J.createFramebuffer()}else{if(R.mipmaps.length>0){y.__webglFramebuffer=[];for(let l=0;l<R.mipmaps.length;l++)y.__webglFramebuffer[l]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(X0)for(let l=0,s=r.length;l<s;l++){let H0=W.get(r[l]);if(H0.__webglTexture===void 0)H0.__webglTexture=J.createTexture(),H.memory.textures++}if(z.samples>0&&JJ(z)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let l=0;l<r.length;l++){let s=r[l];y.__webglColorRenderbuffer[l]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[l]);let H0=K.convert(s.format,s.colorSpace),T=K.convert(s.type),n=C(s.internalFormat,H0,T,s.normalized,s.colorSpace,z.isXRRenderTarget===!0),d=N0(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,d,n,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+l,J.RENDERBUFFER,y.__webglColorRenderbuffer[l])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),BJ(y.__webglDepthRenderbuffer,z,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Z0){$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),$J(J.TEXTURE_CUBE_MAP,R);for(let l=0;l<6;l++)if(R.mipmaps.length>0)for(let s=0;s<R.mipmaps.length;s++)GJ(y.__webglFramebuffer[l][s],z,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,s);else GJ(y.__webglFramebuffer[l],z,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,0);if(A(R))V(J.TEXTURE_CUBE_MAP);else if(R.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,R.mipmaps.length-1);$.unbindTexture()}else if(X0){for(let l=0,s=r.length;l<s;l++){let H0=r[l],T=W.get(H0),n=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)n=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(n,T.__webglTexture),$J(n,H0),GJ(y.__webglFramebuffer,z,H0,J.COLOR_ATTACHMENT0+l,n,0),A(H0))V(n)}$.unbindTexture()}else{let l=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)l=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(l,e.__webglTexture),$J(l,R),R.mipmaps.length>0)for(let s=0;s<R.mipmaps.length;s++)GJ(y.__webglFramebuffer[s],z,R,J.COLOR_ATTACHMENT0,l,s);else GJ(y.__webglFramebuffer,z,R,J.COLOR_ATTACHMENT0,l,0);if(A(R))V(l);else if(R.mipmaps.length>0)J.texParameteri(l,J.TEXTURE_MAX_LEVEL,R.mipmaps.length-1);$.unbindTexture()}if(z.depthBuffer)jJ(z)}function iJ(z){let R=z.textures;for(let y=0,e=R.length;y<e;y++){let r=R[y];if(A(r)&&r.mipmapsAutoUpdate===!0){let Z0=_(z),X0=W.get(r).__webglTexture;$.bindTexture(Z0,X0),V(Z0),$.unbindTexture()}}}let a0=[];function DJ(z){if(z.samples>0){if(JJ(z)===!1){let{textures:R,width:y,height:e}=z,r=J.COLOR_BUFFER_BIT,Z0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=W.get(z),l=R.length>1;if(l)for(let H0=0;H0<R.length;H0++)$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,null,0);if($.bindFramebuffer(J.READ_FRAMEBUFFER,X0.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer);for(let H0=0;H0<R.length;H0++){if(z.resolveDepthBuffer){if(z.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(l){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let T=W.get(R[H0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,T,0)}if(J.blitFramebuffer(0,0,y,e,0,0,y,e,r,J.NEAREST),X===!0){if(a0.length=0,a0.push(J.COLOR_ATTACHMENT0+H0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)a0.push(Z0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,a0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),l)for(let H0=0;H0<R.length;H0++){$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let T=W.get(R[H0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,T,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&X){let R=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function N0(z){return Math.min(Z.maxSamples,z.samples)}function JJ(z){let R=W.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function C0(z){let R=H.render.frame;if(D.get(z)!==R)D.set(z,R),z.update()}function j0(z,R){let{colorSpace:y,format:e,type:r}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return R;if(y!==pQ&&y!==e9)if(l0.getTransfer(y)===e0){if(e!==I9||r!==eJ)w0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else T0("WebGLTextures: Unsupported texture color space:",y);return R}function IJ(z){if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement)U.width=z.naturalWidth||z.width,U.height=z.naturalHeight||z.height;else if(typeof VideoFrame<"u"&&z instanceof VideoFrame)U.width=z.displayWidth,U.height=z.displayHeight;else U.width=z.width,U.height=z.height;return U}this.allocateTextureUnit=o,this.resetTextureUnits=t,this.getTextureUnits=$0,this.setTextureUnits=V0,this.setTexture2D=L0,this.setTexture2DArray=_0,this.setTexture3D=P0,this.setTextureCube=k0,this.rebindTextures=sJ,this.setupRenderTarget=v,this.updateRenderTargetMipmap=iJ,this.updateMultisampleRenderTarget=DJ,this.setupDepthRenderbuffer=jJ,this.setupFrameBufferTexture=GJ,this.useMultisampledRTT=JJ,this.dispose=c}function TG(J,Q){function $(W,Z=e9){let K,H=l0.getTransfer(Z);if(W===eJ)return J.UNSIGNED_BYTE;if(W===ZQ)return J.UNSIGNED_SHORT_4_4_4_4;if(W===KQ)return J.UNSIGNED_SHORT_5_5_5_1;if(W===iW)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===oW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===nW)return J.BYTE;if(W===sW)return J.SHORT;if(W===s8)return J.UNSIGNED_SHORT;if(W===WQ)return J.INT;if(W===h9)return J.UNSIGNED_INT;if(W===B9)return J.FLOAT;if(W===X9)return J.HALF_FLOAT;if(W===aW)return J.ALPHA;if(W===rW)return J.RGB;if(W===I9)return J.RGBA;if(W===C8)return J.DEPTH_COMPONENT;if(W===b9)return J.DEPTH_STENCIL;if(W===tW)return J.RED;if(W===HQ)return J.RED_INTEGER;if(W===t9)return J.RG;if(W===YQ)return J.RG_INTEGER;if(W===XQ)return J.RGBA_INTEGER;if(W===x7||W===g7||W===p7||W===m7)if(H===e0)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===x7)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===g7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===p7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===m7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===x7)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===g7)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===p7)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===m7)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===UQ||W===GQ||W===NQ||W===EQ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===UQ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===GQ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===NQ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===EQ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===qQ||W===FQ||W===DQ||W===OQ||W===RQ||W===l7||W===MQ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===qQ||W===FQ)return H===e0?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===DQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===OQ)return K.COMPRESSED_R11_EAC;if(W===RQ)return K.COMPRESSED_SIGNED_R11_EAC;if(W===l7)return K.COMPRESSED_RG11_EAC;if(W===MQ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===LQ||W===kQ||W===VQ||W===BQ||W===IQ||W===zQ||W===AQ||W===_Q||W===PQ||W===CQ||W===wQ||W===TQ||W===SQ||W===jQ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===LQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===kQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===VQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===BQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===IQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===zQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===AQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===_Q)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===PQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===CQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===wQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===TQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===SQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===jQ)return H===e0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===vQ||W===yQ||W===fQ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===vQ)return H===e0?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===yQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===fQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===hQ||W===bQ||W===d7||W===xQ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===hQ)return K.COMPRESSED_RED_RGTC1_EXT;if(W===bQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===d7)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===xQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===r9)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var SG=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jG=`
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

}`;class JK{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new J6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new _9({vertexShader:SG,fragmentShader:jG,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new J9(new p9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QK extends z9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",Y=1,X=null,U=null,D=null,q=null,N=null,O=null,k=typeof XRWebGLBinding<"u",I=new JK,F={},G=Q.getContextAttributes(),B=null,A=null,V=[],_=[],C=new b0,E=null,L=null,P=new gJ;P.viewport=new YJ;let p=new gJ;p.viewport=new YJ;let S=[P,p],g=new F$,i=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let Q0=V[o];if(Q0===void 0)Q0=new a8,V[o]=Q0;return Q0.getTargetRaySpace()},this.getControllerGrip=function(o){let Q0=V[o];if(Q0===void 0)Q0=new a8,V[o]=Q0;return Q0.getGripSpace()},this.getHand=function(o){let Q0=V[o];if(Q0===void 0)Q0=new a8,V[o]=Q0;return Q0.getHandSpace()};function c(o){let Q0=_.indexOf(o.inputSource);if(Q0===-1)return;let L0=V[Q0];if(L0!==void 0)L0.update(o.inputSource,o.frame,X||K),L0.dispatchEvent({type:o.type,data:o.inputSource})}function a(){W.removeEventListener("select",c),W.removeEventListener("selectstart",c),W.removeEventListener("selectend",c),W.removeEventListener("squeeze",c),W.removeEventListener("squeezestart",c),W.removeEventListener("squeezeend",c),W.removeEventListener("end",a),W.removeEventListener("inputsourceschange",b);for(let o=0;o<V.length;o++){let Q0=_[o];if(Q0===null)continue;_[o]=null,V[o].disconnect(Q0)}i=null,w=null,I.reset();for(let o in F)delete F[o];if(J.setRenderTarget(B),N=null,q=null,D=null,W=null,A=null,V0.stop(),$.isPresenting=!1,J.setPixelRatio(E),J.setSize(C.width,C.height,!1),L!==null){let o=L.camera;o.fov=L.fov,o.zoom=L.zoom,o.updateProjectionMatrix(),L=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(Z=o,$.isPresenting===!0)w0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(H=o,$.isPresenting===!0)w0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(o){X=o},this.getBaseLayer=function(){return q!==null?q:N},this.getBinding=function(){if(D===null&&k)D=new XRWebGLBinding(W,Q);return D},this.getFrame=function(){return O},this.getSession=function(){return W},this.setSession=async function(o){if(W=o,W!==null){if(B=J.getRenderTarget(),W.addEventListener("select",c),W.addEventListener("selectstart",c),W.addEventListener("selectend",c),W.addEventListener("squeeze",c),W.addEventListener("squeezestart",c),W.addEventListener("squeezeend",c),W.addEventListener("end",a),W.addEventListener("inputsourceschange",b),G.xrCompatible!==!0)await Q.makeXRCompatible();if(E=J.getPixelRatio(),J.getSize(C),!(k&&("createProjectionLayer"in XRWebGLBinding.prototype))){let L0={antialias:G.antialias,alpha:!0,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:Z};N=new XRWebGLLayer(W,Q,L0),W.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),A=new uJ(N.framebufferWidth,N.framebufferHeight,{format:I9,type:eJ,colorSpace:J.outputColorSpace,stencilBuffer:G.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let L0=null,_0=null,P0=null;if(G.depth)P0=G.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,L0=G.stencil?b9:C8,_0=G.stencil?r9:h9;let k0={colorFormat:Q.RGBA8,depthFormat:P0,scaleFactor:Z};D=this.getBinding(),q=D.createProjectionLayer(k0),W.updateRenderState({layers:[q]}),J.setPixelRatio(1),J.setSize(q.textureWidth,q.textureHeight,!1),A=new uJ(q.textureWidth,q.textureHeight,{format:I9,type:eJ,depthTexture:new x9(q.textureWidth,q.textureHeight,_0,void 0,void 0,void 0,void 0,void 0,void 0,L0),stencilBuffer:G.stencil,colorSpace:J.outputColorSpace,samples:G.antialias?4:0,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1,storeMultisampledDepthBuffer:q.ignoreDepthValues===!1,storeMultisampledStencilBuffer:q.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await W.requestReferenceSpace(H),V0.setContext(W),V0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function b(o){for(let Q0=0;Q0<o.removed.length;Q0++){let L0=o.removed[Q0],_0=_.indexOf(L0);if(_0>=0)_[_0]=null,V[_0].disconnect(L0)}for(let Q0=0;Q0<o.added.length;Q0++){let L0=o.added[Q0],_0=_.indexOf(L0);if(_0===-1){for(let k0=0;k0<V.length;k0++)if(k0>=_.length){_.push(L0),_0=k0;break}else if(_[k0]===null){_[k0]=L0,_0=k0;break}if(_0===-1)break}let P0=V[_0];if(P0)P0.connect(L0)}}function K0(o,Q0){if(Q0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(Q0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(W===null)return;let{near:Q0,far:L0}=o;if(I.texture!==null){if(I.depthNear>0)Q0=I.depthNear;if(I.depthFar>0)L0=I.depthFar}if(g.near=p.near=P.near=Q0,g.far=p.far=P.far=L0,i!==g.near||w!==g.far)W.updateRenderState({depthNear:g.near,depthFar:g.far}),i=g.near,w=g.far;g.layers.mask=o.layers.mask|6,P.layers.mask=g.layers.mask&-5,p.layers.mask=g.layers.mask&-3;let _0=o.parent,P0=g.cameras;K0(g,_0);for(let k0=0;k0<P0.length;k0++)K0(P0[k0],_0);if(g.projectionMatrix.copy(P.projectionMatrix),g.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&o.isPerspectiveCamera)L={camera:o,fov:o.fov,zoom:o.zoom};u(o,g,_0)};function u(o,Q0,L0){if(L0===null)o.matrix.copy(Q0.matrixWorld);else o.matrix.copy(L0.matrixWorld),o.matrix.invert(),o.matrix.multiply(Q0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(Q0.projectionMatrix),o.projectionMatrixInverse.copy(Q0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=v7*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return g},this.getFoveation=function(){if(q===null&&N===null)return;return Y},this.setFoveation=function(o){if(Y=o,q!==null)q.fixedFoveation=o;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=o},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(g)},this.getCameraTexture=function(o){return F[o]};let t=null;function $0(o,Q0){if(U=Q0.getViewerPose(X||K),O=Q0,U!==null){let L0=U.views;if(N!==null)J.setRenderTargetFramebuffer(A,N.framebuffer),J.setRenderTarget(A);let _0=!1;if(L0.length!==g.cameras.length)g.cameras.length=0,_0=!0;for(let x0=0;x0<L0.length;x0++){let y0=L0[x0],$J=null;if(N!==null)$J=N.getViewport(y0);else{let XJ=D.getViewSubImage(q,y0);if($J=XJ.viewport,x0===0)J.setRenderTargetTextures(A,XJ.colorTexture,XJ.depthStencilTexture),J.setRenderTarget(A)}let c0=S[x0];if(c0===void 0)c0=new gJ,c0.layers.enable(x0),c0.viewport=new YJ,S[x0]=c0;if(c0.matrix.fromArray(y0.transform.matrix),c0.matrix.decompose(c0.position,c0.quaternion,c0.scale),c0.projectionMatrix.fromArray(y0.projectionMatrix),c0.projectionMatrixInverse.copy(c0.projectionMatrix).invert(),c0.viewport.set($J.x,$J.y,$J.width,$J.height),x0===0)g.matrix.copy(c0.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale);if(_0===!0)g.cameras.push(c0)}let P0=W.enabledFeatures;if(P0&&P0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&k){D=$.getBinding();let x0=D.getDepthInformation(L0[0]);if(x0&&x0.isValid&&x0.texture)I.init(x0,W.renderState)}if(P0&&P0.includes("camera-access")&&k){J.state.unbindTexture(),D=$.getBinding();for(let x0=0;x0<L0.length;x0++){let y0=L0[x0].camera;if(y0){let $J=F[y0];if(!$J)$J=new J6,F[y0]=$J;let c0=D.getCameraImage(y0);$J.sourceTexture=c0}}}}for(let L0=0;L0<V.length;L0++){let _0=_[L0],P0=V[L0];if(_0!==null&&P0!==void 0)P0.update(_0,Q0,X||K)}if(t)t(o,Q0);if(Q0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Q0});O=null}let V0=new gZ;V0.setAnimationLoop($0),this.setAnimationLoop=function(o){t=o},this.dispose=function(){}}}var vG=new WJ,$K=new S0;$K.set(-1,0,0,0,1,0,0,0,1);function yG(J,Q){function $(F,G){if(F.matrixAutoUpdate===!0)F.updateMatrix();G.value.copy(F.matrix)}function W(F,G){if(G.color.getRGB(F.fogColor.value,J$(J)),G.isFog)F.fogNear.value=G.near,F.fogFar.value=G.far;else if(G.isFogExp2)F.fogDensity.value=G.density}function Z(F,G,B,A,V){if(G.isNodeMaterial)G.uniformsNeedUpdate=!1;else if(G.isMeshBasicMaterial)K(F,G);else if(G.isMeshLambertMaterial){if(K(F,G),G.envMap)F.envMapIntensity.value=G.envMapIntensity}else if(G.isMeshToonMaterial)K(F,G),q(F,G);else if(G.isMeshPhongMaterial){if(K(F,G),D(F,G),G.envMap)F.envMapIntensity.value=G.envMapIntensity}else if(G.isMeshStandardMaterial){if(K(F,G),N(F,G),G.isMeshPhysicalMaterial)O(F,G,V)}else if(G.isMeshMatcapMaterial)K(F,G),k(F,G);else if(G.isMeshDepthMaterial)K(F,G);else if(G.isMeshDistanceMaterial)K(F,G),I(F,G);else if(G.isMeshNormalMaterial)K(F,G);else if(G.isLineBasicMaterial){if(H(F,G),G.isLineDashedMaterial)Y(F,G)}else if(G.isPointsMaterial)X(F,G,B,A);else if(G.isSpriteMaterial)U(F,G);else if(G.isShadowMaterial)F.color.value.copy(G.color),F.opacity.value=G.opacity;else if(G.isShaderMaterial)G.uniformsNeedUpdate=!1}function K(F,G){if(F.opacity.value=G.opacity,G.color)F.diffuse.value.copy(G.color);if(G.emissive)F.emissive.value.copy(G.emissive).multiplyScalar(G.emissiveIntensity);if(G.map)F.map.value=G.map,$(G.map,F.mapTransform);if(G.alphaMap)F.alphaMap.value=G.alphaMap,$(G.alphaMap,F.alphaMapTransform);if(G.bumpMap){if(F.bumpMap.value=G.bumpMap,$(G.bumpMap,F.bumpMapTransform),F.bumpScale.value=G.bumpScale,G.side===vJ)F.bumpScale.value*=-1}if(G.normalMap){if(F.normalMap.value=G.normalMap,$(G.normalMap,F.normalMapTransform),F.normalScale.value.copy(G.normalScale),G.side===vJ)F.normalScale.value.negate()}if(G.displacementMap)F.displacementMap.value=G.displacementMap,$(G.displacementMap,F.displacementMapTransform),F.displacementScale.value=G.displacementScale,F.displacementBias.value=G.displacementBias;if(G.emissiveMap)F.emissiveMap.value=G.emissiveMap,$(G.emissiveMap,F.emissiveMapTransform);if(G.specularMap)F.specularMap.value=G.specularMap,$(G.specularMap,F.specularMapTransform);if(G.alphaTest>0)F.alphaTest.value=G.alphaTest;let B=Q.get(G),A=B.envMap,V=B.envMapRotation;if(A){if(F.envMap.value=A,F.envMapRotation.value.setFromMatrix4(vG.makeRotationFromEuler(V)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)F.envMapRotation.value.premultiply($K);F.reflectivity.value=G.reflectivity,F.ior.value=G.ior,F.refractionRatio.value=G.refractionRatio}if(G.lightMap)F.lightMap.value=G.lightMap,F.lightMapIntensity.value=G.lightMapIntensity,$(G.lightMap,F.lightMapTransform);if(G.aoMap)F.aoMap.value=G.aoMap,F.aoMapIntensity.value=G.aoMapIntensity,$(G.aoMap,F.aoMapTransform)}function H(F,G){if(F.diffuse.value.copy(G.color),F.opacity.value=G.opacity,G.map)F.map.value=G.map,$(G.map,F.mapTransform)}function Y(F,G){F.dashSize.value=G.dashSize,F.totalSize.value=G.dashSize+G.gapSize,F.scale.value=G.scale}function X(F,G,B,A){if(F.diffuse.value.copy(G.color),F.opacity.value=G.opacity,F.size.value=G.size*B,F.scale.value=A*0.5,G.map)F.map.value=G.map,$(G.map,F.uvTransform);if(G.alphaMap)F.alphaMap.value=G.alphaMap,$(G.alphaMap,F.alphaMapTransform);if(G.alphaTest>0)F.alphaTest.value=G.alphaTest}function U(F,G){if(F.diffuse.value.copy(G.color),F.opacity.value=G.opacity,F.rotation.value=G.rotation,G.map)F.map.value=G.map,$(G.map,F.mapTransform);if(G.alphaMap)F.alphaMap.value=G.alphaMap,$(G.alphaMap,F.alphaMapTransform);if(G.alphaTest>0)F.alphaTest.value=G.alphaTest}function D(F,G){F.specular.value.copy(G.specular),F.shininess.value=Math.max(G.shininess,0.0001)}function q(F,G){if(G.gradientMap)F.gradientMap.value=G.gradientMap}function N(F,G){if(F.metalness.value=G.metalness,G.metalnessMap)F.metalnessMap.value=G.metalnessMap,$(G.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=G.roughness,G.roughnessMap)F.roughnessMap.value=G.roughnessMap,$(G.roughnessMap,F.roughnessMapTransform);if(G.envMap)F.envMapIntensity.value=G.envMapIntensity}function O(F,G,B){if(F.ior.value=G.ior,G.diffuseRoughness>0){if(F.diffuseRoughness.value=G.diffuseRoughness,G.diffuseRoughnessMap)F.diffuseRoughnessMap.value=G.diffuseRoughnessMap,$(G.diffuseRoughnessMap,F.diffuseRoughnessMapTransform)}if(G.sheen>0){if(F.sheenColor.value.copy(G.sheenColor).multiplyScalar(G.sheen),F.sheenRoughness.value=G.sheenRoughness,G.sheenColorMap)F.sheenColorMap.value=G.sheenColorMap,$(G.sheenColorMap,F.sheenColorMapTransform);if(G.sheenRoughnessMap)F.sheenRoughnessMap.value=G.sheenRoughnessMap,$(G.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(G.clearcoat>0){if(F.clearcoat.value=G.clearcoat,F.clearcoatRoughness.value=G.clearcoatRoughness,G.clearcoatMap)F.clearcoatMap.value=G.clearcoatMap,$(G.clearcoatMap,F.clearcoatMapTransform);if(G.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=G.clearcoatRoughnessMap,$(G.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(G.clearcoatNormalMap){if(F.clearcoatNormalMap.value=G.clearcoatNormalMap,$(G.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(G.clearcoatNormalScale),G.side===vJ)F.clearcoatNormalScale.value.negate()}}if(G.dispersion>0)F.dispersion.value=G.dispersion;if(G.retroreflectivity>0)F.retroreflectivity.value=G.retroreflectivity;if(G.iridescence>0){if(F.iridescence.value=G.iridescence,F.iridescenceIOR.value=G.iridescenceIOR,F.iridescenceThicknessMinimum.value=G.iridescenceThicknessMinimum,F.iridescenceThicknessMaximum.value=G.iridescenceThicknessMaximum,G.iridescenceMap)F.iridescenceMap.value=G.iridescenceMap,$(G.iridescenceMap,F.iridescenceMapTransform);if(G.iridescenceThicknessMap)F.iridescenceThicknessMap.value=G.iridescenceThicknessMap,$(G.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(G.transmission>0){if(F.transmission.value=G.transmission,F.transmissionSamplerMap.value=B.texture,F.transmissionSamplerSize.value.set(B.width,B.height),G.transmissionMap)F.transmissionMap.value=G.transmissionMap,$(G.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=G.thickness,G.thicknessMap)F.thicknessMap.value=G.thicknessMap,$(G.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=G.attenuationDistance,F.attenuationColor.value.copy(G.attenuationColor)}if(G.anisotropy>0){if(F.anisotropyVector.value.set(G.anisotropy*Math.cos(G.anisotropyRotation),G.anisotropy*Math.sin(G.anisotropyRotation)),G.anisotropyMap)F.anisotropyMap.value=G.anisotropyMap,$(G.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=G.specularIntensity,F.specularColor.value.copy(G.specularColor),G.specularColorMap)F.specularColorMap.value=G.specularColorMap,$(G.specularColorMap,F.specularColorMapTransform);if(G.specularIntensityMap)F.specularIntensityMap.value=G.specularIntensityMap,$(G.specularIntensityMap,F.specularIntensityMapTransform)}function k(F,G){if(G.matcap)F.matcap.value=G.matcap}function I(F,G){let B=Q.get(G).light;F.referencePosition.value.setFromMatrixPosition(B.matrixWorld),F.nearDistance.value=B.shadow.camera.near,F.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function fG(J,Q,$,W){let Z={},K={};function H(B,A){let V=A.program;W.uniformBlockBinding(B,V,Z[B.id])}function Y(B,A){let V=Z[B.id];if(V===void 0)k(B),V=X(B),Z[B.id]=V,B.addEventListener("dispose",F);let _=A.program;W.updateUBOMapping(B,_);let C=Q.render.frame;if(K[B.id]!==C)U(B),K[B.id]=C}function X(B){let A=J.createBuffer(),V=B.__size,_=B.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,V,_),J.bindBuffer(J.UNIFORM_BUFFER,null),A}function U(B){let A=Z[B.id],V=B.uniforms,_=B.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let C=0,E=V.length;C<E;C++){let L=V[C];if(Array.isArray(L))for(let P=0,p=L.length;P<p;P++)D(L[P],C,P,_);else D(L,C,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function D(B,A,V,_){if(N(B,A,V,_)===!0){let{__offset:C,value:E}=B;if(Array.isArray(E)){let L=0;for(let P=0;P<E.length;P++){let p=E[P],S=I(p,!0);q(p,B.__data,L),L+=S.storage/Float32Array.BYTES_PER_ELEMENT}}else q(E,B.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,C,B.__data)}}function q(B,A,V){if(typeof B==="number"||typeof B==="boolean")A[V]=B;else if(B.isMatrix3)A[V]=B.elements[0],A[V+1]=B.elements[1],A[V+2]=B.elements[2],A[V+3]=0,A[V+4]=B.elements[3],A[V+5]=B.elements[4],A[V+6]=B.elements[5],A[V+7]=0,A[V+8]=B.elements[6],A[V+9]=B.elements[7],A[V+10]=B.elements[8],A[V+11]=0;else if(ArrayBuffer.isView(B))A.set(B.subarray(0,A.length-V),V);else B.toArray(A,V)}function N(B,A,V,_){let C=B.value,E=A+"_"+V;if(Array.isArray(C)){if(_[E]===void 0)_[E]=[];let L=_[E],P=!1;for(let p=0;p<C.length;p++)if(O(C[p],L,p)===!0)P=!0;return P}return O(C,_,E)}function O(B,A,V){if(A[V]===void 0){if(typeof B==="number"||typeof B==="boolean")A[V]=B;else if(ArrayBuffer.isView(B))A[V]=B.slice();else A[V]=B.clone();return!0}else{let _=A[V];if(typeof B==="number"||typeof B==="boolean"){if(_!==B)return A[V]=B,!0}else if(ArrayBuffer.isView(B))return!0;else if(_.equals(B)===!1)return _.copy(B),!0}return!1}function k(B){let A=B.uniforms,V=0,_=16;for(let E=0,L=A.length;E<L;E++){let P=Array.isArray(A[E])?A[E]:[A[E]];for(let p=0,S=P.length;p<S;p++){let g=P[p],i=Array.isArray(g.value)?g.value:[g.value],w=Array.isArray(A[E])||Array.isArray(g.value),c=V;for(let b=0,K0=i.length;b<K0;b++){let u=i[b],t=I(u,w),$0=V%_,V0=$0%t.boundary,o=$0+V0;if(V+=V0,o!==0&&_-o<t.storage)V+=_-o;if(b===0)c=V;V+=t.storage}let a=g.type==="int"?Int32Array:g.type==="uint"?Uint32Array:Float32Array;g.__data=new a((V-c)/Float32Array.BYTES_PER_ELEMENT),g.__offset=c}}let C=V%_;if(C>0)V+=_-C;return B.__size=V,B.__cache={},this}function I(B,A){let V={boundary:0,storage:0};if(typeof B==="number"||typeof B==="boolean")V.boundary=4,V.storage=4;else if(B.isVector2)V.boundary=8,V.storage=8;else if(B.isVector3||B.isColor)V.boundary=16,V.storage=12;else if(B.isVector4)V.boundary=16,V.storage=16;else if(B.isMatrix3)V.boundary=16,V.storage=48;else if(B.isMatrix4)V.boundary=16,V.storage=64;else if(B.isTexture)w0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(B))V.boundary=16,V.storage=B.byteLength;else w0("WebGLRenderer: Unsupported uniform value type.",B);if(A===!0)V.boundary=16,V.storage=Math.ceil(V.storage/16)*16;return V}function F(B){let A=B.target;A.removeEventListener("dispose",F),J.deleteBuffer(Z[A.id]),delete Z[A.id],delete K[A.id]}function G(){for(let B in Z)J.deleteBuffer(Z[B]);Z={},K={}}return{bind:H,update:Y,dispose:G}}var hG=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),U9=null;function bG(){if(U9===null)U9=new eQ(hG,16,16,t9,X9),U9.name="DFG_LUT",U9.minFilter=dJ,U9.magFilter=dJ,U9.wrapS=h7,U9.wrapT=h7,U9.generateMipmaps=!1,U9.needsUpdate=!0;return U9}class V${constructor(J={}){let{canvas:Q=KZ(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:D=!1,reversedDepthBuffer:q=!1,outputBufferType:N=eJ}=J;this.isWebGLRenderer=!0;let O;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");O=$.getContextAttributes().alpha}else O=K;let k=N,I=new Set([XQ,YQ,HQ]),F=new Set([eJ,h9,s8,r9,ZQ,KQ]),G=new Uint32Array(4),B=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},V=null,_=null,C=[],E=[],L=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Y9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,p=!1,S=null,g=null,i=null,w=null;this._outputColorSpace=u7;let c=0,a=0,b=null,K0=-1,u=null,t=new YJ,$0=new YJ,V0=null,o=new d0(0),Q0=0,L0=Q.width,_0=Q.height,P0=1,k0=null,i0=null,x0=new YJ(0,0,L0,_0),y0=new YJ(0,0,L0,_0),$J=!1,c0=new o9,XJ=new a7,UJ=!1,TJ=!1,hJ=new WJ,GJ=new x,BJ=new YJ,SJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jJ=!1;function sJ(){return b===null?P0:1}let v=$;function iJ(M,j){return Q.getContext(M,j)}let a0,DJ,N0,JJ,C0,j0,IJ,z,R,y,e,r,Z0,X0,l,s,H0,T,n,d,J0,W0,G0;try{let M={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:D};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${UW}`);if(Q.addEventListener("webglcontextlost",q0,!1),Q.addEventListener("webglcontextrestored",A0,!1),Q.addEventListener("webglcontextcreationerror",f0,!1),v===null){if(v=iJ("webgl2",M),v===null)if(iJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}z0()}catch(M){throw Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",A0,!1),Q.removeEventListener("webglcontextcreationerror",f0,!1),T0("WebGLRenderer: "+M.message),M}function z0(){if(a0=new iX(v),a0.init(),J0=new TG(v,a0),DJ=new bX(v,a0,J,J0),N0=new CG(v,a0),DJ.reversedDepthBuffer&&q)N0.buffers.depth.setReversed(!0);g=v.createFramebuffer(),i=v.createFramebuffer(),w=v.createFramebuffer(),JJ=new rX(v),C0=new FG,j0=new wG(v,a0,N0,C0,DJ,J0,JJ),IJ=new sX(P),z=new eK(v),W0=new fX(v,z),R=new oX(v,z,JJ,W0),y=new eX(v,R,z,W0,JJ),T=new tX(v,DJ,j0),l=new xX(C0),e=new qG(P,IJ,a0,DJ,W0,l),r=new yG(P,C0),Z0=new OG,X0=new BG(a0),H0=new yX(P,IJ,N0,y,O,Y),s=new PG(P,y,DJ),G0=new fG(v,JJ,DJ,N0),n=new hX(v,a0,JJ),d=new aX(v,a0,JJ),JJ.programs=e.programs,P.capabilities=DJ,P.extensions=a0,P.properties=C0,P.renderLists=Z0,P.shadowMap=s,P.state=N0,P.info=JJ}if(k!==eJ)L=new QU(k,Q.width,Q.height,H,W,Z);let I0=new QK(P,v);this.xr=I0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let M=a0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=a0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return P0},this.setPixelRatio=function(M){if(M===void 0)return;P0=M,this.setSize(L0,_0,!1)},this.getSize=function(M){return M.set(L0,_0)},this.setSize=function(M,j,m=!0){if(I0.isPresenting){w0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(L0=M,_0=j,Q.width=Math.floor(M*P0),Q.height=Math.floor(j*P0),m===!0)Q.style.width=M+"px",Q.style.height=j+"px";if(L!==null)L.setSize(Q.width,Q.height);this.setViewport(0,0,M,j)},this.getDrawingBufferSize=function(M){return M.set(L0*P0,_0*P0).floor()},this.setDrawingBufferSize=function(M,j,m){L0=M,_0=j,P0=m,Q.width=Math.floor(M*m),Q.height=Math.floor(j*m),this.setViewport(0,0,M,j)},this.setEffects=function(M){if(k===eJ){T0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let j=0;j<M.length;j++)if(M[j].isOutputPass===!0){w0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(t)},this.getViewport=function(M){return M.copy(x0)},this.setViewport=function(M,j,m,f){if(M.isVector4)x0.set(M.x,M.y,M.z,M.w);else x0.set(M,j,m,f);N0.viewport(t.copy(x0).multiplyScalar(sJ()).round())},this.getScissor=function(M){return M.copy(y0)},this.setScissor=function(M,j,m,f){if(M.isVector4)y0.set(M.x,M.y,M.z,M.w);else y0.set(M,j,m,f);N0.scissor($0.copy(y0).multiplyScalar(sJ()).round())},this.getScissorTest=function(){return $J},this.setScissorTest=function(M){N0.setScissorTest($J=M)},this.setOpaqueSort=function(M){k0=M},this.setTransparentSort=function(M){i0=M},this.getClearColor=function(M){return M.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor(...arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha(...arguments)},this.clear=function(M=!0,j=!0,m=!0){let f=0;if(M){let h=!1;if(b!==null){let U0=b.texture.format;h=I.has(U0)}if(h){let U0=b.texture.type,O0=F.has(U0),Y0=H0.getClearColor(),D0=H0.getClearAlpha(),B0=Y0.r,v0=Y0.g,p0=Y0.b;if(O0)G[0]=B0,G[1]=v0,G[2]=p0,G[3]=D0,v.clearBufferuiv(v.COLOR,0,G);else B[0]=B0,B[1]=v0,B[2]=p0,B[3]=D0,v.clearBufferiv(v.COLOR,0,B)}else f|=v.COLOR_BUFFER_BIT}if(j)f|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)f|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(f!==0)v.clear(f)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),S=M},this.dispose=function(){Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",A0,!1),Q.removeEventListener("webglcontextcreationerror",f0,!1),H0.dispose(),Z0.dispose(),X0.dispose(),j0.dispose(),C0.dispose(),IJ.dispose(),y.dispose(),R.dispose(),W0.dispose(),G0.dispose(),e.dispose(),I0.dispose(),I0.removeEventListener("sessionstart",T$),I0.removeEventListener("sessionend",S$),l9.stop()};function q0(M){M.preventDefault(),sQ("WebGLRenderer: Context Lost."),p=!0}function A0(){sQ("WebGLRenderer: Context Restored."),p=!1;let M=JJ.autoReset,j=s.enabled,m=s.autoUpdate,f=s.needsUpdate,h=s.type;z0(),JJ.autoReset=M,s.enabled=j,s.autoUpdate=m,s.needsUpdate=f,s.type=h}function f0(M){T0("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function F0(M){let j=M.target;j.removeEventListener("dispose",F0),r0(j)}function r0(M){OJ(M),C0.remove(M)}function OJ(M){let j=C0.get(M).programs;if(j!==void 0){if(j.forEach(function(m){e.releaseProgram(m)}),M.isShaderMaterial)e.releaseShaderCache(M)}}this.renderBufferDirect=function(M,j,m,f,h,U0){if(j===null)j=SJ;let O0=h.isMesh&&h.matrixWorld.determinantAffine()<0,Y0=qK(M,j,m,f,h);N0.setMaterial(f,O0);let D0=m.index,B0=1;if(f.wireframe===!0){if(D0=R.getWireframeAttribute(m),D0===void 0)return;B0=2}let v0=m.drawRange,p0=m.attributes.position,R0=v0.start*B0,m0=(v0.start+v0.count)*B0;if(U0!==null)R0=Math.max(R0,U0.start*B0),m0=Math.min(m0,(U0.start+U0.count)*B0);if(D0!==null)R0=Math.max(R0,0),m0=Math.min(m0,D0.count);else if(p0!==void 0&&p0!==null)R0=Math.max(R0,0),m0=Math.min(m0,p0.count);let NJ=m0-R0;if(NJ<0||NJ===1/0)return;W0.setup(h,f,Y0,m,D0);let QJ,t0=n;if(D0!==null)QJ=z.get(D0),t0=d,t0.setIndex(QJ);if(h.isMesh)if(f.wireframe===!0)N0.setLineWidth(f.wireframeLinewidth*sJ()),t0.setMode(v.LINES);else t0.setMode(v.TRIANGLES);else if(h.isLine){let zJ=f.linewidth;if(zJ===void 0)zJ=1;if(N0.setLineWidth(zJ*sJ()),h.isLineSegments)t0.setMode(v.LINES);else if(h.isLineLoop)t0.setMode(v.LINE_LOOP);else t0.setMode(v.LINE_STRIP)}else if(h.isPoints)t0.setMode(v.POINTS);else if(h.isSprite)t0.setMode(v.TRIANGLES);if(h.isBatchedMesh)if(!a0.get("WEBGL_multi_draw")){let{_multiDrawStarts:zJ,_multiDrawCounts:M0,_multiDrawCount:wJ}=h,s0=D0?z.get(D0).bytesPerElement:1,d9=C0.get(f).currentProgram.getUniforms();for(let AJ=0;AJ<wJ;AJ++)d9.setValue(v,"_gl_DrawID",AJ),t0.render(zJ[AJ]/s0,M0[AJ])}else t0.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)t0.renderInstances(R0,NJ,h.count);else if(m.isInstancedBufferGeometry){let zJ=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,M0=Math.min(m.instanceCount,zJ);t0.renderInstances(R0,NJ,M0)}else t0.render(R0,NJ)};function E9(M,j,m,f){if(S!==null&&M.isNodeMaterial)S.setObject(f,M);if(UJ===!0)l.setState(M,m,!1);if(M.transparent===!0&&M.side===yJ&&M.forceSinglePass===!1)M.side=vJ,M.needsUpdate=!0,h8(M,j,f),M.side=A8,M.needsUpdate=!0,h8(M,j,f),M.side=yJ;else h8(M,j,f)}this.compile=function(M,j,m=null){if(m===null)m=M;if(S!==null)S.renderStart(M,j,m);if(_=X0.get(m),_.init(j),E.push(_),m.traverseVisible(function(h){if(h.isLight&&h.layers.test(j.layers)){if(_.pushLight(h),h.castShadow)_.pushShadow(h)}}),M!==m)M.traverseVisible(function(h){if(h.isLight&&h.layers.test(j.layers)){if(_.pushLight(h),h.castShadow)_.pushShadow(h)}});if(_.setupLights(),S!==null)S.updateLights(_.state.lightsArray);if(TJ=this.localClippingEnabled,UJ=l.init(this.clippingPlanes,TJ),UJ===!0)l.setGlobalState(this.clippingPlanes,j);if(S!==null)s.render(_.state.shadowsArray,m,j);let f=new Set;if(M.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let U0=h.material;if(U0)if(Array.isArray(U0))for(let O0=0;O0<U0.length;O0++){let Y0=U0[O0];E9(Y0,m,j,h),f.add(Y0)}else E9(U0,m,j,h),f.add(U0)}),_=E.pop(),S!==null)S.renderEnd();return f},this.compileAsync=function(M,j,m=null){let f=this.compile(M,j,m);return new Promise((h)=>{function U0(){if(f.forEach(function(O0){let D0=C0.get(O0).currentProgram;if(D0===void 0||D0.isReady())f.delete(O0)}),f.size===0){h(M);return}setTimeout(U0,10)}if(a0.get("KHR_parallel_shader_compile")!==null)U0();else setTimeout(U0,10)})};let V6=null;function NK(M){if(V6)V6(M)}function T$(){l9.stop()}function S$(){l9.start()}let l9=new gZ;if(l9.setAnimationLoop(NK),typeof self<"u")l9.setContext(self);this.setAnimationLoop=function(M){V6=M,I0.setAnimationLoop(M),M===null?l9.stop():l9.start()},I0.addEventListener("sessionstart",T$),I0.addEventListener("sessionend",S$),this.render=function(M,j){if(j!==void 0&&j.isCamera!==!0){T0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(S!==null)S.renderStart(M,j);let m=I0.enabled===!0&&I0.isPresenting===!0,f=L!==null&&(b===null||m)&&L.begin(P,b);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if(I0.enabled===!0&&I0.isPresenting===!0&&(L===null||L.isCompositing()===!1)){if(I0.cameraAutoUpdate===!0)I0.updateCamera(j);j=I0.getCamera()}if(M.isScene===!0)M.onBeforeRender(P,M,j,b);if(_=X0.get(M,E.length),_.init(j),_.state.textureUnits=j0.getTextureUnits(),E.push(_),hJ.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera)XJ.setFromArrayCamera(j);else c0.setFromProjectionMatrix(hJ,nQ,j.reversedDepth);if(TJ=this.localClippingEnabled,UJ=l.init(this.clippingPlanes,TJ),V=Z0.get(M,C.length),V.init(),C.push(V),this.info.render.frame++,I0.enabled===!0&&I0.isPresenting===!0){let O0=P.xr.getDepthSensingMesh();if(O0!==null)B6(O0,j,-1/0,P.sortObjects)}if(B6(M,j,0,P.sortObjects),V.finish(),S!==null)S.updateLights(_.state.lightsArray);if(P.sortObjects===!0)V.sort(k0,i0);if(jJ=I0.enabled===!1||I0.isPresenting===!1||I0.hasDepthSensing()===!1,jJ)H0.addToRenderList(V,M);if(this.info.autoReset===!0)this.info.reset();if(UJ===!0)l.beginShadows();let h=_.state.shadowsArray;if(s.render(h,M,j),UJ===!0)l.endShadows();if((f&&L.hasRenderPass())===!1){let{opaque:O0,transmissive:Y0}=V;if(_.setupLights(),j.isArrayCamera){let D0=j.cameras;if(Y0.length>0)for(let B0=0,v0=D0.length;B0<v0;B0++){let p0=D0[B0];v$(O0,Y0,M,p0)}if(jJ)H0.render(M);for(let B0=0,v0=D0.length;B0<v0;B0++){let p0=D0[B0];j$(V,M,p0,p0.viewport)}}else{if(Y0.length>0)v$(O0,Y0,M,j);if(jJ)H0.render(M);j$(V,M,j)}}if(b!==null&&a===0)j0.updateMultisampleRenderTarget(b),j0.updateRenderTargetMipmap(b);if(f)L.end(P);if(M.isScene===!0)M.onAfterRender(P,M,j);if(W0.resetDefaultState(),K0=-1,u=null,E.pop(),E.length>0){if(_=E[E.length-1],j0.setTextureUnits(_.state.textureUnits),UJ===!0)l.setGlobalState(P.clippingPlanes,_.state.camera)}else _=null;if(C.pop(),C.length>0)V=C[C.length-1];else V=null;if(S!==null)S.renderEnd()};function B6(M,j,m,f){if(M.visible===!1)return;if(M.layers.test(j.layers)){if(M.isGroup)m=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(j)}else if(M.isLight){if(_.pushLight(M),M.castShadow)_.pushShadow(M)}else if(M.isSprite){let O0=j.isArrayCamera?XJ:c0;if(!M.frustumCulled||M.intersectsFrustum(O0)){if(f)BJ.setFromMatrixPosition(M.matrixWorld).applyMatrix4(hJ);let Y0=y.update(M),D0=M.material;if(D0.visible)V.push(M,Y0,D0,m,BJ.z,null,j)}}else if(M.isMesh||M.isLine||M.isPoints){let O0=j.isArrayCamera?XJ:c0;if(!M.frustumCulled||M.intersectsFrustum(O0)){let Y0=y.update(M),D0=M.material;if(f){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();BJ.copy(M.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();BJ.copy(Y0.boundingSphere.center)}BJ.applyMatrix4(M.matrixWorld).applyMatrix4(hJ)}if(Array.isArray(D0)){let B0=Y0.groups;for(let v0=0,p0=B0.length;v0<p0;v0++){let R0=B0[v0],m0=D0[R0.materialIndex];if(m0&&m0.visible)V.push(M,Y0,m0,m,BJ.z,R0,j)}}else if(D0.visible)V.push(M,Y0,D0,m,BJ.z,null,j)}}}let U0=M.children;for(let O0=0,Y0=U0.length;O0<Y0;O0++)B6(U0[O0],j,m,f)}function j$(M,j,m,f){let{opaque:h,transmissive:U0,transparent:O0}=M;if(_.setupLightsView(m),UJ===!0)l.setGlobalState(P.clippingPlanes,m);if(f)N0.viewport(t.copy(f));if(h.length>0)N7(h,j,m);if(U0.length>0)N7(U0,j,m);if(O0.length>0)N7(O0,j,m);N0.buffers.depth.setTest(!0),N0.buffers.depth.setMask(!0),N0.buffers.color.setMask(!0),N0.setPolygonOffset(!1)}function v$(M,j,m,f){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[f.id]===void 0){let R0=a0.has("EXT_color_buffer_half_float")||a0.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[f.id]=new uJ(1,1,{generateMipmaps:!0,type:R0?X9:eJ,minFilter:f9,samples:Math.max(4,DJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:l0.workingColorSpace})}let U0=_.state.transmissionRenderTarget[f.id],O0=f.viewport||t;U0.setSize(O0.z*P.transmissionResolutionScale,O0.w*P.transmissionResolutionScale);let Y0=P.getRenderTarget(),D0=P.getActiveCubeFace(),B0=P.getActiveMipmapLevel();if(P.setRenderTarget(U0),P.getClearColor(o),Q0=P.getClearAlpha(),Q0<1)P.setClearColor(16777215,0.5);if(P.clear(),jJ)H0.render(m);let v0=P.toneMapping;P.toneMapping=Y9;let p0=f.viewport;if(f.viewport!==void 0)f.viewport=void 0;if(_.setupLightsView(f),UJ===!0)l.setGlobalState(P.clippingPlanes,f);if(N7(M,m,f),j0.updateMultisampleRenderTarget(U0),j0.updateRenderTargetMipmap(U0),a0.has("WEBGL_multisampled_render_to_texture")===!1){let R0=!1;for(let m0=0,NJ=j.length;m0<NJ;m0++){let QJ=j[m0],{object:t0,geometry:zJ,material:M0,group:wJ}=QJ;if(M0.side===yJ&&t0.layers.test(f.layers)){let s0=M0.side;M0.side=vJ,M0.needsUpdate=!0,y$(t0,m,f,zJ,M0,wJ),M0.side=s0,M0.needsUpdate=!0,R0=!0}}if(R0===!0)j0.updateMultisampleRenderTarget(U0),j0.updateRenderTargetMipmap(U0)}if(P.setRenderTarget(Y0,D0,B0),P.setClearColor(o,Q0),p0!==void 0)f.viewport=p0;P.toneMapping=v0}function N7(M,j,m){let f=j.isScene===!0?j.overrideMaterial:null;for(let h=0,U0=M.length;h<U0;h++){let O0=M[h],{object:Y0,geometry:D0,group:B0}=O0,v0=O0.material;if(v0.allowOverride===!0&&f!==null)v0=f;if(Y0.layers.test(m.layers))y$(Y0,j,m,D0,v0,B0)}}function y$(M,j,m,f,h,U0){if(S!==null&&h.isNodeMaterial)S.setObject(M,h);if(M.onBeforeRender(P,j,m,f,h,U0),M.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),h.onBeforeRender(P,j,m,f,M,U0),h.transparent===!0&&h.side===yJ&&h.forceSinglePass===!1)h.side=vJ,h.needsUpdate=!0,P.renderBufferDirect(m,j,f,h,M,U0),h.side=A8,h.needsUpdate=!0,P.renderBufferDirect(m,j,f,h,M,U0),h.side=yJ;else P.renderBufferDirect(m,j,f,h,M,U0);M.onAfterRender(P,j,m,f,h,U0)}function f$(M){let j=0;for(let m of M)if(m.texture!==null)j++;return j}function h8(M,j,m){if(j.isScene!==!0)j=SJ;let f=C0.get(M),h=_.state.lights,U0=_.state.shadowsArray,O0=h.state.version,Y0=e.getParameters(M,h.state,U0,j,m,_.state.lightProbeGridArray),D0=e.getProgramCacheKey(Y0),B0=f.programs;f.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?j.environment:null,f.fog=j.fog;let v0=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(f.envMap=IJ.get(M.envMap||f.environment,v0),f.envMapRotation=f.environment!==null&&M.envMap===null?j.environmentRotation:M.envMapRotation,B0===void 0)M.addEventListener("dispose",F0),B0=new Map,f.programs=B0,f.programVariants=new Map;let p0=B0.get(D0);if(p0!==void 0){if(f.currentProgram===p0&&f.lightsStateVersion===O0)return b$(M,Y0),p0}else{if(Y0.uniforms=e.getUniforms(M),S!==null&&M.isNodeMaterial)S.build(M,m,Y0);M.onBeforeCompile(Y0,P),p0=e.acquireProgram(Y0,D0),B0.set(D0,p0),f.uniforms=Y0.uniforms}let R0=f.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)R0.clippingPlanes=l.uniform;if(b$(M,Y0),f.needsLights=DK(M),f.lightsStateVersion=O0,f.needsLights)R0.ambientLightColor.value=h.state.ambient,R0.lightProbe.value=h.state.probe,R0.sunLights.value=h.state.sun,R0.sunLightShadows.value=h.state.sunShadow,R0.directionalLights.value=h.state.directional,R0.directionalLightShadows.value=h.state.directionalShadow,R0.spotLights.value=h.state.spot,R0.spotLightShadows.value=h.state.spotShadow,R0.rectAreaLights.value=h.state.rectArea,R0.ltc_1.value=h.state.rectAreaLTC1,R0.ltc_2.value=h.state.rectAreaLTC2,R0.pointLights.value=h.state.point,R0.pointLightShadows.value=h.state.pointShadow,R0.hemisphereLights.value=h.state.hemi,R0.sunShadowMatrix.value=h.state.sunShadowMatrix,R0.sunShadowCascade.value=h.state.sunShadowCascade,R0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,R0.spotLightMatrix.value=h.state.spotLightMatrix,R0.spotLightMap.value=h.state.spotLightMap,R0.pointShadowMatrix.value=h.state.pointShadowMatrix;return f.numLightProbeGrids=f$(_.state.lightProbeGridArray),f.currentProgram=p0,f.uniformsList=null,p0}function EK(M,j,m,f,h){let U0=C0.get(M),O0=U0.currentProgram.id+","+f+","+h,Y0=U0.programVariants.get(O0);if(Y0===void 0)Y0=h8(M,j,m),U0.programVariants.set(O0,Y0);else U0.currentProgram=Y0,U0.uniformsList=null,U0.outputColorSpace=f,U0.toneMapping=h;return Y0}function h$(M){if(M.uniformsList===null){let j=M.currentProgram.getUniforms();M.uniformsList=H7.seqWithValue(j.seq,M.uniforms)}return M.uniformsList}function b$(M,j){let m=C0.get(M);m.outputColorSpace=j.outputColorSpace,m.batching=j.batching,m.batchingColor=j.batchingColor,m.instancing=j.instancing,m.instancingColor=j.instancingColor,m.instancingMorph=j.instancingMorph,m.skinning=j.skinning,m.morphTargets=j.morphTargets,m.morphNormals=j.morphNormals,m.morphColors=j.morphColors,m.morphTargetsCount=j.morphTargetsCount,m.numClippingPlanes=j.numClippingPlanes,m.numIntersection=j.numClipIntersection,m.vertexAlphas=j.vertexAlphas,m.vertexTangents=j.vertexTangents,m.toneMapping=j.toneMapping}function qK(M,j,m,f,h){if(j.isScene!==!0)j=SJ;j0.resetTextureUnits();let U0=j.fog,O0=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?j.environment:null,Y0=b===null?P.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:l0.workingColorSpace,D0=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,B0=IJ.get(f.envMap||O0,D0),v0=f.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,p0=!!m.attributes.tangent&&(!!f.normalMap||f.anisotropy>0),R0=!!m.morphAttributes.position,m0=!!m.morphAttributes.normal,NJ=!!m.morphAttributes.color,QJ=Y9;if(f.toneMapped){if(b===null||b.isXRRenderTarget===!0)QJ=P.toneMapping}let t0=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,zJ=t0!==void 0?t0.length:0,M0=C0.get(f),wJ=_.state.lights;if(UJ===!0){if(TJ===!0||M!==u){let KJ=M===u&&f.id===K0;l.setState(f,M,KJ)}}let s0=!1,d9=!1;if(f.version===M0.__version){if(M0.needsLights&&M0.lightsStateVersion!==wJ.state.version)s0=!0;else if(h.isBatchedMesh&&M0.batching===!1)s0=!0;else if(!h.isBatchedMesh&&M0.batching===!0)s0=!0;else if(h.isBatchedMesh&&M0.batchingColor===!0&&h._colorsTexture===null)s0=!0;else if(h.isBatchedMesh&&M0.batchingColor===!1&&h._colorsTexture!==null)s0=!0;else if(h.isInstancedMesh&&M0.instancing===!1)s0=!0;else if(!h.isInstancedMesh&&M0.instancing===!0)s0=!0;else if(h.isSkinnedMesh&&M0.skinning===!1)s0=!0;else if(!h.isSkinnedMesh&&M0.skinning===!0)s0=!0;else if(h.isInstancedMesh&&M0.instancingColor===!0&&h.instanceColor===null)s0=!0;else if(h.isInstancedMesh&&M0.instancingColor===!1&&h.instanceColor!==null)s0=!0;else if(h.isInstancedMesh&&M0.instancingMorph===!0&&h.morphTexture===null)s0=!0;else if(h.isInstancedMesh&&M0.instancingMorph===!1&&h.morphTexture!==null)s0=!0;else if(M0.envMap!==B0)s0=!0;else if(f.fog===!0&&M0.fog!==U0)s0=!0;else if(M0.numClippingPlanes!==void 0&&(M0.numClippingPlanes!==l.numPlanes||M0.numIntersection!==l.numIntersection))s0=!0;else if(M0.vertexAlphas!==v0)s0=!0;else if(M0.vertexTangents!==p0)s0=!0;else if(M0.morphTargets!==R0)s0=!0;else if(M0.morphNormals!==m0)s0=!0;else if(M0.morphColors!==NJ)s0=!0;else if(M0.morphTargetsCount!==zJ)s0=!0;else if(M0.numLightProbeGrids!==f$(_.state.lightProbeGridArray))s0=!0;else if(M0.outputColorSpace!==Y0||M0.toneMapping!==QJ)d9=!0}else s0=!0,M0.__version=f.version;let AJ=M0.currentProgram;if(s0===!0||d9===!0){if(AJ=d9===!0?EK(f,j,h,Y0,QJ):h8(f,j,h),S&&f.isNodeMaterial)S.onUpdateProgram(f,AJ,M0)}let E7=!1,P9=!1,u9=!1,n0=AJ.getUniforms(),kJ=M0.uniforms;if(N0.useProgram(AJ.program))E7=!0,P9=!0,u9=!0;if(f.id!==K0)K0=f.id,P9=!0;if(E7||u!==M){if(N0.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();n0.setValue(v,"projectionMatrix",M.projectionMatrix),n0.setValue(v,"viewMatrix",M.matrixWorldInverse);let RJ=n0.map.cameraPosition;if(RJ!==void 0)RJ.setValue(v,GJ.setFromMatrixPosition(M.matrixWorld));if(DJ.logarithmicDepthBuffer)n0.setValue(v,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(f.isMeshPhongMaterial||f.isMeshToonMaterial||f.isMeshLambertMaterial||f.isMeshBasicMaterial||f.isMeshStandardMaterial||f.isShaderMaterial)n0.setValue(v,"isOrthographic",M.isOrthographicCamera===!0);if(u!==M)u=M,P9=!0,u9=!0}if(M0.needsLights){if(wJ.state.sunShadowMap.length>0)n0.setValue(v,"sunShadowMap",wJ.state.sunShadowMap,j0);if(wJ.state.directionalShadowMap.length>0)n0.setValue(v,"directionalShadowMap",wJ.state.directionalShadowMap,j0);if(wJ.state.spotShadowMap.length>0)n0.setValue(v,"spotShadowMap",wJ.state.spotShadowMap,j0);if(wJ.state.pointShadowMap.length>0)n0.setValue(v,"pointShadowMap",wJ.state.pointShadowMap,j0)}if(h.isSkinnedMesh){n0.setOptional(v,h,"bindMatrix"),n0.setOptional(v,h,"bindMatrixInverse");let KJ=h.skeleton;if(KJ){if(KJ.boneTexture===null)KJ.computeBoneTexture();n0.setValue(v,"boneTexture",KJ.boneTexture,j0)}}if(h.isBatchedMesh){if(n0.setOptional(v,h,"batchingTexture"),n0.setValue(v,"batchingTexture",h._matricesTexture,j0),n0.setOptional(v,h,"batchingIdTexture"),n0.setValue(v,"batchingIdTexture",h._indirectTexture,j0),n0.setOptional(v,h,"batchingColorTexture"),h._colorsTexture!==null)n0.setValue(v,"batchingColorTexture",h._colorsTexture,j0)}let oJ=m.morphAttributes;if(oJ.position!==void 0||oJ.normal!==void 0||oJ.color!==void 0)T.update(h,m,AJ);if(P9||M0.receiveShadow!==h.receiveShadow)M0.receiveShadow=h.receiveShadow,n0.setValue(v,"receiveShadow",h.receiveShadow);if((f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial)&&f.envMap===null&&j.environment!==null)kJ.envMapIntensity.value=j.environmentIntensity;if(kJ.dfgLUT!==void 0)kJ.dfgLUT.value=bG();if(P9){if(n0.setValue(v,"toneMappingExposure",P.toneMappingExposure),M0.needsLights)FK(kJ,u9);if(U0&&f.fog===!0)r.refreshFogUniforms(kJ,U0);if(r.refreshMaterialUniforms(kJ,f,P0,_0,_.state.transmissionRenderTarget[M.id]),M0.needsLights&&M0.numLightProbeGrids>0){let KJ=A,RJ=0;for(let q9 of _.state.lightProbeGridArray){if(q9.texture===null)continue;KJ.textures[RJ]=q9.texture,KJ.min[RJ]=q9.boundingBox.min,KJ.max[RJ]=q9.boundingBox.max,KJ.resolution[RJ]=q9.resolution,RJ++}for(let q9 in KJ)KJ[q9].length=RJ;kJ.probesSH.value=KJ.textures,kJ.probesMin.value=KJ.min,kJ.probesMax.value=KJ.max,kJ.probesResolution.value=KJ.resolution}H7.upload(v,h$(M0),kJ,j0)}if(f.isShaderMaterial&&f.uniformsNeedUpdate===!0)H7.upload(v,h$(M0),kJ,j0),f.uniformsNeedUpdate=!1;if(f.isSpriteMaterial)n0.setValue(v,"center",h.center);if(n0.setValue(v,"modelViewMatrix",h.modelViewMatrix),n0.setValue(v,"normalMatrix",h.normalMatrix),n0.setValue(v,"modelMatrix",h.matrixWorld),f.uniformsGroups!==void 0){let KJ=f.uniformsGroups;for(let RJ=0,q9=KJ.length;RJ<q9;RJ++){let g$=KJ[RJ];G0.update(g$,AJ),G0.bind(g$,AJ)}}return AJ}function FK(M,j){M.ambientLightColor.needsUpdate=j,M.lightProbe.needsUpdate=j,M.sunLights.needsUpdate=j,M.sunLightShadows.needsUpdate=j,M.directionalLights.needsUpdate=j,M.directionalLightShadows.needsUpdate=j,M.pointLights.needsUpdate=j,M.pointLightShadows.needsUpdate=j,M.spotLights.needsUpdate=j,M.spotLightShadows.needsUpdate=j,M.rectAreaLights.needsUpdate=j,M.hemisphereLights.needsUpdate=j}function DK(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return a},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,j,m){let f=C0.get(M);if(f.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,f.__autoAllocateDepthBuffer===!1)f.__useRenderToTexture=!1;C0.get(M.texture).__webglTexture=j,C0.get(M.depthTexture).__webglTexture=f.__autoAllocateDepthBuffer?void 0:m,f.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,j){let m=C0.get(M);m.__webglFramebuffer=j,m.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(M,j=0,m=0){b=M,c=j,a=m;let f=null,h=!1,U0=!1;if(M){let Y0=C0.get(M);if(Y0.__useDefaultFramebuffer!==void 0){N0.bindFramebuffer(v.FRAMEBUFFER,Y0.__webglFramebuffer),t.copy(M.viewport),$0.copy(M.scissor),V0=M.scissorTest,N0.viewport(t),N0.scissor($0),N0.setScissorTest(V0),K0=-1;return}else if(Y0.__webglFramebuffer===void 0)j0.setupRenderTarget(M);else if(Y0.__hasExternalTextures)j0.rebindTextures(M,C0.get(M.texture).__webglTexture,C0.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let v0=M.depthTexture;if(Y0.__boundDepthTexture!==v0){if(v0!==null&&C0.has(v0)&&(M.width!==v0.image.width||M.height!==v0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j0.setupDepthRenderbuffer(M)}}let D0=M.texture;if(D0.isData3DTexture||D0.isDataArrayTexture||D0.isCompressedArrayTexture)U0=!0;let B0=C0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(B0[j]))f=B0[j][m];else f=B0[j];h=!0}else if(M.samples>0&&j0.useMultisampledRTT(M)===!1)f=C0.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(B0))f=B0[m];else f=B0;t.copy(M.viewport),$0.copy(M.scissor),V0=M.scissorTest}else t.copy(x0).multiplyScalar(P0).floor(),$0.copy(y0).multiplyScalar(P0).floor(),V0=$J;if(m!==0)f=g;if(N0.bindFramebuffer(v.FRAMEBUFFER,f))N0.drawBuffers(M,f);if(N0.viewport(t),N0.scissor($0),N0.setScissorTest(V0),h){let Y0=C0.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y0.__webglTexture,m)}else if(U0){let Y0=j;for(let D0=0;D0<M.textures.length;D0++){let B0=C0.get(M.textures[D0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+D0,B0.__webglTexture,m,Y0)}}else if(M!==null&&m!==0){let Y0=C0.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Y0.__webglTexture,m)}K0=-1};function x$(M){let j=C0.get(M);if(j.__readFormat!==M.format||j.__readType!==M.type)j.__readFormat=M.format,j.__readType=M.type,j.__formatReadable=DJ.textureFormatReadable(M.format),j.__typeReadable=DJ.textureTypeReadable(M.type);return j}if(this.readRenderTargetPixels=function(M,j,m,f,h,U0,O0,Y0=0){if(!(M&&M.isWebGLRenderTarget)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D0=C0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&O0!==void 0){if(D0=D0[O0],Array.isArray(D0))D0=D0[0]}if(D0){N0.bindFramebuffer(v.FRAMEBUFFER,D0);try{let B0=M.textures[Y0],v0=B0.format,p0=B0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+Y0);let R0=x$(B0);if(R0.__formatReadable===!1){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(R0.__typeReadable===!1){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=M.width-f&&(m>=0&&m<=M.height-h))v.readPixels(j,m,f,h,J0.convert(v0),J0.convert(p0),U0)}finally{let B0=b!==null?C0.get(b).__webglFramebuffer:null;N0.bindFramebuffer(v.FRAMEBUFFER,B0)}}},this.readRenderTargetPixelsAsync=async function(M,j,m,f,h,U0,O0,Y0=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D0=C0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&O0!==void 0){if(D0=D0[O0],Array.isArray(D0))D0=D0[0]}if(D0)if(j>=0&&j<=M.width-f&&(m>=0&&m<=M.height-h)){N0.bindFramebuffer(v.FRAMEBUFFER,D0);let B0=M.textures[Y0],v0=B0.format,p0=B0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+Y0);let R0=x$(B0);if(R0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(R0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let m0=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,m0),v.bufferData(v.PIXEL_PACK_BUFFER,U0.byteLength,v.STREAM_READ),v.readPixels(j,m,f,h,J0.convert(v0),J0.convert(p0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let NJ=b!==null?C0.get(b).__webglFramebuffer:null;N0.bindFramebuffer(v.FRAMEBUFFER,NJ);let QJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await YZ(v,QJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,m0),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,U0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(m0),v.deleteSync(QJ),U0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,j=null,m=0){let f=Math.pow(2,-m),h=Math.floor(M.image.width*f),U0=Math.floor(M.image.height*f),O0=j!==null?j.x:0,Y0=j!==null?j.y:0;j0.setTexture2D(M,0),v.copyTexSubImage2D(v.TEXTURE_2D,m,0,0,O0,Y0,h,U0),N0.unbindTexture()},this.copyTextureToTexture=function(M,j,m=null,f=null,h=0,U0=0){let O0,Y0,D0,B0,v0,p0,R0,m0,NJ,QJ=M.isCompressedTexture?M.mipmaps[U0]:M.image;if(m!==null)O0=m.max.x-m.min.x,Y0=m.max.y-m.min.y,D0=m.isBox3?m.max.z-m.min.z:1,B0=m.min.x,v0=m.min.y,p0=m.isBox3?m.min.z:0;else{let n0=Math.pow(2,-h);if(O0=Math.floor(QJ.width*n0),Y0=Math.floor(QJ.height*n0),M.isDataArrayTexture)D0=QJ.depth;else if(M.isData3DTexture)D0=Math.floor(QJ.depth*n0);else D0=1;B0=0,v0=0,p0=0}if(f!==null)R0=f.x,m0=f.y,NJ=f.z;else R0=0,m0=0,NJ=0;let t0=J0.convert(j.format),zJ=J0.convert(j.type),M0;if(j.isData3DTexture)j0.setTexture3D(j,0),M0=v.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)j0.setTexture2DArray(j,0),M0=v.TEXTURE_2D_ARRAY;else j0.setTexture2D(j,0),M0=v.TEXTURE_2D;N0.activeTexture(v.TEXTURE0),N0.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,j.flipY),N0.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N0.pixelStorei(v.UNPACK_ALIGNMENT,j.unpackAlignment);let wJ=N0.getParameter(v.UNPACK_ROW_LENGTH),s0=N0.getParameter(v.UNPACK_IMAGE_HEIGHT),d9=N0.getParameter(v.UNPACK_SKIP_PIXELS),AJ=N0.getParameter(v.UNPACK_SKIP_ROWS),E7=N0.getParameter(v.UNPACK_SKIP_IMAGES);N0.pixelStorei(v.UNPACK_ROW_LENGTH,QJ.width),N0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,QJ.height),N0.pixelStorei(v.UNPACK_SKIP_PIXELS,B0),N0.pixelStorei(v.UNPACK_SKIP_ROWS,v0),N0.pixelStorei(v.UNPACK_SKIP_IMAGES,p0);let P9=M.isDataArrayTexture||M.isData3DTexture,u9=j.isDataArrayTexture||j.isData3DTexture;if(M.isDepthTexture){let n0=C0.get(M),kJ=C0.get(j),oJ=C0.get(n0.__renderTarget),KJ=C0.get(kJ.__renderTarget);N0.bindFramebuffer(v.READ_FRAMEBUFFER,oJ.__webglFramebuffer),N0.bindFramebuffer(v.DRAW_FRAMEBUFFER,KJ.__webglFramebuffer);for(let RJ=0;RJ<D0;RJ++){if(P9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,C0.get(M).__webglTexture,h,p0+RJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,C0.get(j).__webglTexture,U0,NJ+RJ);v.blitFramebuffer(B0,v0,B0+O0,v0+Y0,R0,m0,R0+O0,m0+Y0,v.DEPTH_BUFFER_BIT,v.NEAREST)}N0.bindFramebuffer(v.READ_FRAMEBUFFER,null),N0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(h!==0||M.isRenderTargetTexture||C0.has(M)){let n0=C0.get(M),kJ=C0.get(j);N0.bindFramebuffer(v.READ_FRAMEBUFFER,i),N0.bindFramebuffer(v.DRAW_FRAMEBUFFER,w);for(let oJ=0;oJ<D0;oJ++){if(P9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,n0.__webglTexture,h,p0+oJ);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,n0.__webglTexture,h);if(u9)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,kJ.__webglTexture,U0,NJ+oJ);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,kJ.__webglTexture,U0);if(h!==0)v.blitFramebuffer(B0,v0,B0+O0,v0+Y0,R0,m0,R0+O0,m0+Y0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(u9)v.copyTexSubImage3D(M0,U0,R0,m0,NJ+oJ,B0,v0,O0,Y0);else v.copyTexSubImage2D(M0,U0,R0,m0,B0,v0,O0,Y0)}N0.bindFramebuffer(v.READ_FRAMEBUFFER,null),N0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(u9)if(M.isDataTexture||M.isData3DTexture)v.texSubImage3D(M0,U0,R0,m0,NJ,O0,Y0,D0,t0,zJ,QJ.data);else if(j.isCompressedArrayTexture)v.compressedTexSubImage3D(M0,U0,R0,m0,NJ,O0,Y0,D0,t0,QJ.data);else v.texSubImage3D(M0,U0,R0,m0,NJ,O0,Y0,D0,t0,zJ,QJ);else if(M.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,U0,R0,m0,O0,Y0,t0,zJ,QJ.data);else if(M.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,U0,R0,m0,QJ.width,QJ.height,t0,QJ.data);else v.texSubImage2D(v.TEXTURE_2D,U0,R0,m0,O0,Y0,t0,zJ,QJ);if(N0.pixelStorei(v.UNPACK_ROW_LENGTH,wJ),N0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,s0),N0.pixelStorei(v.UNPACK_SKIP_PIXELS,d9),N0.pixelStorei(v.UNPACK_SKIP_ROWS,AJ),N0.pixelStorei(v.UNPACK_SKIP_IMAGES,E7),U0===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0)v.generateMipmap(M0);N0.unbindTexture()},this.initRenderTarget=function(M){if(C0.get(M).__webglFramebuffer===void 0)j0.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)j0.setTextureCube(M,0);else if(M.isData3DTexture)j0.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)j0.setTexture2DArray(M,0);else j0.setTexture2D(M,0);N0.unbindTexture()},this.resetState=function(){c=0,a=0,b=null,N0.reset(),W0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=l0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=l0._getUnpackColorSpace()}}var I$=document.querySelector("canvas"),WK=document.querySelector(".status"),G7=matchMedia("(prefers-reduced-motion: reduce)"),y8;try{y8=new V$({canvas:I$,antialias:!0,powerPreference:"low-power"})}catch{throw WK.textContent="This browser could not start the 3D preview.",Error("WebGL unavailable")}y8.setPixelRatio(Math.min(devicePixelRatio,1.25));y8.setClearColor(727090);y8.outputColorSpace=u7;var Y8=new s7,m9=new S8(-5,5,5,-5,0.1,100);m9.position.set(7.5,6.3,10.5);m9.lookAt(0,1,0);Y8.add(new Z6(11130879,3289411,2));var ZK=new $7(10403583,1.1);ZK.position.set(-4,8,5);Y8.add(ZK);var KK=new $7(16760448,0.45);KK.position.set(3,4,4);Y8.add(KK);var ZJ=(J,Q={})=>new $6({color:J,...Q}),g0={grass:ZJ(6586184),earth:ZJ(7230027),rock:ZJ(6319237),pine:ZJ(2182467),pine2:ZJ(2909776),pine3:ZJ(4685147),bark:ZJ(7357746),wood:ZJ(10117698),desk:ZJ(7753795),dark:ZJ(3160910),hoodie:ZJ(10241369),skin:ZJ(15776657),hair:ZJ(3157559),screen:ZJ(7460588,{emissive:2326428,emissiveIntensity:0.55}),key:ZJ(13229788),fire:ZJ(16740392,{emissive:10758912,emissiveIntensity:0.45}),flame:ZJ(16762451,{emissive:11756800,emissiveIntensity:0.55}),water:ZJ(1522008),ripple:ZJ(9619666,{transparent:!0,opacity:0.3,side:yJ,depthWrite:!1}),leaf:ZJ(7577935),black:ZJ(2108216)},B$=new Map;function N9(J,Q,$,W=0,Z=0,K=0){let H=new J9(J,Q);return H.position.set(W,Z,K),$.add(H),H}function fJ(J,Q,$,W,Z,K,H,Y){let X=`b${J},${Q},${$}`;if(!B$.has(X))B$.set(X,new g9(J,Q,$));return N9(B$.get(X),W,Z,K,H,Y)}function _$(J,Q,$,W,Z,K,H,Y=7){return N9(new T8(J,Q,Y),$,W,Z,K,H)}function R6(J,Q,$,W,Z,K,H,Y,X=8){return N9(new $8(J,Q,$,X),W,Z,K,H,Y)}function pJ(J,Q,$,W,Z,K){return N9(new e8(J,2),Q,$,W,Z,K)}function X8(J,Q=0,$=0,W=0){let Z=new v9;return Z.position.set(Q,$,W),J.add(Z),Z}function HK(J,Q){let $=document.createElement("canvas");$.width=$.height=128;let W=$.getContext("2d"),Z=W.createRadialGradient(64,64,2,64,64,64);return Z.addColorStop(0,J),Z.addColorStop(1,Q),W.fillStyle=Z,W.fillRect(0,0,128,128),new t7($)}var gG=new w8({map:HK("rgba(39,91,138,.9)","rgba(16,43,75,0)"),transparent:!0,depthWrite:!1,side:yJ}),pG=N9(new p9(17,17),gG,Y8,0,-0.25,0);pG.rotation.x=-Math.PI/2;var YK=[];for(let[J,Q,$,W]of[[-3.1,1.1,0.8,0],[3.15,1.2,0.7,1.3],[-2.9,-2.4,0.65,2.1],[1.2,3.1,0.6,3.2],[3,-2,0.7,4.1]]){let Z=N9(new J7(0.52,0.55,32),g0.ripple,Y8,J,-0.225,Q);Z.rotation.x=-Math.PI/2,Z.userData={size:$,phase:W},Z.scale.set($,$*0.55,1),YK.push(Z)}var $9=X8(Y8);function XK(J,Q,$,W,Z){let K=new $8(J,Q,$,18,1),H=K.attributes.position;for(let Y=0;Y<H.count;Y++){let X=H.getX(Y),U=H.getZ(Y),D=Math.atan2(U,X),q=1+0.045*Math.sin(D*3+0.4)+0.027*Math.cos(D*5-0.3);H.setX(Y,X*q),H.setZ(Y,U*q)}return K.computeVertexNormals(),N9(K,W,$9,0,Z,0)}XK(2.62,2.3,0.58,g0.earth,0);XK(2.62,2.61,0.13,g0.grass,0.35);for(let[J,Q,$]of[[-2.05,1,0.32],[-1.3,1.95,0.35],[-0.3,2.28,0.24],[0.7,2.2,0.34],[1.75,1.55,0.3],[2.35,0.35,0.25],[-2.35,-0.5,0.27],[-1.7,-1.6,0.28],[1.4,-1.9,0.28]])pJ($,g0.rock,$9,J,0.37,Q).scale.set(1.35,0.68,1);R6(0.18,0.24,2.05,g0.bark,$9,-1.55,1.37,-0.95,7);function P$(J,Q,$,W,Z){let K=new T8(J,Q,12,1),H=K.attributes.position;for(let X=0;X<H.count;X++){let U=H.getX(X),D=H.getZ(X),q=Math.atan2(D,U);if(Math.hypot(U,D)>J*0.3){let O=0.83+0.17*Math.cos(q*6);H.setX(X,U*O),H.setZ(X,D*O),H.setY(X,H.getY(X)-0.1*Math.cos(q*6))}}K.computeVertexNormals();let Y=N9(K,$,$9,-1.55,W,-0.95);Y.rotation.y=Z}P$(1.12,1.3,g0.pine,2.15,0.1);P$(0.88,1.17,g0.pine2,2.85,0.28);P$(0.58,1.08,g0.pine3,3.5,0.05);var mG=ZJ(9942634),lG=ZJ(16113594),dG=ZJ(5206340);for(let[J,Q]of[[-2,0],[-1.8,1.35],[-1.65,-1.65],[-0.2,1.9],[1.35,1.7],[2,0.7],[1.8,-1.1],[-0.15,-2]]){let $=X8($9,J,0.43,Q);for(let W=0;W<3;W++){let Z=_$(0.045,0.2,mG,$,(W-1)*0.07,0.08,0,4);Z.rotation.z=(W-1)*0.3}}for(let[J,Q]of[[-1.75,1.4],[-0.15,1.95],[1.6,1.65]])R6(0.018,0.018,0.17,dG,$9,J,0.48,Q,4),pJ(0.06,lG,$9,J,0.58,Q);var Z9=X8($9,0.48,0,-0.42);fJ(1.38,0.13,0.7,g0.wood,Z9,0,1.32,0);for(let J of[-0.55,0.55])for(let Q of[-0.25,0.25])fJ(0.09,0.87,0.09,g0.bark,Z9,J,0.88,Q);fJ(0.88,0.58,0.09,g0.dark,Z9,0,1.78,-0.2);fJ(0.76,0.46,0.02,g0.screen,Z9,0,1.79,-0.145);fJ(0.09,0.18,0.08,g0.dark,Z9,0,1.43,-0.2);for(let J=0;J<5;J++)fJ(0.34+J%3*0.08,0.018,0.011,g0.key,Z9,-0.12+J%2*0.08,1.93-J*0.065,-0.129);fJ(0.49,0.035,0.17,g0.dark,Z9,-0.08,1.405,0.15);for(let J=0;J<2;J++)for(let Q=0;Q<6;Q++)fJ(0.055,0.008,0.04,g0.key,Z9,-0.28+Q*0.078,1.427,0.11+J*0.055);var z$=pJ(0.065,g0.key,Z9,0.46,1.42,0.16);z$.scale.set(0.7,0.35,1);R6(0.1,0.075,0.16,g0.bark,Z9,0.56,1.47,-0.19,7);pJ(0.14,g0.leaf,Z9,0.56,1.62,-0.19);var M6=X8($9,0.48,0,0.67);fJ(0.58,0.11,0.51,g0.wood,M6,0,0.91,0);fJ(0.58,0.65,0.1,g0.wood,M6,0,1.25,0.23);for(let J of[-0.22,0.22])for(let Q of[-0.19,0.19])fJ(0.07,0.45,0.07,g0.bark,M6,J,0.65,Q);var W9=X8(M6,0,0.97,0),uG=N9(new t8(0.245,0.19,4,8),g0.hoodie,W9,0,0.39,-0.03);uG.scale.z=0.72;var cG=pJ(0.22,g0.hoodie,W9,0,0.67,0.075);cG.scale.set(1,0.55,0.55);pJ(0.27,g0.skin,W9,0,0.89,-0.055);for(let J of[-0.25,0.25])pJ(0.075,g0.skin,W9,J,0.86,-0.055);var nG=pJ(0.285,g0.hair,W9,0,0.98,-0.01);nG.scale.set(1,0.76,1);pJ(0.105,g0.hair,W9,-0.2,0.91,0.01);pJ(0.1,g0.hair,W9,0.2,0.91,0.01);for(let[J,Q,$,W]of[[-0.16,1.1,0.01,0.12],[0.01,1.12,-0.03,0.13],[0.14,1.08,-0.05,0.11]])pJ(W,g0.hair,W9,J,Q,$);for(let J of[-0.14,0.14])fJ(0.18,0.13,0.4,g0.dark,W9,J,0.04,-0.18),fJ(0.2,0.13,0.38,g0.dark,W9,J,-0.22,-0.31);var O6=[];for(let J of[-0.31,0.31]){let Q=X8(W9,J,0.59,-0.05);fJ(0.14,0.14,0.47,g0.hoodie,Q,0,-0.12,-0.23),pJ(0.085,g0.skin,Q,0,-0.12,-0.47),O6.push(Q)}var f8=X8($9,-0.85,0.42,0.82),sG=new w8({map:HK("rgba(255,153,57,.55)","rgba(255,100,20,0)"),transparent:!0,depthWrite:!1,side:yJ}),iG=N9(new p9(2.6,2.6),sG,f8,0,0.006,0);iG.rotation.x=-Math.PI/2;var C$=new Y6(16751434,4,3.5,2);C$.position.set(0,0.6,0);f8.add(C$);for(let J=0;J<7;J++){let Q=J*Math.PI*2/7,$=pJ(0.12,g0.rock,f8,Math.cos(Q)*0.39,0.05,Math.sin(Q)*0.39);$.scale.y=0.7}for(let J of[-0.65,0.65]){let Q=R6(0.075,0.075,0.66,g0.bark,f8,0,0.12,0,6);Q.rotation.z=Math.PI/2,Q.rotation.y=J}var w$=[];for(let[J,Q,$]of[[0,0,0.66],[-0.17,0.02,0.43],[0.14,-0.04,0.48]]){let W=_$(0.18,$,g0.fire,f8,J,0.13+$/2,Q,6);w$.push(W)}var oG=_$(0.12,0.37,g0.flame,f8,0,0.32,0.025,6);w$.push(oG);var F6=0,D6=0,X7=0,v8=!1,Q9=0,A$=0;function UK(){if(F6=I$.clientWidth,D6=I$.clientHeight,!F6||!D6)return;y8.setSize(F6,D6,!1);let J=F6/D6,Q=J<1?4.5:4.15;m9.left=-Q*J,m9.right=Q*J,m9.top=Q,m9.bottom=-Q,m9.updateProjectionMatrix()}function L6(){y8.render(Y8,m9)}function GK(J){if(document.hidden||v8||G7.matches)return;if(A$=requestAnimationFrame(GK),J-X7<33.333333333333336)return;let Q=X7?Math.min((J-X7)/1000,0.1):0;X7=J,Q9+=Q,$9.rotation.y=Q9*0.1,O6[0].rotation.x=Math.sin(Q9*5)*0.09,O6[1].rotation.x=Math.sin(Q9*3.5+1)*0.055,O6[1].rotation.y=Math.sin(Q9*0.8)*0.08,z$.position.x=0.46+Math.sin(Q9*0.8)*0.018,z$.position.z=0.16+Math.cos(Q9*0.8)*0.015,w$.forEach(($,W)=>{$.scale.y=0.88+Math.sin(Q9*7+W*1.7)*0.12,$.rotation.z=Math.sin(Q9*4+W)*0.08}),YK.forEach(($)=>{let W=1+Math.sin(Q9*0.8-$.userData.phase)*0.09;$.scale.set($.userData.size*W,$.userData.size*0.55*W,1)}),C$.intensity=3.6+Math.sin(Q9*5)*0.3,L6()}function k6(){if(cancelAnimationFrame(A$),X7=0,!document.hidden&&!v8&&!G7.matches)A$=requestAnimationFrame(GK);else L6()}var U7=document.querySelector("button");U7.addEventListener("click",()=>{v8=!v8,U7.textContent=v8?"Play animation":"Pause animation",U7.setAttribute("aria-pressed",String(v8)),k6()});G7.addEventListener("change",()=>{U7.hidden=G7.matches,k6()});document.addEventListener("visibilitychange",k6);window.addEventListener("resize",()=>{UK(),L6()});U7.hidden=G7.matches;UK();L6();k6();WK.hidden=!0;
