import React from 'react'
import { Button } from "antd";
import { StarOutlined, StarFilled } from '@ant-design/icons';

export const StartButton = (props) => {
    const {isFavorite, onClick} = props;
    const Icon = isFavorite ? StarFilled : StarOutlined;

    return <Button icon={<Icon />} onClick={onClick}></Button>
};
