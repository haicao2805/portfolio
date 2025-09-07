'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { enqueueSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import { FaTelegram } from 'react-icons/fa';

import { contactFormSchema, defaultContactFormValue, TContactFormValue } from '@/common';
import { RHFTextArea, RHFTextField } from '@/components/core/input';
import { Loading } from '@/components/core/loading';

const ContactFormComponent: React.FC = () => {
  // --------------------------------------------------
  const [isLoading, setIsLoading] = React.useState(false);

  // --------------------------------------------------
  const methods = useForm<TContactFormValue>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { ...defaultContactFormValue },
  });

  // --------------------------------------------------
  const onSubmit = async (data: TContactFormValue) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const data = await response.json();
        console.error('[ERROR] Error from server:', data?.message);
        enqueueSnackbar({
          variant: 'error',
          message: 'Failed to send message. Please try again!',
        });
        return;
      }

      enqueueSnackbar({
        variant: 'success',
        message: 'Message sent successfully!',
      });
      methods.reset();
    } catch (error) {
      enqueueSnackbar({
        variant: 'error',
        message: 'Failed to send message. Please try again!',
      });
      console.error('[ERROR] Failed to send message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-12" onSubmit={methods.handleSubmit(onSubmit)}>
        <RHFTextField
          disabled={isLoading}
          autoComplete="name"
          // autoFocus
          control={methods.control}
          name="name"
          required
          isFullWidth
          label="Name"
          placeholder="Enter your name"
        />

        <RHFTextField
          disabled={isLoading}
          autoComplete="email"
          control={methods.control}
          name="email"
          type="email"
          required
          isFullWidth
          label="Email Address"
          placeholder="Enter your email"
        />

        <RHFTextField
          disabled={isLoading}
          autoComplete="off"
          control={methods.control}
          name="subject"
          required
          isFullWidth
          label="Subject"
          placeholder="Enter message subject"
        />

        <RHFTextArea
          disabled={isLoading}
          autoComplete="off"
          control={methods.control}
          name="message"
          required
          isFullWidth
          label="Your Message"
          placeholder="Write your message here"
          rows={10}
        />

        <button
          title="Send Message"
          type="submit"
          disabled={isLoading}
          className="button outlined disabled justify-center">
          {isLoading ? (
            <>
              <Loading className="w-16 border-2" />
              Sending...
            </>
          ) : (
            <>
              <FaTelegram />
              Send Message
            </>
          )}
        </button>
      </form>
    </FormProvider>
  );
};

export const ContactForm = React.memo(ContactFormComponent);
