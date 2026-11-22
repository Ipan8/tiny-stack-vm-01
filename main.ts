import{readdirSync as R,readFileSync as F,mkdirSync as K,writeFileSync as W}from'node:fs';
const T="!24%EIY]        999999959995999 999             #''#!           5)              %%1%";
function run(p,q){
const D=new Int32Array(576),o=Buffer.alloc(65536);
let sp=0,cs=0,pc=0,st=0,ol=0,ip=0;
const E=c=>[c,o.subarray(0,ol)];
for(;;){
if(st==1e6)return E(10);
if(pc<0||pc>=p.length)return E(9);
const op=p[pc],v=T.charCodeAt(op)-33;
if(!(v>=0))return E(5);
const im=[0,1,2,4][v&3],pp=(v>>2)&3,ps=(v>>4)&3;
if(pc+im>=p.length)return E(9);
st++;
const nx=pc+1+im;
if(sp<pp||sp-pp+ps>256)return E(sp<pp?2:3);
pc=nx;
if(op==0)return E(0);
else if(op==1)D[sp++]=p[nx-1]<<24>>24;
else if(op==2)D[sp++]=p[nx-4]|p[nx-3]<<8|p[nx-2]<<16|p[nx-1]<<24;
else if(op==3)sp--;
else if(op==4)D[sp]=D[sp-1],sp++;
else if(op==5){const t=D[sp-1];D[sp-1]=D[sp-2];D[sp-2]=t;}
else if(op==6)D[sp]=D[sp-2],sp++;
else if(op==7){const a=D[sp-3];D[sp-3]=D[sp-2];D[sp-2]=D[sp-1];D[sp-1]=a;}
else if(op==23)D[sp-1]=-D[sp-1]|0;
else if(op==27)D[sp-1]=~D[sp-1];
else if(op>15&&op<35){
const b=D[sp-1],a=D[sp-2];
if(op>18&&op<23&&!b)return E(4);
D[sp-2]=op==16?a+b|0:op==17?a-b|0:op==18?Math.imul(a,b):op==19?a==-2147483648&&b==-1?a:(a/b)|0:op==20?b==-1?0:a%b|0:op==21?(a>>>0)/(b>>>0)|0:op==22?(a>>>0)%(b>>>0)|0:op==24?a&b:op==25?a|b:op==26?a^b:op==28?a<<(b&31):op==29?a>>(b&31):op==30?a>>>(b&31)|0:op==32?a==b?1:0:op==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;sp--;
}
else if(op>47&&op<51){
const v=op==48?1:D[--sp];
if(op==48||op==49==(v==0))pc=nx+(p[nx-2]|p[nx-1]<<8<<16>>16);
}
else if(op==51){if(cs==64)return E(7);D[256+cs++]=pc;pc=p[nx-2]|p[nx-1]<<8;}
else if(op==52){if(!cs)return E(8);pc=D[256+--cs];}
else if(op==64){const a=D[sp-1];if(a>>>0>255)return E(6);D[sp-1]=D[320+a];}
else if(op==65){const a=D[sp-1];if(a>>>0>255)return E(6);const v=D[sp-2];sp-=2;D[320+a]=v;}
else if(op==80){const b=Buffer.from(''+D[sp-1]);if(ol+b.length>65536)return E(11);sp--;o.set(b,ol);ol+=b.length;}
else if(op==81){if(ol>65535)return E(11);o[ol++]=D[--sp]&255;}
else if(op==82)D[sp++]=ip<q.length?q[ip++]:-1;
else return E(D[--sp]&255);
}
}
const e=process.env,I=e.MAKEFUN_INPUT_DIR||'/input',O=e.MAKEFUN_OUTPUT_DIR||'/output';
for(const d of R(I)){
let r=[0,''];
try{r=run(F(I+'/'+d+'/program.bin'),F(I+'/'+d+'/input.bin'))}catch{}
K(O+'/'+d,{recursive:true});
W(O+'/'+d+'/stdout.bin',r[1]);
W(O+'/'+d+'/exit.txt',r[0]+'\n');
}
