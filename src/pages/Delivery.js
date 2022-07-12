import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';

function Delivery() {
  const animals = [
    {
      id: 1,
      name: '정채현',
    },
    {
      id: 2,
      name: '안태찬',
    },
    {
      id: 3,
      name: '이창해',
    },
    {
      id: 4,
      name: '김태연',
    },
    {
      id: 5,
      name: '정세진',
    },
    {
      id: 6,
      name: '문동우',
    },
    {
      id: 7,
      name: '방준형',
    },
    {
      id: 8,
      name: '이영준',
    },
    {
      id: 9,
      name: '박정은',
    },
    {
      id: 10,
      name: '정재모',
    },
    {
      id: 11,
      name: '신혁교',
    },
    {
      id: 12,
      name: '박병현',
    },
    {
      id: 13,
      name: '최동원',
    },
    {
      id: 14,
      name: '김재인',
    },
    {
      id: 15,
      name: '전이준',
    },
    {
      id: 16,
      name: '김민',
    },
    {
      id: 17,
      name: '윤창호',
    },
    {
      id: 18,
      name: '서재덕',
    },
    {
      id: 19,
      name: '이가현',
    },
    {
      id: 20,
      name: '남하욱',
    },
  ];

  const oneAnimal = ({item}) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>
        <Image
          source={
            'https://postfiles.pstatic.net/MjAyMjA3MTJfNzYg/MDAxNjU3NjE3MDYxNTg2.iicQ9I6TFWT2SwZC_VvDUnKAS0LfG6_CwQ8lXSkdw_Ug.CeWjkgUWqLoh-uQWWl1NEjpz2yNnFpWiOXSAbcg9-0gg.PNG.wjdcogus202/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-07-12_%EC%98%A4%ED%9B%84_6.09.59.png?type=w966'
          }
          style={styles.avatar}
        />
      </View>
      <Text style={styles.name}> {item.name} </Text>
    </View>
  );

  const headerComponent = () => {
    return <Text style={styles.listHeadline}>Follower</Text>;
  };

  const itemSeperator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={headerComponent}
        data={animals}
        renderItem={oneAnimal}
        ItemSeparatorComponent={itemSeperator}
        ListEmptyComponent={<Text>This is a empty list</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listHeadline: {
    color: '#333',
    fontSize: 21,
    fontWeight: 'bold',
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },

  avatarContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },

  avatar: {
    height: 40,
    width: 40,
  },

  name: {
    fonrWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
});

export default Delivery;
