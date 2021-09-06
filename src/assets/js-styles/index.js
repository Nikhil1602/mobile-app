import {StyleSheet} from 'react-native';
import {DEFAULT_COLOR, PRIMARY, SECONDARY} from '../theme';

const drawer = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: -2,
  },

  user_container: {
    marginBottom: 20,
    backgroundColor: PRIMARY,
  },

  user_detail: {
    marginTop: 15,
    alignItems: 'center',
  },

  user_icon: {
    color: '#fff',
  },

  user_info: {
    flexDirection: 'column',
  },

  user_name: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 1,
    textAlign: 'center',
    color: '#fff',
  },

  user_mail: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginTop: -8,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },

  section: {
    marginTop: -4,
  },

  tab: {
    marginLeft: 0,
    borderRadius: 0,
    width: '100%',
    backgroundColor: '#fff',
  },

  tab_icon: {
    marginLeft: 15,
    fontSize: 25,
    color: DEFAULT_COLOR,
  },

  tab_name: {
    fontFamily: 'Poppins-Bold',
    letterSpacing: 1,
    color: DEFAULT_COLOR,
  },
});

const header = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});

const active = StyleSheet.create({
  tab: {
    marginLeft: 0,
    borderRadius: 0,
    width: '100%',
    backgroundColor: PRIMARY,
  },

  tab_icon: {
    marginLeft: 15,
    fontSize: 25,
    color: '#fff',
  },

  tab_name: {
    fontFamily: 'Poppins-Bold',
    letterSpacing: 1,
    color: '#fff',
  },
});

const ticket = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Italic',
    color: DEFAULT_COLOR,
    marginVertical: 10,
    letterSpacing: 1,
    marginLeft: 15,
  },

  container: {
    marginVertical: 5,
    marginHorizontal: 10,
  },

  border: {
    borderWidth: 0.8,
    borderColor: DEFAULT_COLOR,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },

  data: {
    flexDirection: 'row',
  },

  check: {
    borderColor: DEFAULT_COLOR,
    color: PRIMARY,
  },

  place_detail: {
    width: '40%',
    height: 70,
  },

  place_name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    letterSpacing: 1,
    marginLeft: 5,
    color: DEFAULT_COLOR,
  },

  place_address: {
    fontFamily: 'Poppins-Italic',
    letterSpacing: 1,
    color: DEFAULT_COLOR,
    marginLeft: 5,
  },

  right_data: {
    width: '50%',
    alignItems: 'flex-end',
  },

  right_text: {
    fontFamily: 'Poppins-Light',
    letterSpacing: 1,
    color: DEFAULT_COLOR,
  },
});

const dashboard = StyleSheet.create({
  show_detail: {
    fontFamily: 'Poppins-Regular',
    marginVertical: 5,
  },

  circle_left: {
    borderRightWidth: 0.8,
    borderRadius: 50,
    width: '6%',
    position: 'absolute',
    top: 70,
    right: '100%',
    borderColor: DEFAULT_COLOR,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },

  dash: {
    position: 'absolute',
    top: 80,
    left: 20,
    width: '90%',
    height: 0,
    borderWidth: 0.1,
    color: DEFAULT_COLOR,
  },

  circle_right: {
    borderLeftWidth: 0.8,
    borderRadius: 50,
    width: '6%',
    position: 'absolute',
    top: 70,
    left: '100%',
    borderColor: DEFAULT_COLOR,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },

  expand_container: {
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 5,
  },

  expand: {
    flexDirection: 'row',
  },

  expand_details: {
    width: '50%',
    marginTop: 40,
    marginHorizontal: 5,
  },

  detail_title: {
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase',
    color: DEFAULT_COLOR,
    textDecorationLine: 'underline',
    marginBottom: 5,
    letterSpacing: 1,
  },

  data: {
    fontFamily: 'Poppins-Regular',
    color: DEFAULT_COLOR,
    letterSpacing: 1,
  },

  group_left: {
    width: '50%',
    marginTop: 30,
  },

  group_right: {
    width: '50%',
    marginTop: 30,
    marginLeft: 7,
  },

  buttons: {
    marginBottom: 5,
    width: '95%',
  },
});

const refund = StyleSheet.create({
  status: {
    fontFamily: 'Poppins-Italic',
    marginTop: 10,
    fontSize: 20,
    letterSpacing: 2,
    color: PRIMARY,
  },

  car_icon: {
    marginTop: 10,
    color: DEFAULT_COLOR,
  },

  amount: {
    fontFamily: 'Poppins-Light',
    letterSpacing: 1,
    color: PRIMARY,
    marginTop: -2,
  },
});

