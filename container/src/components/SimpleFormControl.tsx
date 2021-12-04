import { FormControl, FormControlProps } from '@material-ui/core'

import { addFormGroupStyles } from './FormGroup'

export type SimpleFormControlProps = FormControlProps

export default addFormGroupStyles(FormControl)
