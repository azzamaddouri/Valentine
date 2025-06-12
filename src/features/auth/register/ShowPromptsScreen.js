import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const ShowPromptsScreen = () => {
  const navigation = useNavigation();
  const [prompts, setPrompts] = useState([]);
  const promptss = [
    {
      id: '0',
      name: 'About me',
      questions: [
        { id: '10', question: 'A random fact I love is' },
        { id: '11', question: 'Typical Sunday' },
        { id: '12', question: 'I go crazy for' },
        { id: '13', question: 'Unusual Skills' },
        { id: '14', question: 'My greatest strength' },
        { id: '15', question: 'My simple pleasures' },
        { id: '16', question: 'A life goal of mine' },
      ],
    },
    {
      id: '2',
      name: 'Self Care',
      questions: [
        { id: '10', question: 'I unwind by' },
        { id: '11', question: 'A boundary of mine is' },
        { id: '12', question: 'I feel most supported when' },
        { id: '13', question: 'I hype myself up by' },
        { id: '14', question: 'To me, relaxation is' },
        { id: '15', question: 'I beat my blues by' },
        { id: '16', question: 'My skin care routine' },
      ],
    },
  ];
  const [option, setOption] = useState('About me');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (item) => {
    setModalVisible(true);
    setQuestion(item?.question || '');
  };

  const addPrompt = () => {
    if (!question || !answer) return;
    const newPrompt = { question, answer };
    const updatedPrompts = [...prompts, newPrompt];
    setPrompts(updatedPrompts);
    setQuestion('');
    setAnswer('');
    setModalVisible(false);
    console.log('updatedPrompts:', updatedPrompts);
    if (updatedPrompts.length === 3) {
      try {
        navigation.navigate('Prompts', {
          prompts: JSON.parse(JSON.stringify(updatedPrompts)),
        });
      } catch (error) {
        console.error('Navigation error:', error);
      }
    }
  };

  console.log('prompts', prompts);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 15, fontWeight: '500', color: '#581845' }}>
          View all
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#581845' }}>
          Prompts
        </Text>
        <Entypo name="cross" size={22} color="black" />
      </View>

      <View
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          flexDirection: 'row',
          gap: 10,
        }}>
        {promptss.map((item) => (
          <Pressable
            key={item.id}
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: option === item.name ? '#581845' : 'white',
            }}
            onPress={() => setOption(item.name)}>
            <Text
              style={{
                textAlign: 'center',
                color: option === item.name ? 'white' : 'black',
              }}>
              {item.name}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={{ marginTop: 20, marginHorizontal: 12 }}>
        {promptss.map((item) => (
          <View key={item.id}>
            {option === item.name && (
              <View>
                {item.questions.map((question) => (
                  <Pressable
                    key={question.id}
                    onPress={() => openModal(question)}
                    style={{ marginVertical: 12 }}>
                    <Text style={{ fontSize: 15, fontWeight: '500' }}>
                      {question?.question || 'No question'}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        swipeDirection={['down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 300,
          }}>
          <Text
            style={{ textAlign: 'center', fontWeight: '600', fontSize: 15 }}>
            Answer your question
          </Text>
          <Text style={{ marginTop: 15, fontSize: 20, fontWeight: '600' }}>
            {question}
          </Text>
          <View
            style={{
              borderColor: '#202020',
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              height: 100,
              marginVertical: 12,
              borderStyle: 'dashed',
            }}>
            <TextInput
              value={answer}
              onChangeText={setAnswer}
              style={{ color: 'gray', width: '100%', fontSize: 18 }}
              placeholder="Enter Your Answer"
            />
          </View>
          <Button onPress={addPrompt} title="Add" />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ShowPromptsScreen;