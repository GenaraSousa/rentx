import React from 'react';
import { CardImage } from '../Car/styles';

import {
    CardImageWrapper,
    Container,
    ImageIndex,
    ImageIndexes
} from './styles';
interface Props {
    imageUrl: string[];
}

export function ImageSlider({ imageUrl }: Props) {


    return (
        <Container>
            <ImageIndexes>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexes>
            <CardImageWrapper>
                <CardImage
                    source={{
                        uri: imageUrl[0]
                    }}
                    resizeMode='contain'
                />
            </CardImageWrapper>
        </Container>
    );
}
