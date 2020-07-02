import * as React from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'

import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { StyledSearchField } from './SearchField.styles'

export interface SearchFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, 'height' | 'size' | 'width'>, LayoutProps, SpaceProps {}

export const SearchField: React.FunctionComponent<SearchFieldProps> = ({
  className,
  id,
  label,
  onChange,
  placeholder,
  value = '',
  ...restOfProps
}) => {
  return (
    <Box className={className} {...restOfProps}>
      <label htmlFor={id}>
        <Text fontWeight='semibold' mb={1}>{label}</Text>
      </label>
      <StyledSearchField
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type='search'
        value={value}
      />
    </Box>
  )
}
