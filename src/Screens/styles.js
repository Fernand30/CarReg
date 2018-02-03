import {Colors, Fonts, Images, Metrics, Constants } from '../Themes';

const Styles = {
    container : {
        flex : 1,
    },
    status:{
    	height: 20
    },
    carouselContainer : {
        width : Constants.WIDTH,
        height : Constants.HEIGHT*3/4,
    },
    backgroundImage: {
	    flex: 1,
	    width: null,
	    height: null,
	},
	carouselView:{
		height : Constants.HEIGHT*3/4,
	},
	logo:{
		width: Constants.MARGIN*60,
		height: Constants.MARGIN*40,
		alignSelf: 'center',
	    marginTop: Constants.MARGIN*20
	},
	headText:{
		fontSize: Constants.FONT*30,
		textAlign: 'center',
		marginTop: Constants.MARGIN*10,
		color: Colors.white
	},
	commonText:{
		fontSize: Constants.FONT*30,
		textAlign: 'center',
		marginTop: Constants.MARGIN*5,
		color: Colors.white
	},
	button:{
		flexDirection:'row',
		height: Constants.MARGIN*10,
		marginHorizontal: Constants.MARGIN*20,
		alignItems: 'center',
		backgroundColor: Colors.white,
		marginTop: Constants.MARGIN*3,
		justifyContent: 'space-between',
		borderRadius: 2,
		paddingHorizontal: Constants.MARGIN*5,
		shadowColor: Colors.black,
	    shadowOffset: { width: 2, height: 2 },
	    shadowOpacity: 0.8,
	    shadowRadius: 2,
	},
	signText: {
		fontSize: Constants.FONT*20
	},
	icon: {
		width: Constants.MARGIN*6,
		height: Constants.MARGIN*6,
	},
	headerView:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: Constants.MARGIN*15,
		alignItems: 'center',
		borderBottomWidth :1,
		borderColor : Colors.black,
		paddingHorizontal: Constants.MARGIN*2
	},
	rightView: {
		flex: 1,
		justifyContent: 'center'
	},
	centerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	leftView: {
		flex: 1,
		justifyContent: 'center'
	},
	back: {
		width: Constants.MARGIN*5,
		height: Constants.MARGIN*5/48*80,
	},
	textInputView:{
		marginHorizontal: Constants.MARGIN*6,
		paddingHorizontal: Constants.MARGIN*3,
		paddingVertical: Constants.MARGIN*5,
		backgroundColor: Colors.white,
		borderRadius: 3,
		shadowColor: Colors.black,
	    shadowOffset: { width: 2, height: 2 },
	    shadowOpacity: 0.8,
	    shadowRadius: 2,
	    marginTop: Constants.MARGIN*5,
	    height: Constants.MARGIN*25,
	    justifyContent: 'space-between'
	},
	textInput:{
		borderBottomWidth : 0.5,
		borderColor: Colors.black,
		textAlign:'center',
		fontSize: Constants.FONT*20,
		width: Constants.WIDTH/2
	},
	rowView:{
		flexDirection:'row',
		justifyContent: 'space-between'
	},
	plusView:{
		width:Constants.MARGIN*16,
		height: Constants.MARGIN*16,
		borderRadius: Constants.MARGIN*8,
		backgroundColor: Colors.white,
		alignItems:'center',
		justifyContent:'center',
		alignSelf:'center',
		marginTop:Constants.MARGIN*20
	},
	plusText:{
		fontSize: Constants.FONT*60,
	},
	buttonView:{
		flex: 1,
		justifyContent:'flex-end',
		paddingBottom: Constants.MARGIN*4,
		borderRadius: 3,
	},
	donebutton:{
		width: Constants.WIDTH/4,
		height: Constants.MARGIN*10,
		backgroundColor: Colors.white,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: Colors.black,
	    shadowOffset: { width: 2, height: 2 },
	    shadowOpacity: 0.8,
	    shadowRadius: 2,
	    alignSelf:'center'
	},
	doneText:{
		fontSize: Constants.FONT*25
	}
}

export default Styles;
