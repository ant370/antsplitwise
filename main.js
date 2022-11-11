 

const Splitwise = require('splitwise')
const dotenv = require('dotenv')

console.log(process.env)

dotenv.config();

const KEY = process.env.SPLITWISE_KEY;
const SECRET = process.env.SPLITWISE_SECRET;
const GROUP_NAME = process.env.GROUP_NAME;

 
const sw = Splitwise({
  consumerKey: KEY,
  consumerSecret: SECRET
});

 
  
const groupId =  sw.getGroups()
    .then(p => {  
      const sexyHandsomeGroup = p.filter(q => q.name == GROUP_NAME); 
      return sexyHandsomeGroup[0].id;

    })
    .then(groupId => {
 
      // description
      // cost
      // date
      sw.getExpenses({ id: groupId, limit: 1000 })
        .then(expenses => 
          {
            var i = 0;
            for (expense in expenses)
            {
              const exp = expenses[expense];
              console.log(`"${exp.id}","${exp.description}","${exp.cost}","${exp.date}"`);
            }
          });
 
    });

 