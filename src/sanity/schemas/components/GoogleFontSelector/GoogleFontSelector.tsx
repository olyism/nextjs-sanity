import type {FC, FormEvent} from 'react'
import {useCallback} from 'react'
import {type StringInputProps, set, unset} from 'sanity'
import {useFetch} from 'usehooks-ts'
import {Select, Card, Spinner, Text} from '@sanity/ui'
import {GOOGLE_FONT_API_KEY} from '@/sanity/environment'

const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONT_API_KEY}`
const cardProps = {shadow: 1, padding: 3, radius: 2}

const GoogleFontSelector: FC<StringInputProps> = ({onChange, value}) => {
  const {data, error} = useFetch<any[]>(url)

  const handleChange = useCallback(
    (event: FormEvent<HTMLSelectElement> | undefined) => {
      const value = event?.currentTarget.value
      onChange(value ? set(value) : unset())
    },
    [onChange]
  )

  if (error) {
    return (
      <Card tone="critical" {...cardProps}>
        <Text>There has been an error</Text>
      </Card>
    )
  }

  if (!data) {
    return (
      <Card tone="default" {...cardProps}>
        <Spinner />
      </Card>
    )
  }

  // @ts-ignore
  const {items} = data

  return (
    <Select onChange={handleChange} value={value}>
      <option key="none" selected>
        None
      </option>
      {/* @ts-ignore */}
      {items.map((item) => {
        const {family, category} = item
        const value = JSON.stringify({family, category})

        return (
          <option key={family} value={value}>
            {family}
          </option>
        )
      })}
    </Select>
  )
}

export default GoogleFontSelector
