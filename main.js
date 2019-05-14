const form = document.forms[0]
const nameField = document.querySelector('#name')
const introduceField = document.querySelector('#introduce')
const photoField = document.querySelector('#photo_url')
const themeField = document.querySelector('#radio_lighttheme')

const namecard = document.querySelector('.my-card')
const nameshow = document.querySelector('.my-name')
const introduceshow = document.querySelector('.my-introduce')
const photoshow = document.querySelector('.my-photo')

function field_validation() {
  let name = nameField.value
  let introduce = introduceField.value
  let validation_val = true
  if (name === '') {
    nameField.nextElementSibling.innerHTML = 'Please provide your name.'
    nameField.nextElementSibling.classList.add('text-danger')
    validation = false
  }
  if (introduce === '') {
    introduceField.nextElementSibling.innerHTML = 'Please Intruduce yourself.'
    introduceField.nextElementSibling.classList.add('text-danger')
    validation_val = false
  } else if (introduce.length > 200) {
    introduceField.nextElementSibling.innerHTML = 'must in 200 words.'
    introduceField.nextElementSibling.classList.add('text-danger')
    validation_val = false
  }

  return validation_val
}

form.addEventListener('submit', function (event) {
  event.preventDefault()

  let validation_val = field_validation() //驗證資料

  if (validation_val) {
    let name = nameField.value
    let introduce = introduceField.value

    nameshow.innerHTML = nameField.value
    introduceshow.innerHTML = introduceField.value
    if (photoField.value === '') {
      photoshow.src = "https://via.placeholder.com/200"
    } else {
      photoshow.src = photoField.value
    }

    //設定主題
    if (themeField.checked) {
      namecard.classList.remove('dark_theme', 'light_theme')
      namecard.classList.add('light_theme')
    } else {
      namecard.classList.remove('light_theme', 'dark_theme')
      namecard.classList.add('dark_theme')
    }
  } else {
    //如驗證失敗，將名片資料清除
    nameshow.innerHTML = ''
    introduceshow.innerHTML = ''
    photoshow.src = ''
    namecard.classList.remove('light_theme', 'dark_theme')
  }

})

form.addEventListener('input', function (event) {
  //輸入時，即時顯示剩餘字數
  let input = event.target.value
  if (event.target.id === 'introduce') {
    let count = event.target.value.length
    let feedbackDiv = introduceField.nextElementSibling
    if (count > 200) {
      feedbackDiv.innerHTML = 'Over 200 words!'
      feedbackDiv.classList.add('text-danger')
    } else {
      feedbackDiv.innerHTML = `${200 - count} remain.`
    }
    feedbackDiv.classList.add('text-danger')
  }
})