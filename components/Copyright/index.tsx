import React from 'react'

export default function Copyright() {
  return (
    <div className='container_copyright copyright'>
      <div className='copyright__row'>
        <div className='copyright__logo'>
          <a href='mailto:paul@gabow.ru?subject=Предложение работы'>
            <img
              src='/mylogo.png'
              className='copyright__img move-right'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              title='Кто заказывал такси на Дубровку?'
              alt='Кто заказывал такси на Дубровку?'
            />
          </a>
          <img src='/wheel.png' className='copyright__img-wheel move-right1' alt='' />
          <img src='/wheel1.png' className='copyright__img-wheel1 move-right1' alt='' />
        </div>
      </div>
    </div>
  )
}
