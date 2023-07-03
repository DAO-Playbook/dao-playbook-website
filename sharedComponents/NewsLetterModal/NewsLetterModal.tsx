import React from 'react';
import { LayoutContext } from '@contexts/Layout';
import Modal from '@sharedComponents/Modal/Modal';
import { Form, Formik, FormikHelpers } from 'formik';
import Button from '@sharedComponents/Button/Button';
import { ButtonVariants } from 'types';
import { NewsletterIllustration } from '@assets/svgs';
import { newsletterValidator } from 'validators/newsletterValidator';

import styles from './NewsLetterModal.module.scss';

const NewsLetterModal: React.FC = () => {
  const { showNewsletterModal, setLayoutContextValue } =
    React.useContext(LayoutContext);

  const [isSuccess, setIsSuccess] = React.useState(false);

  const initialValues = {
    email: '',
  };

  const handleSubmit = (
    values: typeof initialValues,
    helper: FormikHelpers<typeof initialValues>,
  ) => {
    console.log('values :>> ', values);
    setIsSuccess(true);
  };

  return (
    <Modal
      size={isSuccess ? 539 : 675}
      isOpen={showNewsletterModal}
      closeModal={() => setLayoutContextValue({ showNewsletterModal: false })}
      className={styles.NewsLetterModal}
      isClosable={!isSuccess}
    >
      {!isSuccess && (
        <>
          <h2 className={styles.NewsLetterModal_heading}>Stay up to date!</h2>
          <p className={styles.NewsLetterModal_description}>
            Be the first to know when a new chapter gets published. Don’t worry,
            we won’t clog your mailbox.
          </p>
          <Formik
            initialValues={initialValues}
            validateOnChange
            validateOnMount
            validateOnBlur
            onSubmit={handleSubmit}
            validationSchema={newsletterValidator}
          >
            {({
              handleBlur,
              handleChange,
              isValid,
              dirty,
              isSubmitting,
              values,
            }) => {
              return (
                <Form>
                  <div className={styles.NewsLetterModal_form}>
                    <input
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type='email'
                      value={values.email}
                      placeholder='Email address'
                    />
                    <Button
                      disabled={!(isValid && dirty) && !isSubmitting}
                      type='submit'
                      loading={isSubmitting}
                      variant={ButtonVariants.Primary}
                    >
                      SUBSCRIBE
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </>
      )}
      {isSuccess && (
        <div className={styles.NewsLetterModal_success}>
          <NewsletterIllustration />
          <h2>You’ve joined our A-list</h2>
          <p>
            You’ll be the first to know when a new chapter becomes available to
            read.
          </p>
          <Button
            onClick={() =>
              setLayoutContextValue({ showNewsletterModal: false })
            }
            variant={ButtonVariants.Primary}
          >
            BACK TO DAO PLAYBOOK
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default NewsLetterModal;
