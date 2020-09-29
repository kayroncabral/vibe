import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  caption: {
    fontSize: 12
  },
  actions: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default useStyles
