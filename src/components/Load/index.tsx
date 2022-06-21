import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useTheme } from 'styled-components';

export function Load({ ...rest }: ActivityIndicatorProps) {
    const theme = useTheme();
    return (
        <ActivityIndicator
            color={theme.colors.main}
            size="large"
            style={{ flex: 1 }}
            {...rest}
        />
    );
}