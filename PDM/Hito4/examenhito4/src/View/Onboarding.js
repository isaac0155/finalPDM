import React, { useState, useEffect } from 'react';
import VistaOnboard from '../Components/OnboardFactory';
import { View, StyleSheet} from 'react-native';

let OnBoarding = ({ str }) => {
  var a = 0;
  var [cont, auxCont] = useState(null);
  var [actual, auxAct] = useState(0);

  useEffect(() => {
    const valor = [];
    str.forEach(e => {
      const send = e;
      send.id = a;
      a += 1;
      valor.push(send);
    });
    auxCont(valor);
  }, []);


  return (
    <>
      {cont ? (
        <>
          {cont.map(e => (
            <>

              {e.id == actual ? (

                <VistaOnboard
                  Img={e.Img}
                  titulo={e.titulo}
                  descripcion={e.descripcion}
                  colorFondo={e.colorFondo}
                  botonsig={e.textoBotonPrev}
                  botonskip={e.textoBotonNext}
                  funcionBoton1={(() => {
                    if (e.id > 0){
                      auxAct(e.id - 1);
                    }
                    })}

                  funcionBoton2={(() => {
                    if (e.id < cont.length - 1) {
                      auxAct(e.id + 1);
                    }

                  })}
                  color={e.colortexto}
                />

              ) : null}
            </>
          ))}
        </>
      ) : null}
    </>

  );
};

export default OnBoarding;
