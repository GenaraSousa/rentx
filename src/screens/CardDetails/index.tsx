import React from 'react';
import { StatusBar } from 'react-native';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import {
    About,
    Accessories,
    Brend,
    CardImages,
    Container,
    Content,
    Description,
    Details,
    Footer,
    Header,
    Name,
    Period,
    Price,
    Rent
} from './styles';


import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';


export function CardDetails() {
    return (
        <Container>
            <StatusBar
                translucent
                barStyle={'dark-content'}
                backgroundColor="transparent"
            />
            <Header>
                <BackButton
                    isGray={true}
                    onPress={() => { }}
                />
            </Header>
            <CardImages>
                <ImageSlider
                    imageUrl={['https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F06%2FPNGPIX-COM-Black-Lamborghini-Centenario-LP-770-4-Car-PNG-Image.png&f=1&nofb=1']}
                />
            </CardImages>

            <Content>
                <Details>
                    <Description>
                        <Brend>Lamborghini</Brend>
                        <Name>Huracan</Name>
                    </Description>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>
                <Accessories>
                    <Accessory name="380Km/h" icon={speedSvg} />
                    <Accessory name="3.2s" icon={accelerationSvg} />
                    <Accessory name="800 HP" icon={forceSvg} />
                    <Accessory name="Gasolina" icon={gasolineSvg} />
                    <Accessory name="Auto" icon={exchangeSvg} />
                    <Accessory name="2 pessoas" icon={peopleSvg} />
                </Accessories>

                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
            <Footer>
                <Button title='Escolher período de aluguel' />
            </Footer>
        </Container>
    );
}
