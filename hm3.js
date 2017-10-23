const a=254;
  const b=547;
  const c=458;
  const d=a**b/c;

  if (a>b>c)  {    console.log(a+"is a really great number");
              } if (d===250000000){ console.log(a+b+c);
              } if (a>b || a<c){console.log("baba karam");
              } if (a>b && a<c){console.log("King of Kings");
              } if (a!==b!==c){console.log(d);
              } if("g"){console.log(a*b*c);
                                           }
///////////////////////////////////////////////////////////////////////////

  //  this function takes inputs and gives outputs.//
   const math=function(x,y,z,w,r,t){
   const M=(x+y+z)+(w*r*t)**25;
   return M;
           };
        const result= math(2500,82,50,54,10,11);
        // console.log(result);//

///////////////////////////////////////////////////////////////////////////

// this function takes no inputs and gives some outputs //
const BigBang=function(){  a="aaaaaaaaaaaaaaaaa";
                    return a;
                        };
 const result=BigBang ();
//console.log(result);//

//////////////////////////////////////////////////////////////////////////

//this function takes inputs but does not give outputs//
          const PersianGulf=function(x,y,z,t){  const M=(x*t)+(y*z);
                                                 const N=x-z-t+y;
                                                 const P=M**N;
                                                 const result=M*(x+y+z+t)**3+N-P ;
                                              //  return result; //
           };
            const HH=PersianGulf(20,50,88,10);
            console.log(HH);




///////////////////////////////////////////////////////////////////////////

            const string=function(s,d,f){ const S=s.length;
                                            const D=d.length;
                                            const F=f.length;

                                           if(S>D && S>F){return s;}
                                           if(D>S && D>F){return d;}
                                           if(F>S && F>D){return f;}

                                           };
              const balckHoles=string("sdff","tfhhhhbbbbdgg","tthhttg");
              //console.log(balckHoles);//

////////////////////////////////////////////////////////////////////////////


      const fullName=function(f,l){  const C=f+"  "+l;
                                         return C;
      };
     const NAME=fullName("armin","felahat");
     //console.log(NAME);//

/////////////////////////////////////////////////////////////////////////

const number=function(a,b){
   if(a===b){ return 0;}
   if(a>b){ return 1;}
   else {return-1;}
 };

 const BB=number(5,5);
  //console.log(BB);//

///////////////////////////////////////////////////////////////////////////

const bbc=function(a,b,c){ const M=a || b ||c;
   if (M){ return M;}

  };
const w = bbc(0,25,NaN);
//console.log(w);      //
