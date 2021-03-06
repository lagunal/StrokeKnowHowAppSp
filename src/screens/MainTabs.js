import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-home" : "ios-home", 20),  //home icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-create" : "ios-create", 20), //toolkit icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-list-box" : "ios-list-box", 20), //contents icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-people" : "ios-people", 20) //sign out icon
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "strokeAppSp.HomeScreen",
                    label: Platform.OS === 'ios' ? "Principal" : "",
                    title: "Página principal",
                    icon: sources[0],
                    
                },
                {
                    screen: "strokeAppSp.ContentsScreen",
                    label: Platform.OS === 'ios' ? "Contenido" : "",
                    title: "Contenido",
                    icon: sources[2],
                },
                {
                    screen: "strokeAppSp.ToolkitHomeScreen",
                    label: Platform.OS === 'ios' ? "Formularios" : "",
                    title: "Formularios Interactivos",
                    icon: sources[1],
                },
                // {
                //     screen: "strokeAppSp.ProfileScreen",
                //     label: "Cuenta",
                //     icon: sources[3],
                    
                // },
            ],
            tabsStyle: { //for iOS
                tabBarSelectedButtonColor: '#000099',
                //tabBarBackgroundColor: '#0032e6', // #152a53 #000099 
                tabBarBackgroundColor: '#000099',
                tabBarButtonColor: '#000099',
                tabBarTextFontFamily: 'Helvetica', 
                tabBarTextFontSize: 20,
                //tabBarSelectedTextColor: 'black',
                tabBarTextColor: 'white',
                navBarButtonColor: '#b30000',
                navBarTextColor: '#b30000',
                // tabBarOptions: {
                //     labelStyle: { fontSize: 12 },
                //     height: 50,
                // }
            },
            appStyle: { //for Android
                tabBarSelectedButtonColor: 'white',
                tabBarBackgroundColor: '#000099',
                tabBarButtonColor: 'white',
                tabFontSize: 22,
                selectedTabFontSize: 22,
                //navBarHideOnScroll: true,
                navBarBackgroundColor: '#000099',
                navBarButtonColor: 'white',
                navBarTextColor: 'white',
                navBarTitleTextCentered: true,
                //hideBackButtonTitle: true, //hide back button title for iOS
            },
        });
    });
};

export default startTabs;