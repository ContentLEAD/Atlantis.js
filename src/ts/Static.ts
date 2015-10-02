module AtlantisJS {
    export function Static(x1: number, y1: number) {
        return function (t: number) {
            return { x: x1, y: y1 };
        }
    }
}
//adjust for video being smaller than 250px in width
document.onload = function(){
    function videoAtt(){
    }
    var video = $('div.atlantis-js');
    var videoAtt = new videoAtt();
    videoAtt.h = parseInt(video.css('height'));
    videoAtt.w = parseInt(video.css('width'));
    if(videoAtt.w < 250){
        
        $('.atlantis-js').css('font-size', '8px');
        $('.vjs-progress-control.vjs-control').css({
            'top':'-1em',
            'left':'0em',
            'width':'100%'
        });
        $('.ajs-default-skin .vjs-volume-control').css('width','4em');
        $('.vjs-sharing-button').remove();
        $('.vjs-quality-button').remove();
    }
}