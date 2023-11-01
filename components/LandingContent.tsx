"use client"
const testimonials = [
 {
      name: "Parag",
      avatar: "P",
      title: "Full stack developer",
      description: "This is the best application I've used!! , One platform with all integrated generations"
 },

 {
      name: "Manish",
      avatar: "M",
      title: "Frontend Developer",
      description: "Too good web app for content creation easily!!"
 },

 {
      name: "Kundan",
      avatar: "K",
      title: "Robotics engineer",
      description: "I have used this web app its help me a lot for my projects in robotics"
 },

 {
      name: "Ram Khartadkar",
      avatar: "R",
      title: "MBA",
      description: "Wether it be content creation, planning of project, this app helped me a lot i give it 5 star rating"
 },

]
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
            Testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {testimonials.map((item)=>(
                  <Card key={item.description} className='bg-[#192339] border-none text-white'>
                        <CardHeader>
                              <CardTitle className='flex items-center gap-x-2'>
                                    <div>
                                          <p className='text-lg'>{item.name}</p>
                                          <p className='text-zinc-400 text-sm'>{item.title}</p>
                                    </div>
                              </CardTitle>
                              <CardContent className='pt-4 px-0'>
                                    {item.description}
                              </CardContent>
                        </CardHeader>
                  </Card>
            ))}
      </div>
    </div>
  )
}

export default LandingContent
