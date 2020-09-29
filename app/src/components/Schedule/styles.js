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
  subtitle: {
    marginLeft: theme.spacing(0.5)
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))

export default useStyles
