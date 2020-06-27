import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';
import Marcador from "./Marcador"
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from '@react-native-community/geolocation';

MapboxGL.setAccessToken("pk.eyJ1IjoiZnJpa2k1NyIsImEiOiJjanZxOGtxMjgwaDhxNDRvOHl5NDVvZnQyIn0._cULjNb2IP5SLSBSm7Higw");
MapboxGL.setConnected(true);

class Mapa extends Component
{
  constructor(props){
    super(props);
    this.state = {
      ubicacion: this.props.ubicacion,
      ubicacionActual: undefined,
      MarcadorUbicacion: undefined,
      Calles: undefined
    }
    this.actualizar = this.actualizar.bind(this);
    setTimeout(()=>
    {
              this.actualizar(res)
      });
    },1000)
    Geolocation.getCurrentPosition(
      posicion => {
        const ubicacion = (posicion);

        this.setState({ ubicacionActual:
          [ubicacion.coords.longitude,
          ubicacion.coords.latitude]
         });
        if(this.state.ubicacion == undefined)
        {
          this.setState({ubicacion: this.state.ubicacionActual})
        }
        this.setState(
          {MarcadorUbicacion : (<Marcador ubicacion = {this.state.ubicacion} texto = "Usted está acá"></Marcador>)}
        );
        fetch("http://104.129.131.142:4000/MapasMovil")
          .then(res => res.json())
          .then(data => {
            //console.log(data);
            this.actualizar(data);
          });
      },
      error => Alert.alert("Imposible obtener la localización.\nFavor de conectarse a internet."),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 5000 }
    );
  }
  actualizar(data)
  {
    if(this.state.Calles!=undefined)
    {
      var m = this.state.Calles.map((ca)=>
      {
        // ca.selected = false;
      })
      // this.setState(
      //   {Calles: m}
      // );
      console.log(this.state.Calles[0]);
    }
    this.setState({Calles:undefined})
    data = data.filter(a=>a!=undefined)
    data = data.filter(a=>a.geojson!=undefined)
    data = data.map(
      (a)=>
      {
        a.lon = (a.geojson[0].lon + a.geojson[1].lon)/2;
        a.lat = (a.geojson[0].lat + a.geojson[1].lat)/2;
        return a;
      }
    )
    var marcadores = data.map((a,i)=>
      {
        if(a.espacios!=undefined)
        {
          return (
            <Marcador ubicacion = {[a.lon, a.lat]} texto={(a.calle+" entre "+a.c1+" y "+a.c2+"\nEspacios disponibles: "+(a.espaciosMaximo-a.espacios))} key = {i}></Marcador>
          )
        }
      })


    this.setState(
      {
        Calles: marcadores
      }
    )
  }
  render()
  {
    return (
      <>
      <MapboxGL.MapView
        style={styles.container}
        styleURL={MapboxGL.StyleURL.Street}
        logoEnabled = {false}
        attributionEnabled = {false} >
        <MapboxGL.Camera ref={(ref) => (this.camera = ref)}
          zoomLevel={15}
          centerCoordinate={this.state.ubicacion}
          animationDuration={2000} />
        <View ref={(ref) => (this.ubicacionActual = ref)}/>
        {this.state.MarcadorUbicacion}
        {this.state.Calles}
      </MapboxGL.MapView>
      <Text>{this.state.ubicacion}</Text>
      </>
    )
  }
}
export default Mapa;

const styles = {
  container: {
    height: 600,
    width: 400,
    backgroundColor: "transparent"
  }
};
