
export const signIn = () => {
    console.log('action:sign in');
    return {
        type: 'SIGN_IN',
    };
};

export const signOut = () => {
    console.log('action:sign out');
    return {
        type: 'SIGN_OUT'
    };
};