const feedback = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY,
  },

  title: {
    fontFamily: 'Poppins-Bold',
    color: PRIMARY,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginLeft: 20,
    marginTop: 20,
  },

  section: {
    height: '75%',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },

  text: {
    fontFamily: 'Poppins-Light',
    color: PRIMARY,
    marginVertical: 10,
    marginHorizontal: 20,
    letterSpacing: 1,
  },

  textarea: {
    // fontFamily: 'Poppins-Regular',
    // letterSpacing: 1,
    color: DEFAULT_COLOR,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  textarea_font: {
    fontFamily: 'Poppins-Italic',
    letterSpacing: 1,
  },

  button: {
    width: '40%',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 5,
  },

  button_text: {
    fontFamily: 'Poppins-Bold',
    letterSpacing: 1,
    color: '#fff',
  },

  button_group: {
    height: '15%',
    flexDirection: 'row',
  },

  icon: {
    marginHorizontal: 10,
    marginVertical: 5,
    color: PRIMARY,
  },

  ratings: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const account = StyleSheet.create({
  submit_button: {
    marginHorizontal: 30,
    marginTop: 50,
    paddingVertical: 5,
  },

  button_font: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    letterSpacing: 1,
  },

  text: {
    fontFamily: 'Poppins-Light',
    marginVertical: 10,
    letterSpacing: 1,
    textAlign: 'center',
  },

  link: {
    fontFamily: 'Poppins-Light',
    textDecorationLine: 'underline',
    color: PRIMARY,
    letterSpacing: 1,
  },

  logo: {
    backgroundColor: PRIMARY,
    height: 400,
    borderRadius: 200,
    alignItems: 'center',
    marginTop: -250,
    marginBottom: 50,
    transform: [{scaleX: 2}],
  },

  circle: {
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    marginTop: 300,
    position: 'relative',
    transform: [{scaleY: 2}],
  },

  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  field: {
    fontFamily: 'Poppins-Italic',
    marginHorizontal: 30,
    marginVertical: 5,
  },

  icon: {
    marginHorizontal: 20,
  },

  greeting: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    letterSpacing: 1,
    color: DEFAULT_COLOR,
    textAlign: 'center',
  },

  sub_head: {
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    fontSize: 20,
    marginTop: -5,
    marginBottom: 7,
    letterSpacing: 2,
    color: DEFAULT_COLOR,
  },

  forgot_link: {
    textAlign: 'right',
    marginRight: 30,
  },
});

const form = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY,
  },

  title: {
    color: PRIMARY,
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginLeft: 20,
    marginTop: 20,
  },

  button_group: {
    flexDirection: 'row',
  },

  button: {
    color: '#fff',
    width: '40%',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 5,
  },

  section: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },

  input: {
    height: 50,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // color: PRIMARY,
  },

  caption: {
    fontFamily: 'Poppins-Light',
    letterSpacing: 1,
    color: PRIMARY,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  locate: {
    color: '#fff',
    width: '40%',
    marginHorizontal: 20,
  },

  picker_container: {
    borderWidth: 0.5,
    height: 50,
    width: 200,
    borderRadius: 5,
    borderColor: PRIMARY,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  picker: {
    height: 50,
    width: 200,
  },

  scroll: {
    borderWidth: 0.5,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: DEFAULT_COLOR,
    marginHorizontal: 20,
    backgroundColor: SECONDARY,
    marginBottom: 20,
  },

  area_column: {
    borderWidth: 0.5,
    borderRadius: 1,
    borderStyle: 'dashed',
    borderColor: DEFAULT_COLOR,
    backgroundColor: '#ffff',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
  },

  slot_row: {
    borderWidth: 0.5,
    borderColor: DEFAULT_COLOR,
    borderRadius: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderColor: PRIMARY,
  },

  slot_column: {
    borderColor: DEFAULT_COLOR,
    marginVertical: 1,
    marginHorizontal: 1,
    borderRadius: 1,
  },

  slot: {
    fontFamily: 'Poppins-Bold',
    letterSpacing: 1,
    color: PRIMARY,
  },

  row: {
    flexDirection: 'row',
  },

  cvv: {
    height: 50,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    color: PRIMARY,
    width: '30%',
  },

  valid: {
    height: 50,
    marginVertical: 10,
    marginHorizontal: 2,
    backgroundColor: '#fff',
    color: PRIMARY,
    width: '60%',
  },

  button_font: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },

  type_font: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 1,
  },
});

const splash = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  triangle_top: {
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 500,
    borderTopWidth: 150,
    borderRightColor: 'transparent',
    borderTopColor: PRIMARY,
  },

  circle: {
    borderWidth: 15,
    borderRadius: 150,
    borderColor: PRIMARY,
    height: 200,
    width: 200,
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 130,
    color: PRIMARY,
  },

  triangle_bottom: {
    height: 0,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 500,
    borderTopWidth: 150,
    borderRightColor: 'transparent',
    borderTopColor: PRIMARY,
    transform: [{rotate: '180deg'}],
  },
});

export {drawer, header, active};
export {dashboard, refund, ticket};
export {feedback, account, form, splash};
