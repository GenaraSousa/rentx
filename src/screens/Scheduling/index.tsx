import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';


import ArrowSvg from '../../assets/arrow.svg';

import {
    Container,
    Content,
    DateInfo,
    DateTitle,
    DateValue,
    Footer,
    Header,
    RentalPeriod,
    Title,
} from './styles';

export function Scheduling() {
    const navigation = useNavigation();
    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails')
    }
    return (
        <Container>
            <StatusBar
                barStyle={'light-content'}
                translucent
                backgroundColor='transparent'
            />
            <Header>
                <BackButton
                    onPress={() => { }}
                />
                <Title>
                    Escolha uma{'\n'}
                    data de início e{'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={true}>18/06/2021</DateValue>
                    </DateInfo>

                </RentalPeriod>

            </Header>

            <Content >
                <Calendar />
            </Content>

            <Footer>
                <Button
                    title='Confirmar'
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
}