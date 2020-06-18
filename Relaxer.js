const container=document.querySelector('#container');
const text=document.querySelector('#text');
const totalTime=7500
const breathingTime=(totalTime/5)*2
const holdTime=totalTime/5

breatheFunction()
function breatheFunction(){
  text.innerHTML='Breathe In'
  container.className="grow"
  setTimeout(() => {
    text.innerText='Hold'

    setTimeout(() => {
      text.innerText='Breathe Out'
      container.className="shrink"
    }, holdTime)

  }, breathingTime)
}

setInterval(breatheFunction,totalTime)