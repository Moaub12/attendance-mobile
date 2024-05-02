import React, { useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity,TouchableHighlight } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Button from '../components/Button';

import { useSelector, useDispatch } from 'react-redux';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95); 

const PlansCarousel = ({data,onClick}) => {
  const [index, setIndex] = useState(0);
  
 

  const CarouselCardItem = ({ item, index }) => {
    const [showButton, setShowButton] = useState(false);

    const handleCardPress = () => {
      setShowButton(true);
    };

    const handleButtonClick = () => {
     onClick(item)
    };

    return (
      <View >
  <TouchableHighlight style={styles.container}  underlayColor="transparent" onPress={handleCardPress}>

      <>
 
     <Image source={{uri:item.image}} style={styles.image} />
     <Text style={styles.header}>{item.name}</Text>
     <Text style={styles.body}>{item.description}</Text>
     {
       showButton &&  (
         <Button
           
           onPress={handleButtonClick}
           style={styles.button}
         > book</Button>
        )
     }
     </>

 
</TouchableHighlight>
      </View>
      
    );
  };

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={5}
        data={data}
        renderItem={({ item, index }) => (
          <CarouselCardItem
            item={item}
            index={index}
          />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(itemIndex) => setIndex(itemIndex)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 10,
    shadowColor: '#000',
    marginTop: 40,
    marginBottom:20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    alignItems: 'center',
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    marginTop: 10,
    width:"50%",
  },
});

export default PlansCarousel;
