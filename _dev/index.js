var SMSAPI = require('../lib/smsapi'),
    smsapi = new SMSAPI({
        server: 'https://api2.smsapi.com/',
        oauth: {
            // accessToken: '7NubWWlI2ZMrCV4jQxUelWqr91MsdRH70HfRoYAQ'
            accessToken: 'w1rQm99NuC8VtfyJFjhCR0hXcPAS4kpxOjPbAVVn'
        }
    });

sendMessage()
    .then(displayResult)
    .catch(displayError);

/*var SMSAPI = require('../lib/smsapi'),
    smsapi = new SMSAPI();

smsapi.authentication
    .login('tomy@smartness.fr', 'LMbjrArYW9ea=KUPb4CA726tyaQeks')
    .then(sendMessage)
    .then(displayResult)
    .catch(displayError);*/

function sendMessage(){
    return smsapi.message
        .sms()
        .from('Info') // SenderName
        .to('33699778577, 33650385967, 33658969133, 33755678149') // Number
        .test(1)
        .message('TestMessage: Param1 = [%1%] — Param2 = [%2%] — Param3 = [%3%] — Param4 = [%4%]')
        .param1('Tomy|Arthur|Adilie|Baba')
        .param2('Spa|Del|Seit|Bobo')
        .param3('32|20|26|21')
        .param4('M|M|F|XX')
        // .param1('Tomy')
        // .param2('Spa')
        // .param3('32')
        // .param4('M')
        .details(1)
        .execute(); // return Promise
}

function displayResult(result){
    console.log(result);
}

function displayError(err){
    console.error(err);
}
