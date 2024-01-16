import { Container } from './styles'
import { Tag } from '../Tag'
import { PiStar } from "react-icons/pi";
import { PiStarFill, PiClock } from "react-icons/pi";





export function NoteDetail({ data, user, ...rest }) {
    console.log("data_______________________________", data)
    console.log("user_______________________________", user)
    return (
        <>
            {data && <Container {...rest}>
                <div className='title-rating'>
                    <h1>{data.title}</h1>
                    <div className='rating'>
                        {Number(data.rating) > 0 ? Array.from(new Array(Number(data.rating)).fill(0)).map((star, index) => {
                            return (<PiStarFill size={21} color='#FF859B' key={index} />)
                        }) : null}

                        {Number(data.rating) < 5 ? Array.from(new Array(5 - Number(data.rating)).fill(0)).map((star, index) => {
                            return (<PiStar size={21} color='#FF859B' key={index} />)
                        }) : null}
                    </div>
                </div>
                <div className='user-date-info'>
                    <img src="https://avatars.githubusercontent.com/u/116025325?v=4"
                        alt={user && "Foto do " + user.name} /><span> Por {user && user.name} </span>
                    <PiClock size={18} /><span> {data.created_at} </span>
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
            }</>
    )
}