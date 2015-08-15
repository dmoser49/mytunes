// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1){
        this.playFirst();
      }
    }, this),

    this.on('ended', function(){
      var test = this.shift();
      console.log(test);
      if (this.length){
        this.playFirst();
      }
    }, this),

    this.on('dequeue', function(song){
      var index = this.indexOf(song);
      console.log('index', index)
      this.remove(song)
      if (index === 0){
        if (this.length !== 0){
          this.playFirst();
        } else{
          this.stop();
        }
      }
    }, this)
  },

  playFirst: function(){
    this.at(0).play();
    console.log(this.at(0));
  },

  stop: function(){
    this.trigger('stop', this);
    console.log('stopping');
  }

});
