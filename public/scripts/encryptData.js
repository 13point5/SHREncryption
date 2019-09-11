const encryptForm = document.querySelector('#encrypt-form')
const plainTextField = document.querySelector('#plain-text')
const encryptedTextField = document.querySelector('#encrypted-text')



encryptForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const plainText = plainTextField.value

    if (! /^[a-z]+$/.test(plainText)) {
        alert("Input text can only contain lower case alphabets")
    } else {

        fetch('/encrypt?text=' + plainText).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    encryptedTextField.innerHTML = 'Error'
                } else {
                    encryptedTextField.innerHTML = data.cipherText
                }
            })
        })

    }
})
