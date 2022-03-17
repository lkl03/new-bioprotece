
import {EquipoListPlus, EquipoList} from './EquipoList'
import Link from 'next/link'

const Equipo = () => {

    return (
        <ul id='cards'>
            {EquipoListPlus.map((item, index) => {
                return(

                    <div className='card' key={item}>
                        <Link href={`/equipamiento/${item.path}`}>

                            <img src={item.img} alt={item.title} />

                            <div className='card-body'>
                                <span>{item.title}</span>
                                <p>{item.text}</p>
                            </div>
                            
                            <div className='div-plus plus' >
                                <p className='plus-p'><i className='fas fa-plus-circle'/>Info</p>
                            </div>

                        </Link>

                    </div>

                )
            } )}

            {EquipoList.map((item, index) => {
                return(

                    <div className='card' key={item}>

                        <img src={item.img} alt={item.title} />

                        <div className='card-body'>
                                <span>{item.title}</span>
                                <p>{item.text}</p>
                        </div>

                    </div>

                )
            } )}
        </ul>
    )}

export default Equipo
