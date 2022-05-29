// It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes

const isDarkMode = () => {
  return (
    localStorage.getItem('color-theme') === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

if (isDarkMode()) {
  document.documentElement.classList.add('dark')
  localStorage.setItem('color-theme', 'dark')
} else {
  document.documentElement.classList.remove('dark')
  localStorage.removeItem('color-theme')
}

module.exports = {
  isDarkMode,
}
