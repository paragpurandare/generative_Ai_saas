"use client"

import * as z from "zod";
import Heading from '@/components/heading';
import { ImageIcon } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod"
import { formSchema } from "./constants";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      prompt: ""
    }
  })

  return (
    <div>
     <Heading
      title="Image Generation"
      description="Turn your prompt into an image"
      icon={ImageIcon}
      iconColor="text-pink-700"
      bgColor="bg-pink-700/10"
      />
      <div className='px-4 lg:px-8'>

      </div>
    </div>
  )
}

export default ConversationPage;
