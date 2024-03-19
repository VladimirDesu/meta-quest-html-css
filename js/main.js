'use strict'

const tabs = document.querySelector('.tabs__btns')


const toggleContent = (event) => {
  const target = event.target

  if (target.classList.contains('tabs__btn')) {
    const contentItems = document.querySelector('.tabs__content')
    const id = target.dataset.content
    const tabActive = event.currentTarget.getElementsByClassName('tabs__btn_active')[0]
    const contentId = contentItems.querySelector(`#${id}`)
    const contentActive = contentItems.getElementsByClassName('tabs__content-item_active')[0]

    contentActive.classList.remove('tabs__content-item_active')

    tabActive.classList.remove('tabs__btn_active')

    target.classList.add('tabs__btn_active')

    contentId.classList.add('tabs__content-item_active')
  }


}

tabs.addEventListener('click', toggleContent)

