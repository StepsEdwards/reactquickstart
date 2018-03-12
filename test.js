const users = [
    u1 = {
        name: 'Stephens',
        sex: 'male'
    },
    u2 = {
        name: 'Sara',
        sex: 'female'
    },
    u3 = {
        name: 'Josh',
        sex: 'male'
    }
]

const updatedUsers = users.map(user => {
    var updatedUser = {};
    updatedUser = user;
    updatedUser.id = users.indexOf(user);
    return updatedUser;
});

function Counter(){
    this.num = 0;

    this.timer = setInterval(() => {
        this.num++;
        console.log(this.num);
    }, 1000)
}
const a  = new Counter();
//clearInterval(a.timer);

console.log(updatedUsers);
console.log(a.num);
