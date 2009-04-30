
Utils.namespace("mushub.model.echonest", { 
  ArtistAudioDatasource : function(artist){
    this.id = artist.echonest_id;
    Utils.extend(this, new mushub.client.utils.Datasource(
                                       { service : "echonest/artist_audio",
                                         params : [{name : "id", value : artist.echonest_id}]
                                       }));   

    this.makeProp("audio");
    

    this.onUpdate = function(response){
      this.audio(response);
    }
    


  }
});
