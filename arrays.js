


var animals = ['cat','dog','bird']


animals.forEach(function(animal,i){
    console.log(`Animal ${i} is ${animal}`)
})

let user = {username:'Tony',email:'tony.spicer.covin@gmail.com',password:'hallo',Contact:{phone: '612-242-8246',location: 'Minneapolis'},
roles:['sweeper','code guy']
                                                                              

};
user.salary = '$75,000';
user.roles.push('server admin');
console.log(user)   