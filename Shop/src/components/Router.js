import React from 'react';
import {
  StackNavigator,TabNavigator,DrawerNavigator
} from 'react-navigation';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Contact from './screens/Contact';
import Cart from './screens/Cart';
import Menu from './screens/Menu';

export const HomeStack = StackNavigator({
    ManHinh_Home: {
       screen: Home,
       navigationOptions:{
         title :"Trang chủ"
       }
     },
    ManHinh_Detail:{
      screen: Detail,
      navigationOptions:{
        title :"chi tiết"
      }
    },
    // ManHinh_Authentication: {
    //     screen: Authentication,
    //     navigationOptions:{
    //       title :"xác thực tài khoản"
    //     }
    //   },
      // ManHinh_ListProduct: {
      //   screen: ListProduct,
      //   navigationOptions:{
      //     title :"danh sách sản phẩm"
      //   }
      // },
  
  });
  export const ContactStack = StackNavigator({
    ManHinh_Contact: {
       screen: Contact,
       navigationOptions:{
         title :"Liên hệ"
       }
     },
  });
  export const CartStack = StackNavigator({
    ManHinh_Cart: {
       screen: Cart,
       navigationOptions:{
         title :"Giỏ hàng"
       }
     },
  });
  
  // export const LoginStack = StackNavigator({
  //   ManHinh_Login: {
  //      screen: Login,
  //      navigationOptions:{
  //        title :"dang nhap"
  //      }
  //    },
  // });
  export const Tabbs = TabNavigator({
    Home:{
      screen :HomeStack,
      navigationOptions:{
      tabBarLabel:"HOME"
      }
    },
    Contact :{
      screen:ContactStack,
      navigationOptions:{
      tabBarLabel:"Liên hệ"
      }
    },
      Cart :{
        screen:CartStack,
        navigationOptions:{
        tabBarLabel:"Cart"
        }
      }
  },{
    tabBarPosition:"bottom"
  });
  export const SlideMenu = DrawerNavigator({
    Tabbar :{screen : Tabbs}
  },
  {
    drawerWidth:200,
    drawerPosition:"left",
    contentComponent: props =>    <Menu {...props} />
  
  
  }
  );
  