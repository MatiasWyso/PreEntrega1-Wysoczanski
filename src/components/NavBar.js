import CartWidget from './CartWidget'

function NavBar() {
    const lista =  {"display": "flex", 
             "justify-content": "right",
             "list-style": "none",
              "color": "blue"
              }
     const links = {"padding" : "4px"}


         return (
        <div>

        <h2> Perla Libros </h2>
        <ul style= {lista}> 
        <li style= {links}>Productos <CartWidget /></li>
        <li style= {links}>Información </li>
        <li style= {links}>Envíos</li>
        </ul>
        
        </div>

)
}

export default NavBar;