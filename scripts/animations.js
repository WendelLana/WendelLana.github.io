
flag = 1
        function f1() {
            document.getElementById("imagem").src = "https://media.giphy.com/media/gLugCaElYXH7589sSb/giphy.gif"
            document.getElementById("texto").textContent = "Midnight, I'll come and pick you up"
            alert("YEAH, TE AMO! <3")
            document.getElementById("By").style.visibility = "hidden"
            document.getElementById("Bn").style.visibility = "hidden"
            document.getElementById("heart").style.display = "block"
        }
        function f() {
            let By = document.getElementById("By")
            By.style.margin = 0
            By.style.padding = 0
            By.style.position = "absolute"
            let Bn = document.getElementById("Bn")
            Bn.style.position = "absolute"
            document.getElementById("imagem").src = "https://i.gifer.com/HOFK.gif"

            Bn.style.top = 520 + Math.random() * 200
            Bn.style.left = 220 + Math.random() * 900
        }

