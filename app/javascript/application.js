// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import 'bootstrap'
import './src/application.scss'

$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})