import { Container } from './styles'
import { Tag } from '../Tag'
import { PiStar } from "react-icons/pi";
import { PiStarFill, PiClock } from "react-icons/pi";

export function NoteDetail({ data, ...rest }) {
    return (
        <Container {...rest}>
            <div className='title-rating'>
                <h1>{data.title}</h1>
                <div className='rating'>
                    {Array.from(new Array(data.rating).fill(0)).map((star, index) => {
                        return (<PiStarFill size={21} color='#FF859B' key={index} />)
                    })
                    }
                    {(data.rating < 5) && Array.from(new Array(5 - data.rating).fill(0)).map((star, index) => {
                        return (<PiStar size={21} color='#FF859B' key={index} />)
                    })}
                </div>
            </div>
            <div className='user-date-info'>
                <img src="https://avatars.githubusercontent.com/u/116025325?v=4"
                    alt="Foto do usuário" /><span> Por Christian Oliveira </span>
                <PiClock size={18} /><span> 23/05/22 às 08:00</span>
            </div>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
            {
                data.description && <p> {data.description}</p>
            }
        </Container>
    )
}