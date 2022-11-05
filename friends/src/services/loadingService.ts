import {
  increaseLoadingCount,
  store,
  decreaseLoadingCount
} from 'store';

export default {
  loadingStart() {
    store.dispatch(increaseLoadingCount());
  },
  loadingFinish() {
    store.dispatch(decreaseLoadingCount());
  }
}