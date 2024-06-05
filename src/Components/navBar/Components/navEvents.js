export const navEvents = (navMenu) =>{
    $("#navBar").prepend(`<a class="navbar-brand" href="#">${navMenu.brand}</a>`)

    $.each(navMenu.elements,(key,itm)=>{
        if(itm.content == null){
            $("#navbarSupportedContent .navbar-nav").append(`
            <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="${itm.url}">${itm.title}</a>
            </li>`)
        }
        else{
            let dropdownItems = ``
            $.each(itm.content,(c_key,c_itm)=>{
                dropdownItems += `<li><a class="dropdown-item" href="${c_itm.url}">${c_itm.title}</a></li>`
            })
                
            const dropdown = `
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown_${key}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ${itm.title}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown_${key}">${dropdownItems}</ul>
            </li>`

            $("#navbarSupportedContent .navbar-nav").append(dropdown)
        }
    })
}