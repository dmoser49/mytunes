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
      var index = this.findWhere(song.attributes);
      this.remove(song)
      if (index === 0){
        this.playFirst();
      }
    }, this)
  },

  playFirst: function(){
    this.at(0).play();
    console.log(this.at(0));
  }

});
