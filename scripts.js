
const formulario= document.querySelector(".formulario-fale-conosco")
const mascara= document.querySelector(".mascara-formulario")

function clico(){
    formulario.style.left="10%"
    formulario.style.transform="transletex(-50%)"
    mascara.style.visibility="visible"


}

function mascarad(){
mascara.style.visibility="hidden"
formulario.style.transform="transletex(50%)"
formulario.style.left="-350px"
}