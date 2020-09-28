import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    minWidth: theme.spacing(11)
  },
  disabled: {
    textDecoration: 'line-through'
  },
  caption: {
    fontSize: 12
  }
}))

export default useStyles
