import CardInfo from './CardInfo/index'
import Search from './Search/index'

const Home = ({title}) => {
    return (
      <div>
        <h1>{title}</h1>
        <CardInfo title="CardInfo"/>
        <Search title="Search"/>
      </div>
    )
  }
export default Home