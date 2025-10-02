import { Link } from 'react-router-dom'
import {
  AvatarList,
  CardComponent,
  CustomTable,
  Header,
  CustomChart,
  StyledH2,
  StyledH3,
  StyledSpan,
} from '@components'
import { useGet } from '@hooks'
import { Container, Grid } from '@mui/material'
import type {
  HighlightsData,
  StarsData,
  NewsData,
  CustomChartProps,
} from '@types'
import { currencyConverter, highlightsTextConverter } from '@utils'

function Home() {
  const {
    data: highlightsData,
    loading: highlightsLoading,
    error: highlightsError,
  } = useGet<HighlightsData[]>('sales/highlights')

  const {
    data: salesMonthData,
    loading: salesMonthLoading,
    error: salesMonthError,
  } = useGet<CustomChartProps>('sales/month')

  const {
    data: salesYearData,
    loading: salesYearLoading,
    error: salesYearError,
  } = useGet<CustomChartProps>('sales/year')

  const {
    data: salesStarsData,
    loading: salesStarsLoading,
    error: salesStarsError,
  } = useGet<StarsData[]>('sales/stars')

  const {
    data: newsData,
    loading: newsLoading,
    error: newsError,
  } = useGet<NewsData[]>('news')

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          {!highlightsError && (
            <>
              <Grid item xs={12} sm={4}>
                <CardComponent
                  id="total-sales"
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">
                        Total sales for the month
                      </StyledH2>
                      <StyledH3 size={40} lineheight={40} className="mb-1">
                        {currencyConverter(highlightsData[0].value)}
                      </StyledH3>
                      <StyledSpan>
                        {highlightsTextConverter(highlightsData[0].subtitle)}
                      </StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>

              <Grid item xs={12} sm={4}>
                <CardComponent
                  id="goal-of-the-month"
                  className={
                    highlightsData
                      ? highlightsData[1].subtitle
                      : 'skeleton-loading skeleton-loading-mh-1'
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1" color="white">
                        Goal of the month
                      </StyledH2>
                      <StyledH3
                        size={40}
                        lineheight={40}
                        className="mb-1"
                        color="white"
                      >
                        {currencyConverter(highlightsData[1].value)}
                      </StyledH3>
                      <StyledSpan color="white">
                        {highlightsTextConverter(highlightsData[1].subtitle)}
                      </StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>

              <Grid item xs={12} sm={4}>
                <CardComponent
                  id="leads-contacted"
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <Link to="/leads">
                      <StyledH2 className="mb-1">Leads contacted</StyledH2>
                      <StyledH3 size={40} lineheight={40} className="mb-1">
                        {highlightsData[2].value}
                      </StyledH3>
                      <StyledSpan>
                        {highlightsTextConverter(highlightsData[2].subtitle)}
                      </StyledSpan>
                    </Link>
                  )}
                </CardComponent>
              </Grid>
            </>
          )}

          <Grid item xs={12} sm={7}>
            {!salesMonthError && (
              <CardComponent
                id="sales-by-month"
                className={
                  salesMonthLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesMonthLoading && salesMonthData && (
                  <>
                    <StyledH2 className="mb-1">
                      Sales value in the month
                    </StyledH2>
                    <CustomChart
                      labels={salesMonthData.labels.map(label => label)}
                      data={salesMonthData.data.map(data => data)}
                      type={salesMonthData.type}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>

          <Grid item xs={12} sm={5}>
            {!salesStarsError && (
              <CardComponent
                id="top-sales-stars"
                className={
                  salesStarsLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesStarsLoading && salesStarsData && (
                  <>
                    <StyledH2 className="mb-1">Top Sales Stars</StyledH2>
                    <AvatarList
                      listData={salesStarsData.map(star => ({
                        avatar: '/dnc-avatar.svg',
                        name: star.name,
                        subtitle: currencyConverter(star.value),
                      }))}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>

          <Grid item xs={12} sm={5}>
            {!newsError && (
              <CardComponent
                id="relevant-news"
                className={
                  newsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                }
              >
                {!newsLoading && newsData && (
                  <>
                    <StyledH2 className="mb-1">Relevant news</StyledH2>
                    <CustomTable
                      headers={['Title', 'Time']}
                      rows={newsData.map(news => [
                        <a
                          className="ellipsis ellipsis-sm"
                          href={news.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {news.title}
                        </a>,
                        <a
                          href={news.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {news.date}
                        </a>,
                      ])}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>

          <Grid item xs={12} sm={7}>
            {!salesYearError && (
              <CardComponent
                id="sales-per-month"
                className={
                  salesYearLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesYearLoading && salesYearData && (
                  <>
                    <StyledH2 className="mb-1">Sales per month</StyledH2>
                    <CustomChart
                      labels={salesYearData.labels.map(label => label)}
                      data={salesYearData.data.map(data => data)}
                      type={salesYearData.type}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
