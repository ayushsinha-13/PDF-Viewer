import {View, Linking, Dimensions, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Pdf from 'react-native-pdf';


const App = () => {
  const [per, setper] = useState(0);
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Pdf
        // page={4}
        // scale={1.0}
        // minScale={0.5}
        // maxScale={3.0}
        // onPageSingleTap={(page)=>console.log(`${page}`)}
        // onPressLink={(link)=> Linking.openURL(link)}
        spacing={10}
        // horizontal
        onLoadProgress={percentage => {
          setper(Math.round(percentage * 100));
          console.log(`Loading: ${per}%`);
        }}
        onLoadComplete={() => console.log('Loading complete')}
        onPageChanged={(page, total) => console.log(`${page} / ${total}`)}
        // singlePage={true}
        enablePaging={true}
        trustAllCerts={false}
        renderActivityIndicator={() => 
          <ActivityIndicator color="yellow" size="large"/>
        }
        source={{
          uri: 'https://www.tutorialspoint.com/html/html_tutorial.pdf',
        }}
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          backgroundColor: '#000000',
        }}
      />
    </View>
  );
};

export default App;
