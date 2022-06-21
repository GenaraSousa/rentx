import React from 'react';
import { StatusBar } from 'react-native';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import {
    Accessories,
    Brend,
    CalendarIcon,
    CardImages,
    Container,
    Content,
    DateInfo,
    DateTitle,
    DateValue,
    Description,
    Details,
    Footer,
    Header,
    Name,
    Period,
    Price,
    Rent,
    RentalPeriod,
    RentalPrice,
    RentalPriceDetails,
    RentalPriceLabel,
    RentalPriceQuota,
    RentalPriceTotal
} from './styles';


import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';


export function SchedulingDetails() {
    const theme = useTheme();
    const navigation = useNavigation()

    function handleConfirmRental() {
        navigation.navigate('SchedulingComplete');
    }
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
                    imageUrl={['https://i.pinimg.com/originals/25/17/0f/25170f88757566370cc44f096916dd41.png']}
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

                <RentalPeriod>

                    <CalendarIcon>
                        <Feather
                            name='calendar'
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue>18/02/2021</DateValue>
                    </DateInfo>

                    <Feather
                        name='chevron-right'
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue>25/02/2021</DateValue>
                    </DateInfo>

                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>

            </Content>
            <Footer>
                <Button
                    title='Alugar agora'
                    color={theme.colors.success}
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
}
