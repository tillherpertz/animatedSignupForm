// Vars

const correctUser = 'bindernoisi';
const correctPass = 'test';


// Submit form on button click and check for right or wrong inputs

$('button.submit').click(function(){
    if ($(this).hasClass('is-default')){
        if ($('input#username').val().toLowerCase() == correctUser && $('input#password').val() == correctPass) {
            $('.content-wrap').removeClass('is-default');
            $('.content-wrap').addClass('is-success');
            $('.signin-form').hide();
            $('.signin-success').show();
        } else {
            $('.content-wrap').removeClass('is-default');
            $('.content-wrap').addClass('is-failure');
            $('button.submit').removeClass('is-default');
            $('button.submit').addClass('is-failure');
            $('button.submit').html('Try again');
        }
    } else if ($(this).hasClass('is-failure')) {
        $('.content-wrap').removeClass('is-failure')
        $('.content-wrap').addClass('is-default')
        $('button.submit').removeClass('is-failure');
        $('button.submit').addClass('is-default');
        $('button.submit').html('Sign in');
    }
})