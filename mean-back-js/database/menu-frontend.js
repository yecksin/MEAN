const getMenuFrontend = (role = 'USER_ROLE')=>{
    const menu = [
        {
            titulo:'inicio',
            subMenu:[
                {
                    titulo:'algo',
                    url:'algo'
                }
            ]
        },
        {
            titulo:'contacto',
            subMenu:[
                {
                    titulo:'redes sociales',
                    url:'no-se'
                }
            ]
        }
    ]

    if (role === 'ADMIN_ROLE' ) {
        //? unshift primera pos del archivo
        menu[1].subMenu.unshift({titulo:'users',url:'users'})
    }
    return menu;
}

module.exports = {getMenuFrontend};