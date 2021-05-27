module['exports'] = function petaniBot(hook) {

    // impor modul request
    var request = require('request');

    // buat atau kirim request ke bot telegram
    request.post('https://api.telegram.org/bot' + hook.env.token_petani_bot + '/sendMessage')
        .form({
              'chat_id': hook.params.message.chat.id,
              'text': 'Anda mengirim: ' + hook.params.message.text
    });
}