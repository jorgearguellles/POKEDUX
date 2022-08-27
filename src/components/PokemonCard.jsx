import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
// import { setFavoritePokemon } from '../actions';
import { setFavorite } from '../slices/dataSlice';
import { StartButton } from './StartButton';

// Helper function
const firstCapitalLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const PokemonCard = (props) => {
    const { name, image, types, id, favorite } = props;
    const dispatch = useDispatch();

    const typesStrings = types.map( element => firstCapitalLetter(element.type.name) ).join(', ');
    const nameCapitalized = firstCapitalLetter(name);

    const handleOnFavoritePokemon = () =>{
        dispatch(setFavorite({pokemonId: id}))
    };

    return (
        <Card 
            title={nameCapitalized}
            cover={<img src={image} alt={name} />}
            extra={<StartButton isFavorite={favorite} onClick={handleOnFavoritePokemon}/>}
        >
            <Meta description={typesStrings} />
        </Card>
    )
};