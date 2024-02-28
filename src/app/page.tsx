'use client';

import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ChordDiagram } from '@/components/charts/chords';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.',
  }),
});

const data = [
  [11975, 5871, 8916, 2868],
  [1951, 10048, 2060, 6171],
  [8010, 16145, 8090, 8045],
  [1013, 990, 940, 6907],
];

export default function Home() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: 'admin',
      password: 'admin',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.username === 'admin' && data.password === 'admin') {
      toast.success('Login Success');
      router.push('/dashboard');
    } else toast.error("Username or Password doesn't match");
  }

  return (
    <main className=" w-full flex items-center h-screen ">
      <div className="flex items-center justify-center relative w-1/2 h-full border-2 ">
        <ChordDiagram data={data} width={1000} height={1000} />
      </div>
      <div className="w-1/2 h-full border-2 gap-5 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-slate-950 mb-4">
          Login For Dashboard
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-1/2 flex justify-center items-center flex-col  gap-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormDescription>Enter your username</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormDescription>Enter your password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
