import {Formik, Form, Field} from 'formik';

import styles from './styles.module.css'


function FormPage () {
    return (
        <Formik
            initialValues={{
                name:'' ,
                email:'' ,
                phone:'' ,
            }}
            validate={(values) => {
                const errors = {};
                if(!values.name) {
                    errors.name = 'Please enter a name!';
                }
                if(!values.email) {
                    errors.email = 'Please enter a email!';
                } else if(!/^\S+@\S+\.\S+$/.test(values.email)) {
                    errors.email = 'Please enter valid email'
                }
                if(!values.phone) {
                    errors.phone = 'Please enter a phone!';
                } else if(values.phone.length !== 12) {
                    errors.phone = 'Please enter valid phone number (12 digits)'
                }
                return errors;
            }}
            onSubmit={(values) => {
                console.log('Sending new user...' , values)
            }}
        >

           {
               ({errors, touched}) => (
                   <Form className={styles.form}>
                       <h1>Formik</h1>
                       <div className={styles.wrapper}>
                           <Field type='text' id='name' name='name'/>
                           {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
                           <label id='name' className={styles.label}>Name</label>
                       </div>

                       <div className={styles.wrapper}>
                           <Field type='text' id='email' name='email'/>
                           {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
                           <label id='email' className={styles.label}>Email</label>
                       </div>

                       <div className={styles.wrapper}>
                           <Field type='tel' id='phone' name='phone'
                                  pattern="[+][0-9]{11}"/>
                           {errors.phone && touched.phone && <span className={styles.error}>{errors.phone}</span>}
                           <label id='phone' className={styles.label}>Phone</label>
                       </div>


                       <button type='submit'>Submit</button>
                   </Form>
               )
           }
        </Formik>
    );
}

export default FormPage;