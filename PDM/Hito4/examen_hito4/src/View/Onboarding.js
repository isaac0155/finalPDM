import React, { useState, useEffect } from 'react';
import VistaOnboard from '../Components/OnboardFactory';

const OnBoarding = ({ data}) => {
  const [actual, setActual] = useState(0);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const array = [];
    let aux = 0;
    data.forEach(e => {
      const core = e;
      core.id = aux;
      aux = aux + 1;
      array.push(core);
    });
    setInfo(array);

  }, []);


  return (
    <>
      {info ? (
        <>
          {info.map(e => (
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
                      setActual(e.id - 1);
                    }
                    })}

                  funcionBoton2={(() => {
                    if (e.id < info.length - 1) {
                      setActual(e.id + 1);
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
