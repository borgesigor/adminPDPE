import * as Style from './Header.styles'

import { useNavigate } from "react-router-dom";

const headerMenu = [
  {
    "icon": "home",
    "title": "Início",
    "path": "/"
  },
  {
    "icon": "favorite",
    "title": "Casamentos",
    "path": "/casamentos"
  }
]

const Header = () => {
  const navigate = useNavigate();

  return(
    <Style.Header>
      <Style.HeaderContent>
        <ul>
          {
            headerMenu.map((el: any, i: number)=>
              <li key={i} onClick={() => navigate(el.path)}>
                <div className='left'>
                  <span className="material-symbols-outlined icon">{el.icon}</span> 
                  <span className='title'>{el.title}</span>
                </div>
                <span className="material-symbols-outlined arrow"> navigate_next </span>
              </li>
            )
          }
        </ul>
      </Style.HeaderContent>
    </Style.Header>
  )
}

export default Header