/*
    Assignment 05
    Name : Arpan Arpan
    Student Id : 0820839
*/
$(document).ready(function () {

  class ContentItem {
    // Defining the properties here 
        id;
        name;
        description;
        categoryGenre;
    
    // constructor
        constructor(id,name,description,categoryGenre){
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
          }

    //methods
         updateContentItem(id,name,description,categoryGenre){
             if((this.id == id) && (name != null) && (description != null) && (categoryGenre != null)){
                 this.name = name;
                 this.description = description;
                 this.categoryGenre = categoryGenre;
          }
       }
      tostring() {
        $('#content-item-list').append(
          '<div class ="content-item-wrapper"id= "content-item-ID' +this.id +'">'+
            '<h2>Name:- '+ this.name+'</h2>'+
            '<p>Description :- '+ this.description+' </p>'+
             '<div>categoryGenre :- '+ this.categoryGenre+' </div>'+
         '</div>');
         
        }
    }
    // Creating a list of the favourite actors
    let allactors = [
        {
        id : '1',
        name : 'Shahrukh Khan',
        description : 'Actor',
        categoryGenre : 'Romantic' 
      },
      {
        id : '2',
        name : 'Gippy Grewal',
        description : 'Singer',
        categoryGenre : 'Comedy' 
      },
      {
        id : '3',
        name : 'Chris Evans',
        description : 'Hero',
        categoryGenre : 'Action' 
    },
      {
        id : '4',
        name : 'Diljeet Dosanjh',
        description : 'artist & actor',
        categoryGenre : 'Pop' 
    },
      {
        id : '5',
        name : 'Kajol',
        description : 'Actor',
        categoryGenre : 'Romantic' 
      }
    ]
    for(i = 0; i < allactors.length; i++){
      $('#content-item-list').append(
      '<div class ="content-item-wrapper"id= "content-item-' +allactors[i].id + '">'+
       '<h4>Name:- '+ allactors[i].name+'</h4>'+
        '<p>Description :- '+ allactors[i].description+' </p>'+
        '<div> CategoryGenre :- '+ allactors[i].categoryGenre+' </div>'+
      '</div>'); 
  };
    //succssfull button click
          $('#successful-button').click(function(){
            updateContentItemSuccessfully();
        });
    //unsuccssfull button click
        $('#unsuccessful-button').click(function(){
            updateContentItemUnsuccessfully();
        });
    // Apply styles using jQuery 
    for(i = 0; i < allactors.length; i++){
      $('#content-item-list').css({
          border: '4px solid brown ',
          width: '260px', 
          padding: '17px', 
          margin: '40px auto', 
        } )};
        
});
