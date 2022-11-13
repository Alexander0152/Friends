export default {
  showLoader(request: Promise<any>, onRequestStart: () => void, onRequestFinish: () => void) {
    onRequestStart();
    return request.finally(() => onRequestFinish());
  }
}