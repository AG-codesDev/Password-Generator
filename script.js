let btn = document.getElementById("btn")

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*']
let funPassArr = ["funny", "LMAO", "passoword", "Yourname", "changepassword", "secret", "nothing", "iforgot", "user", "setpassword", "123", "undefined", "iloveyou", "hehehe"]

let weakpassbtn = document.getElementById("weakpass")
let midpassbtn = document.getElementById("midpass")
let strongpassbtn = document.getElementById("strongpass")
let funpassbtn = document.getElementById("funpass")

class Passaword {
    generateWeakPassword() {
        this.text = '';
        // console.log(alphabets)
        for (let i = 0; i < 5; i++) {
            const element = alphabets[Math.floor(Math.random() * alphabets.length)];
            this.text += element;

        }
        document.getElementsByTagName("span")[0].innerHTML = `${this.text}`;

    }
    generateMediumPassword() {
        this.text = '';
        let newArr = alphabets.slice(15).concat(numbers)
        // console.log(newArr)
        for (let i = 0; i < 6; i++) {
            const element = newArr[Math.floor(Math.random() * newArr.length)]

            this.text += element;
        }
        document.getElementsByTagName("span")[0].innerHTML = `${this.text}`;

    }
    generateStrongPassword() {
        this.text = '';
        let newArr = alphabets.slice(19).concat(numbers, symbols)
        // console.log(newArr)
        for (let i = 0; i < 9; i++) {
            const element = newArr[Math.floor(Math.random() * newArr.length)]

            this.text += element;
        }
        document.getElementsByTagName("span")[0].innerHTML = `${this.text}`;

    }
    generateFunPassword() {
        this.text = "";
        // console.log(funPassArr)
        for (let i = 0; i < 1; i++) {
            const element = funPassArr[Math.floor(Math.random() * funPassArr.length)];
            this.text = element;

        }
        document.getElementsByTagName("span")[0].innerHTML = `${this.text}`;

    }
}
let Passobj = new Passaword();

weakpassbtn.addEventListener('click', Passobj.generateWeakPassword)
midpassbtn.addEventListener('click', Passobj.generateMediumPassword)
strongpassbtn.addEventListener('click', Passobj.generateStrongPassword)
funpassbtn.addEventListener('click', Passobj.generateFunPassword)