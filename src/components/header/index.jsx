import Generations from './Generations/index'
import Gen1 from './Generations/Gen1/index'
import Gen2 from './Generations/Gen2/index'
import Gen3 from './Generations/Gen3/index'
import Gen4 from './Generations/Gen4/index'

const Header = () => {
    return (
      <div>
        <h1>Header</h1>
        <Generations/>
        <Gen1/>
        <Gen2/>
        <Gen3/>
        <Gen4/>
      </div>
      
    )
  }
export default Header