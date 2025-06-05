import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LocationScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 36.8065, // Tunis default
    longitude: 10.1815,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [location, setLocation] = useState('');
  const [markerCoords, setMarkerCoords] = useState({
    latitude: 36.8065,
    longitude: 10.1815,
  });

  const reverseGeocode = (latitude, longitude) => {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`, {
      headers: {
        'User-Agent': 'Valentine/1.0 (maddouriazza@gmail.com)', // Replace with your email/app
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.display_name) {
          setLocation(data.display_name);
        } else {
          setLocation('Unknown location');
        }
      })
      .catch(error => console.error('Error fetching location:', error));
  };

  // Load Tunisia location on mount
  useEffect(() => {
    reverseGeocode(region.latitude, region.longitude);
  }, []);

  const handleUseCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setRegion({ ...region, latitude, longitude });
        setMarkerCoords({ latitude, longitude });
        reverseGeocode(latitude, longitude);
      },
      error => {
        console.error('Error getting location:', error);
        setLocation('Unable to fetch current location');
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const handleMarkerDragEnd = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerCoords({ latitude, longitude });
    setRegion({ ...region, latitude, longitude });
    reverseGeocode(latitude, longitude);
  };

  const handleNext = () => {
    navigation.navigate('Gender');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 90, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            borderColor: 'black',
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <MaterialCommunityIcons
              name="location-exit"
              size={26}
              color="black"
            />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          fontFamily: 'GeezaPro-Bold',
          marginTop: 15,
        }}>Where do you live?</Text>
        {location && (
          <View style={{
            position: 'absolute',
            top: 250,
            left: 20,
            right: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
            zIndex: 999,
          }}>
            <Text style={{
              color: 'white',
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '500',
              flexWrap: 'wrap',
            }}>{location}</Text>
          </View>
        )}

        <MapView
          region={region}
          style={{ width: '100%', height: 500, marginTop: 20, borderRadius: 5 }}
          onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
        >
          <Marker
            draggable
            coordinate={markerCoords}
            onDragEnd={handleMarkerDragEnd}
          />
        </MapView>
        <TouchableOpacity
          onPress={handleUseCurrentLocation}
          activeOpacity={0.8}
          style={{
            marginTop: 10,
            backgroundColor: '#581845',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
          }}
        >
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>Use My Current Location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{
            marginTop: 10,
            marginLeft: 'auto',
          }}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#581845"
            style={{ alignSelf: 'center', marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;