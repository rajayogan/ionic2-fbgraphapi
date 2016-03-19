import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    constructor() {
        
    }
    
    login() {
        facebookConnectPlugin.login(['email'], function(response) {
            alert('Logged in');
            alert(JSON.stringify(response.authResponse));
        }, function(error){
            alert(error);
        })
    }
    
    getdetails() {
        facebookConnectPlugin.getLoginStatus((response) => {
            if(response.status == "connected") {
                facebookConnectPlugin.api('/' + response.authResponse.userID + '?fields=id,name,gender',[], 
                function onSuccess(result) {
                    alert(JSON.stringify(result));
                },
                function onError(error) {
                    alert(error);
                }
                );
            }
            else {
                alert('Not logged in');
            }
        })
    }
    
    logout() {
        facebookConnectPlugin.logout((response) => {
            alert(JSON.stringify(response));
        })
    }
}
