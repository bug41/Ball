import { StyleSheet, Text, View } from 'react-native';

import {Card, Button, Image} from 'react-native-elements';
import Deck from './src/Deck';


const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://postfiles.pstatic.net/MjAyMjA4MDdfMjU4/MDAxNjU5ODU2ODI5MjI3.D5I6eW-Gu6LfgsaOHg6ZwnJ40bhfrJ4tEMBta9SAKNYg.Lf3ShnyNeD5K4KCGhWtT3egBYlNT-stbFYedkGyR_2gg.JPEG.bugkingus/20220806_123505.jpg?type=w773' },
  { id: 2, text: 'Card #2', uri: 'https://postfiles.pstatic.net/MjAyMjA4MDdfMjg5/MDAxNjU5ODU2ODI5NDM1.3KGFnKHKTiMLYFC0t6wXQGiCMfY76ne1JEfmKB_TOX8g.cGFmTV1GhMIZ6Z_xWmDacwRHtHVb7V2hOu4612Td9CQg.JPEG.bugkingus/20220806_125005.jpg?type=w773' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
];

export default function App() {  

  const renderCard = (item) => {
    return (
      <Card
        key={item.id}        
        image={{ uri: item.uri }}        
        >
          <Card.Title>{item.text}</Card.Title>
          <View key={item.id}>
              <Image source={{ uri: item.uri }} style={{ height: 150 }}/>
          </View>     
          <Text style={{ marginBottom: 10 }}>
            I can customize the Card further.
          </Text>
          <Button
            icon={{ name:'code' }}
            backgroundColor="#03A9F4"
            title="View Now!"
            />          
      </Card>      
    )
  }

  const renderNoMoreCards = () => {
      return (
        <Card title="All Done!">
          <Text style={{ marginBottom:10 }}>
            There's no more content here!
          </Text>
          <Button 
            backgroundColor="#03A9F4"
            title="Get more!"></Button>
        </Card>
      )
  }  

  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        renderCard={renderCard}        
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
