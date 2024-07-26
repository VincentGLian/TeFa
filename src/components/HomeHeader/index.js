import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {assets, SHADOWS} from '../../assets';
import {SearchBar} from '@rneui/themed';

class HomeHeader extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
    const  {isPress, setIsPress}  = this.props;
    const {isPress1, setIsPress1} = this.props;
    const {isPress2, setIsPress2} = this.props;
    const {isPress3, setIsPress3} = this.props;
    const {second, setSecond} = this.props;
    const {minute, setMinute} = this.props;
    const {hour, setHour} = this.props; 
    const {timer} = this.props;
      
    return (
      <View style={{backgroundColor: '#E9E9E9'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
          <Image source={assets.veco1} style={{margin: 20}} />
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            platform={'android'}
            containerStyle={{
              width: 270,
              height: 40,
              borderRadius: 10,
              justifyContent: 'center',
              marginRight:20
            }}
            inputStyle={{fontSize: 15}}
          />
        </View>
        <View style={{ height:170 }}>
          <Image source={assets.screenshot} style={{width:'100%', position:'absolute'}} />
          <View style={{ flexDirection:'row', marginTop:'33%', justifyContent:'space-between' }}>
            <TouchableOpacity style={{ backgroundColor:isPress, alignItems:'center', justifyContent:'center', width:95, height:30, borderRadius:10, ...SHADOWS.dark}} onPress={() => isPress === "white" ? setIsPress("#FDDE67") : setIsPress("white")}>
              <Text style={{ fontSize:12 }}>Flash sale</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor:isPress1, alignItems:'center', justifyContent:'center', width:95, height:30, borderRadius:10, ...SHADOWS.dark}} onPress={() => isPress1 === "white" ? setIsPress1("#FDDE67") : setIsPress1("white")}>
              <Text style={{ fontSize:12 }}>Best Seller</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor:isPress2, alignItems:'center', justifyContent:'center', width:95, height:30, borderRadius:10, ...SHADOWS.dark}} onPress={() => isPress2 === "white" ? setIsPress2("#FDDE67") : setIsPress2("white")}>
              <Text style={{ fontSize:12 }}>New collection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor:isPress3, alignItems:'center', justifyContent:'center', width:95, height:30, borderRadius:10, ...SHADOWS.dark}} onPress={() => isPress3 === "white" ? setIsPress3("#FDDE67") : setIsPress3("white")}>
              <Text style={{ fontSize:12 }}>Recommendation</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection:'row', padding:10, alignItems:'center' }}>
          <Text style={{ fontSize:27, fontWeight:'600', color:'black', marginRight:15 }}> Flash Sale </Text>
          <Text style={{ backgroundColor:'#FDDE67', fontSize:18, fontWeight:'500', color:'black', padding:10, borderRadius:5 }}>{hour}</Text>
          <Text style={{ fontSize:20, fontWeight:'900' }}> : </Text>
          <Text style={{ backgroundColor:'#FDDE67', fontSize:18, fontWeight:'500', color:'black', padding:10, borderRadius:5 }}>{minute}</Text>
          <Text style={{ fontSize:20, fontWeight:'900' }}> : </Text>
          <Text style={{ backgroundColor:'#FDDE67', fontSize:18, fontWeight:'500', color:'black', padding:10, borderRadius:5 }}>{second}</Text>
        </View>
      </View>
    );
  }
}

export default function(props) {
    const [ isPress, setIsPress ] = React.useState("white");
    const [ isPress1, setIsPress1 ] = React.useState("white");
    const [ isPress2, setIsPress2 ] = React.useState("white");
    const [ isPress3, setIsPress3 ] = React.useState("white");
    const [second, setSecond] = React.useState(10);
    const [minute, setMinute] = React.useState(0);
    const [hour, setHour] = React.useState(12);

    var timer;
      React.useEffect(() => {
        timer = setInterval(() => {
          setSecond(second - 1);
          if (second === 0) {
            setMinute(minute - 1);
            setSecond(59);
          }
          if (minute === 0 && second === 0) {
            setHour(hour - 1);
            setMinute(59);
            setSecond(59);
          }
        }, 1000);
        return () => clearInterval(timer);
      });

  return <HomeHeader {...props} isPress={isPress} setIsPress={setIsPress} isPress1={isPress1} setIsPress1={setIsPress1}
  isPress2={isPress2} setIsPress2={setIsPress2} isPress3={isPress3} setIsPress3={setIsPress3} second={second}
  setSecond={setSecond} minute={minute} setMinute={setMinute} hour={hour} setHour={setHour} timer={timer} />;
}