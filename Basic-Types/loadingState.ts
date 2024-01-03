{
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(stateObject: ResourceLoadState) {
    switch (stateObject.state) {
      case 'loading':
        console.log('👀 loading...');
        break;
      case 'success':
        console.log(`🙂 ${stateObject.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${stateObject.reason}`);
        break;
      default:
        throw new Error(`Invalid Object : ${stateObject}`);
    }
  }

  printLoginState({ state: 'loading' });
  printLoginState({ state: 'success', response: { body: 'loaded' } });
  printLoginState({ state: 'fail', reason: 'no network' });
}
