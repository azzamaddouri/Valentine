import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useRef, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BirthScreen = () => {
  const navigation = useNavigation();
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDayChange = text => {
    setDay(text);
    if (text.length == 2) {
      monthRef.current.focus();
    }
  };

  const handleMonthChange = text => {
    setMonth(text);
    if (text.length == 2) {
      yearRef.current.focus();
    }
  };

  const handleYearChange = text => {
    setYear(text);
  };

  const handleNext = () => {
      navigation.navigate('Location');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderColor: 'black',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="cake-variant-outline"
              size={26}
              color="black"
            />
          </View>
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 15,
          }}>
          What's your date of birth?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginTop: 80,
            justifyContent: 'center',
          }}>
          {/* Day Input Field */}
          <TextInput
            autoFocus={true}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
              width: 50,
              fontSize: day ? 20 : 20,
              fontFamily: 'GeezaPro-Bold',
            }}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleDayChange}
            value={day}
          />

          {/* Month Input Field */}
          <TextInput
            ref={monthRef}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
              width: 60,
              fontSize: month ? 20 : 20,
              fontFamily: 'GeezaPro-Bold',
            }}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleMonthChange}
            value={month}
          />

          {/* Year Input Field */}
          <TextInput
            ref={yearRef}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
              width: 75,
              fontSize: year ? 20 : 20,
              fontFamily: 'GeezaPro-Bold',
            }}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            onChangeText={handleYearChange}
            value={year}
          />
        </View>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#581845"
            style={{alignSelf: 'center', marginTop: 20}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BirthScreen;