import * as Styles from './Card.styles'

import { useNavigate, useSearchParams } from "react-router-dom";

const Card = (props: any) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  var cardsDeb = props.items

  return (
    <Styles.CardContainer>
      <Styles.CardContent>
        {
          cardsDeb.length == 0 && <span className='semResultado'>Nenhum Resultado</span>
        }
        {
          cardsDeb &&
          cardsDeb.map((el: any, i: number) =>
            <Styles.CardObject key={i} onClick={()=> navigate(el.path ? el.path : `/info-page/${el.id}`)}> 
              <div className='img-card'>
                <img src={el.img} />
              </div>
              <div className='infos-card'>
                { el.descUp && <span className='desc'>{el.descUp}</span> }
                { el.title && <span className='title'>{el.title}</span> }
                { el.desc && <span className='desc'>{el.desc}</span> }
                { el.descSub && <span className='desc'>{el.descSub}</span> }
              </div>
            </Styles.CardObject>
          )
        }
      </Styles.CardContent>
    </Styles.CardContainer>
  )
}

export default Card