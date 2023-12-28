"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { updateUser } from "@/lib/actions/user.actions";
import { ThreadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.actions";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}
  
  function PostThread({userId} : { userId: string}) {
    const router = useRouter();
    const pathname = usePathname();
  
  
    const form = useForm({
      resolver: zodResolver(ThreadValidation),
      defaultValues: {
        thread: '',
        accountId: userId,
        
      },
    });
    const onSubmit =async (values : z.infer<typeof ThreadValidation>) => {
      await createThread({
        text: values.thread,
        author: userId, 
        communityId: null, 
        path: pathname
      });

      router.push('/')
    }
    return (
      <Form {...form}>
        <form
          className='flex flex-col justify-start gap-10'
          onSubmit={form.handleSubmit(onSubmit)}
        >
              <FormField
                control={form.control}
                name='thread'
                render={({ field }) => (
                  <FormItem className='mt-10 flex w-full flex-col gap-3'>
                    <FormLabel className='text-base-semibold text-dark-2'>
                      Content
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={15}
                        className='no-focus  text-dark-2'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
          )}
        />
        <button type='submit'className="bg-primary-500 text-white px-2 py-2">
                  Post Thread
        </button>
        </form>
      </Form>
        )
}

export default PostThread;