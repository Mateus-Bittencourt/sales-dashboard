import Cookies from 'js-cookie'

export function logout() {
  if (confirm('Are you sure you want to log out?')) {
    Cookies.remove('Authorization')
    alert('You have been logged out successfully.')
    window.location.href = '/'
  }
}
