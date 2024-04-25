function sleep(ms){
return new Promise((resolve)=>setTimeout(resolve,ms))
}
const phrases=["Touch on the card to wish!" ];
const el=document.getElementById("pip");
let sleeptime=100;
let curPhraseIndex=0;
const writeLoop=async()=>{ 
    while(true){
        let curWord=phrases[curPhraseIndex];
         for ( let i=0;i<curWord.length;i++)
         {
            el.innerText=curWord.substring(0,i +1);
            await sleep(sleeptime);

        }
        await sleep(sleeptime * 5);

        for ( let i=curWord.length;i>0; i-- ){
            el.innerText=curWord.substring(0,i -1);
            await sleep(sleeptime);
         }
         await sleep(sleeptime * 5);
         if (curPhraseIndex===phrases.length-1){
            curPhraseIndex=0;
         }
         else{
            curPhraseIndex++;
         }


    }
};
writeLoop();
