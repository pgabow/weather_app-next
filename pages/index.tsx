/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { ChangeEvent, useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import Loader from '@/components/Loader'
import WeatherCard from '@/components/WeatherCard'
import Alert from '@/components/Alert'
import { weatherState } from '@/types'
import { useDebounce } from '@/hooks/useDebounce'
import GetStarted from '@/components/GetStarted'
import Footer from '@/components/Footer'

export default function Home() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState<weatherState>()
  const [error, setError] = useState(null)
  const [loader, setLoader] = useState(false)
  const debounceQuery = useDebounce(query, 500)

  useEffect(() => {
    async function fetchWeather() {
      setLoader(true)
      setWeather(undefined)

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${debounceQuery?.trim()}&appid=${
          process.env.NEXT_PUBLIC_OPEN_WEATHER_APP_ID
        }&units=metric&lang=ru`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            if (data?.cod !== 200) {
              setError(data?.message || 'Error')
              setWeather(undefined)
            } else {
              setWeather({
                temperature: data.main?.temp,
                description: data.weather[0]?.description,
                humidity: data.main?.humidity,
                windSpeed: data.wind?.speed,
                icon: data.weather[0]?.icon,
              })
              setError(null)
            }
          }
        })
        .catch((e: any) => {
          setError(e)
        })
      setLoader(false)
    }
    if (debounceQuery) {
      fetchWeather()
    }
  }, [debounceQuery])

  const onQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery((e.target as HTMLInputElement).value)
    setWeather(undefined)
    setError(null)
  }
  const onQueryClear = () => {
    setQuery('')
  }
  const onDismiss = () => {
    setError(null)
  }

  return (
    <Layout>
      <div className='isolate bg-white'>
        {/* <Banner message='Get ready to learn how to build weather app!' link='#' /> */}
        <Header />

        <main>
          <div className='relative px-6 lg:px-8'>
            <div className='mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sv:pb-40'>
              <div>
                <h1 className='mb-5 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>
                  Погода
                </h1>

                <SearchBar query={query} onQuery={onQuery} onQueryClear={onQueryClear} />

                <div className='mt-8 flex gap-x-4 sm:justify-center'>
                  <Loader status={loader} />

                  {query && weather && !loader && <WeatherCard {...weather} />}

                  {query && !loader && error && <Alert error={error} onDismiss={onDismiss} />}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <GetStarted />
      <Footer />
    </Layout>
  )
}
