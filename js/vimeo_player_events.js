var baseUrl = '';
var nid=0;
function onPlay(id) {
  jQuery.get(baseUrl+"/vimeo_player_events/play_event?nid="+nid);
}

function onPause(id) {
  jQuery.get(baseUrl+"/vimeo_player_events/pause_event?nid="+nid);
}

function onFinish(id) {
  jQuery.get(baseUrl+"/vimeo_player_events/finish_event?nid="+nid);
}

(function($) {
  Drupal.behaviors.vimeo_player_events = {
  attach: function (context, settings) {
  baseUrl = Drupal.settings.vimeo_player_events.baseUrl;
  nid = Drupal.settings.vimeo_player_events.nid;
  var iframe = $('#vimeo-player')[0],
  player = $f(iframe);
  player.addEvent('ready', function() {
    player.addEvent('play', onPlay);
    player.addEvent('pause', onPause);
    player.addEvent('finish', onFinish);
  })
 }}; 
})(jQuery);
