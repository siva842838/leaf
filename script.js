//ratingbox
const stars = document.querySelectorAll(".stars i");

//nt
stars.forEach((star, index1) => {
    //nt
    star.addEventListener("click", () => {
        //nt
        stars.forEach((star, index2) => {

            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");//

            
        });
    });
});
function submit(){
    window.open("https://youtu.be/p1GmFCGuVjw?si=EbQABYPVYV4wW9xR")
}
submit()
//ratingbox

//home page
