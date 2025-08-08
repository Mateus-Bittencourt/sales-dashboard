/**
 * Converts text from highlight api
 * @param text - Text to be converted
 * @return Converted text
 */

export const highlightsTextConverter = (text: string): string => {
  switch (text) {
    case 'alert':
      return '* Goal far from being reached'
    case 'success':
      return '* Goal reached'
    case 'warning':
      return '* Goal almost reached'
    case 'Clique aqui para gerenciar seus leads':
      return 'Click here to manage your leads'
    default:
      if (text.includes('Atualizado em')) {
        const now = new Date()
        return `Updated at ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
      }
      return ''
  }
}
