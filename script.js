const st = document.querySelectorAll("strong")

function highlight() {
    //Write your code here
	st.forEach(el =>{
		el.addEventListener("mouseover",()=>{
			el.style.color = "blue"
		})
	})
}
function return_normal() {
    //Write your code here
	st.forEach(el =>{
		el.addEventListener("mouseout",()=>{
			el.style.color = "black"
		})
	})
}
