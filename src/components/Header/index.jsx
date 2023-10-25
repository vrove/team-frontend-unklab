import Generations from './Generations/index'
import Gen1 from './Generations/Gen1/index'
import Gen2 from './Generations/Gen2/index'
import Gen3 from './Generations/Gen3/index'
import Gen4 from './Generations/Gen4/index'

const Header = ({title}) => {
    return (
      <div>
        <h1>{title}</h1>
        <Generations title="Generations"/>
        <Logo title="Logo"/>
      </div>
    )
  }
export default Header