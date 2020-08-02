import { Button } from '@material-ui/core'
import { common } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

export const PortfolioButton = withStyles((theme) => ({
  root: {
    color: "#FFFFFA",
    backgroundColor: "#021718",
    padding: '8px 20px',
    '&:hover': {
      backgroundColor: '#333',
      boxShadow: 'none'
    }
  }
}))(Button)