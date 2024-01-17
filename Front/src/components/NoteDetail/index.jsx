import { Container, Textarea } from './styles'
import { Tag } from '../Tag'
import { PiStar } from "react-icons/pi";
import { PiStarFill, PiClock } from "react-icons/pi";
import api from '../../services/api';
// import { format } from 'date-fns';
import { format } from 'date-fns'
import * as locales from 'date-fns/locale'

export function NoteDetail({ data, user, ...rest }) {
    // String UTC
    let utcString = data.created_at + "Z";

    // Data convertida para a máquina local
    let localDate = new Date(utcString);

    // Obtém o locale do navegador
    let userLocale = navigator.language || navigator.userLanguage;

    // Opções para formatar a data
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };

    // Data formatada numa string
    let formattedDate = localDate.toLocaleString(userLocale, options);

    console.log("String UTC: ", utcString);
    console.log("Data Local: ", localDate);
    console.log("Data Formatada: ", formattedDate);


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
                    <img src={user.avatar ?
                        `${api.defaults.baseURL}/files/${user.avatar}` : '/images/avatar_placeholder.svg'}
                        alt={user && "Foto do " + user.name} /><span> Por {user && user.name} </span>
                    <PiClock size={18} /><span> {'sdsa'} </span>
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
                    data.description && <Textarea value={data.description} />
                }
            </Container>
            }</>
    )
}