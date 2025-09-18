import '@testing-library/jest-dom'
import 'jest-styled-components'
import { Logo } from '@components'
import { pxToRem } from '@utils'
import { render } from '@testing-library/react'
import type { Theme } from '@types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@resources/themesList'

describe('Logo Component', () => {
  const renderComponent = (theme: Theme, width?: number, height?: number) =>
    render(
      <ThemeProvider theme={theme}>
        <Logo width={width || 32} height={height || 32} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`when using ${name}`, () => {
      it('should apply the correct background image', () => {
        const { container } = renderComponent(theme)

        expect(container.firstChild).toHaveStyleRule(
          'background-image',
          `url(/${theme.appLogo})`
        )
      })

      it('should apply the correct width and height when props are provided', () => {
        const customWidth = 64
        const customHeight = 64
        const { container } = renderComponent(theme, customWidth, customHeight)

        expect(container.firstChild).toHaveStyleRule(
          'width',
          `${pxToRem(customWidth)}`
        )
        expect(container.firstChild).toHaveStyleRule(
          'height',
          `${pxToRem(customHeight)}`
        )
      })
    })
  })
})
