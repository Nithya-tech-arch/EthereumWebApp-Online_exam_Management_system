let contractAddress = "0x4c2745cAC2108bfe1372831f0fcaEb2581FEaFC4"

let teacherId = "0xfa925F9749954F9Ff4Cd0B65A80D10536b729Fe0"

const web3 = new Web3("http://127.0.0.1:7545")
const contract = new web3.eth.Contract(abi, contractAddress)

// Teacher login
const teacherLogin = async () => {
    let pwd = document.getElementById('password').value
    let res;
    await contract.methods.teacherLogin(pwd).call().then(e => res = e)
    if (res)
        window.location = '/'
    else
        alert("Password incorrect")
}