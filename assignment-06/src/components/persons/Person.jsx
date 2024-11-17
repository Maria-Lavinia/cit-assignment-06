import style from '../persons/Person.module.css';
import Image from '../images/Image';

function Person({person, images}){
    return(
        <div className={style['layout']}>
        {person && person.known_for_department  }
        {person && person.original_name }
        {person && person.id }

        {person && person.known_for.map((movie, index) => (
            <div key={index}>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>

            </div>
        ))}

   <Image images={images} />

        </div>
    )


 
}


export default Person;