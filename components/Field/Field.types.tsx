import * as React from 'react'
import { LayoutProps, PositionProps, SpaceProps } from 'styled-system'

export type FieldProps = React.HTMLProps<HTMLInputElement> & LayoutProps & PositionProps & SpaceProps

export type FieldRef = HTMLInputElement
