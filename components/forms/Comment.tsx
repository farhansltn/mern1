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
import { Input } from "../ui/input";

import { updateUser } from "@/lib/actions/user.actions";
import { CommentValidation, ThreadValidation } from "@/lib/validations/thread";
import Image from "next/image";
import { addCommentToThread } from "@/lib/actions/thread.actions";


//import { createThread } from "@/lib/actions/thread.actions";

interface Props {
    threadId: string;
    currentUserImg: string;
    currentUserId: string
}
const Comment = ( { threadId, currentUserImg, currentUserId } : Props) => {
    const router = useRouter();
    const pathname = usePathname();
  
  
    const form = useForm({
      resolver: zodResolver(CommentValidation),
      defaultValues: {
        thread: '',
        
      },
    });
    const onSubmit =async (values : z.infer<typeof CommentValidation>) => {
    await addCommentToThread( threadId, values.thread, JSON.parse(currentUserId)
    ,pathname);

    form.reset();
    }
   return ( <Form {...form}>
        <form
          className='comment-form'
          onSubmit={form.handleSubmit(onSubmit)}
        >
              <FormField
                control={form.control}
                name='thread'
                render={({ field }) => (
                  <FormItem className='flex w-full items-center gap-3'>
                    <FormLabel>
                      <Image
                      src={currentUserImg}
                      alt="Profile-image"
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                      />
                    </FormLabel>
                    <FormControl>
                      <Input
                        type = 'text'
                        placeholder="Comment..."
                        className='border-none bg-[#fffff]'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
          )}
        />
        <button type='submit'className="comment-form_btn">
                  Reply Throne
        </button>
        </form>
      </Form>
    )
}

export default Comment;