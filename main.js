 

const Splitwise = require('splitwise')
 
const sw = Splitwise({
  consumerKey: 'hWpblmx32iF3Q9yI7iBBkCMpNIG76G67xFZB2Dwy',
  consumerSecret: '4CYy9hDRyUaJPCsQopkm9lCNMAaxki83e8OKjThz'
})

 
 
const groupName = "Sexy Handsomes ";
const groupId =  sw.getGroups()
    .then(p => {  
      const sexyHandsomeGroup = p.filter(q => q.name == groupName); 
      return sexyHandsomeGroup[0].id;

    })
    .then(groupId => {
 
      // description
      // cost
      // date
      sw.getExpenses({ id: groupId, limit: 1000 })
        .then(expenses => 
          {
            for (expense in expenses)
            {
              const exp = expenses[expense];
              console.log(`"${exp.description}","${exp.cost}","${exp.date}"`);
            }
          });
 
    });

 