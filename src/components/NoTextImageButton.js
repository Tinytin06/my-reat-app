import { Image, Pressable, StyleSheet } from 'react-native';

export default function NoTextImageButton({ onPress, source, imageStyle }) {
    return (
        <Pressable
        onPress={onPress} 
        style={( { pressed } ) => {
          return [styles.row, pressed ? styles.pressed : styles.notPressed]
          }}>
          <Image style={imageStyle} source={source} />
        </Pressable>
    );
  }
const styles = StyleSheet.create({
    buttonContainer: {
		marginVertical: 20,
		height: 40,
		marginHorizontal: 10,
		backgroundColor: '#5d57ff',
		justifyContent: 'center',
		alignItems: 'center',
	},
    pressed: {
        opacity: 0.25,
        
    },
    notPressed: {
        opacity: 1,
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
   
});