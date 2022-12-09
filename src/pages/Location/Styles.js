import { StyleSheet} from "react-native";
import {responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#612F74',
    }, 

    container2:{
      flex:1,
      marginTop:"10%", 
      alignItems:"center",
    },

    item:{
      width:responsiveWidth(90),
      padding:30,
      backgroundColor:"#FFFFFF"/* "#D8D8DE" */, 
      marginBottom:"10%", 
      borderRadius:15
    },

    text: {
        marginTop:"5%",
        color:"white",
        fontSize:20,
        lineHeight:30,
        fontWeight:"bold",
        textAlign:"center"

    },

    
    textFilter: {
      color:"white",
      fontSize:20,
      lineHeight:30,
      fontWeight:"bold",
      textAlign:"center"

  },

  headerFilter:{
    display:"flex", 
    flexDirection:"row", 
    justifyContent:"space-between",
    paddingLeft:50, 
    paddingRight:50, 
    paddingTop:10, 
    paddingBottom:10,
    backgroundColor:"#73388A",
  },

    textLocals:{
      fontSize: responsiveFontSize(2),
      fontWeight:"bold",
      lineHeight:20,
      marginTop:"5%",

  },

  textLocals1:{
    fontSize: responsiveFontSize(1.5),
    lineHeight:20,
    marginBottom:"5%"

},

    textLocals2:{
      fontSize: responsiveFontSize(1.6),
      marginTop:"3%",

  },

  textLocals3:{
    fontSize: responsiveFontSize(1.6),
    marginTop:"5%",
    color:"#0000FF"

},

divShare:{
  alignSelf:"center",
  bottom:"-11%",
  width:responsiveWidth(90),
  padding:30,
  backgroundColor:"#FAFAFC",  
  borderBottomEndRadius:15,
  borderBottomStartRadius:15
},
    sectionInput:{
        marginTop:"5%",
        backgroundColor:"#E7E7E7",
        width:responsiveWidth(90),
        borderRadius:15,
        alignItems:"center",
        alignSelf:"center",
        overflow:"hidden"

    },

    sectionInputPlace:{
      marginTop:"5%",
      marginBottom:"5%",
      width:responsiveWidth(90),
      alignItems:"center",
      alignSelf:"center",
      overflow:"hidden",
      borderRadius:15

  },

   sectionSpaceBetween:{
    display:"flex", 
    flexDirection:"row", 
    justifyContent:"space-between"
   },

    input:{
        width:responsiveWidth(87),
        marginTop:-2,
        marginBottom:-2,
        borderRadius:15,
        padding: 2.5
    },

    buttonPrimary:{
      marginTop:"-3%",
      width:responsiveWidth(50),
      borderRadius:5,
      backgroundColor:"#9F5DF5",
      padding:10,
      margin:10,
      alignSelf:"center"
    },

    textButton:{
      color:"white",
      fontSize:responsiveFontSize(2.2),
      textAlign:"center",  
    }

  });