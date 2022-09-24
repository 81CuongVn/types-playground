import React from 'react'
import { styled, createStitches } from '@stitches/react'

type Props = {
  tab: 'about' | 'stats' | 'evolution'
  onClick: (tab: 'about' | 'stats' | 'evolution') => void
  color: string
}

const List = styled('ul', {
  listStyle: 'none',
  margin: '0',
  padding: '0',
  display: 'flex'
})

const ListItem = styled('li', {
  '& + &': {
    marginLeft: '16px'
  }
})

const TabButton = styled('button', {
  margin: '0',
  borderRadius: '8px',
  boxShadow: '6px 4px 14px 5px rgba(0, 0, 0, 0.21)',
  padding: '6px 12px',
  backgroundColor: '#fff',
  border: 'none',
  fontSize: '16px'
})

const Tabs: React.FC<Props> = ({ tab, onClick, color }) => {
  return (
  <List>
    <ListItem onClick={() => onClick('about')}>
      <TabButton color={color}>About</TabButton>
    </ListItem>
    <ListItem onClick={() => onClick('stats')}>
      <TabButton color={color}>Stats</TabButton>
    </ListItem>
    <ListItem onClick={() => onClick('evolution')}>
      <TabButton color={color}>Evolution</TabButton>
    </ListItem>
  </List>
  )
}

export default Tabs
