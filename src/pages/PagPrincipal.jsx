import './PagPrincipal.css'

import home from "../assets/home.svg";
import users from "../assets/users-group.svg";
import journal from "../assets/journal-bookmark.svg";
import boxes from "../assets/boxes.svg";

function PagPrincipal () {

    return(
        <div className="container-split">
              
              <div className="left-side">

                <img src={home} alt="Pagina principal" />

                <img src={users} alt="Grupo de trabajo" />

                <img src={journal} alt="Tareas" />

                <img src={boxes} alt="Inventario" />
            
        
              </div>
              
              
              <div className="right-side">
                
               
        
                  
        
                </div>
               
                
              
            
        
          </div>
        
    )
}

export default  PagPrincipal ;