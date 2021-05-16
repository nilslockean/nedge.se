const onLoad = () => {
  document.body.classList.remove('no-js')

  const currentYearElements = document.querySelectorAll('.current-year')
  if (currentYearElements) {
    const year = new Date().getFullYear().toString()
    for (const element of currentYearElements) {
      if (element.innerText === year) continue
      element.innerText = year
    }
  }
}

document.addEventListener('DOMContentLoaded', onLoad)
