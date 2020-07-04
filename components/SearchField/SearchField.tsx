import * as React from 'react'

import { Box } from 'components/Box'
import { Field } from 'components/Field'
import { StyledSearchField } from './SearchField.styles'
import { SearchFieldProps } from './SearchField.types'

export const SearchField = () => {
  const [sticky, setSticky] = React.useState<boolean>(true)
  const inputRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSticky(false)
      } else {
        setSticky(true)
      }
    })

    observer.observe(inputRef.current)

    return () => observer.unobserve(inputRef.current)
  }, [inputRef.current])

  return (
    <React.Fragment>
      <Box ref={inputRef} />
      <StyledSearchField sticky={sticky}>
        <Field
          position='sticky'
          top={0}
          display='block'
          placeholder='Type a name...'
          type='search'
          width='100%'
        />
      </StyledSearchField>
    </React.Fragment>
  )
}
