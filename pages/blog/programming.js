import React from 'react'
import { Box, Grid} from '@mui/material'
import Banner from '../../comps/Banner'
import { Container } from '@mui/system'
import Section1 from '../../comps/Sections/Section1'
import Categories from '../../comps/Sections/Categories'

const programming = () => {
  return (
    <Box sx={{mt: 10}}>
      <Banner title={'Programming'}/>

      <Container sx={{mt: 4}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Section1 />
          </Grid>
          <Grid item xs={12} md={4}>
            <Categories />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default programming