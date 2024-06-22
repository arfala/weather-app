import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WeatherInfo = ({ weatherData }) => {
  const { name, main, weather, visibility, wind } = weatherData
  const weatherDescription = weather[0].description
  const weatherIcon = weather[0].icon

  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>Cuaca Kota {name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>{main.temp} C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${weatherIcon}.png` }}
          style={styles.weatherIcon}
        />
        <Text style={[styles.text, styles.bold]}>{weather[0].main}</Text>
      </View>
      <Text style={styles.text}>{weatherDescription}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Jarak Pandang :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Kecepatan Angin :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{wind.speed} m/s</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 80,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
})

export default WeatherInfo
