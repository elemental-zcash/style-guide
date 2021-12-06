// @ts-nocheck
import React, { ReactNode } from 'react';
import { Box, Headline, Text, Line } from 'elemental-react';

interface SectionProps {
  title: string,
  description?: string,
  children: ReactNode,
};

const Section = ({ title, titleColor, description, children }: SectionProps) => (
  <Box>
    <Box px={40} pt={40}>
      <Headline.H2 bold fontSize={48} lineHeight={64} color={titleColor}>
        {title}
      </Headline.H2>
      {Boolean(description) && (
        <Text fontSize={20} lineHeight={24} color="#6E7379" mt={12}>
          {description}
        </Text>
      )}
      <Line mt={16} bg="#D8D8D8" width="100%" />
    </Box>
    {children}
  </Box>
);

export default Section;
