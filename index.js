const theme = { 
    'blue': { backgroundColor: 'B9EDDD', color:'569DAA', src: "Blue_umbrella", class:"blue_filter" }, 
    'pink': { backgroundColor: 'F7C8E0', color:'E11299', src: "Pink_umbrella", class:"pink_filter"}, 
    'yellow': { backgroundColor: 'FFF89C', color:'EBB02D', src: "Yellow_umbrella", class:"yellow_filter" }
}

const input = document.querySelector("input");
input.addEventListener("change", (e) => {

    //extracting filename of logo
    const fileName = e.target.value.split("\\").pop();
    const file = input.files;

    // showing loading animation while the image is being loaded
    const parent = document.getElementsByClassName('parent');
    const spinner = document.getElementById('spinner');
    parent[0].style.display = "none";
    spinner.style.display = "block";
    spinner.classList.add("rotating");

    //changing the upload icon to loader icon on the upload button
    const buttonImage = document.querySelector('.upload_logo_button > img')
    buttonImage.src = "./resources/loader_icon.svg"
    buttonImage.classList.toggle("rotating")



    setTimeout(() => {
        //stoping the loading animation
        spinner.style.display = "none";
        parent[0].style.display = "block";
        
        //adding logo to at the bottom of umbrella
        const logo = document.getElementById('logo');
        logo.style.display = 'block'
        logo.setAttribute('src', URL.createObjectURL(file[0]))

        //chaning the loader icon on upload button back to upload icon
        buttonImage.src = "./resources/upload_icon.svg"
        buttonImage.classList.toggle("rotating")

        //adding filename on the upload file button
        document.querySelector('.upload_logo_button > label').innerHTML = fileName;
    }, 2000)
});

//code responsible for changing theme
document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', (event) => {
        //extracting the name of the clicked color and changing the theme
        let color = event.target.getAttribute('name');
        document.querySelector(".root").style.backgroundColor = theme[color].backgroundColor;
        document.querySelector(".upload_logo_button").style.backgroundColor = theme[color].color;

        //showing loading animation and changing the color of spinner
        const parent = document.getElementsByClassName('parent');
        const spinner = document.getElementById('spinner');
        parent[0].style.display = "none";
        spinner.className = "none"
        spinner.classList.add(theme[color].class);
        spinner.style.display = "block";
        spinner.classList.add("rotating");

        setTimeout(() => {
            //stopping the loading animation
            parent[0].style.display = "block";
            spinner.style.display = "none";

            //changing the color of umbrella
            document.querySelector("#umbrella").setAttribute('src', `./resources/${theme[color].src}.png`);
        }, 2000);

    })
})