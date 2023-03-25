import * as Styles from './Index.styles'

import Card from '../../Components/Cards/Card'

const cards = [
  {
    "img": "https://www.inesquecivelcasamento.com.br/wp-content/uploads/2022/06/Casamento-Luana-e-Bernardo-por-Jannu-previa-73.jpg",
    "title": "Casamentos",
    "desc": "Marcar Dia e Horários",
    "path": "/casamentos"
  }
]

const Index = () =>{
    return (
      <Styles.MainContainer>
          {/* <Horarios /> */}
          <Card items={cards} />
      </Styles.MainContainer>
    );
}

export default Index