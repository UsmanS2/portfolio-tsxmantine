import { TextInput, Textarea, SimpleGrid, Group, Title, Button, rem } from '@mantine/core';
import { useForm } from '@mantine/form';
import emailjs from 'emailjs-com';

export function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const sendEmail = (values) => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <form onSubmit={form.onSubmit(sendEmail)}>
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
        mt={rem(100)}
      >
        Get in touch with Me!
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl" mx={rem(150)}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        mx={rem(150)}
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        mx={rem(150)}
        {...form.getInputProps('message')}
      />

      <Group justify="center" mt="xl" mb={rem(100)}>
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
  );
}
