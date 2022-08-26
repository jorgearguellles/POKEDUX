import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

// Helper function
const firstCapitalLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const PokemonCard = (props) => {
    const { name, image, types } = props;
    const typesStrings = types.map( element => firstCapitalLetter(element.type.name) ).join(', ');
    const nameCapitalized = firstCapitalLetter(name);

    return (
        <Card 
            title={nameCapitalized}
            cover={<img src={image} alt={name} />}
            extra={<StarOutlined/>}
        >
            <Meta description={typesStrings} />
        </Card>
    )
};