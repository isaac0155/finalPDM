import React from 'react';
import { View } from 'react-native';

import Description from './Onboarding/Description';
import ButtonsFooter from './Onboarding/ButtonsFoteer';

const OnboardingFactory = ({ source, Titulo, Contenido, onPressPrev, onPressNext }) => {
    return (
        <View  >
            <Description
                source={source}
                Titulo={Titulo}
                Contenido={Contenido}
            ></Description>
            <ButtonsFooter
                onPressPrev={onPressPrev}
                onPressNext={onPressNext}
            ></ButtonsFooter>
        </View>
    );
}
export default OnboardingFactory;

