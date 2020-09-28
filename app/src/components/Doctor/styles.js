import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  actions: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default useStyles
