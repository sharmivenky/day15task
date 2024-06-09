let div=document.getElementById("root")

document.body.appendChild(div)
setTimeout(()=>{
    console.log("timer1")
    div.innerHTML='<h2>10<\h2>'
    setTimeout(()=>{
         console.log("timer2")
         div.innerHTML='<h2>9<\h2>'
       setTimeout(()=>{
            console.log("timer3")
            div.innerHTML='<h2>8<\h2>'
              setTimeout(()=>{
                 console.log("timer4")
                 div.innerHTML='<h2>7<\h2>'
                   setTimeout(()=>{
                console.log("timer5")
                div.innerHTML='<h2>6<\h2>'
                setTimeout(()=>{
                    console.log("timer6")
                    div.innerHTML='<h2>5<\h2>'
                    setTimeout(()=>{
                        console.log("timer7")
                        div.innerHTML='<h2>4<\h2>'
                setTimeout(()=>{
                            console.log("timer8")
                            div.innerHTML='<h2>3<\h2>'
                            setTimeout(()=>{
                                console.log("timer9")
                                div.innerHTML='<h2>2<\h2>'
                                setTimeout(()=>{
                                    console.log("timer10")
                                    div.innerHTML='<h2>1<\h2>' 
                                    setTimeout(()=>{
                                        console.log("timer11")
                                        div.innerHTML='<h1>HAPPY INDEPENDENCE DAY<\h1>'
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            } ,1000)
            
        },1000)
    },1000)
   },1000)
},1000)