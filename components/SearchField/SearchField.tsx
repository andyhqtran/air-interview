import * as React from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'

import { Box, BoxProps } from 'components/Box'
import { Text } from 'components/Text'
import { StyledSearchField, StyledSearchFieldInput, StyledSearchFieldLabel } from './SearchField.styles'
import { SearchFieldProps } from './SearchField.types'

export const SearchField: React.FunctionComponent = ({
  id,
  label,
  onChange,
  placeholder,
  value = '',
  ...restOfProps
}: SearchFieldProps) => {
  return (
    <StyledSearchField {...restOfProps}>
      <StyledSearchFieldLabel htmlFor={id}>
        {label}
      </StyledSearchFieldLabel>
      <StyledSearchFieldInput
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type='search'
        value={value}
      />
    </StyledSearchField>
  )
}
