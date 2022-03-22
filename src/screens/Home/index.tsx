import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { Car } from '../../components/Car';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CardList
} from './styles';
import Logo from '../../assets/logo.svg';

export function Home() {
    const navigation = useNavigation();

    const carData = {
        brand: "AUDI",
        name: "RS 5 Soupé",
        rent: {
            period: 'Ao dia',
            price: 120,
        },
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.motortrend.com%2Fuploads%2Fsites%2F10%2F2019%2F01%2F2019-audi-rs5-coupe-angular-front.png&f=1&nofb=1"
    }

    function handleCardDetails() {
        navigation.navigate('CardDetails');
    }

    return (
        <Container>
            <StatusBar
                barStyle={'light-content'}
                translucent
                backgroundColor="transparent" />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            <CardList
                data={[1, 2, 3]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) =>
                    <Car data={carData} onPress={handleCardDetails} />

                }
            />
        </Container>
    );
}