import python from '../assets/python-icon.svg'
import c from '../assets/c-icon.svg'
import django from '../assets/django-icon.svg'
import react from '../assets/react-icon.svg'
import javascript from '../assets/js-icon.svg'
import typescript from '../assets/ts-icon.svg'
import css from '../assets/css-icon.svg'
import netlify from '../assets/netlify-icon.svg'
import html from '../assets/html-icon.svg'
import shell from '../assets/shell-icon.svg'
import mantine from '../assets/mantine-icon.svg'
import git from '../assets/git-icon.svg'

const getTechIcon = tech => {
  return {
    c, django, react, python, javascript, typescript, css, netlify, html, shell, mantine, git
  }[tech] ?? '';
}

export default getTechIcon