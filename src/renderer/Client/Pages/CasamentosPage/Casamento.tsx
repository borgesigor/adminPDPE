import * as Styles from './Casamento.styles'
import instance from '../../Components/Axios/instance'
import Card from '../../Components/Cards/Card'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MiniSearch from 'minisearch'

const Page = () =>{
    const navigate = useNavigate();
    const [fetchItems, setFetchItems] = useState([])
    const [defaultFetchItems, setDefaultFetchItems] = useState([])
    const [fetchItemsForCard, setFetchItemsForCard] = useState([])

    const getAll = async () => {
      await instance({
        url: '/casamento/',
        method: 'GET'
      })
      .then((response)=>{
        setFetchItems(response.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    useEffect(()=>{
      getAll()
    }, [])

    // Identar
    const analyzeForCard = () => {
      let Teste: any = []
      Teste = fetchItems.map((item: any) => ({
        id: item.id,
        img: item.Imagem,
        title: `${item.Pretendente01} & ${item.Pretendente02}`,
        descUp: `${item.Data} | ${item.Horario}`,
        desc: `${item.Nome}`
      }))
      setDefaultFetchItems(Teste)
      setFetchItemsForCard(Teste)
      return
    }

    useEffect(()=>{
      analyzeForCard()
    }, [fetchItems])

    // Sistema de pesquisa
    const miniSearchFunc = (e: any) => {
      if ( fetchItems.length == 0 ) {
        return
      }
      let miniSearch = new MiniSearch({
        fields: ['title', 'descUp'],
        storeFields: ['img', 'title', 'descUp', 'desc'],
        searchOptions: {
            fuzzy: 0.5,
            prefix: true
          }
      })
      miniSearch.addAll(defaultFetchItems)
      let results: any = miniSearch.search(e.toString())
      setFetchItemsForCard(results)
      if(e.length == 0) {
        setFetchItemsForCard(defaultFetchItems)
      }
    }

    return (
      <Styles.MainContainer>
          <div className='header'>
            <button className='adicionarNovo' onClick={() => navigate('/adicionar-casamento')}><span className="material-symbols-outlined">add</span><span>Adicionar Novo Horário de Casamento</span></button>
            <input 
              onChange={(e) => miniSearchFunc(e.target.value)} 
            placeholder='Pesquisar' type="text" />
          </div>
          <Card items={fetchItemsForCard} />
      </Styles.MainContainer>
    );
}

export default Page