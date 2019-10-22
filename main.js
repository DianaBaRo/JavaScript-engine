(() => {   
  const han = {firstname: "Han", lastname: "Solo"};  
  const luke = {firstname: "Luke", lastname: "Skywalker"};  
  const leia = {firstname: "Leia", lastname: "Organa"};  
  const obi = {firstname: "Obi", lastname: "Wan"};  
  const yoda = {firstname: "", lastname: "Yoda"};  
  const people = [ han, luke, leia, obi, yoda, luke, leia ];  
  
  const getName = (person) => 
    person.lastname;
    console.time("engine");  
    for(var i = 0; i < 1000 * 1000 * 1000; i++) {     
      getName(people[i & 6]);   
    }  
    
    console.timeEnd("engine"); 
})

();

//JS class to the rescue

(() => {  
  class Person {    
    constructor({      
      firstname = '',      
      lastname = '',      
      spaceship = '',      
      job = '',      
      gender = '',      
      retired = false    
    } = {}) {      
      Object.assign(this, {        
        firstname,        
        lastname,        
        spaceship,        
        job,        
        gender,        
        retired      
      });    
    }  
  }
  
  const han = new Person({    
    firstname: 'Han',    
    lastname: 'Solo',    
    spaceship: 'Falcon'  
  });  

  const luke = new Person({    
    firstname: 'Luke',    
    lastname: 'Skywalker',    
    job: 'Jedi'  
  });  
  
  const leia = new Person({    
    firstname: 'Leia',    
    lastname: 'Organa',    
    gender: 'female'  
  });  
  
  const obi = new Person({    
    firstname: 'Obi',    
    lastname: 'Wan',    
    retired: true  
  });  
  
  const yoda = new Person({ 
    lastname: 'Yoda' 
  });  
  const people = [    han,    luke,    leia,    obi,    yoda,    luke,    leia,    obi  ];  
  const getName = person => 
    person.lastname;  
    console.time('engine');  
    for (var i = 0; i < 1000 * 1000 * 1000; i++) {    
      getName(people[i & 7]);  
    }  
  console.timeEnd('engine');
})
  
();
