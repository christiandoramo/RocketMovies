import { Container } from './styles'
import { Tag } from '../Tag'
import { PiStar } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";



export function Note({ data, ...rest }) {

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div>
        {Array.from(new Array(data.rating).fill(0)).map((star, index) => {
          return (<PiStarFill size={12} color='#FF859B' key={index} />)
        })
        }
        {(data.rating < 5) && Array.from(new Array(5 - data.rating).fill(0)).map((star, index) => {
          return (<PiStar size={12} color='#FF859B' key={index} />)
        })}
      </div>
      {
        data.description && <p> {data.description}</p>
      }

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}