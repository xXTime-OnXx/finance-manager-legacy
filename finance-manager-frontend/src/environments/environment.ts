// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    useEmulators: false, // should be set to true
    firebase: {
        apiKey: 'AIzaSyA1a0bCqq-0hyoFn9McuPaPFJ0MMo3KxtU',
        authDomain: 'finance-manager-80438.firebaseapp.com',
        databaseURL: 'https://finance-manager-80438.firebaseio.com',
        projectId: 'finance-manager-80438',
        storageBucket: 'finance-manager-80438.appspot.com',
        messagingSenderId: '563221995906',
        appId: '1:563221995906:web:bb24375347fa7298af2f9b'
    },
    host: 'http://localhost:3000/api',
    bearerToken: 'BEARER_TOKEN',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
