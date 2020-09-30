import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { NetlifyForm, Input, TextArea } from './form-elements';

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <NetlifyForm
      handleSubmit={handleSubmit}
      setIsSubmitting={setIsSubmitting}
      className="grid gap-3 lg:col-span-2"
    >
      <Input
        name="full_name"
        label="Full name"
        register={register}
        errors={errors}
      />
      <Input
        name="phone_number"
        label="Phone number"
        type="tel"
        register={register}
        errors={errors}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        register={register}
        errors={errors}
      />
      <TextArea
        name="message"
        label="Message"
        register={register}
        errors={errors}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`button w-full tracking-widest ${
          isSubmitting ? 'opacity-50 cursor-wait' : ''
        }`}
      >
        Submit
      </button>
    </NetlifyForm>
  );
}

export { ContactForm };
