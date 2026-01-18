const st = document.querySelectorAll("strong")
const link = document.getElementById("link")

function highlight() {
    //Write your code here
	st.forEach(el =>{
	link.addEventListener("mouseover",()=>{
	el.style.color = "green"
		})
	})
}
function return_normal() {
    //Write your code here
	st.forEach(el =>{
	link.addEventListener("mouseout",()=>{
	el.style.color = "black"
		})
	})
}
