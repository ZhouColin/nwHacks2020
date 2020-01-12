import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {ListItem} from 'react-native-elements';
import {ButtonGroup} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import {connect} from 'react-redux';
import {filterUsers} from 'store/users/actions';

const UserScreen = ({filteredUsers, filterAllUsers, navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const buttons = ['All', 'Negative', 'Neutral', 'Positive'];

  const updateIndex = tabIndex => {
    console.log('adbs', tabIndex, buttons);
    setSelectedIndex(tabIndex);
    filterAllUsers({filterBy: buttons[tabIndex]});
  };

  return (
    <SafeAreaView>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 50}}
      />
      {Object.keys(filteredUsers).map(userName => {
        const {
          userData: {name, photoUrl},
          overAllScore,
        } = filteredUsers[userName];
        return (
          <ListItem
            key={name}
            leftAvatar={{source: {uri: photoUrl}}}
            title={name}
            subtitle={overAllScore}
            onPress={() =>
              navigation.navigate('UserInfo', {
                userData: filteredUsers[userName],
              })
            }
            bottomDivider
          />
        );
      })}
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  filteredUsers: state.allUsers.filteredUsers,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  filterAllUsers: payload => {
    console.log('adbs2', payload);
    dispatch(filterUsers(payload));
  },
  // fetchUsers: getUsers,
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
