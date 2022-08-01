import type {NextPage} from 'next'
import Slider from '@mui/material/Slider'
import {styled} from '@mui/material/styles'

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`

const Home: NextPage = () => {
  return (
    <div>
      <CustomizedSlider />
    </div>
  )
}

export default Home
