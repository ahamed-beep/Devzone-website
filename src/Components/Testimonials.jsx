"use client"

import { useState } from "react"

function TestimonialCard({ testimonial }) {
  return (
    <div className="w-80 flex-shrink-0 bg-muted/30  rounded-lg shadow-lg">
      <div className="p-6">
        <div className="mb-4">
          <svg className="w-8 h-8 text-primary mb-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
        </div>
        <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-sm font-bold">
            {testimonial.avatar ? (
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
            ) : (
              testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")
            )}
          </div>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
      name: "Gabrielle Williams",
      title: "CEO and Co-founder of ABC Company",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-asian-man-creative-director-Tyq3Mer4xLsdUov31WKD2ypUS0xNhe.png",
    },
    {
      id: 2,
      quote:
        "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
      name: "Samantha Johnson",
      title: "CEO and Co-founder of ABC Company",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-latina-woman-ceo-SLQMX2aSOOd39bKpTbCqFqgZ5aiVq7.png",
    },
    {
      id: 3,
      quote:
        "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
      name: "Isabella Rodriguez",
      title: "CEO and Co-founder of ABC Company",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-man-brand-manager-3fkDTdByR16uCYWAsAxwr1jpyoEnvI.png",
    },
    {
      id: 4,
      quote: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
      name: "Michael Chen",
      title: "Creative Director at XYZ Corp",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-woman-ceo-4rD1SbBpgdJmcmTkpibaYayhVjpBpU.png",
    },
    {
      id: 5,
      quote:
        "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
      name: "Emma Thompson",
      title: "Marketing Manager at DEF Inc",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-woman-executive-eA8g5w2Hd0tFhKHv0oW9gxFLsiS3MY.png",
    },
    {
      id: 6,
      quote:
        "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
      name: "David Wilson",
      title: "Brand Manager at GHI Ltd",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-woman-marketing-manager-s8UjGkDDBnZq03tEZ0Ds2kt3MJaRzp.png",
    },
  ]

  const firstRow = testimonials.slice(0, 3)
  const secondRow = testimonials.slice(3, 6)

  return (
    <section className=" py-10 md:py-16 px-4 overflow-hidden">
      <div className=" w-full md:max-w-7xl md:mx-auto text-center mb-12">
        <h2 className=" text-3xl md:text-4xl font-bold text-foreground mb-4">
          Words of praise from others
          <br />
          about our presence.
        </h2>
      </div>

      <div className="space-y-8">
        <div className="relative">
          <div className="flex gap-6 animate-scroll-left">
            {[...firstRow, ...firstRow].map((testimonial, index) => (
              <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll-right">
            {[...secondRow, ...secondRow].map((testimonial, index) => (
              <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
