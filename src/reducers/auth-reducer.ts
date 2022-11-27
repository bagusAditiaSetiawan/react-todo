export const ActionAuth = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
}

export type AuthAction = {
    type: string,
    payload: User,
    error: string,
}

export interface User {
    username?: string,
    email?: string
}

export type AuthState = Readonly<{
    user: User;
    isLogged: boolean
  }>;
export const initialState: AuthState = {
    user: {} as User,
    isLogged: false,
};

export const authReducer = (state = initialState.user, action: AuthAction) => {
    switch (action.type) {
        case ActionAuth.LOGIN_REQUEST:
          return {
            ...state,
            user: {...action.payload},
            isLoading: true,
            error: action.error,
        };
        case ActionAuth.LOGIN_SUCCESS:
          return {
            ...state,
            user: {...action.payload},
            isLoading: false,
            error: action.error,
        };
        case ActionAuth.LOGIN_ERROR:
          return {
            ...state,
            user: {...action.payload},
            isLoading: false,
            error: action.error,
        };
        default:
          return state;
      }
}