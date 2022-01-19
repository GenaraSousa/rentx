import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
    Container
} from './styles';


interface Props extends BorderlessButtonProps {
    isGray?: boolean;
}

export function BackButton({isGray, ...rest}: Props){

    const theme = useTheme();

    return(
        <Container>
             <MaterialIcons 
                name='chevron-left'
                size={24}
                color={isGray ? theme.colors.text: theme.colors.background_secundary }
            />
        </Container>
    );
}