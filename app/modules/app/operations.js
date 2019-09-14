
import * as Font from 'expo-font';
import fonts from '../../constants/fonts';
import loadImgs from '../../constants/images';
import {
  imagesLoaded,
  fontsLoaded,
} from './actions';

const loadFonts = () => async (dispatch) => {
  try {
    await Font.loadAsync(fonts);
    dispatch(fontsLoaded(true));
  } catch (error) {
    dispatch(fontsLoaded(false));
  }
};

const loadImages = () => async (dispatch) => {
  try {
    await loadImgs();
    dispatch(imagesLoaded(true));
  } catch (err) {
    dispatch(imagesLoaded(false));
  }
};

const loadAssets = () => (dispatch) => {
  dispatch(loadFonts());
  dispatch(loadImages());
};

export default {
  loadAssets,

};
