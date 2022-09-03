import React from 'react'
import { ParagraphTextStylesLink } from '../../styles/typography/ParagraphTextStylesLink'

const ParagraphTextLink = ({ children, ...props }) => (
  <ParagraphTextStylesLink {...props}>{children}</ParagraphTextStylesLink>
)

export default ParagraphTextLink
