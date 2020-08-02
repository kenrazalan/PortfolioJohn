import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 35
  },
  socialMediaIcons: {
    padding: 10
  },
  FacebookIcon: {
    fontSize: 40,
    color: 'blue',
    paddingRight: 5,
    paddingBottom: 5
  },
  YoutubeIcon: {
    fontSize: 48,
    paddingLeft: 5,
    color: 'red'
  },
  link: {
    textDecoration: 'none'
  }
}))