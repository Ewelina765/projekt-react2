import {Formik, Form} from 'formik'
export const Sign = () => {
return (
    <Formik>
    {formik => {
        console.log(formik)
    }}
    </Formik>
)
}
