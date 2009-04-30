Utils.namespace("mushub.model.echonest", { 
  ArtistSearchDatasource : function(query){
    Utils.extend(this, new mushub.client.utils.Datasource(
                                       { service : "echonest/artist_search",
                                         params : [{ name : "query", value : query }]
                                       })); 
    this.query = query;
    this.makeProp("artists");                                       
    
    this.onUpdate = function(response){
      this.artists(response.artists);
    }
    
  }
});
