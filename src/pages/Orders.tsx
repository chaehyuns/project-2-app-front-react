import React, {FunctionComponent, useRef} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from 'react-native';

const images: string[] = [
  'https://postfiles.pstatic.net/MjAyMjA3MTFfOTMg/MDAxNjU3NTIyNzIyOTg3.YlkryvCV8kF7oeAEwads0ghYUongPBNQhYO6JSyzVEAg.9cnZ5cjJ-XZ6mZioqOevYzR6NI8esmNYBo0UXR07qewg.PNG.wjdcogus202/pick_0.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTFfMjEx/MDAxNjU3NTI1ODM0MDQ5.lHmBMX6uuHRM-pR66cNLTp1Vf0jL3OsnfPckYEWlDh8g.01xMM0uDzNpdSGh8j4FE4etQ3Wae4RKXoNTq1sc0yz0g.PNG.wjdcogus202/003.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTFfMjc5/MDAxNjU3NTI1ODM0MTc2.UcTWTO3T7JAyOcfER0FIqhITkZPsfmHMKL4AF0lld9cg.TwykU-KRNaG8DLRCS45TUjBNvTqNZ2mTY40kKW7FU6Yg.PNG.wjdcogus202/004.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTFfMjIx/MDAxNjU3NTI1ODM0MDMx.qIo7wyzi5WermWZZ5QoFZNZPnNnhQ18sZkfomsaI81og.FBDkHja3tXAX2ZVnyKp8SOxNT4dryW6q-SGxmacMxfgg.PNG.wjdcogus202/005.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTFfMTUw/MDAxNjU3NTI1ODM0MjAx.ET8B9DgRcKbtUTKKnM74Ibf7PnAUzdXiUKpOxQ-n_kIg.y4_2UpphkIUfysDX1pceXYQ7eJ_fkEy4mxbEhd2D-TYg.PNG.wjdcogus202/006.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTJfMiAg/MDAxNjU3NTY4MjY0OTc0.i3X6eXk_On0OMH2n0zfnORqfDZLfrxqW34y8NmGgSHUg.MOvRru7NfPGQhhKzBqJ6CGlLxE6CMgOjKOQEiRreEh8g.PNG.wjdcogus202/007.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTJfMTU2/MDAxNjU3NTY4MjY1MDIy.T-gp4LkdXtHVEY_1RUo1m_dsf2qbPecU3HIeQwCXAwgg.ek7RqcsehzadMcAYvwGPFOcpEcjGzt0qUzVY-ugtWaEg.PNG.wjdcogus202/008.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTJfMTA4/MDAxNjU3NTY4MjY1MDEw.RPLtAr9k7LcGeshJwCZ3sUvX_rHe7NqKbhxee18LWfIg.buSbOhP1G60spafSa_AA-YiAx366IjI7m3vVgi_40C0g.PNG.wjdcogus202/009.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTJfMTky/MDAxNjU3NTY4MjY1MDcx.wI4Z8YQxs2plI3V9YmTRssa2-fScejB9KVSGFw5xINIg.i-fYWReEn1GmsjSFKmO3qxAiFs6VXTQL-hqZWwX0Wzwg.PNG.wjdcogus202/010.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTJfMjY5/MDAxNjU3NTY4MjY1MDU3.SeL9qnotAHzp5vr3XnmCzSNUBfsU0mq4GqrjcgPmwykg.HZc7BLpwlPMIUUp2f5KOLtRbO9PxbWrrs-ZSWpgj4pIg.PNG.wjdcogus202/011.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTJfMyAg/MDAxNjU3NTY4MjY1MDkx.JFerCgKcRknpznKO95vBeE9ziRIErkJV70VaXlSdsI8g.hn-bwX7FjApPsXbLm4I_E_6CmxIofFfS4I8HBDzvshog.PNG.wjdcogus202/012.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMjA3MTJfNzUg/MDAxNjU3NTY4MjY1Mjg1.p7SQuMan93xwZj0yRDDiA_KLNrYidnfwNV_ThKstUOgg.mjN-kD5CYjPWjUFnWxF8nSzeaiWaxx3s4GuoO3IW6tIg.PNG.wjdcogus202/013.png?type=w966',
];

const {width, height} = Dimensions.get('screen');

const Orders: FunctionComponent = () => {
  const xScroll = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <Animated.FlatList
        style={style.flatList}
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={'fast'}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: xScroll}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const outputRange = ['-80deg', '0deg', '80deg'];

          const translateX = xScroll.interpolate({inputRange, outputRange});

          return (
            <View style={style.imageContainer}>
              <Animated.Image
                style={[style.image, {transform: [{rotateZ: translateX}]}]}
                source={{uri: item}}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {flexGrow: 0},
  imageContainer: {
    width,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 430,
    width: width - 50,
    borderRadius: 20,
    resizeMode: 'cover',
  },
});

export default Orders;
