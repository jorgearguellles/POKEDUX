import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

export const PokemonCard = (props) => {
    const { name, image } = props;
    
    return (
        <Card 
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarOutlined/>}
        >
            <Meta description='normal, magic' />
        </Card>
    )
};