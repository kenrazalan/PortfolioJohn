import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import {PortfolioButton} from '../portfolio-button/portfolio-button';
import { useStyles } from './styles'

export const NotFound = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography variant="h3">404 Not Found</Typography>
      <Typography paragraph>
        Sorry, this page is not available. Lets get you back on track.
      </Typography>
      <Link to="/" className={classes.link}>
        <PortfolioButton>Back to Home</PortfolioButton>
      </Link>
    </Container>
  )
}
