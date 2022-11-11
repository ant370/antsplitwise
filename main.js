 

const Splitwise = require('splitwise')
const dotenv = require('dotenv')

console.log(process.env)

dotenv.config();

const KEY = process.env.SPLITWISE_KEY;
const SECRET = process.env.SPLITWISE_SECRET;

 
const sw = Splitwise({
  consumerKey: KEY,
  consumerSecret: SECRET
});

 
 
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
              console.log(`"willem","${exp.description}","${exp.cost}","${exp.date}"`);
            }
          });
 
    });

 