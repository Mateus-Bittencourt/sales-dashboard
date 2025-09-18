import { CardComponent } from '@components'
import { render } from '@testing-library/react'
import type { Theme } from '@types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@resources/themesList'

describe('CardComponent', () => {
  const renderComponent = (theme: Theme, className?: string) =>
    render(
      <ThemeProvider theme={theme}>
        <CardComponent className={className} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`when using ${name}`, () => {
      it('should match snapshot without any class', () => {
        const { asFragment } = renderComponent(theme)
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match snapshot with alert class', () => {
        const { asFragment } = renderComponent(theme, 'alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match snapshot with success class', () => {
        const { asFragment } = renderComponent(theme, 'success')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match snapshot with warning class', () => {
        const { asFragment } = renderComponent(theme, 'warning')
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
