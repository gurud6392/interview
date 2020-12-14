import React from 'react';
import globalHook, {Store} from 'use-global-hook';

interface State {
  isLoading: boolean;
}

type Action = {
  setIsLoading: (isLoading: boolean) => void;
}

const initialState: State = {
  isLoading: false,
}

const actions = {
  setIsLoading: (store: Store<State, Action>, isLoading: boolean) => {
    store.setState({...store.state, isLoading});
  }
}

const useGlobal = globalHook<State, Action>(React, initialState, actions);

export default useGlobal;